<template>
	<view class="container">
		<tui-tabs :tabs="tabs" :isFixed="scrollTop>=0" :currentTab="currentTab" itemWidth="16.6666%" selectedColor="#E41F19" sliderBgColor="#E41F19" @change="change"></tui-tabs>
		<!--选项卡逻辑自己实现即可，此处未做处理-->
		<view :class="{'tui-order-list':scrollTop>=0}">
			<view class="tui-order-item" v-for="(item,orderIndex) in orderArr" :key="orderIndex">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						<view>订单号：{{item.order_sn}}</view>
						<view class="tui-order-status">{{item.order_status_desc}}</view>
					</view>
				</tui-list-cell>
                <tui-list-cell padding="0" @click="detail(item.goods_id)">
                    <view class="tui-goods-item">
                        <image :src="item.goods_thumbnail_url" class="tui-goods-img"></image>
                        <view class="tui-goods-center">
                            <view class="tui-goods-name">{{item.goods_name}}</view>
                            <view class="tui-goods-attr">产品编号：{{item.goods_id}}</view>
                        </view>
                        <view class="tui-price-right">
                            <view>￥{{item.amount}}</view>
                            <view>预计收益</view>
                        </view>
                    </view>
                </tui-list-cell>
			</view>
		</view>
		<!--加载loadding-->
        <tui-tips :fixed="false"  v-if="orderArr.length==0 && !loadding" style="margin:10upx auto;margin-top:120upx;" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-tips>
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn" bgcolor="#fafafa"></tui-nomore>
		<!--加载loadding-->

	</view>
</template>

<script>
	import tuiTabs from "@/components/tui-tabs/tui-tabs"
	import tuiButton from "@/components/extend/button/button"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiSticky from "@/components/sticky/sticky"
    import tuiTips from "@/components/extend/tips/tips"
	export default {
		components: {
			tuiTabs,
			tuiButton,
			tuiLoadmore,
			tuiNomore,
			tuiListCell,
			tuiSticky,
            tuiTips
		},
		data() {
			return {
				tabs: [{
					name: "全部",
                    status:''
				}, {
					name: "待付款",
                    status:'-1'
				}, {
					name: "已付款",
                    status:'1'
				}, {
					name: "已收货",
                    status:'2'
				}, {
					name: "已结算",
                    status:'5'
				}, {
					name: "无效的",
                    status:'4'
				}],
                orderArr:[],
				currentTab: 0,
                ststus:'',
				pageIndex: 0,
				loadding: false,
				pullUpOn: true,
				scrollTop: 0
			}
		},
        onLoad(op) {
            if(op.status){
                this.currentTab = op.status;                
                this.ststus = this.tabs[this.currentTab].status;
            }
            this.pageIndex = 0;
            this.getList();  
        },
		methods: {
			change(e) {
				this.currentTab = e.index;
                this.pageIndex = 0;
                this.ststus = this.tabs[this.currentTab].status;
                this.getList();
			},
			detail(goodid){
                uni.navigateTo({
                	url: '../detail?good_id='+goodid
                })
			},
            getList(){
                let _this = this;
                _this.loadding = true;
                _this.pullUpOn = true
                _this.$http.post('/orders',{page:_this.pageIndex,status:_this.ststus}).then(res => {
                 	if(res.data.ret==200){
                        let reData = res.data.data;
                        let next = reData.next;
                        if(next==0)	_this.pullUpOn=false;
                        if (_this.pageIndex == 0) {
                        	_this.orderArr = [];
                        }
                        _this.orderArr = _this.orderArr.concat(reData.list);
                        _this.pageIndex = _this.pageIndex + 1;
                        _this.loadding = false
                 	}					
                }).catch(err => {
                 	this.getList();
                })
            }
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 200);
		},
		onReachBottom() {
            if (!this.pullUpOn) return;            
            this.getList();   
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-order-list {
		margin-top: 80rpx;
	}

	.tui-order-item {
		margin-top: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		width: 100%;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-order-status {
		color: #888;
		font-size: 26rpx;
	}

	.tui-goods-item {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}

	.tui-goods-img {
		width: 180rpx;
		height: 180rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-goods-center {
		flex: 1;
		padding: 20rpx 8rpx;
		box-sizing: border-box;
	}

	.tui-goods-name {
		max-width: 310rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 26rpx;
		line-height: 32rpx;
	}

	.tui-goods-attr {
		font-size: 22rpx;
		color: #888888;
		line-height: 32rpx;
		padding-top: 20rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-price-right {
		text-align: right;
		font-size: 24rpx;
		color: #888888;
		line-height: 30rpx;
		padding-top: 20rpx;
	}

	.tui-color-red {
		color: #E41F19;
		padding-right: 30rpx;
	}

	.tui-goods-price {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		font-size: 24rpx;
	}

	.tui-size-24 {
		font-size: 24rpx;
		line-height: 24rpx;
	}

	.tui-price-large {
		font-size: 32rpx;
		line-height: 30rpx;
		font-weight: 500;
	}

	.tui-order-btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: #fff;
		padding: 10rpx 30rpx 20rpx;
		box-sizing: border-box;
	}

	.tui-btn-ml {
		margin-left: 20rpx;
	}
</style>
