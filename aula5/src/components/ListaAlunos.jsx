import React, { useEffect, useState } from 'react';

const ListaAlunos = () => {
    const [aluno, setAlunos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3000/alunos")
            const dados = await response.json()
            console.log(dados)
            setAlunos(dados)
        }

        fetchData()
    }, [])
  return (
    <div>
        <table border='1p'>
            <thead>
                <th>Matricula:</th>
                <th>Nome:</th>
                <th>Email:</th>
            </thead>
            <tbody>
                {
                    aluno.map((aluno) => (
                        <tr key={aluno.id}>
                            <td>{aluno.id}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListaAlunos