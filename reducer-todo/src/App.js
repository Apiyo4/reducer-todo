import React, { useReducer } from 'react';

import './App.css';
import {reducer, initialState, CROSS_TODO} from './reducers/reducer'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// import { formReducer, initialState } from './reducers/formReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const crossTodo = id =>{
    dispatch({
        type: CROSS_TODO,
        payload: {id}
    })
}
  return (

    <div className="App">
    {state.todoList.map(todo =>{
      // console.log('todo:', todo)
      return <TodoList todo = {todo} key= {todo.id} crossTodo= {crossTodo}/>
    })}
    <TodoForm state={state} dispatch={dispatch} />
      
     
    </div>
  );
}

export default App;
