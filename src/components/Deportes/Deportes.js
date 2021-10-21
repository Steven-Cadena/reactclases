import React, { Component } from "react";
import Deporte from "./Deporte";

//COMPONENTE PADRE
class Deportes extends Component{

    //AQUI TENDREMOS UN list  CON TODOS LOS DEPORTES Y 
    //SERA ESTATICO (NO VA AL STATE) 
    deportes = ["Padel","Petanca","Curling","Futbol","Tenis","Canicas"];

    render(){
        return(
            <div>
                <ul>
                    {this.deportes.map((depor,index)=>{
                        return (<Deporte nombre={depor} key={index}/>)
                    })}
                </ul>
            </div>
        );
    }
}

export default Deportes; 