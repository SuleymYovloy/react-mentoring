import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {

  const { register, handleSubmit, formState, reset } = useForm();

  const onSubmit = values => console.log(values);
  console.log(formState)

  return (
    <div className="App">
      <form>
        <div className='row'>
          <TextField name="firstName"  label='Имя' {...register('firstName', {required: 'Это обязательное поле' })} helperText={formState.errors.firstName && formState.errors.firstName.message} error={!!formState.errors.firstName} fullWidth variant='standard'/>
          <TextField name="lastName" label='Фамилия' {...register('lastName', {required: 'Это обязательное поле'})} helperText={formState.errors.lastName && formState.errors.lastName.message} error={!!formState.errors.lastName} fullWidth variant='standard'/>
        </div>
        <div className='row'>  
          <TextField name="email" label='Email' {...register('email', {required: 'Это обязательное поле', pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Некорректная почта"
          }})} helperText={formState.errors.email && formState.errors.email.message} error={!!formState.errors.email} fullWidth variant='standard'/>
          <TextField name="password" type='password' label='Password' {...register('password', {required: 'Это обязательное поле'})} helperText={formState.errors.password && formState.errors.password.message} error={!!formState.errors.password} fullWidth variant='standard'/>
        </div>
      </form>
      <br/>
      <div className='row'>
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color='primary'>Зарегестрироваться</Button>
        <Button onClick={() => reset({firstName: "", lastName: "", email: "", password: ''})} variant="contained" color='secondary'>Очистить</Button>
      </div>
    </div>
  );
}



export default App;
