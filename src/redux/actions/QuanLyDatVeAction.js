
import { http, STATUS_CODE } from '../../util/setting';
import { CHON_GHE, LAY_THONG_TIN_PHONG_VE } from './types/QuanLyDatVeType';


export const layDanhSachPhongVeAction = (maLichChieu) => {
    return async dispatch => {
        try {
            const {data, status} = await http.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
            // console.log("data in layDanhSachPhongVeAction", data);
            if(status === STATUS_CODE.SUCCESS) {
                dispatch({
                    type: LAY_THONG_TIN_PHONG_VE,
                    thongTinPhongVe: data.content,
                })
            }
        } catch (error) {
            console.log("error", error.response?.data);
        }
    }
}


export const chonGheAction = (gheSelect,letter) => {
    return {
        type: CHON_GHE,
        gheSelect,
        letter,
    }
}

