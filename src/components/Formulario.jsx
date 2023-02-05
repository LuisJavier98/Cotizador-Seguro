import React, { Fragment } from 'react'
import { MARCAS, PLANES, YEARS } from '../constants'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'


export default function Formulario() {

  const { datos, handleChangeDatos, error, seterror, cotizarSeguro } = useCotizador()
  const handleSubmit = e => {
    e.preventDefault()
    if (Object.values(datos).includes('')) {
      seterror('Todos los campos son obligatorios')
      return
    }
    seterror('')
    cotizarSeguro()

  }
  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit} >
        <div className='my-5 '>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
          <select value={datos.marca} name="marca" id="" className='w-full p-3 bg-white border border-gray-200' onChange={e => handleChangeDatos(e)}>
            <option value="" disabled>-- Selecciona Marca --</option>
            {MARCAS.map(marca => (<option key={marca.id} value={marca.nombre}>{marca.nombre}</option>))}
          </select>
        </div>
        <div className='my-5 '>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>Año</label>
          <select value={datos.year} name="year" id="" className='w-full p-3 bg-white border border-gray-200' onChange={e => handleChangeDatos(e)}>
            <option value="" disabled>-- Selecciona Año --</option>
            {YEARS.map(year => (<option key={year} id={year} value={year}>{year}</option>))}
          </select>
        </div>
        <div className='my-5 '>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>Elige un plan</label>
          <div className='flex gap-3'>
            {PLANES.map(plan => (
              <Fragment key={plan.id}>
                <label>
                  {plan.nombre}
                </label>
                <input type="radio" name="plan" value={plan.nombre} onChange={e => handleChangeDatos(e)} />
              </Fragment>
            ))}
          </div>
        </div>
        <input type="submit" className='w-full bg-gray-600 hover:bg-gray-700 transition-colors font-bold uppercase text-white cursor-pointer p-3  ' value='Cotizar' />
      </form>
    </>
  )
}
