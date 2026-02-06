import "./App.css";

// 2- css no componente
import MyComponent from "./components/MyComponent.jsx";

function App() {
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>CSS no React</h1>
      {/* CSS Componente */}
      <MyComponent/>
      <p>Pegou o css do componente</p>

     
    </div>
  );
}

export default App;
