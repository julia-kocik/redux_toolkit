import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AddTodo />
      <ListTodo />
      </header>
    </div>
  );
}

export default App;
