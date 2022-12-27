import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [usesearchParamsset] = useSearchParams();
  if (usesearchParamsset.get("password") !== "secret") {
    return <Navigate to="/unauthorized" replace/>
  }
  return children; 
};

export default ProtectedRoute;
