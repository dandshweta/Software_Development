import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AMyCartHOC from "./Day-18/2.WithHOC/A";
import { UserConfigBest } from "./Day-21/3.userConfig";
import { APIWithUseMemo } from "./Day-21/4.asyncWithUseMemo";

const router = createBrowserRouter([
  {
    path: "/cart",
    element: <AMyCartHOC />,
  },
  {
    path: "/",
    element: <APIWithUseMemo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
