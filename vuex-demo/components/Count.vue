<template>
  <div class="hello">
    <h1>当前求和为：{{sum}}</h1>
    <h2>我在{{school}}学习{{subject}}</h2>
    <h3 style="color:red">下面人员总数为{{$store.state.personList.length}}</h3>
    <select name="" id="" v-model.number="num">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="Odd(num)">当前求和为奇数再+</button>
    <button @click="Wait(num)">等一等再加</button>
  </div>
</template>

<script>
// 使用mapMutation和mapAction需要绑定函数时进行传参
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name: 'CountComponent',
  data(){
    return{
      num:1
    }
  },
  methods:{
    // increment(){
    //   this.$store.commit('Jia',this.num)
    // },
    // decrement(){
    //   this.$store.commit('Jian',this.num)
    // },
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    // ...mapMutations({increment:'Jia',decrement:'Jian'}),
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    // ...mapMutations(['Jia','Jian']),
    ...mapMutations({increment:'Jia',decrement:'Jian'}),
    // Odd(){
    //   this.$store.dispatch('odd',this.num)
    // },
    // Wait(){
    //   this.$store.dispatch('wait',this.num)
    // }
    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
    // ...mapActions({Odd:'odd',Wait:'wait'})
    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
    // ...mapActions(['odd','wait'])
    ...mapActions({Odd:'odd',Wait:'wait'})
  },
  computed:{
    // 借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({sum:'sum',school:'school',subject:'subject'})
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum','school','subject'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button
{
  margin-left: 5px;
}
</style>
