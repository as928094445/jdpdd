import Vue from 'vue'
import Vuex from 'vuex'
import { http } from '@/utils/luch-request/index.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        pid:0, //推荐人id
        forcedLogin: false, //是否需要强制登录
        isLogin: false,
        isUser:false,
        authKey:"",
        userInfo: {'nickName':'未登录',avatarUrl:"/static/images/my/mine_def_touxiang_3x.png"},
        hotSearch:[],
        history:[] ,//历史搜索
        allianceType:'jd',
        allianceName:'京东',
        elites:[],
        FormId:false,
        isApprove:false,
        myAsset:{}
    },
    mutations: {
        setAsset(state, item) {
            state.myAsset = item || {};
        },
        setApprove(state, item) {
            state.isApprove = item || false;
        },
        setFormId(state, item) {
            state.FormId = item || 0;
        },
        setElites(state, elites) {
            state.elites = elites || 0;
        },
        setPid(state, pid) {
            state.pid = pid || 0;
        },
        setHotSearch(state, hot) {
            state.hotSearch = hot || [];
        },
        setAllianceType(state, op){
            state.allianceType = op || 'jd';
            state.allianceName = (op=='pdd')?'拼多多':'京东';
        },
        setHistory(state, val) {
            if(typeof val=='object'){
                state.history = val
                return;
            }
            if(val=='deldeldeldel'){
                state.history = []
                return;
            }
            if(state.history.length>=10){
                state.history.pop()
            }
            //删除重复数据
            for (var i = 0; i < state.history.length; i++) {
                if (state.history[i] == val) {
                    state.history.splice(i, 1)
                }
            }
            state.history.unshift(val);
        },
        authKey(state, info) {            
            state.authKey = info.authKey || '';
            state.userInfo = info.user || state.userInfo;
            state.isUser = info.isUser;
            state.isLogin = true;
        },
        login(state, userInfo) {
            state.userInfo = userInfo || state.userInfo;
            state.isLogin = true;
            state.isUser = true;
        },
        logout(state) {
            state.userInfo = "";
            state.isLogin = false;
            uni.removeStorageSync('authKey');
        },
        tologin(state,provider) {
            // #ifdef MP            
            uni.checkSession({
                success: (res) => {                   
                    let reData = uni.getStorageSync('authKey');
                    if(reData){
                        store.commit('authKey',reData)
                    }else{
                        store.commit('loginFun',provider)
                    }
                },
                fail: () =>{
                    store.commit('loginFun',provider)
                }
            })
            // #endif
        },
        loginFun(state,provider){
            uni.login({
                provider: provider,
                // #ifdef MP-ALIPAY
                scopes: 'auth_user',  //支付宝小程序需设置授权类型
                // #endif
                success: (res) => {                       
                    http.post('/login', {'code': res.code,'pid':state.pid} ).then(res => {
                        if(res.data.ret==200){						
                            let reData = res.data.data;
                            uni.setStorageSync('authKey', reData);
                            store.commit('authKey',reData)
                            if(reData.isUser==false){                                
                                store.commit('getUserInfo')
                            }else{
                                store.commit('login',reData.user)  
                            }
                        }                        	
                    }).catch(err => {
                        console.log(err);
                    })   
                },
                fail: (err) => {
                    console.log('login fail:', err);
                }
            });
        },
        getUserInfo(state) {
        	uni.getUserInfo({
        		provider: 'weixin',
        		success: (result) => {
                    // store.commit('login',result.userInfo)                   
                    http.post('/upuser', {'userinfo':result.rawData} ).then(res => {
                    	if(res.data.ret==200){						
                    		let reData = res.data.data;
                            store.commit('login',reData)  
                    	}                        	
                    }).catch(err => {
                    	console.log(err);
                    })
        		},
        		fail: (error) => {
        			uni.getSetting({
        				success: (res) => {
                            if(res.errMsg == 'getSetting:ok'){
                                this.loginButShow = true;
                            }else{
                                uni.showModal({
                                	title: '授权失败',
                                	content: 'Hello uni-app需要获取您的用户信息，请在设置界面打开相关权限',
                                	success: (res) => {
                                		if (res.confirm) {
                                			uni.openSetting()
                                		}
                                	}
                                })
                            }
        				}
        			})
        		}
        	});
        }
    }
})

export default store
