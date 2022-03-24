import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo.js";
import logo from '../imagenes-todo/react-logo.png';
import Notificacion from "./TodoNotification.js";
import { emitter } from "./TodoNotification.js";

function TodoList (){
    const [todos, setTodos] = useState ([]);
    const[showError, setShowError] = useState(false);


     //const error - begin
     const displayError= ()=> {
        setShowError(true);
        const clearTimer = setTimeout (() => setShowError(false), 3000);
        return () => clearTimeout(clearTimer);
    };
    //const error - end


    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            displayError();
            return;
        }
        const newTodos = [todo, ...todos];
        emitter.emit("NOTIFICATION", "todo added succesfully")
        setTodos(newTodos);
        console.log(todo, ...todos);
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    return(
<div className="list-todo">
<img src={logo} className="App-logo" alt='logo'/>
<div>
 <h1>Todo list app</h1>
 <div className="warning" type="alert">{showError && <p>Please add a todo!</p>}</div>
 <Notificacion/>
 <TodoForm onSubmit={addTodo}/>
 <Todo todos={todos} 
 completeTodo={completeTodo} 
 removeTodo={removeTodo}
 updateTodo={updateTodo}
 />
</div>
</div>
 );
}

export default TodoList;