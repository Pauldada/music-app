import service from "@/axios/BaseURL";

//首页轮播-Banner
export function getBanner(){
    return service({
        method:"GET",
        url:"/banner?type=2"
    })
}
//首页歌单-Personalized
export function getMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=20"
    })
}
//获取搜索歌单Search
export function getSearchMusic(data){
    return service({
        method:"GET",
        url:`/search?keywords=${data}`
    })
}
//获取歌曲详情
export function getMusic(data){
    return service({
        method:"GET",
        url:`/song/detail?ids=${data}`
    })
}
//手机号登录
export function getPhoneLogin(data){
    return service({
        method:"GET",
        url:`/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}
//获取用户详情
export function getLoginUser(data){
    return service({
        method:"GET",
        url:`/user/detail?uid=${data}`
    })
}

