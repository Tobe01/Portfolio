import { useState } from "react";

const STORAGE_KEY = "cookie-consent";

const readConsent = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

function CookieConsent() {
  const [isOpen, setIsOpen] = useState(() => !readConsent());

  const handleChoice = (choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Storage unavailable: the banner still closes for this session
    }
    setIsOpen(false);
  };

  return (
    <div
      aria-hidden={!isOpen}
      aria-label="Cookie consent"
      className={["cookie-consent", isOpen ? "is-open" : ""]
        .filter(Boolean)
        .join(" ")}
      role="dialog"
    >
      <p className="cookie-consent__text">
        This site uses cookies to remember your preferences, like your theme.
        You can accept all or keep essential cookies only.
      </p>
      <div className="cookie-consent__actions">
        <button
          className="button button--secondary"
          onClick={() => handleChoice("rejected")}
          type="button"
        >
          Essential only
        </button>
        <button
          className="button button--primary"
          onClick={() => handleChoice("accepted")}
          type="button"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
