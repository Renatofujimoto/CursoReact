import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <h1>Formularios React</h1>
      <MyForm
        user={{
          name: 'Renato Shigueo Fujimoto',
          email: 'renatofujimoto2@gmail.com'
        }}
      />
    </div>
  )
}

export default App
