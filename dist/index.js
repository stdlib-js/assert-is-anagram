"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(f){throw (r=0, f)}};};var o=l(function(p,s){
var i=require('@stdlib/string-base-lowercase/dist'),n=require('@stdlib/string-base-replace/dist'),t=require('@stdlib/assert-is-string/dist').isPrimitive,g=require('@stdlib/error-tools-fmtprodmsg/dist'),a=/[^a-z0-9]/g;function u(e,r){return e<r?-1:e===r?0:1}function v(e,r){if(!t(e))throw new TypeError(g('04B3F',e));return!t(r)||(e=n(i(e),a,""),r=n(i(r),a,""),e.length!==r.length)?!1:(e=e.split("").sort(u).join(""),r=r.split("").sort(u).join(""),e===r)}s.exports=v
});var c=o();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
