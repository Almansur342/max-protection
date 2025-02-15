import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Services from "../pages/Services";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'contact',
      element:<Contact/>
    },
    {
      path:'product',
      element:<Product/>
    },
    {
      path:'services',
      element:<Services/>
    },
    ]
  },
]);

export default router;