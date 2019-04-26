<template>
    <div class="container">
   <div class="head"></div>
      <div class="time"></div>
      <div class="content">
        <ul>
          <li class="a" v-for="(item,index) in list"  :key="index">
            <span class="date">{{item.date}}</span>
            <span class="money">{{item.money}}</span>
            <span class="finish">{{item.finish}}</span>
            <span class="do">{{item.do}}</span>

          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
     data(){
      return{
        list:[{
          id:"0",
          date:"01月",
          money:"39.00",
          finish:"已缴纳",
          do:"应缴纳党费"
        },
          {
            id:"1",
            date:"02月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          },
        ]
      }

    }
    }
</script>

<style scoped>
.container{
  width:100%;
  background-color: #f9f9f9;
}
  .head{
    height:120px;
    width:100%;
    background: #f72727;
  }
  .time{
    width: 100%;
    height: 50px;
    background-color: #ffffff;
  }

  .content{
    width:100%;
    display: inline-block;
  }
  .content ul{
    width:100%;
    height:300px;
    background-color: yellow;
    list-style: none;
    padding-inline-start:0;
    margin-top: 0;
  }
  .a{
    float: left;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width:45%;
    margin-left: 3.5%;
    height:70px;
    background-color: #ffffff;
    padding-top: 10px;
    margin-top: 20px;
    color: #afafaf;
  }
  .a span{
    width:50%;
    /*margin-left: -1rem;*/
  }
.finish{

  height: 25px;
  border-radius: 50px;
  background-color: #dedede;
}
</style>
