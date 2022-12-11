const Events = () => {
  const handleMyEvent = e => {
    console.log(e)
    console.log('ativou o evento!')
  }

  const renderSomething = x => {
    if (x) {
      return <h1>Renderizando isso</h1>
    } else {
      return <h1>Também posso renderizar isso!</h1>
    }
  }

  return (
    <div>
      {/* este é o evento */}
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      {/* lógica do evento */}
      <div>
        <button onClick={() => console.log('Clicou!')}>
          Clique aqui também!
        </button>
        <button
          onClick={() => {
            if (true) {
              console.log('Isso não devia existir')
            }
          }}
        >
          Clique aqui, por favor!
        </button>
      </div>

      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events
