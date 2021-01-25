<template>
	<view class="container">
         <navBar :config="config" :scrollTop="scrollTop" @allianceFun="allianceFun" :scrollMaxHeight="scrollMaxHeight"/>
		<!--header-->
		<view class="tui-header" :style="{top:headerTop}">
			<view v-if="false" class="tui-category" hover-class="opcity" :hover-stay-time="150" @tap="classify">
				<tui-icon name="manage-fill" color="#fff" :size="22"></tui-icon>
				<view class="tui-category-scale">分类</view>
			</view>
			<view class="tui-rolling-search">
				<!-- #ifdef APP-PLUS || MP -->
				<icon type="search" :size='13' color='#999'></icon>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view>
					<tui-icon name="search" :size='16' color='#999'></tui-icon>
				</view>
				<!-- #endif -->
				<swiper vertical autoplay circular interval="8000" class="tui-swiper">
					<swiper-item v-for="(item,index) in hotSearch" :key="index" class="tui-swiper-item" @tap="search(item)">
						<view class="tui-hot-item">{{item}}</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!--header-->
		<view class="tui-header-banner">
			<view class="tui-hot-search">
				<view>热搜</view>
				<view class="tui-hot-tag" v-for="(item,index) in hotSearch" :key="index" v-if="index<4" @tap="proList(item)" >{{item}}</view>
			</view>
			<view class="tui-banner-bg">
				<view class="tui-primary-bg tui-route-left"></view>
				<view class="tui-primary-bg tui-route-right"></view>
				<!--banner-->
				<view class="tui-banner-box">
					<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="150" class="tui-banner-swiper"
					 :circular="true" indicator-color="rgba(255, 255, 255, 0.8)" indicator-active-color="#fff">
						<swiper-item v-for="(item,index) in banner" :key="index" @tap.stop="detail(item.goods_id)">
							<image :src="item.img" class="tui-slide-image" mode="scaleToFill" />
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<view class="tui-product-category">
			<view class="tui-category-item" v-for="(item,index) in category" :key="index" :data-key="item.name" @tap="more">
				<image :src="item.img" class="tui-category-img" mode="scaleToFill"></image>
				<view class="tui-category-name">{{item.name}}</view>
			</view>
		</view>

		<view class="tui-product-box tui-pb-20 tui-bg-white">
			<view class="tui-group-name" @tap="more">
				<text>新人专享</text>
				<tui-icon name="arrowright" :size="20" color="#555"></tui-icon>
			</view>
			<view class="tui-activity-box" @tap="themeList(1)">
				<image src="/static/images/mall/activity/activity_1.jpg" class="tui-activity-img" mode="widthFix"></image>
				<image src="/static/images/mall/activity/activity_2.jpg" class="tui-activity-img" mode="widthFix"></image>
			</view>
		</view>
		<view class="tui-product-box">
			<view class="tui-group-name">
				<text>今日必推</text>
			</view>
			<view class="tui-product-list">
				<view class="tui-product-container">
					<block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2!=0">
						<!--商品列表-->
                        <from-id @tap="detail(item.goods_id,index)">
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
                        </from-id>
						<!--商品列表-->
						<!-- <template is="productItem" data="{{item,index:index}}" /> -->
					</block>
				</view>
				<view class="tui-product-container">
					<block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2==0">
						<!--商品列表-->
                        <from-id @tap="detail(item.goods_id,index)">
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
                        </from-id>
						<!--商品列表-->
						<!-- <template is="productItem" data="{{item,index:index}}" /> -->
					</block>
				</view>
			</view>
		</view>

		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<!-- <tui-nomore visible="{{!pullUpOn}}"></tui-nomore> -->
		<!--加载loadding-->
		<view class="tui-safearea-bottom"></view>
	</view>
</template>
<script>
    import {mapState,mapMutations} from 'vuex'
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
    import navBar from "@/components/navBar/navBar"
    import fromId from "@/components/formid/fromid"
    import util from "@/utils/util.js"
	export default {
        //监控定义的变量
        computed:{
            ...mapState(['isLogin','userInfo','pid','hotSearch','allianceType','allianceName','elites','isApprove']),
        	headerTop(){
        		const {platform,statusBarHeight} = uni.getSystemInfoSync()
        		let height = statusBarHeight +4 //ios 24px
        		if (platform.toLowerCase() == "android" ){
        			height +=4 //android 28px
        		}
        		// 胶囊高度 32px 下边框6px height 状态栏高度
        		return height+ 38 + "px"
        	}
        },
        watch:{
            //监听变量
            isLogin: function(){
                if(this.isLogin){
                    this.isF5 = true
                    this.allianceFun(this.userInfo.alliance);
                }
            }
        },
		components: {
			tuiIcon,
			tuiTag,
			tuiLoadmore,
			tuiNomore,
            navBar,
            fromId
		},
		data() {
			return {
                config:{
                    title:"小麦商城", //title
                    bgcolor:"#e41f19", //背景颜色
                    // fontcolor:"red", //文字颜色，默认白色
                    type:1, //type 1，3胶囊 2，4无胶囊模式
                    transparent:false, //是否背景透明 默认白色
                    linear:false, //是为开启下滑渐变
                    share:false, //是否将主页按钮显示为分享按钮
                    // menuIcon:"../static/icon/back_.png", 当type为3或者4的时候左边的icon文件位置，注意位置与当前页面不一样
                    // menuText:"返回", 当type为3或4的时候icon右边的文字
                },
                scrollTop:0 ,// 当linear为true的时候需要通过onpagescroll传递参数
                scrollMaxHeight:200, //滑动的高度限制，超过这个高度即背景全部显示                
				current: 0,
				// hotSearch: [],
				banner: [],
				category: [],
				productList: [],
				pageIndex: 1,
				loadding: false,
				pullUpOn: true,
                share:{'title':'推荐您享受购物专属优惠'},
                isF5:false
			}
		},
		onShow() {
            // if(this.isLogin==false){
            //     this.tologin('weixin');
            // }
		},
        onReady(){
            util.searchModal();
        },
        onLoad(op) {    
            if(op.scene){                
                let scene = decodeURIComponent(op.scene)
                this.setPid(scene);
            }else if(op.pid){
                this.setPid(op.pid);
            }
            // this.getInfo();
            // #ifdef APP-PLUS
            this.isF5 = true
            this.allianceFun(this.userInfo.alliance);
            // #endif
        },
		methods: {
            ...mapMutations(['login','authKey','tologin','setPid','setHotSearch','setAllianceType','setElites','setHistory','setApprove']),
			tabbarSwitch: function(e) {
				let index = e.currentTarget.dataset.index;
				this.current = index;
				if (index != 0) {
					if (index == 1) {
						this.classify();
					} else if (index == 2) {
						uni.navigateTo({
							url: '../mall-extend/shopcart/shopcart'
						})
					} else {
						uni.navigateTo({
							url: './my'
						})
					}
				}
			},
			detail: function(goodid,index) {
                if(!goodid)return;
				let goods = (index>=0)?'&goods='+escape(JSON.stringify(this.productList[index])):'';
				uni.navigateTo({
					url: './detail?good_id='+goodid+goods
				})
			},
			classify: function() {
				uni.navigateTo({
					url: '/pages/navbar-2/navbar-2'
				})
			},
            themeList: function(themeid) {
            	uni.switchTab({
            		url: './promotion'
            	})
            },
			more: function(e) {
				let key = e.currentTarget.dataset.key || "";
				uni.navigateTo({
					url: './productList?searchKey=' + key
				})
			},
            proList: function(key) {
            	uni.navigateTo({
            		url: './productList?searchKey=' + key
            	})
            },
			search: function(key) {
				uni.navigateTo({
					url: './search?keyword=' + key
				})
			},
            allianceFun:function(op){   
                if(op==this.allianceType && this.isF5!==true)return;
                this.isF5 = false;
                this.pageIndex = 1;
                this.setAllianceType(op);
                this.getInfo();
                this.getTopList();
            },
            getInfo:function(){
                let _this = this;
                _this.$http.get('/home').then(res => {
					if(res.data.ret==200){						
						let reData = res.data.data;
						_this.banner = reData.banner;		
                        _this.category = reData.category;
                        _this.share = reData.share
                        _this.setHotSearch(reData.hotSearch);
                        _this.setElites(reData.elites)
                        _this.setHistory(reData.mySearch)
                        _this.setApprove(reData.isApprove)
					}					
				}).catch(err => {
					// this.getInfo();
				})
            },
			getTopList:function(){
				let _this = this;
				_this.$http.post('/top', {'pages': _this.pageIndex} ).then(res => {
					if(res.data.ret==200){						
						let reData = res.data.data;
						let loadData = reData.list;
						let next = reData.next;

						if(next==0){
							_this.pullUpOn=false;
						}
						if (_this.pageIndex == 1) {
							_this.productList=[];
                            uni.pageScrollTo({scrollTop:0, duration:300}) //回到顶部
						}
						_this.productList = _this.productList.concat(loadData);
						_this.pageIndex = _this.pageIndex + 1;
						_this.loadding = false
					}
				}).catch(err => {
					console.log(err);
				})
			}
		},
		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.pullUpOn = true;
			this.loadding = false
            this.getInfo();
			this.getTopList();
			uni.stopPullDownRefresh()
		},
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			this.getTopList();
		},
        onShareAppMessage(res) {
            if (res.from === 'button') {// 来自页面内分享按钮
              console.log(res.target)              
            }
            let shareImg = ''
            let pathUrl = '/pages/mall';
            let shareTitle = this.share.title;
            if(this.isLogin){
                pathUrl += '?pid='+this.userInfo.id;
                shareTitle = this.userInfo.nickName+shareTitle
            }
            if(this.share.img){
                shareImg = this.share.img;
            }
            return {
                title:shareTitle,
                content:shareTitle,
                desc:shareTitle,
                path: pathUrl,
                imageUrl:shareImg
            }
        }
	}
</script>

<style>
	page {
		background: #f7f7f7;
	}

	.container {
		padding-bottom: 100rpx;
		color: #333;
	}

	

	.tui-ptop-4 {
		padding-top: 4rpx;
	}

	.tui-scale {
		font-weight: bold;
		transform: scale(0.8);
		transform-origin: center 100%;
		line-height: 30rpx;
	}

	.tui-item-active {
		color: #e41f19 !important;
	}

	/*tabbar*/

	.tui-header {
		width: 100%;
		height: 100rpx;
		padding: 0 30rpx 0 20rpx;
		box-sizing: border-box;
		background: #e41f19;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		left: 0;
		top: 110upx;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		z-index: 999;
	}

	.tui-rolling-search {
		width: 100%;
		height: 60rpx;
		border-radius: 35rpx;
		padding: 0 40rpx 0 30rpx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		color: #999;
	}

	.tui-category {
		font-size: 24rpx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 0;
		margin-right: 22rpx;
		flex-shrink: 0;
	}

	.tui-category-scale {
		transform: scale(0.7);
		line-height: 24rpx;
	}

	.tui-icon-category {
		line-height: 20px !important;
		margin-bottom: 0 !important;
	}

	.tui-swiper {
		font-size: 26rpx;
		height: 60rpx;
		flex: 1;
		padding-left: 12rpx;
	}

	.tui-swiper-item {
		display: flex;
		align-items: center;
	}

	.tui-hot-item {
		line-height: 26rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-header-banner {
		padding-top: 100rpx;
		box-sizing: border-box;
		background: #e41f19;
	}

	.tui-hot-search {
		color: #fff;
		font-size: 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20rpx;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
	}

	.tui-hot-tag {
		background: rgba(255, 255, 255, 0.15);
		padding: 10rpx 24rpx;
		border-radius: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 24rpx;
		/* margin-left: 20rpx; */
	}

	.tui-banner-bg {
		display: flex;
		height: 180rpx;
		background: #e41f19;
		position: relative;
	}

	.tui-primary-bg {
		width: 50%;
		display: inline-block;
		height: 224rpx;
		border: 1px solid transparent;
		position: relative;
		z-index: 1;
		background: #e41f19;
	}

	.tui-route-left {
		transform: skewY(8deg);
	}

	.tui-route-right {
		transform: skewY(-8deg);
	}

	.tui-banner-box {
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		position: absolute;
		/* overflow: hidden; */
		z-index: 99;
		bottom: -80rpx;
		left: 0;
	}

	.tui-banner-swiper {
		width: 100%;
		height: 240rpx;
		border-radius: 12rpx;
		overflow: hidden;
		transform: translateY(0);
	}

	.tui-slide-image {
		width: 100%;
		height: 240rpx;
		display: block;
	}

	/* #ifdef APP-PLUS || MP */
	.tui-banner-swiper .wx-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}

	.tui-banner-swiper .wx-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 16rpx;
		overflow: hidden;
	}

	.tui-banner-swiper .wx-swiper-dot-active::before {
		background: #fff;
	}

	.tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
		width: 16rpx;
	}

	/* #endif */

	/* #ifdef H5 */
	>>>.tui-banner-swiper .uni-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}

	>>>.tui-banner-swiper .uni-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 16rpx;
		overflow: hidden;
	}

	>>>.tui-banner-swiper .uni-swiper-dot-active::before {
		background: #fff;
	}

	>>>.tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
		width: 16rpx;
	}

	/* #endif */

	.tui-product-category {
		background: #fff;
		padding: 80rpx 20rpx 30rpx 20rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		font-size: 24rpx;
		color: #555;
		margin-bottom: 20rpx;
	}

	.tui-category-item {
		width: 20%;
		height: 118rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		padding-top: 30rpx;
	}

	.tui-category-img {
		height: 80rpx;
		width: 80rpx;
		display: block;
	}

	.tui-category-name {
		line-height: 24rpx;
	}

	.tui-product-box {
		margin-top: 20rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.tui-pb-20 {
		padding-bottom: 20rpx;
	}

	.tui-bg-white {
		background: #fff;
	}

	.tui-group-name {
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		padding: 24rpx 0;
	}

	.tui-activity-box {
		display: flex;
		border-radius: 12rpx;
		overflow: hidden;
	}

	.tui-activity-img {
		width: 50%;
		display: block;
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
		margin-left: 12rpx;
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
</style>
