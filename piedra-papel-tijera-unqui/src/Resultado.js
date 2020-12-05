import React from 'react';

const Resultado = (props) => {
    let resultadoFinal;
   

        if(props.jugador.ganaContra === props.computadora.eleccion && props.jugador.eleccion) {
                resultadoFinal = <h1> Ganador: Jugador </h1>

        } else if(props.computadora.ganaContra === props.jugador.eleccion && props.jugador.eleccion) {
                resultadoFinal = <h1> Ganador : Computadora </h1>

        } else if(props.jugador.eleccion === props.computadora.eleccion && props.jugador.eleccion){
                resultadoFinal = <h1> Empate</h1>
        }

        return (
                <h1>{resultadoFinal}</h1>
        )

}

        export default Resultado;