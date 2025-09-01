import { LOGO_URL } from "../utils/contents";
import {useState} from "react";
const Header=()=>{

  const [btnName,setbtnName]=useState(["Login"]);


  return (
    <div className="header">
       <div className="logo">
         <img className="image" src={LOGO_URL}/>
       </div>

       <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
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