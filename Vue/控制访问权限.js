const routes=[
    {
        path:'/home',
        // component:Home,
        // 这里使用路由懒加载
        component:()=>import('../views/Home.vue'),
        meta:{requiresAuth:true}//设置访问权限
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/',
    }
]
// 路由前置守卫
routes.beforeEach((to,from,next)=>{
    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
    if(to.meta.requiresAuth){
        // 判断是否需要登录权限
        if(localStorage.getItem('token')){
            // 已经登录
            next()
        }else{
            // 未登录
            next('/login')
        }
    }else{
        // 不需要权限校验
        next()
    }
})