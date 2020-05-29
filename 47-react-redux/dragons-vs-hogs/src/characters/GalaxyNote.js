import React, { Component } from 'react';
import { HealthBar } from '../components/HealthBar';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        health: state.galaxyNote
    }
}

const mapDispatchToProps = {

}

export const GalaxyNote = connect(mapStateToProps, mapDispatchToProps)( (props) => (
    <div style={{ textAlign: 'left'}}>
        <h3>GalaxyNote</h3>
        <HealthBar health={props.health} />
        <img style={{ width:'100px'}} src="https://res.cloudinary.com/dabeyvbyw/image/upload/v1544712623/galaxy_note.jpg" />
    </div>
))