<template>
  <div class="container">
    <div class="content">
      <div class="one" v-for="(item,index) in list" :key="index">
        <div class="ts">
          <div class="oneTh"><img src="../assets/logo.png">
            <span >{{item.name}}</span>
          </div>
          <span class="right" >{{item.num}}</span>
        </div>
        <hr style="border:0.5px dashed #d9d9d9;margin-top:-1.5rem;">
        <div class="oneF">
          <span v-for="(j,index ) in item.dataList" :key="index">
        <p>{{j.a}}</p>
        <p>{{j.b}}</p>
        </span>
        </div>
        <div class="oneT" v-for="(t,index ) in item.items" :key="index" >
          <p :style="{'color':t.color}">查看详情>></p>
        </div>

      </div>

    </div>

    <div class="second">
      <div class="One"></div>
      <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      <div class="Three"></div>
    </div>

  </div>

</template>

<script>
    export default {
      name: "first",
      data() {
        return {
          list: [
            {
              img: "imagePath",
              name: "党组织",
              num: "1688",
              dataList: [
                {a: "688", b: "党委数"},
                {a: "325", b: "党支部数"},
                {a: "544", b: "党总支数"}
              ],
              items: [{
                color: '#f5c403'
              }
              ]
            },
            {
              img: "imagePath",
              name: "党员数",
              num: "1688",
              dataList: [
                {a: "688", b: "党委数"},
                {a: "325", b: "党支部数"},
                {a: "544", b: "党总支数"}
              ],
              items: [{
                color: '#27d06e'
              }
              ]
            },
            {
              img: "imagePath",
              name: "党建学习",
              items: [{
                color: '#03c7f8'
              }
              ]
            },
            {
              img: "imagePath",
              name: "教育学习",
              items: [{
                color: '#ff5a85'
              }
              ]
            }
          ],
        }
      },
      mounted(){
        this.drawLine()
      },
      methods:{
        drawLine(){
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            // legend: {
            //   top: 25,
            //   data: ['中标', '落标', '未开标', '评标中'],
            //   textStyle: { //图例文字的样式
            //     color: '#8ECBFF',
            //     fontSize: 13
            //   }
            // },
            series: [{
              type: 'pie',
              radius: '65%',
              center: ['50%', '63%'],
              label: { //饼图图形上的文本标签
                normal: {
                  show: true,
                  textStyle: {
                    fontWeight: 700,
                    fontSize: 13 //文字的字体大小
                  },
                  formatter: '{b}:{c}: ({d}%)',
                }
              },
              data: [{
                value: 10,
                name: '中标',
                itemStyle: {
                  normal: {
                    color: '#F4AA61'
                  }
                }
              }, {
                value: 32,
                name: '落标',
                itemStyle: {
                  normal: {
                    color: '#4EC7B8'
                  }
                }
              }, {
                value: 10,
                name: '未开标',
                itemStyle: {
                  normal: {
                    color: '#90C9F6'
                  }
                }
              }, {
                value: 1,
                name: '评标中',
                itemStyle: {
                  normal: {
                    color: '#CACACB'
                  }
                }
              }]
            }]
          })
        },

      }
    }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 736px;
    background-color: rgb(229, 230, 231);
    font-size: 62.5%;
  }
  .content{
    width: 100%;
    height: 55%;
  }
  .one{
    width: 47%;
    border-radius:10px;
    height: 170px;
    background-color: #ffffff;
    margin-left:2%;
    margin-top: 2%;
    float: left;
    flex-wrap: wrap;
  }
  .ts{
    width:100%;
    height:60px;
    display: flex;
    flex-direction: row;
  }
  .right{
    color: rgb(255, 187, 0);
    width: 70%;
  }
  .oneTh{
    width:70%;

  }
  .oneTh img{
    width: 20px;
  }
  .ts{
    padding-top: 0.5rem;
  }
  .ts span{
    font-size: 1.5rem;
  }
  .one span{
    font-size: 1.1rem;
    margin-left: 2rem;
  }
  .oneF{
    width:100%;
    display: flex;
    flex-direction: row;
    height:100px;
    margin-left: -1.5rem;
  }
  .oneF span{
    margin-top: -0.5rem;
    display: inline-block;
    width:33%;
    height:100%;
  }
  .oneF p:last-child{
    margin-top: -0.7rem;
  }
  .oneT{
    width: 100%;
    height: 40px;
    margin-top: -2.5rem;
    font-size: 1.3rem;
  }
  .second{
    height:50%;
  }
  .One{
    width:31%;
    height: 50%;
margin-left: 2%;
    background-color: yellow;
  }
 #myChart{
    width:31%;
    height: 50%;
    margin-left: 34.5%;
    margin-top: -11.5rem;

  }
  .Three{
    width:31%;
    height: 50%;
    margin-left: 67%;
    margin-top: -11.5rem;
    background-color: red;
  }


</style>
