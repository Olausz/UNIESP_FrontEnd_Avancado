import React from 'react'

const RenderizaBackOuFront = () => {

    function backOuFront (tipoCodigo) {
        if (tipoCodigo === "Java") {
            return <h1>Java</h1>
        } else if (tipoCodigo === "React") {
            return <b>React<br></br></b>
        } else {
            return <b>Cloud</b>
        }
    }
  return (
    <div>
        {backOuFront("Java")}
        {backOuFront("React")}
        {backOuFront("AWS")}
    </div>
  )
}

export default RenderizaBackOuFront