function MostrarCotizacion({cotizacion}) {
    const {precio, ultimaActualizacion, precioMasBajo, precioMasAlto, imagen} = cotizacion
  return (
        <article className="cotizacion">
            <div className="imagenCripto">
                <img src={`https://www.cryptocompare.com/${imagen}`} alt="Imagen Cripto"/>
            </div>
            
            <div className="cotizacion-info">
                <p><span>Precio actual:</span> {precio}</p>
                <p><span>Precio más bajo hoy:</span> {precioMasBajo}</p>
                <p><span>Precio más alto hoy:</span> {precioMasAlto}</p>
                <p><span>Última actualización:</span> {ultimaActualizacion}</p>
            </div>
        </article>
  )
}

export default MostrarCotizacion