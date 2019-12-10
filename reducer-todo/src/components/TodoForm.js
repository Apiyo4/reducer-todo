import React from 'react';

function TodoForm(){
    return(
        <div>
            <form>
              <input placeholder='Add Todo' name='todo'/>
              <button type='submit'>Add todo</button>  
            </form>        
        </div>)
}
export default TodoForm;