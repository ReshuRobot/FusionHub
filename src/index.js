import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
// import BodyContainer from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import BodyContainer from "./components/Body";
import Cart from "./components/Cart";

import LandingPage from "./components/LandingPage";
import TodoApp from "./components/TodoApp";
// import Grocery from "./components/Grocery";



//lazy loading
const Grocery= lazy(()=>
  import("./components/Grocery"))
  const appRouter = createBrowserRouter([


    {
      path: "/",
      element: <LandingPage />,
    },

    {
      path: "/food",
      element: <App />,
      children: [
        {
          path: "", // Remove the leading slash
          element: <BodyContainer />,
        },
        {
          path: "about", // Keep the relative path without a leading slash
          element: <About />,
        },
        {
          path: "contact", // Keep the relative path without a leading slash
          element: <Contact />,
        },
        {
          path: "restaurants/:resId", // Keep the relative path without a leading slash
          element: <RestaurantMenu />,
        },
        {
          path: "grocery", // Keep the relative path without a leading slash
          element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
        },
        {
          path: "cart", // Keep the relative path without a leading slash
          element: <Cart />,
        },
      ],
    },
    {
      path: "/todo",
      element: <TodoApp />,
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
