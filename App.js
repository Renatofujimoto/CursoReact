//components
//Styles css
import { useState } from 'react'
import './App.css'

import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManagerData from './components/ManagerData'
import ShowUserName from './components/ShowUserName'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './desafios/UserDetails'

function App() {
  const name = 'Fujimoto'

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Vermelha', newCar: true, km: 0 },
    { id: 1, brand: 'Volvo', color: 'Preto', newCar: false, km: 1000 },
    { id: 1, brand: 'Mercedes', color: 'Vermelha', newCar: false, km: 150 },
    { id: 1, brand: 'BMW', color: 'Branca', newCar: false, km: 1800 }
  ]

  function showMessage() {
    console.log('Esse é o evento pai')
  }

  const [message, setMessage] = useState('')

  const handleMessage = msg => {
    setMessage(msg)
  }

  const user = [
    { id: 1, name: 'Renato', job: 'Programador', age: 28 },
    { id: 2, name: 'Bruno', job: 'NOC', age: 26 },
    { id: 3, name: 'Patricia', job: 'Adminstratora', age: 25 },
    { id: 4, name: 'João', job: 'Estudante', age: 17 }
  ]
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <ManagerData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} />
      {/* destructuring */}
      <CarDetails brand="BMW" km={10000} color="Branca" newCar={false} />
      {/* destructuring */}
      <CarDetails brand="Volvo" color="Preto" km={0} newCar={true} />
      <CarDetails brand="VW" color="Vermelho" km={500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map(car => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propsFragment="teste" />
      {/* children */}
      <Container>
        <p>Este é o children</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/*desafio */}
      {user.map(user => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}
    </div>
  )
}

export default App
