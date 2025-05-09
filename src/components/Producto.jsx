import React from 'react';

const Producto = (props) => {
  return (
    <>
      <li>{props.producto.producto} ${props.producto.precio}</li>
    </>
  );
};

export default Producto;