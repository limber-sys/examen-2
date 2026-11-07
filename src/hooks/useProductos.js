import { useEffect, useState } from "react";
import { fetchProductos } from "../services/fetchProductos";

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargar = async () => {
      try {
        const datos = await fetchProductos();
        setProductos(datos);
      } catch (error) {
        setError("No se pudieron cargar los productos. Revisa tu internet.");
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, []);

  return { productos, cargando, error };
}