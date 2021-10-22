import React, { Component } from 'react'

export default class EjemploSimple extends Component {
    //CREAMO LAS VARIABLES DE REFERENCIA 
    //ESTAS VARIABLES APUNTAN A OBJETOS FORM
    //NO TIENEN EL VALOR DIRECTO DE LA CAJA
    cajanombre = React.createRef();
    cajaedad = React.createRef();


    state = {
        user:null
    }

    recibirDatos = (e) => {
        //AQUI DEBEMOS CORTAR LA PROPAGACION DEL EVENTO
        e.preventDefault();
        //PARA RECUPERAR EL VALUE DE LAS REFERENCIAS SE HACE ASI
        //referencia.current.value
        console.log(this.cajanombre.current.value);
        console.log(this.cajaedad.current.value);
        this.setState({
            user: {
                nombre: this.cajanombre.current.value
                , edad: this.cajaedad.current.value 
            }
        });
    };
    render() {
        return (
            <div>
                <h1>Ejemplo simple formulario</h1>
                {this.state.user && (<div> 
                    <h2 style={{color:"blue"}}>
                        Usuario: {this.state.user.nombre}
                        , Edad: {this.state.user.edad}
                    </h2> 
                    </div>
                )}
                <form onSubmit={this.recibirDatos}>
                    <label>Nombre:</label>
                    <input type='text' ref={this.cajanombre}
                    onChange={this.recibirDatos}/><br/>
                    <label>Edad:</label>
                    <input type='number' ref={this.cajaedad}
                    onChange={this.recibirDatos}/><br/>
                    <button>
                        Enviar datos
                    </button>
                </form>

            </div>
        )
    }
}
