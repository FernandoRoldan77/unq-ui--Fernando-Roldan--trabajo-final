import React from 'react';

const Eleccion = (props) => {

    return (

            <div className = "eleccion" onClick={props.elijo}>
                {props.valor.eleccion}
                 <img className={props.urlImagen === "tijera"}
                  src={props.valor.urlImagen} alt="tijera" onClick ={props.valor.eleccion}>
               
                </img> 
            </div>
    )
}

export default Eleccion;