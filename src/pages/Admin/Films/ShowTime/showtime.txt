import React from 'react'

export default function ShowTime(props) {
    const {movieId} = props.match.params;

    return (
        <div>
            <h2>Trang tạo lịch chiếu {movieId}</h2>
        </div>
    )
}
