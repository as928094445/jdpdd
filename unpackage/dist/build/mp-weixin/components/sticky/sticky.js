(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/sticky/sticky"],{3048:function(t,e,n){"use strict";n.r(e);var i=n("89dd"),c=n("bc80");for(var u in c)"default"!==u&&function(t){n.d(e,t,(function(){return c[t]}))}(u);n("5283");var o,r=n("f0c5"),a=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=a.exports},5283:function(t,e,n){"use strict";var i=n("8992"),c=n.n(i);c.a},8992:function(t,e,n){},"89dd":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var c=function(){var t=this,e=t.$createElement;t._self._c},u=[]},b7c6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiSticky",props:{scrollTop:{type:Number},stickyTop:{type:Number,default:0},stickyHeight:{type:String,default:"auto"},bgColor:{type:String,default:"none"}},watch:{scrollTop:function(t,e){this.updateStickyChange()}},onReady:function(){this.updateScrollChange()},data:function(){return{timer:null,top:0,height:0,isFixed:!1}},methods:{updateStickyChange:function(){var t=this.top,e=this.height,n=this.scrollTop,i=this.stickyTop;this.isFixed=n+i>=t&&n+i<t+e},updateScrollChange:function(){var e=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((function(){var n=".tui-sticky-class",i=t.createSelectorQuery().in(e);i.select(n).boundingClientRect((function(t){t&&(e.top=t.top+(e.scrollTop||0),e.height=t.height)})).exec()}),0)}}};e.default=n}).call(this,n("543d")["default"])},bc80:function(t,e,n){"use strict";n.r(e);var i=n("b7c6"),c=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sticky/sticky-create-component',
    {
        'components/sticky/sticky-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3048"))
        })
    },
    [['components/sticky/sticky-create-component']]
]);