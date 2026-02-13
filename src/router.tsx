import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/blogs";
import blogPostDetails from "./pages/blog-post-details";
import proBono from "./pages/pro-bono";
import SignupLogin from "./pages/signup-login";
import AboutUs from "./pages/about-us";
import judgements from "./pages/judgements";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfUse from "./pages/terms-of-use";
import Remuneration from "./pages/remuneration";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "remuneration",
        Component: Remuneration,
      },
      {
        path: "terms-of-use",
        Component: TermsOfUse,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "about",
        Component: AboutUs,
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
        path: "blogs/:slug",
        Component: blogPostDetails,
      },
    ],
  },
  {
    path: "/auth",
    Component: SignupLogin,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
export default () => <RouterProvider router={routes} />;
