import React from 'react'

const Eleccion = (props) => {

    return (

            <div className = "eleccion">
                {props.valor.eleccion}
            </div>
    )
}

export default Eleccion