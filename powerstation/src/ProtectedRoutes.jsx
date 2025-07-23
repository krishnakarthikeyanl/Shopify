import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children, allowedRole }) {
  const userRole = localStorage.getItem("userRole");
  if (userRole !== allowedRole) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoutes;
