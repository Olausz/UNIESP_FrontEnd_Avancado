import React from "react";
import EstiloGlobal from "./components/EstiloGlobal.jsx";
import EstiloInline from "./components/EstiloInline";
import Campanha from "./components/Campanha";
import FormularioDeContato from "./components/FormularioDeContato";

const App = () => {
    return (
        <>
            <h1>Aula 4</h1>
            <hr />

            <h1>Exercício 1</h1>
            <EstiloGlobal />

            <br />
            <hr />
            <br />

            <h1>Exercício 2</h1>
            <EstiloInline />

            <br />
            <hr />
            <br />

            <h1>Exercício 3</h1>
            <Campanha mes={"Setembro"} />

            <br />
            <hr />
            <br />

            <h1>Exercício 4</h1>
            <FormularioDeContato />

        </>
    );
};

export default App;