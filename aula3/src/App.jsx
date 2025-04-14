import React from 'react'

import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      {
        [ 
          {nome: "Saulo", email: "saulopenem@gmail.com", curso: "Sistemas para internet"},
          {nome: "Jaime", email: "drajaime@gmail.com", curso: "Nutrição"},
          {nome: "Pedro", email: "pedroso1@gmail.com", curso: "Veterinaria"}
        ].map((aluno) => 
        <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} />
        )
      }
    </div>
  )
}

export default App