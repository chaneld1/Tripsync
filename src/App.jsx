import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Pages
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import TripWorkspace from './pages/TripWorkspace'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

// Context
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { TripProvider } from './context/TripContext'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TripProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/trip/:tripId" element={<TripWorkspace />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Toaster position="top-right" />
        </TripProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
