import React, { useState } from 'react'

const HookQuina = () => {

    const [sorteado, setSorteado] = useState()
    const [listaDeSorteados, setListaDeSorteados] = useState([])
    
        function sortearNumero () {
            if (listaDeSorteados.length < 5) {
                let numeroSorteado = Math.floor(Math.random() * 80) + 1
                setSorteado(numeroSorteado)
                setListaDeSorteados([...listaDeSorteados, numeroSorteado])
            }else {
                alert("Já temos 5 numeros sorteados")
            }
            
        }

  return (
    <div>
    
        <h1>Sorteador de Quina em React :D</h1><br/>
        <button onClick={sortearNumero}>Sortear de numero</button><br/>
        <h1>ultimo numero sorteado: {sorteado}</h1>
        <h1>Sorteados: {listaDeSorteados.join(" - ")}</h1>

    </div>
  )
}

export default HookQuina