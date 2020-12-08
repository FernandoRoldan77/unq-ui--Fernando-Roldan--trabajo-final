import React from 'react';

const Resultado = (props) => {
        let resultadoFinal;


        if (props.jugador.ganaContra.includes(props.computadora.eleccion) && !props.computadora.ganaContra.includes(props.jugador.eleccion)) {

                resultadoFinal = <h1> Felicidades Jugador/a, derrotaste a una computadora  </h1>

        } else if (props.computadora.ganaContra.includes(props.jugador.eleccion) && !props.jugador.ganaContra.includes(props.computadora.eleccion)) {
                resultadoFinal = <h1> Felicidades Computadora, derrotaste a un/una human@ </h1>

        } else if (props.computadora.eleccion && props.jugador.eleccion) {
                resultadoFinal = <h1> Sus habilidades estan equilibradas, se decide un empate</h1>

        }

        return (
                <h1>Aca vas a poder saber el resultado de este epico duelo:{resultadoFinal}</h1>
        )

}

export default Resultado;