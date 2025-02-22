import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AdminRoot from "@/pages/dashboard/admin/AdminRoot";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import ManageOrders from "@/pages/dashboard/admin/ManageOrders";
import ManageProducts from "@/pages/dashboard/admin/ManageProducts";
import ManageUsers from "@/pages/dashboard/admin/ManageUsers";
import Login from "@/pages/public/Login";
import Register from "@/pages/public/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "admin",
        element: <AdminRoot></AdminRoot>,
        children: [
          {
            path: "manage-users",
            element: <ManageUsers />,
          },
          {
            path: "manage-products",
            element: <ManageProducts />,
          },
          {
            path: "manage-orders",
            element: <ManageOrders />,
          },
        ],
      },
      {
        path: "user",
        element: <AdminRoot></AdminRoot>,
        children: [
          {
            path: "manage-users",
            element: <ManageUsers />,
          },
          {
            path: "manage-products",
            element: <ManageProducts />,
          },
          {
            path: "manage-orders",
            element: <ManageOrders />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
