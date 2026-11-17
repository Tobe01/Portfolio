import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "../../data/profile";
import ThemeToggle from "../ui/ThemeToggle";
import Icon from "../ui/Icon";
import Container from "./Container";

const navItems = profile.navigation.flatMap((item) => [
  item,
  ...(item.children ?? []),
]);

function Header({ onToggleTheme, theme }) {
  const location = useLocation();
  const [activeSectionId, setActiveSectionId] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const initials = useMemo(
    () =>
      profile.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [],
  );

  const homeSectionIds = useMemo(
    () =>
      navItems
        .map((item) => item.id)
        .filter((sectionId) => sectionId !== "resume"),
    [],
  );

  const activeRouteId = useMemo(() => {
    const activeRouteItem = navItems.find((item) => {
      const [path, hash] = item.to.split("#");
      return (path || "/") === location.pathname && !hash;
    });

    return activeRouteItem?.id ?? "home";
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return undefined;
    }

    const observedSections = homeSectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    if (!observedSections.length) {
      return undefined;
    }

    const sectionMetrics = new Map();

    const updateActiveSection = () => {
      if (window.scrollY < 64) {
        setActiveSectionId("home");
        return;
      }

      const visibleSections = Array.from(sectionMetrics.entries())
        .filter(([, metrics]) => metrics.isIntersecting)
        .sort(
          (entryA, entryB) =>
            entryB[1].ratio - entryA[1].ratio ||
            entryA[1].topDistance - entryB[1].topDistance,
        );

      if (visibleSections.length) {
        setActiveSectionId(visibleSections[0][0]);
        return;
      }

      const closestSection = observedSections.reduce(
        (closest, sectionElement) => {
          const nextDistance = Math.abs(
            sectionElement.getBoundingClientRect().top,
          );
          if (!closest || nextDistance < closest.distance) {
            return { distance: nextDistance, id: sectionElement.id };
          }
          return closest;
        },
        null,
      );

      if (closestSection?.id) {
        setActiveSectionId(closestSection.id);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionMetrics.set(entry.target.id, {
            isIntersecting: entry.isIntersecting,
            ratio: entry.intersectionRatio,
            topDistance: Math.abs(entry.boundingClientRect.top),
          });
        });
        updateActiveSection();
      },
      {
        rootMargin: "-22% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.45, 0.65, 0.85],
      },
    );

    observedSections.forEach((sectionElement) => {
      observer.observe(sectionElement);
    });

    window.requestAnimationFrame(updateActiveSection);

    return () => observer.disconnect();
  }, [homeSectionIds, location.hash, location.pathname]);

  useEffect(() => {
    if (!isDropdownOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  const isRouteActive = (item) => {
    if (location.pathname === "/") {
      return activeSectionId === item.id;
    }
    return activeRouteId === item.id;
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const renderNavLink = (item, isActive) => (
    <Link
      className={["site-nav__link", isActive ? "is-active" : ""]
        .filter(Boolean)
        .join(" ")}
      onClick={closeMenus}
      to={item.to}
    >
      {item.label}
    </Link>
  );

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link aria-label="Go to home" className="brand" to="/">
          <span className="brand__mark">{initials}</span>
          <span className="brand__text">{profile.role}</span>
        </Link>

        <div className="site-header__controls">
          <ThemeToggle onToggleTheme={onToggleTheme} theme={theme} />
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="menu-toggle"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            type="button"
          >
            <Icon name={isMenuOpen ? "close" : "menu"} size={20} />
          </button>
        </div>

        <nav
          aria-label="Primary"
          className={["site-nav", isMenuOpen ? "is-open" : ""]
            .filter(Boolean)
            .join(" ")}
        >
          <ul className="site-nav__list">
            {profile.navigation.map((item) =>
              item.children ? (
                <li
                  className="site-nav__item--dropdown"
                  key={item.id}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  ref={dropdownRef}
                >
                  <div className="site-nav__parent">
                    {renderNavLink(
                      item,
                      isRouteActive(item) || item.children.some(isRouteActive),
                    )}
                    <button
                      aria-expanded={isDropdownOpen}
                      aria-label={`Toggle ${item.label} menu`}
                      className="site-nav__chevron"
                      onClick={() =>
                        setIsDropdownOpen((currentValue) => !currentValue)
                      }
                      type="button"
                    />
                  </div>
                  <ul
                    className={[
                      "site-nav__dropdown",
                      isDropdownOpen ? "is-open" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {item.children.map((child, index) => (
                      <li key={child.id} style={{ "--item-index": index }}>
                        {renderNavLink(child, isRouteActive(child))}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.id}>
                  {renderNavLink(item, isRouteActive(item))}
                </li>
              ),
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
