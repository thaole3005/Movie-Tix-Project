import React, {useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs} from 'antd';
import {layThongTinHeThongRapAction, LayThongTinLichChieuHeThongRapAction, layThongTinLichChieuPhim} from '../../../../redux/actions/QuanLyRapAction';
import { useRouteMatch } from 'react-router-dom'; //dùng để lấy movieId tại url, mà k cần phải truyền propRoute vào


const { TabPane } = Tabs;

export default function LichChieuContent() {
    
    const {arrHeThongRap, thongTinLichChieuPhim, thongTinLichChieuHeThongRap} = useSelector(state => state.QuanLyRapReducer);
    console.log("arrHeThongRap", arrHeThongRap);
    console.log("thongTinLichChieuPhim",thongTinLichChieuPhim)
    console.log("thongTinLichChieuHeThongRap",thongTinLichChieuHeThongRap)

    const match = useRouteMatch();
    // console.log("match", match);

    const firstHtr = useRef('BHDStar');
    
    const dispatch = useDispatch();
    useEffect( async () => {
        //lấy danh sách logo
        await dispatch(layThongTinHeThongRapAction());
        
        //mặc định ms vào trang web thì lấy thông tin lịch chiếu theo mã hệ thống rạp đầu tiên là BHD start
        dispatch(LayThongTinLichChieuHeThongRapAction(firstHtr.current));


        const {movieId} = match.params;
        //lấy thông in phim tương ứng vs movieId
        dispatch(layThongTinLichChieuPhim(movieId));

    }, [])
    

    function callback(key) {
        console.log(key);
        const maHeThongRap = key;
        //khi ng dùng select rạp nào thì call api vs maHeThongRap tương ứng
        dispatch(LayThongTinLichChieuHeThongRapAction(maHeThongRap));
    }

    const renderLichChieuContent = () => {
        return arrHeThongRap?.map((htr, index) => {
            return (
                 <TabPane key={index} tab={<img src={htr.logo} style={{width: 50, height: 50, borderRadius: '50%'}}/>} key={htr.maHeThongRap}>
                    Content of Tab 1
                </TabPane>
            )
        })
    }

    return (
        <div className="mt-5 bg-white">
        <Tabs tabPosition={"left"} onChange={callback}>
            {
                renderLichChieuContent()
            }
            {/* <TabPane tab="Tab 1" key="1">
                Content of Tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                Content of Tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
                Content of Tab 3
            </TabPane> */}
        </Tabs>
        </div>
    )
}
