import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'

const App = () => {
  return (
    <div>
      <Adicao num1={10} num2={2} />
      <Subtracao num1={10} num2={2} />
      <Multiplicacao num1={10} num2={2} />
      <Divisao num1={10} num2={2} />
    </div>
  )
}
export default App