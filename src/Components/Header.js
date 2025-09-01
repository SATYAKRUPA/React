import { LOGO_URL } from "../utils/contents";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";

const Header=()=>{

  const [btnName,setbtnName]=useState(["Login"]);
  console.log("Header called");
   useEffect(
    ()=>{
      console.log("useEffect called");
    },[btnName]
   );
  return (
    <div className="header">
       <div className="logo">
         <img className="image" src={LOGO_URL}/>
       </div>

       <div className="nav-items">
         <ul>
            <li> <Link to="/"> Home </Link></li>
            <li>
              <Link to="/about"> About Us </Link> </li>
            <li>
              <Link to="/contact">Contact </Link> </li>
            <li><Link to="/cart">Cart</Link></li>
            <li>
              <button
              className="login" 
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