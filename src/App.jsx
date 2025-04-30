import React, { useState } from "react";
import './index.css'; // Importar el archivo de estilos

const App = () => {
    const [productos, setProductos] = useState([]); // Lista de productos
    const [nombre, setNombre] = useState(""); // Nombre del producto
    const [precio, setPrecio] = useState(""); // Precio del producto

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (nombre && precio) {
            const nuevoProducto = { nombre, precio: parseFloat(precio).toFixed(2) };
            setProductos([...productos, nuevoProducto]); // Agregar el nuevo producto a la lista
            setNombre(""); // Limpiar el campo de nombre
            setPrecio(""); // Limpiar el campo de precio
        }
    };

    return (
        <div className="contenedor">
            <h1 className="titulo">Gestión de Productos</h1>
            <form onSubmit={manejarEnvio} className="formulario">
                <label htmlFor="nombre">Nombre del producto:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <label htmlFor="precio">Precio del producto:</label>
                <input
                    type="number"
                    id="precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required
                />
                <button type="submit">Agregar Producto</button>
            </form>
            <h2 className="subtitulo">Lista de Productos</h2>
            <ul className="lista">
                {productos.map((producto, indice) => (
                    <li key={indice} className="elemento-lista">
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;


