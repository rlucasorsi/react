import { useState } from "react";

const ListRender = () => {
  const [list] = useState([
    { name: "Lucas", age: 26 },
    { name: "Matheus", age: 19 },
    { name: "Fabricio", age: 32 },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Lucas", age: 26 },
    { id: 2, name: "Matheus", age: 19 },
    { id: 3, name: "Fabricio", age: 32 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete</button>
    </div>
  );
};

export default ListRender;
