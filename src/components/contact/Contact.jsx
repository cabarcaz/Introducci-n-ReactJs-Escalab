import React from 'react'
import s from './style.component.css'

const Contact = ({ contacto, changeState, remove }) => {
  return (
    <div className='contact-component'>
      <h2>{contacto.nombre}</h2>
      <span>{contacto.email}</span>

      <button style={{ backgroundColor: contacto.estado ? 'green' : 'red' }}
        className="state-button"
        onClick={() => {
        changeState(contacto)
        }}>
          {contacto.estado ? 'Conectado' : 'Desconectado'}
        </button>
        <button className='remove-button' onClick={() => remove(contacto)}>Borrar</button>
    </div>
  )
}

export default Contact
