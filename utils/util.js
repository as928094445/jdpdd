import { http } from '@/utils/luch-request/index.js'

// 获取新的token
const getNewTokenServe = () => {
  return http.get('/api/jwttoken/create')
}

const utils = {	
	getSearch: function(data,callback){
		if(!data)data = {}
		let _this = this;
		http.post('/search', data).then(res => {
			if(res.data.ret==200){						
				let reData = res.data.data;
				callback(reData);
			}			
		}).catch(err => {
			console.log(err);
		})
	},
	getThemeList:function(data,callback){
		if(!data)data = {}
		let _this = this;
		http.post('/themes', data).then(res => {
			if(res.data.ret==200){						
				let reData = res.data.data;
				callback(reData);
			}
			
		}).catch(err => {
			console.log(err);
		})
	},
    searchModal:function(){
        uni.getClipboardData({
            success: function (res) {
                let data = res.data;
                if(!res.data)return;
                uni.showModal({
                    confirmText:'搜索商品',
                    title: '是否搜索一下商品',
                    content: data,
                    success: function (res) {
                        if (res.confirm) {
                            uni.navigateTo({
                            	url: './productList?searchKey=' + data
                            })
                        } else if (res.cancel) {
                            console.log('用户点击取消');
                        }
                    }
                });
            }
        });        
    },
    savePoster:function(_this,posterUrl){
        if(!posterUrl)return;
        // let _this = this;
        _this.posterSaveStatus = true;
        uni.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
                uni.downloadFile({
                    url: posterUrl,
                    success: (res) => {
                        if (res.statusCode === 200) {
                            uni.saveImageToPhotosAlbum({
                                filePath: res.tempFilePath,
                                success: function () {
                                    uni.showModal({
                                        title: '提示',
                                        showCancel:false,
                                        confirmText:'知道了',
                                        content: '图片已保存到相册，赶紧去晒一下吧~',
                                        success: function (res) {
                                            if (res.confirm) {
                                                _this.posterSaveStatus = false;
                                            }
                                        },
                                        fail(){ 
                                            _this.posterSaveStatus = false;
                                        }
                                    });  
                                }
                            });                                    
                        }
                    },
                    fail(){
                        _this.posterSaveStatus = false;
                    }
                });                        
            },
            fail(){   
                _this.posterSaveStatus = false;
                uni.showModal({
                    title: '提示',
                    showCancel:false,
                    confirmText:'知道了',
                    content: '请在小程序设置中打开保存相册权限',
                    success: function (res) {
                        if (res.confirm) {
                            uni.openSetting({
                                success(res) {
                                    console.log(res.authSetting)
                                }
                            });
                        }
                    }
                });                                   
            }
        })            
    },
    isNullOrEmpty: function(value) {
    	//是否为空
    	return (value === null || value === '' || value === undefined) ? true : false;
    },
    trim: function(value) {
    	//去空格
    	return value.replace(/(^\s*)|(\s*$)/g, "");
    },
    isMobile: function(value) {
    	//是否为手机号
    	return /^(?:13\d|14\d|15\d|16\d|17\d|18\d|19\d)\d{5}(\d{3}|\*{3})$/.test(value);
    },
    isFloat: function(value) {
    	//金额，只允许保留两位小数
    	return /^([0-9]*[.]?[0-9])[0-9]{0,1}$/.test(value);
    },
    isNum: function(value) {
    	//是否全为数字
    	return /^[0-9]+$/.test(value);
    },
    checkPwd: function(value) {
    	//密码为8~20位数字和字母组合
    	return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(value);
    },
    formatNum: function(num) {
    	//格式化手机号码
    	if (utils.isMobile(num)) {
    		num = num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    	}
    	return num;
    },
    rmoney: function(money) {
    	//金额格式化
    	return parseFloat(money).toFixed(2).toString().split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(
    		/\,$/, '').split('').reverse().join('');
    },
    formatDate: function(formatStr, fdate) {
    	//日期格式化
    	if (fdate) {
    		if (~fdate.indexOf('.')) {
    			fdate = fdate.substring(0, fdate.indexOf('.'));
    		}
    		fdate = fdate.toString().replace('T', ' ').replace(/\-/g, '/');
    		var fTime, fStr = 'ymdhis';
    		if (!formatStr)
    			formatStr = "y-m-d h:i:s";
    		if (fdate)
    			fTime = new Date(fdate);
    		else
    			fTime = new Date();
    		var month = fTime.getMonth() + 1;
    		var day = fTime.getDate();
    		var hours = fTime.getHours();
    		var minu = fTime.getMinutes();
    		var second = fTime.getSeconds();
    		month = month < 10 ? '0' + month : month;
    		day = day < 10 ? '0' + day : day;
    		hours = hours < 10 ? ('0' + hours) : hours;
    		minu = minu < 10 ? '0' + minu : minu;
    		second = second < 10 ? '0' + second : second;
    		var formatArr = [
    			fTime.getFullYear().toString(),
    			month.toString(),
    			day.toString(),
    			hours.toString(),
    			minu.toString(),
    			second.toString()
    		]
    		for (var i = 0; i < formatArr.length; i++) {
    			formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
    		}
    		return formatStr;
    	} else {
    		return "";
    	}
    }
}

module.exports = {
	getSearch:utils.getSearch,
	getThemes:utils.getThemeList,
    searchModal:utils.searchModal,
    savePoster:utils.savePoster,
    isNullOrEmpty: utils.isNullOrEmpty,
    trim: utils.trim,
    isMobile: utils.isMobile,
    isFloat: utils.isFloat,
    isNum: utils.isNum,
    checkPwd: utils.checkPwd,
    formatNum:utils.formatNum,
    rmoney: utils.rmoney,
    formatDate: utils.formatDate
}
