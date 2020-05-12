import React, { Component } from 'react'

export class DragonCard extends Component {

    state = {
        atWar: false, // false
        name: this.props.name
    }
    
    // e represents the event is a synthetic event (it's properties might disappear later):
    handleClick = (e) => { 
        if(this.state.atWar == true)  {
            // setState 
            //  - react function, replaces state with the object we pass in
            //  - re renders the component
            this.setState({ atWar: false })
        } else {
            this.setState({ atWar: true })
        }          
    }

    render(){
        let imageStyles = { 
            width: '100px', 
        }
    
        return (
            <div>
                <h3>{this.state.name}</h3>
                <p>{this.props.description}</p>
                <p onClick={this.handleClick} >
                    {this.state.atWar ? 'At War' : 'At Home'}
                </p>
                <img style={imageStyles} src={this.props.image} /><br />
                <input 
                    type="text" 
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }}
                />
            </div>
        )
    }

}


//  1. .addEventListener click
//  2.  if(props.atWar == true) 
//  3.      props.atWar = false
//  4.      pTag.innerText = 'At Home'
