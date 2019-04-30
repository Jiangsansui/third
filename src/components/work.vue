<template>
    <div class="container">
         <div class="head">
            <div class="date"></div>
         </div>
        <div class="content">
          <div class="events">
            <ul>
             <li  v-for="(item,index) in list" :key="index">
<!--               <div class="ts">-->
<!--                 <span class="circle"></span>-->
<!--                 <span class="first">{{item.time}}</span>-->
<!--               </div>-->
<!--                <p>{{item.second}}</p>-->
<!--                <p>{{item.third}}</p>-->
               <div class="ts">
                 <span class="circle"></span>
                 <span>{{item.time}}</span>
               </div>
               <span class="jc">{{item.second}}</span>
               <span class="jc">{{item.third}}</span>
              </li>
            </ul>
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

<style scoped>
.container{
  width: 100%;
  overflow-x: hidden;
  background-color: #f5f5f5;
}
.head {
  width: 120%;
  height: 150px;
  background-color: #f93131;
  display: inline-block;
}
.date{
  width: 80%;
  border-radius: 10px;
  display: inline-block;
  height: 140px;
  background-color: #ffffff;
  margin-left: -17%;
  margin-top: 4rem;
  border-bottom:3px solid #e6e6e6;
}
  .content{
    width: 100%;

  }
  .events{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
  }
  .events ul{
    width: 100%;
    list-style: none;
    padding-inline-start:0;
  }
   .events ul li{
     width:100%;
     display: flex;
     flex-direction: column;
     height:110px;
     margin-top: 5%;
   }
.jc{
  width:90%;
  margin-left: 5%;
  text-align: left;
  margin-top: 2%;
}
   .ts{
     width:100%;
     height:40px;
     display: flex;
     flex-direction: row;
     padding-top: 20px;
   }
   .ts span{
     margin-left: 5%;
     font-size: 18px;
   }
 .circle{
  width: 20px;
  height: 20px;
 border-radius: 50%;
   background-color: red;
   margin-left: 5%;
}


</style>
