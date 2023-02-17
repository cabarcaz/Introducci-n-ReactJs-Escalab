import React, { useRef } from 'react'
import s from './style.component.css'

const ContactForm = ({ onAddContact }) => {
  const name = useRef('')
  const email = useRef('')

  function addContact(e) {
    e.preventDefault()

    const newContact = { nombre: name.current.value, email: email.current.value, conectado: true }

    onAddContact(newContact)
    name.current.value = ''
    email.current.value = ''
  }
  return (
    <form onSubmit={addContact} className="contact-component">
      <h2>Añadir contacto: </h2>
      <input ref={name} name="name" placeholder='Nombre contacto' className='form-control mb-2' />
      <input type="email" ref={email} name="email" placeholder='Email contacto' />
      <button onClick={addContact} type="submit" className='submit-button'>Añadir</button>
    </form>
  )
}

export default ContactForm