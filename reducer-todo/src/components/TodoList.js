import React from 'react';

 
function TodoList(props){
    // console.log(props.todo)
    return(
        <div>
            <p>{props.todo.task} </p>
            
        </div>
    )
}
export default TodoList;