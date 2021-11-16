import React, {useEffect} from 'react';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import SearchBar from './../../components/Home/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachPhimAction } from './../../redux/actions/QuanLyPhimActions';
import MovieShow from '../../components/Home/MovieShow/MovieShow';
import ShowTime from './../../components/Home/ShowTime/ShowTime';

export default function Home(props) {

    const {arrMovie} = useSelector(state => state.QuanLyPhimReducer);
    // console.log("arrMovie",arrMovie);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LayDanhSachPhimAction());
    }, [])
    
    return (
        <div style={{paddingTop: 70, height: 2000}} >
            <HomeCarousel className ="pb-5"/>
            <SearchBar arrMovie={arrMovie}/>
            <MovieShow arrMovie={arrMovie} {...props}/>
            <ShowTime/>
        </div>
    )
}
