import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // dentro de un componente podemos tener mas de un estado
  // crear el estado para un contador
  //     estado    función          Estado Inicial
  const [counter, setCounter] = useState(0);

  // estado para almacenar un nombre
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  // Hook que permite ejecutar código de manera controlada después de montar el componente
  useEffect(()=>{
    console.log("Ejecutando código como efecto")
    if (counter === 10) {
      alert("Contador llegó a 10!!!")
    }
    },[counter])

    // Cuando no exite el array de dependencias se ejecuta en cada cambio de estado o renderizado
    // array de dependencias --> la instrucción de cuando se tiene que ejecutar el código
    // []  ---> el useEffect se ejecuta sólo cuando el componente se monta por primera vez
    // [counter] --> el useEffect se ejecuta cuando el componente se monta y cuando hay cambio el la dependencia

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Incrementar +
      </button>
      <button onClick={() => setCounter((counter) => counter - 1)}>
        Decrementar -
      </button>
      <button onClick={() => setCounter(0)}>Resetear</button>
      <hr />
      <label>email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>password</label>
      <input
        type="text"
        value={passWord}
        onChange={(e) => setPassWord(e.target.value)}
      />
    </>
  );
}

export default App;
