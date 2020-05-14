import React from 'react';
import { AirlineList } from './AirlineList'
import { AirlineDetail } from './AirlineDetail';

class App extends React.Component {

  state = {
    page: 'airline-list',
    selectedAirline: null,
    tickets: []
  }

  showDetails = (airline) => {
    fetch(`http://localhost:3000/airline_tickets/${airline.id}`)
      .then(res => res.json())
      .then( ticketsFromServer => {
        this.setState({
          page: 'airline-details',
          selectedAirline: airline,
          tickets: ticketsFromServer
        })
      })
  }

  changeTicketsArray = (newTicket) => {
      this.setState({
        tickets: [ ...this.state.tickets, newTicket]
      })

      fetch('http://localhost:3000/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          airline_id: this.state.selectedAirline.id,
          starting_point: newTicket.starting_point,
          destination: newTicket.destination,
          price: newTicket.price
        })
      })
  }

  render() {

    if (this.state.page === 'airline-list') {
      return (
        <AirlineList 
          showDetails={this.showDetails}
        />
      )
    } else {
      return (
        <AirlineDetail
          tickets={this.state.tickets}
          name={this.state.selectedAirline.name}
          changeTicketsArray={this.changeTicketsArray}
        />
      )
    }
  }

}

export default App;
