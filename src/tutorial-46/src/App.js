import React from 'react';

function App() {

  const [users, setUsers] = React.useState([]);

  const url = 'https://6363989337f2167d6f7d80a5.mockapi.io/users';

  async function fetchAsync() {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setUsers(users, result);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div>
        <ul>
          {users}
        </ul>
      <button onClick={fetchAsync}>Получить список пользователя</button> Кнопка для ДЗ
    </div>
  );
}

export default App;