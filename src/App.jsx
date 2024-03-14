import { useEffect, useState } from "react"
import ImagenIzquierda from "./components/ImagenIzquierda"
import Formulario from "./components/Formulario"
import MostrarCotizacion from "./components/MostrarCotizacion"
import Spinner from "./components/Spinner"

function App() {

  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [spinner, setSpinner] = useState(false)
  
  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      
      const {moneda, criptomoneda} = monedas;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const cotizarCriptos = async () => {

        setSpinner(true);

        const llamada = await fetch(url);
        const respuesta = await llamada.json();

        setCotizacion({
          precio: respuesta.DISPLAY[criptomoneda][moneda].PRICE,
          ultimaActualizacion: respuesta.DISPLAY[criptomoneda][moneda].CONVERSIONLASTUPDATE,
          precioMasAlto: respuesta.DISPLAY[criptomoneda][moneda].HIGH24HOUR,
          precioMasBajo: respuesta.DISPLAY[criptomoneda][moneda].LOW24HOUR,
          imagen: respuesta.DISPLAY[criptomoneda][moneda].IMAGEURL
        });

        setSpinner(false)
      }

      cotizarCriptos();
    }
    
  }, [monedas])
  
  return (
    <main>
      <div className="contenedor">
        <ImagenIzquierda/>

        <div>
          <Formulario
            setMonedas={setMonedas}
          />

          {spinner && <Spinner/>}
          {Object.keys(cotizacion).length > 0 && 
          <MostrarCotizacion
            cotizacion={cotizacion}
          />}
        </div>
        
      </div>
    </main>
  )
}

export default App
