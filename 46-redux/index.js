const { createStore } = Redux

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
    
    // if(action.type === 'INCREMENT_COUNT'){
    //    return { 
    //        ...currentState,
    //        count: currentState.count + 1 
    //     }
    // }

    // if(action.type === 'DECREMENT_COUNT'){
    //     return { 
    //         ...currentState,
    //         count: currentState.count - 1
    //      }
    //  }
 
    return currentState
}

const store = createStore(reducer, initialState)