import React from 'react';

const Eleccion = (props) => {

    return (

            <div className = "eleccion">
                {props.valor.eleccion}
                 <img
                  src={props.valor.urlImagen}  alt= {props.valor.eleccion} onClick ={props.elijo}>
               
                </img> 
            </div>
    )
}

export default Eleccion;