import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={10} />
      <Subtracao num1={2} num2={10} />
      <Multiplicacao num1={2} num2={10} />
      <Divisao num1={2} num2={10} />
    </div>
  )
}
export default App