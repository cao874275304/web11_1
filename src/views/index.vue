<template>
  <div>
    <!--轮播图  -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item,index in imgList1" :key="index">
        <h3><img :src="item.pic" /></h3>
      </el-carousel-item>
    </el-carousel>

    <!--缩略图-->
    <div class="container g-suolueTu1">

      <div class="row">
        <div class="col-xs-6 col-md-3 m-left" >
          <ul >
            <li v-for="item,index in imgList2" :key="index">
             	<img :src="item.pic" alt="" />
  			    		<p>{{item.descp}}</p>
            </li>
          </ul>
        </div>
        <div class="col-xs-6 col-md-3 m-right" v-for="item,index in imgList3">

          <a href="#"><img :src="item.pic" alt="" /></a>
        </div>
      </div>
    </div>
    <!--活动专区-->
    <div class="container">
      <h1>活动专区</h1>
    </div>

    <div class="container g-suolueTu2">
      <div class="row">
        <div class="col-xs-6 col-md-3 m-left">
          <img src="../assets/imgs/shouye/index_img_15662636494951.jpg" />
        </div>
        <div class="col-xs-6 col-md-9 m-right">
          <div class="row">
            <div class="col-xs-6 col-md-3 f-info" v-for="item,index in imgList4">
              <p>
                <router-link :to="'/detail/'+item.id"><img :src="item.pic" alt="" /></router-link>
              </p>
              <p>
                <router-link to="/detail">{{item.title}}</router-link>
              </p>
              <p>{{item.descp}}</p>
              <p>
                <i>￥</i>{{item.price}}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!--热销商品-->
    <div class="container">
      <h1>热销商品</h1>
    </div>

    <div class="container g-suolueTu2 g-suolueTu3">
      <!--第一行-->
      <div class="row">
        <div class="col-xs-6 col-md-3 m-left">
          <img src="../assets/imgs/shouye/index_img_15646239672151.jpg" />
        </div>
        <div class="col-xs-6 col-md-9 m-right">
          <div class="row">
            <div class="col-xs-6 col-md-3 f-info" >
             <p>
                <a href="#"><img src="../assets/imgs/shouye/d2.png" alt="" /></a>
              </p>
              <p>
                <a href="#">DJ35</a>
              </p>
              <p>热销爆款 能看慧思考</p>
              <p>
                <i>￥</i>1699</p>
            </div>

            <div class="col-xs-6 col-md-3 f-info">
              <p>
                <a href="#"><img src="../assets/imgs/shouye/d2.png" alt="" /></a>
              </p>
              <p>
                <a href="#">DJ35</a>
              </p>
              <p>热销爆款 能看慧思考</p>
              <p>
                <i>￥</i>1699</p>
            </div>

            <div class="col-xs-6 col-md-3 f-info">
              <p>
                <a href="#"><img src="../assets/imgs/shouye/d3.png" alt="" /></a>
              </p>
              <p>
                <a href="#">DN55</a>
              </p>
              <p>激光扫描 全局规划</p>
              <p>
                <i>￥</i>2399</p>
            </div>

            <div class="col-xs-6 col-md-3 f-info">
              <p>
                <a href="#"><img src="../assets/imgs/shouye/d4.png" alt="" /></a>
              </p>
              <p>
                <a href="#">N5 Fun</a>
              </p>
              <p>视觉导航 规划升级</p>
              <p>
                <i>￥</i>1899</p>
            </div>
          </div>
          <!--第二行-->
          <div class="row">
            <div class="col-xs-6 col-md-3 f-info">
              <p>
                <a href="#"><img src="../assets/imgs/shouye/d5.png" alt="" /></a>
              </p>
              <p>
                <a href="#">T5 Max</a>
              </p>
              <p>重磅新品 革新升级</p>
              <p>
                <i>￥</i>2899</p>
            </div>

            <div class="col-xs-6 col-md-3 f-info">
              <p>
                <a href="hotSall.html"><img src="../assets/imgs/shouye/d6.png" alt="" /></a>
              </p>
              <p>
                <a href="hotSall.html">DJ35</a>
              </p>
              <p>热销爆款 能看慧思考</p>
              <p>
                <i>￥</i>1699</p>
            </div>

            <div class="col-xs-6 col-md-3 f-info">
              <p>
                <a href="#"><img src="../assets/imgs/shouye/d7.png" alt="" /></a>
              </p>
              <p>
                <a href="#">DN55</a>
              </p>
              <p>激光扫描 全局规划</p>
              <p>
                <i>￥</i>2399</p>
            </div>

            <div class="col-xs-6 col-md-3 f-info">
              <p>
                <a href="#"><img src="../assets/imgs/shouye/d8.png" alt="" /></a>
              </p>
              <p>
                <a href="#">N5 Fun</a>
              </p>
              <p>视觉导航 规划升级</p>
              <p>
                <i>￥</i>1899</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--巨幕-->
    <!--科沃斯团购，一站式专业采购平台-->
    <div class="container">
      <div class="jumbotron XboxJU">

      </div>
    </div>

    <!--配件专区-->
    <div class="container">
      <h1>配件专区</h1>
    </div>

    <div class="container g-suolueTu2">
      <div class="row">
        <div class="col-xs-6 col-md-3 m-left">
          <img src="../assets/imgs/shouye/d1.jpg" />
        </div>
        <div class="col-xs-6 col-md-9 m-right">
          <div class="row">
            <div class="col-xs-6 col-md-3 f-info" v-for="item,index in imgList6">
              <p>
                <a href="#"><img :src="item.pic" alt="" /></a>
              </p>
              <p>
                <a href="#">{{item.title}}</a>
              </p>

            </div>


          </div>
        </div>
      </div>
    </div>
    <!--猜你喜欢-->
    <div class="container">
      <h1>猜你喜欢</h1>
    </div>

    <div class="container g-suolueTu2 g-suolueTu5">
      <div class="row">
       <div class="col-xs-6 col-md-3 f-info2">
			 
			      	<a href="#"><img src="../assets/imgs/shouye/f1.png" alt="" /></a>
      	
      	 	  	<p><a href="#">地宝T5 Plus</a></p>
      	 	  	<p>以旧换新 高配新品</p>
      	 	  	<p><i>￥</i>2999</p>
		      </div>

         <div class="col-xs-6 col-md-9 m-right" >
          <div class="row">
            <div class="col-xs-6 col-md-3 f-info" v-for="item,index in imgList7" :key="index">
              <p>
                <a href="#"><img :src="item.pic" alt="" /></a>
              </p>
              <p>
                <a href="#">{{item.title}}</a>
              </p>
              <p>{{item.descp}}</p>
              <p>
                <i>￥</i>{{item.price}}</p>

            </div>


          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex"
// import goodsList from "../datas/goodsdata.js"
export default {
  data() {
    return {
      imgList1: [
        { id: 1, pic: require("../assets/imgs/shouye/banner1.jpg") },
        { id: 2, pic: require("../assets/imgs/shouye/banner2.jpg") },
        { id: 3, pic: require("../assets/imgs/shouye/banner3.jpg") }
      ],
      imgList2 : [
        { id: 1, pic: require("../assets/imgs/shouye/s2.jpg"),descp:"积分商城" },
        { id: 2, pic: require("../assets/imgs/shouye/s1.jpg"),descp:"积分商城" },
        { id: 3, pic: require("../assets/imgs/shouye/s3.jpg"),descp:"积分商城" },
        { id: 4, pic: require("../assets/imgs/shouye/s4.jpg"),descp:"积分商城" },
        { id: 5, pic: require("../assets/imgs/shouye/s5.jpg"),descp:"积分商城" },
        { id: 6, pic: require("../assets/imgs/shouye/s6.jpg"),descp:"积分商城" }
      ],
      imgList3 : [
        { id: 1, pic: require("../assets/imgs/shouye/b-1.jpg")},
        { id: 2, pic: require("../assets/imgs/shouye/b-2.jpg")},
        { id: 3, pic: require("../assets/imgs/shouye/b-3.jpg")},
      ],
      imgList4 : [
        { id: 1, pic: require("../assets/imgs/shouye/b-1.png"),title:"地宝T5 Plus",descp:"以旧换新 高配新品",price:"2999"},
        { id: 2, pic: require("../assets/imgs/shouye/b-2.png"),title:"地宝DN520",descp:"以旧换新 高配新品",price:"2699"},
        { id: 3, pic: require("../assets/imgs/shouye/b-3.png"),title:"地宝T5 Plus",descp:"以旧换新 高配新品",price:"2499"},
        { id: 4, pic: require("../assets/imgs/shouye/b-4.png"),title:"地宝T5 Plus",descp:"视觉导航新品 全面升级",price:"1999"}
      ],
      imgList5 : [
        { id: 1, pic: require("../assets/imgs/shouye/d1.png"),title:"T5 Max",descp:"重磅新品 革新升级",price:"2899"},
        { id: 2, pic: require("../assets/imgs/shouye/d2.png"),title:"DJ35",descp:"热销爆款 能看慧思考",price:"1699"},
        { id: 3, pic: require("../assets/imgs/shouye/d3.png"),title:"DN55",descp:"激光扫描 全局规划",price:"2399"},
        { id: 4, pic: require("../assets/imgs/shouye/d4.png"),title:"N5 Fun",descp:"视觉导航 规划升级",price:"1899"},
        { id: 5, pic: require("../assets/imgs/shouye/d5.png"),title:"T5 Max",descp:"重磅新品 革新升级",price:"2899"},
        { id: 6, pic: require("../assets/imgs/shouye/d6.png"),title:"DJ35",descp:"热销爆款 能看慧思考",price:"1699"},
        { id: 7, pic: require("../assets/imgs/shouye/d7.png"),title:"DN55",descp:"激光扫描 全局规划",price:"2399"},
        { id: 8, pic: require("../assets/imgs/shouye/d8.png"),title:"N5 Fun",descp:"视觉导航 规划升级",price:"1899"}
      ],
      imgList6 : [
        { id: 1, pic: require("../assets/imgs/shouye/index_img_15077185925579.png"),title:"边刷"},
        { id: 2, pic: require("../assets/imgs/shouye/index_img_15077185955670.png"),title:"抹布"},
        { id: 3, pic: require("../assets/imgs/shouye/index_img_15077185985284.png"),title:"滤材"},
        { id: 4, pic: require("../assets/imgs/shouye/index_img_15595435905496.png"),title:"滚刷"},
      ],
      imgList7 : [
        // { id: 1, pic: require("../assets/imgs/shouye/f1.png"),title:"地宝T5 Plus",descp:"以旧换新 高配新品",price:"2999"},
        { id: 2, pic: require("../assets/imgs/shouye/b-1.png"),title:"地宝T5 Plus",descp:"以旧换新 高配新品",price:"2999"},
        { id: 3, pic: require("../assets/imgs/shouye/b-2.png"),title:"地宝DN520",descp:"以旧换新 高配新品",price:"2699"},
        { id: 4, pic: require("../assets/imgs/shouye/b-3.png"),title:"窗宝W880",descp:"以旧换新 高配新品",price:"2499"},
        { id: 5, pic: require("../assets/imgs/shouye/b-4.png"),title:"地宝DJ65",descp:"视觉导航新品 全面升级",price:"1999"},
        
      ]
    }
  },
  computed: {
    ...mapState(["goodsList"])
  }

}
</script>

<style>
/*公共样式  */
*{
	margin: 0px;
	padding: 0px;
}
ul,li{
   list-style: none;
}
a{
	text-decoration: none;
}
/*轮播图样式  */

.el-carousel__container {
   height: 400px; 
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item h3>img {
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}


/*缩略图样式  */

.g-suolueTu1 {
   /* margin-top: 400px;  */
}

.g-suolueTu1 .m-left {
  background: white;
  background-image: url(../assets/imgs/shouye/fastnavL-bg.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 220px;
}

.g-suolueTu1 .m-left ul {
  overflow: hidden;
}

.g-suolueTu1 .m-left ul li {
  float: left;
  padding: 20px 19px;
  text-align: center;
}

.g-suolueTu1 .m-left ul li img {
  margin-bottom: 13px;
}

.g-suolueTu1 .m-left ul li p {
  font-size: 12px;
  color: #757575;
}

.g-suolueTu1 .m-left ul li p:hover {
  color: #f00a3b;
}

.g-suolueTu1 .m-left:hover {
  box-shadow: 0px 0px 10px #cac7c7;
}

.g-suolueTu1 .m-right {
  /*	border: 1px solid red;*/
  height: 220px;
  line-height: 220px;
  padding-left: 10px;
}

.g-suolueTu1 .m-right a {
  display: block;
  width: 100%;
  background: white;
  /*	padding:40px 0px;*/
}

.g-suolueTu1 .m-right img {
  width: 100%;
}

.g-suolueTu1 .m-right img:hover {
  box-shadow: 0px 0px 10px #cac7c7;
}

h1 {
  font-size: 24px;
  color: #263746;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 0px;
  margin-top: 0px;
}

.g-suolueTu2 .m-left img {
  width: 100%;
  height: 340px;
}

.g-suolueTu2 .m-right .f-info {
  width: 23%;
  height: 340px;
  background: white;
  margin-right: 19px;
}

.g-suolueTu2 .m-right .f-info:last-child {
  margin-right: 0px;
}

.g-suolueTu2 .m-right .f-info p {
  text-align: center;
}

.g-suolueTu2 .m-right .f-info p img {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
}

.g-suolueTu2 .m-right .f-info p:nth-child(2) a {
  margin-bottom: 12px;
  font-size: 15px;
  color: #263746;
}

.g-suolueTu2 .m-right .f-info p:nth-child(3) {
  font-size: 15px;
  color: #828282;
  margin-bottom: 25px;
}

.g-suolueTu2 .m-right .f-info p:nth-child(4) {
  font-size: 15px;
  color: #ee0a3b;
}

.g-suolueTu2 .m-right .f-info p:nth-child(4) i {
  font-style: normal;
}

.g-suolueTu2 .m-right .f-info:hover {
  box-shadow: 0px 0px 10px #cac7c7;
  transform: translateY(-5px);
  transition: 0.3s linear;
}

.g-suolueTu3 .m-left img {
  width: 100%;
  height: 615px;
}

.g-suolueTu3 .m-right .f-info {
  width: 23%;
  height: 300px;
  background: white;
  margin-right: 19px;
  margin-bottom: 15px;
}

.g-suolueTu3 .m-right .f-info p img {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
}

.g-suolueTu3 .m-right .f-info:hover {
  box-shadow: 0px 0px 10px #cac7c7;
  transform: translateY(-5px);
  transition: 0.3s linear;
}

.XboxJU {
  background-image: url(../assets/imgs/shouye/jumu.jpg);
  background-size: cover;
  height: 140px;
}

.g-suolueTu5 .f-info2 {
  background: white;
  height: 340px;
  text-align: center;
  padding-right: 0px;
  margin-right: 20px;
  width: 23%;
}

.g-suolueTu5 .f-info2 img {
  width: 70%;
  padding-top: 30px;
  padding-bottom: 30px;
}

.g-suolueTu5 .f-info2 p:nth-child(2) a {
  margin-bottom: 12px;
  font-size: 15px;
  color: #263746;
}

.g-suolueTu5 .f-info2 p:nth-child(3) {
  font-size: 15px;
  color: #828282;
  margin-bottom: 25px;
}

.g-suolueTu5 .f-info2 p:nth-child(4) {
  font-size: 15px;
  color: #ee0a3b;
}

.g-suolueTu5 .f-info2 p:nth-child(4) i {
  font-style: normal;
}

.g-suolueTu5 .f-info2:hover {
  box-shadow: 0px 0px 10px #cac7c7;
  transform: translateY(-5px);
  transition: 0.3s linear;
}

.g-suolueTu5 {
  margin-bottom: 70px;
}
</style>
