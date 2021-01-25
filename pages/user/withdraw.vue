<template>
	<view class="container">
		<tui-list-view title="佣金提现" class="tui-list-view">
			<tui-list-cell :arrow="false" class="tui-list">
				<tui-icon name="wealth-fill" size="20" color="#ff7900"></tui-icon>
				<text class="tui-list-cell-name">可提现金额{{myAsset.wallet}}</text>
			</tui-list-cell>
			<tui-list-cell @click="goList" :arrow="false" class="tui-list">
				<tui-icon name="order" size="20" color="#5677fc"></tui-icon>
				<view class="tui-list-cell-name">提现记录</view>
			</tui-list-cell>
		</tui-list-view>
        <tui-list-cell :hover="false">
        	<view class="tui-line-cell">
        		<view class="tui-title">提现金额</view>
        		<input v-model="money" @input="repMoney" placeholder-class="phcolor" class="tui-input" placeholder="请输入提现金额" maxlength="50" type="digit" />
        	</view>
        </tui-list-cell>
        <view class="tui-btn-box">
        	<button class="tui-btn tui-btn-mini tui-btn-danger" hover-class="btn-hover" type="primary" @click='submit' :disabled="disabled" :loading="disabled" >立即提现</button>
        </view>
        <view class="tui-tips">注：每月26~30号可申请提现</view>
        <view class="tui-box tui-tool-box"  @tap="href(7)">
        	<tui-list-cell padding="0" :lineLeft="false">
        		<view class="tui-cell-header">
        			<view class="tui-cell-title">慧麦佣金收益提现说明</view>
        		</view>
        	</tui-list-cell>
            <view class="tui-wealth-desc">
                <view>1、订单收益=订单完成时间在上月的订单</view>
                <view>2、上月【已付款】尚未完成的推广收益，可在下月提现</view>
            </view>
        </view>
	</view>
</template>
<script>
    import {mapState,mapMutations} from 'vuex'
    import tuiIcon from "@/components/icon/icon"
	import tuiListView from "@/components/list-view/list-view"
    import tuiListCell from "@/components/list-cell/list-cell"
	export default {
        computed: mapState(['isLogin', 'userInfo','myAsset']),
		components: {
            tuiIcon,
			tuiListView,
            tuiListCell
		},
		data() {
			return {
                money:'',
                disabled:false
            }
		},
		methods: {	
            submit:function(){
                let _this = this;
                if(!_this.money || !this._isAmount(_this.money)){
                    this.tui.toast("提现金额错误")
                    return;
                }
                _this.disabled = true;
                _this.$http.post('/cash',{'money':_this.money}).then(res => {
                    if(res.data.ret==200){						
                        let reData = res.data.data;
                        _this.user = reData;
                        _this.money = '';
                        _this.tui.toast(res.data.data);
                        _this.disabled = false;
                        return;
                    }                        	
                }).catch(err => {
                    _this.disabled = false;
                    _this.tui.toast(err.data.msg);
                    console.log(err);
                    return;
                })
            },
            goList:function(){
                uni.navigateTo({
                	url: "./withdraw_list"
                })
            },
            repMoney:function(event){
                let value = event.target.value;   
                if(!value){
                    this.tui.toast("请输入提现金额");
                    return;
                }
                if(!this._isAmount(value)){
                    this.tui.toast("提现金额错误");
                    return;
                }
            },
			formReset: function(e) {
				console.log("清空数据")
			},
            _isAmount: function(value) {
            	//金额，只允许保留两位小数
            	return /^([0-9]*[.]?[0-9])[0-9]{0,1}$/.test(value);
            }
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}
       
    .tui-list{font-size:24upx;}
    .tui-box {
    	background: #fff;
    	box-shadow: 0 3rpx 20rpx rgba(183, 183, 183, 0.1);
    	border-radius: 10rpx;
    	overflow: hidden;
        margin: 20upx;
    }
    .tui-tool-box {
    	margin-top: 20rpx;
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
    	color: #333;
    }
    
    .tui-cell-sub {
    	font-size: 26rpx;
    	font-weight: 400;
    	color: #999;
    	padding-right: 28rpx;
    }
    
    .tui-wealth-desc{
        font-size: 24upx;
        padding: 20upx;
        line-height: 42upx;
    }
    
    
    
    .tui-line-cell {
    	width: 100%;
    	box-sizing: border-box;
    	display: flex;
    	align-items: center;
    }
    
    .tui-title {
        font-size:24upx;
    	line-height: 32rpx;
    	flex-shrink: 0;
    }
    
    .tui-input {
    	font-size: 32rpx;
    	color: #333;
    	padding-left: 20rpx;
    	flex: 1;
    }
    .phcolor{font-size:24upx;}
    .tui-btn-box{padding:20upx;font-size: 24upx;}
    .tui-btn-danger{background: #EB0909 !important;color: #fff;}
    .tui-btn-mini{font-size:26rpx;}
    
    
       
    
    
  
	
	.tui-list-cell-name {
        font-size: 24upx;
		padding-left: 20upx;
		vertical-align: middle;
		line-height: 30upx;
	}
	
	.tui-list::after {
		left: 94upx !important
	}
	
	.tui-right {
		margin-left: auto;
		margin-right: 34upx;
		font-size: 26upx;
		line-height: 1;
		color: #999;
	}
	
	.logo {
		height: 40upx;
		width: 40upx;
	}
	
	.tui-flex {
		display: flex;
		align-items: center;
	}
	
	.tui-msg-box {
		display: flex;
		align-items: center;
	}
	
	.tui-msg-pic {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		display: block;
		margin-right: 24upx;
	}
	
	.tui-msg-item {
		max-width: 500upx;
		min-height: 80upx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.tui-msg-name {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 34upx;
		line-height: 1;
		color: #262b3a;
	}
	
	.tui-msg-content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 26upx;
		line-height: 1;
		color: #9397a4;
	}
	
	.tui-msg-right {
		max-width: 120upx;
		height: 88upx;
		margin-left: auto;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	.tui-msg-right.tui-right-dot {
		height: 76upx;
		padding-bottom: 10upx;
	
	}
	
	.tui-msg-time {
		width: 100%;
		font-size: 24upx;
		line-height: 24upx;
		color: #9397a4;
	}
	
	.tui-badge {
		width: auto
	}
	
	.tui-msg::after {
		left: 154upx !important
	}
    
    .tui-tips {
    	padding: 30rpx;
    	color: #999;
    	font-size: 24rpx;
    }
</style>
