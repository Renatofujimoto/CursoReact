import { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState(true)

  const [name, setName] = useState('Renato')

  return (
    <div>
      <h2>Isso será exibido?</h2>
      {x && <p>Se x for true, sim</p>}
      <h2>If ternário / Render Ternário</h2>
      {name === 'Renato' ? (
        <div>
          <p>O nome é Renato</p>
        </div>
      ) : (
        <div>Nome não encontrado</div>
      )}
      <button onClick={() => setName('Fujimoto')}>Troque o nome</button>
    </div>
  )
}

export default ConditionalRender
