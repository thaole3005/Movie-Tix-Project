
import axios from 'axios';


const MOVIE_DOMAIN = 'https://movienew.cybersoft.edu.vn';
const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjEyLzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTcyMTYwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjQ5ODY5MjAwfQ.RkFKrifGWTY3MP0bQtIpvA5WpWWrcSkGjDSw01LwhuI';
export const GROUP_ID = 'GP01'
export const USER_LOGIN = 'USER_LOGIN';
export const accessToken = 'accessToken';

//cấu hình interceptor(cấu hình sẵn những tham số mặc định cho tất cả api)
//!có nghĩa là khi mặc định call api nào thì cũng sẽ tự động có thêm phần header, k cần phải thêm vào


export const http = axios.create({
    baseURL: MOVIE_DOMAIN,
    timeout: 30000,
})



http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        "TokenCybersoft": TOKEN_CYBERSOFT,
        'Authorization': 'Bearer ' + localStorage.getItem(accessToken)  //Token mà người dùng đăng nhập
    }
    return config;
}, (errors) => {
    return Promise.reject(errors);
})


export const STATUS_CODE = {
    SUCCESS: 200,
    NOT_FOUND: 400,
    SERVER_ERROR: 500,
}

    export const TODAY = new Date ("December 1, 2021");