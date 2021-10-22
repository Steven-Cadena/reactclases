import React, { Component } from "react";
import logomusica from './../../assets/images/musica.jpg';

class Musica extends Component{

    render(){
        return(
            <div>
                <h1> Estoy en musica</h1>
                <img src={logomusica}
                style={{width:"150px", height:"150px"}}/>
            </div>
        )
    }
}

export default Musica;