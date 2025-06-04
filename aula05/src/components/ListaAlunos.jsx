import React, { useEffect } from 'react'

const url = "http://localhost:3000/alunos"

const ListaAlunos = () => {
    const [aluno, setAlunos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url)
            const dados = await response.json()

            setAlunos(dados)
        }
        fetchData()
    }, [])
  return (
    <div>
        <table>
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