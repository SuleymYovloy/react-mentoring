function Profile(props) {
  return <>
    <h1>Привет <b>{props.name}</b>! </h1>
    <p>Дата регистрации: {props.registredAt}</p>
  </>
}

function App() {
  const data = new Date(2021, 5, 22).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <div>
      <Profile name="Вася" registredAt={data} />
    </div>
  );
}

export default App;