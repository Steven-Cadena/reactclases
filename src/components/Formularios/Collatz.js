import React, { Component } from 'react'

export default class Collatz extends Component {
    cajacollatz= React.createRef();

    state = {
        collatz: []
    };
    
    //esto para pintarlo con MAP
    mostrarCollatz = (e) => {
        e.preventDefault();
        var datos = [];
        var numero = parseInt(this.cajacollatz.current.value);
        datos.push(numero);
        while (numero !=1){
            if(numero%2==0){
                numero = numero / 2;
            }else{
                numero = numero * 3 +1;
            }
            datos.push(numero);
        }
        this.setState({collatz:datos});
    }


    //esto para pintarlo directamente
    // mostrarCollatz = (e) => {
    //     e.preventDefault();
    //     var datos = [];
    //     var contador= 1;
    //     var numero = parseInt(this.cajacollatz.current.value);
    //     datos.push(<li key={contador}>{numero}</li>);

    //     while (numero !=1){
    //         if(numero%2==0){
    //             numero = numero / 2;
    //         }else{
    //             numero = numero * 3 +1;
    //         }
    //         contador++;
    //         datos.push(<li key={contador}>{numero}</li>);
    //     }
    //     this.setState({collatz:datos});
    // }

    render() {
        return (
            <div>
                <h1> PRACTICA COLLATZ FORMULARIOS</h1>

                <form onSubmit={this.mostrarCollatz}>
                    <label> Introduce un número: </label>
                    <input type="number" ref={this.cajacollatz} />
                    <button>
                        Enviar número
                    </button>
                </form>
                <hr/>
                <ul>
                {/* esto para que lo haga directamente 
                {this.state.collatz} */}
                {/* esto para que lo haga con un map */}
                {this.state.collatz.map((num,index)=>{
                    return (<li key={index}> {num} </li>)
                })} 
                </ul>
            </div>
        )
    }
}
