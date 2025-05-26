
import { useState } from 'react'
import './App.css'


function App() {
  // dentro de un componente podemos tener mas de un estado

  // crear el estado para un contador
  //     estado    función          Estado Inicial
  const [counter, setCounter] = useState(0)

  // estado para almacenar un nombre
  const [email, setEmail] = useState("")
  const [passWord, setPassWord] = useState("")

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter((counter) => counter + 1)} >Incrementar +</button>
      <button onClick={() => setCounter((counter) => counter - 1)}>Decrementar -</button>
      <button onClick={() => setCounter(0)}>Resetear</button>
      <hr />
      <label>email</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>password</label>
      <input type="text" value={passWord} onChange={(e) => setPassWord(e.target.value)} />

    </>
  )
}

export default App
