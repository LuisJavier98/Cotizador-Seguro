import { useCallback, useMemo } from "react"
import useCotizador from "../hooks/useCotizador"

const Resultado = () => {

  const { resultado, datos } = useCotizador()
  const { marca, plan, year } = useMemo(() => datos, [resultado])


  if (resultado == 0) {
    return null
  }
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 front-black text-3xl" >Resumen</h2>
      <p className="my-2">
        <span className="font-bold">
          Marca
        </span>: {marca}
      </p>
      <p className="my-2">
        <span className="font-bold">
          Plan
        </span>: {plan}
      </p>
      <p className="my-2">
        <span className="font-bold">
          Year
        </span>: {year}
      </p>
      <p className="text-2xl my-2">
        <span className="font-bold">
          Total Cotizacion
        </span>: {resultado}
      </p>
    </div>
  )
}
export default Resultado