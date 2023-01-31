import React from 'react';
import '../stylesheets/Boton.css'

function Boton(props) {

  return (
    <div className={`${props.children === '+' || props.children === '-' ? 'boton-puntos' : 'boton-reinicio'}`}>
      <button onClick={props.cambiarPuntos}>
        {props.children}
      </button>
    </div>
  )
}

export default Boton;