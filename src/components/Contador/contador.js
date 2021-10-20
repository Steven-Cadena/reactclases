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
            <button onClick={()=>{
                // SI EL METODO ESTÁ EN RENDER LA LLAMADA SE REALIZA COMO SIEMPRE
                miMetodoRender();
                miFuncion();
            }}>
                Pulsa y haz algo
            </button>
        </div>
        );
    }
}

export default Contador;
