import { LOGO_URL } from "../utils/contents";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

  const [btnName,setbtnName]=useState(["Login"]);

  const onlineStatus=useOnlineStatus();
  console.log("Header called");
   useEffect(
    ()=>{
      console.log("useEffect called");
    },[btnName]
   );
  return (
    <div className="flex justify-between sm:bg-yellow-50 lg:bg-green-50 bg-pink-200 p-1.5 m-2 shadow-2xl ">
       <div className="logo">
         <img className="max-w-24 " src={LOGO_URL}/>
       </div> 

       <div className="flex items-center">
         <ul className="flex p-4 m-4 ">
            <li className="px-4" >Online Status:{onlineStatus?"🟢":"🔴"} </li>
            <li className="px-4"> <Link to="/"> Home </Link></li>
            <li className="px-4">
              <Link to="/about"> About Us </Link> </li>
            <li className="px-4">
              <Link to="/contact">Contact </Link> </li>
            <li className="px-4"><Link to="/cart">Cart</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4">
              <button
              className=" bg-pink-500 rounded-lg px-3 py-1" 
              onClick={()=>{
                btnName==="Login"
                ? setbtnName("Logout")
                : setbtnName("Login");
              } }>{btnName}</button>
            </li>
         </ul>
       </div>
    
    </div>);
};

export default Header;