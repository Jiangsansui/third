<template>
  <div class="container">
    <div class="head"></div>
    <div class="time"></div>
     <div class="xhBox">
        <ul>
          <li v-for="item in list" :key="item.id">
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
 data(){
   return{
     list:[{
       id:"0",
       date:"01月",
       money:"39.00",
       finish:"已缴纳",
       do:"应缴纳党员"
     }, 
     {
       id:"1",
       date:"02月",
       money:"39.00",
       finish:"已缴纳",
       do:"应缴纳党员"
     }, 
     ]
   }
     
 }
}
</script>
<style scoped>
.container{
  width: 100%;
  height: 780px;
  background-color: rgb(234, 236, 238);
  font-size: 62.5%;
}
.head{
  width: 100%;
  height: 100px;
  background-color: red;
}
.time{
  width: 100%;
  height: 40px;
  background-color: aliceblue;
}

/* 循环 */
.xhBox{
  width: 100%;
}
.xhBox ul{
  width:100%;
  height:500px;
  background-color:aqua;
}
.xhBox ul li{
  list-style: none;;
  width: 44%;
  height: 70px;
  position: absolute;
  margin:-7%;
  background-color: aliceblue;
  float: left;
} 
.date,
.money,
.do{
 color: rgb(179, 180, 180);
} 
.date{
  font-size: 1rem;
}
.money{
   font-size: 1.5rem;
   margin-left: 6rem;
  
}
.finish{
   margin-left: 5rem; 
}
.do
{
   margin-left: 4.5rem; 
}

.xhBox ul li:last-child{
 margin-top: 0.5rem;
 width: 49%;
}    
</style>
