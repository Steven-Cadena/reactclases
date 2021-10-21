import React, { Component } from "react";
import Deporte from "./Deporte";

//COMPONENTE PADRE
class Deportes extends Component{
    //DEBEMOS CREA UN DEPORTE FAVORITO EN STATE 
    //PARA PODER CAMBIARLO AL SELECCIONAR
    state = {
        seleccionado: "",
        //AQUI TENDREMOS UN list  CON TODOS LOS DEPORTES Y 
        //SERA DINAMICOS(pintamos dentro del state) 
        deportes : ["Padel","Petanca","Curling","Futbol","Tenis","Canicas"]
    };
    //TENEMOS EL METODO DEL PARENT  
    mostrarFavorito = (deporteFavorito) =>{
        //TENGO QUE RECIBIR ALGO DEL HIJO ...parametro
        //console.log("Favorito " + deporteFavorito);
        this.setState({
            seleccionado: deporteFavorito,
        });
    };

    insertarDeporte = () => {
        this.state.deportes.push("Poker");
        this.setState({
            deportes: this.state.deportes
        });
    };
    //AQUI TENDREMOS UN list  CON TODOS LOS DEPORTES Y 
    //SERA ESTATICO (NO VA AL STATE) 
    //deportes = ["Padel","Petanca","Curling","Futbol","Tenis","Canicas"];

    render(){
        return(
            <div>
                <h2>
                    Su deporte favorito es:
                    <span style={{color:"red"}}> 
                        {this.state.seleccionado}
                    </span>
                </h2>
                <button onClick= { (this.insertarDeporte) }>
                    Nuevo Deporte
                </button>
                <ul>
                    {this.state.deportes.map((depor,index)=>{
                        return (<Deporte nombre={depor} key={index} mostrarFavorito={this.mostrarFavorito}/>)
                    })}
                </ul>
            </div>
        );
    }
}

export default Deportes; 