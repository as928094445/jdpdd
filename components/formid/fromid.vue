<template>    
    <!-- #ifdef APP-PLUS -->
    <view>
        <slot></slot>
    </view>
    <!-- #endif -->
    
    <!-- #ifdef MP-WEIXIN -->    
    <button class="formid-btn" hover-class="hover" @click="getMsg">
        <slot></slot>
    </button>
    <!-- #endif -->
    
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
	export default {
        computed:{
           ...mapState(['FormId'])
        },
		name: "FormID",
		methods: {
            ...mapMutations(['setFormId']),
            getMsg:function(){
                // #ifdef MP-WEIXIN                
                uni.requestSubscribeMessage({
                    tmplIds: ['odBHr1CVRoA0UOd0fIRYWaFyxeIYDt8hRW5N50V7Yf8'],
                    success (res) {
                        console.log('Subscribe OK')
                    }
                })
                // #endif
            }
		}
	}
</script>
<style>
    .formid-btn{padding:0upx!important;line-height:unset;text-align: unset;font-size:unset;border-radius:unset;}
    .formid-btn::after{border:none;}
</style>
