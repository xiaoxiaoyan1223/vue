<template>
    <div>
        <h1>axios拦截器</h1>
        <p>这是一个使用axios拦截器示例</p>
        <button  @click="load">按钮</button>
        <div v-if="loading">load....</div>
        <p v-else>{{title}}</p>
        
    </div>
</template>
<script>
 import axios from 'axios'
    export default {
        name: 'AxiosInterceptor',
        data(){
            return{
                title:'',
                loading:false
            }
        },
    methods: {
        load() {
            axios.get('https://api.example.com/data').then(res => {
                this.title = res.data.title
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        axios.interceptors.request.use(config => {
            console.log('请求拦截器')
            this.loading = true
            // 在发送请求之前做些什么
            return config
        })
        axios.interceptors.response.use(res => {
            console.log('响应拦截器')
            this.loading = false
            // 对响应数据做点什么
            return res
        })
    },
    beforeDestroy() {
        // 取消拦截器
        axios.interceptors.request.eject()
        axios.interceptors.response.eject()
    }

    }
    
    // 使用setup语法
    // setup() {
    //     return {
    //         load
    //     }
    // }
    // setup() {
    //     const load = () =>
    
    // 或者使用setup语法
    // setup() {
    //     return {
    //         // ...
    //     }
    // }
</script>