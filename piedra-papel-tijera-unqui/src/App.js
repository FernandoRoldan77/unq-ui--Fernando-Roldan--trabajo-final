import React ,{useState} from 'react';
import './App.css';
import Eleccion from './Eleccion';
import Resultado from './Resultado';

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
      ganaContra:["Papel" ,"Lagarto"]
    },
    
    {
      eleccion: "Papel",
      ganaContra:["Piedra", "Spock"]
    },
    
    {
      eleccion: "Piedra",
      ganaContra:["Lagarto", "Tijera"]
    },
    
    {
      eleccion: "Lagarto",
      ganaContra:["Spock", "Papel"]
    },
    {

      eleccion: "Spock",
      ganaContra:["Tijera", "Piedra"]
    },

  ]

  return (

    <div className="App">
       
     
      <main>
      <Resultado jugador = {eleccionDelJugador} computadora= {eleccionDeLaComputadora}/> 
        <section>
          <div className = "jugador"> Jugador </div>
          <div className= "eleccion">{eleccionDelJugador.eleccion}</div>
        </section>
        <section>
         <div className = "computadora"> Computadora</div>
         <div className = "eleccion">{eleccionDeLaComputadora.eleccion}</div>
        </section>
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






