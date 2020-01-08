import {useContext}        from 'react'
import {GlobalDispatchCtx} from '../GlobalStore'

export const useDispatch = () => {
    return useContext(GlobalDispatchCtx)
}
