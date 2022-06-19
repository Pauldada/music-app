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

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
