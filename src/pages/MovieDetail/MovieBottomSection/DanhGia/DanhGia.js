import React from 'react'
import avatar from '../../../../assets/img/avatar.png';
import { OPEN_POPUP_TRAILER } from '../../../../redux/actions/types/QuanLyPopupType';
import { connect } from "react-redux";
import DanhGiaPoupContent from './DanhGiaPoupContent';
import { Button } from 'antd';
import { useSelector } from 'react-redux';

function DanhGia(props) {

    const {arrDanhGia} = useSelector(state => state.DanhGiaReducer);
    console.log("arrDanhGia", arrDanhGia)

    const {profile} = useSelector((state) => state.authReducer);


    return (
        <div className="danh_gia_section">
         
            <div className="danh_gia_click" onClick={
                       
                        () => {
                            props.openReviewPopup(<DanhGiaPoupContent/>)
                        }
                        }
                         >
                <div>
                   <img className="white_user" src={avatar} style ={{}}/> 
                </div>
                <div className ="ml-2">
                    <p>Bạn nghĩ gì về phim này</p>
                </div>
                <div className="ml-auto">
                    <div className="start_group">
                        {/* make aray from 0 to 4 */}
                        {Array.from(Array(5).keys()).map((start, index) => {
                            return <i className="fa fa-star icon-star" key={index} />
                        })}
                   
                    </div>
                </div>
            </div>

            <div className="cmt_group">
                
                {
                    arrDanhGia.reverse().map((danhGiaItem, index) => {
                        return (
                        <div className="cmt_item" key={index}>
                            <div className="cmt_item_header">
                                <div>
                                    <img className="white_user" src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`}/> 
                                </div>
                                <div className="ml-3">
                                    <p className="cmt_item_name">{profile.taiKhoan}</p>
                                    <span className="cmt_item_time">Vừa xong</span>
                                </div>
                                <div className="cmt_item_start">
                                    <p className="text-center">{danhGiaItem.start/2}</p>
                                    {Array.from(Array(Math.ceil(danhGiaItem.start/2)).keys()).map((start, index) => {
                                    return <i className="fa fa-star icon-star" key={index} />
                                })}
                                <span className="ml-1">1/2</span>
                                </div>
                            </div>

                            <div className="cmt_item_body mt-3">
                                <p>{danhGiaItem.post}</p>
                                <hr className="mt-2"/>
                                <Button type="primary" danger ghost>
                                    <i class="fas fa-thumbs-up"></i>
                                </Button>
                                <span className="ml-2">0 thích</span>
                            </div>
                    </div>
                        )
                    })
                }


                <div className="cmt_item">
                    <div className="cmt_item_header">
                        <div>
                            <img className="white_user" src="https://ui-avatars.com/api/?name=Quan"/> 
                        </div>
                        <div className="ml-3">
                            <p className="cmt_item_name">Quân</p>
                            <span className="cmt_item_time">15 phút trước</span>
                        </div>
                        <div className="cmt_item_start">
                            <p className="text-center">4.5</p>
                            {Array.from(Array(4).keys()).map((start, index) => {
                            return <i className="fa fa-star icon-star" key={index} />
                        })}
                        <span className="ml-1">1/2</span>
                        </div>
                    </div>

                    <div className="cmt_item_body mt-3">
                        <p>Tạm ổn</p>
                        <hr className="mt-2"/>
                        <Button type="primary" danger ghost>
                            <i class="fas fa-thumbs-up"></i>
                        </Button>
                        <span className="ml-2">3 thích</span>
                    </div>
                </div>
            </div>     
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      openReviewPopup: (popupContent) => {
        dispatch({
            type: OPEN_POPUP_TRAILER,
            popupContent,
        });
      },
    };
  };


  export default connect(null, mapDispatchToProps) (DanhGia)