import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
 
 
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
  
    ],
  },
]);

export default router;
