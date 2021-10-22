import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    cajanumero = React.createRef();
    state = {
        tabla: []
        , numero: 0
    }

    mostrarTabla = (e) => {
        e.preventDefault();
        var numero = parseInt(this.cajanumero.current.value);
        this.setState({
            numero:numero
        });
        //console.log(numero);
        var tablaRellena = [];
        for(var i=1; i<=10; i++){
            var resultado = numero * i;
            tablaRellena.push(resultado);
            //console.log(tablaRellena);
        }
        this.setState({
            tabla:tablaRellena
        })
    };

    render() {
        return (
            <div>
                <h1>Tabla de multiplicar</h1>
                <form onSubmit={this.mostrarTabla}>
                    <label>Introduce un número:</label> 
                    <input type="number" ref={this.cajanumero}/>
                    <button>
                        Tabla multiplicar
                    </button>
                </form>
                <ul>
                {this.state.tabla.map((num,index)=>{
                    return (<li key={index}> {this.state.numero} * {index + 1} = {num} </li>);
                })}
                </ul>
            </div>
        )
    }
}
