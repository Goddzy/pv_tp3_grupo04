import { useState } from "react";
import Producto from "./Producto";

function ListaProductos() {
  const [listaProductos, setListaProductos] = useState([]);
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [ivaIncluido, setIvaIncluido] = useState(false);

  const agregarProductoAlArray = () => {
    if (producto.trim() !== '' && precio.trim() !== '') {

      let nuevoPrecio = parseFloat(precio);

    // Si el IVA está incluido, aplicamos el IVA al precio
    if (ivaIncluido) {
      nuevoPrecio = parseFloat((nuevoPrecio * 1.21).toFixed(2));
    }

      const nuevoProducto = {
        producto: producto,
        precio: parseFloat(nuevoPrecio)
      };
      setListaProductos([...listaProductos, nuevoProducto]);
      setProducto('');
      setPrecio('');
    }
  };

  const incluirIva = () => {
    if (listaProductos.length !== 0){
      let nuevoPrecio;
    const nuevosPrecios = listaProductos.map((producto) => {
      if(ivaIncluido){
        nuevoPrecio = Math.round(producto.precio/1.21);
      }else
        nuevoPrecio = Math.round(producto.precio * 1.21);

      return {
        producto: producto.producto,
        precio: nuevoPrecio
      };
    })

    setListaProductos(nuevosPrecios);
    setIvaIncluido(!ivaIncluido);
    }
  };

  return (
    <div className="columna">
      <h1>Lista de Productos</h1>
      <div className="formulario-productos">
        <input type="text" placeholder="Nuevo producto" value={producto} onChange={(e) => setProducto(e.target.value)} />
        <input type="text" placeholder="Precio correspondiente" value={precio} onChange={(e) => setPrecio(e.target.value)} />

        <button onClick={agregarProductoAlArray}>Agregar</button>
        <button>Filtrar</button>
      </div>
      <div className="acciones-productos">
        <button onClick={incluirIva}>
          {ivaIncluido ? 'Quitar IVA' : 'Incluir IVA'}
        </button>
        <button>Ordenar</button>
        <button>Eliminar más barato</button>
      </div>
      <ul>
        {listaProductos.map((producto, index) => (
          <Producto key={index} producto={producto} />
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;
