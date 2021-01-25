<template>
	<view class="container">
		<!--searchbox-->
		<view class="tui-searchbox" v-if="false">
			<view class="tui-search-input" @tap="search">
				<!-- #ifdef APP-PLUS || MP -->
				<icon type="search" size='15' color='#999'></icon>
				<!-- #endif -->
				<text class="tui-search-text">搜索</text>
			</view>
		</view>
		<!--searchbox-->

		<block v-for="(item,index) in fansList" :key="index">
			<tui-list-cell @click="detail" :last="true">
				<view class="tui-msg-box">
					<image :src="item.avatar_url" class="tui-msg-pic" mode="widthFix"></image>
					<view class="tui-msg-item">
						<view class="tui-msg-name">{{item.nickname}}</view>
						<view class="tui-msg-content">级别：{{item.levelname}}</view>
					</view>
				</view>
				<view class="tui-msg-right" :class="[item.level==3?'tui-right-dot':'']">
					<view class="tui-msg-time">{{item.time}}</view>
                    <view class="tui-msg-time-desc">团队：{{item.fans_team}}人</view>
				</view>
			</tui-list-cell>            
		</block>
        <tui-tips :fixed="false" style="margin:0 auto;" v-if="fansList.length==0 && !loadding" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-tips>
        <!--加载loadding-->
        <tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
        <tui-nomore :visible="!pullUpOn" bgcolor="#f7f7f7"></tui-nomore>
        <!--加载loadding-->
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiListCell from "@/components/list-cell/list-cell"
    import tuiLoadmore from "@/components/loadmore/loadmore"
    import tuiNomore from "@/components/nomore/nomore"
    import tuiTips from "@/components/extend/tips/tips"
	export default {
		components: {
			tuiIcon,
			tuiListCell,
            tuiLoadmore,
            tuiNomore,
            tuiTips
		},
		data() {
			return {
                pageIndex: 1,
                loadding: false,
                pullUpOn: true,
				current: 0,
				tabbar: [{
					icon: "community",
					text: "消息",
					size: 24
				}, {
					icon: "people",
					text: "联系人",
					size: 24
				}, {
					icon: "explore",
					text: "发现",
					size: 24
				}],
				fansList: [{
					nickname: "波动星球",
					pic: "avatar_1",
					msg: "兰家双臂初长成！",
					msgNum: 2,
					time: "10:22",
					level: 1
				}]
			}
		},
        onLoad() {
            this.getFans()
        },
		methods: {
			tabbarSwitch: function(e) {
				let index = e.currentTarget.dataset.index;
				this.current = index;
				if (index != 0) {
					if (index == 1) {
						uni.navigateTo({
							url: '../friendsList/friendsList'
						})
					} else {
						this.tui.toast("功能开发中~")
					}
				}
			},
			search: function() {
				uni.navigateTo({
					url: '../news-search/news-search'
				})
			},
			detail: function() {
				uni.navigateTo({
					url: '../chat/chat'
				})
			},
            getFans:function(){
                let _this = this;
                _this.$http.post('/fans',{page:_this.pageIndex}).then(res => {
                    if(res.data.ret==200){						
                        let reData = res.data.data;
                        let loadData = reData.rows;
                        let next = reData.next;
                        if(next==0)	_this.pullUpOn=false;                
                        if (_this.pageIndex == 1) {
                        	_this.fansList = [];
                            uni.pageScrollTo({scrollTop:0, duration:300}) //回到顶部
                        }
                        _this.fansList = _this.fansList.concat(loadData);
                        _this.pageIndex = _this.pageIndex + 1;
                        _this.loadding = false
                    }                        	
                }).catch(err => {
                    console.log(err);
                })
            }
		},
		onPullDownRefresh: function() {
			uni.stopPullDownRefresh();
		},
        onReachBottom: function() {
        	if (!this.pullUpOn) return;
        	this.loadding = true;
        	this.getFans()
        }
	}
</script>

<style>
	page {
		background: #f5f6fa;
	}
	/*searchbox*/

	.tui-searchbox {
		width: 100%;
		height: 100upx;
		padding: 0 30upx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.tui-search-input {
		width: 100%;
		height: 72upx;
		background: #f5f6fa;
		border-radius: 36upx;
		font-size: 30upx;
		color: #A8ABB8;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-search-text {
		padding-left: 16upx;
	}

	/*searchbox*/


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
		font-size: 28upx;
		line-height: 1;
		color: #9397a4;
	}

	.tui-msg-right {
		max-width: 230upx;
		height: 88upx;
		margin-left: auto;
		text-align: right;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
        display: flex;
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
    .tui-msg-time-desc{
		width: 100%;
		font-size: 26upx;
		line-height: 24upx;
		color:#888888;
	}

	.tui-badge {
		width: auto
	}
</style>
