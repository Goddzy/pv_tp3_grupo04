function ListaProductos() {
  return (
    <div className="columna">
      <h1>Lista de Productos</h1>
      <div className="formulario-productos">
        <input type="text" placeholder="Nuevo producto" />
        <input type="text" placeholder="Precio correspondiente" />
        <button>Agregar</button>
        <button>Filtrar</button>
      </div>
      <div className="acciones-productos">
        <button>Incluir IVA</button>
        <button>Ordenar</button>
        <button>Eliminar más barato</button>
      </div>
      <ul>
        <li>azucar $300</li>
        <li>bicicleta $5000</li>
        <li>queso $500</li>
        <li>pan $100</li>
      </ul>
    </div>
  );
}

export default ListaProductos;
