
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import ScrollToHash from './routes/ScrollToHash'
import useTheme from './hooks/useTheme'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ArticlesPage from './pages/ArticlesPage'
import SpeakingPage from './pages/SpeakingPage'
import ResumePage from './pages/ResumePage'
import NotFoundPage from './pages/NotFoundPage'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route
          element={<SiteLayout onToggleTheme={toggleTheme} theme={theme} />}
        >
          <Route element={<HomePage />} path="/" />
          <Route element={<ProjectsPage />} path="/projects" />
          <Route element={<ArticlesPage />} path="/articles" />
          <Route element={<SpeakingPage />} path="/speaking" />
          <Route element={<ResumePage />} path="/resume" />
          <Route element={<NotFoundPage />} path="*" />
        </Route>
      </Routes>
      <ToastContainer
        autoClose={2400}
        bodyClassName="app-toast__body"
        closeOnClick
        hideProgressBar
        newestOnTop
        pauseOnHover
        position="bottom-right"
        theme={theme === 'dark' ? 'dark' : 'light'}
        toastClassName="app-toast"
      />
    </>
  )
}

export default App
