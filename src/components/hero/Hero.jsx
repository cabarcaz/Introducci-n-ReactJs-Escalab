import React, { useState } from 'react'
import styled from 'styled-components'
import Contact from '../contact/Contact'
import ContactForm from '../contactForm/ContactForm'

const Hero = () => {
  const defaultContact = [
    { nombre: 'Jose', email: 'jose@email.com', conectado: true },
    { nombre: 'Maria', email: 'maria@email.com', conectado: true },
  ]
  const [nuevoContacto, setNuevoContacto] = useState(defaultContact)

  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto)
    const tempContact = [...nuevoContacto]

    tempContact[index].estado = !tempContact[index].estado
    setNuevoContacto(tempContact)
  }
  function remove(contacto) {
    const index = nuevoContacto.indexOf(contacto)
    const tempContact = [...nuevoContacto]
    tempContact.splice(index, 1)
    setNuevoContacto(tempContact)
  }

  function addContact(contacto) {
    const tempContact = [...nuevoContacto]
    tempContact.push(contacto)
    setNuevoContacto(tempContact)
  }

  const H1 = styled.h1`
  text-align: center;
  `
  const Card = styled.section`
    display: flex;
    flex-wrap: wrap;
  `

  return (
    <div>
      <H1>Contactos</H1>

      <Card>
        {nuevoContacto.map((contacto, index) => {
          return (
            <Contact key={index} contacto={contacto} changeState={changeState} remove={remove} />
          )
        })}
      </Card>
      <ContactForm onAddContact={addContact} />

    </div>
  )
}

export default Hero
