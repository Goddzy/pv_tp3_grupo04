import { useState } from 'react';


const Tarea = (props) => {
  const [realizada, setRealizada] = useState(false);

  const tareaRealizada = () => {
    setRealizada(!realizada);
  };

  const eliminarTarea = (eliminado) => {
    let nuevasTareas = props.listaTareas.filter(e => e !== eliminado);
    props.setListaTareas(nuevasTareas);
  };

  return (
    <li className={`tarea-item ${realizada ? 'realizada' : ''}`} style={{ marginBottom: '10px' }}>
      <div>
        <strong>{props.tareaAnotada.nombre}</strong>
        <p>{props.tareaAnotada.descripcion}</p>
        <small>{props.tareaAnotada.fecha}</small>
      </div>
      <button onClick={tareaRealizada} style={{ marginRight: '5px' }}>
        {realizada ? 'Deshacer' : 'Realizada'}
      </button>
      <button onClick={() => eliminarTarea(props.tareaAnotada)}>
        Eliminar
      </button>
    </li>
  );
};

export default Tarea;
