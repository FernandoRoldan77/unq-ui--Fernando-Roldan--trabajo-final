import React ,{useState} from 'react';
import './App.css';
import Eleccion from './Eleccion';
import Resultado from './Resultado';
import tijera from '../src/imagenes/tijera.png'
import papel from '../src/imagenes/papel.png'
import piedra from '../src/imagenes/piedra.png'
import spock from '../src/imagenes/spock.png'
import lagarto from '../src/imagenes/lagartija.png'


function App() {

  const [eleccionDelJugador, setEleccionDelJugador] = useState( {eleccion: "", ganaContra:[]});
  const [eleccionDeLaComputadora, setEleccionDeLaComputadora] = useState( {eleccion: "", ganaContra:[]});

  const elegirOpcionDeJugador = (event) =>{
      const eleccionDelJugador = elecciones.find(e => e.eleccion === event.target.textContent);
      setEleccionDelJugador(eleccionDelJugador);
      eleccionesDeLaComputadora();
  }

  const eleccionesDeLaComputadora = () =>{
    const eleccionComputadora = elecciones[Math.floor(Math.random() * elecciones.length)] ;

    setEleccionDeLaComputadora(eleccionComputadora);


  }
  const elecciones = [
    {
      eleccion: "Tijera",
      ganaContra:["Papel" ,"Lagarto"],
      urlImagen: tijera
      
    },
    
    {
      eleccion: "Papel",
      ganaContra:["Piedra", "Spock"],
      urlImagen: papel
    },
    
    {
      eleccion: "Piedra",
      ganaContra:["Lagarto", "Tijera"],
      urlImagen: piedra
    },
    
    {
      eleccion: "Lagarto",
      ganaContra:["Spock", "Papel"],
      urlImagen: lagarto
    },
    {

      eleccion: "Spock",
      ganaContra:["Tijera", "Piedra"],
      urlImagen: spock
    },

  ]

  return (

    <div className="App">
       
     
      <main>
     
        <section>
          <div className = "jugador"> Jugador </div>
          <div className= "eleccion">{eleccionDelJugador.eleccion}</div>
        </section>
        <section>
         <div className = "computadora"> Computadora</div>
         <div className = "eleccion">{eleccionDeLaComputadora.eleccion}</div>
        </section>
        <Resultado jugador = {eleccionDelJugador} computadora= {eleccionDeLaComputadora}/> 
      </main>
      <div className = "elecciones">
        {
          elecciones.map((e,index) => <Eleccion 
                                       elijo ={elegirOpcionDeJugador}
                                       valor ={elecciones[index]}
                                      />)
        }
        
      </div>
    </div>
  );
}

export default App;






