import React ,{useState} from 'react';
import './App.css';
import Eleccion from './Eleccion';

function App() {

  const [eleccionDelJugador, setEleccionDelJugador] = useState("");
  const [eleccionDeLaComputadora, setEleccionDeLaComputadora] = useState("");

  const elegirOpcionDeJugador =(event) =>{
      setEleccionDelJugador(event.target.textContent);
  }
  const elecciones = [
    {
      eleccion: "Tijera",
      ganaContra:"Papel, Lagarto"
    },
    
    {
      eleccion: "Papel",
      ganaContra:"Piedra, Spock"
    },
    
    {
      eleccion: "Piedra",
      ganaContra:"Lagarto, Tijera"
    },
    
    {
      eleccion: "Lagarto",
      ganaContra:"Spock, Papel"
    },
    {

      eleccion: "Spock",
      ganaContra:"Tijera, Piedra"
    },

  ]

  return (
    <div className="App">
      <main>
        <section>
          <div className = "Jugador"> Jugador </div>
          <div className= "eleccion">{eleccionDelJugador}</div>
        </section>
        <section></section>
      
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






