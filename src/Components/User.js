import {useState} from "react";
const User=(props)=>
{
    const [count]=useState(0);
    const [count2]=useState(1);
    const {name,location}=props;
    return (
        <div className="user">
            <h1>count ={count} </h1>
            <h1>count2 ={count2} </h1>
            <h3>Name:{name} </h3>
            <h3>Location:{location} </h3>
            <h3>Contact : satyavanarasi4@gmail.com</h3>
        </div>
    );
};
export default User;