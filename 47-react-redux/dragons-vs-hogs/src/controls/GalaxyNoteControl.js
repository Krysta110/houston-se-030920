import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
    attackGalaxyNote: damage => {
        return {  type: 'ATTACK_GALAXY_NOTE', damage: damage }
    }, 
    healGalaxyNote: e => {
        return {  type: 'HEAL_GALAXY_NOTE' }
    }
}

let myConnector = connect(mapStateToProps, mapDispatchToProps)

class _GalaxyNoteControl extends Component {
    render() {
        return (
            <div style={{padding: '5px', width: '25%', float:'right', borderStyle:'solid', borderColor: 'black'}}>
                <p>Galaxy</p>
                <button onClick={() => this.props.attackGalaxyNote(3)} >Attack</button>
                <button onClick={this.props.healGalaxyNote} >Heal</button>
            </div>
        );
    }
}

export const GalaxyNoteControl = myConnector(_GalaxyNoteControl)