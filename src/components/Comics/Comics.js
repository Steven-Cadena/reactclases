import React, { Component } from "react";
import Comic from "./Comic";
import "./Comics.css";

//COMPONENTE PADRE 
class Comics extends Component{
    //CREAMOS UNA VARIABLE STATE PARA ALMACENAR LOS OBJETOS COMIC
    state = {
        comics: [
            {
              titulo: "Spiderman",
              imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              descripcion: "Hombre araña"
            },
            {
              titulo: "Wolverine",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              descripcion: "Lobezno"
            },
            {
              titulo: "Guardianes de la Galaxia",
              imagen:
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              descripcion: "Yo soy Groot"
            },
            {
              titulo: "Avengers",
              imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              descripcion: "Los Vengadores"
            },
            {
              titulo: "Spawn",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Al Simmons"
            },
            {
              titulo: "Batman",
              imagen:
                "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
              descripcion: "Murcielago"
            }
      ], favorito : null
    };

    seleccionarFavorito = (comic) => {
        this.setState({
            favorito:comic
        });
    }

    eliminarComic = (index) => {
        //splice()  RECIBE DOS PARAMETROS 
        //1) INDICE A ELIMINAR 
        //2) NUMERO DE ELEMENTOS A ELIMINAR
        this.state.comics.splice(index,1);
        this.setState({
            comics:this.state.comics
        });
    }

    modificarComic = (index) => {
        var titulo = document.getElementById("cajatitulo").value;
        var imagen = document.getElementById("cajaimagen").value;
        var descripcion = document.getElementById("cajadescripcion").value;
        var comic = this.state.comics[index];
        comic.titulo = titulo;
        comic.imagen = imagen;
        comic.descripcion = descripcion;
        this.setState({
          comics: this.state.comics
      });
    };

    insertarComic = () => {
        var titulo = document.getElementById("cajatitulo").value;
        var imagen = document.getElementById("cajaimagen").value;
        var descripcion = document.getElementById("cajadescripcion").value;
        var comic = {
            titulo:titulo,
            imagen:imagen,
            descripcion:descripcion
        };
        this.state.comics.push(comic);
        this.setState({
            comics: this.state.comics
        });
    };
    render(){
        return(
            <div>
                <h1 style={{color:"blue"}}>
                    Ejemplo Comics Objetos/colecciones
                </h1>
                {/* NO PODEMOS UTILIZAR FORMULARIOS EN REACT */}
                <label>Titulo</label>
                <input type="text" id="cajatitulo"/> <br/>
                <label>Imagen</label>
                <input type="text" id="cajaimagen"/> <br/>
                <label>Descripción</label>
                <input type="text" id="cajadescripcion"/> <br/>
                <button onClick={this.insertarComic}>
                    Nuevo comic
                </button>
                <hr/>
                {/* ESTO ES UN IF  */}
                {this.state.favorito && 
                (<div style={{backgroundColor:"lightgreen"}}>
                    <h1> {this.state.favorito.titulo}</h1>
                    <img src={this.state.favorito.imagen}/>
                </div>    
                )}
                <hr/>
                {this.state.comics.map((comic,index) => {
                    return (<Comic comic={comic} key={index} index={index} 
                      seleccionarFavorito={this.seleccionarFavorito} 
                      eliminarComic={this.eliminarComic} 
                      modificarComic={this.modificarComic}/>);
                })}
            </div>
        );
    }
}

export default Comics;