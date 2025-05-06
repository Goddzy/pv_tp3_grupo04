import { useState } from 'react';
import Tarea from './components/Tarea';
import './styles/style.css'


function App() {

  const [tarea, setTarea] = useState('');
  let [tareas,setTareas] = useState([]);

  const agregarTareaAArray = ()=>{
    if(tarea.trim() !== ''){
      setTareas([...tareas, tarea]);
      setTarea('');
    }
  }

  return (
  <div className="contenedor">
    <h1>Lista de Tareas</h1>

    <div className="formulario">
      <input type="text" placeholder="Nueva tarea" value={tarea} 
      onChange={ (e) => setTarea(e.target.value) }
      />
      <button onClick={agregarTareaAArray} >Agregar</button>
    </div>

    <ul className="lista">
        {tareas.map((elemento, index) => (
           <Tarea key={index} tareaAnotada={elemento} setListaTareas={setTareas} listaTareas={tareas} />
         ))}
    </ul>
  </div>
    )
}

export default App