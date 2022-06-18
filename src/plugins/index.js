import { Swipe, SwipeItem } from 'vant';
// 放入数组中
let plugins=[
    Swipe,SwipeItem
]
export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}
