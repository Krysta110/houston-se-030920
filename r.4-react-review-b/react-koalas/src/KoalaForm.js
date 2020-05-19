import React from 'react'

export class KoalaForm extends React.Component {

    state = {
        name: '',
        image: ''
    }

    setField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
        this.setState({
            name: '',
            image: ''
        })
    }

    render(){
        return (
            <div>
                <div>
                    <label>Name: </label>
                    <input name="name" onChange={this.setField} />
                </div>
                <div>
                    <label>Image: </label>
                    <input name="image" onChange={this.setField}/>
                </div>
                <button onClick={() => this.handleSubmit()} >
                    Create Koala
                </button>
            </div>
        )
    }
}