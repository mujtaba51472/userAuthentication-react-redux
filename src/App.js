import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './sections/dashboard/Dashboard';
import { Login } from './sections/auth/login'; // Update the import
import Register from './sections/auth/register/Register';
import { ProtectedRoute } from './guard/ProtectedRoute';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.authUser.isAuthenticated);
  console.log('appcomp', isAuthenticated)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login isAuthenticated={isAuthenticated } />} /> {/* Remove the isAuthenticated prop */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
