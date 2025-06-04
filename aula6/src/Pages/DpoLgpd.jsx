import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DpoLgpd = () => {
  const [ dpoLgpd, setDpoLgpd] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/dpolgpd")//request
    .then(response => setDpoLgpd(response.data))//resposta
    .catch(error => console.error("Erro ao carregar a lista de DPO LGPD: ", error))
  }, [])


  return (
    <div>
    <h1> NOTÍCIAS </h1>
      <ul>
        {
          dpoLgpd.map((dpolgpd) => (
          <li key={dpolgpd.id}>
            <h2>{dpolgpd.titulo}</h2>
            <h3>{dpolgpd.texto}</h3>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default DpoLgpd