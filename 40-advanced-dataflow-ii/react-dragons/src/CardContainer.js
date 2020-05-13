import React from 'react'
import { dragons } from './dragons.js'
import { DragonCard } from './DragonCard.js'

export class CardContainer extends React.Component {

    state = {
        dragons: dragons
    }

    removeDragon = (clickedDragon) => {
        this.setState({
            dragons: this.state.dragons.filter( dragon => dragon == clickedDragon)
        })
    }

    // 1. Log your state, and your inputs
    changeState = (clickedDragon) => {
        console.log('clicked', clickedDragon)
        console.log('Before State Change:', this.state)
        
        let index = this.state.dragons.indexOf(clickedDragon)
        this.setState({ 
            dragons: [
                ...this.state.dragons.slice(0, index), // copy over the dragons before toothless
                { ...clickedDragon, atWar: clickedDragon.atWar == true ? false : true }, // copy over the new value for toothlesss
                ...this.state.dragons.slice(index + 1), // copy over all the dragons after toothless
            ]
        })

        // Accomplishes the same thing:
        // this.setState({ 
        //     dragons: this.state.dragons.map( dragon => {
        //         if(dragon === clickedDragon){
        //             return  { ...clickedDragon, atWar: clickedDragon.atWar == true ? false : true }
        //         } else {
        //             return dragon
        //         }
        //     })
        // })
    }

    render() {
        console.log('After State Change:', this.state)
        let dragonsAtWar = this.state.dragons.filter(dragon => dragon.atWar == true)
        let dragonsAtHome = this.state.dragons.filter(dragon => dragon.atWar == false)

        return (
            <ul>
                <div style={{ float: 'left', width: '40%', padding: '5%', backgroundColor: '#00ffd8' }}>
                    <h1>Home</h1>
                    {dragonsAtHome.map(dragon =>
                        (
                            <DragonCard
                                key={dragon.id}
                                dragon={dragon}
                                changeState={this.changeState}
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
                                changeState={this.changeState}
                            />
                        )
                    )}
                </div>
            </ul>
        )

    }
}  