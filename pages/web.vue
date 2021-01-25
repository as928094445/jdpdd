<template>
    <view>
        <web-view :webview-styles="webviewStyles" :src="url"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                },
                url:null
            }
        },
        onLoad(op) {
            if(op.url){
                this.url = unescape(op.url)
            }else{
                // 没有链接返回上一页
                uni.navigateBack()
            }
        },
        onNavigationBarButtonTap() {
        	uni.switchTab({
        		url: "./mall"
        	});
        }
    }
</script>

<style>

</style>