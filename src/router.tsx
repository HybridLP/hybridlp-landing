import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/blogs";
import blogPostDetails from "./pages/blog-post-details";
import proBono from "./pages/pro-bono";
const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "about",
        Component: About,
      },
      {
        path: "",
        Component: About,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "probono",
        Component: proBono,
      },
      {
        path: "blogs/:details",
        Component: blogPostDetails,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
export default () => <RouterProvider router={routes} />;
