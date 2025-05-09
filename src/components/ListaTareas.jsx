import { useState } from 'react';
import Tarea from './Tarea';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');

  const agregarTareaAArray = () => {
    if (tarea.trim() !== '' && descripcion.trim() != '' && dia.trim() != '' && mes.trim() != '' && anio.trim() != '' ) {
      const nuevaTarea = {
        nombre: tarea,
        descripcion: descripcion,
        fecha: `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${anio}`
      };

      setTareas([...tareas, nuevaTarea]);
      setTarea('');
      setDescripcion('');
      setDia('');
      setMes('');
      setAnio('');
    }
  };

  return (
    <div className="columna">
      <h1>Lista de Tareas</h1>
      <div className="formulario-tareas">
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <div style={{ display: 'flex', gap: '5px' }}>
          <input
            type="text"
            placeholder="dd"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
            style={{ width: '40px' }}
          />
          <input
            type="text"
            placeholder="mm"
            value={mes}
            onChange={(e) => setMes(e.target.value)}
            style={{ width: '40px' }}
          />
          <input
            type="text"
            placeholder="aaaa"
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
            style={{ width: '60px' }}
          />
        </div>
        <button onClick={agregarTareaAArray}>Agregar</button>
      </div>

      <ul className="lista">
        {tareas.map((elemento, index) => (
          <Tarea
            key={index}
            tareaAnotada={elemento}
            setListaTareas={setTareas}
            listaTareas={tareas}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
