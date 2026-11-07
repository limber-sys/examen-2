import { useState } from "react";
import { useProductos } from "./hooks/useProductos";
import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

function TiendaApp() {
  const { productos, cargando, error } = useProductos();

  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito((actual) => {
      const existe = actual.some(
        (item) => item.id === producto.id
      );

      if (existe) return actual;

      return [...actual, producto];
    });
  };

  const quitarProducto = (id) => {
    setCarrito((actual) =>
      actual.filter((producto) => producto.id !== id)
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  if (cargando) {
    return <h2 className="mensaje">Cargando...</h2>;
  }

  if (error) {
    return <h2 className="mensaje error">{error}</h2>;
  }

  return (
    <main className="contenedor">
      <header>
        <h1>🛍️ Mini Tienda</h1>
        <p>Bienvenido a nuestra tienda online</p>
      </header>

      <div className="contenido">
        <ProductoList
          productos={productos}
          carrito={carrito}
          onAgregar={agregarProducto}
        />

        <CarritoPanel
          carrito={carrito}
          onQuitar={quitarProducto}
          onVaciar={vaciarCarrito}
        />
      </div>
    </main>
  );
}

export default TiendaApp;