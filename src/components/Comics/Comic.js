import React, { Component } from "react";

//COMPONENTE HIJO
class Comic extends Component{

    render(){
        return(
            <React.Fragment>
                <h1 style={{color:"red"}}>
                    {this.props.comic.titulo}
                </h1>
                <button onClick={() => {
                    var seleccionado = this.props.comic;
                    this.props.seleccionarFavorito(seleccionado);
                }}>
                    Seleccionar favorito
                </button>
                <button onClick={() => {
                    var index = this.props.index;
                    this.props.eliminarComic(index);
                }} style={{backgroundColor:"red", color:"white"}}>
                    Eliminar comic
                </button>
                <button onClick={() => {
                    var index = this.props.index;
                    this.props.modificarComic(index);
                }} style={{backgroundColor:"blue", color:"white"}}>
                    Modificar comic
                </button>
                <h1 style={{color:"orange"}}>
                    {this.props.comic.descripcion}
                </h1>
                <img src={this.props.comic.imagen}/>
            </React.Fragment>
        );
    }
}

export default Comic;