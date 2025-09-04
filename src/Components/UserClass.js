import React from "react";

class UserClass extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            count:0,

            userInfo:{
                name:"dummy name",
                bio:"dummy bio",
            },
          
        };
      //  console.log(this.props.name+"Child Constructor");
    }
    async componentDidMount()
    {

       // console.log(this.props.name+"Child componentDidMount");

       const data=await fetch("https://api.github.com/users/satyakrupa");
        const json=await data.json();

        this.setState({
            userInfo:json,
        });
        console.log(json);

        
    }

    componentWillMount(){
     
        console.log("Will Mount");
    }
    render(){
        const {location}=this.props;
        const {count}=this.state;
        const {name,bio,avatar_url}=this.state.userInfo;
       // console.log(this.props.name+"Child Render");
        return (
            <div className="user">
            <h1>count ={count} </h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }} >Count Increase</button>
            <img src={avatar_url}/>
            <h3>Name:{name}</h3>
            <h3>Location:{location} </h3>
            <h3>Contact : satyavanarasi4@gmail.com</h3>
            <p>My bio : {bio}</p>
        </div>
        );
    };
};

export default UserClass;

