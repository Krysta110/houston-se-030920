import React from 'react'

export class KoalaForm extends React.Component {

    state = {
        newKoalaName: '',
        newKoalaImage: ''
    }

    setNewKoalaName = (e) => {
        this.setState({ newKoalaName: e.target.value })
    }

    setNewKoalaImage = (e) => {
        this.setState({ newKoalaImage: e.target.value })
    }

    handleSubmit = () => {
        this.setState({
            newKoalaName: '',
            newKoalaImage: '',
        })
        let newKoala = {
            name: this.state.newKoalaName,
            image: this.state.newKoalaImage
        }
        this.props.onSubmit(newKoala)
    }

    render() {
        return (
            <div>
                <div>
                    <label>Name</label>
                    <input
                        value={this.state.newKoalaName}
                        onChange={this.setNewKoalaName}
                    />
                </div>
                <div>
                    <label>Image</label>
                    <input
                        value={this.state.newKoalaImage}
                        onChange={this.setNewKoalaImage}
                    />
                </div>
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        )
    }
}