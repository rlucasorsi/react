const ConditionalRender = () => {
  const x = false;

  const name = "Lucas";

  return (
    <div>
      {/* Render condicional */}
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true, sim</p>}
      {/* else */}
      <h3>Hender ternário</h3>
      {name === "João" ? (
        <div>
          <p>Olá Lucas</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
