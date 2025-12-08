import "./App.css";

// Imagem em assets
import city from "./assets/city.jpg";

import ConditionalRender from "./components/ConditionalRender";

import Data from "./components/Data";

import ListRender from "./components/ListRender";

import ShowUserName from "./components/ShowUserName";

import CarDatails from "./components/CarDatails";

import Fragments from "./components/Fragments";

import Container from "./components/Container";

// Função em prop
import ExecuteFunction from "./components/ExecuteFunction";
// state lift
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

// renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

function App() {
  // Função em prop
  function showMessage() {
    console.log("Executou a função");
  }

  // state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando com React</h1>
      <img src="/img1.jpg" alt="Alguma imagem" />
      {/* Imagem em assets */}
      <img src={city} alt="Outra imagem" />
      {/* useState */}
      <Data />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name="Lucas" />
      {/* Destruturando props */}
      <CarDatails brand="BMW" km={10500} color="Vermelho" />
      {/* Reaproveitamento de componentes */}
      <CarDatails brand="VW" km={182500} color="Prata" />
      <CarDatails km={50850} brand="Fiat" color="Azul" />
      {/* renderização de lista com componente */}
      {cars.map((car) => (
        <CarDatails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      <Fragments />
      <Container>
        <h2>Titulo do componente pai</h2>
        <p>Conteudo do componente pai</p>
      </Container>
      {/* Função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
