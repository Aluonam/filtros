import React from 'react'

const FiltrosUsuarios = ({setDatosUsuario}) => {


    const handleMujeres = () => {
        setDatosUsuario((valorActual)=>valorActual.filter((elemActual)=> elemActual.gender==="female"))
    }

    const handleHombres = () => {
        setDatosUsuario((valorActual)=>valorActual.filter((elemActual)=> elemActual.gender==="male"))
    }


  return (
    <>
    <button onClick={()=>{handleMujeres()}}>Mujeres</button>
    <button onClick={()=>{handleHombres()}}>Hombres</button>
    </>
  )
}

export default FiltrosUsuarios