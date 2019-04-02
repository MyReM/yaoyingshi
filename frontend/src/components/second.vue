<template>
  <div id="message">
    <br/>
    <div id="header" style="width:100%;height:50px;position:absoult;">
      <span style="color:rgba(155,180,255,1);">欢迎进入到数据统计页面</span>
      <span @click="$router.go(-1)" style="color:rgba(255,100,155,1);" class="back"> 点击我返回主页面</span>
    </div>
    <div id="container">
      <div id="myChart" :style="{width: '100%', height: '47%', marginTop: '20px'}"></div>
      <div id="cylinder" :style="{width: '100%', height: '42%', marginTop: '20px',paddingTop: '10px'}"></div>
    </div>
    <div id="center">
      <div id="center_option" :style="{width: '100%', height: '100%', marginTop: '20px'}"></div>
    </div>
    <!-- <div id="cen">
      <div id="cenopt" :style="{width: '100%', height: '100%', marginTop: '20px'}"></div>
    </div> -->
  </div>
</template>

<script>
  import { lineOption, cylinderOption } from '@/api/options'
  import { center_option } from '@/api/centerOption'
  export default {
      name: "second",
      data() {
        return {
          lineOptions: lineOption,
          cylinderOption: cylinderOption,
          center_option: center_option
        }
      },
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine(){
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          let cylinder = this.$echarts.init(document.getElementById('cylinder'))
          let center_option = this.$echarts.init(document.getElementById('center_option'))
          myChart.setOption(this.lineOptions)
          cylinder.setOption(this.cylinderOption)
          center_option.setOption(this.center_option)
          center_option.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0]
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                center_option.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
          })
        }
      }
  }
</script>

<style>
.back:hover{
  cursor: pointer;
}
#message {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-size: 100% 100%;
  /* background-image: url("/static/images/timg11.jpg"); */
  background-repeat: no-repeat; 
  background-color: rgba(211, 162, 178, 0.1)
}
#container, #center{
  background-color: rgb(255, 255, 255);
  float: left;
}
#container{
  margin: 0 0 0 5% !important;
  width:30%;
  height:85%;
}
#center{
  width:60%;
  height:85%;
}
</style>
