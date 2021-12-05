import { http } from '../../util/setting';
import { GROUP_ID, STATUS_CODE } from './../../util/setting';
import { LAY_DANH_SACH_FULL_PHIM, LAY_THONG_TIN_PHIM} from './types/QuanLyPhimType';
import { showMessage } from './../../components/ShowMessage/ShowMessage';
import { history } from '../../App';

export const LayDanhSachPhimAction = (tenPhim = '') => { //nếu tên phim là rỗng thì có nghĩa là lấy full danh sách phim
    if( tenPhim === '') {
        //lấy full danh sách phim
        return async dispatch => {
            try {
                const {data, status} = await http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
                // console.log("data in LayDanhSachPhimAction", data);
                if(status === STATUS_CODE.SUCCESS) {
                    dispatch({
                        type: LAY_DANH_SACH_FULL_PHIM,
                        arrMovie: data.content,
                    })
                }
            } catch (error) {
                console.log("error", error.response?.data);
            }
        }
    } else {
        //nếu có truyền vào tên phim
        return async dispatch => {
            try {
                const {data, status} = await http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`);
                // console.log("data in LayDanhSachPhimAction", data);
                if(status === STATUS_CODE.SUCCESS) {
                    dispatch({
                        type: LAY_DANH_SACH_FULL_PHIM,
                        arrMovie: data.content,
                    })
                }
            } catch (error) {
                console.log("error", error.response?.data);
            }
        }
    }
 
}


export const layThongTinPhimAction = (maPhim) => {
        return async dispatch => {
            try {
                const {data, status} = await http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
                // console.log("data in layThongTinPhimAction", data);
                if(status === STATUS_CODE.SUCCESS) {
                    dispatch({
                        type: LAY_THONG_TIN_PHIM,
                        movieInfor: data.content,
                    })
                }
            } catch (error) {
                console.log("error", error.response?.data);
            }
        }
}



export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const {data, status} = await http.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
            // console.log("data in xoaPhimAction", data);
            if(status === STATUS_CODE.SUCCESS) {
                //xóa thành công thì gọi action call api lấy arrMovie mới nhất
                showMessage("success", "Xóa phim thành công");
                dispatch(LayDanhSachPhimAction())
            }
        } catch (error) {
            showMessage("error", "Xóa phim thất bại");
            console.log("error", error.response?.data);
        }
    }
}



export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            const {data, status} = await http.post('/api/QuanLyPhim/ThemPhimUploadHinh', formData);
            console.log("data in themPhimUploadHinhAction", data);
            if(status === STATUS_CODE.SUCCESS) {
                //thêm phim thành công thì gọi action call api lấy arrMovie mới nhất
                showMessage("success", "Thêm phim thành công");
                dispatch(LayDanhSachPhimAction())
            }
        } catch (error) {
            showMessage("error", "Thêm phim thất bại");
            console.log("error", error.response?.data);
        }
    }
}


export const capNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {
            const {data, status} = await http.post('/api/QuanLyPhim/CapNhatPhimUpload', formData);
            console.log("data in capNhatPhimUploadAction", data);
            if(status === STATUS_CODE.SUCCESS) {
                //thêm phim thành công thì gọi action call api lấy arrMovie mới nhất
                showMessage("success", "Update phim thành công");
                history.push("/admin/films");
                // window.location.reload();
                // dispatch(LayDanhSachPhimAction())
            }
        } catch (error) {
            showMessage("error", "Update phim thất bại");
            console.log("error", error.response?.data);
        }
    }
}