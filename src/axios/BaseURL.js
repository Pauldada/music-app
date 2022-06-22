import axios from "axios";
let service = axios.create({
    baseURL:"http://pauldada.plus:3000/",
    // baseURL:"127.0.0.1:3000",
    // baseURL:"https://netease-cloud-music-api-two-gray.vercel.app/",
    timeout:10000
})

export default service
