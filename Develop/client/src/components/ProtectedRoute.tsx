import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!Auth.loggedIn()) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child components
  return <>{children}</>;
};

export default ProtectedRoute;