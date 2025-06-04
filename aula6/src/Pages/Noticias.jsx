import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Noticias = () => {

  const [noticias, setNoticias] = useState ([])

  useEffect(() => {
    axios.get("http://localhost:3000/noticias")//request
    .then(response => setNoticias(response.data))//resposta
    .catch(error => console.error("Erro ao carregar a lista de notícias: ", error))
  }, [])

  return (
    <div>

       <h1>NOTÍCIAS</h1>
      <ul>
        {
          noticias.map((noticia) => (
          <li key={noticia.id}>
            <h2>{noticia.titulo}</h2>
            <h4>{noticia.dataCriacao}</h4>
            <h3>{noticia.texto}</h3>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Noticias