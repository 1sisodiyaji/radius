"use client";

import dynamic from "next/dynamic";

const AdminDashboard = dynamic(() => import("@/components/core/admin/Dashboard"), {
  ssr: false, 
});

const Dashboard = () => {
  return (
    <div>
      <AdminDashboard />
    </div>
  );
};

export default Dashboard;
