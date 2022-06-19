import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

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

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
