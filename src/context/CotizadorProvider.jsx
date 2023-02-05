import { createContext, useState } from "react";
import { calcularPlan, formatearDinero, obtenerDiferenciaMarca, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {
  const [error, seterror] = useState('')
  const [resultado, setresultado] = useState(0)
  const [cargando, setcargando] = useState(false)
  const [datos, setdatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const handleChangeDatos = e => {
    setdatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }
  const cotizarSeguro = () => {
    let resultado = 2000
    const diferencia = obtenerDiferenciaYear(datos.year)
    resultado -= ((diferencia * 3) * resultado) / 100
    const diferenciaMarca = obtenerDiferenciaMarca()[`${datos.marca}`]
    resultado += resultado * diferenciaMarca
    const diferenciaPlan = calcularPlan()[`${datos.plan}`]
    resultado += diferenciaPlan * resultado
    resultado = formatearDinero(resultado)

    setcargando(true)
    setTimeout(() => {
      setresultado(resultado)
      setcargando(false)
    }, 3000);
  }
  return (
    <CotizadorContext.Provider value={{
      datos,
      handleChangeDatos,
      error,
      seterror,
      cotizarSeguro,
      resultado,
      cargando
    }}>
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}
export default CotizadorContext