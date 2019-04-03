<template>
  <div id="three">
		<header>
			<div class="header_menu">
				<ul>
					<li>
						<img src="/static/images/ftc.png"/>
					</li>
					<li><router-link to= "/">首页</router-link></li>
					<li><router-link to= "/four">盒子我们</router-link></li>
					<li><router-link to= "/five">留言板</router-link></li>
					<li><router-link to= "/second">概率事件</router-link></li>
				</ul>
			</div>
      <div></div>
		</header>
    <div id="form">
      <el-form :model="collectBox" :inline="true">
        <el-form-item>
          <el-upload
            class="avatar-uploader"
            ref="uploadImage"
            action="http://47.106.10.32:10138/boxCollect/saveBox"
            :show-file-list="false"
            :on-success="uploadSuccess" 
            :on-change="changeImage"
            :auto-upload="false"
            :data="collectBox"
            :multiple="false"
            name="image">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="一级标题:">
          <el-input placeholder="请填写主标题" v-model="collectBox.firstTitle"></el-input>
        </el-form-item>
        <el-form-item label="二级标题:">
          <el-input placeholder="请填写副标题" v-model="collectBox.secondTitle"></el-input>
        </el-form-item>
        <el-form-item label="规格/用处:">
          <el-input placeholder="请填写规格/用处" v-model="collectBox.useTo"></el-input>
        </el-form-item>
        <el-form-item label="附带地址:">
          <el-input placeholder="例如(https://www.baidu.com/)" v-model="collectBox.anotherAddress"></el-input>
        </el-form-item>
        <el-form-item label="详细描述:">
          <el-input
            style="width:98%;"
            type="textarea"
            :autosize="{ minRows: 6, maxRows: 6}"
            placeholder="请输入内容"
            v-model="collectBox.msg">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="submitUpload">提交到服务器</el-button>
        </el-form-item>
      </el-form>  
    </div>
  </div>    
</template>
<script>
export default {
	name: 'four',
	data() {
		return {
      imageUrl: '/static/images/upload.jpg',
      collectBox: {
        firstTitle: null,
        secondTitle: null,
        useTo: null,
        anotherAddress: null,
        msg: null
      },
      isShowImgUrl: true
		}
  },
  created(){
  },
  methods: {
    changeImage(file, fileList) {
      if (this.isShowImgUrl) {
        this.imageUrl = URL.createObjectURL(file.raw)
      }
      this.isShowImgUrl = true
      // console.log('this.imageUrl:' + this.imageUrl)
    },
    uploadSuccess() {
      this.$refs.uploadImage.clearFiles()
      this.isShowImgUrl = false
      this.imageUrl = '/static/images/upload.jpg'
    },
    submitUpload() {
      this.$refs.uploadImage.submit()
    }
  }
}
</script>
<style>
@charset "UTF-8";
img {
  object-fit:cover;
}
.el-form-item {
  float: left;  
  margin-bottom:15px;
}
#three header {
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
#three ul {
	margin: 0;
	padding: 0;
}
#three li {
	list-style: none;
	margin: 0;
	padding: 0;
}
#three header ul li {
	width: 20%;
	float: left;
	line-height: 60px;
}
#three header ul li:first-child {
	text-align: left;
}
#three header ul li img {
	height:60px;
}
#three header div {
	width: 100%;
	height:60px;
}
#three header .header_menu {
	position: fixed;
	z-index: 9;
  background: rgb(249, 249, 253);
}
.el-form {
  width: 680px;
  margin: 20px auto;
}
.avatar-uploader .el-upload {
    width: 320px;
    height: 420px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 290px;
  height: 260px;
  line-height: 260px;
  text-align: center;
}
.avatar {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
@media only screen and (min-width: 300px) and (max-width: 460px) {
  .avatar-uploader .el-upload {
    width: 96%;
    height: 420px;
  }
  .el-form {
    width: 96%;
    margin:auto;
  }
  .el-form-item,.el-form-item__content {
    width:100%;
  }
  #three #form {
    margin: 20px 0 0 0;
  }
  #three header ul li {
		font-size: 14px;
	}
}
</style>


