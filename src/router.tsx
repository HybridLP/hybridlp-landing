
import Home from './pages/home';
import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About ,
  },
  {
    path: "*",
    Component: NotFound ,
  },
]);
export default ()=><RouterProvider router={routes}/>