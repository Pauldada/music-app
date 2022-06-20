import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/itemMusic',
        name: 'ItemMusic',
        component: ()=>import('../views/ItemMusicView')
    },
    {
        path: '/search',
        name: 'search',
        component: ()=>import('../views/SearchView')
    },
    {
        path: '/mine',
        name: 'mine',
        beforeEnter:(to,from,next)=>{
            if (store.state.isLogin){
                next()
            }else {
                next('/login')
            }
        },
        component: ()=>import('../views/MineView')
    },
    {
        path: '/mura',
        name: 'mura',
        component: ()=>import('../views/MuraView')
    },
    {
        path: '/video',
        name: 'video',
        component: ()=>import('../views/VideoView')
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import('../views/LoginView')
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to,from)=>{
    if(to.path==='/login'){
        store.state.isTopNav=false
        store.state.isControl=false
    }else{
        store.state.isTopNav=true
        store.state.isControl=true
    }
})

export default router
