import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
new Vue({
    el:'#app',
    render:h=>h(App),
    // 安装事件总线(兄弟之间组件通信)
    beforeCreated(){
        Vue.prototype.$bus=this
    }

})