import React, { Component } from "react";

//COMPONENTE HIJO
class Numero extends Component{

    contadorNumero = () => {
        var num = this.props.numero;
        this.props.contarNumeros(num);
    };
    render(){
        return(
            <React.Fragment>

                <h2> Número:{this.props.numero}</h2>
                <button onClick={() => this.contadorNumero()}>
                    Sumar {this.props.numero}
                </button>
            </React.Fragment>
        );
    };
}

export default Numero;