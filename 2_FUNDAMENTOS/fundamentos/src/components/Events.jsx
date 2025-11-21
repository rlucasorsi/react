
const Events = () => {

    const handleClick = () => {
        console.log("Executou")
    }
    
    //Função de renderização
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando outra coisa</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={() => console.log("Clicou no botão")}>Clique aqui</button>
        </div>
        <div>
            <button onClick={handleClick}>Click aqui - com função</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events