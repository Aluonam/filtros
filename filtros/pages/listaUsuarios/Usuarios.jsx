import React, { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'


const Usuarios = () => {

  const [datosAPI, setDatosAPI] = useState([])
  
  useEffect(() => {
    llamadaAPI()
  }, [])

  const llamadaAPI = async () => {
      const url = `https://randomuser.me/api/?results=100`;
      const llamada = await fetch(url);
      const datos = await llamada.json()
      setDatosAPI(datos.results)
  }
  
    
  return (
    <main className={`${styles.main}`}>
      Usuarios
    </main>
  )
}

export default Usuarios