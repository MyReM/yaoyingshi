<template>
  <div id="four">
		<header>
			<div class="header_menu">
				<ul>
					<li>
						<img src="/static/images/ftc.png"/>
					</li>
					<li><router-link to= "/">首页</router-link></li>
					<li><router-link to= "/three">盒子收集</router-link></li>
					<li><router-link to= "/four">盒子我们</router-link></li>
					<li><router-link to= "/second">概率事件</router-link></li>
				</ul>
			</div>
			<div>
			</div>
		</header>
		<div class="masonry">
			<div class="item" v-for="(val,index) in data" :key="val+index">
				<div class="item_content item_middle">
					<img :src="val.img"/>
					<div class="item_line">
						<div class="item_msg">
							{{val.msg}}
						</div>
					</div>
					<div class="item_time">
						 {{val.time}}
					</div>
				</div>
			</div>
		</div>
  </div>    
</template>
<script>
export default {
	name: 'four',
	data() {
		return {
			data: [{
				'img' : '/static/images/cj1.jpg',
				'msg' : '大吉大利，今晚鸡否？',
				'time' : '2019.03.21 14:30'
			},{
				'img' : '/static/images/cj2.jpg',
				'msg' : '大吉大利，今晚鸡否？',
				'time' : '2019.03.21 14:30'
			},{
				'img' : '/static/images/cj3.jpg',
				'msg' : '大吉大利，今晚鸡否？',
				'time' : '2019.03.21 14:30'
			},{
				'img' : '/static/images/cj4.jpg',
				'msg' : '大吉大利，今晚鸡否？',
				'time' : '2019.03.21 14:30'
			},{
				'img' : '/static/images/cj5.jpg',
				'msg' : '大吉大利，今晚鸡否？',
				'time' : '2019.03.21 14:30'
			},{
				'img' : '/static/images/cj6.jpg',
				'msg' : '大吉大利，今晚鸡否？',
				'time' : '2019.03.21 14:30'
			},{
				'img' : '/static/images/cj7.jpg',
				'msg' : '大吉大利，今晚鸡否？',
				'time' : '2019.03.21 14:30'
			},{
				'img' : '/static/images/cj8.jpg',
				'msg' : '大吉大利，今晚鸡否？',
				'time' : '2019.03.21 14:30'
			},{
				'img' : '/static/images/cj9.jpg',
				'msg' : '大吉大利，今晚鸡否？',
				'time' : '2019.03.21 14:30'
			},{
				'img' : '/static/images/cj10.jpg',
				'msg' : '大吉大利，今晚鸡否？',
				'time' : '2019.03.21 14:30'
			}]
		}
	}
}
</script>
<style>
@charset "UTF-8";
#four header {
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
#four ul {
	margin: 0;
	padding: 0;
}
#four li {
	list-style: none;
	margin: 0;
	padding: 0;
}
#four header ul li {
	width: 20%;
	float: left;
	line-height: 60px;
}
#four header ul li:first-child {
	text-align: left;
}
#four header ul li img {
	height:60px;
}
#four header div {
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
	#four header ul li {
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
	box-shadow: 0  2px 38px rgb(128, 114, 114);
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
	width:80%;
	padding:10px;
	color:#ccc;
}
</style>


