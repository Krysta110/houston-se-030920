import React from 'react';
import { KoalaContainer } from './components/KoalaContainer'
import { SearchBar } from './components/SearchBar';
import { KoalaForm } from './components/KoalaForm';

class App extends React.Component {

  state = {
    koalas: [],
    searchTerm: '',
    newKoalaName: '',
    newKoalaImage: ''
  }

  // Make a function here
  searchKoala = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  setNewKoalaName = (e) => {
    this.setState({ newKoalaName: e.target.value })
  }

  setNewKoalaImage = (e) => {
    this.setState({ newKoalaImage: e.target.value })
  }

  createKoala = () => {
    this.setState({
      newKoalaName: '',
      newKoalaImage: '',
      koalas: [
        ...this.state.koalas,
        {
          name: this.state.newKoalaName,
          image: this.state.newKoalaImage
        }
      ]
    })
    fetch('http://localhost:3000/koalas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        name: this.state.newKoalaName,
        image: this.state.newKoalaImage
      })
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
          newKoalaName={this.state.newKoalaName}
          newKoalaImage={this.state.newKoalaImage}
          setNewKoalaName={this.setNewKoalaName}
          setNewKoalaImage={this.setNewKoalaImage}
        />
      </div>
    );
  }
}

export default App;
