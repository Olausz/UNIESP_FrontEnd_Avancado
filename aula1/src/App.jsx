import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'

const App = () => {
  return (
    <div>
      <Adicao num1={4} num2={6} />
      <Subtracao num1={4} num2={6} />
    </div>
  )
}
export default App