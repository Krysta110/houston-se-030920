# Redux

**Time: 1:30** 

**FormativeEducation Deck:** https://formative.education/projects/45/edit>



### Learning Goals

* Explain the two problems Redux attempts to solve

* Create a store to manage your app's state

* Change state by `dispatch`ing  `actions` to your store

* Explain why we **must** declaratively update state



### Activation 

* How did the discussion question go?
* As our applications grow in complexity the flow of data can become **unmanageable** 
* Redux helps us by solving two problems related to dataflow



### Learning Goal 1: Explain the two problems Redux attempts to solve

##### Demonstrate 

* The problem of passing props needlessly

  * Needlessly Passing Props makes Refactoring a Pain

* The problem of predicting state

  * If state can change anywhere, it becomes difficult to predict what's in state
  * State change exercise attempt 1

  * Reducer Image
  * State change exercise attempt 2


##### Vocabulary

- state
  - The variable data of our app
- Redux
  - A library to help us manage state 



### Learning Goal 2: Create a store to manage your app's state [30]

##### Demonstrate 

* Import `createStore` from Redux
* Creating a store in index.js using createStore
* The reducer
* Looking at it with dev tools
* Looking at it with `getState`

##### Vocabulary

- store
  - Protector of the state
- `createStore`
  - a function which creates a store
- reducer
  - A function which takes in state and an action and returns a new state





### Learning Goal 3: Change state by `dispatch`ing  `actions` to your store 

##### Demonstrate

* dispatching actions to change the store
* store changing from redux devtools

##### Vocabulary

* action
  - A plain JavaScript object which represents a users interaction with our app



### Learning Goal 4: Explain why we **must** declaratively update state

##### Demonstrate

- subscribing to the store

- shallow state diff check

  ```javascript
  let lastState;
  store.subscribe( () => {
      let state = store.getState()
      if(state !== lastState){
          lastState = state
          console.log('New State: ', state)
      }
  })
  ```

   
