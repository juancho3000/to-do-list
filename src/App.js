import React from 'react';
import logo from './imagenes-todo/react-logo.png';
import './App.css';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt='logo'/>
   <TodoList/>
    </div>
  );
}

export default App;