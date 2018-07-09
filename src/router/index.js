import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 首页
import home from '../pages/home/index.vue'

// 2. 定义路由
const routes = [{
    path: '/',
    name: 'home',
    component: home
}]

// 3. 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
    // mode: 'history',
    routes // （缩写）相当于 routes: routes
})