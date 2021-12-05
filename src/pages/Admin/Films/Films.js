import React, {useEffect} from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { LayDanhSachPhimAction, xoaPhimAction } from './../../../redux/actions/QuanLyPhimActions';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import SmallPopConfirm from './../../../components/SmallPopConfirm/SmallPopConfirm';
import {
    EditOutlined,
    DeleteOutlined,
    CalendarOutlined,
  } from '@ant-design/icons';

export default function Films(props) {
    const {arrMovie} = useSelector(state => state.QuanLyPhimReducer);
    console.log("arrMovie in admin", arrMovie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LayDanhSachPhimAction());
    }, [])



    
const columns = [
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      sorter: (phim2, phim1) => phim2.maPhim - phim1.maPhim,
      sortDirections: ['ascend', 'descend', 'ascend'],
      defaultSortOrder: "ascend",
      width: 150,
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: (text, phim, index) => {
          return <Fragment key={index}>
            <img src={phim.hinhAnh} alt={phim.tenPhim} style ={{width: 60, height: 60}} onError = {(e) => {
                     e.target.onerror = null;
                     e.target.src = 'https://picsum.photos/60';
                }}/>
          </Fragment>
      },
      width: 150,
    },
    {
        title: 'Tên Phim',
        dataIndex: 'tenPhim',
        sorter: (phim2, phim1) => {
            let tenPhim1 = phim1.tenPhim.toLowerCase().trim();
            let tenPhim2 = phim2.tenPhim.toLowerCase().trim();
            if(tenPhim2 > tenPhim1) {
                return 1;
            }
            return -1;
        },
        sortDirections: ['ascend', 'descend', 'ascend'],
        defaultSortOrder: "ascend",
      },
    {
        title: 'Mô tả',
        dataIndex: 'moTa',
        sorter: (phim2, phim1) => {
            let moTa2 = phim2.moTa.toLowerCase();
            let moTa1 = phim1.moTa.toLowerCase();
            if(moTa2 > moTa1) {
                return 1;
            }
            return -1;
        }, 
        render: (text, phim) => {
            return <Fragment>
                {phim.moTa.length > 50 ? phim.moTa.substr(0,50) + '...' : phim.moTa}
            </Fragment>
        },
        sortDirections: ['ascend', 'descend', 'ascend'],
        defaultSortOrder: "ascend",
      },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, phim, index) => {
          return <div key={index} className="text-center">
              <NavLink to={`/admin/films/editfilm/${phim.maPhim}`} className="edit_button"><EditOutlined /></NavLink>
              <NavLink to={`/admin/films/showtime/${phim.maPhim}`} className="showtime_button mx-1"><CalendarOutlined /></NavLink>
              {/* <button className="delete_button mx-1">
                  <DeleteOutlined />
              </button> */}
            <SmallPopConfirm
            title ={<p>Bạn có chắc muốn xóa phim <span className="text-danger">{phim.tenPhim}</span></p>}
            okText="Xóa"
            cancelText="Hủy"
            confirmCallBack = {() => {
                dispatch(xoaPhimAction(phim.maPhim))
            }}
            >
                <button className="delete_button">
                    <DeleteOutlined />
                </button>
            </SmallPopConfirm>

          </div>
      },
      width: 200,

    },
  ];


  const data = arrMovie;

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }




    return (
        <div className="container film_section">
            <h2 className="text-center">Quản lí Phim</h2>
            <Table columns={columns} dataSource={data} onChange={onChange} 
            rowKey="maPhim"
            pagination={{ position: ["none", "bottomCenter"] }}
            />
        </div>
    )
}
