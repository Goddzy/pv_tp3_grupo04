import { useState } from "react";
import Producto from "./Producto";

function ListaProductos() {
  const [listaProductos, setListaProductos] = useState([]);
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [ivaIncluido, setIvaIncluido] = useState(false);

  const [precioFiltro, setPrecioFiltro] = useState('');
  const [precioFiltroMin, setPrecioFiltroMin] = useState('');
  const [filtroActivo, setFiltroActivo] = useState(false); 
  const [filtroActivoMin, setFiltroActivoMin] = useState(false); 


  console.log(precioFiltroMin)

  const agregarProductoAlArray = () => {
    if (producto.trim() !== '' && precio.trim() !== '') {
      let nuevoPrecio = parseFloat(precio);
      if (ivaIncluido) {
        nuevoPrecio = parseFloat((nuevoPrecio * 1.21).toFixed(2));
      }
      const nuevoProducto = {
        producto: producto,
        precio: nuevoPrecio // Aseguramos que sea número al agregar
      };
      setListaProductos([...listaProductos, nuevoProducto]);
      setProducto('');
      setPrecio('');
    }
  };

  const incluirIva = () => {
    if (listaProductos.length !== 0) {
      const nuevosPrecios = listaProductos.map((prod) => {
        let precioActualizado;
        if (ivaIncluido) { // Si el IVA estaba incluido, lo quitamos para revertir
          precioActualizado = parseFloat((prod.precio / 1.21).toFixed(2));
        } else { // Si no estaba incluido, lo agregamos
          precioActualizado = parseFloat((prod.precio * 1.21).toFixed(2));
        }
        return {
          ...prod,
          precio: precioActualizado
        };
      });
      setListaProductos(nuevosPrecios);
      setIvaIncluido(!ivaIncluido);
    }
  };

  const ordenarArray = () => {
    const arrayOrdenado = [...listaProductos].sort((a, b) => a.precio - b.precio);
    setListaProductos(arrayOrdenado);
  };

  const activarFiltroPrecio = () => {
    if (precioFiltro.trim() !== '' && !isNaN(parseFloat(precioFiltro))) {
      setFiltroActivo(true);
    } else {
      alert("Por favor, ingresa un precio válido para filtrar.");
      setFiltroActivo(false);
      setPrecioFiltro('');
    }
  };

    const activarFiltroPrecioMin = () => {
    if (precioFiltroMin.trim() !== '' && !isNaN(parseFloat(precioFiltroMin))) {
      setFiltroActivoMin(true);
    } else {
      alert("Por favor, ingresa un precio válido para filtrar.");
      setFiltroActivoMin(false);
      setPrecioFiltroMin('')
    }
  };

  const eliminarFiltroPrecio = () => {
    setFiltroActivo(false);
    setPrecioFiltro('');
  };
  
  const eliminarFiltroPrecioMin = () => {
    setFiltroActivoMin(false);
    setPrecioFiltroMin('')
  };

  const productosParaMostrar = listaProductos.filter((p) => {
    const cumpleFiltroMax = filtroActivo ? p.precio <= parseFloat(precioFiltro) : true;
    const cumpleFiltroMin = filtroActivoMin ? p.precio >= parseFloat(precioFiltroMin) : true;
    return cumpleFiltroMax && cumpleFiltroMin;
  });


  return (
    <div className="columna">
      <h1>Lista de Productos</h1>
      <div className="formulario-productos">
        <input type="text" placeholder="Nuevo producto" value={producto} onChange={(e) => setProducto(e.target.value)} />
        <input
          type="number"
          placeholder="Precio correspondiente"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button onClick={agregarProductoAlArray}>Agregar</button>
      </div>

      <div className="filtro-precio" style={{ marginTop: '10px', marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Filtrar por Precio Máximo:</h3>
        <input
          type="number"
          placeholder="Precio máximo..."
          value={precioFiltro}
          onChange={(e) => setPrecioFiltro(e.target.value)}
          disabled={filtroActivo}
        />
        {!filtroActivo ? (
          <button onClick={activarFiltroPrecio} style={{ marginLeft: '5px' }}>Aplicar Filtro</button>
        ) : (
          <button onClick={eliminarFiltroPrecio} style={{ marginLeft: '5px' }}>Eliminar Filtro</button>
        )}
      </div>

            <div className="filtro-precio" style={{ marginTop: '10px', marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Filtrar por Precio Minimo:</h3>
        <input
          type="number"
          placeholder="Precio Minimo..."
          value={precioFiltroMin}
          onChange={(e) => setPrecioFiltroMin(e.target.value)}
          disabled={filtroActivoMin}
        />
        {!filtroActivoMin ? (
          <button onClick={activarFiltroPrecioMin} style={{ marginLeft: '5px' }}>Aplicar Filtro</button>
        ) : (
          <button onClick={eliminarFiltroPrecioMin} style={{ marginLeft: '5px' }}>Eliminar Filtro</button>
        )}
      </div>

      <div className="acciones-productos">
        <button onClick={incluirIva}>
          {ivaIncluido ? 'Quitar IVA' : 'Incluir IVA'}
        </button>
        <button onClick={ordenarArray}>Ordenar por Precio</button>
      </div>

      <h2>{filtroActivo ? `Productos hasta $${precioFiltro}` : 'Todos los Productos'}:</h2>
      {productosParaMostrar.length > 0 ? (
        <ul>
          {productosParaMostrar.map((prod, index) => (
            <Producto key={index} producto={prod} />
          ))}
        </ul>
      ) : (
        <p>No hay productos para mostrar {filtroActivo ? 'con este filtro' : ''}.</p>
      )}
    </div>
  );
}

export default ListaProductos;