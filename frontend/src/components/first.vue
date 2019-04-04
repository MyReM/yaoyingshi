<template>
  <div id="firstdiv">
    <header>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="val in imageList" :key="val.src">
          <img class="imgUrl" :src="val.src" @click="openUrl(val.url)"/>
        </el-carousel-item>
      </el-carousel>
      <!-- <div id="heade_div">
        <div v-for="(val,index) in a" :key="val + index" :class="`con`+index">{{a[Math.round(Math.random()*10)]}}</div>
      </div>  -->
    </header>
    <br/>
    <span style="display:inline-block;border-top:1px solid;width:46%;height:.5em;color:#ccc;" class="spLine"></span>
    <span style="display:inline-block;width:6%;height:.5em;"></span>
    <span style="display:inline-block;border-top:1px solid;width:46%;height:.5em;color:#ccc;" class="spLine"></span>
    <br/>
    <br/>
    <div id="first-container">
      <div id="first-menu">
        <router-link :to="'/four'">
          <div class="first-small-place">
            <h2 style="color:#935555;">会说话的盒子</h2>
          </div>
        </router-link>
        <router-link :to="'/three'">
          <div class="first-small-flower">
            <h2>数据收集</h2>
          </div>
        </router-link>
        <router-link :to="'/five'">
          <div class="first-small-sweet">
            <h2 style="color:#935555;">技术交流</h2>
          </div>
        </router-link>
        <router-link :to="'/second'">
          <div class="first-small-message">
            <h2>概率事件</h2>
          </div>
        </router-link>
      </div>
    </div>
    <br/>
    <span style="display:inline-block;border-top:1px solid;width:45%;height:.5em;color:#ccc;" class="spLine"></span>
    
    <img src="/static/images/ftc.png" class="logo_img">
    
    <span style="display:inline-block;border-top:1px solid;width:45%;height:.5em;color:#ccc;" class="spLine"></span>
    <br/>
    <br/>
    <div id="first-content">
      <div style="height:295px;">
        <div class="body-div">
          <img src="/static/images/vue2.png" @click="isShowImg=true,showImg='/static/images/vue2.png'"/>
          <div class="first-pointers bgwh onept"></div>
        </div>
        <div class="body-div">
          <div class="bd-firstmsg">
            <div class="first-title"><a href="https://cn.vuejs.org/v2/guide/index.html">VUE</a></div>
            <h3>最新丶最火的前端神器</h3>
            <div>Vue比JQuery减少了 DOM 操作,实现数据双向绑定以及更加简便的页面渲染丶事件绑定</div>
          </div>
          <div class="bd-secondmsg">
            <div class="first-title first-title-left"><a href="https://spring.io/projects/spring-boot">Boot</a></div>
            <h3>目前流行的后台框架</h3>
            <div class="right-ms">配置文件少，配置简单，采用注解，内置启动类，包含了tomcat，jetty等，整合其他插件更加方便快捷</div>
          </div>
          <div class="first-pointers onet"></div>
          <div class="first-pointers onew"></div>
        </div>
        <div class="body-div">
          <img src="/static/images/springboot.png" @click="isShowImg=true,showImg='/static/images/springboot.png'"/>
          <div class="first-pointers bgwh lastpt"></div>
        </div>
        <div class="body-div">
          <img src="/static/images/element.png" @click="isShowImg=true,showImg='/static/images/element.png'"/>
          <div class="first-pointers bgwh first-th-a hidden"></div>
        </div>
        <div class="body-div three-screen">
          <div class="one-msg one-msg-top three-screen-div">
            <div class="first-title"><a href="http://element-cn.eleme.io/#/zh-CN/component/installation">Element</a></div>
            <h3>饿了么前端框架</h3>
            <div>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</div>
          </div>
          <div hidden class="first-pointers first-th-b hidden"></div>
        </div>
      </div>

      <div>

        <div class="body-div second-onept">
          <div class="one-msg one-msg-bottom second-onemsg">
            <div class="first-title first-title-left">白云山</div>
            <h3>白云山一日游</h3>
            <div class="right-ms">再次声明，我没得讲过系我叫去白云山的（偷笑）</div>
          </div>
          <div class="first-pointers hidden second-th-a"></div>
        </div>

        <div class="body-div second-twpt">
          <img src="/static/images/cj15.jpg" @click="isShowImg=true,showImg='/static/images/cj15.jpg'"/>
          <div class="first-pointers bgwh hidden second-th-b"></div>
        </div>

        <div class="body-div second-as">
          <img src="/static/images/cj9.jpg" @click="isShowImg=true,showImg='/static/images/cj9.jpg'"/>
          <div class="first-pointers bgwh onept"></div>
        </div>

        <div class="body-div second-lasmsg">
          <div class="bd-firstmsg">
            <div class="first-title">傲娇锦哥</div>
            <h3>想打佢</h3>
            <div>锦哥傲娇的小眼神表示白云山小意思啦</div>
          </div>
          
          <div class="bd-secondmsg">
            <div class="first-title first-title-left">我们</div>
            <h3>登顶白云山</h3>
            <div class="right-ms">这次相聚后，不知何时才能再相见</div>
          </div>
          <div class="first-pointers onet"></div>
          <div class="first-pointers onew"></div>

        </div>

        <div class="body-div second-laspt">
          <img src="/static/images/cj11.jpg" @click="isShowImg=true,showImg='/static/images/cj11.jpg'"/>
          <div class="first-pointers bgwh lastpt"></div>
        </div>

      </div>
      
    </div>

    <footer>
      <span class="sp1">生活就像一场，无止境的流浪，新患旧伤，我却更坚强一路逆风飞翔，我们不脆弱，不沉默，不协妥，不退缩，不慌张，不绝望，不狂妄，不投降</span>
      <span class="sp2">——邓紫棋</span>
    </footer>  
    <div id="showImg" v-show="isShowImg">
      <span id="showImg-after" @click="isShowImg=false">X</span>
      <img :src="showImg"/>      
    </div>
  </div>
</template>

<script>
  export default {
    name: "first",
    data() {
      return {
        a: ['盒子精','无敌战神','躺鸡萌妹','带妹上分','带兄弟上分','落地成盒','医疗兵','最佳第五人','暴走鸡神','迷你鸡王','车王'],
        showImg: '',
        isShowImg: false,
        imageList: [{
          src: '/static/images/vue.png',
          url: 'https://cn.vuejs.org/'
        },{
          src: '/static/images/element.png',
          url: 'http://element-cn.eleme.io/#/zh-CN'
        },{
          src: '/static/images/node.png',
          url: 'https://nodejs.org/zh-cn/'
        },{
          src: '/static/images/spring.png',
          url: 'https://spring.io/'
        }]
      }
    },
    created() {
    },
    methods: {
      openUrl(url) {
        top.location.href = url
      }
    }
  }
</script>

<style>

img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
}
.logo_img {
  display: none;
}
#showImg{
  position:fixed;
  width:860px;
  height:500px;
  z-index:1000;
  margin:auto;
  right:0;
  left:0;
  top:0;
  bottom:0;
}
#showImg-after {
  color: #CCC;
  font-size: 26px;
  display: inline-block;
  position: relative;
  border-radius: 15px;
  width:30px;
  height:30px;
  cursor: pointer;
  background: rgb(236, 229, 229);
  right:-415px;
  top:29px;
}
#showImg img {
  width:100%;
  height:100%;
  border-radius: 12px;
  background-size: 100% auto;
}
a {
  text-decoration: none;
}
body {
  overflow-x: hidden !important;
}
#firstdiv {
  height: 100%;
  background-repeat: no-repeat; 
}
header {
  width: 100%;
  height: 70%;
  background-repeat: no-repeat; 
  background-size: 100%;
}
#heade_div div {
  color: rebeccapurple;
  display: inline-block;
  font-size: 20px;
  position: absolute;
  cursor: pointer;
}
.el-carousel {
  z-index: 9;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.el-carousel__container{
  height:100%;
}
.el-carousel__indicators {
  background: #151414;
}
.imgUrl {
  cursor: pointer;
}
@keyframes sparkling {
  0% {
    font-size: 12px;
    opacity: 0;
  }
  50% {
    font-size: 24px;
    opacity: 1;
  }
  100% {
    font-size: 12px;
    opacity: 0;
  }
}
@-webkit-keyframes sparkling {
  0% {
    font-size: 12px;
    opacity: 0;
  }
  50% {
    font-size: 24px;
    opacity: 1;
  }
  100% {
    font-size: 12px;
    opacity: 0;
  }
}
@-moz-keyframes sparkling {
  0% {
    font-size: 12px;
    opacity: 0;
  }
  50% {
    font-size: 24px;
    opacity: 1;
  }
  100% {
    font-size: 12px;
    opacity: 0;
  }
}
@-o-keyframes sparkling {
  0% {
    font-size: 12px;
    opacity: 0;
  }
  50% {
    font-size: 24px;
    opacity: 1;
  }
  100% {
    font-size: 12px;
    opacity: 0;
  }
}
#heade_div .con1 {
  animation: sparkling 4s infinite;
  top: 5%;
  left: 15%;
  color: rgb(245, 48, 120);
}
#heade_div .con2 {
  animation: sparkling 6s infinite;
  top: 18%;
  left: 5%;
  color: rgb(160, 247, 242);
}
#heade_div .con3 {
  animation: sparkling 5s infinite;
  top: 36%;
  left: 33%;
  color: rgb(252, 193, 215);
  font-family: serif;
}
#heade_div .con4 {
  animation: sparkling 4s infinite;
  top: 10%;
  left: 25%;
  color: rgb(219, 78, 238);
}
#heade_div .con5 {
  animation: sparkling 6s infinite;
  top: 40%;
  left: 15%;
  color: rgb(187, 144, 199);
}
#heade_div .con6 {
  animation: sparkling 5s infinite;
  top: 30%;
  left: 25%;
  color: rgb(236, 196, 134);
}
#heade_div .con7 {
  animation: sparkling 4s infinite;
  top: 5%;
  left: 65%;
  color: rgb(115, 191, 241);
}
#heade_div .con8 {
  animation: sparkling 5s infinite;
  top: 40%;
  left: 75%;
  color: rgb(214, 122, 241);
}
#heade_div .con9 {
  animation: sparkling 6s infinite;
  top: 10%;
  left: 60%;
  color: rgb(211, 250, 148);
}
#heade_div .con10 {
  animation: sparkling 4s infinite;
  top: 10%;
  left: 85%;
  color: rgb(44, 253, 149);
}
#heade_div .con0 {
  animation: sparkling 5s infinite;
  top: 20%;
  left: 70%;
  color: rgb(245, 167, 241);
}
#first-menu {
  width:100%;
  margin:0 auto;
}
#first-container {
  width: 100%;
  margin: 0 auto;
}
/* VVV颈部四个导航菜单样式VVV */
.first-th-a {
  top:-220px;
  left:282px;
}
.first-th-b {
  top:-218px;
  left:-7px;
  z-index:9;
}
.second-th-a {
  top:-90px;
  left:283px;
  z-index:9;
}
.second-th-b {
  top:-92px;
  right:10px;
}
.first-small-message {
  background-image: url("/static/images/msg.jpg");
}
.first-small-flower {
  background-image: url("/static/images/box.jpg");
}
.first-small-place {
  color: #937793;
  background-image: url("/static/images/tallBox.jpg");
}
.first-small-sweet {
  background-image: url("/static/images/vue.png");
}
.first-small-sweet,.first-small-place,.first-small-flower,.first-small-message {
  background-repeat: no-repeat; 
  background-size: 100%;
  color: white;
  display: inline-block;
  margin:0 20px 0 20px;
  width:360px;
  height: 180px;
  line-height: 150px;
}
/* ^^^颈部四个导航菜单样式 ^^^*/
/* 描述信息指向小三角 */
.first-pointers {
  position:relative;
  width:14px;
  height:14px;
  background-color:#F4F4F4F4;
  transform:rotate(45deg);
  -ms-transform:rotate(45deg); 	/* IE 9 */
  -moz-transform:rotate(45deg); 	/* Firefox */
  -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
  -o-transform:rotate(45deg); 	/* Opera */
}
/* 图片丶描述容器 */
#first-content {
  margin:0 auto;
  width:1470px;
  height:600px;
  padding:0 20px 0 20px;
  overflow:hidden;
}
/* 图片格式 */
#first-content img {
  width:100%;
  height:100%;
  background-size: 100% auto;
}
#first-content img:hover {
  cursor: pointer;
}
/* 小模块样式 */
#first-content .body-div{
  margin-left:4px;
  width:290px;
  height:290px;
  float:left;
}
.body-div h3{
  margin:5px 20px 5px 0;
}
/* 两个描述内容小模块样式 */
.bd-firstmsg{
  padding:15px 0 0 20px;
  position:relative;
  background:#F4F4F4F4;
  width:270px;height:133px;
  margin-bottom:4px;z-index:999;
  text-align:left;
}
.onept {
  top:-232px;
  left:281px;
}
.lastpt{
  top:-87px;
  left:-9px;
}
.onet{
  top:-226px;
  left:-7px;
  z-index:9;
}
.onew{
  top:-95px;
  right:-283px;
  z-index:9;
}
.one-msg {
  position:relative;
  background:#F4F4F4F4;
  height:275px;
  margin-bottom:4px;
  z-index:999;
}
.one-msg-top{
  text-align: left;
  padding:15px 0 0 20px;
}

.one-msg-bottom{
  text-align: right;
  padding:15px 0 0 0;
}
.right-ms {
  margin:0 20px 0 0;
}
.bd-secondmsg{
  position:relative;
  z-index:100;
  background:#F4F4F4F4;
  width:100%;
  height:138px;
  text-align:right;
}
.first-title {
  width:120px;
  height:40px;
  border-bottom:1px solid #ccc;
  color:#ccc;
  font-size:30px;
  font-family:STFangsong;
}
.first-title-left {
  position:relative;
  left:150px;
  top:5px;
}
.bgwh {
  background-color:white;
  width:18px;
  height:18px;
}
footer{
  background: rgb(240, 230, 230);
  width:100%;
  height:80px;
}
footer span {
  display: block;
  height: 40px;
  line-height: 40px;
  width: 80%;
  padding: 0 0 0 10%;
  color: #3e0f44;
}
footer .sp2 {
  text-align: right;
}
@media screen and (min-width: 1530px) and (max-width: 1640px){
  .first-small-sweet,.first-small-place,.first-small-flower,.first-small-message {
    width:320px;
  }
}
@media screen and (min-width: 1460px) and (max-width: 1529px) {
  .first-small-sweet,.first-small-place,.first-small-flower,.first-small-message {
    width:320px;
    margin: 0 10px 0 10px;
  }
  .onet{
    top:-320px;
    left:-7px;
    z-index:9;
  }
  .onew{
    top:-95px !important;
    right:-333px;
    z-index:9;
  }
  .onept {
    top:-327px;
    left:330px;
  }
  /* 图片丶描述容器 */
  #first-content {
  width:1400px;
  height:800px;
  padding:0 20px 0 20px;
  }
 
  /* 小模块样式 */
  #first-content .body-div{
    margin-left:4px;
    width:340px;
    height:380px;
    margin-top: 5px;
  }
 
  /* 两个描述内容小模块样式 */
  .bd-firstmsg{
    position:relative;
    background:#F4F4F4F4;
    width:320px;
    height:173px;
    margin-bottom:4px;
    z-index:999;
    text-align:left;
  }
  .bd-secondmsg{
    position:relative;
    z-index:100;
    background:#F4F4F4F4;
    width:100%;
    height:188px;
    text-align:right;
  }
  
  .first-title-left {
    left:200px;
  }
  /* 第一排最后一个描述样式 */
  .three-screen {
    float: none;
    clear: both;
    height:150px !important;
    position:relative;
    top:-170px;
    left:1032px;
    color:#c0c0c0;
  }
  .three-screen-div {
    height:100% !important; 
    background-color:rgba(0,0,0,.4);
  }
  .hidden {
    display: none !important;
  }
  .second-onemsg{
    background: rgba(0, 0, 0, .4);
    color: #c0c0c0;
    position:relative;
    top:215px;
    height:150px;
    
  }
  .second-onept {
    position:relative;
    left:-344px;
  }
  .second-twpt {
    position:relative;
    left:-688px;
  }
  .second-laspt {
    position:relative;
    top:-385px;
    left:689px;
  }
  .second-lasmsg {
    position:relative;
    left:688px;
    top:-385px;
  }
  .second-as {
    position:relative;
    left:-688px;
  }
}
@media screen and (min-width: 1270px) and (max-width: 1459px) {
  
  @keyframes sparkling {
    0% {
      font-size: 12px;
      opacity: 0;
    }
    50% {
      font-size: 22px;
      opacity: 1;
    }
    100% {
      font-size: 12px;
      opacity: 0;
    }
  }
  @-moz-keyframes sparkling {
    0% {
      font-size: 12px;
      opacity: 0;
    }
    50% {
      font-size: 22px;
      opacity: 1;
    }
    100% {
      font-size: 12px;
      opacity: 0;
    }
  }
  @-webkit-keyframes sparkling {
    0% {
      font-size: 12px;
      opacity: 0;
    }
    50% {
      font-size: 22px;
      opacity: 1;
    }
    100% {
      font-size: 12px;
      opacity: 0;
    }
  }
  @-o-keyframes sparkling {
    0% {
      font-size: 12px;
      opacity: 0;
    }
    50% {
      font-size: 22px;
      opacity: 1;
    }
    100% {
      font-size: 12px;
      opacity: 0;
    }
  }
  .first-small-sweet,.first-small-place,.first-small-flower,.first-small-message {
    width:280px;
    margin: 0 10px 0 10px;
  }
  .onet{
    top:-230px;
    left:-7px;
    z-index:9;
  }
  .onew{
    top:-95px !important;
    right:-293px;
    z-index:9;
  }
  .onept {
    top:-236px;
    left:290px;
  }
  /* 图片丶描述容器 */
  #first-content {
  width:1280px;
  height:620px;
  padding:0 20px 0 80px;
  }
 
  /* 小模块样式 */
  #first-content .body-div{
    margin-left:4px;
    width:300px;
    height:300px;
    margin-top: 5px;
  }
 
  /* 两个描述内容小模块样式 */
  .bd-firstmsg{
    position:relative;
    background:#F4F4F4F4;
    width:280px;
    height:133px;
    margin-bottom:4px;
    z-index:999;
    text-align:left;
  }
  .bd-secondmsg{
    position:relative;
    z-index:100;
    background:#F4F4F4F4;
    width:100%;
    height:148px;
    text-align:right;
  }
  
  .first-title-left {
    left:160px;
  }
  /* 第一排最后一个描述样式 */
  .three-screen {
    float: none;
    clear: both;
    height:115px !important;
    position:relative;
    top:-135px;
    left:912px;
    color:#c0c0c0;
  }
  .three-screen-div {
    height:100% !important; 
    background-color:rgba(0,0,0,.4);
  }
  .hidden {
    display: none !important;
  }
  .second-onemsg{
    background: rgba(0, 0, 0, .4);
    color: #c0c0c0;
    position:relative;
    top:170px;
    height:115px;
  }
  .second-onept {
    position:relative;
    left:-304px;
  }
  .second-twpt {
    position:relative;
    left:-608px;
  }
  .second-laspt {
    position:relative;
    top:-305px;
    left:609px;
  }
  .second-lasmsg {
    position:relative;
    left:608px;
    top:-305px;
  }
  .second-as {
    position:relative;
    left:-608px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1269px) {
  
  @keyframes sparkling {
    0% {
      font-size: 12px;
      opacity: 0;
    }
    50% {
      font-size: 16px;
      opacity: 1;
    }
    100% {
      font-size: 12px;
      opacity: 0;
    }
  }
  @-moz-keyframes sparkling {
    0% {
      font-size: 12px;
      opacity: 0;
    }
    50% {
      font-size: 16px;
      opacity: 1;
    }
    100% {
      font-size: 12px;
      opacity: 0;
    }
  }
  @-webkit-keyframes sparkling {
    0% {
      font-size: 12px;
      opacity: 0;
    }
    50% {
      font-size: 16px;
      opacity: 1;
    }
    100% {
      font-size: 12px;
      opacity: 0;
    }
  }
  @-o-keyframes sparkling {
    0% {
      font-size: 12px;
      opacity: 0;
    }
    50% {
      font-size: 16px;
      opacity: 1;
    }
    100% {
      font-size: 12px;
      opacity: 0;
    }
  }
  #first-container {
    height:130px;
    overflow: hidden;
  }
  .first-small-sweet,.first-small-place,.first-small-flower,.first-small-message {
    width:20%;
    height: 130px;
    line-height: 100px;
    background-size: cover;
  }
  .onet{
    top:-230px;
    left:-7px;
    z-index:9;
  }
  .onew{
    top:-95px !important;
    right:-253px;
    z-index:9;
  }
  .onept {
    top:-236px;
    left:250px;
  }
  /* 图片丶描述容器 */
  #first-content {
    width:1060px;
    height:620px;
    padding:0 20px 0 10px;
  }
 
  /* 小模块样式 */
  #first-content .body-div{
    margin-left:4px;
    width:260px;
    height:300px;
    margin-top: 5px;
  }
 
  /* 两个描述内容小模块样式 */
  .bd-firstmsg{
    position:relative;
    background:#F4F4F4F4;
    width:240px;
    height:133px;
    margin-bottom:4px;
    z-index:999;
    text-align:left;
  }
  .bd-secondmsg{
    position:relative;
    z-index:100;
    background:#F4F4F4F4;
    width:100%;
    height:148px;
    text-align:right;
  }
  
  .first-title-left {
    left:120px;
  }
  /* 第一排最后一个描述样式 */
  .three-screen {
    float: none;
    clear: both;
    height:115px !important;
    position:relative;
    top:-135px;
    left:792px;
    color:#c0c0c0;
  }
  .three-screen-div {
    height:100% !important; 
    background-color:rgba(0,0,0,.4);
  }
  .hidden {
    display: none !important;
  }
  .second-onemsg{
    background: rgba(0, 0, 0, .4);
    color: #c0c0c0;
    position:relative;
    top:170px;
    height:115px;
  }
  .second-onept {
    position:relative;
    left:-264px;
  }
  .second-twpt {
    position:relative;
    left:-528px;
  }
  .second-laspt {
    position:relative;
    top:-305px;
    left:529px;
  }
  .second-lasmsg {
    position:relative;
    left:528px;
    top:-305px;
  }
  .second-as {
    position:relative;
    left:-528px;
  }
}
@media screen and (min-width: 300px)  and (max-width: 560px) {
  
  .logo_img {
    display: inline;
    position:absolute;
    top:160px;
    left:128px;
    width:120px;
    height:120px;
  }
  #firstdiv header {
    height:25%;
  }
  @keyframes sparkling {
    0% {
      font-size: 8px;
      opacity: 0;
    }
    50% {
      font-size: 12px;
      opacity: 1;
    }
    100% {
      font-size: 8px;
      opacity: 0;
    }
  }
  @-moz-keyframes sparkling {
    0% {
      font-size: 8px;
      opacity: 0;
    }
    50% {
      font-size: 12px;
      opacity: 1;
    }
    100% {
      font-size: 8px;
      opacity: 0;
    }
  }
  @-webkit-keyframes sparkling {
    0% {
      font-size: 8px;
      opacity: 0;
    }
    50% {
      font-size: 12px;
      opacity: 1;
    }
    100% {
      font-size: 8px;
      opacity: 0;
    }
  }
  @-o-keyframes sparkling {
    0% {
      font-size: 8px;
      opacity: 0;
    }
    50% {
      font-size: 12px;
      opacity: 1;
    }
    100% {
      font-size: 8px;
      opacity: 0;
    }
  }
  #firstdiv #heade_div .con1 {
    animation: sparkling 4s infinite;
    top: 5%;
    left: 15%;
    color: rgb(245, 48, 120);
  }
  #firstdiv #heade_div .con2 {
    animation: sparkling 6s infinite;
    top: 18%;
    left: 5%;
    color: rgb(160, 247, 242);
  }
  #firstdiv #heade_div .con3 {
    animation: sparkling 5s infinite;
    top: 10%;
    left: 33%;
    color: rgb(252, 193, 215);
    font-family: serif;
  }
  #firstdiv #heade_div .con4 {
    animation: sparkling 4s infinite;
    top: 10%;
    left: 25%;
    color: rgb(219, 78, 238);
  }
  #firstdiv #heade_div .con5 {
    animation: sparkling 6s infinite;
    top: 12%;
    left: 15%;
    color: rgb(187, 144, 199);
  }
  #firstdiv #heade_div .con6 {
    animation: sparkling 5s infinite;
    top: 18%;
    left: 45%;
    color: rgb(236, 196, 134);
  }
  #firstdiv #heade_div .con7 {
    animation: sparkling 4s infinite;
    top: 5%;
    left: 55%;
    color: rgb(115, 191, 241);
  }
  #firstdiv #heade_div .con8 {
    animation: sparkling 5s infinite;
    top: 10%;
    left: 75%;
    color: rgb(214, 122, 241);
  }
  #firstdiv #heade_div .con9 {
    animation: sparkling 6s infinite;
    top: 10%;
    left: 60%;
    color: rgb(211, 250, 148);
  }
  #firstdiv #heade_div .con10 {
    animation: sparkling 4s infinite;
    top: 10%;
    left: 85%;
    color: rgb(44, 253, 149);
  }
  #firstdiv #heade_div .con0 {
    animation: sparkling 5s infinite;
    top: 10%;
    left: 70%;
    color: rgb(245, 167, 241);
  }
  #firstdiv #first-container {
    height:260px;
    overflow: hidden;
  }
  #firstdiv .spLine {
    width:40% !important; 
  }
  #firstdiv .first-small-sweet,#firstdiv .first-small-place,#firstdiv .first-small-flower,#firstdiv .first-small-message {
    width:40%;
    margin: 0 10px 20px 10px;
    height: 130px;
    line-height: 100px;
    background-size: cover;
    font-size: 12px !important;
    font-family: "SimSun";
    border-radius: 5px;
  }
  #firstdiv .onet{
    top:-430px;
    left:187px;
    z-index:9;
  }
  #firstdiv .onew{
    top:-21px !important;
    right:-180px;
    z-index:9;
  }
  #firstdiv .onept {
    top:-13px;
    left:185px;
  }
  #firstdiv .lastpt {
    top:-434px;
    left:178px;
  }
  /* 图片丶描述容器 */
 #firstdiv  #first-content {
  width:96%;
  height:3870px;
  padding:0;
  margin: 0 auto;
  }
 
  /* 小模块样式 */
  #firstdiv  #first-content .body-div{
    width:98%;
    height:420px;
    margin-top: 5px;
    clear: both;
    display: block;
  }
 
  /* 两个描述内容小模块样式 */
  #firstdiv .bd-firstmsg{
    position:relative;
    background:#F4F4F4F4;
    width:94.5%;
    height:190px;
    z-index:999;
    text-align:left;
  }
  #firstdiv .bd-secondmsg{
    position:relative;
    z-index:100;
    background:#F4F4F4F4;
    width:100%;
    height:50%;
    text-align:right;
  }
  
  #firstdiv .first-title-left {
    left:210px;
  }
  /* 第一排最后一个描述样式 */
  .three-screen {
    float: none;
    clear: both;
    height:210px !important;
    position:relative;
    top:0;
    left:0;
  }
  .three-screen-div {
    height:100% !important; 
    background-color:#F4F4F4F4;
  }
  .hidden {
    display: none !important;
  }
  .second-onemsg{
    position:relative;
    top:15px;
    height:100%;
  }
  .second-onept {
    position:relative;
    left:0;
    margin-bottom: 32px;
    height:210px !important;
  }
  .second-twpt {
    position:relative;
    left:0;
  }
  .second-laspt {
    position:relative;
    top:0;
    left:0;
  }
  .second-lasmsg {
    position:relative;
    left:0;
    top:0;
  }
  .second-as {
    position:relative;
    left:0;
  }
  footer{
    background: rgb(240, 230, 230);
    width:100%;
    height:160px;
    margin: 0 auto;
  }
  footer span {
    display: block;
    height: 120px;
    line-height: 40px;
    width: 98%;
    padding: 0;
    text-align: center;
    color: #3e0f44;
  }
  footer .sp2 {
    height: 40px;
    text-align: right;
  }
  #showImg{
    position:fixed;
    width:94%;
    height:520px;
    z-index:1000;
    margin:auto;
    right:0;
    left:0;
    top:-180px;
    bottom:0;
  }
  #showImg-after {
    color: rgb(190, 143, 143);
    font-size: 26px;
    display: inline-block;
    position: relative;
    border-radius: 15px;
    width:30px;
    height:30px;
    cursor: pointer;
    background: rgb(236, 229, 229);
    right:-162px;
    top:29px;
  }
  #showImg img {
    width:100%;
    height:100%;
    border-radius: 12px;
  }
}
</style>
