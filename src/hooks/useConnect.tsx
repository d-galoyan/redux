import {useContext}    from "react";
import React           from "react";
import {GlobalContext} from "../commons";

export const useConnect = (
    mapStateToProps: Function    = () => {
    },
    mapDispatchToProps: Function = () => {
    }
) => (WrappedComponent: any) => {
    return (props: any) => {
        const {dispatch, state} = useContext<any>(GlobalContext)
        return (
            <WrappedComponent
                {...mapStateToProps(state, props)}
                {...mapDispatchToProps(dispatch, props)}
            />
        )
    }
}
