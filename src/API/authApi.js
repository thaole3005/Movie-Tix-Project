import axiosClient from "./axiosClient";

const login = {
  customerLogin: (taikhoan, matkhau) => {
    const url = "/api/QuanLyNguoiDung/DangNhap";
    return axiosClient.post(url, { taikhoan, matkhau });
  },
};

export default login;
