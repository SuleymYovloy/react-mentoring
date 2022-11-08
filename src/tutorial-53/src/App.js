import React from 'react';
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';

function reducer(state, action) {
  if (action.type === 'ADD_TASK') {
    return [
      ...state,
      {
        id: state[state.length - 1].id + 1,
        text: action.payload.text,
        completed: action.payload.checked
      }
    ];
  }

  if (action.type === 'DELETE_TASK') {
    return state.filter(obj => obj.id !== action.payload);
  }

  if (action.type === 'TOGGLE_COMPLETE') {
    return state.map(obj => {
      if (obj.id === action.payload) {
        return {
          ...obj,
          completed: !obj.completed
        }
      }
      return obj;
    });
  }

  return state;
} 

function App() {

  const [state, dispatch] = React.useReducer(reducer, [
    
    {
      id: 1,
      text: 'Первая задача',
      completed: false,
    },
    {
      id: 2,
      text: 'Проверил как работает отрисовка',
      completed: true
    }
  ]);

  const addTask = (text, checked) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        text,
        checked
      },
    });
  }

  const deleteTask = (id) => {
    if (window.confirm('Удалить задачу?')) {
      dispatch({
        type: 'DELETE_TASK',
        payload: id,
      });
    }
  };

  // const checkAll = () => {

  // }

  const toggleComplete = (id) => {
    dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: id,
    });
  }

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onAdd={addTask}/>
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {
            state.map(obj => (<Item key={obj.id} id text={obj.text} completed={obj.completed} onClickDelete={() => deleteTask(obj.id)} onClickChecked={() => toggleComplete(obj.id)}/> ))
          }
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
