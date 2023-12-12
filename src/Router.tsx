import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { ImageView } from "./components/ImageView";

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
        path: "/gallery/:id",
        element: <ImageView></ImageView>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
