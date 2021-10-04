import React from "react";

const MoviesTable = ({ movies }) => {
    if (movies.length) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>original_title</th>
                        <th>original_language</th>
                        <th>popularity</th>
                        <th>release_date</th>
                        <th>vote_average</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.original_title}</td>
                            <td>{movie.original_language}</td>
                            <td>{movie.popularity}</td>
                            <td>{movie.release_date}</td>
                            <td>{movie.vote_average}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    } else return <div>No data</div>;
};

export default MoviesTable;
