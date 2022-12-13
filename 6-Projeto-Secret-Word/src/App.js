import './App.css'
import MyForm from './components/MyForm'

const App = () => {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: 'Renato', email: 'renatofujimoto2@gmail.com' }} />
    </div>
  )
}

export default App
