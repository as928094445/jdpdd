import Vue from 'vue'
import App from './App'
import store from './store'
import {http} from '@/utils/luch-request/index.js' // 全局挂载引入，配置相关在该index.js文件里修改

// const baseUrl = 'http://192.168.1.88:8300';
// const baseUrl = 'https://hmall.17yunlian.com';
const baseUrl = 'https://mall.chree.cn';
// console.log(store.state.isLogin);
http.setConfig((config) => {
    config.baseUrl = baseUrl;
    return config
})
// 设置请求拦截器
/* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
http.interceptor.request((config, cancel) => {
    config.header['Authkey'] = store.state.authKey;
    config.header['Alliance'] = store.state.allianceType;    
    if(store.state.FormId){
        config.header['Formid'] = store.state.FormId;
    }
    // cancel('token 不存在', config)	
    return config;
})

/* 请求之后拦截器 */
http.interceptor.response((res) => { 
    /* 对响应成功做点什么 （statusCode === 200），必须return response*/
    if (res.data.ret !== 200) {
        if(res.data.ret == 430){
            store.commit('logout');
            store.commit('tologin', 'weixin');
        }
        return Promise.reject(res)
    }
    return res
}, (res) => { 
    /*  对响应错误做点什么 */
    return res
})

Vue.prototype.$http = http
const tui = {
    toast: function(text, duration, success) {
        uni.showToast({
            title: text,
            icon: success ? 'success' : 'none',
            duration: duration || 2000
        })
    }
}
Vue.prototype.tui = tui
Vue.prototype.baseUrl = baseUrl

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
    store,
    ...App
})
app.$mount()
