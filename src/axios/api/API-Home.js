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
//获取新歌
export function getHotSong(data){
    return service({
        method:"GET",
        url:`/top/song?type=${data}`
    })
}
//获取用户歌单
export function getUserSong(data){
    return service({
        method:"GET",
        url:`/user/playlist?uid=${data}`
    })
}
//获取推荐视频/video/timeline/recommend?offset=10
export function getVideoList(){
    return service({
        method:"GET",
        url:`/video/timeline/recommend?offset=10`
    })
}
//获取登录状态
export function getLoginYN(){
    return service({
        method:"GET",
        url:`/login/status`
    })
}