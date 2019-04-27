<template>
  <div class="container">
    <div class="head">
     <div class="text">

     </div>

    </div>
    <div class="content">
      <div class="department">
        <ul>
          <li class="message" v-for="(item,index) in list" :key="index">
            <img :src="item.image">
            <p>{{item.content}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "phone",
    data(){
      return{
        list:[
          {
            image:require("../assets/dang.png"),
            content:"东钱湖党委"
          },
          {
            image:require("../assets/xingzheng.png"),
            content:"行政党支部"
          },
          {
            image:require("../assets/zhengfu.png"),
            content:"政企党支部"
          },
          {
            image:require("../assets/xiaoshou.png"),
            content:"销售党支部"
          },
          {
            image:require("../assets/chengqu.png"),
            content:"城区党支部"
          },
          {
            image:require("../assets/danshan.png"),
            content:"担山党支部"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    display: inline-block;
  }
  .head {
    width: 120%;
    height: 120px;
    background-color: #f93131;
    display: inline-block;
  }
  .text{
    width: 80%;
    height: 80px;
    background-color: yellow;
    margin-left: 9%;
    margin-top: 4rem;

  }

  .content {
    margin-top: 20px;
    width: 100%;
  }
  .department {
    width: 100%;
    height: 500px;
    list-style: none;
    padding-inline-start: 0;
    margin-top: 0;
  }
  .department ul{
    list-style: none;
    width:100%;
    padding-inline-start:0;
    margin-top: 0;
    position: absolute;
  }
  .message
  {
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    display: flex;;
    flex-direction: row;
    padding-left: 2rem;
    border-bottom:1px solid #e6e6e6;
  }
  .message img{
    width: 43px;
    height:43px;
    margin-left: -0.5rem;
    margin-top: 0.5rem;
  }
  p{
    letter-spacing:0.5pt;
    width: 120px;
    color: black;
    font-size: 1.2rem;
    flex-direction: row;
    margin-top: 1rem;
    margin-left: 0.5rem;
  }
</style>

