import * as React       from 'react'
import {useContext}     from 'react'
import {GlobalStateCtx} from '../GlobalStore'

export function withStore<T>(Component: React.FC<T>, selector: Function) {

    const WrappedComponent = React.memo<React.FC<T>>(Component)

    return (props: T) => {

        return <WrappedComponent {...props} {...selector(useContext(GlobalStateCtx).state)}/>
    }

}

export default withStore
