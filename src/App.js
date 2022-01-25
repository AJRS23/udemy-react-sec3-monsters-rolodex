import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField: ''
    };

    /* Another way of doing this is to make the function an arrow method so the context
       will be automatically bind in the context it was declare the first time (LEXICAL SCOPE) */
    //this.handleChange = this.handleChange.bind(this); 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // Use arrow functions on any class methods that aren't part of React (render, componentDidMount...)
  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='Search monsters'
          //handleChange={ e => this.handleChange(e)} //we are invoking the func when render
          handleChange={this.handleChange}  //it is assigning so it is invoke only when the event happens
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
