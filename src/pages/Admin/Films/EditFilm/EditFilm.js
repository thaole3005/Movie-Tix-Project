import React from 'react'

export default function EditFilm(props) {
    const {movieId} = props.match.params;
    console.log("moviedId", movieId);
    return (
        <div>
            EditFilm {movieId}
        </div>
    )
}
