import { useState } from "react"

function useSelectorMonedas(label, opciones){

    const [state, setState] = useState('');

    const SelectorMonedas = () => (
        <>
            <label>{label}</label>

            <select
                value={state}
                onChange={e => setState(e.target.value)}
                >
                <option value="">--Selecciona una moneda--</option>
    
                {opciones.map(opcion => (
                    <option 
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </select> 
        </>
    )

    return [ SelectorMonedas, state ]
  
}

export default useSelectorMonedas