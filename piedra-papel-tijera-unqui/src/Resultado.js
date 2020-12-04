import React from 'react'

const Resultado = (props) => {

    let resultadoFinal;
    //Gana el Jugador

    if(props.jugador.ganaContra === props.computadora.eleccion && props.jugador.eleccion) {
                resultadoFinal = <h1>Ganador: Jugador </h1>
        }
        //Gana la computadora   
    else if(props.computadora.ganaContra === props.jugador.eleccion && props.jugador.eleccion) {
                      resultadoFinal = <h1> Ganador : Computadora </h1>
        }
            //Hay empate
            else if(props.jugador.eleccion === props.computadora.eleccion &&
                    props.jugador.eleccion){
                        resultadoFinal = <h1> Empate</h1>
        }

        return(
            <h1>{resultadoFinal}</h1>
        )

}

export default Resultado;