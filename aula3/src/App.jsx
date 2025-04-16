import React from 'react';
import Aluno from './components/Aluno';

const App = () => {
  return (
    <div>
      {[ 
        {nome: "Saulo", email: "saulopenem@gmail.com", curso: "Sistemas para internet", media: 8.3},
        {nome: "Jaime", email: "drajaime@gmail.com", curso: "Nutrição", media: 9.3},
        {nome: "Pedro", email: "pedroso1@gmail.com", curso: "Veterinaria", media: 6.2}
      ].map((aluno, index) => 
        <Aluno 
          key={index} 
          nome={aluno.nome} 
          email={aluno.email} 
          curso={aluno.curso} 
          media={aluno.media}
        />
      )}
    </div>
  );
};

export default App;