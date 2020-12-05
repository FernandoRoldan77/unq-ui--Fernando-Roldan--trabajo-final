import React from 'react'

const Eleccion = (props) => {

    return (

            <div className = "eleccion" onClick={props.elijo}>
                {props.valor.eleccion}
            </div>
    )
}

export default Eleccion