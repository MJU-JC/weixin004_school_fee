(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{1158:function(t,n,e){"use strict";var i,s=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},2399:function(t,n,e){"use strict";e.r(n);var i=e("9b84"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=s.a},"62ee":function(t,n,e){"use strict";e.r(n);var i=e("1158"),s=e("2399");for(var o in s)"default"!==o&&function(t){e.d(n,t,(function(){return s[t]}))}(o);e("7ed0");var r,u=e("f0c5"),a=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"0f636917",null,!1,i["a"],r);n["default"]=a.exports},"6bfc":function(t,n,e){},"7ed0":function(t,n,e){"use strict";var i=e("6bfc"),s=e.n(i);s.a},"9b84":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("a34a")),s=o(e("f2d9"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,s,o,r){try{var u=t[o](r),a=u.value}catch(c){return void e(c)}u.done?n(a):Promise.resolve(a).then(i,s)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(i,s){var o=t.apply(n,e);function u(t){r(o,i,s,u,a,"next",t)}function a(t){r(o,i,s,u,a,"throw",t)}u(void 0)}))}}var a={data:function(){return{username:"",password:"",options:["请选择登录用户类型"],optionsValues:["","xuesheng","jiaoshi"],index:0}},onLoad:function(){var t=["请选择登录用户类型"],n=s.default.list();this.menuList=n;for(var e=0;e<this.menuList.length;e++)"是"==this.menuList[e].hasFrontLogin&&t.push(this.menuList[e].roleName);this.options=t,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(n){t.setStorageSync("loginTable",n),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var n=u(i.default.mark((function n(){var e;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.optionsValues[this.index]){n.next=3;break}return this.$utils.msg("请选择登陆用户类型"),n.abrupt("return");case 3:return n.next=5,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 5:return e=n.sent,t.setStorageSync("token",e.token),t.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),n.next=10,this.$api.session("".concat(this.optionsValues[this.index]));case 10:e=n.sent,t.setStorageSync("userid",e.data.id),t.setStorageSync("role","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 14:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value}}};n.default=a}).call(this,e("543d")["default"])},dc6b:function(t,n,e){"use strict";(function(t){e("fbf6"),e("921b");i(e("66fd"));var n=i(e("62ee"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["dc6b","common/runtime","common/vendor"]]]);