import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ pokemon: users}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const {pokemon, searchField} = this.state;
    // same as const pokemon = this.state.pokemon
    // const searchField = this.state.searchField
    const filteredPokes = pokemon.filter(poke => 
      poke.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
    <div className="App">
      <h1>Pokedex</h1>
      <SearchBox
        placeholder='Search for Pokes'
        handleChange= {this.handleChange}
      />
      <CardList pokes={filteredPokes} />
    </div>
    )
  };
}

export default App;
