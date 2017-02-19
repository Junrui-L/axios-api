import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import * as types from './store/types'
import Index from './index.vue'
import Repository from './repository.vue'
import Login from './login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '/',
        component: Index
    },
    {
        path: '/repository',
        name: 'repository',
        meta: {
            requireAuth: true,
        },
        component: Repository
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

//页面刷新时，重新赋值token
if(window.localStorage.getItem('token')) {
    store.commit(types.LOGIN,window.localStorage.getItem('token'))
}

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requireAuth) {
        if(store.state.token){
            next();
        }else{
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    } else {
        next();
    }
})

export default router;