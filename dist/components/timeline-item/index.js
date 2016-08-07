/*!
 * Vux v0.1.3-rc6 (https://vux.li)
 * Licensed under the MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxTimelineItem=t():e.vuxTimelineItem=t()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var s=o[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(7)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),n=i(s);t["default"]={data:function(){return{isLast:!0,isFirst:!0,headStyle:{backgroundColor:this.$parent.color}}},ready:function(){this.$parent.setChildProps()},beforeDestroy:function(){var e=this.$parent;this.$nextTick(function(){e.setChildProps()})},components:{Icon:n["default"]},computed:{tailStyle:function(){return this.isLast?{display:"none",backgroundColor:this.$parent.color}:{display:"block",backgroundColor:this.$parent.color}}}}},function(e,t){},function(e,t){e.exports="<i class={{className}}></i>"},function(e,t){e.exports="<li class=vux-timeline-item> <div :class=\" {'vux-timeline-item-head': !isFirst,'vux-timeline-item-head-first': isFirst }\" :style=headStyle> <icon v-show=isFirst type=success_no_circle class=vux-timeline-item-checked></icon> </div> <div class=vux-timeline-item-tail :style=tailStyle></div> <div class=vux-timeline-item-content> <slot></slot> </div> </li>"},function(e,t,o){var i,s;o(3),i=o(1),s=o(4),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;i=o(2),s=o(5),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}])});