import React from 'react';


class App extends React.Component {

    state = {
        counter: 0
    }

    incrementCounter = () => {

        const { counter } = this.state

        this.setState({ counter: counter + 1})
    }

    render(){
        const { counter } = this.state
        console.log('render', counter)
        return (
            <div  style={{ width: '100vw', height: '100vh' }}>
                <h1 onClick={this.incrementCounter}>
                    {this.state.counter}
                </h1>
            </div>
        )
    }

}

export default App