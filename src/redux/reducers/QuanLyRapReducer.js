import { GET_ARRAY_HE_THONG_RAP, LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP, LAY_THONG_TIN_LICH_CHIEU_PHIM } from './../actions/types/QuanLyRapType';

const initialState = {
    thongTinLichChieuPhim: {},
    arrHeThongRap: [],
    thongTinLichChieuHeThongRap: [],
}

export const QuanLyRapReducer = (state = initialState, action) => {
    switch (action.type) {

    case LAY_THONG_TIN_LICH_CHIEU_PHIM: {
        state.thongTinLichChieuPhim = action.thongTinLichChieuPhim;
        return { ...state };
    }

    case GET_ARRAY_HE_THONG_RAP: {
        state.arrHeThongRap = action.arrHeThongRap;
        return { ...state };
    }


    case LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP: {
        state.thongTinLichChieuHeThongRap = action.thongTinLichChieuHeThongRap;
        return { ...state };
    }
    default:
        return state
    }
}
