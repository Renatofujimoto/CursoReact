import { useState } from 'react'
// o hook useState renderiza o componente e muda o estado

const ManagerData = () => {
  let someData = 10

  const [number, setNumber] = useState(15)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Váriavel</button>
      </div>

      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o estado</button>
      </div>
    </div>
  )
}

export default ManagerData
