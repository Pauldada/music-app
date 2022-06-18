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
