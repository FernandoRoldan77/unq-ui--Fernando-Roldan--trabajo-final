
import './App.css';
import Eleccion from './Eleccion';

function App() {
  const elecciones = [
    {
      eleccion: "Tijera",
      ganaContra:"Papel"
    },
    {
      eleccion: "Tijera",
      ganaContra: "Lagarto"
    },
    {
      eleccion: "Papel",
      ganaContra:"Piedra"
    },
    {
      eleccion: "Papel",
      ganaContra:"Spock"
    },
    {
      eleccion: "Piedra",
      ganaContra:"Lagarto"
    },
    {
      eleccion: "Piedra",
      ganaContra:"Tijera"
    },
    {
      eleccion: "Lagarto",
      ganaContra:"Spock"
    },
    {
      eleccion: "Lagarto",
      ganaContra:"Papel"
    },
    {
      eleccion: "Spock",
      ganaContra:"Tijera"
    },
    {
      eleccion: "Spock",
      ganaContra:"Piedra"
    },
  ]

  return (
    <div className="App">
      <div className = "elecciones">
        {
          elecciones.map((e,index) => <Eleccion 
                                       valor ={elecciones[index]}
                                      />)
        }
      </div>
    </div>
  );
}

export default App;






