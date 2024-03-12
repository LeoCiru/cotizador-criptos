function useSelectorMonedas(label, opciones){

    const SelectorMonedas = () => (
        <>
            <label>{label}</label>

            <select>
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

    return [ SelectorMonedas ]
  
}

export default useSelectorMonedas