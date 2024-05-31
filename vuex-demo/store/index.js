import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 持久化存储
import CreatePersistedState from 'vuex-persistedstate'
export default new Vuex.Store({
    state: {
        // 定义一个state，用于存储用户信息
        sum:0,
        school:'hpu',
        subject:'web',
        personList:[
            {id:'001',name:'张三'},
            {id:'002',name:'李四'},
            {id:'003',name:'王五'}
        ]
    },
    mutations: {
        // 定义一个mutations，用于修改state的值
        Jia(state, num){
            state.sum += num
        },
        Jian(state, num){
            state.sum -= num
        },
        AddPerson(state,personObj){
            state.personList.unshift(personObj)
        }
    },
    actions: {
        // 定义一个actions，用于调用mutations
        // add(context, num){
        //     context.commit('Jia', num)
        // },
        // jian(context, num){
        //     context.commit('Jian', num)
        // },
        odd(context,num){
            if(context.state.sum % 2){
                context.commit('Jia',num)
            }
        },
        wait(context,num){
            setTimeout(() => {
                context.commit('Jia',num)
            }, 1000);
        }
    },
    getters: {
        // 定义一个getters，用于获取state的值
        getUserInfo(state) {
            return state.userInfo
        }
    },
    // 数据持久化存储配置
    plugins: [
        CreatePersistedState({
            // 存储到localStorage的key
            key: 'vuex-demo',
            // 指定需要存储的state
            paths: ['sum', 'school', 'subject','personList'],
            // 指定存储方式，默认是localStorage 
            storage: window.localStorage,
            render(state) {
                // 要存储的数据：本项目采用es6扩展运算符的方式存储了state
                return { ...state }
            },

        })
    ]
})