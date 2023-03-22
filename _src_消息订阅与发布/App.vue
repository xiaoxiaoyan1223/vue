<template>
  <div class="container">
    <School/>
    <Student/>
</div>
</template>

<script>
import School from './components/School'
import Student from './components/Student';
export default {
  name: 'App',
  components:{School,Student},
  data(){
    return {
     msg:'你好呀'
    }
  },
  methods:{
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    checkTodo(id){
      this.todos.forEach((todos)=>{
        if(todos.id===id) todos.done=!todos.done
      })
    },
    deleteTodo(id){
     this.todos=this.todos.filter((todo)=>{
      return todo.id!==id
      })
    },
    checkAllTodo(done){
      this.todos.forEach((todos)=>{
        todos.done=done
      })

    },
    clearAllTodo(){
      this.todos=this.todos.filter((todos)=>{
        return !todos.done
      })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }   
    }
  }
}
</script>
<style>
body{
  background: #fff;
}

.btn{
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger{
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover{
  color: #fff;
  background-color: #bd362f;
}

.btn:focus{
  outline: none;
}

.todo-container{
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap{
  padding: 10px;
  border:1px solid #ddd;
  border-radius: 5px;
}
</style>
