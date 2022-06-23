import axios from "axios";
let service = axios.create({
    // baseURL:"http://pauldada.plus:3000/",
    baseURL:"http://127.0.0.1:3000/",
    // baseURL:"https://netease-cloud-music-api-two-gray.vercel.app/",
    timeout:10000
})
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(!config.token) {
        config.token = localStorage.getItem('token');
    }
    // console.log('interceptors',config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


export default service
