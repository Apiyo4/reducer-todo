import React, { useReducer } from 'react';

import './App.css';
import {reducer, initialState} from './reducers/reducer'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// import { formReducer, initialState } from './reducers/formReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (

    <div className="App">
    {state.todoList.map(todo =>{
      // console.log('todo:', todo)
      return <TodoList todo = {todo} key= {todo.id} />
    })}
    <TodoForm state={state} dispatch={dispatch} />
      
     
    </div>
  );
}

export default App;
