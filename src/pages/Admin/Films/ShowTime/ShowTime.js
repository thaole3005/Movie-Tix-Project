import React, {useEffect, useState} from 'react';
import { Form, Input, Button, Select, DatePicker, InputNumber  } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { layThongTinHeThongRapAction } from '../../../../redux/actions/QuanLyRapAction';
import { STATUS_CODE } from './../../../../util/setting';
import { http } from '../../../../util/setting';
import { useFormik } from 'formik';
import moment from 'moment';
import { taoLichChieuAction } from '../../../../redux/actions/QuanLyDatVeAction';

export default function ShowTime(props) {


    const [state, setState] = useState({
        arrHeThongRapChieu: [],
        arrCumRapChieu: [],
    })
    // console.log("state", state)
    
    const dispatch = useDispatch();
    
    useEffect(async () => {


        try {
            const {data, status} = await http.get('/api/QuanLyRap/LayThongTinHeThongRap');
            if(status === STATUS_CODE.SUCCESS) {
                setState({
                    ...state,
                    arrHeThongRapChieu: data.content,
                })
            }
        } catch (error) {
            console.log("error", error.response?.data);
        }

      
    }, [])
    
    

    const formik = useFormik({
        initialValues: {
         maPhim: props.match.params.movieId,
         ngayChieuGioChieu: '',
         maRap: '', 
         giaVe: '',
        },
         onSubmit: async (values) => {
             console.log("values khi submit", values);
             dispatch(taoLichChieuAction(values));
         }
     })
    
     

    const convertOptionHTR = () => {
        return state.arrHeThongRapChieu?.map((htr, index) => {
            return {label: htr.tenHeThongRap, value: htr.maHeThongRap};
        })
    }

    const handleChangeHeThongRap = async (valueHtr, optionHtr) => {
        // console.log("valueHtr", valueHtr);
        // console.log("optionHtr", optionHtr);
        //khi ng dùng chọn hệ thống rạp thì lấy valueHtr ng dùng chọn call api lấy cụm rạp
        try {
            const {data, status} = await http.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${valueHtr}`);
            if(status === STATUS_CODE.SUCCESS) {
                setState({
                    ...state,
                    arrCumRapChieu: data.content,
                })
            }
        } catch (error) {
            console.log("error", error.response?.data);
        }
    }


    const handleChangeCumRap = (valueCumRap) => {
        // console.log("valueCumRap", valueCumRap);
        formik.setFieldValue("maRap", valueCumRap);
    }

  
    const onChangeDatePicker = (value, dateString) => {
        // console.log('Selected Time: ', value);
        // console.log('dateString ', dateString);
        formik.setFieldValue("ngayChieuGioChieu", dateString);


      }

      const onOk =(valueDate) => {
        // console.log('onOk: ', valueDate); //valueDate là 1 đối tượng Moment
        // console.log("valueDate format", moment(valueDate).format("DD/MM/YYYY hh:mm:ss"))
        formik.setFieldValue("ngayChieuGioChieu", moment(valueDate).format("DD/MM/YYYY hh:mm:ss"));
      }



    const onChangeInputNumber = (valueNumber) => {
        console.log('valueNumber', valueNumber);
        formik.setFieldValue("giaVe", valueNumber);
    }


    return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onSubmitCapture = {formik.handleSubmit}
      autoComplete="off"
    >
        <h3 className="text-center">TRANG TẠO LỊCH CHIẾU <p className="movieName_showtime mt-2">{props.match.params.tenphim}</p></h3>

      <Form.Item label="Hệ thống rạp" >
        <Select options={convertOptionHTR()} 
        onChange={handleChangeHeThongRap} placeholder="CHọn hệ thống rạp"/>
      </Form.Item>

      <Form.Item label="Cụm rạp" >
        <Select  placeholder="Chọn cụm rạp"
        options = {
            state.arrCumRapChieu?.map(cumRap => ({label: cumRap.tenCumRap, value: cumRap.maCumRap}))
        }
        onChange = {handleChangeCumRap}
        />
      </Form.Item>

      <Form.Item label="Ngày chiếu giờ chiếu" >
        <DatePicker showTime format="DD/MM/YYYY hh:mm:ss"
        onChange={onChangeDatePicker} onOk={onOk} />
      </Form.Item>

      <Form.Item label="Gía vé" >
        <InputNumber min={75000} max={150000} onChange={onChangeInputNumber} />
      </Form.Item>

      <Form.Item label="Tác vụ">
        <Button htmlType="submit">Tạo lịch chiếu</Button>
      </Form.Item>
    </Form>
    )
}
