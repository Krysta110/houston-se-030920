import React from 'react';
import { KoalaContainer } from './KoalaContainer'
import { Header } from './Header';
import { KoalaForm } from './KoalaForm'

class App extends React.Component {

	state = {
		koalas: [],
		searchTerm: ''
	}

	searchResult = (searchTerm) => {
		this.setState({
			searchTerm: searchTerm
		})
	}

	createKoala = (newKoala) => {
		fetch('http://localhost:3000/koalas', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newKoala)
		})
			.then(res => res.json())
			.then(newKoala => {
				this.setState({
					koalas: [...this.state.koalas, newKoala],
				})
			})
	}

	componentDidMount() {
		fetch('http://localhost:3000/koalas')
			.then(res => res.json())
			.then(koalas => {
				this.setState({
					koalas: koalas
				})
			})
	}

	render() {
		let filteredKoalas = this.state.koalas.filter(
			koala => koala.name.startsWith(this.state.searchTerm)
		)
		return (
			<div>
				<Header
					onSearch={this.searchResult}
				/>
				<KoalaContainer koalas={filteredKoalas} />
				<KoalaForm
					onSubmit={this.createKoala}
				/>
			</div>
		);
	}
}

export default App;
