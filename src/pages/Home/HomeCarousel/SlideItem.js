import React, {useState} from 'react';
import playBtn from '../../../assets/img/play.png';
import ModalTrailer from './ModalTrailer';

export default function SlideItem(props) {

    const [modalTrailerShow, setModalTrailerShow] =useState(false);

    const {detailMovieSlide} = props;
    return ( <>
        <div className="slide_item">
           
            <div className ="slide_img">
                <img src={detailMovieSlide.hinhAnh} className ="w-100"/>
            </div>
            <div className="open_trailer">
                <a className="open_trailer_btn" onClick={() => setModalTrailerShow(true)}>
                    <img src ={playBtn}/>
                </a>
            </div>

        </div>
            {/* modal trailer movie */}
            <ModalTrailer
            detailMovieSlide = {detailMovieSlide}
            show={modalTrailerShow}
            onHide={() => setModalTrailerShow(false)}
            />
       
    </>
    )
}
