// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return t.toLowerCase()}function e(t,e,r){return t.replace(e,r)}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,o=Object.prototype,l=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,u=o.__lookupGetter__,c=o.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(t,e)||c.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&a&&a.call(t,e,r.set),t};function p(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"string"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return b&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var d=_()?function(t){var e,r,n,o,l;if(null==t)return s.call(t);r=t[g],l=g,e=null!=(o=t)&&v.call(o,l);try{t[g]=void 0}catch(e){return s.call(t)}return n=s.call(t),e?t[g]=r:delete t[g],n}:function(t){return s.call(t)},j=String.prototype.valueOf;var m=_();function S(t){return"object"==typeof t&&(t instanceof String||(m?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function h(t){return y(t)||S(t)}p(h,"isPrimitive",y),p(h,"isObject",S);var w=/[^a-z0-9]/g;function O(t,e){return t<e?-1:t===e?0:1}function P(r,n){if(!y(r))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("0253R",r));return!!y(n)&&(r=e(t(r),w,""),n=e(t(n),w,""),r.length===n.length&&(r=r.split("").sort(O).join(""))===(n=n.split("").sort(O).join("")))}export{P as default};
//# sourceMappingURL=mod.js.map