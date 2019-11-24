import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'home', component:()=> import("../views/Home")},
    {path: '/about', name: 'about', component: () => import('../views/About.vue')},
    {path: '/blog', component: () => import('../views/Blog')},
    {path: '/auth', component: () => import('../views/Login')}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
