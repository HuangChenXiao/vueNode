const _import = require('@/router/_import_' + process.env.NODE_ENV)
//模块路由
export default [
    
  { name: 'home', path: '/', component: _import('home/index'), meta: { verifylogin: false } },
  { name: 'upload', path: '/upload', component: _import('home/upload'), meta: { verifylogin: false } },
  ]