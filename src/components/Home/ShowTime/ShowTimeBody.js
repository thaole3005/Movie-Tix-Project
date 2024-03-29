import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinHeThongRapAction } from "../../../redux/actions/QuanLyRapAction";
import { Tabs, Radio, Space } from "antd";
import { LayThongTinLichChieuHeThongRapAction } from './../../../redux/actions/QuanLyRapAction';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';
import moment from "moment";
import { CalendarOutlined } from '@ant-design/icons';

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
                                    return (
                                      <div key = {index}>
                                      <Accordion>
                                        <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                        >
                                          <div className="d-flex my-2">
                                               <img src ={phim.hinhAnh} alt={phim.tenPhim} style={{width: 50, height: 50}}/>
                                               <div className="ml-2 phim_name" style ={{fontSize: 20,}}>
                                                   {phim.tenPhim} 
                                               </div>
                                               <hr/>
                                           </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        

                                          <div className="infor_phim_item">
                                            <p>2D Digitial</p>
                                              <div className="d-flex lich_chieu_list">
                                              {
                                                  phim.lstLichChieuTheoPhim.slice(0,10).map((lichChieuItem, index) => {
                                                    return <Fragment key={index}>
                                                        <span className="lich_chieu_item">
                                                          <CalendarOutlined className="mr-2 text-danger" style ={{fontSize:18}}/>
                                                          <NavLink to={`/ticketroom/${lichChieuItem.maLichChieu}`} className="lich_chieu_navlink">
                                                          {moment(lichChieuItem.ngayChieuGioChieu).format('DD/MM/YYYY hh:mm A')}
                                                          </NavLink>
                                                        </span>
                                                    </Fragment>
                                                  
                                                  })
                                                }
                                              </div>
                                          </div>
                                        </AccordionDetails> 
                                       
                                      </Accordion>
                                    
                                    </div>
                                    )
                                    
                                    

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
    <div className="container">
      <Tabs tabPosition={tabPosition}>
            {renderShowTime()}
      
      </Tabs>

    </div>
  );
}
