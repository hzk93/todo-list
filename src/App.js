import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component{
  render(){
    console.log(TodoList);
    return(
    <div className='App'><TodoList/></div>
    )
  }
}

export default App;