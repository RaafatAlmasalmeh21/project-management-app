import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { ThemeProvider } from './components/ThemeProvider'

// Pages
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ProjectsPage from './pages/ProjectsPage'
import SitesPage from './pages/SitesPage'
import TasksPage from './pages/TasksPage'
import WorkforcePage from './pages/WorkforcePage'
import EquipmentPage from './pages/EquipmentPage'
import ReportsPage from './pages/ReportsPage'
import SettingsPage from './pages/SettingsPage'

// Layout
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Routes>
          {/* Public routes */}
          <Route 
            path="/login" 
            element={!user ? <LoginPage /> : <Navigate to="/dashboard" replace />} 
          />
          
          {/* Protected routes */}
          <Route 
            path="/*" 
            element={user ? (
              <Layout>
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:id/sites" element={<SitesPage />} />
                  <Route path="/sites/:id/tasks" element={<TasksPage />} />
                  <Route path="/workforce" element={<WorkforcePage />} />
                  <Route path="/equipment" element={<EquipmentPage />} />
                  <Route path="/reports" element={<ReportsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )} 
          />
        </Routes>

        {/* Toaster will be added later */}
      </div>
    </ThemeProvider>
  )
}

export default App 