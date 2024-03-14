import { useEffect, useState } from "react";
import { monedas } from "../data";
import useSelectorMonedas from "../hooks/useSelectorMonedas";
import Error from "./Error";

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

  const [ SelectorMonedas, moneda ] = useSelectorMonedas('Elige tu moneda', monedas)
  const [ SelectorCriptos, criptomoneda ] = useSelectorMonedas('Elige tu criptomoneda', criptos)

  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Enviando...")

    if (moneda == "" || criptomoneda == "") {
      setError(true);
      return
    }

    setError(false);
  }

  
  return (
    <div className="contenedorForm">
      <h1 className="titulo">Cotiza Criptomonedas al Instante</h1>

    {error && <Error/>}
      <form
        onSubmit={handleSubmit}
      >
        <SelectorMonedas/>
        <SelectorCriptos/>

        <input 
          type="submit"
          value="COTIZAR"
        />
      </form>
    </div>

    )
}

export default Formulario