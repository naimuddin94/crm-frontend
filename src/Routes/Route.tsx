import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SigninPage from "../pages/SigninPage";
import AddUser from "../pages/User/AddUser";
import ManageUsers from "../pages/User/ManageUsers";
import AddProject from "../pages/Project/AddProject";
import ManageProjects from "../pages/Project/ManageProjects";
import AddCustomer from "../pages/Customer/AddCustomer";
import ManageCustomer from "../pages/Customer/ManageCustomer";
import AddTask from "../pages/Task/AddTask";
import ManageTasks from "../pages/Task/ManageTasks";
import AddExpense from "../pages/Expense/AddExpense";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/add-user",
        element: <AddUser />,
      },
      {
        path: "/user/manage-users",
        element: <ManageUsers />,
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
        path: "/customer/add-customer",
        element: <AddCustomer />,
      },
      {
        path: "/customer/manage-customer",
        element: <ManageCustomer />,
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
    ],
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
]);

export default router;
