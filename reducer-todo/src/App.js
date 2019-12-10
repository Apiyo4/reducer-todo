import React, { useReducer } from 'react';

import './App.css';
import {reducer, initialState} from './reducers/reducer'
import TodoList from './components/TodoList';

function App() {
  const [state] = useReducer(reducer, initialState)

  // console.log(state.todoList);

  return (

    <div className="App">
    {state.todoList.map(todo =>{
      // console.log('todo:', todo)
      return <TodoList todo = {todo} key= {todo.id} />
    })}
      
     
    </div>
  );
}

export default App;
