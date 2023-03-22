<template>
    
</template>
<script>
import pubsub from 'pubsub-js'
export default{
    name:'School',
    data(){
        return{
            name:'尚硅谷',
            address:'北京'
        }
    },
    mounted(){
        this.pubId=pubsub.subscribe('hello',function(){
            console.log('有人发布了');
        })
    },
    beforeDestory(){
        pubsub.unsubscribe(this.pubId)
    }
}
</script>