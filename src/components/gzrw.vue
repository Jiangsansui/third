<template>
    <div class="container">
     <div class="head">
       <div class="date"></div>
      </div>
      <div class="content">
         <div class="events">
           <div class="time">
             <span class="circle"></span>
             <span class="t">09:10-10:00</span>
             <div class="text">

             </div>
           </div>
<!--           <ul>-->
<!--             <li  v-for="(item,index) in list" :key="index">-->
<!--               <div class="one">-->
<!--                 <span class="circle"></span>-->
<!--                 <span>{{item.time}}</span>-->
<!--               </div>-->
<!--             </li>-->
<!--           </ul>-->
         </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "work",
      data(){
          return{
            list:[
              {
                time:"09:10-10:00",
                style:"",
                second:"学习十九大精神",
                third:"鹰潭市经济大厦 A区406室"
              },
              {
                time:"09:14-10:00",
                style:"",
                second:"学习十九大精神",
                third:"A区406室"
              },

            ]
          }
      }

    }
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 700px;
  background-color: #f9f9f9;
.head{
  position: absolute;
  width: 100%;
  height: 150px;
  background-color: red;
  .date{
    width: 88%;
    height: 140px;
    background-color: white;
    border-radius: 10px;
    background-color: #ffffff;
    border-bottom:3px solid #e6e6e6;
    margin-left: 6%;
    margin-top: 4rem;
  }
}
.content{
  width: 100%;
  .events{
    position: absolute;
    width: 90%;
    height: 90px;
    background-color: yellow;
    margin-top: 55%;
    margin-left: 5%;
    .time{
      width: 60%;
      height: 25px;
      position: relative;
      .circle{
        display: inline-block;
        width:15px;
        height:15px;
        border-radius: 50px;
        background-color: #18cb4a;
        margin-top: 5px;
        position: absolute;
        left: 5%;
      }
      .t{
        display: inline-block;
        width:60%;
        height:100%;
        line-height: 25px;
        text-align: left;
        position: absolute;
        left: 15%;
      }
      .text{
        width: 100%;
        height: 65px;
        background-color: blue;
      }
   }
  }
}
}

</style>
