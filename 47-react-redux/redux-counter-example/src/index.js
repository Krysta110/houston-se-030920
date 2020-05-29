import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
    loggedInUsername: 'Josh',
    count: 0
}

const reducer = (currentState, action) => {
    switch(action.type){
        case 'CHANGE_LOGGED_IN_USER_NAME':
            return {
                ...currentState,
                loggedInUsername: 'Steven'
            }
        break;
        case 'INCREMENT_COUNT':
            return { 
                ...currentState,
                count: currentState.count + 1 
             }
        break;
        case 'DECREMENT_COUNT':
            return { 
                ...currentState,
                count: currentState.count - 1
             }
        break;
    }
    return currentState
}

const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)