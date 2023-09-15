import React from 'react'
import NavbarE from '../navegacion/NavbarE';
import ComAccesorios from './ComAccesorios';
import './Accesorios.css'

const Accesorios = () => {
  return (
    <div className="equipo-container">
        <NavbarE/>
      <ComAccesorios />
    </div>
  )
}
export default Accesorios;