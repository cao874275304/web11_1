<template>
    <div>
        <div class="container g-main1">
            <div class="m-rood-nav">
                <p>您当前的位置：</p>
                <ol class="breadcrumb">
                    <li>
                        <a href="index.html">首页</a>
                    </li>
                    <li>
                        <a href="hotSall.html">地宝(扫地机器人)</a>
                    </li>
                    <li class="active">视觉导航DJ35</li>
                </ol>
            </div>
            <div class="row m-goodsInfo">
                <!--左边商品展示区-->
                <!--<div class="col-md-5">-->
                <div class="col-md-5 g-left bg">
                    <div class="bg_left">

                        <div class="m-show">
                            <div class="show">
                                <img src="../assets/imgs/hotSall/big_1.jpg" alt="">
                                <div class="mask"></div>
                                <div class="vidieoBtn">
                                    <span id="showBtn"></span>
                                    <!--<span id="hide"></span>-->
                                </div>
                            </div>

                            <div class="smallshow">
                                <p class="prev prevnone"></p>
                                <div class="middle_box">
                                    <ul class="middle">
                                        <li><img src="../assets/imgs/hotSall/big_1.jpg" alt=""></li>
                                        <li><img src="../assets/imgs/hotSall/big_2.jpg" alt=""></li>
                                    </ul>
                                </div>
                                <p class="next "></p>
                            </div>
                        </div>

                        <video id="small-video" width="430px" height="430px" controls="controls">
                            <source src="http://cloud.video.taobao.com/play/u/420722466/p/1/e/6/t/1/50169596347.mp4" type="video/mp4">
                        </video>

                    </div>
                    <div class="bg_right">
                        <div class="bigshow">
                            <div class="bigitem">
                                <img src="../assets/imgs/hotSall/big_1.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!--</div>-->
                <div class="col-md-7 g-right-info">

                    <div class="g-mn2 cls" id="product-information">
                        <h1 class="f-title">科沃斯扫拖一体地宝DJ35 智能家用超薄全自动扫地机器人</h1>
                        <!--商品卖点-->
                        <div class="sell-points cls">
                            <span style="color:#000000;">视觉导航智慧眼 规划扫拖更高效</span><br />
                            <span style="color:#E53333;">新注册会员享200元优惠券礼包</span><br />
                            <span style="color:#E53333;">*购机即享包邮+全国联保服务</span><br />
                        </div>
                        <!--商品促销-->

                        <div class="f-info">
                            <div class="J-lazyload">
                                <div>
                                    <span>销售价:</span>
                                    <span>￥1699</span>
                                    <!--<a class="openChatBox" href="javascript:;">咨询客服</a>-->
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                                        咨询客服
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" style="width: 30px;height: 30px;background: white;" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span style="width: 30px;height: 30px;color: black;font-size: 28px;text-align: center;" aria-hidden="true">&times;</span>
                                                    </button>
                                                    <h4 class="modal-title" id="myModalLabel">请登录</h4>
                                                </div>
                                                <div class="modal-body m-login">

                                                    <ul class="nav nav-tabs f-login row" role="tablist">
                                                        <li role="presentation" class="active col-xs-6  col-md-6">
                                                            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">账号密码登录</a>
                                                        </li>
                                                        <li role="presentation" class="col-xs-6  col-md-6">
                                                            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">手机快捷登录</a>
                                                        </li>

                                                    </ul>

                                                    <!-- Tab panes -->
                                                    <div class="tab-content">
                                                        <div role="tabpanel" class="tab-pane active" id="home">
                                                            <input type="text" placeholder="用户名/手机号" id="username" />
                                                            <input type="password" placeholder="登录密码" id="pwd" />
                                                            <input type="button" value="登录" />
                                                            <p>
                                                                <a href="register.html">立即注册</a>|
                                                                <a href="#">忘记密码</a>
                                                            </p>
                                                            <h4>
                                                                <span style="width: 25%; height:1px;border: none;"></span>其它登录方式
                                                                <span></span>
                                                            </h4>
                                                            <div class="icon-login">
                                                                <span style="width: 30px; height: 30px;border: none; margin-left: 80px;"></span>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div role="tabpanel" class="tab-pane" id="profile">
                                                            <input type="text" placeholder="请输入11位手机号" id="tel" />
                                                            <p>
                                                                <input type="password" placeholder="请输入短信验证码" id="telPwd" />
                                                                <input type="button" value="发送验证码" />
                                                            </p>

                                                            <input type="button" value="登录" />
                                                            <p>
                                                                <a href="register.html">立即注册</a>|
                                                                <a href="#">忘记密码</a>
                                                            </p>
                                                            <h4>
                                                                <span style="width: 25%; height:1px;border: none;"></span>其它登录方式
                                                                <span></span>
                                                            </h4>
                                                            <div class="icon-login">
                                                                <span style="width: 30px; height: 30px;border: none; margin-left: 80px;"></span>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <span>促销信息:</span>
                                    <span class="showErweima"></span>
                                </p>
                                <p class="erwerima">
                                    <span></span>
                                    <img src="../assets/imgs/hotSall/2656.png" alt="" />
                                </p>
                                <p>
                                    <span>服务：</span>
                                    <span><img src="../assets/imgs/hotSall/cuxiaofuwu01.jpg" />免期分期</span>
                                    <span><img src="../assets/imgs/hotSall/cuxiaofuwu02.jpg" />官方正品</span>
                                    <span><img src="../assets/imgs/hotSall/cuxiaofuwu03.jpg" />全国联保</span>
                                    <span><img src="../assets/imgs/hotSall/cuxiaofuwu04.jpg" />全场满99包邮</span>
                                    <span><img src="../assets/imgs/hotSall/cuxiaofuwu05.jpg" />7天无理由退货</span>
                                </p>
                                <p>
                                    <span>购买数量：</span>
                                    <span>
                                        <button id="reduce">-</button>
                                        <input type="text" value="1" id="inpNum" />
                                        <button id="add">+</button>
                                    </span>
                                    <span>
                                        销量:
                                        <em>50506</em>
                                    </span>
                                </p>
                            </div>

                        </div>

                        <!--购买按钮-->
                        <div class="buy">

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal2">
                                <span class="glyphicon glyphicon-shopping-cart"></span>
                                <span>加入购物车</span>
                            </button>

                            <!-- Modal -->
                            <div class="modal fade m-add-car" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <h4 class="modal-title" id="myModalLabel">提醒</h4>
                                        </div>
                                        <div class="modal-body ">
                                            <p>
                                                加入购物车成功。
                                            </p>
                                            <p>
                                                目前选购商品共
                                                <span>1</span>
                                                件。合计：
                                                <span>￥1399</span>
                                            </p>
                                            <p>
                                                <a href="javascript:;" data-dismiss="modal" id="goOnShopping">继续购物</a>
                                                <a href="myCart.html" id="goToCart">进入购物车</a>
                                            </p>
                                        </div>
                                        <!--<div class="modal-footer">
    									        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    									        <button type="button" class="btn btn-primary">Save changes</button>
    									      </div>-->
                                    </div>
                                </div>
                            </div>

                            <a href="myCart.html">立即购买</a>
                        </div>
                    </div>
                </div>
            </div>

            <!--分享到-->
            <div class="share">
                <p>分享到</p>
                <p>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>

                <p>收藏商品</p>
            </div>
            <!--关联商品推荐-->
            <div class="g-about">
                <h3>关联商品推荐</h3>
                <div class="row">
                    <div class="col-md-9 col-xs-9 m-left">
                        <div class="row">
                            <div class="col-md-2 col-xs-2">
                                <img src="../assets/imgs/hotSall/about1.png" alt="" />
                                <p>科沃斯扫地机器人</p>
                            </div>
                            <div class="col-md-2 col-xs-2">+</div>
                            <div class="col-md-2 col-xs-2">
                                <img src="../assets/imgs/hotSall/about3.png" alt="" />
                                <p>
                                    <span>边刷</span>
                                    <span>一对</span>
                                    <span>地宝</span>
                                </p>
                                <p>
                                    <input type="checkbox" class="checkOne" />
                                    <span>￥24.00</span>
                                </p>
                            </div>
                            <div class="col-md-2 col-xs-2">
                                <img src="../assets/imgs/hotSall/about2.png" alt="" />
                                <p>
                                    <span>边刷</span>
                                    <span>一对</span>
                                    <span>地宝</span>
                                </p>
                                <p>
                                    <input type="checkbox" class="checkOne" />
                                    <span>￥24.00</span>
                                </p>
                            </div>
                            <div class="col-md-2 col-xs-2">
                                <img src="../assets/imgs/hotSall/about3.png" alt="" />
                                <p>
                                    <span>边刷</span>
                                    <span>一对</span>
                                    <span>地宝</span>
                                </p>
                                <p>
                                    <input type="checkbox" class="checkOne" />
                                    <span>￥24.00</span>
                                </p>
                            </div>
                            <div class="col-md-2 col-xs-2">
                                <img src="../assets/imgs/hotSall/about4.png" alt="" />
                                <p>
                                    <span>边刷</span>
                                    <span>一对</span>
                                    <span>地宝</span>
                                </p>
                                <p>
                                    <input type="checkbox" class="checkOne" />
                                    <span>￥24.00</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-3 col-xs-3 m-right">
                        <div>=</div>
                        <div>
                            <p>已选择
                                <span>1</span>个产品</p>
                            <p>总价：
                                <span>￥1699</span>
                            </p>
                            <a href="javascript:;">加入购物车</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!--标签页-->
        <div class="container g-main3">
            <div class="row">
                <div class="col-md-9 col-xs-9 g-left-side">
                    <div>

                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#home" aria-controls="home" role="tab" data-toggle="tab">商品详情</a>
                            </li>
                            <li role="presentation">
                                <a href="#profile2" aria-controls="profile" role="tab" data-toggle="tab">详细参数</a>
                            </li>
                            <li role="presentation">
                                <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">商品评论</a>
                            </li>
                            <li role="presentation">
                                <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">商品咨询</a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="home">
                                <p class="row">
                                    <span class="col-md-3 col-xs-3">所属分类：视觉导航DJ35</span>
                                    <span class="col-md-3 col-xs-3 col-md-offset-3 col-xs-offset-3">功能：全能清洁(扫吸拖式)</span>
                                </p>
                                <!--视频-->
                                <video controls="controls" style="width: 100%;">
                                    <source src="imgs/hotSall/goods_video_15392216739620.mp4" type="video/mp4">

                                </video>
                                <!--能看会思考-->
                                <div class="m-img">
                                    <img src="../assets/imgs/hotSall/main3.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20190314150708_51687.gif" alt="" />

                                    <img src="../assets/imgs/hotSall/20181020135537_73819.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20190314150922_62491.gif" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135538_46081.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135538_34956.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135538_47167.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20190314150948_87343.gif" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135539_79189.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135539_66763.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135539_77193.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20190314151007_52396.gif" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135540_35780.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135540_37475.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135540_25831.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20190314151026_12037.gif" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135541_43608.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135541_89629.jpg" alt="" />
                                    <img src="../assets/imgs/hotSall/20181020135541_79917.jpg" alt="" />
                                </div>
                                <!--注-->
                                <div class="g-notes">
                                    <span style="white-space:normal;">注：</span><br style="white-space:normal;">
                                    <span style="white-space:normal;">1、以上页面产品图片因显示屏亮度、拍摄灯光等因素而略有不同，请以实物为准。</span><br style="white-space:normal;">
                                    <span style="white-space:normal;">2、图片中涉及的所有参考对象均为科沃斯品牌普通机器。</span><br style="white-space:normal;">
                                    <span style="white-space:normal;">3、所有数据均来源于具备国家检测能力并认可的科沃斯实验室，根据具体使用环境可能略有不同。</span><br style="white-space:normal;">
                                    <span style="white-space:normal;">4、因生产批次不同，产品外观可能略有差异，具体以收到的实物为准。</span><br style="white-space:normal;">
                                    <span style="white-space:normal;">5、无线电发射设备备案主体编码32201915355861。</span>
                                    <span style="white-space:normal;"></span>

                                </div>
                                <!--电子发票说明-->
                                <div class="note-title">关于发票</div>
                                <div class="note-content">
                                    <p>1、如需发票请在下单时选择，默认普通发票全部为电子发票，发票抬头默认为“客户”，如需更改抬头，请您在“发票抬头”栏中修改。如需开具增值税专用发票请提供营业执照及公司详细开票资料：公司名称、纳税人识别号、开户行、账号、地址、电话等资料并联系客服开具。</p>
                                    <p>2、电子发票的取得：买家可在订单详情中下载，或使用买家收货人手机号通过发票通（http://www.fapiao.com）平台注册查询下载。</p>
                                    <p>3、电子发票与传统纸质发票具有相同的法律效力<br> 国家税务总局公告〔2015〕84号，第三条：增值税电子普通发票的开票方和受票方需要纸质发票的，可以自行打印增值税电子普通发票的版式文件，其法律效力、基本用途、基本使用规定等与税务机关监制的增值税普通发票相同。
                                    </p>
                                    <p>4、电子发票查验真伪——国税总局发票查验平台：https://inv-veri.chinatax.gov.cn/</p>
                                </div>

                            </div>
                            <!--详细参数-->
                            <div role="tabpanel" class="tab-pane" id="profile2">

                                <table class="table table-hover">
                                    <tr>
                                        <th colspan="2" class="section-hd">详细参数</th>
                                    </tr>
                                    <tbody>

                                        <tr>
                                            <td>功能</td>
                                            <td>全能清洁(扫吸拖式)</td>
                                        </tr>
                                        <tr>
                                            <td>续航时间</td>
                                            <td>100分钟及以上(120平米以上)</td>
                                        </tr>
                                        <tr>
                                            <td>机身大小</td>
                                            <td>8cm~9cm</td>
                                        </tr>
                                        <tr>
                                            <td>产品名</td>
                                            <td>DJ35</td>
                                        </tr>
                                        <tr>
                                            <td>型号</td>
                                            <td>DJ35</td>
                                        </tr>
                                        <tr>
                                            <td>产品颜色</td>
                                            <td>莹贝白</td>
                                        </tr>
                                        <tr>
                                            <td>电池容量(mAh)</td>
                                            <td>2600mAh</td>
                                        </tr>
                                        <tr>
                                            <td>定时功能</td>
                                            <td>有</td>
                                        </tr>
                                        <tr>
                                            <td>边刷</td>
                                            <td>有</td>
                                        </tr>
                                        <tr>
                                            <td>尘盒容积（L）</td>
                                            <td>0.45L</td>
                                        </tr>
                                        <tr>
                                            <td>是否有遥控器</td>
                                            <td>有</td>
                                        </tr>
                                        <tr>
                                            <td>产品净重(Kg)</td>
                                            <td>4.2</td>
                                        </tr>
                                        <tr>
                                            <td>产品尺寸 (mm)</td>
                                            <td>355*351*82</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <!--商品评论-->
                            <div role="tabpanel" class="tab-pane" id="messages">

                                <div class="comt-xlist" id="comt_xlist">
                                    <div class="row">
                                        <!--总评分-->
                                        <div class="col-md-4 col-xs-4 rate-score">
                                            <p class="star">总评分：
                                                <span class="glyphicon glyphicon-star"></span>
                                                <span class="glyphicon glyphicon-star"></span>
                                                <span class="glyphicon glyphicon-star"></span>
                                                <span class="glyphicon glyphicon-star"></span>
                                                <span class="glyphicon glyphicon-star-empty"></span>
                                                <span class="red">99%好评</span>
                                            </p>
                                            <p>
                                                <span class="red">7080</span>人已评
                                            </p>
                                        </div>
                                        <!--买家印象-->
                                        <div class="col-md-8 col-xs-8 rate-tags">
                                            <div class="label">买家印象</div>
                                            <div class="tag-list">
                                                <span class="good-comment">发货快(462)</span>
                                                <span class="good-comment">官网值得信赖(390)</span>
                                                <span class="good-comment">服务好(322)</span>
                                                <span class="good-comment">清洁效果好(299)</span>
                                                <span class="good-comment">包装不错(217)</span>
                                                <span class="good-comment">性价比高(195)</span>
                                                <span class="good-comment">操作简单(147)</span>
                                                <span class="good-comment">质量好(105)</span>
                                                <span class="good-comment">噪音小(70)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="comment-filter">
                                        <label><input type="radio" name="filter" value="0">全部</label>
                                        <label class="current"><input type="radio" name="filter" value="3" checked="checked">有内容</label>
                                        <label><input type="radio" name="filter" value="1">有晒图</label>
                                        <div class="fr">
                                            <select class="order-by">
                                                <option selected="" value="recommend">推荐排序</option>
                                                <option value="time">时间排序</option>
                                            </select>
                                        </div>
                                    </div>

                                    <ul class="g-xlist">
                                        <li>
                                            <div class="u-avatar">
                                                <img src="../assets/imgs/hotSall/697261982.jpg" />
                                                <h5>E***2</h5>
                                            </div>
                                            <div class="comt-detail">
                                                <div class="rate-tags">
                                                    <span class="glyphicon glyphicon-star"></span>
                                                    <span class="glyphicon glyphicon-star"></span>
                                                    <span class="glyphicon glyphicon-star"></span>
                                                    <span class="glyphicon glyphicon-star"></span>
                                                    <span class="glyphicon glyphicon-star-empty"></span>
                                                    <span class="good-comment">官网值得信赖</span>
                                                </div>
                                                <div class="c-hb">
                                                    <div class="c-body">
                                                        <div class="c-content">东西很好，宝宝很喜欢，一直追在后面</div>
                                                        <div class="c-time">2019-08-30</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="u-avatar"><img src="../assets/imgs/hotSall/697261982.jpg" />
                                                <h5>E***1</h5>
                                            </div>
                                            <div class="comt-detail">
                                                <div class="rate-tags">
                                                    <span class="glyphicon glyphicon-star"></span>
                                                    <span class="glyphicon glyphicon-star"></span>
                                                    <span class="glyphicon glyphicon-star"></span>
                                                    <span class="glyphicon glyphicon-star"></span>
                                                    <span class="glyphicon glyphicon-star-empty"></span>
                                                    <span class="good-comment">发货快</span>
                                                    <span class="good-comment">官网值得信赖</span>
                                                    <span class="good-comment">服务好</span>
                                                    <span class="good-comment">清洁效果好</span>
                                                    <span class="good-comment">性价比高</span>

                                                </div>
                                                <div class="c-hb">
                                                    <div class="c-body">
                                                        <div class="c-content">买机器人时心大心细，听别人说不好用，搞不干净，又看了许多评价，并和其他型号做了比较，客服也很好，最后选择DJ35，收货后立刻试了，非常满意，打扫的非常干净，还推荐给朋友，看了一下价钱比我买时贵了，真的值得购买。</div>
                                                        <div class="comt-thumbs act-tumbs">
                                                            <a class="video-box" href="javascript:void(0);">
                                                                <img src="../assets/imgs/hotSall/about1.png" />
                                                            </a>
                                                        </div>
                                                        <div class="c-time">2019-08-24</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                    <nav aria-label="Page navigation">
                                        <ul class="pagination">
                                            <li>
                                                <a href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">1</a>
                                            </li>
                                            <li>
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">4</a>
                                            </li>
                                            <li>
                                                <a href="#">5</a>
                                            </li>
                                            <li>
                                                <a href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                            <!--<li>
    												<a href="#"></a>
    											</li>
    											<li>
    												<a href="#">跳转</a>
    											</li>-->
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                            <div role="tabpanel" class="tab-pane" id="settings">...</div>
                        </div>

                    </div>
                </div>
                <div class="col-md-3 col-xs-3 g-right-side">
                    <div>
                        <img src="../assets/imgs/hotSall/right-side00.png" alt="" />
                    </div>

                    <ul>
                        <li>
                            <a href="hotSall.html"><img src="../assets/imgs/hotSall/right-side01.png" alt="" /></a>
                            <p>
                                <a href="hotSall.html">地宝DJ35&nbsp;视觉导航</a>
                            </p>
                            <p>￥1399</p>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/imgs/hotSall/right-side02.png" alt="" /></a>
                            <p>
                                <a href="#">地宝DN555&nbsp;高端新品</a>
                            </p>
                            <p>￥1999</p>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/imgs/hotSall/right-side03.png" alt="" /></a>
                            <p>
                                <a href="#">地宝DD35&nbsp;智控扫拖</a>
                            </p>
                            <p>￥1189</p>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/imgs/hotSall/right-side04.png" alt="" /></a>
                            <p>
                                <a href="#">地宝魔镜S&nbsp;扫拖一体</a>
                            </p>
                            <p>￥899</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
* {
 	margin: 0;
 	padding: 0;
 }
 
 ul,
 li {
 	list-style: none;
 }
 /*路径导航*/
 .g-main1 .m-rood-nav {
 	overflow: hidden;
 	font-size: 16px;
 	padding-top: 20px;
 }
 
 .g-main1 .m-rood-nav p {
 	float: left;
 	margin-top: 8px;
 }
 
.g-main1 .m-rood-nav ol {
 	float: left;
 }
 
.g-main1 .m-rood-nav ol li a {
 	color: #333333;
 }
 .g-main1 .breadcrumb{
 	background: transparent;
 }
 /*商品放大镜*/
 
 ul,
 li {
 	list-style: none;
 	margin: 0;
 	padding: 0;
 }
 
 .g-main1 .bg {
 	width: 920px;
 	height: 540px;
 	margin: 0 auto;
 	padding: 20px;
 	overflow: hidden;
 	min-width: 900px;
 	box-sizing: border-box;
 	background: #fff;
 	position: relative;
/* 	border: 1px solid red;*/
 }
 
  .g-main1 .bg_left {
 	width: 430px;
 	height: auto;
 	float: left;
 	position: relative;
 }
 /*放大部分*/
  .g-main1 .bg_right {
 	float: left;
/* 	border: 1px solid red;*/
 	position: absolute;
 	top: 18px;
 	left:450px ;
 }
 /*视频*/
 .g-main1 #small-video{
 	position: absolute;
 	top: 0px;
 	left: 0px;
background: black;
 	display: none;
 }
  .g-main1 .m-show{
 	position: absolute;
 	top: 0px;
 	left: 0px;
 }
  .g-main1 .show {
  	
 	width: 430px;
 	height: 430px;
 	margin-bottom: 10px;
 	position: relative;
 	cursor: move
 }
 
  .g-main1 .show img {
 	width: 430px;
 	height: 430px;
/* 	border: 1px solid red;*/
 }
  .g-main1 .show .vidieoBtn{
 	position: absolute;
 	top: 0px;
 	left: 0px;
 	width: 430px;
 	height: 430px;
/* 	border: 1px solid blue;*/
 	
 }
 .g-main1 .show .vidieoBtn span:first-child{
 	display: block;
 	width: 60px;
 	height: 60px;
 	background-image: url(../assets/imgs/hotSall/video-icon.png);
 	background-repeat: no-repeat;
    margin-top: 370px;
 	float: left;
 }

 .g-main1 .mask {
 	width: 215px;
 	height: 215px;
 	background: #000;
 	filter: Alpha(opacity=50);
 	opacity: 0.5;
 	position: absolute;
 	top: 0px;
 	left: 0px;
 	display: none;
 	margin-bottom: 20px;
 	/*border: 1px solid red;*/
 }
 .bg_right{
 	position: relative;
 }
 
 .g-main1 .bigshow {
 	width: 430px;
 	height: 430px;
 	overflow: hidden;
 	display: none;
 	border: 1px solid #E8E8E8;
 	position: absolute;
 	top: 0px;
 	left: 0px; 
 	z-index: 999;	
 }
 
 .g-main1 .bigshow img {
 	width: 860px;
 	height: 860px;
 	margin-right: 10px;
 }
 
 .g-main1 .smallshow {
 	width: 100%;
 	height: 70px;
 	position: relative
 }
 
 .g-main1 .smallshow img {
 	width: 100%;
 	border: 1px solid #e8e8e8;
 	box-sizing: border-box;
 	transition: all 0.5s
 }
 
 .g-main1 .smallshow>.middle_box {
 	margin-left: 30px;
 	margin-right: 30px;
 	width: 370px;
 	overflow: hidden;
 	height: 70px;
 }
 
 .g-main1 .smallshow .middle {
 	overflow: hidden;
 	transition: all 0.5s;
 	height: 70px;
 }
 
 .g-main1 .smallshow .middle>li {
 	width: 64px;
 	height: 64px;
 	float: left;
 	cursor: pointer;
 	padding: 0 5px;
 }
 
 .g-main1 .smallshow>p {
 	position: absolute;
 	top: 50%;
 	width: 22px;
 	height: 32px;
 	margin-top: -16px;
 }
 
 .g-main1 .smallshow>.prev {
 	left: 0;
 	/* background: url(../assets/imgs/hover-prev.png) no-repeat; */
 	transition: all 0.5s
 }
 
 .g-main1 .smallshow>.next {
 	right: 0;
 	/* background: url(../assets/imgs/hover-next.png) no-repeat; */
 	transition: all 0.5s
 }
 
 .g-main1 .smallshow>.prev.prevnone {
 	left: 0;
 	/* background: url(../assets/imgs/prev.png) no-repeat; */
 	cursor: not-allowed
 }
 
 .g-main1 .smallshow>.next.nextnone {
 	right: 0;
 	/* background: url(../assets/imgs/next.png) no-repeat; */
 	cursor: not-allowed
 }
.g-main1 .m-goodsInfo{
 	position: relative;
 }
.g-main1 .m-goodsInfo .g-right-info{
	position: absolute;
	top: 0px;
	left: 450px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 h1{
	font-size: 24px;
	margin-bottom: 15px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .sell-points span{
	font-size: 16px;
	margin-bottom: 15px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .sell-points{
	margin-bottom: 40px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload div:first-child span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(2) span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) span:first-child

{
	display: inline-block;
	font-size: 16px;
	color: #636363;
	width: 100px;
	height: 20px;
	/*border: 1px solid red;*/
	text-align: right;
    margin-right: 23px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload div:first-child span:nth-child(2){
	font-size: 24px;
	color: #ee0a3b;
	font-weight: bold;
	/*margin-left: 30px;*/
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload div:first-child button{
	font-size: 16px;
	background: #233846;
	padding: 5px 20px;
	color: #ffffff;
	float: right;
	border-radius: 0px;
}
/*二维码*/
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(2) span:last-child{
	display: inline-block;
	background: url(../assets/imgs/hotSall/goods_mp_qrcode.png);
	background-position: 0 0;
	width: 190px;
	height: 30px;
	margin-top: 10px;
	margin-left:0px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload{
	position: relative;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(3){
	width: 250px;
	height: 270px;
	position: absolute;
	top: 42px;
	left: 90px;
	background: white;
	box-shadow: 0px 0px 10px grey;
	z-index: 99;
	text-align: center;
	display: none;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(3) span:first-child{
	display: inline-block;
	background: url(../assets/imgs/hotSall/goods_mp_qrcode2.png);
	background-position: 0 0;
	width: 190px;
	height: 30px;
	margin-top: 10px;
	
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(3)>img{
	display: block;
	width: 200px;
	height: 200px;
	margin-left: 20px;
}
/*服务*/
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span{
	margin-left: 10px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span:nth-child(2){
	margin-left: 0px;
	font-size: 16px;
}
/*购买数量*/ 
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5){
	margin-top: 30px;
    margin-bottom: 40px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) button,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) input{
	width: 40px;
	height: 40px;
	background: white;
	outline: none;
	border: none;
	margin: 0px;
	text-shadow: none;
	font-size: 18px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) input{
	border:1px solid #e0e0e0;
	margin-left: 0px;
	text-align: center;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) button:last-child{
	margin-right: 60px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) span:last-child{
	font-size: 16px;
	margin-left: 60px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) span:last-child em{
	font-style: normal;
	margin-left: 25px;
}
/*购买按钮*/
/*加入购物车*/
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy a,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>button{
	display: inline-block;
	width: 200px;
	height: 55px;
	border: 1px solid #ee0a3b;
	text-align: center;
	color: #ee0a3b;
	font-size: 16px;
	line-height: 55px;
	text-decoration: none;
	background: transparent;
	border-radius: 0px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>.btn-primary:hover {
    color: #ee0a3b;
    background-color: #transparent;
     border-color: #ee0a3b; 
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>.btn-primary.focus,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>.btn-primary:focus {
    color: #ee0a3b;
    background-color: transparent;
    border-color: transparent;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>button{
	padding-top: 0px;
}
/*加入购物车  模态框*/
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .m-add-car{
	padding-top: 150px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .close{
	float: right;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-dialog{
	width: 500px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content{
	width: 500px;
	text-align: center;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content h4{
	float: left;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content .modal-body{
	padding-bottom: 45px;
	padding-top: 45px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content .modal-body p{
	font-size: 18px;
	margin-bottom: 30px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content .modal-body p>span{
	color: #ee0a3b;
	font-weight: 600;
}
/*立即购买*/
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy a:last-child{
	background: #ee0a3b;
	color: white;
	margin-left: 20px;
}



/*分享*/
.g-main1 .share{
	margin-top: 50px;
	margin-bottom: 80px;
}
.g-main1 .share p{
	float: left;
	
}
.g-main1 .share p:first-child,.g-main1 .share p:last-child{
	font-size: 18px;
	/*border: 1px solid red;*/
	margin-top: 2px;
}
.g-main1 .share span:nth-child(2),
.g-main1 .share span:nth-child(3),
.g-main1 .share span:nth-child(4),
.g-main1 .share span:nth-child(5),
.g-main1 .share span:nth-child(6),
.g-main1 .share span:nth-child(1){
	width: 20px;
	height: 20px;
	display: inline-block;
	background-image: url(../assets/imgs/hotSall/share.png);
	background-position: 0px 0px;
	margin-left: 10px;
	margin-top: 5px;
}
.g-main1 .share span:nth-child(2){
	background-position: -20px 0px;
}
.g-main1 .share span:nth-child(3){
	background-position: -40px 0px;
}
.g-main1 .share span:nth-child(4){
	background-position: -60px 0px;
}
.g-main1 .share span:nth-child(5){
	background-position: -80px 0px;
}
.g-main1 .share span:nth-child(6){
	background-position: -100px 0px;
	margin-left: 30px;
}
/*关联商品推荐*/
.g-main1 .g-about{
	border: 1px solid transparent;
}
.g-main1 .g-about h3{
	font-size: 18px;
	color: #333333;
	margin-top: 50px;
	padding-bottom: 12px;
	border-bottom: 1px solid #333333;
	margin-bottom: 50px;
}
.g-main1 .g-about .m-left .col-md-2.col-xs-2{
	text-align: center;
}
.g-main1 .g-about .m-left .col-md-2.col-xs-2:first-child img{
	width: 77px;
	height: 77px;
	margin-bottom: 35px;
	
}
.g-main1 .g-about .m-left .col-md-2.col-xs-2:first-child p{
	font-size: 16px;
	color: #333333;
}
.g-main1 .g-about .m-left .col-md-2.col-xs-2:nth-child(2){
	font-size: 28px;
	color:#333333 ;
	font-weight: bold;
	padding-top: 30px;
}
.g-main1 .g-about .m-left .col-md-2.col-xs-2 p:last-child span{
	color: #ee0a3b;
	font-weight: bold;
}
.g-main1 .g-about .m-right div{
	float: left;
	
}
.g-main1 .g-about .m-right div:first-child{
	font-size: 28px;
	color:#cccccc ;
	font-weight: bold;
	padding-top: 30px;
	margin-right: 50px;
	text-align: right;
}
.g-main1 .g-about .m-right div:last-child p{
	font-size: 16px;
	
}
.g-main1 .g-about .m-right div:last-child p:nth-child(1){
	margin-bottom: 15px;
}
.g-main1 .g-about .m-right div:last-child p:nth-child(2) span{
	color: #ee0a3b;
	font-weight: bold;
}
.g-main1 .g-about .m-right div:last-child a{
	display: block;
	height: 50px;
	width: 140px;
	background:  #ee0a3b;
	color: white;
	font-size: 18px;
	line-height: 50px;
	text-align: center;
}
/*标签页   主体3*/
.g-main3{
	margin-top: 60px;
}
.g-main3 #home>p{
	padding-top: 25px;
	padding-bottom: 15px;
	padding-left: 25px;
	color: #a699a6;
}
.g-main3 #home>p span{
	padding-left: 0px;
	padding-right: 0px;
}
/*注*/
.g-main3 #home .g-notes{
	margin-bottom: 30px;
	font-size: 16px;
	color: #333333;
}
/*电子发票*/
.g-main3 #home .note-title{
	font-size: 24px;
	color: #253746;
	padding: 20px 20px;
	background: #efefef;
	margin-bottom: 15px;
}
.g-main3 #home .note-content{
	padding-left: 20px;
	font-size:  16px;
}
/*详细参数*/

.g-main3 #profile2 table th{
	padding: 15px 20px;
	font-size: 17px;
	border: 1px solid #dddddd;
}
.g-main3 #profile2 table td{
	border: 1px solid #dddddd;
	padding: 15px 20px;
	
}
.g-main3 #profile2 table{
	border: 1px solid red;
}

.g-main3 #profile2 table td:first-child{
	text-align: right;
	width: 30%;
}
.g-main3 #profile2 table td:last-child{
	width: 70%;
}
/*商品评论*/
#comt_xlist{
	padding-top: 50px;
}

#comt_xlist .rate-score p{
	font-size: 16px;
}
#comt_xlist .rate-score .star span{
	color: #ee0a3b;
}
#comt_xlist .rate-score .red{
	color:#ee0a3b ;
}
#comt_xlist .rate-tags .tag-list span{
	margin-right: 25px;
	font-size: 14px;
}
#comt_xlist .rate-tags .label{
	font-size: 15px;
	color: #a5a5a5;
	float: left;
	height: 60px;
	line-height: 60px;
	margin-right: 30px;
}
#comt_xlist .comment-filter{
	height: 55px;
	border: 1px solid #cccccc;
	font-size: 14px;
	line-height: 55px;
	padding-left: 25px;
	padding-right: 25px;
}
#comt_xlist .comment-filter .fr{
	float: right;
}
#comt_xlist .comment-filter label{
	font-weight: 600;
	margin-right: 25px;
}
#comt_xlist .comment-filter .order-by{
	width: 95px;
	height: 30px;
	border: 1px solid #aaaaaa;
}
#comt_xlist .g-xlist li{
	/*height: 190px;*/
	/*border: 1px solid red;*/
	padding: 30px;
	
}
#comt_xlist .g-xlist li .u-avatar img{
	width: 60px;
	height: 60px;
	;
}
#comt_xlist .g-xlist li .u-avatar{
	float: left;
	margin-right: 60px;
	padding-top: 30px
}

#comt_xlist .g-xlist li .rate-tags span:nth-child(1),
#comt_xlist .g-xlist li .rate-tags span:nth-child(2),
#comt_xlist .g-xlist li .rate-tags span:nth-child(3),
#comt_xlist .g-xlist li .rate-tags span:nth-child(4),
#comt_xlist .g-xlist li .rate-tags span:nth-child(5)
{
	color: #ee0b3c;
}
#comt_xlist .g-xlist li .rate-tags span:nth-child(5){
	margin-right: 20px;
}
#comt_xlist .g-xlist li .rate-tags{
	margin-bottom: 30px;
}
#comt_xlist .g-xlist li .c-content{
	margin-bottom: 30px;
}
#comt_xlist .g-xlist li .c-time{
color: #999999;
margin-left: 130px;
}
#comt_xlist .g-xlist li .comt-thumbs{
	margin-left: 130px;
}
#comt_xlist .g-xlist li .tag-list .good-comment{
	color: #333333;
}
#comt_xlist .pagination li a{
	color: #333333;
}
#comt_xlist .pagination li a:active{
	border: 1px solid #ee0a3b;
	color: #ee0a3b;
}
#comt_xlist .pagination{
	float: right;
}
/*客户服务   模态框*/

.close {
    float: none;
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    color: black;
    text-shadow: 0 0px 0 transparent;
    filter: alpha(opacity=20);
    opacity: 1;
}
.modal-body input[type="button"]{
	background: #ee0a3b;
	color: white;
}
.modal{
	padding-top: 60px;
}

/*主体右边栏     热销排行*/
.g-main3 .g-right-side{
	border: 1px solid #d4d4d4;
	text-align: center;
	padding-right: 0px;
	padding-left: 0px;
}
.g-main3 .g-right-side>div{
	width: 100%;
	background: #f3f3f3;
	padding: 20px;
}
.g-main3 .g-right-side>div img{
	width: 98px;
	
}
.g-main3 .g-right-side ul>li{
	border: 1px solid #d4d4d4;
	padding: 20px;
	
}

.g-main3 .g-right-side ul>li p,.g-main3 .g-right-side ul>li p>a{
	font-size: 14px;
	color: #9a9ab4;
	margin-top: 10px;
	text-decoration: none;
}
.g-main3 .g-right-side ul>li img:hover{
	transform: scale(1.1);
	transition: 0.3s;
}
.g-main3 .g-right-side ul>li p{
	color: #fe0000;
	font-size: 16px;
	font-weight: 600;
}
</style>