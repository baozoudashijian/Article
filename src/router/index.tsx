import React from 'react';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import GetValueFromEvent from "../component/GetValueFromEvent";

const IRouter:React.FC<{}> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/getvaluefromevent" exact component={GetValueFromEvent} />
            </Switch>
        </BrowserRouter>
    )
}

export default IRouter;
