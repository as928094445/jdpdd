(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/divider/divider"],{"6dfb":function(t,e,r){"use strict";var a=r("a9d9"),n=r.n(a);n.a},7494:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiDivider",props:{height:{type:Number,default:100},width:{type:String,default:"100%"},dividerColor:{type:String,default:"#e5e5e5"},color:{type:String,default:"#999"},size:{type:Number,default:24},bold:{type:Boolean,default:!1},bgcolor:{type:String,default:"#fafafa"},gradual:{type:Boolean,default:!1},gradualColor:{type:Array,default:function(){return["#eee","#ccc"]}}},methods:{getBgColor:function(t,e,r){var a=r;return t&&(a="linear-gradient(to right,"+e[0]+","+e[1]+","+e[1]+","+e[0]+")"),a}}};e.default=a},"7a65":function(t,e,r){"use strict";var a;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,r=(t._self._c,t.getBgColor(t.gradual,t.gradualColor,t.dividerColor));t.$mp.data=Object.assign({},{$root:{m0:r}})},u=[]},a9d9:function(t,e,r){},b6b5:function(t,e,r){"use strict";r.r(e);var a=r("7494"),n=r.n(a);for(var u in a)"default"!==u&&function(t){r.d(e,t,(function(){return a[t]}))}(u);e["default"]=n.a},d835:function(t,e,r){"use strict";r.r(e);var a=r("7a65"),n=r("b6b5");for(var u in n)"default"!==u&&function(t){r.d(e,t,(function(){return n[t]}))}(u);r("6dfb");var o,i=r("f0c5"),d=Object(i["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=d.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/divider/divider-create-component',
    {
        'components/divider/divider-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d835"))
        })
    },
    [['components/divider/divider-create-component']]
]);
