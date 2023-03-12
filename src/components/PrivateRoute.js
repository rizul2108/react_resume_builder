import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {isLoaded,isEmpty} from 'react-redux-firebase';
import {useSelector} from 'react-redux';
// similar to mapStateToProps
const PrivateRoute=()=> {
const auth = useSelector(state=>state.firebase.auth)
    return (
        (isLoaded(auth) && (!isEmpty(auth))) ?
        (<Outlet/>):(<Navigate to='/register'/> )
    )

}

export default PrivateRoute
