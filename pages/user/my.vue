<template>
	<view>
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px',background:'rgba(255,255,255,'+opcity+')'}">
			<view class="tui-header" :style="{paddingTop:top+'px', opacity:opcity}">
				我的
			</view>
			<!-- #ifndef MP -->
			<view class="tui-header-icon" :style="{marginTop:top+'px'}" @tap="href(1)">
				<view class="tui-icon-box tui-icon-message">
					<tui-icon name="message" :color="opcity>0.02?`rgba(85,85,85,${opcity})`:'#fff'" :size="26"></tui-icon>
					<view class="tui-badge" :class="[opcity>0.05?'tui-badge-red':'tui-badge-white']">1</view>
				</view>
				<view class="tui-icon-box tui-icon-setup" @tap="href(2)">
					<tui-icon name="setup" :color="opcity>0.02?`rgba(85,85,85,${opcity})`:'#fff'" :size="26"></tui-icon>
				</view>
			</view>
			<!-- #endif -->
		</view>
		<!--header-->
		<view class="tui-mybg-box">
			<image src="/static/images/mall/my/img_bg_3x.png" class="tui-my-bg" mode="widthFix"></image>
			<view class="tui-header-center">
				<image :src="userInfo.avatarUrl" class="tui-avatar" @tap="href(3)"></image>
				<view class="tui-info">
					<view class="tui-nickname">{{userInfo.nickName}} 
                    <tui-tag size="small" type="warning" shape="circle" tui-tag-class="tui-tag-coupon tui-img-vip">{{userInfo.level_name}}</tui-tag>
                    <!-- <image src="/static/images/mall/my/icon_vip_3x.png" class="tui-img-vip"></image> -->
                    </view>
					<view class="tui-explain">
                        <block v-if="userInfo.phone">手机:{{userInfo.phone}}</block>
                        <block v-else>这家伙很懒…</block>
                    </view>
				</view>
				<!-- #ifndef MP -->
				<view class="tui-btn-edit">
					<tui-button type="white" :plain="true" shape="circle" width="92rpx" height="40rpx" size="mini" @click="href(3)">编辑</tui-button>
				</view>
				<!-- #endif -->
				<!-- #ifdef MP -->
				<view class="tui-set-box">
					<view class="tui-icon-box tui-icon-message" @tap="href(1)">
						<tui-icon name="message" color="#fff" :size="26"></tui-icon>
						<view class="tui-badge tui-badge-white">1</view>
					</view>
					<view class="tui-icon-box tui-icon-setup" @tap="href(2)">
						<tui-icon name="setup" color="#fff" :size="26"></tui-icon>
					</view>
				</view>
				<!-- #endif -->
			</view>
			<view class="tui-header-btm">
				<view class="tui-btm-item" >
					<view class="tui-btm-num">0</view>
					<view class="tui-btm-text">收藏夹</view>
				</view>
				<view class="tui-btm-item">
					<view class="tui-btm-num">{{user.meter.addDay}}</view>
					<view class="tui-btm-text">加入天数</view>
				</view>
				<view class="tui-btm-item">
					<view class="tui-btm-num">{{user.meter.totalCommission}}</view>
					<view class="tui-btm-text">累计收入</view>
				</view>
				<!-- <view class="tui-btm-item">
					<view class="tui-btm-num">44</view>
					<view class="tui-btm-text">累计分享</view>
				</view> -->
			</view>
		</view>
		<view class="tui-content-box">
			<view class="tui-box tui-order-box">
				<tui-list-cell :arrow="true" padding="0" :lineLeft="false" @click="order(0)">
					<view class="tui-cell-header">
						<view class="tui-cell-title">我的订单</view>
						<view class="tui-cell-sub">查看全部订单</view>
					</view>
				</tui-list-cell>
				<view class="tui-order-list">
					<view class="tui-order-item" @tap="order(0)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_daifukuan_3x.png" class="tui-order-icon"></image>
							<view class="tui-badge tui-badge-red">{{user.order.all}}</view>
						</view>
						<view class="tui-order-text">全部</view>
					</view>
					<view class="tui-order-item" @tap="order(2)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_daifahuo_3x.png" class="tui-order-icon"></image>
							<view class="tui-badge tui-badge-red">{{user.order.OS1}}</view>
						</view>
						<view class="tui-order-text">已付款</view>
					</view>
					<view class="tui-order-item" @tap="order(3)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_daishouhuo_3x.png" class="tui-order-icon"></image>
                            <view class="tui-badge tui-badge-red">{{user.order.OS2}}</view>
						</view>
						<view class="tui-order-text">确认收货</view>
					</view>
					<view class="tui-order-item" @tap="order(4)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_pingjia_3x.png" class="tui-order-icon"></image>
							<view class="tui-badge tui-badge-red">{{user.order.OS3}}</view>
						</view>
						<view class="tui-order-text">已结算</view>
					</view>
					<view class="tui-order-item" @tap="order(5)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_tuikuan_3x.png" class="tui-order-icon"></image>
							<view class="tui-badge tui-badge-red">{{user.order.OS4}}</view>
						</view>
						<view class="tui-order-text">无效的</view>
					</view>
				</view>
			</view>
            <view class="tui-box tui-assets-box" style="height:226upx;">
            	<tui-list-cell padding="0" :arrow="true" :last="true" :hover="false">
            		<view class="tui-cell-header">
            			<view class="tui-cell-title">我的麦客</view>
                        <view class="tui-cell-sub" @tap="href(6)">查看我的麦客</view>
            		</view>
            	</tui-list-cell>
            	<view class="tui-order-list tui-assets-list">
            		<view class="tui-order-item" @tap="href(6)">
            			<view class="tui-assets-num">
            				<text>{{user.fans.today}}</text>
            				<view class="tui-badge-dot" v-if="user.fans.today>0"></view>
            			</view>
            			<view class="tui-assets-text">直属麦客</view>
            		</view>
            		<view class="tui-order-item">
            			<view class="tui-assets-num">
            				<text>{{user.fans.pid_all}}</text>
            				<view class="tui-badge-dot" v-if="user.fans.pid_all>0"></view>
            			</view>
            			<view class="tui-assets-text">团队麦客</view>
            		</view>
                    <view class="tui-order-item">
                    	<view class="tui-assets-num">
                    		<text>{{user.fans.pid_level1}}</text>
                    		<view class="tui-badge-dot" v-if="user.fans.pid_level1>0"></view>
                    	</view>
                    	<view class="tui-assets-text">直属麦咖</view>
                    </view>
            		<view class="tui-order-item">
            			<view class="tui-assets-num">
            				<text>{{user.fans.total}}</text>
                            <view class="tui-badge-dot" v-if="user.fans.total>0"></view>
            			</view>
            			<view class="tui-assets-text">全部麦粉</view>
            		</view>
            	</view>
                <view class="tui-up-level">推广5个以上麦粉，并自购一单，即可开启赚钱特权
                	<!-- <text class="tui-up-level-but" @tap="applyStep">立即升级</text> -->
                </view>
            </view>
            
			<view class="tui-box tui-assets-box">
				<tui-list-cell padding="0" :arrow="true" :last="true" :hover="false">
					<view class="tui-cell-header">
						<view class="tui-cell-title">预估收益</view>
                        <view class="tui-cell-sub" @tap="href(5)">去提现</view>
					</view>
				</tui-list-cell>
				<view class="tui-order-list tui-assets-list">
					<view class="tui-order-item">
						<view class="tui-assets-num">
							<text>￥{{user.earnings.today}}</text>
							<view class="tui-badge-dot" v-if="user.earnings.today>0"></view>
						</view>
						<view class="tui-assets-text">今天返利收益</view>
					</view>
					<view class="tui-order-item">
						<view class="tui-assets-num">
							<text>￥{{user.earnings.yesterday}}</text>
							<view class="tui-badge-dot" v-if="user.earnings.yesterday>0"></view>
						</view>
						<view class="tui-assets-text">本月返利收益</view>
					</view>
					<view class="tui-order-item">
						<view class="tui-assets-num">
							<text>￥{{user.earnings.total}}</text>
                            <view class="tui-badge-dot" v-if="user.earnings.total>0"></view>
						</view>
						<view class="tui-assets-text">所有返利收益</view>
					</view>
				</view>
			</view>

			<view class="tui-box tui-tool-box">
				<tui-list-cell :arrow="true" padding="0" :lineLeft="false">
					<view class="tui-cell-header">
						<view class="tui-cell-title">常用工具</view>
						<view class="tui-cell-sub">查看更多</view>
					</view>
				</tui-list-cell>
				<view class="tui-order-list tui-flex-wrap">
					<view class="tui-tool-item" @click="showPoster">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_gift_3x.png" class="tui-tool-icon"></image>
                            <view class="tui-badge-dot"></view>
							<image src="/static/images/mall/my/icon_tab_3x.png" class="tui-badge-icon" v-if="false"></image>
						</view>
						<view class="tui-tool-text">推广海报</view>
					</view>
					<view class="tui-tool-item" @tap="href(8)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_purse_3x.png" class="tui-tool-icon"></image>
						</view>
						<view class="tui-tool-text">慧麦名片</view>
					</view>
					<view class=" tui-tool-item" @tap="href(7)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_ticket_3x.png" class="tui-tool-icon"></image>
						</view>
						<view class="tui-tool-text">新手攻略</view>
					</view>
					<view class=" tui-tool-item" @tap="href(7)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_kefu_3x.png" class="tui-tool-icon"></image>
						</view>
						<view class="tui-tool-text">客户服务</view>
					</view>
					<view class="tui-tool-item" @tap="href(7)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_kaipiao_3x.png" class="tui-tool-icon"></image>
						</view>
						<view class="tui-tool-text">数据接口</view>
					</view>
					<view class="tui-tool-item" @tap="href(7)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_tuan_3x.png" class="tui-tool-icon"></image>
						</view>
						<view class="tui-tool-text">任务中心</view>
					</view>
					<view class="tui-tool-item" @tap="href(7)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_zhihuan_3x.png" class="tui-tool-icon"></image>
						</view>
						<view class="tui-tool-text">麦芽积分</view>
					</view>
					<view class="tui-tool-item" @tap="href(7)">
						<view class="tui-icon-box">
							<image src="/static/images/mall/my/icon_fanxian_3x.png" class="tui-tool-icon"></image>
						</view>
						<view class="tui-tool-text">会员福利</view>
					</view>
				</view>
			</view>

			<!--为你推荐-->
			<tui-divider :size="28" :bold="true" color="#333" width="50%">为你推荐</tui-divider>
			<view class="tui-product-list">
				<view class="tui-product-container">
					<block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2!=0">
						<!--商品列表-->
						<view class="tui-pro-item" hover-class="hover" :hover-start-time="150" @tap="detail(item.goods_id,index)">
							<image :src="item.img" class="tui-pro-img" lazy-load="true" mode="widthFix" />
							<view class="tui-pro-content">
								<view class="tui-pro-tit"><text class="goods-tab">{{allianceName}}</text>{{item.goods_name}}</view>
								<view>
									<view class="tui-pro-price">
										<text class="tui-sale-price">￥{{item.quanhou_price}}</text>
									    <text v-if="item.coupon_discount>0" class="tui-factory-price">￥{{item.factory}}</text>
										<tui-tag size="small" type="red" shape="circle" tui-tag-class="tui-tag-coupon" v-if="item.coupon_discount>0">{{item.coupon_discount}}元券</tui-tag>
									</view>
									<view class="tui-pro-pay">
									    <view v-if="item.payNum!=0">{{item.payNum}}人付款</view>									
									    <view v-if="item.comments">{{item.comments}}条评论</view>
									    <view v-if="item.goodCommentsShare">好评率{{item.goodCommentsShare}}%</view>
									</view>
			                        <view class="promotion" v-if="item.promotion_money && isApprove">
			                            <tui-tag size="small" type="warning" shape="circle" tui-tag-class="tui-tag-coupon">立即推广预计可得佣金{{item.promotion_money}}元</tui-tag>  
			                        </view>
								</view>
							</view>
						</view>
						<!--商品列表-->
						<!-- <template is="productItem" data="{{item,index:index}}" /> -->
					</block>
				</view>
				<view class="tui-product-container">
					<block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2==0">
						<!--商品列表-->
						<view class="tui-pro-item" hover-class="hover" :hover-start-time="150" @tap="detail(item.goods_id,index)">
							<image :src="item.img" class="tui-pro-img" lazy-load="true" mode="widthFix" />
							<view class="tui-pro-content">
								<view class="tui-pro-tit"><text class="goods-tab">{{allianceName}}</text>{{item.goods_name}}</view>
								<view>
									<view class="tui-pro-price">
										<text class="tui-sale-price">￥{{item.quanhou_price}}</text>
									    <text v-if="item.coupon_discount>0" class="tui-factory-price">￥{{item.factory}}</text>
										<tui-tag size="small" type="red" shape="circle" tui-tag-class="tui-tag-coupon" v-if="item.coupon_discount>0">{{item.coupon_discount}}元券</tui-tag>
									</view>
									<view class="tui-pro-pay">
									    <view v-if="item.payNum!=0">{{item.payNum}}人付款</view>									
									    <view v-if="item.comments">{{item.comments}}条评论</view>
									    <view v-if="item.goodCommentsShare">好评率{{item.goodCommentsShare}}%</view>
									</view>
			                        <view class="promotion" v-if="item.promotion_money && isApprove">
			                            <tui-tag size="small" type="warning" shape="circle" tui-tag-class="tui-tag-coupon">立即推广预计可得佣金{{item.promotion_money}}元</tui-tag>  
			                        </view>
								</view>
							</view>
						</view>
					</block>
				</view>
			</view>
			<!--加载loadding-->
			<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		</view>
        
        <!--授权登陆底部弹窗-->
        <tui-bottom-popup v-if="isUser==false || (userInfo.phone.length==0 && false)" :show="isUser==false || userInfo.phone.length==0">
        	<view class="tui-share">
        		<view class="tui-share-title">登录</view>
                <view class="tui-share-box">
                	为了不错过收益，请立即授权登录
                </view>
                <!-- #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ -->
                <button v-if="isUser==false" class="tui-btn-cancle" type="default" open-type="getUserInfo" @getuserinfo="mpGetUserInfo">一键授权登录</button>
                <button v-else-if="userInfo.phone.length==0 && false" class="tui-btn-cancle" type="default" open-type="getPhoneNumber" @getphonenumber="mpGetPhone">一键授权手机登录</button>
                <!-- #endif -->
        	</view>
        </tui-bottom-popup>
        <!--授权登陆底部弹窗-->
        
        <!-- 海报 -->
        <tui-modal :show="posterShow" @cancel="showPoster" :custom="true">
            <view class="tui-modal-custom">
                <image :src="posterUrl" class="tui-tips-img" lazy-load="true" mode="widthFix" @click="posterPreview"></image>
                <!-- <view class="tui-modal-custom-text">我是自定内容</view> -->
                <view class="tui-modal-but"><tui-button :disabled="posterSaveStatus" :loading="posterSaveStatus" type="red" shape="circle" size="mini" @click="savePoster">保存到搜集相册</tui-button></view>
                <view class="tui-modal-but"><tui-button type="warning" shape="circle" size="mini" @click="posterPreview">预览海报长按分享</tui-button></view>
                <tui-icon name="close" class="tui-icon-close" color="#fff" :size="26" @tap="hidePoster"></tui-icon>
            </view>
        </tui-modal>
	</view>
</template>

<script>
    import {mapState,mapMutations,mapActions} from 'vuex'
	import tuiIcon from "@/components/icon/icon"
    import tuiButton from "@/components/button/button"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiDivider from "@/components/divider/divider"
	import tuiLoadmore from "@/components/loadmore/loadmore"  
    import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
    import tuiTag from "@/components/tag/tag"
    import tuiModal from "@/components/modal/modal"
    import util from "@/utils/util.js"
	export default {
        computed: mapState(['isLogin', 'isUser', 'userInfo','allianceName','history','isApprove','myAsset']),
		components: {
			tuiIcon,
			tuiButton,
			tuiListCell,
			tuiDivider,
			tuiLoadmore,
            tuiBottomPopup,
            tuiTag,
            tuiModal
		},
		onLoad: function(options) {
			let obj = {};
			// #ifdef MP-WEIXIN
			obj = wx.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-BAIDU
			obj = swan.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-ALIPAY
			my.hideAddToDesktopMenu();
			// #endif

			uni.getSystemInfo({
				success: (res) => {
					this.width = obj.left || res.windowWidth;
					this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
					this.top = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
					this.scrollH = res.windowWidth
				}
			})
		},
        onShow() {
            if(this.isLogin==false){    
                // #ifdef MP-WEIXIN
                this.tologin('weixin');
                // #endif
                
                // #ifdef APP-PLUS || H5
                console.log(this.isLogin)
                uni.redirectTo({
                    url:'../login/login'
                })
                // #endif
            } else{
                this.getInfo();
            } 
        },
		data() {
			return {
				height: 64, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
                goods_name:'餐巾纸',
				productList: [],
				pageIndex: 1,
				loadding: false,
				pullUpOn: true,
                loginButShow: false,
                user:{
                    'earnings':{'today':0,'yesterday':0,'total':0},
                    'meter':{'addDay': 0,'totalCommission':0},
                    'order':{'all':0,'OS1':0,'OS2':0,'OS3':0,'OS4':0},
                    'fans':{'today':0,'pid_all':0,'pid_level1':0,'pid_level1':0,'total':0}
                },
                posterUrl:'',
                posterShow:false,
                askPoster:false,
                posterSaveStatus:false,
			}
		},
        watch:{
            //监听变量
            isLogin:function(){
                if(this.isLogin){
                    this.getInfo();
                }
            },
            allianceName: function(){
                this.pageIndex=1;
                this.getSearch();
            },
            history: function(){
                if(this.history['0']){
                    this.goods_name = this.history['0'];
                    this.pageIndex=1;
                    this.getSearch();
                }
            }
        },
		methods: {
            ...mapMutations(['login','authKey','tologin','getUserInfo','setAsset']),
			href:function(page) {
				let url = "";
				switch (page) {
					case 1:
						break;
					case 2:
						url = "../set/set"
						break;
					case 3:
						url = "../userInfo/userInfo"
						break;
					case 4:
						url = "./order"
						break;
                    case 5:
                    	url = "./withdraw"
                    	break;
                    case 6:
                    	url = "./fans"
                    	break;
                    case 8:
                    	url = "../index/index"
                    	break;
					default:
						break;
				}
				if(url){
					uni.navigateTo({url:url})
				}else{
					this.tui.toast("即将开放~")
				}
			}, 
            order:function(status){
                uni.navigateTo({
                	url: './order?status='+status
                })
            },
            applyStep:function(){
                uni.navigateTo({
                	url: "./apply"
                })
            },
            mpGetUserInfo(res) {
            	if (res.detail.errMsg !== 'getUserInfo:ok') {
            		uni.showModal({
            			title: '获取用户信息失败',
            			content: '错误原因' + res.detail.errMsg,
            			showCancel: false
            		});
            		return;
            	}
                this.getUserInfo();
            },
            mpGetPhone(res) {
            	if (res.detail.errMsg !== 'getPhoneNumber:ok') {
            		uni.showModal({
            			title: '获取手机信息失败',
            			content: '错误原因' + res.detail.errMsg,
            			showCancel: false
            		});
            		return;
            	}
                
                let _this = this;
                _this.$http.post('/upuser',{type:2,encryptedData:res.detail.encryptedData,iv:res.detail.iv}).then(res => {
                    if(res.data.ret==200){						
                        let reData = res.data.data;
                        _this.login(reData);
                    }                        	
                }).catch(err => {
                    console.log(err);
                })
            },
			detail: function(goodid,index) {
				let goods = (index>=0)?'&goods='+escape(JSON.stringify(this.productList[index])):'';
				uni.navigateTo({
					url: '../detail?good_id='+goodid+goods
				})
			},
            getInfo:function(){
                let _this = this;
                _this.$http.post('/user').then(res => {
                    if(res.data.ret==200){						
                        let reData = res.data.data;
                        _this.user = reData;
                        _this.setAsset(reData.Asset)
                    }                        	
                }).catch(err => {
                    console.log(err);
                }) 
            },
            getSearch:function(){
                if (!this.pullUpOn || !this.goods_name) return;
                this.loadding = true;
                let _this = this
                util.getSearch({'keyword':_this.goods_name,pages:_this.pageIndex,fenci:1,withCoupon:false},(reData) => {
                	let loadData = reData.list;
                	let next = reData.next;
                	if(next==0)	_this.pullUpOn=false;                
                	if (_this.pageIndex == 1) {
                		_this.productList = [];
                        uni.pageScrollTo({scrollTop:0, duration:300}) //回到顶部
                	}
                	_this.productList = _this.productList.concat(loadData);
                	_this.pageIndex = _this.pageIndex + 1;
                	_this.loadding = false
                })
            },
            showPoster:function(){
                let _this = this;
                if(_this.askPoster){
                    _this.posterShow=true;                    
                    return;
                }                    
                uni.showLoading({title:'生成中'});
                _this.askPoster = true;
                _this.$http.get('/poster').then(res => {
                    if(res.data.ret==200){						
                        let reData = res.data.data;
                        _this.posterUrl = reData;
                        _this.posterShow=true;  
                        uni.hideLoading();
                    }                        	
                }).catch(err => {
                    console.log(err);
                    uni.hideLoading();
                })
            },
            hidePoster(){
            	this.posterShow=false;
            },
            posterPreview(){
                uni.previewImage({
                    current:1,
                    urls:[this.posterUrl]
                })
            },
            savePoster(){
                util.savePoster(this,this.posterUrl)
            }
		},
		onPageScroll(e) {
			let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
			let opcity = scroll / this.scrollH;
			if (this.opcity >= 1 && opcity >= 1) {
				return;
			}
			this.opcity = opcity;
			this.iconOpcity = 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
		},
		onPullDownRefresh() {
            this.getInfo();
            uni.stopPullDownRefresh()
		},
		onReachBottom: function() {
			if (!this.pullUpOn || !this.goods_name) return;
			this.loadding = true;
			this.getSearch()
		}
	}
</script>

<style>
	.tui-header-box {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9998;
	}

	.tui-header {
		width: 100%;
		font-size: 18px;
		line-height: 18px;
		font-weight: 500;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* #ifndef MP */
	.tui-header-icon {
		position: fixed;
		top: 0;
		right: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 32px;
		transform: translateZ(0);
		z-index: 99999;
	}

	/* #endif */
	/* #ifdef MP */
	.tui-set-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* #endif */
	.tui-icon-box {
		position: relative;
	}

	.tui-icon-setup {
		margin-left: 8rpx;
	}

	.tui-badge {
		position: absolute;
		font-size: 24rpx;
		height: 32rpx;
		min-width: 20rpx;
		padding: 0 6rpx;
		border-radius: 40rpx;
		right: 10rpx;
		top: -5rpx;
		transform: scale(0.8) translateX(60%);
		transform-origin: center center;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	.tui-badge-red {
		background: #F74D54;
		color: #fff;
	}

	.tui-badge-white {
		background: #fff;
		color: #F74D54;
	}

	.tui-badge-dot {
		position: absolute;
		height: 12rpx;
		width: 12rpx;
		border-radius: 50%;
		right: -12rpx;
		top: 0;
		background: #F74D54;
	}

	.tui-mybg-box {
		width: 100%;
		position: relative;
	}

	.tui-my-bg {
		width: 100%;
		display: block;
	}

	.tui-header-center {
		position: absolute;
		width: 100%;
		height: 128rpx;
		left: 0;
		top: 120rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.tui-avatar {
		flex-shrink: 0;
		width: 128rpx;
		height: 128rpx;
		display: block;
        border-radius: 128upx;
	}

	.tui-info {
		width: 60%;
		padding-left: 30rpx;
	}
    .tui-info .tui-tag-class {transform: scale(0.9);transform-origin: right center;line-height: 24rpx;font-weight: normal;font-size: 20upx;padding:5upx 8upx;float: right;}

	.tui-nickname {
		font-size: 30rpx;
		font-weight: 500;
		color: #fff;
		display: flex;
		align-items: center;
	}

	.tui-img-vip {
		width: 56rpx;
		height: 24rpx;
		margin-left: 18rpx;
	}

	.tui-explain {
		width: 80%;
		font-size: 24rpx;
		font-weight: 400;
		color: #fff;
		opacity: 0.75;
		padding-top: 8rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-btn-edit {
		flex-shrink: 0;
		padding-right: 22rpx;
	}

	.tui-header-btm {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		position: absolute;
		left: 0;
		top: 280rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
	}

	.tui-btm-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tui-btm-num {
		font-size: 32rpx;
		font-weight: 600;
		position: relative;
	}

	.tui-btm-text {
		font-size: 24rpx;
		opacity: 0.85;
		padding-top: 4rpx;
	}

	.tui-content-box {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		position: relative;
		top: -72rpx;
		z-index: 10;
	}

	.tui-box {
		width: 100%;
		background: #fff;
		box-shadow: 0 3rpx 20rpx rgba(183, 183, 183, 0.1);
		border-radius: 10rpx;
		overflow: hidden;
	}

	.tui-order-box {
		height: 208rpx;
	}

	.tui-cell-header {
		width: 100%;
		height: 74rpx;
		padding: 0 26rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-cell-title {
		font-size: 30rpx;
		line-height: 30rpx;
		font-weight: 600;
		color: #333;
	}

	.tui-cell-sub {
		font-size: 26rpx;
		font-weight: 400;
		color: #999;
		padding-right: 28rpx;
	}

	.tui-order-list {
		width: 100%;
		height: 134rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.tui-order-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tui-order-text,
	.tui-tool-text {
		font-size: 26rpx;
		font-weight: 400;
		color: #666;
		padding-top: 4rpx;
	}

	.tui-tool-text {
		font-size: 24rpx;
	}

	.tui-order-icon {
		width: 56rpx;
		height: 56rpx;
		display: block;
	}

	.tui-assets-box {
		height: 178rpx;
		margin-top: 20rpx;
	}

	.tui-assets-list {
		height: 84rpx;
	}

	.tui-assets-num {
		font-size: 32rpx;
		font-weight: 500;
		color: #333;
		position: relative;
	}

	.tui-assets-text {
		font-size: 24rpx;
		font-weight: 400;
		color: #666;
		padding-top: 6rpx;
	}

	.tui-tool-box {
		margin-top: 20rpx;
	}

	.tui-flex-wrap {
		flex-wrap: wrap;
		height: auto;
		padding-bottom: 30rpx;
	}

	.tui-tool-item {
		width: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-top: 30rpx;
	}

	.tui-tool-icon {
		width: 64rpx;
		height: 64rpx;
		display: block;
	}

	.tui-badge-icon {
		width: 66rpx;
		height: 30rpx;
		position: absolute;
		right: 0;
		transform: translateX(88%);
		top: -15rpx;
	}

	/*为你推荐*/
	.tui-product-list {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		/* padding-top: 20rpx; */
	}
	
	.tui-product-container {
		flex: 1;
		margin-right: 2%;
	}
	
	.tui-product-container:last-child {
		margin-right: 0;
	}
	
	.tui-pro-item {
		width: 100%;
		margin-bottom: 4%;
		background: #fff;
		box-sizing: border-box;
		border-radius: 8rpx;
		overflow: hidden;
	}
	
	.tui-pro-img {
		width: 100%;
		display: block;
	}
	
	.tui-pro-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10rpx;
	}
	
	.tui-pro-tit {
		color: #2e2e2e;
		font-size: 26rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
        line-height:38upx;
	}
	
	.tui-sale-price {
		font-size: 34rpx;
		font-weight: 500;
		color: #e41f19;
	}
	
	.tui-factory-price {
		font-size: 24rpx;
		color: #a0a0a0;
		text-decoration: line-through;
		padding-left: 12rpx;
	}
	
	.tui-pro-price {
	    padding-top: 18rpx;
		display: flex;
		align-items: center;
	}
	.tui-pro-price tui-tag{float: right;}
	
	.tui-pro-pay {
		padding-top: 10rpx;
		font-size: 24rpx;
		color: #a0a0a0;
	    display: flex;
	    -webkit-box-pack: justify;
	    -webkit-justify-content: space-between;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	}
	.tui-pro-price .tui-tag-class {
		transform: scale(0.7);
		transform-origin: center center;
		line-height: 24rpx;
		font-weight: normal;
	    padding:5upx 8upx;
	}
	.promotion{display:flex;float:right;padding-top:8upx;}
	.promotion .tui-tag-class {transform: scale(0.9);transform-origin: right center;line-height: 24rpx;font-weight: normal;font-size: 20upx;padding:5upx 8upx;float: right;}
    
    
    
    /* 授权登陆 */
    .tui-share {background: #e8e8e8;position: relative;padding-bottom: env(safe-area-inset-bottom);}    
    .tui-share-title {font-size: 26upx;color: #7E7E7E;text-align: center;line-height: 26upx;padding: 20upx 0 50upx 0;}    
    .tui-share-top,.tui-share-bottom {min-width: 101%;padding: 0 20upx 0 30upx;white-space: nowrap;}    
    .tui-empty {display: inline-block;width: 30upx;visibility: hidden;}    
    .tui-btn-cancle {width: 100%;height: 100upx;background: #f6f6f6;font-size: 36upx;color: #3e3e3e;display: flex;align-items: center;justify-content: center;padding-bottom: env(safe-area-inset-bottom);border-radius: 0;}
    .tui-btn-cancle::after{border-radius: 0;}    
    .tui-hover {background: rgba(0, 0, 0, 0.2)}
    .tui-share-box{color:#3e3e3e;font-size:30upx;text-align: center;height: 260upx;width:90%;margin:0 auto;line-height: 260rpx;}   
    
    .tui-up-level{width:100%;padding:0 20upx;box-sizing:border-box;font-size: 24upx;color: #999;height: 54upx;line-height: 54upx;background: #fff8d5;display: flex;align-items: center;z-index: 999999;margin-top:18upx;position:relative;border-radius:0 0 10rpx 10rpx;}
    .tui-up-level-but{color: #5c8dff;font-weight: bold;position:absolute;right:20upx;}
    
    /* 推广海报 */
    .tui-icon {border-radius: 16px;}
    .tui-icon-close {position: absolute;top:10rpx;right:10rpx;color:#999;font-size:54upx;padding:10upx;}
    .tui-modal-box{width:75%!important;background-color:transparent !important;padding:0!important;}
    .tui-modal-custom{text-align: center}
    .tui-tips-img{width:100%;}
    .tui-modal-custom .tui-modal-but{margin-top:15upx;}
    .tui-modal-custom button{width:98%;font-size:32upx!important;}
</style>
