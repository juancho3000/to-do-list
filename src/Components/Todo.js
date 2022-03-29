import React, {useState} from "react";
import TodoForm from "./TodoForm";

function Todo ({ todos, completeTodo, removeTodo, updateTodo }){
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    const submitUpdate = value=> {
        updateTodo(edit.id, value )
        setEdit({
            id:null,
            value:''
        });
    };
    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
    }
    return todos.map((todo, index) =>(
     <form className={todo.isComplete ? 'todo-row' : 
     'todo-row'} key={index}>
         <div className="text"
             key={todo.id} 
             onClick={()=> 
             completeTodo(todo.id)}>
             {todo.text}
         </div>  
         <button type="button"
         className='minus-button'
          onClick={() => 
          removeTodo(todo.id)}>-</button> 
     </form>
    ))
    }
export default Todo;