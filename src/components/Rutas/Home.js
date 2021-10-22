import React, { Component } from "react";
import logohome from './../../assets/images/home.jpg'; 

class Home extends Component{

    render(){
        return(
            <div>
                <h1> Estoy en casa</h1>
                <img src={logohome}
                style={{width:"150px", height:"150px"}}/>
            </div>
        )
    }
}

export default Home;

