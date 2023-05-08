import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ( {
  gastos, 
  setGastoEditar, 
  eliminarGasto,
  filtro,
  gastosFiltrados
}) => {
  return (
    <div className='Listado-gastos contenedor'>
       {/* // Si se encuentra un filto selecciona se intera con filtros */}
       {filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esta categoría'}</h2>
              {gastosFiltrados.map( gasto => (
                <Gasto
                    key = {gasto.id}
                    gasto = {gasto}
                    setGastoEditar = {setGastoEditar}
                    eliminarGasto = {eliminarGasto}
                />    
              ))}
          </>
        ) : ( //Sino se muestran todos los gastos
          <>  
           <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>   
            {gastos.map( gasto => (
              <Gasto
                  key = {gasto.id}
                  gasto = {gasto}
                  setGastoEditar = {setGastoEditar}
                  eliminarGasto = {eliminarGasto}
              />
            ))}
          </> 
        )
      }

    </div>
  )
}

export default ListadoGastos
