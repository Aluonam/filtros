import React, { useState } from 'react'

const Contador = () => {

    const [cuenta, setCuenta] = useState(0)

  return (
    <>
    {cuenta}
    <br></br>
    <button onClick={()=>{setCuenta(cuenta-1)}}>-</button>
    <button onClick={()=>{setCuenta(cuenta+1)}}>+</button>
    </>
  )
}

export default Contador