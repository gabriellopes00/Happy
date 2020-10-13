//React imports
    import React from 'react';
    import {BrowserRouter, Switch, Route } from 'react-router-dom';
//Page imports
    import Landing from './pages/Landing'
    import OrphanagesMap from './pages/OrphanagesMap'

//Routes imports
    function Routes(){
        return (
        
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/app" component={OrphanagesMap}/>
                </Switch>
            </BrowserRouter>
            
        );
    }

export default Routes;