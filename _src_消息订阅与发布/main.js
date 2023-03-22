import { createApp, VueElement } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// Vue.prototype.x={a:1,b:2}
//创建vm
new Vue=({
    el:'#app',
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus=this//安装全局事件总线
    }
})
//关于Vuecomponent:
      //1、school组件本质是一个名为Vuecomponent的构造函数,且不是程序员定义的,是vue.extend生成的

      //2、我们只要写<school/>或者<school></school>，vue解析时会帮我们创建一个school组件的实例对象
      //即vue帮我们执行的new VueComponent(options)

      //3、特别注意；每次调用Vue.extend  返回的都是一个全新的Vuecomponent

      //4、关于this的指向：
        //(1)组件配置中:
        //   data函数、methods中的函数、watch中的函数、computed中的函数，它们的this均是【vuecomponent中的实例对象】
        //(2)new Vue(options)配置中：
        //   data函数、methods中的函数、watch中的函数、computed中的函数，它们的this均是指向vue实例对象
