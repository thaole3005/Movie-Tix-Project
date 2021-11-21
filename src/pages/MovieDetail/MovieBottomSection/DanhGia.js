import React from 'react'
import avatar from '../../../assets/img/avatar.png';


export default function DanhGia(props) {
    return (
        <div className="danh_gia_section">
         
            <div className="danh_gia_click">
                <div>
                   <img className="white_user" src={avatar} style ={{}}/> 
                </div>
                <div className ="ml-2">
                    <p>Bạn nghĩ gì về phim này</p>
                </div>
                <div className="ml-auto">
                    <div className="start_group">
                    <i className="fa fa-star icon-star" />
                    <i className="fa fa-star icon-star" />
                    <i className="fa fa-star icon-star" />
                    <i className="fa fa-star icon-star" />
                    <i className="fa fa-star icon-star" />
                    </div>
                </div>
            </div>
        </div>
    )
}
