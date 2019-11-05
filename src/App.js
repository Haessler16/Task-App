import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BD from "./sample/baseDatos.json";

import Tareas from "./components/Task";
import Navegation from "./components/Navegation";
import TodoForm from "./components/TodoForm";

class App extends Component {
  state={
    Bum: BD
  }

  render(){
    return  <div className="App">
      <header className="App-header">
        <Navegation logo={logo} Bum={this.state.Bum} titulo="Tasks"/>
      </header>
      <main className="container">
        <div className="row mt-4">
          <div className="col md-3">
            <TodoForm/>
          </div>
          <div className="col md-9">
            <div className="row">
            <Tareas Bum={this.state.Bum}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  }  
}

export default App;
