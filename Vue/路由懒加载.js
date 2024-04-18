// 非懒加载
import Home from '@/components/Home'
 
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

// const 组件名 = () => import('组件路径');
// 下面2行代码，没有指定webpackChunkName，每个组件打包成一个js文件。
const Home = () => import('@/componnets/home');
const Index = () => import('@/components/index');
 
// 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件
// 把组件按组分块
const Home = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home');
const Index = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/index')
 
const routes2= [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/index',
    name: 'index',
    component: Index
  }
]