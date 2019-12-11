import React from 'react';

 
function TodoList(props){
    // console.log(props.todo)
    return(
        <div>
            <p 
             onClick={()=>props.crossTodo(props.todo.id)}
            className =  {props.todo.completed ? 'completed' : '' }>
                {props.todo.task} 
            </p>
            
        </div>
    )
}
export default TodoList;