import React, { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incrementaContador () {
        setContador(contador + 1)
    }
    
    function decrementarContador () {
        setContador(contador - 1)
    }

  return (
    <div>
        <h1>Contador com useState</h1><br/>
        <button onClick={incrementaContador}>Incrementar contador</button><br/>
        <button onClick={decrementarContador}>Decrementar contador</button><br/>
        <h1>O Contador esta em: {contador}</h1>
    </div>
  )
}

export default HookContador