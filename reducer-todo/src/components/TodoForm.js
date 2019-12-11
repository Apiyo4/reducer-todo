import React from 'react';
import { INPUT_CHANGE, SUBMIT, CLEAR_TODO} from '../reducers/reducer';
function TodoForm({state, dispatch}){
   
    const onValueChange = event =>{
        const {name, value} = event.target;
        
    dispatch({
        type: INPUT_CHANGE,
        payload: {name, value},
    })
    }
    const onFormSubmit = event =>{
        event.preventDefault();
        dispatch({
        type: SUBMIT,
        })
        
    }
    const clearTodo = (event)=>{
        event.preventDefault();
        dispatch({
          type: CLEAR_TODO,
        })
      }
    return(
        <div>
            <form onSubmit={onFormSubmit}>
              <input placeholder='Add Todo' name='inputTodo' value={state.inputTodo} onChange = {onValueChange}/>
              <button type='submit'>Add todo</button>  
              <button onClick= {clearTodo}>Clear Completed</button>
            </form>        
        </div>)
}
export default TodoForm;