import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function SiteLayout({ onToggleTheme, theme }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header onToggleTheme={onToggleTheme} theme={theme} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default SiteLayout
