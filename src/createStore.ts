import {useReducer} from 'react'

const compose = (...funcs: any[]) => (x: any) =>
    funcs.reduceRight((composed, f) => f(composed), x)

export const createStore = <R, I, A>(reducer: R, initialState: I, middlewares?: [] | undefined) => {
    // @ts-ignore
    const [state, dispatch] = useReducer<any, any>(reducer, initialState)

    if (typeof middlewares !== 'undefined') {
        const middlewareAPI    = {
            getState: () => state,
            dispatch: (action: A) => dispatch(action),
        }
        const chain            = middlewares.map((middleware: any) => middleware(middlewareAPI))
        const enhancedDispatch = compose(...chain)(dispatch)
        return {state, dispatch: enhancedDispatch}
    }

    return {state, dispatch}
}
