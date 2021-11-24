import { ADD_DANH_GIA } from "./types/QuanLyPopupType";

export const AddDanhGiaAction = (danhgia) => ({
    type: ADD_DANH_GIA,
    danhgia: danhgia,
})