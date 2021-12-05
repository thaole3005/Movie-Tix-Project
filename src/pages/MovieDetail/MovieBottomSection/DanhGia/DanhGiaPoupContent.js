import React from 'react'
import { Fragment, useReducer } from 'react';
import { connect, useSelector } from "react-redux";
import { CLOSE_POPUP_TRAILER } from '../../../../redux/actions/types/QuanLyPopupType';
import { AddDanhGiaAction } from './../../../../redux/actions/QuanLyPopupAction';
import { showConfirm } from './../../../../components/ConfirmAntd/ConfirmAntd';
import { useHistory } from 'react-router-dom';





const initialState = {
    start: 0,
    post: "",
    error: {
        start: "",
        post: "",
    }
}


const ratingReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE": {
            return {
                 ...state,
                 [action.field]: action.data,
            }
        }

        case"CHECK_ERROR": {
            const newError = {...state.error, [action.field]: action.message};
            console.log("newError", newError)
            return {
                ...state,
                error: newError,
            }

        }

        case "SUCCESS": {
            for (let prop in state.error) {
                state.error[prop] ="";
            }
            return {
                ...state,
            }
        }

        default: {
            throw new Error("Unknown action type");
        }
    }
}



function DanhGiaPoupContent(props) {
    const [state, dispatch] = useReducer(ratingReducer, initialState);
    console.log("state", state);
    const {start, post, error} = state;

    const {profile} = useSelector((state) => state.authReducer);
    const history = useHistory();


    const renderStart = () => {
        //tạo mảng 10 -> 1;
        const startArr = Array.from(Array(10), (item, i) => i + 1).reverse();
        return startArr.map((start, index) => {
            return <Fragment key={index}>
                <input
                    type ="radio"
                    name ="rating"
                    id={`${start}start`}
                    value={`${start}`}
                    onChange={(e) =>
                        dispatch({
                          type: "CHANGE",
                          field: "start",
                          data: e.target.value,
                        })
                    }
                />
                <label htmlFor={`${start}start`} title={`${start}sao`}/>
            </Fragment>
        })
    }


    const handleDanhGia = (start, post) => {
        if(start === 0) {
            dispatch({
                type: 'CHECK_ERROR',
                field: "start",
                message: "bạn chưa cho sao kìa !!!"
            })
        }

        if(post.length === 0 || post.trim().length === 0) {
            dispatch({
                type: 'CHECK_ERROR',
                field: "post",
                message: "bạn chưa viết cảm nghĩ kìa !!!"
            })
        }

        if(start>0 && post.trim().length>0) {
            dispatch({
                type: 'SUCCESS',
            })
            
            props.addDanhGia({
                start,
                post,
            });

            props.closeDanhgiaPopup()
        }

    }


    return (
        <div className="rating_popup_section bg-white">
            <div className="rating_popup_header d-flex">
                <div className="rating_popup clearfix">
                    {
                        renderStart()
                    }
                </div>
                <div className ="ml-auto pr-2">
                    <h3>{start}/10</h3>
                </div>
            </div>

            <p className ="text-danger">{error.start}</p>
            <div className = "rating_popup_body">
                <textarea
                     rows="3"
                     placeholder="Cho mọi người được biết cảm nghĩ của bạn về bộ phim này"
                     className="w-100 rating_popup_textarea"
                     value={post}
                     onChange={(e) =>
                        dispatch({
                          type: "CHANGE",
                          field: "post",
                          data: e.target.value,
                        })
                    }
                >
                </textarea>
            </div>
            <p className ="text-danger">{error.post}</p>



            <div className="d-flex btn_popup_group">
                <div className="ml-auto">
                    <button className="btn_dong_popup" 
                        onClick={
                       
                            () => {
                                props.closeDanhgiaPopup()
                            }
                            }
                    >Đóng</button>
                    <button className="btn_dang_popup" onClick={() =>{
                        //phải đăng nhập mới được đánh giá
                        if(Object.keys(profile).length === 0) {
                            showConfirm("Bạn chưa đăng nhập?",
                            <p>Bạn cần đăng nhập để đánh giá</p>,
                            () => {
                                history.push("/login");
                            },
                            
                            "Hủy",
                            "Đăng nhập",
                         
                            )
                        } else {
                            handleDanhGia(start, post)
                        }
                        
                        }}>Đăng</button>
                </div>
            </div>
        </div>
    )
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeDanhgiaPopup: () => {
            dispatch({type: CLOSE_POPUP_TRAILER});
        },

        addDanhGia: (danhgia) => {
            dispatch(AddDanhGiaAction(danhgia))
        }
    }
}


export default connect(null, mapDispatchToProps) (DanhGiaPoupContent);