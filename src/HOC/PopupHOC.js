import React from 'react';
import Modal from "react-bootstrap/Modal";
import closeTrailerImg from '../assets/img/closeTrailer.png';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_POPUP_TRAILER } from '../redux/actions/types/QuanLyPopupType';


export default function PopupHOC(props) {

  const {popupContent, popupShow} = useSelector(state => state.PopupReducer);
  // console.log("popupShow", popupShow);
  // console.log("popupContent", popupContent)
  // props.show = popupShow;

  const dispatch = useDispatch();

    return (
        <>
             <Modal
      {...props} show ={popupShow} onHide = {() => dispatch({type: CLOSE_POPUP_TRAILER})}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
      
      <div className ="close_trailer" onClick={props.onHide}>
          <button className="close_trailer_btn" 
          onClick = {() => dispatch({type: CLOSE_POPUP_TRAILER})}
          >
              <img src={closeTrailerImg}/>
          </button>
      </div>
      <div className ="movie_trailer w-100">

        {popupContent}
              {/* <iframe
              width="100%"
              height="100%"
              src={detailMovieSlide.trailer}
              title="movie trailer"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe> */}
          </div>
    </Modal.Header>
    </Modal>
        </>
    )
}
