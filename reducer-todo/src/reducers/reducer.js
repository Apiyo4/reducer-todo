import uuid from 'uuid';
export const initialState = {
    // item: 'Learn about reducers',
    // completed: false,
    // id: 3892987589
    
      
    todoList : [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Do laundry',
          id: 1528839077286,
          completed: false
        },
        {
          task: 'Finish stretch goals',
          id: 1528817077220,
          completed: false
        },
      ],
      inputTodo: " ",
}
export const SUBMIT = 'SUBMIT';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export function reducer(state, action){
    switch(action.type){
        case INPUT_CHANGE: 
            return { ...state,
                inputTodo :  action.payload.value
            };
            
        case SUBMIT:
            return {
                todoList: [...state.todoList,
                    {
                        task: state.inputTodo,
                        id: uuid(),
                        completed: false
                    }

                ],
                inputTodo: ' '
                

            }
        default:
            return state;
    }
}



