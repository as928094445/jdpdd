<script>
    export default {
        onLaunch: function() {
            console.log('App Launch')
            // #ifdef MP-WEIXIN
            const updateManager = uni.getUpdateManager();
            updateManager.onUpdateReady(function(res) {
                uni.showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    success(res) {
                        if (res.confirm) {
                            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                            updateManager.applyUpdate();
                        }
                    }
                });
            });
            // #endif
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        }
    }
</script>

<style>
    @import "./static/css/app.css";
</style>
