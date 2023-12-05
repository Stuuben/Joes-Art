import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
