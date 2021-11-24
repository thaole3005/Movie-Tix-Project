import { ADD_DANH_GIA } from "../actions/types/QuanLyPopupType";

let arrDanhGiaDefault = [];
if(localStorage.getItem("ARRAY_DANH_GIA")) {
    arrDanhGiaDefault = JSON.parse(localStorage.getItem("ARRAY_DANH_GIA"));
}


const initialState = {
    arrDanhGia: arrDanhGiaDefault,
}

export const DanhGiaReducer = (state = initialState, action) => {
    switch (action.type) {

    case ADD_DANH_GIA: {
        const danhGiaObj = {...action.danhgia, danhGiaId:Math.random().toString(36).slice(-10), }
        const arrDanhGiaUpdate = [...state.arrDanhGia];
        arrDanhGiaUpdate.push(action.danhgia);
        state.arrDanhGia = arrDanhGiaUpdate;
        localStorage.setItem('ARRAY_DANH_GIA', JSON.stringify(arrDanhGiaUpdate));
        return { ...state};
    }

    default:
        return state;
    }
}
