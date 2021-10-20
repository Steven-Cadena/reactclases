//DEBEMOS IMPORTAR SIEMPRE {Component} CON JSX
import {Component} from 'react';

//TAMBIEN PODEMOS UTILIZAR function con 
//SINTAXIS DE JavaScript PARA SEPARAR CODIGO 
//LOGICAMENTE, EN ESTA FUNCION NO PODEMOS 
//UTILIZAR NADA DE LA CLASE
function miFuncion(){
    console.log("Soy una función fuera de la clase");
}

class Contador extends Component{
    //ZONA DE DECLARACION DE ELEMENTOS DE LA CLASE
    //PARA DECLARAR VARIABLES O METODOS NO SE UTILIZA NI var, ni const  NI NADA
    //VARIABLE A NIVEL DE CLASE (this)
    numero = 1;
    //METODO A NIVEL DE CLASE (this)
    incrementarContador = () => {
        console.log("Contador:" + this.numero);
        this.numero++;
    };

    //PODEMOS UTILIZAR VARIABLES DE ESTADO Y MODIFICARLAS CUANDO DESEEMOS (DIBUJO)
    //SI DESEEAMOS CREAR UNA VARIABLE DE ESTADO DESDE EL INCIO (NO EN UN BUTTON)
    //SE UTILIZA state DE LA CLASE, CON state DE LA CLASE PRIMERO DECLARAMOS LAS 
    //VARIABLES DE ESTADO Y LUEGO PODEMOS MODIFICARLAS CON EL METODO setState 
    // state = {variable1: valor1, variable2:valor2 };

    //ASIGNAMOS UN VALOR CONSTANTE

    //state = { valor: 1};
    //PERO PODEMOS UTILIZAR props

    state = {valor: parseInt(this.props.Inicio) };
    //CREAMOS UN METODO PARA CAMBIAR EL VALOR 
    incrementarvalor = () => {
        //AQUI LO UNICO QUE DEBEMNOS HACER ES CAMBIAR EL ESTADO Y LA VARIABLE valor
        this.setState({
            valor: this.state.valor + 1
        });
    };
    render(){
        //ESTE CODIGO SE ACTUALIZA AL INICIO Y AL CAMBIAR CUALQUIER STATE
        //ES IGUAL A UTILIZAR function
        var valor = 14;
        const miMetodoRender = () =>{
            valor += 1;
            console.log("Soy un metodo dentro de render " + valor);
        }
        return(

        <div>
            <h1>Primer component JSX</h1>
            <h2 style={{color:"blue"}}>
                Inicio: {this.props.Inicio}
            </h2>
            <h2 style={{color:"red"}}>
                Variable estado: {this.state.valor}
            </h2>
            {/* Si estamos utilizando METODOS de CLASE 
            PODEMOS LLAMARLA CON OTRA SINTAXIS MAS FACIL */}
            <button onClick = {this.incrementarvalor}>
                Incrementar variable de estado
            </button>
            <button onClick={()=>{
                // SI EL METODO ESTÁ EN RENDER LA LLAMADA SE REALIZA COMO SIEMPRE
                miMetodoRender();
                miFuncion();
                //LOS METODOS Y ELEMENTOS DE CLAE SIEMPRE DEBEN LLEVAR this
                this.incrementarContador();
            }}>
                Pulsa y haz algo
            </button>
        </div>
        );
    }
}

export default Contador;
