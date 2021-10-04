import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MoviesList from "./hoc/MoviesList";
import MoviesTable from "./hoc/MoviesTable";
import hocMoviesData from "./hoc/hocWithData";

import List from "./renderProp/MoviesList";
import Table from "./renderProp/MoviesTable";
import SharedData from "./renderProp/sharedData";

import Hover from "./hooks/Hover";
import Nav from "./components/Nav";

function App() {
    const MoviesListWithData = hocMoviesData(MoviesList);
    const MoviesTableWithData = hocMoviesData(MoviesTable);

    return (
        <>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/hoc">HOC</Link>
                        </li>
                        <li>
                            <Link to="/renderProp">RenderProp</Link>
                        </li>
                        <li>
                            <Link to="/custom">Custom</Link>
                        </li>
                        <li>
                            <Link to="/hooks">Hooks</Link>
                        </li>
                    </ul>

                    <hr />
                    <Switch>
                        <Route path="/hoc">
                            <MoviesListWithData />
                            <MoviesTableWithData />
                        </Route>
                        <Route path="/renderProp">
                            <SharedData
                                render={({ movies }) => (
                                    <Table movies={movies} />
                                )}
                            />
                            <SharedData
                                render={({ movies }) => (
                                    <List movies={movies} />
                                )}
                            />
                        </Route>
                        <Route path="/custom">
                            <Hover />
                        </Route>
                        <Route path="/hooks">
                            <Nav />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
