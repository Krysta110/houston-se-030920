import React, { Component } from 'react'

export class DragonCard extends Component {

    
    handleClick = (e) => { 
        this.props.onToggle()
        // if(this.state.atWar == true)  {
        //     this.setState({ atWar: false })
        // } else {
        //     this.setState({ atWar: true })
        // }          
    }

    render(){
        const dragon = this.props.dragon

        let imageStyles = { 
            width: '100px', 
        }
    
        return (
            <div>
                <h3>{dragon.name}</h3>
                <p>{dragon.description}</p>
                <p onClick={this.handleClick} >
                    {dragon.atWar ? 'At War' : 'At Home'}
                </p>
                <img style={imageStyles} src={dragon.image} /><br />
            </div>
        )
    }

}