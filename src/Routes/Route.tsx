import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SigninPage from "../pages/SigninPage";

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
    ],
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
]);

export default router;
