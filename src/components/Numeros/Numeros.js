import React, { Component } from "react";
import Numero from "./Numero";

//COMPONENTE PADRE 
class Numeros extends Component{

    state = {
        suma: "0",
        numeros: [5,6,7,8]
    };
    //METODO PARA PODER SUMAR NUMEROS DESDE UN COMPONENTE HIJO 
    //NECESITAMOS RECIBIR EL NUMERO DE CADA HIJO
    contarNumeros = (numero) => {
        this.setState({
            suma:  parseInt(numero) + parseInt(this.state.suma)
        });
    };

    insertarNumero = () => {
        var numNuevo = Math.floor(Math.random()* (10 - 1) + 1);
        this.state.numeros.push(numNuevo);
        this.setState({
            numeros: this.state.numeros
        });
    };

    render(){
        return (
            <div>
                <h1 style={{color:"red"}}> 
                    La suma total es: {this.state.suma}
                </h1>
                <button onClick={()=>this.insertarNumero()}>
                    Nuevo número
                </button>
                {this.state.numeros.map((num,index)=>{    
                    return (<Numero numero={num} key={index} contarNumeros={this.contarNumeros}/>);
                })}
            </div>
        );
    }
}

export default Numeros;