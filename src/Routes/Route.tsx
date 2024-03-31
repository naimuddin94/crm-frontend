import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import AddCustomer from "../pages/Customer/AddCustomer";
import CustomerDetails from "../pages/Customer/CustomerDetails";
import ManageCustomer from "../pages/Customer/ManageCustomer";
import AddExpense from "../pages/Expense/AddExpense";
import ManageExpense from "../pages/Expense/ManageExpense";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AddProject from "../pages/Project/AddProject";
import ManageProjects from "../pages/Project/ManageProjects";
import SigninPage from "../pages/SigninPage";
import AddTask from "../pages/Task/AddTask";
import ManageTasks from "../pages/Task/ManageTasks";
import AddUser from "../pages/User/AddUser";
import ManageUsers from "../pages/User/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import ProtectByRole from "./ProtectByRole";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/add-user",
        element: (
          <ProtectByRole role="Admin">
            <AddUser />
          </ProtectByRole>
        ),
      },
      {
        path: "/user/manage-users",
        element: (
          <ProtectByRole role="Admin">
            <ManageUsers />
          </ProtectByRole>
        ),
      },

      {
        path: "/update-user/:id",
        element: (
          <ProtectByRole role="Admin">
            <AddUser />
          </ProtectByRole>
        ),
      },
      {
        path: "/project/add-project",
        element: <AddProject />,
      },
      {
        path: "/project/manage-project",
        element: <ManageProjects />,
      },
      {
        path: "/update-project/:id",
        element: <AddProject />,
      },
      {
        path: "/customer/add-customer",
        element: <AddCustomer />,
      },
      {
        path: "/customer/manage-customer",
        element: <ManageCustomer />,
      },
      {
        path: "/customer-details/:customerId",
        element: <CustomerDetails />,
      },
      {
        path: "/update-customer/:id",
        element: <AddCustomer />,
      },
      {
        path: "/task/add-task",
        element: <AddTask />,
      },
      {
        path: "/task/manage-task",
        element: <ManageTasks />,
      },
      {
        path: "/expenses/add-expenses",
        element: <AddExpense />,
      },
      {
        path: "/expenses/manage-expenses",
        element: <ManageExpense />,
      },
      {
        path: "update-expense/:id",
        element: <AddExpense />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
]);

export default router;
