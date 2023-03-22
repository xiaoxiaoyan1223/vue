<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
    </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default{
    name:'Student',
    data(){
        return{
            name:'张三',
            sex:'男'
        }
    },
    menthods:{
        sentStudentName(){
            pubsub.publish('hello',666)
        }
    },
    mounted(){
        console.log('Student',window.x);
    }
}
</script>