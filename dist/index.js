"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=f(function(m,s){
var i=require('@stdlib/string-base-lowercase/dist'),n=require('@stdlib/string-base-replace/dist'),t=require('@stdlib/assert-is-string/dist').isPrimitive,l=require('@stdlib/error-tools-fmtprodmsg/dist'),a=/[^a-z0-9]/g;function u(e,r){return e<r?-1:e===r?0:1}function g(e,r){if(!t(e))throw new TypeError(l('04B3F',e));return!t(r)||(e=n(i(e),a,""),r=n(i(r),a,""),e.length!==r.length)?!1:(e=e.split("").sort(u).join(""),r=r.split("").sort(u).join(""),e===r)}s.exports=g
});var v=o();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
