import { useState } from "react";

const Contador = () => {

  let [numeros, setNumeros] = useState(0);
  return (
    <div>
        <h2>Contador</h2>
        <h3>{numeros}</h3>
        <button onClick={()=>setNumeros(numeros+1)} >+1</button>
    </div>
  );
};

export default Contador;