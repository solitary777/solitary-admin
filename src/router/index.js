import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import Layout from '@/layout'

Vue.use(Router)

// 默认初始化路由
const initRouter = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'layout1',
    children: [
      {
        path: 'home',
        name: '首页',
        component: () => import('@/views/home/home')
      }
    ]
  },
  {
    path: '/pay',
    component: Layout,
    redirect: '/pay/1',
    name: 'layout2',
    children: [
      {
        path: '1',
        name: '支付管理'
      }
    ]
  }
]

// 创建路由
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: initRouter
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// 导出路由
export default router
