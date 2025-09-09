import {useState,useEffect} from "react";

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
import UserContext from "./utils/UserContext";


const Grocery=lazy(()=>import("./Components/Grocery"));
const App=()=>{
  const [userInfo,setUserInfo]=useState();

  useEffect(()=>{
    const data={
      name:"satya krupa",
    };
    setUserInfo(data.name);
  },[])
  return  (
        <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
          <div className="App">

         {/*<UserContext.Provider value={{loggedInUser:"Vanarasi Satya Krupa"}}>*/}
           <Header/>  
          {/*</UserContext.Provider>*/}


           <Outlet/>
           </div>
           </UserContext.Provider>
          );
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
