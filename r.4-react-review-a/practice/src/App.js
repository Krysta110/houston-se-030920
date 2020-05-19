import React from 'react';
import { KoalaContainer } from './components/KoalaContainer'
import { SearchBar } from './components/SearchBar';
import { KoalaForm } from './components/KoalaForm';

class App extends React.Component {

  state = {
    koalas: [],
    searchTerm: '',
  }

  // Make a function here
  searchKoala = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  createKoala = (newKola) => {
    // Add it to the screen
    this.setState({
      koalas: [
        ...this.state.koalas,
        newKola
      ]
    })
    // Save in on the server
    fetch('http://localhost:3000/koalas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newKola)
    })
  }

  componentDidMount = () => {
    this.fetchKoalas()
  }

  fetchKoalas = () => {
    fetch('http://localhost:3000/koalas')
      .then(res => res.json())
      .then(koalas => this.setState({ koalas: koalas }))
  }

  render(){
    console.log('state in app:', this.state.koalas)
    let filteredKoalas = this.state.koalas.filter(
      koala => koala.name.startsWith(this.state.searchTerm)
    )
    return (
      <div>
        <SearchBar search={this.searchKoala} />
        <KoalaContainer koalas={filteredKoalas} />
        <KoalaForm 
          onSubmit={this.createKoala}
        />
      </div>
    );
  }
}

export default App;
