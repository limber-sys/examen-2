function CarritoPanel({ carrito, onQuitar, onVaciar }) {
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.price,
    0
  );

  return (
    <aside className="carrito">
      <h2>🛒 Mi carrito ({carrito.length})</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div className="carrito-item" key={producto.id}>
              <div>
                <h4>{producto.title}</h4>
                <p>$ {producto.price.toFixed(2)}</p>
              </div>

              <button
                className="btn-quitar"
                onClick={() => onQuitar(producto.id)}
              >
                Quitar
              </button>
            </div>
          ))}

          <button className="btn-vaciar" onClick={onVaciar}>
            Vaciar carrito
          </button>
        </>
      )}

      <div className="total">
        <strong>Total:</strong>
        <strong>$ {total.toFixed(2)}</strong>
      </div>
    </aside>
  );
}

export default CarritoPanel;