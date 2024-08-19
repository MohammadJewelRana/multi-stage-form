import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ViewProducts from "../pages/View/ViewProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <LoadingPage></LoadingPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/view-products",
        element: <ViewProducts></ViewProducts>,
      },
    ],
  },
]);

export default router;
