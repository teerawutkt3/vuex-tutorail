import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'home', component:()=> import("../views/Home")},
    {path: '/about', name: 'about', component: () => import('../views/About.vue')},
    {path: '/blog', component: () => import('../views/Blog')},
    {path: '/auth', component: () => import('../views/Login')},
    {
        path: '/page', component: () => import('../views/Page'),
        children: [
            {path : 'page1', component:()=> import('../views/page/Page1.vue')},
            {path : 'page2', component:()=> import('../views/page/Page2.vue')}
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
