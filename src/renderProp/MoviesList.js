import React from "react";

const MoviesList = ({ movies }) => {
    if (movies.length) {
        return (
            <div>
                {movies.map((movie) => {
                    return <div key={movie.id}>{movie.original_title}</div>;
                })}
            </div>
        );
    } else return <div>Loading...</div>;
};

export default MoviesList;
