import React from "react";

import { API_URL, API_KEY_3 } from "../api/api";

class SharedData extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU`;
        fetch(link)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    movies: data.results,
                });
                console.log(this.state.movies);
            });
    }

    render() {
        return this.props.render({
            movies: this.state.movies,
        });
    }
}

export default SharedData;
