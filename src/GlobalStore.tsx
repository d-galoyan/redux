import * as React      from 'react'
import {createContext} from 'react'
import {createStore}   from './createStore'

export const GlobalStateCtx    = createContext<any>({})
export const GlobalDispatchCtx = createContext<any>({})

export const combineReducers = <T, A>(reducers: any) => {

    const reducerKeys = Object.keys(reducers)

    return function combination(state: T | {} = {}, action: A | {} = {}) {

        // This is the object we are going to return.
        const nextState = {}

        // Loop through all the reducer keys
        reducerKeys.forEach(val => {

            // Get the current reducer
            const reducer = reducers[val]

            // Get the the previous state
            const previousStateForKey = state[val]

            // Get the next state by running the reducer
            // Update the new state for the current reducer
            nextState[val] = reducer(previousStateForKey, action)
        })

        return nextState
    }
}

export function GlobalStore({children, reducers, initialState}: any) {

    const store = createStore(reducers, initialState)

    return (
        <GlobalStateCtx.Provider value={{
            state   : store.state,
            dispatch: store.dispatch,
        }}>
            <GlobalDispatchCtx.Provider value={store.dispatch}>
                {children}
            </GlobalDispatchCtx.Provider>
        </GlobalStateCtx.Provider>
    )
}
