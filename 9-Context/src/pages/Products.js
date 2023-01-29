import { useContext } from 'react'

const {CounterContext} from "../context/CounterContext";

const Products = () => {
  
  const {counter} = useContext(CounterContext);
  
  return (
    <div>
      <h1>Lista de produtos </h1>
      <p>Valor contador: {counter} </p>
    </div>
  )
}

export default Products
