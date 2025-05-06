import { useState } from 'react';
import React from 'react';

const Tarea = (props) => {

  const [realizada, setRealizada] = useState(false);

  const tareaRealizada = ()=>{
    setRealizada(!realizada);
  }

  const eliminarTarea = (eliminado)=>{

    let nuevasTareas = props.listaTareas.filter (e => e!=eliminado);

    props.setListaTareas(nuevasTareas);

  }

  return (
    <li>
        <span className={realizada ? 'realizada' : ''}>{props.tareaAnotada}</span>
        <button onClick={tareaRealizada}>Realizada</button>
        <button onClick={()=>{eliminarTarea(props.tareaAnotada)}}>Eliminar</button>
    </li>
  );
};

export default Tarea;