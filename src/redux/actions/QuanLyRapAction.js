import {http} from '../../util/setting';
import { GET_ARRAY_HE_THONG_RAP, LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP, LAY_THONG_TIN_LICH_CHIEU_PHIM} from './types/QuanLyRapType';
import { STATUS_CODE, GROUP_ID } from './../../util/setting';

export const layThongTinLichChieuPhim = (maPhim) => {
    // console.log("maPhim in layThongTinLichChieuPhim", maPhim);
    return async dispatch => {
        try {
            const {data, status} = await http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
            // console.log("data in layThongTinLichChieuPhim", data);
            if(status === STATUS_CODE.SUCCESS) {
                dispatch ({
                    type: LAY_THONG_TIN_LICH_CHIEU_PHIM,
                    thongTinLichChieuPhim: data.content,
                })
            }
        } catch (error) {
            console.log("error", error.response?.data);
        }
    }
}



export const layThongTinHeThongRapAction = (maHeThongRap ='') => {
    //lấy full danh sách hệ thống rạp
    return async dispatch => {
        try {
            const {data, status} = await http.get('/api/QuanLyRap/LayThongTinHeThongRap');
            // console.log("data in layThongTinHeThongRap", data);
            if(status === STATUS_CODE.SUCCESS) {
                dispatch ({
                    type: GET_ARRAY_HE_THONG_RAP,
                    arrHeThongRap: data.content,
                })
            }
        } catch (error) {
            console.log("error", error.response?.data);
        }
    }
}






export const LayThongTinLichChieuHeThongRapAction = (maHeThongRap = '') => { 

    if (maHeThongRap === '') {
        //!nếu maHeThongRap === '' thì lấy tất cả thông tin lịch chiếu của tất cả các rạp
        return async dispatch => {
            try {
                const {data, status} = await http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
                // console.log("data in LayThongTinLichChieuHeThongRapAction", data);
                if(status === STATUS_CODE.SUCCESS) {
                    dispatch ({
                        type: LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
                        thongTinLichChieuHeThongRap: data.content,
                    })
                }
            } catch (error) {
                console.log("error", error.response?.data);
            }
        }
    }

    //!nếu maHeThongRap !== '' thì nghĩa là chỉ call api để lấy thông tin của rạp mà ng dùng select thôi
    return async dispatch => {
        try {
            const {data, status} = await http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${GROUP_ID}`);
            // console.log("data in LayThongTinLichChieuHeThongRapAction", data);
            if(status === STATUS_CODE.SUCCESS) {
                dispatch ({
                    type: LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
                    thongTinLichChieuHeThongRap: data.content,
                })
            }
        } catch (error) {
            console.log("error", error.response?.data);
        }
    }
}


// export const layThongTinLichChieuAction = (maPhim) => {
//     return async dispatch => {
//         try {
//             const {data, status} = await http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
//             console.log("data in layThongTinLichChieuAction", data);
//             if(status === STATUS_CODE.SUCCESS) {
//                 dispatch({
//                     type: LAY_THONG_TIN_LICH_CHIEU_PHIM,
//                     movieLichChieuInfor: data.content,
//                 })
//             }
//         } catch (error) {
//             console.log("error", error.response?.data);
//         }
//     }
// }

