import React, { Component } from 'react'

export default class TablaMultiplicarSelect extends Component {

    optionSeleccionado = React.createRef();

    state= {
        filas:[]
    }

    //TENDREMOS UN METODO PARA EL FORMULARIO
    mostrarTabla = (e) => {
        e.preventDefault();

        var numero = parseInt(this.optionSeleccionado.current.value);
        var datos = [];
        for(var i=1; i<=10; i++){
            var multi = numero * i;
            datos.push(<tr key={i}>
                <td>{numero + "*" + i}</td>
                <td>{multi}</td>
            </tr>)
        }
        this.setState({
            filas:datos
        });
    };

    //METODO PARA CARGAR LOS OPTION AL INICIO
    generarOption = () => {
        var options = [];
        for (var i=1; i<=5; i++){
            var aleat = Math.round((Math.random()*50)+1);
            options.push(<option key={i} value={aleat}>
                {aleat}
            </option>);
        }
        //POR SI NO UTILIZAMO STATE // si utilizamos un click usamos state
        return options;
    };
    render() {
        return (
            <div>
                <h1>Tabla Multiplicar from select </h1>
                {/* aqui va sin parentesis por que se ejecuta cuando hacemos la acción */}
                <form onSubmit={this.mostrarTabla}>
                    <label>Seleccione un número:</label>
                    <select ref={this.optionSeleccionado}>
                        {/* hay que poner los parentesis para que lo pinte ya */}
                        {this.generarOption()}
                    </select>
                    <button>
                        Mostrar la tabla
                    </button>
                </form>
                <hr/>
                <table border="2">
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filas}
                    </tbody>
                </table>
            </div>
        )
    }
}
