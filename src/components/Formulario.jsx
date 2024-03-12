import useSelectorMonedas from "../hooks/useSelectorMonedas"
import { monedas } from "../data"
import { useState, useEffect } from "react"

function Formulario() {
  const [criptos, setCriptos] = useState([]);


  useEffect(() => {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
    async function cargarApi() {
      const llamadaApi = await fetch(url);
      const respuesta = await llamadaApi.json();

      const arrayCriptos = respuesta.Data.map(cripto => {
        const objetoCripto = {
          id : cripto.CoinInfo.Name,
          nombre : cripto.CoinInfo.FullName
        }
        return objetoCripto;
      })
      
      setCriptos(arrayCriptos);
    }

    cargarApi()
  }, [])

  const [ SelectorMonedas ] = useSelectorMonedas('Elige tu moneda', monedas)
  const [ SelectorCriptos ] = useSelectorMonedas('Elige tu criptomoneda', criptos)

  
  return (
    <div className="contenedorForm">
      <h1 className="titulo">Cotiza Criptomonedas al Instante</h1>

      <SelectorMonedas/>
      <SelectorCriptos/>
    </div>

    )
}

export default Formulario