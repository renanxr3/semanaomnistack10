import React, { useState, useEffect } from 'react'; 
import api from "./services/api";

import "./global.css"
import "./App.css"
import "./Sidebar.css"
import "./Main.css"

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao
// Propriedade: Informacoes que um componente PAI passa para o componente FILHO
// Estado: Informacoes mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [devs, setDevs] = useState([]); 

  console.log("teste");

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);

      console.log(response.data);
    }

    loadDevs();
  }, [])

  async function handleAddDev(data) {
    const response = await api.post("/devs", data)
    // console.log(response.data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}          
        </ul>
      </main>
    </div>
  );
}

export default App;

// <>
// <Header title="Dashboard 1"/>
// <Header title="Dashboard"/>
// <Header title="Dashboard 3"/>
// </>