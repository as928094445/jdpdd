<template>
	<view class="container">
		<view class="tui-bg-box">
			<image src="/static/images/login/bg_login.png" class="tui-bg-img"></image>
			<image src="/static/images/my/mine_def_touxiang_3x.png" class="tui-photo"></image>
			<view class="tui-login-name">小麦商城</view>
		</view>
		<form :report-submit="true" @submit="formLogin">
			<view class="tui-login-from">
				<view class="tui-line-cell">
					<tui-icon name="mobile" :size="20" color='#5677fc'></tui-icon>
					<input placeholder-class="phcolor" class="tui-input" name="mobile" placeholder="请输入手机号码" maxlength="11" v-model="mobile"
					 type="number" />
				</view>
				<view class="tui-line-cell tui-top28">
					<tui-icon name="pwd" :size="20" color='#5677fc'></tui-icon>
					<input placeholder-class="phcolor" class="tui-input" name="smsCode" placeholder="请输入验证码" maxlength="6" type="number" />
					<tui-button size="mini" :type="type" shape="circle" :plain="true" :disabled="disabled" @click="btnSend">{{btnText}}</tui-button>
				</view>
                <view class="tui-line-cell">
                	<tui-icon name="pwd" :size="20" color='#5677fc'></tui-icon>
                	<input placeholder-class="phcolor" class="tui-input" name="password" placeholder="请输入密码" v-model="password" />
                </view>
                <view class="tui-line-cell">
                	<tui-icon name="pwd" :size="20" color='#5677fc'></tui-icon>
                	<input placeholder-class="phcolor" class="tui-input" name="ConfirmPass" placeholder="确认密码" v-model="ConfirmPass" />
                </view>
				<button class="btn-primary tui-btn-submit" :disabled="butSubmit" :loading="butLoading" hover-class="btn-hover" form-type="submit">登录</button>
				<view class="tui-protocol" hover-class="opcity" :hover-stay-time="150">点击"登录"即表示已同意
					<text class="tui-protocol-red" @tap="protocol">《用户协议》</text>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	import { mapState, mapMutations, mapActions	} from 'vuex'
	import tuiIcon from "@/components/icon/icon"
	import tuiButton from "@/components/button/button"
    import util from "@/utils/util.js"
	export default {
		components: {
			tuiIcon,
			tuiButton
		},
		data() {
			return {
				disabled: false,
				btnText: "获取验证码",
				mobile: "",
                password: "",
				type: "primary",
				code: "",
                butSubmit: false,
                butLoading:false
			}
		},
		methods: {
			...mapMutations(['login,authKey']),
			getRandom: function(u) {
				let rnd = "";
				u = u || 6;
				for (var i = 0; i < u; i++) {
					rnd += Math.floor(Math.random() * 10);
				}
				return Number(rnd);
			},
			doLoop: function(seconds) {
				let code = this.getRandom(6);
				this.tui.toast('您本次的验证码是：' + code, 5000);
				seconds = seconds ? seconds : 60;
				this.btnText = seconds + "s后获取";
				this.code = code
				let countdown = setInterval(() => {
					if (seconds > 0) {
						this.btnText = seconds + "s后获取"
							--seconds;
					} else {
						this.btnText = "获取验证码";
						this.disabled = false;
						this.type = "primary";
						clearInterval(countdown);
					}
				}, 1000);
			},
			btnSend: function() {
				if (util.isNullOrEmpty(this.mobile)) {
					this.tui.toast('请输入手机号码');
					return
				} else if (!util.isMobile(this.mobile)) {
					this.tui.toast('请输入正确的手机号码');
					return
				}
				this.disabled = true;
				this.btnText = "请稍候...";
				this.type = "gray"

				setTimeout(() => {
					this.doLoop(60)
				}, 500)
			},
			formLogin: function(e) {
				let loginCode = e.detail.value.smsCode;
				let mobile = e.detail.value.mobile;
                let password = e.detail.value.password;
                let ConfirmPass = e.detail.value.ConfirmPass;
				if (util.isNullOrEmpty(mobile)) {
					this.tui.toast('请输入手机号码');
					return
				} else if (!util.isMobile(mobile)) {
					util.toast('请输入正确的手机号码');
					return
				} else if (util.isNullOrEmpty(loginCode)) {
					this.tui.toast('请输入验证码');
					return
				} else if (loginCode != this.code) {
					this.tui.toast('验证码不正确');
					return
				}
                if (util.isNullOrEmpty(password)) {
                	this.tui.toast('请输入密码');
                	return
                }
                if (util.isNullOrEmpty(ConfirmPass)) {
                	this.tui.toast('请再次输入密码');
                	return
                }
                if(password!==ConfirmPass){
                    this.tui.toast('两次密码不一致,请重新输入');
                    return
                }
                
                
                
                this.butSubmit = true;
                this.butLoading = true;
                let _this = this;
                _this.$http.post('/app_reg', {'username':mobile,'password':password, 'ConfirmPass':ConfirmPass} ).then(res => {
                	if(res.data.ret==200){
                		_this.is_get_goods = true;
                		let reData = res.data.data;
                        _this.authKey(reData);
                        _this.tui.toast("登录成功", 2000, true);
                        uni.reLaunch({
                        	url: '../user/my'
                        })
                	}else{
                        _this.butSubmit = false;
                        _this.butLoading = false;
                    }					
                }).catch(err => {
                    _this.butSubmit = false;
                    _this.butLoading = false;
                })
				uni.setStorageSync("thorui_mobile", util.formatNum(mobile));
				let state = {
					mobile: util.formatNum(mobile),
					isLogin: true,
					memberId: 0
				};
				this.login(state);
				this.tui.toast("登录成功", 2000, true);
				setTimeout(() => {
					uni.reLaunch({
						url: '../user/my'
					})
				}, 200);
			},
			protocol: function() {
				uni.navigateTo({
					url: '../about/about'
				})
			}
		}
	}
</script>

<style>
	page {
		background: #fff;
	}

	.tui-bg-box {
		width: 100%;
		box-sizing: border-box;
		position: relative;
        /* #ifdef APP-PLUS || H5 */
        padding-top:144upx;
        /* #endif */
        /* #ifdef MP */
		padding-top: 44upx;
        /* #endif */
	}

	.tui-photo {
        height: 138rpx;
		width: 138rpx;
		display: block;
		margin: 10rpx auto 0 auto;
		border-radius: 50%;
		position: relative;
		z-index: 2;
	}

	.tui-login-name {
		width: 128rpx;
		height: 40rpx;
		font-size: 30rpx;
		color: #fff;
		margin: 36rpx auto 0 auto;
		text-align: center;
		position: relative;
		z-index: 2;
	}

	.tui-bg-img {
		width: 100%;
        position: relative;
        /* #ifdef APP-PLUS || H5 */
        height: 446rpx;
        /* #endif */
        /* #ifdef MP */
        height: 346rpx;
        /* #endif */
		
		display: block;
		position: absolute;
		top: 0;
	}

	.tui-login-from {
		width: 100%;
		padding: 128rpx 104rpx 0 104rpx;
		box-sizing: border-box;
	}

	.tui-input {
		font-size: 32rpx;
		flex: 1;
		display: inline-block;
		padding-left: 32rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-line-cell {
		padding: 27rpx 0;
		display: -webkit-flex;
		display: flex;
		-webkiit-align-items: center;
		align-items: center;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-line-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #e0e0e0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.tui-top28 {
		margin-top: 28rpx;
	}

	.tui-btn-class {
		width: 196rpx !important;
		height: 54rpx !important;
		border-radius: 27rpx !important;
		font-size: 28rpx !important;
		padding: 0 !important;
		line-height: 54rpx !important;
	}

	.tui-btn-submit {
		margin-top: 100rpx;
	}

	.tui-protocol {
		color: #333;
		font-size: 24rpx;
		text-align: center;
		width: 100%;
		margin-top: 29rpx;
	}

	.tui-protocol-red {
		color: #f54f46;
	}
</style>
