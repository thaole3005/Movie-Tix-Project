import React, {useState} from "react";
import playBtn from '../../../assets/img/play.png';
import ModalTrailer from './../../../pages/Home/HomeCarousel/ModalTrailer';
import { NavLink } from 'react-router-dom';

export default function MovieItem(props) {

    const [modalTrailerShow, setModalTrailerShow] =useState(false);
    const {detailMovieItem} = props;

  return (
      <div>
        <div className="movie_item">
            <div className="card_header p-0">
                <img className="card-img-top w-100 movie_img" src={detailMovieItem.hinhAnh} alt />
                <div className="movie_overlay"></div>
                <div className="open_trailer">
                    <a className="open_trailer_btn" onClick={() => setModalTrailerShow(true)}>
                        <img src ={playBtn}/>
                    </a>
            </div>
            </div>
        <div className="card-body mt-2">
            <div className=" d-flex flex-row justify-content-between align-items-center">
                <span className="c10">C10</span>
                <p className="movie_name ml-2">{detailMovieItem.tenPhim.slice(0,20)}</p>
            </div>
            <div className="mua_ve_btn">
                <span>Mua vé</span>
            </div>
        </div>
        </div>

        <ModalTrailer
            detailMovieSlide = {detailMovieItem}
            show={modalTrailerShow}
            onHide={() => setModalTrailerShow(false)}
            />
    </div>
  );
}
