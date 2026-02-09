import "./App.css";

// 2- css no componente
import MyComponent from "./components/MyComponent.jsx";
import Title from "./components/Title.jsx";

/* 4 - inline style dinamico */
const n = 15;

// 5 - Classes dinamicas
const redTitle = true;

function App() {
  return (
    <div className="App">
      {/* 1-  CSS Global */}
      <h1>CSS no React</h1>
      {/* 2- CSS Componente */}
      <MyComponent />
      <p>Pegou o css do componente</p>
      {/* 3 - inline style */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "1px solid blue" }}
      >
        Este elemento tem estilos inline
      </p>
      {/* 4 - inline style dinamico */}
      <h2 style={n < 10 ? { color: "green" } : { color: "purple" }}>
        CSS dinamico
      </h2>
      <h2 style={n > 10 ? { color: "green" } : { color: "purple" }}>
        CSS dinamico
      </h2>
      {/* 5 - Classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse titulo vai ter uma classe
      </h2>
      {/* 6 - css modules */}
      <Title />
    </div>
  );
}

export default App;
