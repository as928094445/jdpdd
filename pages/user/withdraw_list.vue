<template>
	<view class="container">	
        <!--内容 start-->
        <view class="list-view">
            <view v-for="(item,index) in conList" :key="index" class="list-item" hover-class="hover" :hover-stay-time="150" bindtap="detail">
                <view class="content-box">
                    <view class="des-box">
                        <view class="tit">编号 {{item.cash_sn}}</view>
                        <view class="source">状态 {{item.statename}}</view>
                        <view class="time">时间 {{item.time}}</view>
                    </view>
                </view>
                <view class="money add"> {{item.amount}} </view>
            </view>
            <tui-tips :fixed="false" style="margin:0 auto;" v-if="conList.length==0 && !loadding" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-tips>
            <!--加载loadding-->
            <tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
            <tui-nomore :visible="!pullUpOn" bgcolor="#f7f7f7"></tui-nomore>
            <!--加载loadding-->
        </view>
		<!--内容 end-->
	</view>
</template>

<script>
    import tuiLoadmore from "@/components/loadmore/loadmore"
    import tuiNomore from "@/components/nomore/nomore"
    import tuiTips from "@/components/extend/tips/tips"
	export default {
        components: {
        	tuiLoadmore,
        	tuiNomore,
        	tuiTips
        },
		data() {
			return {
				scrollTop: 0,
                pageIndex: 1,
                loadding: false,
                pullUpOn: true,
                conList:[]
			}
		},
        onLoad() {
            this.getlist()
        },
		methods: {
			detail(e) {
				this.tui.toast("详情功能尚未完善~")
			},
            getlist:function(){
                let _this = this;
                _this.$http.post('/cashlist',{page:_this.pageIndex}).then(res => {
                    if(res.data.ret==200){						
                        let reData = res.data.data;
                        let loadData = reData.rows;
                        let next = reData.next;
                        if(next==0)	_this.pullUpOn=false;                
                        if (_this.pageIndex == 1) {
                        	_this.conList = [];
                            uni.pageScrollTo({scrollTop:0, duration:300}) //回到顶部
                        }
                        _this.conList = _this.conList.concat(loadData);
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
        	this.loadding = true;
        	this.getlist()
        }
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tips {
		background: #fff;
		padding: 50rpx 34rpx;
		color: #555;
		font-size: 24rpx;
		line-height: 42rpx;
		position: relative;
	}

	.tips::before {
		content: '';
		position: absolute;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		top: 0;
		right: 0;
		left: 0;
	}

	/* .sticky-container{
 position: relative;
} */
	/* sticky 容器 start */
	.sticky-item {
		width: 100%;
		height: 104rpx;
		padding: 20rpx 30rpx;
		background: #fafafa;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	/* sticky 容器 end */

	.date {
		height: 54rpx;
		font-size: 28rpx;
		background: #fff;
		padding: 0 28rpx;
		border-radius: 25rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		/* box-shadow: 0 0 1rpx #7A7A7A; */
	}

	.date::after {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		border: 1rpx solid #eaeef1;
		border-radius: 60rpx;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		left: 0;
		top: 0;
	}

	.amount {
		text-align: right;
		color: #7A7A7A;
		font-size: 24rpx;
	}

	.list-view {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	.list-view::after {
		content: '';
		position: absolute;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		top: 0;
		right: 0;
		left: 0;
	}

	.list-item {
		width: 100%;
		padding: 30rpx 28rpx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.list-item::after {
		left: 120rpx
	}

	.item-last::after {
		left: 0 !important
	}

	.content-box {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.logo {
		width: 60rpx;
		height: 60rpx;
		flex-grow: 1
	}

	.des-box {
		min-height: 130rpx;
		box-sizing: border-box;
		vertical-align: top;
		color: #333;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tit {
		font-size: 32rpx;
		max-width: 420rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.time {
		color: #888
	}

	.money {
		font-size: 38rpx;
		font-weight: 500;
		color: #000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: 20rpx;
	}

	.add {
		color: #5677FC !important;
	}
</style>
