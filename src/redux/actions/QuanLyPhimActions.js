import { http } from '../../util/setting';
import { GROUP_ID, STATUS_CODE } from './../../util/setting';
import { LAY_DANH_SACH_FULL_PHIM } from './types/QuanLyPhimType';

export const LayDanhSachPhimAction = (tenPhim = '') => { //nếu danh sách phim là rỗng thì có nghĩa là lấy full danh sách phim
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
    }
 
}