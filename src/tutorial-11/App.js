import React from 'react'

function App() {
  
  const email = React.createRef()
  const password = React.createRef()

  function onChangeInput() {
    console.log(email.current.value);
    console.log(password.current.value);
  }

  return (
    <div>
      <form>
        <input type="text" onChange={onChangeInput} placeholder="E-Mail" ref={email}/>
        <input type='password' onChange={onChangeInput} placeholder="Пароль" ref={password}/>
        <button type="submit" onClick={onChangeInput}>Войти</button>
      </form>
    </div>
  );
}

export default App;