import React, { Component } from "react";
import logotelevision from './../../assets/images/tv.jpg';

class Television extends Component{

    render(){
        return(
            <div>
                <h1> Estoy en televisión</h1>
                <img src={logotelevision}
                style={{width:"150px", height:"150px"}}/>
            </div>
        )
    }
}
export default Television;