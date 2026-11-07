import ProductoCard from "./ProductoCard";

function ProductoList({ productos, carrito, onAgregar }) {
  return (
    <section>
      <h2>Productos disponibles</h2>

      <div className="productos-grid">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            agregado={carrito.some(
              (item) => item.id === producto.id
            )}
            onAgregar={onAgregar}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductoList;