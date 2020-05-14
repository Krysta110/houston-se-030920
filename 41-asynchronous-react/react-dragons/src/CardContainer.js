import React from 'react'
import { DragonCard } from './DragonCard.js'

// Lifecycle Method
//  - An instance method that runs automatically
//      - initialize/constructor
//  - React has it's own Lifecycle methods 
//      - render
//      - componentDidMount


export class CardContainer extends React.Component {

    state = {
        dragons: undefined
    }

    moveDragon = (clickedDragon) => { 

        // Change our local copy of the data
        //  The DOM changes automatically for us
        let index = this.state.dragons.indexOf(clickedDragon)
        this.setState({ 
            dragons: [
                ...this.state.dragons.slice(0, index), 
                { ...clickedDragon, atWar: clickedDragon.atWar == true ? false : true },
                ...this.state.dragons.slice(index + 1), 
            ]
        })

        // We update the server
        fetch(`http://localhost:3000/dragons/${clickedDragon.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                atWar: clickedDragon.atWar == true ? false : true 
            })
        })
    }

    // Runs once, after the component is displayed on the page
    componentDidMount(){
        fetch('http://localhost:3000/dragons')
            .then(function(response){
                return response.json()
            })
            .then((dragonsArray) => {
                this.setState({
                    dragons: dragonsArray
                })
            })
    }

    // Runs after this object is created, and every time state is set 
    render() {

        const { dragons } = this.state

        if(dragons === undefined){
            return <h1>Loading Dragons...</h1>
        }

        let dragonsAtWar = dragons.filter(dragon => dragon.atWar == true)
        let dragonsAtHome = dragons.filter(dragon => dragon.atWar == false)

        return (
            <ul>
                <div style={{ float: 'left', width: '40%', padding: '5%', backgroundColor: '#00ffd8' }}>
                    <h1>Home</h1>
                    {dragonsAtHome.map(dragon =>
                        (
                            <DragonCard
                                key={dragon.id}
                                dragon={dragon}
                                moveDragon={this.moveDragon}
                            />
                        )
                    )}
                </div>
                <div style={{ float: 'left', width: '40%', padding: '5%', backgroundColor: '#f98181' }}>
                    <h1>War</h1>
                    {dragonsAtWar.map(dragon =>
                        (
                            <DragonCard
                                key={dragon.id}
                                dragon={dragon}
                                moveDragon={this.moveDragon}
                            />
                        )
                    )}
                </div>
            </ul>
        )

    }

}  