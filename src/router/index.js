import Vue from 'vue'
import VueRouter from 'vue-router'

const ShowBlogView = () => import('@/components/ShowBlogView')// 路由懒加载 使用该组件时不会加载其它的组件
const AddBlogView = () => import('@/components/AddBlogView')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/showBlog' // 重定向到show 选中高亮
  },
  {
    path: '/showBlog',
    component: ShowBlogView
  },
  {
    path: '/addBlog',
    component: AddBlogView
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active' // 定义选中时的类名
})

export default router
