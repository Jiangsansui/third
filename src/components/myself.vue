<template>
  <div class="container">
    <div class="head">
      <img src="../assets/chen.jpg">
      <p class="name">陈奕迅</p>
      <p>遗憾比失败更让人痛苦</p>
      <div class="text">
        <ul>
          <li class="text_content" v-for="(item,index) in listContent" :key="index">
            <span>{{item.num}}</span>
            <span>{{item.event}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="department">
        <ul>
          <li class="message" v-for="(item,index) in list" :key="index">
            <img :src="item.image">
            <p>{{item.content}}</p>
            <img :src="item.img" style="width: 10px;height:20px;margin-left:200px;margin-top: 1rem;">
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
            image:require("../assets/charge.png"),
            content:"党费缴纳",
            img:require("../assets/enter.png")
      },
          {
            image:require("../assets/collect.png"),
            content:"我的收藏",
            img:require("../assets/enter.png")
          },
          {
            image:require("../assets/score.png"),
            content:"我的积分",
            img:require("../assets/enter.png")
          },

          {
            image:require("../assets/feedback.png"),
            content:"我要反馈",
            img:require("../assets/enter.png")
          },

        ],
        listContent:[
          {
          num:"12",
          event:"任务"
        },
          {
            num:"8",
            event:"活动"
          },
          {
            num:"6",
            event:"服务"
          },
          {
            num:"24",
            event:"学习"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    overflow-x: hidden;
    display: inline-block;
  }
  .head {
    width: 120%;
    height: 150px;
    background-color: #f93131;
    display: inline-block;
  }
  .head img{
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-left: -14rem;
    margin-top: 0.5rem;
  }
  .head p{
    color: #edbcb9;
    margin-left: 7rem;
    width: 180px;
  }

  /*循环*/
  .text{
    width: 75%;
    border-radius: 10px;
    display: inline-block;
    height: 80px;
    background-color: #ffffff;
    margin-left: -17%;
    margin-top: 2rem;
    border-bottom:3px solid #e6e6e6;
  }
  .text ul{
    width:100%;
    height: 60px;
    margin-top: 0;
    padding-inline-start:0;
  }
  .text_content{

    float: left;
    flex-wrap: wrap;
    width:25%;
    display: flex;
    margin-top: 0.7rem;
  }
  .text_content span{
    width:80%;
    color:black;
    font-size: 1.5rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
  .text_content span:last-child{
    color: #bdbdbe;
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
  .content {
    margin-top: -20px;
    width: 100%;
  }
  .department {
    width: 100%;
    height: 500px;
    list-style: none;
    padding-inline-start: 0;
  }
  .department ul{
    list-style: none;
    width:100%;
    padding-inline-start:0;
  }
  .message
  {
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    display: flex;;
    flex-direction: row;
    padding-left: 2rem;
    border-bottom:1px solid #e6e6e6;
  }
  .message img{
    width: 35px;
    height:35px;
    margin-left: -0.5rem;
    margin-top: 0.5rem;
  }

  p{
    letter-spacing:0.5pt;
    width: 100px;
    color: black;
    font-size: 1rem;
    flex-direction: row;
    margin-top: 1rem;
    margin-left: 1rem;
    text-align: left;

  }
</style>

