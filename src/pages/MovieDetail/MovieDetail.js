import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieTopSection from './MovieTopSection';
import MovieBottomSection from './MovieBottomSection';
import { layThongTinPhimAction } from '../../redux/actions/QuanLyPhimActions';

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
