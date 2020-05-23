import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BD from "./sample/baseDatos";

import Tareas from "./components/Task";
import Navegation from "./components/Navegation";
import TodoForm from "./components/TodoForm";

class App extends Component {
  state={
    data: BD
  }

  handlerAddTodo=(todo)=>{
    this.setState({
      data: [...this.state.data, todo]
    })
  }

  handlerRemoveTodo=(index)=>{
    if(window.confirm("Are you sure that you wanna delete it?")){
      this.setState({
        data: this.state.data.filter((e,i)=> i !== index)
      })
    }
  }

  render(){
    return  <div className="App">
      <header className="App-header">
        <Navegation logo={logo} data={this.state.data} titulo="Tasks"/>
      </header>
      <main className="container">
        <div className="row mt-4">
          <div className="col md-3">
            <TodoForm onAddTodo={this.handlerAddTodo}/>
          </div>
          <div className="col md-9">
            <div className="row">
            <Tareas data={this.state.data} removeTodo={this.handlerRemoveTodo}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  }  
}

export default App;
