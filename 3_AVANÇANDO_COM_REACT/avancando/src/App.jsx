
import './App.css'

// Imagem em assets
import city from "./assets/city.jpg";

import Data from './components/Data';

function App() {

  return (
    <div className='App' style={{paddingBottom: "500px"}}>
      <h1>Avançando com React</h1>
      <img src="/img1.jpg" alt="Alguma imagem" />
      {/* Imagem em assets */}
      <img src={city} alt="Outra imagem" />
      {/* useState */}
      <Data/>
    </div>

  )
}

export default App
