/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 781:
/***/ ((module) => {

"use strict";
/*!
 * ApexCharts v4.1.0
 * (c) 2018-2024 ApexCharts
 * Released under the MIT License.
 */
function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=Array(e);i<e;i++)a[i]=t[i];return a}function e(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,x(a.key),a)}}function s(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=m(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var a=0,s=function(){};return{s:s,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,o=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return n=t.done,t},e:function(t){o=!0,r=t},f:function(){try{n||null==i.return||i.return()}finally{if(o)throw r}}}}function n(t){var i=c();return function(){var a,s=l(t);if(i){var r=l(this).constructor;a=Reflect.construct(s,arguments,r)}else a=s.apply(this,arguments);return function(t,i){if(i&&("object"==typeof i||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return e(t)}(this,a)}}function o(t,e,i){return(e=x(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}function c(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(c=function(){return!!t})()}function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var a,s,r,n,o=[],l=!0,h=!1;try{if(r=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;l=!1}else for(;!(l=(a=r.call(i)).done)&&(o.push(a.value),o.length!==e);l=!0);}catch(t){h=!0,s=t}finally{try{if(!l&&null!=i.return&&(n=i.return(),Object(n)!==n))return}finally{if(h)throw s}}return o}}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,e||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(e,i){if(e){if("string"==typeof e)return t(e,i);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(e,i):void 0}}var v=function(){function t(){i(this,t)}return s(t,[{key:"shadeRGBColor",value:function(t,e){var i=e.split(","),a=t<0?0:255,s=t<0?-1*t:t,r=parseInt(i[0].slice(4),10),n=parseInt(i[1],10),o=parseInt(i[2],10);return"rgb("+(Math.round((a-r)*s)+r)+","+(Math.round((a-n)*s)+n)+","+(Math.round((a-o)*s)+o)+")"}},{key:"shadeHexColor",value:function(t,e){var i=parseInt(e.slice(1),16),a=t<0?0:255,s=t<0?-1*t:t,r=i>>16,n=i>>8&255,o=255&i;return"#"+(16777216+65536*(Math.round((a-r)*s)+r)+256*(Math.round((a-n)*s)+n)+(Math.round((a-o)*s)+o)).toString(16).slice(1)}},{key:"shadeColor",value:function(e,i){return t.isColorHex(i)?this.shadeHexColor(e,i):this.shadeRGBColor(e,i)}}],[{key:"bind",value:function(t,e){return function(){return t.apply(e,arguments)}}},{key:"isObject",value:function(t){return t&&"object"===b(t)&&!Array.isArray(t)&&null!=t}},{key:"is",value:function(t,e){return Object.prototype.toString.call(e)==="[object "+t+"]"}},{key:"listToArray",value:function(t){var e,i=[];for(e=0;e<t.length;e++)i[e]=t[e];return i}},{key:"extend",value:function(t,e){var i=this;"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var a=arguments[i];if(null!=a)for(var s in a)a.hasOwnProperty(s)&&(e[s]=a[s])}return e});var a=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach((function(s){i.isObject(e[s])&&s in t?a[s]=i.extend(t[s],e[s]):Object.assign(a,o({},s,e[s]))})),a}},{key:"extendArray",value:function(e,i){var a=[];return e.map((function(e){a.push(t.extend(i,e))})),e=a}},{key:"monthMod",value:function(t){return t%12}},{key:"clone",value:function(e){if(t.is("Array",e)){for(var i=[],a=0;a<e.length;a++)i[a]=this.clone(e[a]);return i}if(t.is("Null",e))return null;if(t.is("Date",e))return e;if("object"===b(e)){var s={};for(var r in e)e.hasOwnProperty(r)&&(s[r]=this.clone(e[r]));return s}return e}},{key:"log10",value:function(t){return Math.log(t)/Math.LN10}},{key:"roundToBase10",value:function(t){return Math.pow(10,Math.floor(Math.log10(t)))}},{key:"roundToBase",value:function(t,e){return Math.pow(e,Math.floor(Math.log(t)/Math.log(e)))}},{key:"parseNumber",value:function(t){return null===t?t:parseFloat(t)}},{key:"stripNumber",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number.isInteger(t)?t:parseFloat(t.toPrecision(e))}},{key:"randomId",value:function(){return(Math.random()+1).toString(36).substring(4)}},{key:"noExponents",value:function(t){var e=String(t).split(/[eE]/);if(1===e.length)return e[0];var i="",a=t<0?"-":"",s=e[0].replace(".",""),r=Number(e[1])+1;if(r<0){for(i=a+"0.";r++;)i+="0";return i+s.replace(/^-/,"")}for(r-=s.length;r--;)i+="0";return s+i}},{key:"elementExists",value:function(t){return!(!t||!t.isConnected)}},{key:"getDimensions",value:function(t){var e=getComputedStyle(t,null),i=t.clientHeight,a=t.clientWidth;return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),[a-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),i]}},{key:"getBoundingClientRect",value:function(t){var e=t.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:t.clientWidth,height:t.clientHeight,x:e.left,y:e.top}}},{key:"getLargestStringFromArr",value:function(t){return t.reduce((function(t,e){return Array.isArray(e)&&(e=e.reduce((function(t,e){return t.length>e.length?t:e}))),t.length>e.length?t:e}),0)}},{key:"hexToRgba",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#999999",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;"#"!==t.substring(0,1)&&(t="#999999");var i=t.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var a=0;a<i.length;a++)i[a]=parseInt(1===i[a].length?i[a]+i[a]:i[a],16);return void 0!==e&&i.push(e),"rgba("+i.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(t){return parseFloat(t.replace(/^.*,(.+)\)/,"$1"))}},{key:"rgb2hex",value:function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)}},{key:"getPolygonPos",value:function(t,e){for(var i=[],a=2*Math.PI/e,s=0;s<e;s++){var r={};r.x=t*Math.sin(s*a),r.y=-t*Math.cos(s*a),i.push(r)}return i}},{key:"polarToCartesian",value:function(t,e,i,a){var s=(a-90)*Math.PI/180;return{x:t+i*Math.cos(s),y:e+i*Math.sin(s)}}},{key:"escapeString",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",i=t.toString().slice();return i=i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi,e)}},{key:"negToZero",value:function(t){return t<0?0:t}},{key:"moveIndexInArray",value:function(t,e,i){if(i>=t.length)for(var a=i-t.length+1;a--;)t.push(void 0);return t.splice(i,0,t.splice(e,1)[0]),t}},{key:"extractNumber",value:function(t){return parseFloat(t.replace(/[^\d.]*/g,""))}},{key:"findAncestor",value:function(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}},{key:"setELstyles",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style.key=e[i])}},{key:"preciseAddition",value:function(t,e){var i=(String(t).split(".")[1]||"").length,a=(String(e).split(".")[1]||"").length,s=Math.pow(10,Math.max(i,a));return(Math.round(t*s)+Math.round(e*s))/s}},{key:"isNumber",value:function(t){return!isNaN(t)&&parseFloat(Number(t))===t&&!isNaN(parseInt(t,10))}},{key:"isFloat",value:function(t){return Number(t)===t&&t%1!=0}},{key:"isMsEdge",value:function(){var t=window.navigator.userAgent,e=t.indexOf("Edge/");return e>0&&parseInt(t.substring(e+5,t.indexOf(".",e)),10)}},{key:"getGCD",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,a=Math.pow(10,i-Math.floor(Math.log10(Math.max(t,e))));for(t=Math.round(Math.abs(t)*a),e=Math.round(Math.abs(e)*a);e;){var s=e;e=t%e,t=s}return t/a}},{key:"getPrimeFactors",value:function(t){for(var e=[],i=2;t>=2;)t%i==0?(e.push(i),t/=i):i++;return e}},{key:"mod",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,a=Math.pow(10,i-Math.floor(Math.log10(Math.max(t,e))));return(t=Math.round(Math.abs(t)*a))%(e=Math.round(Math.abs(e)*a))/a}}]),t}(),y=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"animateLine",value:function(t,e,i,a){t.attr(e).animate(a).attr(i)}},{key:"animateMarker",value:function(t,e,i,a){t.attr({opacity:0}).animate(e).attr({opacity:1}).after((function(){a()}))}},{key:"animateRect",value:function(t,e,i,a,s){t.attr(e).animate(a).attr(i).after((function(){return s()}))}},{key:"animatePathsGradually",value:function(t){var e=t.el,i=t.realIndex,a=t.j,s=t.fill,r=t.pathFrom,n=t.pathTo,o=t.speed,l=t.delay,h=this.w,c=0;h.config.chart.animations.animateGradually.enabled&&(c=h.config.chart.animations.animateGradually.delay),h.config.chart.animations.dynamicAnimation.enabled&&h.globals.dataChanged&&"bar"!==h.config.chart.type&&(c=0),this.morphSVG(e,i,a,"line"!==h.config.chart.type||h.globals.comboCharts?s:"stroke",r,n,o,l*c)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach((function(t){var e=t.el;e.classList.remove("apexcharts-element-hidden"),e.classList.add("apexcharts-hidden-element-shown")}))}},{key:"animationCompleted",value:function(t){var e=this.w;e.globals.animationEnded||(e.globals.animationEnded=!0,this.showDelayedElements(),"function"==typeof e.config.chart.events.animationEnd&&e.config.chart.events.animationEnd(this.ctx,{el:t,w:e}))}},{key:"morphSVG",value:function(t,e,i,a,s,r,n,o){var l=this,h=this.w;s||(s=t.attr("pathFrom")),r||(r=t.attr("pathTo"));var c=function(t){return"radar"===h.config.chart.type&&(n=1),"M 0 ".concat(h.globals.gridHeight)};(!s||s.indexOf("undefined")>-1||s.indexOf("NaN")>-1)&&(s=c()),(!r.trim()||r.indexOf("undefined")>-1||r.indexOf("NaN")>-1)&&(r=c()),h.globals.shouldAnimate||(n=1),t.plot(s).animate(1,o).plot(s).animate(n,o).plot(r).after((function(){v.isNumber(i)?i===h.globals.series[h.globals.maxValsInArrayIndex].length-2&&h.globals.shouldAnimate&&l.animationCompleted(t):"none"!==a&&h.globals.shouldAnimate&&(!h.globals.comboCharts&&e===h.globals.series.length-1||h.globals.comboCharts)&&l.animationCompleted(t),l.showDelayedElements()}))}}]),t}();const w={},k=[];function A(t,e){if(Array.isArray(t))for(const i of t)A(i,e);else if("object"!=typeof t)S(Object.getOwnPropertyNames(e)),w[t]=Object.assign(w[t]||{},e);else for(const e in t)A(e,t[e])}function C(t){return w[t]||{}}function S(t){k.push(...t)}function L(t,e){let i;const a=t.length,s=[];for(i=0;i<a;i++)s.push(e(t[i]));return s}function M(t){return t%360*Math.PI/180}function P(t){return t.charAt(0).toUpperCase()+t.slice(1)}function I(t,e,i,a){return null!=e&&null!=i||(a=a||t.bbox(),null==e?e=a.width/a.height*i:null==i&&(i=a.height/a.width*e)),{width:e,height:i}}function T(t,e){const i=t.origin;let a=null!=t.ox?t.ox:null!=t.originX?t.originX:"center",s=null!=t.oy?t.oy:null!=t.originY?t.originY:"center";null!=i&&([a,s]=Array.isArray(i)?i:"object"==typeof i?[i.x,i.y]:[i,i]);const r="string"==typeof a,n="string"==typeof s;if(r||n){const{height:t,width:i,x:o,y:l}=e.bbox();r&&(a=a.includes("left")?o:a.includes("right")?o+i:o+i/2),n&&(s=s.includes("top")?l:s.includes("bottom")?l+t:l+t/2)}return[a,s]}const z=new Set(["desc","metadata","title"]),X=t=>z.has(t.nodeName),R=(t,e,i={})=>{const a={...e};for(const t in a)a[t].valueOf()===i[t]&&delete a[t];Object.keys(a).length?t.node.setAttribute("data-svgjs",JSON.stringify(a)):(t.node.removeAttribute("data-svgjs"),t.node.removeAttribute("svgjs:data"))},E="http://www.w3.org/2000/svg",Y="http://www.w3.org/2000/xmlns/",H="http://www.w3.org/1999/xlink",O={window:"undefined"==typeof window?null:window,document:"undefined"==typeof document?null:document};function F(){return O.window}let D=class{};const _={},N="___SYMBOL___ROOT___";function W(t,e=E){return O.document.createElementNS(e,t)}function B(t,e=!1){if(t instanceof D)return t;if("object"==typeof t)return U(t);if(null==t)return new _[N];if("string"==typeof t&&"<"!==t.charAt(0))return U(O.document.querySelector(t));const i=e?O.document.createElement("div"):W("svg");return i.innerHTML=t,t=U(i.firstChild),i.removeChild(i.firstChild),t}function G(t,e){return e&&(e instanceof O.window.Node||e.ownerDocument&&e instanceof e.ownerDocument.defaultView.Node)?e:W(t)}function V(t){if(!t)return null;if(t.instance instanceof D)return t.instance;if("#document-fragment"===t.nodeName)return new _.Fragment(t);let e=P(t.nodeName||"Dom");return"LinearGradient"===e||"RadialGradient"===e?e="Gradient":_[e]||(e="Dom"),new _[e](t)}let U=V;function q(t,e=t.name,i=!1){return _[e]=t,i&&(_[N]=t),S(Object.getOwnPropertyNames(t.prototype)),t}let Z=1e3;function $(t){return"Svgjs"+P(t)+Z++}function J(t){for(let e=t.children.length-1;e>=0;e--)J(t.children[e]);return t.id?(t.id=$(t.nodeName),t):t}function Q(t,e){let i,a;for(a=(t=Array.isArray(t)?t:[t]).length-1;a>=0;a--)for(i in e)t[a].prototype[i]=e[i]}function K(t){return function(...e){const i=e[e.length-1];return!i||i.constructor!==Object||i instanceof Array?t.apply(this,e):t.apply(this,e.slice(0,-1)).attr(i)}}A("Dom",{siblings:function(){return this.parent().children()},position:function(){return this.parent().index(this)},next:function(){return this.siblings()[this.position()+1]},prev:function(){return this.siblings()[this.position()-1]},forward:function(){const t=this.position();return this.parent().add(this.remove(),t+1),this},backward:function(){const t=this.position();return this.parent().add(this.remove(),t?t-1:0),this},front:function(){return this.parent().add(this.remove()),this},back:function(){return this.parent().add(this.remove(),0),this},before:function(t){(t=B(t)).remove();const e=this.position();return this.parent().add(t,e),this},after:function(t){(t=B(t)).remove();const e=this.position();return this.parent().add(t,e+1),this},insertBefore:function(t){return(t=B(t)).before(this),this},insertAfter:function(t){return(t=B(t)).after(this),this}});const tt=/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,et=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,it=/rgb\((\d+),(\d+),(\d+)\)/,at=/(#[a-z_][a-z0-9\-_]*)/i,st=/\)\s*,?\s*/,rt=/\s/g,nt=/^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i,ot=/^rgb\(/,lt=/^(\s+)?$/,ht=/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,ct=/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,dt=/[\s,]+/,ut=/[MLHVCSQTAZ]/i;function gt(t){const e=Math.round(t),i=Math.max(0,Math.min(255,e)).toString(16);return 1===i.length?"0"+i:i}function pt(t,e){for(let i=e.length;i--;)if(null==t[e[i]])return!1;return!0}function ft(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}A("Dom",{classes:function(){const t=this.attr("class");return null==t?[]:t.trim().split(dt)},hasClass:function(t){return-1!==this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){const e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter((function(e){return e!==t})).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)}}),A("Dom",{css:function(t,e){const i={};if(0===arguments.length)return this.node.style.cssText.split(/\s*;\s*/).filter((function(t){return!!t.length})).forEach((function(t){const e=t.split(/\s*:\s*/);i[e[0]]=e[1]})),i;if(arguments.length<2){if(Array.isArray(t)){for(const e of t){const t=e;i[e]=this.node.style.getPropertyValue(t)}return i}if("string"==typeof t)return this.node.style.getPropertyValue(t);if("object"==typeof t)for(const e in t)this.node.style.setProperty(e,null==t[e]||lt.test(t[e])?"":t[e])}return 2===arguments.length&&this.node.style.setProperty(t,null==e||lt.test(e)?"":e),this},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},visible:function(){return"none"!==this.css("display")}}),A("Dom",{data:function(t,e,i){if(null==t)return this.data(L(function(t,e){let i;const a=t.length,s=[];for(i=0;i<a;i++)e(t[i])&&s.push(t[i]);return s}(this.node.attributes,(t=>0===t.nodeName.indexOf("data-"))),(t=>t.nodeName.slice(5))));if(t instanceof Array){const e={};for(const i of t)e[i]=this.data(i);return e}if("object"==typeof t)for(e in t)this.data(e,t[e]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+t))}catch(e){return this.attr("data-"+t)}else this.attr("data-"+t,null===e?null:!0===i||"string"==typeof e||"number"==typeof e?e:JSON.stringify(e));return this}}),A("Dom",{remember:function(t,e){if("object"==typeof arguments[0])for(const e in t)this.remember(e,t[e]);else{if(1===arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0===arguments.length)this._memory={};else for(let t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory=this._memory||{}}});class xt{constructor(...t){this.init(...t)}static isColor(t){return t&&(t instanceof xt||this.isRgb(t)||this.test(t))}static isRgb(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b}static random(t="vibrant",e){const{random:i,round:a,sin:s,PI:r}=Math;if("vibrant"===t){const t=24*i()+57,e=38*i()+45,a=360*i();return new xt(t,e,a,"lch")}if("sine"===t){const t=a(80*s(2*r*(e=null==e?i():e)/.5+.01)+150),n=a(50*s(2*r*e/.5+4.6)+200),o=a(100*s(2*r*e/.5+2.3)+150);return new xt(t,n,o)}if("pastel"===t){const t=8*i()+86,e=17*i()+9,a=360*i();return new xt(t,e,a,"lch")}if("dark"===t){const t=10+10*i(),e=50*i()+86,a=360*i();return new xt(t,e,a,"lch")}if("rgb"===t){const t=255*i(),e=255*i(),a=255*i();return new xt(t,e,a)}if("lab"===t){const t=100*i(),e=256*i()-128,a=256*i()-128;return new xt(t,e,a,"lab")}if("grey"===t){const t=255*i();return new xt(t,t,t)}throw new Error("Unsupported random color mode")}static test(t){return"string"==typeof t&&(nt.test(t)||ot.test(t))}cmyk(){const{_a:t,_b:e,_c:i}=this.rgb(),[a,s,r]=[t,e,i].map((t=>t/255)),n=Math.min(1-a,1-s,1-r);if(1===n)return new xt(0,0,0,1,"cmyk");return new xt((1-a-n)/(1-n),(1-s-n)/(1-n),(1-r-n)/(1-n),n,"cmyk")}hsl(){const{_a:t,_b:e,_c:i}=this.rgb(),[a,s,r]=[t,e,i].map((t=>t/255)),n=Math.max(a,s,r),o=Math.min(a,s,r),l=(n+o)/2,h=n===o,c=n-o;return new xt(360*(h?0:n===a?((s-r)/c+(s<r?6:0))/6:n===s?((r-a)/c+2)/6:n===r?((a-s)/c+4)/6:0),100*(h?0:l>.5?c/(2-n-o):c/(n+o)),100*l,"hsl")}init(t=0,e=0,i=0,a=0,s="rgb"){if(t=t||0,this.space)for(const t in this.space)delete this[this.space[t]];if("number"==typeof t)s="string"==typeof a?a:s,a="string"==typeof a?0:a,Object.assign(this,{_a:t,_b:e,_c:i,_d:a,space:s});else if(t instanceof Array)this.space=e||("string"==typeof t[3]?t[3]:t[4])||"rgb",Object.assign(this,{_a:t[0],_b:t[1],_c:t[2],_d:t[3]||0});else if(t instanceof Object){const i=function(t,e){const i=pt(t,"rgb")?{_a:t.r,_b:t.g,_c:t.b,_d:0,space:"rgb"}:pt(t,"xyz")?{_a:t.x,_b:t.y,_c:t.z,_d:0,space:"xyz"}:pt(t,"hsl")?{_a:t.h,_b:t.s,_c:t.l,_d:0,space:"hsl"}:pt(t,"lab")?{_a:t.l,_b:t.a,_c:t.b,_d:0,space:"lab"}:pt(t,"lch")?{_a:t.l,_b:t.c,_c:t.h,_d:0,space:"lch"}:pt(t,"cmyk")?{_a:t.c,_b:t.m,_c:t.y,_d:t.k,space:"cmyk"}:{_a:0,_b:0,_c:0,space:"rgb"};return i.space=e||i.space,i}(t,e);Object.assign(this,i)}else if("string"==typeof t)if(ot.test(t)){const e=t.replace(rt,""),[i,a,s]=it.exec(e).slice(1,4).map((t=>parseInt(t)));Object.assign(this,{_a:i,_b:a,_c:s,_d:0,space:"rgb"})}else{if(!nt.test(t))throw Error("Unsupported string format, can't construct Color");{const e=t=>parseInt(t,16),[,i,a,s]=et.exec(function(t){return 4===t.length?["#",t.substring(1,2),t.substring(1,2),t.substring(2,3),t.substring(2,3),t.substring(3,4),t.substring(3,4)].join(""):t}(t)).map(e);Object.assign(this,{_a:i,_b:a,_c:s,_d:0,space:"rgb"})}}const{_a:r,_b:n,_c:o,_d:l}=this,h="rgb"===this.space?{r:r,g:n,b:o}:"xyz"===this.space?{x:r,y:n,z:o}:"hsl"===this.space?{h:r,s:n,l:o}:"lab"===this.space?{l:r,a:n,b:o}:"lch"===this.space?{l:r,c:n,h:o}:"cmyk"===this.space?{c:r,m:n,y:o,k:l}:{};Object.assign(this,h)}lab(){const{x:t,y:e,z:i}=this.xyz();return new xt(116*e-16,500*(t-e),200*(e-i),"lab")}lch(){const{l:t,a:e,b:i}=this.lab(),a=Math.sqrt(e**2+i**2);let s=180*Math.atan2(i,e)/Math.PI;s<0&&(s*=-1,s=360-s);return new xt(t,a,s,"lch")}rgb(){if("rgb"===this.space)return this;if("lab"===(t=this.space)||"xyz"===t||"lch"===t){let{x:t,y:e,z:i}=this;if("lab"===this.space||"lch"===this.space){let{l:a,a:s,b:r}=this;if("lch"===this.space){const{c:t,h:e}=this,i=Math.PI/180;s=t*Math.cos(i*e),r=t*Math.sin(i*e)}const n=(a+16)/116,o=s/500+n,l=n-r/200,h=16/116,c=.008856,d=7.787;t=.95047*(o**3>c?o**3:(o-h)/d),e=1*(n**3>c?n**3:(n-h)/d),i=1.08883*(l**3>c?l**3:(l-h)/d)}const a=3.2406*t+-1.5372*e+-.4986*i,s=-.9689*t+1.8758*e+.0415*i,r=.0557*t+-.204*e+1.057*i,n=Math.pow,o=.0031308,l=a>o?1.055*n(a,1/2.4)-.055:12.92*a,h=s>o?1.055*n(s,1/2.4)-.055:12.92*s,c=r>o?1.055*n(r,1/2.4)-.055:12.92*r;return new xt(255*l,255*h,255*c)}if("hsl"===this.space){let{h:t,s:e,l:i}=this;if(t/=360,e/=100,i/=100,0===e){i*=255;return new xt(i,i,i)}const a=i<.5?i*(1+e):i+e-i*e,s=2*i-a,r=255*ft(s,a,t+1/3),n=255*ft(s,a,t),o=255*ft(s,a,t-1/3);return new xt(r,n,o)}if("cmyk"===this.space){const{c:t,m:e,y:i,k:a}=this,s=255*(1-Math.min(1,t*(1-a)+a)),r=255*(1-Math.min(1,e*(1-a)+a)),n=255*(1-Math.min(1,i*(1-a)+a));return new xt(s,r,n)}return this;var t}toArray(){const{_a:t,_b:e,_c:i,_d:a,space:s}=this;return[t,e,i,a,s]}toHex(){const[t,e,i]=this._clamped().map(gt);return`#${t}${e}${i}`}toRgb(){const[t,e,i]=this._clamped();return`rgb(${t},${e},${i})`}toString(){return this.toHex()}xyz(){const{_a:t,_b:e,_c:i}=this.rgb(),[a,s,r]=[t,e,i].map((t=>t/255)),n=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92,o=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92,l=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,h=(.4124*n+.3576*o+.1805*l)/.95047,c=(.2126*n+.7152*o+.0722*l)/1,d=(.0193*n+.1192*o+.9505*l)/1.08883,u=h>.008856?Math.pow(h,1/3):7.787*h+16/116,g=c>.008856?Math.pow(c,1/3):7.787*c+16/116,p=d>.008856?Math.pow(d,1/3):7.787*d+16/116;return new xt(u,g,p,"xyz")}_clamped(){const{_a:t,_b:e,_c:i}=this.rgb(),{max:a,min:s,round:r}=Math;return[t,e,i].map((t=>a(0,s(r(t),255))))}}class bt{constructor(...t){this.init(...t)}clone(){return new bt(this)}init(t,e){const i=0,a=0,s=Array.isArray(t)?{x:t[0],y:t[1]}:"object"==typeof t?{x:t.x,y:t.y}:{x:t,y:e};return this.x=null==s.x?i:s.x,this.y=null==s.y?a:s.y,this}toArray(){return[this.x,this.y]}transform(t){return this.clone().transformO(t)}transformO(t){vt.isMatrixLike(t)||(t=new vt(t));const{x:e,y:i}=this;return this.x=t.a*e+t.c*i+t.e,this.y=t.b*e+t.d*i+t.f,this}}function mt(t,e,i){return Math.abs(e-t)<(i||1e-6)}class vt{constructor(...t){this.init(...t)}static formatTransforms(t){const e="both"===t.flip||!0===t.flip,i=t.flip&&(e||"x"===t.flip)?-1:1,a=t.flip&&(e||"y"===t.flip)?-1:1,s=t.skew&&t.skew.length?t.skew[0]:isFinite(t.skew)?t.skew:isFinite(t.skewX)?t.skewX:0,r=t.skew&&t.skew.length?t.skew[1]:isFinite(t.skew)?t.skew:isFinite(t.skewY)?t.skewY:0,n=t.scale&&t.scale.length?t.scale[0]*i:isFinite(t.scale)?t.scale*i:isFinite(t.scaleX)?t.scaleX*i:i,o=t.scale&&t.scale.length?t.scale[1]*a:isFinite(t.scale)?t.scale*a:isFinite(t.scaleY)?t.scaleY*a:a,l=t.shear||0,h=t.rotate||t.theta||0,c=new bt(t.origin||t.around||t.ox||t.originX,t.oy||t.originY),d=c.x,u=c.y,g=new bt(t.position||t.px||t.positionX||NaN,t.py||t.positionY||NaN),p=g.x,f=g.y,x=new bt(t.translate||t.tx||t.translateX,t.ty||t.translateY),b=x.x,m=x.y,v=new bt(t.relative||t.rx||t.relativeX,t.ry||t.relativeY);return{scaleX:n,scaleY:o,skewX:s,skewY:r,shear:l,theta:h,rx:v.x,ry:v.y,tx:b,ty:m,ox:d,oy:u,px:p,py:f}}static fromArray(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}static isMatrixLike(t){return null!=t.a||null!=t.b||null!=t.c||null!=t.d||null!=t.e||null!=t.f}static matrixMultiply(t,e,i){const a=t.a*e.a+t.c*e.b,s=t.b*e.a+t.d*e.b,r=t.a*e.c+t.c*e.d,n=t.b*e.c+t.d*e.d,o=t.e+t.a*e.e+t.c*e.f,l=t.f+t.b*e.e+t.d*e.f;return i.a=a,i.b=s,i.c=r,i.d=n,i.e=o,i.f=l,i}around(t,e,i){return this.clone().aroundO(t,e,i)}aroundO(t,e,i){const a=t||0,s=e||0;return this.translateO(-a,-s).lmultiplyO(i).translateO(a,s)}clone(){return new vt(this)}decompose(t=0,e=0){const i=this.a,a=this.b,s=this.c,r=this.d,n=this.e,o=this.f,l=i*r-a*s,h=l>0?1:-1,c=h*Math.sqrt(i*i+a*a),d=Math.atan2(h*a,h*i),u=180/Math.PI*d,g=Math.cos(d),p=Math.sin(d),f=(i*s+a*r)/l,x=s*c/(f*i-a)||r*c/(f*a+i);return{scaleX:c,scaleY:x,shear:f,rotate:u,translateX:n-t+t*g*c+e*(f*g*c-p*x),translateY:o-e+t*p*c+e*(f*p*c+g*x),originX:t,originY:e,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}equals(t){if(t===this)return!0;const e=new vt(t);return mt(this.a,e.a)&&mt(this.b,e.b)&&mt(this.c,e.c)&&mt(this.d,e.d)&&mt(this.e,e.e)&&mt(this.f,e.f)}flip(t,e){return this.clone().flipO(t,e)}flipO(t,e){return"x"===t?this.scaleO(-1,1,e,0):"y"===t?this.scaleO(1,-1,0,e):this.scaleO(-1,-1,t,e||t)}init(t){const e=vt.fromArray([1,0,0,1,0,0]);return t=t instanceof Gt?t.matrixify():"string"==typeof t?vt.fromArray(t.split(dt).map(parseFloat)):Array.isArray(t)?vt.fromArray(t):"object"==typeof t&&vt.isMatrixLike(t)?t:"object"==typeof t?(new vt).transform(t):6===arguments.length?vt.fromArray([].slice.call(arguments)):e,this.a=null!=t.a?t.a:e.a,this.b=null!=t.b?t.b:e.b,this.c=null!=t.c?t.c:e.c,this.d=null!=t.d?t.d:e.d,this.e=null!=t.e?t.e:e.e,this.f=null!=t.f?t.f:e.f,this}inverse(){return this.clone().inverseO()}inverseO(){const t=this.a,e=this.b,i=this.c,a=this.d,s=this.e,r=this.f,n=t*a-e*i;if(!n)throw new Error("Cannot invert "+this);const o=a/n,l=-e/n,h=-i/n,c=t/n,d=-(o*s+h*r),u=-(l*s+c*r);return this.a=o,this.b=l,this.c=h,this.d=c,this.e=d,this.f=u,this}lmultiply(t){return this.clone().lmultiplyO(t)}lmultiplyO(t){const e=t instanceof vt?t:new vt(t);return vt.matrixMultiply(e,this,this)}multiply(t){return this.clone().multiplyO(t)}multiplyO(t){const e=t instanceof vt?t:new vt(t);return vt.matrixMultiply(this,e,this)}rotate(t,e,i){return this.clone().rotateO(t,e,i)}rotateO(t,e=0,i=0){t=M(t);const a=Math.cos(t),s=Math.sin(t),{a:r,b:n,c:o,d:l,e:h,f:c}=this;return this.a=r*a-n*s,this.b=n*a+r*s,this.c=o*a-l*s,this.d=l*a+o*s,this.e=h*a-c*s+i*s-e*a+e,this.f=c*a+h*s-e*s-i*a+i,this}scale(){return this.clone().scaleO(...arguments)}scaleO(t,e=t,i=0,a=0){3===arguments.length&&(a=i,i=e,e=t);const{a:s,b:r,c:n,d:o,e:l,f:h}=this;return this.a=s*t,this.b=r*e,this.c=n*t,this.d=o*e,this.e=l*t-i*t+i,this.f=h*e-a*e+a,this}shear(t,e,i){return this.clone().shearO(t,e,i)}shearO(t,e=0,i=0){const{a:a,b:s,c:r,d:n,e:o,f:l}=this;return this.a=a+s*t,this.c=r+n*t,this.e=o+l*t-i*t,this}skew(){return this.clone().skewO(...arguments)}skewO(t,e=t,i=0,a=0){3===arguments.length&&(a=i,i=e,e=t),t=M(t),e=M(e);const s=Math.tan(t),r=Math.tan(e),{a:n,b:o,c:l,d:h,e:c,f:d}=this;return this.a=n+o*s,this.b=o+n*r,this.c=l+h*s,this.d=h+l*r,this.e=c+d*s-a*s,this.f=d+c*r-i*r,this}skewX(t,e,i){return this.skew(t,0,e,i)}skewY(t,e,i){return this.skew(0,t,e,i)}toArray(){return[this.a,this.b,this.c,this.d,this.e,this.f]}toString(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}transform(t){if(vt.isMatrixLike(t)){return new vt(t).multiplyO(this)}const e=vt.formatTransforms(t),{x:i,y:a}=new bt(e.ox,e.oy).transform(this),s=(new vt).translateO(e.rx,e.ry).lmultiplyO(this).translateO(-i,-a).scaleO(e.scaleX,e.scaleY).skewO(e.skewX,e.skewY).shearO(e.shear).rotateO(e.theta).translateO(i,a);if(isFinite(e.px)||isFinite(e.py)){const t=new bt(i,a).transform(s),r=isFinite(e.px)?e.px-t.x:0,n=isFinite(e.py)?e.py-t.y:0;s.translateO(r,n)}return s.translateO(e.tx,e.ty),s}translate(t,e){return this.clone().translateO(t,e)}translateO(t,e){return this.e+=t||0,this.f+=e||0,this}valueOf(){return{a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}}function yt(){if(!yt.nodes){const t=B().size(2,0);t.node.style.cssText=["opacity: 0","position: absolute","left: -100%","top: -100%","overflow: hidden"].join(";"),t.attr("focusable","false"),t.attr("aria-hidden","true");const e=t.path().node;yt.nodes={svg:t,path:e}}if(!yt.nodes.svg.node.parentNode){const t=O.document.body||O.document.documentElement;yt.nodes.svg.addTo(t)}return yt.nodes}function wt(t){return!(t.width||t.height||t.x||t.y)}q(vt,"Matrix");class kt{constructor(...t){this.init(...t)}addOffset(){return this.x+=O.window.pageXOffset,this.y+=O.window.pageYOffset,new kt(this)}init(t){return t="string"==typeof t?t.split(dt).map(parseFloat):Array.isArray(t)?t:"object"==typeof t?[null!=t.left?t.left:t.x,null!=t.top?t.top:t.y,t.width,t.height]:4===arguments.length?[].slice.call(arguments):[0,0,0,0],this.x=t[0]||0,this.y=t[1]||0,this.width=this.w=t[2]||0,this.height=this.h=t[3]||0,this.x2=this.x+this.w,this.y2=this.y+this.h,this.cx=this.x+this.w/2,this.cy=this.y+this.h/2,this}isNulled(){return wt(this)}merge(t){const e=Math.min(this.x,t.x),i=Math.min(this.y,t.y),a=Math.max(this.x+this.width,t.x+t.width)-e,s=Math.max(this.y+this.height,t.y+t.height)-i;return new kt(e,i,a,s)}toArray(){return[this.x,this.y,this.width,this.height]}toString(){return this.x+" "+this.y+" "+this.width+" "+this.height}transform(t){t instanceof vt||(t=new vt(t));let e=1/0,i=-1/0,a=1/0,s=-1/0;return[new bt(this.x,this.y),new bt(this.x2,this.y),new bt(this.x,this.y2),new bt(this.x2,this.y2)].forEach((function(r){r=r.transform(t),e=Math.min(e,r.x),i=Math.max(i,r.x),a=Math.min(a,r.y),s=Math.max(s,r.y)})),new kt(e,a,i-e,s-a)}}function At(t,e,i){let a;try{if(a=e(t.node),wt(a)&&((s=t.node)!==O.document&&!(O.document.documentElement.contains||function(t){for(;t.parentNode;)t=t.parentNode;return t===O.document}).call(O.document.documentElement,s)))throw new Error("Element not in the dom")}catch(e){a=i(t)}var s;return a}A({viewbox:{viewbox(t,e,i,a){return null==t?new kt(this.attr("viewBox")):this.attr("viewBox",new kt(t,e,i,a))},zoom(t,e){let{width:i,height:a}=this.attr(["width","height"]);if((i||a)&&"string"!=typeof i&&"string"!=typeof a||(i=this.node.clientWidth,a=this.node.clientHeight),!i||!a)throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");const s=this.viewbox(),r=i/s.width,n=a/s.height,o=Math.min(r,n);if(null==t)return o;let l=o/t;l===1/0&&(l=Number.MAX_SAFE_INTEGER/100),e=e||new bt(i/2/r+s.x,a/2/n+s.y);const h=new kt(s).transform(new vt({scale:l,origin:e}));return this.viewbox(h)}}}),q(kt,"Box");class Ct extends Array{constructor(t=[],...e){if(super(t,...e),"number"==typeof t)return this;this.length=0,this.push(...t)}}Q([Ct],{each(t,...e){return"function"==typeof t?this.map(((e,i,a)=>t.call(e,e,i,a))):this.map((i=>i[t](...e)))},toArray(){return Array.prototype.concat.apply([],this)}});const St=["toArray","constructor","each"];function Lt(t,e){return new Ct(L((e||O.document).querySelectorAll(t),(function(t){return V(t)})))}Ct.extend=function(t){t=t.reduce(((t,e)=>(St.includes(e)||"_"===e[0]||(e in Array.prototype&&(t["$"+e]=Array.prototype[e]),t[e]=function(...t){return this.each(e,...t)}),t)),{}),Q([Ct],t)};let Mt=0;const Pt={};function It(t){let e=t.getEventHolder();return e===O.window&&(e=Pt),e.events||(e.events={}),e.events}function Tt(t){return t.getEventTarget()}function zt(t,e,i,a,s){const r=i.bind(a||t),n=B(t),o=It(n),l=Tt(n);e=Array.isArray(e)?e:e.split(dt),i._svgjsListenerId||(i._svgjsListenerId=++Mt),e.forEach((function(t){const e=t.split(".")[0],a=t.split(".")[1]||"*";o[e]=o[e]||{},o[e][a]=o[e][a]||{},o[e][a][i._svgjsListenerId]=r,l.addEventListener(e,r,s||!1)}))}function Xt(t,e,i,a){const s=B(t),r=It(s),n=Tt(s);("function"!=typeof i||(i=i._svgjsListenerId))&&(e=Array.isArray(e)?e:(e||"").split(dt)).forEach((function(t){const e=t&&t.split(".")[0],o=t&&t.split(".")[1];let l,h;if(i)r[e]&&r[e][o||"*"]&&(n.removeEventListener(e,r[e][o||"*"][i],a||!1),delete r[e][o||"*"][i]);else if(e&&o){if(r[e]&&r[e][o]){for(h in r[e][o])Xt(n,[e,o].join("."),h);delete r[e][o]}}else if(o)for(t in r)for(l in r[t])o===l&&Xt(n,[t,o].join("."));else if(e){if(r[e]){for(l in r[e])Xt(n,[e,l].join("."));delete r[e]}}else{for(t in r)Xt(n,t);!function(t){let e=t.getEventHolder();e===O.window&&(e=Pt),e.events&&(e.events={})}(s)}}))}class Rt extends D{addEventListener(){}dispatch(t,e,i){return function(t,e,i,a){const s=Tt(t);return e instanceof O.window.Event||(e=new O.window.CustomEvent(e,{detail:i,cancelable:!0,...a})),s.dispatchEvent(e),e}(this,t,e,i)}dispatchEvent(t){const e=this.getEventHolder().events;if(!e)return!0;const i=e[t.type];for(const e in i)for(const a in i[e])i[e][a](t);return!t.defaultPrevented}fire(t,e,i){return this.dispatch(t,e,i),this}getEventHolder(){return this}getEventTarget(){return this}off(t,e,i){return Xt(this,t,e,i),this}on(t,e,i,a){return zt(this,t,e,i,a),this}removeEventListener(){}}function Et(){}q(Rt,"EventTarget");const Yt=400,Ht=">",Ot=0,Ft={"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","text-anchor":"start"};class Dt extends Array{constructor(...t){super(...t),this.init(...t)}clone(){return new this.constructor(this)}init(t){return"number"==typeof t||(this.length=0,this.push(...this.parse(t))),this}parse(t=[]){return t instanceof Array?t:t.trim().split(dt).map(parseFloat)}toArray(){return Array.prototype.concat.apply([],this)}toSet(){return new Set(this)}toString(){return this.join(" ")}valueOf(){const t=[];return t.push(...this),t}}class _t{constructor(...t){this.init(...t)}convert(t){return new _t(this.value,t)}divide(t){return t=new _t(t),new _t(this/t,this.unit||t.unit)}init(t,e){return e=Array.isArray(t)?t[1]:e,t=Array.isArray(t)?t[0]:t,this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-34e37:34e37:"string"==typeof t?(e=t.match(tt))&&(this.value=parseFloat(e[1]),"%"===e[5]?this.value/=100:"s"===e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof _t&&(this.value=t.valueOf(),this.unit=t.unit),this}minus(t){return t=new _t(t),new _t(this-t,this.unit||t.unit)}plus(t){return t=new _t(t),new _t(this+t,this.unit||t.unit)}times(t){return t=new _t(t),new _t(this*t,this.unit||t.unit)}toArray(){return[this.value,this.unit]}toJSON(){return this.toString()}toString(){return("%"===this.unit?~~(1e8*this.value)/1e6:"s"===this.unit?this.value/1e3:this.value)+this.unit}valueOf(){return this.value}}const Nt=new Set(["fill","stroke","color","bgcolor","stop-color","flood-color","lighting-color"]),Wt=[];class Bt extends Rt{constructor(t,e){super(),this.node=t,this.type=t.nodeName,e&&t!==e&&this.attr(e)}add(t,e){return(t=B(t)).removeNamespace&&this.node instanceof O.window.SVGElement&&t.removeNamespace(),null==e?this.node.appendChild(t.node):t.node!==this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this}addTo(t,e){return B(t).put(this,e)}children(){return new Ct(L(this.node.children,(function(t){return V(t)})))}clear(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this}clone(t=!0,e=!0){this.writeDataToDom();let i=this.node.cloneNode(t);return e&&(i=J(i)),new this.constructor(i)}each(t,e){const i=this.children();let a,s;for(a=0,s=i.length;a<s;a++)t.apply(i[a],[a,i]),e&&i[a].each(t,e);return this}element(t,e){return this.put(new Bt(W(t),e))}first(){return V(this.node.firstChild)}get(t){return V(this.node.childNodes[t])}getEventHolder(){return this.node}getEventTarget(){return this.node}has(t){return this.index(t)>=0}html(t,e){return this.xml(t,e,"http://www.w3.org/1999/xhtml")}id(t){return void 0!==t||this.node.id||(this.node.id=$(this.type)),this.attr("id",t)}index(t){return[].slice.call(this.node.childNodes).indexOf(t.node)}last(){return V(this.node.lastChild)}matches(t){const e=this.node,i=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector||null;return i&&i.call(e,t)}parent(t){let e=this;if(!e.node.parentNode)return null;if(e=V(e.node.parentNode),!t)return e;do{if("string"==typeof t?e.matches(t):e instanceof t)return e}while(e=V(e.node.parentNode));return e}put(t,e){return t=B(t),this.add(t,e),t}putIn(t,e){return B(t).add(this,e)}remove(){return this.parent()&&this.parent().removeElement(this),this}removeElement(t){return this.node.removeChild(t.node),this}replace(t){return t=B(t),this.node.parentNode&&this.node.parentNode.replaceChild(t.node,this.node),t}round(t=2,e=null){const i=10**t,a=this.attr(e);for(const t in a)"number"==typeof a[t]&&(a[t]=Math.round(a[t]*i)/i);return this.attr(a),this}svg(t,e){return this.xml(t,e,E)}toString(){return this.id()}words(t){return this.node.textContent=t,this}wrap(t){const e=this.parent();if(!e)return this.addTo(t);const i=e.index(this);return e.put(t,i).put(this)}writeDataToDom(){return this.each((function(){this.writeDataToDom()})),this}xml(t,e,i){if("boolean"==typeof t&&(i=e,e=t,t=null),null==t||"function"==typeof t){e=null==e||e,this.writeDataToDom();let i=this;if(null!=t){if(i=V(i.node.cloneNode(!0)),e){const e=t(i);if(i=e||i,!1===e)return""}i.each((function(){const e=t(this),i=e||this;!1===e?this.remove():e&&this!==i&&this.replace(i)}),!0)}return e?i.node.outerHTML:i.node.innerHTML}e=null!=e&&e;const a=W("wrapper",i),s=O.document.createDocumentFragment();a.innerHTML=t;for(let t=a.children.length;t--;)s.appendChild(a.firstElementChild);const r=this.parent();return e?this.replace(s)&&r:this.add(s)}}Q(Bt,{attr:function(t,e,i){if(null==t){t={},e=this.node.attributes;for(const i of e)t[i.nodeName]=ht.test(i.nodeValue)?parseFloat(i.nodeValue):i.nodeValue;return t}if(t instanceof Array)return t.reduce(((t,e)=>(t[e]=this.attr(e),t)),{});if("object"==typeof t&&t.constructor===Object)for(e in t)this.attr(e,t[e]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return null==(e=this.node.getAttribute(t))?Ft[t]:ht.test(e)?parseFloat(e):e;"number"==typeof(e=Wt.reduce(((e,i)=>i(t,e,this)),e))?e=new _t(e):Nt.has(t)&&xt.isColor(e)?e=new xt(e):e.constructor===Array&&(e=new Dt(e)),"leading"===t?this.leading&&this.leading(e):"string"==typeof i?this.node.setAttributeNS(i,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!==t&&"x"!==t||this.rebuild()}return this},find:function(t){return Lt(t,this.node)},findOne:function(t){return V(this.node.querySelector(t))}}),q(Bt,"Dom");class Gt extends Bt{constructor(t,e){super(t,e),this.dom={},this.node.instance=this,(t.hasAttribute("data-svgjs")||t.hasAttribute("svgjs:data"))&&this.setData(JSON.parse(t.getAttribute("data-svgjs"))??JSON.parse(t.getAttribute("svgjs:data"))??{})}center(t,e){return this.cx(t).cy(e)}cx(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)}cy(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)}defs(){const t=this.root();return t&&t.defs()}dmove(t,e){return this.dx(t).dy(e)}dx(t=0){return this.x(new _t(t).plus(this.x()))}dy(t=0){return this.y(new _t(t).plus(this.y()))}getEventHolder(){return this}height(t){return this.attr("height",t)}move(t,e){return this.x(t).y(e)}parents(t=this.root()){const e="string"==typeof t;e||(t=B(t));const i=new Ct;let a=this;for(;(a=a.parent())&&a.node!==O.document&&"#document-fragment"!==a.nodeName&&(i.push(a),e||a.node!==t.node)&&(!e||!a.matches(t));)if(a.node===this.root().node)return null;return i}reference(t){if(!(t=this.attr(t)))return null;const e=(t+"").match(at);return e?B(e[1]):null}root(){const t=this.parent(function(t){return _[t]}(N));return t&&t.root()}setData(t){return this.dom=t,this}size(t,e){const i=I(this,t,e);return this.width(new _t(i.width)).height(new _t(i.height))}width(t){return this.attr("width",t)}writeDataToDom(){return R(this,this.dom),super.writeDataToDom()}x(t){return this.attr("x",t)}y(t){return this.attr("y",t)}}Q(Gt,{bbox:function(){const t=At(this,(t=>t.getBBox()),(t=>{try{const e=t.clone().addTo(yt().svg).show(),i=e.node.getBBox();return e.remove(),i}catch(e){throw new Error(`Getting bbox of element "${t.node.nodeName}" is not possible: ${e.toString()}`)}}));return new kt(t)},rbox:function(t){const e=At(this,(t=>t.getBoundingClientRect()),(t=>{throw new Error(`Getting rbox of element "${t.node.nodeName}" is not possible`)})),i=new kt(e);return t?i.transform(t.screenCTM().inverseO()):i.addOffset()},inside:function(t,e){const i=this.bbox();return t>i.x&&e>i.y&&t<i.x+i.width&&e<i.y+i.height},point:function(t,e){return new bt(t,e).transformO(this.screenCTM().inverseO())},ctm:function(){return new vt(this.node.getCTM())},screenCTM:function(){try{if("function"==typeof this.isRoot&&!this.isRoot()){const t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new vt(e)}return new vt(this.node.getScreenCTM())}catch(t){return console.warn(`Cannot get CTM from SVG node ${this.node.nodeName}. Is the element rendered?`),new vt}}}),q(Gt,"Element");const jt={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"===e?t:t+"-"+e}};["fill","stroke"].forEach((function(t){const e={};let i;e[t]=function(e){if(void 0===e)return this.attr(t);if("string"==typeof e||e instanceof xt||xt.isRgb(e)||e instanceof Gt)this.attr(t,e);else for(i=jt[t].length-1;i>=0;i--)null!=e[jt[t][i]]&&this.attr(jt.prefix(t,jt[t][i]),e[jt[t][i]]);return this},A(["Element","Runner"],e)})),A(["Element","Runner"],{matrix:function(t,e,i,a,s,r){return null==t?new vt(this):this.attr("transform",new vt(t,e,i,a,s,r))},rotate:function(t,e,i){return this.transform({rotate:t,ox:e,oy:i},!0)},skew:function(t,e,i,a){return 1===arguments.length||3===arguments.length?this.transform({skew:t,ox:e,oy:i},!0):this.transform({skew:[t,e],ox:i,oy:a},!0)},shear:function(t,e,i){return this.transform({shear:t,ox:e,oy:i},!0)},scale:function(t,e,i,a){return 1===arguments.length||3===arguments.length?this.transform({scale:t,ox:e,oy:i},!0):this.transform({scale:[t,e],ox:i,oy:a},!0)},translate:function(t,e){return this.transform({translate:[t,e]},!0)},relative:function(t,e){return this.transform({relative:[t,e]},!0)},flip:function(t="both",e="center"){return-1==="xybothtrue".indexOf(t)&&(e=t,t="both"),this.transform({flip:t,origin:e},!0)},opacity:function(t){return this.attr("opacity",t)}}),A("radius",{radius:function(t,e=t){return"radialGradient"===(this._element||this).type?this.attr("r",new _t(t)):this.rx(t).ry(e)}}),A("Path",{length:function(){return this.node.getTotalLength()},pointAt:function(t){return new bt(this.node.getPointAtLength(t))}}),A(["Element","Runner"],{font:function(t,e){if("object"==typeof t){for(e in t)this.font(e,t[e]);return this}return"leading"===t?this.leading(e):"anchor"===t?this.attr("text-anchor",e):"size"===t||"family"===t||"weight"===t||"stretch"===t||"variant"===t||"style"===t?this.attr("font-"+t,e):this.attr(t,e)}});A("Element",["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","mouseenter","mouseleave","touchstart","touchmove","touchleave","touchend","touchcancel","contextmenu","wheel","pointerdown","pointermove","pointerup","pointerleave","pointercancel"].reduce((function(t,e){return t[e]=function(t){return null===t?this.off(e):this.on(e,t),this},t}),{})),A("Element",{untransform:function(){return this.attr("transform",null)},matrixify:function(){const t=(this.attr("transform")||"").split(st).slice(0,-1).map((function(t){const e=t.trim().split("(");return[e[0],e[1].split(dt).map((function(t){return parseFloat(t)}))]})).reverse().reduce((function(t,e){return"matrix"===e[0]?t.lmultiply(vt.fromArray(e[1])):t[e[0]].apply(t,e[1])}),new vt);return t},toParent:function(t,e){if(this===t)return this;if(X(this.node))return this.addTo(t,e);const i=this.screenCTM(),a=t.screenCTM().inverse();return this.addTo(t,e).untransform().transform(a.multiply(i)),this},toRoot:function(t){return this.toParent(this.root(),t)},transform:function(t,e){if(null==t||"string"==typeof t){const e=new vt(this).decompose();return null==t?e:e[t]}vt.isMatrixLike(t)||(t={...t,origin:T(t,this)});const i=new vt(!0===e?this:e||!1).transform(t);return this.attr("transform",i)}});class Vt extends Gt{flatten(){return this.each((function(){if(this instanceof Vt)return this.flatten().ungroup()})),this}ungroup(t=this.parent(),e=t.index(this)){return e=-1===e?t.children().length:e,this.each((function(i,a){return a[a.length-i-1].toParent(t,e)})),this.remove()}}q(Vt,"Container");class Ut extends Vt{constructor(t,e=t){super(G("defs",t),e)}flatten(){return this}ungroup(){return this}}q(Ut,"Defs");class qt extends Gt{}function Zt(t){return this.attr("rx",t)}function $t(t){return this.attr("ry",t)}function Jt(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())}function Qt(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())}function Kt(t){return this.attr("cx",t)}function te(t){return this.attr("cy",t)}function ee(t){return null==t?2*this.rx():this.rx(new _t(t).divide(2))}function ie(t){return null==t?2*this.ry():this.ry(new _t(t).divide(2))}q(qt,"Shape");var ae=Object.freeze({__proto__:null,cx:Kt,cy:te,height:ie,rx:Zt,ry:$t,width:ee,x:Jt,y:Qt});class se extends qt{constructor(t,e=t){super(G("ellipse",t),e)}size(t,e){const i=I(this,t,e);return this.rx(new _t(i.width).divide(2)).ry(new _t(i.height).divide(2))}}Q(se,ae),A("Container",{ellipse:K((function(t=0,e=t){return this.put(new se).size(t,e).move(0,0)}))}),q(se,"Ellipse");class re extends Bt{constructor(t=O.document.createDocumentFragment()){super(t)}xml(t,e,i){if("boolean"==typeof t&&(i=e,e=t,t=null),null==t||"function"==typeof t){const t=new Bt(W("wrapper",i));return t.add(this.node.cloneNode(!0)),t.xml(!1,i)}return super.xml(t,!1,i)}}function ne(t,e){return"radialGradient"===(this._element||this).type?this.attr({fx:new _t(t),fy:new _t(e)}):this.attr({x1:new _t(t),y1:new _t(e)})}function oe(t,e){return"radialGradient"===(this._element||this).type?this.attr({cx:new _t(t),cy:new _t(e)}):this.attr({x2:new _t(t),y2:new _t(e)})}q(re,"Fragment");var le=Object.freeze({__proto__:null,from:ne,to:oe});class he extends Vt{constructor(t,e){super(G(t+"Gradient","string"==typeof t?null:t),e)}attr(t,e,i){return"transform"===t&&(t="gradientTransform"),super.attr(t,e,i)}bbox(){return new kt}targets(){return Lt("svg [fill*="+this.id()+"]")}toString(){return this.url()}update(t){return this.clear(),"function"==typeof t&&t.call(this,this),this}url(){return"url(#"+this.id()+")"}}Q(he,le),A({Container:{gradient(...t){return this.defs().gradient(...t)}},Defs:{gradient:K((function(t,e){return this.put(new he(t)).update(e)}))}}),q(he,"Gradient");class ce extends Vt{constructor(t,e=t){super(G("pattern",t),e)}attr(t,e,i){return"transform"===t&&(t="patternTransform"),super.attr(t,e,i)}bbox(){return new kt}targets(){return Lt("svg [fill*="+this.id()+"]")}toString(){return this.url()}update(t){return this.clear(),"function"==typeof t&&t.call(this,this),this}url(){return"url(#"+this.id()+")"}}A({Container:{pattern(...t){return this.defs().pattern(...t)}},Defs:{pattern:K((function(t,e,i){return this.put(new ce).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}))}}),q(ce,"Pattern");let de=class extends qt{constructor(t,e=t){super(G("image",t),e)}load(t,e){if(!t)return this;const i=new O.window.Image;return zt(i,"load",(function(t){const a=this.parent(ce);0===this.width()&&0===this.height()&&this.size(i.width,i.height),a instanceof ce&&0===a.width()&&0===a.height()&&a.size(this.width(),this.height()),"function"==typeof e&&e.call(this,t)}),this),zt(i,"load error",(function(){Xt(i)})),this.attr("href",i.src=t,H)}};var ue;ue=function(t,e,i){return"fill"!==t&&"stroke"!==t||ct.test(e)&&(e=i.root().defs().image(e)),e instanceof de&&(e=i.root().defs().pattern(0,0,(t=>{t.add(e)}))),e},Wt.push(ue),A({Container:{image:K((function(t,e){return this.put(new de).size(0,0).load(t,e)}))}}),q(de,"Image");class ge extends Dt{bbox(){let t=-1/0,e=-1/0,i=1/0,a=1/0;return this.forEach((function(s){t=Math.max(s[0],t),e=Math.max(s[1],e),i=Math.min(s[0],i),a=Math.min(s[1],a)})),new kt(i,a,t-i,e-a)}move(t,e){const i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(let i=this.length-1;i>=0;i--)this[i]=[this[i][0]+t,this[i][1]+e];return this}parse(t=[0,0]){const e=[];(t=t instanceof Array?Array.prototype.concat.apply([],t):t.trim().split(dt).map(parseFloat)).length%2!=0&&t.pop();for(let i=0,a=t.length;i<a;i+=2)e.push([t[i],t[i+1]]);return e}size(t,e){let i;const a=this.bbox();for(i=this.length-1;i>=0;i--)a.width&&(this[i][0]=(this[i][0]-a.x)*t/a.width+a.x),a.height&&(this[i][1]=(this[i][1]-a.y)*e/a.height+a.y);return this}toLine(){return{x1:this[0][0],y1:this[0][1],x2:this[1][0],y2:this[1][1]}}toString(){const t=[];for(let e=0,i=this.length;e<i;e++)t.push(this[e].join(","));return t.join(" ")}transform(t){return this.clone().transformO(t)}transformO(t){vt.isMatrixLike(t)||(t=new vt(t));for(let e=this.length;e--;){const[i,a]=this[e];this[e][0]=t.a*i+t.c*a+t.e,this[e][1]=t.b*i+t.d*a+t.f}return this}}const pe=ge;var fe=Object.freeze({__proto__:null,MorphArray:pe,height:function(t){const e=this.bbox();return null==t?e.height:this.size(e.width,t)},width:function(t){const e=this.bbox();return null==t?e.width:this.size(t,e.height)},x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)}});let xe=class extends qt{constructor(t,e=t){super(G("line",t),e)}array(){return new ge([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])}move(t,e){return this.attr(this.array().move(t,e).toLine())}plot(t,e,i,a){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:i,y2:a}:new ge(t).toLine(),this.attr(t))}size(t,e){const i=I(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}};Q(xe,fe),A({Container:{line:K((function(...t){return xe.prototype.plot.apply(this.put(new xe),null!=t[0]?t:[0,0,0,0])}))}}),q(xe,"Line");let be=class extends Vt{constructor(t,e=t){super(G("marker",t),e)}height(t){return this.attr("markerHeight",t)}orient(t){return this.attr("orient",t)}ref(t,e){return this.attr("refX",t).attr("refY",e)}toString(){return"url(#"+this.id()+")"}update(t){return this.clear(),"function"==typeof t&&t.call(this,this),this}width(t){return this.attr("markerWidth",t)}};function me(t,e){return function(i){return null==i?this[t]:(this[t]=i,e&&e.call(this),this)}}A({Container:{marker(...t){return this.defs().marker(...t)}},Defs:{marker:K((function(t,e,i){return this.put(new be).size(t,e).ref(t/2,e/2).viewbox(0,0,t,e).attr("orient","auto").update(i)}))},marker:{marker(t,e,i,a){let s=["marker"];return"all"!==t&&s.push(t),s=s.join("-"),t=arguments[1]instanceof be?arguments[1]:this.defs().marker(e,i,a),this.attr(s,t)}}}),q(be,"Marker");const ve={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)},bezier:function(t,e,i,a){return function(s){return s<0?t>0?e/t*s:i>0?a/i*s:0:s>1?i<1?(1-a)/(1-i)*s+(a-i)/(1-i):t<1?(1-e)/(1-t)*s+(e-t)/(1-t):1:3*s*(1-s)**2*e+3*s**2*(1-s)*a+s**3}},steps:function(t,e="end"){e=e.split("-").reverse()[0];let i=t;return"none"===e?--i:"both"===e&&++i,(a,s=!1)=>{let r=Math.floor(a*t);const n=a*r%1==0;return"start"!==e&&"both"!==e||++r,s&&n&&--r,a>=0&&r<0&&(r=0),a<=1&&r>i&&(r=i),r/i}}};class ye{done(){return!1}}class we extends ye{constructor(t=Ht){super(),this.ease=ve[t]||t}step(t,e,i){return"number"!=typeof t?i<1?t:e:t+(e-t)*this.ease(i)}}class ke extends ye{constructor(t){super(),this.stepper=t}done(t){return t.done}step(t,e,i,a){return this.stepper(t,e,i,a)}}function Ae(){const t=(this._duration||500)/1e3,e=this._overshoot||0,i=Math.PI,a=Math.log(e/100+1e-10),s=-a/Math.sqrt(i*i+a*a),r=3.9/(s*t);this.d=2*s*r,this.k=r*r}Q(class extends ke{constructor(t=500,e=0){super(),this.duration(t).overshoot(e)}step(t,e,i,a){if("string"==typeof t)return t;if(a.done=i===1/0,i===1/0)return e;if(0===i)return t;i>100&&(i=16),i/=1e3;const s=a.velocity||0,r=-this.d*s-this.k*(t-e),n=t+s*i+r*i*i/2;return a.velocity=s+r*i,a.done=Math.abs(e-n)+Math.abs(s)<.002,a.done?e:n}},{duration:me("_duration",Ae),overshoot:me("_overshoot",Ae)});Q(class extends ke{constructor(t=.1,e=.01,i=0,a=1e3){super(),this.p(t).i(e).d(i).windup(a)}step(t,e,i,a){if("string"==typeof t)return t;if(a.done=i===1/0,i===1/0)return e;if(0===i)return t;const s=e-t;let r=(a.integral||0)+s*i;const n=(s-(a.error||0))/i,o=this._windup;return!1!==o&&(r=Math.max(-o,Math.min(r,o))),a.error=s,a.integral=r,a.done=Math.abs(s)<.001,a.done?e:t+(this.P*s+this.I*r+this.D*n)}},{windup:me("_windup"),p:me("P"),i:me("I"),d:me("D")});const Ce={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0},Se={M:function(t,e,i){return e.x=i.x=t[0],e.y=i.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},S:function(t,e){return e.x=t[2],e.y=t[3],["S",t[0],t[1],t[2],t[3]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},T:function(t,e){return e.x=t[0],e.y=t[1],["T",t[0],t[1]]},Z:function(t,e,i){return e.x=i.x,e.y=i.y,["Z"]},A:function(t,e){return e.x=t[5],e.y=t[6],["A",t[0],t[1],t[2],t[3],t[4],t[5],t[6]]}},Le="mlhvqtcsaz".split("");for(let t=0,e=Le.length;t<e;++t)Se[Le[t]]=function(t){return function(e,i,a){if("H"===t)e[0]=e[0]+i.x;else if("V"===t)e[0]=e[0]+i.y;else if("A"===t)e[5]=e[5]+i.x,e[6]=e[6]+i.y;else for(let t=0,a=e.length;t<a;++t)e[t]=e[t]+(t%2?i.y:i.x);return Se[t](e,i,a)}}(Le[t].toUpperCase());function Me(t){return t.segment.length&&t.segment.length-1===Ce[t.segment[0].toUpperCase()]}function Pe(t,e){t.inNumber&&Ie(t,!1);const i=ut.test(e);if(i)t.segment=[e];else{const e=t.lastCommand,i=e.toLowerCase(),a=e===i;t.segment=["m"===i?a?"l":"L":e]}return t.inSegment=!0,t.lastCommand=t.segment[0],i}function Ie(t,e){if(!t.inNumber)throw new Error("Parser Error");t.number&&t.segment.push(parseFloat(t.number)),t.inNumber=e,t.number="",t.pointSeen=!1,t.hasExponent=!1,Me(t)&&Te(t)}function Te(t){t.inSegment=!1,t.absolute&&(t.segment=function(t){const e=t.segment[0];return Se[e](t.segment.slice(1),t.p,t.p0)}(t)),t.segments.push(t.segment)}function ze(t){if(!t.segment.length)return!1;const e="A"===t.segment[0].toUpperCase(),i=t.segment.length;return e&&(4===i||5===i)}function Xe(t){return"E"===t.lastToken.toUpperCase()}const Re=new Set([" ",",","\t","\n","\r","\f"]);class Ee extends Dt{bbox(){return yt().path.setAttribute("d",this.toString()),new kt(yt.nodes.path.getBBox())}move(t,e){const i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(let i,a=this.length-1;a>=0;a--)i=this[a][0],"M"===i||"L"===i||"T"===i?(this[a][1]+=t,this[a][2]+=e):"H"===i?this[a][1]+=t:"V"===i?this[a][1]+=e:"C"===i||"S"===i||"Q"===i?(this[a][1]+=t,this[a][2]+=e,this[a][3]+=t,this[a][4]+=e,"C"===i&&(this[a][5]+=t,this[a][6]+=e)):"A"===i&&(this[a][6]+=t,this[a][7]+=e);return this}parse(t="M0 0"){return Array.isArray(t)&&(t=Array.prototype.concat.apply([],t).toString()),function(t,e=!0){let i=0,a="";const s={segment:[],inNumber:!1,number:"",lastToken:"",inSegment:!1,segments:[],pointSeen:!1,hasExponent:!1,absolute:e,p0:new bt,p:new bt};for(;s.lastToken=a,a=t.charAt(i++);)if(s.inSegment||!Pe(s,a))if("."!==a)if(isNaN(parseInt(a)))if(Re.has(a))s.inNumber&&Ie(s,!1);else if("-"!==a&&"+"!==a)if("E"!==a.toUpperCase()){if(ut.test(a)){if(s.inNumber)Ie(s,!1);else{if(!Me(s))throw new Error("parser Error");Te(s)}--i}}else s.number+=a,s.hasExponent=!0;else{if(s.inNumber&&!Xe(s)){Ie(s,!1),--i;continue}s.number+=a,s.inNumber=!0}else{if("0"===s.number||ze(s)){s.inNumber=!0,s.number=a,Ie(s,!0);continue}s.inNumber=!0,s.number+=a}else{if(s.pointSeen||s.hasExponent){Ie(s,!1),--i;continue}s.inNumber=!0,s.pointSeen=!0,s.number+=a}return s.inNumber&&Ie(s,!1),s.inSegment&&Me(s)&&Te(s),s.segments}(t)}size(t,e){const i=this.bbox();let a,s;for(i.width=0===i.width?1:i.width,i.height=0===i.height?1:i.height,a=this.length-1;a>=0;a--)s=this[a][0],"M"===s||"L"===s||"T"===s?(this[a][1]=(this[a][1]-i.x)*t/i.width+i.x,this[a][2]=(this[a][2]-i.y)*e/i.height+i.y):"H"===s?this[a][1]=(this[a][1]-i.x)*t/i.width+i.x:"V"===s?this[a][1]=(this[a][1]-i.y)*e/i.height+i.y:"C"===s||"S"===s||"Q"===s?(this[a][1]=(this[a][1]-i.x)*t/i.width+i.x,this[a][2]=(this[a][2]-i.y)*e/i.height+i.y,this[a][3]=(this[a][3]-i.x)*t/i.width+i.x,this[a][4]=(this[a][4]-i.y)*e/i.height+i.y,"C"===s&&(this[a][5]=(this[a][5]-i.x)*t/i.width+i.x,this[a][6]=(this[a][6]-i.y)*e/i.height+i.y)):"A"===s&&(this[a][1]=this[a][1]*t/i.width,this[a][2]=this[a][2]*e/i.height,this[a][6]=(this[a][6]-i.x)*t/i.width+i.x,this[a][7]=(this[a][7]-i.y)*e/i.height+i.y);return this}toString(){return function(t){let e="";for(let i=0,a=t.length;i<a;i++)e+=t[i][0],null!=t[i][1]&&(e+=t[i][1],null!=t[i][2]&&(e+=" ",e+=t[i][2],null!=t[i][3]&&(e+=" ",e+=t[i][3],e+=" ",e+=t[i][4],null!=t[i][5]&&(e+=" ",e+=t[i][5],e+=" ",e+=t[i][6],null!=t[i][7]&&(e+=" ",e+=t[i][7])))));return e+" "}(this)}}const Ye=t=>{const e=typeof t;return"number"===e?_t:"string"===e?xt.isColor(t)?xt:dt.test(t)?ut.test(t)?Ee:Dt:tt.test(t)?_t:Oe:Ne.indexOf(t.constructor)>-1?t.constructor:Array.isArray(t)?Dt:"object"===e?_e:Oe};class He{constructor(t){this._stepper=t||new we("-"),this._from=null,this._to=null,this._type=null,this._context=null,this._morphObj=null}at(t){return this._morphObj.morph(this._from,this._to,t,this._stepper,this._context)}done(){return this._context.map(this._stepper.done).reduce((function(t,e){return t&&e}),!0)}from(t){return null==t?this._from:(this._from=this._set(t),this)}stepper(t){return null==t?this._stepper:(this._stepper=t,this)}to(t){return null==t?this._to:(this._to=this._set(t),this)}type(t){return null==t?this._type:(this._type=t,this)}_set(t){this._type||this.type(Ye(t));let e=new this._type(t);return this._type===xt&&(e=this._to?e[this._to[4]]():this._from?e[this._from[4]]():e),this._type===_e&&(e=this._to?e.align(this._to):this._from?e.align(this._from):e),e=e.toConsumable(),this._morphObj=this._morphObj||new this._type,this._context=this._context||Array.apply(null,Array(e.length)).map(Object).map((function(t){return t.done=!0,t})),e}}class Oe{constructor(...t){this.init(...t)}init(t){return t=Array.isArray(t)?t[0]:t,this.value=t,this}toArray(){return[this.value]}valueOf(){return this.value}}class Fe{constructor(...t){this.init(...t)}init(t){return Array.isArray(t)&&(t={scaleX:t[0],scaleY:t[1],shear:t[2],rotate:t[3],translateX:t[4],translateY:t[5],originX:t[6],originY:t[7]}),Object.assign(this,Fe.defaults,t),this}toArray(){const t=this;return[t.scaleX,t.scaleY,t.shear,t.rotate,t.translateX,t.translateY,t.originX,t.originY]}}Fe.defaults={scaleX:1,scaleY:1,shear:0,rotate:0,translateX:0,translateY:0,originX:0,originY:0};const De=(t,e)=>t[0]<e[0]?-1:t[0]>e[0]?1:0;class _e{constructor(...t){this.init(...t)}align(t){const e=this.values;for(let i=0,a=e.length;i<a;++i){if(e[i+1]===t[i+1]){if(e[i+1]===xt&&t[i+7]!==e[i+7]){const e=t[i+7],a=new xt(this.values.splice(i+3,5))[e]().toArray();this.values.splice(i+3,0,...a)}i+=e[i+2]+2;continue}if(!t[i+1])return this;const a=(new t[i+1]).toArray(),s=e[i+2]+3;e.splice(i,s,t[i],t[i+1],t[i+2],...a),i+=e[i+2]+2}return this}init(t){if(this.values=[],Array.isArray(t))return void(this.values=t.slice());t=t||{};const e=[];for(const i in t){const a=Ye(t[i]),s=new a(t[i]).toArray();e.push([i,a,s.length,...s])}return e.sort(De),this.values=e.reduce(((t,e)=>t.concat(e)),[]),this}toArray(){return this.values}valueOf(){const t={},e=this.values;for(;e.length;){const i=e.shift(),a=e.shift(),s=e.shift(),r=e.splice(0,s);t[i]=new a(r)}return t}}const Ne=[Oe,Fe,_e];class We extends qt{constructor(t,e=t){super(G("path",t),e)}array(){return this._array||(this._array=new Ee(this.attr("d")))}clear(){return delete this._array,this}height(t){return null==t?this.bbox().height:this.size(this.bbox().width,t)}move(t,e){return this.attr("d",this.array().move(t,e))}plot(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new Ee(t))}size(t,e){const i=I(this,t,e);return this.attr("d",this.array().size(i.width,i.height))}width(t){return null==t?this.bbox().width:this.size(t,this.bbox().height)}x(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)}y(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)}}We.prototype.MorphArray=Ee,A({Container:{path:K((function(t){return this.put(new We).plot(t||new Ee)}))}}),q(We,"Path");var Be=Object.freeze({__proto__:null,array:function(){return this._array||(this._array=new ge(this.attr("points")))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new ge(t))},size:function(t,e){const i=I(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}});class Ge extends qt{constructor(t,e=t){super(G("polygon",t),e)}}A({Container:{polygon:K((function(t){return this.put(new Ge).plot(t||new ge)}))}}),Q(Ge,fe),Q(Ge,Be),q(Ge,"Polygon");class je extends qt{constructor(t,e=t){super(G("polyline",t),e)}}A({Container:{polyline:K((function(t){return this.put(new je).plot(t||new ge)}))}}),Q(je,fe),Q(je,Be),q(je,"Polyline");class Ve extends qt{constructor(t,e=t){super(G("rect",t),e)}}Q(Ve,{rx:Zt,ry:$t}),A({Container:{rect:K((function(t,e){return this.put(new Ve).size(t,e)}))}}),q(Ve,"Rect");class Ue{constructor(){this._first=null,this._last=null}first(){return this._first&&this._first.value}last(){return this._last&&this._last.value}push(t){const e=void 0!==t.next?t:{value:t,next:null,prev:null};return this._last?(e.prev=this._last,this._last.next=e,this._last=e):(this._last=e,this._first=e),e}remove(t){t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),t===this._last&&(this._last=t.prev),t===this._first&&(this._first=t.next),t.prev=null,t.next=null}shift(){const t=this._first;return t?(this._first=t.next,this._first&&(this._first.prev=null),this._last=this._first?this._last:null,t.value):null}}const qe={nextDraw:null,frames:new Ue,timeouts:new Ue,immediates:new Ue,timer:()=>O.window.performance||O.window.Date,transforms:[],frame(t){const e=qe.frames.push({run:t});return null===qe.nextDraw&&(qe.nextDraw=O.window.requestAnimationFrame(qe._draw)),e},timeout(t,e){e=e||0;const i=qe.timer().now()+e,a=qe.timeouts.push({run:t,time:i});return null===qe.nextDraw&&(qe.nextDraw=O.window.requestAnimationFrame(qe._draw)),a},immediate(t){const e=qe.immediates.push(t);return null===qe.nextDraw&&(qe.nextDraw=O.window.requestAnimationFrame(qe._draw)),e},cancelFrame(t){null!=t&&qe.frames.remove(t)},clearTimeout(t){null!=t&&qe.timeouts.remove(t)},cancelImmediate(t){null!=t&&qe.immediates.remove(t)},_draw(t){let e=null;const i=qe.timeouts.last();for(;(e=qe.timeouts.shift())&&(t>=e.time?e.run():qe.timeouts.push(e),e!==i););let a=null;const s=qe.frames.last();for(;a!==s&&(a=qe.frames.shift());)a.run(t);let r=null;for(;r=qe.immediates.shift();)r();qe.nextDraw=qe.timeouts.first()||qe.frames.first()?O.window.requestAnimationFrame(qe._draw):null}},Ze=function(t){const e=t.start,i=t.runner.duration();return{start:e,duration:i,end:e+i,runner:t.runner}},$e=function(){const t=O.window;return(t.performance||t.Date).now()};class Je extends Rt{constructor(t=$e){super(),this._timeSource=t,this.terminate()}active(){return!!this._nextFrame}finish(){return this.time(this.getEndTimeOfTimeline()+1),this.pause()}getEndTime(){const t=this.getLastRunnerInfo(),e=t?t.runner.duration():0;return(t?t.start:this._time)+e}getEndTimeOfTimeline(){const t=this._runners.map((t=>t.start+t.runner.duration()));return Math.max(0,...t)}getLastRunnerInfo(){return this.getRunnerInfoById(this._lastRunnerId)}getRunnerInfoById(t){return this._runners[this._runnerIds.indexOf(t)]||null}pause(){return this._paused=!0,this._continue()}persist(t){return null==t?this._persist:(this._persist=t,this)}play(){return this._paused=!1,this.updateTime()._continue()}reverse(t){const e=this.speed();if(null==t)return this.speed(-e);const i=Math.abs(e);return this.speed(t?-i:i)}schedule(t,e,i){if(null==t)return this._runners.map(Ze);let a=0;const s=this.getEndTime();if(e=e||0,null==i||"last"===i||"after"===i)a=s;else if("absolute"===i||"start"===i)a=e,e=0;else if("now"===i)a=this._time;else if("relative"===i){const i=this.getRunnerInfoById(t.id);i&&(a=i.start+e,e=0)}else{if("with-last"!==i)throw new Error('Invalid value for the "when" parameter');{const t=this.getLastRunnerInfo();a=t?t.start:this._time}}t.unschedule(),t.timeline(this);const r=t.persist(),n={persist:null===r?this._persist:r,start:a+e,runner:t};return this._lastRunnerId=t.id,this._runners.push(n),this._runners.sort(((t,e)=>t.start-e.start)),this._runnerIds=this._runners.map((t=>t.runner.id)),this.updateTime()._continue(),this}seek(t){return this.time(this._time+t)}source(t){return null==t?this._timeSource:(this._timeSource=t,this)}speed(t){return null==t?this._speed:(this._speed=t,this)}stop(){return this.time(0),this.pause()}time(t){return null==t?this._time:(this._time=t,this._continue(!0))}unschedule(t){const e=this._runnerIds.indexOf(t.id);return e<0||(this._runners.splice(e,1),this._runnerIds.splice(e,1),t.timeline(null)),this}updateTime(){return this.active()||(this._lastSourceTime=this._timeSource()),this}_continue(t=!1){return qe.cancelFrame(this._nextFrame),this._nextFrame=null,t?this._stepImmediate():(this._paused||(this._nextFrame=qe.frame(this._step)),this)}_stepFn(t=!1){const e=this._timeSource();let i=e-this._lastSourceTime;t&&(i=0);const a=this._speed*i+(this._time-this._lastStepTime);this._lastSourceTime=e,t||(this._time+=a,this._time=this._time<0?0:this._time),this._lastStepTime=this._time,this.fire("time",this._time);for(let t=this._runners.length;t--;){const e=this._runners[t],i=e.runner;this._time-e.start<=0&&i.reset()}let s=!1;for(let t=0,e=this._runners.length;t<e;t++){const i=this._runners[t],r=i.runner;let n=a;const o=this._time-i.start;if(o<=0){s=!0;continue}if(o<n&&(n=o),!r.active())continue;if(r.step(n).done){if(!0!==i.persist){r.duration()-r.time()+this._time+i.persist<this._time&&(r.unschedule(),--t,--e)}}else s=!0}return s&&!(this._speed<0&&0===this._time)||this._runnerIds.length&&this._speed<0&&this._time>0?this._continue():(this.pause(),this.fire("finished")),this}terminate(){this._startTime=0,this._speed=1,this._persist=0,this._nextFrame=null,this._paused=!0,this._runners=[],this._runnerIds=[],this._lastRunnerId=-1,this._time=0,this._lastSourceTime=0,this._lastStepTime=0,this._step=this._stepFn.bind(this,!1),this._stepImmediate=this._stepFn.bind(this,!0)}}A({Element:{timeline:function(t){return null==t?(this._timeline=this._timeline||new Je,this._timeline):(this._timeline=t,this)}}});class Qe extends Rt{constructor(t){super(),this.id=Qe.id++,t="function"==typeof(t=null==t?Yt:t)?new ke(t):t,this._element=null,this._timeline=null,this.done=!1,this._queue=[],this._duration="number"==typeof t&&t,this._isDeclarative=t instanceof ke,this._stepper=this._isDeclarative?t:new we,this._history={},this.enabled=!0,this._time=0,this._lastTime=0,this._reseted=!0,this.transforms=new vt,this.transformId=1,this._haveReversed=!1,this._reverse=!1,this._loopsDone=0,this._swing=!1,this._wait=0,this._times=1,this._frameId=null,this._persist=!!this._isDeclarative||null}static sanitise(t,e,i){let a=1,s=!1,r=0;return e=e??Ot,i=i||"last","object"!=typeof(t=t??Yt)||t instanceof ye||(e=t.delay??e,i=t.when??i,s=t.swing||s,a=t.times??a,r=t.wait??r,t=t.duration??Yt),{duration:t,delay:e,swing:s,times:a,wait:r,when:i}}active(t){return null==t?this.enabled:(this.enabled=t,this)}addTransform(t){return this.transforms.lmultiplyO(t),this}after(t){return this.on("finished",t)}animate(t,e,i){const a=Qe.sanitise(t,e,i),s=new Qe(a.duration);return this._timeline&&s.timeline(this._timeline),this._element&&s.element(this._element),s.loop(a).schedule(a.delay,a.when)}clearTransform(){return this.transforms=new vt,this}clearTransformsFromQueue(){this.done&&this._timeline&&this._timeline._runnerIds.includes(this.id)||(this._queue=this._queue.filter((t=>!t.isTransform)))}delay(t){return this.animate(0,t)}duration(){return this._times*(this._wait+this._duration)-this._wait}during(t){return this.queue(null,t)}ease(t){return this._stepper=new we(t),this}element(t){return null==t?this._element:(this._element=t,t._prepareRunner(),this)}finish(){return this.step(1/0)}loop(t,e,i){return"object"==typeof t&&(e=t.swing,i=t.wait,t=t.times),this._times=t||1/0,this._swing=e||!1,this._wait=i||0,!0===this._times&&(this._times=1/0),this}loops(t){const e=this._duration+this._wait;if(null==t){const t=Math.floor(this._time/e),i=(this._time-t*e)/this._duration;return Math.min(t+i,this._times)}const i=t%1,a=e*Math.floor(t)+this._duration*i;return this.time(a)}persist(t){return null==t?this._persist:(this._persist=t,this)}position(t){const e=this._time,i=this._duration,a=this._wait,s=this._times,r=this._swing,n=this._reverse;let o;if(null==t){const t=function(t){const e=r*Math.floor(t%(2*(a+i))/(a+i)),s=e&&!n||!e&&n,o=Math.pow(-1,s)*(t%(a+i))/i+s;return Math.max(Math.min(o,1),0)},l=s*(a+i)-a;return o=e<=0?Math.round(t(1e-5)):e<l?t(e):Math.round(t(l-1e-5)),o}const l=Math.floor(this.loops()),h=r&&l%2==0;return o=l+(h&&!n||n&&h?t:1-t),this.loops(o)}progress(t){return null==t?Math.min(1,this._time/this.duration()):this.time(t*this.duration())}queue(t,e,i,a){this._queue.push({initialiser:t||Et,runner:e||Et,retarget:i,isTransform:a,initialised:!1,finished:!1});return this.timeline()&&this.timeline()._continue(),this}reset(){return this._reseted||(this.time(0),this._reseted=!0),this}reverse(t){return this._reverse=null==t?!this._reverse:t,this}schedule(t,e,i){if(t instanceof Je||(i=e,e=t,t=this.timeline()),!t)throw Error("Runner cannot be scheduled without timeline");return t.schedule(this,e,i),this}step(t){if(!this.enabled)return this;t=null==t?16:t,this._time+=t;const e=this.position(),i=this._lastPosition!==e&&this._time>=0;this._lastPosition=e;const a=this.duration(),s=this._lastTime<=0&&this._time>0,r=this._lastTime<a&&this._time>=a;this._lastTime=this._time,s&&this.fire("start",this);const n=this._isDeclarative;this.done=!n&&!r&&this._time>=a,this._reseted=!1;let o=!1;return(i||n)&&(this._initialise(i),this.transforms=new vt,o=this._run(n?t:e),this.fire("step",this)),this.done=this.done||o&&n,r&&this.fire("finished",this),this}time(t){if(null==t)return this._time;const e=t-this._time;return this.step(e),this}timeline(t){return void 0===t?this._timeline:(this._timeline=t,this)}unschedule(){const t=this.timeline();return t&&t.unschedule(this),this}_initialise(t){if(t||this._isDeclarative)for(let e=0,i=this._queue.length;e<i;++e){const i=this._queue[e],a=this._isDeclarative||!i.initialised&&t;t=!i.finished,a&&t&&(i.initialiser.call(this),i.initialised=!0)}}_rememberMorpher(t,e){if(this._history[t]={morpher:e,caller:this._queue[this._queue.length-1]},this._isDeclarative){const t=this.timeline();t&&t.play()}}_run(t){let e=!0;for(let i=0,a=this._queue.length;i<a;++i){const a=this._queue[i],s=a.runner.call(this,t);a.finished=a.finished||!0===s,e=e&&a.finished}return e}_tryRetarget(t,e,i){if(this._history[t]){if(!this._history[t].caller.initialised){const e=this._queue.indexOf(this._history[t].caller);return this._queue.splice(e,1),!1}this._history[t].caller.retarget?this._history[t].caller.retarget.call(this,e,i):this._history[t].morpher.to(e),this._history[t].caller.finished=!1;const a=this.timeline();return a&&a.play(),!0}return!1}}Qe.id=0;class Ke{constructor(t=new vt,e=-1,i=!0){this.transforms=t,this.id=e,this.done=i}clearTransformsFromQueue(){}}Q([Qe,Ke],{mergeWith(t){return new Ke(t.transforms.lmultiply(this.transforms),t.id)}});const ti=(t,e)=>t.lmultiplyO(e),ei=t=>t.transforms;function ii(){const t=this._transformationRunners.runners.map(ei).reduce(ti,new vt);this.transform(t),this._transformationRunners.merge(),1===this._transformationRunners.length()&&(this._frameId=null)}class ai{constructor(){this.runners=[],this.ids=[]}add(t){if(this.runners.includes(t))return;const e=t.id+1;return this.runners.push(t),this.ids.push(e),this}clearBefore(t){const e=this.ids.indexOf(t+1)||1;return this.ids.splice(0,e,0),this.runners.splice(0,e,new Ke).forEach((t=>t.clearTransformsFromQueue())),this}edit(t,e){const i=this.ids.indexOf(t+1);return this.ids.splice(i,1,t+1),this.runners.splice(i,1,e),this}getByID(t){return this.runners[this.ids.indexOf(t+1)]}length(){return this.ids.length}merge(){let t=null;for(let e=0;e<this.runners.length;++e){const i=this.runners[e];if(t&&i.done&&t.done&&(!i._timeline||!i._timeline._runnerIds.includes(i.id))&&(!t._timeline||!t._timeline._runnerIds.includes(t.id))){this.remove(i.id);const a=i.mergeWith(t);this.edit(t.id,a),t=a,--e}else t=i}return this}remove(t){const e=this.ids.indexOf(t+1);return this.ids.splice(e,1),this.runners.splice(e,1),this}}A({Element:{animate(t,e,i){const a=Qe.sanitise(t,e,i),s=this.timeline();return new Qe(a.duration).loop(a).element(this).timeline(s.play()).schedule(a.delay,a.when)},delay(t,e){return this.animate(0,t,e)},_clearTransformRunnersBefore(t){this._transformationRunners.clearBefore(t.id)},_currentTransform(t){return this._transformationRunners.runners.filter((e=>e.id<=t.id)).map(ei).reduce(ti,new vt)},_addRunner(t){this._transformationRunners.add(t),qe.cancelImmediate(this._frameId),this._frameId=qe.immediate(ii.bind(this))},_prepareRunner(){null==this._frameId&&(this._transformationRunners=(new ai).add(new Ke(new vt(this))))}}});Q(Qe,{attr(t,e){return this.styleAttr("attr",t,e)},css(t,e){return this.styleAttr("css",t,e)},styleAttr(t,e,i){if("string"==typeof e)return this.styleAttr(t,{[e]:i});let a=e;if(this._tryRetarget(t,a))return this;let s=new He(this._stepper).to(a),r=Object.keys(a);return this.queue((function(){s=s.from(this.element()[t](r))}),(function(e){return this.element()[t](s.at(e).valueOf()),s.done()}),(function(e){const i=Object.keys(e),n=(o=r,i.filter((t=>!o.includes(t))));var o;if(n.length){const e=this.element()[t](n),i=new _e(s.from()).valueOf();Object.assign(i,e),s.from(i)}const l=new _e(s.to()).valueOf();Object.assign(l,e),s.to(l),r=i,a=e})),this._rememberMorpher(t,s),this},zoom(t,e){if(this._tryRetarget("zoom",t,e))return this;let i=new He(this._stepper).to(new _t(t));return this.queue((function(){i=i.from(this.element().zoom())}),(function(t){return this.element().zoom(i.at(t),e),i.done()}),(function(t,a){e=a,i.to(t)})),this._rememberMorpher("zoom",i),this},transform(t,e,i){if(e=t.relative||e,this._isDeclarative&&!e&&this._tryRetarget("transform",t))return this;const a=vt.isMatrixLike(t);i=null!=t.affine?t.affine:null!=i?i:!a;const s=new He(this._stepper).type(i?Fe:vt);let r,n,o,l,h;return this.queue((function(){n=n||this.element(),r=r||T(t,n),h=new vt(e?void 0:n),n._addRunner(this),e||n._clearTransformRunnersBefore(this)}),(function(c){e||this.clearTransform();const{x:d,y:u}=new bt(r).transform(n._currentTransform(this));let g=new vt({...t,origin:[d,u]}),p=this._isDeclarative&&o?o:h;if(i){g=g.decompose(d,u),p=p.decompose(d,u);const t=g.rotate,e=p.rotate,i=[t-360,t,t+360],a=i.map((t=>Math.abs(t-e))),s=Math.min(...a),r=a.indexOf(s);g.rotate=i[r]}e&&(a||(g.rotate=t.rotate||0),this._isDeclarative&&l&&(p.rotate=l)),s.from(p),s.to(g);const f=s.at(c);return l=f.rotate,o=new vt(f),this.addTransform(o),n._addRunner(this),s.done()}),(function(e){(e.origin||"center").toString()!==(t.origin||"center").toString()&&(r=T(e,n)),t={...e,origin:r}}),!0),this._isDeclarative&&this._rememberMorpher("transform",s),this},x(t){return this._queueNumber("x",t)},y(t){return this._queueNumber("y",t)},ax(t){return this._queueNumber("ax",t)},ay(t){return this._queueNumber("ay",t)},dx(t=0){return this._queueNumberDelta("x",t)},dy(t=0){return this._queueNumberDelta("y",t)},dmove(t,e){return this.dx(t).dy(e)},_queueNumberDelta(t,e){if(e=new _t(e),this._tryRetarget(t,e))return this;const i=new He(this._stepper).to(e);let a=null;return this.queue((function(){a=this.element()[t](),i.from(a),i.to(a+e)}),(function(e){return this.element()[t](i.at(e)),i.done()}),(function(t){i.to(a+new _t(t))})),this._rememberMorpher(t,i),this},_queueObject(t,e){if(this._tryRetarget(t,e))return this;const i=new He(this._stepper).to(e);return this.queue((function(){i.from(this.element()[t]())}),(function(e){return this.element()[t](i.at(e)),i.done()})),this._rememberMorpher(t,i),this},_queueNumber(t,e){return this._queueObject(t,new _t(e))},cx(t){return this._queueNumber("cx",t)},cy(t){return this._queueNumber("cy",t)},move(t,e){return this.x(t).y(e)},amove(t,e){return this.ax(t).ay(e)},center(t,e){return this.cx(t).cy(e)},size(t,e){let i;return t&&e||(i=this._element.bbox()),t||(t=i.width/i.height*e),e||(e=i.height/i.width*t),this.width(t).height(e)},width(t){return this._queueNumber("width",t)},height(t){return this._queueNumber("height",t)},plot(t,e,i,a){if(4===arguments.length)return this.plot([t,e,i,a]);if(this._tryRetarget("plot",t))return this;const s=new He(this._stepper).type(this._element.MorphArray).to(t);return this.queue((function(){s.from(this._element.array())}),(function(t){return this._element.plot(s.at(t)),s.done()})),this._rememberMorpher("plot",s),this},leading(t){return this._queueNumber("leading",t)},viewbox(t,e,i,a){return this._queueObject("viewbox",new kt(t,e,i,a))},update(t){return"object"!=typeof t?this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]}):(null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",t.offset),this)}}),Q(Qe,{rx:Zt,ry:$t,from:ne,to:oe}),q(Qe,"Runner");class si extends Vt{constructor(t,e=t){super(G("svg",t),e),this.namespace()}defs(){return this.isRoot()?V(this.node.querySelector("defs"))||this.put(new Ut):this.root().defs()}isRoot(){return!this.node.parentNode||!(this.node.parentNode instanceof O.window.SVGElement)&&"#document-fragment"!==this.node.parentNode.nodeName}namespace(){return this.isRoot()?this.attr({xmlns:E,version:"1.1"}).attr("xmlns:xlink",H,Y):this.root().namespace()}removeNamespace(){return this.attr({xmlns:null,version:null}).attr("xmlns:xlink",null,Y).attr("xmlns:svgjs",null,Y)}root(){return this.isRoot()?this:super.root()}}A({Container:{nested:K((function(){return this.put(new si)}))}}),q(si,"Svg",!0);let ri=class extends Vt{constructor(t,e=t){super(G("symbol",t),e)}};A({Container:{symbol:K((function(){return this.put(new ri)}))}}),q(ri,"Symbol");var ni=Object.freeze({__proto__:null,amove:function(t,e){return this.ax(t).ay(e)},ax:function(t){return this.attr("x",t)},ay:function(t){return this.attr("y",t)},build:function(t){return this._build=!!t,this},center:function(t,e,i=this.bbox()){return this.cx(t,i).cy(e,i)},cx:function(t,e=this.bbox()){return null==t?e.cx:this.attr("x",this.attr("x")+t-e.cx)},cy:function(t,e=this.bbox()){return null==t?e.cy:this.attr("y",this.attr("y")+t-e.cy)},length:function(){return this.node.getComputedTextLength()},move:function(t,e,i=this.bbox()){return this.x(t,i).y(e,i)},plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(O.document.createTextNode(t)),this},x:function(t,e=this.bbox()){return null==t?e.x:this.attr("x",this.attr("x")+t-e.x)},y:function(t,e=this.bbox()){return null==t?e.y:this.attr("y",this.attr("y")+t-e.y)}});class oi extends qt{constructor(t,e=t){super(G("text",t),e),this.dom.leading=this.dom.leading??new _t(1.3),this._rebuild=!0,this._build=!1}leading(t){return null==t?this.dom.leading:(this.dom.leading=new _t(t),this.rebuild())}rebuild(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){const t=this;let e=0;const i=this.dom.leading;this.each((function(a){if(X(this.node))return;const s=O.window.getComputedStyle(this.node).getPropertyValue("font-size"),r=i*new _t(s);this.dom.newLined&&(this.attr("x",t.attr("x")),"\n"===this.text()?e+=r:(this.attr("dy",a?r+e:0),e=0))})),this.fire("rebuild")}return this}setData(t){return this.dom=t,this.dom.leading=new _t(t.leading||1.3),this}writeDataToDom(){return R(this,this.dom,{leading:1.3}),this}text(t){if(void 0===t){const e=this.node.childNodes;let i=0;t="";for(let a=0,s=e.length;a<s;++a)"textPath"===e[a].nodeName||X(e[a])?0===a&&(i=a+1):(a!==i&&3!==e[a].nodeType&&!0===V(e[a]).dom.newLined&&(t+="\n"),t+=e[a].textContent);return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else for(let e=0,i=(t=(t+"").split("\n")).length;e<i;e++)this.newLine(t[e]);return this.build(!1).rebuild()}}Q(oi,ni),A({Container:{text:K((function(t=""){return this.put(new oi).text(t)})),plain:K((function(t=""){return this.put(new oi).plain(t)}))}}),q(oi,"Text");class li extends qt{constructor(t,e=t){super(G("tspan",t),e),this._build=!1}dx(t){return this.attr("dx",t)}dy(t){return this.attr("dy",t)}newLine(){this.dom.newLined=!0;const t=this.parent();if(!(t instanceof oi))return this;const e=t.index(this),i=O.window.getComputedStyle(this.node).getPropertyValue("font-size"),a=t.dom.leading*new _t(i);return this.dy(e?a:0).attr("x",t.x())}text(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?(this.clear().build(!0),t.call(this,this),this.build(!1)):this.plain(t),this)}}Q(li,ni),A({Tspan:{tspan:K((function(t=""){const e=new li;return this._build||this.clear(),this.put(e).text(t)}))},Text:{newLine:function(t=""){return this.tspan(t).newLine()}}}),q(li,"Tspan");class hi extends qt{constructor(t,e=t){super(G("circle",t),e)}radius(t){return this.attr("r",t)}rx(t){return this.attr("r",t)}ry(t){return this.rx(t)}size(t){return this.radius(new _t(t).divide(2))}}Q(hi,{x:Jt,y:Qt,cx:Kt,cy:te,width:ee,height:ie}),A({Container:{circle:K((function(t=0){return this.put(new hi).size(t).move(0,0)}))}}),q(hi,"Circle");class ci extends Vt{constructor(t,e=t){super(G("clipPath",t),e)}remove(){return this.targets().forEach((function(t){t.unclip()})),super.remove()}targets(){return Lt("svg [clip-path*="+this.id()+"]")}}A({Container:{clip:K((function(){return this.defs().put(new ci)}))},Element:{clipper(){return this.reference("clip-path")},clipWith(t){const e=t instanceof ci?t:this.parent().clip().add(t);return this.attr("clip-path","url(#"+e.id()+")")},unclip(){return this.attr("clip-path",null)}}}),q(ci,"ClipPath");class di extends Gt{constructor(t,e=t){super(G("foreignObject",t),e)}}A({Container:{foreignObject:K((function(t,e){return this.put(new di).size(t,e)}))}}),q(di,"ForeignObject");var ui=Object.freeze({__proto__:null,dmove:function(t,e){return this.children().forEach((i=>{let a;try{a=i.node instanceof F().SVGSVGElement?new kt(i.attr(["x","y","width","height"])):i.bbox()}catch(t){return}const s=new vt(i),r=s.translate(t,e).transform(s.inverse()),n=new bt(a.x,a.y).transform(r);i.move(n.x,n.y)})),this},dx:function(t){return this.dmove(t,0)},dy:function(t){return this.dmove(0,t)},height:function(t,e=this.bbox()){return null==t?e.height:this.size(e.width,t,e)},move:function(t=0,e=0,i=this.bbox()){const a=t-i.x,s=e-i.y;return this.dmove(a,s)},size:function(t,e,i=this.bbox()){const a=I(this,t,e,i),s=a.width/i.width,r=a.height/i.height;return this.children().forEach((t=>{const e=new bt(i).transform(new vt(t).inverse());t.scale(s,r,e.x,e.y)})),this},width:function(t,e=this.bbox()){return null==t?e.width:this.size(t,e.height,e)},x:function(t,e=this.bbox()){return null==t?e.x:this.move(t,e.y,e)},y:function(t,e=this.bbox()){return null==t?e.y:this.move(e.x,t,e)}});class gi extends Vt{constructor(t,e=t){super(G("g",t),e)}}Q(gi,ui),A({Container:{group:K((function(){return this.put(new gi)}))}}),q(gi,"G");class pi extends Vt{constructor(t,e=t){super(G("a",t),e)}target(t){return this.attr("target",t)}to(t){return this.attr("href",t,H)}}Q(pi,ui),A({Container:{link:K((function(t){return this.put(new pi).to(t)}))},Element:{unlink(){const t=this.linker();if(!t)return this;const e=t.parent();if(!e)return this.remove();const i=e.index(t);return e.add(this,i),t.remove(),this},linkTo(t){let e=this.linker();return e||(e=new pi,this.wrap(e)),"function"==typeof t?t.call(e,e):e.to(t),this},linker(){const t=this.parent();return t&&"a"===t.node.nodeName.toLowerCase()?t:null}}}),q(pi,"A");class fi extends Vt{constructor(t,e=t){super(G("mask",t),e)}remove(){return this.targets().forEach((function(t){t.unmask()})),super.remove()}targets(){return Lt("svg [mask*="+this.id()+"]")}}A({Container:{mask:K((function(){return this.defs().put(new fi)}))},Element:{masker(){return this.reference("mask")},maskWith(t){const e=t instanceof fi?t:this.parent().mask().add(t);return this.attr("mask","url(#"+e.id()+")")},unmask(){return this.attr("mask",null)}}}),q(fi,"Mask");class xi extends Gt{constructor(t,e=t){super(G("stop",t),e)}update(t){return("number"==typeof t||t instanceof _t)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new _t(t.offset)),this}}A({Gradient:{stop:function(t,e,i){return this.put(new xi).update(t,e,i)}}}),q(xi,"Stop");class bi extends Gt{constructor(t,e=t){super(G("style",t),e)}addText(t=""){return this.node.textContent+=t,this}font(t,e,i={}){return this.rule("@font-face",{fontFamily:t,src:e,...i})}rule(t,e){return this.addText(function(t,e){if(!t)return"";if(!e)return t;let i=t+"{";for(const t in e)i+=t.replace(/([A-Z])/g,(function(t,e){return"-"+e.toLowerCase()}))+":"+e[t]+";";return i+="}",i}(t,e))}}A("Dom",{style(t,e){return this.put(new bi).rule(t,e)},fontface(t,e,i){return this.put(new bi).font(t,e,i)}}),q(bi,"Style");class mi extends oi{constructor(t,e=t){super(G("textPath",t),e)}array(){const t=this.track();return t?t.array():null}plot(t){const e=this.track();let i=null;return e&&(i=e.plot(t)),null==t?i:this}track(){return this.reference("href")}}A({Container:{textPath:K((function(t,e){return t instanceof oi||(t=this.text(t)),t.path(e)}))},Text:{path:K((function(t,e=!0){const i=new mi;let a;if(t instanceof We||(t=this.defs().path(t)),i.attr("href","#"+t,H),e)for(;a=this.node.firstChild;)i.node.appendChild(a);return this.put(i)})),textPath(){return this.findOne("textPath")}},Path:{text:K((function(t){return t instanceof oi||(t=(new oi).addTo(this.parent()).text(t)),t.path(this)})),targets(){return Lt("svg textPath").filter((t=>(t.attr("href")||"").includes(this.id())))}}}),mi.prototype.MorphArray=Ee,q(mi,"TextPath");class vi extends qt{constructor(t,e=t){super(G("use",t),e)}use(t,e){return this.attr("href",(e||"")+"#"+t,H)}}A({Container:{use:K((function(t,e){return this.put(new vi).use(t,e)}))}}),q(vi,"Use");const yi=B;Q([si,ri,de,ce,be],C("viewbox")),Q([xe,je,Ge,We],C("marker")),Q(oi,C("Text")),Q(We,C("Path")),Q(Ut,C("Defs")),Q([oi,li],C("Tspan")),Q([Ve,se,he,Qe],C("radius")),Q(Rt,C("EventTarget")),Q(Bt,C("Dom")),Q(Gt,C("Element")),Q(qt,C("Shape")),Q([Vt,re],C("Container")),Q(he,C("Gradient")),Q(Qe,C("Runner")),Ct.extend([...new Set(k)]),function(t=[]){Ne.push(...[].concat(t))}([_t,xt,kt,vt,Dt,ge,Ee,bt]),Q(Ne,{to(t){return(new He).type(this.constructor).from(this.toArray()).to(t)},fromArray(t){return this.init(t),this},toConsumable(){return this.toArray()},morph(t,e,i,a,s){return this.fromArray(t.map((function(t,r){return a.step(t,e[r],i,s[r],s)})))}});class wi extends Gt{constructor(t){super(G("filter",t),t),this.$source="SourceGraphic",this.$sourceAlpha="SourceAlpha",this.$background="BackgroundImage",this.$backgroundAlpha="BackgroundAlpha",this.$fill="FillPaint",this.$stroke="StrokePaint",this.$autoSetIn=!0}put(t,e){return!(t=super.put(t,e)).attr("in")&&this.$autoSetIn&&t.attr("in",this.$source),t.attr("result")||t.attr("result",t.id()),t}remove(){return this.targets().each("unfilter"),super.remove()}targets(){return Lt('svg [filter*="'+this.id()+'"]')}toString(){return"url(#"+this.id()+")"}}class ki extends Gt{constructor(t,e){super(t,e),this.result(this.id())}in(t){if(null==t){const t=this.attr("in");return this.parent()&&this.parent().find(`[result="${t}"]`)[0]||t}return this.attr("in",t)}result(t){return this.attr("result",t)}toString(){return this.result()}}const Ai=t=>function(...e){for(let i=t.length;i--;)null!=e[i]&&this.attr(t[i],e[i])},Ci={blend:Ai(["in","in2","mode"]),colorMatrix:Ai(["type","values"]),composite:Ai(["in","in2","operator"]),convolveMatrix:function(t){t=new Dt(t).toString(),this.attr({order:Math.sqrt(t.split(" ").length),kernelMatrix:t})},diffuseLighting:Ai(["surfaceScale","lightingColor","diffuseConstant","kernelUnitLength"]),displacementMap:Ai(["in","in2","scale","xChannelSelector","yChannelSelector"]),dropShadow:Ai(["in","dx","dy","stdDeviation"]),flood:Ai(["flood-color","flood-opacity"]),gaussianBlur:function(t=0,e=t){this.attr("stdDeviation",t+" "+e)},image:function(t){this.attr("href",t,H)},morphology:Ai(["operator","radius"]),offset:Ai(["dx","dy"]),specularLighting:Ai(["surfaceScale","lightingColor","diffuseConstant","specularExponent","kernelUnitLength"]),tile:Ai([]),turbulence:Ai(["baseFrequency","numOctaves","seed","stitchTiles","type"])};["blend","colorMatrix","componentTransfer","composite","convolveMatrix","diffuseLighting","displacementMap","dropShadow","flood","gaussianBlur","image","merge","morphology","offset","specularLighting","tile","turbulence"].forEach((t=>{const e=P(t),i=Ci[t];wi[e+"Effect"]=class extends ki{constructor(t){super(G("fe"+e,t),t)}update(t){return i.apply(this,t),this}},wi.prototype[t]=K((function(t,...i){const a=new wi[e+"Effect"];return null==t?this.put(a):("function"==typeof t?t.call(a,a):i.unshift(t),this.put(a).update(i))}))})),Q(wi,{merge(t){const e=this.put(new wi.MergeEffect);if("function"==typeof t)return t.call(e,e),e;return(t instanceof Array?t:[...arguments]).forEach((t=>{t instanceof wi.MergeNode?e.put(t):e.mergeNode(t)})),e},componentTransfer(t={}){const e=this.put(new wi.ComponentTransferEffect);if("function"==typeof t)return t.call(e,e),e;if(!(t.r||t.g||t.b||t.a)){t={r:t,g:t,b:t,a:t}}for(const i in t)e.add(new(wi["Func"+i.toUpperCase()])(t[i]));return e}});["distantLight","pointLight","spotLight","mergeNode","FuncR","FuncG","FuncB","FuncA"].forEach((t=>{const e=P(t);wi[e]=class extends ki{constructor(t){super(G("fe"+e,t),t)}}}));["funcR","funcG","funcB","funcA"].forEach((function(t){const e=wi[P(t)],i=K((function(){return this.put(new e)}));wi.ComponentTransferEffect.prototype[t]=i}));["distantLight","pointLight","spotLight"].forEach((t=>{const e=wi[P(t)],i=K((function(){return this.put(new e)}));wi.DiffuseLightingEffect.prototype[t]=i,wi.SpecularLightingEffect.prototype[t]=i})),Q(wi.MergeEffect,{mergeNode(t){return this.put(new wi.MergeNode).attr("in",t)}}),Q(Ut,{filter:function(t){const e=this.put(new wi);return"function"==typeof t&&t.call(e,e),e}}),Q(Vt,{filter:function(t){return this.defs().filter(t)}}),Q(Gt,{filterWith:function(t){const e=t instanceof wi?t:this.defs().filter(t);return this.attr("filter",e)},unfilter:function(t){return this.attr("filter",null)},filterer(){return this.reference("filter")}});const Si={blend:function(t,e){return this.parent()&&this.parent().blend(this,t,e)},colorMatrix:function(t,e){return this.parent()&&this.parent().colorMatrix(t,e).in(this)},componentTransfer:function(t){return this.parent()&&this.parent().componentTransfer(t).in(this)},composite:function(t,e){return this.parent()&&this.parent().composite(this,t,e)},convolveMatrix:function(t){return this.parent()&&this.parent().convolveMatrix(t).in(this)},diffuseLighting:function(t,e,i,a){return this.parent()&&this.parent().diffuseLighting(t,i,a).in(this)},displacementMap:function(t,e,i,a){return this.parent()&&this.parent().displacementMap(this,t,e,i,a)},dropShadow:function(t,e,i){return this.parent()&&this.parent().dropShadow(this,t,e,i).in(this)},flood:function(t,e){return this.parent()&&this.parent().flood(t,e)},gaussianBlur:function(t,e){return this.parent()&&this.parent().gaussianBlur(t,e).in(this)},image:function(t){return this.parent()&&this.parent().image(t)},merge:function(t){return t=t instanceof Array?t:[...t],this.parent()&&this.parent().merge(this,...t)},morphology:function(t,e){return this.parent()&&this.parent().morphology(t,e).in(this)},offset:function(t,e){return this.parent()&&this.parent().offset(t,e).in(this)},specularLighting:function(t,e,i,a,s){return this.parent()&&this.parent().specularLighting(t,i,a,s).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(t,e,i,a,s){return this.parent()&&this.parent().turbulence(t,e,i,a,s).in(this)}};Q(ki,Si),Q(wi.MergeEffect,{in:function(t){return t instanceof wi.MergeNode?this.add(t,0):this.add((new wi.MergeNode).in(t),0),this}}),Q([wi.CompositeEffect,wi.BlendEffect,wi.DisplacementMapEffect],{in2:function(t){if(null==t){const t=this.attr("in2");return this.parent()&&this.parent().find(`[result="${t}"]`)[0]||t}return this.attr("in2",t)}}),wi.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]};var Li=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"getDefaultFilter",value:function(t,e){var i=this.w;t.unfilter(!0),(new wi).size("120%","180%","-5%","-40%"),i.config.chart.dropShadow.enabled&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"applyFilter",value:function(t,e,i){var a,s=this,r=this.w;if(t.unfilter(!0),"none"!==i){var n,o,l=r.config.chart.dropShadow,h="lighten"===i?2:.3;if(t.filterWith((function(t){t.colorMatrix({type:"matrix",values:"\n          ".concat(h," 0 0 0 0\n          0 ").concat(h," 0 0 0\n          0 0 ").concat(h," 0 0\n          0 0 0 1 0\n        "),in:"SourceGraphic",result:"brightness"}),l.enabled&&s.addShadow(t,e,l,"brightness")})),!l.noUserSpaceOnUse)null===(n=t.filterer())||void 0===n||null===(o=n.node)||void 0===o||o.setAttribute("filterUnits","userSpaceOnUse");this._scaleFilterSize(null===(a=t.filterer())||void 0===a?void 0:a.node)}else this.getDefaultFilter(t,e)}},{key:"addShadow",value:function(t,e,i,a){var s,r=this.w,n=i.blur,o=i.top,l=i.left,h=i.color,c=i.opacity;if(h=Array.isArray(h)?h[e]:h,(null===(s=r.config.chart.dropShadow.enabledOnSeries)||void 0===s?void 0:s.length)>0&&-1===r.config.chart.dropShadow.enabledOnSeries.indexOf(e))return t;t.offset({in:a,dx:l,dy:o,result:"offset"}),t.gaussianBlur({in:"offset",stdDeviation:n,result:"blur"}),t.flood({"flood-color":h,"flood-opacity":c,result:"flood"}),t.composite({in:"flood",in2:"blur",operator:"in",result:"shadow"}),t.merge(["shadow",a])}},{key:"dropShadow",value:function(t,e){var i,a,s,r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.w;if(t.unfilter(!0),v.isMsEdge()&&"radialBar"===o.config.chart.type)return t;if((null===(i=o.config.chart.dropShadow.enabledOnSeries)||void 0===i?void 0:i.length)>0&&-1===(null===(s=o.config.chart.dropShadow.enabledOnSeries)||void 0===s?void 0:s.indexOf(n)))return t;return t.filterWith((function(t){r.addShadow(t,n,e,"SourceGraphic")})),e.noUserSpaceOnUse||t.filterer().node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(null===(a=t.filterer())||void 0===a?void 0:a.node),t}},{key:"setSelectionFilter",value:function(t,e,i){var a=this.w;if(void 0!==a.globals.selectedDataPoints[e]&&a.globals.selectedDataPoints[e].indexOf(i)>-1){t.node.setAttribute("selected",!0);var s=a.config.states.active.filter;"none"!==s&&this.applyFilter(t,e,s.type)}}},{key:"_scaleFilterSize",value:function(t){if(t){!function(e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}({width:"200%",height:"200%",x:"-50%",y:"-50%"})}}}]),t}(),Mi=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"roundPathCorners",value:function(t,e){function i(t,e,i){var s=e.x-t.x,r=e.y-t.y,n=Math.sqrt(s*s+r*r);return a(t,e,Math.min(1,i/n))}function a(t,e,i){return{x:t.x+(e.x-t.x)*i,y:t.y+(e.y-t.y)*i}}function s(t,e){t.length>2&&(t[t.length-2]=e.x,t[t.length-1]=e.y)}function r(t){return{x:parseFloat(t[t.length-2]),y:parseFloat(t[t.length-1])}}t.indexOf("NaN")>-1&&(t="");var n=t.split(/[,\s]/).reduce((function(t,e){var i=e.match("([a-zA-Z])(.+)");return i?(t.push(i[1]),t.push(i[2])):t.push(e),t}),[]).reduce((function(t,e){return parseFloat(e)==e&&t.length?t[t.length-1].push(e):t.push([e]),t}),[]),o=[];if(n.length>1){var l=r(n[0]),h=null;"Z"==n[n.length-1][0]&&n[0].length>2&&(h=["L",l.x,l.y],n[n.length-1]=h),o.push(n[0]);for(var c=1;c<n.length;c++){var d=o[o.length-1],u=n[c],g=u==h?n[1]:n[c+1];if(g&&d&&d.length>2&&"L"==u[0]&&g.length>2&&"L"==g[0]){var p,f,x=r(d),b=r(u),m=r(g);p=i(b,x,e),f=i(b,m,e),s(u,p),u.origPoint=b,o.push(u);var v=a(p,b,.5),y=a(b,f,.5),w=["C",v.x,v.y,y.x,y.y,f.x,f.y];w.origPoint=b,o.push(w)}else o.push(u)}if(h){var k=r(o[o.length-1]);o.push(["Z"]),s(o[0],k)}}else o=n;return o.reduce((function(t,e){return t+e.join(" ")+" "}),"")}},{key:"drawLine",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#a8a8a8",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"butt";return this.w.globals.dom.Paper.line().attr({x1:t,y1:e,x2:i,y2:a,stroke:s,"stroke-dasharray":r,"stroke-width":n,"stroke-linecap":o})}},{key:"drawRect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#fefefe",n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,c=this.w.globals.dom.Paper.rect();return c.attr({x:t,y:e,width:i>0?i:0,height:a>0?a:0,rx:s,ry:s,opacity:n,"stroke-width":null!==o?o:0,stroke:null!==l?l:"none","stroke-dasharray":h}),c.node.setAttribute("fill",r),c}},{key:"drawPolygon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e1e1e1",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";return this.w.globals.dom.Paper.polygon(t).attr({fill:a,stroke:e,"stroke-width":i})}},{key:"drawCircle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t<0&&(t=0);var i=this.w.globals.dom.Paper.circle(2*t);return null!==e&&i.attr(e),i}},{key:"drawPath",value:function(t){var e=t.d,i=void 0===e?"":e,a=t.stroke,s=void 0===a?"#a8a8a8":a,r=t.strokeWidth,n=void 0===r?1:r,o=t.fill,l=t.fillOpacity,h=void 0===l?1:l,c=t.strokeOpacity,d=void 0===c?1:c,u=t.classes,g=t.strokeLinecap,p=void 0===g?null:g,f=t.strokeDashArray,x=void 0===f?0:f,b=this.w;return null===p&&(p=b.config.stroke.lineCap),(i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(b.globals.gridHeight)),b.globals.dom.Paper.path(i).attr({fill:o,"fill-opacity":h,stroke:s,"stroke-opacity":d,"stroke-linecap":p,"stroke-width":n,"stroke-dasharray":x,class:u})}},{key:"group",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w.globals.dom.Paper.group();return null!==t&&e.attr(t),e}},{key:"move",value:function(t,e){var i=["M",t,e].join(" ");return i}},{key:"line",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=null;return null===i?a=[" L",t,e].join(" "):"H"===i?a=[" H",t].join(" "):"V"===i&&(a=[" V",e].join(" ")),a}},{key:"curve",value:function(t,e,i,a,s,r){var n=["C",t,e,i,a,s,r].join(" ");return n}},{key:"quadraticCurve",value:function(t,e,i,a){return["Q",t,e,i,a].join(" ")}},{key:"arc",value:function(t,e,i,a,s,r,n){var o="A";arguments.length>7&&void 0!==arguments[7]&&arguments[7]&&(o="a");var l=[o,t,e,i,a,s,r,n].join(" ");return l}},{key:"renderPaths",value:function(t){var e,i=t.j,a=t.realIndex,s=t.pathFrom,r=t.pathTo,n=t.stroke,o=t.strokeWidth,l=t.strokeLinecap,h=t.fill,c=t.animationDelay,d=t.initialSpeed,g=t.dataChangeSpeed,p=t.className,f=t.chartType,x=t.shouldClipToGrid,b=void 0===x||x,m=t.bindEventsOnPaths,v=void 0===m||m,w=t.drawShadow,k=void 0===w||w,A=this.w,C=new Li(this.ctx),S=new y(this.ctx),L=this.w.config.chart.animations.enabled,M=L&&this.w.config.chart.animations.dynamicAnimation.enabled,P=!!(L&&!A.globals.resized||M&&A.globals.dataChanged&&A.globals.shouldAnimate);P?e=s:(e=r,A.globals.animationEnded=!0);var I=A.config.stroke.dashArray,T=0;T=Array.isArray(I)?I[a]:A.config.stroke.dashArray;var z=this.drawPath({d:e,stroke:n,strokeWidth:o,fill:h,fillOpacity:1,classes:p,strokeLinecap:l,strokeDashArray:T});z.attr("index",a),b&&("bar"===f&&!A.globals.isHorizontal||A.globals.comboCharts?z.attr({"clip-path":"url(#gridRectBarMask".concat(A.globals.cuid,")")}):z.attr({"clip-path":"url(#gridRectMask".concat(A.globals.cuid,")")})),A.config.chart.dropShadow.enabled&&k&&C.dropShadow(z,A.config.chart.dropShadow,a),v&&(z.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,z)),z.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,z)),z.node.addEventListener("mousedown",this.pathMouseDown.bind(this,z))),z.attr({pathTo:r,pathFrom:s});var X={el:z,j:i,realIndex:a,pathFrom:s,pathTo:r,fill:h,strokeWidth:o,delay:c};return!L||A.globals.resized||A.globals.dataChanged?!A.globals.resized&&A.globals.dataChanged||S.showDelayedElements():S.animatePathsGradually(u(u({},X),{},{speed:d})),A.globals.dataChanged&&M&&P&&S.animatePathsGradually(u(u({},X),{},{speed:g})),z}},{key:"drawPattern",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#a8a8a8",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return this.w.globals.dom.Paper.pattern(e,i,(function(r){"horizontalLines"===t?r.line(0,0,i,0).stroke({color:a,width:s+1}):"verticalLines"===t?r.line(0,0,0,e).stroke({color:a,width:s+1}):"slantedLines"===t?r.line(0,0,e,i).stroke({color:a,width:s}):"squares"===t?r.rect(e,i).fill("none").stroke({color:a,width:s}):"circles"===t&&r.circle(e).fill("none").stroke({color:a,width:s})}))}},{key:"drawGradient",value:function(t,e,i,a,s){var r,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,c=this.w;e.length<9&&0===e.indexOf("#")&&(e=v.hexToRgba(e,a)),i.length<9&&0===i.indexOf("#")&&(i=v.hexToRgba(i,s));var d=0,u=1,g=1,p=null;null!==o&&(d=void 0!==o[0]?o[0]/100:0,u=void 0!==o[1]?o[1]/100:1,g=void 0!==o[2]?o[2]/100:1,p=void 0!==o[3]?o[3]/100:null);var f=!("donut"!==c.config.chart.type&&"pie"!==c.config.chart.type&&"polarArea"!==c.config.chart.type&&"bubble"!==c.config.chart.type);if(r=l&&0!==l.length?c.globals.dom.Paper.gradient(f?"radial":"linear",(function(t){(Array.isArray(l[h])?l[h]:l).forEach((function(e){t.stop(e.offset/100,e.color,e.opacity)}))})):c.globals.dom.Paper.gradient(f?"radial":"linear",(function(t){t.stop(d,e,a),t.stop(u,i,s),t.stop(g,i,s),null!==p&&t.stop(p,e,a)})),f){var x=c.globals.gridWidth/2,b=c.globals.gridHeight/2;"bubble"!==c.config.chart.type?r.attr({gradientUnits:"userSpaceOnUse",cx:x,cy:b,r:n}):r.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else"vertical"===t?r.from(0,0).to(0,1):"diagonal"===t?r.from(0,0).to(1,1):"horizontal"===t?r.from(0,1).to(1,1):"diagonal2"===t&&r.from(1,0).to(0,1);return r}},{key:"getTextBasedOnMaxWidth",value:function(t){var e=t.text,i=t.maxWidth,a=t.fontSize,s=t.fontFamily,r=this.getTextRects(e,a,s),n=r.width/e.length,o=Math.floor(i/n);return i<r.width?e.slice(0,o-3)+"...":e}},{key:"drawText",value:function(t){var e=this,i=t.x,a=t.y,s=t.text,r=t.textAnchor,n=t.fontSize,o=t.fontFamily,l=t.fontWeight,h=t.foreColor,c=t.opacity,d=t.maxWidth,g=t.cssClass,p=void 0===g?"":g,f=t.isPlainText,x=void 0===f||f,b=t.dominantBaseline,m=void 0===b?"auto":b,v=this.w;void 0===s&&(s="");var y=s;r||(r="start"),h&&h.length||(h=v.config.chart.foreColor),o=o||v.config.chart.fontFamily,l=l||"regular";var w,k={maxWidth:d,fontSize:n=n||"11px",fontFamily:o};return Array.isArray(s)?w=v.globals.dom.Paper.text((function(t){for(var i=0;i<s.length;i++)y=s[i],d&&(y=e.getTextBasedOnMaxWidth(u({text:s[i]},k))),0===i?t.tspan(y):t.tspan(y).newLine()})):(d&&(y=this.getTextBasedOnMaxWidth(u({text:s},k))),w=x?v.globals.dom.Paper.plain(s):v.globals.dom.Paper.text((function(t){return t.tspan(y)}))),w.attr({x:i,y:a,"text-anchor":r,"dominant-baseline":m,"font-size":n,"font-family":o,"font-weight":l,fill:h,class:"apexcharts-text "+p}),w.node.style.fontFamily=o,w.node.style.opacity=c,w}},{key:"getMarkerPath",value:function(t,e,i,a){var s="";switch(i){case"cross":s="M ".concat(t-(a/=1.4)," ").concat(e-a," L ").concat(t+a," ").concat(e+a,"  M ").concat(t-a," ").concat(e+a," L ").concat(t+a," ").concat(e-a);break;case"plus":s="M ".concat(t-(a/=1.12)," ").concat(e," L ").concat(t+a," ").concat(e,"  M ").concat(t," ").concat(e-a," L ").concat(t," ").concat(e+a);break;case"star":case"sparkle":var r=5;a*=1.15,"sparkle"===i&&(a/=1.1,r=4);for(var n=Math.PI/r,o=0;o<=2*r;o++){var l=o*n,h=o%2==0?a:a/2;s+=(0===o?"M":"L")+(t+h*Math.sin(l))+","+(e-h*Math.cos(l))}s+="Z";break;case"triangle":s="M ".concat(t," ").concat(e-a," \n             L ").concat(t+a," ").concat(e+a," \n             L ").concat(t-a," ").concat(e+a," \n             Z");break;case"square":case"rect":s="M ".concat(t-(a/=1.125)," ").concat(e-a," \n           L ").concat(t+a," ").concat(e-a," \n           L ").concat(t+a," ").concat(e+a," \n           L ").concat(t-a," ").concat(e+a," \n           Z");break;case"diamond":a*=1.05,s="M ".concat(t," ").concat(e-a," \n             L ").concat(t+a," ").concat(e," \n             L ").concat(t," ").concat(e+a," \n             L ").concat(t-a," ").concat(e," \n            Z");break;case"line":s="M ".concat(t-(a/=1.1)," ").concat(e," \n           L ").concat(t+a," ").concat(e);break;default:a*=2,s="M ".concat(t,", ").concat(e," \n           m -").concat(a/2,", 0 \n           a ").concat(a/2,",").concat(a/2," 0 1,0 ").concat(a,",0 \n           a ").concat(a/2,",").concat(a/2," 0 1,0 -").concat(a,",0")}return s}},{key:"drawMarkerShape",value:function(t,e,i,a,s){var r=this.drawPath({d:this.getMarkerPath(t,e,i,a,s),stroke:s.pointStrokeColor,strokeDashArray:s.pointStrokeDashArray,strokeWidth:s.pointStrokeWidth,fill:s.pointFillColor,fillOpacity:s.pointFillOpacity,strokeOpacity:s.pointStrokeOpacity});return r.attr({cx:t,cy:e,shape:s.shape,class:s.class?s.class:""}),r}},{key:"drawMarker",value:function(t,e,i){t=t||0;var a=i.pSize||0;return v.isNumber(e)||(a=0,e=0),this.drawMarkerShape(t,e,null==i?void 0:i.shape,a,u(u({},i),"line"===i.shape||"plus"===i.shape||"cross"===i.shape?{pointStrokeColor:i.pointFillColor,pointStrokeOpacity:i.pointFillOpacity}:{}))}},{key:"pathMouseEnter",value:function(t,e){var i=this.w,a=new Li(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);if("function"==typeof i.config.chart.events.dataPointMouseEnter&&i.config.chart.events.dataPointMouseEnter(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseEnter",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),("none"===i.config.states.active.filter.type||"true"!==t.node.getAttribute("selected"))&&"none"!==i.config.states.hover.filter.type&&!i.globals.isTouchDevice){var n=i.config.states.hover.filter;a.applyFilter(t,s,n.type)}}},{key:"pathMouseLeave",value:function(t,e){var i=this.w,a=new Li(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);"function"==typeof i.config.chart.events.dataPointMouseLeave&&i.config.chart.events.dataPointMouseLeave(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseLeave",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),"none"!==i.config.states.active.filter.type&&"true"===t.node.getAttribute("selected")||"none"!==i.config.states.hover.filter.type&&a.getDefaultFilter(t,s)}},{key:"pathMouseDown",value:function(t,e){var i=this.w,a=new Li(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10),n="false";if("true"===t.node.getAttribute("selected")){if(t.node.setAttribute("selected","false"),i.globals.selectedDataPoints[s].indexOf(r)>-1){var o=i.globals.selectedDataPoints[s].indexOf(r);i.globals.selectedDataPoints[s].splice(o,1)}}else{if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0){i.globals.selectedDataPoints=[];var l=i.globals.dom.Paper.find(".apexcharts-series path:not(.apexcharts-decoration-element)"),h=i.globals.dom.Paper.find(".apexcharts-series circle:not(.apexcharts-decoration-element), .apexcharts-series rect:not(.apexcharts-decoration-element)"),c=function(t){Array.prototype.forEach.call(t,(function(t){t.node.setAttribute("selected","false"),a.getDefaultFilter(t,s)}))};c(l),c(h)}t.node.setAttribute("selected","true"),n="true",void 0===i.globals.selectedDataPoints[s]&&(i.globals.selectedDataPoints[s]=[]),i.globals.selectedDataPoints[s].push(r)}if("true"===n){var d=i.config.states.active.filter;if("none"!==d)a.applyFilter(t,s,d.type);else if("none"!==i.config.states.hover.filter&&!i.globals.isTouchDevice){var u=i.config.states.hover.filter;a.applyFilter(t,s,u.type)}}else if("none"!==i.config.states.active.filter.type)if("none"===i.config.states.hover.filter.type||i.globals.isTouchDevice)a.getDefaultFilter(t,s);else{u=i.config.states.hover.filter;a.applyFilter(t,s,u.type)}"function"==typeof i.config.chart.events.dataPointSelection&&i.config.chart.events.dataPointSelection(e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}),e&&this.ctx.events.fireEvent("dataPointSelection",[e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}])}},{key:"rotateAroundCenter",value:function(t){var e={};return t&&"function"==typeof t.getBBox&&(e=t.getBBox()),{x:e.x+e.width/2,y:e.y+e.height/2}}},{key:"getTextRects",value:function(t,e,i,a){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.w,n=this.drawText({x:-200,y:-200,text:t,textAnchor:"start",fontSize:e,fontFamily:i,foreColor:"#fff",opacity:0});a&&n.attr("transform",a),r.globals.dom.Paper.add(n);var o=n.bbox();return s||(o=n.node.getBoundingClientRect()),n.remove(),{width:o.width,height:o.height}}},{key:"placeTextWithEllipsis",value:function(t,e,i){if("function"==typeof t.getComputedTextLength&&(t.textContent=e,e.length>0&&t.getComputedTextLength()>=i/1.1)){for(var a=e.length-3;a>0;a-=3)if(t.getSubStringLength(0,a)<=i/1.1)return void(t.textContent=e.substring(0,a)+"...");t.textContent="."}}}],[{key:"setAttrs",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}}]),t}(),Pi=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"getStackedSeriesTotals",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.w,i=[];if(0===e.globals.series.length)return i;for(var a=0;a<e.globals.series[e.globals.maxValsInArrayIndex].length;a++){for(var s=0,r=0;r<e.globals.series.length;r++)void 0!==e.globals.series[r][a]&&-1===t.indexOf(r)&&(s+=e.globals.series[r][a]);i.push(s)}return i}},{key:"getSeriesTotalByIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?this.w.config.series.reduce((function(t,e){return t+e}),0):this.w.globals.series[t].reduce((function(t,e){return t+e}),0)}},{key:"getStackedSeriesTotalsByGroups",value:function(){var t=this,e=this.w,i=[];return e.globals.seriesGroups.forEach((function(a){var s=[];e.config.series.forEach((function(t,i){a.indexOf(e.globals.seriesNames[i])>-1&&s.push(i)}));var r=e.globals.series.map((function(t,e){return-1===s.indexOf(e)?e:-1})).filter((function(t){return-1!==t}));i.push(t.getStackedSeriesTotals(r))})),i}},{key:"setSeriesYAxisMappings",value:function(){var t=this.w.globals,e=this.w.config,i=[],a=[],s=[],r=t.series.length>e.yaxis.length||e.yaxis.some((function(t){return Array.isArray(t.seriesName)}));e.series.forEach((function(t,e){s.push(e),a.push(null)})),e.yaxis.forEach((function(t,e){i[e]=[]}));var n=[];e.yaxis.forEach((function(t,a){var o=!1;if(t.seriesName){var l=[];Array.isArray(t.seriesName)?l=t.seriesName:l.push(t.seriesName),l.forEach((function(t){e.series.forEach((function(e,n){if(e.name===t){var l=n;a===n||r?!r||s.indexOf(n)>-1?i[a].push([a,n]):console.warn("Series '"+e.name+"' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes."):(i[n].push([n,a]),l=a),o=!0,-1!==(l=s.indexOf(l))&&s.splice(l,1)}}))}))}o||n.push(a)})),i=i.map((function(t,e){var i=[];return t.forEach((function(t){a[t[1]]=t[0],i.push(t[1])})),i}));for(var o=e.yaxis.length-1,l=0;l<n.length&&(o=n[l],i[o]=[],s);l++){var h=s[0];s.shift(),i[o].push(h),a[h]=o}s.forEach((function(t){i[o].push(t),a[t]=o})),t.seriesYAxisMap=i.map((function(t){return t})),t.seriesYAxisReverseMap=a.map((function(t){return t})),t.seriesYAxisMap.forEach((function(t,i){t.forEach((function(t){e.series[t]&&void 0===e.series[t].group&&(e.series[t].group="apexcharts-axis-".concat(i.toString()))}))}))}},{key:"isSeriesNull",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 0===(null===t?this.w.config.series.filter((function(t){return null!==t})):this.w.config.series[t].data.filter((function(t){return null!==t}))).length}},{key:"seriesHaveSameValues",value:function(t){return this.w.globals.series[t].every((function(t,e,i){return t===i[0]}))}},{key:"getCategoryLabels",value:function(t){var e=this.w,i=t.slice();return e.config.xaxis.convertedCatToNumeric&&(i=t.map((function(t,i){return e.config.xaxis.labels.formatter(t-e.globals.minX+1)}))),i}},{key:"getLargestSeries",value:function(){var t=this.w;t.globals.maxValsInArrayIndex=t.globals.series.map((function(t){return t.length})).indexOf(Math.max.apply(Math,t.globals.series.map((function(t){return t.length}))))}},{key:"getLargestMarkerSize",value:function(){var t=this.w,e=0;return t.globals.markers.size.forEach((function(t){e=Math.max(e,t)})),t.config.markers.discrete&&t.config.markers.discrete.length&&t.config.markers.discrete.forEach((function(t){e=Math.max(e,t.size)})),e>0&&(t.config.markers.hover.size>0?e=t.config.markers.hover.size:e+=t.config.markers.hover.sizeOffset),t.globals.markers.largestSize=e,e}},{key:"getSeriesTotals",value:function(){var t=this.w;t.globals.seriesTotals=t.globals.series.map((function(t,e){var i=0;if(Array.isArray(t))for(var a=0;a<t.length;a++)i+=t[a];else i+=t;return i}))}},{key:"getSeriesTotalsXRange",value:function(t,e){var i=this.w;return i.globals.series.map((function(a,s){for(var r=0,n=0;n<a.length;n++)i.globals.seriesX[s][n]>t&&i.globals.seriesX[s][n]<e&&(r+=a[n]);return r}))}},{key:"getPercentSeries",value:function(){var t=this.w;t.globals.seriesPercent=t.globals.series.map((function(e,i){var a=[];if(Array.isArray(e))for(var s=0;s<e.length;s++){var r=t.globals.stackedSeriesTotals[s],n=0;r&&(n=100*e[s]/r),a.push(n)}else{var o=100*e/t.globals.seriesTotals.reduce((function(t,e){return t+e}),0);a.push(o)}return a}))}},{key:"getCalculatedRatios",value:function(){var t,e,i,a=this,s=this.w,r=s.globals,n=[],o=0,l=[],h=.1,c=0;if(r.yRange=[],r.isMultipleYAxis)for(var d=0;d<r.minYArr.length;d++)r.yRange.push(Math.abs(r.minYArr[d]-r.maxYArr[d])),l.push(0);else r.yRange.push(Math.abs(r.minY-r.maxY));r.xRange=Math.abs(r.maxX-r.minX),r.zRange=Math.abs(r.maxZ-r.minZ);for(var u=0;u<r.yRange.length;u++)n.push(r.yRange[u]/r.gridHeight);if(e=r.xRange/r.gridWidth,t=r.yRange/r.gridWidth,i=r.xRange/r.gridHeight,(o=r.zRange/r.gridHeight*16)||(o=1),r.minY!==Number.MIN_VALUE&&0!==Math.abs(r.minY)&&(r.hasNegs=!0),s.globals.seriesYAxisReverseMap.length>0){var g=function(t,e){var i=s.config.yaxis[s.globals.seriesYAxisReverseMap[e]],r=t<0?-1:1;return t=Math.abs(t),i.logarithmic&&(t=a.getBaseLog(i.logBase,t)),-r*t/n[e]};if(r.isMultipleYAxis){l=[];for(var p=0;p<n.length;p++)l.push(g(r.minYArr[p],p))}else(l=[]).push(g(r.minY,0)),r.minY!==Number.MIN_VALUE&&0!==Math.abs(r.minY)&&(h=-r.minY/t,c=r.minX/e)}else(l=[]).push(0),h=0,c=0;return{yRatio:n,invertedYRatio:t,zRatio:o,xRatio:e,invertedXRatio:i,baseLineInvertedY:h,baseLineY:l,baseLineX:c}}},{key:"getLogSeries",value:function(t){var e=this,i=this.w;return i.globals.seriesLog=t.map((function(t,a){var s=i.globals.seriesYAxisReverseMap[a];return i.config.yaxis[s]&&i.config.yaxis[s].logarithmic?t.map((function(t){return null===t?null:e.getLogVal(i.config.yaxis[s].logBase,t,a)})):t})),i.globals.invalidLogScale?t:i.globals.seriesLog}},{key:"getBaseLog",value:function(t,e){return Math.log(e)/Math.log(t)}},{key:"getLogVal",value:function(t,e,i){if(e<=0)return 0;var a=this.w,s=0===a.globals.minYArr[i]?-1:this.getBaseLog(t,a.globals.minYArr[i]),r=(0===a.globals.maxYArr[i]?0:this.getBaseLog(t,a.globals.maxYArr[i]))-s;return e<1?e/r:(this.getBaseLog(t,e)-s)/r}},{key:"getLogYRatios",value:function(t){var e=this,i=this.w,a=this.w.globals;return a.yLogRatio=t.slice(),a.logYRange=a.yRange.map((function(t,s){var r=i.globals.seriesYAxisReverseMap[s];if(i.config.yaxis[r]&&e.w.config.yaxis[r].logarithmic){var n,o=-Number.MAX_VALUE,l=Number.MIN_VALUE;return a.seriesLog.forEach((function(t,e){t.forEach((function(t){i.config.yaxis[e]&&i.config.yaxis[e].logarithmic&&(o=Math.max(t,o),l=Math.min(t,l))}))})),n=Math.pow(a.yRange[s],Math.abs(l-o)/a.yRange[s]),a.yLogRatio[s]=n/a.gridHeight,n}})),a.invalidLogScale?t.slice():a.yLogRatio}},{key:"drawSeriesByGroup",value:function(t,e,i,a){var s=this.w,r=[];return t.series.length>0&&e.forEach((function(e){var n=[],o=[];t.i.forEach((function(i,a){s.config.series[i].group===e&&(n.push(t.series[a]),o.push(i))})),n.length>0&&r.push(a.draw(n,i,o))})),r}}],[{key:"checkComboSeries",value:function(t,e){var i=!1,a=0,s=0;return void 0===e&&(e="line"),t.length&&void 0!==t[0].type&&t.forEach((function(t){"bar"!==t.type&&"column"!==t.type&&"candlestick"!==t.type&&"boxPlot"!==t.type||a++,void 0!==t.type&&t.type!==e&&s++})),s>0&&(i=!0),{comboBarCount:a,comboCharts:i}}},{key:"extendArrayProps",value:function(t,e,i){var a,s,r,n,o,l;(null!==(a=e)&&void 0!==a&&a.yaxis&&(e=t.extendYAxis(e,i)),null!==(s=e)&&void 0!==s&&s.annotations)&&(e.annotations.yaxis&&(e=t.extendYAxisAnnotations(e)),null!==(r=e)&&void 0!==r&&null!==(n=r.annotations)&&void 0!==n&&n.xaxis&&(e=t.extendXAxisAnnotations(e)),null!==(o=e)&&void 0!==o&&null!==(l=o.annotations)&&void 0!==l&&l.points&&(e=t.extendPointAnnotations(e)));return e}}]),t}(),Ii=function(){function t(e){i(this,t),this.w=e.w,this.annoCtx=e}return s(t,[{key:"setOrientations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w;if("vertical"===t.label.orientation){var a=null!==e?e:0,s=i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a,"']"));if(null!==s){var r=s.getBoundingClientRect();s.setAttribute("x",parseFloat(s.getAttribute("x"))-r.height+4);var n="top"===t.label.position?r.width:-r.width;s.setAttribute("y",parseFloat(s.getAttribute("y"))+n);var o=this.annoCtx.graphics.rotateAroundCenter(s),l=o.x,h=o.y;s.setAttribute("transform","rotate(-90 ".concat(l," ").concat(h,")"))}}}},{key:"addBackgroundToAnno",value:function(t,e){var i=this.w;if(!t||!e.label.text||!String(e.label.text).trim())return null;var a=i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),s=t.getBoundingClientRect(),r=e.label.style.padding,n=r.left,o=r.right,l=r.top,h=r.bottom;if("vertical"===e.label.orientation){var c=[n,o,l,h];l=c[0],h=c[1],n=c[2],o=c[3]}var d=s.left-a.left-n,u=s.top-a.top-l,g=this.annoCtx.graphics.drawRect(d-i.globals.barPadForNumericAxis,u,s.width+n+o,s.height+l+h,e.label.borderRadius,e.label.style.background,1,e.label.borderWidth,e.label.borderColor,0);return e.id&&g.node.classList.add(e.id),g}},{key:"annotationsBackground",value:function(){var t=this,e=this.w,i=function(i,a,s){var r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(a,"']"));if(r){var n=r.parentNode,o=t.addBackgroundToAnno(r,i);o&&(n.insertBefore(o.node,r),i.label.mouseEnter&&o.node.addEventListener("mouseenter",i.label.mouseEnter.bind(t,i)),i.label.mouseLeave&&o.node.addEventListener("mouseleave",i.label.mouseLeave.bind(t,i)),i.label.click&&o.node.addEventListener("click",i.label.click.bind(t,i)))}};e.config.annotations.xaxis.forEach((function(t,e){return i(t,e,"xaxis")})),e.config.annotations.yaxis.forEach((function(t,e){return i(t,e,"yaxis")})),e.config.annotations.points.forEach((function(t,e){return i(t,e,"point")}))}},{key:"getY1Y2",value:function(t,e){var i,a=this.w,s="y1"===t?e.y:e.y2,r=!1;if(this.annoCtx.invertAxis){var n=a.config.xaxis.convertedCatToNumeric?a.globals.categoryLabels:a.globals.labels,o=n.indexOf(s),l=a.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(".concat(o+1,")"));i=l?parseFloat(l.getAttribute("y")):(a.globals.gridHeight/n.length-1)*(o+1)-a.globals.barHeight,void 0!==e.seriesIndex&&a.globals.barHeight&&(i-=a.globals.barHeight/2*(a.globals.series.length-1)-a.globals.barHeight*e.seriesIndex)}else{var h,c=a.globals.seriesYAxisMap[e.yAxisIndex][0],d=a.config.yaxis[e.yAxisIndex].logarithmic?new Pi(this.annoCtx.ctx).getLogVal(a.config.yaxis[e.yAxisIndex].logBase,s,c)/a.globals.yLogRatio[c]:(s-a.globals.minYArr[c])/(a.globals.yRange[c]/a.globals.gridHeight);i=a.globals.gridHeight-Math.min(Math.max(d,0),a.globals.gridHeight),r=d>a.globals.gridHeight||d<0,!e.marker||void 0!==e.y&&null!==e.y||(i=0),null!==(h=a.config.yaxis[e.yAxisIndex])&&void 0!==h&&h.reversed&&(i=d)}return"string"==typeof s&&s.includes("px")&&(i=parseFloat(s)),{yP:i,clipped:r}}},{key:"getX1X2",value:function(t,e){var i=this.w,a="x1"===t?e.x:e.x2,s=this.annoCtx.invertAxis?i.globals.minY:i.globals.minX,r=this.annoCtx.invertAxis?i.globals.maxY:i.globals.maxX,n=this.annoCtx.invertAxis?i.globals.yRange[0]:i.globals.xRange,o=!1,l=this.annoCtx.inversedReversedAxis?(r-a)/(n/i.globals.gridWidth):(a-s)/(n/i.globals.gridWidth);return"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||i.config.chart.sparkline.enabled||(l=this.getStringX(a)),"string"==typeof a&&a.includes("px")&&(l=parseFloat(a)),null==a&&e.marker&&(l=i.globals.gridWidth),void 0!==e.seriesIndex&&i.globals.barWidth&&!this.annoCtx.invertAxis&&(l-=i.globals.barWidth/2*(i.globals.series.length-1)-i.globals.barWidth*e.seriesIndex),l>i.globals.gridWidth?(l=i.globals.gridWidth,o=!0):l<0&&(l=0,o=!0),{x:l,clipped:o}}},{key:"getStringX",value:function(t){var e=this.w,i=t;e.config.xaxis.convertedCatToNumeric&&e.globals.categoryLabels.length&&(t=e.globals.categoryLabels.indexOf(t)+1);var a=e.globals.labels.map((function(t){return Array.isArray(t)?t.join(" "):t})).indexOf(t),s=e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(".concat(a+1,")"));return s&&(i=parseFloat(s.getAttribute("x"))),i}}]),t}(),Ti=function(){function t(e){i(this,t),this.w=e.w,this.annoCtx=e,this.invertAxis=this.annoCtx.invertAxis,this.helpers=new Ii(this.annoCtx)}return s(t,[{key:"addXaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=this.helpers.getX1X2("x1",t),n=r.x,o=r.clipped,l=!0,h=t.label.text,c=t.strokeDashArray;if(v.isNumber(n)){if(null===t.x2||void 0===t.x2){if(!o){var d=this.annoCtx.graphics.drawLine(n+t.offsetX,0+t.offsetY,n+t.offsetX,s.globals.gridHeight+t.offsetY,t.borderColor,c,t.borderWidth);e.appendChild(d.node),t.id&&d.node.classList.add(t.id)}}else{var u=this.helpers.getX1X2("x2",t);if(a=u.x,l=u.clipped,!o||!l){if(a<n){var g=n;n=a,a=g}var p=this.annoCtx.graphics.drawRect(n+t.offsetX,0+t.offsetY,a-n,s.globals.gridHeight+t.offsetY,0,t.fillColor,t.opacity,1,t.borderColor,c);p.node.classList.add("apexcharts-annotation-rect"),p.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(p.node),t.id&&p.node.classList.add(t.id)}}if(!o||!l){var f=this.annoCtx.graphics.getTextRects(h,parseFloat(t.label.style.fontSize)),x="top"===t.label.position?4:"center"===t.label.position?s.globals.gridHeight/2+("vertical"===t.label.orientation?f.width/2:0):s.globals.gridHeight,b=this.annoCtx.graphics.drawText({x:n+t.label.offsetX,y:x+t.label.offsetY-("vertical"===t.label.orientation?"top"===t.label.position?f.width/2-12:-f.width/2:0),text:h,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});b.attr({rel:i}),e.appendChild(b.node),this.annoCtx.helpers.setOrientations(t,i)}}}},{key:"drawXAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-xaxis-annotations"});return e.config.annotations.xaxis.map((function(e,a){t.addXaxisAnnotation(e,i.node,a)})),i}}]),t}(),zi=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return s(t,[{key:"isValidDate",value:function(t){return"number"!=typeof t&&!isNaN(this.parseDate(t))}},{key:"getTimeStamp",value:function(t){return Date.parse(t)?this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toISOString().substr(0,25)).getTime():new Date(t).getTime():t}},{key:"getDate",value:function(t){return this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toUTCString()):new Date(t)}},{key:"parseDate",value:function(t){var e=Date.parse(t);if(!isNaN(e))return this.getTimeStamp(t);var i=Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "));return i=this.getTimeStamp(i)}},{key:"parseDateWithTimezone",value:function(t){return Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "))}},{key:"formatDate",value:function(t,e){var i=this.w.globals.locale,a=this.w.config.xaxis.labels.datetimeUTC,s=["\0"].concat(f(i.months)),r=["\x01"].concat(f(i.shortMonths)),n=["\x02"].concat(f(i.days)),o=["\x03"].concat(f(i.shortDays));function l(t,e){var i=t+"";for(e=e||2;i.length<e;)i="0"+i;return i}var h=a?t.getUTCFullYear():t.getFullYear();e=(e=(e=e.replace(/(^|[^\\])yyyy+/g,"$1"+h)).replace(/(^|[^\\])yy/g,"$1"+h.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+h);var c=(a?t.getUTCMonth():t.getMonth())+1;e=(e=(e=(e=e.replace(/(^|[^\\])MMMM+/g,"$1"+s[0])).replace(/(^|[^\\])MMM/g,"$1"+r[0])).replace(/(^|[^\\])MM/g,"$1"+l(c))).replace(/(^|[^\\])M/g,"$1"+c);var d=a?t.getUTCDate():t.getDate();e=(e=(e=(e=e.replace(/(^|[^\\])dddd+/g,"$1"+n[0])).replace(/(^|[^\\])ddd/g,"$1"+o[0])).replace(/(^|[^\\])dd/g,"$1"+l(d))).replace(/(^|[^\\])d/g,"$1"+d);var u=a?t.getUTCHours():t.getHours(),g=u>12?u-12:0===u?12:u;e=(e=(e=(e=e.replace(/(^|[^\\])HH+/g,"$1"+l(u))).replace(/(^|[^\\])H/g,"$1"+u)).replace(/(^|[^\\])hh+/g,"$1"+l(g))).replace(/(^|[^\\])h/g,"$1"+g);var p=a?t.getUTCMinutes():t.getMinutes();e=(e=e.replace(/(^|[^\\])mm+/g,"$1"+l(p))).replace(/(^|[^\\])m/g,"$1"+p);var x=a?t.getUTCSeconds():t.getSeconds();e=(e=e.replace(/(^|[^\\])ss+/g,"$1"+l(x))).replace(/(^|[^\\])s/g,"$1"+x);var b=a?t.getUTCMilliseconds():t.getMilliseconds();e=e.replace(/(^|[^\\])fff+/g,"$1"+l(b,3)),b=Math.round(b/10),e=e.replace(/(^|[^\\])ff/g,"$1"+l(b)),b=Math.round(b/10);var m=u<12?"AM":"PM";e=(e=(e=e.replace(/(^|[^\\])f/g,"$1"+b)).replace(/(^|[^\\])TT+/g,"$1"+m)).replace(/(^|[^\\])T/g,"$1"+m.charAt(0));var v=m.toLowerCase();e=(e=e.replace(/(^|[^\\])tt+/g,"$1"+v)).replace(/(^|[^\\])t/g,"$1"+v.charAt(0));var y=-t.getTimezoneOffset(),w=a||!y?"Z":y>0?"+":"-";if(!a){var k=(y=Math.abs(y))%60;w+=l(Math.floor(y/60))+":"+l(k)}e=e.replace(/(^|[^\\])K/g,"$1"+w);var A=(a?t.getUTCDay():t.getDay())+1;return e=(e=(e=(e=(e=e.replace(new RegExp(n[0],"g"),n[A])).replace(new RegExp(o[0],"g"),o[A])).replace(new RegExp(s[0],"g"),s[c])).replace(new RegExp(r[0],"g"),r[c])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(t,e,i){var a=this.w;void 0!==a.config.xaxis.min&&(t=a.config.xaxis.min),void 0!==a.config.xaxis.max&&(e=a.config.xaxis.max);var s=this.getDate(t),r=this.getDate(e),n=this.formatDate(s,"yyyy MM dd HH mm ss fff").split(" "),o=this.formatDate(r,"yyyy MM dd HH mm ss fff").split(" ");return{minMillisecond:parseInt(n[6],10),maxMillisecond:parseInt(o[6],10),minSecond:parseInt(n[5],10),maxSecond:parseInt(o[5],10),minMinute:parseInt(n[4],10),maxMinute:parseInt(o[4],10),minHour:parseInt(n[3],10),maxHour:parseInt(o[3],10),minDate:parseInt(n[2],10),maxDate:parseInt(o[2],10),minMonth:parseInt(n[1],10)-1,maxMonth:parseInt(o[1],10)-1,minYear:parseInt(n[0],10),maxYear:parseInt(o[0],10)}}},{key:"isLeapYear",value:function(t){return t%4==0&&t%100!=0||t%400==0}},{key:"calculcateLastDaysOfMonth",value:function(t,e,i){return this.determineDaysOfMonths(t,e)-i}},{key:"determineDaysOfYear",value:function(t){var e=365;return this.isLeapYear(t)&&(e=366),e}},{key:"determineRemainingDaysOfYear",value:function(t,e,i){var a=this.daysCntOfYear[e]+i;return e>1&&this.isLeapYear()&&a++,a}},{key:"determineDaysOfMonths",value:function(t,e){var i=30;switch(t=v.monthMod(t),!0){case this.months30.indexOf(t)>-1:2===t&&(i=this.isLeapYear(e)?29:28);break;case this.months31.indexOf(t)>-1:default:i=31}return i}}]),t}(),Xi=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.tooltipKeyFormat="dd MMM"}return s(t,[{key:"xLabelFormat",value:function(t,e,i,a){var s=this.w;if("datetime"===s.config.xaxis.type&&void 0===s.config.xaxis.labels.formatter&&void 0===s.config.tooltip.x.formatter){var r=new zi(this.ctx);return r.formatDate(r.getDate(e),s.config.tooltip.x.format)}return t(e,i,a)}},{key:"defaultGeneralFormatter",value:function(t){return Array.isArray(t)?t.map((function(t){return t})):t}},{key:"defaultYFormatter",value:function(t,e,i){var a=this.w;if(v.isNumber(t))if(0!==a.globals.yValueDecimal)t=t.toFixed(void 0!==e.decimalsInFloat?e.decimalsInFloat:a.globals.yValueDecimal);else{var s=t.toFixed(0);t=t==s?s:t.toFixed(1)}return t}},{key:"setLabelFormatters",value:function(){var t=this,e=this.w;return e.globals.xaxisTooltipFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttKeyFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttZFormatter=function(t){return t},e.globals.legendFormatter=function(e){return t.defaultGeneralFormatter(e)},void 0!==e.config.xaxis.labels.formatter?e.globals.xLabelFormatter=e.config.xaxis.labels.formatter:e.globals.xLabelFormatter=function(t){if(v.isNumber(t)){if(!e.config.xaxis.convertedCatToNumeric&&"numeric"===e.config.xaxis.type){if(v.isNumber(e.config.xaxis.decimalsInFloat))return t.toFixed(e.config.xaxis.decimalsInFloat);var i=e.globals.maxX-e.globals.minX;return i>0&&i<100?t.toFixed(1):t.toFixed(0)}if(e.globals.isBarHorizontal)if(e.globals.maxY-e.globals.minYArr<4)return t.toFixed(1);return t.toFixed(0)}return t},"function"==typeof e.config.tooltip.x.formatter?e.globals.ttKeyFormatter=e.config.tooltip.x.formatter:e.globals.ttKeyFormatter=e.globals.xLabelFormatter,"function"==typeof e.config.xaxis.tooltip.formatter&&(e.globals.xaxisTooltipFormatter=e.config.xaxis.tooltip.formatter),(Array.isArray(e.config.tooltip.y)||void 0!==e.config.tooltip.y.formatter)&&(e.globals.ttVal=e.config.tooltip.y),void 0!==e.config.tooltip.z.formatter&&(e.globals.ttZFormatter=e.config.tooltip.z.formatter),void 0!==e.config.legend.formatter&&(e.globals.legendFormatter=e.config.legend.formatter),e.config.yaxis.forEach((function(i,a){void 0!==i.labels.formatter?e.globals.yLabelFormatters[a]=i.labels.formatter:e.globals.yLabelFormatters[a]=function(s){return e.globals.xyCharts?Array.isArray(s)?s.map((function(e){return t.defaultYFormatter(e,i,a)})):t.defaultYFormatter(s,i,a):s}})),e.globals}},{key:"heatmapLabelFormatters",value:function(){var t=this.w;if("heatmap"===t.config.chart.type){t.globals.yAxisScale[0].result=t.globals.seriesNames.slice();var e=t.globals.seriesNames.reduce((function(t,e){return t.length>e.length?t:e}),0);t.globals.yAxisScale[0].niceMax=e,t.globals.yAxisScale[0].niceMin=e}}}]),t}(),Ri=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"getLabel",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"12px",n=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],o=this.w,l=void 0===t[a]?"":t[a],h=l,c=o.globals.xLabelFormatter,d=o.config.xaxis.labels.formatter,u=!1,g=new Xi(this.ctx),p=l;n&&(h=g.xLabelFormat(c,l,p,{i:a,dateFormatter:new zi(this.ctx).formatDate,w:o}),void 0!==d&&(h=d(l,t[a],{i:a,dateFormatter:new zi(this.ctx).formatDate,w:o})));var f,x;e.length>0?(f=e[a].unit,x=null,e.forEach((function(t){"month"===t.unit?x="year":"day"===t.unit?x="month":"hour"===t.unit?x="day":"minute"===t.unit&&(x="hour")})),u=x===f,i=e[a].position,h=e[a].value):"datetime"===o.config.xaxis.type&&void 0===d&&(h=""),void 0===h&&(h=""),h=Array.isArray(h)?h:h.toString();var b=new Mi(this.ctx),m={};m=o.globals.rotateXLabels&&n?b.getTextRects(h,parseInt(r,10),null,"rotate(".concat(o.config.xaxis.labels.rotate," 0 0)"),!1):b.getTextRects(h,parseInt(r,10));var v=!o.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;return!Array.isArray(h)&&("NaN"===String(h)||s.indexOf(h)>=0&&v)&&(h=""),{x:i,text:h,textRect:m,isBold:u}}},{key:"checkLabelBasedOnTickamount",value:function(t,e,i){var a=this.w,s=a.config.xaxis.tickAmount;return"dataPoints"===s&&(s=Math.round(a.globals.gridWidth/120)),s>i||t%Math.round(i/(s+1))==0||(e.text=""),e}},{key:"checkForOverflowingLabels",value:function(t,e,i,a,s){var r=this.w;if(0===t&&r.globals.skipFirstTimelinelabel&&(e.text=""),t===i-1&&r.globals.skipLastTimelinelabel&&(e.text=""),r.config.xaxis.labels.hideOverlappingLabels&&a.length>0){var n=s[s.length-1];e.x<n.textRect.width/(r.globals.rotateXLabels?Math.abs(r.config.xaxis.labels.rotate)/12:1.01)+n.x&&(e.text="")}return e}},{key:"checkForReversedLabels",value:function(t,e){var i=this.w;return i.config.yaxis[t]&&i.config.yaxis[t].reversed&&e.reverse(),e}},{key:"yAxisAllSeriesCollapsed",value:function(t){var e=this.w.globals;return!e.seriesYAxisMap[t].some((function(t){return-1===e.collapsedSeriesIndices.indexOf(t)}))}},{key:"translateYAxisIndex",value:function(t){var e=this.w,i=e.globals,a=e.config.yaxis;return i.series.length>a.length||a.some((function(t){return Array.isArray(t.seriesName)}))?t:i.seriesYAxisReverseMap[t]}},{key:"isYAxisHidden",value:function(t){var e=this.w,i=e.config.yaxis[t];if(!i.show||this.yAxisAllSeriesCollapsed(t))return!0;if(!i.showForNullSeries){var a=e.globals.seriesYAxisMap[t],s=new Pi(this.ctx);return a.every((function(t){return s.isSeriesNull(t)}))}return!1}},{key:"getYAxisForeColor",value:function(t,e){var i=this.w;return Array.isArray(t)&&i.globals.yAxisScale[e]&&this.ctx.theme.pushExtraColors(t,i.globals.yAxisScale[e].result.length,!1),t}},{key:"drawYAxisTicks",value:function(t,e,i,a,s,r,n){var o=this.w,l=new Mi(this.ctx),h=o.globals.translateY+o.config.yaxis[s].labels.offsetY;if(o.globals.isBarHorizontal?h=0:"heatmap"===o.config.chart.type&&(h+=r/2),a.show&&e>0){!0===o.config.yaxis[s].opposite&&(t+=a.width);for(var c=e;c>=0;c--){var d=l.drawLine(t+i.offsetX-a.width+a.offsetX,h+a.offsetY,t+i.offsetX+a.offsetX,h+a.offsetY,a.color);n.add(d),h+=r}}}}]),t}(),Ei=function(){function t(e){i(this,t),this.w=e.w,this.annoCtx=e,this.helpers=new Ii(this.annoCtx),this.axesUtils=new Ri(this.annoCtx)}return s(t,[{key:"addYaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=t.strokeDashArray,n=this.helpers.getY1Y2("y1",t),o=n.yP,l=n.clipped,h=!0,c=!1,d=t.label.text;if(null===t.y2||void 0===t.y2){if(!l){c=!0;var u=this.annoCtx.graphics.drawLine(0+t.offsetX,o+t.offsetY,this._getYAxisAnnotationWidth(t),o+t.offsetY,t.borderColor,r,t.borderWidth);e.appendChild(u.node),t.id&&u.node.classList.add(t.id)}}else{if(a=(n=this.helpers.getY1Y2("y2",t)).yP,h=n.clipped,a>o){var g=o;o=a,a=g}if(!l||!h){c=!0;var p=this.annoCtx.graphics.drawRect(0+t.offsetX,a+t.offsetY,this._getYAxisAnnotationWidth(t),o-a,0,t.fillColor,t.opacity,1,t.borderColor,r);p.node.classList.add("apexcharts-annotation-rect"),p.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(p.node),t.id&&p.node.classList.add(t.id)}}if(c){var f="right"===t.label.position?s.globals.gridWidth:"center"===t.label.position?s.globals.gridWidth/2:0,x=this.annoCtx.graphics.drawText({x:f+t.label.offsetX,y:(null!=a?a:o)+t.label.offsetY-3,text:d,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});x.attr({rel:i}),e.appendChild(x.node)}}},{key:"_getYAxisAnnotationWidth",value:function(t){var e=this.w;e.globals.gridWidth;return(t.width.indexOf("%")>-1?e.globals.gridWidth*parseInt(t.width,10)/100:parseInt(t.width,10))+t.offsetX}},{key:"drawYAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-yaxis-annotations"});return e.config.annotations.yaxis.forEach((function(e,a){e.yAxisIndex=t.axesUtils.translateYAxisIndex(e.yAxisIndex),t.axesUtils.isYAxisHidden(e.yAxisIndex)&&t.axesUtils.yAxisAllSeriesCollapsed(e.yAxisIndex)||t.addYaxisAnnotation(e,i.node,a)})),i}}]),t}(),Yi=function(){function t(e){i(this,t),this.w=e.w,this.annoCtx=e,this.helpers=new Ii(this.annoCtx)}return s(t,[{key:"addPointAnnotation",value:function(t,e,i){if(!(this.w.globals.collapsedSeriesIndices.indexOf(t.seriesIndex)>-1)){var a=this.helpers.getX1X2("x1",t),s=a.x,r=a.clipped,n=(a=this.helpers.getY1Y2("y1",t)).yP,o=a.clipped;if(v.isNumber(s)&&!o&&!r){var l={pSize:t.marker.size,pointStrokeWidth:t.marker.strokeWidth,pointFillColor:t.marker.fillColor,pointStrokeColor:t.marker.strokeColor,shape:t.marker.shape,pRadius:t.marker.radius,class:"apexcharts-point-annotation-marker ".concat(t.marker.cssClass," ").concat(t.id?t.id:"")},h=this.annoCtx.graphics.drawMarker(s+t.marker.offsetX,n+t.marker.offsetY,l);e.appendChild(h.node);var c=t.label.text?t.label.text:"",d=this.annoCtx.graphics.drawText({x:s+t.label.offsetX,y:n+t.label.offsetY-t.marker.size-parseFloat(t.label.style.fontSize)/1.6,text:c,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-point-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});if(d.attr({rel:i}),e.appendChild(d.node),t.customSVG.SVG){var u=this.annoCtx.graphics.group({class:"apexcharts-point-annotations-custom-svg "+t.customSVG.cssClass});u.attr({transform:"translate(".concat(s+t.customSVG.offsetX,", ").concat(n+t.customSVG.offsetY,")")}),u.node.innerHTML=t.customSVG.SVG,e.appendChild(u.node)}if(t.image.path){var g=t.image.width?t.image.width:20,p=t.image.height?t.image.height:20;h=this.annoCtx.addImage({x:s+t.image.offsetX-g/2,y:n+t.image.offsetY-p/2,width:g,height:p,path:t.image.path,appendTo:".apexcharts-point-annotations"})}t.mouseEnter&&h.node.addEventListener("mouseenter",t.mouseEnter.bind(this,t)),t.mouseLeave&&h.node.addEventListener("mouseleave",t.mouseLeave.bind(this,t)),t.click&&h.node.addEventListener("click",t.click.bind(this,t))}}}},{key:"drawPointAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-point-annotations"});return e.config.annotations.points.map((function(e,a){t.addPointAnnotation(e,i.node,a)})),i}}]),t}();var Hi={name:"en",options:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}}},Oi=function(){function t(){i(this,t),this.yAxis={show:!0,showAlways:!1,showForNullSeries:!0,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,logBase:10,tickAmount:void 0,stepSize:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:void 0,labels:{show:!0,showDuplicates:!1,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:void 0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontWeight:400,fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#e0e0e0",width:1,offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#e0e0e0",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:-90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontWeight:900,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.pointAnnotation={id:void 0,x:0,y:null,yAxisIndex:0,seriesIndex:void 0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,marker:{size:4,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0},image:{path:void 0,width:20,height:20,offsetX:0,offsetY:0}},this.yAxisAnnotation={id:void 0,y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,width:"100%",yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.xAxisAnnotation={id:void 0,x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.text={x:0,y:0,text:"",textAnchor:"start",foreColor:void 0,fontSize:"13px",fontFamily:void 0,fontWeight:400,appendTo:".apexcharts-annotations",backgroundColor:"transparent",borderColor:"#c2c2c2",borderRadius:0,borderWidth:0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2}}return s(t,[{key:"init",value:function(){return{annotations:{yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation],texts:[],images:[],shapes:[]},chart:{animations:{enabled:!0,speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"",locales:[Hi],defaultLocale:"en",dropShadow:{enabled:!1,enabledOnSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.7},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,mouseMove:void 0,mouseLeave:void 0,xAxisLabelClick:void 0,legendClick:void 0,markerClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,beforeResetZoom:void 0,zoomed:void 0,scrolled:void 0,brushScrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",parentHeightOffset:15,redrawOnParentResize:!0,redrawOnWindowResize:!0,id:void 0,group:void 0,nonce:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!0,target:void 0,targets:void 0},stacked:!1,stackOnlyBar:!0,stackType:"normal",toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:void 0,columnDelimiter:",",headerCategory:"category",headerValue:"value",categoryFormatter:void 0,valueFormatter:void 0},png:{filename:void 0},svg:{filename:void 0},scale:void 0,width:void 0},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,allowMouseWheelZoom:!0,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{line:{isSlopeChart:!1,colors:{threshold:0,colorAboveThreshold:void 0,colorBelowThreshold:void 0}},area:{fillTo:"origin"},bar:{horizontal:!1,columnWidth:"70%",barHeight:"70%",distributed:!1,borderRadius:0,borderRadiusApplication:"around",borderRadiusWhenStacked:"last",rangeBarOverlap:!0,rangeBarGroupRows:!1,hideZeroBarsWhenGrouped:!1,isDumbbell:!1,dumbbellColors:void 0,isFunnel:!1,isFunnel3d:!0,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1,backgroundBarRadius:0},dataLabels:{position:"top",maxItems:100,hideOverflowingLabels:!0,orientation:"horizontal",total:{enabled:!1,formatter:void 0,offsetX:0,offsetY:0,style:{color:"#373d3f",fontSize:"12px",fontFamily:void 0,fontWeight:600}}}},bubble:{zScaling:!0,minBubbleRadius:void 0,maxBubbleRadius:void 0},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},boxPlot:{colors:{upper:"#00E396",lower:"#008FFB"}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!1,distributed:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},treemap:{enableShades:!0,shadeIntensity:.5,distributed:!1,reverseNegativeShade:!1,useFillColorAsStroke:!1,borderRadius:4,dataLabels:{format:"scale"},colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:0,formatter:function(t){return t}},value:{show:!0,fontSize:"14px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:16,formatter:function(t){return t+"%"}},total:{show:!1,label:"Total",fontSize:"16px",fontWeight:600,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)/t.globals.series.length+"%"}}},barLabels:{enabled:!1,offsetX:0,offsetY:0,useSeriesColors:!0,fontFamily:void 0,fontWeight:600,fontSize:"16px",formatter:function(t){return t},onClick:void 0}},pie:{customScale:1,offsetX:0,offsetY:0,startAngle:0,endAngle:360,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10,formatter:function(t){return t}},value:{show:!0,fontSize:"20px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:10,formatter:function(t){return t}},total:{show:!1,showAlways:!1,label:"Total",fontSize:"16px",fontWeight:400,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)}}}}},polarArea:{rings:{strokeWidth:1,strokeColor:"#e8e8e8"},spokes:{strokeWidth:1,connectorColors:"#e8e8e8"}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeWidth:1,strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(t){return null!==t?t:""},textAnchor:"middle",distributed:!1,offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,fontWeight:600,colors:void 0},background:{enabled:!0,foreColor:"#fff",borderRadius:2,padding:4,opacity:.9,borderWidth:1,borderColor:"#fff",dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.8}},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.8}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"squares",width:6,height:6,strokeWidth:2}},forecastDataPoints:{count:0,fillOpacity:.5,strokeWidth:void 0,dashArray:4},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",inverseOrder:!1,fontSize:"12px",fontFamily:void 0,fontWeight:400,width:void 0,height:void 0,formatter:void 0,tooltipHoverFormatter:void 0,offsetX:-20,offsetY:4,customLegendItems:[],labels:{colors:void 0,useSeriesColors:!1},markers:{size:7,fillColors:void 0,strokeWidth:1,shape:void 0,offsetX:0,offsetY:0,customHTML:void 0,onClick:void 0},itemMargin:{horizontal:5,vertical:4},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,shape:"circle",offsetX:0,offsetY:0,showNullDataPoints:!0,onClick:void 0,onDblClick:void 0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{hover:{filter:{type:"lighten"}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken"}}},title:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:900,fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontWeight:400,fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0,fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]}}},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!0,hideEmptySeries:!1,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",cssClass:"",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(t){return t?t+": ":""}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0,fillColors:void 0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],convertedCatToNumeric:!1,offsetX:0,offsetY:0,overwriteCategories:void 0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!1,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeUTC:!0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss",second:"HH:mm:ss"}},group:{groups:[],style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""}},axisBorder:{show:!0,color:"#e0e0e0",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#e0e0e0",height:6,offsetX:0,offsetY:0},stepSize:void 0,tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,decimalsInFloat:void 0,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontWeight:900,fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.8}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{mode:"",palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),t}(),Fi=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.graphics=new Mi(this.ctx),this.w.globals.isBarHorizontal&&(this.invertAxis=!0),this.helpers=new Ii(this),this.xAxisAnnotations=new Ti(this),this.yAxisAnnotations=new Ei(this),this.pointsAnnotations=new Yi(this),this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed&&(this.inversedReversedAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return s(t,[{key:"drawAxesAnnotations",value:function(){var t=this.w;if(t.globals.axisCharts&&t.globals.dataPoints){for(var e=this.yAxisAnnotations.drawYAxisAnnotations(),i=this.xAxisAnnotations.drawXAxisAnnotations(),a=this.pointsAnnotations.drawPointAnnotations(),s=t.config.chart.animations.enabled,r=[e,i,a],n=[i.node,e.node,a.node],o=0;o<3;o++)t.globals.dom.elGraphical.add(r[o]),!s||t.globals.resized||t.globals.dataChanged||"scatter"!==t.config.chart.type&&"bubble"!==t.config.chart.type&&t.globals.dataPoints>1&&n[o].classList.add("apexcharts-element-hidden"),t.globals.delayedElements.push({el:n[o],index:0});this.helpers.annotationsBackground()}}},{key:"drawImageAnnos",value:function(){var t=this;this.w.config.annotations.images.map((function(e,i){t.addImage(e,i)}))}},{key:"drawTextAnnos",value:function(){var t=this;this.w.config.annotations.texts.map((function(e,i){t.addText(e,i)}))}},{key:"addXaxisAnnotation",value:function(t,e,i){this.xAxisAnnotations.addXaxisAnnotation(t,e,i)}},{key:"addYaxisAnnotation",value:function(t,e,i){this.yAxisAnnotations.addYaxisAnnotation(t,e,i)}},{key:"addPointAnnotation",value:function(t,e,i){this.pointsAnnotations.addPointAnnotation(t,e,i)}},{key:"addText",value:function(t,e){var i=t.x,a=t.y,s=t.text,r=t.textAnchor,n=t.foreColor,o=t.fontSize,l=t.fontFamily,h=t.fontWeight,c=t.cssClass,d=t.backgroundColor,u=t.borderWidth,g=t.strokeDashArray,p=t.borderRadius,f=t.borderColor,x=t.appendTo,b=void 0===x?".apexcharts-svg":x,m=t.paddingLeft,v=void 0===m?4:m,y=t.paddingRight,w=void 0===y?4:y,k=t.paddingBottom,A=void 0===k?2:k,C=t.paddingTop,S=void 0===C?2:C,L=this.w,M=this.graphics.drawText({x:i,y:a,text:s,textAnchor:r||"start",fontSize:o||"12px",fontWeight:h||"regular",fontFamily:l||L.config.chart.fontFamily,foreColor:n||L.config.chart.foreColor,cssClass:c}),P=L.globals.dom.baseEl.querySelector(b);P&&P.appendChild(M.node);var I=M.bbox();if(s){var T=this.graphics.drawRect(I.x-v,I.y-S,I.width+v+w,I.height+A+S,p,d||"transparent",1,u,f,g);P.insertBefore(T.node,M.node)}}},{key:"addImage",value:function(t,e){var i=this.w,a=t.path,s=t.x,r=void 0===s?0:s,n=t.y,o=void 0===n?0:n,l=t.width,h=void 0===l?20:l,c=t.height,d=void 0===c?20:c,u=t.appendTo,g=void 0===u?".apexcharts-svg":u,p=i.globals.dom.Paper.image(a);p.size(h,d).move(r,o);var f=i.globals.dom.baseEl.querySelector(g);return f&&f.appendChild(p.node),p}},{key:"addXaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"xaxis",contextMethod:i.addXaxisAnnotation}),i}},{key:"addYaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"yaxis",contextMethod:i.addYaxisAnnotation}),i}},{key:"addPointAnnotationExternal",value:function(t,e,i){return void 0===this.invertAxis&&(this.invertAxis=i.w.globals.isBarHorizontal),this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"point",contextMethod:i.addPointAnnotation}),i}},{key:"addAnnotationExternal",value:function(t){var e=t.params,i=t.pushToMemory,a=t.context,s=t.type,r=t.contextMethod,n=a,o=n.w,l=o.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations")),h=l.childNodes.length+1,c=new Oi,d=Object.assign({},"xaxis"===s?c.xAxisAnnotation:"yaxis"===s?c.yAxisAnnotation:c.pointAnnotation),u=v.extend(d,e);switch(s){case"xaxis":this.addXaxisAnnotation(u,l,h);break;case"yaxis":this.addYaxisAnnotation(u,l,h);break;case"point":this.addPointAnnotation(u,l,h)}var g=o.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(h,"']")),p=this.helpers.addBackgroundToAnno(g,u);return p&&l.insertBefore(p.node,g),i&&o.globals.memory.methodsToExec.push({context:n,id:u.id?u.id:v.randomId(),method:r,label:"addAnnotation",params:e}),a}},{key:"clearAnnotations",value:function(t){for(var e=t.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"),a=e.globals.memory.methodsToExec.length-1;a>=0;a--)"addText"!==e.globals.memory.methodsToExec[a].label&&"addAnnotation"!==e.globals.memory.methodsToExec[a].label||e.globals.memory.methodsToExec.splice(a,1);i=v.listToArray(i),Array.prototype.forEach.call(i,(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}))}},{key:"removeAnnotation",value:function(t,e){var i=t.w,a=i.globals.dom.baseEl.querySelectorAll(".".concat(e));a&&(i.globals.memory.methodsToExec.map((function(t,a){t.id===e&&i.globals.memory.methodsToExec.splice(a,1)})),Array.prototype.forEach.call(a,(function(t){t.parentElement.removeChild(t)})))}}]),t}(),Di=function(t){var e,i=t.isTimeline,a=t.ctx,s=t.seriesIndex,r=t.dataPointIndex,n=t.y1,o=t.y2,l=t.w,h=l.globals.seriesRangeStart[s][r],c=l.globals.seriesRangeEnd[s][r],d=l.globals.labels[r],u=l.config.series[s].name?l.config.series[s].name:"",g=l.globals.ttKeyFormatter,p=l.config.tooltip.y.title.formatter,f={w:l,seriesIndex:s,dataPointIndex:r,start:h,end:c};("function"==typeof p&&(u=p(u,f)),null!==(e=l.config.series[s].data[r])&&void 0!==e&&e.x&&(d=l.config.series[s].data[r].x),i)||"datetime"===l.config.xaxis.type&&(d=new Xi(a).xLabelFormat(l.globals.ttKeyFormatter,d,d,{i:void 0,dateFormatter:new zi(a).formatDate,w:l}));"function"==typeof g&&(d=g(d,f)),Number.isFinite(n)&&Number.isFinite(o)&&(h=n,c=o);var x="",b="",m=l.globals.colors[s];if(void 0===l.config.tooltip.x.formatter)if("datetime"===l.config.xaxis.type){var v=new zi(a);x=v.formatDate(v.getDate(h),l.config.tooltip.x.format),b=v.formatDate(v.getDate(c),l.config.tooltip.x.format)}else x=h,b=c;else x=l.config.tooltip.x.formatter(h),b=l.config.tooltip.x.formatter(c);return{start:h,end:c,startVal:x,endVal:b,ylabel:d,color:m,seriesName:u}},_i=function(t){var e=t.color,i=t.seriesName,a=t.ylabel,s=t.start,r=t.end,n=t.seriesIndex,o=t.dataPointIndex,l=t.ctx.tooltip.tooltipLabels.getFormatters(n);s=l.yLbFormatter(s),r=l.yLbFormatter(r);var h=l.yLbFormatter(t.w.globals.series[n][o]),c='<span class="value start-value">\n  '.concat(s,'\n  </span> <span class="separator">-</span> <span class="value end-value">\n  ').concat(r,"\n  </span>");return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+e+'">'+(i||"")+'</span></div><div> <span class="category">'+a+": </span> "+(t.w.globals.comboCharts?"rangeArea"===t.w.config.series[n].type||"rangeBar"===t.w.config.series[n].type?c:"<span>".concat(h,"</span>"):c)+" </div></div>"},Ni=function(){function t(e){i(this,t),this.opts=e}return s(t,[{key:"hideYAxis",value:function(){this.opts.yaxis[0].show=!1,this.opts.yaxis[0].title.text="",this.opts.yaxis[0].axisBorder.show=!1,this.opts.yaxis[0].axisTicks.show=!1,this.opts.yaxis[0].floating=!0}},{key:"line",value:function(){return{dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(t){this.hideYAxis();return v.extend(t,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"slope",value:function(){return this.hideYAxis(),{chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!0,formatter:function(t,e){var i=e.w.config.series[e.seriesIndex].name;return null!==t?i+": "+t:""},background:{enabled:!1},offsetX:-5},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}},xaxis:{position:"top",labels:{style:{fontSize:14,fontWeight:900}},tooltip:{enabled:!1},crosshairs:{show:!1}},markers:{size:8,hover:{sizeOffset:1}},legend:{show:!1},tooltip:{shared:!1,intersect:!0,followCursor:!0},stroke:{width:5,curve:"straight"}}}},{key:"bar",value:function(){return{chart:{stacked:!1},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]},background:{enabled:!1}},stroke:{width:0,lineCap:"round"},fill:{opacity:.85},legend:{markers:{shape:"square"}},tooltip:{shared:!1,intersect:!0},xaxis:{tooltip:{enabled:!1},tickPlacement:"between",crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"funnel",value:function(){return this.hideYAxis(),u(u({},this.bar()),{},{chart:{animations:{speed:800,animateGradually:{enabled:!1}}},plotOptions:{bar:{horizontal:!0,borderRadiusApplication:"around",borderRadius:0,dataLabels:{position:"center"}}},grid:{show:!1,padding:{left:0,right:0}},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}}})}},{key:"candlestick",value:function(){var t=this;return{stroke:{width:1,colors:["#333"]},fill:{opacity:1},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(e){var i=e.seriesIndex,a=e.dataPointIndex,s=e.w;return t._getBoxTooltip(s,i,a,["Open","High","","Low","Close"],"candlestick")}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"boxPlot",value:function(){var t=this;return{chart:{animations:{dynamicAnimation:{enabled:!1}}},stroke:{width:1,colors:["#24292e"]},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(e){var i=e.seriesIndex,a=e.dataPointIndex,s=e.w;return t._getBoxTooltip(s,i,a,["Minimum","Q1","Median","Q3","Maximum"],"boxPlot")}},markers:{size:7,strokeWidth:1,strokeColors:"#111"},xaxis:{crosshairs:{width:1}}}}},{key:"rangeBar",value:function(){return{chart:{animations:{animateGradually:!1}},stroke:{width:0,lineCap:"square"},plotOptions:{bar:{borderRadius:0,dataLabels:{position:"center"}}},dataLabels:{enabled:!1,formatter:function(t,e){e.ctx;var i=e.seriesIndex,a=e.dataPointIndex,s=e.w,r=function(){var t=s.globals.seriesRangeStart[i][a];return s.globals.seriesRangeEnd[i][a]-t};return s.globals.comboCharts?"rangeBar"===s.config.series[i].type||"rangeArea"===s.config.series[i].type?r():t:r()},background:{enabled:!1},style:{colors:["#fff"]}},markers:{size:10},tooltip:{shared:!1,followCursor:!0,custom:function(t){return t.w.config.plotOptions&&t.w.config.plotOptions.bar&&t.w.config.plotOptions.bar.horizontal?function(t){var e=Di(u(u({},t),{},{isTimeline:!0})),i=e.color,a=e.seriesName,s=e.ylabel,r=e.startVal,n=e.endVal;return _i(u(u({},t),{},{color:i,seriesName:a,ylabel:s,start:r,end:n}))}(t):function(t){var e=Di(t),i=e.color,a=e.seriesName,s=e.ylabel,r=e.start,n=e.end;return _i(u(u({},t),{},{color:i,seriesName:a,ylabel:s,start:r,end:n}))}(t)}},xaxis:{tickPlacement:"between",tooltip:{enabled:!1},crosshairs:{stroke:{width:0}}}}}},{key:"dumbbell",value:function(t){var e,i;return null!==(e=t.plotOptions.bar)&&void 0!==e&&e.barHeight||(t.plotOptions.bar.barHeight=2),null!==(i=t.plotOptions.bar)&&void 0!==i&&i.columnWidth||(t.plotOptions.bar.columnWidth=2),t}},{key:"area",value:function(){return{stroke:{width:4,fill:{type:"solid",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}}},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"rangeArea",value:function(){return{stroke:{curve:"straight",width:0},fill:{type:"solid",opacity:.6},markers:{size:0},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{intersect:!1,shared:!0,followCursor:!0,custom:function(t){return function(t){var e=Di(t),i=e.color,a=e.seriesName,s=e.ylabel,r=e.start,n=e.end;return _i(u(u({},t),{},{color:i,seriesName:a,ylabel:s,start:r,end:n}))}(t)}}}}},{key:"brush",value:function(t){return v.extend(t,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(t){t.dataLabels=t.dataLabels||{},t.dataLabels.formatter=t.dataLabels.formatter||void 0;var e=t.dataLabels.formatter;return t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})),"bar"===t.chart.type&&(t.dataLabels.formatter=e||function(t){return"number"==typeof t&&t?t.toFixed(0)+"%":t}),t}},{key:"stackedBars",value:function(){var t=this.bar();return u(u({},t),{},{plotOptions:u(u({},t.plotOptions),{},{bar:u(u({},t.plotOptions.bar),{},{borderRadiusApplication:"end",borderRadiusWhenStacked:"last"})})})}},{key:"convertCatToNumeric",value:function(t){return t.xaxis.convertedCatToNumeric=!0,t}},{key:"convertCatToNumericXaxis",value:function(t,e,i){t.xaxis.type="numeric",t.xaxis.labels=t.xaxis.labels||{},t.xaxis.labels.formatter=t.xaxis.labels.formatter||function(t){return v.isNumber(t)?Math.floor(t):t};var a=t.xaxis.labels.formatter,s=t.xaxis.categories&&t.xaxis.categories.length?t.xaxis.categories:t.labels;return i&&i.length&&(s=i.map((function(t){return Array.isArray(t)?t:String(t)}))),s&&s.length&&(t.xaxis.labels.formatter=function(t){return v.isNumber(t)?a(s[Math.floor(t)-1]):a(t)}),t.xaxis.categories=[],t.labels=[],t.xaxis.tickAmount=t.xaxis.tickAmount||"dataPoints",t}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:1,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square"}},grid:{padding:{right:20}}}}},{key:"treemap",value:function(){return{chart:{zoom:{enabled:!1}},dataLabels:{style:{fontSize:14,fontWeight:600,colors:["#fff"]}},stroke:{show:!0,width:2,colors:["#fff"]},legend:{show:!1},fill:{opacity:1,gradient:{stops:[0,100]}},tooltip:{followCursor:!0,x:{show:!1}},grid:{padding:{left:0,right:0}},xaxis:{crosshairs:{show:!1},tooltip:{enabled:!1}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",stops:[0,100]}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"},grid:{padding:{left:0,right:0,top:0,bottom:0}}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",shadeIntensity:.35,stops:[80,100],opacityFrom:1,opacityTo:1}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"},grid:{padding:{left:0,right:0,top:0,bottom:0}}}}},{key:"polarArea",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},enabled:!1},stroke:{show:!0,width:2},fill:{opacity:.7},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"},grid:{padding:{left:0,right:0,top:0,bottom:0}}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY:6,{dataLabels:{enabled:!1,style:{fontSize:"11px"}},stroke:{width:2},markers:{size:5,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},xaxis:{labels:{formatter:function(t){return t},style:{colors:["#a8a8a8"],fontSize:"11px"}},tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0},grid:{padding:{left:0,right:0,top:0,bottom:0}}}}},{key:"_getBoxTooltip",value:function(t,e,i,a,s){var r=t.globals.seriesCandleO[e][i],n=t.globals.seriesCandleH[e][i],o=t.globals.seriesCandleM[e][i],l=t.globals.seriesCandleL[e][i],h=t.globals.seriesCandleC[e][i];return t.config.series[e].type&&t.config.series[e].type!==s?'<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name?t.config.series[e].name:"series-"+(e+1),": <strong>").concat(t.globals.series[e][i],"</strong>\n        </div>"):'<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type,'">')+"<div>".concat(a[0],': <span class="value">')+r+"</span></div>"+"<div>".concat(a[1],': <span class="value">')+n+"</span></div>"+(o?"<div>".concat(a[2],': <span class="value">')+o+"</span></div>":"")+"<div>".concat(a[3],': <span class="value">')+l+"</span></div>"+"<div>".concat(a[4],': <span class="value">')+h+"</span></div></div>"}}]),t}(),Wi=function(){function t(e){i(this,t),this.opts=e}return s(t,[{key:"init",value:function(t){var e=t.responsiveOverride,i=this.opts,a=new Oi,s=new Ni(i);this.chartType=i.chart.type,i=this.extendYAxis(i),i=this.extendAnnotations(i);var r=a.init(),n={};if(i&&"object"===b(i)){var o,l,h,c,d,u,g,p,f,x,m={};m=-1!==["line","area","bar","candlestick","boxPlot","rangeBar","rangeArea","bubble","scatter","heatmap","treemap","pie","polarArea","donut","radar","radialBar"].indexOf(i.chart.type)?s[i.chart.type]():s.line(),null!==(o=i.plotOptions)&&void 0!==o&&null!==(l=o.bar)&&void 0!==l&&l.isFunnel&&(m=s.funnel()),i.chart.stacked&&"bar"===i.chart.type&&(m=s.stackedBars()),null!==(h=i.chart.brush)&&void 0!==h&&h.enabled&&(m=s.brush(m)),null!==(c=i.plotOptions)&&void 0!==c&&null!==(d=c.line)&&void 0!==d&&d.isSlopeChart&&(m=s.slope()),i.chart.stacked&&"100%"===i.chart.stackType&&(i=s.stacked100(i)),null!==(u=i.plotOptions)&&void 0!==u&&null!==(g=u.bar)&&void 0!==g&&g.isDumbbell&&(i=s.dumbbell(i)),this.checkForDarkTheme(window.Apex),this.checkForDarkTheme(i),i.xaxis=i.xaxis||window.Apex.xaxis||{},e||(i.xaxis.convertedCatToNumeric=!1),(null!==(p=(i=this.checkForCatToNumericXAxis(this.chartType,m,i)).chart.sparkline)&&void 0!==p&&p.enabled||null!==(f=window.Apex.chart)&&void 0!==f&&null!==(x=f.sparkline)&&void 0!==x&&x.enabled)&&(m=s.sparkline(m)),n=v.extend(r,m)}var y=v.extend(n,window.Apex);return r=v.extend(y,i),r=this.handleUserInputErrors(r)}},{key:"checkForCatToNumericXAxis",value:function(t,e,i){var a,s,r=new Ni(i),n=("bar"===t||"boxPlot"===t)&&(null===(a=i.plotOptions)||void 0===a||null===(s=a.bar)||void 0===s?void 0:s.horizontal),o="pie"===t||"polarArea"===t||"donut"===t||"radar"===t||"radialBar"===t||"heatmap"===t,l="datetime"!==i.xaxis.type&&"numeric"!==i.xaxis.type,h=i.xaxis.tickPlacement?i.xaxis.tickPlacement:e.xaxis&&e.xaxis.tickPlacement;return n||o||!l||"between"===h||(i=r.convertCatToNumeric(i)),i}},{key:"extendYAxis",value:function(t,e){var i=new Oi;(void 0===t.yaxis||!t.yaxis||Array.isArray(t.yaxis)&&0===t.yaxis.length)&&(t.yaxis={}),t.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(t.yaxis=v.extend(t.yaxis,window.Apex.yaxis)),t.yaxis.constructor!==Array?t.yaxis=[v.extend(i.yAxis,t.yaxis)]:t.yaxis=v.extendArray(t.yaxis,i.yAxis);var a=!1;t.yaxis.forEach((function(t){t.logarithmic&&(a=!0)}));var s=t.series;return e&&!s&&(s=e.config.series),a&&s.length!==t.yaxis.length&&s.length&&(t.yaxis=s.map((function(e,a){if(e.name||(s[a].name="series-".concat(a+1)),t.yaxis[a])return t.yaxis[a].seriesName=s[a].name,t.yaxis[a];var r=v.extend(i.yAxis,t.yaxis[0]);return r.show=!1,r}))),a&&s.length>1&&s.length!==t.yaxis.length&&console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"),t}},{key:"extendAnnotations",value:function(t){return void 0===t.annotations&&(t.annotations={},t.annotations.yaxis=[],t.annotations.xaxis=[],t.annotations.points=[]),t=this.extendYAxisAnnotations(t),t=this.extendXAxisAnnotations(t),t=this.extendPointAnnotations(t)}},{key:"extendYAxisAnnotations",value:function(t){var e=new Oi;return t.annotations.yaxis=v.extendArray(void 0!==t.annotations.yaxis?t.annotations.yaxis:[],e.yAxisAnnotation),t}},{key:"extendXAxisAnnotations",value:function(t){var e=new Oi;return t.annotations.xaxis=v.extendArray(void 0!==t.annotations.xaxis?t.annotations.xaxis:[],e.xAxisAnnotation),t}},{key:"extendPointAnnotations",value:function(t){var e=new Oi;return t.annotations.points=v.extendArray(void 0!==t.annotations.points?t.annotations.points:[],e.pointAnnotation),t}},{key:"checkForDarkTheme",value:function(t){t.theme&&"dark"===t.theme.mode&&(t.tooltip||(t.tooltip={}),"light"!==t.tooltip.theme&&(t.tooltip.theme="dark"),t.chart.foreColor||(t.chart.foreColor="#f6f7f8"),t.theme.palette||(t.theme.palette="palette4"))}},{key:"handleUserInputErrors",value:function(t){var e=t;if(e.tooltip.shared&&e.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if("bar"===e.chart.type&&e.plotOptions.bar.horizontal){if(e.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");e.yaxis[0].reversed&&(e.yaxis[0].opposite=!0),e.xaxis.tooltip.enabled=!1,e.yaxis[0].tooltip.enabled=!1,e.chart.zoom.enabled=!1}return"bar"!==e.chart.type&&"rangeBar"!==e.chart.type||e.tooltip.shared&&"barWidth"===e.xaxis.crosshairs.width&&e.series.length>1&&(e.xaxis.crosshairs.width="tickWidth"),"candlestick"!==e.chart.type&&"boxPlot"!==e.chart.type||e.yaxis[0].reversed&&(console.warn("Reversed y-axis in ".concat(e.chart.type," chart is not supported.")),e.yaxis[0].reversed=!1),e}}]),t}(),Bi=function(){function t(){i(this,t)}return s(t,[{key:"initGlobalVars",value:function(t){t.series=[],t.seriesCandleO=[],t.seriesCandleH=[],t.seriesCandleM=[],t.seriesCandleL=[],t.seriesCandleC=[],t.seriesRangeStart=[],t.seriesRangeEnd=[],t.seriesRange=[],t.seriesPercent=[],t.seriesGoals=[],t.seriesX=[],t.seriesZ=[],t.seriesNames=[],t.seriesTotals=[],t.seriesLog=[],t.seriesColors=[],t.stackedSeriesTotals=[],t.seriesXvalues=[],t.seriesYvalues=[],t.labels=[],t.hasXaxisGroups=!1,t.groups=[],t.barGroups=[],t.lineGroups=[],t.areaGroups=[],t.hasSeriesGroups=!1,t.seriesGroups=[],t.categoryLabels=[],t.timescaleLabels=[],t.noLabelsProvided=!1,t.resizeTimer=null,t.selectionResizeTimer=null,t.lastWheelExecution=0,t.delayedElements=[],t.pointsArray=[],t.dataLabelsRects=[],t.isXNumeric=!1,t.skipLastTimelinelabel=!1,t.skipFirstTimelinelabel=!1,t.isDataXYZ=!1,t.isMultiLineX=!1,t.isMultipleYAxis=!1,t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE,t.minYArr=[],t.maxYArr=[],t.maxX=-Number.MAX_VALUE,t.minX=Number.MAX_VALUE,t.initialMaxX=-Number.MAX_VALUE,t.initialMinX=Number.MAX_VALUE,t.maxDate=0,t.minDate=Number.MAX_VALUE,t.minZ=Number.MAX_VALUE,t.maxZ=-Number.MAX_VALUE,t.minXDiff=Number.MAX_VALUE,t.yAxisScale=[],t.xAxisScale=null,t.xAxisTicksPositions=[],t.yLabelsCoords=[],t.yTitleCoords=[],t.barPadForNumericAxis=0,t.padHorizontal=0,t.xRange=0,t.yRange=[],t.zRange=0,t.dataPoints=0,t.xTickAmount=0,t.multiAxisTickAmount=0}},{key:"globalVars",value:function(t){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:t.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,isExecCalled:!1,initialConfig:null,initialSeries:[],lastXAxis:[],lastYAxis:[],columnSeries:null,labels:[],timescaleLabels:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],dataFormatXNumeric:!1,capturedSeriesIndex:-1,capturedDataPointIndex:-1,selectedDataPoints:[],invalidLogScale:!1,ignoreYAxisIndexes:[],maxValsInArrayIndex:0,radialSize:0,selection:void 0,zoomEnabled:"zoom"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.zoom&&t.chart.zoom.enabled,panEnabled:"pan"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.pan,selectionEnabled:"selection"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.selection,yaxis:null,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,skipLastTimelinelabel:!1,skipFirstTimelinelabel:!1,delayedElements:[],axisCharts:!0,isDataXYZ:!1,isSlopeChart:t.plotOptions.line.isSlopeChart,resized:!1,resizeTimer:null,comboCharts:!1,dataChanged:!1,previousPaths:[],allSeriesHasEqualX:!0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,zoomed:!1,gridWidth:0,gridHeight:0,rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,xAxisGroupLabelsHeight:0,xAxisLabelsWidth:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null,niceScaleAllowedMagMsd:[[1,1,2,5,5,5,10,10,10,10,10],[1,1,2,5,5,5,10,10,10,10,10]],niceScaleDefaultTicks:[1,2,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,12,12,12,12,12,12,12,12,12,24],seriesYAxisMap:[],seriesYAxisReverseMap:[]}}},{key:"init",value:function(t){var e=this.globalVars(t);return this.initGlobalVars(e),e.initialConfig=v.extend({},t),e.initialSeries=v.clone(t.series),e.lastXAxis=v.clone(e.initialConfig.xaxis),e.lastYAxis=v.clone(e.initialConfig.yaxis),e}}]),t}(),Gi=function(){function t(e){i(this,t),this.opts=e}return s(t,[{key:"init",value:function(){var t=new Wi(this.opts).init({responsiveOverride:!1});return{config:t,globals:(new Bi).init(t)}}}]),t}(),ji=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.opts=null,this.seriesIndex=0,this.patternIDs=[]}return s(t,[{key:"clippedImgArea",value:function(t){var e=this.w,i=e.config,a=parseInt(e.globals.gridWidth,10),s=parseInt(e.globals.gridHeight,10),r=a>s?a:s,n=t.image,o=0,l=0;void 0===t.width&&void 0===t.height?void 0!==i.fill.image.width&&void 0!==i.fill.image.height?(o=i.fill.image.width+1,l=i.fill.image.height):(o=r+1,l=r):(o=t.width,l=t.height);var h=document.createElementNS(e.globals.SVGNS,"pattern");Mi.setAttrs(h,{id:t.patternID,patternUnits:t.patternUnits?t.patternUnits:"userSpaceOnUse",width:o+"px",height:l+"px"});var c=document.createElementNS(e.globals.SVGNS,"image");h.appendChild(c),c.setAttributeNS(window.SVG.xlink,"href",n),Mi.setAttrs(c,{x:0,y:0,preserveAspectRatio:"none",width:o+"px",height:l+"px"}),c.style.opacity=t.opacity,e.globals.dom.elDefs.node.appendChild(h)}},{key:"getSeriesIndex",value:function(t){var e=this.w,i=e.config.chart.type;return("bar"===i||"rangeBar"===i)&&e.config.plotOptions.bar.distributed||"heatmap"===i||"treemap"===i?this.seriesIndex=t.seriesNumber:this.seriesIndex=t.seriesNumber%e.globals.series.length,this.seriesIndex}},{key:"computeColorStops",value:function(t,e){var i,a=this.w,s=null,n=null,o=r(t);try{for(o.s();!(i=o.n()).done;){var l=i.value;l>=e.threshold?(null===s||l>s)&&(s=l):(null===n||l<n)&&(n=l)}}catch(t){o.e(t)}finally{o.f()}null===s&&(s=e.threshold),null===n&&(n=e.threshold);var h=s-e.threshold+(e.threshold-n);0===h&&(h=1);var c=100-(e.threshold-n)/h*100;return[{offset:c=Math.max(0,Math.min(c,100)),color:e.colorAboveThreshold,opacity:a.config.fill.opacity},{offset:0,color:e.colorBelowThreshold,opacity:a.config.fill.opacity}]}},{key:"fillPath",value:function(t){var e,i,a,s=this.w;this.opts=t;var r,n,o,l=this.w.config;this.seriesIndex=this.getSeriesIndex(t);var h=l.plotOptions.line.colors.colorAboveThreshold&&l.plotOptions.line.colors.colorBelowThreshold,c=this.getFillColors()[this.seriesIndex];void 0!==s.globals.seriesColors[this.seriesIndex]&&(c=s.globals.seriesColors[this.seriesIndex]),"function"==typeof c&&(c=c({seriesIndex:this.seriesIndex,dataPointIndex:t.dataPointIndex,value:t.value,w:s}));var d,u,g,p=t.fillType?t.fillType:this.getFillType(this.seriesIndex),x=Array.isArray(l.fill.opacity)?l.fill.opacity[this.seriesIndex]:l.fill.opacity,b="gradient"===p||h;(t.color&&(c=t.color),null!==(e=s.config.series[this.seriesIndex])&&void 0!==e&&null!==(i=e.data)&&void 0!==i&&null!==(a=i[t.dataPointIndex])&&void 0!==a&&a.fillColor)&&(c=null===(d=s.config.series[this.seriesIndex])||void 0===d||null===(u=d.data)||void 0===u||null===(g=u[t.dataPointIndex])||void 0===g?void 0:g.fillColor);c||(c="#fff",console.warn("undefined color - ApexCharts"));var m=c;if(-1===c.indexOf("rgb")?-1===c.indexOf("#")?m=c:c.length<9&&(m=v.hexToRgba(c,x)):c.indexOf("rgba")>-1?x=v.getOpacityFromRGBA(c):m=v.hexToRgba(v.rgb2hex(c),x),t.opacity&&(x=t.opacity),"pattern"===p&&(n=this.handlePatternFill({fillConfig:t.fillConfig,patternFill:n,fillColor:c,fillOpacity:x,defaultColor:m})),b){var y=f(l.fill.gradient.colorStops)||[],w=l.fill.gradient.type;h&&(y[this.seriesIndex]=this.computeColorStops(s.globals.series[this.seriesIndex],l.plotOptions.line.colors),w="vertical"),o=this.handleGradientFill({type:w,fillConfig:t.fillConfig,fillColor:c,fillOpacity:x,colorStops:y,i:this.seriesIndex})}if("image"===p){var k=l.fill.image.src,A=t.patternID?t.patternID:"",C="pattern".concat(s.globals.cuid).concat(t.seriesNumber+1).concat(A);-1===this.patternIDs.indexOf(C)&&(this.clippedImgArea({opacity:x,image:Array.isArray(k)?t.seriesNumber<k.length?k[t.seriesNumber]:k[0]:k,width:t.width?t.width:void 0,height:t.height?t.height:void 0,patternUnits:t.patternUnits,patternID:C}),this.patternIDs.push(C)),r="url(#".concat(C,")")}else r=b?o:"pattern"===p?n:m;return t.solid&&(r=m),r}},{key:"getFillType",value:function(t){var e=this.w;return Array.isArray(e.config.fill.type)?e.config.fill.type[t]:e.config.fill.type}},{key:"getFillColors",value:function(){var t=this.w,e=t.config,i=this.opts,a=[];return t.globals.comboCharts?"line"===t.config.series[this.seriesIndex].type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors):"line"===e.chart.type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors),void 0!==i.fillColors&&(a=[],Array.isArray(i.fillColors)?a=i.fillColors.slice():a.push(i.fillColors)),a}},{key:"handlePatternFill",value:function(t){var e=t.fillConfig,i=t.patternFill,a=t.fillColor,s=t.fillOpacity,r=t.defaultColor,n=this.w.config.fill;e&&(n=e);var o=this.opts,l=new Mi(this.ctx),h=Array.isArray(n.pattern.strokeWidth)?n.pattern.strokeWidth[this.seriesIndex]:n.pattern.strokeWidth,c=a;Array.isArray(n.pattern.style)?i=void 0!==n.pattern.style[o.seriesNumber]?l.drawPattern(n.pattern.style[o.seriesNumber],n.pattern.width,n.pattern.height,c,h,s):r:i=l.drawPattern(n.pattern.style,n.pattern.width,n.pattern.height,c,h,s);return i}},{key:"handleGradientFill",value:function(t){var e=t.type,i=t.fillColor,a=t.fillOpacity,s=t.fillConfig,r=t.colorStops,n=t.i,o=this.w.config.fill;s&&(o=u(u({},o),s));var l=this.opts,h=new Mi(this.ctx),c=new v;e=e||o.gradient.type;var d,g=i,p=void 0===o.gradient.opacityFrom?a:Array.isArray(o.gradient.opacityFrom)?o.gradient.opacityFrom[n]:o.gradient.opacityFrom;g.indexOf("rgba")>-1&&(p=v.getOpacityFromRGBA(g));var f=void 0===o.gradient.opacityTo?a:Array.isArray(o.gradient.opacityTo)?o.gradient.opacityTo[n]:o.gradient.opacityTo;if(void 0===o.gradient.gradientToColors||0===o.gradient.gradientToColors.length)d="dark"===o.gradient.shade?c.shadeColor(-1*parseFloat(o.gradient.shadeIntensity),i.indexOf("rgb")>-1?v.rgb2hex(i):i):c.shadeColor(parseFloat(o.gradient.shadeIntensity),i.indexOf("rgb")>-1?v.rgb2hex(i):i);else if(o.gradient.gradientToColors[l.seriesNumber]){var x=o.gradient.gradientToColors[l.seriesNumber];d=x,x.indexOf("rgba")>-1&&(f=v.getOpacityFromRGBA(x))}else d=i;if(o.gradient.gradientFrom&&(g=o.gradient.gradientFrom),o.gradient.gradientTo&&(d=o.gradient.gradientTo),o.gradient.inverseColors){var b=g;g=d,d=b}return g.indexOf("rgb")>-1&&(g=v.rgb2hex(g)),d.indexOf("rgb")>-1&&(d=v.rgb2hex(d)),h.drawGradient(e,g,d,p,f,l.size,o.gradient.stops,r,n)}}]),t}(),Vi=function(){function t(e,a){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"setGlobalMarkerSize",value:function(){var t=this.w;if(t.globals.markers.size=Array.isArray(t.config.markers.size)?t.config.markers.size:[t.config.markers.size],t.globals.markers.size.length>0){if(t.globals.markers.size.length<t.globals.series.length+1)for(var e=0;e<=t.globals.series.length;e++)void 0===t.globals.markers.size[e]&&t.globals.markers.size.push(t.globals.markers.size[0])}else t.globals.markers.size=t.config.series.map((function(e){return t.config.markers.size}))}},{key:"plotChartMarkers",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=this.w,n=e,o=t,l=null,h=new Mi(this.ctx),c=r.config.markers.discrete&&r.config.markers.discrete.length;if(Array.isArray(o.x))for(var d=0;d<o.x.length;d++){var u=void 0,g=i,p=!v.isNumber(o.y[d]);1===i&&0===d&&(g=0),1===i&&1===d&&(g=1);var f="apexcharts-marker";if("line"!==r.config.chart.type&&"area"!==r.config.chart.type||r.globals.comboCharts||r.config.tooltip.intersect||(f+=" no-pointer-events"),(Array.isArray(r.config.markers.size)?r.globals.markers.size[e]>0:r.config.markers.size>0)||s||c){p||(f+=" w".concat(v.randomId()));var x=this.getMarkerConfig({cssClass:f,seriesIndex:e,dataPointIndex:g});if(r.config.series[n].data[g]&&(r.config.series[n].data[g].fillColor&&(x.pointFillColor=r.config.series[n].data[g].fillColor),r.config.series[n].data[g].strokeColor&&(x.pointStrokeColor=r.config.series[n].data[g].strokeColor)),void 0!==a&&(x.pSize=a),(o.x[d]<-r.globals.markers.largestSize||o.x[d]>r.globals.gridWidth+r.globals.markers.largestSize||o.y[d]<-r.globals.markers.largestSize||o.y[d]>r.globals.gridHeight+r.globals.markers.largestSize)&&(x.pSize=0),!p)(r.globals.markers.size[e]>0||s||c)&&!l&&(l=h.group({class:s||c?"":"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(r.globals.cuid,")")),(u=h.drawMarker(o.x[d],o.y[d],x)).attr("rel",g),u.attr("j",g),u.attr("index",e),u.node.setAttribute("default-marker-size",x.pSize),new Li(this.ctx).setSelectionFilter(u,e,g),this.addEvents(u),l&&l.add(u)}else void 0===r.globals.pointsArray[e]&&(r.globals.pointsArray[e]=[]),r.globals.pointsArray[e].push([o.x[d],o.y[d]])}return l}},{key:"getMarkerConfig",value:function(t){var e=t.cssClass,i=t.seriesIndex,a=t.dataPointIndex,s=void 0===a?null:a,r=t.radius,n=void 0===r?null:r,o=t.size,l=void 0===o?null:o,h=t.strokeWidth,c=void 0===h?null:h,d=this.w,u=this.getMarkerStyle(i),g=null===l?d.globals.markers.size[i]:l,p=d.config.markers;return null!==s&&p.discrete.length&&p.discrete.map((function(t){t.seriesIndex===i&&t.dataPointIndex===s&&(u.pointStrokeColor=t.strokeColor,u.pointFillColor=t.fillColor,g=t.size,u.pointShape=t.shape)})),{pSize:null===n?g:n,pRadius:null!==n?n:p.radius,pointStrokeWidth:null!==c?c:Array.isArray(p.strokeWidth)?p.strokeWidth[i]:p.strokeWidth,pointStrokeColor:u.pointStrokeColor,pointFillColor:u.pointFillColor,shape:u.pointShape||(Array.isArray(p.shape)?p.shape[i]:p.shape),class:e,pointStrokeOpacity:Array.isArray(p.strokeOpacity)?p.strokeOpacity[i]:p.strokeOpacity,pointStrokeDashArray:Array.isArray(p.strokeDashArray)?p.strokeDashArray[i]:p.strokeDashArray,pointFillOpacity:Array.isArray(p.fillOpacity)?p.fillOpacity[i]:p.fillOpacity,seriesIndex:i}}},{key:"addEvents",value:function(t){var e=this.w,i=new Mi(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this.ctx,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this.ctx,t)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this.ctx,t)),t.node.addEventListener("click",e.config.markers.onClick),t.node.addEventListener("dblclick",e.config.markers.onDblClick),t.node.addEventListener("touchstart",i.pathMouseDown.bind(this.ctx,t),{passive:!0})}},{key:"getMarkerStyle",value:function(t){var e=this.w,i=e.globals.markers.colors,a=e.config.markers.strokeColor||e.config.markers.strokeColors;return{pointStrokeColor:Array.isArray(a)?a[t]:a,pointFillColor:Array.isArray(i)?i[t]:i}}}]),t}(),Ui=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.initialAnim=this.w.config.chart.animations.enabled}return s(t,[{key:"draw",value:function(t,e,i){var a=this.w,s=new Mi(this.ctx),r=i.realIndex,n=i.pointsPos,o=i.zRatio,l=i.elParent,h=s.group({class:"apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});if(h.attr("clip-path","url(#gridRectMarkerMask".concat(a.globals.cuid,")")),Array.isArray(n.x))for(var c=0;c<n.x.length;c++){var d=e+1,u=!0;0===e&&0===c&&(d=0),0===e&&1===c&&(d=1);var g=a.globals.markers.size[r];if(o!==1/0){var p=a.config.plotOptions.bubble;g=a.globals.seriesZ[r][d],p.zScaling&&(g/=o),p.minBubbleRadius&&g<p.minBubbleRadius&&(g=p.minBubbleRadius),p.maxBubbleRadius&&g>p.maxBubbleRadius&&(g=p.maxBubbleRadius)}var f=n.x[c],x=n.y[c];if(g=g||0,null!==x&&void 0!==a.globals.series[r][d]||(u=!1),u){var b=this.drawPoint(f,x,g,r,d,e);h.add(b)}l.add(h)}}},{key:"drawPoint",value:function(t,e,i,a,s,r){var n=this.w,o=a,l=new y(this.ctx),h=new Li(this.ctx),c=new ji(this.ctx),d=new Vi(this.ctx),u=new Mi(this.ctx),g=d.getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:o,dataPointIndex:s,radius:"bubble"===n.config.chart.type||n.globals.comboCharts&&n.config.series[a]&&"bubble"===n.config.series[a].type?i:null}),p=c.fillPath({seriesNumber:a,dataPointIndex:s,color:g.pointFillColor,patternUnits:"objectBoundingBox",value:n.globals.series[a][r]}),f=u.drawMarker(t,e,g);if(n.config.series[o].data[s]&&n.config.series[o].data[s].fillColor&&(p=n.config.series[o].data[s].fillColor),f.attr({fill:p}),n.config.chart.dropShadow.enabled){var x=n.config.chart.dropShadow;h.dropShadow(f,x,a)}if(!this.initialAnim||n.globals.dataChanged||n.globals.resized)n.globals.animationEnded=!0;else{var b=n.config.chart.animations.speed;l.animateMarker(f,b,n.globals.easing,(function(){window.setTimeout((function(){l.animationCompleted(f)}),100)}))}return f.attr({rel:s,j:s,index:a,"default-marker-size":g.pSize}),h.setSelectionFilter(f,a,s),d.addEvents(f),f.node.classList.add("apexcharts-marker"),f}},{key:"centerTextInBubble",value:function(t){var e=this.w;return{y:t+=parseInt(e.config.dataLabels.style.fontSize,10)/4}}}]),t}(),qi=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"dataLabelsCorrection",value:function(t,e,i,a,s,r,n){var o=this.w,l=!1,h=new Mi(this.ctx).getTextRects(i,n),c=h.width,d=h.height;e<0&&(e=0),e>o.globals.gridHeight+d&&(e=o.globals.gridHeight+d/2),void 0===o.globals.dataLabelsRects[a]&&(o.globals.dataLabelsRects[a]=[]),o.globals.dataLabelsRects[a].push({x:t,y:e,width:c,height:d});var u=o.globals.dataLabelsRects[a].length-2,g=void 0!==o.globals.lastDrawnDataLabelsIndexes[a]?o.globals.lastDrawnDataLabelsIndexes[a][o.globals.lastDrawnDataLabelsIndexes[a].length-1]:0;if(void 0!==o.globals.dataLabelsRects[a][u]){var p=o.globals.dataLabelsRects[a][g];(t>p.x+p.width||e>p.y+p.height||e+d<p.y||t+c<p.x)&&(l=!0)}return(0===s||r)&&(l=!0),{x:t,y:e,textRects:h,drawnextLabel:l}}},{key:"drawDataLabel",value:function(t){var e=this,i=t.type,a=t.pos,s=t.i,r=t.j,n=t.isRangeStart,o=t.strokeWidth,l=void 0===o?2:o,h=this.w,c=new Mi(this.ctx),d=h.config.dataLabels,u=0,g=0,p=r,f=null;if(-1!==h.globals.collapsedSeriesIndices.indexOf(s)||!d.enabled||!Array.isArray(a.x))return f;f=c.group({class:"apexcharts-data-labels"});for(var x=0;x<a.x.length;x++)if(u=a.x[x]+d.offsetX,g=a.y[x]+d.offsetY+l,!isNaN(u)){1===r&&0===x&&(p=0),1===r&&1===x&&(p=1);var b=h.globals.series[s][p];"rangeArea"===i&&(b=n?h.globals.seriesRangeStart[s][p]:h.globals.seriesRangeEnd[s][p]);var m="",v=function(t){return h.config.dataLabels.formatter(t,{ctx:e.ctx,seriesIndex:s,dataPointIndex:p,w:h})};if("bubble"===h.config.chart.type)m=v(b=h.globals.seriesZ[s][p]),g=a.y[x],g=new Ui(this.ctx).centerTextInBubble(g,s,p).y;else void 0!==b&&(m=v(b));var y=h.config.dataLabels.textAnchor;h.globals.isSlopeChart&&(y=0===p?"end":p===h.config.series[s].data.length-1?"start":"middle"),this.plotDataLabelsText({x:u,y:g,text:m,i:s,j:p,parent:f,offsetCorrection:!0,dataLabelsConfig:h.config.dataLabels,textAnchor:y})}return f}},{key:"plotDataLabelsText",value:function(t){var e=this.w,i=new Mi(this.ctx),a=t.x,s=t.y,r=t.i,n=t.j,o=t.text,l=t.textAnchor,h=t.fontSize,c=t.parent,d=t.dataLabelsConfig,u=t.color,g=t.alwaysDrawDataLabel,p=t.offsetCorrection,f=t.className,x=null;if(Array.isArray(e.config.dataLabels.enabledOnSeries)&&e.config.dataLabels.enabledOnSeries.indexOf(r)<0)return x;var b={x:a,y:s,drawnextLabel:!0,textRects:null};p&&(b=this.dataLabelsCorrection(a,s,o,r,n,g,parseInt(d.style.fontSize,10))),e.globals.zoomed||(a=b.x,s=b.y),b.textRects&&(a<-20-b.textRects.width||a>e.globals.gridWidth+b.textRects.width+30)&&(o="");var m=e.globals.dataLabels.style.colors[r];(("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||e.config.dataLabels.distributed)&&(m=e.globals.dataLabels.style.colors[n]),"function"==typeof m&&(m=m({series:e.globals.series,seriesIndex:r,dataPointIndex:n,w:e})),u&&(m=u);var v=d.offsetX,y=d.offsetY;if("bar"!==e.config.chart.type&&"rangeBar"!==e.config.chart.type||(v=0,y=0),e.globals.isSlopeChart&&(0!==n&&(v=-2*d.offsetX+5),0!==n&&n!==e.config.series[r].data.length-1&&(v=0)),b.drawnextLabel){if((x=i.drawText({width:100,height:parseInt(d.style.fontSize,10),x:a+v,y:s+y,foreColor:m,textAnchor:l||d.textAnchor,text:o,fontSize:h||d.style.fontSize,fontFamily:d.style.fontFamily,fontWeight:d.style.fontWeight||"normal"})).attr({class:f||"apexcharts-datalabel",cx:a,cy:s}),d.dropShadow.enabled){var w=d.dropShadow;new Li(this.ctx).dropShadow(x,w)}c.add(x),void 0===e.globals.lastDrawnDataLabelsIndexes[r]&&(e.globals.lastDrawnDataLabelsIndexes[r]=[]),e.globals.lastDrawnDataLabelsIndexes[r].push(n)}return x}},{key:"addBackgroundToDataLabel",value:function(t,e){var i=this.w,a=i.config.dataLabels.background,s=a.padding,r=a.padding/2,n=e.width,o=e.height,l=new Mi(this.ctx).drawRect(e.x-s,e.y-r/2,n+2*s,o+r,a.borderRadius,"transparent"!==i.config.chart.background&&i.config.chart.background?i.config.chart.background:"#fff",a.opacity,a.borderWidth,a.borderColor);a.dropShadow.enabled&&new Li(this.ctx).dropShadow(l,a.dropShadow);return l}},{key:"dataLabelsBackground",value:function(){var t=this.w;if("bubble"!==t.config.chart.type)for(var e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"),i=0;i<e.length;i++){var a=e[i],s=a.getBBox(),r=null;if(s.width&&s.height&&(r=this.addBackgroundToDataLabel(a,s)),r){a.parentNode.insertBefore(r.node,a);var n=a.getAttribute("fill");t.config.chart.animations.enabled&&!t.globals.resized&&!t.globals.dataChanged?r.animate().attr({fill:n}):r.attr({fill:n}),a.setAttribute("fill",t.config.dataLabels.background.foreColor)}}}},{key:"bringForward",value:function(){for(var t=this.w,e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"),i=t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"),a=0;a<e.length;a++)i&&i.insertBefore(e[a],i.nextSibling)}}]),t}(),Zi=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.legendInactiveClass="legend-mouseover-inactive"}return s(t,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")}},{key:"getSeriesByName",value:function(t){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(v.escapeString(t),"']"))}},{key:"isSeriesHidden",value:function(t){var e=this.getSeriesByName(t),i=parseInt(e.getAttribute("data:realIndex"),10);return{isHidden:e.classList.contains("apexcharts-series-collapsed"),realIndex:i}}},{key:"addCollapsedClassToSeries",value:function(t,e){var i=this.w;function a(i){for(var a=0;a<i.length;a++)i[a].index===e&&t.node.classList.add("apexcharts-series-collapsed")}a(i.globals.collapsedSeries),a(i.globals.ancillaryCollapsedSeries)}},{key:"toggleSeries",value:function(t){var e=this.isSeriesHidden(t);return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,e.isHidden),e.isHidden}},{key:"showSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden&&this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!0)}},{key:"hideSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden||this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!1)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w,s=v.clone(a.globals.initialSeries);a.globals.previousPaths=[],i?(a.globals.collapsedSeries=[],a.globals.ancillaryCollapsedSeries=[],a.globals.collapsedSeriesIndices=[],a.globals.ancillaryCollapsedSeriesIndices=[]):s=this.emptyCollapsedSeries(s),a.config.series=s,t&&(e&&(a.globals.zoomed=!1,this.ctx.updateHelpers.revertDefaultAxisMinMax()),this.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled))}},{key:"emptyCollapsedSeries",value:function(t){for(var e=this.w,i=0;i<t.length;i++)e.globals.collapsedSeriesIndices.indexOf(i)>-1&&(t[i].data=[]);return t}},{key:"highlightSeries",value:function(t){var e=this.w,i=this.getSeriesByName(t),a=parseInt(null==i?void 0:i.getAttribute("data:realIndex"),10),s=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"),r=null,n=null,o=null;if(e.globals.axisCharts||"radialBar"===e.config.chart.type)if(e.globals.axisCharts){r=e.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a,"']")),n=e.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(a,"']"));var l=e.globals.seriesYAxisReverseMap[a];o=e.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(l,"']"))}else r=e.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a+1,"']"));else r=e.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a+1,"'] path"));for(var h=0;h<s.length;h++)s[h].classList.add(this.legendInactiveClass);if(r)e.globals.axisCharts||r.parentNode.classList.remove(this.legendInactiveClass),r.classList.remove(this.legendInactiveClass),null!==n&&n.classList.remove(this.legendInactiveClass),null!==o&&o.classList.remove(this.legendInactiveClass);else for(var c=0;c<s.length;c++)s[c].classList.remove(this.legendInactiveClass)}},{key:"toggleSeriesOnHover",value:function(t,e){var i=this.w;e||(e=t.target);var a=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");if("mousemove"===t.type){var s=parseInt(e.getAttribute("rel"),10)-1;this.highlightSeries(i.globals.seriesNames[s])}else if("mouseout"===t.type)for(var r=0;r<a.length;r++)a[r].classList.remove(this.legendInactiveClass)}},{key:"highlightRangeInSeries",value:function(t,e){var i=this,a=this.w,s=a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),r=function(t){for(var e=0;e<s.length;e++)s[e].classList[t](i.legendInactiveClass)};if("mousemove"===t.type){var n=parseInt(e.getAttribute("rel"),10)-1;r("add");var o=a.config.plotOptions.heatmap.colorScale.ranges;!function(t,e){for(var a=0;a<s.length;a++){var r=Number(s[a].getAttribute("val"));r>=t.from&&(r<t.to||t.to===e&&r===e)&&s[a].classList.remove(i.legendInactiveClass)}}(o[n],o.reduce((function(t,e){return Math.max(t,e.to)}),0))}else"mouseout"===t.type&&r("remove")}},{key:"getActiveConfigSeriesIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"asc",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=this.w,a=0;if(i.config.series.length>1)for(var s=i.config.series.map((function(t,a){return t.data&&t.data.length>0&&-1===i.globals.collapsedSeriesIndices.indexOf(a)&&(!i.globals.comboCharts||0===e.length||e.length&&e.indexOf(i.config.series[a].type)>-1)?a:-1})),r="asc"===t?0:s.length-1;"asc"===t?r<s.length:r>=0;"asc"===t?r++:r--)if(-1!==s[r]){a=s[r];break}return a}},{key:"getBarSeriesIndices",value:function(){return this.w.globals.comboCharts?this.w.config.series.map((function(t,e){return"bar"===t.type||"column"===t.type?e:-1})).filter((function(t){return-1!==t})):this.w.config.series.map((function(t,e){return e}))}},{key:"getPreviousPaths",value:function(){var t=this.w;function e(e,i,a){for(var s=e[i].childNodes,r={type:a,paths:[],realIndex:e[i].getAttribute("data:realIndex")},n=0;n<s.length;n++)if(s[n].hasAttribute("pathTo")){var o=s[n].getAttribute("pathTo");r.paths.push({d:o})}t.globals.previousPaths.push(r)}t.globals.previousPaths=[];["line","area","bar","rangebar","rangeArea","candlestick","radar"].forEach((function(i){for(var a,s=(a=i,t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a,"-series .apexcharts-series"))),r=0;r<s.length;r++)e(s,r,i)}));var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series"));if(i.length>0)for(var a=function(e){for(var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series[data\\:realIndex='").concat(e,"'] rect")),a=[],s=function(t){var e=function(e){return i[t].getAttribute(e)},s={x:parseFloat(e("x")),y:parseFloat(e("y")),width:parseFloat(e("width")),height:parseFloat(e("height"))};a.push({rect:s,color:i[t].getAttribute("color")})},r=0;r<i.length;r++)s(r);t.globals.previousPaths.push(a)},s=0;s<i.length;s++)a(s);t.globals.axisCharts||(t.globals.previousPaths=t.globals.series)}},{key:"clearPreviousPaths",value:function(){var t=this.w;t.globals.previousPaths=[],t.globals.allSeriesCollapsed=!1}},{key:"handleNoData",value:function(){var t=this.w,e=t.config.noData,i=new Mi(this.ctx),a=t.globals.svgWidth/2,s=t.globals.svgHeight/2,r="middle";if(t.globals.noData=!0,t.globals.animationEnded=!0,"left"===e.align?(a=10,r="start"):"right"===e.align&&(a=t.globals.svgWidth-10,r="end"),"top"===e.verticalAlign?s=50:"bottom"===e.verticalAlign&&(s=t.globals.svgHeight-50),a+=e.offsetX,s=s+parseInt(e.style.fontSize,10)+2+e.offsetY,void 0!==e.text&&""!==e.text){var n=i.drawText({x:a,y:s,text:e.text,textAnchor:r,fontSize:e.style.fontSize,fontFamily:e.style.fontFamily,foreColor:e.style.color,opacity:1,class:"apexcharts-text-nodata"});t.globals.dom.Paper.add(n)}}},{key:"setNullSeriesToZeroValues",value:function(t){for(var e=this.w,i=0;i<t.length;i++)if(0===t[i].length)for(var a=0;a<t[e.globals.maxValsInArrayIndex].length;a++)t[i].push(0);return t}},{key:"hasAllSeriesEqualX",value:function(){for(var t=!0,e=this.w,i=this.filteredSeriesX(),a=0;a<i.length-1;a++)if(i[a][0]!==i[a+1][0]){t=!1;break}return e.globals.allSeriesHasEqualX=t,t}},{key:"filteredSeriesX",value:function(){var t=this.w.globals.seriesX.map((function(t){return t.length>0?t:[]}));return t}}]),t}(),$i=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[],this.seriesGoals=[],this.coreUtils=new Pi(this.ctx)}return s(t,[{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var t=this.w.config.series.slice(),e=new Zi(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&null!==t[this.activeSeriesIndex].data[0]&&void 0!==t[this.activeSeriesIndex].data[0].x&&null!==t[this.activeSeriesIndex].data[0])return!0}},{key:"isFormat2DArray",value:function(){var t=this.w.config.series.slice(),e=new Zi(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&void 0!==t[this.activeSeriesIndex].data[0]&&null!==t[this.activeSeriesIndex].data[0]&&t[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(t,e){for(var i=this.w.config,a=this.w.globals,s="boxPlot"===i.chart.type||"boxPlot"===i.series[e].type,r=0;r<t[e].data.length;r++)if(void 0!==t[e].data[r][1]&&(Array.isArray(t[e].data[r][1])&&4===t[e].data[r][1].length&&!s?this.twoDSeries.push(v.parseNumber(t[e].data[r][1][3])):t[e].data[r].length>=5?this.twoDSeries.push(v.parseNumber(t[e].data[r][4])):this.twoDSeries.push(v.parseNumber(t[e].data[r][1])),a.dataFormatXNumeric=!0),"datetime"===i.xaxis.type){var n=new Date(t[e].data[r][0]);n=new Date(n).getTime(),this.twoDSeriesX.push(n)}else this.twoDSeriesX.push(t[e].data[r][0]);for(var o=0;o<t[e].data.length;o++)void 0!==t[e].data[o][2]&&(this.threeDSeries.push(t[e].data[o][2]),a.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(t,e){var i=this.w.config,a=this.w.globals,s=new zi(this.ctx),r=e;a.collapsedSeriesIndices.indexOf(e)>-1&&(r=this.activeSeriesIndex);for(var n=0;n<t[e].data.length;n++)void 0!==t[e].data[n].y&&(Array.isArray(t[e].data[n].y)?this.twoDSeries.push(v.parseNumber(t[e].data[n].y[t[e].data[n].y.length-1])):this.twoDSeries.push(v.parseNumber(t[e].data[n].y))),void 0!==t[e].data[n].goals&&Array.isArray(t[e].data[n].goals)?(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]),this.seriesGoals[e].push(t[e].data[n].goals)):(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]),this.seriesGoals[e].push(null));for(var o=0;o<t[r].data.length;o++){var l="string"==typeof t[r].data[o].x,h=Array.isArray(t[r].data[o].x),c=!h&&!!s.isValidDate(t[r].data[o].x);if(l||c)if(l||i.xaxis.convertedCatToNumeric){var d=a.isBarHorizontal&&a.isRangeData;"datetime"!==i.xaxis.type||d?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[o].x),isNaN(t[r].data[o].x)||"category"===this.w.config.xaxis.type||"string"==typeof t[r].data[o].x||(a.isXNumeric=!0)):this.twoDSeriesX.push(s.parseDate(t[r].data[o].x))}else"datetime"===i.xaxis.type?this.twoDSeriesX.push(s.parseDate(t[r].data[o].x.toString())):(a.dataFormatXNumeric=!0,a.isXNumeric=!0,this.twoDSeriesX.push(parseFloat(t[r].data[o].x)));else h?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[o].x)):(a.isXNumeric=!0,a.dataFormatXNumeric=!0,this.twoDSeriesX.push(t[r].data[o].x))}if(t[e].data[0]&&void 0!==t[e].data[0].z){for(var u=0;u<t[e].data.length;u++)this.threeDSeries.push(t[e].data[u].z);a.isDataXYZ=!0}}},{key:"handleRangeData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleRangeDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleRangeDataFormat("xy",t,e)),i.seriesRangeStart.push(void 0===a.start?[]:a.start),i.seriesRangeEnd.push(void 0===a.end?[]:a.end),i.seriesRange.push(a.rangeUniques),i.seriesRange.forEach((function(t,e){t&&t.forEach((function(t,e){t.y.forEach((function(e,i){for(var a=0;a<t.y.length;a++)if(i!==a){var s=e.y1,r=e.y2,n=t.y[a].y1;s<=t.y[a].y2&&n<=r&&(t.overlaps.indexOf(e.rangeName)<0&&t.overlaps.push(e.rangeName),t.overlaps.indexOf(t.y[a].rangeName)<0&&t.overlaps.push(t.y[a].rangeName))}}))}))})),a}},{key:"handleCandleStickBoxData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleCandleStickBoxDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleCandleStickBoxDataFormat("xy",t,e)),i.seriesCandleO[e]=a.o,i.seriesCandleH[e]=a.h,i.seriesCandleM[e]=a.m,i.seriesCandleL[e]=a.l,i.seriesCandleC[e]=a.c,a}},{key:"handleRangeDataFormat",value:function(t,e,i){var a=[],s=[],r=e[i].data.filter((function(t,e,i){return e===i.findIndex((function(e){return e.x===t.x}))})).map((function(t,e){return{x:t.x,overlaps:[],y:[]}}));if("array"===t)for(var n=0;n<e[i].data.length;n++)Array.isArray(e[i].data[n])?(a.push(e[i].data[n][1][0]),s.push(e[i].data[n][1][1])):(a.push(e[i].data[n]),s.push(e[i].data[n]));else if("xy"===t)for(var o=function(t){var n=Array.isArray(e[i].data[t].y),o=v.randomId(),l=e[i].data[t].x,h={y1:n?e[i].data[t].y[0]:e[i].data[t].y,y2:n?e[i].data[t].y[1]:e[i].data[t].y,rangeName:o};e[i].data[t].rangeName=o;var c=r.findIndex((function(t){return t.x===l}));r[c].y.push(h),a.push(h.y1),s.push(h.y2)},l=0;l<e[i].data.length;l++)o(l);return{start:a,end:s,rangeUniques:r}}},{key:"handleCandleStickBoxDataFormat",value:function(t,e,i){var a=this.w,s="boxPlot"===a.config.chart.type||"boxPlot"===a.config.series[i].type,r=[],n=[],o=[],l=[],h=[];if("array"===t)if(s&&6===e[i].data[0].length||!s&&5===e[i].data[0].length)for(var c=0;c<e[i].data.length;c++)r.push(e[i].data[c][1]),n.push(e[i].data[c][2]),s?(o.push(e[i].data[c][3]),l.push(e[i].data[c][4]),h.push(e[i].data[c][5])):(l.push(e[i].data[c][3]),h.push(e[i].data[c][4]));else for(var d=0;d<e[i].data.length;d++)Array.isArray(e[i].data[d][1])&&(r.push(e[i].data[d][1][0]),n.push(e[i].data[d][1][1]),s?(o.push(e[i].data[d][1][2]),l.push(e[i].data[d][1][3]),h.push(e[i].data[d][1][4])):(l.push(e[i].data[d][1][2]),h.push(e[i].data[d][1][3])));else if("xy"===t)for(var u=0;u<e[i].data.length;u++)Array.isArray(e[i].data[u].y)&&(r.push(e[i].data[u].y[0]),n.push(e[i].data[u].y[1]),s?(o.push(e[i].data[u].y[2]),l.push(e[i].data[u].y[3]),h.push(e[i].data[u].y[4])):(l.push(e[i].data[u].y[2]),h.push(e[i].data[u].y[3])));return{o:r,h:n,m:o,l:l,c:h}}},{key:"parseDataAxisCharts",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ctx,a=this.w.config,s=this.w.globals,r=new zi(i),n=a.labels.length>0?a.labels.slice():a.xaxis.categories.slice();s.isRangeBar="rangeBar"===a.chart.type&&s.isBarHorizontal,s.hasXaxisGroups="category"===a.xaxis.type&&a.xaxis.group.groups.length>0,s.hasXaxisGroups&&(s.groups=a.xaxis.group.groups),t.forEach((function(t,e){void 0!==t.name?s.seriesNames.push(t.name):s.seriesNames.push("series-"+parseInt(e+1,10))})),this.coreUtils.setSeriesYAxisMappings();var o=[],l=f(new Set(a.series.map((function(t){return t.group}))));a.series.forEach((function(t,e){var i=l.indexOf(t.group);o[i]||(o[i]=[]),o[i].push(s.seriesNames[e])})),s.seriesGroups=o;for(var h=function(){for(var t=0;t<n.length;t++)if("string"==typeof n[t]){if(!r.isValidDate(n[t]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");e.twoDSeriesX.push(r.parseDate(n[t]))}else e.twoDSeriesX.push(n[t])},c=0;c<t.length;c++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],void 0===t[c].data)return void console.error("It is a possibility that you may have not included 'data' property in series.");if("rangeBar"!==a.chart.type&&"rangeArea"!==a.chart.type&&"rangeBar"!==t[c].type&&"rangeArea"!==t[c].type||(s.isRangeData=!0,"rangeBar"!==a.chart.type&&"rangeArea"!==a.chart.type||this.handleRangeData(t,c)),this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(t,c):this.isFormatXY()&&this.handleFormatXY(t,c),"candlestick"!==a.chart.type&&"candlestick"!==t[c].type&&"boxPlot"!==a.chart.type&&"boxPlot"!==t[c].type||this.handleCandleStickBoxData(t,c),s.series.push(this.twoDSeries),s.labels.push(this.twoDSeriesX),s.seriesX.push(this.twoDSeriesX),s.seriesGoals=this.seriesGoals,c!==this.activeSeriesIndex||this.fallbackToCategory||(s.isXNumeric=!0);else{"datetime"===a.xaxis.type?(s.isXNumeric=!0,h(),s.seriesX.push(this.twoDSeriesX)):"numeric"===a.xaxis.type&&(s.isXNumeric=!0,n.length>0&&(this.twoDSeriesX=n,s.seriesX.push(this.twoDSeriesX))),s.labels.push(this.twoDSeriesX);var d=t[c].data.map((function(t){return v.parseNumber(t)}));s.series.push(d)}s.seriesZ.push(this.threeDSeries),void 0!==t[c].color?s.seriesColors.push(t[c].color):s.seriesColors.push(void 0)}return this.w}},{key:"parseDataNonAxisCharts",value:function(t){var e=this.w.globals,i=this.w.config;e.series=t.slice(),e.seriesNames=i.labels.slice();for(var a=0;a<e.series.length;a++)void 0===e.seriesNames[a]&&e.seriesNames.push("series-"+(a+1));return this.w}},{key:"handleExternalLabelsData",value:function(t){var e=this.w.config,i=this.w.globals;if(e.xaxis.categories.length>0)i.labels=e.xaxis.categories;else if(e.labels.length>0)i.labels=e.labels.slice();else if(this.fallbackToCategory){if(i.labels=i.labels[0],i.seriesRange.length&&(i.seriesRange.map((function(t){t.forEach((function(t){i.labels.indexOf(t.x)<0&&t.x&&i.labels.push(t.x)}))})),i.labels=Array.from(new Set(i.labels.map(JSON.stringify)),JSON.parse)),e.xaxis.convertedCatToNumeric)new Ni(e).convertCatToNumericXaxis(e,this.ctx,i.seriesX[0]),this._generateExternalLabels(t)}else this._generateExternalLabels(t)}},{key:"_generateExternalLabels",value:function(t){var e=this.w.globals,i=this.w.config,a=[];if(e.axisCharts){if(e.series.length>0)if(this.isFormatXY())for(var s=i.series.map((function(t,e){return t.data.filter((function(t,e,i){return i.findIndex((function(e){return e.x===t.x}))===e}))})),r=s.reduce((function(t,e,i,a){return a[t].length>e.length?t:i}),0),n=0;n<s[r].length;n++)a.push(n+1);else for(var o=0;o<e.series[e.maxValsInArrayIndex].length;o++)a.push(o+1);e.seriesX=[];for(var l=0;l<t.length;l++)e.seriesX.push(a);this.w.globals.isBarHorizontal||(e.isXNumeric=!0)}if(0===a.length){a=e.axisCharts?[]:e.series.map((function(t,e){return e+1}));for(var h=0;h<t.length;h++)e.seriesX.push(a)}e.labels=a,i.xaxis.convertedCatToNumeric&&(e.categoryLabels=a.map((function(t){return i.xaxis.labels.formatter(t)}))),e.noLabelsProvided=!0}},{key:"parseData",value:function(t){var e=this.w,i=e.config,a=e.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.ctx.core.resetGlobals(),this.ctx.core.isMultipleY(),a.axisCharts?(this.parseDataAxisCharts(t),this.coreUtils.getLargestSeries()):this.parseDataNonAxisCharts(t),i.chart.stacked){var s=new Zi(this.ctx);a.series=s.setNullSeriesToZeroValues(a.series)}this.coreUtils.getSeriesTotals(),a.axisCharts&&(a.stackedSeriesTotals=this.coreUtils.getStackedSeriesTotals(),a.stackedSeriesTotalsByGroups=this.coreUtils.getStackedSeriesTotalsByGroups()),this.coreUtils.getPercentSeries(),a.dataFormatXNumeric||a.isXNumeric&&("numeric"!==i.xaxis.type||0!==i.labels.length||0!==i.xaxis.categories.length)||this.handleExternalLabelsData(t);for(var r=this.coreUtils.getCategoryLabels(a.labels),n=0;n<r.length;n++)if(Array.isArray(r[n])){a.isMultiLineX=!0;break}}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var t=this.w,e=[];t.globals.seriesYAxisMap.forEach((function(i,a){var s=0;i.forEach((function(e){-1!==t.globals.collapsedSeriesIndices.indexOf(e)&&s++})),s>0&&s==i.length&&e.push(a)})),t.globals.ignoreYAxisIndexes=e.map((function(t){return t}))}}]),t}(),Ji=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"scaleSvgNode",value:function(t,e){var i=parseFloat(t.getAttributeNS(null,"width")),a=parseFloat(t.getAttributeNS(null,"height"));t.setAttributeNS(null,"width",i*e),t.setAttributeNS(null,"height",a*e),t.setAttributeNS(null,"viewBox","0 0 "+i+" "+a)}},{key:"getSvgString",value:function(){var t=this;return new Promise((function(e){var i=t.w,a=i.config.chart.toolbar.export.width,s=i.config.chart.toolbar.export.scale||a/i.globals.svgWidth;s||(s=1);var r=t.w.globals.dom.Paper.svg(),n=t.w.globals.dom.Paper.node.cloneNode(!0);1!==s&&t.scaleSvgNode(n,s),t.convertImagesToBase64(n).then((function(){r=(new XMLSerializer).serializeToString(n),e(r.replace(/&nbsp;/g,"&#160;"))}))}))}},{key:"convertImagesToBase64",value:function(t){var e=this,i=t.getElementsByTagName("image"),a=Array.from(i).map((function(t){var i=t.getAttributeNS("http://www.w3.org/1999/xlink","href");return i&&!i.startsWith("data:")?e.getBase64FromUrl(i).then((function(e){t.setAttributeNS("http://www.w3.org/1999/xlink","href",e)})).catch((function(t){console.error("Error converting image to base64:",t)})):Promise.resolve()}));return Promise.all(a)}},{key:"getBase64FromUrl",value:function(t){return new Promise((function(e,i){var a=new Image;a.crossOrigin="Anonymous",a.onload=function(){var t=document.createElement("canvas");t.width=a.width,t.height=a.height,t.getContext("2d").drawImage(a,0,0),e(t.toDataURL())},a.onerror=i,a.src=t}))}},{key:"cleanup",value:function(){var t=this.w,e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),i=t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");Array.prototype.forEach.call(a,(function(t){t.setAttribute("width",0)})),e&&e[0]&&(e[0].setAttribute("x",-500),e[0].setAttribute("x1",-500),e[0].setAttribute("x2",-500)),i&&i[0]&&(i[0].setAttribute("y",-100),i[0].setAttribute("y1",-100),i[0].setAttribute("y2",-100))}},{key:"svgUrl",value:function(){var t=this;return new Promise((function(e){t.cleanup(),t.getSvgString().then((function(t){var i=new Blob([t],{type:"image/svg+xml;charset=utf-8"});e(URL.createObjectURL(i))}))}))}},{key:"dataURI",value:function(t){var e=this;return new Promise((function(i){var a=e.w,s=t?t.scale||t.width/a.globals.svgWidth:1;e.cleanup();var r=document.createElement("canvas");r.width=a.globals.svgWidth*s,r.height=parseInt(a.globals.dom.elWrap.style.height,10)*s;var n="transparent"!==a.config.chart.background&&a.config.chart.background?a.config.chart.background:"#fff",o=r.getContext("2d");o.fillStyle=n,o.fillRect(0,0,r.width*s,r.height*s),e.getSvgString().then((function(t){var e="data:image/svg+xml,"+encodeURIComponent(t),a=new Image;a.crossOrigin="anonymous",a.onload=function(){if(o.drawImage(a,0,0),r.msToBlob){var t=r.msToBlob();i({blob:t})}else{var e=r.toDataURL("image/png");i({imgURI:e})}},a.src=e}))}))}},{key:"exportToSVG",value:function(){var t=this;this.svgUrl().then((function(e){t.triggerDownload(e,t.w.config.chart.toolbar.export.svg.filename,".svg")}))}},{key:"exportToPng",value:function(){var t=this,e=this.w.config.chart.toolbar.export.scale,i=this.w.config.chart.toolbar.export.width,a=e?{scale:e}:i?{width:i}:void 0;this.dataURI(a).then((function(e){var i=e.imgURI,a=e.blob;a?navigator.msSaveOrOpenBlob(a,t.w.globals.chartID+".png"):t.triggerDownload(i,t.w.config.chart.toolbar.export.png.filename,".png")}))}},{key:"exportToCSV",value:function(t){var e=this,i=t.series,a=t.fileName,s=t.columnDelimiter,r=void 0===s?",":s,n=t.lineDelimiter,o=void 0===n?"\n":n,l=this.w;i||(i=l.config.series);var h=[],c=[],d="",u=l.globals.series.map((function(t,e){return-1===l.globals.collapsedSeriesIndices.indexOf(e)?t:[]})),g=function(t){return"function"==typeof l.config.chart.toolbar.export.csv.categoryFormatter?l.config.chart.toolbar.export.csv.categoryFormatter(t):"datetime"===l.config.xaxis.type&&String(t).length>=10?new Date(t).toDateString():v.isNumber(t)?t:t.split(r).join("")},p=function(t){return"function"==typeof l.config.chart.toolbar.export.csv.valueFormatter?l.config.chart.toolbar.export.csv.valueFormatter(t):t},x=Math.max.apply(Math,f(i.map((function(t){return t.data?t.data.length:0})))),b=new $i(this.ctx),m=new Ri(this.ctx),y=function(t){var i="";if(l.globals.axisCharts){if("category"===l.config.xaxis.type||l.config.xaxis.convertedCatToNumeric)if(l.globals.isBarHorizontal){var a=l.globals.yLabelFormatters[0],s=new Zi(e.ctx).getActiveConfigSeriesIndex();i=a(l.globals.labels[t],{seriesIndex:s,dataPointIndex:t,w:l})}else i=m.getLabel(l.globals.labels,l.globals.timescaleLabels,0,t).text;"datetime"===l.config.xaxis.type&&(l.config.xaxis.categories.length?i=l.config.xaxis.categories[t]:l.config.labels.length&&(i=l.config.labels[t]))}else i=l.config.labels[t];return null===i?"nullvalue":(Array.isArray(i)&&(i=i.join(" ")),v.isNumber(i)?i:i.split(r).join(""))},w=function(t,e){if(h.length&&0===e&&c.push(h.join(r)),t.data){t.data=t.data.length&&t.data||f(Array(x)).map((function(){return""}));for(var a=0;a<t.data.length;a++){h=[];var s=y(a);if("nullvalue"!==s){if(s||(b.isFormatXY()?s=i[e].data[a].x:b.isFormat2DArray()&&(s=i[e].data[a]?i[e].data[a][0]:"")),0===e){h.push(g(s));for(var n=0;n<l.globals.series.length;n++){var o,d=b.isFormatXY()?null===(o=i[n].data[a])||void 0===o?void 0:o.y:u[n][a];h.push(p(d))}}("candlestick"===l.config.chart.type||t.type&&"candlestick"===t.type)&&(h.pop(),h.push(l.globals.seriesCandleO[e][a]),h.push(l.globals.seriesCandleH[e][a]),h.push(l.globals.seriesCandleL[e][a]),h.push(l.globals.seriesCandleC[e][a])),("boxPlot"===l.config.chart.type||t.type&&"boxPlot"===t.type)&&(h.pop(),h.push(l.globals.seriesCandleO[e][a]),h.push(l.globals.seriesCandleH[e][a]),h.push(l.globals.seriesCandleM[e][a]),h.push(l.globals.seriesCandleL[e][a]),h.push(l.globals.seriesCandleC[e][a])),"rangeBar"===l.config.chart.type&&(h.pop(),h.push(l.globals.seriesRangeStart[e][a]),h.push(l.globals.seriesRangeEnd[e][a])),h.length&&c.push(h.join(r))}}}};h.push(l.config.chart.toolbar.export.csv.headerCategory),"boxPlot"===l.config.chart.type?(h.push("minimum"),h.push("q1"),h.push("median"),h.push("q3"),h.push("maximum")):"candlestick"===l.config.chart.type?(h.push("open"),h.push("high"),h.push("low"),h.push("close")):"rangeBar"===l.config.chart.type?(h.push("minimum"),h.push("maximum")):i.map((function(t,e){var i=(t.name?t.name:"series-".concat(e))+"";l.globals.axisCharts&&h.push(i.split(r).join("")?i.split(r).join(""):"series-".concat(e))})),l.globals.axisCharts||(h.push(l.config.chart.toolbar.export.csv.headerValue),c.push(h.join(r))),l.globals.allSeriesHasEqualX||!l.globals.axisCharts||l.config.xaxis.categories.length||l.config.labels.length?i.map((function(t,e){l.globals.axisCharts?w(t,e):((h=[]).push(g(l.globals.labels[e])),h.push(p(u[e])),c.push(h.join(r)))})):function(){var t=new Set,e={};i.forEach((function(a,s){null==a||a.data.forEach((function(a){var r,n;if(b.isFormatXY())r=a.x,n=a.y;else{if(!b.isFormat2DArray())return;r=a[0],n=a[1]}e[r]||(e[r]=Array(i.length).fill("")),e[r][s]=p(n),t.add(r)}))})),h.length&&c.push(h.join(r)),Array.from(t).sort().forEach((function(t){c.push([g(t),e[t].join(r)])}))}(),d+=c.join(o),this.triggerDownload("data:text/csv; charset=utf-8,"+encodeURIComponent("\ufeff"+d),a||l.config.chart.toolbar.export.csv.filename,".csv")}},{key:"triggerDownload",value:function(t,e,i){var a=document.createElement("a");a.href=t,a.download=(e||this.w.globals.chartID)+i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}]),t}(),Qi=function(){function t(e,a){i(this,t),this.ctx=e,this.elgrid=a,this.w=e.w;var s=this.w;this.axesUtils=new Ri(e),this.xaxisLabels=s.globals.labels.slice(),s.globals.timescaleLabels.length>0&&!s.globals.isBarHorizontal&&(this.xaxisLabels=s.globals.timescaleLabels.slice()),s.config.xaxis.overwriteCategories&&(this.xaxisLabels=s.config.xaxis.overwriteCategories),this.drawnLabels=[],this.drawnLabelsRects=[],"top"===s.config.xaxis.position?this.offY=0:this.offY=s.globals.gridHeight,this.offY=this.offY+s.config.xaxis.axisBorder.offsetY,this.isCategoryBarHorizontal="bar"===s.config.chart.type&&s.config.plotOptions.bar.horizontal,this.xaxisFontSize=s.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=s.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=s.config.xaxis.labels.style.colors,this.xaxisBorderWidth=s.config.xaxis.axisBorder.width,this.isCategoryBarHorizontal&&(this.xaxisBorderWidth=s.config.yaxis[0].axisBorder.width.toString()),this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=s.globals.gridWidth*parseInt(this.xaxisBorderWidth,10)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth,10),this.xaxisBorderHeight=s.config.xaxis.axisBorder.height,this.yaxis=s.config.yaxis[0]}return s(t,[{key:"drawXaxis",value:function(){var t=this.w,e=new Mi(this.ctx),i=e.group({class:"apexcharts-xaxis",transform:"translate(".concat(t.config.xaxis.offsetX,", ").concat(t.config.xaxis.offsetY,")")}),a=e.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(t.globals.translateXAxisX,", ").concat(t.globals.translateXAxisY,")")});i.add(a);for(var s=[],r=0;r<this.xaxisLabels.length;r++)s.push(this.xaxisLabels[r]);if(this.drawXAxisLabelAndGroup(!0,e,a,s,t.globals.isXNumeric,(function(t,e){return e})),t.globals.hasXaxisGroups){var n=t.globals.groups;s=[];for(var o=0;o<n.length;o++)s.push(n[o].title);var l={};t.config.xaxis.group.style&&(l.xaxisFontSize=t.config.xaxis.group.style.fontSize,l.xaxisFontFamily=t.config.xaxis.group.style.fontFamily,l.xaxisForeColors=t.config.xaxis.group.style.colors,l.fontWeight=t.config.xaxis.group.style.fontWeight,l.cssClass=t.config.xaxis.group.style.cssClass),this.drawXAxisLabelAndGroup(!1,e,a,s,!1,(function(t,e){return n[t].cols*e}),l)}if(void 0!==t.config.xaxis.title.text){var h=e.group({class:"apexcharts-xaxis-title"}),c=e.drawText({x:t.globals.gridWidth/2+t.config.xaxis.title.offsetX,y:this.offY+parseFloat(this.xaxisFontSize)+("bottom"===t.config.xaxis.position?t.globals.xAxisLabelsHeight:-t.globals.xAxisLabelsHeight-10)+t.config.xaxis.title.offsetY,text:t.config.xaxis.title.text,textAnchor:"middle",fontSize:t.config.xaxis.title.style.fontSize,fontFamily:t.config.xaxis.title.style.fontFamily,fontWeight:t.config.xaxis.title.style.fontWeight,foreColor:t.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+t.config.xaxis.title.style.cssClass});h.add(c),i.add(h)}if(t.config.xaxis.axisBorder.show){var d=t.globals.barPadForNumericAxis,u=e.drawLine(t.globals.padHorizontal+t.config.xaxis.axisBorder.offsetX-d,this.offY,this.xaxisBorderWidth+d,this.offY,t.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);this.elgrid&&this.elgrid.elGridBorders&&t.config.grid.show?this.elgrid.elGridBorders.add(u):i.add(u)}return i}},{key:"drawXAxisLabelAndGroup",value:function(t,e,i,a,s,r){var n,o=this,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},h=[],c=[],d=this.w,u=l.xaxisFontSize||this.xaxisFontSize,g=l.xaxisFontFamily||this.xaxisFontFamily,p=l.xaxisForeColors||this.xaxisForeColors,f=l.fontWeight||d.config.xaxis.labels.style.fontWeight,x=l.cssClass||d.config.xaxis.labels.style.cssClass,b=d.globals.padHorizontal,m=a.length,v="category"===d.config.xaxis.type?d.globals.dataPoints:m;if(0===v&&m>v&&(v=m),s){var y=v>1?v-1:v;n=d.globals.gridWidth/Math.min(y,m-1),b=b+r(0,n)/2+d.config.xaxis.labels.offsetX}else n=d.globals.gridWidth/v,b=b+r(0,n)+d.config.xaxis.labels.offsetX;for(var w=function(s){var l=b-r(s,n)/2+d.config.xaxis.labels.offsetX;0===s&&1===m&&n/2===b&&1===v&&(l=d.globals.gridWidth/2);var y=o.axesUtils.getLabel(a,d.globals.timescaleLabels,l,s,h,u,t),w=28;d.globals.rotateXLabels&&t&&(w=22),d.config.xaxis.title.text&&"top"===d.config.xaxis.position&&(w+=parseFloat(d.config.xaxis.title.style.fontSize)+2),t||(w=w+parseFloat(u)+(d.globals.xAxisLabelsHeight-d.globals.xAxisGroupLabelsHeight)+(d.globals.rotateXLabels?10:0)),y=void 0!==d.config.xaxis.tickAmount&&"dataPoints"!==d.config.xaxis.tickAmount&&"datetime"!==d.config.xaxis.type?o.axesUtils.checkLabelBasedOnTickamount(s,y,m):o.axesUtils.checkForOverflowingLabels(s,y,m,h,c);if(d.config.xaxis.labels.show){var k=e.drawText({x:y.x,y:o.offY+d.config.xaxis.labels.offsetY+w-("top"===d.config.xaxis.position?d.globals.xAxisHeight+d.config.xaxis.axisTicks.height-2:0),text:y.text,textAnchor:"middle",fontWeight:y.isBold?600:f,fontSize:u,fontFamily:g,foreColor:Array.isArray(p)?t&&d.config.xaxis.convertedCatToNumeric?p[d.globals.minX+s-1]:p[s]:p,isPlainText:!1,cssClass:(t?"apexcharts-xaxis-label ":"apexcharts-xaxis-group-label ")+x});if(i.add(k),k.on("click",(function(t){if("function"==typeof d.config.chart.events.xAxisLabelClick){var e=Object.assign({},d,{labelIndex:s});d.config.chart.events.xAxisLabelClick(t,o.ctx,e)}})),t){var A=document.createElementNS(d.globals.SVGNS,"title");A.textContent=Array.isArray(y.text)?y.text.join(" "):y.text,k.node.appendChild(A),""!==y.text&&(h.push(y.text),c.push(y))}}s<m-1&&(b+=r(s+1,n))},k=0;k<=m-1;k++)w(k)}},{key:"drawXaxisInversed",value:function(t){var e,i,a=this,s=this.w,r=new Mi(this.ctx),n=s.config.yaxis[0].opposite?s.globals.translateYAxisX[t]:0,o=r.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:t}),l=r.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+n+", 0)"});o.add(l);var h=[];if(s.config.yaxis[t].show)for(var c=0;c<this.xaxisLabels.length;c++)h.push(this.xaxisLabels[c]);e=s.globals.gridHeight/h.length,i=-e/2.2;var d=s.globals.yLabelFormatters[0],u=s.config.yaxis[0].labels;if(u.show)for(var g=function(n){var o=void 0===h[n]?"":h[n];o=d(o,{seriesIndex:t,dataPointIndex:n,w:s});var c=a.axesUtils.getYAxisForeColor(u.style.colors,t),g=0;Array.isArray(o)&&(g=o.length/2*parseInt(u.style.fontSize,10));var p=u.offsetX-15,f="end";a.yaxis.opposite&&(f="start"),"left"===s.config.yaxis[0].labels.align?(p=u.offsetX,f="start"):"center"===s.config.yaxis[0].labels.align?(p=u.offsetX,f="middle"):"right"===s.config.yaxis[0].labels.align&&(f="end");var x=r.drawText({x:p,y:i+e+u.offsetY-g,text:o,textAnchor:f,foreColor:Array.isArray(c)?c[n]:c,fontSize:u.style.fontSize,fontFamily:u.style.fontFamily,fontWeight:u.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+u.style.cssClass,maxWidth:u.maxWidth});l.add(x),x.on("click",(function(t){if("function"==typeof s.config.chart.events.xAxisLabelClick){var e=Object.assign({},s,{labelIndex:n});s.config.chart.events.xAxisLabelClick(t,a.ctx,e)}}));var b=document.createElementNS(s.globals.SVGNS,"title");if(b.textContent=Array.isArray(o)?o.join(" "):o,x.node.appendChild(b),0!==s.config.yaxis[t].labels.rotate){var m=r.rotateAroundCenter(x.node);x.node.setAttribute("transform","rotate(".concat(s.config.yaxis[t].labels.rotate," 0 ").concat(m.y,")"))}i+=e},p=0;p<=h.length-1;p++)g(p);if(void 0!==s.config.yaxis[0].title.text){var f=r.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+n+", 0)"}),x=r.drawText({x:s.config.yaxis[0].title.offsetX,y:s.globals.gridHeight/2+s.config.yaxis[0].title.offsetY,text:s.config.yaxis[0].title.text,textAnchor:"middle",foreColor:s.config.yaxis[0].title.style.color,fontSize:s.config.yaxis[0].title.style.fontSize,fontWeight:s.config.yaxis[0].title.style.fontWeight,fontFamily:s.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+s.config.yaxis[0].title.style.cssClass});f.add(x),o.add(f)}var b=0;this.isCategoryBarHorizontal&&s.config.yaxis[0].opposite&&(b=s.globals.gridWidth);var m=s.config.xaxis.axisBorder;if(m.show){var v=r.drawLine(s.globals.padHorizontal+m.offsetX+b,1+m.offsetY,s.globals.padHorizontal+m.offsetX+b,s.globals.gridHeight+m.offsetY,m.color,0);this.elgrid&&this.elgrid.elGridBorders&&s.config.grid.show?this.elgrid.elGridBorders.add(v):o.add(v)}return s.config.yaxis[0].axisTicks.show&&this.axesUtils.drawYAxisTicks(b,h.length,s.config.yaxis[0].axisBorder,s.config.yaxis[0].axisTicks,0,e,o),o}},{key:"drawXaxisTicks",value:function(t,e,i){var a=this.w,s=t;if(!(t<0||t-2>a.globals.gridWidth)){var r=this.offY+a.config.xaxis.axisTicks.offsetY;if(e=e+r+a.config.xaxis.axisTicks.height,"top"===a.config.xaxis.position&&(e=r-a.config.xaxis.axisTicks.height),a.config.xaxis.axisTicks.show){var n=new Mi(this.ctx).drawLine(t+a.config.xaxis.axisTicks.offsetX,r+a.config.xaxis.offsetY,s+a.config.xaxis.axisTicks.offsetX,e+a.config.xaxis.offsetY,a.config.xaxis.axisTicks.color);i.add(n),n.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var t=this.w,e=[],i=this.xaxisLabels.length,a=t.globals.padHorizontal;if(t.globals.timescaleLabels.length>0)for(var s=0;s<i;s++)a=this.xaxisLabels[s].position,e.push(a);else for(var r=i,n=0;n<r;n++){var o=r;t.globals.isXNumeric&&"bar"!==t.config.chart.type&&(o-=1),a+=t.globals.gridWidth/o,e.push(a)}return e}},{key:"xAxisLabelCorrections",value:function(){var t=this.w,e=new Mi(this.ctx),i=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"),s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");if(t.globals.rotateXLabels||t.config.xaxis.labels.rotateAlways)for(var n=0;n<a.length;n++){var o=e.rotateAroundCenter(a[n]);o.y=o.y-1,o.x=o.x+1,a[n].setAttribute("transform","rotate(".concat(t.config.xaxis.labels.rotate," ").concat(o.x," ").concat(o.y,")")),a[n].setAttribute("text-anchor","end");i.setAttribute("transform","translate(0, ".concat(-10,")"));var l=a[n].childNodes;t.config.xaxis.labels.trim&&Array.prototype.forEach.call(l,(function(i){e.placeTextWithEllipsis(i,i.textContent,t.globals.xAxisLabelsHeight-("bottom"===t.config.legend.position?20:10))}))}else!function(){for(var i=t.globals.gridWidth/(t.globals.labels.length+1),s=0;s<a.length;s++){var r=a[s].childNodes;t.config.xaxis.labels.trim&&"datetime"!==t.config.xaxis.type&&Array.prototype.forEach.call(r,(function(t){e.placeTextWithEllipsis(t,t.textContent,i)}))}}();if(s.length>0){var h=s[s.length-1].getBBox(),c=s[0].getBBox();h.x<-20&&s[s.length-1].parentNode.removeChild(s[s.length-1]),c.x+c.width>t.globals.gridWidth&&!t.globals.isBarHorizontal&&s[0].parentNode.removeChild(s[0]);for(var d=0;d<r.length;d++)e.placeTextWithEllipsis(r[d],r[d].textContent,t.config.yaxis[0].labels.maxWidth-(t.config.yaxis[0].title.text?2*parseFloat(t.config.yaxis[0].title.style.fontSize):0)-15)}}}]),t}(),Ki=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w;var a=this.w;this.xaxisLabels=a.globals.labels.slice(),this.axesUtils=new Ri(e),this.isRangeBar=a.globals.seriesRange.length&&a.globals.isBarHorizontal,a.globals.timescaleLabels.length>0&&(this.xaxisLabels=a.globals.timescaleLabels.slice())}return s(t,[{key:"drawGridArea",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=new Mi(this.ctx);t||(t=i.group({class:"apexcharts-grid"}));var a=i.drawLine(e.globals.padHorizontal,1,e.globals.padHorizontal,e.globals.gridHeight,"transparent"),s=i.drawLine(e.globals.padHorizontal,e.globals.gridHeight,e.globals.gridWidth,e.globals.gridHeight,"transparent");return t.add(s),t.add(a),t}},{key:"drawGrid",value:function(){if(this.w.globals.axisCharts){var t=this.renderGrid();return this.drawGridArea(t.el),t}return null}},{key:"createGridMask",value:function(){var t=this.w,e=t.globals,i=new Mi(this.ctx),a=Array.isArray(t.config.stroke.width)?Math.max.apply(Math,f(t.config.stroke.width)):t.config.stroke.width,s=function(t){var i=document.createElementNS(e.SVGNS,"clipPath");return i.setAttribute("id",t),i};e.dom.elGridRectMask=s("gridRectMask".concat(e.cuid)),e.dom.elGridRectBarMask=s("gridRectBarMask".concat(e.cuid)),e.dom.elGridRectMarkerMask=s("gridRectMarkerMask".concat(e.cuid)),e.dom.elForecastMask=s("forecastMask".concat(e.cuid)),e.dom.elNonForecastMask=s("nonForecastMask".concat(e.cuid));var r=0,n=0;(["bar","rangeBar","candlestick","boxPlot"].includes(t.config.chart.type)||t.globals.comboBarCount>0)&&t.globals.isXNumeric&&!t.globals.isBarHorizontal&&(r=Math.max(t.config.grid.padding.left,e.barPadForNumericAxis),n=Math.max(t.config.grid.padding.right,e.barPadForNumericAxis)),e.dom.elGridRect=i.drawRect(0,0,e.gridWidth,e.gridHeight,0,"#fff"),e.dom.elGridRectBar=i.drawRect(-a/2-r-2,-a/2-2,e.gridWidth+a+n+r+4,e.gridHeight+a+4,0,"#fff");var o=t.globals.markers.largestSize;e.dom.elGridRectMarker=i.drawRect(-o,-o,e.gridWidth+2*o,e.gridHeight+2*o,0,"#fff"),e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node),e.dom.elGridRectBarMask.appendChild(e.dom.elGridRectBar.node),e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);var l=e.dom.baseEl.querySelector("defs");l.appendChild(e.dom.elGridRectMask),l.appendChild(e.dom.elGridRectBarMask),l.appendChild(e.dom.elGridRectMarkerMask),l.appendChild(e.dom.elForecastMask),l.appendChild(e.dom.elNonForecastMask)}},{key:"_drawGridLines",value:function(t){var e=t.i,i=t.x1,a=t.y1,s=t.x2,r=t.y2,n=t.xCount,o=t.parent,l=this.w;if(!(0===e&&l.globals.skipFirstTimelinelabel||e===n-1&&l.globals.skipLastTimelinelabel&&!l.config.xaxis.labels.formatter||"radar"===l.config.chart.type)){l.config.grid.xaxis.lines.show&&this._drawGridLine({i:e,x1:i,y1:a,x2:s,y2:r,xCount:n,parent:o});var h=0;if(l.globals.hasXaxisGroups&&"between"===l.config.xaxis.tickPlacement){var c=l.globals.groups;if(c){for(var d=0,u=0;d<e&&u<c.length;u++)d+=c[u].cols;d===e&&(h=.6*l.globals.xAxisLabelsHeight)}}new Qi(this.ctx).drawXaxisTicks(i,h,l.globals.dom.elGraphical)}}},{key:"_drawGridLine",value:function(t){var e=t.i,i=t.x1,a=t.y1,s=t.x2,r=t.y2,n=t.xCount,o=t.parent,l=this.w,h=o.node.classList.contains("apexcharts-gridlines-horizontal"),c=l.globals.barPadForNumericAxis,d=0===a&&0===r||0===i&&0===s||a===l.globals.gridHeight&&r===l.globals.gridHeight||l.globals.isBarHorizontal&&(0===e||e===n-1),u=new Mi(this).drawLine(i-(h?c:0),a,s+(h?c:0),r,l.config.grid.borderColor,l.config.grid.strokeDashArray);u.node.classList.add("apexcharts-gridline"),d&&l.config.grid.show?this.elGridBorders.add(u):o.add(u)}},{key:"_drawGridBandRect",value:function(t){var e=t.c,i=t.x1,a=t.y1,s=t.x2,r=t.y2,n=t.type,o=this.w,l=new Mi(this.ctx),h=o.globals.barPadForNumericAxis,c=o.config.grid[n].colors[e],d=l.drawRect(i-("row"===n?h:0),a,s+("row"===n?2*h:0),r,0,c,o.config.grid[n].opacity);this.elg.add(d),d.attr("clip-path","url(#gridRectMask".concat(o.globals.cuid,")")),d.node.classList.add("apexcharts-grid-".concat(n))}},{key:"_drawXYLines",value:function(t){var e=this,i=t.xCount,a=t.tickAmount,s=this.w;if(s.config.grid.xaxis.lines.show||s.config.xaxis.axisTicks.show){var r,n=s.globals.padHorizontal,o=s.globals.gridHeight;s.globals.timescaleLabels.length?function(t){for(var a=t.xC,s=t.x1,r=t.y1,n=t.x2,o=t.y2,l=0;l<a;l++)s=e.xaxisLabels[l].position,n=e.xaxisLabels[l].position,e._drawGridLines({i:l,x1:s,y1:r,x2:n,y2:o,xCount:i,parent:e.elgridLinesV})}({xC:i,x1:n,y1:0,x2:r,y2:o}):(s.globals.isXNumeric&&(i=s.globals.xAxisScale.result.length),function(t){for(var a=t.xC,r=t.x1,n=t.y1,o=t.x2,l=t.y2,h=0;h<a+(s.globals.isXNumeric?0:1);h++)0===h&&1===a&&1===s.globals.dataPoints&&(o=r=s.globals.gridWidth/2),e._drawGridLines({i:h,x1:r,y1:n,x2:o,y2:l,xCount:i,parent:e.elgridLinesV}),o=r+=s.globals.gridWidth/(s.globals.isXNumeric?a-1:a)}({xC:i,x1:n,y1:0,x2:r,y2:o}))}if(s.config.grid.yaxis.lines.show){var l=0,h=0,c=s.globals.gridWidth,d=a+1;this.isRangeBar&&(d=s.globals.labels.length);for(var u=0;u<d+(this.isRangeBar?1:0);u++)this._drawGridLine({i:u,xCount:d+(this.isRangeBar?1:0),x1:0,y1:l,x2:c,y2:h,parent:this.elgridLinesH}),h=l+=s.globals.gridHeight/(this.isRangeBar?d:a)}}},{key:"_drawInvertedXYLines",value:function(t){var e=t.xCount,i=this.w;if(i.config.grid.xaxis.lines.show||i.config.xaxis.axisTicks.show)for(var a,s=i.globals.padHorizontal,r=i.globals.gridHeight,n=0;n<e+1;n++){i.config.grid.xaxis.lines.show&&this._drawGridLine({i:n,xCount:e+1,x1:s,y1:0,x2:a,y2:r,parent:this.elgridLinesV}),new Qi(this.ctx).drawXaxisTicks(s,0,i.globals.dom.elGraphical),a=s+=i.globals.gridWidth/e}if(i.config.grid.yaxis.lines.show)for(var o=0,l=0,h=i.globals.gridWidth,c=0;c<i.globals.dataPoints+1;c++)this._drawGridLine({i:c,xCount:i.globals.dataPoints+1,x1:0,y1:o,x2:h,y2:l,parent:this.elgridLinesH}),l=o+=i.globals.gridHeight/i.globals.dataPoints}},{key:"renderGrid",value:function(){var t=this.w,e=t.globals,i=new Mi(this.ctx);this.elg=i.group({class:"apexcharts-grid"}),this.elgridLinesH=i.group({class:"apexcharts-gridlines-horizontal"}),this.elgridLinesV=i.group({class:"apexcharts-gridlines-vertical"}),this.elGridBorders=i.group({class:"apexcharts-grid-borders"}),this.elg.add(this.elgridLinesH),this.elg.add(this.elgridLinesV),t.config.grid.show||(this.elgridLinesV.hide(),this.elgridLinesH.hide(),this.elGridBorders.hide());for(var a=0;a<e.seriesYAxisMap.length&&e.ignoreYAxisIndexes.includes(a);)a++;a===e.seriesYAxisMap.length&&(a=0);var s,r=e.yAxisScale[a].result.length-1;if(!e.isBarHorizontal||this.isRangeBar){var n,o,l;if(s=this.xaxisLabels.length,this.isRangeBar)r=e.labels.length,t.config.xaxis.tickAmount&&t.config.xaxis.labels.formatter&&(s=t.config.xaxis.tickAmount),(null===(n=e.yAxisScale)||void 0===n||null===(o=n[a])||void 0===o||null===(l=o.result)||void 0===l?void 0:l.length)>0&&"datetime"!==t.config.xaxis.type&&(s=e.yAxisScale[a].result.length-1);this._drawXYLines({xCount:s,tickAmount:r})}else s=r,r=e.xTickAmount,this._drawInvertedXYLines({xCount:s,tickAmount:r});return this.drawGridBands(s,r),{el:this.elg,elGridBorders:this.elGridBorders,xAxisTickWidth:e.gridWidth/s}}},{key:"drawGridBands",value:function(t,e){var i,a,s=this,r=this.w;if((null===(i=r.config.grid.row.colors)||void 0===i?void 0:i.length)>0&&function(t,i,a,n,o,l){for(var h=0,c=0;h<i;h++,c++)c>=r.config.grid[t].colors.length&&(c=0),s._drawGridBandRect({c:c,x1:a,y1:n,x2:o,y2:l,type:t}),n+=r.globals.gridHeight/e}("row",e,0,0,r.globals.gridWidth,r.globals.gridHeight/e),(null===(a=r.config.grid.column.colors)||void 0===a?void 0:a.length)>0){var n=r.globals.isBarHorizontal||"on"!==r.config.xaxis.tickPlacement||"category"!==r.config.xaxis.type&&!r.config.xaxis.convertedCatToNumeric?t:t-1;r.globals.isXNumeric&&(n=r.globals.xAxisScale.result.length-1);for(var o=r.globals.padHorizontal,l=r.globals.padHorizontal+r.globals.gridWidth/n,h=r.globals.gridHeight,c=0,d=0;c<t;c++,d++){var u;if(d>=r.config.grid.column.colors.length&&(d=0),"datetime"===r.config.xaxis.type)o=this.xaxisLabels[c].position,l=((null===(u=this.xaxisLabels[c+1])||void 0===u?void 0:u.position)||r.globals.gridWidth)-this.xaxisLabels[c].position;this._drawGridBandRect({c:d,x1:o,y1:0,x2:l,y2:h,type:"column"}),o+=r.globals.gridWidth/n}}}}]),t}(),ta=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.coreUtils=new Pi(this.ctx)}return s(t,[{key:"niceScale",value:function(t,e){var i,a,s,r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=1e-11,l=this.w,h=l.globals;h.isBarHorizontal?(i=l.config.xaxis,a=Math.max((h.svgWidth-100)/25,2)):(i=l.config.yaxis[n],a=Math.max((h.svgHeight-100)/15,2)),v.isNumber(a)||(a=10),s=void 0!==i.min&&null!==i.min,r=void 0!==i.max&&null!==i.min;var c=void 0!==i.stepSize&&null!==i.stepSize,d=void 0!==i.tickAmount&&null!==i.tickAmount,u=d?i.tickAmount:h.niceScaleDefaultTicks[Math.min(Math.round(a/2),h.niceScaleDefaultTicks.length-1)];if(h.isMultipleYAxis&&!d&&h.multiAxisTickAmount>0&&(u=h.multiAxisTickAmount,d=!0),u="dataPoints"===u?h.dataPoints-1:Math.abs(Math.round(u)),(t===Number.MIN_VALUE&&0===e||!v.isNumber(t)&&!v.isNumber(e)||t===Number.MIN_VALUE&&e===-Number.MAX_VALUE)&&(t=v.isNumber(i.min)?i.min:0,e=v.isNumber(i.max)?i.max:t+u,h.allSeriesCollapsed=!1),t>e){console.warn("axis.min cannot be greater than axis.max: swapping min and max");var g=e;e=t,t=g}else t===e&&(t=0===t?0:t-1,e=0===e?2:e+1);var p=[];u<1&&(u=1);var f=u,x=Math.abs(e-t);!s&&t>0&&t/x<.15&&(t=0,s=!0),!r&&e<0&&-e/x<.15&&(e=0,r=!0);var b=(x=Math.abs(e-t))/f,m=b,y=Math.floor(Math.log10(m)),w=Math.pow(10,y),k=Math.ceil(m/w);if(b=m=(k=h.niceScaleAllowedMagMsd[0===h.yValueDecimal?0:1][k])*w,h.isBarHorizontal&&i.stepSize&&"datetime"!==i.type?(b=i.stepSize,c=!0):c&&(b=i.stepSize),c&&i.forceNiceScale){var A=Math.floor(Math.log10(b));b*=Math.pow(10,y-A)}if(s&&r){var C=x/f;if(d)if(c)if(0!=v.mod(x,b)){var S=v.getGCD(b,C);b=C/S<10?S:C}else 0==v.mod(b,C)?b=C:(C=b,d=!1);else b=C;else if(c)0==v.mod(x,b)?C=b:b=C;else if(0==v.mod(x,b))C=b;else{C=x/(f=Math.ceil(x/b));var L=v.getGCD(x,b);x/L<a&&(C=L),b=C}f=Math.round(x/b)}else{if(s||r){if(r)if(d)t=e-b*f;else{var M=t;t=b*Math.floor(t/b),Math.abs(e-t)/v.getGCD(x,b)>a&&(t=e-b*u,t+=b*Math.floor((M-t)/b))}else if(s)if(d)e=t+b*f;else{var P=e;e=b*Math.ceil(e/b),Math.abs(e-t)/v.getGCD(x,b)>a&&(e=t+b*u,e+=b*Math.ceil((P-e)/b))}}else if(h.isMultipleYAxis&&d){var I=b*Math.floor(t/b),T=I+b*f;T<e&&(b*=2),T=e,e=(t=I)+b*f,x=Math.abs(e-t),t>0&&t<Math.abs(T-e)&&(t=0,e=b*f),e<0&&-e<Math.abs(I-t)&&(e=0,t=-b*f)}else t=b*Math.floor(t/b),e=b*Math.ceil(e/b);x=Math.abs(e-t),b=v.getGCD(x,b),f=Math.round(x/b)}if(d||s||r||(f=Math.ceil((x-o)/(b+o)))>16&&v.getPrimeFactors(f).length<2&&f++,!d&&i.forceNiceScale&&0===h.yValueDecimal&&f>x&&(f=x,b=Math.round(x/f)),f>a&&(!d&&!c||i.forceNiceScale)){var z=v.getPrimeFactors(f),X=z.length-1,R=f;t:for(var E=0;E<X;E++)for(var Y=0;Y<=X-E;Y++){for(var H=Math.min(Y+E,X),O=R,F=1,D=Y;D<=H;D++)F*=z[D];if((O/=F)<a){R=O;break t}}b=R===f?x:x/R,f=Math.round(x/b)}h.isMultipleYAxis&&0==h.multiAxisTickAmount&&h.ignoreYAxisIndexes.indexOf(n)<0&&(h.multiAxisTickAmount=f);var _=t-b,N=b*o;do{_+=b,p.push(v.stripNumber(_,7))}while(e-_>N);return{result:p,niceMin:p[0],niceMax:p[p.length-1]}}},{key:"linearScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,r=Math.abs(e-t),n=[];if(t===e)return{result:n=[t],niceMin:n[0],niceMax:n[n.length-1]};"dataPoints"===(i=this._adjustTicksForSmallRange(i,a,r))&&(i=this.w.globals.dataPoints-1),s||(s=r/i),s=Math.round(10*(s+Number.EPSILON))/10,i===Number.MAX_VALUE&&(i=5,s=1);for(var o=t;i>=0;)n.push(o),o=v.preciseAddition(o,s),i-=1;return{result:n,niceMin:n[0],niceMax:n[n.length-1]}}},{key:"logarithmicScaleNice",value:function(t,e,i){e<=0&&(e=Math.max(t,i)),t<=0&&(t=Math.min(e,i));for(var a=[],s=Math.ceil(Math.log(e)/Math.log(i)+1),r=Math.floor(Math.log(t)/Math.log(i));r<s;r++)a.push(Math.pow(i,r));return{result:a,niceMin:a[0],niceMax:a[a.length-1]}}},{key:"logarithmicScale",value:function(t,e,i){e<=0&&(e=Math.max(t,i)),t<=0&&(t=Math.min(e,i));for(var a=[],s=Math.log(e)/Math.log(i),r=Math.log(t)/Math.log(i),n=s-r,o=Math.round(n),l=n/o,h=0,c=r;h<o;h++,c+=l)a.push(Math.pow(i,c));return a.push(Math.pow(i,s)),{result:a,niceMin:t,niceMax:e}}},{key:"_adjustTicksForSmallRange",value:function(t,e,i){var a=t;if(void 0!==e&&this.w.config.yaxis[e].labels.formatter&&void 0===this.w.config.yaxis[e].tickAmount){var s=Number(this.w.config.yaxis[e].labels.formatter(1));v.isNumber(s)&&0===this.w.globals.yValueDecimal&&(a=Math.ceil(i))}return a<t?a:t}},{key:"setYScaleForIndex",value:function(t,e,i){var a=this.w.globals,s=this.w.config,r=a.isBarHorizontal?s.xaxis:s.yaxis[t];void 0===a.yAxisScale[t]&&(a.yAxisScale[t]=[]);var n=Math.abs(i-e);r.logarithmic&&n<=5&&(a.invalidLogScale=!0),r.logarithmic&&n>5?(a.allSeriesCollapsed=!1,a.yAxisScale[t]=r.forceNiceScale?this.logarithmicScaleNice(e,i,r.logBase):this.logarithmicScale(e,i,r.logBase)):i!==-Number.MAX_VALUE&&v.isNumber(i)&&e!==Number.MAX_VALUE&&v.isNumber(e)?(a.allSeriesCollapsed=!1,a.yAxisScale[t]=this.niceScale(e,i,t)):a.yAxisScale[t]=this.niceScale(Number.MIN_VALUE,0,t)}},{key:"setXScale",value:function(t,e){var i=this.w,a=i.globals,s=Math.abs(e-t);if(e!==-Number.MAX_VALUE&&v.isNumber(e)){var r=a.xTickAmount+1;s<10&&s>1&&(r=s),a.xAxisScale=this.linearScale(t,e,r,0,i.config.xaxis.stepSize)}else a.xAxisScale=this.linearScale(0,10,10);return a.xAxisScale}},{key:"scaleMultipleYAxes",value:function(){var t=this,e=this.w.config,i=this.w.globals;this.coreUtils.setSeriesYAxisMappings();var a=i.seriesYAxisMap,s=i.minYArr,r=i.maxYArr;i.allSeriesCollapsed=!0,i.barGroups=[],a.forEach((function(a,n){var o=[];a.forEach((function(t){var i=e.series[t].group;o.indexOf(i)<0&&o.push(i)})),a.length>0?function(){var l,h,c=Number.MAX_VALUE,d=-Number.MAX_VALUE,u=c,g=d;if(e.chart.stacked)!function(){var t=new Array(i.dataPoints).fill(0),s=[],r=[],p=[];o.forEach((function(){s.push(t.map((function(){return Number.MIN_VALUE}))),r.push(t.map((function(){return Number.MIN_VALUE}))),p.push(t.map((function(){return Number.MIN_VALUE})))}));for(var f=function(t){!l&&e.series[a[t]].type&&(l=e.series[a[t]].type);var c=a[t];h=e.series[c].group?e.series[c].group:"axis-".concat(n),!(i.collapsedSeriesIndices.indexOf(c)<0&&i.ancillaryCollapsedSeriesIndices.indexOf(c)<0)||(i.allSeriesCollapsed=!1,o.forEach((function(t,a){if(e.series[c].group===t)for(var n=0;n<i.series[c].length;n++){var o=i.series[c][n];o>=0?r[a][n]+=o:p[a][n]+=o,s[a][n]+=o,u=Math.min(u,o),g=Math.max(g,o)}}))),"bar"!==l&&"column"!==l||i.barGroups.push(h)},x=0;x<a.length;x++)f(x);l||(l=e.chart.type),"bar"===l||"column"===l?o.forEach((function(t,e){c=Math.min(c,Math.min.apply(null,p[e])),d=Math.max(d,Math.max.apply(null,r[e]))})):(o.forEach((function(t,e){u=Math.min(u,Math.min.apply(null,s[e])),g=Math.max(g,Math.max.apply(null,s[e]))})),c=u,d=g),c===Number.MIN_VALUE&&d===Number.MIN_VALUE&&(d=-Number.MAX_VALUE)}();else for(var p=0;p<a.length;p++){var f=a[p];c=Math.min(c,s[f]),d=Math.max(d,r[f]),!(i.collapsedSeriesIndices.indexOf(f)<0&&i.ancillaryCollapsedSeriesIndices.indexOf(f)<0)||(i.allSeriesCollapsed=!1)}void 0!==e.yaxis[n].min&&(c="function"==typeof e.yaxis[n].min?e.yaxis[n].min(c):e.yaxis[n].min),void 0!==e.yaxis[n].max&&(d="function"==typeof e.yaxis[n].max?e.yaxis[n].max(d):e.yaxis[n].max),i.barGroups=i.barGroups.filter((function(t,e,i){return i.indexOf(t)===e})),t.setYScaleForIndex(n,c,d),a.forEach((function(t){s[t]=i.yAxisScale[n].niceMin,r[t]=i.yAxisScale[n].niceMax}))}():t.setYScaleForIndex(n,0,-Number.MAX_VALUE)}))}}]),t}(),ea=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.scales=new ta(e)}return s(t,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-Number.MAX_VALUE,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w.config,r=this.w.globals,n=-Number.MAX_VALUE,o=Number.MIN_VALUE;null===a&&(a=t+1);var l=r.series,h=l,c=l;"candlestick"===s.chart.type?(h=r.seriesCandleL,c=r.seriesCandleH):"boxPlot"===s.chart.type?(h=r.seriesCandleO,c=r.seriesCandleC):r.isRangeData&&(h=r.seriesRangeStart,c=r.seriesRangeEnd);var d=!1;if(r.seriesX.length>=a){var u,g=null===(u=r.brushSource)||void 0===u?void 0:u.w.config.chart.brush;(s.chart.zoom.enabled&&s.chart.zoom.autoScaleYaxis||null!=g&&g.enabled&&null!=g&&g.autoScaleYaxis)&&(d=!0)}for(var p=t;p<a;p++){r.dataPoints=Math.max(r.dataPoints,l[p].length);var f=s.series[p].type;r.categoryLabels.length&&(r.dataPoints=r.categoryLabels.filter((function(t){return void 0!==t})).length),r.labels.length&&"datetime"!==s.xaxis.type&&0!==r.series.reduce((function(t,e){return t+e.length}),0)&&(r.dataPoints=Math.max(r.dataPoints,r.labels.length));var x=0,b=l[p].length-1;if(d){if(s.xaxis.min)for(;x<b&&r.seriesX[p][x]<s.xaxis.min;x++);if(s.xaxis.max)for(;b>x&&r.seriesX[p][b]>s.xaxis.max;b--);}for(var m=x;m<=b&&m<r.series[p].length;m++){var y=l[p][m];if(null!==y&&v.isNumber(y)){switch(void 0!==c[p][m]&&(n=Math.max(n,c[p][m]),e=Math.min(e,c[p][m])),void 0!==h[p][m]&&(e=Math.min(e,h[p][m]),i=Math.max(i,h[p][m])),f){case"candlestick":void 0!==r.seriesCandleC[p][m]&&(n=Math.max(n,r.seriesCandleH[p][m]),e=Math.min(e,r.seriesCandleL[p][m]));break;case"boxPlot":void 0!==r.seriesCandleC[p][m]&&(n=Math.max(n,r.seriesCandleC[p][m]),e=Math.min(e,r.seriesCandleO[p][m]))}f&&"candlestick"!==f&&"boxPlot"!==f&&"rangeArea"!==f&&"rangeBar"!==f&&(n=Math.max(n,r.series[p][m]),e=Math.min(e,r.series[p][m])),i=n,r.seriesGoals[p]&&r.seriesGoals[p][m]&&Array.isArray(r.seriesGoals[p][m])&&r.seriesGoals[p][m].forEach((function(t){o!==Number.MIN_VALUE&&(o=Math.min(o,t.value),e=o),n=Math.max(n,t.value),i=n})),v.isFloat(y)&&(y=v.noExponents(y),r.yValueDecimal=Math.max(r.yValueDecimal,y.toString().split(".")[1].length)),o>h[p][m]&&h[p][m]<0&&(o=h[p][m])}else r.hasNullValues=!0}"bar"!==f&&"column"!==f||(o<0&&n<0&&(n=0,i=Math.max(i,0)),o===Number.MIN_VALUE&&(o=0,e=Math.min(e,0)))}return"rangeBar"===s.chart.type&&r.seriesRangeStart.length&&r.isBarHorizontal&&(o=e),"bar"===s.chart.type&&(o<0&&n<0&&(n=0),o===Number.MIN_VALUE&&(o=0)),{minY:o,maxY:n,lowestY:e,highestY:i}}},{key:"setYRange",value:function(){var t=this.w.globals,e=this.w.config;t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE;var i,a=Number.MAX_VALUE;if(t.isMultipleYAxis){a=Number.MAX_VALUE;for(var s=0;s<t.series.length;s++)i=this.getMinYMaxY(s),t.minYArr[s]=i.lowestY,t.maxYArr[s]=i.highestY,a=Math.min(a,i.lowestY)}if(i=this.getMinYMaxY(0,a,null,t.series.length),"bar"===e.chart.type?(t.minY=i.minY,t.maxY=i.maxY):(t.minY=i.lowestY,t.maxY=i.highestY),a=i.lowestY,e.chart.stacked&&this._setStackedMinMax(),"line"===e.chart.type||"area"===e.chart.type||"scatter"===e.chart.type||"candlestick"===e.chart.type||"boxPlot"===e.chart.type||"rangeBar"===e.chart.type&&!t.isBarHorizontal?t.minY===Number.MIN_VALUE&&a!==-Number.MAX_VALUE&&a!==t.maxY&&(t.minY=a):t.minY=t.minY!==Number.MIN_VALUE?Math.min(i.minY,t.minY):i.minY,e.yaxis.forEach((function(e,i){void 0!==e.max&&("number"==typeof e.max?t.maxYArr[i]=e.max:"function"==typeof e.max&&(t.maxYArr[i]=e.max(t.isMultipleYAxis?t.maxYArr[i]:t.maxY)),t.maxY=t.maxYArr[i]),void 0!==e.min&&("number"==typeof e.min?t.minYArr[i]=e.min:"function"==typeof e.min&&(t.minYArr[i]=e.min(t.isMultipleYAxis?t.minYArr[i]===Number.MIN_VALUE?0:t.minYArr[i]:t.minY)),t.minY=t.minYArr[i])})),t.isBarHorizontal){["min","max"].forEach((function(i){void 0!==e.xaxis[i]&&"number"==typeof e.xaxis[i]&&("min"===i?t.minY=e.xaxis[i]:t.maxY=e.xaxis[i])}))}return t.isMultipleYAxis?(this.scales.scaleMultipleYAxes(),t.minY=a):(this.scales.setYScaleForIndex(0,t.minY,t.maxY),t.minY=t.yAxisScale[0].niceMin,t.maxY=t.yAxisScale[0].niceMax,t.minYArr[0]=t.minY,t.maxYArr[0]=t.maxY),t.barGroups=[],t.lineGroups=[],t.areaGroups=[],e.series.forEach((function(i){switch(i.type||e.chart.type){case"bar":case"column":t.barGroups.push(i.group);break;case"line":t.lineGroups.push(i.group);break;case"area":t.areaGroups.push(i.group)}})),t.barGroups=t.barGroups.filter((function(t,e,i){return i.indexOf(t)===e})),t.lineGroups=t.lineGroups.filter((function(t,e,i){return i.indexOf(t)===e})),t.areaGroups=t.areaGroups.filter((function(t,e,i){return i.indexOf(t)===e})),{minY:t.minY,maxY:t.maxY,minYArr:t.minYArr,maxYArr:t.maxYArr,yAxisScale:t.yAxisScale}}},{key:"setXRange",value:function(){var t=this.w.globals,e=this.w.config,i="numeric"===e.xaxis.type||"datetime"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided||t.noLabelsProvided||t.isXNumeric;if(t.isXNumeric&&function(){for(var e=0;e<t.series.length;e++)if(t.labels[e])for(var i=0;i<t.labels[e].length;i++)null!==t.labels[e][i]&&v.isNumber(t.labels[e][i])&&(t.maxX=Math.max(t.maxX,t.labels[e][i]),t.initialMaxX=Math.max(t.maxX,t.labels[e][i]),t.minX=Math.min(t.minX,t.labels[e][i]),t.initialMinX=Math.min(t.minX,t.labels[e][i]))}(),t.noLabelsProvided&&0===e.xaxis.categories.length&&(t.maxX=t.labels[t.labels.length-1],t.initialMaxX=t.labels[t.labels.length-1],t.minX=1,t.initialMinX=1),t.isXNumeric||t.noLabelsProvided||t.dataFormatXNumeric){var a=10;if(void 0===e.xaxis.tickAmount)a=Math.round(t.svgWidth/150),"numeric"===e.xaxis.type&&t.dataPoints<30&&(a=t.dataPoints-1),a>t.dataPoints&&0!==t.dataPoints&&(a=t.dataPoints-1);else if("dataPoints"===e.xaxis.tickAmount){if(t.series.length>1&&(a=t.series[t.maxValsInArrayIndex].length-1),t.isXNumeric){var s=t.maxX-t.minX;s<30&&(a=s-1)}}else a=e.xaxis.tickAmount;if(t.xTickAmount=a,void 0!==e.xaxis.max&&"number"==typeof e.xaxis.max&&(t.maxX=e.xaxis.max),void 0!==e.xaxis.min&&"number"==typeof e.xaxis.min&&(t.minX=e.xaxis.min),void 0!==e.xaxis.range&&(t.minX=t.maxX-e.xaxis.range),t.minX!==Number.MAX_VALUE&&t.maxX!==-Number.MAX_VALUE)if(e.xaxis.convertedCatToNumeric&&!t.dataFormatXNumeric){for(var r=[],n=t.minX-1;n<t.maxX;n++)r.push(n+1);t.xAxisScale={result:r,niceMin:r[0],niceMax:r[r.length-1]}}else t.xAxisScale=this.scales.setXScale(t.minX,t.maxX);else t.xAxisScale=this.scales.linearScale(0,a,a,0,e.xaxis.stepSize),t.noLabelsProvided&&t.labels.length>0&&(t.xAxisScale=this.scales.linearScale(1,t.labels.length,a-1,0,e.xaxis.stepSize),t.seriesX=t.labels.slice());i&&(t.labels=t.xAxisScale.result.slice())}return t.isBarHorizontal&&t.labels.length&&(t.xTickAmount=t.labels.length),this._handleSingleDataPoint(),this._getMinXDiff(),{minX:t.minX,maxX:t.maxX}}},{key:"setZRange",value:function(){var t=this.w.globals;if(t.isDataXYZ)for(var e=0;e<t.series.length;e++)if(void 0!==t.seriesZ[e])for(var i=0;i<t.seriesZ[e].length;i++)null!==t.seriesZ[e][i]&&v.isNumber(t.seriesZ[e][i])&&(t.maxZ=Math.max(t.maxZ,t.seriesZ[e][i]),t.minZ=Math.min(t.minZ,t.seriesZ[e][i]))}},{key:"_handleSingleDataPoint",value:function(){var t=this.w.globals,e=this.w.config;if(t.minX===t.maxX){var i=new zi(this.ctx);if("datetime"===e.xaxis.type){var a=i.getDate(t.minX);e.xaxis.labels.datetimeUTC?a.setUTCDate(a.getUTCDate()-2):a.setDate(a.getDate()-2),t.minX=new Date(a).getTime();var s=i.getDate(t.maxX);e.xaxis.labels.datetimeUTC?s.setUTCDate(s.getUTCDate()+2):s.setDate(s.getDate()+2),t.maxX=new Date(s).getTime()}else("numeric"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided)&&(t.minX=t.minX-2,t.initialMinX=t.minX,t.maxX=t.maxX+2,t.initialMaxX=t.maxX)}}},{key:"_getMinXDiff",value:function(){var t=this.w.globals;t.isXNumeric&&t.seriesX.forEach((function(e,i){1===e.length&&e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length-1]);var a=e.slice();a.sort((function(t,e){return t-e})),a.forEach((function(e,i){if(i>0){var s=e-a[i-1];s>0&&(t.minXDiff=Math.min(s,t.minXDiff))}})),1!==t.dataPoints&&t.minXDiff!==Number.MAX_VALUE||(t.minXDiff=.5)}))}},{key:"_setStackedMinMax",value:function(){var t=this,e=this.w.globals;if(e.series.length){var i=e.seriesGroups;i.length||(i=[this.w.globals.seriesNames.map((function(t){return t}))]);var a={},s={};i.forEach((function(i){a[i]=[],s[i]=[],t.w.config.series.map((function(t,a){return i.indexOf(e.seriesNames[a])>-1?a:null})).filter((function(t){return null!==t})).forEach((function(r){for(var n=0;n<e.series[e.maxValsInArrayIndex].length;n++){var o,l,h,c;void 0===a[i][n]&&(a[i][n]=0,s[i][n]=0),(t.w.config.chart.stacked&&!e.comboCharts||t.w.config.chart.stacked&&e.comboCharts&&(!t.w.config.chart.stackOnlyBar||"bar"===(null===(o=t.w.config.series)||void 0===o||null===(l=o[r])||void 0===l?void 0:l.type)||"column"===(null===(h=t.w.config.series)||void 0===h||null===(c=h[r])||void 0===c?void 0:c.type)))&&null!==e.series[r][n]&&v.isNumber(e.series[r][n])&&(e.series[r][n]>0?a[i][n]+=parseFloat(e.series[r][n])+1e-4:s[i][n]+=parseFloat(e.series[r][n]))}}))})),Object.entries(a).forEach((function(t){var i=p(t,1)[0];a[i].forEach((function(t,r){e.maxY=Math.max(e.maxY,a[i][r]),e.minY=Math.min(e.minY,s[i][r])}))}))}}}]),t}(),ia=function(){function t(e,a){i(this,t),this.ctx=e,this.elgrid=a,this.w=e.w;var s=this.w;this.xaxisFontSize=s.config.xaxis.labels.style.fontSize,this.axisFontFamily=s.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=s.config.xaxis.labels.style.colors,this.isCategoryBarHorizontal="bar"===s.config.chart.type&&s.config.plotOptions.bar.horizontal,this.xAxisoffX="bottom"===s.config.xaxis.position?s.globals.gridHeight:0,this.drawnLabels=[],this.axesUtils=new Ri(e)}return s(t,[{key:"drawYaxis",value:function(t){var e=this.w,i=new Mi(this.ctx),a=e.config.yaxis[t].labels.style,s=a.fontSize,r=a.fontFamily,n=a.fontWeight,o=i.group({class:"apexcharts-yaxis",rel:t,transform:"translate(".concat(e.globals.translateYAxisX[t],", 0)")});if(this.axesUtils.isYAxisHidden(t))return o;var l=i.group({class:"apexcharts-yaxis-texts-g"});o.add(l);var h=e.globals.yAxisScale[t].result.length-1,c=e.globals.gridHeight/h,d=e.globals.yLabelFormatters[t],u=this.axesUtils.checkForReversedLabels(t,e.globals.yAxisScale[t].result.slice());if(e.config.yaxis[t].labels.show){var g=e.globals.translateY+e.config.yaxis[t].labels.offsetY;e.globals.isBarHorizontal?g=0:"heatmap"===e.config.chart.type&&(g-=c/2),g+=parseInt(s,10)/3;for(var p=h;p>=0;p--){var f=d(u[p],p,e),x=e.config.yaxis[t].labels.padding;e.config.yaxis[t].opposite&&0!==e.config.yaxis.length&&(x*=-1);var b=this.getTextAnchor(e.config.yaxis[t].labels.align,e.config.yaxis[t].opposite),m=this.axesUtils.getYAxisForeColor(a.colors,t),y=Array.isArray(m)?m[p]:m,w=v.listToArray(e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-label tspan"))).map((function(t){return t.textContent})),k=i.drawText({x:x,y:g,text:w.includes(f)&&!e.config.yaxis[t].labels.showDuplicates?"":f,textAnchor:b,fontSize:s,fontFamily:r,fontWeight:n,maxWidth:e.config.yaxis[t].labels.maxWidth,foreColor:y,isPlainText:!1,cssClass:"apexcharts-yaxis-label ".concat(a.cssClass)});l.add(k),this.addTooltip(k,f),0!==e.config.yaxis[t].labels.rotate&&this.rotateLabel(i,k,firstLabel,e.config.yaxis[t].labels.rotate),g+=c}}return this.addYAxisTitle(i,o,t),this.addAxisBorder(i,o,t,h,c),o}},{key:"getTextAnchor",value:function(t,e){return"left"===t?"start":"center"===t?"middle":"right"===t?"end":e?"start":"end"}},{key:"addTooltip",value:function(t,e){var i=document.createElementNS(this.w.globals.SVGNS,"title");i.textContent=Array.isArray(e)?e.join(" "):e,t.node.appendChild(i)}},{key:"rotateLabel",value:function(t,e,i,a){var s=t.rotateAroundCenter(i.node),r=t.rotateAroundCenter(e.node);e.node.setAttribute("transform","rotate(".concat(a," ").concat(s.x," ").concat(r.y,")"))}},{key:"addYAxisTitle",value:function(t,e,i){var a=this.w;if(void 0!==a.config.yaxis[i].title.text){var s=t.group({class:"apexcharts-yaxis-title"}),r=a.config.yaxis[i].opposite?a.globals.translateYAxisX[i]:0,n=t.drawText({x:r,y:a.globals.gridHeight/2+a.globals.translateY+a.config.yaxis[i].title.offsetY,text:a.config.yaxis[i].title.text,textAnchor:"end",foreColor:a.config.yaxis[i].title.style.color,fontSize:a.config.yaxis[i].title.style.fontSize,fontWeight:a.config.yaxis[i].title.style.fontWeight,fontFamily:a.config.yaxis[i].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text ".concat(a.config.yaxis[i].title.style.cssClass)});s.add(n),e.add(s)}}},{key:"addAxisBorder",value:function(t,e,i,a,s){var r=this.w,n=r.config.yaxis[i].axisBorder,o=31+n.offsetX;if(r.config.yaxis[i].opposite&&(o=-31-n.offsetX),n.show){var l=t.drawLine(o,r.globals.translateY+n.offsetY-2,o,r.globals.gridHeight+r.globals.translateY+n.offsetY+2,n.color,0,n.width);e.add(l)}r.config.yaxis[i].axisTicks.show&&this.axesUtils.drawYAxisTicks(o,a,n,r.config.yaxis[i].axisTicks,i,s,e)}},{key:"drawYaxisInversed",value:function(t){var e=this.w,i=new Mi(this.ctx),a=i.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),s=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});a.add(s);var r=e.globals.yAxisScale[t].result.length-1,n=e.globals.gridWidth/r+.1,o=n+e.config.xaxis.labels.offsetX,l=e.globals.xLabelFormatter,h=this.axesUtils.checkForReversedLabels(t,e.globals.yAxisScale[t].result.slice()),c=e.globals.timescaleLabels;if(c.length>0&&(this.xaxisLabels=c.slice(),r=(h=c.slice()).length),e.config.xaxis.labels.show)for(var d=c.length?0:r;c.length?d<c.length:d>=0;c.length?d++:d--){var u=l(h[d],d,e),g=e.globals.gridWidth+e.globals.padHorizontal-(o-n+e.config.xaxis.labels.offsetX);if(c.length){var p=this.axesUtils.getLabel(h,c,g,d,this.drawnLabels,this.xaxisFontSize);g=p.x,u=p.text,this.drawnLabels.push(p.text),0===d&&e.globals.skipFirstTimelinelabel&&(u=""),d===h.length-1&&e.globals.skipLastTimelinelabel&&(u="")}var f=i.drawText({x:g,y:this.xAxisoffX+e.config.xaxis.labels.offsetY+30-("top"===e.config.xaxis.position?e.globals.xAxisHeight+e.config.xaxis.axisTicks.height-2:0),text:u,textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[t]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,fontWeight:e.config.xaxis.labels.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-xaxis-label ".concat(e.config.xaxis.labels.style.cssClass)});s.add(f),f.tspan(u),this.addTooltip(f,u),o+=n}return this.inversedYAxisTitleText(a),this.inversedYAxisBorder(a),a}},{key:"inversedYAxisBorder",value:function(t){var e=this.w,i=new Mi(this.ctx),a=e.config.xaxis.axisBorder;if(a.show){var s=0;"bar"===e.config.chart.type&&e.globals.isXNumeric&&(s-=15);var r=i.drawLine(e.globals.padHorizontal+s+a.offsetX,this.xAxisoffX,e.globals.gridWidth,this.xAxisoffX,a.color,0,a.height);this.elgrid&&this.elgrid.elGridBorders&&e.config.grid.show?this.elgrid.elGridBorders.add(r):t.add(r)}}},{key:"inversedYAxisTitleText",value:function(t){var e=this.w,i=new Mi(this.ctx);if(void 0!==e.config.xaxis.title.text){var a=i.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),s=i.drawText({x:e.globals.gridWidth/2+e.config.xaxis.title.offsetX,y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(e.config.xaxis.title.style.fontSize)+e.config.xaxis.title.offsetY+20,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,fontWeight:e.config.xaxis.title.style.fontWeight,foreColor:e.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text ".concat(e.config.xaxis.title.style.cssClass)});a.add(s),t.add(a)}}},{key:"yAxisTitleRotate",value:function(t,e){var i=this.w,a=new Mi(this.ctx),s=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-texts-g")),r=s?s.getBoundingClientRect():{width:0,height:0},n=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-title text")),o=n?n.getBoundingClientRect():{width:0,height:0};if(n){var l=this.xPaddingForYAxisTitle(t,r,o,e);n.setAttribute("x",l.xPos-(e?10:0));var h=a.rotateAroundCenter(n);n.setAttribute("transform","rotate(".concat(e?-1*i.config.yaxis[t].title.rotate:i.config.yaxis[t].title.rotate," ").concat(h.x," ").concat(h.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(t,e,i,a){var s=this.w,r=0,n=10;return void 0===s.config.yaxis[t].title.text||t<0?{xPos:r,padd:0}:(a?r=e.width+s.config.yaxis[t].title.offsetX+i.width/2+n/2:(r=-1*e.width+s.config.yaxis[t].title.offsetX+n/2+i.width/2,s.globals.isBarHorizontal&&(n=25,r=-1*e.width-s.config.yaxis[t].title.offsetX-n)),{xPos:r,padd:n})}},{key:"setYAxisXPosition",value:function(t,e){var i=this.w,a=0,s=0,r=18,n=1;i.config.yaxis.length>1&&(this.multipleYs=!0),i.config.yaxis.forEach((function(o,l){var h=i.globals.ignoreYAxisIndexes.includes(l)||!o.show||o.floating||0===t[l].width,c=t[l].width+e[l].width;o.opposite?i.globals.isBarHorizontal?(s=i.globals.gridWidth+i.globals.translateX-1,i.globals.translateYAxisX[l]=s-o.labels.offsetX):(s=i.globals.gridWidth+i.globals.translateX+n,h||(n+=c+20),i.globals.translateYAxisX[l]=s-o.labels.offsetX+20):(a=i.globals.translateX-r,h||(r+=c+20),i.globals.translateYAxisX[l]=a+o.labels.offsetX)}))}},{key:"setYAxisTextAlignments",value:function(){var t=this.w;v.listToArray(t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach((function(e,i){var a=t.config.yaxis[i];if(a&&!a.floating&&void 0!==a.labels.align){var s=t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-texts-g")),r=v.listToArray(t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-label"))),n=s.getBoundingClientRect();r.forEach((function(t){t.setAttribute("text-anchor",a.labels.align)})),"left"!==a.labels.align||a.opposite?"center"===a.labels.align?s.setAttribute("transform","translate(".concat(n.width/2*(a.opposite?1:-1),", 0)")):"right"===a.labels.align&&a.opposite&&s.setAttribute("transform","translate(".concat(n.width,", 0)")):s.setAttribute("transform","translate(-".concat(n.width,", 0)"))}}))}}]),t}(),aa=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.documentEvent=v.bind(this.documentEvent,this)}return s(t,[{key:"addEventListener",value:function(t,e){var i=this.w;i.globals.events.hasOwnProperty(t)?i.globals.events[t].push(e):i.globals.events[t]=[e]}},{key:"removeEventListener",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){var a=i.globals.events[t].indexOf(e);-1!==a&&i.globals.events[t].splice(a,1)}}},{key:"fireEvent",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){e&&e.length||(e=[]);for(var a=i.globals.events[t],s=a.length,r=0;r<s;r++)a[r].apply(null,e)}}},{key:"setupEventHandlers",value:function(){var t=this,e=this.w,i=this.ctx,a=e.globals.dom.baseEl.querySelector(e.globals.chartClass);this.ctx.eventList.forEach((function(t){a.addEventListener(t,(function(t){var a=Object.assign({},e,{seriesIndex:e.globals.axisCharts?e.globals.capturedSeriesIndex:0,dataPointIndex:e.globals.capturedDataPointIndex});"mousemove"===t.type||"touchmove"===t.type?"function"==typeof e.config.chart.events.mouseMove&&e.config.chart.events.mouseMove(t,i,a):"mouseleave"===t.type||"touchleave"===t.type?"function"==typeof e.config.chart.events.mouseLeave&&e.config.chart.events.mouseLeave(t,i,a):("mouseup"===t.type&&1===t.which||"touchend"===t.type)&&("function"==typeof e.config.chart.events.click&&e.config.chart.events.click(t,i,a),i.ctx.events.fireEvent("click",[t,i,a]))}),{capture:!1,passive:!0})})),this.ctx.eventList.forEach((function(i){e.globals.dom.baseEl.addEventListener(i,t.documentEvent,{passive:!0})})),this.ctx.core.setupBrushHandler()}},{key:"documentEvent",value:function(t){var e=this.w,i=t.target.className;if("click"===t.type){var a=e.globals.dom.baseEl.querySelector(".apexcharts-menu");a&&a.classList.contains("apexcharts-menu-open")&&"apexcharts-menu-icon"!==i&&a.classList.remove("apexcharts-menu-open")}e.globals.clientX="touchmove"===t.type?t.touches[0].clientX:t.clientX,e.globals.clientY="touchmove"===t.type?t.touches[0].clientY:t.clientY}}]),t}(),sa=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"setCurrentLocaleValues",value:function(t){var e=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(e=this.w.config.chart.locales.concat(window.Apex.chart.locales));var i=e.filter((function(e){return e.name===t}))[0];if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var a=v.extend(Hi,i);this.w.globals.locale=a.options}}]),t}(),ra=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"drawAxis",value:function(t,e){var i,a,s=this,r=this.w.globals,n=this.w.config,o=new Qi(this.ctx,e),l=new ia(this.ctx,e);r.axisCharts&&"radar"!==t&&(r.isBarHorizontal?(a=l.drawYaxisInversed(0),i=o.drawXaxisInversed(0),r.dom.elGraphical.add(i),r.dom.elGraphical.add(a)):(i=o.drawXaxis(),r.dom.elGraphical.add(i),n.yaxis.map((function(t,e){if(-1===r.ignoreYAxisIndexes.indexOf(e)&&(a=l.drawYaxis(e),r.dom.Paper.add(a),"back"===s.w.config.grid.position)){var i=r.dom.Paper.children()[1];i.remove(),r.dom.Paper.add(i)}}))))}}]),t}(),na=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"drawXCrosshairs",value:function(){var t=this.w,e=new Mi(this.ctx),i=new Li(this.ctx),a=t.config.xaxis.crosshairs.fill.gradient,s=t.config.xaxis.crosshairs.dropShadow,r=t.config.xaxis.crosshairs.fill.type,n=a.colorFrom,o=a.colorTo,l=a.opacityFrom,h=a.opacityTo,c=a.stops,d=s.enabled,u=s.left,g=s.top,p=s.blur,f=s.color,x=s.opacity,b=t.config.xaxis.crosshairs.fill.color;if(t.config.xaxis.crosshairs.show){"gradient"===r&&(b=e.drawGradient("vertical",n,o,l,h,null,c,null));var m=e.drawRect();1===t.config.xaxis.crosshairs.width&&(m=e.drawLine());var y=t.globals.gridHeight;(!v.isNumber(y)||y<0)&&(y=0);var w=t.config.xaxis.crosshairs.width;(!v.isNumber(w)||w<0)&&(w=0),m.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:y,width:w,height:y,fill:b,filter:"none","fill-opacity":t.config.xaxis.crosshairs.opacity,stroke:t.config.xaxis.crosshairs.stroke.color,"stroke-width":t.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":t.config.xaxis.crosshairs.stroke.dashArray}),d&&(m=i.dropShadow(m,{left:u,top:g,blur:p,color:f,opacity:x})),t.globals.dom.elGraphical.add(m)}}},{key:"drawYCrosshairs",value:function(){var t=this.w,e=new Mi(this.ctx),i=t.config.yaxis[0].crosshairs,a=t.globals.barPadForNumericAxis;if(t.config.yaxis[0].crosshairs.show){var s=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,i.stroke.dashArray,i.stroke.width);s.attr({class:"apexcharts-ycrosshairs"}),t.globals.dom.elGraphical.add(s)}var r=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,0,0);r.attr({class:"apexcharts-ycrosshairs-hidden"}),t.globals.dom.elGraphical.add(r)}}]),t}(),oa=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"checkResponsiveConfig",value:function(t){var e=this,i=this.w,a=i.config;if(0!==a.responsive.length){var s=a.responsive.slice();s.sort((function(t,e){return t.breakpoint>e.breakpoint?1:e.breakpoint>t.breakpoint?-1:0})).reverse();var r=new Wi({}),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=s[0].breakpoint,n=window.innerWidth>0?window.innerWidth:screen.width;if(n>a){var o=v.clone(i.globals.initialConfig);o.series=v.clone(i.config.series);var l=Pi.extendArrayProps(r,o,i);t=v.extend(l,t),t=v.extend(i.config,t),e.overrideResponsiveOptions(t)}else for(var h=0;h<s.length;h++)n<s[h].breakpoint&&(t=Pi.extendArrayProps(r,s[h].options,i),t=v.extend(i.config,t),e.overrideResponsiveOptions(t))};if(t){var o=Pi.extendArrayProps(r,t,i);o=v.extend(i.config,o),n(o=v.extend(o,t))}else n({})}}},{key:"overrideResponsiveOptions",value:function(t){var e=new Wi(t).init({responsiveOverride:!0});this.w.config=e}}]),t}(),la=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.colors=[],this.isColorFn=!1,this.isHeatmapDistributed=this.checkHeatmapDistributed(),this.isBarDistributed=this.checkBarDistributed()}return s(t,[{key:"checkHeatmapDistributed",value:function(){var t=this.w.config,e=t.chart,i=t.plotOptions;return"treemap"===e.type&&i.treemap&&i.treemap.distributed||"heatmap"===e.type&&i.heatmap&&i.heatmap.distributed}},{key:"checkBarDistributed",value:function(){var t=this.w.config,e=t.chart,i=t.plotOptions;return i.bar&&i.bar.distributed&&("bar"===e.type||"rangeBar"===e.type)}},{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var t=this.w,e=new v;t.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(t.config.theme.mode));var i=f(t.config.colors||t.config.fill.colors||[]);t.globals.colors=this.getColors(i),this.applySeriesColors(t.globals.seriesColors,t.globals.colors),t.config.theme.monochrome.enabled&&(t.globals.colors=this.getMonochromeColors(t.config.theme.monochrome,t.globals.series,e));var a=t.globals.colors.slice();this.pushExtraColors(t.globals.colors),this.applyColorTypes(["fill","stroke"],a),this.applyDataLabelsColors(a),this.applyRadarPolygonsColors(),this.applyMarkersColors(a)}},{key:"getColors",value:function(t){var e=this,i=this.w;return t&&0!==t.length?Array.isArray(t)&&t.length>0&&"function"==typeof t[0]?(this.isColorFn=!0,i.config.series.map((function(a,s){var r=t[s]||t[0];return"function"==typeof r?r({value:i.globals.axisCharts?i.globals.series[s][0]||0:i.globals.series[s],seriesIndex:s,dataPointIndex:s,w:e.w}):r}))):t:this.predefined()}},{key:"applySeriesColors",value:function(t,e){t.forEach((function(t,i){t&&(e[i]=t)}))}},{key:"getMonochromeColors",value:function(t,e,i){var a=t.color,s=t.shadeIntensity,r=t.shadeTo,n=this.isBarDistributed||this.isHeatmapDistributed?e[0].length*e.length:e.length,o=1/(n/s),l=0;return Array.from({length:n},(function(){var t="dark"===r?i.shadeColor(-1*l,a):i.shadeColor(l,a);return l+=o,t}))}},{key:"applyColorTypes",value:function(t,e){var i=this,a=this.w;t.forEach((function(t){a.globals[t].colors=void 0===a.config[t].colors?i.isColorFn?a.config.colors:e:a.config[t].colors.slice(),i.pushExtraColors(a.globals[t].colors)}))}},{key:"applyDataLabelsColors",value:function(t){var e=this.w;e.globals.dataLabels.style.colors=void 0===e.config.dataLabels.style.colors?t:e.config.dataLabels.style.colors.slice(),this.pushExtraColors(e.globals.dataLabels.style.colors,50)}},{key:"applyRadarPolygonsColors",value:function(){var t=this.w;t.globals.radarPolygons.fill.colors=void 0===t.config.plotOptions.radar.polygons.fill.colors?["dark"===t.config.theme.mode?"#424242":"none"]:t.config.plotOptions.radar.polygons.fill.colors.slice(),this.pushExtraColors(t.globals.radarPolygons.fill.colors,20)}},{key:"applyMarkersColors",value:function(t){var e=this.w;e.globals.markers.colors=void 0===e.config.markers.colors?t:e.config.markers.colors.slice(),this.pushExtraColors(e.globals.markers.colors)}},{key:"pushExtraColors",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=e||a.globals.series.length;if(null===i&&(i=this.isBarDistributed||this.isHeatmapDistributed||"heatmap"===a.config.chart.type&&a.config.plotOptions.heatmap&&a.config.plotOptions.heatmap.colorScale.inverse),i&&a.globals.series.length&&(s=a.globals.series[a.globals.maxValsInArrayIndex].length*a.globals.series.length),t.length<s)for(var r=s-t.length,n=0;n<r;n++)t.push(t[n])}},{key:"updateThemeOptions",value:function(t){t.chart=t.chart||{},t.tooltip=t.tooltip||{};var e=t.theme.mode,i="dark"===e?"palette4":"light"===e?"palette1":t.theme.palette||"palette1",a="dark"===e?"#f6f7f8":"light"===e?"#373d3f":t.chart.foreColor||"#373d3f";return t.tooltip.theme=e||"light",t.chart.foreColor=a,t.theme.palette=i,t}},{key:"predefined",value:function(){var t={palette1:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"],palette2:["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"],palette3:["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"],palette4:["#4ecdc4","#c7f464","#81D4FA","#fd6a6a","#546E7A"],palette5:["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"],palette6:["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"],palette7:["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"],palette8:["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"],palette9:["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"],palette10:["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"],default:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]};return t[this.w.config.theme.palette]||t.default}}]),t}(),ha=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(t){var e=this.w,i="title"===t?e.config.title:e.config.subtitle,a=e.globals.svgWidth/2,s=i.offsetY,r="middle";if("left"===i.align?(a=10,r="start"):"right"===i.align&&(a=e.globals.svgWidth-10,r="end"),a+=i.offsetX,s=s+parseInt(i.style.fontSize,10)+i.margin/2,void 0!==i.text){var n=new Mi(this.ctx).drawText({x:a,y:s,text:i.text,textAnchor:r,fontSize:i.style.fontSize,fontFamily:i.style.fontFamily,fontWeight:i.style.fontWeight,foreColor:i.style.color,opacity:1});n.node.setAttribute("class","apexcharts-".concat(t,"-text")),e.globals.dom.Paper.add(n)}}}]),t}(),ca=function(){function t(e){i(this,t),this.w=e.w,this.dCtx=e}return s(t,[{key:"getTitleSubtitleCoords",value:function(t){var e=this.w,i=0,a=0,s="title"===t?e.config.title.floating:e.config.subtitle.floating,r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t,"-text"));if(null!==r&&!s){var n=r.getBoundingClientRect();i=n.width,a=e.globals.axisCharts?n.height+5:n.height}return{width:i,height:a}}},{key:"getLegendsRect",value:function(){var t=this.w,e=t.globals.dom.elLegendWrap;t.config.legend.height||"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||(e.style.maxHeight=t.globals.svgHeight/2+"px");var i=Object.assign({},v.getBoundingClientRect(e));return null!==e&&!t.config.legend.floating&&t.config.legend.show?this.dCtx.lgRect={x:i.x,y:i.y,height:i.height,width:0===i.height?0:i.width}:this.dCtx.lgRect={x:0,y:0,height:0,width:0},"left"!==t.config.legend.position&&"right"!==t.config.legend.position||1.5*this.dCtx.lgRect.width>t.globals.svgWidth&&(this.dCtx.lgRect.width=t.globals.svgWidth/1.5),this.dCtx.lgRect}},{key:"getDatalabelsRect",value:function(){var t=this,e=this.w,i=[];e.config.series.forEach((function(s,r){s.data.forEach((function(s,n){var o;o=e.globals.series[r][n],a=e.config.dataLabels.formatter(o,{ctx:t.dCtx.ctx,seriesIndex:r,dataPointIndex:n,w:e}),i.push(a)}))}));var a=v.getLargestStringFromArr(i),s=new Mi(this.dCtx.ctx),r=e.config.dataLabels.style,n=s.getTextRects(a,parseInt(r.fontSize),r.fontFamily);return{width:1.05*n.width,height:n.height}}},{key:"getLargestStringFromMultiArr",value:function(t,e){var i=t;if(this.w.globals.isMultiLineX){var a=e.map((function(t,e){return Array.isArray(t)?t.length:1})),s=Math.max.apply(Math,f(a));i=e[a.indexOf(s)]}return i}}]),t}(),da=function(){function t(e){i(this,t),this.w=e.w,this.dCtx=e}return s(t,[{key:"getxAxisLabelsCoords",value:function(){var t,e=this.w,i=e.globals.labels.slice();if(e.config.xaxis.convertedCatToNumeric&&0===i.length&&(i=e.globals.categoryLabels),e.globals.timescaleLabels.length>0){var a=this.getxAxisTimeScaleLabelsCoords();t={width:a.width,height:a.height},e.globals.rotateXLabels=!1}else{this.dCtx.lgWidthForSideLegends="left"!==e.config.legend.position&&"right"!==e.config.legend.position||e.config.legend.floating?0:this.dCtx.lgRect.width;var s=e.globals.xLabelFormatter,r=v.getLargestStringFromArr(i),n=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,i);e.globals.isBarHorizontal&&(n=r=e.globals.yAxisScale[0].result.reduce((function(t,e){return t.length>e.length?t:e}),0));var o=new Xi(this.dCtx.ctx),l=r;r=o.xLabelFormat(s,r,l,{i:void 0,dateFormatter:new zi(this.dCtx.ctx).formatDate,w:e}),n=o.xLabelFormat(s,n,l,{i:void 0,dateFormatter:new zi(this.dCtx.ctx).formatDate,w:e}),(e.config.xaxis.convertedCatToNumeric&&void 0===r||""===String(r).trim())&&(n=r="1");var h=new Mi(this.dCtx.ctx),c=h.getTextRects(r,e.config.xaxis.labels.style.fontSize),d=c;if(r!==n&&(d=h.getTextRects(n,e.config.xaxis.labels.style.fontSize)),(t={width:c.width>=d.width?c.width:d.width,height:c.height>=d.height?c.height:d.height}).width*i.length>e.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&0!==e.config.xaxis.labels.rotate||e.config.xaxis.labels.rotateAlways){if(!e.globals.isBarHorizontal){e.globals.rotateXLabels=!0;var u=function(t){return h.getTextRects(t,e.config.xaxis.labels.style.fontSize,e.config.xaxis.labels.style.fontFamily,"rotate(".concat(e.config.xaxis.labels.rotate," 0 0)"),!1)};c=u(r),r!==n&&(d=u(n)),t.height=(c.height>d.height?c.height:d.height)/1.5,t.width=c.width>d.width?c.width:d.width}}else e.globals.rotateXLabels=!1}return e.config.xaxis.labels.show||(t={width:0,height:0}),{width:t.width,height:t.height}}},{key:"getxAxisGroupLabelsCoords",value:function(){var t,e=this.w;if(!e.globals.hasXaxisGroups)return{width:0,height:0};var i,a=(null===(t=e.config.xaxis.group.style)||void 0===t?void 0:t.fontSize)||e.config.xaxis.labels.style.fontSize,s=e.globals.groups.map((function(t){return t.title})),r=v.getLargestStringFromArr(s),n=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,s),o=new Mi(this.dCtx.ctx),l=o.getTextRects(r,a),h=l;return r!==n&&(h=o.getTextRects(n,a)),i={width:l.width>=h.width?l.width:h.width,height:l.height>=h.height?l.height:h.height},e.config.xaxis.labels.show||(i={width:0,height:0}),{width:i.width,height:i.height}}},{key:"getxAxisTitleCoords",value:function(){var t=this.w,e=0,i=0;if(void 0!==t.config.xaxis.title.text){var a=new Mi(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text,t.config.xaxis.title.style.fontSize);e=a.width,i=a.height}return{width:e,height:i}}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var t,e=this.w;this.dCtx.timescaleLabels=e.globals.timescaleLabels.slice();var i=this.dCtx.timescaleLabels.map((function(t){return t.value})),a=i.reduce((function(t,e){return void 0===t?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):t.length>e.length?t:e}),0);return 1.05*(t=new Mi(this.dCtx.ctx).getTextRects(a,e.config.xaxis.labels.style.fontSize)).width*i.length>e.globals.gridWidth&&0!==e.config.xaxis.labels.rotate&&(e.globals.overlappingXLabels=!0),t}},{key:"additionalPaddingXLabels",value:function(t){var e=this,i=this.w,a=i.globals,s=i.config,r=s.xaxis.type,n=t.width;a.skipLastTimelinelabel=!1,a.skipFirstTimelinelabel=!1;var o=i.config.yaxis[0].opposite&&i.globals.isBarHorizontal,l=function(t,o){s.yaxis.length>1&&function(t){return-1!==a.collapsedSeriesIndices.indexOf(t)}(o)||function(t){if(e.dCtx.timescaleLabels&&e.dCtx.timescaleLabels.length){var o=e.dCtx.timescaleLabels[0],l=e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length-1].position+n/1.75-e.dCtx.yAxisWidthRight,h=o.position-n/1.75+e.dCtx.yAxisWidthLeft,c="right"===i.config.legend.position&&e.dCtx.lgRect.width>0?e.dCtx.lgRect.width:0;l>a.svgWidth-a.translateX-c&&(a.skipLastTimelinelabel=!0),h<-(t.show&&!t.floating||"bar"!==s.chart.type&&"candlestick"!==s.chart.type&&"rangeBar"!==s.chart.type&&"boxPlot"!==s.chart.type?10:n/1.75)&&(a.skipFirstTimelinelabel=!0)}else"datetime"===r?e.dCtx.gridPad.right<n&&!a.rotateXLabels&&(a.skipLastTimelinelabel=!0):"datetime"!==r&&e.dCtx.gridPad.right<n/2-e.dCtx.yAxisWidthRight&&!a.rotateXLabels&&!i.config.xaxis.labels.trim&&(e.dCtx.xPadRight=n/2+1)}(t)};s.yaxis.forEach((function(t,i){o?(e.dCtx.gridPad.left<n&&(e.dCtx.xPadLeft=n/2+1),e.dCtx.xPadRight=n/2+1):l(t,i)}))}}]),t}(),ua=function(){function t(e){i(this,t),this.w=e.w,this.dCtx=e}return s(t,[{key:"getyAxisLabelsCoords",value:function(){var t=this,e=this.w,i=[],a=10,s=new Ri(this.dCtx.ctx);return e.config.yaxis.map((function(r,n){var o={seriesIndex:n,dataPointIndex:-1,w:e},l=e.globals.yAxisScale[n],h=0;if(!s.isYAxisHidden(n)&&r.labels.show&&void 0!==r.labels.minWidth&&(h=r.labels.minWidth),!s.isYAxisHidden(n)&&r.labels.show&&l.result.length){var c=e.globals.yLabelFormatters[n],d=l.niceMin===Number.MIN_VALUE?0:l.niceMin,u=l.result.reduce((function(t,e){var i,a;return(null===(i=String(c(t,o)))||void 0===i?void 0:i.length)>(null===(a=String(c(e,o)))||void 0===a?void 0:a.length)?t:e}),d),g=u=c(u,o);if(void 0!==u&&0!==u.length||(u=l.niceMax),e.globals.isBarHorizontal){a=0;var p=e.globals.labels.slice();u=v.getLargestStringFromArr(p),u=c(u,{seriesIndex:n,dataPointIndex:-1,w:e}),g=t.dCtx.dimHelpers.getLargestStringFromMultiArr(u,p)}var f=new Mi(t.dCtx.ctx),x="rotate(".concat(r.labels.rotate," 0 0)"),b=f.getTextRects(u,r.labels.style.fontSize,r.labels.style.fontFamily,x,!1),m=b;u!==g&&(m=f.getTextRects(g,r.labels.style.fontSize,r.labels.style.fontFamily,x,!1)),i.push({width:(h>m.width||h>b.width?h:m.width>b.width?m.width:b.width)+a,height:m.height>b.height?m.height:b.height})}else i.push({width:0,height:0})})),i}},{key:"getyAxisTitleCoords",value:function(){var t=this,e=this.w,i=[];return e.config.yaxis.map((function(e,a){if(e.show&&void 0!==e.title.text){var s=new Mi(t.dCtx.ctx),r="rotate(".concat(e.title.rotate," 0 0)"),n=s.getTextRects(e.title.text,e.title.style.fontSize,e.title.style.fontFamily,r,!1);i.push({width:n.width,height:n.height})}else i.push({width:0,height:0})})),i}},{key:"getTotalYAxisWidth",value:function(){var t=this.w,e=0,i=0,a=0,s=t.globals.yAxisScale.length>1?10:0,r=new Ri(this.dCtx.ctx),n=function(n,o){var l=t.config.yaxis[o].floating,h=0;n.width>0&&!l?(h=n.width+s,function(e){return t.globals.ignoreYAxisIndexes.indexOf(e)>-1}(o)&&(h=h-n.width-s)):h=l||r.isYAxisHidden(o)?0:5,t.config.yaxis[o].opposite?a+=h:i+=h,e+=h};return t.globals.yLabelsCoords.map((function(t,e){n(t,e)})),t.globals.yTitleCoords.map((function(t,e){n(t,e)})),t.globals.isBarHorizontal&&!t.config.yaxis[0].floating&&(e=t.globals.yLabelsCoords[0].width+t.globals.yTitleCoords[0].width+15),this.dCtx.yAxisWidthLeft=i,this.dCtx.yAxisWidthRight=a,e}}]),t}(),ga=function(){function t(e){i(this,t),this.w=e.w,this.dCtx=e}return s(t,[{key:"gridPadForColumnsInNumericAxis",value:function(t){var e=this.w,i=e.config,a=e.globals;if(a.noData||a.collapsedSeries.length+a.ancillaryCollapsedSeries.length===i.series.length)return 0;var s=function(t){return["bar","rangeBar","candlestick","boxPlot"].includes(t)},r=i.chart.type,n=0,o=s(r)?i.series.length:1;a.comboBarCount>0&&(o=a.comboBarCount),a.collapsedSeries.forEach((function(t){s(t.type)&&(o-=1)})),i.chart.stacked&&(o=1);var l=s(r)||a.comboBarCount>0,h=Math.abs(a.initialMaxX-a.initialMinX);if(l&&a.isXNumeric&&!a.isBarHorizontal&&o>0&&0!==h){h<=3&&(h=a.dataPoints);var c=h/t,d=a.minXDiff&&a.minXDiff/c>0?a.minXDiff/c:0;d>t/2&&(d/=2),(n=d*parseInt(i.plotOptions.bar.columnWidth,10)/100)<1&&(n=1),a.barPadForNumericAxis=n}return n}},{key:"gridPadFortitleSubtitle",value:function(){var t=this,e=this.w,i=e.globals,a=this.dCtx.isSparkline||!i.axisCharts?0:10;["title","subtitle"].forEach((function(s){void 0!==e.config[s].text?a+=e.config[s].margin:a+=t.dCtx.isSparkline||!i.axisCharts?0:5})),!e.config.legend.show||"bottom"!==e.config.legend.position||e.config.legend.floating||i.axisCharts||(a+=10);var s=this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),r=this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");i.gridHeight-=s.height+r.height+a,i.translateY+=s.height+r.height+a}},{key:"setGridXPosForDualYAxis",value:function(t,e){var i=this.w,a=new Ri(this.dCtx.ctx);i.config.yaxis.forEach((function(s,r){-1!==i.globals.ignoreYAxisIndexes.indexOf(r)||s.floating||a.isYAxisHidden(r)||(s.opposite&&(i.globals.translateX-=e[r].width+t[r].width+parseInt(s.labels.style.fontSize,10)/1.2+12),i.globals.translateX<2&&(i.globals.translateX=2))}))}}]),t}(),pa=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.lgRect={},this.yAxisWidth=0,this.yAxisWidthLeft=0,this.yAxisWidthRight=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.dimHelpers=new ca(this),this.dimYAxis=new ua(this),this.dimXAxis=new da(this),this.dimGrid=new ga(this),this.lgWidthForSideLegends=0,this.gridPad=this.w.config.grid.padding,this.xPadRight=0,this.xPadLeft=0}return s(t,[{key:"plotCoords",value:function(){var t=this,e=this.w,i=e.globals;this.lgRect=this.dimHelpers.getLegendsRect(),this.datalabelsCoords={width:0,height:0};var a=Array.isArray(e.config.stroke.width)?Math.max.apply(Math,f(e.config.stroke.width)):e.config.stroke.width;this.isSparkline&&((e.config.markers.discrete.length>0||e.config.markers.size>0)&&Object.entries(this.gridPad).forEach((function(e){var i=p(e,2),a=i[0],s=i[1];t.gridPad[a]=Math.max(s,t.w.globals.markers.largestSize/1.5)})),this.gridPad.top=Math.max(a/2,this.gridPad.top),this.gridPad.bottom=Math.max(a/2,this.gridPad.bottom)),i.axisCharts?this.setDimensionsForAxisCharts():this.setDimensionsForNonAxisCharts(),this.dimGrid.gridPadFortitleSubtitle(),i.gridHeight=i.gridHeight-this.gridPad.top-this.gridPad.bottom,i.gridWidth=i.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;var s=this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);i.gridWidth=i.gridWidth-2*s,i.translateX=i.translateX+this.gridPad.left+this.xPadLeft+(s>0?s:0),i.translateY=i.translateY+this.gridPad.top}},{key:"setDimensionsForAxisCharts",value:function(){var t=this,e=this.w,i=e.globals,a=this.dimYAxis.getyAxisLabelsCoords(),s=this.dimYAxis.getyAxisTitleCoords();i.isSlopeChart&&(this.datalabelsCoords=this.dimHelpers.getDatalabelsRect()),e.globals.yLabelsCoords=[],e.globals.yTitleCoords=[],e.config.yaxis.map((function(t,i){e.globals.yLabelsCoords.push({width:a[i].width,index:i}),e.globals.yTitleCoords.push({width:s[i].width,index:i})})),this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();var r=this.dimXAxis.getxAxisLabelsCoords(),n=this.dimXAxis.getxAxisGroupLabelsCoords(),o=this.dimXAxis.getxAxisTitleCoords();this.conditionalChecksForAxisCoords(r,o,n),i.translateXAxisY=e.globals.rotateXLabels?this.xAxisHeight/8:-4,i.translateXAxisX=e.globals.rotateXLabels&&e.globals.isXNumeric&&e.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,e.globals.isBarHorizontal&&(i.rotateXLabels=!1,i.translateXAxisY=parseInt(e.config.xaxis.labels.style.fontSize,10)/1.5*-1),i.translateXAxisY=i.translateXAxisY+e.config.xaxis.labels.offsetY,i.translateXAxisX=i.translateXAxisX+e.config.xaxis.labels.offsetX;var l=this.yAxisWidth,h=this.xAxisHeight;i.xAxisLabelsHeight=this.xAxisHeight-o.height,i.xAxisGroupLabelsHeight=i.xAxisLabelsHeight-r.height,i.xAxisLabelsWidth=this.xAxisWidth,i.xAxisHeight=this.xAxisHeight;var c=10;("radar"===e.config.chart.type||this.isSparkline)&&(l=0,h=0),this.isSparkline&&(this.lgRect={height:0,width:0}),(this.isSparkline||"treemap"===e.config.chart.type)&&(l=0,h=0,c=0),this.isSparkline||"treemap"===e.config.chart.type||this.dimXAxis.additionalPaddingXLabels(r);var d=function(){i.translateX=l+t.datalabelsCoords.width,i.gridHeight=i.svgHeight-t.lgRect.height-h-(t.isSparkline||"treemap"===e.config.chart.type?0:e.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-l-2*t.datalabelsCoords.width};switch("top"===e.config.xaxis.position&&(c=i.xAxisHeight-e.config.xaxis.axisTicks.height-5),e.config.legend.position){case"bottom":i.translateY=c,d();break;case"top":i.translateY=this.lgRect.height+c,d();break;case"left":i.translateY=c,i.translateX=this.lgRect.width+l+this.datalabelsCoords.width,i.gridHeight=i.svgHeight-h-12,i.gridWidth=i.svgWidth-this.lgRect.width-l-2*this.datalabelsCoords.width;break;case"right":i.translateY=c,i.translateX=l+this.datalabelsCoords.width,i.gridHeight=i.svgHeight-h-12,i.gridWidth=i.svgWidth-this.lgRect.width-l-2*this.datalabelsCoords.width-5;break;default:throw new Error("Legend position not supported")}this.dimGrid.setGridXPosForDualYAxis(s,a),new ia(this.ctx).setYAxisXPosition(a,s)}},{key:"setDimensionsForNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=t.config,a=0;t.config.legend.show&&!t.config.legend.floating&&(a=20);var s="pie"===i.chart.type||"polarArea"===i.chart.type||"donut"===i.chart.type?"pie":"radialBar",r=i.plotOptions[s].offsetY,n=i.plotOptions[s].offsetX;if(!i.legend.show||i.legend.floating){e.gridHeight=e.svgHeight;var o=e.dom.elWrap.getBoundingClientRect().width;return e.gridWidth=Math.min(o,e.gridHeight),e.translateY=r,void(e.translateX=n+(e.svgWidth-e.gridWidth)/2)}switch(i.legend.position){case"bottom":e.gridHeight=e.svgHeight-this.lgRect.height,e.gridWidth=e.svgWidth,e.translateY=r-10,e.translateX=n+(e.svgWidth-e.gridWidth)/2;break;case"top":e.gridHeight=e.svgHeight-this.lgRect.height,e.gridWidth=e.svgWidth,e.translateY=this.lgRect.height+r+10,e.translateX=n+(e.svgWidth-e.gridWidth)/2;break;case"left":e.gridWidth=e.svgWidth-this.lgRect.width-a,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=n+this.lgRect.width+a;break;case"right":e.gridWidth=e.svgWidth-this.lgRect.width-a-5,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=n+10;break;default:throw new Error("Legend position not supported")}}},{key:"conditionalChecksForAxisCoords",value:function(t,e,i){var a=this.w,s=a.globals.hasXaxisGroups?2:1,r=i.height+t.height+e.height,n=a.globals.isMultiLineX?1.2:a.globals.LINE_HEIGHT_RATIO,o=a.globals.rotateXLabels?22:10,l=a.globals.rotateXLabels&&"bottom"===a.config.legend.position?10:0;this.xAxisHeight=r*n+s*o+l,this.xAxisWidth=t.width,this.xAxisHeight-e.height>a.config.xaxis.labels.maxHeight&&(this.xAxisHeight=a.config.xaxis.labels.maxHeight),a.config.xaxis.labels.minHeight&&this.xAxisHeight<a.config.xaxis.labels.minHeight&&(this.xAxisHeight=a.config.xaxis.labels.minHeight),a.config.xaxis.floating&&(this.xAxisHeight=0);var h=0,c=0;a.config.yaxis.forEach((function(t){h+=t.labels.minWidth,c+=t.labels.maxWidth})),this.yAxisWidth<h&&(this.yAxisWidth=h),this.yAxisWidth>c&&(this.yAxisWidth=c)}}]),t}(),fa=function(){function t(e){i(this,t),this.w=e.w,this.lgCtx=e}return s(t,[{key:"getLegendStyles",value:function(){var t,e,i,a=document.createElement("style");a.setAttribute("type","text/css");var s=(null===(t=this.lgCtx.ctx)||void 0===t||null===(e=t.opts)||void 0===e||null===(i=e.chart)||void 0===i?void 0:i.nonce)||this.w.config.chart.nonce;s&&a.setAttribute("nonce",s);var r=document.createTextNode("\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    ");return a.appendChild(r),a}},{key:"getLegendDimensions",value:function(){var t=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),e=t.width;return{clwh:t.height,clww:e}}},{key:"appendToForeignObject",value:function(){this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles())}},{key:"toggleDataSeries",value:function(t,e){var i=this,a=this.w;if(a.globals.axisCharts||"radialBar"===a.config.chart.type){a.globals.resized=!0;var s=null,r=null;if(a.globals.risingSeries=[],a.globals.axisCharts?(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t,"']")),r=parseInt(s.getAttribute("data:realIndex"),10)):(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t+1,"']")),r=parseInt(s.getAttribute("rel"),10)-1),e)[{cs:a.globals.collapsedSeries,csi:a.globals.collapsedSeriesIndices},{cs:a.globals.ancillaryCollapsedSeries,csi:a.globals.ancillaryCollapsedSeriesIndices}].forEach((function(t){i.riseCollapsedSeries(t.cs,t.csi,r)}));else this.hideSeries({seriesEl:s,realIndex:r})}else{var n=a.globals.dom.Paper.findOne(" .apexcharts-series[rel='".concat(t+1,"'] path")),o=a.config.chart.type;if("pie"===o||"polarArea"===o||"donut"===o){var l=a.config.plotOptions.pie.donut.labels;new Mi(this.lgCtx.ctx).pathMouseDown(n,null),this.lgCtx.ctx.pie.printDataLabelsInner(n.node,l)}n.fire("click")}}},{key:"getSeriesAfterCollapsing",value:function(t){var e=t.realIndex,i=this.w,a=i.globals,s=v.clone(i.config.series);if(a.axisCharts){var r=i.config.yaxis[a.seriesYAxisReverseMap[e]],n={index:e,data:s[e].data.slice(),type:s[e].type||i.config.chart.type};if(r&&r.show&&r.showAlways)a.ancillaryCollapsedSeriesIndices.indexOf(e)<0&&(a.ancillaryCollapsedSeries.push(n),a.ancillaryCollapsedSeriesIndices.push(e));else if(a.collapsedSeriesIndices.indexOf(e)<0){a.collapsedSeries.push(n),a.collapsedSeriesIndices.push(e);var o=a.risingSeries.indexOf(e);a.risingSeries.splice(o,1)}}else a.collapsedSeries.push({index:e,data:s[e]}),a.collapsedSeriesIndices.push(e);return a.allSeriesCollapsed=a.collapsedSeries.length+a.ancillaryCollapsedSeries.length===i.config.series.length,this._getSeriesBasedOnCollapsedState(s)}},{key:"hideSeries",value:function(t){for(var e=t.seriesEl,i=t.realIndex,a=this.w,s=this.getSeriesAfterCollapsing({realIndex:i}),r=e.childNodes,n=0;n<r.length;n++)r[n].classList.contains("apexcharts-series-markers-wrap")&&(r[n].classList.contains("apexcharts-hide")?r[n].classList.remove("apexcharts-hide"):r[n].classList.add("apexcharts-hide"));this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}},{key:"riseCollapsedSeries",value:function(t,e,i){var a=this.w,s=v.clone(a.config.series);if(t.length>0){for(var r=0;r<t.length;r++)t[r].index===i&&(a.globals.axisCharts?s[i].data=t[r].data.slice():s[i]=t[r].data,"number"!=typeof s[i]&&(s[i].hidden=!1),t.splice(r,1),e.splice(r,1),a.globals.risingSeries.push(i));s=this._getSeriesBasedOnCollapsedState(s),this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}}},{key:"_getSeriesBasedOnCollapsedState",value:function(t){var e=this.w,i=0;return e.globals.axisCharts?t.forEach((function(a,s){e.globals.collapsedSeriesIndices.indexOf(s)<0&&e.globals.ancillaryCollapsedSeriesIndices.indexOf(s)<0||(t[s].data=[],i++)})):t.forEach((function(a,s){!e.globals.collapsedSeriesIndices.indexOf(s)<0&&(t[s]=0,i++)})),e.globals.allSeriesCollapsed=i===t.length,t}}]),t}(),xa=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this),this.isBarsDistributed="bar"===this.w.config.chart.type&&this.w.config.plotOptions.bar.distributed&&1===this.w.config.series.length,this.legendHelpers=new fa(this)}return s(t,[{key:"init",value:function(){var t=this.w,e=t.globals,i=t.config,a=i.legend.showForSingleSeries&&1===e.series.length||this.isBarsDistributed||e.series.length>1;if(this.legendHelpers.appendToForeignObject(),(a||!e.axisCharts)&&i.legend.show){for(;e.dom.elLegendWrap.firstChild;)e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);this.drawLegends(),"bottom"===i.legend.position||"top"===i.legend.position?this.legendAlignHorizontal():"right"!==i.legend.position&&"left"!==i.legend.position||this.legendAlignVertical()}}},{key:"createLegendMarker",value:function(t){var e=t.i,i=t.fillcolor,a=this.w,s=document.createElement("span");s.classList.add("apexcharts-legend-marker");var r=a.config.legend.markers.shape||a.config.markers.shape,n=r;Array.isArray(r)&&(n=r[e]);var o=Array.isArray(a.config.legend.markers.size)?parseFloat(a.config.legend.markers.size[e]):parseFloat(a.config.legend.markers.size),l=Array.isArray(a.config.legend.markers.offsetX)?parseFloat(a.config.legend.markers.offsetX[e]):parseFloat(a.config.legend.markers.offsetX),h=Array.isArray(a.config.legend.markers.offsetY)?parseFloat(a.config.legend.markers.offsetY[e]):parseFloat(a.config.legend.markers.offsetY),c=Array.isArray(a.config.legend.markers.strokeWidth)?parseFloat(a.config.legend.markers.strokeWidth[e]):parseFloat(a.config.legend.markers.strokeWidth),d=s.style;if(d.height=2*(o+c)+"px",d.width=2*(o+c)+"px",d.left=l+"px",d.top=h+"px",a.config.legend.markers.customHTML)d.background="transparent",d.color=i[e],Array.isArray(a.config.legend.markers.customHTML)?a.config.legend.markers.customHTML[e]&&(s.innerHTML=a.config.legend.markers.customHTML[e]()):s.innerHTML=a.config.legend.markers.customHTML();else{var g=new Vi(this.ctx).getMarkerConfig({cssClass:"apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(n),seriesIndex:e,strokeWidth:c,size:o}),p=window.SVG().addTo(s).size("100%","100%"),f=new Mi(this.ctx).drawMarker(0,0,u(u({},g),{},{pointFillColor:Array.isArray(i)?i[e]:g.pointFillColor,shape:n}));a.globals.dom.Paper.find(".apexcharts-legend-marker.apexcharts-marker").forEach((function(t){t.node.classList.contains("apexcharts-marker-triangle")?t.node.style.transform="translate(50%, 45%)":t.node.style.transform="translate(50%, 50%)"})),p.add(f)}return s}},{key:"drawLegends",value:function(){var t=this,e=this.w,i=e.config.legend.fontFamily,a=e.globals.seriesNames,s=e.config.legend.markers.fillColors?e.config.legend.markers.fillColors.slice():e.globals.colors.slice();if("heatmap"===e.config.chart.type){var r=e.config.plotOptions.heatmap.colorScale.ranges;a=r.map((function(t){return t.name?t.name:t.from+" - "+t.to})),s=r.map((function(t){return t.color}))}else this.isBarsDistributed&&(a=e.globals.labels.slice());e.config.legend.customLegendItems.length&&(a=e.config.legend.customLegendItems);for(var n=e.globals.legendFormatter,o=e.config.legend.inverseOrder,l=o?a.length-1:0;o?l>=0:l<=a.length-1;o?l--:l++){var h,c=n(a[l],{seriesIndex:l,w:e}),d=!1,u=!1;if(e.globals.collapsedSeries.length>0)for(var g=0;g<e.globals.collapsedSeries.length;g++)e.globals.collapsedSeries[g].index===l&&(d=!0);if(e.globals.ancillaryCollapsedSeriesIndices.length>0)for(var p=0;p<e.globals.ancillaryCollapsedSeriesIndices.length;p++)e.globals.ancillaryCollapsedSeriesIndices[p]===l&&(u=!0);var f=this.createLegendMarker({i:l,fillcolor:s});Mi.setAttrs(f,{rel:l+1,"data:collapsed":d||u}),(d||u)&&f.classList.add("apexcharts-inactive-legend");var x=document.createElement("div"),b=document.createElement("span");b.classList.add("apexcharts-legend-text"),b.innerHTML=Array.isArray(c)?c.join(" "):c;var m=e.config.legend.labels.useSeriesColors?e.globals.colors[l]:Array.isArray(e.config.legend.labels.colors)?null===(h=e.config.legend.labels.colors)||void 0===h?void 0:h[l]:e.config.legend.labels.colors;m||(m=e.config.chart.foreColor),b.style.color=m,b.style.fontSize=parseFloat(e.config.legend.fontSize)+"px",b.style.fontWeight=e.config.legend.fontWeight,b.style.fontFamily=i||e.config.chart.fontFamily,Mi.setAttrs(b,{rel:l+1,i:l,"data:default-text":encodeURIComponent(c),"data:collapsed":d||u}),x.appendChild(f),x.appendChild(b);var y=new Pi(this.ctx);if(!e.config.legend.showForZeroSeries)0===y.getSeriesTotalByIndex(l)&&y.seriesHaveSameValues(l)&&!y.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&x.classList.add("apexcharts-hidden-zero-series");e.config.legend.showForNullSeries||y.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&x.classList.add("apexcharts-hidden-null-series"),e.globals.dom.elLegendWrap.appendChild(x),e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)),e.globals.dom.elLegendWrap.classList.add("apx-legend-position-"+e.config.legend.position),x.classList.add("apexcharts-legend-series"),x.style.margin="".concat(e.config.legend.itemMargin.vertical,"px ").concat(e.config.legend.itemMargin.horizontal,"px"),e.globals.dom.elLegendWrap.style.width=e.config.legend.width?e.config.legend.width+"px":"",e.globals.dom.elLegendWrap.style.height=e.config.legend.height?e.config.legend.height+"px":"",Mi.setAttrs(x,{rel:l+1,seriesName:v.escapeString(a[l]),"data:collapsed":d||u}),(d||u)&&x.classList.add("apexcharts-inactive-legend"),e.config.legend.onItemClick.toggleDataSeries||x.classList.add("apexcharts-no-click")}e.globals.dom.elWrap.addEventListener("click",t.onLegendClick,!0),e.config.legend.onItemHover.highlightDataSeries&&0===e.config.legend.customLegendItems.length&&(e.globals.dom.elWrap.addEventListener("mousemove",t.onLegendHovered,!0),e.globals.dom.elWrap.addEventListener("mouseout",t.onLegendHovered,!0))}},{key:"setLegendWrapXY",value:function(t,e){var i=this.w,a=i.globals.dom.elLegendWrap,s=a.clientHeight,r=0,n=0;if("bottom"===i.config.legend.position)n=i.globals.svgHeight-Math.min(s,i.globals.svgHeight/2)-5;else if("top"===i.config.legend.position){var o=new pa(this.ctx),l=o.dimHelpers.getTitleSubtitleCoords("title").height,h=o.dimHelpers.getTitleSubtitleCoords("subtitle").height;n=(l>0?l-10:0)+(h>0?h-10:0)}a.style.position="absolute",r=r+t+i.config.legend.offsetX,n=n+e+i.config.legend.offsetY,a.style.left=r+"px",a.style.top=n+"px","right"===i.config.legend.position&&(a.style.left="auto",a.style.right=25+i.config.legend.offsetX+"px");["width","height"].forEach((function(t){a.style[t]&&(a.style[t]=parseInt(i.config.legend[t],10)+"px")}))}},{key:"legendAlignHorizontal",value:function(){var t=this.w;t.globals.dom.elLegendWrap.style.right=0;var e=new pa(this.ctx),i=e.dimHelpers.getTitleSubtitleCoords("title"),a=e.dimHelpers.getTitleSubtitleCoords("subtitle"),s=0;"top"===t.config.legend.position&&(s=i.height+a.height+t.config.title.margin+t.config.subtitle.margin-10),this.setLegendWrapXY(20,s)}},{key:"legendAlignVertical",value:function(){var t=this.w,e=this.legendHelpers.getLegendDimensions(),i=0;"left"===t.config.legend.position&&(i=20),"right"===t.config.legend.position&&(i=t.globals.svgWidth-e.clww-10),this.setLegendWrapXY(i,20)}},{key:"onLegendHovered",value:function(t){var e=this.w,i=t.target.classList.contains("apexcharts-legend-series")||t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker");if("heatmap"===e.config.chart.type||this.isBarsDistributed){if(i){var a=parseInt(t.target.getAttribute("rel"),10)-1;this.ctx.events.fireEvent("legendHover",[this.ctx,a,this.w]),new Zi(this.ctx).highlightRangeInSeries(t,t.target)}}else!t.target.classList.contains("apexcharts-inactive-legend")&&i&&new Zi(this.ctx).toggleSeriesOnHover(t,t.target)}},{key:"onLegendClick",value:function(t){var e=this.w;if(!e.config.legend.customLegendItems.length&&(t.target.classList.contains("apexcharts-legend-series")||t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker"))){var i=parseInt(t.target.getAttribute("rel"),10)-1,a="true"===t.target.getAttribute("data:collapsed"),s=this.w.config.chart.events.legendClick;"function"==typeof s&&s(this.ctx,i,this.w),this.ctx.events.fireEvent("legendClick",[this.ctx,i,this.w]);var r=this.w.config.legend.markers.onClick;"function"==typeof r&&t.target.classList.contains("apexcharts-legend-marker")&&(r(this.ctx,i,this.w),this.ctx.events.fireEvent("legendMarkerClick",[this.ctx,i,this.w])),"treemap"!==e.config.chart.type&&"heatmap"!==e.config.chart.type&&!this.isBarsDistributed&&e.config.legend.onItemClick.toggleDataSeries&&this.legendHelpers.toggleDataSeries(i,a)}}}]),t}(),ba=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w;var a=this.w;this.ev=this.w.config.chart.events,this.selectedClass="apexcharts-selected",this.localeValues=this.w.globals.locale.toolbar,this.minX=a.globals.minX,this.maxX=a.globals.maxX}return s(t,[{key:"createToolbar",value:function(){var t=this,e=this.w,i=function(){return document.createElement("div")},a=i();if(a.setAttribute("class","apexcharts-toolbar"),a.style.top=e.config.chart.toolbar.offsetY+"px",a.style.right=3-e.config.chart.toolbar.offsetX+"px",e.globals.dom.elWrap.appendChild(a),this.elZoom=i(),this.elZoomIn=i(),this.elZoomOut=i(),this.elPan=i(),this.elSelection=i(),this.elZoomReset=i(),this.elMenuIcon=i(),this.elMenu=i(),this.elCustomIcons=[],this.t=e.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var s=0;s<this.t.customIcons.length;s++)this.elCustomIcons.push(i());var r=[],n=function(i,a,s){var n=i.toLowerCase();t.t[n]&&e.config.chart.zoom.enabled&&r.push({el:a,icon:"string"==typeof t.t[n]?t.t[n]:s,title:t.localeValues[i],class:"apexcharts-".concat(n,"-icon")})};n("zoomIn",this.elZoomIn,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'),n("zoomOut",this.elZoomOut,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');var o=function(i){t.t[i]&&e.config.chart[i].enabled&&r.push({el:"zoom"===i?t.elZoom:t.elSelection,icon:"string"==typeof t.t[i]?t.t[i]:"zoom"===i?'<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>':'<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',title:t.localeValues["zoom"===i?"selectionZoom":"selection"],class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-".concat(i,"-icon")})};o("zoom"),o("selection"),this.t.pan&&e.config.chart.zoom.enabled&&r.push({el:this.elPan,icon:"string"==typeof this.t.pan?this.t.pan:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',title:this.localeValues.pan,class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-pan-icon"}),n("reset",this.elZoomReset,'<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'),this.t.download&&r.push({el:this.elMenuIcon,icon:"string"==typeof this.t.download?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var l=0;l<this.elCustomIcons.length;l++)r.push({el:this.elCustomIcons[l],icon:this.t.customIcons[l].icon,title:this.t.customIcons[l].title,index:this.t.customIcons[l].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[l].class});r.forEach((function(t,e){t.index&&v.moveIndexInArray(r,e,t.index)}));for(var h=0;h<r.length;h++)Mi.setAttrs(r[h].el,{class:r[h].class,title:r[h].title}),r[h].el.innerHTML=r[h].icon,a.appendChild(r[h].el);this._createHamburgerMenu(a),e.globals.zoomEnabled?this.elZoom.classList.add(this.selectedClass):e.globals.panEnabled?this.elPan.classList.add(this.selectedClass):e.globals.selectionEnabled&&this.elSelection.classList.add(this.selectedClass),this.addToolbarEventListeners()}},{key:"_createHamburgerMenu",value:function(t){this.elMenuItems=[],t.appendChild(this.elMenu),Mi.setAttrs(this.elMenu,{class:"apexcharts-menu"});for(var e=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG},{name:"exportCSV",title:this.localeValues.exportToCSV}],i=0;i<e.length;i++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[i].innerHTML=e[i].title,Mi.setAttrs(this.elMenuItems[i],{class:"apexcharts-menu-item ".concat(e[i].name),title:e[i].title}),this.elMenu.appendChild(this.elMenuItems[i])}},{key:"addToolbarEventListeners",value:function(){var t=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleZoomSelection.bind(this,"selection")),this.elZoom.addEventListener("click",this.toggleZoomSelection.bind(this,"zoom")),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach((function(e){e.classList.contains("exportSVG")?e.addEventListener("click",t.handleDownload.bind(t,"svg")):e.classList.contains("exportPNG")?e.addEventListener("click",t.handleDownload.bind(t,"png")):e.classList.contains("exportCSV")&&e.addEventListener("click",t.handleDownload.bind(t,"csv"))}));for(var e=0;e<this.t.customIcons.length;e++)this.elCustomIcons[e].addEventListener("click",this.t.customIcons[e].click.bind(this,this.ctx,this.ctx.w))}},{key:"toggleZoomSelection",value:function(t){this.ctx.getSyncedCharts().forEach((function(e){e.ctx.toolbar.toggleOtherControls();var i="selection"===t?e.ctx.toolbar.elSelection:e.ctx.toolbar.elZoom,a="selection"===t?"selectionEnabled":"zoomEnabled";e.w.globals[a]=!e.w.globals[a],i.classList.contains(e.ctx.toolbar.selectedClass)?i.classList.remove(e.ctx.toolbar.selectedClass):i.classList.add(e.ctx.toolbar.selectedClass)}))}},{key:"getToolbarIconsReference",value:function(){var t=this.w;this.elZoom||(this.elZoom=t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZoomPanFromToolbar",value:function(t){this.toggleOtherControls(),"pan"===t?this.w.globals.panEnabled=!0:this.w.globals.zoomEnabled=!0;var e="pan"===t?this.elPan:this.elZoom,i="pan"===t?this.elZoom:this.elPan;e&&e.classList.add(this.selectedClass),i&&i.classList.remove(this.selectedClass)}},{key:"togglePanning",value:function(){this.ctx.getSyncedCharts().forEach((function(t){t.ctx.toolbar.toggleOtherControls(),t.w.globals.panEnabled=!t.w.globals.panEnabled,t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass)?t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass):t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass)}))}},{key:"toggleOtherControls",value:function(){var t=this,e=this.w;e.globals.panEnabled=!1,e.globals.zoomEnabled=!1,e.globals.selectionEnabled=!1,this.getToolbarIconsReference(),[this.elPan,this.elSelection,this.elZoom].forEach((function(e){e&&e.classList.remove(t.selectedClass)}))}},{key:"handleZoomIn",value:function(){var t=this.w;t.globals.isRangeBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY);var e=(this.minX+this.maxX)/2,i=(this.minX+e)/2,a=(this.maxX+e)/2,s=this._getNewMinXMaxX(i,a);t.globals.disableZoomIn||this.zoomUpdateOptions(s.minX,s.maxX)}},{key:"handleZoomOut",value:function(){var t=this.w;if(t.globals.isRangeBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY),!("datetime"===t.config.xaxis.type&&new Date(this.minX).getUTCFullYear()<1e3)){var e=(this.minX+this.maxX)/2,i=this.minX-(e-this.minX),a=this.maxX-(e-this.maxX),s=this._getNewMinXMaxX(i,a);t.globals.disableZoomOut||this.zoomUpdateOptions(s.minX,s.maxX)}}},{key:"_getNewMinXMaxX",value:function(t,e){var i=this.w.config.xaxis.convertedCatToNumeric;return{minX:i?Math.floor(t):t,maxX:i?Math.floor(e):e}}},{key:"zoomUpdateOptions",value:function(t,e){var i=this.w;if(void 0!==t||void 0!==e){if(!(i.config.xaxis.convertedCatToNumeric&&(t<1&&(t=1,e=i.globals.dataPoints),e-t<2))){var a={min:t,max:e},s=this.getBeforeZoomRange(a);s&&(a=s.xaxis);var r={xaxis:a},n=v.clone(i.globals.initialConfig.yaxis);i.config.chart.group||(r.yaxis=n),this.w.globals.zoomed=!0,this.ctx.updateHelpers._updateOptions(r,!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(a,n)}}else this.handleZoomReset()}},{key:"zoomCallback",value:function(t,e){"function"==typeof this.ev.zoomed&&this.ev.zoomed(this.ctx,{xaxis:t,yaxis:e})}},{key:"getBeforeZoomRange",value:function(t,e){var i=null;return"function"==typeof this.ev.beforeZoom&&(i=this.ev.beforeZoom(this,{xaxis:t,yaxis:e})),i}},{key:"toggleMenu",value:function(){var t=this;window.setTimeout((function(){t.elMenu.classList.contains("apexcharts-menu-open")?t.elMenu.classList.remove("apexcharts-menu-open"):t.elMenu.classList.add("apexcharts-menu-open")}),0)}},{key:"handleDownload",value:function(t){var e=this.w,i=new Ji(this.ctx);switch(t){case"svg":i.exportToSVG(this.ctx);break;case"png":i.exportToPng(this.ctx);break;case"csv":i.exportToCSV({series:e.config.series,columnDelimiter:e.config.chart.toolbar.export.csv.columnDelimiter})}}},{key:"handleZoomReset",value:function(t){this.ctx.getSyncedCharts().forEach((function(t){var e=t.w;if(e.globals.lastXAxis.min=e.globals.initialConfig.xaxis.min,e.globals.lastXAxis.max=e.globals.initialConfig.xaxis.max,t.updateHelpers.revertDefaultAxisMinMax(),"function"==typeof e.config.chart.events.beforeResetZoom){var i=e.config.chart.events.beforeResetZoom(t,e);i&&t.updateHelpers.revertDefaultAxisMinMax(i)}"function"==typeof e.config.chart.events.zoomed&&t.ctx.toolbar.zoomCallback({min:e.config.xaxis.min,max:e.config.xaxis.max}),e.globals.zoomed=!1;var a=t.ctx.series.emptyCollapsedSeries(v.clone(e.globals.initialSeries));t.updateHelpers._updateSeries(a,e.config.chart.animations.dynamicAnimation.enabled)}))}},{key:"destroy",value:function(){this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),t}(),ma=function(t){h(a,ba);var e=n(a);function a(t){var s;return i(this,a),(s=e.call(this,t)).ctx=t,s.w=t.w,s.dragged=!1,s.graphics=new Mi(s.ctx),s.eventList=["mousedown","mouseleave","mousemove","touchstart","touchmove","mouseup","touchend","wheel"],s.clientX=0,s.clientY=0,s.startX=0,s.endX=0,s.dragX=0,s.startY=0,s.endY=0,s.dragY=0,s.moveDirection="none",s.debounceTimer=null,s.debounceDelay=100,s.wheelDelay=400,s}return s(a,[{key:"init",value:function(t){var e=this,i=t.xyRatios,a=this.w,s=this;this.xyRatios=i,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=a.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.constraints=new kt(0,0,a.globals.gridWidth,a.globals.gridHeight),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),a.globals.dom.Paper.add(this.zoomRect),a.globals.dom.Paper.add(this.selectionRect),"x"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:a.globals.gridWidth,maxY:a.globals.gridHeight}).on("dragmove.namespace",this.selectionDragging.bind(this,"dragging")):"y"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:a.globals.gridWidth}).on("dragmove.namespace",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove.namespace",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=a.globals.dom.baseEl.querySelector("".concat(a.globals.chartClass," .apexcharts-svg")),this.hoverArea.classList.add("apexcharts-zoomable"),this.eventList.forEach((function(t){e.hoverArea.addEventListener(t,s.svgMouseEvents.bind(s,i),{capture:!1,passive:!0})})),a.config.chart.zoom.enabled&&a.config.chart.zoom.allowMouseWheelZoom&&this.hoverArea.addEventListener("wheel",s.mouseWheelEvent.bind(s),{capture:!1,passive:!1})}},{key:"destroy",value:function(){this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(t,e){var i=this.w,a=this,s=this.ctx.toolbar,r=i.globals.zoomEnabled?i.config.chart.zoom.type:i.config.chart.selection.type,n=i.config.chart.toolbar.autoSelected;if(e.shiftKey?(this.shiftWasPressed=!0,s.enableZoomPanFromToolbar("pan"===n?"zoom":"pan")):this.shiftWasPressed&&(s.enableZoomPanFromToolbar(n),this.shiftWasPressed=!1),e.target){var o,l=e.target.classList;if(e.target.parentNode&&null!==e.target.parentNode&&(o=e.target.parentNode.classList),!(l.contains("apexcharts-selection-rect")||l.contains("apexcharts-legend-marker")||l.contains("apexcharts-legend-text")||o&&o.contains("apexcharts-toolbar"))){if(a.clientX="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientX:"touchend"===e.type?e.changedTouches[0].clientX:e.clientX,a.clientY="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientY:"touchend"===e.type?e.changedTouches[0].clientY:e.clientY,"mousedown"===e.type&&1===e.which||"touchstart"===e.type){var h=a.gridRect.getBoundingClientRect();a.startX=a.clientX-h.left,a.startY=a.clientY-h.top,a.dragged=!1,a.w.globals.mousedown=!0}if(("mousemove"===e.type&&1===e.which||"touchmove"===e.type)&&(a.dragged=!0,i.globals.panEnabled?(i.globals.selection=null,a.w.globals.mousedown&&a.panDragging({context:a,zoomtype:r,xyRatios:t})):(a.w.globals.mousedown&&i.globals.zoomEnabled||a.w.globals.mousedown&&i.globals.selectionEnabled)&&(a.selection=a.selectionDrawing({context:a,zoomtype:r}))),"mouseup"===e.type||"touchend"===e.type||"mouseleave"===e.type){var c,d=null===(c=a.gridRect)||void 0===c?void 0:c.getBoundingClientRect();d&&a.w.globals.mousedown&&(a.endX=a.clientX-d.left,a.endY=a.clientY-d.top,a.dragX=Math.abs(a.endX-a.startX),a.dragY=Math.abs(a.endY-a.startY),(i.globals.zoomEnabled||i.globals.selectionEnabled)&&a.selectionDrawn({context:a,zoomtype:r}),i.globals.panEnabled&&i.config.xaxis.convertedCatToNumeric&&a.delayedPanScrolled()),i.globals.zoomEnabled&&a.hideSelectionRect(this.selectionRect),a.dragged=!1,a.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}}},{key:"mouseWheelEvent",value:function(t){var e=this,i=this.w;t.preventDefault();var a=Date.now();a-i.globals.lastWheelExecution>this.wheelDelay&&(this.executeMouseWheelZoom(t),i.globals.lastWheelExecution=a),this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout((function(){a-i.globals.lastWheelExecution>e.wheelDelay&&(e.executeMouseWheelZoom(t),i.globals.lastWheelExecution=a)}),this.debounceDelay)}},{key:"executeMouseWheelZoom",value:function(t){var e,i=this.w;this.minX=i.globals.isRangeBar?i.globals.minY:i.globals.minX,this.maxX=i.globals.isRangeBar?i.globals.maxY:i.globals.maxX;var a=null===(e=this.gridRect)||void 0===e?void 0:e.getBoundingClientRect();if(a){var s,r,n,o=(t.clientX-a.left)/a.width,l=this.minX,h=this.maxX,c=h-l;if(t.deltaY<0){var d=l+o*c;r=d-(s=.5*c)/2,n=d+s/2}else r=l-(s=1.5*c)/2,n=h+s/2;if(!i.globals.isRangeBar){r=Math.max(r,i.globals.initialMinX),n=Math.min(n,i.globals.initialMaxX);var u=.01*(i.globals.initialMaxX-i.globals.initialMinX);if(n-r<u){var g=(r+n)/2;r=g-u/2,n=g+u/2}}var p=this._getNewMinXMaxX(r,n);isNaN(p.minX)||isNaN(p.maxX)||this.zoomUpdateOptions(p.minX,p.maxX)}}},{key:"makeSelectionRectDraggable",value:function(){if(this.w,this.selectionRect){var t=this.selectionRect.node.getBoundingClientRect();t.width>0&&t.height>0&&(this.selectionRect.select(!1).resize(!1),this.selectionRect.select({createRot:function(){},updateRot:function(){},createHandle:function(t,e,i,a,s){return"l"===s||"r"===s?t.circle(8).css({"stroke-width":1,stroke:"#333",fill:"#fff"}):t.circle(0)},updateHandle:function(t,e){return t.center(e[0],e[1])}}).resize().on("resizing",this.selectionDragging.bind(this,"resizing")))}}},{key:"preselectedSelection",value:function(){var t=this.w,e=this.xyRatios;if(!t.globals.zoomEnabled)if(void 0!==t.globals.selection&&null!==t.globals.selection)this.drawSelectionRect(u(u({},t.globals.selection),{},{translateX:t.globals.translateX,translateY:t.globals.translateY}));else if(void 0!==t.config.chart.selection.xaxis.min&&void 0!==t.config.chart.selection.xaxis.max){var i=(t.config.chart.selection.xaxis.min-t.globals.minX)/e.xRatio,a=t.globals.gridWidth-(t.globals.maxX-t.config.chart.selection.xaxis.max)/e.xRatio-i;t.globals.isRangeBar&&(i=(t.config.chart.selection.xaxis.min-t.globals.yAxisScale[0].niceMin)/e.invertedYRatio,a=(t.config.chart.selection.xaxis.max-t.config.chart.selection.xaxis.min)/e.invertedYRatio);var s={x:i,y:0,width:a,height:t.globals.gridHeight,translateX:t.globals.translateX,translateY:t.globals.translateY,selectionEnabled:!0};this.drawSelectionRect(s),this.makeSelectionRectDraggable(),"function"==typeof t.config.chart.events.selection&&t.config.chart.events.selection(this.ctx,{xaxis:{min:t.config.chart.selection.xaxis.min,max:t.config.chart.selection.xaxis.max},yaxis:{}})}}},{key:"drawSelectionRect",value:function(t){var e=t.x,i=t.y,a=t.width,s=t.height,r=t.translateX,n=void 0===r?0:r,o=t.translateY,l=void 0===o?0:o,h=this.w,c=this.zoomRect,d=this.selectionRect;if(this.dragged||null!==h.globals.selection){var u={transform:"translate("+n+", "+l+")"};h.globals.zoomEnabled&&this.dragged&&(a<0&&(a=1),c.attr({x:e,y:i,width:a,height:s,fill:h.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":h.config.chart.zoom.zoomedArea.fill.opacity,stroke:h.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":h.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":h.config.chart.zoom.zoomedArea.stroke.opacity}),Mi.setAttrs(c.node,u)),h.globals.selectionEnabled&&(d.attr({x:e,y:i,width:a>0?a:0,height:s>0?s:0,fill:h.config.chart.selection.fill.color,"fill-opacity":h.config.chart.selection.fill.opacity,stroke:h.config.chart.selection.stroke.color,"stroke-width":h.config.chart.selection.stroke.width,"stroke-dasharray":h.config.chart.selection.stroke.dashArray,"stroke-opacity":h.config.chart.selection.stroke.opacity}),Mi.setAttrs(d.node,u))}}},{key:"hideSelectionRect",value:function(t){t&&t.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.gridRect.getBoundingClientRect(),n=s.startX-1,o=s.startY,l=!1,h=!1,c=s.clientX-r.left-n,d=s.clientY-r.top-o,g={translateX:a.globals.translateX,translateY:a.globals.translateY};return Math.abs(c+n)>a.globals.gridWidth?c=a.globals.gridWidth-n:s.clientX-r.left<0&&(c=n),n>s.clientX-r.left&&(l=!0,c=Math.abs(c)),o>s.clientY-r.top&&(h=!0,d=Math.abs(d)),g=u(u({},g="x"===i?{x:l?n-c:n,y:0,width:c,height:a.globals.gridHeight}:"y"===i?{x:0,y:h?o-d:o,width:a.globals.gridWidth,height:d}:{x:l?n-c:n,y:h?o-d:o,width:c,height:d}),{},{translateX:a.globals.translateX,translateY:a.globals.translateY}),s.drawSelectionRect(g),s.selectionDragging("resizing"),g}},{key:"selectionDragging",value:function(t,e){var i=this,a=this.w;if(e){e.preventDefault();var s=e.detail,r=s.handler,n=s.box,o=n.x,l=n.y;o<this.constraints.x&&(o=this.constraints.x),l<this.constraints.y&&(l=this.constraints.y),n.x2>this.constraints.x2&&(o=this.constraints.x2-n.w),n.y2>this.constraints.y2&&(l=this.constraints.y2-n.h),r.move(o,l);var h=this.xyRatios,c=this.selectionRect,d=0;"resizing"===t&&(d=30);var u=function(t){return parseFloat(c.node.getAttribute(t))},g={x:u("x"),y:u("y"),width:u("width"),height:u("height")};a.globals.selection=g,"function"==typeof a.config.chart.events.selection&&a.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout((function(){var t,e,s,r,n=i.gridRect.getBoundingClientRect(),o=c.node.getBoundingClientRect();a.globals.isRangeBar?(t=a.globals.yAxisScale[0].niceMin+(o.left-n.left)*h.invertedYRatio,e=a.globals.yAxisScale[0].niceMin+(o.right-n.left)*h.invertedYRatio,s=0,r=1):(t=a.globals.xAxisScale.niceMin+(o.left-n.left)*h.xRatio,e=a.globals.xAxisScale.niceMin+(o.right-n.left)*h.xRatio,s=a.globals.yAxisScale[0].niceMin+(n.bottom-o.bottom)*h.yRatio[0],r=a.globals.yAxisScale[0].niceMax-(o.top-n.top)*h.yRatio[0]);var l={xaxis:{min:t,max:e},yaxis:{min:s,max:r}};a.config.chart.events.selection(i.ctx,l),a.config.chart.brush.enabled&&void 0!==a.config.chart.events.brushScrolled&&a.config.chart.events.brushScrolled(i.ctx,l)}),d))}}},{key:"selectionDrawn",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.xyRatios,n=this.ctx.toolbar;if(s.startX>s.endX){var o=s.startX;s.startX=s.endX,s.endX=o}if(s.startY>s.endY){var l=s.startY;s.startY=s.endY,s.endY=l}var h=void 0,c=void 0;a.globals.isRangeBar?(h=a.globals.yAxisScale[0].niceMin+s.startX*r.invertedYRatio,c=a.globals.yAxisScale[0].niceMin+s.endX*r.invertedYRatio):(h=a.globals.xAxisScale.niceMin+s.startX*r.xRatio,c=a.globals.xAxisScale.niceMin+s.endX*r.xRatio);var d=[],u=[];if(a.config.yaxis.forEach((function(t,e){var i=a.globals.seriesYAxisMap[e][0];d.push(a.globals.yAxisScale[e].niceMax-r.yRatio[i]*s.startY),u.push(a.globals.yAxisScale[e].niceMax-r.yRatio[i]*s.endY)})),s.dragged&&(s.dragX>10||s.dragY>10)&&h!==c)if(a.globals.zoomEnabled){var g=v.clone(a.globals.initialConfig.yaxis),p=v.clone(a.globals.initialConfig.xaxis);if(a.globals.zoomed=!0,a.config.xaxis.convertedCatToNumeric&&(h=Math.floor(h),c=Math.floor(c),h<1&&(h=1,c=a.globals.dataPoints),c-h<2&&(c=h+1)),"xy"!==i&&"x"!==i||(p={min:h,max:c}),"xy"!==i&&"y"!==i||g.forEach((function(t,e){g[e].min=u[e],g[e].max=d[e]})),n){var f=n.getBeforeZoomRange(p,g);f&&(p=f.xaxis?f.xaxis:p,g=f.yaxis?f.yaxis:g)}var x={xaxis:p};a.config.chart.group||(x.yaxis=g),s.ctx.updateHelpers._updateOptions(x,!1,s.w.config.chart.animations.dynamicAnimation.enabled),"function"==typeof a.config.chart.events.zoomed&&n.zoomCallback(p,g)}else if(a.globals.selectionEnabled){var b,m=null;b={min:h,max:c},"xy"!==i&&"y"!==i||(m=v.clone(a.config.yaxis)).forEach((function(t,e){m[e].min=u[e],m[e].max=d[e]})),a.globals.selection=s.selection,"function"==typeof a.config.chart.events.selection&&a.config.chart.events.selection(s.ctx,{xaxis:b,yaxis:m})}}},{key:"panDragging",value:function(t){var e=t.context,i=this.w,a=e;if(void 0!==i.globals.lastClientPosition.x){var s=i.globals.lastClientPosition.x-a.clientX,r=i.globals.lastClientPosition.y-a.clientY;Math.abs(s)>Math.abs(r)&&s>0?this.moveDirection="left":Math.abs(s)>Math.abs(r)&&s<0?this.moveDirection="right":Math.abs(r)>Math.abs(s)&&r>0?this.moveDirection="up":Math.abs(r)>Math.abs(s)&&r<0&&(this.moveDirection="down")}i.globals.lastClientPosition={x:a.clientX,y:a.clientY};var n=i.globals.isRangeBar?i.globals.minY:i.globals.minX,o=i.globals.isRangeBar?i.globals.maxY:i.globals.maxX;i.config.xaxis.convertedCatToNumeric||a.panScrolled(n,o)}},{key:"delayedPanScrolled",value:function(){var t=this.w,e=t.globals.minX,i=t.globals.maxX,a=(t.globals.maxX-t.globals.minX)/2;"left"===this.moveDirection?(e=t.globals.minX+a,i=t.globals.maxX+a):"right"===this.moveDirection&&(e=t.globals.minX-a,i=t.globals.maxX-a),e=Math.floor(e),i=Math.floor(i),this.updateScrolledChart({xaxis:{min:e,max:i}},e,i)}},{key:"panScrolled",value:function(t,e){var i=this.w,a=this.xyRatios,s=v.clone(i.globals.initialConfig.yaxis),r=a.xRatio,n=i.globals.minX,o=i.globals.maxX;i.globals.isRangeBar&&(r=a.invertedYRatio,n=i.globals.minY,o=i.globals.maxY),"left"===this.moveDirection?(t=n+i.globals.gridWidth/15*r,e=o+i.globals.gridWidth/15*r):"right"===this.moveDirection&&(t=n-i.globals.gridWidth/15*r,e=o-i.globals.gridWidth/15*r),i.globals.isRangeBar||(t<i.globals.initialMinX||e>i.globals.initialMaxX)&&(t=n,e=o);var l={xaxis:{min:t,max:e}};i.config.chart.group||(l.yaxis=s),this.updateScrolledChart(l,t,e)}},{key:"updateScrolledChart",value:function(t,e,i){var a=this.w;this.ctx.updateHelpers._updateOptions(t,!1,!1),"function"==typeof a.config.chart.events.scrolled&&a.config.chart.events.scrolled(this.ctx,{xaxis:{min:e,max:i}})}}]),a}(),va=function(){function t(e){i(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx}return s(t,[{key:"getNearestValues",value:function(t){var e=t.hoverArea,i=t.elGrid,a=t.clientX,s=t.clientY,r=this.w,n=i.getBoundingClientRect(),o=n.width,l=n.height,h=o/(r.globals.dataPoints-1),c=l/r.globals.dataPoints,d=this.hasBars();!r.globals.comboCharts&&!d||r.config.xaxis.convertedCatToNumeric||(h=o/r.globals.dataPoints);var u=a-n.left-r.globals.barPadForNumericAxis,g=s-n.top;u<0||g<0||u>o||g>l?(e.classList.remove("hovering-zoom"),e.classList.remove("hovering-pan")):r.globals.zoomEnabled?(e.classList.remove("hovering-pan"),e.classList.add("hovering-zoom")):r.globals.panEnabled&&(e.classList.remove("hovering-zoom"),e.classList.add("hovering-pan"));var p=Math.round(u/h),f=Math.floor(g/c);d&&!r.config.xaxis.convertedCatToNumeric&&(p=Math.ceil(u/h),p-=1);var x=null,b=null,m=r.globals.seriesXvalues.map((function(t){return t.filter((function(t){return v.isNumber(t)}))})),y=r.globals.seriesYvalues.map((function(t){return t.filter((function(t){return v.isNumber(t)}))}));if(r.globals.isXNumeric){var w=this.ttCtx.getElGrid().getBoundingClientRect(),k=u*(w.width/o),A=g*(w.height/l);x=(b=this.closestInMultiArray(k,A,m,y)).index,p=b.j,null!==x&&(m=r.globals.seriesXvalues[x],p=(b=this.closestInArray(k,m)).index)}return r.globals.capturedSeriesIndex=null===x?-1:x,(!p||p<1)&&(p=0),r.globals.isBarHorizontal?r.globals.capturedDataPointIndex=f:r.globals.capturedDataPointIndex=p,{capturedSeries:x,j:r.globals.isBarHorizontal?f:p,hoverX:u,hoverY:g}}},{key:"closestInMultiArray",value:function(t,e,i,a){var s=this.w,r=0,n=null,o=-1;s.globals.series.length>1?r=this.getFirstActiveXArray(i):n=0;var l=i[r][0],h=Math.abs(t-l);if(i.forEach((function(e){e.forEach((function(e,i){var a=Math.abs(t-e);a<=h&&(h=a,o=i)}))})),-1!==o){var c=a[r][o],d=Math.abs(e-c);n=r,a.forEach((function(t,i){var a=Math.abs(e-t[o]);a<=d&&(d=a,n=i)}))}return{index:n,j:o}}},{key:"getFirstActiveXArray",value:function(t){for(var e=this.w,i=0,a=t.map((function(t,e){return t.length>0?e:-1})),s=0;s<a.length;s++)if(-1!==a[s]&&-1===e.globals.collapsedSeriesIndices.indexOf(s)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(s)){i=a[s];break}return i}},{key:"closestInArray",value:function(t,e){for(var i=e[0],a=null,s=Math.abs(t-i),r=0;r<e.length;r++){var n=Math.abs(t-e[r]);n<s&&(s=n,a=r)}return{index:a}}},{key:"isXoverlap",value:function(t){var e=[],i=this.w.globals.seriesX.filter((function(t){return void 0!==t[0]}));if(i.length>0)for(var a=0;a<i.length-1;a++)void 0!==i[a][t]&&void 0!==i[a+1][t]&&i[a][t]!==i[a+1][t]&&e.push("unEqual");return 0===e.length}},{key:"isInitialSeriesSameLen",value:function(){for(var t=!0,e=this.w.globals.initialSeries,i=0;i<e.length-1;i++)if(e[i].data.length!==e[i+1].data.length){t=!1;break}return t}},{key:"getBarsHeight",value:function(t){return f(t).reduce((function(t,e){return t+e.getBBox().height}),0)}},{key:"getElMarkers",value:function(t){return"number"==typeof t?this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-series-markers-wrap > *")):this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *")}},{key:"getAllMarkers",value:function(){var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");(t=f(t)).sort((function(t,e){var i=Number(t.getAttribute("data:realIndex")),a=Number(e.getAttribute("data:realIndex"));return a<i?1:a>i?-1:0}));var e=[];return t.forEach((function(t){e.push(t.querySelector(".apexcharts-marker"))})),e}},{key:"hasMarkers",value:function(t){return this.getElMarkers(t).length>0}},{key:"getPathFromPoint",value:function(t,e){var i=Number(t.getAttribute("cx")),a=Number(t.getAttribute("cy")),s=t.getAttribute("shape");return new Mi(this.ctx).getMarkerPath(i,a,s,e)}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"getHoverMarkerSize",value:function(t){var e=this.w,i=e.config.markers.hover.size;return void 0===i&&(i=e.globals.markers.size[t]+e.config.markers.hover.sizeOffset),i}},{key:"toggleAllTooltipSeriesGroups",value:function(t){var e=this.w,i=this.ttCtx;0===i.allTooltipSeriesGroups.length&&(i.allTooltipSeriesGroups=e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var a=i.allTooltipSeriesGroups,s=0;s<a.length;s++)"enable"===t?(a[s].classList.add("apexcharts-active"),a[s].style.display=e.config.tooltip.items.display):(a[s].classList.remove("apexcharts-active"),a[s].style.display="none")}}]),t}(),ya=function(){function t(e){i(this,t),this.w=e.w,this.ctx=e.ctx,this.ttCtx=e,this.tooltipUtil=new va(e)}return s(t,[{key:"drawSeriesTexts",value:function(t){var e=t.shared,i=void 0===e||e,a=t.ttItems,s=t.i,r=void 0===s?0:s,n=t.j,o=void 0===n?null:n,l=t.y1,h=t.y2,c=t.e,d=this.w;void 0!==d.config.tooltip.custom?this.handleCustomTooltip({i:r,j:o,y1:l,y2:h,w:d}):this.toggleActiveInactiveSeries(i,r);var u=this.getValuesToPrint({i:r,j:o});this.printLabels({i:r,j:o,values:u,ttItems:a,shared:i,e:c});var g=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=g.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=g.getBoundingClientRect().height}},{key:"printLabels",value:function(t){var e,i=this,a=t.i,s=t.j,r=t.values,n=t.ttItems,o=t.shared,l=t.e,h=this.w,c=[],d=function(t){return h.globals.seriesGoals[t]&&h.globals.seriesGoals[t][s]&&Array.isArray(h.globals.seriesGoals[t][s])},g=r.xVal,p=r.zVal,f=r.xAxisTTVal,x="",b=h.globals.colors[a];null!==s&&h.config.plotOptions.bar.distributed&&(b=h.globals.colors[s]);for(var m=function(t,r){var m=i.getFormatters(a);x=i.getSeriesName({fn:m.yLbTitleFormatter,index:a,seriesIndex:a,j:s}),"treemap"===h.config.chart.type&&(x=m.yLbTitleFormatter(String(h.config.series[a].data[s].x),{series:h.globals.series,seriesIndex:a,dataPointIndex:s,w:h}));var v=h.config.tooltip.inverseOrder?r:t;if(h.globals.axisCharts){var y=function(t){var e,i,a,r;return h.globals.isRangeData?m.yLbFormatter(null===(e=h.globals.seriesRangeStart)||void 0===e||null===(i=e[t])||void 0===i?void 0:i[s],{series:h.globals.seriesRangeStart,seriesIndex:t,dataPointIndex:s,w:h})+" - "+m.yLbFormatter(null===(a=h.globals.seriesRangeEnd)||void 0===a||null===(r=a[t])||void 0===r?void 0:r[s],{series:h.globals.seriesRangeEnd,seriesIndex:t,dataPointIndex:s,w:h}):m.yLbFormatter(h.globals.series[t][s],{series:h.globals.series,seriesIndex:t,dataPointIndex:s,w:h})};if(o)m=i.getFormatters(v),x=i.getSeriesName({fn:m.yLbTitleFormatter,index:v,seriesIndex:a,j:s}),b=h.globals.colors[v],e=y(v),d(v)&&(c=h.globals.seriesGoals[v][s].map((function(t){return{attrs:t,val:m.yLbFormatter(t.value,{seriesIndex:v,dataPointIndex:s,w:h})}})));else{var w,k=null==l||null===(w=l.target)||void 0===w?void 0:w.getAttribute("fill");k&&(-1!==k.indexOf("url")?-1!==k.indexOf("Pattern")&&(b=h.globals.dom.baseEl.querySelector(k.substr(4).slice(0,-1)).childNodes[0].getAttribute("stroke")):b=k),e=y(a),d(a)&&Array.isArray(h.globals.seriesGoals[a][s])&&(c=h.globals.seriesGoals[a][s].map((function(t){return{attrs:t,val:m.yLbFormatter(t.value,{seriesIndex:a,dataPointIndex:s,w:h})}})))}}null===s&&(e=m.yLbFormatter(h.globals.series[a],u(u({},h),{},{seriesIndex:a,dataPointIndex:a}))),i.DOMHandling({i:a,t:v,j:s,ttItems:n,values:{val:e,goalVals:c,xVal:g,xAxisTTVal:f,zVal:p},seriesName:x,shared:o,pColor:b})},v=0,y=h.globals.series.length-1;v<h.globals.series.length;v++,y--)m(v,y)}},{key:"getFormatters",value:function(t){var e,i=this.w,a=i.globals.yLabelFormatters[t];return void 0!==i.globals.ttVal?Array.isArray(i.globals.ttVal)?(a=i.globals.ttVal[t]&&i.globals.ttVal[t].formatter,e=i.globals.ttVal[t]&&i.globals.ttVal[t].title&&i.globals.ttVal[t].title.formatter):(a=i.globals.ttVal.formatter,"function"==typeof i.globals.ttVal.title.formatter&&(e=i.globals.ttVal.title.formatter)):e=i.config.tooltip.y.title.formatter,"function"!=typeof a&&(a=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(t){return t}),"function"!=typeof e&&(e=function(t){return t?t+": ":""}),{yLbFormatter:a,yLbTitleFormatter:e}}},{key:"getSeriesName",value:function(t){var e=t.fn,i=t.index,a=t.seriesIndex,s=t.j,r=this.w;return e(String(r.globals.seriesNames[i]),{series:r.globals.series,seriesIndex:a,dataPointIndex:s,w:r})}},{key:"DOMHandling",value:function(t){t.i;var e=t.t,i=t.j,a=t.ttItems,s=t.values,r=t.seriesName,n=t.shared,o=t.pColor,l=this.w,h=this.ttCtx,c=s.val,d=s.goalVals,u=s.xVal,g=s.xAxisTTVal,p=s.zVal,f=null;f=a[e].children,l.config.tooltip.fillSeriesColor&&(a[e].style.backgroundColor=o,f[0].style.display="none"),h.showTooltipTitle&&(null===h.tooltipTitle&&(h.tooltipTitle=l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),h.tooltipTitle.innerHTML=u),h.isXAxisTooltipEnabled&&(h.xaxisTooltipText.innerHTML=""!==g?g:u);var x=a[e].querySelector(".apexcharts-tooltip-text-y-label");x&&(x.innerHTML=r||"");var b=a[e].querySelector(".apexcharts-tooltip-text-y-value");b&&(b.innerHTML=void 0!==c?c:""),f[0]&&f[0].classList.contains("apexcharts-tooltip-marker")&&(l.config.tooltip.marker.fillColors&&Array.isArray(l.config.tooltip.marker.fillColors)&&(o=l.config.tooltip.marker.fillColors[e]),f[0].style.backgroundColor=o),l.config.tooltip.marker.show||(f[0].style.display="none");var m=a[e].querySelector(".apexcharts-tooltip-text-goals-label"),v=a[e].querySelector(".apexcharts-tooltip-text-goals-value");if(d.length&&l.globals.seriesGoals[e]){var y=function(){var t="<div >",e="<div>";d.forEach((function(i,a){t+=' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i.attrs.strokeColor,'; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i.attrs.name,"</div>"),e+="<div>".concat(i.val,"</div>")})),m.innerHTML=t+"</div>",v.innerHTML=e+"</div>"};n?l.globals.seriesGoals[e][i]&&Array.isArray(l.globals.seriesGoals[e][i])?y():(m.innerHTML="",v.innerHTML=""):y()}else m.innerHTML="",v.innerHTML="";null!==p&&(a[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=l.config.tooltip.z.title,a[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=void 0!==p?p:"");if(n&&f[0]){if(l.config.tooltip.hideEmptySeries){var w=a[e].querySelector(".apexcharts-tooltip-marker"),k=a[e].querySelector(".apexcharts-tooltip-text");0==parseFloat(c)?(w.style.display="none",k.style.display="none"):(w.style.display="block",k.style.display="block")}null==c||l.globals.ancillaryCollapsedSeriesIndices.indexOf(e)>-1||l.globals.collapsedSeriesIndices.indexOf(e)>-1||Array.isArray(h.tConfig.enabledOnSeries)&&-1===h.tConfig.enabledOnSeries.indexOf(e)?f[0].parentNode.style.display="none":f[0].parentNode.style.display=l.config.tooltip.items.display}else Array.isArray(h.tConfig.enabledOnSeries)&&-1===h.tConfig.enabledOnSeries.indexOf(e)&&(f[0].parentNode.style.display="none")}},{key:"toggleActiveInactiveSeries",value:function(t,e){var i=this.w;if(t)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var a=i.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group-".concat(e));a&&(a.classList.add("apexcharts-active"),a.style.display=i.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(t){var e=t.i,i=t.j,a=this.w,s=this.ctx.series.filteredSeriesX(),r="",n="",o=null,l=null,h={series:a.globals.series,seriesIndex:e,dataPointIndex:i,w:a},c=a.globals.ttZFormatter;null===i?l=a.globals.series[e]:a.globals.isXNumeric&&"treemap"!==a.config.chart.type?(r=s[e][i],0===s[e].length&&(r=s[this.tooltipUtil.getFirstActiveXArray(s)][i])):r=new $i(this.ctx).isFormatXY()?void 0!==a.config.series[e].data[i]?a.config.series[e].data[i].x:"":void 0!==a.globals.labels[i]?a.globals.labels[i]:"";var d=r;a.globals.isXNumeric&&"datetime"===a.config.xaxis.type?r=new Xi(this.ctx).xLabelFormat(a.globals.ttKeyFormatter,d,d,{i:void 0,dateFormatter:new zi(this.ctx).formatDate,w:this.w}):r=a.globals.isBarHorizontal?a.globals.yLabelFormatters[0](d,h):a.globals.xLabelFormatter(d,h);return void 0!==a.config.tooltip.x.formatter&&(r=a.globals.ttKeyFormatter(d,h)),a.globals.seriesZ.length>0&&a.globals.seriesZ[e].length>0&&(o=c(a.globals.seriesZ[e][i],a)),n="function"==typeof a.config.xaxis.tooltip.formatter?a.globals.xaxisTooltipFormatter(d,h):r,{val:Array.isArray(l)?l.join(" "):l,xVal:Array.isArray(r)?r.join(" "):r,xAxisTTVal:Array.isArray(n)?n.join(" "):n,zVal:o}}},{key:"handleCustomTooltip",value:function(t){var e=t.i,i=t.j,a=t.y1,s=t.y2,r=t.w,n=this.ttCtx.getElTooltip(),o=r.config.tooltip.custom;Array.isArray(o)&&o[e]&&(o=o[e]),n.innerHTML=o({ctx:this.ctx,series:r.globals.series,seriesIndex:e,dataPointIndex:i,y1:a,y2:s,w:r})}}]),t}(),wa=function(){function t(e){i(this,t),this.ttCtx=e,this.ctx=e.ctx,this.w=e.w}return s(t,[{key:"moveXCrosshairs",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.ttCtx,a=this.w,s=i.getElXCrosshairs(),r=t-i.xcrosshairsWidth/2,n=a.globals.labels.slice().length;if(null!==e&&(r=a.globals.gridWidth/n*e),null===s||a.globals.isBarHorizontal||(s.setAttribute("x",r),s.setAttribute("x1",r),s.setAttribute("x2",r),s.setAttribute("y2",a.globals.gridHeight),s.classList.add("apexcharts-active")),r<0&&(r=0),r>a.globals.gridWidth&&(r=a.globals.gridWidth),i.isXAxisTooltipEnabled){var o=r;"tickWidth"!==a.config.xaxis.crosshairs.width&&"barWidth"!==a.config.xaxis.crosshairs.width||(o=r+i.xcrosshairsWidth/2),this.moveXAxisTooltip(o)}}},{key:"moveYCrosshairs",value:function(t){var e=this.ttCtx;null!==e.ycrosshairs&&Mi.setAttrs(e.ycrosshairs,{y1:t,y2:t}),null!==e.ycrosshairsHidden&&Mi.setAttrs(e.ycrosshairsHidden,{y1:t,y2:t})}},{key:"moveXAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;if(null!==i.xaxisTooltip&&0!==i.xcrosshairsWidth){i.xaxisTooltip.classList.add("apexcharts-active");var a=i.xaxisOffY+e.config.xaxis.tooltip.offsetY+e.globals.translateY+1+e.config.xaxis.offsetY;if(t-=i.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(t)){t+=e.globals.translateX;var s;s=new Mi(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML),i.xaxisTooltipText.style.minWidth=s.width+"px",i.xaxisTooltip.style.left=t+"px",i.xaxisTooltip.style.top=a+"px"}}}},{key:"moveYAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;null===i.yaxisTTEls&&(i.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var a=parseInt(i.ycrosshairsHidden.getAttribute("y1"),10),s=e.globals.translateY+a,r=i.yaxisTTEls[t].getBoundingClientRect().height,n=e.globals.translateYAxisX[t]-2;e.config.yaxis[t].opposite&&(n-=26),s-=r/2,-1===e.globals.ignoreYAxisIndexes.indexOf(t)?(i.yaxisTTEls[t].classList.add("apexcharts-active"),i.yaxisTTEls[t].style.top=s+"px",i.yaxisTTEls[t].style.left=n+e.config.yaxis[t].tooltip.offsetX+"px"):i.yaxisTTEls[t].classList.remove("apexcharts-active")}},{key:"moveTooltip",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=this.ttCtx,r=s.getElTooltip(),n=s.tooltipRect,o=null!==i?parseFloat(i):1,l=parseFloat(t)+o+5,h=parseFloat(e)+o/2;if(l>a.globals.gridWidth/2&&(l=l-n.ttWidth-o-10),l>a.globals.gridWidth-n.ttWidth-10&&(l=a.globals.gridWidth-n.ttWidth),l<-20&&(l=-20),a.config.tooltip.followCursor){var c=s.getElGrid().getBoundingClientRect();(l=s.e.clientX-c.left)>a.globals.gridWidth/2&&(l-=s.tooltipRect.ttWidth),(h=s.e.clientY+a.globals.translateY-c.top)>a.globals.gridHeight/2&&(h-=s.tooltipRect.ttHeight)}else a.globals.isBarHorizontal||n.ttHeight/2+h>a.globals.gridHeight&&(h=a.globals.gridHeight-n.ttHeight+a.globals.translateY);isNaN(l)||(l+=a.globals.translateX,r.style.left=l+"px",r.style.top=h+"px")}},{key:"moveMarkers",value:function(t,e){var i=this.w,a=this.ttCtx;if(i.globals.markers.size[t]>0)for(var s=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-marker")),r=0;r<s.length;r++)parseInt(s[r].getAttribute("rel"),10)===e&&(a.marker.resetPointsSize(),a.marker.enlargeCurrentPoint(e,s[r]));else a.marker.resetPointsSize(),this.moveDynamicPointOnHover(e,t)}},{key:"moveDynamicPointOnHover",value:function(t,e){var i,a,s,r,n=this.w,o=this.ttCtx,l=new Mi(this.ctx),h=n.globals.pointsArray,c=o.tooltipUtil.getHoverMarkerSize(e),d=n.config.series[e].type;if(!d||"column"!==d&&"candlestick"!==d&&"boxPlot"!==d){s=null===(i=h[e][t])||void 0===i?void 0:i[0],r=(null===(a=h[e][t])||void 0===a?void 0:a[1])||0;var u=n.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e,"'] .apexcharts-series-markers path"));if(u&&r<n.globals.gridHeight&&r>0){var g=u.getAttribute("shape"),p=l.getMarkerPath(s,r,g,1.5*c);u.setAttribute("d",p)}this.moveXCrosshairs(s),o.fixedTooltip||this.moveTooltip(s,r,c)}}},{key:"moveDynamicPointsOnHover",value:function(t){var e,i=this.ttCtx,a=i.w,s=0,r=0,n=a.globals.pointsArray,o=new Zi(this.ctx),l=new Mi(this.ctx);e=o.getActiveConfigSeriesIndex("asc",["line","area","scatter","bubble"]);var h=i.tooltipUtil.getHoverMarkerSize(e);n[e]&&(s=n[e][t][0],r=n[e][t][1]);var c=i.tooltipUtil.getAllMarkers();if(null!==c)for(var d=0;d<a.globals.series.length;d++){var u=n[d];if(a.globals.comboCharts&&void 0===u&&c.splice(d,0,null),u&&u.length){var g=n[d][t][1],p=void 0;c[d].setAttribute("cx",s);var f=c[d].getAttribute("shape");if("rangeArea"===a.config.chart.type&&!a.globals.comboCharts){var x=t+a.globals.series[d].length;p=n[d][x][1],g-=Math.abs(g-p)/2}if(null!==g&&!isNaN(g)&&g<a.globals.gridHeight+h&&g+h>0){var b=l.getMarkerPath(s,g,f,h);c[d].setAttribute("d",b)}else c[d].setAttribute("d","")}}this.moveXCrosshairs(s),i.fixedTooltip||this.moveTooltip(s,r||a.globals.gridHeight,h)}},{key:"moveStickyTooltipOverBars",value:function(t,e){var i=this.w,a=this.ttCtx,s=i.globals.columnSeries?i.globals.columnSeries.length:i.globals.series.length,r=s>=2&&s%2==0?Math.floor(s/2):Math.floor(s/2)+1;i.globals.isBarHorizontal&&(r=new Zi(this.ctx).getActiveConfigSeriesIndex("desc")+1);var n=i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r,"'] path[j='").concat(t,"'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(t,"'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(t,"'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(t,"']"));n||"number"!=typeof e||(n=i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e,"'] path[j='").concat(t,"'],\n        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='").concat(e,"'] path[j='").concat(t,"'],\n        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='").concat(e,"'] path[j='").concat(t,"'],\n        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='").concat(e,"'] path[j='").concat(t,"']")));var o=n?parseFloat(n.getAttribute("cx")):0,l=n?parseFloat(n.getAttribute("cy")):0,h=n?parseFloat(n.getAttribute("barWidth")):0,c=a.getElGrid().getBoundingClientRect(),d=n&&(n.classList.contains("apexcharts-candlestick-area")||n.classList.contains("apexcharts-boxPlot-area"));i.globals.isXNumeric?(n&&!d&&(o-=s%2!=0?h/2:0),n&&d&&i.globals.comboCharts&&(o-=h/2)):i.globals.isBarHorizontal||(o=a.xAxisTicksPositions[t-1]+a.dataPointsDividedWidth/2,isNaN(o)&&(o=a.xAxisTicksPositions[t]-a.dataPointsDividedWidth/2)),i.globals.isBarHorizontal?l-=a.tooltipRect.ttHeight:i.config.tooltip.followCursor?l=a.e.clientY-c.top-a.tooltipRect.ttHeight/2:l+a.tooltipRect.ttHeight+15>i.globals.gridHeight&&(l=i.globals.gridHeight),i.globals.isBarHorizontal||this.moveXCrosshairs(o),a.fixedTooltip||this.moveTooltip(o,l||i.globals.gridHeight)}}]),t}(),ka=function(){function t(e){i(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx,this.tooltipPosition=new wa(e)}return s(t,[{key:"drawDynamicPoints",value:function(){var t=this.w,e=new Mi(this.ctx),i=new Vi(this.ctx),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");a=f(a),t.config.chart.stacked&&a.sort((function(t,e){return parseFloat(t.getAttribute("data:realIndex"))-parseFloat(e.getAttribute("data:realIndex"))}));for(var s=0;s<a.length;s++){var r=a[s].querySelector(".apexcharts-series-markers-wrap");if(null!==r){var n=void 0,o="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));"line"!==t.config.chart.type&&"area"!==t.config.chart.type||t.globals.comboCharts||t.config.tooltip.intersect||(o+=" no-pointer-events");var l=i.getMarkerConfig({cssClass:o,seriesIndex:Number(r.getAttribute("data:realIndex"))});(n=e.drawMarker(0,0,l)).node.setAttribute("default-marker-size",0);var h=document.createElementNS(t.globals.SVGNS,"g");h.classList.add("apexcharts-series-markers"),h.appendChild(n.node),r.appendChild(h)}}}},{key:"enlargeCurrentPoint",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w;"bubble"!==s.config.chart.type&&this.newPointSize(t,e);var r=e.getAttribute("cx"),n=e.getAttribute("cy");if(null!==i&&null!==a&&(r=i,n=a),this.tooltipPosition.moveXCrosshairs(r),!this.fixedTooltip){if("radar"===s.config.chart.type){var o=this.ttCtx.getElGrid().getBoundingClientRect();r=this.ttCtx.e.clientX-o.left}this.tooltipPosition.moveTooltip(r,n,s.config.markers.hover.size)}}},{key:"enlargePoints",value:function(t){for(var e=this.w,i=this,a=this.ttCtx,s=t,r=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),n=e.config.markers.hover.size,o=0;o<r.length;o++){var l=r[o].getAttribute("rel"),h=r[o].getAttribute("index");if(void 0===n&&(n=e.globals.markers.size[h]+e.config.markers.hover.sizeOffset),s===parseInt(l,10)){i.newPointSize(s,r[o]);var c=r[o].getAttribute("cx"),d=r[o].getAttribute("cy");i.tooltipPosition.moveXCrosshairs(c),a.fixedTooltip||i.tooltipPosition.moveTooltip(c,d,n)}else i.oldPointSize(r[o])}}},{key:"newPointSize",value:function(t,e){var i=this.w,a=i.config.markers.hover.size,s=0===t?e.parentNode.firstChild:e.parentNode.lastChild;if("0"!==s.getAttribute("default-marker-size")){var r=parseInt(s.getAttribute("index"),10);void 0===a&&(a=i.globals.markers.size[r]+i.config.markers.hover.sizeOffset),a<0&&(a=0);var n=this.ttCtx.tooltipUtil.getPathFromPoint(e,a);e.setAttribute("d",n)}}},{key:"oldPointSize",value:function(t){var e=parseFloat(t.getAttribute("default-marker-size")),i=this.ttCtx.tooltipUtil.getPathFromPoint(t,e);t.setAttribute("d",i)}},{key:"resetPointsSize",value:function(){for(var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),e=0;e<t.length;e++){var i=parseFloat(t[e].getAttribute("default-marker-size"));if(v.isNumber(i)&&i>0){var a=this.ttCtx.tooltipUtil.getPathFromPoint(t[e],i);t[e].setAttribute("d",a)}else t[e].setAttribute("d","M0,0")}}}]),t}(),Aa=function(){function t(e){i(this,t),this.w=e.w;var a=this.w;this.ttCtx=e,this.isVerticalGroupedRangeBar=!a.globals.isBarHorizontal&&"rangeBar"===a.config.chart.type&&a.config.plotOptions.bar.rangeBarGroupRows}return s(t,[{key:"getAttr",value:function(t,e){return parseFloat(t.target.getAttribute(e))}},{key:"handleHeatTreeTooltip",value:function(t){var e=t.e,i=t.opt,a=t.x,s=t.y,r=t.type,n=this.ttCtx,o=this.w;if(e.target.classList.contains("apexcharts-".concat(r,"-rect"))){var l=this.getAttr(e,"i"),h=this.getAttr(e,"j"),c=this.getAttr(e,"cx"),d=this.getAttr(e,"cy"),u=this.getAttr(e,"width"),g=this.getAttr(e,"height");if(n.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:l,j:h,shared:!1,e:e}),o.globals.capturedSeriesIndex=l,o.globals.capturedDataPointIndex=h,a=c+n.tooltipRect.ttWidth/2+u,s=d+n.tooltipRect.ttHeight/2-g/2,n.tooltipPosition.moveXCrosshairs(c+u/2),a>o.globals.gridWidth/2&&(a=c-n.tooltipRect.ttWidth/2+u),n.w.config.tooltip.followCursor){var p=o.globals.dom.elWrap.getBoundingClientRect();a=o.globals.clientX-p.left-(a>o.globals.gridWidth/2?n.tooltipRect.ttWidth:0),s=o.globals.clientY-p.top-(s>o.globals.gridHeight/2?n.tooltipRect.ttHeight:0)}}return{x:a,y:s}}},{key:"handleMarkerTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=t.x,n=t.y,o=this.w,l=this.ttCtx;if(a.target.classList.contains("apexcharts-marker")){var h=parseInt(s.paths.getAttribute("cx"),10),c=parseInt(s.paths.getAttribute("cy"),10),d=parseFloat(s.paths.getAttribute("val"));if(i=parseInt(s.paths.getAttribute("rel"),10),e=parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"),10)-1,l.intersect){var u=v.findAncestor(s.paths,"apexcharts-series");u&&(e=parseInt(u.getAttribute("data:realIndex"),10))}if(l.tooltipLabels.drawSeriesTexts({ttItems:s.ttItems,i:e,j:i,shared:!l.showOnIntersect&&o.config.tooltip.shared,e:a}),"mouseup"===a.type&&l.markerClick(a,e,i),o.globals.capturedSeriesIndex=e,o.globals.capturedDataPointIndex=i,r=h,n=c+o.globals.translateY-1.4*l.tooltipRect.ttHeight,l.w.config.tooltip.followCursor){var g=l.getElGrid().getBoundingClientRect();n=l.e.clientY+o.globals.translateY-g.top}d<0&&(n=c),l.marker.enlargeCurrentPoint(i,s.paths,r,n)}return{x:r,y:n}}},{key:"handleBarTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,n=this.ttCtx,o=n.getElTooltip(),l=0,h=0,c=0,d=this.getBarTooltipXY({e:a,opt:s});if(null!==d.j||0!==d.barHeight||0!==d.barWidth){e=d.i;var u=d.j;if(r.globals.capturedSeriesIndex=e,r.globals.capturedDataPointIndex=u,r.globals.isBarHorizontal&&n.tooltipUtil.hasBars()||!r.config.tooltip.shared?(h=d.x,c=d.y,i=Array.isArray(r.config.stroke.width)?r.config.stroke.width[e]:r.config.stroke.width,l=h):r.globals.comboCharts||r.config.tooltip.shared||(l/=2),isNaN(c)&&(c=r.globals.svgHeight-n.tooltipRect.ttHeight),parseInt(s.paths.parentNode.getAttribute("data:realIndex"),10),h+n.tooltipRect.ttWidth>r.globals.gridWidth?h-=n.tooltipRect.ttWidth:h<0&&(h=0),n.w.config.tooltip.followCursor){var g=n.getElGrid().getBoundingClientRect();c=n.e.clientY-g.top}null===n.tooltip&&(n.tooltip=r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),r.config.tooltip.shared||(r.globals.comboBarCount>0?n.tooltipPosition.moveXCrosshairs(l+i/2):n.tooltipPosition.moveXCrosshairs(l)),!n.fixedTooltip&&(!r.config.tooltip.shared||r.globals.isBarHorizontal&&n.tooltipUtil.hasBars())&&(c=c+r.globals.translateY-n.tooltipRect.ttHeight/2,o.style.left=h+r.globals.translateX+"px",o.style.top=c+"px")}}},{key:"getBarTooltipXY",value:function(t){var e=this,i=t.e,a=t.opt,s=this.w,r=null,n=this.ttCtx,o=0,l=0,h=0,c=0,d=0,u=i.target.classList;if(u.contains("apexcharts-bar-area")||u.contains("apexcharts-candlestick-area")||u.contains("apexcharts-boxPlot-area")||u.contains("apexcharts-rangebar-area")){var g=i.target,p=g.getBoundingClientRect(),f=a.elGrid.getBoundingClientRect(),x=p.height;d=p.height;var b=p.width,m=parseInt(g.getAttribute("cx"),10),v=parseInt(g.getAttribute("cy"),10);c=parseFloat(g.getAttribute("barWidth"));var y="touchmove"===i.type?i.touches[0].clientX:i.clientX;r=parseInt(g.getAttribute("j"),10),o=parseInt(g.parentNode.getAttribute("rel"),10)-1;var w=g.getAttribute("data-range-y1"),k=g.getAttribute("data-range-y2");s.globals.comboCharts&&(o=parseInt(g.parentNode.getAttribute("data:realIndex"),10));var A=function(t){return s.globals.isXNumeric?m-b/2:e.isVerticalGroupedRangeBar?m+b/2:m-n.dataPointsDividedWidth+b/2},C=function(){return v-n.dataPointsDividedHeight+x/2-n.tooltipRect.ttHeight/2};n.tooltipLabels.drawSeriesTexts({ttItems:a.ttItems,i:o,j:r,y1:w?parseInt(w,10):null,y2:k?parseInt(k,10):null,shared:!n.showOnIntersect&&s.config.tooltip.shared,e:i}),s.config.tooltip.followCursor?s.globals.isBarHorizontal?(l=y-f.left+15,h=C()):(l=A(),h=i.clientY-f.top-n.tooltipRect.ttHeight/2-15):s.globals.isBarHorizontal?((l=m)<n.xyRatios.baseLineInvertedY&&(l=m-n.tooltipRect.ttWidth),h=C()):(l=A(),h=v)}return{x:l,y:h,barHeight:d,barWidth:c,i:o,j:r}}}]),t}(),Ca=function(){function t(e){i(this,t),this.w=e.w,this.ttCtx=e}return s(t,[{key:"drawXaxisTooltip",value:function(){var t=this.w,e=this.ttCtx,i="bottom"===t.config.xaxis.position;e.xaxisOffY=i?t.globals.gridHeight+1:-t.globals.xAxisHeight-t.config.xaxis.axisTicks.height+3;var a=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",s=t.globals.dom.elWrap;e.isXAxisTooltipEnabled&&(null===t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")&&(e.xaxisTooltip=document.createElement("div"),e.xaxisTooltip.setAttribute("class",a+" apexcharts-theme-"+t.config.tooltip.theme),s.appendChild(e.xaxisTooltip),e.xaxisTooltipText=document.createElement("div"),e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),e.xaxisTooltipText.style.fontFamily=t.config.xaxis.tooltip.style.fontFamily||t.config.chart.fontFamily,e.xaxisTooltipText.style.fontSize=t.config.xaxis.tooltip.style.fontSize,e.xaxisTooltip.appendChild(e.xaxisTooltipText)))}},{key:"drawYaxisTooltip",value:function(){for(var t=this.w,e=this.ttCtx,i=0;i<t.config.yaxis.length;i++){var a=t.config.yaxis[i].opposite||t.config.yaxis[i].crosshairs.opposite;e.yaxisOffX=a?t.globals.gridWidth+1:1;var s="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i,a?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left"),r=t.globals.dom.elWrap;null===t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i))&&(e.yaxisTooltip=document.createElement("div"),e.yaxisTooltip.setAttribute("class",s+" apexcharts-theme-"+t.config.tooltip.theme),r.appendChild(e.yaxisTooltip),0===i&&(e.yaxisTooltipText=[]),e.yaxisTooltipText[i]=document.createElement("div"),e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"),e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))}}},{key:"setXCrosshairWidth",value:function(){var t=this.w,e=this.ttCtx,i=e.getElXCrosshairs();if(e.xcrosshairsWidth=parseInt(t.config.xaxis.crosshairs.width,10),t.globals.comboCharts){var a=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==a&&"barWidth"===t.config.xaxis.crosshairs.width){var s=parseFloat(a.getAttribute("barWidth"));e.xcrosshairsWidth=s}else if("tickWidth"===t.config.xaxis.crosshairs.width){var r=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/r}}else if("tickWidth"===t.config.xaxis.crosshairs.width){var n=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/n}else if("barWidth"===t.config.xaxis.crosshairs.width){var o=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==o){var l=parseFloat(o.getAttribute("barWidth"));e.xcrosshairsWidth=l}else e.xcrosshairsWidth=1}t.globals.isBarHorizontal&&(e.xcrosshairsWidth=0),null!==i&&e.xcrosshairsWidth>0&&i.setAttribute("width",e.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var t=this.w,e=this.ttCtx;e.ycrosshairs=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),e.ycrosshairsHidden=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(t,e,i){var a=this.ttCtx,s=this.w,r=s.globals,n=r.seriesYAxisMap[t];if(a.yaxisTooltips[t]&&n.length>0){var o=r.yLabelFormatters[t],l=a.getElGrid().getBoundingClientRect(),h=n[0],c=0;i.yRatio.length>1&&(c=h);var d=(e-l.top)*i.yRatio[c],u=r.maxYArr[h]-r.minYArr[h],g=r.minYArr[h]+(u-d);s.config.yaxis[t].reversed&&(g=r.maxYArr[h]-(u-d)),a.tooltipPosition.moveYCrosshairs(e-l.top),a.yaxisTooltipText[t].innerHTML=o(g),a.tooltipPosition.moveYAxisTooltip(t)}}}]),t}(),Sa=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w;var a=this.w;this.tConfig=a.config.tooltip,this.tooltipUtil=new va(this),this.tooltipLabels=new ya(this),this.tooltipPosition=new wa(this),this.marker=new ka(this),this.intersect=new Aa(this),this.axesTooltip=new Ca(this),this.showOnIntersect=this.tConfig.intersect,this.showTooltipTitle=this.tConfig.x.show,this.fixedTooltip=this.tConfig.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarShared=!a.globals.isBarHorizontal&&this.tConfig.shared,this.lastHoverTime=Date.now()}return s(t,[{key:"getElTooltip",value:function(t){return t||(t=this),t.w.globals.dom.baseEl?t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip"):null}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(t){var e=this.w;this.xyRatios=t,this.isXAxisTooltipEnabled=e.config.xaxis.tooltip.enabled&&e.globals.axisCharts,this.yaxisTooltips=e.config.yaxis.map((function(t,i){return!!(t.show&&t.tooltip.enabled&&e.globals.axisCharts)})),this.allTooltipSeriesGroups=[],e.globals.axisCharts||(this.showTooltipTitle=!1);var i=document.createElement("div");if(i.classList.add("apexcharts-tooltip"),e.config.tooltip.cssClass&&i.classList.add(e.config.tooltip.cssClass),i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)),e.globals.dom.elWrap.appendChild(i),e.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var a=new Qi(this.ctx);this.xAxisTicksPositions=a.getXAxisTicksPositions()}if(!e.globals.comboCharts&&!this.tConfig.intersect&&"rangeBar"!==e.config.chart.type||this.tConfig.shared||(this.showOnIntersect=!0),0!==e.config.markers.size&&0!==e.globals.markers.largestSize||this.marker.drawDynamicPoints(this),e.globals.collapsedSeries.length!==e.globals.series.length){this.dataPointsDividedHeight=e.globals.gridHeight/e.globals.dataPoints,this.dataPointsDividedWidth=e.globals.gridWidth/e.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||e.config.chart.fontFamily,this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize,i.appendChild(this.tooltipTitle));var s=e.globals.series.length;(e.globals.xyCharts||e.globals.comboCharts)&&this.tConfig.shared&&(s=this.showOnIntersect?1:e.globals.series.length),this.legendLabels=e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"),this.ttItems=this.createTTElements(s),this.addSVGEvents()}}},{key:"createTTElements",value:function(t){for(var e=this,i=this.w,a=[],s=this.getElTooltip(),r=function(r){var n=document.createElement("div");n.classList.add("apexcharts-tooltip-series-group","apexcharts-tooltip-series-group-".concat(r)),n.style.order=i.config.tooltip.inverseOrder?t-r:r+1;var o=document.createElement("span");o.classList.add("apexcharts-tooltip-marker"),o.style.backgroundColor=i.globals.colors[r],n.appendChild(o);var l=document.createElement("div");l.classList.add("apexcharts-tooltip-text"),l.style.fontFamily=e.tConfig.style.fontFamily||i.config.chart.fontFamily,l.style.fontSize=e.tConfig.style.fontSize,["y","goals","z"].forEach((function(t){var e=document.createElement("div");e.classList.add("apexcharts-tooltip-".concat(t,"-group"));var i=document.createElement("span");i.classList.add("apexcharts-tooltip-text-".concat(t,"-label")),e.appendChild(i);var a=document.createElement("span");a.classList.add("apexcharts-tooltip-text-".concat(t,"-value")),e.appendChild(a),l.appendChild(e)})),n.appendChild(l),s.appendChild(n),a.push(n)},n=0;n<t;n++)r(n);return a}},{key:"addSVGEvents",value:function(){var t=this.w,e=t.config.chart.type,i=this.getElTooltip(),a=!("bar"!==e&&"candlestick"!==e&&"boxPlot"!==e&&"rangeBar"!==e),s="area"===e||"line"===e||"scatter"===e||"bubble"===e||"radar"===e,r=t.globals.dom.Paper.node,n=this.getElGrid();n&&(this.seriesBound=n.getBoundingClientRect());var o,l=[],h=[],c={hoverArea:r,elGrid:n,tooltipEl:i,tooltipY:l,tooltipX:h,ttItems:this.ttItems};if(t.globals.axisCharts&&(s?o=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):a?o=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area"):"heatmap"!==e&&"treemap"!==e||(o=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")),o&&o.length))for(var d=0;d<o.length;d++)l.push(o[d].getAttribute("cy")),h.push(o[d].getAttribute("cx"));if(t.globals.xyCharts&&!this.showOnIntersect||t.globals.comboCharts&&!this.showOnIntersect||a&&this.tooltipUtil.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([r],c);else if(a&&!t.globals.comboCharts||s&&this.showOnIntersect)this.addDatapointEventsListeners(c);else if(!t.globals.axisCharts||"heatmap"===e||"treemap"===e){var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(u,c)}if(this.showOnIntersect){var g=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");g.length>0&&this.addPathsEventListeners(g,c),this.tooltipUtil.hasBars()&&!this.tConfig.shared&&this.addDatapointEventsListeners(c)}}},{key:"drawFixedTooltipRect",value:function(){var t=this.w,e=this.getElTooltip(),i=e.getBoundingClientRect(),a=i.width+10,s=i.height+10,r=this.tConfig.fixed.offsetX,n=this.tConfig.fixed.offsetY,o=this.tConfig.fixed.position.toLowerCase();return o.indexOf("right")>-1&&(r=r+t.globals.svgWidth-a+10),o.indexOf("bottom")>-1&&(n=n+t.globals.svgHeight-s-10),e.style.left=r+"px",e.style.top=n+"px",{x:r,y:n,ttWidth:a,ttHeight:s}}},{key:"addDatapointEventsListeners",value:function(t){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");this.addPathsEventListeners(e,t)}},{key:"addPathsEventListeners",value:function(t,e){for(var i=this,a=function(a){var s={paths:t[a],tooltipEl:e.tooltipEl,tooltipY:e.tooltipY,tooltipX:e.tooltipX,elGrid:e.elGrid,hoverArea:e.hoverArea,ttItems:e.ttItems};["mousemove","mouseup","touchmove","mouseout","touchend"].map((function(e){return t[a].addEventListener(e,i.onSeriesHover.bind(i,s),{capture:!1,passive:!0})}))},s=0;s<t.length;s++)a(s)}},{key:"onSeriesHover",value:function(t,e){var i=this,a=Date.now()-this.lastHoverTime;a>=20?this.seriesHover(t,e):(clearTimeout(this.seriesHoverTimeout),this.seriesHoverTimeout=setTimeout((function(){i.seriesHover(t,e)}),20-a))}},{key:"seriesHover",value:function(t,e){var i=this;this.lastHoverTime=Date.now();var a=[],s=this.w;s.config.chart.group&&(a=this.ctx.getGroupedCharts()),s.globals.axisCharts&&(s.globals.minX===-1/0&&s.globals.maxX===1/0||0===s.globals.dataPoints)||(a.length?a.forEach((function(a){var s=i.getElTooltip(a),r={paths:t.paths,tooltipEl:s,tooltipY:t.tooltipY,tooltipX:t.tooltipX,elGrid:t.elGrid,hoverArea:t.hoverArea,ttItems:a.w.globals.tooltip.ttItems};a.w.globals.minX===i.w.globals.minX&&a.w.globals.maxX===i.w.globals.maxX&&a.w.globals.tooltip.seriesHoverByContext({chartCtx:a,ttCtx:a.w.globals.tooltip,opt:r,e:e})})):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:t,e:e}))}},{key:"seriesHoverByContext",value:function(t){var e=t.chartCtx,i=t.ttCtx,a=t.opt,s=t.e,r=e.w,n=this.getElTooltip(e);if(n){if(i.tooltipRect={x:0,y:0,ttWidth:n.getBoundingClientRect().width,ttHeight:n.getBoundingClientRect().height},i.e=s,i.tooltipUtil.hasBars()&&!r.globals.comboCharts&&!i.isBarShared)if(this.tConfig.onDatasetHover.highlightDataSeries)new Zi(e).toggleSeriesOnHover(s,s.target.parentNode);i.fixedTooltip&&i.drawFixedTooltipRect(),r.globals.axisCharts?i.axisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect}):i.nonAxisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect})}}},{key:"axisChartsTooltips",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,n=s.elGrid.getBoundingClientRect(),o="touchmove"===a.type?a.touches[0].clientX:a.clientX,l="touchmove"===a.type?a.touches[0].clientY:a.clientY;if(this.clientY=l,this.clientX=o,r.globals.capturedSeriesIndex=-1,r.globals.capturedDataPointIndex=-1,l<n.top||l>n.top+n.height)this.handleMouseOut(s);else{if(Array.isArray(this.tConfig.enabledOnSeries)&&!r.config.tooltip.shared){var h=parseInt(s.paths.getAttribute("index"),10);if(this.tConfig.enabledOnSeries.indexOf(h)<0)return void this.handleMouseOut(s)}var c=this.getElTooltip(),d=this.getElXCrosshairs(),u=[];r.config.chart.group&&(u=this.ctx.getSyncedCharts());var g=r.globals.xyCharts||"bar"===r.config.chart.type&&!r.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||r.globals.comboCharts&&this.tooltipUtil.hasBars();if("mousemove"===a.type||"touchmove"===a.type||"mouseup"===a.type){if(r.globals.collapsedSeries.length+r.globals.ancillaryCollapsedSeries.length===r.globals.series.length)return;null!==d&&d.classList.add("apexcharts-active");var p=this.yaxisTooltips.filter((function(t){return!0===t}));if(null!==this.ycrosshairs&&p.length&&this.ycrosshairs.classList.add("apexcharts-active"),g&&!this.showOnIntersect||u.length>1)this.handleStickyTooltip(a,o,l,s);else if("heatmap"===r.config.chart.type||"treemap"===r.config.chart.type){var f=this.intersect.handleHeatTreeTooltip({e:a,opt:s,x:e,y:i,type:r.config.chart.type});e=f.x,i=f.y,c.style.left=e+"px",c.style.top=i+"px"}else this.tooltipUtil.hasBars()&&this.intersect.handleBarTooltip({e:a,opt:s}),this.tooltipUtil.hasMarkers()&&this.intersect.handleMarkerTooltip({e:a,opt:s,x:e,y:i});if(this.yaxisTooltips.length)for(var x=0;x<r.config.yaxis.length;x++)this.axesTooltip.drawYaxisTooltipText(x,l,this.xyRatios);r.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"),s.tooltipEl.classList.add("apexcharts-active")}else"mouseout"!==a.type&&"touchend"!==a.type||this.handleMouseOut(s)}}},{key:"nonAxisChartsTooltips",value:function(t){var e=t.e,i=t.opt,a=t.tooltipRect,s=this.w,r=i.paths.getAttribute("rel"),n=this.getElTooltip(),o=s.globals.dom.elWrap.getBoundingClientRect();if("mousemove"===e.type||"touchmove"===e.type){s.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"),n.classList.add("apexcharts-active"),this.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:parseInt(r,10)-1,shared:!1});var l=s.globals.clientX-o.left-a.ttWidth/2,h=s.globals.clientY-o.top-a.ttHeight-10;if(n.style.left=l+"px",n.style.top=h+"px",s.config.legend.tooltipHoverFormatter){var c=r-1,d=(0,s.config.legend.tooltipHoverFormatter)(this.legendLabels[c].getAttribute("data:default-text"),{seriesIndex:c,dataPointIndex:c,w:s});this.legendLabels[c].innerHTML=d}}else"mouseout"!==e.type&&"touchend"!==e.type||(n.classList.remove("apexcharts-active"),s.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"),s.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)})))}},{key:"handleStickyTooltip",value:function(t,e,i,a){var s=this.w,r=this.tooltipUtil.getNearestValues({context:this,hoverArea:a.hoverArea,elGrid:a.elGrid,clientX:e,clientY:i}),n=r.j,o=r.capturedSeries;s.globals.collapsedSeriesIndices.includes(o)&&(o=null);var l=a.elGrid.getBoundingClientRect();if(r.hoverX<0||r.hoverX>l.width)this.handleMouseOut(a);else if(null!==o)this.handleStickyCapturedSeries(t,o,a,n);else if(this.tooltipUtil.isXoverlap(n)||s.globals.isBarHorizontal){var h=s.globals.series.findIndex((function(t,e){return!s.globals.collapsedSeriesIndices.includes(e)}));this.create(t,this,h,n,a.ttItems)}}},{key:"handleStickyCapturedSeries",value:function(t,e,i,a){var s=this.w;if(!this.tConfig.shared&&null===s.globals.series[e][a])return void this.handleMouseOut(i);if(void 0!==s.globals.series[e][a])this.tConfig.shared&&this.tooltipUtil.isXoverlap(a)&&this.tooltipUtil.isInitialSeriesSameLen()?this.create(t,this,e,a,i.ttItems):this.create(t,this,e,a,i.ttItems,!1);else if(this.tooltipUtil.isXoverlap(a)){var r=s.globals.series.findIndex((function(t,e){return!s.globals.collapsedSeriesIndices.includes(e)}));this.create(t,this,r,a,i.ttItems)}}},{key:"deactivateHoverFilter",value:function(){for(var t=this.w,e=new Mi(this.ctx),i=t.globals.dom.Paper.find(".apexcharts-bar-area"),a=0;a<i.length;a++)e.pathMouseLeave(i[a])}},{key:"handleMouseOut",value:function(t){var e=this.w,i=this.getElXCrosshairs();if(e.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"),t.tooltipEl.classList.remove("apexcharts-active"),this.deactivateHoverFilter(),"bubble"!==e.config.chart.type&&this.marker.resetPointsSize(),null!==i&&i.classList.remove("apexcharts-active"),null!==this.ycrosshairs&&this.ycrosshairs.classList.remove("apexcharts-active"),this.isXAxisTooltipEnabled&&this.xaxisTooltip.classList.remove("apexcharts-active"),this.yaxisTooltips.length){null===this.yaxisTTEls&&(this.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var a=0;a<this.yaxisTTEls.length;a++)this.yaxisTTEls[a].classList.remove("apexcharts-active")}e.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}))}},{key:"markerClick",value:function(t,e,i){var a=this.w;"function"==typeof a.config.chart.events.markerClick&&a.config.chart.events.markerClick(t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}),this.ctx.events.fireEvent("markerClick",[t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}])}},{key:"create",value:function(t,e,i,a,s){var r,n,o,l,h,c,d,g,p,f,x,b,m,v,y,w,k=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,A=this.w,C=e;"mouseup"===t.type&&this.markerClick(t,i,a),null===k&&(k=this.tConfig.shared);var S=this.tooltipUtil.hasMarkers(i),L=this.tooltipUtil.getElBars();if(A.config.legend.tooltipHoverFormatter){var M=A.config.legend.tooltipHoverFormatter,P=Array.from(this.legendLabels);P.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}));for(var I=0;I<P.length;I++){var T=P[I],z=parseInt(T.getAttribute("i"),10),X=decodeURIComponent(T.getAttribute("data:default-text")),R=M(X,{seriesIndex:k?z:i,dataPointIndex:a,w:A});if(k)T.innerHTML=A.globals.collapsedSeriesIndices.indexOf(z)<0?R:X;else if(T.innerHTML=z===i?R:X,i===z)break}}var E=u(u({ttItems:s,i:i,j:a},void 0!==(null===(r=A.globals.seriesRange)||void 0===r||null===(n=r[i])||void 0===n||null===(o=n[a])||void 0===o||null===(l=o.y[0])||void 0===l?void 0:l.y1)&&{y1:null===(h=A.globals.seriesRange)||void 0===h||null===(c=h[i])||void 0===c||null===(d=c[a])||void 0===d||null===(g=d.y[0])||void 0===g?void 0:g.y1}),void 0!==(null===(p=A.globals.seriesRange)||void 0===p||null===(f=p[i])||void 0===f||null===(x=f[a])||void 0===x||null===(b=x.y[0])||void 0===b?void 0:b.y2)&&{y2:null===(m=A.globals.seriesRange)||void 0===m||null===(v=m[i])||void 0===v||null===(y=v[a])||void 0===y||null===(w=y.y[0])||void 0===w?void 0:w.y2});if(k){if(C.tooltipLabels.drawSeriesTexts(u(u({},E),{},{shared:!this.showOnIntersect&&this.tConfig.shared})),S)A.globals.markers.largestSize>0?C.marker.enlargePoints(a):C.tooltipPosition.moveDynamicPointsOnHover(a);else if(this.tooltipUtil.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(L),this.barSeriesHeight>0)){var Y=new Mi(this.ctx),H=A.globals.dom.Paper.find(".apexcharts-bar-area[j='".concat(a,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(a,i);for(var O=0;O<H.length;O++)Y.pathMouseEnter(H[O])}}else C.tooltipLabels.drawSeriesTexts(u({shared:!1},E)),this.tooltipUtil.hasBars()&&C.tooltipPosition.moveStickyTooltipOverBars(a,i),S&&C.tooltipPosition.moveMarkers(i,a)}}]),t}(),La=function(){function t(e){i(this,t),this.w=e.w,this.barCtx=e,this.totalFormatter=this.w.config.plotOptions.bar.dataLabels.total.formatter,this.totalFormatter||(this.totalFormatter=this.w.config.dataLabels.formatter)}return s(t,[{key:"handleBarDataLabels",value:function(t){var e,i,a=t.x,s=t.y,r=t.y1,n=t.y2,o=t.i,l=t.j,h=t.realIndex,c=t.columnGroupIndex,d=t.series,g=t.barHeight,p=t.barWidth,f=t.barXPosition,x=t.barYPosition,b=t.visibleSeries,m=t.renderedPath,v=this.w,y=new Mi(this.barCtx.ctx),w=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[h]:this.barCtx.strokeWidth;v.globals.isXNumeric&&!v.globals.isBarHorizontal?(e=a+parseFloat(p*(b+1)),i=s+parseFloat(g*(b+1))-w):(e=a+parseFloat(p*b),i=s+parseFloat(g*b));var k,A=null,C=a,S=s,L={},M=v.config.dataLabels,P=this.barCtx.barOptions.dataLabels,I=this.barCtx.barOptions.dataLabels.total;void 0!==x&&this.barCtx.isRangeBar&&(i=x,S=x),void 0!==f&&this.barCtx.isVerticalGroupedRangeBar&&(e=f,C=f);var T=M.offsetX,z=M.offsetY,X={width:0,height:0};if(v.config.dataLabels.enabled){var R=v.globals.series[o][l];X=y.getTextRects(v.config.dataLabels.formatter?v.config.dataLabels.formatter(R,u(u({},v),{},{seriesIndex:o,dataPointIndex:l,w:v})):v.globals.yLabelFormatters[0](R),parseFloat(M.style.fontSize))}var E={x:a,y:s,i:o,j:l,realIndex:h,columnGroupIndex:c,renderedPath:m,bcx:e,bcy:i,barHeight:g,barWidth:p,textRects:X,strokeWidth:w,dataLabelsX:C,dataLabelsY:S,dataLabelsConfig:M,barDataLabelsConfig:P,barTotalDataLabelsConfig:I,offX:T,offY:z};return L=this.barCtx.isHorizontal?this.calculateBarsDataLabelsPosition(E):this.calculateColumnsDataLabelsPosition(E),m.attr({cy:L.bcy,cx:L.bcx,j:l,val:v.globals.series[o][l],barHeight:g,barWidth:p}),k=this.drawCalculatedDataLabels({x:L.dataLabelsX,y:L.dataLabelsY,val:this.barCtx.isRangeBar?[r,n]:"100%"===v.config.chart.stackType?d[h][l]:v.globals.series[h][l],i:h,j:l,barWidth:p,barHeight:g,textRects:X,dataLabelsConfig:M}),v.config.chart.stacked&&I.enabled&&(A=this.drawTotalDataLabels({x:L.totalDataLabelsX,y:L.totalDataLabelsY,barWidth:p,barHeight:g,realIndex:h,textAnchor:L.totalDataLabelsAnchor,val:this.getStackedTotalDataLabel({realIndex:h,j:l}),dataLabelsConfig:M,barTotalDataLabelsConfig:I})),{dataLabels:k,totalDataLabels:A}}},{key:"getStackedTotalDataLabel",value:function(t){var e=t.realIndex,i=t.j,a=this.w,s=this.barCtx.stackedSeriesTotals[i];return this.totalFormatter&&(s=this.totalFormatter(s,u(u({},a),{},{seriesIndex:e,dataPointIndex:i,w:a}))),s}},{key:"calculateColumnsDataLabelsPosition",value:function(t){var e=this.w,i=t.i,a=t.j,s=t.realIndex;t.columnGroupIndex;var r,n,o=t.y,l=t.bcx,h=t.barWidth,c=t.barHeight,d=t.textRects,u=t.dataLabelsX,g=t.dataLabelsY,p=t.dataLabelsConfig,f=t.barDataLabelsConfig,x=t.barTotalDataLabelsConfig,b=t.strokeWidth,m=t.offX,v=t.offY,y=l;c=Math.abs(c);var w="vertical"===e.config.plotOptions.bar.dataLabels.orientation,k=this.barCtx.barHelpers.getZeroValueEncounters({i:i,j:a}).zeroEncounters;l-=b/2;var A=e.globals.gridWidth/e.globals.dataPoints;if(this.barCtx.isVerticalGroupedRangeBar?u+=h/2:(u=e.globals.isXNumeric?l-h/2+m:l-A+h/2+m,k>0&&e.config.plotOptions.bar.hideZeroBarsWhenGrouped&&(u-=h*k)),w){u=u+d.height/2-b/2-2}var C=e.globals.series[i][a]<0,S=o;switch(this.barCtx.isReversed&&(S=o+(C?c:-c)),f.position){case"center":g=w?C?S-c/2+v:S+c/2-v:C?S-c/2+d.height/2+v:S+c/2+d.height/2-v;break;case"bottom":g=w?C?S-c+v:S+c-v:C?S-c+d.height+b+v:S+c-d.height/2+b-v;break;case"top":g=w?C?S+v:S-v:C?S-d.height/2-v:S+d.height+v}if(this.barCtx.lastActiveBarSerieIndex===s&&x.enabled){var L=new Mi(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({realIndex:s,j:a}),p.fontSize);r=C?S-L.height/2-v-x.offsetY+18:S+L.height+v+x.offsetY-18;var M=A;n=y+(e.globals.isXNumeric?-h*e.globals.barGroups.length/2:e.globals.barGroups.length*h/2-(e.globals.barGroups.length-1)*h-M)+x.offsetX}return e.config.chart.stacked||(g<0?g=0+b:g+d.height/3>e.globals.gridHeight&&(g=e.globals.gridHeight-b)),{bcx:l,bcy:o,dataLabelsX:u,dataLabelsY:g,totalDataLabelsX:n,totalDataLabelsY:r,totalDataLabelsAnchor:"middle"}}},{key:"calculateBarsDataLabelsPosition",value:function(t){var e=this.w,i=t.x,a=t.i,s=t.j,r=t.realIndex,n=t.bcy,o=t.barHeight,l=t.barWidth,h=t.textRects,c=t.dataLabelsX,d=t.strokeWidth,u=t.dataLabelsConfig,g=t.barDataLabelsConfig,p=t.barTotalDataLabelsConfig,f=t.offX,x=t.offY,b=e.globals.gridHeight/e.globals.dataPoints;l=Math.abs(l);var m,v,y=n-(this.barCtx.isRangeBar?0:b)+o/2+h.height/2+x-3,w="start",k=e.globals.series[a][s]<0,A=i;switch(this.barCtx.isReversed&&(A=i+(k?-l:l),w=k?"start":"end"),g.position){case"center":c=k?A+l/2-f:Math.max(h.width/2,A-l/2)+f;break;case"bottom":c=k?A+l-d-f:A-l+d+f;break;case"top":c=k?A-d-f:A-d+f}if(this.barCtx.lastActiveBarSerieIndex===r&&p.enabled){var C=new Mi(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({realIndex:r,j:s}),u.fontSize);k?(m=A-d-f-p.offsetX,w="end"):m=A+f+p.offsetX+(this.barCtx.isReversed?-(l+d):d),v=y-h.height/2+C.height/2+p.offsetY+d}return e.config.chart.stacked||("start"===u.textAnchor?c-h.width<0?c=k?h.width+d:d:c+h.width>e.globals.gridWidth&&(c=k?e.globals.gridWidth-d:e.globals.gridWidth-h.width-d):"middle"===u.textAnchor?c-h.width/2<0?c=h.width/2+d:c+h.width/2>e.globals.gridWidth&&(c=e.globals.gridWidth-h.width/2-d):"end"===u.textAnchor&&(c<1?c=h.width+d:c+1>e.globals.gridWidth&&(c=e.globals.gridWidth-h.width-d))),{bcx:i,bcy:n,dataLabelsX:c,dataLabelsY:y,totalDataLabelsX:m,totalDataLabelsY:v,totalDataLabelsAnchor:w}}},{key:"drawCalculatedDataLabels",value:function(t){var e=t.x,i=t.y,a=t.val,s=t.i,r=t.j,n=t.textRects,o=t.barHeight,l=t.barWidth,h=t.dataLabelsConfig,c=this.w,d="rotate(0)";"vertical"===c.config.plotOptions.bar.dataLabels.orientation&&(d="rotate(-90, ".concat(e,", ").concat(i,")"));var g=new qi(this.barCtx.ctx),p=new Mi(this.barCtx.ctx),f=h.formatter,x=null,b=c.globals.collapsedSeriesIndices.indexOf(s)>-1;if(h.enabled&&!b){x=p.group({class:"apexcharts-data-labels",transform:d});var m="";void 0!==a&&(m=f(a,u(u({},c),{},{seriesIndex:s,dataPointIndex:r,w:c}))),!a&&c.config.plotOptions.bar.hideZeroBarsWhenGrouped&&(m="");var v=c.globals.series[s][r]<0,y=c.config.plotOptions.bar.dataLabels.position;if("vertical"===c.config.plotOptions.bar.dataLabels.orientation&&("top"===y&&(h.textAnchor=v?"end":"start"),"center"===y&&(h.textAnchor="middle"),"bottom"===y&&(h.textAnchor=v?"end":"start")),this.barCtx.isRangeBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels)l<p.getTextRects(m,parseFloat(h.style.fontSize)).width&&(m="");c.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&(this.barCtx.isHorizontal?n.width/1.6>Math.abs(l)&&(m=""):n.height/1.6>Math.abs(o)&&(m=""));var w=u({},h);this.barCtx.isHorizontal&&a<0&&("start"===h.textAnchor?w.textAnchor="end":"end"===h.textAnchor&&(w.textAnchor="start")),g.plotDataLabelsText({x:e,y:i,text:m,i:s,j:r,parent:x,dataLabelsConfig:w,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return x}},{key:"drawTotalDataLabels",value:function(t){var e=t.x,i=t.y,a=t.val,s=t.realIndex,r=t.textAnchor,n=t.barTotalDataLabelsConfig;this.w;var o,l=new Mi(this.barCtx.ctx);return n.enabled&&void 0!==e&&void 0!==i&&this.barCtx.lastActiveBarSerieIndex===s&&(o=l.drawText({x:e,y:i,foreColor:n.style.color,text:a,textAnchor:r,fontFamily:n.style.fontFamily,fontSize:n.style.fontSize,fontWeight:n.style.fontWeight})),o}}]),t}(),Ma=function(){function t(e){i(this,t),this.w=e.w,this.barCtx=e}return s(t,[{key:"initVariables",value:function(t){var e=this.w;this.barCtx.series=t,this.barCtx.totalItems=0,this.barCtx.seriesLen=0,this.barCtx.visibleI=-1,this.barCtx.visibleItems=1;for(var i=0;i<t.length;i++)if(t[i].length>0&&(this.barCtx.seriesLen=this.barCtx.seriesLen+1,this.barCtx.totalItems+=t[i].length),e.globals.isXNumeric)for(var a=0;a<t[i].length;a++)e.globals.seriesX[i][a]>e.globals.minX&&e.globals.seriesX[i][a]<e.globals.maxX&&this.barCtx.visibleItems++;else this.barCtx.visibleItems=e.globals.dataPoints;this.arrBorderRadius=this.createBorderRadiusArr(e.globals.series),0===this.barCtx.seriesLen&&(this.barCtx.seriesLen=1),this.barCtx.zeroSerieses=[],e.globals.comboCharts||this.checkZeroSeries({series:t})}},{key:"initialPositions",value:function(){var t,e,i,a,s,r,n,o,l=this.w,h=l.globals.dataPoints;this.barCtx.isRangeBar&&(h=l.globals.labels.length);var c=this.barCtx.seriesLen;if(l.config.plotOptions.bar.rangeBarGroupRows&&(c=1),this.barCtx.isHorizontal)s=(i=l.globals.gridHeight/h)/c,l.globals.isXNumeric&&(s=(i=l.globals.gridHeight/this.barCtx.totalItems)/this.barCtx.seriesLen),s=s*parseInt(this.barCtx.barOptions.barHeight,10)/100,-1===String(this.barCtx.barOptions.barHeight).indexOf("%")&&(s=parseInt(this.barCtx.barOptions.barHeight,10)),o=this.barCtx.baseLineInvertedY+l.globals.padHorizontal+(this.barCtx.isReversed?l.globals.gridWidth:0)-(this.barCtx.isReversed?2*this.barCtx.baseLineInvertedY:0),this.barCtx.isFunnel&&(o=l.globals.gridWidth/2),e=(i-s*this.barCtx.seriesLen)/2;else{if(a=l.globals.gridWidth/this.barCtx.visibleItems,l.config.xaxis.convertedCatToNumeric&&(a=l.globals.gridWidth/l.globals.dataPoints),r=a/c*parseInt(this.barCtx.barOptions.columnWidth,10)/100,l.globals.isXNumeric){var d=this.barCtx.xRatio;l.globals.minXDiff&&.5!==l.globals.minXDiff&&l.globals.minXDiff/d>0&&(a=l.globals.minXDiff/d),(r=a/c*parseInt(this.barCtx.barOptions.columnWidth,10)/100)<1&&(r=1)}-1===String(this.barCtx.barOptions.columnWidth).indexOf("%")&&(r=parseInt(this.barCtx.barOptions.columnWidth,10)),n=l.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.translationsIndex]-(this.barCtx.isReversed?l.globals.gridHeight:0)+(this.barCtx.isReversed?2*this.barCtx.baseLineY[this.barCtx.translationsIndex]:0),t=l.globals.padHorizontal+(a-r*this.barCtx.seriesLen)/2}return l.globals.barHeight=s,l.globals.barWidth=r,{x:t,y:e,yDivision:i,xDivision:a,barHeight:s,barWidth:r,zeroH:n,zeroW:o}}},{key:"initializeStackedPrevVars",value:function(t){t.w.globals.seriesGroups.forEach((function(e){t[e]||(t[e]={}),t[e].prevY=[],t[e].prevX=[],t[e].prevYF=[],t[e].prevXF=[],t[e].prevYVal=[],t[e].prevXVal=[]}))}},{key:"initializeStackedXYVars",value:function(t){t.w.globals.seriesGroups.forEach((function(e){t[e]||(t[e]={}),t[e].xArrj=[],t[e].xArrjF=[],t[e].xArrjVal=[],t[e].yArrj=[],t[e].yArrjF=[],t[e].yArrjVal=[]}))}},{key:"getPathFillColor",value:function(t,e,i,a){var s,r,n,o,l=this.w,h=this.barCtx.ctx.fill,c=null,d=this.barCtx.barOptions.distributed?i:e;this.barCtx.barOptions.colors.ranges.length>0&&this.barCtx.barOptions.colors.ranges.map((function(a){t[e][i]>=a.from&&t[e][i]<=a.to&&(c=a.color)}));return h.fillPath({seriesNumber:this.barCtx.barOptions.distributed?d:a,dataPointIndex:i,color:c,value:t[e][i],fillConfig:null===(s=l.config.series[e].data[i])||void 0===s?void 0:s.fill,fillType:null!==(r=l.config.series[e].data[i])&&void 0!==r&&null!==(n=r.fill)&&void 0!==n&&n.type?null===(o=l.config.series[e].data[i])||void 0===o?void 0:o.fill.type:Array.isArray(l.config.fill.type)?l.config.fill.type[a]:l.config.fill.type})}},{key:"getStrokeWidth",value:function(t,e,i){var a=0,s=this.w;return this.barCtx.series[t][e]?this.barCtx.isNullValue=!1:this.barCtx.isNullValue=!0,s.config.stroke.show&&(this.barCtx.isNullValue||(a=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[i]:this.barCtx.strokeWidth)),a}},{key:"createBorderRadiusArr",value:function(t){var e,i=this.w,a=!this.w.config.chart.stacked||i.config.plotOptions.bar.borderRadius<=0,s=t.length,n=0|(null===(e=t[0])||void 0===e?void 0:e.length),o=Array.from({length:s},(function(){return Array(n).fill(a?"top":"none")}));if(a)return o;for(var l=0;l<n;l++){for(var h=[],c=[],d=0,u=0;u<s;u++){var g=t[u][l];g>0?(h.push(u),d++):g<0&&(c.push(u),d++)}if(h.length>0&&0===c.length)if(1===h.length)o[h[0]][l]="both";else{var p,f=h[0],x=h[h.length-1],b=r(h);try{for(b.s();!(p=b.n()).done;){var m=p.value;o[m][l]=m===f?"bottom":m===x?"top":"none"}}catch(t){b.e(t)}finally{b.f()}}else if(c.length>0&&0===h.length)if(1===c.length)o[c[0]][l]="both";else{var v,y=Math.max.apply(Math,c),w=Math.min.apply(Math,c),k=r(c);try{for(k.s();!(v=k.n()).done;){var A=v.value;o[A][l]=A===y?"bottom":A===w?"top":"none"}}catch(t){k.e(t)}finally{k.f()}}else if(h.length>0&&c.length>0){var C,S=h[h.length-1],L=r(h);try{for(L.s();!(C=L.n()).done;){var M=C.value;o[M][l]=M===S?"top":"none"}}catch(t){L.e(t)}finally{L.f()}var P,I=Math.max.apply(Math,c),T=r(c);try{for(T.s();!(P=T.n()).done;){var z=P.value;o[z][l]=z===I?"bottom":"none"}}catch(t){T.e(t)}finally{T.f()}}else if(1===d){o[h[0]||c[0]][l]="both"}}return o}},{key:"barBackground",value:function(t){var e=t.j,i=t.i,a=t.x1,s=t.x2,r=t.y1,n=t.y2,o=t.elSeries,l=this.w,h=new Mi(this.barCtx.ctx),c=new Zi(this.barCtx.ctx).getActiveConfigSeriesIndex();if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&c===i){e>=this.barCtx.barOptions.colors.backgroundBarColors.length&&(e%=this.barCtx.barOptions.colors.backgroundBarColors.length);var d=this.barCtx.barOptions.colors.backgroundBarColors[e],u=h.drawRect(void 0!==a?a:0,void 0!==r?r:0,void 0!==s?s:l.globals.gridWidth,void 0!==n?n:l.globals.gridHeight,this.barCtx.barOptions.colors.backgroundBarRadius,d,this.barCtx.barOptions.colors.backgroundBarOpacity);o.add(u),u.node.classList.add("apexcharts-backgroundBar")}}},{key:"getColumnPaths",value:function(t){var e,i=t.barWidth,a=t.barXPosition,s=t.y1,r=t.y2,n=t.strokeWidth,o=t.isReversed,l=t.series,h=t.seriesGroup,c=t.realIndex,d=t.i,u=t.j,g=t.w,p=new Mi(this.barCtx.ctx);(n=Array.isArray(n)?n[c]:n)||(n=0);var f=i,x=a;null!==(e=g.config.series[c].data[u])&&void 0!==e&&e.columnWidthOffset&&(x=a-g.config.series[c].data[u].columnWidthOffset/2,f=i+g.config.series[c].data[u].columnWidthOffset);var b=n/2,m=x+b,v=x+f-b,y=(l[d][u]>=0?1:-1)*(o?-1:1);s+=.001-b*y,r+=.001+b*y;var w=p.move(m,s),k=p.move(m,s),A=p.line(v,s);if(g.globals.previousPaths.length>0&&(k=this.barCtx.getPreviousPath(c,u,!1)),w=w+p.line(m,r)+p.line(v,r)+A+("around"===g.config.plotOptions.bar.borderRadiusApplication||"both"===this.arrBorderRadius[c][u]?" Z":" z"),k=k+p.line(m,s)+A+A+A+A+A+p.line(m,s)+("around"===g.config.plotOptions.bar.borderRadiusApplication||"both"===this.arrBorderRadius[c][u]?" Z":" z"),"none"!==this.arrBorderRadius[c][u]&&(w=p.roundPathCorners(w,g.config.plotOptions.bar.borderRadius)),g.config.chart.stacked){var C=this.barCtx;(C=this.barCtx[h]).yArrj.push(r-b*y),C.yArrjF.push(Math.abs(s-r+n*y)),C.yArrjVal.push(this.barCtx.series[d][u])}return{pathTo:w,pathFrom:k}}},{key:"getBarpaths",value:function(t){var e,i=t.barYPosition,a=t.barHeight,s=t.x1,r=t.x2,n=t.strokeWidth,o=t.isReversed,l=t.series,h=t.seriesGroup,c=t.realIndex,d=t.i,u=t.j,g=t.w,p=new Mi(this.barCtx.ctx);(n=Array.isArray(n)?n[c]:n)||(n=0);var f=i,x=a;null!==(e=g.config.series[c].data[u])&&void 0!==e&&e.barHeightOffset&&(f=i-g.config.series[c].data[u].barHeightOffset/2,x=a+g.config.series[c].data[u].barHeightOffset);var b=n/2,m=f+b,v=f+x-b,y=(l[d][u]>=0?1:-1)*(o?-1:1);s+=.001+b*y,r+=.001-b*y;var w=p.move(s,m),k=p.move(s,m);g.globals.previousPaths.length>0&&(k=this.barCtx.getPreviousPath(c,u,!1));var A=p.line(s,v);if(w=w+p.line(r,m)+p.line(r,v)+A+("around"===g.config.plotOptions.bar.borderRadiusApplication||"both"===this.arrBorderRadius[c][u]?" Z":" z"),k=k+p.line(s,m)+A+A+A+A+A+p.line(s,m)+("around"===g.config.plotOptions.bar.borderRadiusApplication||"both"===this.arrBorderRadius[c][u]?" Z":" z"),"none"!==this.arrBorderRadius[c][u]&&(w=p.roundPathCorners(w,g.config.plotOptions.bar.borderRadius)),g.config.chart.stacked){var C=this.barCtx;(C=this.barCtx[h]).xArrj.push(r+b*y),C.xArrjF.push(Math.abs(s-r-n*y)),C.xArrjVal.push(this.barCtx.series[d][u])}return{pathTo:w,pathFrom:k}}},{key:"checkZeroSeries",value:function(t){for(var e=t.series,i=this.w,a=0;a<e.length;a++){for(var s=0,r=0;r<e[i.globals.maxValsInArrayIndex].length;r++)s+=e[a][r];0===s&&this.barCtx.zeroSerieses.push(a)}}},{key:"getXForValue",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?e:null;return null!=t&&(i=e+t/this.barCtx.invertedYRatio-2*(this.barCtx.isReversed?t/this.barCtx.invertedYRatio:0)),i}},{key:"getYForValue",value:function(t,e,i){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3]?e:null;return null!=t&&(a=e-t/this.barCtx.yRatio[i]+2*(this.barCtx.isReversed?t/this.barCtx.yRatio[i]:0)),a}},{key:"getGoalValues",value:function(t,e,i,a,s,r){var n=this,l=this.w,h=[],c=function(a,s){var l;h.push((o(l={},t,"x"===t?n.getXForValue(a,e,!1):n.getYForValue(a,i,r,!1)),o(l,"attrs",s),l))};if(l.globals.seriesGoals[a]&&l.globals.seriesGoals[a][s]&&Array.isArray(l.globals.seriesGoals[a][s])&&l.globals.seriesGoals[a][s].forEach((function(t){c(t.value,t)})),this.barCtx.barOptions.isDumbbell&&l.globals.seriesRange.length){var d=this.barCtx.barOptions.dumbbellColors?this.barCtx.barOptions.dumbbellColors:l.globals.colors,g={strokeHeight:"x"===t?0:l.globals.markers.size[a],strokeWidth:"x"===t?l.globals.markers.size[a]:0,strokeDashArray:0,strokeLineCap:"round",strokeColor:Array.isArray(d[a])?d[a][0]:d[a]};c(l.globals.seriesRangeStart[a][s],g),c(l.globals.seriesRangeEnd[a][s],u(u({},g),{},{strokeColor:Array.isArray(d[a])?d[a][1]:d[a]}))}return h}},{key:"drawGoalLine",value:function(t){var e=t.barXPosition,i=t.barYPosition,a=t.goalX,s=t.goalY,r=t.barWidth,n=t.barHeight,o=new Mi(this.barCtx.ctx),l=o.group({className:"apexcharts-bar-goals-groups"});l.node.classList.add("apexcharts-element-hidden"),this.barCtx.w.globals.delayedElements.push({el:l.node}),l.attr("clip-path","url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid,")"));var h=null;return this.barCtx.isHorizontal?Array.isArray(a)&&a.forEach((function(t){if(t.x>=-1&&t.x<=o.w.globals.gridWidth+1){var e=void 0!==t.attrs.strokeHeight?t.attrs.strokeHeight:n/2,a=i+e+n/2;h=o.drawLine(t.x,a-2*e,t.x,a,t.attrs.strokeColor?t.attrs.strokeColor:void 0,t.attrs.strokeDashArray,t.attrs.strokeWidth?t.attrs.strokeWidth:2,t.attrs.strokeLineCap),l.add(h)}})):Array.isArray(s)&&s.forEach((function(t){if(t.y>=-1&&t.y<=o.w.globals.gridHeight+1){var i=void 0!==t.attrs.strokeWidth?t.attrs.strokeWidth:r/2,a=e+i+r/2;h=o.drawLine(a-2*i,t.y,a,t.y,t.attrs.strokeColor?t.attrs.strokeColor:void 0,t.attrs.strokeDashArray,t.attrs.strokeHeight?t.attrs.strokeHeight:2,t.attrs.strokeLineCap),l.add(h)}})),l}},{key:"drawBarShadow",value:function(t){var e=t.prevPaths,i=t.currPaths,a=t.color,s=this.w,r=e.x,n=e.x1,o=e.barYPosition,l=i.x,h=i.x1,c=i.barYPosition,d=o+i.barHeight,u=new Mi(this.barCtx.ctx),g=new v,p=u.move(n,d)+u.line(r,d)+u.line(l,c)+u.line(h,c)+u.line(n,d)+("around"===s.config.plotOptions.bar.borderRadiusApplication||"both"===this.arrBorderRadius[realIndex][j]?" Z":" z");return u.drawPath({d:p,fill:g.shadeColor(.5,v.rgb2hex(a)),stroke:"none",strokeWidth:0,fillOpacity:1,classes:"apexcharts-bar-shadow apexcharts-decoration-element"})}},{key:"getZeroValueEncounters",value:function(t){var e,i=t.i,a=t.j,s=this.w,r=0,n=0;return(s.config.plotOptions.bar.horizontal?s.globals.series.map((function(t,e){return e})):(null===(e=s.globals.columnSeries)||void 0===e?void 0:e.i.map((function(t){return t})))||[]).forEach((function(t){var e=s.globals.seriesPercent[t][a];e&&r++,t<i&&0===e&&n++})),{nonZeroColumns:r,zeroEncounters:n}}},{key:"getGroupIndex",value:function(t){var e=this.w,i=e.globals.seriesGroups.findIndex((function(i){return i.indexOf(e.globals.seriesNames[t])>-1})),a=this.barCtx.columnGroupIndices,s=a.indexOf(i);return s<0&&(a.push(i),s=a.length-1),{groupIndex:i,columnGroupIndex:s}}}]),t}(),Pa=function(){function t(e,a){i(this,t),this.ctx=e,this.w=e.w;var s=this.w;this.barOptions=s.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=s.config.stroke.width,this.isNullValue=!1,this.isRangeBar=s.globals.seriesRange.length&&this.isHorizontal,this.isVerticalGroupedRangeBar=!s.globals.isBarHorizontal&&s.globals.seriesRange.length&&s.config.plotOptions.bar.rangeBarGroupRows,this.isFunnel=this.barOptions.isFunnel,this.xyRatios=a,null!==this.xyRatios&&(this.xRatio=a.xRatio,this.yRatio=a.yRatio,this.invertedXRatio=a.invertedXRatio,this.invertedYRatio=a.invertedYRatio,this.baseLineY=a.baseLineY,this.baseLineInvertedY=a.baseLineInvertedY),this.yaxisIndex=0,this.translationsIndex=0,this.seriesLen=0,this.pathArr=[];var r=new Zi(this.ctx);this.lastActiveBarSerieIndex=r.getActiveConfigSeriesIndex("desc",["bar","column"]),this.columnGroupIndices=[];var n=r.getBarSeriesIndices(),o=new Pi(this.ctx);this.stackedSeriesTotals=o.getStackedSeriesTotals(this.w.config.series.map((function(t,e){return-1===n.indexOf(e)?e:-1})).filter((function(t){return-1!==t}))),this.barHelpers=new Ma(this)}return s(t,[{key:"draw",value:function(t,e){var i=this.w,a=new Mi(this.ctx),s=new Pi(this.ctx,i);t=s.getLogSeries(t),this.series=t,this.yRatio=s.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);var r=a.group({class:"apexcharts-bar-series apexcharts-plot-series"});i.config.dataLabels.enabled&&this.totalItems>this.barOptions.dataLabels.maxItems&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");for(var n=0,o=0;n<t.length;n++,o++){var l,h,c,d,g=void 0,p=void 0,f=[],x=[],b=i.globals.comboCharts?e[n]:n,m=this.barHelpers.getGroupIndex(b).columnGroupIndex,y=a.group({class:"apexcharts-series",rel:n+1,seriesName:v.escapeString(i.globals.seriesNames[b]),"data:realIndex":b});this.ctx.series.addCollapsedClassToSeries(y,b),t[n].length>0&&(this.visibleI=this.visibleI+1);var w=0,k=0;this.yRatio.length>1&&(this.yaxisIndex=i.globals.seriesYAxisReverseMap[b],this.translationsIndex=b);var A=this.translationsIndex;this.isReversed=i.config.yaxis[this.yaxisIndex]&&i.config.yaxis[this.yaxisIndex].reversed;var C=this.barHelpers.initialPositions();p=C.y,w=C.barHeight,h=C.yDivision,d=C.zeroW,g=C.x,k=C.barWidth,l=C.xDivision,c=C.zeroH,this.isHorizontal||x.push(g+k/2);var S=a.group({class:"apexcharts-datalabels","data:realIndex":b});i.globals.delayedElements.push({el:S.node}),S.node.classList.add("apexcharts-element-hidden");var L=a.group({class:"apexcharts-bar-goals-markers"}),M=a.group({class:"apexcharts-bar-shadows"});i.globals.delayedElements.push({el:M.node}),M.node.classList.add("apexcharts-element-hidden");for(var P=0;P<t[n].length;P++){var I=this.barHelpers.getStrokeWidth(n,P,b),T=null,z={indexes:{i:n,j:P,realIndex:b,translationsIndex:A,bc:o},x:g,y:p,strokeWidth:I,elSeries:y};this.isHorizontal?(T=this.drawBarPaths(u(u({},z),{},{barHeight:w,zeroW:d,yDivision:h})),k=this.series[n][P]/this.invertedYRatio):(T=this.drawColumnPaths(u(u({},z),{},{xDivision:l,barWidth:k,zeroH:c})),w=this.series[n][P]/this.yRatio[A]);var X=this.barHelpers.getPathFillColor(t,n,P,b);if(this.isFunnel&&this.barOptions.isFunnel3d&&this.pathArr.length&&P>0){var R=this.barHelpers.drawBarShadow({color:"string"==typeof X&&-1===(null==X?void 0:X.indexOf("url"))?X:v.hexToRgba(i.globals.colors[n]),prevPaths:this.pathArr[this.pathArr.length-1],currPaths:T});if(M.add(R),i.config.chart.dropShadow.enabled)new Li(this.ctx).dropShadow(R,i.config.chart.dropShadow,b)}this.pathArr.push(T);var E=this.barHelpers.drawGoalLine({barXPosition:T.barXPosition,barYPosition:T.barYPosition,goalX:T.goalX,goalY:T.goalY,barHeight:w,barWidth:k});E&&L.add(E),p=T.y,g=T.x,P>0&&x.push(g+k/2),f.push(p),this.renderSeries({realIndex:b,pathFill:X,j:P,i:n,columnGroupIndex:m,pathFrom:T.pathFrom,pathTo:T.pathTo,strokeWidth:I,elSeries:y,x:g,y:p,series:t,barHeight:Math.abs(T.barHeight?T.barHeight:w),barWidth:Math.abs(T.barWidth?T.barWidth:k),elDataLabelsWrap:S,elGoalsMarkers:L,elBarShadows:M,visibleSeries:this.visibleI,type:"bar"})}i.globals.seriesXvalues[b]=x,i.globals.seriesYvalues[b]=f,r.add(y)}return r}},{key:"renderSeries",value:function(t){var e=t.realIndex,i=t.pathFill,a=t.lineFill,s=t.j,r=t.i,n=t.columnGroupIndex,o=t.pathFrom,l=t.pathTo,h=t.strokeWidth,c=t.elSeries,d=t.x,u=t.y,g=t.y1,p=t.y2,f=t.series,x=t.barHeight,b=t.barWidth,m=t.barXPosition,v=t.barYPosition,y=t.elDataLabelsWrap,w=t.elGoalsMarkers,k=t.elBarShadows,A=t.visibleSeries,C=t.type,S=t.classes,L=this.w,M=new Mi(this.ctx);if(!a){var P="function"==typeof L.globals.stroke.colors[e]?function(t){var e,i=L.config.stroke.colors;return Array.isArray(i)&&i.length>0&&((e=i[t])||(e=""),"function"==typeof e)?e({value:L.globals.series[t][s],dataPointIndex:s,w:L}):e}(e):L.globals.stroke.colors[e];a=this.barOptions.distributed?L.globals.stroke.colors[s]:P}L.config.series[r].data[s]&&L.config.series[r].data[s].strokeColor&&(a=L.config.series[r].data[s].strokeColor),this.isNullValue&&(i="none");var I=s/L.config.chart.animations.animateGradually.delay*(L.config.chart.animations.speed/L.globals.dataPoints)/2.4,T=M.renderPaths({i:r,j:s,realIndex:e,pathFrom:o,pathTo:l,stroke:a,strokeWidth:h,strokeLineCap:L.config.stroke.lineCap,fill:i,animationDelay:I,initialSpeed:L.config.chart.animations.speed,dataChangeSpeed:L.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(C,"-area ").concat(S),chartType:C});T.attr("clip-path","url(#gridRectBarMask".concat(L.globals.cuid,")"));var z=L.config.forecastDataPoints;z.count>0&&s>=L.globals.dataPoints-z.count&&(T.node.setAttribute("stroke-dasharray",z.dashArray),T.node.setAttribute("stroke-width",z.strokeWidth),T.node.setAttribute("fill-opacity",z.fillOpacity)),void 0!==g&&void 0!==p&&(T.attr("data-range-y1",g),T.attr("data-range-y2",p)),new Li(this.ctx).setSelectionFilter(T,e,s),c.add(T);var X=new La(this).handleBarDataLabels({x:d,y:u,y1:g,y2:p,i:r,j:s,series:f,realIndex:e,columnGroupIndex:n,barHeight:x,barWidth:b,barXPosition:m,barYPosition:v,renderedPath:T,visibleSeries:A});return null!==X.dataLabels&&y.add(X.dataLabels),X.totalDataLabels&&y.add(X.totalDataLabels),c.add(y),w&&c.add(w),k&&c.add(k),c}},{key:"drawBarPaths",value:function(t){var e,i=t.indexes,a=t.barHeight,s=t.strokeWidth,r=t.zeroW,n=t.x,o=t.y,l=t.yDivision,h=t.elSeries,c=this.w,d=i.i,u=i.j;if(c.globals.isXNumeric)e=(o=(c.globals.seriesX[d][u]-c.globals.minX)/this.invertedXRatio-a)+a*this.visibleI;else if(c.config.plotOptions.bar.hideZeroBarsWhenGrouped){var g=0,p=0;c.globals.seriesPercent.forEach((function(t,e){t[u]&&g++,e<d&&0===t[u]&&p++})),g>0&&(a=this.seriesLen*a/g),e=o+a*this.visibleI,e-=a*p}else e=o+a*this.visibleI;this.isFunnel&&(r-=(this.barHelpers.getXForValue(this.series[d][u],r)-r)/2),n=this.barHelpers.getXForValue(this.series[d][u],r);var f=this.barHelpers.getBarpaths({barYPosition:e,barHeight:a,x1:r,x2:n,strokeWidth:s,isReversed:this.isReversed,series:this.series,realIndex:i.realIndex,i:d,j:u,w:c});return c.globals.isXNumeric||(o+=l),this.barHelpers.barBackground({j:u,i:d,y1:e-a*this.visibleI,y2:a*this.seriesLen,elSeries:h}),{pathTo:f.pathTo,pathFrom:f.pathFrom,x1:r,x:n,y:o,goalX:this.barHelpers.getGoalValues("x",r,null,d,u),barYPosition:e,barHeight:a}}},{key:"drawColumnPaths",value:function(t){var e,i=t.indexes,a=t.x,s=t.y,r=t.xDivision,n=t.barWidth,o=t.zeroH,l=t.strokeWidth,h=t.elSeries,c=this.w,d=i.realIndex,u=i.translationsIndex,g=i.i,p=i.j,f=i.bc;if(c.globals.isXNumeric){var x=this.getBarXForNumericXAxis({x:a,j:p,realIndex:d,barWidth:n});a=x.x,e=x.barXPosition}else if(c.config.plotOptions.bar.hideZeroBarsWhenGrouped){var b=this.barHelpers.getZeroValueEncounters({i:g,j:p}),m=b.nonZeroColumns,v=b.zeroEncounters;m>0&&(n=this.seriesLen*n/m),e=a+n*this.visibleI,e-=n*v}else e=a+n*this.visibleI;s=this.barHelpers.getYForValue(this.series[g][p],o,u);var y=this.barHelpers.getColumnPaths({barXPosition:e,barWidth:n,y1:o,y2:s,strokeWidth:l,isReversed:this.isReversed,series:this.series,realIndex:d,i:g,j:p,w:c});return c.globals.isXNumeric||(a+=r),this.barHelpers.barBackground({bc:f,j:p,i:g,x1:e-l/2-n*this.visibleI,x2:n*this.seriesLen+l/2,elSeries:h}),{pathTo:y.pathTo,pathFrom:y.pathFrom,x:a,y:s,goalY:this.barHelpers.getGoalValues("y",null,o,g,p,u),barXPosition:e,barWidth:n}}},{key:"getBarXForNumericXAxis",value:function(t){var e=t.x,i=t.barWidth,a=t.realIndex,s=t.j,r=this.w,n=a;return r.globals.seriesX[a].length||(n=r.globals.maxValsInArrayIndex),v.isNumber(r.globals.seriesX[n][s])&&(e=(r.globals.seriesX[n][s]-r.globals.minX)/this.xRatio-i*this.seriesLen/2),{barXPosition:e+i*this.visibleI,x:e}}},{key:"getPreviousPath",value:function(t,e){for(var i,a=this.w,s=0;s<a.globals.previousPaths.length;s++){var r=a.globals.previousPaths[s];r.paths&&r.paths.length>0&&parseInt(r.realIndex,10)===parseInt(t,10)&&void 0!==a.globals.previousPaths[s].paths[e]&&(i=a.globals.previousPaths[s].paths[e].d)}return i}}]),t}(),Ia=function(t){h(a,Pa);var e=n(a);function a(){return i(this,a),e.apply(this,arguments)}return s(a,[{key:"draw",value:function(t,e){var i=this,a=this.w;this.graphics=new Mi(this.ctx),this.bar=new Pa(this.ctx,this.xyRatios);var s=new Pi(this.ctx,a);t=s.getLogSeries(t),this.yRatio=s.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t),"100%"===a.config.chart.stackType&&(t=a.globals.comboCharts?e.map((function(t){return a.globals.seriesPercent[t]})):a.globals.seriesPercent.slice()),this.series=t,this.barHelpers.initializeStackedPrevVars(this);for(var r=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"}),n=0,o=0,l=function(s,l){var h=void 0,c=void 0,d=void 0,g=void 0,p=a.globals.comboCharts?e[s]:s,f=i.barHelpers.getGroupIndex(p),x=f.groupIndex,b=f.columnGroupIndex;i.groupCtx=i[a.globals.seriesGroups[x]];var m=[],y=[],w=0;i.yRatio.length>1&&(i.yaxisIndex=a.globals.seriesYAxisReverseMap[p][0],w=p),i.isReversed=a.config.yaxis[i.yaxisIndex]&&a.config.yaxis[i.yaxisIndex].reversed;var k=i.graphics.group({class:"apexcharts-series",seriesName:v.escapeString(a.globals.seriesNames[p]),rel:s+1,"data:realIndex":p});i.ctx.series.addCollapsedClassToSeries(k,p);var A=i.graphics.group({class:"apexcharts-datalabels","data:realIndex":p}),C=i.graphics.group({class:"apexcharts-bar-goals-markers"}),S=0,L=0,M=i.initialPositions(n,o,h,c,d,g,w);o=M.y,S=M.barHeight,c=M.yDivision,g=M.zeroW,n=M.x,L=M.barWidth,h=M.xDivision,d=M.zeroH,a.globals.barHeight=S,a.globals.barWidth=L,i.barHelpers.initializeStackedXYVars(i),1===i.groupCtx.prevY.length&&i.groupCtx.prevY[0].every((function(t){return isNaN(t)}))&&(i.groupCtx.prevY[0]=i.groupCtx.prevY[0].map((function(){return d})),i.groupCtx.prevYF[0]=i.groupCtx.prevYF[0].map((function(){return 0})));for(var P=0;P<a.globals.dataPoints;P++){var I=i.barHelpers.getStrokeWidth(s,P,p),T={indexes:{i:s,j:P,realIndex:p,translationsIndex:w,bc:l},strokeWidth:I,x:n,y:o,elSeries:k,columnGroupIndex:b,seriesGroup:a.globals.seriesGroups[x]},z=null;i.isHorizontal?(z=i.drawStackedBarPaths(u(u({},T),{},{zeroW:g,barHeight:S,yDivision:c})),L=i.series[s][P]/i.invertedYRatio):(z=i.drawStackedColumnPaths(u(u({},T),{},{xDivision:h,barWidth:L,zeroH:d})),S=i.series[s][P]/i.yRatio[w]);var X=i.barHelpers.drawGoalLine({barXPosition:z.barXPosition,barYPosition:z.barYPosition,goalX:z.goalX,goalY:z.goalY,barHeight:S,barWidth:L});X&&C.add(X),o=z.y,n=z.x,m.push(n),y.push(o);var R=i.barHelpers.getPathFillColor(t,s,P,p),E="",Y=a.globals.isBarHorizontal?"apexcharts-flip-x":"apexcharts-flip-y";("bottom"===i.barHelpers.arrBorderRadius[p][P]&&a.globals.series[p][P]>0||"top"===i.barHelpers.arrBorderRadius[p][P]&&a.globals.series[p][P]<0)&&(E=Y),k=i.renderSeries({realIndex:p,pathFill:R,j:P,i:s,columnGroupIndex:b,pathFrom:z.pathFrom,pathTo:z.pathTo,strokeWidth:I,elSeries:k,x:n,y:o,series:t,barHeight:S,barWidth:L,elDataLabelsWrap:A,elGoalsMarkers:C,type:"bar",visibleSeries:b,classes:E})}a.globals.seriesXvalues[p]=m,a.globals.seriesYvalues[p]=y,i.groupCtx.prevY.push(i.groupCtx.yArrj),i.groupCtx.prevYF.push(i.groupCtx.yArrjF),i.groupCtx.prevYVal.push(i.groupCtx.yArrjVal),i.groupCtx.prevX.push(i.groupCtx.xArrj),i.groupCtx.prevXF.push(i.groupCtx.xArrjF),i.groupCtx.prevXVal.push(i.groupCtx.xArrjVal),r.add(k)},h=0,c=0;h<t.length;h++,c++)l(h,c);return r}},{key:"initialPositions",value:function(t,e,i,a,s,r,n){var o,l,h=this.w;if(this.isHorizontal){a=h.globals.gridHeight/h.globals.dataPoints;var c=h.config.plotOptions.bar.barHeight;o=-1===String(c).indexOf("%")?parseInt(c,10):a*parseInt(c,10)/100,r=h.globals.padHorizontal+(this.isReversed?h.globals.gridWidth-this.baseLineInvertedY:this.baseLineInvertedY),e=(a-o)/2}else{l=i=h.globals.gridWidth/h.globals.dataPoints;var d=h.config.plotOptions.bar.columnWidth;h.globals.isXNumeric&&h.globals.dataPoints>1?l=(i=h.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth,10)/100:-1===String(d).indexOf("%")?l=parseInt(d,10):l*=parseInt(d,10)/100,s=this.isReversed?this.baseLineY[n]:h.globals.gridHeight-this.baseLineY[n],t=h.globals.padHorizontal+(i-l)/2}var u=h.globals.barGroups.length||1;return{x:t,y:e,yDivision:a,xDivision:i,barHeight:o/u,barWidth:l/u,zeroH:s,zeroW:r}}},{key:"drawStackedBarPaths",value:function(t){for(var e,i=t.indexes,a=t.barHeight,s=t.strokeWidth,r=t.zeroW,n=t.x,o=t.y,l=t.columnGroupIndex,h=t.seriesGroup,c=t.yDivision,d=t.elSeries,u=this.w,g=o+l*a,p=i.i,f=i.j,x=i.realIndex,b=i.translationsIndex,m=0,v=0;v<this.groupCtx.prevXF.length;v++)m+=this.groupCtx.prevXF[v][f];var y;if((y=h.indexOf(u.config.series[x].name))>0){var w=r;this.groupCtx.prevXVal[y-1][f]<0?w=this.series[p][f]>=0?this.groupCtx.prevX[y-1][f]+m-2*(this.isReversed?m:0):this.groupCtx.prevX[y-1][f]:this.groupCtx.prevXVal[y-1][f]>=0&&(w=this.series[p][f]>=0?this.groupCtx.prevX[y-1][f]:this.groupCtx.prevX[y-1][f]-m+2*(this.isReversed?m:0)),e=w}else e=r;n=null===this.series[p][f]?e:e+this.series[p][f]/this.invertedYRatio-2*(this.isReversed?this.series[p][f]/this.invertedYRatio:0);var k=this.barHelpers.getBarpaths({barYPosition:g,barHeight:a,x1:e,x2:n,strokeWidth:s,isReversed:this.isReversed,series:this.series,realIndex:i.realIndex,seriesGroup:h,i:p,j:f,w:u});return this.barHelpers.barBackground({j:f,i:p,y1:g,y2:a,elSeries:d}),o+=c,{pathTo:k.pathTo,pathFrom:k.pathFrom,goalX:this.barHelpers.getGoalValues("x",r,null,p,f,b),barXPosition:e,barYPosition:g,x:n,y:o}}},{key:"drawStackedColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.y,s=t.xDivision,r=t.barWidth,n=t.zeroH,o=t.columnGroupIndex,l=t.seriesGroup,h=t.elSeries,c=this.w,d=e.i,u=e.j,g=e.bc,p=e.realIndex,f=e.translationsIndex;if(c.globals.isXNumeric){var x=c.globals.seriesX[p][u];x||(x=0),i=(x-c.globals.minX)/this.xRatio-r/2*c.globals.barGroups.length}for(var b,m=i+o*r,v=0,y=0;y<this.groupCtx.prevYF.length;y++)v+=isNaN(this.groupCtx.prevYF[y][u])?0:this.groupCtx.prevYF[y][u];var w=d;if(l&&(w=l.indexOf(c.globals.seriesNames[p])),w>0&&!c.globals.isXNumeric||w>0&&c.globals.isXNumeric&&c.globals.seriesX[p-1][u]===c.globals.seriesX[p][u]){var k,A,C,S=Math.min(this.yRatio.length+1,p+1);if(void 0!==this.groupCtx.prevY[w-1]&&this.groupCtx.prevY[w-1].length)for(var L=1;L<S;L++){var M;if(!isNaN(null===(M=this.groupCtx.prevY[w-L])||void 0===M?void 0:M[u])){C=this.groupCtx.prevY[w-L][u];break}}for(var P=1;P<S;P++){var I,T;if((null===(I=this.groupCtx.prevYVal[w-P])||void 0===I?void 0:I[u])<0){A=this.series[d][u]>=0?C-v+2*(this.isReversed?v:0):C;break}if((null===(T=this.groupCtx.prevYVal[w-P])||void 0===T?void 0:T[u])>=0){A=this.series[d][u]>=0?C:C+v-2*(this.isReversed?v:0);break}}void 0===A&&(A=c.globals.gridHeight),b=null!==(k=this.groupCtx.prevYF[0])&&void 0!==k&&k.every((function(t){return 0===t}))&&this.groupCtx.prevYF.slice(1,w).every((function(t){return t.every((function(t){return isNaN(t)}))}))?n:A}else b=n;a=this.series[d][u]?b-this.series[d][u]/this.yRatio[f]+2*(this.isReversed?this.series[d][u]/this.yRatio[f]:0):b;var z=this.barHelpers.getColumnPaths({barXPosition:m,barWidth:r,y1:b,y2:a,yRatio:this.yRatio[f],strokeWidth:this.strokeWidth,isReversed:this.isReversed,series:this.series,seriesGroup:l,realIndex:e.realIndex,i:d,j:u,w:c});return this.barHelpers.barBackground({bc:g,j:u,i:d,x1:m,x2:r,elSeries:h}),{pathTo:z.pathTo,pathFrom:z.pathFrom,goalY:this.barHelpers.getGoalValues("y",null,n,d,u),barXPosition:m,x:c.globals.isXNumeric?i:i+s,y:a}}}]),a}(),Ta=function(t){h(a,Pa);var e=n(a);function a(){return i(this,a),e.apply(this,arguments)}return s(a,[{key:"draw",value:function(t,e,i){var a=this,s=this.w,r=new Mi(this.ctx),n=s.globals.comboCharts?e:s.config.chart.type,o=new ji(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick,this.boxOptions=this.w.config.plotOptions.boxPlot,this.isHorizontal=s.config.plotOptions.bar.horizontal;var l=new Pi(this.ctx,s);t=l.getLogSeries(t),this.series=t,this.yRatio=l.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);for(var h=r.group({class:"apexcharts-".concat(n,"-series apexcharts-plot-series")}),c=function(e){a.isBoxPlot="boxPlot"===s.config.chart.type||"boxPlot"===s.config.series[e].type;var n,l,c,d,g=void 0,p=void 0,f=[],x=[],b=s.globals.comboCharts?i[e]:e,m=a.barHelpers.getGroupIndex(b).columnGroupIndex,y=r.group({class:"apexcharts-series",seriesName:v.escapeString(s.globals.seriesNames[b]),rel:e+1,"data:realIndex":b});a.ctx.series.addCollapsedClassToSeries(y,b),t[e].length>0&&(a.visibleI=a.visibleI+1);var w,k,A=0;a.yRatio.length>1&&(a.yaxisIndex=s.globals.seriesYAxisReverseMap[b][0],A=b);var C=a.barHelpers.initialPositions();p=C.y,w=C.barHeight,l=C.yDivision,d=C.zeroW,g=C.x,k=C.barWidth,n=C.xDivision,c=C.zeroH,x.push(g+k/2);for(var S=r.group({class:"apexcharts-datalabels","data:realIndex":b}),L=r.group({class:"apexcharts-bar-goals-markers"}),M=function(i){var r=a.barHelpers.getStrokeWidth(e,i,b),h=null,v={indexes:{i:e,j:i,realIndex:b,translationsIndex:A},x:g,y:p,strokeWidth:r,elSeries:y};h=a.isHorizontal?a.drawHorizontalBoxPaths(u(u({},v),{},{yDivision:l,barHeight:w,zeroW:d})):a.drawVerticalBoxPaths(u(u({},v),{},{xDivision:n,barWidth:k,zeroH:c})),p=h.y,g=h.x;var C=a.barHelpers.drawGoalLine({barXPosition:h.barXPosition,barYPosition:h.barYPosition,goalX:h.goalX,goalY:h.goalY,barHeight:w,barWidth:k});C&&L.add(C),i>0&&x.push(g+k/2),f.push(p),h.pathTo.forEach((function(n,l){var c=!a.isBoxPlot&&a.candlestickOptions.wick.useFillColor?h.color[l]:s.globals.stroke.colors[e],d=o.fillPath({seriesNumber:b,dataPointIndex:i,color:h.color[l],value:t[e][i]});a.renderSeries({realIndex:b,pathFill:d,lineFill:c,j:i,i:e,pathFrom:h.pathFrom,pathTo:n,strokeWidth:r,elSeries:y,x:g,y:p,series:t,columnGroupIndex:m,barHeight:w,barWidth:k,elDataLabelsWrap:S,elGoalsMarkers:L,visibleSeries:a.visibleI,type:s.config.chart.type})}))},P=0;P<s.globals.dataPoints;P++)M(P);s.globals.seriesXvalues[b]=x,s.globals.seriesYvalues[b]=f,h.add(y)},d=0;d<t.length;d++)c(d);return h}},{key:"drawVerticalBoxPaths",value:function(t){var e=t.indexes,i=t.x;t.y;var a=t.xDivision,s=t.barWidth,r=t.zeroH,n=t.strokeWidth,o=this.w,l=new Mi(this.ctx),h=e.i,c=e.j,d=!0,u=o.config.plotOptions.candlestick.colors.upward,g=o.config.plotOptions.candlestick.colors.downward,p="";this.isBoxPlot&&(p=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var f=this.yRatio[e.translationsIndex],x=e.realIndex,b=this.getOHLCValue(x,c),m=r,v=r;b.o>b.c&&(d=!1);var y=Math.min(b.o,b.c),w=Math.max(b.o,b.c),k=b.m;o.globals.isXNumeric&&(i=(o.globals.seriesX[x][c]-o.globals.minX)/this.xRatio-s/2);var A=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?(y=r,w=r):(y=r-y/f,w=r-w/f,m=r-b.h/f,v=r-b.l/f,k=r-b.m/f);var C=l.move(A,r),S=l.move(A+s/2,y);return o.globals.previousPaths.length>0&&(S=this.getPreviousPath(x,c,!0)),C=this.isBoxPlot?[l.move(A,y)+l.line(A+s/2,y)+l.line(A+s/2,m)+l.line(A+s/4,m)+l.line(A+s-s/4,m)+l.line(A+s/2,m)+l.line(A+s/2,y)+l.line(A+s,y)+l.line(A+s,k)+l.line(A,k)+l.line(A,y+n/2),l.move(A,k)+l.line(A+s,k)+l.line(A+s,w)+l.line(A+s/2,w)+l.line(A+s/2,v)+l.line(A+s-s/4,v)+l.line(A+s/4,v)+l.line(A+s/2,v)+l.line(A+s/2,w)+l.line(A,w)+l.line(A,k)+"z"]:[l.move(A,w)+l.line(A+s/2,w)+l.line(A+s/2,m)+l.line(A+s/2,w)+l.line(A+s,w)+l.line(A+s,y)+l.line(A+s/2,y)+l.line(A+s/2,v)+l.line(A+s/2,y)+l.line(A,y)+l.line(A,w-n/2)],S+=l.move(A,y),o.globals.isXNumeric||(i+=a),{pathTo:C,pathFrom:S,x:i,y:w,goalY:this.barHelpers.getGoalValues("y",null,r,h,c,e.translationsIndex),barXPosition:A,color:this.isBoxPlot?p:d?[u]:[g]}}},{key:"drawHorizontalBoxPaths",value:function(t){var e=t.indexes;t.x;var i=t.y,a=t.yDivision,s=t.barHeight,r=t.zeroW,n=t.strokeWidth,o=this.w,l=new Mi(this.ctx),h=e.i,c=e.j,d=this.boxOptions.colors.lower;this.isBoxPlot&&(d=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var u=this.invertedYRatio,g=e.realIndex,p=this.getOHLCValue(g,c),f=r,x=r,b=Math.min(p.o,p.c),m=Math.max(p.o,p.c),v=p.m;o.globals.isXNumeric&&(i=(o.globals.seriesX[g][c]-o.globals.minX)/this.invertedXRatio-s/2);var y=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?(b=r,m=r):(b=r+b/u,m=r+m/u,f=r+p.h/u,x=r+p.l/u,v=r+p.m/u);var w=l.move(r,y),k=l.move(b,y+s/2);return o.globals.previousPaths.length>0&&(k=this.getPreviousPath(g,c,!0)),w=[l.move(b,y)+l.line(b,y+s/2)+l.line(f,y+s/2)+l.line(f,y+s/2-s/4)+l.line(f,y+s/2+s/4)+l.line(f,y+s/2)+l.line(b,y+s/2)+l.line(b,y+s)+l.line(v,y+s)+l.line(v,y)+l.line(b+n/2,y),l.move(v,y)+l.line(v,y+s)+l.line(m,y+s)+l.line(m,y+s/2)+l.line(x,y+s/2)+l.line(x,y+s-s/4)+l.line(x,y+s/4)+l.line(x,y+s/2)+l.line(m,y+s/2)+l.line(m,y)+l.line(v,y)+"z"],k+=l.move(b,y),o.globals.isXNumeric||(i+=a),{pathTo:w,pathFrom:k,x:m,y:i,goalX:this.barHelpers.getGoalValues("x",r,null,h,c),barYPosition:y,color:d}}},{key:"getOHLCValue",value:function(t,e){var i=this.w;return{o:this.isBoxPlot?i.globals.seriesCandleH[t][e]:i.globals.seriesCandleO[t][e],h:this.isBoxPlot?i.globals.seriesCandleO[t][e]:i.globals.seriesCandleH[t][e],m:i.globals.seriesCandleM[t][e],l:this.isBoxPlot?i.globals.seriesCandleC[t][e]:i.globals.seriesCandleL[t][e],c:this.isBoxPlot?i.globals.seriesCandleL[t][e]:i.globals.seriesCandleC[t][e]}}}]),a}(),za=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"checkColorRange",value:function(){var t=this.w,e=!1,i=t.config.plotOptions[t.config.chart.type];return i.colorScale.ranges.length>0&&i.colorScale.ranges.map((function(t,i){t.from<=0&&(e=!0)})),e}},{key:"getShadeColor",value:function(t,e,i,a){var s=this.w,r=1,n=s.config.plotOptions[t].shadeIntensity,o=this.determineColor(t,e,i);s.globals.hasNegs||a?r=s.config.plotOptions[t].reverseNegativeShade?o.percent<0?o.percent/100*(1.25*n):(1-o.percent/100)*(1.25*n):o.percent<=0?1-(1+o.percent/100)*n:(1-o.percent/100)*n:(r=1-o.percent/100,"treemap"===t&&(r=(1-o.percent/100)*(1.25*n)));var l=o.color,h=new v;if(s.config.plotOptions[t].enableShades)if("dark"===this.w.config.theme.mode){var c=h.shadeColor(-1*r,o.color);l=v.hexToRgba(v.isColorHex(c)?c:v.rgb2hex(c),s.config.fill.opacity)}else{var d=h.shadeColor(r,o.color);l=v.hexToRgba(v.isColorHex(d)?d:v.rgb2hex(d),s.config.fill.opacity)}return{color:l,colorProps:o}}},{key:"determineColor",value:function(t,e,i){var a=this.w,s=a.globals.series[e][i],r=a.config.plotOptions[t],n=r.colorScale.inverse?i:e;r.distributed&&"treemap"===a.config.chart.type&&(n=i);var o=a.globals.colors[n],l=null,h=Math.min.apply(Math,f(a.globals.series[e])),c=Math.max.apply(Math,f(a.globals.series[e]));r.distributed||"heatmap"!==t||(h=a.globals.minY,c=a.globals.maxY),void 0!==r.colorScale.min&&(h=r.colorScale.min<a.globals.minY?r.colorScale.min:a.globals.minY,c=r.colorScale.max>a.globals.maxY?r.colorScale.max:a.globals.maxY);var d=Math.abs(c)+Math.abs(h),u=100*s/(0===d?d-1e-6:d);r.colorScale.ranges.length>0&&r.colorScale.ranges.map((function(t,e){if(s>=t.from&&s<=t.to){o=t.color,l=t.foreColor?t.foreColor:null,h=t.from,c=t.to;var i=Math.abs(c)+Math.abs(h);u=100*s/(0===i?i-1e-6:i)}}));return{color:o,foreColor:l,percent:u}}},{key:"calculateDataLabels",value:function(t){var e=t.text,i=t.x,a=t.y,s=t.i,r=t.j,n=t.colorProps,o=t.fontSize,l=this.w.config.dataLabels,h=new Mi(this.ctx),c=new qi(this.ctx),d=null;if(l.enabled){d=h.group({class:"apexcharts-data-labels"});var u=l.offsetX,g=l.offsetY,p=i+u,f=a+parseFloat(l.style.fontSize)/3+g;c.plotDataLabelsText({x:p,y:f,text:e,i:s,j:r,color:n.foreColor,parent:d,fontSize:o,dataLabelsConfig:l})}return d}},{key:"addListeners",value:function(t){var e=new Mi(this.ctx);t.node.addEventListener("mouseenter",e.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",e.pathMouseLeave.bind(this,t)),t.node.addEventListener("mousedown",e.pathMouseDown.bind(this,t))}}]),t}(),Xa=function(){function t(e,a){i(this,t),this.ctx=e,this.w=e.w,this.xRatio=a.xRatio,this.yRatio=a.yRatio,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.helpers=new za(e),this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width:0}return s(t,[{key:"draw",value:function(t){var e=this.w,i=new Mi(this.ctx),a=i.group({class:"apexcharts-heatmap"});a.attr("clip-path","url(#gridRectMask".concat(e.globals.cuid,")"));var s=e.globals.gridWidth/e.globals.dataPoints,r=e.globals.gridHeight/e.globals.series.length,n=0,o=!1;this.negRange=this.helpers.checkColorRange();var l=t.slice();e.config.yaxis[0].reversed&&(o=!0,l.reverse());for(var h=o?0:l.length-1;o?h<l.length:h>=0;o?h++:h--){var c=i.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:v.escapeString(e.globals.seriesNames[h]),rel:h+1,"data:realIndex":h});if(this.ctx.series.addCollapsedClassToSeries(c,h),e.config.chart.dropShadow.enabled){var d=e.config.chart.dropShadow;new Li(this.ctx).dropShadow(c,d,h)}for(var u=0,g=e.config.plotOptions.heatmap.shadeIntensity,p=0;p<l[h].length;p++){var f=this.helpers.getShadeColor(e.config.chart.type,h,p,this.negRange),x=f.color,b=f.colorProps;if("image"===e.config.fill.type)x=new ji(this.ctx).fillPath({seriesNumber:h,dataPointIndex:p,opacity:e.globals.hasNegs?b.percent<0?1-(1+b.percent/100):g+b.percent/100:b.percent/100,patternID:v.randomId(),width:e.config.fill.image.width?e.config.fill.image.width:s,height:e.config.fill.image.height?e.config.fill.image.height:r});var m=this.rectRadius,y=i.drawRect(u,n,s,r,m);if(y.attr({cx:u,cy:n}),y.node.classList.add("apexcharts-heatmap-rect"),c.add(y),y.attr({fill:x,i:h,index:h,j:p,val:t[h][p],"stroke-width":this.strokeWidth,stroke:e.config.plotOptions.heatmap.useFillColorAsStroke?x:e.globals.stroke.colors[0],color:x}),this.helpers.addListeners(y),e.config.chart.animations.enabled&&!e.globals.dataChanged){var w=1;e.globals.resized||(w=e.config.chart.animations.speed),this.animateHeatMap(y,u,n,s,r,w)}if(e.globals.dataChanged){var k=1;if(this.dynamicAnim.enabled&&e.globals.shouldAnimate){k=this.dynamicAnim.speed;var A=e.globals.previousPaths[h]&&e.globals.previousPaths[h][p]&&e.globals.previousPaths[h][p].color;A||(A="rgba(255, 255, 255, 0)"),this.animateHeatColor(y,v.isColorHex(A)?A:v.rgb2hex(A),v.isColorHex(x)?x:v.rgb2hex(x),k)}}var C=(0,e.config.dataLabels.formatter)(e.globals.series[h][p],{value:e.globals.series[h][p],seriesIndex:h,dataPointIndex:p,w:e}),S=this.helpers.calculateDataLabels({text:C,x:u+s/2,y:n+r/2,i:h,j:p,colorProps:b,series:l});null!==S&&c.add(S),u+=s}n+=r,a.add(c)}var L=e.globals.yAxisScale[0].result.slice();return e.config.yaxis[0].reversed?L.unshift(""):L.push(""),e.globals.yAxisScale[0].result=L,a}},{key:"animateHeatMap",value:function(t,e,i,a,s,r){var n=new y(this.ctx);n.animateRect(t,{x:e+a/2,y:i+s/2,width:0,height:0},{x:e,y:i,width:a,height:s},r,(function(){n.animationCompleted(t)}))}},{key:"animateHeatColor",value:function(t,e,i,a){t.attr({fill:e}).animate(a).attr({fill:i})}}]),t}(),Ra=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"drawYAxisTexts",value:function(t,e,i,a){var s=this.w,r=s.config.yaxis[0],n=s.globals.yLabelFormatters[0];return new Mi(this.ctx).drawText({x:t+r.labels.offsetX,y:e+r.labels.offsetY,text:n(a,i),textAnchor:"middle",fontSize:r.labels.style.fontSize,fontFamily:r.labels.style.fontFamily,foreColor:Array.isArray(r.labels.style.colors)?r.labels.style.colors[i]:r.labels.style.colors})}}]),t}(),Ea=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w;var a=this.w;this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels,this.lineColorArr=void 0!==a.globals.stroke.colors?a.globals.stroke.colors:a.globals.colors,this.defaultSize=Math.min(a.globals.gridWidth,a.globals.gridHeight),this.centerY=this.defaultSize/2,this.centerX=a.globals.gridWidth/2,"radialBar"===a.config.chart.type?this.fullAngle=360:this.fullAngle=Math.abs(a.config.plotOptions.pie.endAngle-a.config.plotOptions.pie.startAngle),this.initialAngle=a.config.plotOptions.pie.startAngle%this.fullAngle,a.globals.radialSize=this.defaultSize/2.05-a.config.stroke.width-(a.config.chart.sparkline.enabled?0:a.config.chart.dropShadow.blur),this.donutSize=a.globals.radialSize*parseInt(a.config.plotOptions.pie.donut.size,10)/100;var s=a.config.plotOptions.pie.customScale,r=a.globals.gridWidth/2,n=a.globals.gridHeight/2;this.translateX=r-r*s,this.translateY=n-n*s,this.dataLabelsGroup=new Mi(this.ctx).group({class:"apexcharts-datalabels-group",transform:"translate(".concat(this.translateX,", ").concat(this.translateY,") scale(").concat(s,")")}),this.maxY=0,this.sliceLabels=[],this.sliceSizes=[],this.prevSectorAngleArr=[]}return s(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new Mi(this.ctx),s=a.group({class:"apexcharts-pie"});if(i.globals.noData)return s;for(var r=0,n=0;n<t.length;n++)r+=v.negToZero(t[n]);var o=[],l=a.group();0===r&&(r=1e-5),t.forEach((function(t){e.maxY=Math.max(e.maxY,t)})),i.config.yaxis[0].max&&(this.maxY=i.config.yaxis[0].max),"back"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(s);for(var h=0;h<t.length;h++){var c=this.fullAngle*v.negToZero(t[h])/r;o.push(c),"polarArea"===this.chartType?(o[h]=this.fullAngle/t.length,this.sliceSizes.push(i.globals.radialSize*t[h]/this.maxY)):this.sliceSizes.push(i.globals.radialSize)}if(i.globals.dataChanged){for(var d,u=0,g=0;g<i.globals.previousPaths.length;g++)u+=v.negToZero(i.globals.previousPaths[g]);for(var p=0;p<i.globals.previousPaths.length;p++)d=this.fullAngle*v.negToZero(i.globals.previousPaths[p])/u,this.prevSectorAngleArr.push(d)}if(this.donutSize<0&&(this.donutSize=0),"donut"===this.chartType){var f=a.drawCircle(this.donutSize);f.attr({cx:this.centerX,cy:this.centerY,fill:i.config.plotOptions.pie.donut.background?i.config.plotOptions.pie.donut.background:"transparent"}),l.add(f)}var x=this.drawArcs(o,t);if(this.sliceLabels.forEach((function(t){x.add(t)})),l.attr({transform:"translate(".concat(this.translateX,", ").concat(this.translateY,") scale(").concat(i.config.plotOptions.pie.customScale,")")}),l.add(x),s.add(l),this.donutDataLabels.show){var b=this.renderInnerDataLabels(this.dataLabelsGroup,this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show});s.add(b)}return"front"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(s),s}},{key:"drawArcs",value:function(t,e){var i=this.w,a=new Li(this.ctx),s=new Mi(this.ctx),r=new ji(this.ctx),n=s.group({class:"apexcharts-slices"}),o=this.initialAngle,l=this.initialAngle,h=this.initialAngle,c=this.initialAngle;this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0;for(var d=0;d<t.length;d++){var u=s.group({class:"apexcharts-series apexcharts-pie-series",seriesName:v.escapeString(i.globals.seriesNames[d]),rel:d+1,"data:realIndex":d});n.add(u),l=c,h=(o=h)+t[d],c=l+this.prevSectorAngleArr[d];var g=h<o?this.fullAngle+h-o:h-o,p=r.fillPath({seriesNumber:d,size:this.sliceSizes[d],value:e[d]}),f=this.getChangedPath(l,c),x=s.drawPath({d:f,stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[d]:this.lineColorArr,strokeWidth:0,fill:p,fillOpacity:i.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(d)});if(x.attr({index:0,j:d}),a.setSelectionFilter(x,0,d),i.config.chart.dropShadow.enabled){var b=i.config.chart.dropShadow;a.dropShadow(x,b,d)}this.addListeners(x,this.donutDataLabels),Mi.setAttrs(x.node,{"data:angle":g,"data:startAngle":o,"data:strokeWidth":this.strokeWidth,"data:value":e[d]});var m={x:0,y:0};"pie"===this.chartType||"polarArea"===this.chartType?m=v.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize/1.25+i.config.plotOptions.pie.dataLabels.offset,(o+g/2)%this.fullAngle):"donut"===this.chartType&&(m=v.polarToCartesian(this.centerX,this.centerY,(i.globals.radialSize+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset,(o+g/2)%this.fullAngle)),u.add(x);var y=0;if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0):(0===(y=g/this.fullAngle*i.config.chart.animations.speed)&&(y=1),this.animDur=y+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(x,{size:this.sliceSizes[d],endAngle:h,startAngle:o,prevStartAngle:l,prevEndAngle:c,animateStartingPos:!0,i:d,animBeginArr:this.animBeginArr,shouldSetPrevPaths:!0,dur:i.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(x,{size:this.sliceSizes[d],endAngle:h,startAngle:o,i:d,totalItems:t.length-1,animBeginArr:this.animBeginArr,dur:y}),i.config.plotOptions.pie.expandOnClick&&"polarArea"!==this.chartType&&x.node.addEventListener("mouseup",this.pieClicked.bind(this,d)),void 0!==i.globals.selectedDataPoints[0]&&i.globals.selectedDataPoints[0].indexOf(d)>-1&&this.pieClicked(d),i.config.dataLabels.enabled){var w=m.x,k=m.y,A=100*g/this.fullAngle+"%";if(0!==g&&i.config.plotOptions.pie.dataLabels.minAngleToShowLabel<t[d]){var C=i.config.dataLabels.formatter;void 0!==C&&(A=C(i.globals.seriesPercent[d][0],{seriesIndex:d,w:i}));var S=i.globals.dataLabels.style.colors[d],L=s.group({class:"apexcharts-datalabels"}),M=s.drawText({x:w,y:k,text:A,textAnchor:"middle",fontSize:i.config.dataLabels.style.fontSize,fontFamily:i.config.dataLabels.style.fontFamily,fontWeight:i.config.dataLabels.style.fontWeight,foreColor:S});if(L.add(M),i.config.dataLabels.dropShadow.enabled){var P=i.config.dataLabels.dropShadow;a.dropShadow(M,P)}M.node.classList.add("apexcharts-pie-label"),i.config.chart.animations.animate&&!1===i.globals.resized&&(M.node.classList.add("apexcharts-pie-label-delay"),M.node.style.animationDelay=i.config.chart.animations.speed/940+"s"),this.sliceLabels.push(L)}}}return n}},{key:"addListeners",value:function(t,e){var i=new Mi(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,t)),t.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this,t)),this.donutDataLabels.total.showAlways||(t.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,t.node,e)))}},{key:"animatePaths",value:function(t,e){var i=this.w,a=e.endAngle<e.startAngle?this.fullAngle+e.endAngle-e.startAngle:e.endAngle-e.startAngle,s=a,r=e.startAngle,n=e.startAngle;void 0!==e.prevStartAngle&&void 0!==e.prevEndAngle&&(r=e.prevEndAngle,s=e.prevEndAngle<e.prevStartAngle?this.fullAngle+e.prevEndAngle-e.prevStartAngle:e.prevEndAngle-e.prevStartAngle),e.i===i.config.series.length-1&&(a+n>this.fullAngle?e.endAngle=e.endAngle-(a+n):a+n<this.fullAngle&&(e.endAngle=e.endAngle+(this.fullAngle-(a+n)))),a===this.fullAngle&&(a=this.fullAngle-.01),this.animateArc(t,r,n,a,s,e)}},{key:"animateArc",value:function(t,e,i,a,s,r){var n,o=this,l=this.w,h=new y(this.ctx),c=r.size;(isNaN(e)||isNaN(s))&&(e=i,s=a,r.dur=0);var d=a,u=i,g=e<i?this.fullAngle+e-i:e-i;l.globals.dataChanged&&r.shouldSetPrevPaths&&r.prevEndAngle&&(n=o.getPiePath({me:o,startAngle:r.prevStartAngle,angle:r.prevEndAngle<r.prevStartAngle?this.fullAngle+r.prevEndAngle-r.prevStartAngle:r.prevEndAngle-r.prevStartAngle,size:c}),t.attr({d:n})),0!==r.dur?t.animate(r.dur,r.animBeginArr[r.i]).after((function(){"pie"!==o.chartType&&"donut"!==o.chartType&&"polarArea"!==o.chartType||this.animate(l.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width":o.strokeWidth}),r.i===l.config.series.length-1&&h.animationCompleted(t)})).during((function(l){d=g+(a-g)*l,r.animateStartingPos&&(d=s+(a-s)*l,u=e-s+(i-(e-s))*l),n=o.getPiePath({me:o,startAngle:u,angle:d,size:c}),t.node.setAttribute("data:pathOrig",n),t.attr({d:n})})):(n=o.getPiePath({me:o,startAngle:u,angle:a,size:c}),r.isTrack||(l.globals.animationEnded=!0),t.node.setAttribute("data:pathOrig",n),t.attr({d:n,"stroke-width":o.strokeWidth}))}},{key:"pieClicked",value:function(t){var e,i=this.w,a=this,s=a.sliceSizes[t]+(i.config.plotOptions.pie.expandOnClick?4:0),r=i.globals.dom.Paper.findOne(".apexcharts-".concat(a.chartType.toLowerCase(),"-slice-").concat(t));if("true"!==r.attr("data:pieClicked")){var n=i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");Array.prototype.forEach.call(n,(function(t){t.setAttribute("data:pieClicked","false");var e=t.getAttribute("data:pathOrig");e&&t.setAttribute("d",e)})),i.globals.capturedDataPointIndex=t,r.attr("data:pieClicked","true");var o=parseInt(r.attr("data:startAngle"),10),l=parseInt(r.attr("data:angle"),10);e=a.getPiePath({me:a,startAngle:o,angle:l,size:s}),360!==l&&r.plot(e)}else{r.attr({"data:pieClicked":"false"}),this.revertDataLabelsInner(r.node,this.donutDataLabels);var h=r.attr("data:pathOrig");r.attr({d:h})}}},{key:"getChangedPath",value:function(t,e){var i="";return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath({me:this,startAngle:t,angle:e-t,size:this.size})),i}},{key:"getPiePath",value:function(t){var e,i=t.me,a=t.startAngle,s=t.angle,r=t.size,n=new Mi(this.ctx),o=a,l=Math.PI*(o-90)/180,h=s+a;Math.ceil(h)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle&&(h=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-.01),Math.ceil(h)>this.fullAngle&&(h-=this.fullAngle);var c=Math.PI*(h-90)/180,d=i.centerX+r*Math.cos(l),u=i.centerY+r*Math.sin(l),g=i.centerX+r*Math.cos(c),p=i.centerY+r*Math.sin(c),f=v.polarToCartesian(i.centerX,i.centerY,i.donutSize,h),x=v.polarToCartesian(i.centerX,i.centerY,i.donutSize,o),b=s>180?1:0,m=["M",d,u,"A",r,r,0,b,1,g,p];return e="donut"===i.chartType?[].concat(m,["L",f.x,f.y,"A",i.donutSize,i.donutSize,0,b,0,x.x,x.y,"L",d,u,"z"]).join(" "):"pie"===i.chartType||"polarArea"===i.chartType?[].concat(m,["L",i.centerX,i.centerY,"L",d,u]).join(" "):[].concat(m).join(" "),n.roundPathCorners(e,2*this.strokeWidth)}},{key:"drawPolarElements",value:function(t){var e=this.w,i=new ta(this.ctx),a=new Mi(this.ctx),s=new Ra(this.ctx),r=a.group(),n=a.group(),o=i.niceScale(0,Math.ceil(this.maxY),0),l=o.result.reverse(),h=o.result.length;this.maxY=o.niceMax;for(var c=e.globals.radialSize,d=c/(h-1),u=0;u<h-1;u++){var g=a.drawCircle(c);if(g.attr({cx:this.centerX,cy:this.centerY,fill:"none","stroke-width":e.config.plotOptions.polarArea.rings.strokeWidth,stroke:e.config.plotOptions.polarArea.rings.strokeColor}),e.config.yaxis[0].show){var p=s.drawYAxisTexts(this.centerX,this.centerY-c+parseInt(e.config.yaxis[0].labels.style.fontSize,10)/2,u,l[u]);n.add(p)}r.add(g),c-=d}this.drawSpokes(t),t.add(r),t.add(n)}},{key:"renderInnerDataLabels",value:function(t,e,i){var a=this.w,s=new Mi(this.ctx),r=e.total.show;t.node.innerHTML="",t.node.style.opacity=i.opacity;var n,o,l=i.centerX,h=this.donutDataLabels.total.label?i.centerY:i.centerY-i.centerY/6;n=void 0===e.name.color?a.globals.colors[0]:e.name.color;var c=e.name.fontSize,d=e.name.fontFamily,u=e.name.fontWeight;o=void 0===e.value.color?a.config.chart.foreColor:e.value.color;var g=e.value.formatter,p="",f="";if(r?(n=e.total.color,c=e.total.fontSize,d=e.total.fontFamily,u=e.total.fontWeight,f=this.donutDataLabels.total.label?e.total.label:"",p=e.total.formatter(a)):1===a.globals.series.length&&(p=g(a.globals.series[0],a),f=a.globals.seriesNames[0]),f&&(f=e.name.formatter(f,e.total.show,a)),e.name.show){var x=s.drawText({x:l,y:h+parseFloat(e.name.offsetY),text:f,textAnchor:"middle",foreColor:n,fontSize:c,fontWeight:u,fontFamily:d});x.node.classList.add("apexcharts-datalabel-label"),t.add(x)}if(e.value.show){var b=e.name.show?parseFloat(e.value.offsetY)+16:e.value.offsetY,m=s.drawText({x:l,y:h+b,text:p,textAnchor:"middle",foreColor:o,fontWeight:e.value.fontWeight,fontSize:e.value.fontSize,fontFamily:e.value.fontFamily});m.node.classList.add("apexcharts-datalabel-value"),t.add(m)}return t}},{key:"printInnerLabels",value:function(t,e,i,a){var s,r=this.w;a?s=void 0===t.name.color?r.globals.colors[parseInt(a.parentNode.getAttribute("rel"),10)-1]:t.name.color:r.globals.series.length>1&&t.total.show&&(s=t.total.color);var n=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),o=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");i=(0,t.value.formatter)(i,r),a||"function"!=typeof t.total.formatter||(i=t.total.formatter(r));var l=e===t.total.label;e=this.donutDataLabels.total.label?t.name.formatter(e,l,r):"",null!==n&&(n.textContent=e),null!==o&&(o.textContent=i),null!==n&&(n.style.fill=s)}},{key:"printDataLabelsInner",value:function(t,e){var i=this.w,a=t.getAttribute("data:value"),s=i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"),10)-1];i.globals.series.length>1&&this.printInnerLabels(e,s,a,t);var r=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");null!==r&&(r.style.opacity=1)}},{key:"drawSpokes",value:function(t){var e=this,i=this.w,a=new Mi(this.ctx),s=i.config.plotOptions.polarArea.spokes;if(0!==s.strokeWidth){for(var r=[],n=360/i.globals.series.length,o=0;o<i.globals.series.length;o++)r.push(v.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize,i.config.plotOptions.pie.startAngle+n*o));r.forEach((function(i,r){var n=a.drawLine(i.x,i.y,e.centerX,e.centerY,Array.isArray(s.connectorColors)?s.connectorColors[r]:s.connectorColors);t.add(n)}))}}},{key:"revertDataLabelsInner",value:function(){var t=this.w;if(this.donutDataLabels.show){var e=t.globals.dom.Paper.findOne(".apexcharts-datalabels-group"),i=this.renderInnerDataLabels(e,this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show});t.globals.dom.Paper.findOne(".apexcharts-radialbar, .apexcharts-pie").add(i)}}}]),t}(),Ya=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var a=this.w;this.graphics=new Mi(this.ctx),this.lineColorArr=void 0!==a.globals.stroke.colors?a.globals.stroke.colors:a.globals.colors,this.defaultSize=a.globals.svgHeight<a.globals.svgWidth?a.globals.gridHeight:a.globals.gridWidth,this.isLog=a.config.yaxis[0].logarithmic,this.logBase=a.config.yaxis[0].logBase,this.coreUtils=new Pi(this.ctx),this.maxValue=this.isLog?this.coreUtils.getLogVal(this.logBase,a.globals.maxY,0):a.globals.maxY,this.minValue=this.isLog?this.coreUtils.getLogVal(this.logBase,this.w.globals.minY,0):a.globals.minY,this.polygons=a.config.plotOptions.radar.polygons,this.strokeWidth=a.config.stroke.show?a.config.stroke.width:0,this.size=this.defaultSize/2.1-this.strokeWidth-a.config.chart.dropShadow.blur,a.config.xaxis.labels.show&&(this.size=this.size-a.globals.xAxisLabelsWidth/1.75),void 0!==a.config.plotOptions.radar.size&&(this.size=a.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return s(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new ji(this.ctx),s=[],r=new qi(this.ctx);t.length&&(this.dataPointsLen=t[i.globals.maxValsInArrayIndex].length),this.disAngle=2*Math.PI/this.dataPointsLen;var n=i.globals.gridWidth/2,o=i.globals.gridHeight/2,l=n+i.config.plotOptions.radar.offsetX,h=o+i.config.plotOptions.radar.offsetY,c=this.graphics.group({class:"apexcharts-radar-series apexcharts-plot-series",transform:"translate(".concat(l||0,", ").concat(h||0,")")}),d=[],g=null,p=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),t.forEach((function(t,n){var o=t.length===i.globals.dataPoints,l=e.graphics.group().attr({class:"apexcharts-series","data:longestSeries":o,seriesName:v.escapeString(i.globals.seriesNames[n]),rel:n+1,"data:realIndex":n});e.dataRadiusOfPercent[n]=[],e.dataRadius[n]=[],e.angleArr[n]=[],t.forEach((function(t,i){var a=Math.abs(e.maxValue-e.minValue);t-=e.minValue,e.isLog&&(t=e.coreUtils.getLogVal(e.logBase,t,0)),e.dataRadiusOfPercent[n][i]=t/a,e.dataRadius[n][i]=e.dataRadiusOfPercent[n][i]*e.size,e.angleArr[n][i]=i*e.disAngle})),d=e.getDataPointsPos(e.dataRadius[n],e.angleArr[n]);var h=e.createPaths(d,{x:0,y:0});g=e.graphics.group({class:"apexcharts-series-markers-wrap apexcharts-element-hidden"}),p=e.graphics.group({class:"apexcharts-datalabels","data:realIndex":n}),i.globals.delayedElements.push({el:g.node,index:n});var c={i:n,realIndex:n,animationDelay:n,initialSpeed:i.config.chart.animations.speed,dataChangeSpeed:i.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:i.globals.stroke.colors[n],strokeLineCap:i.config.stroke.lineCap},f=null;i.globals.previousPaths.length>0&&(f=e.getPreviousPath(n));for(var x=0;x<h.linePathsTo.length;x++){var b=e.graphics.renderPaths(u(u({},c),{},{pathFrom:null===f?h.linePathsFrom[x]:f,pathTo:h.linePathsTo[x],strokeWidth:Array.isArray(e.strokeWidth)?e.strokeWidth[n]:e.strokeWidth,fill:"none",drawShadow:!1}));l.add(b);var m=a.fillPath({seriesNumber:n}),y=e.graphics.renderPaths(u(u({},c),{},{pathFrom:null===f?h.areaPathsFrom[x]:f,pathTo:h.areaPathsTo[x],strokeWidth:0,fill:m,drawShadow:!1}));if(i.config.chart.dropShadow.enabled){var w=new Li(e.ctx),k=i.config.chart.dropShadow;w.dropShadow(y,Object.assign({},k,{noUserSpaceOnUse:!0}),n)}l.add(y)}t.forEach((function(t,a){var s=new Vi(e.ctx).getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:n,dataPointIndex:a}),o=e.graphics.drawMarker(d[a].x,d[a].y,s);o.attr("rel",a),o.attr("j",a),o.attr("index",n),o.node.setAttribute("default-marker-size",s.pSize);var h=e.graphics.group({class:"apexcharts-series-markers"});h&&h.add(o),g.add(h),l.add(g);var c=i.config.dataLabels;if(c.enabled){var f=c.formatter(i.globals.series[n][a],{seriesIndex:n,dataPointIndex:a,w:i});r.plotDataLabelsText({x:d[a].x,y:d[a].y,text:f,textAnchor:"middle",i:n,j:n,parent:p,offsetCorrection:!1,dataLabelsConfig:u({},c)})}l.add(p)})),s.push(l)})),this.drawPolygons({parent:c}),i.config.xaxis.labels.show){var f=this.drawXAxisTexts();c.add(f)}return s.forEach((function(t){c.add(t)})),c.add(this.yaxisLabels),c}},{key:"drawPolygons",value:function(t){for(var e=this,i=this.w,a=t.parent,s=new Ra(this.ctx),r=i.globals.yAxisScale[0].result.reverse(),n=r.length,o=[],l=this.size/(n-1),h=0;h<n;h++)o[h]=l*h;o.reverse();var c=[],d=[];o.forEach((function(t,i){var a=v.getPolygonPos(t,e.dataPointsLen),s="";a.forEach((function(t,a){if(0===i){var r=e.graphics.drawLine(t.x,t.y,0,0,Array.isArray(e.polygons.connectorColors)?e.polygons.connectorColors[a]:e.polygons.connectorColors);d.push(r)}0===a&&e.yaxisLabelsTextsPos.push({x:t.x,y:t.y}),s+=t.x+","+t.y+" "})),c.push(s)})),c.forEach((function(t,s){var r=e.polygons.strokeColors,n=e.polygons.strokeWidth,o=e.graphics.drawPolygon(t,Array.isArray(r)?r[s]:r,Array.isArray(n)?n[s]:n,i.globals.radarPolygons.fill.colors[s]);a.add(o)})),d.forEach((function(t){a.add(t)})),i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach((function(t,i){var a=s.drawYAxisTexts(t.x,t.y,i,r[i]);e.yaxisLabels.add(a)}))}},{key:"drawXAxisTexts",value:function(){var t=this,e=this.w,i=e.config.xaxis.labels,a=this.graphics.group({class:"apexcharts-xaxis"}),s=v.getPolygonPos(this.size,this.dataPointsLen);return e.globals.labels.forEach((function(r,n){var o=e.config.xaxis.labels.formatter,l=new qi(t.ctx);if(s[n]){var h=t.getTextPos(s[n],t.size),c=o(r,{seriesIndex:-1,dataPointIndex:n,w:e});l.plotDataLabelsText({x:h.newX,y:h.newY,text:c,textAnchor:h.textAnchor,i:n,j:n,parent:a,className:"apexcharts-xaxis-label",color:Array.isArray(i.style.colors)&&i.style.colors[n]?i.style.colors[n]:"#a8a8a8",dataLabelsConfig:u({textAnchor:h.textAnchor,dropShadow:{enabled:!1}},i),offsetCorrection:!1}).on("click",(function(i){if("function"==typeof e.config.chart.events.xAxisLabelClick){var a=Object.assign({},e,{labelIndex:n});e.config.chart.events.xAxisLabelClick(i,t.ctx,a)}}))}})),a}},{key:"createPaths",value:function(t,e){var i=this,a=[],s=[],r=[],n=[];if(t.length){s=[this.graphics.move(e.x,e.y)],n=[this.graphics.move(e.x,e.y)];var o=this.graphics.move(t[0].x,t[0].y),l=this.graphics.move(t[0].x,t[0].y);t.forEach((function(e,a){o+=i.graphics.line(e.x,e.y),l+=i.graphics.line(e.x,e.y),a===t.length-1&&(o+="Z",l+="Z")})),a.push(o),r.push(l)}return{linePathsFrom:s,linePathsTo:a,areaPathsFrom:n,areaPathsTo:r}}},{key:"getTextPos",value:function(t,e){var i="middle",a=t.x,s=t.y;return Math.abs(t.x)>=10?t.x>0?(i="start",a+=10):t.x<0&&(i="end",a-=10):i="middle",Math.abs(t.y)>=e-10&&(t.y<0?s-=10:t.y>0&&(s+=10)),{textAnchor:i,newX:a,newY:s}}},{key:"getPreviousPath",value:function(t){for(var e=this.w,i=null,a=0;a<e.globals.previousPaths.length;a++){var s=e.globals.previousPaths[a];s.paths.length>0&&parseInt(s.realIndex,10)===parseInt(t,10)&&void 0!==e.globals.previousPaths[a].paths[0]&&(i=e.globals.previousPaths[a].paths[0].d)}return i}},{key:"getDataPointsPos",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.dataPointsLen;t=t||[],e=e||[];for(var a=[],s=0;s<i;s++){var r={};r.x=t[s]*Math.sin(e[s]),r.y=-t[s]*Math.cos(e[s]),a.push(r)}return a}}]),t}(),Ha=function(t){h(r,Ea);var a=n(r);function r(t){var s;i(this,r),(s=a.call(this,t)).ctx=t,s.w=t.w,s.animBeginArr=[0],s.animDur=0;var n=s.w;return s.startAngle=n.config.plotOptions.radialBar.startAngle,s.endAngle=n.config.plotOptions.radialBar.endAngle,s.totalAngle=Math.abs(n.config.plotOptions.radialBar.endAngle-n.config.plotOptions.radialBar.startAngle),s.trackStartAngle=n.config.plotOptions.radialBar.track.startAngle,s.trackEndAngle=n.config.plotOptions.radialBar.track.endAngle,s.barLabels=s.w.config.plotOptions.radialBar.barLabels,s.donutDataLabels=s.w.config.plotOptions.radialBar.dataLabels,s.radialDataLabels=s.donutDataLabels,s.trackStartAngle||(s.trackStartAngle=s.startAngle),s.trackEndAngle||(s.trackEndAngle=s.endAngle),360===s.endAngle&&(s.endAngle=359.99),s.margin=parseInt(n.config.plotOptions.radialBar.track.margin,10),s.onBarLabelClick=s.onBarLabelClick.bind(e(s)),s}return s(r,[{key:"draw",value:function(t){var e=this.w,i=new Mi(this.ctx),a=i.group({class:"apexcharts-radialbar"});if(e.globals.noData)return a;var s=i.group(),r=this.defaultSize/2,n=e.globals.gridWidth/2,o=this.defaultSize/2.05;e.config.chart.sparkline.enabled||(o=o-e.config.stroke.width-e.config.chart.dropShadow.blur);var l=e.globals.fill.colors;if(e.config.plotOptions.radialBar.track.show){var h=this.drawTracks({size:o,centerX:n,centerY:r,colorArr:l,series:t});s.add(h)}var c=this.drawArcs({size:o,centerX:n,centerY:r,colorArr:l,series:t}),d=360;e.config.plotOptions.radialBar.startAngle<0&&(d=this.totalAngle);var u=(360-d)/360;if(e.globals.radialSize=o-o*u,this.radialDataLabels.value.show){var g=Math.max(this.radialDataLabels.value.offsetY,this.radialDataLabels.name.offsetY);e.globals.radialSize+=g*u}return s.add(c.g),"front"===e.config.plotOptions.radialBar.hollow.position&&(c.g.add(c.elHollow),c.dataLabels&&c.g.add(c.dataLabels)),a.add(s),a}},{key:"drawTracks",value:function(t){var e=this.w,i=new Mi(this.ctx),a=i.group({class:"apexcharts-tracks"}),s=new Li(this.ctx),r=new ji(this.ctx),n=this.getStrokeWidth(t);t.size=t.size-n/2;for(var o=0;o<t.series.length;o++){var l=i.group({class:"apexcharts-radialbar-track apexcharts-track"});a.add(l),l.attr({rel:o+1}),t.size=t.size-n-this.margin;var h=e.config.plotOptions.radialBar.track,c=r.fillPath({seriesNumber:0,size:t.size,fillColors:Array.isArray(h.background)?h.background[o]:h.background,solid:!0}),d=this.trackStartAngle,u=this.trackEndAngle;Math.abs(u)+Math.abs(d)>=360&&(u=360-Math.abs(this.startAngle)-.1);var g=i.drawPath({d:"",stroke:c,strokeWidth:n*parseInt(h.strokeWidth,10)/100,fill:"none",strokeOpacity:h.opacity,classes:"apexcharts-radialbar-area"});if(h.dropShadow.enabled){var p=h.dropShadow;s.dropShadow(g,p)}l.add(g),g.attr("id","apexcharts-radialbarTrack-"+o),this.animatePaths(g,{centerX:t.centerX,centerY:t.centerY,endAngle:u,startAngle:d,size:t.size,i:o,totalItems:2,animBeginArr:0,dur:0,isTrack:!0})}return a}},{key:"drawArcs",value:function(t){var e=this.w,i=new Mi(this.ctx),a=new ji(this.ctx),s=new Li(this.ctx),r=i.group(),n=this.getStrokeWidth(t);t.size=t.size-n/2;var o=e.config.plotOptions.radialBar.hollow.background,l=t.size-n*t.series.length-this.margin*t.series.length-n*parseInt(e.config.plotOptions.radialBar.track.strokeWidth,10)/100/2,h=l-e.config.plotOptions.radialBar.hollow.margin;void 0!==e.config.plotOptions.radialBar.hollow.image&&(o=this.drawHollowImage(t,r,l,o));var c=this.drawHollow({size:h,centerX:t.centerX,centerY:t.centerY,fill:o||"transparent"});if(e.config.plotOptions.radialBar.hollow.dropShadow.enabled){var d=e.config.plotOptions.radialBar.hollow.dropShadow;s.dropShadow(c,d)}var u=1;!this.radialDataLabels.total.show&&e.globals.series.length>1&&(u=0);var g=null;if(this.radialDataLabels.show){var p=e.globals.dom.Paper.findOne(".apexcharts-datalabels-group");g=this.renderInnerDataLabels(p,this.radialDataLabels,{hollowSize:l,centerX:t.centerX,centerY:t.centerY,opacity:u})}"back"===e.config.plotOptions.radialBar.hollow.position&&(r.add(c),g&&r.add(g));var f=!1;e.config.plotOptions.radialBar.inverseOrder&&(f=!0);for(var x=f?t.series.length-1:0;f?x>=0:x<t.series.length;f?x--:x++){var b=i.group({class:"apexcharts-series apexcharts-radial-series",seriesName:v.escapeString(e.globals.seriesNames[x])});r.add(b),b.attr({rel:x+1,"data:realIndex":x}),this.ctx.series.addCollapsedClassToSeries(b,x),t.size=t.size-n-this.margin;var m=a.fillPath({seriesNumber:x,size:t.size,value:t.series[x]}),y=this.startAngle,w=void 0,k=v.negToZero(t.series[x]>100?100:t.series[x])/100,A=Math.round(this.totalAngle*k)+this.startAngle,C=void 0;e.globals.dataChanged&&(w=this.startAngle,C=Math.round(this.totalAngle*v.negToZero(e.globals.previousPaths[x])/100)+w),Math.abs(A)+Math.abs(y)>360&&(A-=.01),Math.abs(C)+Math.abs(w)>360&&(C-=.01);var S=A-y,L=Array.isArray(e.config.stroke.dashArray)?e.config.stroke.dashArray[x]:e.config.stroke.dashArray,M=i.drawPath({d:"",stroke:m,strokeWidth:n,fill:"none",fillOpacity:e.config.fill.opacity,classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+x,strokeDashArray:L});if(Mi.setAttrs(M.node,{"data:angle":S,"data:value":t.series[x]}),e.config.chart.dropShadow.enabled){var P=e.config.chart.dropShadow;s.dropShadow(M,P,x)}if(s.setSelectionFilter(M,0,x),this.addListeners(M,this.radialDataLabels),b.add(M),M.attr({index:0,j:x}),this.barLabels.enabled){var I=v.polarToCartesian(t.centerX,t.centerY,t.size,y),T=this.barLabels.formatter(e.globals.seriesNames[x],{seriesIndex:x,w:e}),z=["apexcharts-radialbar-label"];this.barLabels.onClick||z.push("apexcharts-no-click");var X=this.barLabels.useSeriesColors?e.globals.colors[x]:e.config.chart.foreColor;X||(X=e.config.chart.foreColor);var R=I.x+this.barLabels.offsetX,E=I.y+this.barLabels.offsetY,Y=i.drawText({x:R,y:E,text:T,textAnchor:"end",dominantBaseline:"middle",fontFamily:this.barLabels.fontFamily,fontWeight:this.barLabels.fontWeight,fontSize:this.barLabels.fontSize,foreColor:X,cssClass:z.join(" ")});Y.on("click",this.onBarLabelClick),Y.attr({rel:x+1}),0!==y&&Y.attr({"transform-origin":"".concat(R," ").concat(E),transform:"rotate(".concat(y," 0 0)")}),b.add(Y)}var H=0;!this.initialAnim||e.globals.resized||e.globals.dataChanged||(H=e.config.chart.animations.speed),e.globals.dataChanged&&(H=e.config.chart.animations.dynamicAnimation.speed),this.animDur=H/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur),this.animatePaths(M,{centerX:t.centerX,centerY:t.centerY,endAngle:A,startAngle:y,prevEndAngle:C,prevStartAngle:w,size:t.size,i:x,totalItems:2,animBeginArr:this.animBeginArr,dur:H,shouldSetPrevPaths:!0})}return{g:r,elHollow:c,dataLabels:g}}},{key:"drawHollow",value:function(t){var e=new Mi(this.ctx).drawCircle(2*t.size);return e.attr({class:"apexcharts-radialbar-hollow",cx:t.centerX,cy:t.centerY,r:t.size,fill:t.fill}),e}},{key:"drawHollowImage",value:function(t,e,i,a){var s=this.w,r=new ji(this.ctx),n=v.randomId(),o=s.config.plotOptions.radialBar.hollow.image;if(s.config.plotOptions.radialBar.hollow.imageClipped)r.clippedImgArea({width:i,height:i,image:o,patternID:"pattern".concat(s.globals.cuid).concat(n)}),a="url(#pattern".concat(s.globals.cuid).concat(n,")");else{var l=s.config.plotOptions.radialBar.hollow.imageWidth,h=s.config.plotOptions.radialBar.hollow.imageHeight;if(void 0===l&&void 0===h){var c=s.globals.dom.Paper.image(o,(function(e){this.move(t.centerX-e.width/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-e.height/2+s.config.plotOptions.radialBar.hollow.imageOffsetY)}));e.add(c)}else{var d=s.globals.dom.Paper.image(o,(function(e){this.move(t.centerX-l/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-h/2+s.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(l,h)}));e.add(d)}}return a}},{key:"getStrokeWidth",value:function(t){var e=this.w;return t.size*(100-parseInt(e.config.plotOptions.radialBar.hollow.size,10))/100/(t.series.length+1)-this.margin}},{key:"onBarLabelClick",value:function(t){var e=parseInt(t.target.getAttribute("rel"),10)-1,i=this.barLabels.onClick,a=this.w;i&&i(a.globals.seriesNames[e],{w:a,seriesIndex:e})}}]),r}(),Oa=function(t){h(a,Pa);var e=n(a);function a(){return i(this,a),e.apply(this,arguments)}return s(a,[{key:"draw",value:function(t,e){var i=this.w,a=new Mi(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar,this.series=t,this.seriesRangeStart=i.globals.seriesRangeStart,this.seriesRangeEnd=i.globals.seriesRangeEnd,this.barHelpers.initVariables(t);for(var s=a.group({class:"apexcharts-rangebar-series apexcharts-plot-series"}),r=0;r<t.length;r++){var n,o,l,h,c=void 0,d=void 0,g=i.globals.comboCharts?e[r]:r,p=this.barHelpers.getGroupIndex(g).columnGroupIndex,f=a.group({class:"apexcharts-series",seriesName:v.escapeString(i.globals.seriesNames[g]),rel:r+1,"data:realIndex":g});this.ctx.series.addCollapsedClassToSeries(f,g),t[r].length>0&&(this.visibleI=this.visibleI+1);var x=0,b=0,m=0;this.yRatio.length>1&&(this.yaxisIndex=i.globals.seriesYAxisReverseMap[g][0],m=g);var y=this.barHelpers.initialPositions();d=y.y,h=y.zeroW,c=y.x,b=y.barWidth,x=y.barHeight,n=y.xDivision,o=y.yDivision,l=y.zeroH;for(var w=a.group({class:"apexcharts-datalabels","data:realIndex":g}),k=a.group({class:"apexcharts-rangebar-goals-markers"}),A=0;A<i.globals.dataPoints;A++){var C=this.barHelpers.getStrokeWidth(r,A,g),S=this.seriesRangeStart[r][A],L=this.seriesRangeEnd[r][A],M=null,P=null,I=null,T={x:c,y:d,strokeWidth:C,elSeries:f},z=this.seriesLen;if(i.config.plotOptions.bar.rangeBarGroupRows&&(z=1),void 0===i.config.series[r].data[A])break;if(this.isHorizontal){I=d+x*this.visibleI;var X=(o-x*z)/2;if(i.config.series[r].data[A].x){var R=this.detectOverlappingBars({i:r,j:A,barYPosition:I,srty:X,barHeight:x,yDivision:o,initPositions:y});x=R.barHeight,I=R.barYPosition}b=(M=this.drawRangeBarPaths(u({indexes:{i:r,j:A,realIndex:g},barHeight:x,barYPosition:I,zeroW:h,yDivision:o,y1:S,y2:L},T))).barWidth}else{i.globals.isXNumeric&&(c=(i.globals.seriesX[r][A]-i.globals.minX)/this.xRatio-b/2),P=c+b*this.visibleI;var E=(n-b*z)/2;if(i.config.series[r].data[A].x){var Y=this.detectOverlappingBars({i:r,j:A,barXPosition:P,srtx:E,barWidth:b,xDivision:n,initPositions:y});b=Y.barWidth,P=Y.barXPosition}x=(M=this.drawRangeColumnPaths(u({indexes:{i:r,j:A,realIndex:g,translationsIndex:m},barWidth:b,barXPosition:P,zeroH:l,xDivision:n},T))).barHeight}var H=this.barHelpers.drawGoalLine({barXPosition:M.barXPosition,barYPosition:I,goalX:M.goalX,goalY:M.goalY,barHeight:x,barWidth:b});H&&k.add(H),d=M.y,c=M.x;var O=this.barHelpers.getPathFillColor(t,r,A,g),F=i.globals.stroke.colors[g];this.renderSeries({realIndex:g,pathFill:O,lineFill:F,j:A,i:r,x:c,y:d,y1:S,y2:L,pathFrom:M.pathFrom,pathTo:M.pathTo,strokeWidth:C,elSeries:f,series:t,barHeight:x,barWidth:b,barXPosition:P,barYPosition:I,columnGroupIndex:p,elDataLabelsWrap:w,elGoalsMarkers:k,visibleSeries:this.visibleI,type:"rangebar"})}s.add(f)}return s}},{key:"detectOverlappingBars",value:function(t){var e=t.i,i=t.j,a=t.barYPosition,s=t.barXPosition,r=t.srty,n=t.srtx,o=t.barHeight,l=t.barWidth,h=t.yDivision,c=t.xDivision,d=t.initPositions,u=this.w,g=[],p=u.config.series[e].data[i].rangeName,f=u.config.series[e].data[i].x,x=Array.isArray(f)?f.join(" "):f,b=u.globals.labels.map((function(t){return Array.isArray(t)?t.join(" "):t})).indexOf(x),m=u.globals.seriesRange[e].findIndex((function(t){return t.x===x&&t.overlaps.length>0}));return this.isHorizontal?(a=u.config.plotOptions.bar.rangeBarGroupRows?r+h*b:r+o*this.visibleI+h*b,m>-1&&!u.config.plotOptions.bar.rangeBarOverlap&&(g=u.globals.seriesRange[e][m].overlaps).indexOf(p)>-1&&(a=(o=d.barHeight/g.length)*this.visibleI+h*(100-parseInt(this.barOptions.barHeight,10))/100/2+o*(this.visibleI+g.indexOf(p))+h*b)):(b>-1&&!u.globals.timescaleLabels.length&&(s=u.config.plotOptions.bar.rangeBarGroupRows?n+c*b:n+l*this.visibleI+c*b),m>-1&&!u.config.plotOptions.bar.rangeBarOverlap&&(g=u.globals.seriesRange[e][m].overlaps).indexOf(p)>-1&&(s=(l=d.barWidth/g.length)*this.visibleI+c*(100-parseInt(this.barOptions.barWidth,10))/100/2+l*(this.visibleI+g.indexOf(p))+c*b)),{barYPosition:a,barXPosition:s,barHeight:o,barWidth:l}}},{key:"drawRangeColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.xDivision,s=t.barWidth,r=t.barXPosition,n=t.zeroH,o=this.w,l=e.i,h=e.j,c=e.realIndex,d=e.translationsIndex,u=this.yRatio[d],g=this.getRangeValue(c,h),p=Math.min(g.start,g.end),f=Math.max(g.start,g.end);void 0===this.series[l][h]||null===this.series[l][h]?p=n:(p=n-p/u,f=n-f/u);var x=Math.abs(f-p),b=this.barHelpers.getColumnPaths({barXPosition:r,barWidth:s,y1:p,y2:f,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,realIndex:c,i:c,j:h,w:o});if(o.globals.isXNumeric){var m=this.getBarXForNumericXAxis({x:i,j:h,realIndex:c,barWidth:s});i=m.x,r=m.barXPosition}else i+=a;return{pathTo:b.pathTo,pathFrom:b.pathFrom,barHeight:x,x:i,y:g.start<0&&g.end<0?p:f,goalY:this.barHelpers.getGoalValues("y",null,n,l,h,d),barXPosition:r}}},{key:"preventBarOverflow",value:function(t){var e=this.w;return t<0&&(t=0),t>e.globals.gridWidth&&(t=e.globals.gridWidth),t}},{key:"drawRangeBarPaths",value:function(t){var e=t.indexes,i=t.y,a=t.y1,s=t.y2,r=t.yDivision,n=t.barHeight,o=t.barYPosition,l=t.zeroW,h=this.w,c=e.realIndex,d=e.j,u=this.preventBarOverflow(l+a/this.invertedYRatio),g=this.preventBarOverflow(l+s/this.invertedYRatio),p=this.getRangeValue(c,d),f=Math.abs(g-u),x=this.barHelpers.getBarpaths({barYPosition:o,barHeight:n,x1:u,x2:g,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,i:c,realIndex:c,j:d,w:h});return h.globals.isXNumeric||(i+=r),{pathTo:x.pathTo,pathFrom:x.pathFrom,barWidth:f,x:p.start<0&&p.end<0?u:g,goalX:this.barHelpers.getGoalValues("x",l,null,c,d),y:i}}},{key:"getRangeValue",value:function(t,e){var i=this.w;return{start:i.globals.seriesRangeStart[t][e],end:i.globals.seriesRangeEnd[t][e]}}}]),a}(),Fa=function(){function t(e){i(this,t),this.w=e.w,this.lineCtx=e}return s(t,[{key:"sameValueSeriesFix",value:function(t,e){var i=this.w;if(("gradient"===i.config.fill.type||"gradient"===i.config.fill.type[t])&&new Pi(this.lineCtx.ctx,i).seriesHaveSameValues(t)){var a=e[t].slice();a[a.length-1]=a[a.length-1]+1e-6,e[t]=a}return e}},{key:"calculatePoints",value:function(t){var e=t.series,i=t.realIndex,a=t.x,s=t.y,r=t.i,n=t.j,o=t.prevY,l=this.w,h=[],c=[];if(0===n){var d=this.lineCtx.categoryAxisCorrection+l.config.markers.offsetX;l.globals.isXNumeric&&(d=(l.globals.seriesX[i][0]-l.globals.minX)/this.lineCtx.xRatio+l.config.markers.offsetX),h.push(d),c.push(v.isNumber(e[r][0])?o+l.config.markers.offsetY:null),h.push(a+l.config.markers.offsetX),c.push(v.isNumber(e[r][n+1])?s+l.config.markers.offsetY:null)}else h.push(a+l.config.markers.offsetX),c.push(v.isNumber(e[r][n+1])?s+l.config.markers.offsetY:null);return{x:h,y:c}}},{key:"checkPreviousPaths",value:function(t){for(var e=t.pathFromLine,i=t.pathFromArea,a=t.realIndex,s=this.w,r=0;r<s.globals.previousPaths.length;r++){var n=s.globals.previousPaths[r];("line"===n.type||"area"===n.type)&&n.paths.length>0&&parseInt(n.realIndex,10)===parseInt(a,10)&&("line"===n.type?(this.lineCtx.appendPathFrom=!1,e=s.globals.previousPaths[r].paths[0].d):"area"===n.type&&(this.lineCtx.appendPathFrom=!1,i=s.globals.previousPaths[r].paths[0].d,s.config.stroke.show&&s.globals.previousPaths[r].paths[1]&&(e=s.globals.previousPaths[r].paths[1].d)))}return{pathFromLine:e,pathFromArea:i}}},{key:"determineFirstPrevY",value:function(t){var e,i,a,s=t.i,r=t.realIndex,n=t.series,o=t.prevY,l=t.lineYPosition,h=t.translationsIndex,c=this.w,d=c.config.chart.stacked&&!c.globals.comboCharts||c.config.chart.stacked&&c.globals.comboCharts&&(!this.w.config.chart.stackOnlyBar||"bar"===(null===(e=this.w.config.series[r])||void 0===e?void 0:e.type)||"column"===(null===(i=this.w.config.series[r])||void 0===i?void 0:i.type));if(void 0!==(null===(a=n[s])||void 0===a?void 0:a[0]))o=(l=d&&s>0?this.lineCtx.prevSeriesY[s-1][0]:this.lineCtx.zeroY)-n[s][0]/this.lineCtx.yRatio[h]+2*(this.lineCtx.isReversed?n[s][0]/this.lineCtx.yRatio[h]:0);else if(d&&s>0&&void 0===n[s][0])for(var u=s-1;u>=0;u--)if(null!==n[u][0]&&void 0!==n[u][0]){o=l=this.lineCtx.prevSeriesY[u][0];break}return{prevY:o,lineYPosition:l}}}]),t}(),Da=function(t){for(var e,i,a,s,r=function(t){for(var e=[],i=t[0],a=t[1],s=e[0]=Wa(i,a),r=1,n=t.length-1;r<n;r++)i=a,a=t[r+1],e[r]=.5*(s+(s=Wa(i,a)));return e[r]=s,e}(t),n=t.length-1,o=[],l=0;l<n;l++)a=Wa(t[l],t[l+1]),Math.abs(a)<1e-6?r[l]=r[l+1]=0:(s=(e=r[l]/a)*e+(i=r[l+1]/a)*i)>9&&(s=3*a/Math.sqrt(s),r[l]=s*e,r[l+1]=s*i);for(var h=0;h<=n;h++)s=(t[Math.min(n,h+1)][0]-t[Math.max(0,h-1)][0])/(6*(1+r[h]*r[h])),o.push([s||0,r[h]*s||0]);return o},_a=function(t){var e=Da(t),i=t[1],a=t[0],s=[],r=e[1],n=e[0];s.push(a,[a[0]+n[0],a[1]+n[1],i[0]-r[0],i[1]-r[1],i[0],i[1]]);for(var o=2,l=e.length;o<l;o++){var h=t[o],c=e[o];s.push([h[0]-c[0],h[1]-c[1],h[0],h[1]])}return s},Na=function(t,e,i){var a=t.slice(e,i);if(e){if(i-e>1&&a[1].length<6){var s=a[0].length;a[1]=[2*a[0][s-2]-a[0][s-4],2*a[0][s-1]-a[0][s-3]].concat(a[1])}a[0]=a[0].slice(-2)}return a};function Wa(t,e){return(e[1]-t[1])/(e[0]-t[0])}var Ba=function(){function t(e,a,s){i(this,t),this.ctx=e,this.w=e.w,this.xyRatios=a,this.pointsChart=!("bubble"!==this.w.config.chart.type&&"scatter"!==this.w.config.chart.type)||s,this.scatter=new Ui(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.lineHelpers=new Fa(this),this.markers=new Vi(this.ctx),this.prevSeriesY=[],this.categoryAxisCorrection=0,this.yaxisIndex=0}return s(t,[{key:"draw",value:function(t,e,i,a){var s,r=this.w,n=new Mi(this.ctx),o=r.globals.comboCharts?e:r.config.chart.type,l=n.group({class:"apexcharts-".concat(o,"-series apexcharts-plot-series")}),h=new Pi(this.ctx,r);this.yRatio=this.xyRatios.yRatio,this.zRatio=this.xyRatios.zRatio,this.xRatio=this.xyRatios.xRatio,this.baseLineY=this.xyRatios.baseLineY,t=h.getLogSeries(t),this.yRatio=h.getLogYRatios(this.yRatio),this.prevSeriesY=[];for(var c=[],d=0;d<t.length;d++){t=this.lineHelpers.sameValueSeriesFix(d,t);var g=r.globals.comboCharts?i[d]:d,p=this.yRatio.length>1?g:0;this._initSerieVariables(t,d,g);var f=[],x=[],b=[],m=r.globals.padHorizontal+this.categoryAxisCorrection;this.ctx.series.addCollapsedClassToSeries(this.elSeries,g),r.globals.isXNumeric&&r.globals.seriesX.length>0&&(m=(r.globals.seriesX[g][0]-r.globals.minX)/this.xRatio),b.push(m);var v,y=m,w=void 0,k=y,A=this.zeroY,C=this.zeroY;A=this.lineHelpers.determineFirstPrevY({i:d,realIndex:g,series:t,prevY:A,lineYPosition:0,translationsIndex:p}).prevY,"monotoneCubic"===r.config.stroke.curve&&null===t[d][0]?f.push(null):f.push(A),v=A;"rangeArea"===o&&(w=C=this.lineHelpers.determineFirstPrevY({i:d,realIndex:g,series:a,prevY:C,lineYPosition:0,translationsIndex:p}).prevY,x.push(null!==f[0]?C:null));var S=this._calculatePathsFrom({type:o,series:t,i:d,realIndex:g,translationsIndex:p,prevX:k,prevY:A,prevY2:C}),L=[f[0]],M=[x[0]],P={type:o,series:t,realIndex:g,translationsIndex:p,i:d,x:m,y:1,pX:y,pY:v,pathsFrom:S,linePaths:[],areaPaths:[],seriesIndex:i,lineYPosition:0,xArrj:b,yArrj:f,y2Arrj:x,seriesRangeEnd:a},I=this._iterateOverDataPoints(u(u({},P),{},{iterations:"rangeArea"===o?t[d].length-1:void 0,isRangeStart:!0}));if("rangeArea"===o){for(var T=this._calculatePathsFrom({series:a,i:d,realIndex:g,prevX:k,prevY:C}),z=this._iterateOverDataPoints(u(u({},P),{},{series:a,xArrj:[m],yArrj:L,y2Arrj:M,pY:w,areaPaths:I.areaPaths,pathsFrom:T,iterations:a[d].length-1,isRangeStart:!1})),X=I.linePaths.length/2,R=0;R<X;R++)I.linePaths[R]=z.linePaths[R+X]+I.linePaths[R];I.linePaths.splice(X),I.pathFromLine=z.pathFromLine+I.pathFromLine}else I.pathFromArea+="z";this._handlePaths({type:o,realIndex:g,i:d,paths:I}),this.elSeries.add(this.elPointsMain),this.elSeries.add(this.elDataLabelsWrap),c.push(this.elSeries)}if(void 0!==(null===(s=r.config.series[0])||void 0===s?void 0:s.zIndex)&&c.sort((function(t,e){return Number(t.node.getAttribute("zIndex"))-Number(e.node.getAttribute("zIndex"))})),r.config.chart.stacked)for(var E=c.length-1;E>=0;E--)l.add(c[E]);else for(var Y=0;Y<c.length;Y++)l.add(c[Y]);return l}},{key:"_initSerieVariables",value:function(t,e,i){var a=this.w,s=new Mi(this.ctx);this.xDivision=a.globals.gridWidth/(a.globals.dataPoints-("on"===a.config.xaxis.tickPlacement?1:0)),this.strokeWidth=Array.isArray(a.config.stroke.width)?a.config.stroke.width[i]:a.config.stroke.width;var r=0;this.yRatio.length>1&&(this.yaxisIndex=a.globals.seriesYAxisReverseMap[i],r=i),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed,this.zeroY=a.globals.gridHeight-this.baseLineY[r]-(this.isReversed?a.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[r]:0),this.areaBottomY=this.zeroY,(this.zeroY>a.globals.gridHeight||"end"===a.config.plotOptions.area.fillTo)&&(this.areaBottomY=a.globals.gridHeight),this.categoryAxisCorrection=this.xDivision/2,this.elSeries=s.group({class:"apexcharts-series",zIndex:void 0!==a.config.series[i].zIndex?a.config.series[i].zIndex:i,seriesName:v.escapeString(a.globals.seriesNames[i])}),this.elPointsMain=s.group({class:"apexcharts-series-markers-wrap","data:realIndex":i}),this.elDataLabelsWrap=s.group({class:"apexcharts-datalabels","data:realIndex":i});var n=t[e].length===a.globals.dataPoints;this.elSeries.attr({"data:longestSeries":n,rel:e+1,"data:realIndex":i}),this.appendPathFrom=!0}},{key:"_calculatePathsFrom",value:function(t){var e,i,a,s,r=t.type,n=t.series,o=t.i,l=t.realIndex,h=t.translationsIndex,c=t.prevX,d=t.prevY,u=t.prevY2,g=this.w,p=new Mi(this.ctx);if(null===n[o][0]){for(var f=0;f<n[o].length;f++)if(null!==n[o][f]){c=this.xDivision*f,d=this.zeroY-n[o][f]/this.yRatio[h],e=p.move(c,d),i=p.move(c,this.areaBottomY);break}}else e=p.move(c,d),"rangeArea"===r&&(e=p.move(c,u)+p.line(c,d)),i=p.move(c,this.areaBottomY)+p.line(c,d);if(a=p.move(0,this.areaBottomY)+p.line(0,this.areaBottomY),s=p.move(0,this.areaBottomY)+p.line(0,this.areaBottomY),g.globals.previousPaths.length>0){var x=this.lineHelpers.checkPreviousPaths({pathFromLine:a,pathFromArea:s,realIndex:l});a=x.pathFromLine,s=x.pathFromArea}return{prevX:c,prevY:d,linePath:e,areaPath:i,pathFromLine:a,pathFromArea:s}}},{key:"_handlePaths",value:function(t){var e=t.type,i=t.realIndex,a=t.i,s=t.paths,r=this.w,n=new Mi(this.ctx),o=new ji(this.ctx);this.prevSeriesY.push(s.yArrj),r.globals.seriesXvalues[i]=s.xArrj,r.globals.seriesYvalues[i]=s.yArrj;var l=r.config.forecastDataPoints;if(l.count>0&&"rangeArea"!==e){var h=r.globals.seriesXvalues[i][r.globals.seriesXvalues[i].length-l.count-1],c=n.drawRect(h,0,r.globals.gridWidth,r.globals.gridHeight,0);r.globals.dom.elForecastMask.appendChild(c.node);var d=n.drawRect(0,0,h,r.globals.gridHeight,0);r.globals.dom.elNonForecastMask.appendChild(d.node)}this.pointsChart||r.globals.delayedElements.push({el:this.elPointsMain.node,index:i});var g={i:a,realIndex:i,animationDelay:a,initialSpeed:r.config.chart.animations.speed,dataChangeSpeed:r.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(e)};if("area"===e)for(var p=o.fillPath({seriesNumber:i}),f=0;f<s.areaPaths.length;f++){var x=n.renderPaths(u(u({},g),{},{pathFrom:s.pathFromArea,pathTo:s.areaPaths[f],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:p}));this.elSeries.add(x)}if(r.config.stroke.show&&!this.pointsChart){var b=null;if("line"===e)b=o.fillPath({seriesNumber:i,i:a});else if("solid"===r.config.stroke.fill.type)b=r.globals.stroke.colors[i];else{var m=r.config.fill;r.config.fill=r.config.stroke.fill,b=o.fillPath({seriesNumber:i,i:a}),r.config.fill=m}for(var v=0;v<s.linePaths.length;v++){var y=b;"rangeArea"===e&&(y=o.fillPath({seriesNumber:i}));var w=u(u({},g),{},{pathFrom:s.pathFromLine,pathTo:s.linePaths[v],stroke:b,strokeWidth:this.strokeWidth,strokeLineCap:r.config.stroke.lineCap,fill:"rangeArea"===e?y:"none"}),k=n.renderPaths(w);if(this.elSeries.add(k),k.attr("fill-rule","evenodd"),l.count>0&&"rangeArea"!==e){var A=n.renderPaths(w);A.node.setAttribute("stroke-dasharray",l.dashArray),l.strokeWidth&&A.node.setAttribute("stroke-width",l.strokeWidth),this.elSeries.add(A),A.attr("clip-path","url(#forecastMask".concat(r.globals.cuid,")")),k.attr("clip-path","url(#nonForecastMask".concat(r.globals.cuid,")"))}}}}},{key:"_iterateOverDataPoints",value:function(t){var e,i,a=this,s=t.type,r=t.series,n=t.iterations,o=t.realIndex,l=t.translationsIndex,h=t.i,c=t.x,d=t.y,u=t.pX,g=t.pY,p=t.pathsFrom,f=t.linePaths,x=t.areaPaths,b=t.seriesIndex,m=t.lineYPosition,y=t.xArrj,w=t.yArrj,k=t.y2Arrj,A=t.isRangeStart,C=t.seriesRangeEnd,S=this.w,L=new Mi(this.ctx),M=this.yRatio,P=p.prevY,I=p.linePath,T=p.areaPath,z=p.pathFromLine,X=p.pathFromArea,R=v.isNumber(S.globals.minYArr[o])?S.globals.minYArr[o]:S.globals.minY;n||(n=S.globals.dataPoints>1?S.globals.dataPoints-1:S.globals.dataPoints);var E=function(t,e){return e-t/M[l]+2*(a.isReversed?t/M[l]:0)},Y=d,H=S.config.chart.stacked&&!S.globals.comboCharts||S.config.chart.stacked&&S.globals.comboCharts&&(!this.w.config.chart.stackOnlyBar||"bar"===(null===(e=this.w.config.series[o])||void 0===e?void 0:e.type)||"column"===(null===(i=this.w.config.series[o])||void 0===i?void 0:i.type)),O=S.config.stroke.curve;Array.isArray(O)&&(O=Array.isArray(b)?O[b[h]]:O[h]);for(var F,D=0,_=0;_<n;_++){var N=void 0===r[h][_+1]||null===r[h][_+1];if(S.globals.isXNumeric){var W=S.globals.seriesX[o][_+1];void 0===S.globals.seriesX[o][_+1]&&(W=S.globals.seriesX[o][n-1]),c=(W-S.globals.minX)/this.xRatio}else c+=this.xDivision;if(H)if(h>0&&S.globals.collapsedSeries.length<S.config.series.length-1){m=this.prevSeriesY[function(t){for(var e=t;e>0;e--){if(!(S.globals.collapsedSeriesIndices.indexOf((null==b?void 0:b[e])||e)>-1))return e;e--}return 0}(h-1)][_+1]}else m=this.zeroY;else m=this.zeroY;N?d=E(R,m):(d=E(r[h][_+1],m),"rangeArea"===s&&(Y=E(C[h][_+1],m))),y.push(c),!N||"smooth"!==S.config.stroke.curve&&"monotoneCubic"!==S.config.stroke.curve?(w.push(d),k.push(Y)):(w.push(null),k.push(null));var B=this.lineHelpers.calculatePoints({series:r,x:c,y:d,realIndex:o,i:h,j:_,prevY:P}),G=this._createPaths({type:s,series:r,i:h,realIndex:o,j:_,x:c,y:d,y2:Y,xArrj:y,yArrj:w,y2Arrj:k,pX:u,pY:g,pathState:D,segmentStartX:F,linePath:I,areaPath:T,linePaths:f,areaPaths:x,curve:O,isRangeStart:A});x=G.areaPaths,f=G.linePaths,u=G.pX,g=G.pY,D=G.pathState,F=G.segmentStartX,T=G.areaPath,I=G.linePath,!this.appendPathFrom||S.globals.hasNullValues||"monotoneCubic"===O&&"rangeArea"===s||(z+=L.line(c,this.areaBottomY),X+=L.line(c,this.areaBottomY)),this.handleNullDataPoints(r,B,h,_,o),this._handleMarkersAndLabels({type:s,pointsPos:B,i:h,j:_,realIndex:o,isRangeStart:A})}return{yArrj:w,xArrj:y,pathFromArea:X,areaPaths:x,pathFromLine:z,linePaths:f,linePath:I,areaPath:T}}},{key:"_handleMarkersAndLabels",value:function(t){var e=t.type,i=t.pointsPos,a=t.isRangeStart,s=t.i,r=t.j,n=t.realIndex,o=this.w,l=new qi(this.ctx);if(this.pointsChart)this.scatter.draw(this.elSeries,r,{realIndex:n,pointsPos:i,zRatio:this.zRatio,elParent:this.elPointsMain});else{o.globals.series[s].length>1&&this.elPointsMain.node.classList.add("apexcharts-element-hidden");var h=this.markers.plotChartMarkers(i,n,r+1);null!==h&&this.elPointsMain.add(h)}var c=l.drawDataLabel({type:e,isRangeStart:a,pos:i,i:n,j:r+1});null!==c&&this.elDataLabelsWrap.add(c)}},{key:"_createPaths",value:function(t){var e=t.type,i=t.series,a=t.i;t.realIndex;var s,r=t.j,n=t.x,o=t.y,l=t.xArrj,h=t.yArrj,c=t.y2,d=t.y2Arrj,u=t.pX,g=t.pY,p=t.pathState,f=t.segmentStartX,x=t.linePath,b=t.areaPath,m=t.linePaths,v=t.areaPaths,y=t.curve,w=t.isRangeStart,k=new Mi(this.ctx),A=this.areaBottomY,C="rangeArea"===e,S="rangeArea"===e&&w;switch(y){case"monotoneCubic":var L=w?h:d;switch(p){case 0:if(null===L[r+1])break;p=1;case 1:if(!(C?l.length===i[a].length:r===i[a].length-2))break;case 2:var M=w?l:l.slice().reverse(),P=w?L:L.slice().reverse(),I=(s=P,M.map((function(t,e){return[t,s[e]]})).filter((function(t){return null!==t[1]}))),T=I.length>1?_a(I):I,z=[];C&&(S?v=I:z=v.reverse());var X=0,R=0;if(function(t,e){for(var i=function(t){var e=[],i=0;return t.forEach((function(t){null!==t?i++:i>0&&(e.push(i),i=0)})),i>0&&e.push(i),e}(t),a=[],s=0,r=0;s<i.length;r+=i[s++])a[s]=Na(e,r,r+i[s]);return a}(P,T).forEach((function(t){X++;var e=function(t){for(var e="",i=0;i<t.length;i++){var a=t[i],s=a.length;s>4?(e+="C".concat(a[0],", ").concat(a[1]),e+=", ".concat(a[2],", ").concat(a[3]),e+=", ".concat(a[4],", ").concat(a[5])):s>2&&(e+="S".concat(a[0],", ").concat(a[1]),e+=", ".concat(a[2],", ").concat(a[3]))}return e}(t),i=R,a=(R+=t.length)-1;S?x=k.move(I[i][0],I[i][1])+e:C?x=k.move(z[i][0],z[i][1])+k.line(I[i][0],I[i][1])+e+k.line(z[a][0],z[a][1]):(x=k.move(I[i][0],I[i][1])+e,b=x+k.line(I[a][0],A)+k.line(I[i][0],A)+"z",v.push(b)),m.push(x)})),C&&X>1&&!S){var E=m.slice(X).reverse();m.splice(X),E.forEach((function(t){return m.push(t)}))}p=0}break;case"smooth":var Y=.35*(n-u);if(null===i[a][r])p=0;else switch(p){case 0:if(f=u,x=S?k.move(u,d[r])+k.line(u,g):k.move(u,g),b=k.move(u,g),null===i[a][r+1]||void 0===i[a][r+1]){m.push(x),v.push(b);break}if(p=1,r<i[a].length-2){var H=k.curve(u+Y,g,n-Y,o,n,o);x+=H,b+=H;break}case 1:if(null===i[a][r+1])x+=S?k.line(u,c):k.move(u,g),b+=k.line(u,A)+k.line(f,A)+"z",m.push(x),v.push(b),p=-1;else{var O=k.curve(u+Y,g,n-Y,o,n,o);x+=O,b+=O,r>=i[a].length-2&&(S&&(x+=k.curve(n,o,n,o,n,c)+k.move(n,c)),b+=k.curve(n,o,n,o,n,A)+k.line(f,A)+"z",m.push(x),v.push(b),p=-1)}}u=n,g=o;break;default:var F=function(t,e,i){var a=[];switch(t){case"stepline":a=k.line(e,null,"H")+k.line(null,i,"V");break;case"linestep":a=k.line(null,i,"V")+k.line(e,null,"H");break;case"straight":a=k.line(e,i)}return a};if(null===i[a][r])p=0;else switch(p){case 0:if(f=u,x=S?k.move(u,d[r])+k.line(u,g):k.move(u,g),b=k.move(u,g),null===i[a][r+1]||void 0===i[a][r+1]){m.push(x),v.push(b);break}if(p=1,r<i[a].length-2){var D=F(y,n,o);x+=D,b+=D;break}case 1:if(null===i[a][r+1])x+=S?k.line(u,c):k.move(u,g),b+=k.line(u,A)+k.line(f,A)+"z",m.push(x),v.push(b),p=-1;else{var _=F(y,n,o);x+=_,b+=_,r>=i[a].length-2&&(S&&(x+=k.line(n,c)),b+=k.line(n,A)+k.line(f,A)+"z",m.push(x),v.push(b),p=-1)}}u=n,g=o}return{linePaths:m,areaPaths:v,pX:u,pY:g,pathState:p,segmentStartX:f,linePath:x,areaPath:b}}},{key:"handleNullDataPoints",value:function(t,e,i,a,s){var r=this.w;if(null===t[i][a]&&r.config.markers.showNullDataPoints||1===t[i].length){var n=this.strokeWidth-r.config.markers.strokeWidth/2;n>0||(n=0);var o=this.markers.plotChartMarkers(e,s,a+1,n,!0);null!==o&&this.elPointsMain.add(o)}}}]),t}();window.TreemapSquared={},window.TreemapSquared.generate=function(){function t(e,i,a,s){this.xoffset=e,this.yoffset=i,this.height=s,this.width=a,this.shortestEdge=function(){return Math.min(this.height,this.width)},this.getCoordinates=function(t){var e,i=[],a=this.xoffset,s=this.yoffset,n=r(t)/this.height,o=r(t)/this.width;if(this.width>=this.height)for(e=0;e<t.length;e++)i.push([a,s,a+n,s+t[e]/n]),s+=t[e]/n;else for(e=0;e<t.length;e++)i.push([a,s,a+t[e]/o,s+o]),a+=t[e]/o;return i},this.cutArea=function(e){var i;if(this.width>=this.height){var a=e/this.height,s=this.width-a;i=new t(this.xoffset+a,this.yoffset,s,this.height)}else{var r=e/this.width,n=this.height-r;i=new t(this.xoffset,this.yoffset+r,this.width,n)}return i}}function e(e,a,s,n,o){n=void 0===n?0:n,o=void 0===o?0:o;var l=i(function(t,e){var i,a=[],s=e/r(t);for(i=0;i<t.length;i++)a[i]=t[i]*s;return a}(e,a*s),[],new t(n,o,a,s),[]);return function(t){var e,i,a=[];for(e=0;e<t.length;e++)for(i=0;i<t[e].length;i++)a.push(t[e][i]);return a}(l)}function i(t,e,s,n){var o,l,h;if(0!==t.length)return o=s.shortestEdge(),function(t,e,i){var s;if(0===t.length)return!0;(s=t.slice()).push(e);var r=a(t,i),n=a(s,i);return r>=n}(e,l=t[0],o)?(e.push(l),i(t.slice(1),e,s,n)):(h=s.cutArea(r(e),n),n.push(s.getCoordinates(e)),i(t,[],h,n)),n;n.push(s.getCoordinates(e))}function a(t,e){var i=Math.min.apply(Math,t),a=Math.max.apply(Math,t),s=r(t);return Math.max(Math.pow(e,2)*a/Math.pow(s,2),Math.pow(s,2)/(Math.pow(e,2)*i))}function s(t){return t&&t.constructor===Array}function r(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e];return i}function n(t){var e,i=0;if(s(t[0]))for(e=0;e<t.length;e++)i+=n(t[e]);else i=r(t);return i}return function t(i,a,r,o,l){o=void 0===o?0:o,l=void 0===l?0:l;var h,c,d=[],u=[];if(s(i[0])){for(c=0;c<i.length;c++)d[c]=n(i[c]);for(h=e(d,a,r,o,l),c=0;c<i.length;c++)u.push(t(i[c],h[c][2]-h[c][0],h[c][3]-h[c][1],h[c][0],h[c][1]))}else u=e(i,a,r,o,l);return u}}();var Ga=function(){function t(e,a){i(this,t),this.ctx=e,this.w=e.w,this.strokeWidth=this.w.config.stroke.width,this.helpers=new za(e),this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.labels=[]}return s(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new Mi(this.ctx),s=new ji(this.ctx),r=a.group({class:"apexcharts-treemap"});if(i.globals.noData)return r;var n=[];return t.forEach((function(t){var e=t.map((function(t){return Math.abs(t)}));n.push(e)})),this.negRange=this.helpers.checkColorRange(),i.config.series.forEach((function(t,i){t.data.forEach((function(t){Array.isArray(e.labels[i])||(e.labels[i]=[]),e.labels[i].push(t.x)}))})),window.TreemapSquared.generate(n,i.globals.gridWidth,i.globals.gridHeight).forEach((function(n,o){var l=a.group({class:"apexcharts-series apexcharts-treemap-series",seriesName:v.escapeString(i.globals.seriesNames[o]),rel:o+1,"data:realIndex":o});if(i.config.chart.dropShadow.enabled){var h=i.config.chart.dropShadow;new Li(e.ctx).dropShadow(r,h,o)}var c=a.group({class:"apexcharts-data-labels"});n.forEach((function(r,n){var h=r[0],c=r[1],d=r[2],u=r[3],g=a.drawRect(h,c,d-h,u-c,i.config.plotOptions.treemap.borderRadius,"#fff",1,e.strokeWidth,i.config.plotOptions.treemap.useFillColorAsStroke?f:i.globals.stroke.colors[o]);g.attr({cx:h,cy:c,index:o,i:o,j:n,width:d-h,height:u-c});var p=e.helpers.getShadeColor(i.config.chart.type,o,n,e.negRange),f=p.color,x=s.fillPath({color:f,seriesNumber:o,dataPointIndex:n});g.node.classList.add("apexcharts-treemap-rect"),g.attr({fill:x}),e.helpers.addListeners(g);var b={x:h+(d-h)/2,y:c+(u-c)/2,width:0,height:0},m={x:h,y:c,width:d-h,height:u-c};if(i.config.chart.animations.enabled&&!i.globals.dataChanged){var v=1;i.globals.resized||(v=i.config.chart.animations.speed),e.animateTreemap(g,b,m,v)}if(i.globals.dataChanged){var y=1;e.dynamicAnim.enabled&&i.globals.shouldAnimate&&(y=e.dynamicAnim.speed,i.globals.previousPaths[o]&&i.globals.previousPaths[o][n]&&i.globals.previousPaths[o][n].rect&&(b=i.globals.previousPaths[o][n].rect),e.animateTreemap(g,b,m,y))}var w=e.getFontSize(r),k=i.config.dataLabels.formatter(e.labels[o][n],{value:i.globals.series[o][n],seriesIndex:o,dataPointIndex:n,w:i});"truncate"===i.config.plotOptions.treemap.dataLabels.format&&(w=parseInt(i.config.dataLabels.style.fontSize,10),k=e.truncateLabels(k,w,h,c,d,u));var A=null;i.globals.series[o][n]&&(A=e.helpers.calculateDataLabels({text:k,x:(h+d)/2,y:(c+u)/2+e.strokeWidth/2+w/3,i:o,j:n,colorProps:p,fontSize:w,series:t})),i.config.dataLabels.enabled&&A&&e.rotateToFitLabel(A,w,k,h,c,d,u),l.add(g),null!==A&&l.add(A)})),l.add(c),r.add(l)})),r}},{key:"getFontSize",value:function(t){var e=this.w;var i=function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=e[i].length;return a}(this.labels)/function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=1;return a}(this.labels);return function(t,a){var s=t*a,r=Math.pow(s,.5);return Math.min(r/i,parseInt(e.config.dataLabels.style.fontSize,10))}(t[2]-t[0],t[3]-t[1])}},{key:"rotateToFitLabel",value:function(t,e,i,a,s,r,n){var o=new Mi(this.ctx),l=o.getTextRects(i,e);if(l.width+this.w.config.stroke.width+5>r-a&&l.width<=n-s){var h=o.rotateAroundCenter(t.node);t.node.setAttribute("transform","rotate(-90 ".concat(h.x," ").concat(h.y,") translate(").concat(l.height/3,")"))}}},{key:"truncateLabels",value:function(t,e,i,a,s,r){var n=new Mi(this.ctx),o=n.getTextRects(t,e).width+this.w.config.stroke.width+5>s-i&&r-a>s-i?r-a:s-i,l=n.getTextBasedOnMaxWidth({text:t,maxWidth:o,fontSize:e});return t.length!==l.length&&o/e<5?"":l}},{key:"animateTreemap",value:function(t,e,i,a){var s=new y(this.ctx);s.animateRect(t,{x:e.x,y:e.y,width:e.width,height:e.height},{x:i.x,y:i.y,width:i.width,height:i.height},a,(function(){s.animationCompleted(t)}))}}]),t}(),ja=86400,Va=10/ja,Ua=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w,this.timeScaleArray=[],this.utc=this.w.config.xaxis.labels.datetimeUTC}return s(t,[{key:"calculateTimeScaleTicks",value:function(t,e){var i=this,a=this.w;if(a.globals.allSeriesCollapsed)return a.globals.labels=[],a.globals.timescaleLabels=[],[];var s=new zi(this.ctx),r=(e-t)/864e5;this.determineInterval(r),a.globals.disableZoomIn=!1,a.globals.disableZoomOut=!1,r<Va?a.globals.disableZoomIn=!0:r>5e4&&(a.globals.disableZoomOut=!0);var n=s.getTimeUnitsfromTimestamp(t,e,this.utc),o=a.globals.gridWidth/r,l=o/24,h=l/60,c=h/60,d=Math.floor(24*r),g=Math.floor(1440*r),p=Math.floor(r*ja),f=Math.floor(r),x=Math.floor(r/30),b=Math.floor(r/365),m={minMillisecond:n.minMillisecond,minSecond:n.minSecond,minMinute:n.minMinute,minHour:n.minHour,minDate:n.minDate,minMonth:n.minMonth,minYear:n.minYear},v={firstVal:m,currentMillisecond:m.minMillisecond,currentSecond:m.minSecond,currentMinute:m.minMinute,currentHour:m.minHour,currentMonthDate:m.minDate,currentDate:m.minDate,currentMonth:m.minMonth,currentYear:m.minYear,daysWidthOnXAxis:o,hoursWidthOnXAxis:l,minutesWidthOnXAxis:h,secondsWidthOnXAxis:c,numberOfSeconds:p,numberOfMinutes:g,numberOfHours:d,numberOfDays:f,numberOfMonths:x,numberOfYears:b};switch(this.tickInterval){case"years":this.generateYearScale(v);break;case"months":case"half_year":this.generateMonthScale(v);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(v);break;case"hours":this.generateHourScale(v);break;case"minutes_fives":case"minutes":this.generateMinuteScale(v);break;case"seconds_tens":case"seconds_fives":case"seconds":this.generateSecondScale(v)}var y=this.timeScaleArray.map((function(t){var e={position:t.position,unit:t.unit,year:t.year,day:t.day?t.day:1,hour:t.hour?t.hour:0,month:t.month+1};return"month"===t.unit?u(u({},e),{},{day:1,value:t.value+1}):"day"===t.unit||"hour"===t.unit?u(u({},e),{},{value:t.value}):"minute"===t.unit?u(u({},e),{},{value:t.value,minute:t.value}):"second"===t.unit?u(u({},e),{},{value:t.value,minute:t.minute,second:t.second}):t}));return y.filter((function(t){var e=1,s=Math.ceil(a.globals.gridWidth/120),r=t.value;void 0!==a.config.xaxis.tickAmount&&(s=a.config.xaxis.tickAmount),y.length>s&&(e=Math.floor(y.length/s));var n=!1,o=!1;switch(i.tickInterval){case"years":"year"===t.unit&&(n=!0);break;case"half_year":e=7,"year"===t.unit&&(n=!0);break;case"months":e=1,"year"===t.unit&&(n=!0);break;case"months_fortnight":e=15,"year"!==t.unit&&"month"!==t.unit||(n=!0),30===r&&(o=!0);break;case"months_days":e=10,"month"===t.unit&&(n=!0),30===r&&(o=!0);break;case"week_days":e=8,"month"===t.unit&&(n=!0);break;case"days":e=1,"month"===t.unit&&(n=!0);break;case"hours":"day"===t.unit&&(n=!0);break;case"minutes_fives":case"seconds_fives":r%5!=0&&(o=!0);break;case"seconds_tens":r%10!=0&&(o=!0)}if("hours"===i.tickInterval||"minutes_fives"===i.tickInterval||"seconds_tens"===i.tickInterval||"seconds_fives"===i.tickInterval){if(!o)return!0}else if((r%e==0||n)&&!o)return!0}))}},{key:"recalcDimensionsBasedOnFormat",value:function(t,e){var i=this.w,a=this.formatDates(t),s=this.removeOverlappingTS(a);i.globals.timescaleLabels=s.slice(),new pa(this.ctx).plotCoords()}},{key:"determineInterval",value:function(t){var e=24*t,i=60*e;switch(!0){case t/365>5:this.tickInterval="years";break;case t>800:this.tickInterval="half_year";break;case t>180:this.tickInterval="months";break;case t>90:this.tickInterval="months_fortnight";break;case t>60:this.tickInterval="months_days";break;case t>30:this.tickInterval="week_days";break;case t>2:this.tickInterval="days";break;case e>2.4:this.tickInterval="hours";break;case i>15:this.tickInterval="minutes_fives";break;case i>5:this.tickInterval="minutes";break;case i>1:this.tickInterval="seconds_tens";break;case 60*i>20:this.tickInterval="seconds_fives";break;default:this.tickInterval="seconds"}}},{key:"generateYearScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.daysWidthOnXAxis,r=t.numberOfYears,n=e.minYear,o=0,l=new zi(this.ctx),h="year";if(e.minDate>1||e.minMonth>0){var c=l.determineRemainingDaysOfYear(e.minYear,e.minMonth,e.minDate);o=(l.determineDaysOfYear(e.minYear)-c+1)*s,n=e.minYear+1,this.timeScaleArray.push({position:o,value:n,unit:h,year:n,month:v.monthMod(i+1)})}else 1===e.minDate&&0===e.minMonth&&this.timeScaleArray.push({position:o,value:n,unit:h,year:a,month:v.monthMod(i+1)});for(var d=n,u=o,g=0;g<r;g++)d++,u=l.determineDaysOfYear(d-1)*s+u,this.timeScaleArray.push({position:u,value:d,unit:h,year:d,month:1})}},{key:"generateMonthScale",value:function(t){var e=t.firstVal,i=t.currentMonthDate,a=t.currentMonth,s=t.currentYear,r=t.daysWidthOnXAxis,n=t.numberOfMonths,o=a,l=0,h=new zi(this.ctx),c="month",d=0;if(e.minDate>1){l=(h.determineDaysOfMonths(a+1,e.minYear)-i+1)*r,o=v.monthMod(a+1);var u=s+d,g=v.monthMod(o),p=o;0===o&&(c="year",p=u,g=1,u+=d+=1),this.timeScaleArray.push({position:l,value:p,unit:c,year:u,month:g})}else this.timeScaleArray.push({position:l,value:o,unit:c,year:s,month:v.monthMod(a)});for(var f=o+1,x=l,b=0,m=1;b<n;b++,m++){0===(f=v.monthMod(f))?(c="year",d+=1):c="month";var y=this._getYear(s,f,d);x=h.determineDaysOfMonths(f,y)*r+x;var w=0===f?y:f;this.timeScaleArray.push({position:x,value:w,unit:c,year:y,month:0===f?1:f}),f++}}},{key:"generateDayScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.hoursWidthOnXAxis,r=t.numberOfDays,n=new zi(this.ctx),o="day",l=e.minDate+1,h=l,c=function(t,e,i){return t>n.determineDaysOfMonths(e+1,i)?(h=1,o="month",u=e+=1,e):e},d=(24-e.minHour)*s,u=l,g=c(h,i,a);0===e.minHour&&1===e.minDate?(d=0,u=v.monthMod(e.minMonth),o="month",h=e.minDate):1!==e.minDate&&0===e.minHour&&0===e.minMinute&&(d=0,l=e.minDate,u=l,g=c(h=l,i,a)),this.timeScaleArray.push({position:d,value:u,unit:o,year:this._getYear(a,g,0),month:v.monthMod(g),day:h});for(var p=d,f=0;f<r;f++){o="day",g=c(h+=1,g,this._getYear(a,g,0));var x=this._getYear(a,g,0);p=24*s+p;var b=1===h?v.monthMod(g):h;this.timeScaleArray.push({position:p,value:b,unit:o,year:x,month:v.monthMod(g),day:b})}}},{key:"generateHourScale",value:function(t){var e=t.firstVal,i=t.currentDate,a=t.currentMonth,s=t.currentYear,r=t.minutesWidthOnXAxis,n=t.numberOfHours,o=new zi(this.ctx),l="hour",h=function(t,e){return t>o.determineDaysOfMonths(e+1,s)&&(f=1,e+=1),{month:e,date:f}},c=function(t,e){return t>o.determineDaysOfMonths(e+1,s)?e+=1:e},d=60-(e.minMinute+e.minSecond/60),u=d*r,g=e.minHour+1,p=g;60===d&&(u=0,p=g=e.minHour);var f=i;p>=24&&(p=0,l="day",g=f+=1);var x=h(f,a).month;x=c(f,x),this.timeScaleArray.push({position:u,value:g,unit:l,day:f,hour:p,year:s,month:v.monthMod(x)}),p++;for(var b=u,m=0;m<n;m++){if(l="hour",p>=24)p=0,l="day",x=h(f+=1,x).month,x=c(f,x);var y=this._getYear(s,x,0);b=60*r+b;var w=0===p?f:p;this.timeScaleArray.push({position:b,value:w,unit:l,hour:p,day:f,year:y,month:v.monthMod(x)}),p++}}},{key:"generateMinuteScale",value:function(t){for(var e=t.currentMillisecond,i=t.currentSecond,a=t.currentMinute,s=t.currentHour,r=t.currentDate,n=t.currentMonth,o=t.currentYear,l=t.minutesWidthOnXAxis,h=t.secondsWidthOnXAxis,c=t.numberOfMinutes,d=a+1,u=r,g=n,p=o,f=s,x=(60-i-e/1e3)*h,b=0;b<c;b++)d>=60&&(d=0,24===(f+=1)&&(f=0)),this.timeScaleArray.push({position:x,value:d,unit:"minute",hour:f,minute:d,day:u,year:this._getYear(p,g,0),month:v.monthMod(g)}),x+=l,d++}},{key:"generateSecondScale",value:function(t){for(var e=t.currentMillisecond,i=t.currentSecond,a=t.currentMinute,s=t.currentHour,r=t.currentDate,n=t.currentMonth,o=t.currentYear,l=t.secondsWidthOnXAxis,h=t.numberOfSeconds,c=i+1,d=a,u=r,g=n,p=o,f=s,x=(1e3-e)/1e3*l,b=0;b<h;b++)c>=60&&(c=0,++d>=60&&(d=0,24===++f&&(f=0))),this.timeScaleArray.push({position:x,value:c,unit:"second",hour:f,minute:d,second:c,day:u,year:this._getYear(p,g,0),month:v.monthMod(g)}),x+=l,c++}},{key:"createRawDateString",value:function(t,e){var i=t.year;return 0===t.month&&(t.month=1),i+="-"+("0"+t.month.toString()).slice(-2),"day"===t.unit?i+="day"===t.unit?"-"+("0"+e).slice(-2):"-01":i+="-"+("0"+(t.day?t.day:"1")).slice(-2),"hour"===t.unit?i+="hour"===t.unit?"T"+("0"+e).slice(-2):"T00":i+="T"+("0"+(t.hour?t.hour:"0")).slice(-2),"minute"===t.unit?i+=":"+("0"+e).slice(-2):i+=":"+(t.minute?("0"+t.minute).slice(-2):"00"),"second"===t.unit?i+=":"+("0"+e).slice(-2):i+=":00",this.utc&&(i+=".000Z"),i}},{key:"formatDates",value:function(t){var e=this,i=this.w;return t.map((function(t){var a=t.value.toString(),s=new zi(e.ctx),r=e.createRawDateString(t,a),n=s.getDate(s.parseDate(r));if(e.utc||(n=s.getDate(s.parseDateWithTimezone(r))),void 0===i.config.xaxis.labels.format){var o="dd MMM",l=i.config.xaxis.labels.datetimeFormatter;"year"===t.unit&&(o=l.year),"month"===t.unit&&(o=l.month),"day"===t.unit&&(o=l.day),"hour"===t.unit&&(o=l.hour),"minute"===t.unit&&(o=l.minute),"second"===t.unit&&(o=l.second),a=s.formatDate(n,o)}else a=s.formatDate(n,i.config.xaxis.labels.format);return{dateString:r,position:t.position,value:a,unit:t.unit,year:t.year,month:t.month}}))}},{key:"removeOverlappingTS",value:function(t){var e,i=this,a=new Mi(this.ctx),s=!1;t.length>0&&t[0].value&&t.every((function(e){return e.value.length===t[0].value.length}))&&(s=!0,e=a.getTextRects(t[0].value).width);var r=0,n=t.map((function(n,o){if(o>0&&i.w.config.xaxis.labels.hideOverlappingLabels){var l=s?e:a.getTextRects(t[r].value).width,h=t[r].position;return n.position>h+l+10?(r=o,n):null}return n}));return n=n.filter((function(t){return null!==t}))}},{key:"_getYear",value:function(t,e,i){return t+Math.floor(e/12)+i}}]),t}(),qa=function(){function t(e,a){i(this,t),this.ctx=a,this.w=a.w,this.el=e}return s(t,[{key:"setupElements",value:function(){var t=this.w,e=t.globals,i=t.config,a=i.chart.type;e.axisCharts=["line","area","bar","rangeBar","rangeArea","candlestick","boxPlot","scatter","bubble","radar","heatmap","treemap"].includes(a),e.xyCharts=["line","area","bar","rangeBar","rangeArea","candlestick","boxPlot","scatter","bubble"].includes(a),e.isBarHorizontal=["bar","rangeBar","boxPlot"].includes(a)&&i.plotOptions.bar.horizontal,e.chartClass=".apexcharts".concat(e.chartID),e.dom.baseEl=this.el,e.dom.elWrap=document.createElement("div"),Mi.setAttrs(e.dom.elWrap,{id:e.chartClass.substring(1),class:"apexcharts-canvas ".concat(e.chartClass.substring(1))}),this.el.appendChild(e.dom.elWrap),e.dom.Paper=window.SVG().addTo(e.dom.elWrap),e.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(i.chart.offsetX,", ").concat(i.chart.offsetY,")")}),e.dom.Paper.node.style.background="dark"!==i.theme.mode||i.chart.background?"light"!==i.theme.mode||i.chart.background?i.chart.background:"#fff":"#424242",this.setSVGDimensions(),e.dom.elLegendForeign=document.createElementNS(e.SVGNS,"foreignObject"),Mi.setAttrs(e.dom.elLegendForeign,{x:0,y:0,width:e.svgWidth,height:e.svgHeight}),e.dom.elLegendWrap=document.createElement("div"),e.dom.elLegendWrap.classList.add("apexcharts-legend"),e.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),e.dom.elLegendForeign.appendChild(e.dom.elLegendWrap),e.dom.Paper.node.appendChild(e.dom.elLegendForeign),e.dom.elGraphical=e.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),e.dom.elDefs=e.dom.Paper.defs(),e.dom.Paper.add(e.dom.elGraphical),e.dom.elGraphical.add(e.dom.elDefs)}},{key:"plotChartType",value:function(t,e){var i=this.w,a=this.ctx,s=i.config,r=i.globals,n={line:{series:[],i:[]},area:{series:[],i:[]},scatter:{series:[],i:[]},bubble:{series:[],i:[]},column:{series:[],i:[]},candlestick:{series:[],i:[]},boxPlot:{series:[],i:[]},rangeBar:{series:[],i:[]},rangeArea:{series:[],seriesRangeEnd:[],i:[]}},o=s.chart.type||"line",l=null,h=0;r.series.forEach((function(e,a){var s=t[a].type||o;n[s]?("rangeArea"===s?(n[s].series.push(r.seriesRangeStart[a]),n[s].seriesRangeEnd.push(r.seriesRangeEnd[a])):n[s].series.push(e),n[s].i.push(a),"column"!==s&&"bar"!==s||(i.globals.columnSeries=n.column)):["heatmap","treemap","pie","donut","polarArea","radialBar","radar"].includes(s)?l=s:"bar"===s?(n.column.series.push(e),n.column.i.push(a)):console.warn("You have specified an unrecognized series type (".concat(s,").")),o!==s&&"scatter"!==s&&h++})),h>0&&(l&&console.warn("Chart or series type ".concat(l," cannot appear with other chart or series types.")),n.column.series.length>0&&s.plotOptions.bar.horizontal&&(h-=n.column.series.length,n.column={series:[],i:[]},i.globals.columnSeries={series:[],i:[]},console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))),r.comboCharts||(r.comboCharts=h>0);var c=new Ba(a,e),d=new Ta(a,e);a.pie=new Ea(a);var u=new Ha(a);a.rangeBar=new Oa(a,e);var g=new Ya(a),p=[];if(r.comboCharts){var x,b,m=new Pi(a);if(n.area.series.length>0)(x=p).push.apply(x,f(m.drawSeriesByGroup(n.area,r.areaGroups,"area",c)));if(n.column.series.length>0)if(s.chart.stacked){var v=new Ia(a,e);p.push(v.draw(n.column.series,n.column.i))}else a.bar=new Pa(a,e),p.push(a.bar.draw(n.column.series,n.column.i));if(n.rangeArea.series.length>0&&p.push(c.draw(n.rangeArea.series,"rangeArea",n.rangeArea.i,n.rangeArea.seriesRangeEnd)),n.line.series.length>0)(b=p).push.apply(b,f(m.drawSeriesByGroup(n.line,r.lineGroups,"line",c)));if(n.candlestick.series.length>0&&p.push(d.draw(n.candlestick.series,"candlestick",n.candlestick.i)),n.boxPlot.series.length>0&&p.push(d.draw(n.boxPlot.series,"boxPlot",n.boxPlot.i)),n.rangeBar.series.length>0&&p.push(a.rangeBar.draw(n.rangeBar.series,n.rangeBar.i)),n.scatter.series.length>0){var y=new Ba(a,e,!0);p.push(y.draw(n.scatter.series,"scatter",n.scatter.i))}if(n.bubble.series.length>0){var w=new Ba(a,e,!0);p.push(w.draw(n.bubble.series,"bubble",n.bubble.i))}}else switch(s.chart.type){case"line":p=c.draw(r.series,"line");break;case"area":p=c.draw(r.series,"area");break;case"bar":if(s.chart.stacked)p=new Ia(a,e).draw(r.series);else a.bar=new Pa(a,e),p=a.bar.draw(r.series);break;case"candlestick":p=new Ta(a,e).draw(r.series,"candlestick");break;case"boxPlot":p=new Ta(a,e).draw(r.series,s.chart.type);break;case"rangeBar":p=a.rangeBar.draw(r.series);break;case"rangeArea":p=c.draw(r.seriesRangeStart,"rangeArea",void 0,r.seriesRangeEnd);break;case"heatmap":p=new Xa(a,e).draw(r.series);break;case"treemap":p=new Ga(a,e).draw(r.series);break;case"pie":case"donut":case"polarArea":p=a.pie.draw(r.series);break;case"radialBar":p=u.draw(r.series);break;case"radar":p=g.draw(r.series);break;default:p=c.draw(r.series)}return p}},{key:"setSVGDimensions",value:function(){var t=this.w,e=t.globals,i=t.config;i.chart.width=i.chart.width||"100%",i.chart.height=i.chart.height||"auto",e.svgWidth=i.chart.width,e.svgHeight=i.chart.height;var a=v.getDimensions(this.el),s=i.chart.width.toString().split(/[0-9]+/g).pop();"%"===s?v.isNumber(a[0])&&(0===a[0].width&&(a=v.getDimensions(this.el.parentNode)),e.svgWidth=a[0]*parseInt(i.chart.width,10)/100):"px"!==s&&""!==s||(e.svgWidth=parseInt(i.chart.width,10));var r=String(i.chart.height).toString().split(/[0-9]+/g).pop();if("auto"!==e.svgHeight&&""!==e.svgHeight)if("%"===r){var n=v.getDimensions(this.el.parentNode);e.svgHeight=n[1]*parseInt(i.chart.height,10)/100}else e.svgHeight=parseInt(i.chart.height,10);else e.svgHeight=e.axisCharts?e.svgWidth/1.61:e.svgWidth/1.2;if(e.svgWidth=Math.max(e.svgWidth,0),e.svgHeight=Math.max(e.svgHeight,0),Mi.setAttrs(e.dom.Paper.node,{width:e.svgWidth,height:e.svgHeight}),"%"!==r){var o=i.chart.sparkline.enabled?0:e.axisCharts?i.chart.parentHeightOffset:0;e.dom.Paper.node.parentNode.parentNode.style.minHeight="".concat(e.svgHeight+o,"px")}e.dom.elWrap.style.width="".concat(e.svgWidth,"px"),e.dom.elWrap.style.height="".concat(e.svgHeight,"px")}},{key:"shiftGraphPosition",value:function(){var t=this.w.globals,e=t.translateY,i=t.translateX;Mi.setAttrs(t.dom.elGraphical.node,{transform:"translate(".concat(i,", ").concat(e,")")})}},{key:"resizeNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=0,a=t.config.chart.sparkline.enabled?1:15;a+=t.config.grid.padding.bottom,["top","bottom"].includes(t.config.legend.position)&&t.config.legend.show&&!t.config.legend.floating&&(i=new xa(this.ctx).legendHelpers.getLegendDimensions().clwh+7);var s=t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),r=2.05*t.globals.radialSize;if(s&&!t.config.chart.sparkline.enabled&&0!==t.config.plotOptions.radialBar.startAngle){var n=v.getBoundingClientRect(s);r=n.bottom;var o=n.bottom-n.top;r=Math.max(2.05*t.globals.radialSize,o)}var l=Math.ceil(r+e.translateY+i+a);e.dom.elLegendForeign&&e.dom.elLegendForeign.setAttribute("height",l),t.config.chart.height&&String(t.config.chart.height).includes("%")||(e.dom.elWrap.style.height="".concat(l,"px"),Mi.setAttrs(e.dom.Paper.node,{height:l}),e.dom.Paper.node.parentNode.parentNode.style.minHeight="".concat(l,"px"))}},{key:"coreCalculations",value:function(){new ea(this.ctx).init()}},{key:"resetGlobals",value:function(){var t=this,e=function(){return t.w.config.series.map((function(){return[]}))},i=new Bi,a=this.w.globals;i.initGlobalVars(a),a.seriesXvalues=e(),a.seriesYvalues=e()}},{key:"isMultipleY",value:function(){return!!(Array.isArray(this.w.config.yaxis)&&this.w.config.yaxis.length>1)&&(this.w.globals.isMultipleYAxis=!0,!0)}},{key:"xySettings",value:function(){var t=this.w,e=null;if(t.globals.axisCharts){if("back"===t.config.xaxis.crosshairs.position&&new na(this.ctx).drawXCrosshairs(),"back"===t.config.yaxis[0].crosshairs.position&&new na(this.ctx).drawYCrosshairs(),"datetime"===t.config.xaxis.type&&void 0===t.config.xaxis.labels.formatter){this.ctx.timeScale=new Ua(this.ctx);var i=[];isFinite(t.globals.minX)&&isFinite(t.globals.maxX)&&!t.globals.isBarHorizontal?i=this.ctx.timeScale.calculateTimeScaleTicks(t.globals.minX,t.globals.maxX):t.globals.isBarHorizontal&&(i=this.ctx.timeScale.calculateTimeScaleTicks(t.globals.minY,t.globals.maxY)),this.ctx.timeScale.recalcDimensionsBasedOnFormat(i)}e=new Pi(this.ctx).getCalculatedRatios()}return e}},{key:"updateSourceChart",value:function(t){this.ctx.w.globals.selection=void 0,this.ctx.updateHelpers._updateOptions({chart:{selection:{xaxis:{min:t.w.globals.minX,max:t.w.globals.maxX}}}},!1,!1)}},{key:"setupBrushHandler",value:function(){var t=this,e=this.w;if(e.config.chart.brush.enabled&&"function"!=typeof e.config.chart.events.selection){var i=Array.isArray(e.config.chart.brush.targets)?e.config.chart.brush.targets:[e.config.chart.brush.target];i.forEach((function(e){var i=ApexCharts.getChartByID(e);i.w.globals.brushSource=t.ctx,"function"!=typeof i.w.config.chart.events.zoomed&&(i.w.config.chart.events.zoomed=function(){return t.updateSourceChart(i)}),"function"!=typeof i.w.config.chart.events.scrolled&&(i.w.config.chart.events.scrolled=function(){return t.updateSourceChart(i)})})),e.config.chart.events.selection=function(t,e){i.forEach((function(t){ApexCharts.getChartByID(t).ctx.updateHelpers._updateOptions({xaxis:{min:e.xaxis.min,max:e.xaxis.max}},!1,!1,!1,!1)}))}}}}]),t}(),Za=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"_updateOptions",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return new Promise((function(n){var o=[e.ctx];s&&(o=e.ctx.getSyncedCharts()),e.ctx.w.globals.isExecCalled&&(o=[e.ctx],e.ctx.w.globals.isExecCalled=!1),o.forEach((function(s,l){var h=s.w;if(h.globals.shouldAnimate=a,i||(h.globals.resized=!0,h.globals.dataChanged=!0,a&&s.series.getPreviousPaths()),t&&"object"===b(t)&&(s.config=new Wi(t),t=Pi.extendArrayProps(s.config,t,h),s.w.globals.chartID!==e.ctx.w.globals.chartID&&delete t.series,h.config=v.extend(h.config,t),r&&(h.globals.lastXAxis=t.xaxis?v.clone(t.xaxis):[],h.globals.lastYAxis=t.yaxis?v.clone(t.yaxis):[],h.globals.initialConfig=v.extend({},h.config),h.globals.initialSeries=v.clone(h.config.series),t.series))){for(var c=0;c<h.globals.collapsedSeriesIndices.length;c++){var d=h.config.series[h.globals.collapsedSeriesIndices[c]];h.globals.collapsedSeries[c].data=h.globals.axisCharts?d.data.slice():d}for(var u=0;u<h.globals.ancillaryCollapsedSeriesIndices.length;u++){var g=h.config.series[h.globals.ancillaryCollapsedSeriesIndices[u]];h.globals.ancillaryCollapsedSeries[u].data=h.globals.axisCharts?g.data.slice():g}s.series.emptyCollapsedSeries(h.config.series)}return s.update(t).then((function(){l===o.length-1&&n(s)}))}))}))}},{key:"_updateSeries",value:function(t,e){var i=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(s){var r,n=i.w;return n.globals.shouldAnimate=e,n.globals.dataChanged=!0,e&&i.ctx.series.getPreviousPaths(),n.globals.axisCharts?(0===(r=t.map((function(t,e){return i._extendSeries(t,e)}))).length&&(r=[{data:[]}]),n.config.series=r):n.config.series=t.slice(),a&&(n.globals.initialConfig.series=v.clone(n.config.series),n.globals.initialSeries=v.clone(n.config.series)),i.ctx.update().then((function(){s(i.ctx)}))}))}},{key:"_extendSeries",value:function(t,e){var i=this.w,a=i.config.series[e];return u(u({},i.config.series[e]),{},{name:t.name?t.name:null==a?void 0:a.name,color:t.color?t.color:null==a?void 0:a.color,type:t.type?t.type:null==a?void 0:a.type,group:t.group?t.group:null==a?void 0:a.group,hidden:void 0!==t.hidden?t.hidden:null==a?void 0:a.hidden,data:t.data?t.data:null==a?void 0:a.data,zIndex:void 0!==t.zIndex?t.zIndex:e})}},{key:"toggleDataPointSelection",value:function(t,e){var i=this.w,a=null,s=".apexcharts-series[data\\:realIndex='".concat(t,"']");return i.globals.axisCharts?a=i.globals.dom.Paper.findOne("".concat(s," path[j='").concat(e,"'], ").concat(s," circle[j='").concat(e,"'], ").concat(s," rect[j='").concat(e,"']")):void 0===e&&(a=i.globals.dom.Paper.findOne("".concat(s," path[j='").concat(t,"']")),"pie"!==i.config.chart.type&&"polarArea"!==i.config.chart.type&&"donut"!==i.config.chart.type||this.ctx.pie.pieClicked(t)),a?(new Mi(this.ctx).pathMouseDown(a,null),a.node?a.node:null):(console.warn("toggleDataPointSelection: Element not found"),null)}},{key:"forceXAxisUpdate",value:function(t){var e=this.w;if(["min","max"].forEach((function(i){void 0!==t.xaxis[i]&&(e.config.xaxis[i]=t.xaxis[i],e.globals.lastXAxis[i]=t.xaxis[i])})),t.xaxis.categories&&t.xaxis.categories.length&&(e.config.xaxis.categories=t.xaxis.categories),e.config.xaxis.convertedCatToNumeric){var i=new Ni(t);t=i.convertCatToNumericXaxis(t,this.ctx)}return t}},{key:"forceYAxisUpdate",value:function(t){return t.chart&&t.chart.stacked&&"100%"===t.chart.stackType&&(Array.isArray(t.yaxis)?t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})):(t.yaxis.min=0,t.yaxis.max=100)),t}},{key:"revertDefaultAxisMinMax",value:function(t){var e=this,i=this.w,a=i.globals.lastXAxis,s=i.globals.lastYAxis;t&&t.xaxis&&(a=t.xaxis),t&&t.yaxis&&(s=t.yaxis),i.config.xaxis.min=a.min,i.config.xaxis.max=a.max;var r=function(t){void 0!==s[t]&&(i.config.yaxis[t].min=s[t].min,i.config.yaxis[t].max=s[t].max)};i.config.yaxis.map((function(t,a){i.globals.zoomed||void 0!==s[a]?r(a):void 0!==e.ctx.opts.yaxis[a]&&(t.min=e.ctx.opts.yaxis[a].min,t.max=e.ctx.opts.yaxis[a].max)}))}}]),t}();!function(){function t(){for(var t=arguments.length>0&&arguments[0]!==h?arguments[0]:[],s=arguments.length>1?arguments[1]:h,r=arguments.length>2?arguments[2]:h,n=arguments.length>3?arguments[3]:h,o=arguments.length>4?arguments[4]:h,l=arguments.length>5?arguments[5]:h,h=arguments.length>6?arguments[6]:h,c=t.slice(s,r||h),d=n.slice(o,l||h),u=0,g={pos:[0,0],start:[0,0]},p={pos:[0,0],start:[0,0]};;){if(c[u]=e.call(g,c[u]),d[u]=e.call(p,d[u]),c[u][0]!=d[u][0]||"M"==c[u][0]||"A"==c[u][0]&&(c[u][4]!=d[u][4]||c[u][5]!=d[u][5])?(Array.prototype.splice.apply(c,[u,1].concat(a.call(g,c[u]))),Array.prototype.splice.apply(d,[u,1].concat(a.call(p,d[u])))):(c[u]=i.call(g,c[u]),d[u]=i.call(p,d[u])),++u==c.length&&u==d.length)break;u==c.length&&c.push(["C",g.pos[0],g.pos[1],g.pos[0],g.pos[1],g.pos[0],g.pos[1]]),u==d.length&&d.push(["C",p.pos[0],p.pos[1],p.pos[0],p.pos[1],p.pos[0],p.pos[1]])}return{start:c,dest:d}}function e(t){switch(t[0]){case"z":case"Z":t[0]="L",t[1]=this.start[0],t[2]=this.start[1];break;case"H":t[0]="L",t[2]=this.pos[1];break;case"V":t[0]="L",t[2]=t[1],t[1]=this.pos[0];break;case"T":t[0]="Q",t[3]=t[1],t[4]=t[2],t[1]=this.reflection[1],t[2]=this.reflection[0];break;case"S":t[0]="C",t[6]=t[4],t[5]=t[3],t[4]=t[2],t[3]=t[1],t[2]=this.reflection[1],t[1]=this.reflection[0]}return t}function i(t){var e=t.length;return this.pos=[t[e-2],t[e-1]],-1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4],2*this.pos[1]-t[e-3]]),t}function a(t){var e=[t];switch(t[0]){case"M":return this.pos=this.start=[t[1],t[2]],e;case"L":t[5]=t[3]=t[1],t[6]=t[4]=t[2],t[1]=this.pos[0],t[2]=this.pos[1];break;case"Q":t[6]=t[4],t[5]=t[3],t[4]=1*t[4]/3+2*t[2]/3,t[3]=1*t[3]/3+2*t[1]/3,t[2]=1*this.pos[1]/3+2*t[2]/3,t[1]=1*this.pos[0]/3+2*t[1]/3;break;case"A":e=function(t,e){var i,a,s,r,n,o,l,h,c,d,u,g,p,f,x,b,m,v,y,w,k,A,C,S,L,M,P=Math.abs(e[1]),I=Math.abs(e[2]),T=e[3]%360,z=e[4],X=e[5],R=e[6],E=e[7],Y=new bt(t),H=new bt(R,E),O=[];if(0===P||0===I||Y.x===H.x&&Y.y===H.y)return[["C",Y.x,Y.y,H.x,H.y,H.x,H.y]];i=new bt((Y.x-H.x)/2,(Y.y-H.y)/2).transform((new vt).rotate(T)),a=i.x*i.x/(P*P)+i.y*i.y/(I*I),a>1&&(P*=a=Math.sqrt(a),I*=a);s=(new vt).rotate(T).scale(1/P,1/I).rotate(-T),Y=Y.transform(s),H=H.transform(s),r=[H.x-Y.x,H.y-Y.y],o=r[0]*r[0]+r[1]*r[1],n=Math.sqrt(o),r[0]/=n,r[1]/=n,l=o<4?Math.sqrt(1-o/4):0,z===X&&(l*=-1);h=new bt((H.x+Y.x)/2+l*-r[1],(H.y+Y.y)/2+l*r[0]),c=new bt(Y.x-h.x,Y.y-h.y),d=new bt(H.x-h.x,H.y-h.y),u=Math.acos(c.x/Math.sqrt(c.x*c.x+c.y*c.y)),c.y<0&&(u*=-1);g=Math.acos(d.x/Math.sqrt(d.x*d.x+d.y*d.y)),d.y<0&&(g*=-1);X&&u>g&&(g+=2*Math.PI);!X&&u<g&&(g-=2*Math.PI);for(f=Math.ceil(2*Math.abs(u-g)/Math.PI),b=[],m=u,p=(g-u)/f,x=4*Math.tan(p/4)/3,k=0;k<=f;k++)y=Math.cos(m),v=Math.sin(m),w=new bt(h.x+y,h.y+v),b[k]=[new bt(w.x+x*v,w.y-x*y),w,new bt(w.x-x*v,w.y+x*y)],m+=p;for(b[0][0]=b[0][1].clone(),b[b.length-1][2]=b[b.length-1][1].clone(),s=(new vt).rotate(T).scale(P,I).rotate(-T),k=0,A=b.length;k<A;k++)b[k][0]=b[k][0].transform(s),b[k][1]=b[k][1].transform(s),b[k][2]=b[k][2].transform(s);for(k=1,A=b.length;k<A;k++)C=(w=b[k-1][2]).x,S=w.y,L=(w=b[k][0]).x,M=w.y,R=(w=b[k][1]).x,E=w.y,O.push(["C",C,S,L,M,R,E]);return O}(this.pos,t),t=e[0]}return t[0]="C",this.pos=[t[5],t[6]],this.reflection=[2*t[5]-t[3],2*t[6]-t[4]],e}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;if(!1===e)return!1;for(var i=e,a=t.length;i<a;++i)if("M"==t[i][0])return i;return!1}Q(Ee,{morph:function(e,i,a,r,n){for(var o=this.parse(e),l=this.parse(i),h=0,c=0,d=!1,u=!1;!1!==h||!1!==c;){var g;d=s(o,!1!==h&&h+1),u=s(l,!1!==c&&c+1),!1===h&&(h=0==(g=new Ee(p.start).bbox()).height||0==g.width?o.push(o[0])-1:o.push(["M",g.x+g.width/2,g.y+g.height/2])-1),!1===c&&(c=0==(g=new Ee(p.dest).bbox()).height||0==g.width?l.push(l[0])-1:l.push(["M",g.x+g.width/2,g.y+g.height/2])-1);var p=t(o,h,d,l,c,u);o=o.slice(0,h).concat(p.start,!1===d?[]:o.slice(d)),l=l.slice(0,c).concat(p.dest,!1===u?[]:l.slice(u)),h=!1!==d&&h+p.start.length,c=!1!==u&&c+p.dest.length}this._array=o,this.destination=new Ee,this.destination._array=l;var f=this.fromArray(o.map((function(t,e){var i=l[e].map((function(i,s){return 0===s?i:r.step(t[s],l[e][s],a,n[e],n)}));return i})));return f}})}();const $a=t=>(t.changedTouches&&(t=t.changedTouches[0]),{x:t.clientX,y:t.clientY});class Ja{constructor(t){t.remember("_draggable",this),this.el=t,this.drag=this.drag.bind(this),this.startDrag=this.startDrag.bind(this),this.endDrag=this.endDrag.bind(this)}init(t){t?(this.el.on("mousedown.drag",this.startDrag),this.el.on("touchstart.drag",this.startDrag,{passive:!1})):(this.el.off("mousedown.drag"),this.el.off("touchstart.drag"))}startDrag(t){const e=!t.type.indexOf("mouse");if(e&&1!==t.which&&0!==t.buttons)return;if(this.el.dispatch("beforedrag",{event:t,handler:this}).defaultPrevented)return;t.preventDefault(),t.stopPropagation(),this.init(!1),this.box=this.el.bbox(),this.lastClick=this.el.point($a(t));const i=(e?"mouseup":"touchend")+".drag";zt(window,(e?"mousemove":"touchmove")+".drag",this.drag,this,{passive:!1}),zt(window,i,this.endDrag,this,{passive:!1}),this.el.fire("dragstart",{event:t,handler:this,box:this.box})}drag(t){const{box:e,lastClick:i}=this,a=this.el.point($a(t)),s=a.x-i.x,r=a.y-i.y;if(!s&&!r)return e;const n=e.x+s,o=e.y+r;this.box=new kt(n,o,e.w,e.h),this.lastClick=a,this.el.dispatch("dragmove",{event:t,handler:this,box:this.box}).defaultPrevented||this.move(n,o)}move(t,e){"svg"===this.el.type?gi.prototype.move.call(this.el,t,e):this.el.move(t,e)}endDrag(t){this.drag(t),this.el.fire("dragend",{event:t,handler:this,box:this.box}),Xt(window,"mousemove.drag"),Xt(window,"touchmove.drag"),Xt(window,"mouseup.drag"),Xt(window,"touchend.drag"),this.init(!0)}}
/*!
* @svgdotjs/svg.select.js - An extension of svg.js which allows to select elements with mouse
* @version 4.0.1
* https://github.com/svgdotjs/svg.select.js
*
* @copyright Ulrich-Matthias Schäfer
* @license MIT
*
* BUILT: Mon Jul 01 2024 15:04:42 GMT+0200 (Central European Summer Time)
*/
function Qa(t,e,i,a=null){return function(s){s.preventDefault(),s.stopPropagation();var r=s.pageX||s.touches[0].pageX,n=s.pageY||s.touches[0].pageY;e.fire(t,{x:r,y:n,event:s,index:a,points:i})}}function Ka([t,e],{a:i,b:a,c:s,d:r,e:n,f:o}){return[t*i+e*s+n,t*a+e*r+o]}Q(Gt,{draggable(t=!0){return(this.remember("_draggable")||new Ja(this)).init(t),this}});let ts=class{constructor(t){this.el=t,t.remember("_selectHandler",this),this.selection=new gi,this.order=["lt","t","rt","r","rb","b","lb","l","rot"],this.mutationHandler=this.mutationHandler.bind(this);const e=F();this.observer=new e.MutationObserver(this.mutationHandler)}init(t){this.createHandle=t.createHandle||this.createHandleFn,this.createRot=t.createRot||this.createRotFn,this.updateHandle=t.updateHandle||this.updateHandleFn,this.updateRot=t.updateRot||this.updateRotFn,this.el.root().put(this.selection),this.updatePoints(),this.createSelection(),this.createResizeHandles(),this.updateResizeHandles(),this.createRotationHandle(),this.updateRotationHandle(),this.observer.observe(this.el.node,{attributes:!0})}active(t,e){if(!t)return this.selection.clear().remove(),void this.observer.disconnect();this.init(e)}createSelection(){this.selection.polygon(this.handlePoints).addClass("svg_select_shape")}updateSelection(){this.selection.get(0).plot(this.handlePoints)}createResizeHandles(){this.handlePoints.forEach(((t,e,i)=>{const a=this.order[e];this.createHandle.call(this,this.selection,t,e,i,a),this.selection.get(e+1).addClass("svg_select_handle svg_select_handle_"+a).on("mousedown.selection touchstart.selection",Qa(a,this.el,this.handlePoints,e))}))}createHandleFn(t){t.polyline()}updateHandleFn(t,e,i,a){const s=a.at(i-1),r=a[(i+1)%a.length],n=e,o=[n[0]-s[0],n[1]-s[1]],l=[n[0]-r[0],n[1]-r[1]],h=Math.sqrt(o[0]*o[0]+o[1]*o[1]),c=Math.sqrt(l[0]*l[0]+l[1]*l[1]),d=[o[0]/h,o[1]/h],u=[l[0]/c,l[1]/c],g=[n[0]-10*d[0],n[1]-10*d[1]],p=[n[0]-10*u[0],n[1]-10*u[1]];t.plot([g,n,p])}updateResizeHandles(){this.handlePoints.forEach(((t,e,i)=>{const a=this.order[e];this.updateHandle.call(this,this.selection.get(e+1),t,e,i,a)}))}createRotFn(t){t.line(),t.circle(5)}getPoint(t){return this.handlePoints[this.order.indexOf(t)]}getPointHandle(t){return this.selection.get(this.order.indexOf(t)+1)}updateRotFn(t,e){const i=this.getPoint("t");t.get(0).plot(i[0],i[1],e[0],e[1]),t.get(1).center(e[0],e[1])}createRotationHandle(){const t=this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection",Qa("rot",this.el,this.handlePoints));this.createRot.call(this,t)}updateRotationHandle(){const t=this.selection.findOne("g.svg_select_handle_rot");this.updateRot(t,this.rotationPoint,this.handlePoints)}updatePoints(){const t=this.el.bbox(),e=this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());this.handlePoints=this.getHandlePoints(t).map((t=>Ka(t,e))),this.rotationPoint=Ka(this.getRotationPoint(t),e)}getHandlePoints({x:t,x2:e,y:i,y2:a,cx:s,cy:r}=this.el.bbox()){return[[t,i],[s,i],[e,i],[e,r],[e,a],[s,a],[t,a],[t,r]]}getRotationPoint({y:t,cx:e}=this.el.bbox()){return[e,t-20]}mutationHandler(){this.updatePoints(),this.updateSelection(),this.updateResizeHandles(),this.updateRotationHandle()}};const es=t=>function(e=!0,i={}){"object"==typeof e&&(i=e,e=!0);let a=this.remember("_"+t.name);return a||(e.prototype instanceof ts?(a=new e(this),e=!0):a=new t(this),this.remember("_"+t.name,a)),a.active(e,i),this};
/*!
* @svgdotjs/svg.resize.js - An extension for svg.js which allows to resize elements which are selected
* @version 2.0.4
* https://github.com/svgdotjs/svg.resize.js
*
* @copyright [object Object]
* @license MIT
*
* BUILT: Fri Sep 13 2024 12:43:14 GMT+0200 (Central European Summer Time)
*/
/*!
* @svgdotjs/svg.select.js - An extension of svg.js which allows to select elements with mouse
* @version 4.0.1
* https://github.com/svgdotjs/svg.select.js
*
* @copyright Ulrich-Matthias Schäfer
* @license MIT
*
* BUILT: Mon Jul 01 2024 15:04:42 GMT+0200 (Central European Summer Time)
*/
function is(t,e,i,a=null){return function(s){s.preventDefault(),s.stopPropagation();var r=s.pageX||s.touches[0].pageX,n=s.pageY||s.touches[0].pageY;e.fire(t,{x:r,y:n,event:s,index:a,points:i})}}function as([t,e],{a:i,b:a,c:s,d:r,e:n,f:o}){return[t*i+e*s+n,t*a+e*r+o]}Q(Gt,{select:es(ts)}),Q([Ge,je,xe],{pointSelect:es(class{constructor(t){this.el=t,t.remember("_pointSelectHandler",this),this.selection=new gi,this.order=["lt","t","rt","r","rb","b","lb","l","rot"],this.mutationHandler=this.mutationHandler.bind(this);const e=F();this.observer=new e.MutationObserver(this.mutationHandler)}init(t){this.createHandle=t.createHandle||this.createHandleFn,this.updateHandle=t.updateHandle||this.updateHandleFn,this.el.root().put(this.selection),this.updatePoints(),this.createSelection(),this.createPointHandles(),this.updatePointHandles(),this.observer.observe(this.el.node,{attributes:!0})}active(t,e){if(!t)return this.selection.clear().remove(),void this.observer.disconnect();this.init(e)}createSelection(){this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect")}updateSelection(){this.selection.get(0).plot(this.points)}createPointHandles(){this.points.forEach(((t,e,i)=>{this.createHandle.call(this,this.selection,t,e,i),this.selection.get(e+1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection",Qa("point",this.el,this.points,e))}))}createHandleFn(t){t.circle(5)}updateHandleFn(t,e){t.center(e[0],e[1])}updatePointHandles(){this.points.forEach(((t,e,i)=>{this.updateHandle.call(this,this.selection.get(e+1),t,e,i)}))}updatePoints(){const t=this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());this.points=this.el.array().map((e=>Ka(e,t)))}mutationHandler(){this.updatePoints(),this.updateSelection(),this.updatePointHandles()}})});class ss{constructor(t){this.el=t,t.remember("_selectHandler",this),this.selection=new gi,this.order=["lt","t","rt","r","rb","b","lb","l","rot"],this.mutationHandler=this.mutationHandler.bind(this);const e=F();this.observer=new e.MutationObserver(this.mutationHandler)}init(t){this.createHandle=t.createHandle||this.createHandleFn,this.createRot=t.createRot||this.createRotFn,this.updateHandle=t.updateHandle||this.updateHandleFn,this.updateRot=t.updateRot||this.updateRotFn,this.el.root().put(this.selection),this.updatePoints(),this.createSelection(),this.createResizeHandles(),this.updateResizeHandles(),this.createRotationHandle(),this.updateRotationHandle(),this.observer.observe(this.el.node,{attributes:!0})}active(t,e){if(!t)return this.selection.clear().remove(),void this.observer.disconnect();this.init(e)}createSelection(){this.selection.polygon(this.handlePoints).addClass("svg_select_shape")}updateSelection(){this.selection.get(0).plot(this.handlePoints)}createResizeHandles(){this.handlePoints.forEach(((t,e,i)=>{const a=this.order[e];this.createHandle.call(this,this.selection,t,e,i,a),this.selection.get(e+1).addClass("svg_select_handle svg_select_handle_"+a).on("mousedown.selection touchstart.selection",is(a,this.el,this.handlePoints,e))}))}createHandleFn(t){t.polyline()}updateHandleFn(t,e,i,a){const s=a.at(i-1),r=a[(i+1)%a.length],n=e,o=[n[0]-s[0],n[1]-s[1]],l=[n[0]-r[0],n[1]-r[1]],h=Math.sqrt(o[0]*o[0]+o[1]*o[1]),c=Math.sqrt(l[0]*l[0]+l[1]*l[1]),d=[o[0]/h,o[1]/h],u=[l[0]/c,l[1]/c],g=[n[0]-10*d[0],n[1]-10*d[1]],p=[n[0]-10*u[0],n[1]-10*u[1]];t.plot([g,n,p])}updateResizeHandles(){this.handlePoints.forEach(((t,e,i)=>{const a=this.order[e];this.updateHandle.call(this,this.selection.get(e+1),t,e,i,a)}))}createRotFn(t){t.line(),t.circle(5)}getPoint(t){return this.handlePoints[this.order.indexOf(t)]}getPointHandle(t){return this.selection.get(this.order.indexOf(t)+1)}updateRotFn(t,e){const i=this.getPoint("t");t.get(0).plot(i[0],i[1],e[0],e[1]),t.get(1).center(e[0],e[1])}createRotationHandle(){const t=this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection",is("rot",this.el,this.handlePoints));this.createRot.call(this,t)}updateRotationHandle(){const t=this.selection.findOne("g.svg_select_handle_rot");this.updateRot(t,this.rotationPoint,this.handlePoints)}updatePoints(){const t=this.el.bbox(),e=this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());this.handlePoints=this.getHandlePoints(t).map((t=>as(t,e))),this.rotationPoint=as(this.getRotationPoint(t),e)}getHandlePoints({x:t,x2:e,y:i,y2:a,cx:s,cy:r}=this.el.bbox()){return[[t,i],[s,i],[e,i],[e,r],[e,a],[s,a],[t,a],[t,r]]}getRotationPoint({y:t,cx:e}=this.el.bbox()){return[e,t-20]}mutationHandler(){this.updatePoints(),this.updateSelection(),this.updateResizeHandles(),this.updateRotationHandle()}}const rs=t=>function(e=!0,i={}){"object"==typeof e&&(i=e,e=!0);let a=this.remember("_"+t.name);return a||(e.prototype instanceof ss?(a=new e(this),e=!0):a=new t(this),this.remember("_"+t.name,a)),a.active(e,i),this};Q(Gt,{select:rs(ss)}),Q([Ge,je,xe],{pointSelect:rs(class{constructor(t){this.el=t,t.remember("_pointSelectHandler",this),this.selection=new gi,this.order=["lt","t","rt","r","rb","b","lb","l","rot"],this.mutationHandler=this.mutationHandler.bind(this);const e=F();this.observer=new e.MutationObserver(this.mutationHandler)}init(t){this.createHandle=t.createHandle||this.createHandleFn,this.updateHandle=t.updateHandle||this.updateHandleFn,this.el.root().put(this.selection),this.updatePoints(),this.createSelection(),this.createPointHandles(),this.updatePointHandles(),this.observer.observe(this.el.node,{attributes:!0})}active(t,e){if(!t)return this.selection.clear().remove(),void this.observer.disconnect();this.init(e)}createSelection(){this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect")}updateSelection(){this.selection.get(0).plot(this.points)}createPointHandles(){this.points.forEach(((t,e,i)=>{this.createHandle.call(this,this.selection,t,e,i),this.selection.get(e+1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection",is("point",this.el,this.points,e))}))}createHandleFn(t){t.circle(5)}updateHandleFn(t,e){t.center(e[0],e[1])}updatePointHandles(){this.points.forEach(((t,e,i)=>{this.updateHandle.call(this,this.selection.get(e+1),t,e,i)}))}updatePoints(){const t=this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());this.points=this.el.array().map((e=>as(e,t)))}mutationHandler(){this.updatePoints(),this.updateSelection(),this.updatePointHandles()}})});const ns=t=>(t.changedTouches&&(t=t.changedTouches[0]),{x:t.clientX,y:t.clientY}),os=t=>{let e=1/0,i=1/0,a=-1/0,s=-1/0;for(let r=0;r<t.length;r++){const n=t[r];e=Math.min(e,n[0]),i=Math.min(i,n[1]),a=Math.max(a,n[0]),s=Math.max(s,n[1])}return new kt(e,i,a-e,s-i)};class ls{constructor(t){this.el=t,t.remember("_ResizeHandler",this),this.lastCoordinates=null,this.eventType="",this.lastEvent=null,this.handleResize=this.handleResize.bind(this),this.resize=this.resize.bind(this),this.endResize=this.endResize.bind(this),this.rotate=this.rotate.bind(this),this.movePoint=this.movePoint.bind(this)}active(t,e){this.preserveAspectRatio=e.preserveAspectRatio??!1,this.aroundCenter=e.aroundCenter??!1,this.grid=e.grid??0,this.degree=e.degree??0,this.el.off(".resize"),t&&(this.el.on(["lt.resize","rt.resize","rb.resize","lb.resize","t.resize","r.resize","b.resize","l.resize","rot.resize","point.resize"],this.handleResize),this.lastEvent&&("rot"===this.eventType?this.rotate(this.lastEvent):"point"===this.eventType?this.movePoint(this.lastEvent):this.resize(this.lastEvent)))}handleResize(t){this.eventType=t.type;const{event:e,index:i,points:a}=t.detail,s=!e.type.indexOf("mouse");if(s&&1!==(e.which||e.buttons))return;if(this.el.dispatch("beforeresize",{event:t,handler:this}).defaultPrevented)return;this.box=this.el.bbox(),this.startPoint=this.el.point(ns(e)),this.index=i,this.points=a.slice();const r=(s?"mousemove":"touchmove")+".resize",n=(s?"mouseup":"touchcancel.resize touchend")+".resize";"point"===t.type?zt(window,r,this.movePoint):"rot"===t.type?zt(window,r,this.rotate):zt(window,r,this.resize),zt(window,n,this.endResize)}resize(t){this.lastEvent=t;const e=this.snapToGrid(this.el.point(ns(t)));let i=e.x-this.startPoint.x,a=e.y-this.startPoint.y;this.preserveAspectRatio&&this.aroundCenter&&(i*=2,a*=2);const s=this.box.x+i,r=this.box.y+a,n=this.box.x2+i,o=this.box.y2+a;let l=new kt(this.box);if(this.eventType.includes("l")&&(l.x=Math.min(s,this.box.x2),l.x2=Math.max(s,this.box.x2)),this.eventType.includes("r")&&(l.x=Math.min(n,this.box.x),l.x2=Math.max(n,this.box.x)),this.eventType.includes("t")&&(l.y=Math.min(r,this.box.y2),l.y2=Math.max(r,this.box.y2)),this.eventType.includes("b")&&(l.y=Math.min(o,this.box.y),l.y2=Math.max(o,this.box.y)),l.width=l.x2-l.x,l.height=l.y2-l.y,this.preserveAspectRatio){const t=l.width/this.box.width,e=l.height/this.box.height,i=["lt","t","rt","r","rb","b","lb","l"],a=(i.indexOf(this.eventType)+4)%i.length,s=this.aroundCenter?[this.box.cx,this.box.cy]:this.points[a];let r=this.eventType.includes("t")||this.eventType.includes("b")?e:t;r=2===this.eventType.length?Math.max(t,e):r,l=function(t,e,i){const a=[[t.x,t.y],[t.x+t.width,t.y],[t.x+t.width,t.y+t.height],[t.x,t.y+t.height]].map((([t,a])=>{const s=t-e[0],r=(a-e[1])*i;return[s*i+e[0],r+e[1]]}));return os(a)}(this.box,s,r)}this.el.dispatch("resize",{box:new kt(l),angle:0,eventType:this.eventType,event:t,handler:this}).defaultPrevented||this.el.size(l.width,l.height).move(l.x,l.y)}movePoint(t){this.lastEvent=t;const{x:e,y:i}=this.snapToGrid(this.el.point(ns(t))),a=this.el.array().slice();a[this.index]=[e,i],this.el.dispatch("resize",{box:os(a),angle:0,eventType:this.eventType,event:t,handler:this}).defaultPrevented||this.el.plot(a)}rotate(t){this.lastEvent=t;const e=this.startPoint,i=this.el.point(ns(t)),{cx:a,cy:s}=this.box,r=e.x-a,n=e.y-s,o=i.x-a,l=i.y-s,h=Math.sqrt(r*r+n*n)*Math.sqrt(o*o+l*l);if(0===h)return;let c=Math.acos((r*o+n*l)/h)/Math.PI*180;if(!c)return;i.x<e.x&&(c=-c);const d=new vt(this.el),{x:u,y:g}=new bt(a,s).transformO(d),{rotate:p}=d.decompose(),f=this.snapToAngle(p+c)-p;this.el.dispatch("resize",{box:this.box,angle:f,eventType:this.eventType,event:t,handler:this}).defaultPrevented||this.el.transform(d.rotateO(f,u,g))}endResize(t){"rot"!==this.eventType&&"point"!==this.eventType&&this.resize(t),this.lastEvent=null,this.eventType="",Xt(window,"mousemove.resize touchmove.resize"),Xt(window,"mouseup.resize touchend.resize")}snapToGrid(t){return this.grid&&(t.x=Math.round(t.x/this.grid)*this.grid,t.y=Math.round(t.y/this.grid)*this.grid),t}snapToAngle(t){return this.degree&&(t=Math.round(t/this.degree)*this.degree),t}}Q(Gt,{resize:function(t=!0,e={}){"object"==typeof t&&(e=t,t=!0);let i=this.remember("_ResizeHandler");return i||(t.prototype instanceof ls?(i=new t(this),t=!0):i=new ls(this),this.remember("_resizeHandler",i)),i.active(t,e),this}}),void 0===window.SVG&&(window.SVG=yi),void 0===window.Apex&&(window.Apex={});var hs=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","isSeriesHidden","highlightSeries","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","exportToCSV","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","mouseleave","touchstart","touchmove","touchleave","mouseup","touchend"],this.ctx.animations=new y(this.ctx),this.ctx.axes=new ra(this.ctx),this.ctx.core=new qa(this.ctx.el,this.ctx),this.ctx.config=new Wi({}),this.ctx.data=new $i(this.ctx),this.ctx.grid=new Ki(this.ctx),this.ctx.graphics=new Mi(this.ctx),this.ctx.coreUtils=new Pi(this.ctx),this.ctx.crosshairs=new na(this.ctx),this.ctx.events=new aa(this.ctx),this.ctx.exports=new Ji(this.ctx),this.ctx.fill=new ji(this.ctx),this.ctx.localization=new sa(this.ctx),this.ctx.options=new Oi,this.ctx.responsive=new oa(this.ctx),this.ctx.series=new Zi(this.ctx),this.ctx.theme=new la(this.ctx),this.ctx.formatters=new Xi(this.ctx),this.ctx.titleSubtitle=new ha(this.ctx),this.ctx.legend=new xa(this.ctx),this.ctx.toolbar=new ba(this.ctx),this.ctx.tooltip=new Sa(this.ctx),this.ctx.dimensions=new pa(this.ctx),this.ctx.updateHelpers=new Za(this.ctx),this.ctx.zoomPanSelection=new ma(this.ctx),this.ctx.w.globals.tooltip=new Sa(this.ctx)}}]),t}(),cs=function(){function t(e){i(this,t),this.ctx=e,this.w=e.w}return s(t,[{key:"clear",value:function(t){var e=t.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:e})}},{key:"killSVG",value:function(t){t.each((function(){this.removeClass("*"),this.off()}),!0),t.clear()}},{key:"clearDomElements",value:function(t){var e=this,i=t.isUpdating,a=this.w.globals.dom.Paper.node;a.parentNode&&a.parentNode.parentNode&&!i&&(a.parentNode.parentNode.style.minHeight="unset");var s=this.w.globals.dom.baseEl;s&&this.ctx.eventList.forEach((function(t){s.removeEventListener(t,e.ctx.events.documentEvent)}));var r=this.w.globals.dom;if(null!==this.ctx.el)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(r.Paper),r.Paper.remove(),r.elWrap=null,r.elGraphical=null,r.elLegendWrap=null,r.elLegendForeign=null,r.baseEl=null,r.elGridRect=null,r.elGridRectMask=null,r.elGridRectBarMask=null,r.elGridRectMarkerMask=null,r.elForecastMask=null,r.elNonForecastMask=null,r.elDefs=null}}]),t}(),ds=new WeakMap;var us=function(){function t(e,a){i(this,t),this.opts=a,this.ctx=this,this.w=new Gi(a).init(),this.el=e,this.w.globals.cuid=v.randomId(),this.w.globals.chartID=this.w.config.chart.id?v.escapeString(this.w.config.chart.id):this.w.globals.cuid,new hs(this).initModules(),this.create=v.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this)}return s(t,[{key:"render",value:function(){var t=this;return new Promise((function(e,i){if(v.elementExists(t.el)){void 0===Apex._chartInstances&&(Apex._chartInstances=[]),t.w.config.chart.id&&Apex._chartInstances.push({id:t.w.globals.chartID,group:t.w.config.chart.group,chart:t}),t.setLocale(t.w.config.chart.defaultLocale);var a=t.w.config.chart.events.beforeMount;"function"==typeof a&&a(t,t.w),t.events.fireEvent("beforeMount",[t,t.w]),window.addEventListener("resize",t.windowResizeHandler),function(t,e){var i=!1;if(t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var a=t.getBoundingClientRect();"none"!==t.style.display&&0!==a.width||(i=!0)}var s=new ResizeObserver((function(a){i&&e.call(t,a),i=!0}));t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(t.children).forEach((function(t){return s.observe(t)})):s.observe(t),ds.set(e,s)}(t.el.parentNode,t.parentResizeHandler);var s=t.el.getRootNode&&t.el.getRootNode(),r=v.is("ShadowRoot",s),n=t.el.ownerDocument,o=r?s.getElementById("apexcharts-css"):n.getElementById("apexcharts-css");if(!o){var l;(o=document.createElement("style")).id="apexcharts-css",o.textContent='@keyframes opaque {\n  0% {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n\n  0%,\n  to {\n    opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  direction: ltr !important;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\nrect.legend-mouseover-inactive,\n.legend-mouseover-inactive rect,\n.legend-mouseover-inactive path,\n.legend-mouseover-inactive circle,\n.legend-mouseover-inactive line,\n.legend-mouseover-inactive text.apexcharts-yaxis-title-text,\n.legend-mouseover-inactive text.apexcharts-yaxis-label {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, .96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, .8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, .7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-z-value:empty,\n.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,\n.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_shape {\n  stroke-width: 1;\n  stroke-dasharray: 10 10;\n  stroke: black;\n  stroke-opacity: 0.1;\n  pointer-events: none;\n  fill: none;\n}\n\n.svg_select_handle {\n  stroke-width: 3;\n  stroke: black;\n  fill: none;\n}\n\n.svg_select_handle_r {\n  cursor: e-resize;\n}\n\n.svg_select_handle_l {\n  cursor: w-resize;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,\n.apexcharts-pan-icon,\n.apexcharts-reset-icon,\n.apexcharts-selection-icon,\n.apexcharts-toolbar-custom-icon,\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,\n.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,\n.apexcharts-reset-icon,\n.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, .7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,\n.apexcharts-datalabel.apexcharts-element-hidden,\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value,\n.apexcharts-datalabels,\n.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-gridline,\n.apexcharts-line,\n.apexcharts-point-annotation-label,\n.apexcharts-radar-series path:not(.apexcharts-marker),\n.apexcharts-radar-series polygon,\n.apexcharts-toolbar svg,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-zoom-rect,\n.no-pointer-events {\n  pointer-events: none\n}\n\n.apexcharts-tooltip-active .apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,\n.resize-triggers,\n.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows {\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers {\n  pointer-events: none\n}';var h=(null===(l=t.opts.chart)||void 0===l?void 0:l.nonce)||t.w.config.chart.nonce;h&&o.setAttribute("nonce",h),r?s.prepend(o):n.head.appendChild(o)}var c=t.create(t.w.config.series,{});if(!c)return e(t);t.mount(c).then((function(){"function"==typeof t.w.config.chart.events.mounted&&t.w.config.chart.events.mounted(t,t.w),t.events.fireEvent("mounted",[t,t.w]),e(c)})).catch((function(t){i(t)}))}else i(new Error("Element not found"))}))}},{key:"create",value:function(t,e){var i=this,a=this.w;new hs(this).initModules();var s=this.w.globals;if(s.noData=!1,s.animationEnded=!1,!v.elementExists(this.el))return s.animationEnded=!0,this.destroy(),null;(this.responsive.checkResponsiveConfig(e),a.config.xaxis.convertedCatToNumeric)&&new Ni(a.config).convertCatToNumericXaxis(a.config,this.ctx);if(this.core.setupElements(),"treemap"===a.config.chart.type&&(a.config.grid.show=!1,a.config.yaxis[0].show=!1),0===s.svgWidth)return s.animationEnded=!0,null;var r=t;t.forEach((function(t,e){t.hidden&&(r=i.legend.legendHelpers.getSeriesAfterCollapsing({realIndex:e}))}));var n=Pi.checkComboSeries(r,a.config.chart.type);s.comboCharts=n.comboCharts,s.comboBarCount=n.comboBarCount;var o=r.every((function(t){return t.data&&0===t.data.length}));(0===r.length||o&&s.collapsedSeries.length<1)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(r),this.theme.init(),new Vi(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),s.noData&&s.collapsedSeries.length!==s.series.length&&!a.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),s.axisCharts&&(this.core.coreCalculations(),"category"!==a.config.xaxis.type&&this.formatters.setLabelFormatters(),this.ctx.toolbar.minX=a.globals.minX,this.ctx.toolbar.maxX=a.globals.maxX),this.formatters.heatmapLabelFormatters(),new Pi(this).getLargestMarkerSize(),this.dimensions.plotCoords();var l=this.core.xySettings();this.grid.createGridMask();var h=this.core.plotChartType(r,l),c=new qi(this);return c.bringForward(),a.config.dataLabels.background.enabled&&c.dataLabelsBackground(),this.core.shiftGraphPosition(),{elGraph:h,xyRatios:l,dimensions:{plot:{left:a.globals.translateX,top:a.globals.translateY,width:a.globals.gridWidth,height:a.globals.gridHeight}}}}},{key:"mount",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this,a=i.w;return new Promise((function(s,r){if(null===i.el)return r(new Error("Not enough data to display or target element not found"));(null===e||a.globals.allSeriesCollapsed)&&i.series.handleNoData(),i.grid=new Ki(i);var n,o,l=i.grid.drawGrid();(i.annotations=new Fi(i),i.annotations.drawImageAnnos(),i.annotations.drawTextAnnos(),"back"===a.config.grid.position)&&(l&&a.globals.dom.elGraphical.add(l.el),null!=l&&null!==(n=l.elGridBorders)&&void 0!==n&&n.node&&a.globals.dom.elGraphical.add(l.elGridBorders));if(Array.isArray(e.elGraph))for(var h=0;h<e.elGraph.length;h++)a.globals.dom.elGraphical.add(e.elGraph[h]);else a.globals.dom.elGraphical.add(e.elGraph);"front"===a.config.grid.position&&(l&&a.globals.dom.elGraphical.add(l.el),null!=l&&null!==(o=l.elGridBorders)&&void 0!==o&&o.node&&a.globals.dom.elGraphical.add(l.elGridBorders));"front"===a.config.xaxis.crosshairs.position&&i.crosshairs.drawXCrosshairs(),"front"===a.config.yaxis[0].crosshairs.position&&i.crosshairs.drawYCrosshairs(),"treemap"!==a.config.chart.type&&i.axes.drawAxis(a.config.chart.type,l);var c=new Qi(t.ctx,l),d=new ia(t.ctx,l);if(null!==l&&(c.xAxisLabelCorrections(l.xAxisTickWidth),d.setYAxisTextAlignments(),a.config.yaxis.map((function(t,e){-1===a.globals.ignoreYAxisIndexes.indexOf(e)&&d.yAxisTitleRotate(e,t.opposite)}))),i.annotations.drawAxesAnnotations(),!a.globals.noData){if(a.config.tooltip.enabled&&!a.globals.noData&&i.w.globals.tooltip.drawTooltip(e.xyRatios),a.globals.axisCharts&&(a.globals.isXNumeric||a.config.xaxis.convertedCatToNumeric||a.globals.isRangeBar))(a.config.chart.zoom.enabled||a.config.chart.selection&&a.config.chart.selection.enabled||a.config.chart.pan&&a.config.chart.pan.enabled)&&i.zoomPanSelection.init({xyRatios:e.xyRatios});else{var u=a.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach((function(t){u[t]=!1}))}a.config.chart.toolbar.show&&!a.globals.allSeriesCollapsed&&i.toolbar.createToolbar()}a.globals.memory.methodsToExec.length>0&&a.globals.memory.methodsToExec.forEach((function(t){t.method(t.params,!1,t.context)})),a.globals.axisCharts||a.globals.noData||i.core.resizeNonAxisCharts(),s(i)}))}},{key:"destroy",value:function(){window.removeEventListener("resize",this.windowResizeHandler),function(t,e){var i=ds.get(e);i&&(i.disconnect(),ds.delete(e))}(this.el.parentNode,this.parentResizeHandler);var t=this.w.config.chart.id;t&&Apex._chartInstances.forEach((function(e,i){e.id===v.escapeString(t)&&Apex._chartInstances.splice(i,1)})),new cs(this.ctx).clear({isUpdating:!1})}},{key:"updateOptions",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],n=this.w;return n.globals.selection=void 0,t.series&&(this.series.resetSeries(!1,!0,!1),t.series.length&&t.series[0].data&&(t.series=t.series.map((function(t,i){return e.updateHelpers._extendSeries(t,i)}))),this.updateHelpers.revertDefaultAxisMinMax()),t.xaxis&&(t=this.updateHelpers.forceXAxisUpdate(t)),t.yaxis&&(t=this.updateHelpers.forceYAxisUpdate(t)),n.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),t.theme&&(t=this.theme.updateThemeOptions(t)),this.updateHelpers._updateOptions(t,i,a,s,r)}},{key:"updateSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(t,e,i)}},{key:"appendSeries",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w.config.series.slice();return a.push(t),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(a,e,i)}},{key:"appendData",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var a=i.w.config.series.slice(),s=0;s<a.length;s++)if(null!==t[s]&&void 0!==t[s])for(var r=0;r<t[s].data.length;r++)a[s].data.push(t[s].data[r]);return i.w.config.series=a,e&&(i.w.globals.initialSeries=v.clone(i.w.config.series)),this.update()}},{key:"update",value:function(t){var e=this;return new Promise((function(i,a){new cs(e.ctx).clear({isUpdating:!0});var s=e.create(e.w.config.series,t);if(!s)return i(e);e.mount(s).then((function(){"function"==typeof e.w.config.chart.events.updated&&e.w.config.chart.events.updated(e,e.w),e.events.fireEvent("updated",[e,e.w]),e.w.globals.isDirty=!0,i(e)})).catch((function(t){a(t)}))}))}},{key:"getSyncedCharts",value:function(){var t=this.getGroupedCharts(),e=[this];return t.length&&(e=[],t.forEach((function(t){e.push(t)}))),e}},{key:"getGroupedCharts",value:function(){var t=this;return Apex._chartInstances.filter((function(t){if(t.group)return!0})).map((function(e){return t.w.config.chart.group===e.group?e.chart:t}))}},{key:"toggleSeries",value:function(t){return this.series.toggleSeries(t)}},{key:"highlightSeriesOnLegendHover",value:function(t,e){return this.series.toggleSeriesOnHover(t,e)}},{key:"showSeries",value:function(t){this.series.showSeries(t)}},{key:"hideSeries",value:function(t){this.series.hideSeries(t)}},{key:"highlightSeries",value:function(t){this.series.highlightSeries(t)}},{key:"isSeriesHidden",value:function(t){this.series.isSeriesHidden(t)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.series.resetSeries(t,e)}},{key:"addEventListener",value:function(t,e){this.events.addEventListener(t,e)}},{key:"removeEventListener",value:function(t,e){this.events.removeEventListener(t,e)}},{key:"addXaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addXaxisAnnotationExternal(t,e,a)}},{key:"addYaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addYaxisAnnotationExternal(t,e,a)}},{key:"addPointAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addPointAnnotationExternal(t,e,a)}},{key:"clearAnnotations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this;t&&(e=t),e.annotations.clearAnnotations(e)}},{key:"removeAnnotation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=this;e&&(i=e),i.annotations.removeAnnotation(i,t)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(t,e){return this.coreUtils.getSeriesTotalsXRange(t,e)}},{key:"getHighestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new ea(this.ctx).getMinYMaxY(t).highestY}},{key:"getLowestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new ea(this.ctx).getMinYMaxY(t).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(t,e){return this.updateHelpers.toggleDataPointSelection(t,e)}},{key:"zoomX",value:function(t,e){this.ctx.toolbar.zoomUpdateOptions(t,e)}},{key:"setLocale",value:function(t){this.localization.setCurrentLocaleValues(t)}},{key:"dataURI",value:function(t){return new Ji(this.ctx).dataURI(t)}},{key:"exportToCSV",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Ji(this.ctx).exportToCSV(t)}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize()}},{key:"_windowResize",value:function(){var t=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout((function(){t.w.globals.resized=!0,t.w.globals.dataChanged=!1,t.ctx.update()}),150)}},{key:"_windowResizeHandler",value:function(){var t=this.w.config.chart.redrawOnWindowResize;"function"==typeof t&&(t=t()),t&&this._windowResize()}}],[{key:"getChartByID",value:function(t){var e=v.escapeString(t);if(Apex._chartInstances){var i=Apex._chartInstances.filter((function(t){return t.id===e}))[0];return i&&i.chart}}},{key:"initOnLoad",value:function(){for(var e=document.querySelectorAll("[data-apexcharts]"),i=0;i<e.length;i++){new t(e[i],JSON.parse(e[i].getAttribute("data-options"))).render()}}},{key:"exec",value:function(t,e){var i=this.getChartByID(t);if(i){i.w.globals.isExecCalled=!0;var a=null;if(-1!==i.publicMethods.indexOf(e)){for(var s=arguments.length,r=new Array(s>2?s-2:0),n=2;n<s;n++)r[n-2]=arguments[n];a=i[e].apply(i,r)}return a}}},{key:"merge",value:function(t,e){return v.extend(t,e)}}]),t}();module.exports=us;


/***/ }),

/***/ 692:
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 647:
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_561__) {

__nested_webpack_require_561__.r(__nested_webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 853:
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_755__) {

// ESM COMPAT FLAG
__nested_webpack_require_755__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_755__.d(__nested_webpack_exports__, {
  "afterMain": function() { return /* reexport */ afterMain; },
  "afterRead": function() { return /* reexport */ afterRead; },
  "afterWrite": function() { return /* reexport */ afterWrite; },
  "applyStyles": function() { return /* reexport */ modifiers_applyStyles; },
  "arrow": function() { return /* reexport */ modifiers_arrow; },
  "auto": function() { return /* reexport */ auto; },
  "basePlacements": function() { return /* reexport */ basePlacements; },
  "beforeMain": function() { return /* reexport */ beforeMain; },
  "beforeRead": function() { return /* reexport */ beforeRead; },
  "beforeWrite": function() { return /* reexport */ beforeWrite; },
  "bottom": function() { return /* reexport */ bottom; },
  "clippingParents": function() { return /* reexport */ clippingParents; },
  "computeStyles": function() { return /* reexport */ modifiers_computeStyles; },
  "createPopper": function() { return /* reexport */ popper_createPopper; },
  "createPopperBase": function() { return /* reexport */ createPopper; },
  "createPopperLite": function() { return /* reexport */ popper_lite_createPopper; },
  "detectOverflow": function() { return /* reexport */ detectOverflow; },
  "end": function() { return /* reexport */ end; },
  "eventListeners": function() { return /* reexport */ eventListeners; },
  "flip": function() { return /* reexport */ modifiers_flip; },
  "hide": function() { return /* reexport */ modifiers_hide; },
  "left": function() { return /* reexport */ left; },
  "main": function() { return /* reexport */ main; },
  "modifierPhases": function() { return /* reexport */ modifierPhases; },
  "offset": function() { return /* reexport */ modifiers_offset; },
  "placements": function() { return /* reexport */ enums_placements; },
  "popper": function() { return /* reexport */ popper; },
  "popperGenerator": function() { return /* reexport */ popperGenerator; },
  "popperOffsets": function() { return /* reexport */ modifiers_popperOffsets; },
  "preventOverflow": function() { return /* reexport */ modifiers_preventOverflow; },
  "read": function() { return /* reexport */ read; },
  "reference": function() { return /* reexport */ reference; },
  "right": function() { return /* reexport */ right; },
  "start": function() { return /* reexport */ start; },
  "top": function() { return /* reexport */ enums_top; },
  "variationPlacements": function() { return /* reexport */ variationPlacements; },
  "viewport": function() { return /* reexport */ viewport; },
  "write": function() { return /* reexport */ write; }
});

;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js








function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums_top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function eventListeners_effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: eventListeners_effect,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js




function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? enums_top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/index.js









;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper-lite.js





var popper_lite_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles];
var popper_lite_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: popper_lite_defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/index.js

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ 554:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({ value: true }));

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function hasProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function lastItemOf(arr) {
  return arr[arr.length - 1];
}

// push only the items not included in the array
function pushUnique(arr) {
  for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    items[_key - 1] = arguments[_key];
  }
  items.forEach(function (item) {
    if (arr.includes(item)) {
      return;
    }
    arr.push(item);
  });
  return arr;
}
function stringToArray(str, separator) {
  // convert empty string to an empty array
  return str ? str.split(separator) : [];
}
function isInRange(testVal, min, max) {
  var minOK = min === undefined || testVal >= min;
  var maxOK = max === undefined || testVal <= max;
  return minOK && maxOK;
}
function limitToRange(val, min, max) {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}
function createTagRepeat(tagName, repeat) {
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var html = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var openTagSrc = Object.keys(attributes).reduce(function (src, attr) {
    var val = attributes[attr];
    if (typeof val === 'function') {
      val = val(index);
    }
    return "".concat(src, " ").concat(attr, "=\"").concat(val, "\"");
  }, tagName);
  html += "<".concat(openTagSrc, "></").concat(tagName, ">");
  var next = index + 1;
  return next < repeat ? createTagRepeat(tagName, repeat, attributes, next, html) : html;
}

// Remove the spacing surrounding tags for HTML parser not to create text nodes
// before/after elements
function optimizeTemplateHTML(html) {
  return html.replace(/>\s+/g, '>').replace(/\s+</, '<');
}

function stripTime(timeValue) {
  return new Date(timeValue).setHours(0, 0, 0, 0);
}
function today() {
  return new Date().setHours(0, 0, 0, 0);
}

// Get the time value of the start of given date or year, month and day
function dateValue() {
  switch (arguments.length) {
    case 0:
      return today();
    case 1:
      return stripTime(arguments.length <= 0 ? undefined : arguments[0]);
  }

  // use setFullYear() to keep 2-digit year from being mapped to 1900-1999
  var newDate = new Date(0);
  newDate.setFullYear.apply(newDate, arguments);
  return newDate.setHours(0, 0, 0, 0);
}
function addDays(date, amount) {
  var newDate = new Date(date);
  return newDate.setDate(newDate.getDate() + amount);
}
function addWeeks(date, amount) {
  return addDays(date, amount * 7);
}
function addMonths(date, amount) {
  // If the day of the date is not in the new month, the last day of the new
  // month will be returned. e.g. Jan 31 + 1 month → Feb 28 (not Mar 03)
  var newDate = new Date(date);
  var monthsToSet = newDate.getMonth() + amount;
  var expectedMonth = monthsToSet % 12;
  if (expectedMonth < 0) {
    expectedMonth += 12;
  }
  var time = newDate.setMonth(monthsToSet);
  return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
}
function addYears(date, amount) {
  // If the date is Feb 29 and the new year is not a leap year, Feb 28 of the
  // new year will be returned.
  var newDate = new Date(date);
  var expectedMonth = newDate.getMonth();
  var time = newDate.setFullYear(newDate.getFullYear() + amount);
  return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
}

// Calculate the distance bettwen 2 days of the week
function dayDiff(day, from) {
  return (day - from + 7) % 7;
}

// Get the date of the specified day of the week of given base date
function dayOfTheWeekOf(baseDate, dayOfWeek) {
  var weekStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var baseDay = new Date(baseDate).getDay();
  return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
}

// Get the ISO week of a date
function getWeek(date) {
  // start of ISO week is Monday
  var thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
  // 1st week == the week where the 4th of January is in
  var firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
  return Math.round((thuOfTheWeek - firstThu) / 604800000) + 1;
}

// Get the start year of the period of years that includes given date
// years: length of the year period
function startOfYearPeriod(date, years) {
  /* @see https://en.wikipedia.org/wiki/Year_zero#ISO_8601 */
  var year = new Date(date).getFullYear();
  return Math.floor(year / years) * years;
}

// pattern for format parts
var reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
// pattern for non date parts
var reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
// cache for persed formats
var knownFormats = {};
// parse funtions for date parts
var parseFns = {
  y: function y(date, year) {
    return new Date(date).setFullYear(parseInt(year, 10));
  },
  m: function m(date, month, locale) {
    var newDate = new Date(date);
    var monthIndex = parseInt(month, 10) - 1;
    if (isNaN(monthIndex)) {
      if (!month) {
        return NaN;
      }
      var monthName = month.toLowerCase();
      var compareNames = function compareNames(name) {
        return name.toLowerCase().startsWith(monthName);
      };
      // compare with both short and full names because some locales have periods
      // in the short names (not equal to the first X letters of the full names)
      monthIndex = locale.monthsShort.findIndex(compareNames);
      if (monthIndex < 0) {
        monthIndex = locale.months.findIndex(compareNames);
      }
      if (monthIndex < 0) {
        return NaN;
      }
    }
    newDate.setMonth(monthIndex);
    return newDate.getMonth() !== normalizeMonth(monthIndex) ? newDate.setDate(0) : newDate.getTime();
  },
  d: function d(date, day) {
    return new Date(date).setDate(parseInt(day, 10));
  }
};
// format functions for date parts
var formatFns = {
  d: function d(date) {
    return date.getDate();
  },
  dd: function dd(date) {
    return padZero(date.getDate(), 2);
  },
  D: function D(date, locale) {
    return locale.daysShort[date.getDay()];
  },
  DD: function DD(date, locale) {
    return locale.days[date.getDay()];
  },
  m: function m(date) {
    return date.getMonth() + 1;
  },
  mm: function mm(date) {
    return padZero(date.getMonth() + 1, 2);
  },
  M: function M(date, locale) {
    return locale.monthsShort[date.getMonth()];
  },
  MM: function MM(date, locale) {
    return locale.months[date.getMonth()];
  },
  y: function y(date) {
    return date.getFullYear();
  },
  yy: function yy(date) {
    return padZero(date.getFullYear(), 2).slice(-2);
  },
  yyyy: function yyyy(date) {
    return padZero(date.getFullYear(), 4);
  }
};

// get month index in normal range (0 - 11) from any number
function normalizeMonth(monthIndex) {
  return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
}
function padZero(num, length) {
  return num.toString().padStart(length, '0');
}
function parseFormatString(format) {
  if (typeof format !== 'string') {
    throw new Error("Invalid date format.");
  }
  if (format in knownFormats) {
    return knownFormats[format];
  }

  // sprit the format string into parts and seprators
  var separators = format.split(reFormatTokens);
  var parts = format.match(new RegExp(reFormatTokens, 'g'));
  if (separators.length === 0 || !parts) {
    throw new Error("Invalid date format.");
  }

  // collect format functions used in the format
  var partFormatters = parts.map(function (token) {
    return formatFns[token];
  });

  // collect parse function keys used in the format
  // iterate over parseFns' keys in order to keep the order of the keys.
  var partParserKeys = Object.keys(parseFns).reduce(function (keys, key) {
    var token = parts.find(function (part) {
      return part[0] !== 'D' && part[0].toLowerCase() === key;
    });
    if (token) {
      keys.push(key);
    }
    return keys;
  }, []);
  return knownFormats[format] = {
    parser: function parser(dateStr, locale) {
      var dateParts = dateStr.split(reNonDateParts).reduce(function (dtParts, part, index) {
        if (part.length > 0 && parts[index]) {
          var token = parts[index][0];
          if (token === 'M') {
            dtParts.m = part;
          } else if (token !== 'D') {
            dtParts[token] = part;
          }
        }
        return dtParts;
      }, {});

      // iterate over partParserkeys so that the parsing is made in the oder
      // of year, month and day to prevent the day parser from correcting last
      // day of month wrongly
      return partParserKeys.reduce(function (origDate, key) {
        var newDate = parseFns[key](origDate, dateParts[key], locale);
        // ingnore the part failed to parse
        return isNaN(newDate) ? origDate : newDate;
      }, today());
    },
    formatter: function formatter(date, locale) {
      var dateStr = partFormatters.reduce(function (str, fn, index) {
        return str += "".concat(separators[index]).concat(fn(date, locale));
      }, '');
      // separators' length is always parts' length + 1,
      return dateStr += lastItemOf(separators);
    }
  };
}
function parseDate(dateStr, format, locale) {
  if (dateStr instanceof Date || typeof dateStr === 'number') {
    var date = stripTime(dateStr);
    return isNaN(date) ? undefined : date;
  }
  if (!dateStr) {
    return undefined;
  }
  if (dateStr === 'today') {
    return today();
  }
  if (format && format.toValue) {
    var _date = format.toValue(dateStr, format, locale);
    return isNaN(_date) ? undefined : stripTime(_date);
  }
  return parseFormatString(format).parser(dateStr, locale);
}
function formatDate(date, format, locale) {
  if (isNaN(date) || !date && date !== 0) {
    return '';
  }
  var dateObj = typeof date === 'number' ? new Date(date) : date;
  if (format.toDisplay) {
    return format.toDisplay(dateObj, format, locale);
  }
  return parseFormatString(format).formatter(dateObj, locale);
}

var listenerRegistry = new WeakMap();
var _EventTarget$prototyp = EventTarget.prototype,
  addEventListener = _EventTarget$prototyp.addEventListener,
  removeEventListener = _EventTarget$prototyp.removeEventListener;

// Register event listeners to a key object
// listeners: array of listener definitions;
//   - each definition must be a flat array of event target and the arguments
//     used to call addEventListener() on the target
function registerListeners(keyObj, listeners) {
  var registered = listenerRegistry.get(keyObj);
  if (!registered) {
    registered = [];
    listenerRegistry.set(keyObj, registered);
  }
  listeners.forEach(function (listener) {
    addEventListener.call.apply(addEventListener, _toConsumableArray(listener));
    registered.push(listener);
  });
}
function unregisterListeners(keyObj) {
  var listeners = listenerRegistry.get(keyObj);
  if (!listeners) {
    return;
  }
  listeners.forEach(function (listener) {
    removeEventListener.call.apply(removeEventListener, _toConsumableArray(listener));
  });
  listenerRegistry["delete"](keyObj);
}

// Event.composedPath() polyfill for Edge
// based on https://gist.github.com/kleinfreund/e9787d73776c0e3750dcfcdc89f100ec
if (!Event.prototype.composedPath) {
  var getComposedPath = function getComposedPath(node) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    path.push(node);
    var parent;
    if (node.parentNode) {
      parent = node.parentNode;
    } else if (node.host) {
      // ShadowRoot
      parent = node.host;
    } else if (node.defaultView) {
      // Document
      parent = node.defaultView;
    }
    return parent ? getComposedPath(parent, path) : path;
  };
  Event.prototype.composedPath = function () {
    return getComposedPath(this.target);
  };
}
function findFromPath(path, criteria, currentTarget) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var el = path[index];
  if (criteria(el)) {
    return el;
  } else if (el === currentTarget || !el.parentElement) {
    // stop when reaching currentTarget or <html>
    return;
  }
  return findFromPath(path, criteria, currentTarget, index + 1);
}

// Search for the actual target of a delegated event
function findElementInEventPath(ev, selector) {
  var criteria = typeof selector === 'function' ? selector : function (el) {
    return el.matches(selector);
  };
  return findFromPath(ev.composedPath(), criteria, ev.currentTarget);
}

// default locales
var locales = {
  en: {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    clear: "Clear",
    titleFormat: "MM y"
  }
};

// config options updatable by setOptions() and their default values
var defaultOptions = {
  autohide: false,
  beforeShowDay: null,
  beforeShowDecade: null,
  beforeShowMonth: null,
  beforeShowYear: null,
  calendarWeeks: false,
  clearBtn: false,
  dateDelimiter: ',',
  datesDisabled: [],
  daysOfWeekDisabled: [],
  daysOfWeekHighlighted: [],
  defaultViewDate: undefined,
  // placeholder, defaults to today() by the program
  disableTouchKeyboard: false,
  format: 'mm/dd/yyyy',
  language: 'en',
  maxDate: null,
  maxNumberOfDates: 1,
  maxView: 3,
  minDate: null,
  nextArrow: '<svg class="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>',
  orientation: 'auto',
  pickLevel: 0,
  prevArrow: '<svg class="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/></svg>',
  showDaysOfWeek: true,
  showOnClick: true,
  showOnFocus: true,
  startView: 0,
  title: '',
  todayBtn: false,
  todayBtnMode: 0,
  todayHighlight: false,
  updateOnBlur: true,
  weekStart: 0
};

var range = document.createRange();
function parseHTML(html) {
  return range.createContextualFragment(html);
}
function hideElement(el) {
  if (el.style.display === 'none') {
    return;
  }
  // back up the existing display setting in data-style-display
  if (el.style.display) {
    el.dataset.styleDisplay = el.style.display;
  }
  el.style.display = 'none';
}
function showElement(el) {
  if (el.style.display !== 'none') {
    return;
  }
  if (el.dataset.styleDisplay) {
    // restore backed-up dispay property
    el.style.display = el.dataset.styleDisplay;
    delete el.dataset.styleDisplay;
  } else {
    el.style.display = '';
  }
}
function emptyChildNodes(el) {
  if (el.firstChild) {
    el.removeChild(el.firstChild);
    emptyChildNodes(el);
  }
}
function replaceChildNodes(el, newChildNodes) {
  emptyChildNodes(el);
  if (newChildNodes instanceof DocumentFragment) {
    el.appendChild(newChildNodes);
  } else if (typeof newChildNodes === 'string') {
    el.appendChild(parseHTML(newChildNodes));
  } else if (typeof newChildNodes.forEach === 'function') {
    newChildNodes.forEach(function (node) {
      el.appendChild(node);
    });
  }
}

var defaultLang = defaultOptions.language,
  defaultFormat = defaultOptions.format,
  defaultWeekStart = defaultOptions.weekStart;

// Reducer function to filter out invalid day-of-week from the input
function sanitizeDOW(dow, day) {
  return dow.length < 6 && day >= 0 && day < 7 ? pushUnique(dow, day) : dow;
}
function calcEndOfWeek(startOfWeek) {
  return (startOfWeek + 6) % 7;
}

// validate input date. if invalid, fallback to the original value
function validateDate(value, format, locale, origValue) {
  var date = parseDate(value, format, locale);
  return date !== undefined ? date : origValue;
}

// Validate viewId. if invalid, fallback to the original value
function validateViewId(value, origValue) {
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var viewId = parseInt(value, 10);
  return viewId >= 0 && viewId <= max ? viewId : origValue;
}

// Create Datepicker configuration to set
function processOptions(options, datepicker) {
  var inOpts = Object.assign({}, options);
  var config = {};
  var locales = datepicker.constructor.locales;
  var _ref = datepicker.config || {},
    format = _ref.format,
    language = _ref.language,
    locale = _ref.locale,
    maxDate = _ref.maxDate,
    maxView = _ref.maxView,
    minDate = _ref.minDate,
    pickLevel = _ref.pickLevel,
    startView = _ref.startView,
    weekStart = _ref.weekStart;
  if (inOpts.language) {
    var lang;
    if (inOpts.language !== language) {
      if (locales[inOpts.language]) {
        lang = inOpts.language;
      } else {
        // Check if langauge + region tag can fallback to the one without
        // region (e.g. fr-CA → fr)
        lang = inOpts.language.split('-')[0];
        if (locales[lang] === undefined) {
          lang = false;
        }
      }
    }
    delete inOpts.language;
    if (lang) {
      language = config.language = lang;

      // update locale as well when updating language
      var origLocale = locale || locales[defaultLang];
      // use default language's properties for the fallback
      locale = Object.assign({
        format: defaultFormat,
        weekStart: defaultWeekStart
      }, locales[defaultLang]);
      if (language !== defaultLang) {
        Object.assign(locale, locales[language]);
      }
      config.locale = locale;
      // if format and/or weekStart are the same as old locale's defaults,
      // update them to new locale's defaults
      if (format === origLocale.format) {
        format = config.format = locale.format;
      }
      if (weekStart === origLocale.weekStart) {
        weekStart = config.weekStart = locale.weekStart;
        config.weekEnd = calcEndOfWeek(locale.weekStart);
      }
    }
  }
  if (inOpts.format) {
    var hasToDisplay = typeof inOpts.format.toDisplay === 'function';
    var hasToValue = typeof inOpts.format.toValue === 'function';
    var validFormatString = reFormatTokens.test(inOpts.format);
    if (hasToDisplay && hasToValue || validFormatString) {
      format = config.format = inOpts.format;
    }
    delete inOpts.format;
  }

  //*** dates ***//
  // while min and maxDate for "no limit" in the options are better to be null
  // (especially when updating), the ones in the config have to be undefined
  // because null is treated as 0 (= unix epoch) when comparing with time value
  var minDt = minDate;
  var maxDt = maxDate;
  if (inOpts.minDate !== undefined) {
    minDt = inOpts.minDate === null ? dateValue(0, 0, 1) // set 0000-01-01 to prevent negative values for year
    : validateDate(inOpts.minDate, format, locale, minDt);
    delete inOpts.minDate;
  }
  if (inOpts.maxDate !== undefined) {
    maxDt = inOpts.maxDate === null ? undefined : validateDate(inOpts.maxDate, format, locale, maxDt);
    delete inOpts.maxDate;
  }
  if (maxDt < minDt) {
    minDate = config.minDate = maxDt;
    maxDate = config.maxDate = minDt;
  } else {
    if (minDate !== minDt) {
      minDate = config.minDate = minDt;
    }
    if (maxDate !== maxDt) {
      maxDate = config.maxDate = maxDt;
    }
  }
  if (inOpts.datesDisabled) {
    config.datesDisabled = inOpts.datesDisabled.reduce(function (dates, dt) {
      var date = parseDate(dt, format, locale);
      return date !== undefined ? pushUnique(dates, date) : dates;
    }, []);
    delete inOpts.datesDisabled;
  }
  if (inOpts.defaultViewDate !== undefined) {
    var viewDate = parseDate(inOpts.defaultViewDate, format, locale);
    if (viewDate !== undefined) {
      config.defaultViewDate = viewDate;
    }
    delete inOpts.defaultViewDate;
  }

  //*** days of week ***//
  if (inOpts.weekStart !== undefined) {
    var wkStart = Number(inOpts.weekStart) % 7;
    if (!isNaN(wkStart)) {
      weekStart = config.weekStart = wkStart;
      config.weekEnd = calcEndOfWeek(wkStart);
    }
    delete inOpts.weekStart;
  }
  if (inOpts.daysOfWeekDisabled) {
    config.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekDisabled;
  }
  if (inOpts.daysOfWeekHighlighted) {
    config.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekHighlighted;
  }

  //*** multi date ***//
  if (inOpts.maxNumberOfDates !== undefined) {
    var maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
    if (maxNumberOfDates >= 0) {
      config.maxNumberOfDates = maxNumberOfDates;
      config.multidate = maxNumberOfDates !== 1;
    }
    delete inOpts.maxNumberOfDates;
  }
  if (inOpts.dateDelimiter) {
    config.dateDelimiter = String(inOpts.dateDelimiter);
    delete inOpts.dateDelimiter;
  }

  //*** pick level & view ***//
  var newPickLevel = pickLevel;
  if (inOpts.pickLevel !== undefined) {
    newPickLevel = validateViewId(inOpts.pickLevel, 2);
    delete inOpts.pickLevel;
  }
  if (newPickLevel !== pickLevel) {
    pickLevel = config.pickLevel = newPickLevel;
  }
  var newMaxView = maxView;
  if (inOpts.maxView !== undefined) {
    newMaxView = validateViewId(inOpts.maxView, maxView);
    delete inOpts.maxView;
  }
  // ensure max view >= pick level
  newMaxView = pickLevel > newMaxView ? pickLevel : newMaxView;
  if (newMaxView !== maxView) {
    maxView = config.maxView = newMaxView;
  }
  var newStartView = startView;
  if (inOpts.startView !== undefined) {
    newStartView = validateViewId(inOpts.startView, newStartView);
    delete inOpts.startView;
  }
  // ensure pick level <= start view <= max view
  if (newStartView < pickLevel) {
    newStartView = pickLevel;
  } else if (newStartView > maxView) {
    newStartView = maxView;
  }
  if (newStartView !== startView) {
    config.startView = newStartView;
  }

  //*** template ***//
  if (inOpts.prevArrow) {
    var prevArrow = parseHTML(inOpts.prevArrow);
    if (prevArrow.childNodes.length > 0) {
      config.prevArrow = prevArrow.childNodes;
    }
    delete inOpts.prevArrow;
  }
  if (inOpts.nextArrow) {
    var nextArrow = parseHTML(inOpts.nextArrow);
    if (nextArrow.childNodes.length > 0) {
      config.nextArrow = nextArrow.childNodes;
    }
    delete inOpts.nextArrow;
  }

  //*** misc ***//
  if (inOpts.disableTouchKeyboard !== undefined) {
    config.disableTouchKeyboard = 'ontouchstart' in document && !!inOpts.disableTouchKeyboard;
    delete inOpts.disableTouchKeyboard;
  }
  if (inOpts.orientation) {
    var orientation = inOpts.orientation.toLowerCase().split(/\s+/g);
    config.orientation = {
      x: orientation.find(function (x) {
        return x === 'left' || x === 'right';
      }) || 'auto',
      y: orientation.find(function (y) {
        return y === 'top' || y === 'bottom';
      }) || 'auto'
    };
    delete inOpts.orientation;
  }
  if (inOpts.todayBtnMode !== undefined) {
    switch (inOpts.todayBtnMode) {
      case 0:
      case 1:
        config.todayBtnMode = inOpts.todayBtnMode;
    }
    delete inOpts.todayBtnMode;
  }

  //*** copy the rest ***//
  Object.keys(inOpts).forEach(function (key) {
    if (inOpts[key] !== undefined && hasProperty(defaultOptions, key)) {
      config[key] = inOpts[key];
    }
  });
  return config;
}

var pickerTemplate = optimizeTemplateHTML("<div class=\"datepicker hidden\">\n  <div class=\"datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4\">\n    <div class=\"datepicker-header\">\n      <div class=\"datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold\"></div>\n      <div class=\"datepicker-controls flex justify-between mb-2\">\n        <button type=\"button\" class=\"bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn\"></button>\n        <button type=\"button\" class=\"text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch\"></button>\n        <button type=\"button\" class=\"bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn\"></button>\n      </div>\n    </div>\n    <div class=\"datepicker-main p-1\"></div>\n    <div class=\"datepicker-footer\">\n      <div class=\"datepicker-controls flex space-x-2 rtl:space-x-reverse mt-2\">\n        <button type=\"button\" class=\"%buttonClass% today-btn text-white bg-blue-700 !bg-primary-700 dark:bg-blue-600 dark:!bg-primary-600 hover:bg-blue-800 hover:!bg-primary-800 dark:hover:bg-blue-700 dark:hover:!bg-primary-700 focus:ring-4 focus:ring-blue-300 focus:!ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2\"></button>\n        <button type=\"button\" class=\"%buttonClass% clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 focus:!ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2\"></button>\n      </div>\n    </div>\n  </div>\n</div>");

var daysTemplate = optimizeTemplateHTML("<div class=\"days\">\n  <div class=\"days-of-week grid grid-cols-7 mb-1\">".concat(createTagRepeat('span', 7, {
  "class": 'dow block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm'
}), "</div>\n  <div class=\"datepicker-grid w-64 grid grid-cols-7\">").concat(createTagRepeat('span', 42, {
  "class": 'block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400'
}), "</div>\n</div>"));

var calendarWeeksTemplate = optimizeTemplateHTML("<div class=\"calendar-weeks\">\n  <div class=\"days-of-week flex\"><span class=\"dow h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400\"></span></div>\n  <div class=\"weeks\">".concat(createTagRepeat('span', 6, {
  "class": 'week block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm'
}), "</div>\n</div>"));

// Base class of the view classes
var View = /*#__PURE__*/function () {
  function View(picker, config) {
    _classCallCheck(this, View);
    Object.assign(this, config, {
      picker: picker,
      element: parseHTML("<div class=\"datepicker-view flex\"></div>").firstChild,
      selected: []
    });
    this.init(this.picker.datepicker.config);
  }
  return _createClass(View, [{
    key: "init",
    value: function init(options) {
      if (options.pickLevel !== undefined) {
        this.isMinView = this.id === options.pickLevel;
      }
      this.setOptions(options);
      this.updateFocus();
      this.updateSelection();
    }

    // Execute beforeShow() callback and apply the result to the element
    // args:
    // - current - current value on the iteration on view rendering
    // - timeValue - time value of the date to pass to beforeShow()
  }, {
    key: "performBeforeHook",
    value: function performBeforeHook(el, current, timeValue) {
      var result = this.beforeShow(new Date(timeValue));
      switch (_typeof(result)) {
        case 'boolean':
          result = {
            enabled: result
          };
          break;
        case 'string':
          result = {
            classes: result
          };
      }
      if (result) {
        if (result.enabled === false) {
          el.classList.add('disabled');
          pushUnique(this.disabled, current);
        }
        if (result.classes) {
          var _el$classList;
          var extraClasses = result.classes.split(/\s+/);
          (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(extraClasses));
          if (extraClasses.includes('disabled')) {
            pushUnique(this.disabled, current);
          }
        }
        if (result.content) {
          replaceChildNodes(el, result.content);
        }
      }
    }
  }]);
}();

var DaysView = /*#__PURE__*/function (_View) {
  function DaysView(picker) {
    _classCallCheck(this, DaysView);
    return _callSuper(this, DaysView, [picker, {
      id: 0,
      name: 'days',
      cellClass: 'day'
    }]);
  }
  _inherits(DaysView, _View);
  return _createClass(DaysView, [{
    key: "init",
    value: function init(options) {
      var onConstruction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (onConstruction) {
        var inner = parseHTML(daysTemplate).firstChild;
        this.dow = inner.firstChild;
        this.grid = inner.lastChild;
        this.element.appendChild(inner);
      }
      _get(_getPrototypeOf(DaysView.prototype), "init", this).call(this, options);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var _this = this;
      var updateDOW;
      if (hasProperty(options, 'minDate')) {
        this.minDate = options.minDate;
      }
      if (hasProperty(options, 'maxDate')) {
        this.maxDate = options.maxDate;
      }
      if (options.datesDisabled) {
        this.datesDisabled = options.datesDisabled;
      }
      if (options.daysOfWeekDisabled) {
        this.daysOfWeekDisabled = options.daysOfWeekDisabled;
        updateDOW = true;
      }
      if (options.daysOfWeekHighlighted) {
        this.daysOfWeekHighlighted = options.daysOfWeekHighlighted;
      }
      if (options.todayHighlight !== undefined) {
        this.todayHighlight = options.todayHighlight;
      }
      if (options.weekStart !== undefined) {
        this.weekStart = options.weekStart;
        this.weekEnd = options.weekEnd;
        updateDOW = true;
      }
      if (options.locale) {
        var locale = this.locale = options.locale;
        this.dayNames = locale.daysMin;
        this.switchLabelFormat = locale.titleFormat;
        updateDOW = true;
      }
      if (options.beforeShowDay !== undefined) {
        this.beforeShow = typeof options.beforeShowDay === 'function' ? options.beforeShowDay : undefined;
      }
      if (options.calendarWeeks !== undefined) {
        if (options.calendarWeeks && !this.calendarWeeks) {
          var weeksElem = parseHTML(calendarWeeksTemplate).firstChild;
          this.calendarWeeks = {
            element: weeksElem,
            dow: weeksElem.firstChild,
            weeks: weeksElem.lastChild
          };
          this.element.insertBefore(weeksElem, this.element.firstChild);
        } else if (this.calendarWeeks && !options.calendarWeeks) {
          this.element.removeChild(this.calendarWeeks.element);
          this.calendarWeeks = null;
        }
      }
      if (options.showDaysOfWeek !== undefined) {
        if (options.showDaysOfWeek) {
          showElement(this.dow);
          if (this.calendarWeeks) {
            showElement(this.calendarWeeks.dow);
          }
        } else {
          hideElement(this.dow);
          if (this.calendarWeeks) {
            hideElement(this.calendarWeeks.dow);
          }
        }
      }

      // update days-of-week when locale, daysOfweekDisabled or weekStart is changed
      if (updateDOW) {
        Array.from(this.dow.children).forEach(function (el, index) {
          var dow = (_this.weekStart + index) % 7;
          el.textContent = _this.dayNames[dow];
          el.className = _this.daysOfWeekDisabled.includes(dow) ? 'dow disabled text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400';
        });
      }
    }

    // Apply update on the focused date to view's settings
  }, {
    key: "updateFocus",
    value: function updateFocus() {
      var viewDate = new Date(this.picker.viewDate);
      var viewYear = viewDate.getFullYear();
      var viewMonth = viewDate.getMonth();
      var firstOfMonth = dateValue(viewYear, viewMonth, 1);
      var start = dayOfTheWeekOf(firstOfMonth, this.weekStart, this.weekStart);
      this.first = firstOfMonth;
      this.last = dateValue(viewYear, viewMonth + 1, 0);
      this.start = start;
      this.focused = this.picker.viewDate;
    }

    // Apply update on the selected dates to view's settings
  }, {
    key: "updateSelection",
    value: function updateSelection() {
      var _this$picker$datepick = this.picker.datepicker,
        dates = _this$picker$datepick.dates,
        rangepicker = _this$picker$datepick.rangepicker;
      this.selected = dates;
      if (rangepicker) {
        this.range = rangepicker.dates;
      }
    }

    // Update the entire view UI
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      // update today marker on ever render
      this.today = this.todayHighlight ? today() : undefined;
      // refresh disabled dates on every render in order to clear the ones added
      // by beforeShow hook at previous render
      this.disabled = _toConsumableArray(this.datesDisabled);
      var switchLabel = formatDate(this.focused, this.switchLabelFormat, this.locale);
      this.picker.setViewSwitchLabel(switchLabel);
      this.picker.setPrevBtnDisabled(this.first <= this.minDate);
      this.picker.setNextBtnDisabled(this.last >= this.maxDate);
      if (this.calendarWeeks) {
        // start of the UTC week (Monday) of the 1st of the month
        var startOfWeek = dayOfTheWeekOf(this.first, 1, 1);
        Array.from(this.calendarWeeks.weeks.children).forEach(function (el, index) {
          el.textContent = getWeek(addWeeks(startOfWeek, index));
        });
      }
      Array.from(this.grid.children).forEach(function (el, index) {
        var classList = el.classList;
        var current = addDays(_this2.start, index);
        var date = new Date(current);
        var day = date.getDay();
        el.className = "datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ".concat(_this2.cellClass);
        el.dataset.date = current;
        el.textContent = date.getDate();
        if (current < _this2.first) {
          classList.add('prev', 'text-gray-500', 'dark:text-white');
        } else if (current > _this2.last) {
          classList.add('next', 'text-gray-500', 'dark:text-white');
        }
        if (_this2.today === current) {
          classList.add('today', 'bg-gray-100', 'dark:bg-gray-600');
        }
        if (current < _this2.minDate || current > _this2.maxDate || _this2.disabled.includes(current)) {
          classList.add('disabled', 'cursor-not-allowed', 'text-gray-400', 'dark:text-gray-500');
          classList.remove('hover:bg-gray-100', 'dark:hover:bg-gray-600', 'text-gray-900', 'dark:text-white', 'cursor-pointer');
        }
        if (_this2.daysOfWeekDisabled.includes(day)) {
          classList.add('disabled', 'cursor-not-allowed', 'text-gray-400', 'dark:text-gray-500');
          classList.remove('hover:bg-gray-100', 'dark:hover:bg-gray-600', 'text-gray-900', 'dark:text-white', 'cursor-pointer');
          pushUnique(_this2.disabled, current);
        }
        if (_this2.daysOfWeekHighlighted.includes(day)) {
          classList.add('highlighted');
        }
        if (_this2.range) {
          var _this2$range = _slicedToArray(_this2.range, 2),
            rangeStart = _this2$range[0],
            rangeEnd = _this2$range[1];
          if (current > rangeStart && current < rangeEnd) {
            classList.add('range', 'bg-gray-200', 'dark:bg-gray-600');
            classList.remove('rounded-lg', 'rounded-l-lg', 'rounded-r-lg');
          }
          if (current === rangeStart) {
            classList.add('range-start', 'bg-gray-100', 'dark:bg-gray-600', 'rounded-l-lg');
            classList.remove('rounded-lg', 'rounded-r-lg');
          }
          if (current === rangeEnd) {
            classList.add('range-end', 'bg-gray-100', 'dark:bg-gray-600', 'rounded-r-lg');
            classList.remove('rounded-lg', 'rounded-l-lg');
          }
        }
        if (_this2.selected.includes(current)) {
          classList.add('selected', 'bg-blue-700', '!bg-primary-700', 'text-white', 'dark:bg-blue-600', 'dark:!bg-primary-600', 'dark:text-white');
          classList.remove('text-gray-900', 'text-gray-500', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-600', 'dark:bg-gray-600', 'bg-gray-100', 'bg-gray-200');
        }
        if (current === _this2.focused) {
          classList.add('focused');
        }
        if (_this2.beforeShow) {
          _this2.performBeforeHook(el, current, current);
        }
      });
    }

    // Update the view UI by applying the changes of selected and focused items
  }, {
    key: "refresh",
    value: function refresh() {
      var _this3 = this;
      var _ref = this.range || [],
        _ref2 = _slicedToArray(_ref, 2),
        rangeStart = _ref2[0],
        rangeEnd = _ref2[1];
      this.grid.querySelectorAll('.range, .range-start, .range-end, .selected, .focused').forEach(function (el) {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'bg-blue-700', '!bg-primary-700', 'text-white', 'dark:bg-blue-600', 'dark:!bg-primary-600', 'dark:text-white', 'focused');
        el.classList.add('text-gray-900', 'rounded-lg', 'dark:text-white');
      });
      Array.from(this.grid.children).forEach(function (el) {
        var current = Number(el.dataset.date);
        var classList = el.classList;
        classList.remove('bg-gray-200', 'dark:bg-gray-600', 'rounded-l-lg', 'rounded-r-lg');
        if (current > rangeStart && current < rangeEnd) {
          classList.add('range', 'bg-gray-200', 'dark:bg-gray-600');
          classList.remove('rounded-lg');
        }
        if (current === rangeStart) {
          classList.add('range-start', 'bg-gray-200', 'dark:bg-gray-600', 'rounded-l-lg');
          classList.remove('rounded-lg');
        }
        if (current === rangeEnd) {
          classList.add('range-end', 'bg-gray-200', 'dark:bg-gray-600', 'rounded-r-lg');
          classList.remove('rounded-lg');
        }
        if (_this3.selected.includes(current)) {
          classList.add('selected', 'bg-blue-700', '!bg-primary-700', 'text-white', 'dark:bg-blue-600', 'dark:!bg-primary-600', 'dark:text-white');
          classList.remove('text-gray-900', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-600', 'bg-gray-100', 'bg-gray-200', 'dark:bg-gray-600');
        }
        if (current === _this3.focused) {
          classList.add('focused');
        }
      });
    }

    // Update the view UI by applying the change of focused item
  }, {
    key: "refreshFocus",
    value: function refreshFocus() {
      var index = Math.round((this.focused - this.start) / 86400000);
      this.grid.querySelectorAll('.focused').forEach(function (el) {
        el.classList.remove('focused');
      });
      this.grid.children[index].classList.add('focused');
    }
  }]);
}(View);

function computeMonthRange(range, thisYear) {
  if (!range || !range[0] || !range[1]) {
    return;
  }
  var _range = _slicedToArray(range, 2),
    _range$ = _slicedToArray(_range[0], 2),
    startY = _range$[0],
    startM = _range$[1],
    _range$2 = _slicedToArray(_range[1], 2),
    endY = _range$2[0],
    endM = _range$2[1];
  if (startY > thisYear || endY < thisYear) {
    return;
  }
  return [startY === thisYear ? startM : -1, endY === thisYear ? endM : 12];
}
var MonthsView = /*#__PURE__*/function (_View) {
  function MonthsView(picker) {
    _classCallCheck(this, MonthsView);
    return _callSuper(this, MonthsView, [picker, {
      id: 1,
      name: 'months',
      cellClass: 'month'
    }]);
  }
  _inherits(MonthsView, _View);
  return _createClass(MonthsView, [{
    key: "init",
    value: function init(options) {
      var onConstruction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (onConstruction) {
        this.grid = this.element;
        this.element.classList.add('months', 'datepicker-grid', 'w-64', 'grid', 'grid-cols-4');
        this.grid.appendChild(parseHTML(createTagRepeat('span', 12, {
          'data-month': function dataMonth(ix) {
            return ix;
          }
        })));
      }
      _get(_getPrototypeOf(MonthsView.prototype), "init", this).call(this, options);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (options.locale) {
        this.monthNames = options.locale.monthsShort;
      }
      if (hasProperty(options, 'minDate')) {
        if (options.minDate === undefined) {
          this.minYear = this.minMonth = this.minDate = undefined;
        } else {
          var minDateObj = new Date(options.minDate);
          this.minYear = minDateObj.getFullYear();
          this.minMonth = minDateObj.getMonth();
          this.minDate = minDateObj.setDate(1);
        }
      }
      if (hasProperty(options, 'maxDate')) {
        if (options.maxDate === undefined) {
          this.maxYear = this.maxMonth = this.maxDate = undefined;
        } else {
          var maxDateObj = new Date(options.maxDate);
          this.maxYear = maxDateObj.getFullYear();
          this.maxMonth = maxDateObj.getMonth();
          this.maxDate = dateValue(this.maxYear, this.maxMonth + 1, 0);
        }
      }
      if (options.beforeShowMonth !== undefined) {
        this.beforeShow = typeof options.beforeShowMonth === 'function' ? options.beforeShowMonth : undefined;
      }
    }

    // Update view's settings to reflect the viewDate set on the picker
  }, {
    key: "updateFocus",
    value: function updateFocus() {
      var viewDate = new Date(this.picker.viewDate);
      this.year = viewDate.getFullYear();
      this.focused = viewDate.getMonth();
    }

    // Update view's settings to reflect the selected dates
  }, {
    key: "updateSelection",
    value: function updateSelection() {
      var _this$picker$datepick = this.picker.datepicker,
        dates = _this$picker$datepick.dates,
        rangepicker = _this$picker$datepick.rangepicker;
      this.selected = dates.reduce(function (selected, timeValue) {
        var date = new Date(timeValue);
        var year = date.getFullYear();
        var month = date.getMonth();
        if (selected[year] === undefined) {
          selected[year] = [month];
        } else {
          pushUnique(selected[year], month);
        }
        return selected;
      }, {});
      if (rangepicker && rangepicker.dates) {
        this.range = rangepicker.dates.map(function (timeValue) {
          var date = new Date(timeValue);
          return isNaN(date) ? undefined : [date.getFullYear(), date.getMonth()];
        });
      }
    }

    // Update the entire view UI
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      // refresh disabled months on every render in order to clear the ones added
      // by beforeShow hook at previous render
      this.disabled = [];
      this.picker.setViewSwitchLabel(this.year);
      this.picker.setPrevBtnDisabled(this.year <= this.minYear);
      this.picker.setNextBtnDisabled(this.year >= this.maxYear);
      var selected = this.selected[this.year] || [];
      var yrOutOfRange = this.year < this.minYear || this.year > this.maxYear;
      var isMinYear = this.year === this.minYear;
      var isMaxYear = this.year === this.maxYear;
      var range = computeMonthRange(this.range, this.year);
      Array.from(this.grid.children).forEach(function (el, index) {
        var classList = el.classList;
        var date = dateValue(_this.year, index, 1);
        el.className = "datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ".concat(_this.cellClass);
        if (_this.isMinView) {
          el.dataset.date = date;
        }
        // reset text on every render to clear the custom content set
        // by beforeShow hook at previous render
        el.textContent = _this.monthNames[index];
        if (yrOutOfRange || isMinYear && index < _this.minMonth || isMaxYear && index > _this.maxMonth) {
          classList.add('disabled');
        }
        if (range) {
          var _range2 = _slicedToArray(range, 2),
            rangeStart = _range2[0],
            rangeEnd = _range2[1];
          if (index > rangeStart && index < rangeEnd) {
            classList.add('range');
          }
          if (index === rangeStart) {
            classList.add('range-start');
          }
          if (index === rangeEnd) {
            classList.add('range-end');
          }
        }
        if (selected.includes(index)) {
          classList.add('selected', 'bg-blue-700', '!bg-primary-700', 'text-white', 'dark:bg-blue-600', 'dark:!bg-primary-600', 'dark:text-white');
          classList.remove('text-gray-900', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-600');
        }
        if (index === _this.focused) {
          classList.add('focused');
        }
        if (_this.beforeShow) {
          _this.performBeforeHook(el, index, date);
        }
      });
    }

    // Update the view UI by applying the changes of selected and focused items
  }, {
    key: "refresh",
    value: function refresh() {
      var _this2 = this;
      var selected = this.selected[this.year] || [];
      var _ref = computeMonthRange(this.range, this.year) || [],
        _ref2 = _slicedToArray(_ref, 2),
        rangeStart = _ref2[0],
        rangeEnd = _ref2[1];
      this.grid.querySelectorAll('.range, .range-start, .range-end, .selected, .focused').forEach(function (el) {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'bg-blue-700', '!bg-primary-700', 'dark:bg-blue-600', 'dark:!bg-primary-700', 'dark:text-white', 'text-white', 'focused');
        el.classList.add('text-gray-900', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-600');
      });
      Array.from(this.grid.children).forEach(function (el, index) {
        var classList = el.classList;
        if (index > rangeStart && index < rangeEnd) {
          classList.add('range');
        }
        if (index === rangeStart) {
          classList.add('range-start');
        }
        if (index === rangeEnd) {
          classList.add('range-end');
        }
        if (selected.includes(index)) {
          classList.add('selected', 'bg-blue-700', '!bg-primary-700', 'text-white', 'dark:bg-blue-600', 'dark:!bg-primary-600', 'dark:text-white');
          classList.remove('text-gray-900', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-600');
        }
        if (index === _this2.focused) {
          classList.add('focused');
        }
      });
    }

    // Update the view UI by applying the change of focused item
  }, {
    key: "refreshFocus",
    value: function refreshFocus() {
      this.grid.querySelectorAll('.focused').forEach(function (el) {
        el.classList.remove('focused');
      });
      this.grid.children[this.focused].classList.add('focused');
    }
  }]);
}(View);

function toTitleCase(word) {
  return _toConsumableArray(word).reduce(function (str, ch, ix) {
    return str += ix ? ch : ch.toUpperCase();
  }, '');
}

// Class representing the years and decades view elements
var YearsView = /*#__PURE__*/function (_View) {
  function YearsView(picker, config) {
    _classCallCheck(this, YearsView);
    return _callSuper(this, YearsView, [picker, config]);
  }
  _inherits(YearsView, _View);
  return _createClass(YearsView, [{
    key: "init",
    value: function init(options) {
      var onConstruction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (onConstruction) {
        this.navStep = this.step * 10;
        this.beforeShowOption = "beforeShow".concat(toTitleCase(this.cellClass));
        this.grid = this.element;
        this.element.classList.add(this.name, 'datepicker-grid', 'w-64', 'grid', 'grid-cols-4');
        this.grid.appendChild(parseHTML(createTagRepeat('span', 12)));
      }
      _get(_getPrototypeOf(YearsView.prototype), "init", this).call(this, options);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (hasProperty(options, 'minDate')) {
        if (options.minDate === undefined) {
          this.minYear = this.minDate = undefined;
        } else {
          this.minYear = startOfYearPeriod(options.minDate, this.step);
          this.minDate = dateValue(this.minYear, 0, 1);
        }
      }
      if (hasProperty(options, 'maxDate')) {
        if (options.maxDate === undefined) {
          this.maxYear = this.maxDate = undefined;
        } else {
          this.maxYear = startOfYearPeriod(options.maxDate, this.step);
          this.maxDate = dateValue(this.maxYear, 11, 31);
        }
      }
      if (options[this.beforeShowOption] !== undefined) {
        var beforeShow = options[this.beforeShowOption];
        this.beforeShow = typeof beforeShow === 'function' ? beforeShow : undefined;
      }
    }

    // Update view's settings to reflect the viewDate set on the picker
  }, {
    key: "updateFocus",
    value: function updateFocus() {
      var viewDate = new Date(this.picker.viewDate);
      var first = startOfYearPeriod(viewDate, this.navStep);
      var last = first + 9 * this.step;
      this.first = first;
      this.last = last;
      this.start = first - this.step;
      this.focused = startOfYearPeriod(viewDate, this.step);
    }

    // Update view's settings to reflect the selected dates
  }, {
    key: "updateSelection",
    value: function updateSelection() {
      var _this = this;
      var _this$picker$datepick = this.picker.datepicker,
        dates = _this$picker$datepick.dates,
        rangepicker = _this$picker$datepick.rangepicker;
      this.selected = dates.reduce(function (years, timeValue) {
        return pushUnique(years, startOfYearPeriod(timeValue, _this.step));
      }, []);
      if (rangepicker && rangepicker.dates) {
        this.range = rangepicker.dates.map(function (timeValue) {
          if (timeValue !== undefined) {
            return startOfYearPeriod(timeValue, _this.step);
          }
        });
      }
    }

    // Update the entire view UI
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      // refresh disabled years on every render in order to clear the ones added
      // by beforeShow hook at previous render
      this.disabled = [];
      this.picker.setViewSwitchLabel("".concat(this.first, "-").concat(this.last));
      this.picker.setPrevBtnDisabled(this.first <= this.minYear);
      this.picker.setNextBtnDisabled(this.last >= this.maxYear);
      Array.from(this.grid.children).forEach(function (el, index) {
        var classList = el.classList;
        var current = _this2.start + index * _this2.step;
        var date = dateValue(current, 0, 1);
        el.className = "datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ".concat(_this2.cellClass);
        if (_this2.isMinView) {
          el.dataset.date = date;
        }
        el.textContent = el.dataset.year = current;
        if (index === 0) {
          classList.add('prev');
        } else if (index === 11) {
          classList.add('next');
        }
        if (current < _this2.minYear || current > _this2.maxYear) {
          classList.add('disabled');
        }
        if (_this2.range) {
          var _this2$range = _slicedToArray(_this2.range, 2),
            rangeStart = _this2$range[0],
            rangeEnd = _this2$range[1];
          if (current > rangeStart && current < rangeEnd) {
            classList.add('range');
          }
          if (current === rangeStart) {
            classList.add('range-start');
          }
          if (current === rangeEnd) {
            classList.add('range-end');
          }
        }
        if (_this2.selected.includes(current)) {
          classList.add('selected', 'bg-blue-700', '!bg-primary-700', 'text-white', 'dark:bg-blue-600', 'dark:!bg-primary-600', 'dark:text-white');
          classList.remove('text-gray-900', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-600');
        }
        if (current === _this2.focused) {
          classList.add('focused');
        }
        if (_this2.beforeShow) {
          _this2.performBeforeHook(el, current, date);
        }
      });
    }

    // Update the view UI by applying the changes of selected and focused items
  }, {
    key: "refresh",
    value: function refresh() {
      var _this3 = this;
      var _ref = this.range || [],
        _ref2 = _slicedToArray(_ref, 2),
        rangeStart = _ref2[0],
        rangeEnd = _ref2[1];
      this.grid.querySelectorAll('.range, .range-start, .range-end, .selected, .focused').forEach(function (el) {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'bg-blue-700', '!bg-primary-700', 'text-white', 'dark:bg-blue-600', 'dark!bg-primary-600', 'dark:text-white', 'focused');
      });
      Array.from(this.grid.children).forEach(function (el) {
        var current = Number(el.textContent);
        var classList = el.classList;
        if (current > rangeStart && current < rangeEnd) {
          classList.add('range');
        }
        if (current === rangeStart) {
          classList.add('range-start');
        }
        if (current === rangeEnd) {
          classList.add('range-end');
        }
        if (_this3.selected.includes(current)) {
          classList.add('selected', 'bg-blue-700', '!bg-primary-700', 'text-white', 'dark:bg-blue-600', 'dark:!bg-primary-600', 'dark:text-white');
          classList.remove('text-gray-900', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-600');
        }
        if (current === _this3.focused) {
          classList.add('focused');
        }
      });
    }

    // Update the view UI by applying the change of focused item
  }, {
    key: "refreshFocus",
    value: function refreshFocus() {
      var index = Math.round((this.focused - this.start) / this.step);
      this.grid.querySelectorAll('.focused').forEach(function (el) {
        el.classList.remove('focused');
      });
      this.grid.children[index].classList.add('focused');
    }
  }]);
}(View);

function triggerDatepickerEvent(datepicker, type) {
  var detail = {
    date: datepicker.getDate(),
    viewDate: new Date(datepicker.picker.viewDate),
    viewId: datepicker.picker.currentView.id,
    datepicker: datepicker
  };
  datepicker.element.dispatchEvent(new CustomEvent(type, {
    detail: detail
  }));
}

// direction: -1 (to previous), 1 (to next)
function goToPrevOrNext(datepicker, direction) {
  var _datepicker$config = datepicker.config,
    minDate = _datepicker$config.minDate,
    maxDate = _datepicker$config.maxDate;
  var _datepicker$picker = datepicker.picker,
    currentView = _datepicker$picker.currentView,
    viewDate = _datepicker$picker.viewDate;
  var newViewDate;
  switch (currentView.id) {
    case 0:
      newViewDate = addMonths(viewDate, direction);
      break;
    case 1:
      newViewDate = addYears(viewDate, direction);
      break;
    default:
      newViewDate = addYears(viewDate, direction * currentView.navStep);
  }
  newViewDate = limitToRange(newViewDate, minDate, maxDate);
  datepicker.picker.changeFocus(newViewDate).render();
}
function switchView(datepicker) {
  var viewId = datepicker.picker.currentView.id;
  if (viewId === datepicker.config.maxView) {
    return;
  }
  datepicker.picker.changeView(viewId + 1).render();
}
function unfocus(datepicker) {
  if (datepicker.config.updateOnBlur) {
    datepicker.update({
      autohide: true
    });
  } else {
    datepicker.refresh('input');
    datepicker.hide();
  }
}

function goToSelectedMonthOrYear(datepicker, selection) {
  var picker = datepicker.picker;
  var viewDate = new Date(picker.viewDate);
  var viewId = picker.currentView.id;
  var newDate = viewId === 1 ? addMonths(viewDate, selection - viewDate.getMonth()) : addYears(viewDate, selection - viewDate.getFullYear());
  picker.changeFocus(newDate).changeView(viewId - 1).render();
}
function onClickTodayBtn(datepicker) {
  var picker = datepicker.picker;
  var currentDate = today();
  if (datepicker.config.todayBtnMode === 1) {
    if (datepicker.config.autohide) {
      datepicker.setDate(currentDate);
      return;
    }
    datepicker.setDate(currentDate, {
      render: false
    });
    picker.update();
  }
  if (picker.viewDate !== currentDate) {
    picker.changeFocus(currentDate);
  }
  picker.changeView(0).render();
}
function onClickClearBtn(datepicker) {
  datepicker.setDate({
    clear: true
  });
}
function onClickViewSwitch(datepicker) {
  switchView(datepicker);
}
function onClickPrevBtn(datepicker) {
  goToPrevOrNext(datepicker, -1);
}
function onClickNextBtn(datepicker) {
  goToPrevOrNext(datepicker, 1);
}

// For the picker's main block to delegete the events from `datepicker-cell`s
function onClickView(datepicker, ev) {
  var target = findElementInEventPath(ev, '.datepicker-cell');
  if (!target || target.classList.contains('disabled')) {
    return;
  }
  var _datepicker$picker$cu = datepicker.picker.currentView,
    id = _datepicker$picker$cu.id,
    isMinView = _datepicker$picker$cu.isMinView;
  if (isMinView) {
    datepicker.setDate(Number(target.dataset.date));
  } else if (id === 1) {
    goToSelectedMonthOrYear(datepicker, Number(target.dataset.month));
  } else {
    goToSelectedMonthOrYear(datepicker, Number(target.dataset.year));
  }
}
function onClickPicker(datepicker) {
  if (!datepicker.inline && !datepicker.config.disableTouchKeyboard) {
    datepicker.inputField.focus();
  }
}

function processPickerOptions(picker, options) {
  if (options.title !== undefined) {
    if (options.title) {
      picker.controls.title.textContent = options.title;
      showElement(picker.controls.title);
    } else {
      picker.controls.title.textContent = '';
      hideElement(picker.controls.title);
    }
  }
  if (options.prevArrow) {
    var prevBtn = picker.controls.prevBtn;
    emptyChildNodes(prevBtn);
    options.prevArrow.forEach(function (node) {
      prevBtn.appendChild(node.cloneNode(true));
    });
  }
  if (options.nextArrow) {
    var nextBtn = picker.controls.nextBtn;
    emptyChildNodes(nextBtn);
    options.nextArrow.forEach(function (node) {
      nextBtn.appendChild(node.cloneNode(true));
    });
  }
  if (options.locale) {
    picker.controls.todayBtn.textContent = options.locale.today;
    picker.controls.clearBtn.textContent = options.locale.clear;
  }
  if (options.todayBtn !== undefined) {
    if (options.todayBtn) {
      showElement(picker.controls.todayBtn);
    } else {
      hideElement(picker.controls.todayBtn);
    }
  }
  if (hasProperty(options, 'minDate') || hasProperty(options, 'maxDate')) {
    var _picker$datepicker$co = picker.datepicker.config,
      minDate = _picker$datepicker$co.minDate,
      maxDate = _picker$datepicker$co.maxDate;
    picker.controls.todayBtn.disabled = !isInRange(today(), minDate, maxDate);
  }
  if (options.clearBtn !== undefined) {
    if (options.clearBtn) {
      showElement(picker.controls.clearBtn);
    } else {
      hideElement(picker.controls.clearBtn);
    }
  }
}

// Compute view date to reset, which will be...
// - the last item of the selected dates or defaultViewDate if no selection
// - limitted to minDate or maxDate if it exceeds the range
function computeResetViewDate(datepicker) {
  var dates = datepicker.dates,
    config = datepicker.config;
  var viewDate = dates.length > 0 ? lastItemOf(dates) : config.defaultViewDate;
  return limitToRange(viewDate, config.minDate, config.maxDate);
}

// Change current view's view date
function setViewDate(picker, newDate) {
  var oldViewDate = new Date(picker.viewDate);
  var newViewDate = new Date(newDate);
  var _picker$currentView = picker.currentView,
    id = _picker$currentView.id,
    year = _picker$currentView.year,
    first = _picker$currentView.first,
    last = _picker$currentView.last;
  var viewYear = newViewDate.getFullYear();
  picker.viewDate = newDate;
  if (viewYear !== oldViewDate.getFullYear()) {
    triggerDatepickerEvent(picker.datepicker, 'changeYear');
  }
  if (newViewDate.getMonth() !== oldViewDate.getMonth()) {
    triggerDatepickerEvent(picker.datepicker, 'changeMonth');
  }

  // return whether the new date is in different period on time from the one
  // displayed in the current view
  // when true, the view needs to be re-rendered on the next UI refresh.
  switch (id) {
    case 0:
      return newDate < first || newDate > last;
    case 1:
      return viewYear !== year;
    default:
      return viewYear < first || viewYear > last;
  }
}
function getTextDirection(el) {
  return window.getComputedStyle(el).direction;
}

// Class representing the picker UI
var Picker = /*#__PURE__*/function () {
  function Picker(datepicker) {
    _classCallCheck(this, Picker);
    this.datepicker = datepicker;
    var template = pickerTemplate.replace(/%buttonClass%/g, datepicker.config.buttonClass);
    var element = this.element = parseHTML(template).firstChild;
    var _element$firstChild$c = _slicedToArray(element.firstChild.children, 3),
      header = _element$firstChild$c[0],
      main = _element$firstChild$c[1],
      footer = _element$firstChild$c[2];
    var title = header.firstElementChild;
    var _header$lastElementCh = _slicedToArray(header.lastElementChild.children, 3),
      prevBtn = _header$lastElementCh[0],
      viewSwitch = _header$lastElementCh[1],
      nextBtn = _header$lastElementCh[2];
    var _footer$firstChild$ch = _slicedToArray(footer.firstChild.children, 2),
      todayBtn = _footer$firstChild$ch[0],
      clearBtn = _footer$firstChild$ch[1];
    var controls = {
      title: title,
      prevBtn: prevBtn,
      viewSwitch: viewSwitch,
      nextBtn: nextBtn,
      todayBtn: todayBtn,
      clearBtn: clearBtn
    };
    this.main = main;
    this.controls = controls;
    var elementClass = datepicker.inline ? 'inline' : 'dropdown';
    element.classList.add("datepicker-".concat(elementClass));
    elementClass === 'dropdown' ? element.classList.add('dropdown', 'absolute', 'top-0', 'left-0', 'z-50', 'pt-2') : null;
    processPickerOptions(this, datepicker.config);
    this.viewDate = computeResetViewDate(datepicker);

    // set up event listeners
    registerListeners(datepicker, [[element, 'click', onClickPicker.bind(null, datepicker), {
      capture: true
    }], [main, 'click', onClickView.bind(null, datepicker)], [controls.viewSwitch, 'click', onClickViewSwitch.bind(null, datepicker)], [controls.prevBtn, 'click', onClickPrevBtn.bind(null, datepicker)], [controls.nextBtn, 'click', onClickNextBtn.bind(null, datepicker)], [controls.todayBtn, 'click', onClickTodayBtn.bind(null, datepicker)], [controls.clearBtn, 'click', onClickClearBtn.bind(null, datepicker)]]);

    // set up views
    this.views = [new DaysView(this), new MonthsView(this), new YearsView(this, {
      id: 2,
      name: 'years',
      cellClass: 'year',
      step: 1
    }), new YearsView(this, {
      id: 3,
      name: 'decades',
      cellClass: 'decade',
      step: 10
    })];
    this.currentView = this.views[datepicker.config.startView];
    this.currentView.render();
    this.main.appendChild(this.currentView.element);
    datepicker.config.container.appendChild(this.element);
  }
  return _createClass(Picker, [{
    key: "setOptions",
    value: function setOptions(options) {
      processPickerOptions(this, options);
      this.views.forEach(function (view) {
        view.init(options, false);
      });
      this.currentView.render();
    }
  }, {
    key: "detach",
    value: function detach() {
      this.datepicker.config.container.removeChild(this.element);
    }
  }, {
    key: "show",
    value: function show() {
      if (this.active) {
        return;
      }
      this.element.classList.add('active', 'block');
      this.element.classList.remove('hidden');
      this.active = true;
      var datepicker = this.datepicker;
      if (!datepicker.inline) {
        // ensure picker's direction matches input's
        var inputDirection = getTextDirection(datepicker.inputField);
        if (inputDirection !== getTextDirection(datepicker.config.container)) {
          this.element.dir = inputDirection;
        } else if (this.element.dir) {
          this.element.removeAttribute('dir');
        }
        this.place();
        if (datepicker.config.disableTouchKeyboard) {
          datepicker.inputField.blur();
        }
      }
      triggerDatepickerEvent(datepicker, 'show');
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!this.active) {
        return;
      }
      this.datepicker.exitEditMode();
      this.element.classList.remove('active', 'block');
      this.element.classList.add('active', 'block', 'hidden');
      this.active = false;
      triggerDatepickerEvent(this.datepicker, 'hide');
    }
  }, {
    key: "place",
    value: function place() {
      var _this$element = this.element,
        classList = _this$element.classList,
        style = _this$element.style;
      var _this$datepicker = this.datepicker,
        config = _this$datepicker.config,
        inputField = _this$datepicker.inputField;
      var container = config.container;
      var _this$element$getBoun = this.element.getBoundingClientRect(),
        calendarWidth = _this$element$getBoun.width,
        calendarHeight = _this$element$getBoun.height;
      var _container$getBoundin = container.getBoundingClientRect(),
        containerLeft = _container$getBoundin.left,
        containerTop = _container$getBoundin.top,
        containerWidth = _container$getBoundin.width;
      var _inputField$getBoundi = inputField.getBoundingClientRect(),
        inputLeft = _inputField$getBoundi.left,
        inputTop = _inputField$getBoundi.top,
        inputWidth = _inputField$getBoundi.width,
        inputHeight = _inputField$getBoundi.height;
      var _config$orientation = config.orientation,
        orientX = _config$orientation.x,
        orientY = _config$orientation.y;
      var scrollTop;
      var left;
      var top;
      if (container === document.body) {
        scrollTop = window.scrollY;
        left = inputLeft + window.scrollX;
        top = inputTop + scrollTop;
      } else {
        scrollTop = container.scrollTop;
        left = inputLeft - containerLeft;
        top = inputTop - containerTop + scrollTop;
      }
      if (orientX === 'auto') {
        if (left < 0) {
          // align to the left and move into visible area if input's left edge < window's
          orientX = 'left';
          left = 10;
        } else if (left + calendarWidth > containerWidth) {
          // align to the right if canlendar's right edge > container's
          orientX = 'right';
        } else {
          orientX = getTextDirection(inputField) === 'rtl' ? 'right' : 'left';
        }
      }
      if (orientX === 'right') {
        left -= calendarWidth - inputWidth;
      }
      if (orientY === 'auto') {
        orientY = top - calendarHeight < scrollTop ? 'bottom' : 'top';
      }
      if (orientY === 'top') {
        top -= calendarHeight;
      } else {
        top += inputHeight;
      }
      classList.remove('datepicker-orient-top', 'datepicker-orient-bottom', 'datepicker-orient-right', 'datepicker-orient-left');
      classList.add("datepicker-orient-".concat(orientY), "datepicker-orient-".concat(orientX));
      style.top = top ? "".concat(top, "px") : top;
      style.left = left ? "".concat(left, "px") : left;
    }
  }, {
    key: "setViewSwitchLabel",
    value: function setViewSwitchLabel(labelText) {
      this.controls.viewSwitch.textContent = labelText;
    }
  }, {
    key: "setPrevBtnDisabled",
    value: function setPrevBtnDisabled(disabled) {
      this.controls.prevBtn.disabled = disabled;
    }
  }, {
    key: "setNextBtnDisabled",
    value: function setNextBtnDisabled(disabled) {
      this.controls.nextBtn.disabled = disabled;
    }
  }, {
    key: "changeView",
    value: function changeView(viewId) {
      var oldView = this.currentView;
      var newView = this.views[viewId];
      if (newView.id !== oldView.id) {
        this.currentView = newView;
        this._renderMethod = 'render';
        triggerDatepickerEvent(this.datepicker, 'changeView');
        this.main.replaceChild(newView.element, oldView.element);
      }
      return this;
    }

    // Change the focused date (view date)
  }, {
    key: "changeFocus",
    value: function changeFocus(newViewDate) {
      this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refreshFocus';
      this.views.forEach(function (view) {
        view.updateFocus();
      });
      return this;
    }

    // Apply the change of the selected dates
  }, {
    key: "update",
    value: function update() {
      var newViewDate = computeResetViewDate(this.datepicker);
      this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refresh';
      this.views.forEach(function (view) {
        view.updateFocus();
        view.updateSelection();
      });
      return this;
    }

    // Refresh the picker UI
  }, {
    key: "render",
    value: function render() {
      var quickRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var renderMethod = quickRender && this._renderMethod || 'render';
      delete this._renderMethod;
      this.currentView[renderMethod]();
    }
  }]);
}();

// Find the closest date that doesn't meet the condition for unavailable date
// Returns undefined if no available date is found
// addFn: function to calculate the next date
//   - args: time value, amount
// increase: amount to pass to addFn
// testFn: function to test the unavailablity of the date
//   - args: time value; retun: true if unavailable
function findNextAvailableOne(date, addFn, increase, testFn, min, max) {
  if (!isInRange(date, min, max)) {
    return;
  }
  if (testFn(date)) {
    var newDate = addFn(date, increase);
    return findNextAvailableOne(newDate, addFn, increase, testFn, min, max);
  }
  return date;
}

// direction: -1 (left/up), 1 (right/down)
// vertical: true for up/down, false for left/right
function moveByArrowKey(datepicker, ev, direction, vertical) {
  var picker = datepicker.picker;
  var currentView = picker.currentView;
  var step = currentView.step || 1;
  var viewDate = picker.viewDate;
  var addFn;
  var testFn;
  switch (currentView.id) {
    case 0:
      if (vertical) {
        viewDate = addDays(viewDate, direction * 7);
      } else if (ev.ctrlKey || ev.metaKey) {
        viewDate = addYears(viewDate, direction);
      } else {
        viewDate = addDays(viewDate, direction);
      }
      addFn = addDays;
      testFn = function testFn(date) {
        return currentView.disabled.includes(date);
      };
      break;
    case 1:
      viewDate = addMonths(viewDate, vertical ? direction * 4 : direction);
      addFn = addMonths;
      testFn = function testFn(date) {
        var dt = new Date(date);
        var year = currentView.year,
          disabled = currentView.disabled;
        return dt.getFullYear() === year && disabled.includes(dt.getMonth());
      };
      break;
    default:
      viewDate = addYears(viewDate, direction * (vertical ? 4 : 1) * step);
      addFn = addYears;
      testFn = function testFn(date) {
        return currentView.disabled.includes(startOfYearPeriod(date, step));
      };
  }
  viewDate = findNextAvailableOne(viewDate, addFn, direction < 0 ? -step : step, testFn, currentView.minDate, currentView.maxDate);
  if (viewDate !== undefined) {
    picker.changeFocus(viewDate).render();
  }
}
function onKeydown(datepicker, ev) {
  if (ev.key === 'Tab') {
    unfocus(datepicker);
    return;
  }
  var picker = datepicker.picker;
  var _picker$currentView = picker.currentView,
    id = _picker$currentView.id,
    isMinView = _picker$currentView.isMinView;
  if (!picker.active) {
    switch (ev.key) {
      case 'ArrowDown':
      case 'Escape':
        picker.show();
        break;
      case 'Enter':
        datepicker.update();
        break;
      default:
        return;
    }
  } else if (datepicker.editMode) {
    switch (ev.key) {
      case 'Escape':
        picker.hide();
        break;
      case 'Enter':
        datepicker.exitEditMode({
          update: true,
          autohide: datepicker.config.autohide
        });
        break;
      default:
        return;
    }
  } else {
    switch (ev.key) {
      case 'Escape':
        picker.hide();
        break;
      case 'ArrowLeft':
        if (ev.ctrlKey || ev.metaKey) {
          goToPrevOrNext(datepicker, -1);
        } else if (ev.shiftKey) {
          datepicker.enterEditMode();
          return;
        } else {
          moveByArrowKey(datepicker, ev, -1, false);
        }
        break;
      case 'ArrowRight':
        if (ev.ctrlKey || ev.metaKey) {
          goToPrevOrNext(datepicker, 1);
        } else if (ev.shiftKey) {
          datepicker.enterEditMode();
          return;
        } else {
          moveByArrowKey(datepicker, ev, 1, false);
        }
        break;
      case 'ArrowUp':
        if (ev.ctrlKey || ev.metaKey) {
          switchView(datepicker);
        } else if (ev.shiftKey) {
          datepicker.enterEditMode();
          return;
        } else {
          moveByArrowKey(datepicker, ev, -1, true);
        }
        break;
      case 'ArrowDown':
        if (ev.shiftKey && !ev.ctrlKey && !ev.metaKey) {
          datepicker.enterEditMode();
          return;
        }
        moveByArrowKey(datepicker, ev, 1, true);
        break;
      case 'Enter':
        if (isMinView) {
          datepicker.setDate(picker.viewDate);
        } else {
          picker.changeView(id - 1).render();
        }
        break;
      case 'Backspace':
      case 'Delete':
        datepicker.enterEditMode();
        return;
      default:
        if (ev.key.length === 1 && !ev.ctrlKey && !ev.metaKey) {
          datepicker.enterEditMode();
        }
        return;
    }
  }
  ev.preventDefault();
  ev.stopPropagation();
}
function onFocus(datepicker) {
  if (datepicker.config.showOnFocus && !datepicker._showing) {
    datepicker.show();
  }
}

// for the prevention for entering edit mode while getting focus on click
function onMousedown(datepicker, ev) {
  var el = ev.target;
  if (datepicker.picker.active || datepicker.config.showOnClick) {
    el._active = el === document.activeElement;
    el._clicking = setTimeout(function () {
      delete el._active;
      delete el._clicking;
    }, 2000);
  }
}
function onClickInput(datepicker, ev) {
  var el = ev.target;
  if (!el._clicking) {
    return;
  }
  clearTimeout(el._clicking);
  delete el._clicking;
  if (el._active) {
    datepicker.enterEditMode();
  }
  delete el._active;
  if (datepicker.config.showOnClick) {
    datepicker.show();
  }
}
function onPaste(datepicker, ev) {
  if (ev.clipboardData.types.includes('text/plain')) {
    datepicker.enterEditMode();
  }
}

// for the `document` to delegate the events from outside the picker/input field
function onClickOutside(datepicker, ev) {
  var element = datepicker.element;
  if (element !== document.activeElement) {
    return;
  }
  var pickerElem = datepicker.picker.element;
  if (findElementInEventPath(ev, function (el) {
    return el === element || el === pickerElem;
  })) {
    return;
  }
  unfocus(datepicker);
}

function stringifyDates(dates, config) {
  return dates.map(function (dt) {
    return formatDate(dt, config.format, config.locale);
  }).join(config.dateDelimiter);
}

// parse input dates and create an array of time values for selection
// returns undefined if there are no valid dates in inputDates
// when origDates (current selection) is passed, the function works to mix
// the input dates into the current selection
function processInputDates(datepicker, inputDates) {
  var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var config = datepicker.config,
    origDates = datepicker.dates,
    rangepicker = datepicker.rangepicker;
  if (inputDates.length === 0) {
    // empty input is considered valid unless origiDates is passed
    return clear ? [] : undefined;
  }
  var rangeEnd = rangepicker && datepicker === rangepicker.datepickers[1];
  var newDates = inputDates.reduce(function (dates, dt) {
    var date = parseDate(dt, config.format, config.locale);
    if (date === undefined) {
      return dates;
    }
    if (config.pickLevel > 0) {
      // adjust to 1st of the month/Jan 1st of the year
      // or to the last day of the monh/Dec 31st of the year if the datepicker
      // is the range-end picker of a rangepicker
      var _dt = new Date(date);
      if (config.pickLevel === 1) {
        date = rangeEnd ? _dt.setMonth(_dt.getMonth() + 1, 0) : _dt.setDate(1);
      } else {
        date = rangeEnd ? _dt.setFullYear(_dt.getFullYear() + 1, 0, 0) : _dt.setMonth(0, 1);
      }
    }
    if (isInRange(date, config.minDate, config.maxDate) && !dates.includes(date) && !config.datesDisabled.includes(date) && !config.daysOfWeekDisabled.includes(new Date(date).getDay())) {
      dates.push(date);
    }
    return dates;
  }, []);
  if (newDates.length === 0) {
    return;
  }
  if (config.multidate && !clear) {
    // get the synmetric difference between origDates and newDates
    newDates = newDates.reduce(function (dates, date) {
      if (!origDates.includes(date)) {
        dates.push(date);
      }
      return dates;
    }, origDates.filter(function (date) {
      return !newDates.includes(date);
    }));
  }
  // do length check always because user can input multiple dates regardless of the mode
  return config.maxNumberOfDates && newDates.length > config.maxNumberOfDates ? newDates.slice(config.maxNumberOfDates * -1) : newDates;
}

// refresh the UI elements
// modes: 1: input only, 2, picker only, 3 both
function refreshUI(datepicker) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var quickRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var config = datepicker.config,
    picker = datepicker.picker,
    inputField = datepicker.inputField;
  if (mode & 2) {
    var newView = picker.active ? config.pickLevel : config.startView;
    picker.update().changeView(newView).render(quickRender);
  }
  if (mode & 1 && inputField) {
    inputField.value = stringifyDates(datepicker.dates, config);
  }
}
function _setDate(datepicker, inputDates, options) {
  var clear = options.clear,
    render = options.render,
    autohide = options.autohide;
  if (render === undefined) {
    render = true;
  }
  if (!render) {
    autohide = false;
  } else if (autohide === undefined) {
    autohide = datepicker.config.autohide;
  }
  var newDates = processInputDates(datepicker, inputDates, clear);
  if (!newDates) {
    return;
  }
  if (newDates.toString() !== datepicker.dates.toString()) {
    datepicker.dates = newDates;
    refreshUI(datepicker, render ? 3 : 1);
    triggerDatepickerEvent(datepicker, 'changeDate');
  } else {
    refreshUI(datepicker, 1);
  }
  if (autohide) {
    datepicker.hide();
  }
}

/**
 * Class representing a date picker
 */
var Datepicker = /*#__PURE__*/function () {
  /**
   * Create a date picker
   * @param  {Element} element - element to bind a date picker
   * @param  {Object} [options] - config options
   * @param  {DateRangePicker} [rangepicker] - DateRangePicker instance the
   * date picker belongs to. Use this only when creating date picker as a part
   * of date range picker
   */
  function Datepicker(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var rangepicker = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    _classCallCheck(this, Datepicker);
    element.datepicker = this;
    this.element = element;

    // set up config
    var config = this.config = Object.assign({
      buttonClass: options.buttonClass && String(options.buttonClass) || 'button',
      container: document.body,
      defaultViewDate: today(),
      maxDate: undefined,
      minDate: undefined
    }, processOptions(defaultOptions, this));
    this._options = options;
    Object.assign(config, processOptions(options, this));

    // configure by type
    var inline = this.inline = element.tagName !== 'INPUT';
    var inputField;
    var initialDates;
    if (inline) {
      config.container = element;
      initialDates = stringToArray(element.dataset.date, config.dateDelimiter);
      delete element.dataset.date;
    } else {
      var container = options.container ? document.querySelector(options.container) : null;
      if (container) {
        config.container = container;
      }
      inputField = this.inputField = element;
      inputField.classList.add('datepicker-input');
      initialDates = stringToArray(inputField.value, config.dateDelimiter);
    }
    if (rangepicker) {
      // check validiry
      var index = rangepicker.inputs.indexOf(inputField);
      var datepickers = rangepicker.datepickers;
      if (index < 0 || index > 1 || !Array.isArray(datepickers)) {
        throw Error('Invalid rangepicker object.');
      }
      // attach itaelf to the rangepicker here so that processInputDates() can
      // determine if this is the range-end picker of the rangepicker while
      // setting inital values when pickLevel > 0
      datepickers[index] = this;
      // add getter for rangepicker
      Object.defineProperty(this, 'rangepicker', {
        get: function get() {
          return rangepicker;
        }
      });
    }

    // set initial dates
    this.dates = [];
    // process initial value
    var inputDateValues = processInputDates(this, initialDates);
    if (inputDateValues && inputDateValues.length > 0) {
      this.dates = inputDateValues;
    }
    if (inputField) {
      inputField.value = stringifyDates(this.dates, config);
    }
    var picker = this.picker = new Picker(this);
    if (inline) {
      this.show();
    } else {
      // set up event listeners in other modes
      var onMousedownDocument = onClickOutside.bind(null, this);
      var listeners = [[inputField, 'keydown', onKeydown.bind(null, this)], [inputField, 'focus', onFocus.bind(null, this)], [inputField, 'mousedown', onMousedown.bind(null, this)], [inputField, 'click', onClickInput.bind(null, this)], [inputField, 'paste', onPaste.bind(null, this)], [document, 'mousedown', onMousedownDocument], [document, 'touchstart', onMousedownDocument], [window, 'resize', picker.place.bind(picker)]];
      registerListeners(this, listeners);
    }
  }

  /**
   * Format Date object or time value in given format and language
   * @param  {Date|Number} date - date or time value to format
   * @param  {String|Object} format - format string or object that contains
   * toDisplay() custom formatter, whose signature is
   * - args:
   *   - date: {Date} - Date instance of the date passed to the method
   *   - format: {Object} - the format object passed to the method
   *   - locale: {Object} - locale for the language specified by `lang`
   * - return:
   *     {String} formatted date
   * @param  {String} [lang=en] - language code for the locale to use
   * @return {String} formatted date
   */
  return _createClass(Datepicker, [{
    key: "active",
    get:
    /**
     * @type {Boolean} - Whether the picker element is shown. `true` whne shown
     */
    function get() {
      return !!(this.picker && this.picker.active);
    }

    /**
     * @type {HTMLDivElement} - DOM object of picker element
     */
  }, {
    key: "pickerElement",
    get: function get() {
      return this.picker ? this.picker.element : undefined;
    }

    /**
     * Set new values to the config options
     * @param {Object} options - config options to update
     */
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var picker = this.picker;
      var newOptions = processOptions(options, this);
      Object.assign(this._options, options);
      Object.assign(this.config, newOptions);
      picker.setOptions(newOptions);
      refreshUI(this, 3);
    }

    /**
     * Show the picker element
     */
  }, {
    key: "show",
    value: function show() {
      if (this.inputField) {
        if (this.inputField.disabled) {
          return;
        }
        if (this.inputField !== document.activeElement) {
          this._showing = true;
          this.inputField.focus();
          delete this._showing;
        }
      }
      this.picker.show();
    }

    /**
     * Hide the picker element
     * Not available on inline picker
     */
  }, {
    key: "hide",
    value: function hide() {
      if (this.inline) {
        return;
      }
      this.picker.hide();
      this.picker.update().changeView(this.config.startView).render();
    }

    /**
     * Destroy the Datepicker instance
     * @return {Detepicker} - the instance destroyed
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.hide();
      unregisterListeners(this);
      this.picker.detach();
      if (!this.inline) {
        this.inputField.classList.remove('datepicker-input');
      }
      delete this.element.datepicker;
      return this;
    }

    /**
     * Get the selected date(s)
     *
     * The method returns a Date object of selected date by default, and returns
     * an array of selected dates in multidate mode. If format string is passed,
     * it returns date string(s) formatted in given format.
     *
     * @param  {String} [format] - Format string to stringify the date(s)
     * @return {Date|String|Date[]|String[]} - selected date(s), or if none is
     * selected, empty array in multidate mode and untitled in sigledate mode
     */
  }, {
    key: "getDate",
    value: function getDate() {
      var _this = this;
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var callback = format ? function (date) {
        return formatDate(date, format, _this.config.locale);
      } : function (date) {
        return new Date(date);
      };
      if (this.config.multidate) {
        return this.dates.map(callback);
      }
      if (this.dates.length > 0) {
        return callback(this.dates[0]);
      }
    }

    /**
     * Set selected date(s)
     *
     * In multidate mode, you can pass multiple dates as a series of arguments
     * or an array. (Since each date is parsed individually, the type of the
     * dates doesn't have to be the same.)
     * The given dates are used to toggle the select status of each date. The
     * number of selected dates is kept from exceeding the length set to
     * maxNumberOfDates.
     *
     * With clear: true option, the method can be used to clear the selection
     * and to replace the selection instead of toggling in multidate mode.
     * If the option is passed with no date arguments or an empty dates array,
     * it works as "clear" (clear the selection then set nothing), and if the
     * option is passed with new dates to select, it works as "replace" (clear
     * the selection then set the given dates)
     *
     * When render: false option is used, the method omits re-rendering the
     * picker element. In this case, you need to call refresh() method later in
     * order for the picker element to reflect the changes. The input field is
     * refreshed always regardless of this option.
     *
     * When invalid (unparsable, repeated, disabled or out-of-range) dates are
     * passed, the method ignores them and applies only valid ones. In the case
     * that all the given dates are invalid, which is distinguished from passing
     * no dates, the method considers it as an error and leaves the selection
     * untouched.
     *
     * @param {...(Date|Number|String)|Array} [dates] - Date strings, Date
     * objects, time values or mix of those for new selection
     * @param {Object} [options] - function options
     * - clear: {boolean} - Whether to clear the existing selection
     *     defualt: false
     * - render: {boolean} - Whether to re-render the picker element
     *     default: true
     * - autohide: {boolean} - Whether to hide the picker element after re-render
     *     Ignored when used with render: false
     *     default: config.autohide
     */
  }, {
    key: "setDate",
    value: function setDate() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var dates = [].concat(args);
      var opts = {};
      var lastArg = lastItemOf(args);
      if (_typeof(lastArg) === 'object' && !Array.isArray(lastArg) && !(lastArg instanceof Date) && lastArg) {
        Object.assign(opts, dates.pop());
      }
      var inputDates = Array.isArray(dates[0]) ? dates[0] : dates;
      _setDate(this, inputDates, opts);
    }

    /**
     * Update the selected date(s) with input field's value
     * Not available on inline picker
     *
     * The input field will be refreshed with properly formatted date string.
     *
     * @param  {Object} [options] - function options
     * - autohide: {boolean} - whether to hide the picker element after refresh
     *     default: false
     */
  }, {
    key: "update",
    value: function update() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (this.inline) {
        return;
      }
      var opts = {
        clear: true,
        autohide: !!(options && options.autohide)
      };
      var inputDates = stringToArray(this.inputField.value, this.config.dateDelimiter);
      _setDate(this, inputDates, opts);
    }

    /**
     * Refresh the picker element and the associated input field
     * @param {String} [target] - target item when refreshing one item only
     * 'picker' or 'input'
     * @param {Boolean} [forceRender] - whether to re-render the picker element
     * regardless of its state instead of optimized refresh
     */
  }, {
    key: "refresh",
    value: function refresh() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var forceRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (target && typeof target !== 'string') {
        forceRender = target;
        target = undefined;
      }
      var mode;
      if (target === 'picker') {
        mode = 2;
      } else if (target === 'input') {
        mode = 1;
      } else {
        mode = 3;
      }
      refreshUI(this, mode, !forceRender);
    }

    /**
     * Enter edit mode
     * Not available on inline picker or when the picker element is hidden
     */
  }, {
    key: "enterEditMode",
    value: function enterEditMode() {
      if (this.inline || !this.picker.active || this.editMode) {
        return;
      }
      this.editMode = true;
      this.inputField.classList.add('in-edit', 'border-blue-700', '!border-primary-700');
    }

    /**
     * Exit from edit mode
     * Not available on inline picker
     * @param  {Object} [options] - function options
     * - update: {boolean} - whether to call update() after exiting
     *     If false, input field is revert to the existing selection
     *     default: false
     */
  }, {
    key: "exitEditMode",
    value: function exitEditMode() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (this.inline || !this.editMode) {
        return;
      }
      var opts = Object.assign({
        update: false
      }, options);
      delete this.editMode;
      this.inputField.classList.remove('in-edit', 'border-blue-700', '!border-primary-700');
      if (opts.update) {
        this.update(opts);
      }
    }
  }], [{
    key: "formatDate",
    value: function formatDate$1(date, format, lang) {
      return formatDate(date, format, lang && locales[lang] || locales.en);
    }

    /**
     * Parse date string
     * @param  {String|Date|Number} dateStr - date string, Date object or time
     * value to parse
     * @param  {String|Object} format - format string or object that contains
     * toValue() custom parser, whose signature is
     * - args:
     *   - dateStr: {String|Date|Number} - the dateStr passed to the method
     *   - format: {Object} - the format object passed to the method
     *   - locale: {Object} - locale for the language specified by `lang`
     * - return:
     *     {Date|Number} parsed date or its time value
     * @param  {String} [lang=en] - language code for the locale to use
     * @return {Number} time value of parsed date
     */
  }, {
    key: "parseDate",
    value: function parseDate$1(dateStr, format, lang) {
      return parseDate(dateStr, format, lang && locales[lang] || locales.en);
    }

    /**
     * @type {Object} - Installed locales in `[languageCode]: localeObject` format
     * en`:_English (US)_ is pre-installed.
     */
  }, {
    key: "locales",
    get: function get() {
      return locales;
    }
  }]);
}();

// filter out the config options inapproprite to pass to Datepicker
function filterOptions(options) {
  var newOpts = Object.assign({}, options);
  delete newOpts.inputs;
  delete newOpts.allowOneSidedRange;
  delete newOpts.maxNumberOfDates; // to ensure each datepicker handles a single date

  return newOpts;
}
function setupDatepicker(rangepicker, changeDateListener, el, options) {
  registerListeners(rangepicker, [[el, 'changeDate', changeDateListener]]);
  new Datepicker(el, options, rangepicker);
}
function onChangeDate(rangepicker, ev) {
  // to prevent both datepickers trigger the other side's update each other
  if (rangepicker._updating) {
    return;
  }
  rangepicker._updating = true;
  var target = ev.target;
  if (target.datepicker === undefined) {
    return;
  }
  var datepickers = rangepicker.datepickers;
  var setDateOptions = {
    render: false
  };
  var changedSide = rangepicker.inputs.indexOf(target);
  var otherSide = changedSide === 0 ? 1 : 0;
  var changedDate = datepickers[changedSide].dates[0];
  var otherDate = datepickers[otherSide].dates[0];
  if (changedDate !== undefined && otherDate !== undefined) {
    // if the start of the range > the end, swap them
    if (changedSide === 0 && changedDate > otherDate) {
      datepickers[0].setDate(otherDate, setDateOptions);
      datepickers[1].setDate(changedDate, setDateOptions);
    } else if (changedSide === 1 && changedDate < otherDate) {
      datepickers[0].setDate(changedDate, setDateOptions);
      datepickers[1].setDate(otherDate, setDateOptions);
    }
  } else if (!rangepicker.allowOneSidedRange) {
    // to prevent the range from becoming one-sided, copy changed side's
    // selection (no matter if it's empty) to the other side
    if (changedDate !== undefined || otherDate !== undefined) {
      setDateOptions.clear = true;
      datepickers[otherSide].setDate(datepickers[changedSide].dates, setDateOptions);
    }
  }
  datepickers[0].picker.update().render();
  datepickers[1].picker.update().render();
  delete rangepicker._updating;
}

/**
 * Class representing a date range picker
 */
var DateRangePicker = /*#__PURE__*/function () {
  /**
   * Create a date range picker
   * @param  {Element} element - element to bind a date range picker
   * @param  {Object} [options] - config options
   */
  function DateRangePicker(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, DateRangePicker);
    var inputs = Array.isArray(options.inputs) ? options.inputs : Array.from(element.querySelectorAll('input'));
    if (inputs.length < 2) {
      return;
    }
    element.rangepicker = this;
    this.element = element;
    this.inputs = inputs.slice(0, 2);
    this.allowOneSidedRange = !!options.allowOneSidedRange;
    var changeDateListener = onChangeDate.bind(null, this);
    var cleanOptions = filterOptions(options);
    // in order for initial date setup to work right when pcicLvel > 0,
    // let Datepicker constructor add the instance to the rangepicker
    var datepickers = [];
    Object.defineProperty(this, 'datepickers', {
      get: function get() {
        return datepickers;
      }
    });
    setupDatepicker(this, changeDateListener, this.inputs[0], cleanOptions);
    setupDatepicker(this, changeDateListener, this.inputs[1], cleanOptions);
    Object.freeze(datepickers);
    // normalize the range if inital dates are given
    if (datepickers[0].dates.length > 0) {
      onChangeDate(this, {
        target: this.inputs[0]
      });
    } else if (datepickers[1].dates.length > 0) {
      onChangeDate(this, {
        target: this.inputs[1]
      });
    }
  }

  /**
   * @type {Array} - selected date of the linked date pickers
   */
  return _createClass(DateRangePicker, [{
    key: "dates",
    get: function get() {
      return this.datepickers.length === 2 ? [this.datepickers[0].dates[0], this.datepickers[1].dates[0]] : undefined;
    }

    /**
     * Set new values to the config options
     * @param {Object} options - config options to update
     */
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.allowOneSidedRange = !!options.allowOneSidedRange;
      var cleanOptions = filterOptions(options);
      this.datepickers[0].setOptions(cleanOptions);
      this.datepickers[1].setOptions(cleanOptions);
    }

    /**
     * Destroy the DateRangePicker instance
     * @return {DateRangePicker} - the instance destroyed
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.datepickers[0].destroy();
      this.datepickers[1].destroy();
      unregisterListeners(this);
      delete this.element.rangepicker;
    }

    /**
     * Get the start and end dates of the date range
     *
     * The method returns Date objects by default. If format string is passed,
     * it returns date strings formatted in given format.
     * The result array always contains 2 items (start date/end date) and
     * undefined is used for unselected side. (e.g. If none is selected,
     * the result will be [undefined, undefined]. If only the end date is set
     * when allowOneSidedRange config option is true, [undefined, endDate] will
     * be returned.)
     *
     * @param  {String} [format] - Format string to stringify the dates
     * @return {Array} - Start and end dates
     */
  }, {
    key: "getDates",
    value: function getDates() {
      var _this = this;
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var callback = format ? function (date) {
        return formatDate(date, format, _this.datepickers[0].config.locale);
      } : function (date) {
        return new Date(date);
      };
      return this.dates.map(function (date) {
        return date === undefined ? date : callback(date);
      });
    }

    /**
     * Set the start and end dates of the date range
     *
     * The method calls datepicker.setDate() internally using each of the
     * arguments in start→end order.
     *
     * When a clear: true option object is passed instead of a date, the method
     * clears the date.
     *
     * If an invalid date, the same date as the current one or an option object
     * without clear: true is passed, the method considers that argument as an
     * "ineffective" argument because calling datepicker.setDate() with those
     * values makes no changes to the date selection.
     *
     * When the allowOneSidedRange config option is false, passing {clear: true}
     * to clear the range works only when it is done to the last effective
     * argument (in other words, passed to rangeEnd or to rangeStart along with
     * ineffective rangeEnd). This is because when the date range is changed,
     * it gets normalized based on the last change at the end of the changing
     * process.
     *
     * @param {Date|Number|String|Object} rangeStart - Start date of the range
     * or {clear: true} to clear the date
     * @param {Date|Number|String|Object} rangeEnd - End date of the range
     * or {clear: true} to clear the date
     */
  }, {
    key: "setDates",
    value: function setDates(rangeStart, rangeEnd) {
      var _this$datepickers = _slicedToArray(this.datepickers, 2),
        datepicker0 = _this$datepickers[0],
        datepicker1 = _this$datepickers[1];
      var origDates = this.dates;

      // If range normalization runs on every change, we can't set a new range
      // that starts after the end of the current range correctly because the
      // normalization process swaps start↔︎end right after setting the new start
      // date. To prevent this, the normalization process needs to run once after
      // both of the new dates are set.
      this._updating = true;
      datepicker0.setDate(rangeStart);
      datepicker1.setDate(rangeEnd);
      delete this._updating;
      if (datepicker1.dates[0] !== origDates[1]) {
        onChangeDate(this, {
          target: this.inputs[1]
        });
      } else if (datepicker0.dates[0] !== origDates[0]) {
        onChangeDate(this, {
          target: this.inputs[0]
        });
      }
    }
  }]);
}();

exports.DateRangePicker = DateRangePicker;
exports.Datepicker = Datepicker;


/***/ }),

/***/ 902:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_178341__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initAccordions = void 0;
var instances_1 = __nested_webpack_require_178341__(423);
var Default = {
    alwaysOpen: false,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: function () { },
    onClose: function () { },
    onToggle: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Accordion = /** @class */ (function () {
    function Accordion(accordionEl, items, options, instanceOptions) {
        if (accordionEl === void 0) { accordionEl = null; }
        if (items === void 0) { items = []; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : accordionEl.id;
        this._accordionEl = accordionEl;
        this._items = items;
        this._options = __assign(__assign({}, Default), options);
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Accordion', this, this._instanceId, instanceOptions.override);
    }
    Accordion.prototype.init = function () {
        var _this = this;
        if (this._items.length && !this._initialized) {
            // show accordion item based on click
            this._items.forEach(function (item) {
                if (item.active) {
                    _this.open(item.id);
                }
                var clickHandler = function () {
                    _this.toggle(item.id);
                };
                item.triggerEl.addEventListener('click', clickHandler);
                // Store the clickHandler in a property of the item for removal later
                item.clickHandler = clickHandler;
            });
            this._initialized = true;
        }
    };
    Accordion.prototype.destroy = function () {
        if (this._items.length && this._initialized) {
            this._items.forEach(function (item) {
                item.triggerEl.removeEventListener('click', item.clickHandler);
                // Clean up by deleting the clickHandler property from the item
                delete item.clickHandler;
            });
            this._initialized = false;
        }
    };
    Accordion.prototype.removeInstance = function () {
        instances_1.default.removeInstance('Accordion', this._instanceId);
    };
    Accordion.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Accordion.prototype.getItem = function (id) {
        return this._items.filter(function (item) { return item.id === id; })[0];
    };
    Accordion.prototype.open = function (id) {
        var _a, _b;
        var _this = this;
        var item = this.getItem(id);
        // don't hide other accordions if always open
        if (!this._options.alwaysOpen) {
            this._items.map(function (i) {
                var _a, _b;
                if (i !== item) {
                    (_a = i.triggerEl.classList).remove.apply(_a, _this._options.activeClasses.split(' '));
                    (_b = i.triggerEl.classList).add.apply(_b, _this._options.inactiveClasses.split(' '));
                    i.targetEl.classList.add('hidden');
                    i.triggerEl.setAttribute('aria-expanded', 'false');
                    i.active = false;
                    // rotate icon if set
                    if (i.iconEl) {
                        i.iconEl.classList.add('rotate-180');
                    }
                }
            });
        }
        // show active item
        (_a = item.triggerEl.classList).add.apply(_a, this._options.activeClasses.split(' '));
        (_b = item.triggerEl.classList).remove.apply(_b, this._options.inactiveClasses.split(' '));
        item.triggerEl.setAttribute('aria-expanded', 'true');
        item.targetEl.classList.remove('hidden');
        item.active = true;
        // rotate icon if set
        if (item.iconEl) {
            item.iconEl.classList.remove('rotate-180');
        }
        // callback function
        this._options.onOpen(this, item);
    };
    Accordion.prototype.toggle = function (id) {
        var item = this.getItem(id);
        if (item.active) {
            this.close(id);
        }
        else {
            this.open(id);
        }
        // callback function
        this._options.onToggle(this, item);
    };
    Accordion.prototype.close = function (id) {
        var _a, _b;
        var item = this.getItem(id);
        (_a = item.triggerEl.classList).remove.apply(_a, this._options.activeClasses.split(' '));
        (_b = item.triggerEl.classList).add.apply(_b, this._options.inactiveClasses.split(' '));
        item.targetEl.classList.add('hidden');
        item.triggerEl.setAttribute('aria-expanded', 'false');
        item.active = false;
        // rotate icon if set
        if (item.iconEl) {
            item.iconEl.classList.add('rotate-180');
        }
        // callback function
        this._options.onClose(this, item);
    };
    Accordion.prototype.updateOnOpen = function (callback) {
        this._options.onOpen = callback;
    };
    Accordion.prototype.updateOnClose = function (callback) {
        this._options.onClose = callback;
    };
    Accordion.prototype.updateOnToggle = function (callback) {
        this._options.onToggle = callback;
    };
    return Accordion;
}());
function initAccordions() {
    document.querySelectorAll('[data-accordion]').forEach(function ($accordionEl) {
        var alwaysOpen = $accordionEl.getAttribute('data-accordion');
        var activeClasses = $accordionEl.getAttribute('data-active-classes');
        var inactiveClasses = $accordionEl.getAttribute('data-inactive-classes');
        var items = [];
        $accordionEl
            .querySelectorAll('[data-accordion-target]')
            .forEach(function ($triggerEl) {
            // Consider only items that directly belong to $accordionEl
            // (to make nested accordions work).
            if ($triggerEl.closest('[data-accordion]') === $accordionEl) {
                var item = {
                    id: $triggerEl.getAttribute('data-accordion-target'),
                    triggerEl: $triggerEl,
                    targetEl: document.querySelector($triggerEl.getAttribute('data-accordion-target')),
                    iconEl: $triggerEl.querySelector('[data-accordion-icon]'),
                    active: $triggerEl.getAttribute('aria-expanded') === 'true'
                        ? true
                        : false,
                };
                items.push(item);
            }
        });
        new Accordion($accordionEl, items, {
            alwaysOpen: alwaysOpen === 'open' ? true : false,
            activeClasses: activeClasses
                ? activeClasses
                : Default.activeClasses,
            inactiveClasses: inactiveClasses
                ? inactiveClasses
                : Default.inactiveClasses,
        });
    });
}
exports.initAccordions = initAccordions;
if (typeof window !== 'undefined') {
    window.Accordion = Accordion;
    window.initAccordions = initAccordions;
}
exports["default"] = Accordion;


/***/ }),

/***/ 33:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_186172__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initCarousels = void 0;
var instances_1 = __nested_webpack_require_186172__(423);
var Default = {
    defaultPosition: 0,
    indicators: {
        items: [],
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
    },
    interval: 3000,
    onNext: function () { },
    onPrev: function () { },
    onChange: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Carousel = /** @class */ (function () {
    function Carousel(carouselEl, items, options, instanceOptions) {
        if (carouselEl === void 0) { carouselEl = null; }
        if (items === void 0) { items = []; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : carouselEl.id;
        this._carouselEl = carouselEl;
        this._items = items;
        this._options = __assign(__assign(__assign({}, Default), options), { indicators: __assign(__assign({}, Default.indicators), options.indicators) });
        this._activeItem = this.getItem(this._options.defaultPosition);
        this._indicators = this._options.indicators.items;
        this._intervalDuration = this._options.interval;
        this._intervalInstance = null;
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Carousel', this, this._instanceId, instanceOptions.override);
    }
    /**
     * initialize carousel and items based on active one
     */
    Carousel.prototype.init = function () {
        var _this = this;
        if (this._items.length && !this._initialized) {
            this._items.map(function (item) {
                item.el.classList.add('absolute', 'inset-0', 'transition-transform', 'transform');
            });
            // if no active item is set then first position is default
            if (this.getActiveItem()) {
                this.slideTo(this.getActiveItem().position);
            }
            else {
                this.slideTo(0);
            }
            this._indicators.map(function (indicator, position) {
                indicator.el.addEventListener('click', function () {
                    _this.slideTo(position);
                });
            });
            this._initialized = true;
        }
    };
    Carousel.prototype.destroy = function () {
        if (this._initialized) {
            this._initialized = false;
        }
    };
    Carousel.prototype.removeInstance = function () {
        instances_1.default.removeInstance('Carousel', this._instanceId);
    };
    Carousel.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Carousel.prototype.getItem = function (position) {
        return this._items[position];
    };
    /**
     * Slide to the element based on id
     * @param {*} position
     */
    Carousel.prototype.slideTo = function (position) {
        var nextItem = this._items[position];
        var rotationItems = {
            left: nextItem.position === 0
                ? this._items[this._items.length - 1]
                : this._items[nextItem.position - 1],
            middle: nextItem,
            right: nextItem.position === this._items.length - 1
                ? this._items[0]
                : this._items[nextItem.position + 1],
        };
        this._rotate(rotationItems);
        this._setActiveItem(nextItem);
        if (this._intervalInstance) {
            this.pause();
            this.cycle();
        }
        this._options.onChange(this);
    };
    /**
     * Based on the currently active item it will go to the next position
     */
    Carousel.prototype.next = function () {
        var activeItem = this.getActiveItem();
        var nextItem = null;
        // check if last item
        if (activeItem.position === this._items.length - 1) {
            nextItem = this._items[0];
        }
        else {
            nextItem = this._items[activeItem.position + 1];
        }
        this.slideTo(nextItem.position);
        // callback function
        this._options.onNext(this);
    };
    /**
     * Based on the currently active item it will go to the previous position
     */
    Carousel.prototype.prev = function () {
        var activeItem = this.getActiveItem();
        var prevItem = null;
        // check if first item
        if (activeItem.position === 0) {
            prevItem = this._items[this._items.length - 1];
        }
        else {
            prevItem = this._items[activeItem.position - 1];
        }
        this.slideTo(prevItem.position);
        // callback function
        this._options.onPrev(this);
    };
    /**
     * This method applies the transform classes based on the left, middle, and right rotation carousel items
     * @param {*} rotationItems
     */
    Carousel.prototype._rotate = function (rotationItems) {
        // reset
        this._items.map(function (item) {
            item.el.classList.add('hidden');
        });
        // Handling the case when there is only one item
        if (this._items.length === 1) {
            rotationItems.middle.el.classList.remove('-translate-x-full', 'translate-x-full', 'translate-x-0', 'hidden', 'z-10');
            rotationItems.middle.el.classList.add('translate-x-0', 'z-20');
            return;
        }
        // left item (previously active)
        rotationItems.left.el.classList.remove('-translate-x-full', 'translate-x-full', 'translate-x-0', 'hidden', 'z-20');
        rotationItems.left.el.classList.add('-translate-x-full', 'z-10');
        // currently active item
        rotationItems.middle.el.classList.remove('-translate-x-full', 'translate-x-full', 'translate-x-0', 'hidden', 'z-10');
        rotationItems.middle.el.classList.add('translate-x-0', 'z-30');
        // right item (upcoming active)
        rotationItems.right.el.classList.remove('-translate-x-full', 'translate-x-full', 'translate-x-0', 'hidden', 'z-30');
        rotationItems.right.el.classList.add('translate-x-full', 'z-20');
    };
    /**
     * Set an interval to cycle through the carousel items
     */
    Carousel.prototype.cycle = function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            this._intervalInstance = window.setInterval(function () {
                _this.next();
            }, this._intervalDuration);
        }
    };
    /**
     * Clears the cycling interval
     */
    Carousel.prototype.pause = function () {
        clearInterval(this._intervalInstance);
    };
    /**
     * Get the currently active item
     */
    Carousel.prototype.getActiveItem = function () {
        return this._activeItem;
    };
    /**
     * Set the currently active item and data attribute
     * @param {*} position
     */
    Carousel.prototype._setActiveItem = function (item) {
        var _a, _b;
        var _this = this;
        this._activeItem = item;
        var position = item.position;
        // update the indicators if available
        if (this._indicators.length) {
            this._indicators.map(function (indicator) {
                var _a, _b;
                indicator.el.setAttribute('aria-current', 'false');
                (_a = indicator.el.classList).remove.apply(_a, _this._options.indicators.activeClasses.split(' '));
                (_b = indicator.el.classList).add.apply(_b, _this._options.indicators.inactiveClasses.split(' '));
            });
            (_a = this._indicators[position].el.classList).add.apply(_a, this._options.indicators.activeClasses.split(' '));
            (_b = this._indicators[position].el.classList).remove.apply(_b, this._options.indicators.inactiveClasses.split(' '));
            this._indicators[position].el.setAttribute('aria-current', 'true');
        }
    };
    Carousel.prototype.updateOnNext = function (callback) {
        this._options.onNext = callback;
    };
    Carousel.prototype.updateOnPrev = function (callback) {
        this._options.onPrev = callback;
    };
    Carousel.prototype.updateOnChange = function (callback) {
        this._options.onChange = callback;
    };
    return Carousel;
}());
function initCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(function ($carouselEl) {
        var interval = $carouselEl.getAttribute('data-carousel-interval');
        var slide = $carouselEl.getAttribute('data-carousel') === 'slide'
            ? true
            : false;
        var items = [];
        var defaultPosition = 0;
        if ($carouselEl.querySelectorAll('[data-carousel-item]').length) {
            Array.from($carouselEl.querySelectorAll('[data-carousel-item]')).map(function ($carouselItemEl, position) {
                items.push({
                    position: position,
                    el: $carouselItemEl,
                });
                if ($carouselItemEl.getAttribute('data-carousel-item') ===
                    'active') {
                    defaultPosition = position;
                }
            });
        }
        var indicators = [];
        if ($carouselEl.querySelectorAll('[data-carousel-slide-to]').length) {
            Array.from($carouselEl.querySelectorAll('[data-carousel-slide-to]')).map(function ($indicatorEl) {
                indicators.push({
                    position: parseInt($indicatorEl.getAttribute('data-carousel-slide-to')),
                    el: $indicatorEl,
                });
            });
        }
        var carousel = new Carousel($carouselEl, items, {
            defaultPosition: defaultPosition,
            indicators: {
                items: indicators,
            },
            interval: interval ? interval : Default.interval,
        });
        if (slide) {
            carousel.cycle();
        }
        // check for controls
        var carouselNextEl = $carouselEl.querySelector('[data-carousel-next]');
        var carouselPrevEl = $carouselEl.querySelector('[data-carousel-prev]');
        if (carouselNextEl) {
            carouselNextEl.addEventListener('click', function () {
                carousel.next();
            });
        }
        if (carouselPrevEl) {
            carouselPrevEl.addEventListener('click', function () {
                carousel.prev();
            });
        }
    });
}
exports.initCarousels = initCarousels;
if (typeof window !== 'undefined') {
    window.Carousel = Carousel;
    window.initCarousels = initCarousels;
}
exports["default"] = Carousel;


/***/ }),

/***/ 673:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_197364__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initCopyClipboards = void 0;
var instances_1 = __nested_webpack_require_197364__(423);
var Default = {
    htmlEntities: false,
    contentType: 'input',
    onCopy: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var CopyClipboard = /** @class */ (function () {
    function CopyClipboard(triggerEl, targetEl, options, instanceOptions) {
        if (triggerEl === void 0) { triggerEl = null; }
        if (targetEl === void 0) { targetEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._triggerEl = triggerEl;
        this._targetEl = targetEl;
        this._options = __assign(__assign({}, Default), options);
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('CopyClipboard', this, this._instanceId, instanceOptions.override);
    }
    CopyClipboard.prototype.init = function () {
        var _this = this;
        if (this._targetEl && this._triggerEl && !this._initialized) {
            this._triggerElClickHandler = function () {
                _this.copy();
            };
            // clicking on the trigger element should copy the value of the target element
            if (this._triggerEl) {
                this._triggerEl.addEventListener('click', this._triggerElClickHandler);
            }
            this._initialized = true;
        }
    };
    CopyClipboard.prototype.destroy = function () {
        if (this._triggerEl && this._targetEl && this._initialized) {
            if (this._triggerEl) {
                this._triggerEl.removeEventListener('click', this._triggerElClickHandler);
            }
            this._initialized = false;
        }
    };
    CopyClipboard.prototype.removeInstance = function () {
        instances_1.default.removeInstance('CopyClipboard', this._instanceId);
    };
    CopyClipboard.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    CopyClipboard.prototype.getTargetValue = function () {
        if (this._options.contentType === 'input') {
            return this._targetEl.value;
        }
        if (this._options.contentType === 'innerHTML') {
            return this._targetEl.innerHTML;
        }
        if (this._options.contentType === 'textContent') {
            return this._targetEl.textContent.replace(/\s+/g, ' ').trim();
        }
    };
    CopyClipboard.prototype.copy = function () {
        var textToCopy = this.getTargetValue();
        // Check if HTMLEntities option is enabled
        if (this._options.htmlEntities) {
            // Encode the text using HTML entities
            textToCopy = this.decodeHTML(textToCopy);
        }
        // Create a temporary textarea element
        var tempTextArea = document.createElement('textarea');
        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);
        // Select the text inside the textarea and copy it to the clipboard
        tempTextArea.select();
        document.execCommand('copy');
        // Remove the temporary textarea
        document.body.removeChild(tempTextArea);
        // Callback function
        this._options.onCopy(this);
        return textToCopy;
    };
    // Function to encode text into HTML entities
    CopyClipboard.prototype.decodeHTML = function (html) {
        var textarea = document.createElement('textarea');
        textarea.innerHTML = html;
        return textarea.textContent;
    };
    CopyClipboard.prototype.updateOnCopyCallback = function (callback) {
        this._options.onCopy = callback;
    };
    return CopyClipboard;
}());
function initCopyClipboards() {
    document
        .querySelectorAll('[data-copy-to-clipboard-target]')
        .forEach(function ($triggerEl) {
        var targetId = $triggerEl.getAttribute('data-copy-to-clipboard-target');
        var $targetEl = document.getElementById(targetId);
        var contentType = $triggerEl.getAttribute('data-copy-to-clipboard-content-type');
        var htmlEntities = $triggerEl.getAttribute('data-copy-to-clipboard-html-entities');
        // check if the target element exists
        if ($targetEl) {
            if (!instances_1.default.instanceExists('CopyClipboard', $targetEl.getAttribute('id'))) {
                new CopyClipboard($triggerEl, $targetEl, {
                    htmlEntities: htmlEntities && htmlEntities === 'true'
                        ? true
                        : Default.htmlEntities,
                    contentType: contentType
                        ? contentType
                        : Default.contentType,
                });
            }
        }
        else {
            console.error("The target element with id \"".concat(targetId, "\" does not exist. Please check the data-copy-to-clipboard-target attribute."));
        }
    });
}
exports.initCopyClipboards = initCopyClipboards;
if (typeof window !== 'undefined') {
    window.CopyClipboard = CopyClipboard;
    window.initClipboards = initCopyClipboards;
}
exports["default"] = CopyClipboard;


/***/ }),

/***/ 922:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_203172__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initCollapses = void 0;
var instances_1 = __nested_webpack_require_203172__(423);
var Default = {
    onCollapse: function () { },
    onExpand: function () { },
    onToggle: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Collapse = /** @class */ (function () {
    function Collapse(targetEl, triggerEl, options, instanceOptions) {
        if (targetEl === void 0) { targetEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = __assign(__assign({}, Default), options);
        this._visible = false;
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Collapse', this, this._instanceId, instanceOptions.override);
    }
    Collapse.prototype.init = function () {
        var _this = this;
        if (this._triggerEl && this._targetEl && !this._initialized) {
            if (this._triggerEl.hasAttribute('aria-expanded')) {
                this._visible =
                    this._triggerEl.getAttribute('aria-expanded') === 'true';
            }
            else {
                // fix until v2 not to break previous single collapses which became dismiss
                this._visible = !this._targetEl.classList.contains('hidden');
            }
            this._clickHandler = function () {
                _this.toggle();
            };
            this._triggerEl.addEventListener('click', this._clickHandler);
            this._initialized = true;
        }
    };
    Collapse.prototype.destroy = function () {
        if (this._triggerEl && this._initialized) {
            this._triggerEl.removeEventListener('click', this._clickHandler);
            this._initialized = false;
        }
    };
    Collapse.prototype.removeInstance = function () {
        instances_1.default.removeInstance('Collapse', this._instanceId);
    };
    Collapse.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Collapse.prototype.collapse = function () {
        this._targetEl.classList.add('hidden');
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'false');
        }
        this._visible = false;
        // callback function
        this._options.onCollapse(this);
    };
    Collapse.prototype.expand = function () {
        this._targetEl.classList.remove('hidden');
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'true');
        }
        this._visible = true;
        // callback function
        this._options.onExpand(this);
    };
    Collapse.prototype.toggle = function () {
        if (this._visible) {
            this.collapse();
        }
        else {
            this.expand();
        }
        // callback function
        this._options.onToggle(this);
    };
    Collapse.prototype.updateOnCollapse = function (callback) {
        this._options.onCollapse = callback;
    };
    Collapse.prototype.updateOnExpand = function (callback) {
        this._options.onExpand = callback;
    };
    Collapse.prototype.updateOnToggle = function (callback) {
        this._options.onToggle = callback;
    };
    return Collapse;
}());
function initCollapses() {
    document
        .querySelectorAll('[data-collapse-toggle]')
        .forEach(function ($triggerEl) {
        var targetId = $triggerEl.getAttribute('data-collapse-toggle');
        var $targetEl = document.getElementById(targetId);
        // check if the target element exists
        if ($targetEl) {
            if (!instances_1.default.instanceExists('Collapse', $targetEl.getAttribute('id'))) {
                new Collapse($targetEl, $triggerEl);
            }
            else {
                // if instance exists already for the same target element then create a new one with a different trigger element
                new Collapse($targetEl, $triggerEl, {}, {
                    id: $targetEl.getAttribute('id') +
                        '_' +
                        instances_1.default._generateRandomId(),
                });
            }
        }
        else {
            console.error("The target element with id \"".concat(targetId, "\" does not exist. Please check the data-collapse-toggle attribute."));
        }
    });
}
exports.initCollapses = initCollapses;
if (typeof window !== 'undefined') {
    window.Collapse = Collapse;
    window.initCollapses = initCollapses;
}
exports["default"] = Collapse;


/***/ }),

/***/ 132:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_208527__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initDatepickers = void 0;
var instances_1 = __nested_webpack_require_208527__(423);
var flowbite_datepicker_1 = __nested_webpack_require_208527__(554);
var Default = {
    defaultDatepickerId: null,
    autohide: false,
    format: 'mm/dd/yyyy',
    maxDate: null,
    minDate: null,
    orientation: 'bottom',
    buttons: false,
    autoSelectToday: 0,
    title: null,
    language: 'en',
    rangePicker: false,
    onShow: function () { },
    onHide: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Datepicker = /** @class */ (function () {
    function Datepicker(datepickerEl, options, instanceOptions) {
        if (datepickerEl === void 0) { datepickerEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : datepickerEl.id;
        this._datepickerEl = datepickerEl;
        this._datepickerInstance = null;
        this._options = __assign(__assign({}, Default), options);
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Datepicker', this, this._instanceId, instanceOptions.override);
    }
    Datepicker.prototype.init = function () {
        if (this._datepickerEl && !this._initialized) {
            if (this._options.rangePicker) {
                this._datepickerInstance = new flowbite_datepicker_1.DateRangePicker(this._datepickerEl, this._getDatepickerOptions(this._options));
            }
            else {
                this._datepickerInstance = new flowbite_datepicker_1.Datepicker(this._datepickerEl, this._getDatepickerOptions(this._options));
            }
            this._initialized = true;
        }
    };
    Datepicker.prototype.destroy = function () {
        if (this._initialized) {
            this._initialized = false;
            this._datepickerInstance.destroy();
        }
    };
    Datepicker.prototype.removeInstance = function () {
        this.destroy();
        instances_1.default.removeInstance('Datepicker', this._instanceId);
    };
    Datepicker.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Datepicker.prototype.getDatepickerInstance = function () {
        return this._datepickerInstance;
    };
    Datepicker.prototype.getDate = function () {
        if (this._options.rangePicker &&
            this._datepickerInstance instanceof flowbite_datepicker_1.DateRangePicker) {
            return this._datepickerInstance.getDates();
        }
        if (!this._options.rangePicker &&
            this._datepickerInstance instanceof flowbite_datepicker_1.Datepicker) {
            return this._datepickerInstance.getDate();
        }
    };
    Datepicker.prototype.setDate = function (date) {
        if (this._options.rangePicker &&
            this._datepickerInstance instanceof flowbite_datepicker_1.DateRangePicker) {
            return this._datepickerInstance.setDates(date);
        }
        if (!this._options.rangePicker &&
            this._datepickerInstance instanceof flowbite_datepicker_1.Datepicker) {
            return this._datepickerInstance.setDate(date);
        }
    };
    Datepicker.prototype.show = function () {
        this._datepickerInstance.show();
        this._options.onShow(this);
    };
    Datepicker.prototype.hide = function () {
        this._datepickerInstance.hide();
        this._options.onHide(this);
    };
    Datepicker.prototype._getDatepickerOptions = function (options) {
        var datepickerOptions = {};
        if (options.buttons) {
            datepickerOptions.todayBtn = true;
            datepickerOptions.clearBtn = true;
            if (options.autoSelectToday) {
                datepickerOptions.todayBtnMode = 1;
            }
        }
        if (options.autohide) {
            datepickerOptions.autohide = true;
        }
        if (options.format) {
            datepickerOptions.format = options.format;
        }
        if (options.maxDate) {
            datepickerOptions.maxDate = options.maxDate;
        }
        if (options.minDate) {
            datepickerOptions.minDate = options.minDate;
        }
        if (options.orientation) {
            datepickerOptions.orientation = options.orientation;
        }
        if (options.title) {
            datepickerOptions.title = options.title;
        }
        if (options.language) {
            datepickerOptions.language = options.language;
        }
        return datepickerOptions;
    };
    Datepicker.prototype.updateOnShow = function (callback) {
        this._options.onShow = callback;
    };
    Datepicker.prototype.updateOnHide = function (callback) {
        this._options.onHide = callback;
    };
    return Datepicker;
}());
function initDatepickers() {
    document
        .querySelectorAll('[datepicker], [inline-datepicker], [date-rangepicker]')
        .forEach(function ($datepickerEl) {
        if ($datepickerEl) {
            var buttons = $datepickerEl.hasAttribute('datepicker-buttons');
            var autoselectToday = $datepickerEl.hasAttribute('datepicker-autoselect-today');
            var autohide = $datepickerEl.hasAttribute('datepicker-autohide');
            var format = $datepickerEl.getAttribute('datepicker-format');
            var maxDate = $datepickerEl.getAttribute('datepicker-max-date');
            var minDate = $datepickerEl.getAttribute('datepicker-min-date');
            var orientation = $datepickerEl.getAttribute('datepicker-orientation');
            var title = $datepickerEl.getAttribute('datepicker-title');
            var language = $datepickerEl.getAttribute('datepicker-language');
            var rangePicker = $datepickerEl.hasAttribute('date-rangepicker');
            new Datepicker($datepickerEl, {
                buttons: buttons ? buttons : Default.buttons,
                autoSelectToday: autoselectToday
                    ? autoselectToday
                    : Default.autoSelectToday,
                autohide: autohide ? autohide : Default.autohide,
                format: format ? format : Default.format,
                maxDate: maxDate ? maxDate : Default.maxDate,
                minDate: minDate ? minDate : Default.minDate,
                orientation: orientation
                    ? orientation
                    : Default.orientation,
                title: title ? title : Default.title,
                language: language ? language : Default.language,
                rangePicker: rangePicker
                    ? rangePicker
                    : Default.rangePicker,
            });
        }
        else {
            console.error("The datepicker element does not exist. Please check the datepicker attribute.");
        }
    });
}
exports.initDatepickers = initDatepickers;
if (typeof window !== 'undefined') {
    window.Datepicker = Datepicker;
    window.initDatepickers = initDatepickers;
}
exports["default"] = Datepicker;


/***/ }),

/***/ 556:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_216147__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initDials = void 0;
var instances_1 = __nested_webpack_require_216147__(423);
var Default = {
    triggerType: 'hover',
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Dial = /** @class */ (function () {
    function Dial(parentEl, triggerEl, targetEl, options, instanceOptions) {
        if (parentEl === void 0) { parentEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (targetEl === void 0) { targetEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._parentEl = parentEl;
        this._triggerEl = triggerEl;
        this._targetEl = targetEl;
        this._options = __assign(__assign({}, Default), options);
        this._visible = false;
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Dial', this, this._instanceId, instanceOptions.override);
    }
    Dial.prototype.init = function () {
        var _this = this;
        if (this._triggerEl && this._targetEl && !this._initialized) {
            var triggerEventTypes = this._getTriggerEventTypes(this._options.triggerType);
            this._showEventHandler = function () {
                _this.show();
            };
            triggerEventTypes.showEvents.forEach(function (ev) {
                _this._triggerEl.addEventListener(ev, _this._showEventHandler);
                _this._targetEl.addEventListener(ev, _this._showEventHandler);
            });
            this._hideEventHandler = function () {
                if (!_this._parentEl.matches(':hover')) {
                    _this.hide();
                }
            };
            triggerEventTypes.hideEvents.forEach(function (ev) {
                _this._parentEl.addEventListener(ev, _this._hideEventHandler);
            });
            this._initialized = true;
        }
    };
    Dial.prototype.destroy = function () {
        var _this = this;
        if (this._initialized) {
            var triggerEventTypes = this._getTriggerEventTypes(this._options.triggerType);
            triggerEventTypes.showEvents.forEach(function (ev) {
                _this._triggerEl.removeEventListener(ev, _this._showEventHandler);
                _this._targetEl.removeEventListener(ev, _this._showEventHandler);
            });
            triggerEventTypes.hideEvents.forEach(function (ev) {
                _this._parentEl.removeEventListener(ev, _this._hideEventHandler);
            });
            this._initialized = false;
        }
    };
    Dial.prototype.removeInstance = function () {
        instances_1.default.removeInstance('Dial', this._instanceId);
    };
    Dial.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Dial.prototype.hide = function () {
        this._targetEl.classList.add('hidden');
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'false');
        }
        this._visible = false;
        // callback function
        this._options.onHide(this);
    };
    Dial.prototype.show = function () {
        this._targetEl.classList.remove('hidden');
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'true');
        }
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Dial.prototype.toggle = function () {
        if (this._visible) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Dial.prototype.isHidden = function () {
        return !this._visible;
    };
    Dial.prototype.isVisible = function () {
        return this._visible;
    };
    Dial.prototype._getTriggerEventTypes = function (triggerType) {
        switch (triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
            case 'click':
                return {
                    showEvents: ['click', 'focus'],
                    hideEvents: ['focusout', 'blur'],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
        }
    };
    Dial.prototype.updateOnShow = function (callback) {
        this._options.onShow = callback;
    };
    Dial.prototype.updateOnHide = function (callback) {
        this._options.onHide = callback;
    };
    Dial.prototype.updateOnToggle = function (callback) {
        this._options.onToggle = callback;
    };
    return Dial;
}());
function initDials() {
    document.querySelectorAll('[data-dial-init]').forEach(function ($parentEl) {
        var $triggerEl = $parentEl.querySelector('[data-dial-toggle]');
        if ($triggerEl) {
            var dialId = $triggerEl.getAttribute('data-dial-toggle');
            var $dialEl = document.getElementById(dialId);
            if ($dialEl) {
                var triggerType = $triggerEl.getAttribute('data-dial-trigger');
                new Dial($parentEl, $triggerEl, $dialEl, {
                    triggerType: triggerType
                        ? triggerType
                        : Default.triggerType,
                });
            }
            else {
                console.error("Dial with id ".concat(dialId, " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"));
            }
        }
        else {
            console.error("Dial with id ".concat($parentEl.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
        }
    });
}
exports.initDials = initDials;
if (typeof window !== 'undefined') {
    window.Dial = Dial;
    window.initDials = initDials;
}
exports["default"] = Dial;


/***/ }),

/***/ 791:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_223001__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initDismisses = void 0;
var instances_1 = __nested_webpack_require_223001__(423);
var Default = {
    transition: 'transition-opacity',
    duration: 300,
    timing: 'ease-out',
    onHide: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Dismiss = /** @class */ (function () {
    function Dismiss(targetEl, triggerEl, options, instanceOptions) {
        if (targetEl === void 0) { targetEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = __assign(__assign({}, Default), options);
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Dismiss', this, this._instanceId, instanceOptions.override);
    }
    Dismiss.prototype.init = function () {
        var _this = this;
        if (this._triggerEl && this._targetEl && !this._initialized) {
            this._clickHandler = function () {
                _this.hide();
            };
            this._triggerEl.addEventListener('click', this._clickHandler);
            this._initialized = true;
        }
    };
    Dismiss.prototype.destroy = function () {
        if (this._triggerEl && this._initialized) {
            this._triggerEl.removeEventListener('click', this._clickHandler);
            this._initialized = false;
        }
    };
    Dismiss.prototype.removeInstance = function () {
        instances_1.default.removeInstance('Dismiss', this._instanceId);
    };
    Dismiss.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Dismiss.prototype.hide = function () {
        var _this = this;
        this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, 'opacity-0');
        setTimeout(function () {
            _this._targetEl.classList.add('hidden');
        }, this._options.duration);
        // callback function
        this._options.onHide(this, this._targetEl);
    };
    Dismiss.prototype.updateOnHide = function (callback) {
        this._options.onHide = callback;
    };
    return Dismiss;
}());
function initDismisses() {
    document.querySelectorAll('[data-dismiss-target]').forEach(function ($triggerEl) {
        var targetId = $triggerEl.getAttribute('data-dismiss-target');
        var $dismissEl = document.querySelector(targetId);
        if ($dismissEl) {
            new Dismiss($dismissEl, $triggerEl);
        }
        else {
            console.error("The dismiss element with id \"".concat(targetId, "\" does not exist. Please check the data-dismiss-target attribute."));
        }
    });
}
exports.initDismisses = initDismisses;
if (typeof window !== 'undefined') {
    window.Dismiss = Dismiss;
    window.initDismisses = initDismisses;
}
exports["default"] = Dismiss;


/***/ }),

/***/ 340:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_226692__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initDrawers = void 0;
var instances_1 = __nested_webpack_require_226692__(423);
var Default = {
    placement: 'left',
    bodyScrolling: false,
    backdrop: true,
    edge: false,
    edgeOffset: 'bottom-[60px]',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Drawer = /** @class */ (function () {
    function Drawer(targetEl, options, instanceOptions) {
        if (targetEl === void 0) { targetEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._eventListenerInstances = [];
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._options = __assign(__assign({}, Default), options);
        this._visible = false;
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Drawer', this, this._instanceId, instanceOptions.override);
    }
    Drawer.prototype.init = function () {
        var _this = this;
        // set initial accessibility attributes
        if (this._targetEl && !this._initialized) {
            this._targetEl.setAttribute('aria-hidden', 'true');
            this._targetEl.classList.add('transition-transform');
            // set base placement classes
            this._getPlacementClasses(this._options.placement).base.map(function (c) {
                _this._targetEl.classList.add(c);
            });
            this._handleEscapeKey = function (event) {
                if (event.key === 'Escape') {
                    // if 'Escape' key is pressed
                    if (_this.isVisible()) {
                        // if the Drawer is visible
                        _this.hide(); // hide the Drawer
                    }
                }
            };
            // add keyboard event listener to document
            document.addEventListener('keydown', this._handleEscapeKey);
            this._initialized = true;
        }
    };
    Drawer.prototype.destroy = function () {
        if (this._initialized) {
            this.removeAllEventListenerInstances();
            this._destroyBackdropEl();
            // Remove the keyboard event listener
            document.removeEventListener('keydown', this._handleEscapeKey);
            this._initialized = false;
        }
    };
    Drawer.prototype.removeInstance = function () {
        instances_1.default.removeInstance('Drawer', this._instanceId);
    };
    Drawer.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Drawer.prototype.hide = function () {
        var _this = this;
        // based on the edge option show placement classes
        if (this._options.edge) {
            this._getPlacementClasses(this._options.placement + '-edge').active.map(function (c) {
                _this._targetEl.classList.remove(c);
            });
            this._getPlacementClasses(this._options.placement + '-edge').inactive.map(function (c) {
                _this._targetEl.classList.add(c);
            });
        }
        else {
            this._getPlacementClasses(this._options.placement).active.map(function (c) {
                _this._targetEl.classList.remove(c);
            });
            this._getPlacementClasses(this._options.placement).inactive.map(function (c) {
                _this._targetEl.classList.add(c);
            });
        }
        // set accessibility attributes
        this._targetEl.setAttribute('aria-hidden', 'true');
        this._targetEl.removeAttribute('aria-modal');
        this._targetEl.removeAttribute('role');
        // enable body scroll
        if (!this._options.bodyScrolling) {
            document.body.classList.remove('overflow-hidden');
        }
        // destroy backdrop
        if (this._options.backdrop) {
            this._destroyBackdropEl();
        }
        this._visible = false;
        // callback function
        this._options.onHide(this);
    };
    Drawer.prototype.show = function () {
        var _this = this;
        if (this._options.edge) {
            this._getPlacementClasses(this._options.placement + '-edge').active.map(function (c) {
                _this._targetEl.classList.add(c);
            });
            this._getPlacementClasses(this._options.placement + '-edge').inactive.map(function (c) {
                _this._targetEl.classList.remove(c);
            });
        }
        else {
            this._getPlacementClasses(this._options.placement).active.map(function (c) {
                _this._targetEl.classList.add(c);
            });
            this._getPlacementClasses(this._options.placement).inactive.map(function (c) {
                _this._targetEl.classList.remove(c);
            });
        }
        // set accessibility attributes
        this._targetEl.setAttribute('aria-modal', 'true');
        this._targetEl.setAttribute('role', 'dialog');
        this._targetEl.removeAttribute('aria-hidden');
        // disable body scroll
        if (!this._options.bodyScrolling) {
            document.body.classList.add('overflow-hidden');
        }
        // show backdrop
        if (this._options.backdrop) {
            this._createBackdrop();
        }
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Drawer.prototype.toggle = function () {
        if (this.isVisible()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Drawer.prototype._createBackdrop = function () {
        var _a;
        var _this = this;
        if (!this._visible) {
            var backdropEl = document.createElement('div');
            backdropEl.setAttribute('drawer-backdrop', '');
            (_a = backdropEl.classList).add.apply(_a, this._options.backdropClasses.split(' '));
            document.querySelector('body').append(backdropEl);
            backdropEl.addEventListener('click', function () {
                _this.hide();
            });
        }
    };
    Drawer.prototype._destroyBackdropEl = function () {
        if (this._visible &&
            document.querySelector('[drawer-backdrop]') !== null) {
            document.querySelector('[drawer-backdrop]').remove();
        }
    };
    Drawer.prototype._getPlacementClasses = function (placement) {
        switch (placement) {
            case 'top':
                return {
                    base: ['top-0', 'left-0', 'right-0'],
                    active: ['transform-none'],
                    inactive: ['-translate-y-full'],
                };
            case 'right':
                return {
                    base: ['right-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['translate-x-full'],
                };
            case 'bottom':
                return {
                    base: ['bottom-0', 'left-0', 'right-0'],
                    active: ['transform-none'],
                    inactive: ['translate-y-full'],
                };
            case 'left':
                return {
                    base: ['left-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['-translate-x-full'],
                };
            case 'bottom-edge':
                return {
                    base: ['left-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['translate-y-full', this._options.edgeOffset],
                };
            default:
                return {
                    base: ['left-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['-translate-x-full'],
                };
        }
    };
    Drawer.prototype.isHidden = function () {
        return !this._visible;
    };
    Drawer.prototype.isVisible = function () {
        return this._visible;
    };
    Drawer.prototype.addEventListenerInstance = function (element, type, handler) {
        this._eventListenerInstances.push({
            element: element,
            type: type,
            handler: handler,
        });
    };
    Drawer.prototype.removeAllEventListenerInstances = function () {
        this._eventListenerInstances.map(function (eventListenerInstance) {
            eventListenerInstance.element.removeEventListener(eventListenerInstance.type, eventListenerInstance.handler);
        });
        this._eventListenerInstances = [];
    };
    Drawer.prototype.getAllEventListenerInstances = function () {
        return this._eventListenerInstances;
    };
    Drawer.prototype.updateOnShow = function (callback) {
        this._options.onShow = callback;
    };
    Drawer.prototype.updateOnHide = function (callback) {
        this._options.onHide = callback;
    };
    Drawer.prototype.updateOnToggle = function (callback) {
        this._options.onToggle = callback;
    };
    return Drawer;
}());
function initDrawers() {
    document.querySelectorAll('[data-drawer-target]').forEach(function ($triggerEl) {
        // mandatory
        var drawerId = $triggerEl.getAttribute('data-drawer-target');
        var $drawerEl = document.getElementById(drawerId);
        if ($drawerEl) {
            var placement = $triggerEl.getAttribute('data-drawer-placement');
            var bodyScrolling = $triggerEl.getAttribute('data-drawer-body-scrolling');
            var backdrop = $triggerEl.getAttribute('data-drawer-backdrop');
            var edge = $triggerEl.getAttribute('data-drawer-edge');
            var edgeOffset = $triggerEl.getAttribute('data-drawer-edge-offset');
            new Drawer($drawerEl, {
                placement: placement ? placement : Default.placement,
                bodyScrolling: bodyScrolling
                    ? bodyScrolling === 'true'
                        ? true
                        : false
                    : Default.bodyScrolling,
                backdrop: backdrop
                    ? backdrop === 'true'
                        ? true
                        : false
                    : Default.backdrop,
                edge: edge ? (edge === 'true' ? true : false) : Default.edge,
                edgeOffset: edgeOffset ? edgeOffset : Default.edgeOffset,
            });
        }
        else {
            console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        }
    });
    document.querySelectorAll('[data-drawer-toggle]').forEach(function ($triggerEl) {
        var drawerId = $triggerEl.getAttribute('data-drawer-toggle');
        var $drawerEl = document.getElementById(drawerId);
        if ($drawerEl) {
            var drawer_1 = instances_1.default.getInstance('Drawer', drawerId);
            if (drawer_1) {
                var toggleDrawer = function () {
                    drawer_1.toggle();
                };
                $triggerEl.addEventListener('click', toggleDrawer);
                drawer_1.addEventListenerInstance($triggerEl, 'click', toggleDrawer);
            }
            else {
                console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
            }
        }
        else {
            console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        }
    });
    document
        .querySelectorAll('[data-drawer-dismiss], [data-drawer-hide]')
        .forEach(function ($triggerEl) {
        var drawerId = $triggerEl.getAttribute('data-drawer-dismiss')
            ? $triggerEl.getAttribute('data-drawer-dismiss')
            : $triggerEl.getAttribute('data-drawer-hide');
        var $drawerEl = document.getElementById(drawerId);
        if ($drawerEl) {
            var drawer_2 = instances_1.default.getInstance('Drawer', drawerId);
            if (drawer_2) {
                var hideDrawer = function () {
                    drawer_2.hide();
                };
                $triggerEl.addEventListener('click', hideDrawer);
                drawer_2.addEventListenerInstance($triggerEl, 'click', hideDrawer);
            }
            else {
                console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
            }
        }
        else {
            console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
        }
    });
    document.querySelectorAll('[data-drawer-show]').forEach(function ($triggerEl) {
        var drawerId = $triggerEl.getAttribute('data-drawer-show');
        var $drawerEl = document.getElementById(drawerId);
        if ($drawerEl) {
            var drawer_3 = instances_1.default.getInstance('Drawer', drawerId);
            if (drawer_3) {
                var showDrawer = function () {
                    drawer_3.show();
                };
                $triggerEl.addEventListener('click', showDrawer);
                drawer_3.addEventListenerInstance($triggerEl, 'click', showDrawer);
            }
            else {
                console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
            }
        }
        else {
            console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        }
    });
}
exports.initDrawers = initDrawers;
if (typeof window !== 'undefined') {
    window.Drawer = Drawer;
    window.initDrawers = initDrawers;
}
exports["default"] = Drawer;


/***/ }),

/***/ 316:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_241330__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initDropdowns = void 0;
/* eslint-disable @typescript-eslint/no-empty-function */
var core_1 = __nested_webpack_require_241330__(853);
var instances_1 = __nested_webpack_require_241330__(423);
var Default = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: false,
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Dropdown = /** @class */ (function () {
    function Dropdown(targetElement, triggerElement, options, instanceOptions) {
        if (targetElement === void 0) { targetElement = null; }
        if (triggerElement === void 0) { triggerElement = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetElement.id;
        this._targetEl = targetElement;
        this._triggerEl = triggerElement;
        this._options = __assign(__assign({}, Default), options);
        this._popperInstance = null;
        this._visible = false;
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Dropdown', this, this._instanceId, instanceOptions.override);
    }
    Dropdown.prototype.init = function () {
        if (this._triggerEl && this._targetEl && !this._initialized) {
            this._popperInstance = this._createPopperInstance();
            this._setupEventListeners();
            this._initialized = true;
        }
    };
    Dropdown.prototype.destroy = function () {
        var _this = this;
        var triggerEvents = this._getTriggerEvents();
        // Remove click event listeners for trigger element
        if (this._options.triggerType === 'click') {
            triggerEvents.showEvents.forEach(function (ev) {
                _this._triggerEl.removeEventListener(ev, _this._clickHandler);
            });
        }
        // Remove hover event listeners for trigger and target elements
        if (this._options.triggerType === 'hover') {
            triggerEvents.showEvents.forEach(function (ev) {
                _this._triggerEl.removeEventListener(ev, _this._hoverShowTriggerElHandler);
                _this._targetEl.removeEventListener(ev, _this._hoverShowTargetElHandler);
            });
            triggerEvents.hideEvents.forEach(function (ev) {
                _this._triggerEl.removeEventListener(ev, _this._hoverHideHandler);
                _this._targetEl.removeEventListener(ev, _this._hoverHideHandler);
            });
        }
        this._popperInstance.destroy();
        this._initialized = false;
    };
    Dropdown.prototype.removeInstance = function () {
        instances_1.default.removeInstance('Dropdown', this._instanceId);
    };
    Dropdown.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Dropdown.prototype._setupEventListeners = function () {
        var _this = this;
        var triggerEvents = this._getTriggerEvents();
        this._clickHandler = function () {
            _this.toggle();
        };
        // click event handling for trigger element
        if (this._options.triggerType === 'click') {
            triggerEvents.showEvents.forEach(function (ev) {
                _this._triggerEl.addEventListener(ev, _this._clickHandler);
            });
        }
        this._hoverShowTriggerElHandler = function (ev) {
            if (ev.type === 'click') {
                _this.toggle();
            }
            else {
                setTimeout(function () {
                    _this.show();
                }, _this._options.delay);
            }
        };
        this._hoverShowTargetElHandler = function () {
            _this.show();
        };
        this._hoverHideHandler = function () {
            setTimeout(function () {
                if (!_this._targetEl.matches(':hover')) {
                    _this.hide();
                }
            }, _this._options.delay);
        };
        // hover event handling for trigger element
        if (this._options.triggerType === 'hover') {
            triggerEvents.showEvents.forEach(function (ev) {
                _this._triggerEl.addEventListener(ev, _this._hoverShowTriggerElHandler);
                _this._targetEl.addEventListener(ev, _this._hoverShowTargetElHandler);
            });
            triggerEvents.hideEvents.forEach(function (ev) {
                _this._triggerEl.addEventListener(ev, _this._hoverHideHandler);
                _this._targetEl.addEventListener(ev, _this._hoverHideHandler);
            });
        }
    };
    Dropdown.prototype._createPopperInstance = function () {
        return (0, core_1.createPopper)(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [
                            this._options.offsetSkidding,
                            this._options.offsetDistance,
                        ],
                    },
                },
            ],
        });
    };
    Dropdown.prototype._setupClickOutsideListener = function () {
        var _this = this;
        this._clickOutsideEventListener = function (ev) {
            _this._handleClickOutside(ev, _this._targetEl);
        };
        document.body.addEventListener('click', this._clickOutsideEventListener, true);
    };
    Dropdown.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener('click', this._clickOutsideEventListener, true);
    };
    Dropdown.prototype._handleClickOutside = function (ev, targetEl) {
        var clickedEl = ev.target;
        // Ignore clicks on the trigger element (ie. a datepicker input)
        var ignoreClickOutsideClass = this._options.ignoreClickOutsideClass;
        var isIgnored = false;
        if (ignoreClickOutsideClass) {
            var ignoredClickOutsideEls = document.querySelectorAll(".".concat(ignoreClickOutsideClass));
            ignoredClickOutsideEls.forEach(function (el) {
                if (el.contains(clickedEl)) {
                    isIgnored = true;
                    return;
                }
            });
        }
        // Ignore clicks on the target element (ie. dropdown itself)
        if (clickedEl !== targetEl &&
            !targetEl.contains(clickedEl) &&
            !this._triggerEl.contains(clickedEl) &&
            !isIgnored &&
            this.isVisible()) {
            this.hide();
        }
    };
    Dropdown.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'click'],
                    hideEvents: ['mouseleave'],
                };
            case 'click':
                return {
                    showEvents: ['click'],
                    hideEvents: [],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['click'],
                    hideEvents: [],
                };
        }
    };
    Dropdown.prototype.toggle = function () {
        if (this.isVisible()) {
            this.hide();
        }
        else {
            this.show();
        }
        this._options.onToggle(this);
    };
    Dropdown.prototype.isVisible = function () {
        return this._visible;
    };
    Dropdown.prototype.show = function () {
        this._targetEl.classList.remove('hidden');
        this._targetEl.classList.add('block');
        this._targetEl.removeAttribute('aria-hidden');
        // Enable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: true },
            ], false) })); });
        this._setupClickOutsideListener();
        // Update its position
        this._popperInstance.update();
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Dropdown.prototype.hide = function () {
        this._targetEl.classList.remove('block');
        this._targetEl.classList.add('hidden');
        this._targetEl.setAttribute('aria-hidden', 'true');
        // Disable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: false },
            ], false) })); });
        this._visible = false;
        this._removeClickOutsideListener();
        // callback function
        this._options.onHide(this);
    };
    Dropdown.prototype.updateOnShow = function (callback) {
        this._options.onShow = callback;
    };
    Dropdown.prototype.updateOnHide = function (callback) {
        this._options.onHide = callback;
    };
    Dropdown.prototype.updateOnToggle = function (callback) {
        this._options.onToggle = callback;
    };
    return Dropdown;
}());
function initDropdowns() {
    document
        .querySelectorAll('[data-dropdown-toggle]')
        .forEach(function ($triggerEl) {
        var dropdownId = $triggerEl.getAttribute('data-dropdown-toggle');
        var $dropdownEl = document.getElementById(dropdownId);
        if ($dropdownEl) {
            var placement = $triggerEl.getAttribute('data-dropdown-placement');
            var offsetSkidding = $triggerEl.getAttribute('data-dropdown-offset-skidding');
            var offsetDistance = $triggerEl.getAttribute('data-dropdown-offset-distance');
            var triggerType = $triggerEl.getAttribute('data-dropdown-trigger');
            var delay = $triggerEl.getAttribute('data-dropdown-delay');
            var ignoreClickOutsideClass = $triggerEl.getAttribute('data-dropdown-ignore-click-outside-class');
            new Dropdown($dropdownEl, $triggerEl, {
                placement: placement ? placement : Default.placement,
                triggerType: triggerType
                    ? triggerType
                    : Default.triggerType,
                offsetSkidding: offsetSkidding
                    ? parseInt(offsetSkidding)
                    : Default.offsetSkidding,
                offsetDistance: offsetDistance
                    ? parseInt(offsetDistance)
                    : Default.offsetDistance,
                delay: delay ? parseInt(delay) : Default.delay,
                ignoreClickOutsideClass: ignoreClickOutsideClass
                    ? ignoreClickOutsideClass
                    : Default.ignoreClickOutsideClass,
            });
        }
        else {
            console.error("The dropdown element with id \"".concat(dropdownId, "\" does not exist. Please check the data-dropdown-toggle attribute."));
        }
    });
}
exports.initDropdowns = initDropdowns;
if (typeof window !== 'undefined') {
    window.Dropdown = Dropdown;
    window.initDropdowns = initDropdowns;
}
exports["default"] = Dropdown;


/***/ }),

/***/ 311:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_253736__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initFlowbite = void 0;
var accordion_1 = __nested_webpack_require_253736__(902);
var carousel_1 = __nested_webpack_require_253736__(33);
var clipboard_1 = __nested_webpack_require_253736__(673);
var collapse_1 = __nested_webpack_require_253736__(922);
var dial_1 = __nested_webpack_require_253736__(556);
var dismiss_1 = __nested_webpack_require_253736__(791);
var drawer_1 = __nested_webpack_require_253736__(340);
var dropdown_1 = __nested_webpack_require_253736__(316);
var input_counter_1 = __nested_webpack_require_253736__(656);
var modal_1 = __nested_webpack_require_253736__(16);
var popover_1 = __nested_webpack_require_253736__(903);
var tabs_1 = __nested_webpack_require_253736__(247);
var tooltip_1 = __nested_webpack_require_253736__(671);
var datepicker_1 = __nested_webpack_require_253736__(132);
function initFlowbite() {
    (0, accordion_1.initAccordions)();
    (0, collapse_1.initCollapses)();
    (0, carousel_1.initCarousels)();
    (0, dismiss_1.initDismisses)();
    (0, dropdown_1.initDropdowns)();
    (0, modal_1.initModals)();
    (0, drawer_1.initDrawers)();
    (0, tabs_1.initTabs)();
    (0, tooltip_1.initTooltips)();
    (0, popover_1.initPopovers)();
    (0, dial_1.initDials)();
    (0, input_counter_1.initInputCounters)();
    (0, clipboard_1.initCopyClipboards)();
    (0, datepicker_1.initDatepickers)();
}
exports.initFlowbite = initFlowbite;
if (typeof window !== 'undefined') {
    window.initFlowbite = initFlowbite;
}


/***/ }),

/***/ 656:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_255175__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initInputCounters = void 0;
var instances_1 = __nested_webpack_require_255175__(423);
var Default = {
    minValue: null,
    maxValue: null,
    onIncrement: function () { },
    onDecrement: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var InputCounter = /** @class */ (function () {
    function InputCounter(targetEl, incrementEl, decrementEl, options, instanceOptions) {
        if (targetEl === void 0) { targetEl = null; }
        if (incrementEl === void 0) { incrementEl = null; }
        if (decrementEl === void 0) { decrementEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._incrementEl = incrementEl;
        this._decrementEl = decrementEl;
        this._options = __assign(__assign({}, Default), options);
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('InputCounter', this, this._instanceId, instanceOptions.override);
    }
    InputCounter.prototype.init = function () {
        var _this = this;
        if (this._targetEl && !this._initialized) {
            this._inputHandler = function (event) {
                {
                    var target = event.target;
                    // check if the value is numeric
                    if (!/^\d*$/.test(target.value)) {
                        // Regex to check if the value is numeric
                        target.value = target.value.replace(/[^\d]/g, ''); // Remove non-numeric characters
                    }
                    // check for max value
                    if (_this._options.maxValue !== null &&
                        parseInt(target.value) > _this._options.maxValue) {
                        target.value = _this._options.maxValue.toString();
                    }
                    // check for min value
                    if (_this._options.minValue !== null &&
                        parseInt(target.value) < _this._options.minValue) {
                        target.value = _this._options.minValue.toString();
                    }
                }
            };
            this._incrementClickHandler = function () {
                _this.increment();
            };
            this._decrementClickHandler = function () {
                _this.decrement();
            };
            // Add event listener to restrict input to numeric values only
            this._targetEl.addEventListener('input', this._inputHandler);
            if (this._incrementEl) {
                this._incrementEl.addEventListener('click', this._incrementClickHandler);
            }
            if (this._decrementEl) {
                this._decrementEl.addEventListener('click', this._decrementClickHandler);
            }
            this._initialized = true;
        }
    };
    InputCounter.prototype.destroy = function () {
        if (this._targetEl && this._initialized) {
            this._targetEl.removeEventListener('input', this._inputHandler);
            if (this._incrementEl) {
                this._incrementEl.removeEventListener('click', this._incrementClickHandler);
            }
            if (this._decrementEl) {
                this._decrementEl.removeEventListener('click', this._decrementClickHandler);
            }
            this._initialized = false;
        }
    };
    InputCounter.prototype.removeInstance = function () {
        instances_1.default.removeInstance('InputCounter', this._instanceId);
    };
    InputCounter.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    InputCounter.prototype.getCurrentValue = function () {
        return parseInt(this._targetEl.value) || 0;
    };
    InputCounter.prototype.increment = function () {
        // don't increment if the value is already at the maximum value
        if (this._options.maxValue !== null &&
            this.getCurrentValue() >= this._options.maxValue) {
            return;
        }
        this._targetEl.value = (this.getCurrentValue() + 1).toString();
        this._options.onIncrement(this);
    };
    InputCounter.prototype.decrement = function () {
        // don't decrement if the value is already at the minimum value
        if (this._options.minValue !== null &&
            this.getCurrentValue() <= this._options.minValue) {
            return;
        }
        this._targetEl.value = (this.getCurrentValue() - 1).toString();
        this._options.onDecrement(this);
    };
    InputCounter.prototype.updateOnIncrement = function (callback) {
        this._options.onIncrement = callback;
    };
    InputCounter.prototype.updateOnDecrement = function (callback) {
        this._options.onDecrement = callback;
    };
    return InputCounter;
}());
function initInputCounters() {
    document.querySelectorAll('[data-input-counter]').forEach(function ($targetEl) {
        var targetId = $targetEl.id;
        var $incrementEl = document.querySelector('[data-input-counter-increment="' + targetId + '"]');
        var $decrementEl = document.querySelector('[data-input-counter-decrement="' + targetId + '"]');
        var minValue = $targetEl.getAttribute('data-input-counter-min');
        var maxValue = $targetEl.getAttribute('data-input-counter-max');
        // check if the target element exists
        if ($targetEl) {
            if (!instances_1.default.instanceExists('InputCounter', $targetEl.getAttribute('id'))) {
                new InputCounter($targetEl, $incrementEl ? $incrementEl : null, $decrementEl ? $decrementEl : null, {
                    minValue: minValue ? parseInt(minValue) : null,
                    maxValue: maxValue ? parseInt(maxValue) : null,
                });
            }
        }
        else {
            console.error("The target element with id \"".concat(targetId, "\" does not exist. Please check the data-input-counter attribute."));
        }
    });
}
exports.initInputCounters = initInputCounters;
if (typeof window !== 'undefined') {
    window.InputCounter = InputCounter;
    window.initInputCounters = initInputCounters;
}
exports["default"] = InputCounter;


/***/ }),

/***/ 16:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_262067__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initModals = void 0;
var instances_1 = __nested_webpack_require_262067__(423);
var Default = {
    placement: 'center',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    backdrop: 'dynamic',
    closable: true,
    onHide: function () { },
    onShow: function () { },
    onToggle: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Modal = /** @class */ (function () {
    function Modal(targetEl, options, instanceOptions) {
        if (targetEl === void 0) { targetEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._eventListenerInstances = [];
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._options = __assign(__assign({}, Default), options);
        this._isHidden = true;
        this._backdropEl = null;
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Modal', this, this._instanceId, instanceOptions.override);
    }
    Modal.prototype.init = function () {
        var _this = this;
        if (this._targetEl && !this._initialized) {
            this._getPlacementClasses().map(function (c) {
                _this._targetEl.classList.add(c);
            });
            this._initialized = true;
        }
    };
    Modal.prototype.destroy = function () {
        if (this._initialized) {
            this.removeAllEventListenerInstances();
            this._destroyBackdropEl();
            this._initialized = false;
        }
    };
    Modal.prototype.removeInstance = function () {
        instances_1.default.removeInstance('Modal', this._instanceId);
    };
    Modal.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Modal.prototype._createBackdrop = function () {
        var _a;
        if (this._isHidden) {
            var backdropEl = document.createElement('div');
            (_a = backdropEl.classList).add.apply(_a, this._options.backdropClasses.split(' '));
            document.querySelector('body').append(backdropEl);
            this._backdropEl = backdropEl;
        }
    };
    Modal.prototype._destroyBackdropEl = function () {
        if (!this._isHidden && this._backdropEl) {
            this._backdropEl.remove();
            this._backdropEl = null;
        }
    };
    Modal.prototype._setupModalCloseEventListeners = function () {
        var _this = this;
        if (this._options.backdrop === 'dynamic') {
            this._clickOutsideEventListener = function (ev) {
                _this._handleOutsideClick(ev.target);
            };
            this._targetEl.addEventListener('click', this._clickOutsideEventListener, true);
        }
        this._keydownEventListener = function (ev) {
            if (ev.key === 'Escape') {
                _this.hide();
            }
        };
        document.body.addEventListener('keydown', this._keydownEventListener, true);
    };
    Modal.prototype._removeModalCloseEventListeners = function () {
        if (this._options.backdrop === 'dynamic') {
            this._targetEl.removeEventListener('click', this._clickOutsideEventListener, true);
        }
        document.body.removeEventListener('keydown', this._keydownEventListener, true);
    };
    Modal.prototype._handleOutsideClick = function (target) {
        if (target === this._targetEl ||
            (target === this._backdropEl && this.isVisible())) {
            this.hide();
        }
    };
    Modal.prototype._getPlacementClasses = function () {
        switch (this._options.placement) {
            // top
            case 'top-left':
                return ['justify-start', 'items-start'];
            case 'top-center':
                return ['justify-center', 'items-start'];
            case 'top-right':
                return ['justify-end', 'items-start'];
            // center
            case 'center-left':
                return ['justify-start', 'items-center'];
            case 'center':
                return ['justify-center', 'items-center'];
            case 'center-right':
                return ['justify-end', 'items-center'];
            // bottom
            case 'bottom-left':
                return ['justify-start', 'items-end'];
            case 'bottom-center':
                return ['justify-center', 'items-end'];
            case 'bottom-right':
                return ['justify-end', 'items-end'];
            default:
                return ['justify-center', 'items-center'];
        }
    };
    Modal.prototype.toggle = function () {
        if (this._isHidden) {
            this.show();
        }
        else {
            this.hide();
        }
        // callback function
        this._options.onToggle(this);
    };
    Modal.prototype.show = function () {
        if (this.isHidden) {
            this._targetEl.classList.add('flex');
            this._targetEl.classList.remove('hidden');
            this._targetEl.setAttribute('aria-modal', 'true');
            this._targetEl.setAttribute('role', 'dialog');
            this._targetEl.removeAttribute('aria-hidden');
            this._createBackdrop();
            this._isHidden = false;
            // Add keyboard event listener to the document
            if (this._options.closable) {
                this._setupModalCloseEventListeners();
            }
            // prevent body scroll
            document.body.classList.add('overflow-hidden');
            // callback function
            this._options.onShow(this);
        }
    };
    Modal.prototype.hide = function () {
        if (this.isVisible) {
            this._targetEl.classList.add('hidden');
            this._targetEl.classList.remove('flex');
            this._targetEl.setAttribute('aria-hidden', 'true');
            this._targetEl.removeAttribute('aria-modal');
            this._targetEl.removeAttribute('role');
            this._destroyBackdropEl();
            this._isHidden = true;
            // re-apply body scroll
            document.body.classList.remove('overflow-hidden');
            if (this._options.closable) {
                this._removeModalCloseEventListeners();
            }
            // callback function
            this._options.onHide(this);
        }
    };
    Modal.prototype.isVisible = function () {
        return !this._isHidden;
    };
    Modal.prototype.isHidden = function () {
        return this._isHidden;
    };
    Modal.prototype.addEventListenerInstance = function (element, type, handler) {
        this._eventListenerInstances.push({
            element: element,
            type: type,
            handler: handler,
        });
    };
    Modal.prototype.removeAllEventListenerInstances = function () {
        this._eventListenerInstances.map(function (eventListenerInstance) {
            eventListenerInstance.element.removeEventListener(eventListenerInstance.type, eventListenerInstance.handler);
        });
        this._eventListenerInstances = [];
    };
    Modal.prototype.getAllEventListenerInstances = function () {
        return this._eventListenerInstances;
    };
    Modal.prototype.updateOnShow = function (callback) {
        this._options.onShow = callback;
    };
    Modal.prototype.updateOnHide = function (callback) {
        this._options.onHide = callback;
    };
    Modal.prototype.updateOnToggle = function (callback) {
        this._options.onToggle = callback;
    };
    return Modal;
}());
function initModals() {
    // initiate modal based on data-modal-target
    document.querySelectorAll('[data-modal-target]').forEach(function ($triggerEl) {
        var modalId = $triggerEl.getAttribute('data-modal-target');
        var $modalEl = document.getElementById(modalId);
        if ($modalEl) {
            var placement = $modalEl.getAttribute('data-modal-placement');
            var backdrop = $modalEl.getAttribute('data-modal-backdrop');
            new Modal($modalEl, {
                placement: placement ? placement : Default.placement,
                backdrop: backdrop ? backdrop : Default.backdrop,
            });
        }
        else {
            console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
        }
    });
    // toggle modal visibility
    document.querySelectorAll('[data-modal-toggle]').forEach(function ($triggerEl) {
        var modalId = $triggerEl.getAttribute('data-modal-toggle');
        var $modalEl = document.getElementById(modalId);
        if ($modalEl) {
            var modal_1 = instances_1.default.getInstance('Modal', modalId);
            if (modal_1) {
                var toggleModal = function () {
                    modal_1.toggle();
                };
                $triggerEl.addEventListener('click', toggleModal);
                modal_1.addEventListenerInstance($triggerEl, 'click', toggleModal);
            }
            else {
                console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
            }
        }
        else {
            console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"));
        }
    });
    // show modal on click if exists based on id
    document.querySelectorAll('[data-modal-show]').forEach(function ($triggerEl) {
        var modalId = $triggerEl.getAttribute('data-modal-show');
        var $modalEl = document.getElementById(modalId);
        if ($modalEl) {
            var modal_2 = instances_1.default.getInstance('Modal', modalId);
            if (modal_2) {
                var showModal = function () {
                    modal_2.show();
                };
                $triggerEl.addEventListener('click', showModal);
                modal_2.addEventListenerInstance($triggerEl, 'click', showModal);
            }
            else {
                console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
            }
        }
        else {
            console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
        }
    });
    // hide modal on click if exists based on id
    document.querySelectorAll('[data-modal-hide]').forEach(function ($triggerEl) {
        var modalId = $triggerEl.getAttribute('data-modal-hide');
        var $modalEl = document.getElementById(modalId);
        if ($modalEl) {
            var modal_3 = instances_1.default.getInstance('Modal', modalId);
            if (modal_3) {
                var hideModal = function () {
                    modal_3.hide();
                };
                $triggerEl.addEventListener('click', hideModal);
                modal_3.addEventListenerInstance($triggerEl, 'click', hideModal);
            }
            else {
                console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
            }
        }
        else {
            console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
        }
    });
}
exports.initModals = initModals;
if (typeof window !== 'undefined') {
    window.Modal = Modal;
    window.initModals = initModals;
}
exports["default"] = Modal;


/***/ }),

/***/ 903:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_274374__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initPopovers = void 0;
/* eslint-disable @typescript-eslint/no-empty-function */
var core_1 = __nested_webpack_require_274374__(853);
var instances_1 = __nested_webpack_require_274374__(423);
var Default = {
    placement: 'top',
    offset: 10,
    triggerType: 'hover',
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Popover = /** @class */ (function () {
    function Popover(targetEl, triggerEl, options, instanceOptions) {
        if (targetEl === void 0) { targetEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = __assign(__assign({}, Default), options);
        this._popperInstance = null;
        this._visible = false;
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Popover', this, instanceOptions.id ? instanceOptions.id : this._targetEl.id, instanceOptions.override);
    }
    Popover.prototype.init = function () {
        if (this._triggerEl && this._targetEl && !this._initialized) {
            this._setupEventListeners();
            this._popperInstance = this._createPopperInstance();
            this._initialized = true;
        }
    };
    Popover.prototype.destroy = function () {
        var _this = this;
        if (this._initialized) {
            // remove event listeners associated with the trigger element and target element
            var triggerEvents = this._getTriggerEvents();
            triggerEvents.showEvents.forEach(function (ev) {
                _this._triggerEl.removeEventListener(ev, _this._showHandler);
                _this._targetEl.removeEventListener(ev, _this._showHandler);
            });
            triggerEvents.hideEvents.forEach(function (ev) {
                _this._triggerEl.removeEventListener(ev, _this._hideHandler);
                _this._targetEl.removeEventListener(ev, _this._hideHandler);
            });
            // remove event listeners for keydown
            this._removeKeydownListener();
            // remove event listeners for click outside
            this._removeClickOutsideListener();
            // destroy the Popper instance if you have one (assuming this._popperInstance is the Popper instance)
            if (this._popperInstance) {
                this._popperInstance.destroy();
            }
            this._initialized = false;
        }
    };
    Popover.prototype.removeInstance = function () {
        instances_1.default.removeInstance('Popover', this._instanceId);
    };
    Popover.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Popover.prototype._setupEventListeners = function () {
        var _this = this;
        var triggerEvents = this._getTriggerEvents();
        this._showHandler = function () {
            _this.show();
        };
        this._hideHandler = function () {
            setTimeout(function () {
                if (!_this._targetEl.matches(':hover')) {
                    _this.hide();
                }
            }, 100);
        };
        triggerEvents.showEvents.forEach(function (ev) {
            _this._triggerEl.addEventListener(ev, _this._showHandler);
            _this._targetEl.addEventListener(ev, _this._showHandler);
        });
        triggerEvents.hideEvents.forEach(function (ev) {
            _this._triggerEl.addEventListener(ev, _this._hideHandler);
            _this._targetEl.addEventListener(ev, _this._hideHandler);
        });
    };
    Popover.prototype._createPopperInstance = function () {
        return (0, core_1.createPopper)(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, this._options.offset],
                    },
                },
            ],
        });
    };
    Popover.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
            case 'click':
                return {
                    showEvents: ['click', 'focus'],
                    hideEvents: ['focusout', 'blur'],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
        }
    };
    Popover.prototype._setupKeydownListener = function () {
        var _this = this;
        this._keydownEventListener = function (ev) {
            if (ev.key === 'Escape') {
                _this.hide();
            }
        };
        document.body.addEventListener('keydown', this._keydownEventListener, true);
    };
    Popover.prototype._removeKeydownListener = function () {
        document.body.removeEventListener('keydown', this._keydownEventListener, true);
    };
    Popover.prototype._setupClickOutsideListener = function () {
        var _this = this;
        this._clickOutsideEventListener = function (ev) {
            _this._handleClickOutside(ev, _this._targetEl);
        };
        document.body.addEventListener('click', this._clickOutsideEventListener, true);
    };
    Popover.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener('click', this._clickOutsideEventListener, true);
    };
    Popover.prototype._handleClickOutside = function (ev, targetEl) {
        var clickedEl = ev.target;
        if (clickedEl !== targetEl &&
            !targetEl.contains(clickedEl) &&
            !this._triggerEl.contains(clickedEl) &&
            this.isVisible()) {
            this.hide();
        }
    };
    Popover.prototype.isVisible = function () {
        return this._visible;
    };
    Popover.prototype.toggle = function () {
        if (this.isVisible()) {
            this.hide();
        }
        else {
            this.show();
        }
        this._options.onToggle(this);
    };
    Popover.prototype.show = function () {
        this._targetEl.classList.remove('opacity-0', 'invisible');
        this._targetEl.classList.add('opacity-100', 'visible');
        // Enable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: true },
            ], false) })); });
        // handle click outside
        this._setupClickOutsideListener();
        // handle esc keydown
        this._setupKeydownListener();
        // Update its position
        this._popperInstance.update();
        // set visibility to true
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Popover.prototype.hide = function () {
        this._targetEl.classList.remove('opacity-100', 'visible');
        this._targetEl.classList.add('opacity-0', 'invisible');
        // Disable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: false },
            ], false) })); });
        // handle click outside
        this._removeClickOutsideListener();
        // handle esc keydown
        this._removeKeydownListener();
        // set visibility to false
        this._visible = false;
        // callback function
        this._options.onHide(this);
    };
    Popover.prototype.updateOnShow = function (callback) {
        this._options.onShow = callback;
    };
    Popover.prototype.updateOnHide = function (callback) {
        this._options.onHide = callback;
    };
    Popover.prototype.updateOnToggle = function (callback) {
        this._options.onToggle = callback;
    };
    return Popover;
}());
function initPopovers() {
    document.querySelectorAll('[data-popover-target]').forEach(function ($triggerEl) {
        var popoverID = $triggerEl.getAttribute('data-popover-target');
        var $popoverEl = document.getElementById(popoverID);
        if ($popoverEl) {
            var triggerType = $triggerEl.getAttribute('data-popover-trigger');
            var placement = $triggerEl.getAttribute('data-popover-placement');
            var offset = $triggerEl.getAttribute('data-popover-offset');
            new Popover($popoverEl, $triggerEl, {
                placement: placement ? placement : Default.placement,
                offset: offset ? parseInt(offset) : Default.offset,
                triggerType: triggerType
                    ? triggerType
                    : Default.triggerType,
            });
        }
        else {
            console.error("The popover element with id \"".concat(popoverID, "\" does not exist. Please check the data-popover-target attribute."));
        }
    });
}
exports.initPopovers = initPopovers;
if (typeof window !== 'undefined') {
    window.Popover = Popover;
    window.initPopovers = initPopovers;
}
exports["default"] = Popover;


/***/ }),

/***/ 247:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_285107__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initTabs = void 0;
var instances_1 = __nested_webpack_require_285107__(423);
var Default = {
    defaultTabId: null,
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Tabs = /** @class */ (function () {
    function Tabs(tabsEl, items, options, instanceOptions) {
        if (tabsEl === void 0) { tabsEl = null; }
        if (items === void 0) { items = []; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id ? instanceOptions.id : tabsEl.id;
        this._tabsEl = tabsEl;
        this._items = items;
        this._activeTab = options ? this.getTab(options.defaultTabId) : null;
        this._options = __assign(__assign({}, Default), options);
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Tabs', this, this._instanceId, instanceOptions.override);
    }
    Tabs.prototype.init = function () {
        var _this = this;
        if (this._items.length && !this._initialized) {
            // set the first tab as active if not set by explicitly
            if (!this._activeTab) {
                this.setActiveTab(this._items[0]);
            }
            // force show the first default tab
            this.show(this._activeTab.id, true);
            // show tab content based on click
            this._items.map(function (tab) {
                tab.triggerEl.addEventListener('click', function (event) {
                    event.preventDefault();
                    _this.show(tab.id);
                });
            });
        }
    };
    Tabs.prototype.destroy = function () {
        if (this._initialized) {
            this._initialized = false;
        }
    };
    Tabs.prototype.removeInstance = function () {
        this.destroy();
        instances_1.default.removeInstance('Tabs', this._instanceId);
    };
    Tabs.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Tabs.prototype.getActiveTab = function () {
        return this._activeTab;
    };
    Tabs.prototype.setActiveTab = function (tab) {
        this._activeTab = tab;
    };
    Tabs.prototype.getTab = function (id) {
        return this._items.filter(function (t) { return t.id === id; })[0];
    };
    Tabs.prototype.show = function (id, forceShow) {
        var _a, _b;
        var _this = this;
        if (forceShow === void 0) { forceShow = false; }
        var tab = this.getTab(id);
        // don't do anything if already active
        if (tab === this._activeTab && !forceShow) {
            return;
        }
        // hide other tabs
        this._items.map(function (t) {
            var _a, _b;
            if (t !== tab) {
                (_a = t.triggerEl.classList).remove.apply(_a, _this._options.activeClasses.split(' '));
                (_b = t.triggerEl.classList).add.apply(_b, _this._options.inactiveClasses.split(' '));
                t.targetEl.classList.add('hidden');
                t.triggerEl.setAttribute('aria-selected', 'false');
            }
        });
        // show active tab
        (_a = tab.triggerEl.classList).add.apply(_a, this._options.activeClasses.split(' '));
        (_b = tab.triggerEl.classList).remove.apply(_b, this._options.inactiveClasses.split(' '));
        tab.triggerEl.setAttribute('aria-selected', 'true');
        tab.targetEl.classList.remove('hidden');
        this.setActiveTab(tab);
        // callback function
        this._options.onShow(this, tab);
    };
    Tabs.prototype.updateOnShow = function (callback) {
        this._options.onShow = callback;
    };
    return Tabs;
}());
function initTabs() {
    document.querySelectorAll('[data-tabs-toggle]').forEach(function ($parentEl) {
        var tabItems = [];
        var activeClasses = $parentEl.getAttribute('data-tabs-active-classes');
        var inactiveClasses = $parentEl.getAttribute('data-tabs-inactive-classes');
        var defaultTabId = null;
        $parentEl
            .querySelectorAll('[role="tab"]')
            .forEach(function ($triggerEl) {
            var isActive = $triggerEl.getAttribute('aria-selected') === 'true';
            var tab = {
                id: $triggerEl.getAttribute('data-tabs-target'),
                triggerEl: $triggerEl,
                targetEl: document.querySelector($triggerEl.getAttribute('data-tabs-target')),
            };
            tabItems.push(tab);
            if (isActive) {
                defaultTabId = tab.id;
            }
        });
        new Tabs($parentEl, tabItems, {
            defaultTabId: defaultTabId,
            activeClasses: activeClasses
                ? activeClasses
                : Default.activeClasses,
            inactiveClasses: inactiveClasses
                ? inactiveClasses
                : Default.inactiveClasses,
        });
    });
}
exports.initTabs = initTabs;
if (typeof window !== 'undefined') {
    window.Tabs = Tabs;
    window.initTabs = initTabs;
}
exports["default"] = Tabs;


/***/ }),

/***/ 671:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_291099__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initTooltips = void 0;
/* eslint-disable @typescript-eslint/no-empty-function */
var core_1 = __nested_webpack_require_291099__(853);
var instances_1 = __nested_webpack_require_291099__(423);
var Default = {
    placement: 'top',
    triggerType: 'hover',
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var DefaultInstanceOptions = {
    id: null,
    override: true,
};
var Tooltip = /** @class */ (function () {
    function Tooltip(targetEl, triggerEl, options, instanceOptions) {
        if (targetEl === void 0) { targetEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (options === void 0) { options = Default; }
        if (instanceOptions === void 0) { instanceOptions = DefaultInstanceOptions; }
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = __assign(__assign({}, Default), options);
        this._popperInstance = null;
        this._visible = false;
        this._initialized = false;
        this.init();
        instances_1.default.addInstance('Tooltip', this, this._instanceId, instanceOptions.override);
    }
    Tooltip.prototype.init = function () {
        if (this._triggerEl && this._targetEl && !this._initialized) {
            this._setupEventListeners();
            this._popperInstance = this._createPopperInstance();
            this._initialized = true;
        }
    };
    Tooltip.prototype.destroy = function () {
        var _this = this;
        if (this._initialized) {
            // remove event listeners associated with the trigger element
            var triggerEvents = this._getTriggerEvents();
            triggerEvents.showEvents.forEach(function (ev) {
                _this._triggerEl.removeEventListener(ev, _this._showHandler);
            });
            triggerEvents.hideEvents.forEach(function (ev) {
                _this._triggerEl.removeEventListener(ev, _this._hideHandler);
            });
            // remove event listeners for keydown
            this._removeKeydownListener();
            // remove event listeners for click outside
            this._removeClickOutsideListener();
            // destroy the Popper instance if you have one (assuming this._popperInstance is the Popper instance)
            if (this._popperInstance) {
                this._popperInstance.destroy();
            }
            this._initialized = false;
        }
    };
    Tooltip.prototype.removeInstance = function () {
        instances_1.default.removeInstance('Tooltip', this._instanceId);
    };
    Tooltip.prototype.destroyAndRemoveInstance = function () {
        this.destroy();
        this.removeInstance();
    };
    Tooltip.prototype._setupEventListeners = function () {
        var _this = this;
        var triggerEvents = this._getTriggerEvents();
        this._showHandler = function () {
            _this.show();
        };
        this._hideHandler = function () {
            _this.hide();
        };
        triggerEvents.showEvents.forEach(function (ev) {
            _this._triggerEl.addEventListener(ev, _this._showHandler);
        });
        triggerEvents.hideEvents.forEach(function (ev) {
            _this._triggerEl.addEventListener(ev, _this._hideHandler);
        });
    };
    Tooltip.prototype._createPopperInstance = function () {
        return (0, core_1.createPopper)(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    },
                },
            ],
        });
    };
    Tooltip.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
            case 'click':
                return {
                    showEvents: ['click', 'focus'],
                    hideEvents: ['focusout', 'blur'],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
        }
    };
    Tooltip.prototype._setupKeydownListener = function () {
        var _this = this;
        this._keydownEventListener = function (ev) {
            if (ev.key === 'Escape') {
                _this.hide();
            }
        };
        document.body.addEventListener('keydown', this._keydownEventListener, true);
    };
    Tooltip.prototype._removeKeydownListener = function () {
        document.body.removeEventListener('keydown', this._keydownEventListener, true);
    };
    Tooltip.prototype._setupClickOutsideListener = function () {
        var _this = this;
        this._clickOutsideEventListener = function (ev) {
            _this._handleClickOutside(ev, _this._targetEl);
        };
        document.body.addEventListener('click', this._clickOutsideEventListener, true);
    };
    Tooltip.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener('click', this._clickOutsideEventListener, true);
    };
    Tooltip.prototype._handleClickOutside = function (ev, targetEl) {
        var clickedEl = ev.target;
        if (clickedEl !== targetEl &&
            !targetEl.contains(clickedEl) &&
            !this._triggerEl.contains(clickedEl) &&
            this.isVisible()) {
            this.hide();
        }
    };
    Tooltip.prototype.isVisible = function () {
        return this._visible;
    };
    Tooltip.prototype.toggle = function () {
        if (this.isVisible()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Tooltip.prototype.show = function () {
        this._targetEl.classList.remove('opacity-0', 'invisible');
        this._targetEl.classList.add('opacity-100', 'visible');
        // Enable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: true },
            ], false) })); });
        // handle click outside
        this._setupClickOutsideListener();
        // handle esc keydown
        this._setupKeydownListener();
        // Update its position
        this._popperInstance.update();
        // set visibility
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Tooltip.prototype.hide = function () {
        this._targetEl.classList.remove('opacity-100', 'visible');
        this._targetEl.classList.add('opacity-0', 'invisible');
        // Disable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: false },
            ], false) })); });
        // handle click outside
        this._removeClickOutsideListener();
        // handle esc keydown
        this._removeKeydownListener();
        // set visibility
        this._visible = false;
        // callback function
        this._options.onHide(this);
    };
    Tooltip.prototype.updateOnShow = function (callback) {
        this._options.onShow = callback;
    };
    Tooltip.prototype.updateOnHide = function (callback) {
        this._options.onHide = callback;
    };
    Tooltip.prototype.updateOnToggle = function (callback) {
        this._options.onToggle = callback;
    };
    return Tooltip;
}());
function initTooltips() {
    document.querySelectorAll('[data-tooltip-target]').forEach(function ($triggerEl) {
        var tooltipId = $triggerEl.getAttribute('data-tooltip-target');
        var $tooltipEl = document.getElementById(tooltipId);
        if ($tooltipEl) {
            var triggerType = $triggerEl.getAttribute('data-tooltip-trigger');
            var placement = $triggerEl.getAttribute('data-tooltip-placement');
            new Tooltip($tooltipEl, $triggerEl, {
                placement: placement ? placement : Default.placement,
                triggerType: triggerType
                    ? triggerType
                    : Default.triggerType,
            });
        }
        else {
            console.error("The tooltip element with id \"".concat(tooltipId, "\" does not exist. Please check the data-tooltip-target attribute."));
        }
    });
}
exports.initTooltips = initTooltips;
if (typeof window !== 'undefined') {
    window.Tooltip = Tooltip;
    window.initTooltips = initTooltips;
}
exports["default"] = Tooltip;


/***/ }),

/***/ 947:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Events = /** @class */ (function () {
    function Events(eventType, eventFunctions) {
        if (eventFunctions === void 0) { eventFunctions = []; }
        this._eventType = eventType;
        this._eventFunctions = eventFunctions;
    }
    Events.prototype.init = function () {
        var _this = this;
        this._eventFunctions.forEach(function (eventFunction) {
            if (typeof window !== 'undefined') {
                window.addEventListener(_this._eventType, eventFunction);
            }
        });
    };
    return Events;
}());
exports["default"] = Events;


/***/ }),

/***/ 423:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Instances = /** @class */ (function () {
    function Instances() {
        this._instances = {
            Accordion: {},
            Carousel: {},
            Collapse: {},
            Dial: {},
            Dismiss: {},
            Drawer: {},
            Dropdown: {},
            Modal: {},
            Popover: {},
            Tabs: {},
            Tooltip: {},
            InputCounter: {},
            CopyClipboard: {},
            Datepicker: {},
        };
    }
    Instances.prototype.addInstance = function (component, instance, id, override) {
        if (override === void 0) { override = false; }
        if (!this._instances[component]) {
            console.warn("Flowbite: Component ".concat(component, " does not exist."));
            return false;
        }
        if (this._instances[component][id] && !override) {
            console.warn("Flowbite: Instance with ID ".concat(id, " already exists."));
            return;
        }
        if (override && this._instances[component][id]) {
            this._instances[component][id].destroyAndRemoveInstance();
        }
        this._instances[component][id ? id : this._generateRandomId()] =
            instance;
    };
    Instances.prototype.getAllInstances = function () {
        return this._instances;
    };
    Instances.prototype.getInstances = function (component) {
        if (!this._instances[component]) {
            console.warn("Flowbite: Component ".concat(component, " does not exist."));
            return false;
        }
        return this._instances[component];
    };
    Instances.prototype.getInstance = function (component, id) {
        if (!this._componentAndInstanceCheck(component, id)) {
            return;
        }
        if (!this._instances[component][id]) {
            console.warn("Flowbite: Instance with ID ".concat(id, " does not exist."));
            return;
        }
        return this._instances[component][id];
    };
    Instances.prototype.destroyAndRemoveInstance = function (component, id) {
        if (!this._componentAndInstanceCheck(component, id)) {
            return;
        }
        this.destroyInstanceObject(component, id);
        this.removeInstance(component, id);
    };
    Instances.prototype.removeInstance = function (component, id) {
        if (!this._componentAndInstanceCheck(component, id)) {
            return;
        }
        delete this._instances[component][id];
    };
    Instances.prototype.destroyInstanceObject = function (component, id) {
        if (!this._componentAndInstanceCheck(component, id)) {
            return;
        }
        this._instances[component][id].destroy();
    };
    Instances.prototype.instanceExists = function (component, id) {
        if (!this._instances[component]) {
            return false;
        }
        if (!this._instances[component][id]) {
            return false;
        }
        return true;
    };
    Instances.prototype._generateRandomId = function () {
        return Math.random().toString(36).substr(2, 9);
    };
    Instances.prototype._componentAndInstanceCheck = function (component, id) {
        if (!this._instances[component]) {
            console.warn("Flowbite: Component ".concat(component, " does not exist."));
            return false;
        }
        if (!this._instances[component][id]) {
            console.warn("Flowbite: Instance with ID ".concat(id, " does not exist."));
            return false;
        }
        return true;
    };
    return Instances;
}());
var instances = new Instances();
exports["default"] = instances;
if (typeof window !== 'undefined') {
    window.FlowbiteInstances = instances;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_305798__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_305798__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_305798__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_305798__.o(definition, key) && !__nested_webpack_require_305798__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_305798__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_305798__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __nested_webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
__nested_webpack_require_305798__(647);
// core components
var accordion_1 = __nested_webpack_require_305798__(902);
var carousel_1 = __nested_webpack_require_305798__(33);
var collapse_1 = __nested_webpack_require_305798__(922);
var dial_1 = __nested_webpack_require_305798__(556);
var dismiss_1 = __nested_webpack_require_305798__(791);
var drawer_1 = __nested_webpack_require_305798__(340);
var dropdown_1 = __nested_webpack_require_305798__(316);
var modal_1 = __nested_webpack_require_305798__(16);
var popover_1 = __nested_webpack_require_305798__(903);
var tabs_1 = __nested_webpack_require_305798__(247);
var tooltip_1 = __nested_webpack_require_305798__(671);
var input_counter_1 = __nested_webpack_require_305798__(656);
var clipboard_1 = __nested_webpack_require_305798__(673);
var datepicker_1 = __nested_webpack_require_305798__(132);
__nested_webpack_require_305798__(311);
var events_1 = __nested_webpack_require_305798__(947);
var events = new events_1.default('load', [
    accordion_1.initAccordions,
    collapse_1.initCollapses,
    carousel_1.initCarousels,
    dismiss_1.initDismisses,
    dropdown_1.initDropdowns,
    modal_1.initModals,
    drawer_1.initDrawers,
    tabs_1.initTabs,
    tooltip_1.initTooltips,
    popover_1.initPopovers,
    dial_1.initDials,
    clipboard_1.initCopyClipboards,
    input_counter_1.initInputCounters,
    datepicker_1.initDatepickers,
]);
events.init();
exports["default"] = {
    Accordion: accordion_1.default,
    Carousel: carousel_1.default,
    Collapse: collapse_1.default,
    Dial: dial_1.default,
    Drawer: drawer_1.default,
    Dismiss: dismiss_1.default,
    Dropdown: dropdown_1.default,
    Modal: modal_1.default,
    Popover: popover_1.default,
    Tabs: tabs_1.default,
    Tooltip: tooltip_1.default,
    InputCounter: input_counter_1.default,
    CopyClipboard: clipboard_1.default,
    Datepicker: datepicker_1.default,
    Events: events_1.default,
};

}();
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=flowbite.js.map

/***/ }),

/***/ 4:
/***/ (() => {

const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

const themeToggleBtn = document.getElementById('theme-toggle');

let event = new Event('dark-mode');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

    document.dispatchEvent(event);
    
});


/***/ }),

/***/ 24:
/***/ (() => {

const sidebar = document.getElementById('sidebar');

if (sidebar) {
    const toggleSidebarMobile = (sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose) => {
        sidebar.classList.toggle('hidden');
        sidebarBackdrop.classList.toggle('hidden');
        toggleSidebarMobileHamburger.classList.toggle('hidden');
        toggleSidebarMobileClose.classList.toggle('hidden');
    }
    
    const toggleSidebarMobileEl = document.getElementById('toggleSidebarMobile');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const toggleSidebarMobileHamburger = document.getElementById('toggleSidebarMobileHamburger');
    const toggleSidebarMobileClose = document.getElementById('toggleSidebarMobileClose');
    const toggleSidebarMobileSearch = document.getElementById('toggleSidebarMobileSearch');
    
    toggleSidebarMobileSearch.addEventListener('click', () => {
        toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
    });
    
    toggleSidebarMobileEl.addEventListener('click', () => {
        toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
    });
    
    sidebarBackdrop.addEventListener('click', () => {
        toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/flowbite/dist/flowbite.js
var flowbite = __webpack_require__(692);
// EXTERNAL MODULE: ./src/sidebar.js
var sidebar = __webpack_require__(24);
// EXTERNAL MODULE: ./node_modules/apexcharts/dist/apexcharts.common.js
var apexcharts_common = __webpack_require__(781);
var apexcharts_common_default = /*#__PURE__*/__webpack_require__.n(apexcharts_common);
;// ./src/charts.js


const getMainChartOptions = () => {
	let mainChartColors = {}

	if (document.documentElement.classList.contains('dark')) {
		mainChartColors = {
			borderColor: '#374151',
			labelColor: '#9CA3AF',
			opacityFrom: 0,
			opacityTo: 0.15,
		};
	} else {
		mainChartColors = {
			borderColor: '#F3F4F6',
			labelColor: '#6B7280',
			opacityFrom: 0.45,
			opacityTo: 0,
		}
	}

	return {
		chart: {
			height: 420,
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			foreColor: mainChartColors.labelColor,
			toolbar: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				enabled: true,
				opacityFrom: mainChartColors.opacityFrom,
				opacityTo: mainChartColors.opacityTo
			}
		},
		dataLabels: {
			enabled: false
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		grid: {
			show: true,
			borderColor: mainChartColors.borderColor,
			strokeDashArray: 1,
			padding: {
				left: 35,
				bottom: 15
			}
		},
		series: [
			{
				name: 'Revenue',
				data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
				color: '#1A56DB'
			},
			{
				name: 'Revenue (previous period)',
				data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
				color: '#FDBA8C'
			}
		],
		markers: {
			size: 5,
			strokeColors: '#ffffff',
			hover: {
				size: undefined,
				sizeOffset: 3
			}
		},
		xaxis: {
			categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
			labels: {
				style: {
					colors: [mainChartColors.labelColor],
					fontSize: '14px',
					fontWeight: 500,
				},
			},
			axisBorder: {
				color: mainChartColors.borderColor,
			},
			axisTicks: {
				color: mainChartColors.borderColor,
			},
			crosshairs: {
				show: true,
				position: 'back',
				stroke: {
					color: mainChartColors.borderColor,
					width: 1,
					dashArray: 10,
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: [mainChartColors.labelColor],
					fontSize: '14px',
					fontWeight: 500,
				},
				formatter: function (value) {
					return '$' + value;
				}
			},
		},
		legend: {
			fontSize: '14px',
			fontWeight: 500,
			fontFamily: 'Inter, sans-serif',
			labels: {
				colors: [mainChartColors.labelColor]
			},
			itemMargin: {
				horizontal: 10
			}
		},
		responsive: [
			{
				breakpoint: 1024,
				options: {
					xaxis: {
						labels: {
							show: false
						}
					}
				}
			}
		]
	};
}

if (document.getElementById('main-chart')) {
	const chart = new (apexcharts_common_default())(document.getElementById('main-chart'), getMainChartOptions());
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', function () {
		chart.updateOptions(getMainChartOptions());
	});
}

if (document.getElementById('new-products-chart')) {
	const options = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'Quantity',
				color: '#1A56DB',
				data: [
					{ x: '01 Feb', y: 170 },
					{ x: '02 Feb', y: 180 },
					{ x: '03 Feb', y: 164 },
					{ x: '04 Feb', y: 145 },
					{ x: '05 Feb', y: 194 },
					{ x: '06 Feb', y: 170 },
					{ x: '07 Feb', y: 155 },
				]
			}
		],
		chart: {
			type: 'bar',
			height: '140px',
			fontFamily: 'Inter, sans-serif',
			foreColor: '#4B5563',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				columnWidth: '90%',
				borderRadius: 3
			}
		},
		tooltip: {
			shared : false,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1
				}
			}
		},
		stroke: {
			show: true,
			width: 5,
			colors: ['transparent']
		},
		grid: {
			show: false
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		xaxis: {
			floating: false,
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		yaxis: {
			show: false
		},
		fill: {
			opacity: 1
		}
	};

	const chart = new (apexcharts_common_default())(document.getElementById('new-products-chart'), options);
	chart.render();
}

if (document.getElementById('sales-by-category')) {
	const options = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'Desktop PC',
				color: '#1A56DB',
				data: [
					{ x: '01 Feb', y: 170 },
					{ x: '02 Feb', y: 180 },
					{ x: '03 Feb', y: 164 },
					{ x: '04 Feb', y: 145 },
					{ x: '05 Feb', y: 194 },
					{ x: '06 Feb', y: 170 },
					{ x: '07 Feb', y: 155 },
				]
			},
			{
				name: 'Phones',
				color: '#FDBA8C',
				data: [
					{ x: '01 Feb', y: 120 },
					{ x: '02 Feb', y: 294 },
					{ x: '03 Feb', y: 167 },
					{ x: '04 Feb', y: 179 },
					{ x: '05 Feb', y: 245 },
					{ x: '06 Feb', y: 182 },
					{ x: '07 Feb', y: 143 }
				]
			},
			{
				name: 'Gaming/Console',
				color: '#17B0BD',
				data: [
					{ x: '01 Feb', y: 220 },
					{ x: '02 Feb', y: 194 },
					{ x: '03 Feb', y: 217 },
					{ x: '04 Feb', y: 279 },
					{ x: '05 Feb', y: 215 },
					{ x: '06 Feb', y: 263 },
					{ x: '07 Feb', y: 183 }
				]
			}
		],
		chart: {
			type: 'bar',
			height: '420px',
			fontFamily: 'Inter, sans-serif',
			foreColor: '#4B5563',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				columnWidth: '90%',
				borderRadius: 3
			}
		},
		tooltip: {
			shared : true,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1
				}
			}
		},
		stroke: {
			show: true,
			width: 5,
			colors: ['transparent']
		},
		grid: {
			show: false
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		xaxis: {
			floating: false,
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		yaxis: {
			show: false
		},
		fill: {
			opacity: 1
		}
	};

	const chart = new (apexcharts_common_default())(document.getElementById('sales-by-category'), options);
	chart.render();
}

const getVisitorsChartOptions = () => {
	let visitorsChartColors = {}

	if (document.documentElement.classList.contains('dark')) {
		visitorsChartColors = {
			fillGradientShade: 'dark',
			fillGradientShadeIntensity: 0.45,
		};
	} else {
		visitorsChartColors = {
			fillGradientShade: 'light',
			fillGradientShadeIntensity: 1,
		}
	}

	return {
		series: [{
			name: 'Visitors',
			data: [500, 590, 600, 520, 610, 550, 600]
		}],
		labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
		chart: {
			type: 'area',
			height: '305px',
			fontFamily: 'Inter, sans-serif',
			sparkline: {
				enabled: true
			},
			toolbar: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: visitorsChartColors.fillGradientShade,
				shadeIntensity: visitorsChartColors.fillGradientShadeIntensity
			},
		},
		plotOptions: {
			area: {
				fillTo: 'end'
			}
		},
		theme: {
			monochrome: {
				enabled: true,
				color: '#1A56DB',
			}
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			},
		},
	}
}


const getSignupsChartOptions = () => {
	let signupsChartColors = {}

	if (document.documentElement.classList.contains('dark')) {
		signupsChartColors = {
			backgroundBarColors: ['#374151', '#374151', '#374151', '#374151', '#374151', '#374151', '#374151']
		};
	} else {
		signupsChartColors = {
			backgroundBarColors: ['#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB']
		};
	}

	return {
		series: [{
			name: 'Users',
			data: [1334, 2435, 1753, 1328, 1155, 1632, 1336]
		}],
		labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
		chart: {
			type: 'bar',
			height: '140px',
			foreColor: '#4B5563',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false
			}
		},
		theme: {
			monochrome: {
				enabled: true,
				color: '#1A56DB'
			}
		},
		plotOptions: {
			bar: {
				columnWidth: '25%',
				borderRadius: 3,
				colors: {
					backgroundBarColors: signupsChartColors.backgroundBarColors,
					backgroundBarRadius: 3
				},
			},
			dataLabels: {
				hideOverflowingLabels: false
			}
		},
		xaxis: {
			floating: false,
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			}
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.8
				}
			}
		},
		fill: {
			opacity: 1
		},
		yaxis: {
			show: false
		},
		grid: {
			show: false
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
	};
}

if (document.getElementById('week-signups-chart')) {
	const chart = new (apexcharts_common_default())(document.getElementById('week-signups-chart'), getSignupsChartOptions());
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', function () {
		chart.updateOptions(getSignupsChartOptions());
	});
}

const getTrafficChannelsChartOptions = () => {

	let trafficChannelsChartColors = {}

	if (document.documentElement.classList.contains('dark')) {
		trafficChannelsChartColors = {
			strokeColor: '#1f2937'
		};
	} else {
		trafficChannelsChartColors = {
			strokeColor: '#ffffff'
		}
	}

	return {
		series: [70, 5, 25],
		labels: ['Desktop', 'Tablet', 'Phone'],
		colors: ['#16BDCA', '#FDBA8C', '#1A56DB'],
		chart: {
			type: 'donut',
			height: 400,
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false
			},
		},
		responsive: [{
			breakpoint: 430,
			options: {
			  chart: {
				height: 300
			  }
			}
		}],
		stroke: {
			colors: [trafficChannelsChartColors.strokeColor]
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.9
				}
			}
		},
		tooltip: {
			shared: true,
			followCursor: false,
			fillSeriesColor: false,
			inverseOrder: true,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			},
			x: {
				show: true,
				formatter: function (_, { seriesIndex, w }) {
					const label = w.config.labels[seriesIndex];
					return label
				}
			},
			y: {
				formatter: function (value) {
					return value + '%';
				}
			}
		},
		grid: {
			show: false
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
	};
}

if (document.getElementById('traffic-by-device')) {
	const chart = new (apexcharts_common_default())(document.getElementById('traffic-by-device'), getTrafficChannelsChartOptions());
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', function () {
		chart.updateOptions(getTrafficChannelsChartOptions());
	});
}

// EXTERNAL MODULE: ./src/dark-mode.js
var dark_mode = __webpack_require__(4);
;// ./src/index.js






// Have the courage to follow your heart and intuition.

})();

/******/ })()
;
//# sourceMappingURL=app.bundle.js.map