import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [
        {
          name: 'Frankestein',
          id: 'monster A'
        },
        {
          name: 'Dracula',
          id: 'monster B'
        },
        {
          name: 'Zombie',
          id: 'monster C'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
      {
        this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))
      }
      
    </div>
    );
  }
}

export default App;
