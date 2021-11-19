const redux = require('redux')

const initialState = { counter: 0 }

// The reducer function
// An initialState is assigned to the oldState for when the app initializes and avoid an undefined error 
// The state argument holds the old or current state before any mutation happens within the reducer
// The reducer will mutate the passed state argument depending on what action type was passed
// And finally it will return the state whether its been mutated or not
const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                counter: state.counter - 1
            }
        default:
            return state
    }
}

// The store which uses the counterReducer function
const store = redux.createStore(counterReducer)

// A function that will subscribe to the store
const counterSubscriber = () => {
    const latestState = store.getState()
    console.log('Latest State', latestState)
}

// Call the store and subscribe the counterSubscriber
store.subscribe(counterSubscriber)

// Call the store to dispatch an action in the reducer
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })