<template>
    <div>
        <!-- 通过父组件给子组件传递函数类型props实现:子给父传递数据 -->
        <Child1 :getSchoolName="getSchoolName"/>
        <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第一种方法，使用@或者v-on) -->
        <!-- <Child2 v-on:atguigu='demo'/> -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第二种方法，使用ref) -->
        <Child2 ref="student"/>

    </div>
</template>
<script>
export default{
    name:'Father',
    components:{Child2,Child2},
    data(){
        return {
            msg:'你好啊'
        }
    },
    methods:{
        getSchoolName(){
            console.log('111');
        },
        getChildName(){
            console.log('666');
        },
        demo(){
            console.log('demo');
        },
        mounted(){
            this.$refs.student.$on('atguigu',getChildName)
        }

    }
}
</script>