import {Component} from 'react';

//PRIMERA FORMA DE DIBUJAR BUCLES
// class DibujosComplejos extends Component{

//     dibujarNumeros = () => {
//         //SI TENEMOS UN BUCLE, VAMOS A VISUALIZAR EL DIBUJO QUE NOS OFRECE COMO RESULTADO
//         // LA FORMA DE REALIZARLO ES ALMACENAR DENTRO DE UNA list TODO EL CONTENIDO HTML
//         //UNA LISTA SE DECLARA COMPO UN ARRAY  lista=[];
//         //Y TIENE UN METODO push()  QUE NOS PERMITE IR AÑADIENDO ELEMENTOS A LA LISTA DE FORMA DINAMICA
//         var lista = [];
//         for ( var i=1; i<=5; i++){
//             lista.push(<li>Número {i}</li>);
//         }
//         return lista;
//     };
//     render() {
//         return (
//             <div>
//                 <h1>Dibujos con bucles </h1>
//                 <ul>
//                 {this.dibujarNumeros()}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default DibujosComplejos;


//SEGUNDA FORMA DE DIBUJAR BUCLES

class DibujosComplejos extends Component{
    //VAMOS A DECLARAR UN ARRAY EN STATE
    //Y LO RECORREMOS DENTRO DE render()
    state = {
        nombres : ["Marcos","Lucas","Marta","Ana","Miguel"]
    };
    insertarNombre = () => {
        //NECESITAMOS CAMBIAR EL STATE 
        // SI DESEAMOS AÑADIR UN VALOR A UN ARRAY UTILIZAMOS (push)
        //QUEREMOS COMPROBAR SI BASTA CON ACCEDER A state Y UTILIZAR PUSH 
        //PARA VISUALIZAR KIS CAMBIOS
        this.state.nombres.push("Alexander");

        //DEBEMOS IGUALAR EL STATE PARA VISUALIZAR CAMBIOS
        this.setState({
            nombres: this.state.nombres
        });

    };
    render() {
        return (
            <div>
                <h1>Dibujos con bucles </h1>
                <button onClick={()=> this.insertarNombre()}>
                    Insertar nombre
                </button>
                {/* SIEMPRE QUE NO SE PASE PARAMETROS */}
                <button onClick={this.insertarNombre}>
                    Insertar nombre
                </button>
                { this.state.nombres.map((name, index)=>{
                    //A DIFERENCIA DEL CODIGO EN METODO AQUI PONDREMOS EL RETURN 
                    //DIRECTO DEL CODIGO QUE DESEEMOS
                    return(<h2>{name}</h2>);
                })}


            </div>
        );
    }
}

export default DibujosComplejos;