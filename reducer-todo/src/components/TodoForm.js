import React from 'react';
import { INPUT_CHANGE, SUBMIT} from '../reducers/reducer';
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
    return(
        <div>
            <form onSubmit={onFormSubmit}>
              <input placeholder='Add Todo' name='inputTodo' value={state.inputTodo} onChange = {onValueChange}/>
              <button type='submit'>Add todo</button>  
            </form>        
        </div>)
}
export default TodoForm;