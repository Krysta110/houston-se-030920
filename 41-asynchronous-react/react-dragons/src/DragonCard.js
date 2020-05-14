import React, { Component } from 'react'

export class DragonCard extends Component {


    render(){
        const dragon = this.props.dragon

        let imageStyles = { 
            width: '100px', 
        }
    
        return (
            <div>
                <h3>{dragon.name}</h3>
                <p>{dragon.description}</p>
                <button onClick={() => this.props.moveDragon(dragon)} >
                    {dragon.atWar ? 'At War' : 'At Home'}
                </button><br />
                <img style={imageStyles} src={dragon.image} /><br />
            </div>
        )
    }

}