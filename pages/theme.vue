<template>
	<view class="container">
		<view class="theme-list tui-product-box tui-mb-20">
            <block v-if="productList.length>0">
			<view class="theme tui-mb-20" v-for="(item,index) in productList" :key="index" @tap="detail(item.id,index)">
				<view class="image-view">
					<image v-if="item.image_url" class="theme-image" :src="item.image_url" lazy-load="true" mode="widthFix"></image>
				</view>
				<view class="theme-title"><text class="theme-name">{{item.name}}</text><text class="theme-goods-num" v-if="item.goods_num>0">商品{{item.goods_num}}件</text></view>
			</view>
            </block>
            <tui-tips :fixed="false" v-if="productList.length==0 && !loadding" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-tips>
		</view>		
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn && productList.length>0" bgcolor="#f7f7f7"></tui-nomore>
	</view>
</template>

<script>
    import {mapState} from 'vuex'
	import tuiIcon from "@/components/icon/icon"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
    import tuiTips from "@/components/extend/tips/tips"
	import util from "@/utils/util.js"
	export default {
        computed: mapState(['allianceType']),
		components: {
			tuiIcon,
			tuiLoadmore,
			tuiNomore,
            tuiTips
		},
		data() {
			return {
				productList :[],
				pageIndex:1,
				loadding: false,
				pullUpOn: true
			}
		},
        watch:{
            allianceType:function(){
                this.pageIndex = 1;
                this.getThemeList();
            }
        },
		onLoad() {
			this.getThemeList();
		},
		methods:{
			getThemeList:function(){
				this.loadding = true;
				let _this = this
				util.getThemes({pages:_this.pageIndex},(reData) => {
					let loadData = reData.list;
					let next = reData.next;
					if(next==0)	_this.pullUpOn=false;				
					if (_this.pageIndex == 1) {
						_this.productList = [];
					}
					_this.productList = _this.productList.concat(loadData);
					_this.pageIndex = _this.pageIndex + 1;
					_this.loadding = false
				})
			},
			detail: function(themeid,index) {
				let theme = escape(JSON.stringify(this.productList[index]));	
				uni.navigateTo({
					url: './themeGoods?themeid='+themeid+'&theme='+theme
				})
			},
		},
		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.getThemeList();
			uni.stopPullDownRefresh()
		},
		onReachBottom: function() {
			if (!this.pullUpOn) return;			
			this.getThemeList();
		}
	}
</script>

<style>
	page {background:#f7f7f7;}
    /* #ifdef APP-PLUS */
    /* 这里是状态栏高度 */
    .container {padding-top: var(--status-bar-height);}
    /* #endif */    
	.tui-mb-20 {margin-bottom:20rpx;}
	.tui-product-box {margin-top:20rpx;margin: 0 20rpx;box-sizing:border-box;}
	.theme-list{margin-top:20upx;}
	.theme{background:#FFFFFF;}
	.image-view image{width:100%;}
	.theme-title{font-size:28upx;padding: 0 10upx;}
	.theme-name{width: 560upx;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display: inline-block;}
	.theme-goods-num{float: right;color: #9c9c9c;font-size: 24upx;margin-top: 1px;}
	.theme-goods-img{padding: 0 10upx;}
	.theme-goods-img image{width:120upx;height:120upx;}    
</style>
