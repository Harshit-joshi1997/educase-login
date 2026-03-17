import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MobileContainer from './components/MobileContainer';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { useAuthStore } from './store/authStore';

// Protective wrapper for authenticated routes
const ProtectedRoute = ({ children }) => {
  const currentUser = useAuthStore((state) => state.currentUser);
  if (!currentUser) return <Navigate to="/login" replace />;
  return children;
};

// Wrapper to redirect active users from login/register pages
const PublicRoute = ({ children }) => {
  const currentUser = useAuthStore((state) => state.currentUser);
  if (currentUser) return <Navigate to="/profile" replace />;
  return children;
};

function App() {
  return (
    <Router>
      <MobileContainer>
        <Routes>
          <Route path="/" element={<PublicRoute><Welcome /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MobileContainer>
    </Router>
  );
}

export default App;
