import { useState } from 'react';
import './components/button'

export function App({valorInicial}){
  console.log({valorInicial})

const [contador, setContador] = useState(valorInicial)

  return (
    <div>
      <h1> Valor: <strong>{contador} </strong>  </h1>
      <button> 
        aumentaContador={
          () =>{
            setContador(contador +1)
          }
        }


      </button>


    </div>
  )
}





export default App;
