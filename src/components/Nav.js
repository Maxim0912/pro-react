import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import Parent from "../components/useCallback/Parent";
import Main from "../components/useContext/Main";
import UsersList from "../components/useEffect/UseEffect";
import Counter from "../components/useReducer/useReducer";

const Nav = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}/callback`}>Callback</Link>
                </li>
                <li>
                    <Link to={`${url}/context`}>Context</Link>
                </li>
                <li>
                    <Link to={`${url}/effect`}>Effect</Link>
                </li>
                <li>
                    <Link to={`${url}/reducer`}>Reducer</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/callback`}>
                    <Parent />
                </Route>
                <Route path={`${path}/context`}>
                    <Main />
                </Route>
                <Route path={`${path}/effect`}>
                    <UsersList />
                </Route>
                <Route path={`${path}/reducer`}>
                    <Counter />
                </Route>
            </Switch>
        </div>
    );
};

export default Nav;
