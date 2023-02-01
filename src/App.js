import { useState } from 'react';
import Puntaje from './components/Puntaje.js'
import Boton from './components/Boton.js'
import './App.css';

function App() {

  const [puntosNosotros, setPuntosNosotros] = useState(0);
  const [puntosEllos, setPuntosEllos] = useState(0)

  const cambiarPuntos = (val, type) => {
    if (type === 'Nosotros') {
      if (puntosNosotros >= 0 && puntosNosotros < 30 && val > 0) {
        setPuntosNosotros(puntosNosotros + 1)
      } else if (puntosNosotros > 0 && puntosNosotros <= 30 && val < 0){
        setPuntosNosotros(puntosNosotros - 1)
      }
    } else {
      if (puntosEllos >= 0 && puntosEllos < 30 && val > 0) {
        setPuntosEllos(puntosEllos + 1)
      } else if (puntosEllos > 0 && puntosEllos <= 30 && val < 0){
        setPuntosEllos(puntosEllos - 1)
      }
    }
  }

  const reiniciarPuntos = () => {
    setPuntosNosotros(0)
    setPuntosEllos(0)
  }

  return (
    <div className="App">
      <div className='anotador-container'>
       
        <div className='equipos-container'>
          <div className='equipo-individual'>
            
            <h1>Nosotros</h1>
      
            <Puntaje numPuntos={puntosNosotros}></Puntaje>

            <div className='botones-container'> 
              <Boton cambiarPuntos={() => { cambiarPuntos(1, 'Nosotros') }}>+</Boton>
              <Boton cambiarPuntos={() => { cambiarPuntos(-1, 'Nosotros') }}>-</Boton>
            </div>

          </div>

          <div className='equipo-individual'>
            <h1>Ellos</h1>
            
            <Puntaje numPuntos={puntosEllos}></Puntaje>
          
            <div className='botones-container'> 
              <Boton cambiarPuntos={() => { cambiarPuntos(1, 'Ellos') }}>+</Boton>
              <Boton cambiarPuntos={() => { cambiarPuntos(-1, 'Ellos') }}>-</Boton>
            </div>
            

          </div>
          
        </div>
        <div className='reinicio-container'>
          <Boton cambiarPuntos={reiniciarPuntos}>Reinicio</Boton>
          <span className='firma'>by Caballou 🐴</span>
        </div> 
      </div>
    </div>
  );
}

export default App;
