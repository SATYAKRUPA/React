import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props)
    {
        super(props);
        //console.log("Parent Constructor");

     
        };
    
    componentDidMount()
    {
        console.log("Parent componentDidMount");
        
    };
    render()
    {
        
       // console.log("Parent Render");
        return (
        <div>
            <h1>
                ABOUT ME
            </h1>
            <UserContext.Consumer>
            {({loggedInUser})=>
            (
                    <h1 className="font-bold text-xl"> {loggedInUser} </h1>
            )}
            
            </UserContext.Consumer>
           <h2>This is my REACT JOURNEY</h2>
            <h2>I am</h2>
            <UserClass  location={"east godavari (class)"}/>
          
        </div>
    ); 
    };
}

/*const About=()=>{
    return (
        <div>
            <h1>
                ABOUT ME
            </h1>
            <h2>This is my REACT JOURNEY</h2>
            <h2>I am</h2>
            <UserClass name={"satya (class)"} location={"east godavari (class)"}/>
        </div>
    );
};*/

export default About;