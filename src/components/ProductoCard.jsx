function ProductoCard({ producto, agregado, onAgregar }) {
  return (
    <div className={`producto-card ${agregado ? "agregado" : ""}`}>
      <img src={producto.thumbnail} alt={producto.title} />

      <h3>{producto.title}</h3>

      <p className="categoria">{producto.category}</p>

      <p className="precio">
        $ {producto.price.toFixed(2)}
      </p>

      <button
        disabled={agregado}
        onClick={() => onAgregar(producto)}
      >
        {agregado ? "Agregado ✓" : "Agregar al carrito"}
      </button>
    </div>
  );
}

export default ProductoCard;