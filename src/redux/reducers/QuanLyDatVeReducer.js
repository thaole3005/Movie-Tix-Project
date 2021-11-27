
import { CHON_GHE, LAY_THONG_TIN_PHONG_VE } from './../actions/types/QuanLyDatVeType';

const initialState = {
    thongTinPhongVe: {}, 
    arrGheDangChon: [
        {
            daDat: false,
            giaVe: 100000,
            loaiGhe: "Thuong",
            maGhe: 67162,
            maRap: 574,
            stt: "82",
            taiKhoanNguoiDat: null,
            tenGhe: "82",
        },
        {
            daDat: false,
            giaVe: 120000,
            loaiGhe: "Vip",
            maGhe: 67163,
            maRap: 574,
            stt: "83",
            taiKhoanNguoiDat: null,
            tenGhe: "83",
        }
    ],
}

export const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {

    case LAY_THONG_TIN_PHONG_VE: {

        return { ...state, thongTinPhongVe: action.thongTinPhongVe};
    }

    case CHON_GHE: {
        console.log("case CHON_GHE");
        const arrGheDangChonUpdate = [...state.arrGheDangChon];

        //kiểm tra ghế ng dùng chọn đã có trong mảng arrGheDangChon chưa
        let indexGheSelect = arrGheDangChonUpdate.findIndex(ghe => ghe.maGhe === action.gheSelect.maGhe);
        console.log("index", indexGheSelect)
        if(indexGheSelect >=0) {
            //xóa ghê đang chọn
            arrGheDangChonUpdate.splice(indexGheSelect, 1);
        } else {
            //thêm
            let {gheSelect, letter} = action;
            gheSelect["tenGheForm"] = `${letter}${gheSelect.tenGhe}`;
            arrGheDangChonUpdate.push(action.gheSelect);
        }
        state.arrGheDangChon = arrGheDangChonUpdate;
        return {...state};
    }

    default:
        return state
    }
}
