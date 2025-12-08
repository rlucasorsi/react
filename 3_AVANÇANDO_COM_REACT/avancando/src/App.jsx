import "./App.css";

// Imagem em assets
import city from "./assets/city.jpg";

import ConditionalRender from "./components/ConditionalRender";

import Data from "./components/Data";

import ListRender from "./components/ListRender";

import ShowUserName from "./components/ShowUserName";

import CarDatails from "./components/CarDatails";

function App() {
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
      <CarDatails brand="BMW" km={10500} color="Vermelho"/>
    </div>
  );
}

export default App;
