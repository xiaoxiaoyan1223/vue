<template>
    <button @click="sentChild2Name"></button>
</template>
<script>
export default{
    name:'Child2',
    methods:{
        sentChild2Name(){
            this.$emit('atguigu')
        }
    }
}
</script>