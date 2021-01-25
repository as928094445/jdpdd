<template>
	<view class="container">
		<scroll-view scroll-x scroll-with-animation class="tab-view" :scroll-left="scrollLeft">
			<view v-for="(item,index) in elites" :key="index" class="tab-bar-item" :class="[currentTab==index ? 'active' : '']" :data-current="index" @tap.stop="swichNav">
				<text class="tab-bar-title">{{item.name}}</text>
			</view>
		</scroll-view>		
        <!--start 内容部分可直接删除-->
        <block v-if="currentTab==0">                        
            <view class="list-view">
                <block v-for="(item,key) in productList" :key="key">
                <tui-card :image="card.img" :title="card.title" :tag="card.tag" :full="true" :header="card.header" :border="true">
                	<template v-slot:body>
                		<view class="tui-content">
                			<text space="ensp" class="tui-textarea">{{item.text}}</text>
                		</view>
                		<view class="tui-default tui-flex-pic">
                			<image :src="item.img" mode="widthFix"></image>
                		</view>                
                	</template>
                	<template v-slot:footer>
                		<view class="tui-default tui-pleft" v-if="false">
                			<view>深圳.世界之窗</view>
                			<view class="tui-gray">7小时前</view>
                		</view>
                        <view class="tui-default tui-pleft flex-box">
                            <tui-tag size="small" type="red" shape="circle" :plain="true" tui-tag-class="tui-tag-coupon" @click="getWenAn(key)" >复制文字</tui-tag>
                            <tui-tag size="small" type="warning" shape="circle" tui-tag-class="tui-tag-coupon">保存图片</tui-tag>
                        </view>
                	</template>
                </tui-card>
                </block>
            </view>
            <tui-nomore :visible="!pullUpOn && productList.length>0" bgcolor="#f7f7f7"></tui-nomore>
            <tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
        </block>
        <block v-else>
            <!--list-->
            <view class="tui-product-list">
                <block v-if="productList.length>0">
                    <view class="tui-product-container" >
                        <block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2!=0 || isList">
                            <!-- <template is="productItem" data="{{item,index:index,isList:isList}}" /> -->
                            <!--商品列表-->
                            <from-id @tap="detail(item.goods_id,index)">
                            <view class="tui-pro-item" :class="[isList?'tui-flex-list':'']" hover-class="hover" :hover-start-time="150" @tap="detail(item.goods_id,index)">
                                <view class="tui-img"><image :src="item.img" class="tui-pro-img" :class="[isList?'tui-proimg-list':'']" lazy-load="true" mode="widthFix" /></view>
                                <view class="tui-pro-content">
                                    <view class="tui-pro-tit"><text class="goods-tab">{{allianceName}}</text>{{item.goods_name}}</view>
                                    <view>
                                        <view class="tui-pro-price">
                                            <text class="tui-sale-price">￥{{item.quanhou_price}}</text>
                                            <tui-tag size="small" type="red" shape="circle" tui-tag-class="tui-tag-coupon" v-if="item.coupon_discount>0">{{item.coupon_discount}}元券</tui-tag>
                                        </view>
                                        <view class="tui-pro-pay">
                                            <view v-if="item.coupon_discount>0">原价<text class="tui-factory-price">￥{{item.factory}}</text></view>
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
                        </block>
                    </view>
                    <view class="tui-product-container" v-if="!isList">
                        <block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2==0">
                            <!-- <template is="productItem" data="{{item,index:index}}" /> -->
                            <!--商品列表-->
                            <from-id @tap="detail(item.goods_id,index)">
                            <view class="tui-pro-item" :class="[isList?'tui-flex-list':'']" hover-class="hover" :hover-start-time="150" @tap="detail(item.goods_id,index)">
                                <view class="tui-img"><image :src="item.img" class="tui-pro-img" :class="[isList?'tui-proimg-list':'']" lazy-load="true" mode="widthFix" /></view>
                                <view class="tui-pro-content">
                                    <view class="tui-pro-tit"><text class="goods-tab">{{allianceName}}</text>{{item.goods_name}}</view>
                                    <view>
                                        <view class="tui-pro-price">
                                            <text class="tui-sale-price">￥{{item.quanhou_price}}</text>
                                            <tui-tag size="small" type="red" shape="circle" tui-tag-class="tui-tag-coupon" v-if="item.coupon_discount>0">{{item.coupon_discount}}元券</tui-tag>
                                        </view>
                                        <view class="tui-pro-pay">
                                            <view v-if="item.coupon_discount>0">原价<text class="tui-factory-price">￥{{item.factory}}</text></view>
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
                        </block>
                    </view>			
                </block>
                <tui-tips :fixed="false"  v-if="productList.length==0 && !loadding" style="margin:10upx auto;margin-top:120upx;" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-tips>
            </view>		
            <!--list-->
            <tui-nomore :visible="!pullUpOn && productList.length>0" bgcolor="#f7f7f7"></tui-nomore>
            <tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
        </block>
        <!--end 内容部分可直接删除-->


	</view>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import tuiTag from "@/components/tag/tag"
    import tuiLoadmore from "@/components/loadmore/loadmore"
    import tuiNomore from "@/components/nomore/nomore"
    import fromId from "@/components/formid/fromid"
    import tuiCard from "@/components/card/card"
    import thorui from "@/components/utils/clipboard.thorui.js"
	export default {
        components: {
        	tuiTag,
            tuiLoadmore,
            tuiNomore,
            fromId,
            tuiCard
        },
        computed:{
            ...mapState(['isLogin','userInfo','pid','hotSearch','allianceName','elites','isApprove','authKey'])
        },
        watch:{
            //监听变量
            allianceName: function(){
                this.pageIndex=1;
                this.currentTab = 0;
                this.eliteId = this.elites[this.currentTab]['id'];
                this.getTopList();
            },
            authKey: function(){
                if(this.authKey){  
                    this.pageIndex=1;
                    this.eliteId = this.elites[this.currentTab]['id'];
                    this.getTopList();
                }
            }
        },
		data() {
			return {
				tabbar: [],
				winHeight: "", //窗口高度
				currentTab: 0, //预设当前项的值
				scrollLeft: 0 ,//tab标题的滚动条位置
                scrollTop: 0,
                productList: [],
                pageIndex: 1,
                isList:true,
                loadding: false,
                pullUpOn: true,
                counts: "",
                card:{
                    title: {
                    	text: "一颗发芽的土豆"
                    },
                    img: {
                    	url: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erHzX39iazGeL2bcvf2YXxmYzYy5k3jVd3mmrvxiceNvDgftd32qyFec8FzL5GmuaWXrduibJicalUsjw/132",
                    	width: 80,
                    	height: 80,
                    	circle: false
                    },
                    tag: {
                    	text: "1小时前"
                    },
                    header: {
                    	line: true
                    }
                }
			}
		},
		onLoad: function(op) {
            if(op.pid){this.setPid(op.pid);}
			let that = this;
			//  高度自适应
			uni.getSystemInfo({
				success: function(res) {
					let calc = res.windowHeight;
					that.winHeight = calc;
				}
			});
            this.eliteId = this.elites[this.currentTab]['id'];
            this.getTopList();            
		},
		methods: {
            ...mapMutations(['setPid']),
			// 点击标题切换当前页时改变样式
			swichNav: function(e) {
				let cur = e.currentTarget.dataset.current;
				if (this.currentTab == cur) {
					return false;
				} else {
					this.currentTab = cur
				}
                this.pageIndex=1;
                this.pullUpOn=true;
                this.eliteId = this.elites[this.currentTab]['id'];
                this.getTopList();
			},
			//判断当前滚动超过一屏时，设置tab标题滚动条。
			checkCor: function() {
				if (this.currentTab > 3) {
					//这里距离按实际计算
					this.scrollLeft = 380 * this.currentTab/4
				} else {
					this.scrollLeft = 0
				}
			},
			detail: function(goodid,index) {
				let goods = (index>=0)?'&goods='+escape(JSON.stringify(this.productList[index])):'';
				uni.navigateTo({
					url: './detail?good_id='+goodid+goods
				})
			},
            getTopList:function(){
            	let _this = this;  
                _this.loadding = true;
            	_this.$http.post('/top', {'pages': _this.pageIndex,'eliteId':_this.eliteId} ).then(res => {
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
            },
            getWenAn:function(index){
                let _this = this;
                let goods = _this.productList[index];
                if(!goods)return;
                uni.showLoading({title:'加载中……'});
                _this.$http.post('/detail', {'goods_id':goods.goods_id,'coupon_link':goods.coupon_link}).then(res => {                    
                	if(res.data.ret==200){
                        uni.hideLoading();
                		let reData = res.data.data;
                		uni.showModal({
                		    confirmText:'复制',
                		    title: '转链接后文本',
                		    content: reData.wenAn,
                		    success: function (res) {
                		        if (res.confirm) {
                		            thorui.getClipboardData(reData.wenAn, (res) => {
                		            	// #ifdef H5
                		            	if (res) {
                		            		this.tui.toast("复制成功")
                		            	} else {
                		            		this.tui.toast("复制失败")
                		            	}
                		            	// #endif
                		            })
                		        } else if (res.cancel) {
                		            console.log('用户点击取消');
                		        }
                		    }
                		});
                	}					
                }).catch(err => {
                    uni.hideLoading();
				})
            },
            aletr() {
            	uni.showToast({
            	    title: '标题',
            	    duration: 2000
            	});
            },
		},
        onReachBottom: function() {
        	if (!this.pullUpOn) return;
        	this.getTopList();
        },
        onShareAppMessage(res) {
            if (res.from === 'button') {// 来自页面内分享按钮
              console.log(res.target)              
            }
            let pathUrl = '/pages/promotion'
            if(this.isLogin){
                pathUrl += '?pid='+this.userInfo.id;
            }
            return {
                title:'慧麦商城',
                content:'转发推广赚佣金',
                desc:'推广赚佣金',
                path: pathUrl
            }
        }
	}
</script>

<style>
	/*tabbar start*/
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.tab-view::before {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.tab-view {
		width: 100%;
        /* #ifndef APP-PLUS */
        height:100upx;
        /* #endif */
        /* #ifdef APP-PLUS */
        padding-top: var(--status-bar-height);
		height: calc(100upx + var(--status-bar-height));
        /* #endif */
		overflow: hidden;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		left: 0;
		z-index: 99;
		background: #fff;
		white-space: nowrap;
	}

	.tab-bar-item {
		padding: 0;
		height: 100upx;
		min-width: 80upx;
		line-height: 100upx;
		margin: 0 28upx;
		display: inline-block;
		text-align: center;
		box-sizing: border-box;
	}

	.tab-bar-title {
		height: 100upx;
		line-height: 100upx;
		font-size: 32upx;
		color: #999;
		font-weight: 400;
	}

	.active {
		border-bottom: 6upx solid #ff201f;
	}

	.active .tab-bar-title {
		color: #ff201f !important;
		font-size: 36upx;
		font-weight: bold;
	}

	/*tabbar end*/


    
    /* 商品列表*/
    .tui-product-list {
        margin-top: 110upx;
        margin-top: calc(110upx + var(--status-bar-height));
        margin-bottom: 10upx;
    	display: flex;
    	justify-content: space-between;
    	flex-direction: row;
    	flex-wrap: wrap;
    	box-sizing: border-box;
    	padding: 0 10rpx;
    }
    
    .tui-product-container {
    	flex: 1;
    	margin-right: 10rpx;
    }
    
    .tui-product-container:last-child {
    	margin-right: 0;
    }
    
    .tui-pro-item {
    	width: 100%;
    	margin-bottom: 10rpx;
    	background: #fff;
    	box-sizing: border-box;
    	/* border-radius: 12rpx; */
    	overflow: hidden;
    	transition: all 0.15s ease-in-out;
    }
    
    .tui-flex-list {
    	display: flex;
    	margin-bottom: 1rpx !important;
    }
    .tui-flex-list .tui-img{padding:20upx;}
    .tui-pro-img {
    	width: 100%;
    	display: block;
    }
    
    .tui-proimg-list {
    	width: 260rpx;
    	height: 260rpx !important;
    	flex-shrink: 0;
    	border-radius: 12rpx;
    }
    
    .tui-pro-content {
    	display: flex;
    	flex-direction: column;
    	justify-content: space-between;
    	box-sizing: border-box;
    	padding: 20rpx;
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
    
    .tui-pro-price {
    	padding-top: 18rpx;
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
    	padding-left:5rpx;
    }
    
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
    
    .tui-pro-price {
    	display: flex;
    	align-items: center;
    }

    .tui-pro-price .tui-tag-class {
    	transform: scale(0.7);
    	transform-origin: center center;
    	line-height: 24rpx;
    	font-weight: normal;
    }
    .promotion{display:flex;float:right;padding-top:8upx;}
    .promotion .tui-tag-class {transform: scale(0.9);transform-origin: right center;line-height: 24rpx;font-weight: normal;font-size: 20upx;padding:5upx 8upx;float: right;}
    /* 商品列表 end*/
    
    
    /* 推荐页面 */    
    .list-view {
        margin-top: 100upx;
        /* #ifdef APP-PLUS */
        margin-top: calc(100upx + var(--status-bar-height));
        /* #endif */
        width: 100%;background: #fff;box-sizing: border-box;padding-bottom: env(safe-area-inset-bottom);
    }   
    
    .tui-textarea{line-height:45upx;}
    .tui-tag-coupon{float: right;}
    
    .flex-box{display:flex;float:right;padding-top:8upx;}
    .flex-box .tui-tag-class {transform-origin: right center;line-height: 24rpx;font-weight: normal;float: right;margin-left:20upx;}
    
    .tui-default {padding: 20upx 30upx;}
    
    .tui-article {position: relative;}
    .tui-article-img {width: 100%;height: 300upx;display: block;}
    .tui-article-title {position: absolute;left: 0;bottom: 0;color: #fff;font-size: 32upx;font-weight: 500;box-sizing: border-box;padding: 20upx 30upx;background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));}
    .tui-cell-title {font-size: 32upx;font-weight: 500;padding: 0 10upx;word-break: break-all;word-wrap: break-word;}
    .tui-cell-img {height: 160upx;width: 160upx;}
    .tui-flex {display: flex;align-items: center;justify-content: space-between;}
    .tui-mr {margin-right: 20upx;}
    .tui-inline {display: inline-block;}
    .tui-flex-pic {display: flex;display: -webkit-flex;justify-content: space-between;flex-direction: row;flex-wrap: wrap;box-sizing: border-box;background: #fff;padding: 0 120upx;}
    .tui-flex-pic image {width: 32%;margin-bottom: 2%;}
    .tui-content {padding: 0upx 30upx 20upx 120upx;box-sizing: border-box;font-size: 34upx;font-weight: 400;color: #333;}
    .tui-gray {color: #ccc;}
    .tui-pleft {padding-left: 120upx;}
</style>
