<template>
  <div id="technology">
		<header>
			<div class="header_menu">
				<ul>
					<li>
						<img src="/static/images/ftc.png"/>
					</li>
					<li><router-link to= "/">首页</router-link></li>
					<li><router-link to= "/three">数据收集</router-link></li>
					<li><router-link to= "/four">说话的盒子</router-link></li>
					<li><router-link to= "/second">概率事件</router-link></li>
				</ul>
			</div>
			<div>
			</div>
		</header>
		<div class="masonry">
			<div class="item" v-for="(val,index) in data" :key="val+index">
				<div class="item_content item_middle">
					<a :href="val.anotherAddress"><img :src="val.imageName"/></a>
					<div class="item_line">
						<div class="item_msg" style="font-size:16px;">
							<span v-if="val.firstTitle !== 'null'">{{val.firstTitle}}</span>
							<span v-else style="color:#c0c0c0;">暂无标题</span>
						</div>
						<div class="item_msg" style="color:#c0c0c0;text-align:left;">
							<span v-if="val.secondTitle !== 'null'">{{val.secondTitle}}</span>
							<span v-else>暂无其他描述</span>
						</div>
						<div class="item_msg" style="color:#c0c0c0;text-align:left;">
							<a :href="val.anotherAddress" v-if="val.anotherAddress !== 'null'">{{val.anotherAddress === 'null' ? '暂无网址' : val.anotherAddress}}</a>
							<span v-else>暂无网址</span>
						</div>
					</div>
					<div class="item_time">
						 {{val.updateTime}}
					</div>
				</div>
			</div>
		</div>
  </div>    
</template>
<script>
import {getAllTechnology} from '../api/yaoyingshi.js'
export default {
	name: 'technology',
	data() {
		return {
			data: null
		}
	},
	created() {
		getAllTechnology().then(res => {
			this.data = res.data
		})
	}
}
</script>
<style>
@charset "UTF-8";
#technology header {
	overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 100%;
	margin: 0 auto;
  background: rgb(179, 177, 192);
}
a {
	text-decoration: none;
	color: #18314F;
}
#technology ul {
	margin: 0;
	padding: 0;
}
#technology li {
	list-style: none;
	margin: 0;
	padding: 0;
}
#technology header ul li {
	width: 20%;
	float: left;
	line-height: 60px;
}
#technology header ul li:first-child {
	text-align: left;
}
#technology header ul li img {
	height:60px;
}
#technology header div {
	width: 100%;
	height:60px;
}
header .header_menu {
	position: fixed;
	z-index: 9;
  background: rgb(249, 249, 253);
}
.masonry img {
	width: 100%;
	min-height: 300px;
	max-height: 900px;
	object-fit: cover;
}
.masonry {
	width:100%;
  column-count: 6;
	column-gap: 0;
	margin: 0 auto;
	padding-top: 10px;
}
@media only screen and (min-width: 1530px) {
  .masonry {
		width:1500px;
		column-count: 5;
  }
}
@media only screen and (min-width: 1460px) and (max-width: 1529px) {
  .masonry {
		width:1400px;
		column-count: 5;
  }
}
@media only screen and (min-width: 1270px) and (max-width: 1459px) {
  .masonry {
		width: 1250px;
		column-count: 5;
  }
}
@media only screen and (max-width: 1269px) {
  .masonry {
		width:1000px;
		column-count: 4;
  }
}
@media only screen and (min-width: 800PX) and (max-width: 1053PX) {
  .masonry {
		width: 1000px;
		column-count: 4;
  }
}
@media only screen and (min-width: 300px) and (max-width: 460px) {
  .masonry {
		width: 94%;
		column-count: 2;
  }
	#technology header ul li {
		font-size: 14px;
	}
}

.item {
	break-inside: avoid;
	box-sizing: border-box;
  padding: 6px;
}
.item_content:hover {
	top: -1px;
	box-shadow: 0  2px 10px rgb(128, 114, 114);
}
.item_content {
  position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
  align-items: center;
  width: 100%;
  background: white;
  box-sizing: rgb(32, 30, 30)r-box;
  color: #18314F;
	border-radius: 3px;
}
.item_line {
	width:100%;
	word-wrap:break-word;
	border-bottom:1px solid #ccc;	
}
.item_msg {
	line-height:30px;
	width:80%;
	margin:0 auto;
	font-size:13px;
}
.item_time {
	line-height:20px;
	word-wrap: break-word;
	width:100%;
	padding:10px;
	color:#ccc;
}
</style>


