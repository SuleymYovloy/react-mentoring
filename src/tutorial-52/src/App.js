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
            state.map(obj => (<Item key={obj.id} text={obj.text} completed={obj.completed}/>))
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
