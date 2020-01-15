import React, { useState } from 'react';
import Header from "./Header"

// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao
// Propriedade: Informacoes que um componente PAI passa para o componente FILHO
// Estado:  

function App() {
  const [counter, setCounter] = useState(0);

  function incrementarCounter() {
    setCounter(counter+1);
  }

  return (
    <>
      <h1> Contador: {counter} </h1>
      <button onClick={incrementarCounter}>Incrementar</button>
    </>
  );
}

export default App;

// <>
// <Header title="Dashboard 1"/>
// <Header title="Dashboard"/>
// <Header title="Dashboard 3"/>
// </>