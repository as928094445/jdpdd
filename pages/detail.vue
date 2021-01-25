<template>
    <view>
        <tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>      
        <view class="container tui-skeleton">
            <!--header-->
            <view class="tui-header-box" :style="{height:height+'px',background:'rgba(255,255,255,'+opcity+')'}">
                <view class="tui-header" :style="{paddingTop:top+'px', opacity:opcity}">
                    商品详情
                </view>
                <view class="tui-header-icon" :style="{marginTop:top+'px'}">
                    <view class="tui-icon tui-icon-arrowleft tui-icon-back" :style="{color:opcity>=1?'#000':'#fff',background:'rgba(0, 0, 0,'+iconOpcity+')'}"
                     @tap="back"></view>
                    <view class="tui-icon tui-icon-more-fill  tui-icon-ml" :style="{color:opcity>=1?'#000':'#fff',background:'rgba(0, 0, 0,'+iconOpcity+')',fontSize:'20px'}"
                     @tap.stop="openMenu"></view>
                    <tui-badge type="red" size="small">2</tui-badge>
                </view>
            </view>
            <!--header-->

            <!--banner-->
            <view class="tui-banner-swiper tui-skeleton-rect">
                <swiper :autoplay="true" :interval="5000" :duration="150" :circular="true" :style="{height:scrollH + 'px'}" @change="bannerChange">
                    <block v-for="(item,index) in banner" :key="index">
                        <swiper-item :data-index="index" @tap.stop="previewImage">
                            <image :src="item" class="tui-slide-image" :style="{height:scrollH+'px'}" />
                        </swiper-item>
                    </block>
                </swiper>
                <tui-tag type="translucent" shape="circleLeft" size="small">{{bannerIndex+1}}/{{banner.length}}</tui-tag>
            </view>
            <!--banner-->

            <view class="tui-pro-detail">
                <view class="tui-product-title tui-border-radius">
                    <view class="tui-pro-pricebox tui-padding">
                        <view class="tui-pro-price">
                            <view class="tui-skeleton-rect">￥<text class="tui-price">{{goods.price_1}}</text>.{{goods.price_2}}</view>
                            <tui-tag size="small" :plain="true" type="danger" shape="circle">{{allianceName}}</tui-tag>
                        </view>
                        <view class="tui-collection tui-size tui-skeleton-rect" @tap="collecting">
                            <view class="tui-icon tui-icon-collection" :class="['tui-icon-'+(collected?'like-fill':'like')]" :style="{color:collected?'#ff201f':'#333',fontSize:'20px'}"></view>
                            <view class="tui-scale" :class="[collected?'tui-icon-red':'']">收藏</view>
                        </view>
                    </view>
                    <view class="tui-original-price tui-gray" v-if="goods.min_group_price>goods.quanhou_price">
                        原价	<text class="tui-line-through">￥{{goods.min_group_price}}</text>
                    </view>
                    <view class="tui-pro-titbox">
                        <view class="tui-pro-title tui-skeleton-rect">{{goods.goods_name}}</view>
                        <button open-type="share" class="tui-share-btn tui-share-position tui-skeleton-fillet">
                            <tui-tag type="gray" tui-tag-class="tui-tag-share tui-size" shape="circleLeft" size="small">
                                <view class="tui-icon tui-icon-partake" style="color:#999;font-size:15px"></view>
                                <!-- <tui-icon name="partake" color="#999" size="15"></tui-icon> -->
                                <text class="tui-share-text tui-gray">分享</text>
                            </tui-tag>
                        </button>
                    </view>
                    <view class="tui-padding">
                        <view class="tui-sub-title tui-size tui-gray tui-tag-coupon-box">
                            <tui-tag class="tui-skeleton-rect" size="small" type="warning" shape="circle" tui-tag-class="tui-tag-coupon" v-if="goods.promotion_money && isApprove">立即推广预计可得佣金{{goods.promotion_money}}元</tui-tag>
                        </view>
                        <view class="tui-sale-info tui-size tui-gray">			
                            <view class="tui-skeleton-rect" v-if="goods.serv_txt">服务态度{{goods.serv_txt}}</view>
                            <view class="tui-skeleton-rect" v-if="goods.desc_txt">描述相符{{goods.desc_txt}}</view>
                            <view class="tui-skeleton-rect" v-if="goods.lgst_txt">物流服务{{goods.lgst_txt}}</view>
                            <view class="tui-skeleton-rect" v-if="goods.sales_tip">{{goods.sales_tip}}人付款</view>
                            <view class="tui-skeleton-rect" v-if="goods.comments">{{goods.comments}}人评论</view>
                            <view class="tui-skeleton-rect" v-if="goods.goodCommentsShare">好评率{{goods.goodCommentsShare}}%</view>
                        </view>
                    </view>
                </view>

                <view class="tui-discount-box tui-mtop">
                    <view class="tui-list-cell" @tap="showPopup" v-if="goods.coupon_discount>0">
                        <view class="tui-bold tui-cell-title tui-skeleton-fillet">领券</view>
                        <view class="tui-tag-coupon-box">
                            <tui-tag class="tui-skeleton-fillet" size="small" type="red" shape="circle" tui-tag-class="tui-tag-coupon">{{goods.coupon_discount}}元福利券</tui-tag>
                        </view>
                        <tui-icon name="more-fill" :size="20" class="tui-right tui-top40" color="#666"></tui-icon>
                    </view>

                    <view class="tui-list-cell tui-last"  v-show="false" @tap="showPopup">
                        <view class="tui-bold tui-cell-title">促销</view>
                        <view>
                            <view class="tui-promotion-box">
                                <tui-tag size="small" type="red" :plain="true" tui-tag-class="tui-inline-block">多买优惠</tui-tag>
                                <text>满1件，立减最低1件商品价格，包邮（限中国内地）</text>
                            </view>
                            <view class="tui-promotion-box">
                                <tui-tag size="small" type="red" :plain="true" tui-tag-class="tui-inline-block">满额返券</tui-tag>
                                <text>满2件，立减最低2件商品价格，包邮（限中国内地）</text>
                            </view>
                            <view class="tui-promotion-box">
                                <tui-tag size="small" type="red" :plain="true" tui-tag-class="tui-inline-block">特别赠品</tui-tag>
                                <text>满3件，立减最低3件商品价格，包邮（限中国内地）</text>
                            </view>
                        </view>
                        <tui-icon name="more-fill" :size="20" class="tui-right tui-top40" color="#666"></tui-icon>
                    </view>

                </view>

                <view class="tui-basic-info tui-mtop" v-show="false">
                    <view class="tui-list-cell" @tap="showPopup">
                        <view class="tui-bold tui-cell-title">已选</view>
                        <view class="tui-selected-box">个性水滴耳环【A2】,1个，可选服务</view>
                        <tui-icon name="more-fill" :size="20" class="tui-right" color="#666"></tui-icon>
                    </view>
                    <view class="tui-list-cell" @tap="showPopup" v-show="false">
                        <view class="tui-bold tui-cell-title">送至</view>
                        <view class="tui-addr-box">
                            <view class="tui-addr-item">北京朝阳区三环到四环之间</view>
                            <view class="tui-addr-item">今日23:59前完成下单，预计6月28日23:30前发货，7月1日24:00前送达</view>
                        </view>
                        <tui-icon name="more-fill" :size="20" class="tui-right" color="#666"></tui-icon>
                    </view>
                    <view class="tui-list-cell tui-last">
                        <view class="tui-bold tui-cell-title">运费</view>
                        <view class="tui-selected-box">在线支付免运费</view>
                    </view>
                    <view class="tui-guarantee">
                        <view class="tui-guarantee-item">
                            <tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
                            <text class="tui-pl">可配送海外</text>
                        </view>
                        <view class="tui-guarantee-item">
                            <tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
                            <text class="tui-pl">店铺发货&售后</text>
                        </view>
                        <view class="tui-guarantee-item">
                            <tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
                            <text class="tui-pl">7天无理由退货</text>
                        </view>
                        <view class="tui-guarantee-item">
                            <tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
                            <text class="tui-pl">闪电退款</text>
                        </view>
                        <view class="tui-guarantee-item">
                            <tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
                            <text class="tui-pl">极速审核</text>
                        </view>
                    </view>
                </view>
                
                <view class="tui-cmt-box tui-mtop" v-if="mallGoods.length>0">
                    <view class="tui-list-cell tui-last tui-between">
                        <view class="tui-bold ">{{goods.mall_name}}</view>
                        <view @tap="common">
                            <text class="tui-cmt-all">进店逛逛</text>
                            <!-- <view class="tui-icon tui-icon-more-fill" style="color:#ff201f; font-size: 20px;"></view> -->
                            <!-- <tui-icon name="more-fill" size="20" color="#ff201f"></tui-icon> -->
                        </view>
                    </view>
                
                    <view class="tui-cmt-content tui-padding">
                        <view class="mall-list">
                            <view class="mall-list-cell " hover-class="mall-list-cell-hover" v-for="(item,index) in mallGoods" :key="index">
                                <view class="mall-media-list tui-skeleton-fillet" @tap="detail(item.goods_id)">
                                    <image class="mall-media-list-logo" :src="item.goods_thumbnail_url"></image>
                                    <view class="mall-media-list-body">
                                        <view class="mall-media-list-title">{{item.goods_name}}</view>
                                        <view class="mall-media-list-text mall-ellipsis">
                                            <text class="price">￥{{item.min_group_price}}</text>
                                            <text class="coupon" v-if="item.coupon_discount>0">{{item.coupon_discount}}元券</text>
                                            <text class="sales" v-if="item.sales_tip>0">销量{{item.sales_tip}}</text>									
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>

                <view class="tui-cmt-box tui-mtop tui-radius-all" v-show="false">
                    <view class="tui-list-cell tui-last tui-between">
                        <view class="tui-bold tui-cell-title">评价</view>
                        <view @tap="common">
                            <text class="tui-cmt-all">查看全部</text>
                            <view class="tui-icon tui-icon-more-fill" style="color:#ff201f; font-size: 20px;"></view>
                            <!-- <tui-icon name="more-fill" size="20" color="#ff201f"></tui-icon> -->
                        </view>
                    </view>

                    <view class="tui-cmt-content tui-padding">
                        <view class="tui-cmt-user">
                            <image src="/static/images/my/mine_def_touxiang_3x.png" class="tui-acatar"></image>
                            <view>z***9</view>
                        </view>
                        <view class="tui-cmt">物流很快，很适合我的风格❤</view>
                        <view class="tui-attr">颜色：叠层钛钢流苏耳环（A74）</view>
                    </view>

                    <view class="tui-cmt-btn">
                        <tui-tag type="black" :plain="true" tui-tag-class="tui-tag-cmt" @tap="common">查看全部评价</tui-tag>
                    </view>
                </view>

                <view class="tui-nomore-box" v-if="goods.detailGallery">
                    <tui-nomore text="宝贝详情" :visible="true" bgcolor="#f7f7f7"></tui-nomore>
                </view>
                <view class="tui-product-img tui-radius-all" v-if="goods.detailGallery">
                    <image :src="item.url" v-for="(item,index) in goods.detailGallery" :key="index" mode="widthFix"></image>
                </view>
                
                
                <!--为你推荐-->
                <tui-divider :size="28" :bold="true" color="#333" width="50%">为你推荐</tui-divider>
                <view class="tui-product-list">
                    <view class="tui-product-container">
                        <block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2!=0">
                            <!--商品列表-->
                            <view class="tui-pro-item tui-skeleton-fillet" hover-class="hover" :hover-start-time="150" @tap="detail(item.goods_id,index)">
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
                            <view class="tui-pro-item tui-skeleton-fillet" hover-class="hover" :hover-start-time="150" @tap="detail(item.goods_id,index)">
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
                
                
                <tui-nomore text="已经到最底了" :visible="true" bgcolor="#f7f7f7"></tui-nomore>
                <view class="tui-safearea-bottom"></view>
            </view>

            <!--底部操作栏-->
            <view class="tui-operation tui-skeleton-fillet">
                <view class="tui-operation-left tui-col-5">
                    <view class="tui-operation-item" hover-class="opcity" :hover-stay-time="150" @tap="common(0)">
                        <tui-icon name="home" :size="22" color='#333'></tui-icon>
                        <view class="tui-operation-text tui-scale-small">首页</view>
                    </view>
                    <view class="tui-operation-item" hover-class="opcity" :hover-stay-time="150">
                        <tui-icon name="shop" :size="22" color='#333'></tui-icon>
                        <view class="tui-operation-text tui-scale-small">店铺</view>
                    </view>
                    <view @click="showPoster" class="tui-operation-item" hover-class="opcity" :hover-stay-time="150">
                        <tui-icon name="qrcode" :size="22" color='#333'></tui-icon>
                        <view class="tui-operation-text tui-scale-small">海报</view>
                        <!-- <tui-badge type="danger" size="small">9</tui-badge> -->
                    </view>
                </view>
                <view class="tui-operation-right tui-right-flex tui-col-7 tui-btnbox-4">
                    <view class="tui-flex-1">
                        <tui-button type="danger" shape="circle" size="mini" @click="showPopup">推广文案</tui-button>
                    </view>
                    <view class="tui-flex-1">
                        <tui-button type="warning" shape="circle" size="mini" @click="goBuy">自购得佣金</tui-button>
                    </view>
                </view>
            </view>


            <!--底部操作栏--->

            <!--顶部下拉菜单-->
            <tui-top-dropdown tui-top-dropdown="tui-top-dropdown" bgcolor="rgba(76, 76, 76, 0.95)" :show="menuShow" :height="0"
             @close="closeMenu">
                <view class="tui-menu-box tui-padding tui-ptop">
                    <view class="tui-menu-header" :style="{paddingTop:top+'px'}">
                        功能直达
                    </view>
                    <view class="tui-menu-itembox">
                        <block v-for="(item,index) in topMenu" :key="index">
                            <view class="tui-menu-item" hover-class="tui-opcity" :hover-stay-time="150" @tap="common(index)">
                                <view class="tui-badge-box">
                                    <tui-icon :name="item.icon" color="#fff" :size="item.size"></tui-icon>
                                    <tui-badge type="red" tui-badge-class="tui-menu-badge" size="small" v-if="item.badge">{{item.badge}}</tui-badge>
                                </view>
                                <view class="tui-menu-text">{{item.text}}</view>
                            </view>
                        </block>
                    </view>
                    <view class="tui-icon tui-icon-up" style="color: #fff; font-size: 26px;" @tap.stop="closeMenu"></view>
                    <!-- <tui-icon name="up" color="#fff" size="26" class="tui-icon-up" @tap.stop="closeMenu"></tui-icon> -->
                </view>

            </tui-top-dropdown>
            <!---顶部下拉菜单-->

            <!--底部选择层-->
            <tui-bottom-popup :show="popupShow" @close="hidePopup">
                <view class="tui-popup-box">
                    <view class="tui-product-box tui-padding">
                        <image :src="goods.img" class="tui-popup-img"></image>
                        <view class="tui-popup-price">
                            <view class="tui-amount tui-bold">￥{{goods.min_group_price}}</view>
                            <view class="tui-number">编号:{{goods.goods_id}}</view>
                        </view>
                    </view>
                    <scroll-view scroll-y class="tui-popup-scroll">
                        <view class="tui-scrollview-box">
                            <view class="tui-bold tui-attr-title">推广文案</view>
                            <view class="tui-attr-box">
                                <view class="tui-cells" @tap="copyData">
                                    <text space="ensp" class="tui-textarea">{{wenAn}}</text>
                                </view>
                            </view>
                            <view class="tui-attr-box">
                                <view class="tui-attr-item" hover-class="tui-attr-active" v-if="isApprove" @tap="copyData">复制文案</view>
                                <view class="tui-attr-item" hover-class="tui-attr-active" @tap="hidePopup" @click="showPoster">分享海报</view>
                                <button open-type="share" hover-class="tui-attr-active" class="tui-attr-item">分享小程序</button>
                            </view>						
                        </view>
                    </scroll-view>
                    <view class="tui-operation tui-operation-right tui-right-flex tui-popup-btn">
                        <view class="tui-flex-1">
                            <tui-button type="red" shape="circle" size="mini" @click="goBuy">立即去抢券</tui-button>
                        </view>
                        <view class="tui-flex-1">
                            <tui-button type="warning" shape="circle" size="mini" @click="goBuy">立即去购买</tui-button>
                        </view>
                    </view>
                    <view class="tui-icon tui-icon-close-fill tui-icon-close" style="color: #999;font-size:52upx;padding:10upx;" @tap="hidePopup"></view>
                    <!-- <tui-icon name="close-fill" color="#999" class="tui-icon-close" size="20" @tap="hidePopup"></tui-icon> -->
                </view>
            </tui-bottom-popup>
            <!--底部选择层-->
            
            <!-- 海报 -->
            <tui-modal :show="posterShow" @cancel="showPoster" :custom="true">
                <view class="tui-modal-custom">
                    <image :src="posterUrl" class="tui-tips-img" lazy-load="true" mode="widthFix" @click="posterPreview"></image>
                    <!-- <view class="tui-modal-custom-text">我是自定内容</view> -->
                    <view class="tui-modal-but"><tui-button :disabled="posterSaveStatus" :loading="posterSaveStatus" type="red" shape="circle" size="mini" @click="savePoster">保存到搜集相册</tui-button></view>
                    <view class="tui-modal-but"><tui-button type="warning" shape="circle" size="mini" @click="posterPreview">预览海报长按分享</tui-button></view>
                    <view class="tui-icon tui-icon-close-fill tui-icon-close" style="color:#999;font-size:54upx;padding:10upx;" @tap="hidePoster"></view>
                </view>
            </tui-modal>

        </view>
    </view>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import tuiSkeleton from "@/components/tui-skeleton/tui-skeleton"
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiBadge from "@/components/badge/badge"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiButton from "@/components/button/button"
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
	import tuiNumberbox from "@/components/numberbox/numberbox"
	import tuiDivider from "@/components/divider/divider"
	import tuiLoadmore from "@/components/loadmore/loadmore"
    import thorui from "@/components/utils/clipboard.thorui.js"
    import tuiModal from "@/components/modal/modal"
	import util from "@/utils/util.js"
	
	export default {
        computed: mapState(['isLogin','authKey', 'userInfo','allianceType','allianceName','isApprove']),
		components: {
            tuiSkeleton,
			tuiIcon,
			tuiTag,
			tuiBadge,
			tuiNomore,
			tuiButton,
			tuiTopDropdown,
			tuiBottomPopup,
			tuiNumberbox,
			tuiDivider,
			tuiLoadmore,
            tuiModal
		},
		data() {
			return {
                skeletonShow: true,
				height: 64, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
                good_id:0,
                is_get_goods:false,
				goods_name:'',
				coupon_discount:0,
				sales_tip:0,
				goods:{'min_group_price':0,'sales_tip':0,'price_1':'00', 'price_2':'00'},
				weAppInfo:{},
				banner: [],
				bannerIndex: 0,
				topMenu: [{
					icon: "home",
					text: "首页",
					size: 23,
					badge: 0,
					path: "./mall"
				}, {
					icon: "people",
					text: "我的",
					size: 26,
					badge: 0,
					path: "./user/my"
				}],
				menuShow: false,
				popupShow: false,
				value: 1,
				collected: false,
				mallGoods:[],
				productList: [],
				pageIndex: 1,
				loadding: false,
				pullUpOn: true,
                wenAn:'欢迎使用~',
                posterShow:false,
                posterSaveStatus:false,
                posterUrl:"",
                askPoster:false,
                schema_url:'',
                web_url:''
			}
		},
        watch:{
            //监听变量
            isLogin: function(){
                if(this.isLogin){                    
                    this.getInfo();
                }
            }
        },
		onShow() {
			// this.getInfo('37202064041');
            // console.log(this.isLogin)
            // console.log(this.userName)
		},
		onLoad: function(op) {
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
			setTimeout(() => {
				uni.getSystemInfo({
					success: (res) => {
						this.width = obj.left || res.windowWidth;
						this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
						this.top = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
						this.scrollH = res.windowWidth
					}
				})
			}, 50)
			if(op.pid){this.setPid(op.pid);}
            this.good_id = op.good_id;
			if(op.goods){
				let goods = JSON.parse(unescape(op.goods))
				this.goods = goods
				this.goods_name = goods.goods_name
				this.banner = this.banner.concat([goods.img]); 
			}	
            if(op.shopType){
                this.setAllianceType(op.shopType)
            }
            this.getInfo();
            // if(this.allianceType=='pdd' && op.goods){
            //     this.getInfo();
            // }
		},
		methods: {
            ...mapMutations(['setPid','setAllianceType']),
			bannerChange: function(e) {
				this.bannerIndex = e.detail.current
			},
			previewImage: function(e) {
				let index = e.currentTarget.dataset.index;
				uni.previewImage({
					current: this.banner[index],
					urls: this.banner
				})
			},
			back: function() {
				uni.navigateBack()
			},
			openMenu: function() {
				this.menuShow = true
			},
			closeMenu: function() {
				this.menuShow = false
			},
			showPopup: function() {
                let _this = this;
                if(_this.is_get_goods){
                    _this.popupShow=true;
                    return;
                }
                uni.showLoading({title:'加载中'});
                _this.getInfo(function(){
                    _this.popupShow = true                   
                });
			},
			hidePopup: function() {
				this.popupShow = false
			},
			change: function(e) {
				this.value = e.value
			},
			collecting: function() {
				this.collected = !this.collected
			},
			common: function(index) {
				if(index>=0){	
					let path = this.topMenu[index].path
					uni.switchTab({
						url: path
					})
                    return
				}
				this.tui.toast("功能开发中~")
			},
			submit(){
				this.popupShow = false
				uni.navigateTo({
					url: '../mall-extend/submitOrder/submitOrder'
				})
			},
			detail: function(goodid,index) {
				let goods = (index>=0)?'&goods='+escape(JSON.stringify(this.productList[index])):'';
				uni.navigateTo({
					url: './detail?good_id='+goodid+goods
				})
			},
			goBuy:function(){
                let _this = this;                
                _this.getInfo(function(){ 
                    // #ifdef MP-WEIXIN                    
                    uni.navigateToMiniProgram({
                        appId: _this.weAppInfo.app_id,
                        path: _this.weAppInfo.page_path,
                        extraData: {
                            'title': _this.goods_name
                        },
                        success(res) {
                            console.log(res)
                        },
                        fail(res){
                            console.log(res)
                        }
                    })
                    // #endif
                    
                    // #ifdef APP-PLUS
                    
                    plus.runtime.openURL(_this.schema_url, function(res) {  
                        console.log(res);  
                        // plus.nativeUI.alert("本机没有安装app，无法启动");
                        uni.navigateTo({
                            url: 'web?url='+escape(_this.web_url)
                        });
                    });
                    // #endif
                    // #ifdef H5
                    
                    // #endif
                });
			},
			getInfo:function(callback){
				let _this = this;
                if(_this.is_get_goods){
                    callback();
                    uni.hideLoading();
                    return;
                }               
				_this.$http.post('/detail', {'goods_id':this.good_id,'coupon_link':this.goods.coupon_link,'askPoster':this.askPoster} ).then(res => {
					if(res.data.ret==200){
						_this.is_get_goods = true;
						let reData = res.data.data;
                        if(reData.goods_detail){                            
                            let detail = reData.goods_detail;
                            _this.goods = detail;
                            _this.goods_name = detail.goods_name
                            if(detail.goods_gallery_urls){
                                _this.banner = _this.banner.concat(detail.goods_gallery_urls)
                            }
                            _this.mallGoods = reData.mall_goods ? reData.mall_goods : [] 
                            _this.skeletonShow = false
                        }
                        _this.posterUrl = reData.poster
                        if(reData.wenAn){
                            _this.wenAn = reData.wenAn
                        }
						_this.weAppInfo = reData.we_app_info  
                        _this.web_url = reData.view_short_url
                        _this.schema_url = (plus.os.name === 'iOS' && _this.allianceType=='jd') ? reData.schema_url_ios : reData.schema_url;                        
                        if(callback){                            
                            callback();
                            uni.hideLoading();
                        }
					}else{
                        uni.hideLoading();
                    }					
				}).catch(err => {
                    if(err.data.ret==404){                        
                        uni.showToast({
                            title: err.data.msg,
                            icon: 'none',
                            duration: 3000,
                            success:function(){
                                uni.switchTab({
                                    url: './mall'
                                })
                            }
                        })
                    }
                    uni.hideLoading();
					console.log(err);
				})
			},
            copyData: function() {                
                //复制文案
            	thorui.getClipboardData(this.wenAn, (res) => {
            		// #ifdef H5
            		if (res) {
            			this.tui.toast("复制成功")
            		} else {
            			this.tui.toast("复制失败")
            		}
            		// #endif
            	})
            },
            showPoster(){
                let _this = this;
                if(_this.is_get_goods && _this.askPoster){
                    _this.posterShow=true;                    
                    return;
                }                    
                uni.showLoading({title:'生成中'});
                _this.askPoster = true;
                _this.is_get_goods = false;
                _this.getInfo(function(){
                    _this.posterShow=true;                    
                });
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
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 200)
		},
		onReachBottom() {
			if (!this.pullUpOn || !this.goods_name) return;
			this.loadding = true;
			let _this = this
			util.getSearch({'keyword':_this.goods_name,pages:_this.pageIndex,fenci:1,withCoupon:false},(reData) => {
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
        onShareAppMessage(res) {
            if (res.from === 'button') {// 来自页面内分享按钮
              console.log(res.target)
            }
            if(!this.good_id){
                return;
            }
            let pathUrl = '/pages/detail?good_id='+this.good_id+'&shopType='+this.allianceType
            if(this.isLogin){
                pathUrl += '&pid='+this.userInfo.id;
            }
            
            let title = '原价:￥'+this.goods.quanhou_price+' '+this.goods_name;
            if(this.goods.coupon_discount>0){
                title = '券后:￥'+this.goods.quanhou_price+' 原价:￥'+this.goods.min_group_price+' '+this.goods_name;                
            }
            
            console.log(pathUrl);
            return {
                title:title,
                imageUrl:this.goods.img,
                content:'转发推广赚佣金',
                desc:'推广赚佣金',
                path: pathUrl
            }
        }
	}
</script>

<style>
	/* icon 也可以使用组件*/
	@import "../static/style/icon.css";

	page {
		background: #f7f7f7;
	}

	.container {
		padding-bottom: 110rpx;
	}

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

	.tui-header-icon {
		position: fixed;
		top: 0;
		left: 10px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		height: 32px;
		transform: translateZ(0);
		z-index: 99999;
	}



	.tui-header-icon .tui-badge {
		background: #e41f19 !important;
		position: absolute;
		right: -4px;
	}

	.tui-icon-ml {
		margin-left: 20rpx;
	}

	.tui-icon {
		border-radius: 16px;
	}


	.tui-icon-back {
		height: 32px !important;
		width: 32px !important;
		display: block !important;
	}

	.tui-header-icon .tui-icon-more-fill {
		height: 20px !important;
		width: 20px !important;
		padding: 6px !important;
		display: block !important;
	}

	.tui-banner-swiper {
		position: relative;
	}

	.tui-banner-swiper .tui-tag-class {
		position: absolute;
		color: #fff;
		bottom: 30rpx;
		right: 0;
	}

	.tui-slide-image {
		width: 100%;
		display: block;
	}

	/*顶部菜单*/

	.tui-menu-box {
		box-sizing: border-box;
	}

	.tui-menu-header {
		font-size: 34rpx;
		color: #fff;
		height: 32px;
		display: flex;
		align-items: center;
	}

	.tui-top-dropdown {
		z-index: 9999 !important;
	}

	.tui-menu-itembox {
		color: #fff;
		padding: 40rpx 10rpx 0 10rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		font-size: 26rpx;
	}

	.tui-menu-item {
		width: 22%;
		height: 160rpx;
		border-radius: 24rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
		margin-right: 4%;
		margin-bottom: 4%;
	}

	.tui-menu-item:nth-of-type(4n) {
		margin-right: 0;
	}

	.tui-badge-box {
		position: relative;
	}

	.tui-badge-box .tui-badge-class {
		position: absolute;
		top: -8px;
		right: -8px;
	}

	.tui-msg-badge {
		top: -10px;
	}

	.tui-icon-up {
		position: relative;
		display: inline-block;
		left: 50%;
		transform: translateX(-50%);
	}

	.tui-menu-text {
		padding-top: 12rpx;
	}

	.tui-opcity .tui-menu-text,
	.tui-opcity .tui-badge-box {
		opacity: 0.5;
		transition: opacity 0.2s ease-in-out;
	}

	/*顶部菜单*/

	/*内容 部分*/

	.tui-padding {
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	/* #ifdef H5 */
	.tui-ptop {
		padding-top: 44px;
	}

	/* #endif */

	.tui-size {
		font-size: 24rpx;
		line-height: 24rpx;
	}

	.tui-gray {
		color: #999;
	}

	.tui-icon-red {
		color: #ff201f;
	}

	.tui-border-radius {
		/* border-bottom-left-radius: 24rpx;
		border-bottom-right-radius: 24rpx; */
		overflow: hidden;
	}

	.tui-radius-all {
		border-radius: 24rpx;
		overflow: hidden;
	}

	.tui-mtop {
		margin-top: 26rpx;
	}

	.tui-pro-detail {
		box-sizing: border-box;
		color: #333;
	}

	.tui-product-title {
		background: #fff;
		padding: 30rpx 0;
	}

	.tui-pro-pricebox {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #ff201f;
		font-size: 36rpx;
		font-weight: bold;
		line-height: 44rpx;
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

	.tui-price {
		font-size: 58rpx;
	}

	.tui-original-price {
		font-size: 26rpx;
		line-height: 26rpx;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
	}

	.tui-line-through {
		text-decoration: line-through;
	}

	.tui-collection {
		color: #333;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 44rpx;
	}

	.tui-scale {
		transform: scale(0.7);
		transform-origin: center center;
		line-height: 24rpx;
		font-weight: normal;
	}

	.tui-icon-collection {
		line-height: 20px !important;
		margin-bottom: 0 !important;

	}

	.tui-pro-titbox {
		font-size: 32rpx;
		font-weight: 500;
		position: relative;
		padding: 0 150rpx 0 30rpx;
		box-sizing: border-box;
	}

	.tui-pro-title {
		padding-top: 20rpx;
	}

	.tui-share-btn {
		display: block;
		background: none;
		margin: 0;
		padding: 0;
		border-radius: 0;
	}

	.tui-tag-share {
		display: flex;
		align-items: center;
	}

	.tui-share-position {
		position: absolute;
		right: 0;
		top: 30rpx;
	}

	.tui-share-text {
		padding-left: 8rpx;
	}

	.tui-sub-title {
		padding: 20rpx 0;
	}

	.tui-sale-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 30rpx;
	}

	.tui-discount-box {
		background: #fff;
	}

	.tui-list-cell {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 26rpx;
		line-height: 26rpx;
		padding: 36rpx 30rpx;
		box-sizing: border-box;
	}

	.tui-right {
		position: absolute;
		right: 30rpx;
		top: 30rpx;
	}

	.tui-top40 {
		top: 40rpx !important;
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-list-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 126rpx;
	}

	.tui-last::after {
		border-bottom: 0 !important;
	}

	.tui-tag-coupon-box {
		display: flex;
		align-items: center;
	}

	.tui-tag-coupon-box .tui-tag-class {
		margin-right: 20rpx;
	}


	.tui-cell-title {
		width: 66rpx;
		padding-right: 30rpx;
		flex-shrink: 0;
	}

	.tui-promotion-box {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 10rpx 0;
		width: 74%;
	}

	.tui-promotion-box .tui-tag-class {
		display: inline-block !important;
		transform: scale(0.8);
		transform-origin: 0 center;
	}

	/* .tui-inline-block {
		display: inline-block !important;
		transform: scale(0.8);
		transform-origin: 0 center;
	} */

	.tui-basic-info {
		background: #fff;
	}

	.tui-addr-box {
		width: 76%;
	}

	.tui-addr-item {
		padding: 10rpx;
		line-height: 34rpx;
	}

	.tui-guarantee {
		background: #fdfdfd;
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx 30rpx 30rpx 30rpx;
		font-size: 24rpx;
	}

	.tui-guarantee-item {
		color: #999;
		padding-right: 30rpx;
		padding-top: 10rpx;
	}

	.tui-pl {
		padding-left: 4rpx;
	}

	.tui-cmt-box {
		background: #fff;
	}

	.tui-between {
		justify-content: space-between !important;
	}

	.tui-cmt-all {
		color: #ff201f;
		padding-right: 8rpx;
	}

	.tui-cmt-content {
		font-size: 26rpx;
	}

	.tui-cmt-user {
		display: flex;
		align-items: center;
	}

	.tui-acatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 30rpx;
		display: block;
		margin-right: 16rpx;
	}

	.tui-cmt {
		padding: 14rpx 0;
	}

	.tui-attr {
		font-size: 24rpx;
		color: #999;
		padding: 6rpx 0;
	}

	.tui-cmt-btn {
		padding: 50rpx 0 30rpx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-tag-cmt {
		min-width: 130rpx;
		padding: 20rpx 52rpx !important;
		font-size: 26rpx !important;
		display: inline-block;
	}

	.tui-nomore-box {
		padding-top: 10rpx;
	}

	.tui-product-img {
		transform: translateZ(0);
	}

	.tui-product-img image {
		width: 100%;
		display: block;
	}

	/*底部操作栏*/

	.tui-col-7 {
		width: 58.33333333%;
	}

	.tui-col-5 {
		width: 41.66666667%;
	}

	.tui-operation {
		width: 100%;
		height: 100rpx;
		/* box-sizing: border-box; */
		background: rgba(255, 255, 255, 0.98);
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 10;
		bottom: 0;
		left: 0;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}

	.tui-operation::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-operation-left {
		display: flex;
		align-items: center;
	}
    
	.tui-operation-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}
    .tui-operation-left button{line-height:32upx;background-color:transparent!important;padding:0;font-size: 22upx;}
	.tui-operation-text {
		font-size: 22rpx;
		color: #333;
	}

	.tui-opacity {
		opacity: 0.5;
	}

	.tui-scale-small {
		transform: scale(0.9);
		transform-origin: center center;
	}

	.tui-operation-right {
		height: 100rpx;
		/* box-sizing: border-box; */
		padding-top: 0;
	}

	.tui-right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-btnbox-4 .tui-btn-class {
		width: 90% !important;
		display: block !important;
		font-size: 28rpx !important;
	}

	.tui-operation .tui-badge-class {
		position: absolute;
		top: -6rpx;
		/* #ifdef H5 */
		transform: translateX(50%)
			/* #endif  */
	}

	.tui-flex-1 {
		flex: 1;
	}

	/*底部操作栏*/

	/*底部选择弹层*/

	.tui-popup-class {
		border-top-left-radius: 24rpx;
		border-top-right-radius: 24rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-popup-box {
		position: relative;
		padding: 30rpx 0 100rpx 0;
	}

	.tui-popup-btn {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	.tui-popup-btn .tui-btn-class {
		width: 90% !important;
		display: block !important;
		font-size: 28rpx !important;
	}

	.tui-icon-close {
		position: absolute;
		top: 30rpx;
		right: 30rpx;
	}

	.tui-product-box {
		display: flex;
		align-items: flex-end;
		font-size: 24rpx;
		padding-bottom: 30rpx;
	}

	.tui-popup-img {
		height: 200rpx;
		width: 200rpx;
		border-radius: 24rpx;
		display: block;
	}

	.tui-popup-price {
		padding-left: 20rpx;
		padding-bottom: 8rpx;
	}

	.tui-amount {
		color: #ff201f;
		font-size: 36rpx;
	}

	.tui-number {
		font-size: 24rpx;
		line-height: 24rpx;
		padding-top: 12rpx;
		color: #999;
	}

	.tui-popup-scroll {
		/* height: 600rpx; */
		font-size: 26rpx;
	}

	.tui-scrollview-box {
		padding: 0 30rpx 60rpx 30rpx;
		box-sizing: border-box;
	}

	.tui-attr-title {
		padding: 10rpx 0;
		color: #333;
	}

	.tui-attr-box {
		font-size: 0;
		padding: 20rpx 0;
	}

	.tui-attr-item {
		max-width: 100%;
		min-width: 200rpx;
		height: 64rpx;
		display: -webkit-inline-flex;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #f7f7f7;
		padding: 0 26rpx;
		box-sizing: border-box;
		border-radius: 32rpx;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		font-size: 26rpx;
	}

	.tui-attr-active {
		background: #fcedea !important;
		color: #e41f19;
		font-weight: bold;
		position: relative;
	}

	.tui-attr-active::after {
		content: "";
		position: absolute;
		border: 1rpx solid #e41f19;
		width: 100%;
		height: 100%;
		border-radius: 40rpx;
		left: 0;
		top: 0;
	}

	.tui-number-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 0 30rpx 0;
		box-sizing: border-box;
	}

	/*底部选择弹层*/
	
	/* 店铺推荐 */
	.tui-padding{padding:0 20rpx;padding-bottom:20rpx;}
	.mall-list-cell{display:inline-table;width:33%;margin-bottom:10upx;}
	.mall-media-list{padding:8upx;padding-top:0;}
	.mall-media-list-logo{width:100%;height:220upx;}
	.mall-media-list-title{width:220upx;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}
	.mall-media-list-text{font-size:22upx;line-height:32upx;}
	.mall-media-list-text .price{color:#e02e24;font-weight:bold;}
	.mall-media-list-text .coupon{font-size:18upx;background-color:#F74D54;color:#FFFFFF;border-radius:10upx;padding:0 8upx;}
	.mall-media-list-text .sales{font-size:20upx;float:right;color:#9c9c9c;}
	
	/*为你推荐*/
	.tui-product-list {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 0 20upx;
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
	
	.tui-pro-price {
		padding-top: 18rpx;
	}
	
	.tui-sale-price {
		font-size: 34rpx;
		font-weight: 500;
		color: #e41f19;
	}
	
	.tui-factory-price {
		font-size: 22rpx;
		color: #a0a0a0;
		text-decoration: line-through;
		padding-left: 12rpx;
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
	.promotion{display:flex;float:right;padding-top:8upx;}
	.promotion .tui-tag-class {
		transform: scale(0.9);
		transform-origin: right center;
		line-height: 24rpx; 
		font-weight: normal;
	    font-size: 20upx;
	    padding:5upx 8upx;
	    float: right;
	}
    /*为你推荐end*/
    
    
	.tui-cells {
		/* border: 1rpx solid #e6e6e6; */
		border-radius: 4rpx;
		-webkit-box-sizing: border-box;
		        box-sizing: border-box;
		padding: 20rpx;
		position: relative;
	}
	.tui-cells::after {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		border: 1px solid #e6e6e6;
		-ms-transform-origin: 0 0;
		    transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		-ms-transform: scale(0.5);
		    transform: scale(0.5);
		left: 0;
		top: 0;
		border-radius: 8rpx;
	}
	.tui-textarea {
		height: 210rpx;
		width: 100%;
		color: #999;
		font-size: 26rpx;
		line-height: 30rpx;
        word-break:break-all;
	}
	.tui-phcolor-color {
		color: #ccc !important;
	}
	.tui-textarea-counter {
		font-size: 24rpx;
		color: #999;
		text-align: right;
		height: 40rpx;
		line-height: 40rpx;
		padding-top: 4rpx;
	}
    .tui-modal-box{width:75%;background-color:transparent !important;padding:0!important;}
    .tui-modal-custom{text-align: center}
    .tui-tips-img{width:100%;}
    .tui-modal-custom .tui-modal-but{margin-top:15upx;}
    .tui-modal-custom button{width:98%;}
</style>
