<template>
    <button @click="sentChild2Name"></button>
    <input type="text" 
          :value="text" 
          @inout=($emit("change1",$event.target.value))
</template>
<script>
export default{
    model:{
        props:text,
        event:change1
    }
    props:{
    text1:String
    }
    
    name:'Child2',
    methods:{
        sentChild2Name(){
            this.$emit('atguigu')
        }
    }
}
</script>
