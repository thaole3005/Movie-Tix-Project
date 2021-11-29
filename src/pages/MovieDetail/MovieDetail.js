import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinPhimAction } from '../../redux/actions/QuanLyPhimActions';
import MovieBottomSection from './MovieBottomSection/MovieBottomSection';
import MovieTopSection from './MovieTopSection/MovieTopSection.jsx';

export default function MovieDetail(props) {
    // console.log("props in MovieDetail", props);
    const {movieInfor} = useSelector(state => state.QuanLyPhimReducer);
    // console.log("movieInfor", movieInfor)
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("movieId", props.match.params.movieId);
        const maPhim = Number(props.match.params.movieId);
        dispatch(layThongTinPhimAction(maPhim));
    }, [])

    return (
        <div className="movie_detail_section">
            <MovieTopSection movieInfor = {movieInfor}/>
            <MovieBottomSection/>
        </div>
    )
}
