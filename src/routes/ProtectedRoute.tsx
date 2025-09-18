// // frontend/src/routes/ProtectedRoute.tsx
// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import type { RootState } from "../app/store";


// const ProtectedRoute = () => {
//   const token = useSelector((state: RootState) => state.auth.token);

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;













// frontend/src/routes/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const ProtectedRoute = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  if (!token) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
