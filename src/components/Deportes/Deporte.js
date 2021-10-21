import React, { Component } from "react";


//COMPONENTE HIJO
class Deporte extends Component{




    render(){
        return (
            <React.Fragment>
                <li style={{color:"blue"}}>
                    {this.props.nombre}
                </li>
            </React.Fragment>
        );

    };
}


export default Deporte;