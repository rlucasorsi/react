const TemplateExpression = () => {
    const name = "Lucas"

    const data = {
        age: 26,
        job: "QA"
    }
  return (
    <div>
      <p>A soma é {2 + 2}</p>
     <h3>Bem-vindo {name}</h3>
     <p>Sua idade é {data.age} anos e sua profissão é {data.job}</p>
    </div>
  );
};

export default TemplateExpression;
