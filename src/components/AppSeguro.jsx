import useCotizador from "../hooks/useCotizador";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Spinner from "./Spinner";

export default function AppSeguro() {
  const { cargando } = useCotizador()
  return (
    <>

      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-bold mb-6" >
          Cotizador de Seguro de Auto
        </h1>
        <main className="bg-white md:w-2/3 lg:2/4 mx-auto shadow rounded-lg p-10">
          <Formulario />
          {cargando ? <Spinner /> : <Resultado />}

        </main>

      </header>
    </>
  )
}
