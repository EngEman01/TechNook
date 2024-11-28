import './App.css'
import Home from './components/Home/Home'
import Layout from './components/Layout';
import AllProducts from './components/Products/AllProducts';
import About from './components/About/About';
import VideoProducts from './components/Products/videosProducts';
import ConditionerProduct from './components/Products/ConditionerProduct';
import GadgetsProducts from './components/Products/GadgetsProducts';
import AppliancesProducts from './components/Products/AppliancesProducts';
import KitchenProducts from './components/Products/KitchenProducts';
import LaptopProducts from './components/Products/LaptopProducts';
import GamingProducts from './components/Products/GamingProducts';
import WarsProducts from './components/Products/WarsProducts';
import ProductPage from './components/Products/ProductPage';
import Contact from './components/Contact/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/product",
        element: <AllProducts />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/Conditioner",
        element: <ConditionerProduct />,
      },
      {
        path: "/videos",
        element: <VideoProducts/>,
      },
      {
        path: "/gadgets",
        element: <GadgetsProducts/>,
      },
      {
        path: "/home-appliances",
        element: <AppliancesProducts/>,
      },
      {
        path: "/kitchen-appliances",
        element: <KitchenProducts/>,
      },
      {
        path: "/pc&laptops",
        element: <LaptopProducts/>,
      },
      {
        path: "/gaming",
        element: <GamingProducts/>,
      },
      {
        path: "/kitchen-wars",
        element: <WarsProducts/>,
      },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
