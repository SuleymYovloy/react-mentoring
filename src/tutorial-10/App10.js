function Profile(props) {
  return <h2>Сейчас {props.year + 5} год</h2>
}

function App() {
  function sayHello() {
    alert(`Добро пожаловать, Вася`);
  }
  return (
    <div>
      <Profile year={2021} />
      <button onClick={sayHello('Вася')}>Кликни по мне</button>
    </div>
  );
}

export default App;