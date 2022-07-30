import React from 'react';
import { Navigate, Route } from 'react-router-dom';

function PrivateRouter({
    isAuthenticated,
    component: Component,
    ...rest
}) {
    return (
        <Route {...rest}
        component={ (props)=>((isAuthenticated)
            ? (<Component {...props}/>)
            : (<Navigate to='/login'/>)
        )}
        />
    );
}

export default PrivateRouter;