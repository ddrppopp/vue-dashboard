import Router from 'vue-router'
import { getToken } from '../utils/auth'
const routes = [
    {path: '/', component: () => import('../views/index.vue')},
    {path: '/login', component: () => import('../views/login/index.vue')},
    {path: '/dashboard/:id', component: () => import('../views/Dashboard/index.vue')},
    {path: '/chartpanel/:id', component: () => import('../views/ChartPanel/index.vue')},
    {path: '/barChart', component:() => import('../widgets/BarChart.vue')}
]
const router = new Router({
    routes
})

router.beforeEach( (to, from , next) => {
    if(getToken()) {
        next();
    } else if(to.path === '/login') {
        next();
    } else {
        next({ path: '/login' });
    }
})
export default router