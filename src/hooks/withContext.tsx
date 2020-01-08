import * as React      from 'react'
import {useContext}    from 'react'
import {GlobalContext} from '../commons'

export function withContext<T>(Component: React.FC<T>, selector : Function) {

    const WrappedComponent = React.memo<React.FC<T>>(Component)

    return (props: T) => {

        return <WrappedComponent {...props} {...selector(useContext(GlobalContext))}/>
    }
}

export default withContext
