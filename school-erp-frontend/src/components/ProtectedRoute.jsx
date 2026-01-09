import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute({ allowedRole, children }) {
  const { user } = useUser();

  if (!user) return <Navigate to="/login" />;
  if (user.role !== allowedRole) return <Navigate to="/login" />;

  return children;
}
