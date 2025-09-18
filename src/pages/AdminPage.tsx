import { Outlet } from "react-router-dom";

import AdminPanel from "../features/admin/AdminPanel";

const AdminPage = () => {
  return (
    <div className="p-6 space-y-8 min-h-screen bg-gray-50">
 
      <AdminPanel />
        <Outlet />
    </div>
  );
};

export default AdminPage;

