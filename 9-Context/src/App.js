import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import NavBar from './components/NavBar'



function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<About/>}/>
          <Route path='/' element={<Products/>}/>

        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
