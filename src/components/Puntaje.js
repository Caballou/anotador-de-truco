import React from 'react';
import '../stylesheets/Puntaje.css'

function Puntaje({ numPuntos }){
  return (
    <div className='puntos'>
      {
      numPuntos !== 0 ?
      <img className='fernet' src={`./anotador-de-truco/img/fernet-${numPuntos}.png`} alt='fernecitos'></img>
      :
      ''
      }
    </div>
  )
}

export default Puntaje;
