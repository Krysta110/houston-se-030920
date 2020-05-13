import React from 'react'
import { dragons } from './dragons.js'
import { DragonCard } from './DragonCard.js'

export class CardContainer extends React.Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         dragons: dragons
    //     }
    // }
    
    // Exact same as:

    state = {
        dragons: dragons
    }

    toggleDragon(){
        // this.setState()
        console.log('Toggle Dragon')
    }

    render() {
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
                                onToggle={this.toggleDragon}
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
                                toggleDragon={this.toggleDragon}
                            />
                        )
                    )}
                </div>
            </ul>
        )

    }
}  