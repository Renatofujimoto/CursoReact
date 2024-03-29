import { createContext,useState } from "react";

export const {CounterContext} = createContext()

export const CounterContextProvider = ({children}) => {

  const [counter, setCounter] = useState(5)

  return(
    <CounterContextProvider value={{counter,setCounter}}>
      {children}
    </CounterContextProvider>
  )
}
