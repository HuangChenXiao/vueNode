import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
    // { name: 'home', path: '/', component: _import('index') },
]
var VueRouter = new Router({
    mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})

//首页
VueRouter.addRoutes(require('@/views/home/route.js').default)

export default VueRouter