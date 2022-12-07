<template>
    <div class="row">
        <div class="card" v-for="user in info" :key="user.login">
          <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100 px'/>
          </a>
          <p class="card-text">{{info.login}}</p>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="isFirst">欢迎使用</h1>
        <!-- 展示加载中 -->
        <h1 v-show="isLoading">加载中……</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="errMsg">{{info.errMsg}}</h1>
      </div>
  </template>
   
  <script>
  export default {
      name:'List',
      data(){
          return{
           info:{
            isFirst:true,
            users:[],
            isLoading:false,
            errMsg:''

           }
          }
      },
      mounted(){
          this.$bus.$on('getUser',(dataObj)=>{
              this.info={...this.info,...dataObj}
          })
      }
  }
  </script>
   
  <style scoped>
  .album {
      min-height: 50rem; /* Can be removed; just added for demo purposes */
      padding-top: 3rem;
      padding-bottom: 3rem;
      background-color: #f7f7f7;
      }
   
   .card {
      float: left;
      width: 33.333%;
      padding: .75rem;
      margin-bottom: 2rem;
      border: 1px solid #efefef;
      text-align: center;
      }
   
   .card > img {
      margin-bottom: .75rem;
      border-radius: 100px;
      }
   
   .card-text {
      font-size: 85%;
      }
   
  </style>