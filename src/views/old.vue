<template>
    <div>

        <!--bnaner 巨幕-->
        <div class="container-fluid g-jumu">
            <img src="../assets/imgs/old_new/20190820092340_80143.jpg" />
        </div>

        <!--轮播图-->
        <div class="container">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item,index in imgList1" :key="index">
                <h3><img :src="item.pic" /></h3>
            </el-carousel-item>
        </el-carousel>
        </div>
        <!--巨幕2-->
        <div class="jumbotron g-juImg2">

        </div>
        <div class="product-number-info" id="productNumber">
            <div class="product-number-inner">
                <ul class="q">
                    <li class="li-1">
                        <b>
                            <i id="productNumber_1" data-sum="1760093">0</i>
                            <sup>+</sup>
                        </b>
                        <p>当前订单</p>
                    </li>
                    <li class="li-2">
                        <b>
                            <i id="productNumber_2" data-sum="3687">0</i>
                            <em>天</em>
                        </b>
                        <p>安全运行</p>
                    </li>
                    <li class="li-3">
                        <b>
                            <i id="productNumber_3" data-sum="150">0</i>
                            <sup>+</sup>
                        </b>
                        <p>覆盖行业和类目</p>
                    </li>
                    <li class="li-4">
                        <b>
                            <i id="productNumber_4" data-sum="1429">0</i>
                            <em>万</em>
                        </b>
                        <p>件销售中</p>
                    </li>
                    <li class="li-5">
                        <b>
                            <i id="productNumber_5" data-sum="3460990">0</i>
                            <sup>+</sup>
                        </b>
                        <p>当前浏览量</p>
                    </li>
                </ul>
            </div>
        </div>
        <!--巨幕3-->
        <div class="jumbotron g-juImg3">
             <div class="container"> 
              <old-jumu3></old-jumu3>
             </div> 
        </div>
    

    <!--bnaner 巨幕-->
    <div class="container-fluid g-jumu4">
        <img src="../assets/imgs/old_new/20190716100805_60416.jpg" />
    </div>

    <!--bnaner 巨幕-->
    <div class="container-fluid g-jumu5">
        <img src="../assets/imgs/old_new/yjhx_pc_06.jpg" />
    </div>

    <!--bnaner 巨幕-->
    <div class="container-fluid g-jumu6">
        <img src="../assets/imgs/old_new/20180716135641_64781.gif" />
        <div class="container m-userSay">
            <h1>去年用户怎么说</h1>
            <div class="u-say">
                <p>
                    <img src="../assets/imgs/old_new/dot.png" alt="" />
                    <span>清洁智能大提升</span>
                    <img src="../assets/imgs/old_new/01.png" class="showImg" />

                </p>
                <p>
                    <img src="../assets/imgs/old_new/dot.png" alt="" />
                    <span>解决了家里闲置的旧电器</span>
                    <img src="../assets/imgs/old_new/01.png" class="showImg" />

                </p>
                <p>
                    <img src="../assets/imgs/old_new/dot.png" alt="" />
                    <span>毛发克星，做精致的铲屎官</span>
                    <img src="../assets/imgs/old_new/01.png" class="showImg" />
                </p>
                <p>
                    <img src="../assets/imgs/old_new/dot.png" alt="" />
                    <span>毛发克星，做精致的铲屎官</span>
                    <img src="../assets/imgs/old_new/01.png" class="showImg" />
                </p>

            </div>
        </div>
    </div>

    <!--常见问题-->
    <div class="container-fluid g-question">
        <div class="container">
            <h1>常见问题Q&A</h1>
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span> Q&nbsp;:&nbsp;旧机回收后，多久才能收到新机？</span>
                                <span class="glyphicon glyphicon-menu-down"></span>

                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                            A&nbsp;:&nbsp;收到旧机后，我们将对您申请的型号和实际回收的机器，确认一致后于7个工作日内安排新机发货。
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                                <span> Q&nbsp;:&nbsp;顺丰多如何上门回收</span>
                                <span class="glyphicon glyphicon-menu-down"></span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                            A&nbsp;:&nbsp;收到旧机后，我们将对您申请的型号和实际回收的机器，确认一致后于7个工作日内安排新机发货。
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                                <span> Q&nbsp;:&nbsp;旧机并非在科沃斯官网商城购买，可以参与以旧换新吗？</span>
                                <span class="glyphicon glyphicon-menu-down"></span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                            A&nbsp;:&nbsp;收到旧机后，我们将对您申请的型号和实际回收的机器，确认一致后于7个工作日内安排新机发货。
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                                <span> Q&nbsp;:&nbsp;旧机并非在科沃斯官网商城购买，可以参与以旧换新吗？</span>
                                <span class="glyphicon glyphicon-menu-down"></span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                            A&nbsp;:&nbsp;收到旧机后，我们将对您申请的型号和实际回收的机器，确认一致后于7个工作日内安排新机发货。
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                                <span> Q&nbsp;:&nbsp;旧机并非在科沃斯官网商城购买，可以参与以旧换新吗？</span>
                                <span class="glyphicon glyphicon-menu-down"></span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                            A&nbsp;:&nbsp;收到旧机后，我们将对您申请的型号和实际回收的机器，确认一致后于7个工作日内安排新机发货。
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                                <span> Q&nbsp;:&nbsp;旧机并非在科沃斯官网商城购买，可以参与以旧换新吗？</span>
                                <span class="glyphicon glyphicon-menu-down"></span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                            A&nbsp;:&nbsp;收到旧机后，我们将对您申请的型号和实际回收的机器，确认一致后于7个工作日内安排新机发货。
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn">
                <input type="button" value="更多疑问详询客服" />
                <input type="button" value="立即估价" />
            </div>
        </div>
    </div>
    </div>
    
</template>

<script>
import OldJumu3 from "../components/oldJumu3"
export default {
    data() {
        return {
            imgList1: [
                { id: 1, pic: require("../assets/imgs/old_new/banner01.png") },
                { id: 2, pic: require("../assets/imgs/old_new/banner02.png") },
                
            ]
        }
    },
    components:{
        OldJumu3
    }
}
</script>

<style>
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



/*zhuti  */

.g-nav2 {
    position: relative;
}

.g-jumu {
    height: 460px;
    padding: 0px;
    margin-bottom: 60px;
}

.g-jumu img {
    width: 100%;
    height: 480px;
}


/*.g-nav2 .m-all>ol{
	display: none;
}*/

.g-juImg2 {
    width: 100%;
    margin-top: 60px;
     background-image: url(../assets/imgs/old_new/20190715111435_82762.jpg); 
    background-size: cover;
    background-position: center;
    height: 800px;
    background-repeat: no-repeat;
    margin-bottom: 0px;
}

.g-juImg3 {
    width: 100%;
     background-image: url(../assets/imgs/old_new/sxh_bg.jpg); 
    background-size: cover;
    background-position: center;
    height: 1060px;
    background-repeat: no-repeat;
    padding-top: 280px;
}

.Button.Block {
    padding: 20px 40px;
    width: 525px;
    height: 755px;
}

.flipster-carousel .flip-next {
    -webkit-transform: translateX(60%) translateZ(0) rotateY(-80deg) scale(0.8);
    -moz-transform: translateX(60%) translateZ(0) rotateY(-80deg) scale(0.8);
    -o-transform: translateX(60%) translateZ(0) rotateY(-80deg) scale(0.8);
    -ms-transform: translateX(60%) translateZ(0) rotateY(-80deg) scale(0.8);
    transform: translateX(70%) translateZ(0) rotateY(-40deg) scale(0.8);
}

.flipster-carousel .flip-prev {
    -webkit-transform: translateX(-60%) translateZ(0) rotateY(80deg) scale(0.8);
    -moz-transform: translateX(-60%) translateZ(0) rotateY(80deg) scale(0.8);
    -o-transform: translateX(-60%) translateZ(0) rotateY(80deg) scale(0.8);
    -ms-transform: translateX(-60%) translateZ(0) rotateY(80deg) scale(0.8);
    transform: translateX(-70%) translateZ(0) rotateY(40deg) scale(0.8);
}

.g-jumu4 img {
    width: 100%;
    height: 792px;
}

.g-jumu5 img {
    width: 100%;
    height: 600px;
}

.g-jumu6 {
    position: relative;
    height: 700px;
}

.g-jumu6>img {
    width: 100%;
    height: 700px;
    position: absolute;
    top: 0px;
    left: 0px;
}

.g-jumu6 .m-userSay {
    position: absolute;
    top: 0px;
    left: 10%;
    text-align: center;
}

.g-jumu6 .m-userSay {
    /*border: 1px solid red;*/
    padding-top: 65px;
}

.g-jumu6 .m-userSay>h1 {
    font-size: 45px;
    margin-bottom: 110px;
}

.g-jumu6 .m-userSay .u-say {
    position: relative;
}

.g-jumu6 .m-userSay .u-say p {
    font-size: 18px;
    text-align: left;
    position: absolute;
}

.g-jumu6 .m-userSay .u-say p span {
    margin-bottom: 20px;
}

.g-jumu6 .m-userSay .u-say p>img:nth-child(1) {
    width: 39px;
    height: 39px;
}

.g-jumu6 .m-userSay .u-say p>img:nth-child(3) {
    display: none;
    left: 40px;
    z-index: 999;
}

.g-jumu6 .m-userSay .u-say p:nth-child(1) {
    left: 40%;
    top: 0px;
}

.g-jumu6 .m-userSay .u-say p:nth-child(2) {
    left: 10%;
    top: 70px;
}

.g-jumu6 .m-userSay .u-say p:nth-child(3) {
    left: 55%;
    top: 150px;
}

.g-jumu6 .m-userSay .u-say p:nth-child(4) {
    left: 20%;
    top: 200px;
}



/*.g-jumu6 .m-userSay .u-say p span:hover .showImg{
	display: block;
	z-index: 999;
}*/

.g-question {
    background: #253746;
    padding-top: 65px;
    padding-bottom: 65px;
}

.g-question {
    background: #253746;
    padding-top: 65px;
    padding-bottom: 65px;
}

.g-question h1 {
    font-size: 48px;
    color: #fcfefe;
    margin-bottom: 140px;
    text-align: center;
}

.g-question .panel-group .panel {
    margin-bottom: 0;
    border-radius: 0px;
}

.g-question .panel-default {
    border-color: transparent;
}

.g-question .panel-default>.panel-heading {
    color: #fafafb;
    background-color: #253746;
    border-color: #253746;
}

.g-question .panel-title a span {
    color: #fafafb;
}

.g-question .panel {
    color: #999999;
    margin-bottom: 20px;
    background-color: #253746;
    border: none;
    border-radius: 0px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.g-question .panel-title a span:last-child {
    right: 0px;
}

.g-question .btn input {
    height: 65px;
    border: 1px solid #999999;
    background: #253746;
    color: #fafafb;
    font-size: 28px;
    padding: 10px 40px;
    text-align: center;
    margin-right: 20px;
    margin-top: 50px;
    outline: none;
}
</style>
