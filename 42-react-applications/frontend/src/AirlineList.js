import React from 'react'
import { AirlineListItem } from './AirlineListItem'

export class AirlineList extends React.Component {

    state = {
        airlines: null
    }    

    componentDidMount(){
        fetch('http://localhost:3000/airlines')
            .then( res => res.json())
            .then( (airlines) => {
                this.setState({ airlines: airlines })
            })
    }

    render(){

        const { airlines } = this.state
        const { showDetails } = this.props

        if(airlines === null){
          return <h1>I'm getting the airlines...</h1>
        }

        return (
            <div>
                <h1>Airline List</h1>
                <ul>
                    {airlines.map( airline => (
                        <AirlineListItem 
                            key={airline.id}
                            airline={airline}
                            showDetails={showDetails}
                        />
                    ))}    
                </ul>
            </div>
        )
    }
}