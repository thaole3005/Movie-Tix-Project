
import { http, STATUS_CODE } from '../../util/setting';
import { CHON_GHE, LAY_THONG_TIN_PHONG_VE, CHANGE_PAGE, TIEP_TUC_MUA_VE } from './types/QuanLyDatVeType';
import Swal from 'sweetalert2';
import { showMessage } from './../../components/ShowMessage/ShowMessage';

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


export const changePageAction = (pageName) => {
    return {
        type: CHANGE_PAGE,
        pageName: pageName,
    }
}


export const tiepTucMuaVeAction = () => {
    return {
        type: TIEP_TUC_MUA_VE,
    }
}


export const datVeAction = (thongTinDatVe) => {
    return async dispatch => {
        try {
            const {data, status} = await http.post("/api/QuanLyDatVe/DatVe", thongTinDatVe);
            console.log("data in datVeAction", data);
            if(status === STATUS_CODE.SUCCESS) {
                //alert xong thì mới dispatch chuyển trang
                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Đặt vé và thanh toán thành công',
                    showConfirmButton: false,
                    timer: 1500
                  })
                dispatch(changePageAction("result"));
            }

        } catch (error) {
            console.log("error", error.response?.data);
        }
    }
}




export const taoLichChieuAction = (lichChieu) => {
    return async (dispatch) => {
        try {
            const {data, status} = await http.post('/api/QuanLyDatVe/TaoLichChieu', lichChieu);
            console.log("data in taoLichChieuAction", data);
            if(status === STATUS_CODE.SUCCESS) {
                //thêm phim thành công thì gọi action call api lấy arrMovie mới nhất
                showMessage("success", "Tạo lịch chiếu thành công");
            }
        } catch (error) {
            showMessage("error", "Tạo lịch chiếu thất bại");
            console.log("error", error.response?.data);
        }
    }
}
