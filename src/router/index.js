import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '', component: () => import('../loyout/Layout'),
        children: [
            {path: '/', name: 'home', component:()=> import("../views/Home")},
            {path: '/about', name: 'about', component: () => import('../views/About.vue')},
            {path: '/blog', component: () => import('../views/Blog')},            
            {
                path: '/page', component: () => import('../views/Page'),
                children: [
                    {path : 'page1', component:()=> import('../views/page/Page1.vue')},
                    {path : 'page2', component:()=> import('../views/page/Page2.vue')},
                    {path : 'page3', component:()=> import('../views/page/Page3.vue')}
                ]
            },
        
            // ## User
            {path: '/user', component: () => import('../views/User')},
            {path: '/user/form', component: () => import('../components/user/UserForm')},
        
            // ## Role
            {path: '/role', component: () => import('../views/Role')},    
            {path: '/role/form', component: () => import('../components/role/Form.vue')},    
        
            // ## Components
            {path: '/components', component: () => import('../views/EComponents.vue')},

            // ## Bill
            {path: '/bill', component: () => import('../views/Bill.vue')},
            {path: '/bill-form', component: () => import('../components/bill/BillForm.vue')},
        ],
        
    },
    {path: '/auth', component: () => import('../views/Login')},
    {path: '/register', component: () => import('../views/Register')},
]

const router = new VueRouter({
    mode: 'history',
    // mode: 'hash',
    base: process.env.BASE_URL,    
    routes
})

export default router
