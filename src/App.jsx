import ListaProductos from './components/ListaProductos';
import ListaTareas from './components/ListaTareas';
import './styles/style.css';

function App() {
  return (
    <div className="contenedor-principal">
      <ListaProductos/>
      <ListaTareas />
    </div>
  );
}

export default App;
