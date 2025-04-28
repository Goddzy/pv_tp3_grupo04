import TituloPrincipal from "./components/TituloPrincipal"
import Contador from "./components/Contador"
//En react se usan componentes, la mayoría de veces se utilizan los funcionales. Existen los componentes funcionales y componentes de clases (ya no se usan casi)
function App() {
  return (
      <>
        <TituloPrincipal/>
        <hr />
        <Contador/>
      </>
    )
}

export default App
