import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tabs } from "antd";
import {
  layThongTinHeThongRapAction,
  LayThongTinLichChieuHeThongRapAction,
  layThongTinLichChieuPhim,
} from "../../../../redux/actions/QuanLyRapAction";
import { useRouteMatch } from "react-router-dom"; //dùng để lấy movieId tại url, mà k cần phải truyền propRoute vào
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { CalendarOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function LichChieuContent() {
  const { arrHeThongRap, thongTinLichChieuPhim, thongTinLichChieuHeThongRap } =
    useSelector((state) => state.QuanLyRapReducer);
  // console.log("arrHeThongRap", arrHeThongRap); //?để hiển thị tab logo
  console.log("thongTinLichChieuPhim", thongTinLichChieuPhim);
  console.log("thongTinLichChieuHeThongRap", thongTinLichChieuHeThongRap);
  const [arrHtrOfMovieSelect, setArrHtrOfMovieSelect] = useState([]);
  console.log("arrHtrOfMovieSelect", arrHtrOfMovieSelect);

  const match = useRouteMatch();
  console.log("match", match);

  //?đầu tiên mặc định cho select htr BHDStar trước
  const maHtrSelect = useRef("BHDStar");
  // console.log("maHtrSelect", maHtrSelect.current)

  const dispatch = useDispatch();
  useEffect(async () => {
    //lấy danh sách logo
    await dispatch(layThongTinHeThongRapAction());

    //mặc định ms vào trang web thì lấy thông tin lịch chiếu theo mã hệ thống rạp đầu tiên là BHD start
    dispatch(LayThongTinLichChieuHeThongRapAction(maHtrSelect.current));

    const { movieId } = match.params;
    // movieId.current = movieId;
    //lấy thông in phim tương ứng vs movieId
    dispatch(layThongTinLichChieuPhim(movieId));
  }, []);

  useEffect(() => {
    console.log("helo");
    const arrHtrOfMovieSelect = [];
    //nếu object thongTinLichChieuPhim láy về khác rỗng
    if (Object.keys(thongTinLichChieuPhim).length !== 0) {
      thongTinLichChieuPhim.heThongRapChieu.forEach((htr) => {
        if (htr.maHeThongRap === maHtrSelect.current) {
          arrHtrOfMovieSelect.push(htr);
        }
      });
      console.log("arrHtrOfMovieSelect", arrHtrOfMovieSelect);
    }
    setArrHtrOfMovieSelect(arrHtrOfMovieSelect);
  }, [thongTinLichChieuHeThongRap]);

  function callback(key) {
    console.log(key);
    maHtrSelect.current = key;
    const maHeThongRap = key;
    //khi ng dùng select rạp nào thì call api vs maHeThongRap tương ứng
    dispatch(LayThongTinLichChieuHeThongRapAction(maHeThongRap));
  }

  const renderInforLichChieu = () => {
    if (arrHtrOfMovieSelect.length > 0) {
      return arrHtrOfMovieSelect.map((htr, index) => {
        return htr.cumRapChieu.map((cumRap, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="d-flex">
                  <img src={cumRap.hinhAnh} style={{ width: 50, height: 50 }} />
                  <p>{cumRap.diaChi}</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {
                  <div className="infor_phim_item">
                    <p>2D Digitial</p>
                    <div className="d-flex lich_chieu_list">
                      {cumRap.lichChieuPhim
                        .slice(0, 10)
                        .map((lichChieuItem, index) => {
                          return (
                            <>
                              <span className="lich_chieu_item">
                                <CalendarOutlined
                                  className="mr-2 text-danger"
                                  style={{ fontSize: 18 }}
                                />
                                <NavLink
                                  to={`/ticketroom/${lichChieuItem.maLichChieu}`}
                                  className="lich_chieu_navlink"
                                >
                                  {moment(
                                    lichChieuItem.ngayChieuGioChieu
                                  ).format("DD/MM/YYYY hh:mm A")}
                                </NavLink>
                              </span>
                            </>
                          );
                        })}
                    </div>
                  </div>
                }
              </AccordionDetails>
            </Accordion>
          );
        });
      });
    } else {
      return <p>Không có suất chiếu</p>;
    }
  };

  const renderLichChieuContent = () => {
    return arrHeThongRap?.map((htr, index) => {
      return (
        <TabPane
          key={index}
          tab={
            <img
              src={htr.logo}
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          }
          key={htr.maHeThongRap}
        >
          {renderInforLichChieu()}
        </TabPane>
      );
    });
  };

  return (
    <div className="bg-white">
      <Tabs tabPosition={"left"} onChange={callback}>
        {renderLichChieuContent()}
      </Tabs>
    </div>
  );
}
