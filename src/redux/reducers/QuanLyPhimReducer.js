import { LAY_DANH_SACH_FULL_PHIM } from './../actions/types/QuanLyPhimType';

const initialState = {
    arrBanner: [
        {
            "maPhim": 8373,
            "tenPhim": "Siêu Trộm - Way Down (Phần 2)",
            "biDanh": "sieu-trom-way-down-phan-2-",
            "trailer": "https://www.youtube.com/embed/dj5xakfaKw8",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-trom-way-down_gp01.jpg",
            "moTa": "Đặc vụ Interpol xuất sắc nhưng khác thường phá vỡ luật lệ khi tập hợp bè lũ trộm cắp hòng bắt cho bằng được tên hacker mờ ám mang biệt danh \"Bóng ma\".",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-10-11T16:56:16.397",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "maPhim": 8327,
            "tenPhim": "Crow Zero 1",
            "biDanh": "crow-zero-1",
            "trailer": "https://www.youtube.com/watch?v=0qaStyeKpLo&feature=emb_logo",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/crow-zero-1_gp01.jpg",
            "moTa": "Crows Zero là một bộ phim điện ảnh Nhật Bản dựa trên truyện tranh Crows của tác giả Takahashi Hiroshi. Phim được đạo diễn bởi Miike Takashi, biên kịch Shogo Muto. Nội dung phim xoay quanh các học sinh trường Trung học Suzuran, ngôi trường nổi tiếng về bạo lực",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-10-11T13:47:16.17",
            "danhGia": 9,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "maPhim": 8244,
            "tenPhim": "Squid Game ",
            "biDanh": "squid-game",
            "trailer": "https://www.youtube.com/watch?v=SXr8Rb97nIk",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/squid-game_gp01.jpg",
            "moTa": "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-10-03T21:00:57.763",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "maPhim": 8205,
            "tenPhim": "Cá sấu tử thần",
            "biDanh": "ca-sau-tu-than",
            "trailer": "https://www.youtube.com/embed/H6MLJG0RdDE",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ca-sau-tu-than_gp01.jpeg",
            "moTa": "Cặp đôi yêu thích phiêu lưu Eric và Jennifer đã thuyết phục Yolanda, Viktor và Cash cùng nhau lên đường khám phá hệ thống hang động xa xôi, bí ẩn, chưa được biết đến nằm sâu trong khu rừng ở phía Bắc Australia. Trên đường đi, một cơn bão nhiệt đới bất ngờ đến, họ đành phải tìm kiếm trỗ trú ẩn.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-10-22T07:56:19.047",
            "danhGia": 8,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
    ],

    arrMovie: [],
    arrMovieDefault: [],
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {

    case LAY_DANH_SACH_FULL_PHIM: {
      state.arrMovie = action.arrMovie;
      state.arrMovieDefault = action.arrMovie;
      return { ...state}
    }

    default:
        return state
    }
}
