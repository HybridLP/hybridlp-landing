import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/blogs";
import blogPostDetails from "./pages/blog-post-details";
import proBono from "./pages/pro-bono";
import SignupLogin from "./pages/signup-login"
import judgements from "./pages/judgements";
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
        path: "judgements",
        Component: judgements,
      },
      {
        path: "blogs/:details",
        Component: blogPostDetails,
      },
    ],
  },
  {
    path:"/signup-login",
 Component: SignupLogin
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
export default () => <RouterProvider router={routes} />;
