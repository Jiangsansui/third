<template>
    <div class="container">
   <div class="head">
     <p>39.00</p>
     <p class="text" style="font-size: 1rem;color: #f6ac9f;">本月应缴纳党费</p>
     <p class="text" style="font-size: 1rem;margin-left: 10rem;color: #f6ac9f;">截至日期：04月30日</p>
     <p style="font-size:1rem;">元</p>
   </div>
      <div class="time">qdwqdsfd</div>
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
      <div id="form">
        <button v-on:click="succ">缴纳党费</button>
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
          {
            id:"2",
            date:"03月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          },
          {
            id:"3",
            date:"04月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          },
          {
            id:"4",
            date:"05月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          },
          {
            id:"5",
            date:"06月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          },
          {
            id:"6",
            date:"07月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          },
          {
            id:"7",
            date:"08月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          },
          {
            id:"8",
            date:"09月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          },
          {
            id:"9",
            date:"10月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          },
          {
            id:"10",
            date:"11月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          },
          {
            id:"11",
            date:"12月",
            money:"39.00",
            finish:"已缴纳",
            do:"应缴纳党费"
          }]
      }
      },
    }
</script>

<style scoped>
.container{
  width:100%;
  height: 737px;
  background-color: #f9f9f9;
}
  .head{
    height:120px;
    width:100%;
    background: #f72727;
  }
  .head p{
    position: absolute;
    color: white;
    font-size: 2rem;
    margin-left: 2rem;
  }
.head p:last-child{
  color: #f6ac9f;
  margin-left: 7.5rem;
  margin-top: 2.6rem;
}
.text{
  margin-top: 5rem;

}

  .time{
    width: 100%;
    height: 35px;
    background-color: #ffffff;
  }

/*循环css*/
  .content{
    width:100%;
    display: inline-block;
  }
  .content ul{
    width:100%;
    height:500px;
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
    margin-left: 2.6%;
    height:60px;
    background-color: #ffffff;
    padding-top: 5px;
    margin-top: 14px;
    color: #afafaf;
  }
  .a span{
    width:50%;

  }
  .date{
    margin-top: 0.3rem;
  }
  .money{
    font-size: 1.5rem;
  }

.finish{
  color: #afafaf;
}
  .finish,
  .do{
    font-size: 0.5rem;
    margin-top:-1rem;
  }
  button{
    width:92%;
    margin-left: -0.5rem;
    height: 40px;
    background-color: #fa8325;
    border: none;
    color: white;
    border-radius: 20px;
    letter-spacing:2pt;

  }
</style>
