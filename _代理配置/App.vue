<template>
   <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
   </div>
</template>

<script>
export default{
    name:'App',
    methods:{
        getStudents(){
            axios.get('http://localhost:8000/api/students').then(
                response=>{
                    console.log('请求成功了',response.data);
                },
                err=>{
                    console.log('请求失败了',err.mag);
                }
            )
        }
    }
}
</script>