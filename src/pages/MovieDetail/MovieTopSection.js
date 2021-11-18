import React,{useState, useMemo} from "react";
import playBtn from '../../assets/img/play.png';
import PopupTrailerHOC from '../../HOC/PopupHOC';
import { OPEN_POPUP_TRAILER } from './../../redux/actions/types/QuanLyPopupType';
import { useDispatch } from 'react-redux';


export default function MovieTopSection(props) {


  const { movieInfor } = props;
  console.log(movieInfor)

  const dispatch = useDispatch();


  const renderNgayKhoiChieu = () => {
    let ngayKhoiChieu = new Date(movieInfor.ngayKhoiChieu);
    console.log("ngayKhoiChieu", ngayKhoiChieu);
    let day = ngayKhoiChieu.getDay();
    let month = ngayKhoiChieu.getMonth();
    let year = ngayKhoiChieu.getFullYear();
    console.log(day, month, year);
    if(day < 10) {
        day = `0${day}`;
    }
    if(month < 10) {
        month = `0${month}`;
    }
    let finalNgayKhoiChieu = `${day}.${month}.${year}`;
    console.log("finalNgayKhoiChieu", finalNgayKhoiChieu);
    return finalNgayKhoiChieu;
  }

  return (
    <div className="movie_top_section">
      <img
        src={movieInfor.hinhAnh}
        alt="movie_bg"
        className="img_top_bg"
      />
      <div className="movie_top_section_content">
        <div className="movie_top_section_container container">
          <div className="row align-items-center">

            <div className="col-3">
              <div className="movie_item">
                <div className="card_header p-0">
                  <img
                    className="card-img-top w-100 movie_img"
                    src={movieInfor.hinhAnh}
                    alt
                  />
                  <div className="movie_overlay"></div>
                  <div className="open_trailer">
                    <a
                      className="open_trailer_btn"
                      onClick={() => dispatch(
                          {type: OPEN_POPUP_TRAILER,
                            popupContent:    <iframe
                                width="100%"
                                height="100%"
                                src={movieInfor.trailer}
                                title="movie trailer"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                         })}
                    >
                      <img src={playBtn} />
                    </a>
                  </div>
                </div>
        
              </div>
            </div>

            <div className="col-6 text-white">
                <h6 className="text-white">{renderNgayKhoiChieu()}</h6>
                <h3 className="text-white">{movieInfor.tenPhim}</h3>
                <h4 className="text-white">
                    {movieInfor.dangChieu ? "Đang chiếu" : "Sắp chiếu"}
                </h4>
                <p>100 phút - 0 IMDb - 2D/Digital</p>
            </div>

            <div className="col-3"></div>
          </div>
        </div>
      </div>



      <PopupTrailerHOC/>
    </div>
  );
}
