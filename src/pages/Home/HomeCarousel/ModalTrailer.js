import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Modal";
import closeTrailerImg from '../../../assets/img/closeTrailer.png'

export default function ModalTrailer(props) {
    const {detailMovieSlide} = props;
    // console.log("detailMovieSlide", detailMovieSlide)
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      
        <div className ="close_trailer" onClick={props.onHide}>
            <button className="close_trailer_btn">
                <img src={closeTrailerImg}/>
            </button>
        </div>
        <div className ="movie_trailer w-100">
                <iframe
                width="100%"
                height="100%"
                src={detailMovieSlide.trailer}
                title="movie trailer"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            </div>
      </Modal.Header>
     
     
    </Modal>
    )
}
