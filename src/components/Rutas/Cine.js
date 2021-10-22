import React, { Component } from "react";
import logocine from './../../assets/images/cine.jpg';

class Cine extends Component{

    render(){
        return(
            <div>
                <h1> Estoy en cine</h1>
                <img src={logocine}
                style={{width:"150px", height:"150px"}}/>
            </div>
        )
    }
}

export default Cine;