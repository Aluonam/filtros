import React from 'react'

const Tabla = ({datosAPI}) => {


    const tablaUsuarios = datosAPI.map((elementoActual)=>{
        return(
           <tr >
            <td>{elementoActual.name.first} {elementoActual.name.last}</td>
            <td>{elementoActual.dob.age}</td>
            <td>{elementoActual.registered.date}</td>
            <td>Botón detalles</td>
           </tr>
        )
    })


  return (
    <>
    <div>Tabla</div>
    
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Fecha de registro</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {tablaUsuarios}
                </tbody>
                
           </table>
    </>
    
  )
}

export default Tabla