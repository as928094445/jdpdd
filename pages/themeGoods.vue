<template>
	<view class="container">
		<view class="tui-product-box tui-pt-20 tui-bg-white">
			<view class="" @tap="detail">
				<image :src="theme.image_url" class="tui-activity-img" mode="widthFix"></image>
			</view>
			<view class="tui-group-name" @tap="more">
				<text>{{theme.name}}</text>
				<text class="goods_num" v-if="theme.goods_num>0">商品{{theme.goods_num}}件</text>
			</view>
		</view>
		<view class="tui-product-box">
			<view class="tui-product-list">
				<view class="tui-product-container">
					<block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2!=0">
						<!--商品列表-->
						<view class="tui-pro-item" hover-class="hover" :hover-start-time="150" @tap="detail(item.goods_id)">
							<image :src="item.img" class="tui-pro-img" lazy-load="true" mode="widthFix" />
							<view class="tui-pro-content">
								<view class="tui-pro-tit">{{item.goods_name}}</view>
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
                                    <view class="promotion" v-if="item.promotion_money">
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
						<view class="tui-pro-item" hover-class="hover" :hover-start-time="150" @tap="detail(item.goods_id)">
							<image :src="item.img" class="tui-pro-img" lazy-load="true" mode="widthFix" />
							<view class="tui-pro-content">
								<view class="tui-pro-tit">{{item.goods_name}}</view>
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
                                    <view class="promotion" v-if="item.promotion_money">
                                        <tui-tag size="small" type="warning" shape="circle" tui-tag-class="tui-tag-coupon">立即推广预计可得佣金{{item.promotion_money}}元</tui-tag>  
                                    </view>
								</view>
							</view>
						</view>
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
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	export default {
		components: {
			tuiIcon,
			tuiTag,
			tuiLoadmore,
			tuiNomore
		},
		data() {
			return {
				theme:{name:'',	image_url:'',goods_num:0},				
				themeid:0,
				current: 0,
				newProduct: [],
				productList: [],
				pageIndex: 1,
				loadding: false,
				pullUpOn: true
				
			}
		},
		onLoad(op) {
            if(op.theme){                
                let theme = JSON.parse(unescape(op.theme))
                this.theme = theme;
            }
			this.themeid = op.themeid;			
			this.getList();
		},
		methods: {
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
			detail: function(goodid) {
				uni.navigateTo({
					url: './detail?good_id='+goodid
				})
			},
			classify: function() {
				uni.navigateTo({
					url: '/pages/navbar-2/navbar-2'
				})

			},
			more: function(e) {
				let key = e.currentTarget.dataset.key || "";
				uni.navigateTo({
					url: './productList?searchKey=' + key
				})

			},
			search: function(key) {
				console.log(key)
				uni.navigateTo({
					url: './search'
				})
			},
			getList:function(){
				let _this = this;
				_this.loadding = true;
				_this.$http.post('/themegoods', {'themeid': _this.themeid,'pages':_this.pageIndex} ).then(res => {
					if(res.data.ret==200){						
						let reData = res.data.data;
						let loadData = reData.list;
                        let next = reData.next;
                        if(next==0)	_this.pullUpOn=false;
						if (_this.pageIndex == 1) {
							_this.productList = [];
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
		onReachBottom: function() {
			if (!this.pullUpOn) return;			
			this.getList();
		},        
        onShareAppMessage(res) {
            if (res.from === 'button') {// 来自页面内分享按钮
              console.log(res.target)
            }
            console.log(this.theme)
            let theme = JSON.stringify(this.theme);
            return {
                title:'慧麦商城',
                content:'转发推广赚佣金',
                desc:'推广赚佣金',
                path: '/pages/themeGoods?themeid='+this.themeid+'&theme='+theme
            }
        }
	}
</script>

<style>
	page {background: #f7f7f7;}
	.container {padding-bottom: 100rpx;color: #333;}
	.tui-product-box {margin-top: 20rpx;padding: 0 20rpx;box-sizing: border-box;}	
	.tui-pt-20 {padding-top:20rpx;}
	.tui-pb-20 {padding-bottom: 20rpx;}
	.tui-bg-white {background: #fff;}
	.tui-group-name {font-size:28upx;padding: 10upx 0;}
	.tui-group-name .goods_num{float:right;color: #9c9c9c;font-size: 24rpx;margin-top: 1px;}
	.tui-activity-box {display: flex;border-radius: 12rpx;overflow: hidden;}
	.tui-activity-img {width: 100%;display: block;}
	.tui-new-box {display: flex;align-items: center;justify-content: space-between;flex-wrap: wrap;}
	.tui-new-item {width: 49%;height: 200rpx;padding: 0 20rpx;box-sizing: border-box;display: flex;align-items: center;background: #f5f2f9;position: relative;border-radius: 12rpx;}
	.tui-new-mtop {margin-top: 2%;}
	.tui-title-box {font-size: 24rpx;}
	.tui-new-title {line-height: 32rpx;word-break: break-all;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}
	.tui-new-price {padding-top: 18rpx;}
	.tui-new-present {color: #ff201f;font-weight: bold;}
	.tui-new-original {display: inline-block;color: #a0a0a0;text-decoration: line-through;padding-left: 12rpx;transform: scale(0.8);transform-origin: center center;}
	.tui-new-img {width: 160rpx;height: 160rpx;display: block;flex-shrink: 0;}
	.tui-new-label {width: 56rpx;height: 56rpx;border-top-left-radius: 12rpx;position: absolute;left: 0;top: 0;}
	.tui-product-list {display: flex;justify-content: space-between;flex-direction: row;flex-wrap: wrap;box-sizing: border-box;/* padding-top: 20rpx; */}
	.tui-product-container {flex: 1;margin-right: 2%;}
	.tui-product-container:last-child {margin-right: 0;	}
	.tui-pro-item {width: 100%;margin-bottom: 4%;background: #fff;box-sizing: border-box;border-radius: 12rpx;overflow: hidden;}
	.tui-pro-img {width: 100%;display: block;}
	.tui-pro-content {display: flex;flex-direction: column;justify-content: space-between;box-sizing: border-box;padding:10rpx;}
	.tui-pro-tit {color: #2e2e2e;font-size: 26rpx;word-break: break-all;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;line-height:38upx;}
	.tui-pro-price {padding-top: 18rpx;}
    .tui-pro-price tui-tag{float: right;}
	.tui-sale-price {font-size: 34rpx;font-weight: 500;color: #e41f19;}
	.tui-factory-price {font-size: 24rpx;color: #a0a0a0;text-decoration: line-through;padding-right: 12rpx;}
	.tui-pro-price {display: flex;align-items: center;}
    .tui-pro-pay {padding-top: 10rpx;font-size: 24rpx;color: #a0a0a0;display: flex;-webkit-box-pack: justify;-webkit-justify-content: space-between;-ms-flex-pack: justify;justify-content: space-between;}
    .tui-pro-price .tui-tag-class {transform: scale(0.7);transform-origin: center center;line-height: 24rpx;font-weight: normal;}
    .promotion{display:flex;float:right;padding-top:8upx;}
    .promotion .tui-tag-class {transform: scale(0.9);transform-origin: right center;line-height: 24rpx;font-weight: normal;font-size: 20upx;padding:5upx 8upx;float: right;}
    
</style>
