import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinHeThongRapAction } from "../../../redux/actions/QuanLyRapAction";
import { Tabs, Radio, Space } from "antd";
import { LayThongTinLichChieuHeThongRapAction } from './../../../redux/actions/QuanLyRapAction';
const { TabPane } = Tabs;

export default function ShowTimeBody(props) {
//   const { arrHeThongRap, thongTinLichChieuHeThongRap} = useSelector(state => state.QuanLyRapReducer);
// console.log("arrHeThongRap in body", arrHeThongRap);

  const arrHeThongRap = useSelector(state => state.QuanLyRapReducer.thongTinLichChieuHeThongRap);
  console.log("arrHeThongRap", arrHeThongRap);


  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(layThongTinHeThongRapAction());
    dispatch(LayThongTinLichChieuHeThongRapAction());
  }, []);


  const [state, setState] = useState({
    tabPosition: 'left',
  });

  const {tabPosition} = state;



  const renderShowTime = () => {
    return arrHeThongRap?.map((htr, index) => {
        return (
            <TabPane tab={<img src={htr.logo} style={{width: 50, height: 50, borderRadius: '50%'}}/>} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {
                        htr.lstCumRap?.map((cumRap, index) => {
                            return <TabPane key={index} tab ={
                                <div className="cum_rap text-left">
                                    <div className="d-flex justify-content-between">
                                        <img src={cumRap.hinhAnh} style={{width: 50, height: 50}}/>
                                        <div className="ml-3">
                                            <p>{cumRap.tenCumRap}</p>
                                            <p style={{fontSize:'12px', color:'gray'}}>{cumRap.diaChi} </p>
                                            <span className="p-1 bg-success text-white">Xem chi tiết</span>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            }>
                                {/* load danh sách của từng cụm rạp */}

                            {
                                cumRap.danhSachPhim?.map((phim,index) => {
                                    return <div key={index}>
                                        <div className="d-flex my-2">
                                            <img src ={phim.hinhAnh} alt={phim.tenPhim} style={{width: 50, height: 50}}/>
                                            <div>
                                                {phim.tenPhim}
                                            </div>
                                            <hr/>
                                        </div>
                                    </div>
                                })
                            }

                            </TabPane>
                        })
                    }
                </Tabs>
            </TabPane>
        )
    })
  }


  return (
    <div>
      <Tabs tabPosition={tabPosition}>
            {renderShowTime()}
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
  );
}
