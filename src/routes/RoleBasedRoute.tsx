// // frontend/src/routes/RoleBasedRoute.tsx
// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import type { RootState } from "../app/store";

// interface RoleBasedRouteProps {
//   allowedRoles: string[];
// }

// const RoleBasedRoute = ({ allowedRoles }: RoleBasedRouteProps) => {
//   const { token, user } = useSelector((state: RootState) => state.auth);

//   // 1️⃣ Check if token exists
//   if (!token) return <Navigate to="/login" replace />;

//   // 2️⃣ Check if user exists and role is allowed
//   if (!user || !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

//   return <Outlet />;
// };

// export default RoleBasedRoute;











// frontend/src/routes/RoleBasedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

interface RoleBasedRouteProps {
  allowedRoles: string[];
}

const RoleBasedRoute = ({ allowedRoles }: RoleBasedRouteProps) => {
  const { token, user } = useSelector((state: RootState) => state.auth);

  if (!token) return <Navigate to="/login" replace />;
  if (!user || !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default RoleBasedRoute;
