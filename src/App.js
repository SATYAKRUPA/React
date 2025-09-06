import React from "react";

import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Cart from "./Components/Cart";
import Menu from "./Components/Menu";
//import Grocery from "./Components/Grocery";
import React,{lazy,Suspense} from "react";


const Grocery=lazy(()=>import("./Components/Grocery"));
const App=()=>{
  return  (<div className="App">
           <Header/>  
           <Outlet/>
           </div>);
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
    {
      path:"/",
      element:<Body/>,
    },
      {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  }
  ,
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/menu/:resId",
    element:<Menu/>,
  },
  {
    path:"/grocery",
    element:<Suspense fallback={<h1>Loading....!!</h1>} ><Grocery/></Suspense>,
  }
    ],
    errorElement:<Error/>,
  },
  
])

const root = createRoot(document.getElementById("root"));
//root.render(<App/>);
root.render(<RouterProvider router={appRouter}/>);
