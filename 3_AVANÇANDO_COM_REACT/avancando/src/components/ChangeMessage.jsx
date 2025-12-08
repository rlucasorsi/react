const ChangeMessage = ({handleMessage}) => {
    const messages = ["Oi", "Olá", "Tudo bem?"]

  return <div>
    <button onClick={() => handleMessage(messages[0])}>Oi</button>
    <button onClick={() => handleMessage(messages[1])}>Olá</button>
    <button onClick={() => handleMessage(messages[2])}>Tudo bem?</button>
  </div>;
};

export default ChangeMessage;
