<template>
<div>
  <div class="container g-logo" @submit.prevent="send">
			<img src="imgs/shouye/logo_dark.png" alt="" />
		</div>
		<div class="container-fluid g-login">
			<div class="row">
				<div class="col-xs-6 col-xs-offset-5  col-md-4 col-md-offset-7 m-login">
					<!-- Nav tabs -->

					<ul class="nav nav-tabs f-login row" role="tablist">
						<li role="presentation" class="active col-xs-6  col-md-6">
							<router-link to="/login" active-class="activeClass" exact aria-controls="home" role="tab" data-toggle="tab" >账号密码登录</router-link>
						</li>
						<li role="presentation" class="col-xs-6  col-md-6">
							<router-link to="/login/login2" active-class="activeClass" aria-controls="profile" role="tab" data-toggle="tab" >手机快捷登录</router-link>
						</li>

					</ul>

					<!-- Tab panes -->
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane active" id="home">
							<input type="text" placeholder="用户名/手机号" id="username" ref="name" />
							<input type="password" placeholder="登录密码" id="pwd" ref="pwd"/>
							<input type="submit" value="登录" />
							<p>
								<a href="/register">立即注册</a>|
								<a href="#">忘记密码</a>
							</p>
							<h4><span></span>其它登录方式<span></span></h4>
							<div class="icon-login">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane" id="profile">
							<input type="text" placeholder="请输入11位手机号" id="tel" />
							<p>
								<input type="password" placeholder="请输入手机验证码" id="telPwd" />
								<input type="button" value="发送验证码" />
							</p>

							<input type="button" value="登录" />
							<p>
								<a href="/register" >立即注册</a>|
								<a href="#">忘记密码</a>
							</p>
							<h4><span></span>其它登录方式<span></span></h4>
							<div class="icon-login">
								<span></span>
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
</template>

<script>
export default {
	data(){
		return{
			index:1
		}
	},

 methods: {
	 handle(idx){
        this.index=idx
	 },
        //提交表单事件
        send(){
            //在vue中直接引用dom元素
            let n1 = this.$refs.name.value;
            let p1 = this.$refs.pwd.value;
            alert(n1+","+p1);
            //存入到本地缓存
            this.$local.save("user",{
                login:true,
                userName:n1
            })
            //跳转到t1,登录后，直接跳转到首页
            // this.$router.push("/index");
            this.$router.back();
        }
    }
}

</script>

<style>
.g-logo{
	height: 120px;
	line-height: 120px;
}
.g-login{
	background: url(../assets/imgs/login/link_15662635108873.jpg) no-repeat;
	height: 735px;
	padding: 40px 0px;
}
.m-login{
	background: white;

}
.m-login .f-login{
	width: 100%;
	height: 90px;
	padding-top: 35px;
	/*padding-left: 50px;*/
}
.m-login .f-login li{
    padding-right: 0px;
	padding-left: 0px;
	text-align: center;
}
.m-login .f-login li:first-child{
	
}
.m-login .f-login a{
	font-size: 22px;
	color: #737373;
}
.m-login .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    color: #ef0a3b;
    cursor: default;
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom-color: white;
}
.m-login .nav-tabs {
    border-bottom: 1px solid transparent;
}
.m-login .nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
   background-color: transparent;
}
.m-login .tab-content .tab-pane{
	height: 400px;
	padding: 20px 40px;
	text-align: center;
}
.m-login .tab-content .tab-pane input{
   width: 100%;
   height: 50px;
   border: 1px solid #e0e0e0;
   padding-left: 15px;
   line-height: 60px;
   color: #e0e0e0;
   margin-bottom: 20px;
   outline: none;
}
.m-login .tab-content .tab-pane input:nth-child(3){
	color: #888888;
	background: #ededed;
	font-size: 17px;
	border: none;
	line-height: 50px;
}
.m-login .tab-content .tab-pane input:focus,.tab-content .tab-pane input:active{
	border: 1px solid #ef0a3b;
}
.m-login .tab-content .tab-pane input:nth-child(3):focus,.tab-content .tab-pane input:nth-child(3):active{
	border: none;
	outline: none;
}
.m-login .tab-content .tab-pane>p{
	font-size: 16px;
	color: #888888;
	margin-bottom: 50px;
}
.m-login .tab-content .tab-pane>p a{
	color: #888888;
	padding-left: 8px;
	padding-right: 8px;
	text-decoration: none;
}
.m-login .tab-content .tab-pane>p a:hover,.tab-content .tab-pane>p a:active{
	color:  #ef0a3b;
}
.m-login .tab-content .tab-pane>h4{
	font-size: 16px;
	color: #888888;
	line-height: 16px;
	
}
.m-login .tab-content .tab-pane>h4 span{
	display: inline-block;
	width: 25%;
	height: 1px;
	background:#888888;
	line-height: 16px;
	margin-bottom: 4px;
	
}
.m-login .tab-content .tab-pane>h4 span:first-child{
	margin-right: 20px;
}
.m-login .tab-content .tab-pane>h4 span:last-child{
	margin-left: 20px;
}
.m-login .tab-content .tab-pane .icon-login{
	width: 80%;
	/*position: relative;*/
	margin-top: 12px;
	padding-bottom: 40px;
}
.m-login .tab-content .tab-pane .icon-login span{
	display: inline-block;
	width:30px;
	height: 30px;
	background-image: url(../assets/imgs/login/sprit.png);
	background-position: 0px -40px;
	margin-right: 20px;
}
.m-login .tab-content .tab-pane .icon-login span:nth-child(1){
	margin-left: 60px;
}
.m-login .tab-content .tab-pane .icon-login span:nth-child(2){
	background-position: -40px -40px;
}
.m-login .tab-content .tab-pane .icon-login span:nth-child(3){
	background-position: -80px -40px;
}
.m-login .tab-content .tab-pane .icon-login span:nth-child(4){
	margin-right: 0px;
	background-position: -120px -40px;

}
.m-login .tab-content .tab-pane .icon-login span:nth-child(1):hover{
	background-position: 0px -73px;
}
.m-login .tab-content .tab-pane .icon-login span:nth-child(2):hover{
	background-position: -40px -73px;
}
.m-login .tab-content .tab-pane .icon-login span:nth-child(3):hover{
	background-position: -80px -73px;
}
.m-login .tab-content .tab-pane .icon-login span:nth-child(4):hover{
	background-position: -120px -73px;
}
/*手机号码登录*/
.m-login #profile p:nth-child(2) input[type="password"]{
	width: 70%;
	float: left;
}
.m-login #profile p:nth-child(2) input[type="button"]{
	width: 30%;
	float: left;
	background: #ededed;
	color: #888888;
	line-height: 50px;
}

</style>
