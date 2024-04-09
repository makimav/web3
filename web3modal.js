/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e,t,r,i,n={7526:(e,t)=>{"use strict";t.byteLength=function(e){var t=s(e),r=t[0],i=t[1];return 3*(r+i)/4-i},t.toByteArray=function(e){var t,r,o=s(e),a=o[0],c=o[1],l=new n(function(e,t,r){return 3*(t+r)/4-r}(0,a,c)),u=0,d=c>0?a-4:a;for(r=0;r<d;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===c&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===c&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},t.fromByteArray=function(e){for(var t,i=e.length,n=i%3,o=[],a=16383,s=0,l=i-n;s<l;s+=a)o.push(c(e,s,s+a>l?l:s+a));return 1===n?(t=e[i-1],o.push(r[t>>2]+r[t<<4&63]+"==")):2===n&&(t=(e[i-2]<<8)+e[i-1],o.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")),o.join("")};for(var r=[],i=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0;a<64;++a)r[a]=o[a],i[o.charCodeAt(a)]=a;function s(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function c(e,t,i){for(var n,o,a=[],s=t;s<i;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(r[(o=n)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return a.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},8287:(e,t,r)=>{"use strict";const i=r(7526),n=r(251),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=function(e){return+e!=e&&(e=0),c.alloc(+e)},t.INSPECT_MAX_BYTES=50;const a=2147483647;function s(e){if(e>a)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return d(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|g(e,t);let i=s(r);const n=i.write(e,t);return n!==r&&(i=i.slice(0,n)),i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(K(e,Uint8Array)){const t=new Uint8Array(e);return p(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(K(e,ArrayBuffer)||e&&K(e.buffer,ArrayBuffer))return p(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(K(e,SharedArrayBuffer)||e&&K(e.buffer,SharedArrayBuffer)))return p(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return c.from(i,t,r);const n=function(e){if(c.isBuffer(e)){const t=0|f(e.length),r=s(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||Y(e.length)?s(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function d(e){return u(e),s(e<0?0:0|f(e))}function h(e){const t=e.length<0?0:0|f(e.length),r=s(t);for(let i=0;i<t;i+=1)r[i]=255&e[i];return r}function p(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(i,c.prototype),i}function f(e){if(e>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|e}function g(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||K(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;let n=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Z(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return V(e).length;default:if(n)return i?-1:Z(e).length;t=(""+t).toLowerCase(),n=!0}}function w(e,t,r){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return P(this,t,r);case"utf8":case"utf-8":return A(this,t,r);case"ascii":return $(this,t,r);case"latin1":case"binary":return S(this,t,r);case"base64":return _(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,r);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function m(e,t,r){const i=e[t];e[t]=e[r],e[r]=i}function v(e,t,r,i,n){if(0===e.length)return-1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(n)return-1;r=e.length-1}else if(r<0){if(!n)return-1;r=0}if("string"==typeof t&&(t=c.from(t,i)),c.isBuffer(t))return 0===t.length?-1:b(e,t,r,i,n);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?n?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,i,n);throw new TypeError("val must be string, number or Buffer")}function b(e,t,r,i,n){let o,a=1,s=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;a=2,s/=2,c/=2,r/=2}function l(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(n){let i=-1;for(o=r;o<s;o++)if(l(e,o)===l(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===c)return i*a}else-1!==i&&(o-=o-i),i=-1}else for(r+c>s&&(r=s-c),o=r;o>=0;o--){let r=!0;for(let i=0;i<c;i++)if(l(e,o+i)!==l(t,i)){r=!1;break}if(r)return o}return-1}function y(e,t,r,i){r=Number(r)||0;const n=e.length-r;i?(i=Number(i))>n&&(i=n):i=n;const o=t.length;let a;for(i>o/2&&(i=o/2),a=0;a<i;++a){const i=parseInt(t.substr(2*a,2),16);if(Y(i))return a;e[r+a]=i}return a}function C(e,t,r,i){return G(Z(t,e.length-r),e,r,i)}function x(e,t,r,i){return G(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,i)}function E(e,t,r,i){return G(V(t),e,r,i)}function k(e,t,r,i){return G(function(e,t){let r,i,n;const o=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),i=r>>8,n=r%256,o.push(n),o.push(i);return o}(t,e.length-r),e,r,i)}function _(e,t,r){return 0===t&&r===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,r))}function A(e,t,r){r=Math.min(e.length,r);const i=[];let n=t;for(;n<r;){const t=e[n];let o=null,a=t>239?4:t>223?3:t>191?2:1;if(n+a<=r){let r,i,s,c;switch(a){case 1:t<128&&(o=t);break;case 2:r=e[n+1],128==(192&r)&&(c=(31&t)<<6|63&r,c>127&&(o=c));break;case 3:r=e[n+1],i=e[n+2],128==(192&r)&&128==(192&i)&&(c=(15&t)<<12|(63&r)<<6|63&i,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:r=e[n+1],i=e[n+2],s=e[n+3],128==(192&r)&&128==(192&i)&&128==(192&s)&&(c=(15&t)<<18|(63&r)<<12|(63&i)<<6|63&s,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,a=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),n+=a}return function(e){const t=e.length;if(t<=R)return String.fromCharCode.apply(String,e);let r="",i=0;for(;i<t;)r+=String.fromCharCode.apply(String,e.slice(i,i+=R));return r}(i)}t.kMaxLength=a,c.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,r){return function(e,t,r){return u(e),e<=0?s(e):void 0!==t?"string"==typeof r?s(e).fill(t,r):s(e).fill(t):s(e)}(e,t,r)},c.allocUnsafe=function(e){return d(e)},c.allocUnsafeSlow=function(e){return d(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if(K(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),K(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,i=t.length;for(let n=0,o=Math.min(r,i);n<o;++n)if(e[n]!==t[n]){r=e[n],i=t[n];break}return r<i?-1:i<r?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const i=c.allocUnsafe(t);let n=0;for(r=0;r<e.length;++r){let t=e[r];if(K(t,Uint8Array))n+t.length>i.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(i,n)):Uint8Array.prototype.set.call(i,t,n);else{if(!c.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,n)}n+=t.length}return i},c.byteLength=g,c.prototype._isBuffer=!0,c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},c.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?A(this,0,e):w.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(c.prototype[o]=c.prototype.inspect),c.prototype.compare=function(e,t,r,i,n){if(K(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===n&&(n=this.length),t<0||r>e.length||i<0||n>this.length)throw new RangeError("out of range index");if(i>=n&&t>=r)return 0;if(i>=n)return-1;if(t>=r)return 1;if(this===e)return 0;let o=(n>>>=0)-(i>>>=0),a=(r>>>=0)-(t>>>=0);const s=Math.min(o,a),l=this.slice(i,n),u=e.slice(t,r);for(let e=0;e<s;++e)if(l[e]!==u[e]){o=l[e],a=u[e];break}return o<a?-1:a<o?1:0},c.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},c.prototype.indexOf=function(e,t,r){return v(this,e,t,r,!0)},c.prototype.lastIndexOf=function(e,t,r){return v(this,e,t,r,!1)},c.prototype.write=function(e,t,r,i){if(void 0===t)i="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)i=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0)}const n=this.length-t;if((void 0===r||r>n)&&(r=n),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return y(this,e,t,r);case"utf8":case"utf-8":return C(this,e,t,r);case"ascii":case"latin1":case"binary":return x(this,e,t,r);case"base64":return E(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const R=4096;function $(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(127&e[n]);return i}function S(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(e[n]);return i}function P(e,t,r){const i=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>i)&&(r=i);let n="";for(let i=t;i<r;++i)n+=J[e[i]];return n}function T(e,t,r){const i=e.slice(t,r);let n="";for(let e=0;e<i.length-1;e+=2)n+=String.fromCharCode(i[e]+256*i[e+1]);return n}function I(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function O(e,t,r,i,n,o){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<o)throw new RangeError('"value" argument is out of bounds');if(r+i>e.length)throw new RangeError("Index out of range")}function N(e,t,r,i,n){F(t,i,n,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function M(e,t,r,i,n){F(t,i,n,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function j(e,t,r,i,n,o){if(r+i>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function U(e,t,r,i,o){return t=+t,r>>>=0,o||j(e,0,r,4),n.write(e,t,r,i,23,4),r+4}function B(e,t,r,i,o){return t=+t,r>>>=0,o||j(e,0,r,8),n.write(e,t,r,i,52,8),r+8}c.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,c.prototype),i},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let i=this[e],n=1,o=0;for(;++o<t&&(n*=256);)i+=this[e+o]*n;return i},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let i=this[e+--t],n=1;for(;t>0&&(n*=256);)i+=this[e+--t]*n;return i},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||I(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=Q((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,n=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(i)+(BigInt(n)<<BigInt(32))})),c.prototype.readBigUInt64BE=Q((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],n=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(i)<<BigInt(32))+BigInt(n)})),c.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let i=this[e],n=1,o=0;for(;++o<t&&(n*=256);)i+=this[e+o]*n;return n*=128,i>=n&&(i-=Math.pow(2,8*t)),i},c.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let i=t,n=1,o=this[e+--i];for(;i>0&&(n*=256);)o+=this[e+--i]*n;return n*=128,o>=n&&(o-=Math.pow(2,8*t)),o},c.prototype.readInt8=function(e,t){return e>>>=0,t||I(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||I(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(e,t){e>>>=0,t||I(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=Q((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),c.prototype.readBigInt64BE=Q((function(e){W(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||I(e,4,this.length),n.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||I(e,4,this.length),n.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||I(e,8,this.length),n.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||I(e,8,this.length),n.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,r,i){e=+e,t>>>=0,r>>>=0,i||O(this,e,t,r,Math.pow(2,8*r)-1,0);let n=1,o=0;for(this[t]=255&e;++o<r&&(n*=256);)this[t+o]=e/n&255;return t+r},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,r,i){e=+e,t>>>=0,r>>>=0,i||O(this,e,t,r,Math.pow(2,8*r)-1,0);let n=r-1,o=1;for(this[t+n]=255&e;--n>=0&&(o*=256);)this[t+n]=e/o&255;return t+r},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=Q((function(e,t=0){return N(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeBigUInt64BE=Q((function(e,t=0){return M(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeIntLE=function(e,t,r,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*r-1);O(this,e,t,r,i-1,-i)}let n=0,o=1,a=0;for(this[t]=255&e;++n<r&&(o*=256);)e<0&&0===a&&0!==this[t+n-1]&&(a=1),this[t+n]=(e/o|0)-a&255;return t+r},c.prototype.writeIntBE=function(e,t,r,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*r-1);O(this,e,t,r,i-1,-i)}let n=r-1,o=1,a=0;for(this[t+n]=255&e;--n>=0&&(o*=256);)e<0&&0===a&&0!==this[t+n+1]&&(a=1),this[t+n]=(e/o|0)-a&255;return t+r},c.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=Q((function(e,t=0){return N(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeBigInt64BE=Q((function(e,t=0){return M(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeFloatLE=function(e,t,r){return U(this,e,t,!0,r)},c.prototype.writeFloatBE=function(e,t,r){return U(this,e,t,!1,r)},c.prototype.writeDoubleLE=function(e,t,r){return B(this,e,t,!0,r)},c.prototype.writeDoubleBE=function(e,t,r){return B(this,e,t,!1,r)},c.prototype.copy=function(e,t,r,i){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<r&&(i=r),i===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);const n=i-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,i):Uint8Array.prototype.set.call(e,this.subarray(r,i),t),n},c.prototype.fill=function(e,t,r,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!c.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let n;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else{const o=c.isBuffer(e)?e:c.from(e,i),a=o.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<r-t;++n)this[n+t]=o[n%a]}return this};const D={};function L(e,t,r){D[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function z(e){let t="",r=e.length;const i="-"===e[0]?1:0;for(;r>=i+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function F(e,t,r,i,n,o){if(e>r||e<t){const i="bigint"==typeof t?"n":"";let n;throw n=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new D.ERR_OUT_OF_RANGE("value",n,e)}!function(e,t,r){W(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||H(t,e.length-(r+1))}(i,n,o)}function W(e,t){if("number"!=typeof e)throw new D.ERR_INVALID_ARG_TYPE(t,"number",e)}function H(e,t,r){if(Math.floor(e)!==e)throw W(e,r),new D.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new D.ERR_BUFFER_OUT_OF_BOUNDS;throw new D.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}L("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),L("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),L("ERR_OUT_OF_RANGE",(function(e,t,r){let i=`The value of "${e}" is out of range.`,n=r;return Number.isInteger(r)&&Math.abs(r)>2**32?n=z(String(r)):"bigint"==typeof r&&(n=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(n=z(n)),n+="n"),i+=` It must be ${t}. Received ${n}`,i}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function Z(e,t){let r;t=t||1/0;const i=e.length;let n=null;const o=[];for(let a=0;a<i;++a){if(r=e.charCodeAt(a),r>55295&&r<57344){if(!n){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===i){(t-=3)>-1&&o.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),n=r;continue}r=65536+(n-55296<<10|r-56320)}else n&&(t-=3)>-1&&o.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function V(e){return i.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(q,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function G(e,t,r,i){let n;for(n=0;n<i&&!(n+r>=t.length||n>=e.length);++n)t[n+r]=e[n];return n}function K(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Y(e){return e!=e}const J=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const i=16*r;for(let n=0;n<16;++n)t[i+n]=e[r]+e[n]}return t}();function Q(e){return"undefined"==typeof BigInt?X:e}function X(){throw new Error("BigInt not supported")}},4353:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,r="millisecond",i="second",n="minute",o="hour",a="day",s="week",c="month",l="quarter",u="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},w=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},m={s:w,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),i=Math.floor(r/60),n=r%60;return(t<=0?"+":"-")+w(i,2,"0")+":"+w(n,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),n=t.clone().add(i,c),o=r-n<0,a=t.clone().add(i+(o?-1:1),c);return+(-(i+(r-n)/(o?n-a:a-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:a,D:d,h:o,m:n,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",b={};b[v]=g;var y="$isDayjsObject",C=function(e){return e instanceof _||!(!e||!e[y])},x=function e(t,r,i){var n;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();b[o]&&(n=o),r&&(b[o]=r,n=o);var a=t.split("-");if(!n&&a.length>1)return e(a[0])}else{var s=t.name;b[s]=t,n=s}return!i&&n&&(v=n),n||!i&&v},E=function(e,t){if(C(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new _(r)},k=m;k.l=x,k.i=C,k.w=function(e,t){return E(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function g(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[y]=!0}var w=g.prototype;return w.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var n=i[2]-1||0,o=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(t)}(e),this.init()},w.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},w.$utils=function(){return k},w.isValid=function(){return!(this.$d.toString()===h)},w.isSame=function(e,t){var r=E(e);return this.startOf(t)<=r&&r<=this.endOf(t)},w.isAfter=function(e,t){return E(e)<this.startOf(t)},w.isBefore=function(e,t){return this.endOf(t)<E(e)},w.$g=function(e,t,r){return k.u(e)?this[t]:this.set(r,e)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(e,t){var r=this,l=!!k.u(t)||t,h=k.p(e),p=function(e,t){var i=k.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return l?i:i.endOf(a)},f=function(e,t){return k.w(r.toDate()[e].apply(r.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,w=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case u:return l?p(1,0):p(31,11);case c:return l?p(1,w):p(0,w+1);case s:var b=this.$locale().weekStart||0,y=(g<b?g+7:g)-b;return p(l?m-y:m+(6-y),w);case a:case d:return f(v+"Hours",0);case o:return f(v+"Minutes",1);case n:return f(v+"Seconds",2);case i:return f(v+"Milliseconds",3);default:return this.clone()}},w.endOf=function(e){return this.startOf(e,!1)},w.$set=function(e,t){var s,l=k.p(e),h="set"+(this.$u?"UTC":""),p=(s={},s[a]=h+"Date",s[d]=h+"Date",s[c]=h+"Month",s[u]=h+"FullYear",s[o]=h+"Hours",s[n]=h+"Minutes",s[i]=h+"Seconds",s[r]=h+"Milliseconds",s)[l],f=l===a?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(d,1);g.$d[p](f),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},w.set=function(e,t){return this.clone().$set(e,t)},w.get=function(e){return this[k.p(e)]()},w.add=function(r,l){var d,h=this;r=Number(r);var p=k.p(l),f=function(e){var t=E(h);return k.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===a)return f(1);if(p===s)return f(7);var g=(d={},d[n]=e,d[o]=t,d[i]=1e3,d)[p]||1,w=this.$d.getTime()+r*g;return k.w(w,this)},w.subtract=function(e,t){return this.add(-1*e,t)},w.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",n=k.z(this),o=this.$H,a=this.$m,s=this.$M,c=r.weekdays,l=r.months,u=r.meridiem,d=function(e,r,n,o){return e&&(e[r]||e(t,i))||n[r].slice(0,o)},p=function(e){return k.s(o%12||12,e,"0")},g=u||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(f,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,l,3);case"MMMM":return d(l,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,c,2);case"ddd":return d(r.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(o);case"HH":return k.s(o,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")}))},w.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},w.diff=function(r,d,h){var p,f=this,g=k.p(d),w=E(r),m=(w.utcOffset()-this.utcOffset())*e,v=this-w,b=function(){return k.m(f,w)};switch(g){case u:p=b()/12;break;case c:p=b();break;case l:p=b()/3;break;case s:p=(v-m)/6048e5;break;case a:p=(v-m)/864e5;break;case o:p=v/t;break;case n:p=v/e;break;case i:p=v/1e3;break;default:p=v}return h?p:k.a(p)},w.daysInMonth=function(){return this.endOf(c).$D},w.$locale=function(){return b[this.$L]},w.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=x(e,t,!0);return i&&(r.$L=i),r},w.clone=function(){return k.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},g}(),A=_.prototype;return E.prototype=A,[["$ms",r],["$s",i],["$m",n],["$H",o],["$W",a],["$M",c],["$y",u],["$D",d]].forEach((function(e){A[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),E.extend=function(e,t){return e.$i||(e(t,_,E),e.$i=!0),E},E.locale=x,E.isDayjs=C,E.unix=function(e){return E(1e3*e)},E.en=b[v],E.Ls=b,E.p={},E}()},6279:function(e){e.exports=function(){"use strict";return function(e,t,r){e=e||{};var i=t.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,r,n){return i.fromToBase(e,t,r,n)}r.en.relativeTime=n,i.fromToBase=function(t,i,o,a,s){for(var c,l,u,d=o.$locale().relativeTime||n,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=h.length,f=0;f<p;f+=1){var g=h[f];g.d&&(c=a?r(t).diff(o,g.d,!0):o.diff(t,g.d,!0));var w=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,w<=g.r||!g.r){w<=1&&f>0&&(g=h[f-1]);var m=d[g.l];s&&(w=s(""+w)),l="string"==typeof m?m.replace("%d",w):m(w,i,g.l,u);break}}if(i)return l;var v=u?d.future:d.past;return"function"==typeof v?v(l):v.replace("%s",l)},i.to=function(e,t){return o(e,t,this,!0)},i.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(a(this),e)},i.fromNow=function(e){return this.from(a(this),e)}}}()},3581:function(e){e.exports=function(){"use strict";return function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach((function(e){i[e]=t[e]})),i}}}()},6320:e=>{"use strict";var t={single_source_shortest_paths:function(e,r,i){var n={},o={};o[r]=0;var a,s,c,l,u,d,h,p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(c in s=(a=p.pop()).value,l=a.cost,u=e[s]||{})u.hasOwnProperty(c)&&(d=l+u[c],h=o[c],(void 0===o[c]||h>d)&&(o[c]=d,p.push(c,d),n[c]=s));if(void 0!==i&&void 0===o[i]){var f=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(f)}return n},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var n=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(n,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,n={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(n[r]=i[r]);return n.queue=[],n.sorter=e.sorter||i.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var r={value:e,cost:t};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},9049:e=>{"use strict";e.exports=function(e){for(var t=[],r=e.length,i=0;i<r;i++){var n=e.charCodeAt(i);if(n>=55296&&n<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(n=1024*(n-55296)+o-56320+65536,i+=1)}n<128?t.push(n):n<2048?(t.push(n>>6|192),t.push(63&n|128)):n<55296||n>=57344&&n<65536?(t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128)):n>=65536&&n<=1114111?(t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}},228:e=>{"use strict";var t=Object.prototype.hasOwnProperty,r="~";function i(){}function n(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,i,o,a){if("function"!=typeof i)throw new TypeError("The listener must be a function");var s=new n(i,o||e,a),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(r=!1)),s.prototype.eventNames=function(){var e,i,n=[];if(0===this._eventsCount)return n;for(i in e=this._events)t.call(e,i)&&n.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=r?r+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,o=i.length,a=new Array(o);n<o;n++)a[n]=i[n].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,i=this._events[t];return i?i.fn?1:i.length:0},s.prototype.emit=function(e,t,i,n,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var c,l,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,n),!0;case 5:return u.fn.call(u.context,t,i,n,o),!0;case 6:return u.fn.call(u.context,t,i,n,o,a),!0}for(l=1,c=new Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var h,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,i);break;case 4:u[l].fn.call(u[l].context,t,i,n);break;default:if(!c)for(h=1,c=new Array(d-1);h<d;h++)c[h-1]=arguments[h];u[l].fn.apply(u[l].context,c)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,i,n){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||n&&!s.once||i&&s.context!==i||a(this,o);else{for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==t||n&&!s[c].once||i&&s[c].context!==i)&&l.push(s[c]);l.length?this._events[o]=1===l.length?l[0]:l:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},251:(e,t)=>{t.read=function(e,t,r,i,n){var o,a,s=8*n-i-1,c=(1<<s)-1,l=c>>1,u=-7,d=r?n-1:0,h=r?-1:1,p=e[t+d];for(d+=h,o=p&(1<<-u)-1,p>>=-u,u+=s;u>0;o=256*o+e[t+d],d+=h,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=i;u>0;a=256*a+e[t+d],d+=h,u-=8);if(0===o)o=1-l;else{if(o===c)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,i),o-=l}return(p?-1:1)*a*Math.pow(2,o-i)},t.write=function(e,t,r,i,n,o){var a,s,c,l=8*o-n-1,u=(1<<l)-1,d=u>>1,h=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,p=i?0:o-1,f=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-a))<1&&(a--,c*=2),(t+=a+d>=1?h/c:h*Math.pow(2,1-d))*c>=2&&(a++,c/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*c-1)*Math.pow(2,n),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,n),a=0));n>=8;e[r+p]=255&s,p+=f,s/=256,n-=8);for(a=a<<n|s,l+=n;l>0;e[r+p]=255&a,p+=f,a/=256,l-=8);e[r+p-f]|=128*g}},7583:(e,t,r)=>{const i=r(1333),n=r(157),o=r(7899),a=r(6756);function s(e,t,r,o,a){const s=[].slice.call(arguments,1),c=s.length,l="function"==typeof s[c-1];if(!l&&!i())throw new Error("Callback required as last argument");if(!l){if(c<1)throw new Error("Too few arguments provided");return 1===c?(r=t,t=o=void 0):2!==c||t.getContext||(o=r,r=t,t=void 0),new Promise((function(i,a){try{const a=n.create(r,o);i(e(a,t,o))}catch(e){a(e)}}))}if(c<2)throw new Error("Too few arguments provided");2===c?(a=r,r=t,t=o=void 0):3===c&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=r,r=t,t=void 0));try{const i=n.create(r,o);a(null,e(i,t,o))}catch(e){a(e)}}t.create=n.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,(function(e,t,r){return a.render(e,r)}))},1333:e=>{e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},6421:(e,t,r)=>{const i=r(6886).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];const t=Math.floor(e/7)+2,r=i(e),n=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-n;return o.push(6),o.reverse()},t.getPositions=function(e){const r=[],i=t.getRowColCoords(e),n=i.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)0===e&&0===t||0===e&&t===n-1||e===n-1&&0===t||r.push([i[e],i[t]]);return r}},1433:(e,t,r)=>{const i=r(208),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=i.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=o},9899:e=>{function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){const t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},8820:e=>{function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,i){const n=e*this.size+t;this.data[n]=r,i&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},5822:(e,t,r)=>{const i=r(9049),n=r(208);function o(e){this.mode=n.BYTE,"string"==typeof e&&(e=i(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},7518:(e,t,r)=>{const i=r(9953),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return n[4*(e-1)+0];case i.M:return n[4*(e-1)+1];case i.Q:return n[4*(e-1)+2];case i.H:return n[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return o[4*(e-1)+0];case i.M:return o[4*(e-1)+1];case i.Q:return o[4*(e-1)+2];case i.H:return o[4*(e-1)+3];default:return}}},9953:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},7756:(e,t,r)=>{const i=r(6886).getSymbolSize;t.getPositions=function(e){const t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},4565:(e,t,r)=>{const i=r(6886),n=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){const r=e.bit<<3|t;let o=r<<10;for(;i.getBCHDigit(o)-n>=0;)o^=1335<<i.getBCHDigit(o)-n;return 21522^(r<<10|o)}},2731:(e,t)=>{const r=new Uint8Array(512),i=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,i[e]=t,e<<=1,256&e&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw new Error("log("+e+")");return i[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[i[e]+i[t]]}},4861:(e,t,r)=>{const i=r(208),n=r(6886);function o(e){this.mode=i.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),e.put(r,13)}},e.exports=o},1332:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function r(e,r,i){switch(e){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){const t=e.size;let r=0,i=0,n=0,o=null,a=null;for(let s=0;s<t;s++){i=n=0,o=a=null;for(let c=0;c<t;c++){let t=e.get(s,c);t===o?i++:(i>=5&&(r+=i-5+3),o=t,i=1),t=e.get(c,s),t===a?n++:(n>=5&&(r+=n-5+3),a=t,n=1)}i>=5&&(r+=i-5+3),n>=5&&(r+=n-5+3)}return r},t.getPenaltyN2=function(e){const t=e.size;let r=0;for(let i=0;i<t-1;i++)for(let n=0;n<t-1;n++){const t=e.get(i,n)+e.get(i,n+1)+e.get(i+1,n)+e.get(i+1,n+1);4!==t&&0!==t||r++}return 3*r},t.getPenaltyN3=function(e){const t=e.size;let r=0,i=0,n=0;for(let o=0;o<t;o++){i=n=0;for(let a=0;a<t;a++)i=i<<1&2047|e.get(o,a),a>=10&&(1488===i||93===i)&&r++,n=n<<1&2047|e.get(a,o),a>=10&&(1488===n||93===n)&&r++}return 40*r},t.getPenaltyN4=function(e){let t=0;const r=e.data.length;for(let i=0;i<r;i++)t+=e.data[i];return 10*Math.abs(Math.ceil(100*t/r/5)-10)},t.applyMask=function(e,t){const i=t.size;for(let n=0;n<i;n++)for(let o=0;o<i;o++)t.isReserved(o,n)||t.xor(o,n,r(e,o,n))},t.getBestMask=function(e,r){const i=Object.keys(t.Patterns).length;let n=0,o=1/0;for(let a=0;a<i;a++){r(a),t.applyMask(a,e);const i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),i<o&&(o=i,n=a)}return n}},208:(e,t,r)=>{const i=r(1878),n=r(7044);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!i.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},4357:(e,t,r)=>{const i=r(208);function n(e){this.mode=i.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r,i;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),i=parseInt(r,10),e.put(i,10);const n=this.data.length-t;n>0&&(r=this.data.substr(t),i=parseInt(r,10),e.put(i,3*n+1))},e.exports=n},4713:(e,t,r)=>{const i=r(2731);t.mul=function(e,t){const r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let o=0;o<t.length;o++)r[n+o]^=i.mul(e[n],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){const e=r[0];for(let n=0;n<t.length;n++)r[n]^=i.mul(t[n],e);let n=0;for(;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=t.mul(r,new Uint8Array([1,i.exp(n)]));return r}},157:(e,t,r)=>{const i=r(6886),n=r(9953),o=r(9899),a=r(8820),s=r(6421),c=r(7756),l=r(1332),u=r(7518),d=r(4764),h=r(1427),p=r(4565),f=r(208),g=r(9801);function w(e,t,r){const i=e.size,n=p.getEncodedBits(t,r);let o,a;for(o=0;o<15;o++)a=1==(n>>o&1),o<6?e.set(o,8,a,!0):o<8?e.set(o+1,8,a,!0):e.set(i-15+o,8,a,!0),o<8?e.set(8,i-o-1,a,!0):o<9?e.set(8,15-o-1+1,a,!0):e.set(8,15-o-1,a,!0);e.set(i-8,8,1,!0)}function m(e,t,r,n){let p;if(Array.isArray(e))p=g.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");{let i=t;if(!i){const t=g.rawSplit(e);i=h.getBestVersionForData(t,r)}p=g.fromString(e,i||40)}}const m=h.getBestVersionForData(p,r);if(!m)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<m)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+m+".\n")}else t=m;const v=function(e,t,r){const n=new o;r.forEach((function(t){n.put(t.mode.bit,4),n.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(n)}));const a=8*(i.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t));for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);const s=(a-n.getLengthInBits())/8;for(let e=0;e<s;e++)n.put(e%2?17:236,8);return function(e,t,r){const n=i.getSymbolTotalCodewords(t),o=n-u.getTotalCodewordsCount(t,r),a=u.getBlocksCount(t,r),s=a-n%a,c=Math.floor(n/a),l=Math.floor(o/a),h=l+1,p=c-l,f=new d(p);let g=0;const w=new Array(a),m=new Array(a);let v=0;const b=new Uint8Array(e.buffer);for(let e=0;e<a;e++){const t=e<s?l:h;w[e]=b.slice(g,g+t),m[e]=f.encode(w[e]),g+=t,v=Math.max(v,t)}const y=new Uint8Array(n);let C,x,E=0;for(C=0;C<v;C++)for(x=0;x<a;x++)C<w[x].length&&(y[E++]=w[x][C]);for(C=0;C<p;C++)for(x=0;x<a;x++)y[E++]=m[x][C];return y}(n,e,t)}(t,r,p),b=i.getSymbolSize(t),y=new a(b);return function(e,t){const r=e.size,i=c.getPositions(t);for(let t=0;t<i.length;t++){const n=i[t][0],o=i[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1||r<=n+t))for(let i=-1;i<=7;i++)o+i<=-1||r<=o+i||(t>=0&&t<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===t||6===t)||t>=2&&t<=4&&i>=2&&i<=4?e.set(n+t,o+i,!0,!0):e.set(n+t,o+i,!1,!0))}}(y,t),function(e){const t=e.size;for(let r=8;r<t-8;r++){const t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(y),function(e,t){const r=s.getPositions(t);for(let t=0;t<r.length;t++){const i=r[t][0],n=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(i+t,n+r,!0,!0):e.set(i+t,n+r,!1,!0)}}(y,t),w(y,r,0),t>=7&&function(e,t){const r=e.size,i=h.getEncodedBits(t);let n,o,a;for(let t=0;t<18;t++)n=Math.floor(t/3),o=t%3+r-8-3,a=1==(i>>t&1),e.set(n,o,a,!0),e.set(o,n,a,!0)}(y,t),function(e,t){const r=e.size;let i=-1,n=r-1,o=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(n,s-r)){let i=!1;a<t.length&&(i=1==(t[a]>>>o&1)),e.set(n,s-r,i),o--,-1===o&&(a++,o=7)}if(n+=i,n<0||r<=n){n-=i,i=-i;break}}}(y,v),isNaN(n)&&(n=l.getBestMask(y,w.bind(null,y,r))),l.applyMask(n,y),w(y,r,n),{modules:y,version:t,errorCorrectionLevel:r,maskPattern:n,segments:p}}t.create=function(e,t){if(void 0===e||""===e)throw new Error("No input text");let r,o,a=n.M;return void 0!==t&&(a=n.from(t.errorCorrectionLevel,n.M),r=h.from(t.version),o=l.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),m(e,r,a,o)}},4764:(e,t,r)=>{const i=r(4713);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const r=i.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){const e=new Uint8Array(this.degree);return e.set(r,n),e}return r},e.exports=n},7044:(e,t)=>{const r="[0-9]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";t.KANJI=new RegExp(i,"g"),t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=new RegExp(n,"g"),t.NUMERIC=new RegExp(r,"g"),t.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const o=new RegExp("^"+i+"$"),a=new RegExp("^"+r+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},9801:(e,t,r)=>{const i=r(208),n=r(4357),o=r(1433),a=r(5822),s=r(4861),c=r(7044),l=r(6886),u=r(6320);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){const i=[];let n;for(;null!==(n=e.exec(r));)i.push({data:n[0],index:n.index,mode:t,length:n[0].length});return i}function p(e){const t=h(c.NUMERIC,i.NUMERIC,e),r=h(c.ALPHANUMERIC,i.ALPHANUMERIC,e);let n,o;return l.isKanjiModeEnabled()?(n=h(c.BYTE,i.BYTE,e),o=h(c.KANJI,i.KANJI,e)):(n=h(c.BYTE_KANJI,i.BYTE,e),o=[]),t.concat(r,n,o).sort((function(e,t){return e.index-t.index})).map((function(e){return{data:e.data,mode:e.mode,length:e.length}}))}function f(e,t){switch(t){case i.NUMERIC:return n.getBitsLength(e);case i.ALPHANUMERIC:return o.getBitsLength(e);case i.KANJI:return s.getBitsLength(e);case i.BYTE:return a.getBitsLength(e)}}function g(e,t){let r;const c=i.getBestModeForData(e);if(r=i.from(t,c),r!==i.BYTE&&r.bit<c.bit)throw new Error('"'+e+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(c));switch(r!==i.KANJI||l.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new n(e);case i.ALPHANUMERIC:return new o(e);case i.KANJI:return new s(e);case i.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce((function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e}),[])},t.fromString=function(e,r){const n=function(e){const t=[];for(let r=0;r<e.length;r++){const n=e[r];switch(n.mode){case i.NUMERIC:t.push([n,{data:n.data,mode:i.ALPHANUMERIC,length:n.length},{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.ALPHANUMERIC:t.push([n,{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.KANJI:t.push([n,{data:n.data,mode:i.BYTE,length:d(n.data)}]);break;case i.BYTE:t.push([{data:n.data,mode:i.BYTE,length:d(n.data)}])}}return t}(p(e,l.isKanjiModeEnabled())),o=function(e,t){const r={},n={start:{}};let o=["start"];for(let a=0;a<e.length;a++){const s=e[a],c=[];for(let e=0;e<s.length;e++){const l=s[e],u=""+a+e;c.push(u),r[u]={node:l,lastCount:0},n[u]={};for(let e=0;e<o.length;e++){const a=o[e];r[a]&&r[a].node.mode===l.mode?(n[a][u]=f(r[a].lastCount+l.length,l.mode)-f(r[a].lastCount,l.mode),r[a].lastCount+=l.length):(r[a]&&(r[a].lastCount=l.length),n[a][u]=f(l.length,l.mode)+4+i.getCharCountIndicator(l.mode,t))}}o=c}for(let e=0;e<o.length;e++)n[o[e]].end=0;return{map:n,table:r}}(n,r),a=u.find_path(o.map,"start","end"),s=[];for(let e=1;e<a.length-1;e++)s.push(o.table[a[e]].node);return t.fromArray(s.reduce((function(e,t){const r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)}),[]))},t.rawSplit=function(e){return t.fromArray(p(e,l.isKanjiModeEnabled()))}},6886:(e,t)=>{let r;const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},1878:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},1427:(e,t,r)=>{const i=r(6886),n=r(7518),o=r(9953),a=r(208),s=r(1878),c=i.getBCHDigit(7973);function l(e,t){return a.getCharCountIndicator(e,t)+4}function u(e,t){let r=0;return e.forEach((function(e){const i=l(e.mode,t);r+=i+e.getBitsLength()})),r}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw new Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);const o=8*(i.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t));if(r===a.MIXED)return o;const c=o-l(r,e);switch(r){case a.NUMERIC:return Math.floor(c/10*3);case a.ALPHANUMERIC:return Math.floor(c/11*2);case a.KANJI:return Math.floor(c/13);case a.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,r){let i;const n=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let i=1;i<=40;i++)if(u(e,i)<=t.getCapacity(i,r,a.MIXED))return i}(e,n);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,i){for(let n=1;n<=40;n++)if(r<=t.getCapacity(n,i,e))return n}(i.mode,i.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-c>=0;)t^=7973<<i.getBCHDigit(t)-c;return e<<12|t}},7899:(e,t,r)=>{const i=r(2726);t.render=function(e,t,r){let n=r,o=t;void 0!==n||t&&t.getContext||(n=t,t=void 0),t||(o=function(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}()),n=i.getOptions(n);const a=i.getImageWidth(e.modules.size,n),s=o.getContext("2d"),c=s.createImageData(a,a);return i.qrToImageData(c.data,e,n),function(e,t,r){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=r,t.width=r,t.style.height=r+"px",t.style.width=r+"px"}(s,o,a),s.putImageData(c,0,0),o},t.renderToDataURL=function(e,r,i){let n=i;void 0!==n||r&&r.getContext||(n=r,r=void 0),n||(n={});const o=t.render(e,r,n),a=n.type||"image/png",s=n.rendererOpts||{};return o.toDataURL(a,s.quality)}},6756:(e,t,r)=>{const i=r(2726);function n(e,t){const r=e.a/255,i=t+'="'+e.hex+'"';return r<1?i+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function o(e,t,r){let i=e+t;return void 0!==r&&(i+=" "+r),i}t.render=function(e,t,r){const a=i.getOptions(t),s=e.modules.size,c=e.modules.data,l=s+2*a.margin,u=a.color.light.a?"<path "+n(a.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+n(a.color.dark,"stroke")+' d="'+function(e,t,r){let i="",n=0,a=!1,s=0;for(let c=0;c<e.length;c++){const l=Math.floor(c%t),u=Math.floor(c/t);l||a||(a=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=a?o("M",l+r,.5+u+r):o("m",n,0),n=0,a=!1),l+1<t&&e[c+1]||(i+=o("h",s),s=0)):n++}return i}(c,s,a.margin)+'"/>',h='viewBox="0 0 '+l+" "+l+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+h+' shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,p),p}},2726:(e,t)=>{function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map((function(e){return[e,e]})))),6===t.length&&t.push("F","F");const r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:i,scale:i?4:n,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){const i=t.getScale(e,r);return Math.floor((e+2*r.margin)*i)},t.qrToImageData=function(e,r,i){const n=r.modules.size,o=r.modules.data,a=t.getScale(n,i),s=Math.floor((n+2*i.margin)*a),c=i.margin*a,l=[i.color.light,i.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=4*(t*s+r),d=i.color.light;t>=c&&r>=c&&t<s-c&&r<s-c&&(d=l[o[Math.floor((t-c)/a)*n+Math.floor((r-c)/a)]?1:0]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},32:(e,t,r)=>{"use strict";r.d(t,{r:()=>a,L:()=>s});var i=r(4353),n=r(3581),o=r(6279);i.extend(o),i.extend(n),i.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const a={getYear:(e=(new Date).toISOString())=>i(e).year(),getRelativeDateFromNow:e=>i(e).fromNow(!0),formatDate:(e,t="DD MMM")=>i(e).format(t)},s={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0}},1171:(e,t,r)=>{"use strict";r.d(t,{AccountController:()=>v,ApiController:()=>z,jQ:()=>_,$m:()=>ie,TP:()=>f,ConnectionController:()=>ee,ConnectorController:()=>S,oU:()=>s,wE:()=>c,En:()=>M,W3:()=>q,NetworkController:()=>B,aG:()=>Y,OptionsController:()=>d,z3:()=>T,RouterController:()=>W,aS:()=>ne,Rv:()=>re,SnackController:()=>w,iT:()=>E,ThemeController:()=>R,WC:()=>Q});var i=r(4707),n=r(9073);const o="https://secure.walletconnect.com",a=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],s={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:o,SECURE_SITE_DASHBOARD:`${o}/dashboard`,SECURE_SITE_FAVICON:`${o}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e"},c={isMobile:()=>"undefined"!=typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),checkCaipNetwork:(e,t="")=>e?.id.toLocaleLowerCase().includes(t.toLowerCase()),isAndroid(){const e=window.navigator.userAgent.toLowerCase();return c.isMobile()&&e.includes("android")},isIos(){const e=window.navigator.userAgent.toLowerCase();return c.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=s.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=s.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+s.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise((t=>{setTimeout(t,e)})),debounce(e,t=500){let r;return(...i)=>{r&&clearTimeout(r),r=setTimeout((function(){e(...i)}),t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(c.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;return r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),{redirect:`${r}wc?uri=${encodeURIComponent(t)}`,href:r}},formatUniversalUrl(e,t){if(!c.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;return r.endsWith("/")||(r=`${r}/`),{redirect:`${r}wc?uri=${encodeURIComponent(t)}`,href:r}},openHref(e,t,r){window.open(e,t,r||"noreferrer noopener")},async preloadImage(e){const t=new Promise(((t,r)=>{const i=new Image;i.onload=t,i.onerror=r,i.crossOrigin="anonymous",i.src=e}));return Promise.race([t,c.wait(2e3)])},formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){const t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t??""}`:`0.000 ${t??""}`},formatBalance2(e,t){let r;if("0"===e)r="0";else if("string"==typeof e){const t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:r??"0",rest:"0"===r?"000":"",symbol:t}},isRestrictedRegion(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return s.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>c.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>c.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>c.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){const r={};return t&&e&&(e.forEach(((e,t)=>{r[e]=t})),t.sort(((e,t)=>{const i=r[e.id],n=r[t.id];return void 0!==i&&void 0!==n?i-n:void 0!==i?-1:void 0!==n?1:0}))),t},calculateBalance(e){let t=0;for(const r of e)t+=r.value;return t},formatTokenBalance(e){const t=e.toFixed(2),[r,i]=t.split(".");return{dollars:r,pennies:i}},isAddress:e=>!(!/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||!/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&!/^(?:0x)?[0-9A-F]{40}$/iu.test(e))};class l{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:t,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"GET",headers:e,signal:t,cache:"no-cache"})).json()}async getBlob({headers:e,signal:t,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:r,...i}){const n=this.createUrl(i);return(await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:t,signal:r,...i}){const n=this.createUrl(i);return(await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:t,signal:r,...i}){const n=this.createUrl(i);return(await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:t}){const r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach((([e,t])=>{t&&r.searchParams.append(e,t)})),r}}const u=(0,n.BX)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),d={state:u,subscribeKey:(e,t)=>(0,i.u$)(u,e,t),setProjectId(e){u.projectId=e},setAllWallets(e){u.allWallets=e},setIncludeWalletIds(e){u.includeWalletIds=e},setExcludeWalletIds(e){u.excludeWalletIds=e},setFeaturedWalletIds(e){u.featuredWalletIds=e},setTokens(e){u.tokens=e},setTermsConditionsUrl(e){u.termsConditionsUrl=e},setPrivacyPolicyUrl(e){u.privacyPolicyUrl=e},setCustomWallets(e){u.customWallets=e},setIsSiweEnabled(e){u.isSiweEnabled=e},setEnableAnalytics(e){u.enableAnalytics=e},setSdkVersion(e){u.sdkVersion=e},setMetadata(e){u.metadata=e},setOnrampEnabled(e){u.enableOnramp=e},setWalletFeaturesEnabled(e){u.enableWalletFeatures=e}},h={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},p=new l({baseUrl:c.getBlockchainApiUrl()}),f={fetchIdentity:({caipChainId:e,address:t})=>p.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:d.state.projectId}}),fetchTransactions({account:e,projectId:t,cursor:r,onramp:i,signal:n}){const o=r?{cursor:r}:{};return p.get({path:`/v1/account/${e}/history?projectId=${t}${i?`&onramp=${i}`:""}`,params:o,signal:n})},getBalance:async e=>p.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",projectId:d.state.projectId}}),generateOnRampURL:async({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:i,paymentAmount:n})=>(await p.post({path:`/v1/generators/onrampurl?projectId=${d.state.projectId}`,body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:n}})).url,async getOnrampOptions(){try{return await p.get({path:`/v1/onramp/options?projectId=${d.state.projectId}`})}catch(e){return h}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:i}){try{return await p.post({path:`/v1/onramp/quote?projectId=${d.state.projectId}`,body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:i}})}catch(e){return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}}},g=(0,n.BX)({message:"",variant:"success",open:!1}),w={state:g,subscribeKey:(e,t)=>(0,i.u$)(g,e,t),showSuccess(e){g.message=e,g.variant="success",g.open=!0},showError(e){const t=c.parseError(e);g.message=t,g.variant="error",g.open=!0},hide(){g.open=!1}},m=(0,n.BX)({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1}),v={state:m,subscribe:e=>(0,n.B1)(m,(()=>e(m))),subscribeKey:(e,t)=>(0,i.u$)(m,e,t),setIsConnected(e){m.isConnected=e},setCaipAddress(e){m.caipAddress=e,m.address=e?c.getPlainAddress(e):void 0},setBalance(e,t){m.balance=e,m.balanceSymbol=t},setProfileName(e){m.profileName=e},setProfileImage(e){m.profileImage=e},setAddressExplorerUrl(e){m.addressExplorerUrl=e},setSmartAccountDeployed(e){m.smartAccountDeployed=e},setCurrentTab(e){m.currentTab=e},setTokenBalance(e){e&&(m.tokenBalance=(0,n.KR)(e))},setConnectedWalletInfo(e){m.connectedWalletInfo=e},async fetchTokenBalance(){try{if(m.address){const e=await f.getBalance(m.address);this.setTokenBalance(e.balances)}}catch(e){w.showError("Failed to fetch token balance")}},resetAccount(){m.isConnected=!1,m.smartAccountDeployed=!1,m.currentTab=0,m.caipAddress=void 0,m.address=void 0,m.balance=void 0,m.balanceSymbol=void 0,m.profileName=void 0,m.profileImage=void 0,m.addressExplorerUrl=void 0,m.tokenBalance=[],m.connectedWalletInfo=void 0}},b="WALLETCONNECT_DEEPLINK_CHOICE",y="@w3m/recent",C="@w3m/connected_wallet_image_url",x="@w3m/connected_connector",E={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(b,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(b);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(b)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=E.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(y,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(y);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(C,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(C)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(x,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(x)}catch{console.info("Unable to get Connected Connector")}}},k=(0,n.BX)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),_={state:k,subscribeNetworkImages:e=>(0,n.B1)(k.networkImages,(()=>e(k.networkImages))),subscribeKey:(e,t)=>(0,i.u$)(k,e,t),subscribe:e=>(0,n.B1)(k,(()=>e(k))),setWalletImage(e,t){k.walletImages[e]=t},setNetworkImage(e,t){k.networkImages[e]=t},setConnectorImage(e,t){k.connectorImages[e]=t},setTokenImage(e,t){k.tokenImages[e]=t},setCurrencyImage(e,t){k.currencyImages[e]=t}},A=(0,n.BX)({themeMode:"dark",themeVariables:{}}),R={state:A,subscribe:e=>(0,n.B1)(A,(()=>e(A))),setThemeMode(e){A.themeMode=e;try{const e=S.getEmailConnector();e&&e.provider.syncTheme({themeMode:R.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(e){A.themeVariables={...A.themeVariables,...e};try{const e=S.getEmailConnector();e&&e.provider.syncTheme({themeVariables:R.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}},getSnapshot:()=>(0,n.P9)(A)},$=(0,n.BX)({connectors:[]}),S={state:$,subscribeKey:(e,t)=>(0,i.u$)($,e,t),setConnectors(e){$.connectors=e.map((e=>(0,n.KR)(e)))},addConnector(e){if($.connectors.push((0,n.KR)(e)),"w3mEmail"===e.id){const t=e,r=(0,n.P9)(d.state);t?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId}),t.provider.syncTheme({themeMode:R.getSnapshot().themeMode,themeVariables:R.getSnapshot().themeVariables})}},getEmailConnector:()=>$.connectors.find((e=>"EMAIL"===e.type)),getAnnouncedConnectorRdns:()=>$.connectors.filter((e=>"ANNOUNCED"===e.type)).map((e=>e.info?.rdns)),getConnectors:()=>$.connectors,getConnector:(e,t)=>$.connectors.find((r=>r.explorerId===e||r.info?.rdns===t))},P=(0,n.BX)({open:!1,selectedNetworkId:void 0}),T={state:P,subscribe:e=>(0,n.B1)(P,(()=>e(P))),set(e){Object.assign(P,{...P,...e})}},I=new l({baseUrl:c.getAnalyticsUrl()}),O=["MODAL_CREATED"],N=(0,n.BX)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),M={state:N,subscribe:e=>(0,n.B1)(N,(()=>e(N))),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:r}=d.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(O.includes(e.data.event)||"undefined"==typeof window)return;await I.post({path:"/e",headers:M._getApiHeaders(),body:{eventId:c.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){N.timestamp=Date.now(),N.data=e,d.state.enableAnalytics&&M._sendAnalyticsEvent(N)}};var j=r(32);const U=(0,n.BX)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),B={state:U,subscribe:e=>(0,n.B1)(U,(()=>e(U))),subscribeKey:(e,t)=>(0,i.u$)(U,e,t),_getClient(){if(!U._client)throw new Error("NetworkController client not set");return U._client},setClient(e){U._client=(0,n.KR)(e)},setCaipNetwork(e){U.caipNetwork=e,T.set({selectedNetworkId:e?.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(e){U.caipNetwork=e,T.set({selectedNetworkId:e?.id}),U.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){U.requestedCaipNetworks=e},setAllowUnsupportedChain(e){U.allowUnsupportedChain=e},setSmartAccountEnabledNetworks(e){U.smartAccountEnabledNetworks=e},getRequestedCaipNetworks(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=U,r=e,i=t;return c.sortRequestedNetworks(r,i)},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();U.supportsAllNetworks=e.supportsAllNetworks,U.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),U.caipNetwork=e,e&&M.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.id}})},checkIfSupportedNetwork(){U.isUnsupportedChain=!U.requestedCaipNetworks?.some((e=>e.id===U.caipNetwork?.id)),U.isUnsupportedChain&&this.showUnsupportedChainUI()},checkIfSmartAccountEnabled(){const e=j.L.caipNetworkIdToNumber(U.caipNetwork?.id);return!!e&&Boolean(U.smartAccountEnabledNetworks?.includes(e))},resetNetwork(){U.isDefaultCaipNetwork||(U.caipNetwork=void 0),U.approvedCaipNetworkIds=void 0,U.supportsAllNetworks=!0,U.smartAccountEnabledNetworks=[]},showUnsupportedChainUI(){setTimeout((()=>{q.open({view:"UnsupportedChain"})}),300)}},D=new l({baseUrl:c.getApiUrl()}),L=(0,n.BX)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),z={state:L,subscribeKey:(e,t)=>(0,i.u$)(L,e,t),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:r}=d.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){const t=`${D.baseUrl}/getWalletImage/${e}`,r=await D.getBlob({path:t,headers:z._getApiHeaders()});_.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){const t=`${D.baseUrl}/public/getAssetImage/${e}`,r=await D.getBlob({path:t,headers:z._getApiHeaders()});_.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){const t=`${D.baseUrl}/public/getAssetImage/${e}`,r=await D.getBlob({path:t,headers:z._getApiHeaders()});_.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){const t=`${D.baseUrl}/public/getCurrencyImage/${e}`,r=await D.getBlob({path:t,headers:z._getApiHeaders()});_.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){const t=`${D.baseUrl}/public/getTokenImage/${e}`,r=await D.getBlob({path:t,headers:z._getApiHeaders()});_.setTokenImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=B.state,t=e?.map((({imageId:e})=>e)).filter(Boolean);t&&await Promise.allSettled(t.map((e=>z._fetchNetworkImage(e))))},async fetchConnectorImages(){const{connectors:e}=S.state,t=e.map((({imageId:e})=>e)).filter(Boolean);await Promise.allSettled(t.map((e=>z._fetchConnectorImage(e))))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map((e=>z._fetchCurrencyImage(e))))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map((e=>z._fetchTokenImage(e))))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=d.state;if(e?.length){const{data:t}=await D.get({path:"/getWallets",headers:z._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort(((t,r)=>e.indexOf(t.id)-e.indexOf(r.id)));const r=t.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(r.map((e=>z._fetchWalletImage(e)))),L.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=d.state,i=[...t??[],...r??[]].filter(Boolean),{data:n,count:o}=await D.get({path:"/getWallets",headers:z._getApiHeaders(),params:{page:"1",chains:B.state.caipNetwork?.id,entries:"4",include:e?.join(","),exclude:i?.join(",")}}),a=E.getRecentWallets(),s=n.map((e=>e.image_id)).filter(Boolean),c=a.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...s,...c].map((e=>z._fetchWalletImage(e)))),L.recommended=n,L.count=o??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:i}=d.state,n=[...L.recommended.map((({id:e})=>e)),...r??[],...i??[]].filter(Boolean),{data:o,count:a}=await D.get({path:"/getWallets",headers:z._getApiHeaders(),params:{page:String(e),entries:"40",chains:B.state.caipNetwork?.id,include:t?.join(","),exclude:n.join(",")}}),s=o.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...s.map((e=>z._fetchWalletImage(e))),c.wait(300)]),L.wallets=[...L.wallets,...o],L.count=a>L.count?a:L.count,L.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:r}=d.state;L.search=[];const{data:i}=await D.get({path:"/getWallets",headers:z._getApiHeaders(),params:{page:"1",entries:"100",search:e,chains:B.state.caipNetwork?.id,include:t?.join(","),exclude:r?.join(",")}}),n=i.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...n.map((e=>z._fetchWalletImage(e))),c.wait(300)]),L.search=i},async reFetchWallets(){L.page=1,L.wallets=[],await z.fetchFeaturedWallets(),await z.fetchRecommendedWallets()},prefetch(){const e=[z.fetchFeaturedWallets(),z.fetchRecommendedWallets(),z.fetchNetworkImages(),z.fetchConnectorImages()];void 0===d.state.enableAnalytics&&e.push(z.fetchAnalyticsConfig()),L.prefetchPromise=Promise.race([Promise.allSettled(e),c.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:e}=await D.get({path:"/getAnalyticsConfig",headers:z._getApiHeaders()});d.setEnableAnalytics(e)}},F=(0,n.BX)({view:"Connect",history:["Connect"]}),W={state:F,subscribeKey:(e,t)=>(0,i.u$)(F,e,t),push(e,t){e!==F.view&&(F.view=e,F.history.push(e),F.data=t)},reset(e){F.view=e,F.history=[e]},replace(e,t){F.history.length>1&&F.history.at(-1)!==e&&(F.view=e,F.history[F.history.length-1]=e,F.data=t)},goBack(){if(F.history.length>1){F.history.pop();const[e]=F.history.slice(-1);e&&(F.view=e)}},goBackToIndex(e){if(F.history.length>1){F.history=F.history.slice(0,e+1);const[t]=F.history.slice(-1);t&&(F.view=t)}}},H=(0,n.BX)({loading:!1,open:!1}),q={state:H,subscribe:e=>(0,n.B1)(H,(()=>e(H))),subscribeKey:(e,t)=>(0,i.u$)(H,e,t),async open(e){await z.state.prefetchPromise;const t=v.state.isConnected;e?.view?W.reset(e.view):t?W.reset("Account"):W.reset("Connect"),H.open=!0,T.set({open:!0}),M.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:t}})},close(){const e=v.state.isConnected;H.open=!1,T.set({open:!1}),M.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}})},setLoading(e){H.loading=e}},Z={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},V={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},G={providers:a,selectedProvider:null,error:null,purchaseCurrency:Z,paymentCurrency:V,purchaseCurrencies:[Z],paymentCurrencies:[],quotesLoading:!1},K=(0,n.BX)(G),Y={state:K,subscribe:e=>(0,n.B1)(K,(()=>e(K))),subscribeKey:(e,t)=>(0,i.u$)(K,e,t),setSelectedProvider(e){K.selectedProvider=e},setPurchaseCurrency(e){K.purchaseCurrency=e},setPaymentCurrency(e){K.paymentCurrency=e},setPurchaseAmount(e){this.state.purchaseAmount=e},setPaymentAmount(e){this.state.paymentAmount=e},async getAvailableCurrencies(){const e=await f.getOnrampOptions();K.purchaseCurrencies=e.purchaseCurrencies,K.paymentCurrencies=e.paymentCurrencies,K.paymentCurrency=e.paymentCurrencies[0]||V,K.purchaseCurrency=e.purchaseCurrencies[0]||Z,await z.fetchCurrencyImages(e.paymentCurrencies.map((e=>e.id))),await z.fetchTokenImages(e.purchaseCurrencies.map((e=>e.symbol)))},async getQuote(){K.quotesLoading=!0;try{const e=await f.getOnrampQuote({purchaseCurrency:K.purchaseCurrency,paymentCurrency:K.paymentCurrency,amount:K.paymentAmount?.toString()||"0",network:K.purchaseCurrency?.symbol});return K.quotesLoading=!1,K.purchaseAmount=Number(e.purchaseAmount.amount),e}catch(e){return K.error=e.message,K.quotesLoading=!1,null}finally{K.quotesLoading=!1}},resetState(){K.providers=a,K.selectedProvider=null,K.error=null,K.purchaseCurrency=Z,K.paymentCurrency=V,K.purchaseCurrencies=[Z],K.paymentCurrencies=[],K.paymentAmount=void 0,K.purchaseAmount=void 0,K.quotesLoading=!1}},J=(0,n.BX)({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Q={state:J,subscribe:e=>(0,n.B1)(J,(()=>e(J))),async fetchTransactions(e,t){const{projectId:r}=d.state;if(!r||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");J.loading=!0;try{const i=await f.fetchTransactions({account:e,projectId:r,cursor:J.next,onramp:t}),n=this.filterSpamTransactions(i.data),o=[...J.transactions,...n];J.loading=!1,"coinbase"===t?J.coinbaseTransactions=this.groupTransactionsByYearAndMonth(J.coinbaseTransactions,i.data):(J.transactions=o,J.transactionsByYear=this.groupTransactionsByYearAndMonth(J.transactionsByYear,n)),J.empty=0===o.length,J.next=i.next?i.next:void 0}catch(t){M.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:r,cursor:J.next}}),w.showError("Failed to fetch transactions"),J.loading=!1,J.empty=!0,J.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){const r=e;return t.forEach((e=>{const t=new Date(e.metadata.minedAt).getFullYear(),i=new Date(e.metadata.minedAt).getMonth(),n=r[t]??{},o=(n[i]??[]).filter((t=>t.id!==e.id));r[t]={...n,[i]:[...o,e].sort(((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime()))}})),r},filterSpamTransactions:e=>e.filter((e=>!e.transfers.every((e=>!0===e.nft_info?.flags.is_spam)))),clearCursor(){J.next=void 0},resetTransactions(){J.transactions=[],J.transactionsByYear={},J.loading=!1,J.empty=!1,J.next=void 0}},X=(0,n.BX)({wcError:!1,buffering:!1}),ee={state:X,subscribeKey:(e,t)=>(0,i.u$)(X,e,t),_getClient(){if(!X._client)throw new Error("ConnectionController client not set");return X._client},setClient(e){X._client=(0,n.KR)(e)},connectWalletConnect(){X.wcPromise=this._getClient().connectWalletConnect((e=>{X.wcUri=e,X.wcPairingExpiry=c.getPairingExpiry()})),E.setConnectedConnector("WALLET_CONNECT")},async connectExternal(e){await(this._getClient().connectExternal?.(e)),E.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){X.wcUri=void 0,X.wcPairingExpiry=void 0,X.wcPromise=void 0,X.wcLinking=void 0,X.recentWallet=void 0,Q.resetTransactions(),E.deleteWalletConnectDeepLink()},setWcLinking(e){X.wcLinking=e},setWcError(e){X.wcError=e,X.buffering=!1},setRecentWallet(e){X.recentWallet=e},setBuffering(e){X.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},te=(0,n.BX)({}),re={state:te,subscribe:e=>(0,n.B1)(te,(()=>e(te))),subscribeKey:(e,t)=>(0,i.u$)(te,e,t),setToken(e){e&&(te.token=(0,n.KR)(e))},setTokenAmount(e){te.sendTokenAmount=e},setReceiverAddress(e){te.receiverAddress=e},setReceiverProfileImageUrl(e){te.receiverProfileImageUrl=e},setReceiverProfileName(e){te.receiverProfileName=e},resetSend(){te.token=void 0,te.sendTokenAmount=void 0,te.receiverAddress=void 0,te.receiverProfileImageUrl=void 0,te.receiverProfileName=void 0}},ie={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?_.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?_.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?_.state.connectorImages[e.imageId]:void 0},ne={goBackOrCloseModal(){W.state.history.length>1?W.goBack():q.close()},navigateAfterNetworkSwitch(){const{history:e}=W.state,t=e.findIndex((e=>"Networks"===e));t>=1?W.goBackToIndex(t-1):q.close()}}},505:(e,t,r)=>{"use strict";r.r(t),r.d(t,{W3mModal:()=>u});var i=r(1171),n=r(2657),o=r(5269),a=r(7332);const s=o.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var c=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const l="scroll-lock";let u=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.W3.state.open,this.caipAddress=i.AccountController.state.caipAddress,this.isSiweEnabled=i.OptionsController.state.isSiweEnabled,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(i.W3.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),i.AccountController.subscribe((e=>this.onNewAccountState(e)))),i.En.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?o.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){const{SIWEController:e}=await r.e(737).then(r.bind(r,3737));"success"!==e.state.status&&await i.ConnectionController.disconnect()}i.W3.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=i.ThemeController.state,r=n.UiHelperUtil.getColorTheme(t);(0,n.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,i.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=l,e.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${l}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:t,caipAddress:i}=e;if(this.isSiweEnabled){const{SIWEController:e}=await r.e(737).then(r.bind(r,3737));t&&!this.caipAddress&&(this.caipAddress=i),t&&i&&this.caipAddress!==i&&(await e.signOut(),this.onSiweNavigation(),this.caipAddress=i);try{const r=await e.getSession();r&&!t?await e.signOut():t&&!r&&this.onSiweNavigation()}catch(e){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?i.RouterController.push("ConnectingSiwe"):i.W3.open({view:"ConnectingSiwe"})}};u.styles=s,c([(0,a.wk)()],u.prototype,"open",void 0),c([(0,a.wk)()],u.prototype,"caipAddress",void 0),c([(0,a.wk)()],u.prototype,"isSiweEnabled",void 0),u=c([(0,n.customElement)("w3m-modal")],u)},103:(e,t,r)=>{"use strict";r.d(t,{mN:()=>_,AH:()=>c,W3:()=>x,Ec:()=>E});const i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}const c=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1]),e[0]);return new s(r,e,o)},l=(e,t)=>{if(n)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},u=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:d,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:w}=Object,m=globalThis,v=m.trustedTypes,b=v?v.emptyScript:"",y=m.reactiveElementPolyfillSupport,C=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!d(e,t),k={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&h(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:n}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,t=[...f(e),...g(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:x).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??E)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[C("elementProperties")]=new Map,_[C("finalized")]=new Map,y?.({ReactiveElement:_}),(m.reactiveElementVersions??=[]).push("2.0.4")},6097:(e,t,r)=>{"use strict";r.d(t,{XX:()=>F,c0:()=>_,ge:()=>L,qy:()=>k,s6:()=>A});const i=globalThis,n=i.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,c="?"+s,l=`<${c}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,p=Array.isArray,f=e=>p(e)||"function"==typeof e?.[Symbol.iterator],g="[ \t\n\f\r]",w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,v=/>/g,b=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,C=/"/g,x=/^(?:script|style|textarea|title)$/i,E=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),k=E(1),_=(E(2),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),R=new WeakMap,$=u.createTreeWalker(u,129);function S(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}const P=(e,t)=>{const r=e.length-1,i=[];let n,o=2===t?"<svg>":"",c=w;for(let t=0;t<r;t++){const r=e[t];let u,d,h=-1,p=0;for(;p<r.length&&(c.lastIndex=p,d=c.exec(r),null!==d);)p=c.lastIndex,c===w?"!--"===d[1]?c=m:void 0!==d[1]?c=v:void 0!==d[2]?(x.test(d[2])&&(n=RegExp("</"+d[2],"g")),c=b):void 0!==d[3]&&(c=b):c===b?">"===d[0]?(c=n??w,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,u=d[1],c=void 0===d[3]?b:'"'===d[3]?C:y):c===C||c===y?c=b:c===m||c===v?c=w:(c=b,n=void 0);const f=c===b&&e[t+1].startsWith("/>")?" ":"";o+=c===w?r+l:h>=0?(i.push(u),r.slice(0,h)+a+r.slice(h)+s+f):r+s+(-2===h?t:f)}return[S(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class T{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,l=0;const u=e.length-1,h=this.parts,[p,f]=P(e,t);if(this.el=T.createElement(p,r),$.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=$.nextNode())&&h.length<u;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(a)){const t=f[l++],r=i.getAttribute(e).split(s),n=/([.?@])?(.*)/.exec(t);h.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?j:"?"===n[1]?U:"@"===n[1]?B:M}),i.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:o}),i.removeAttribute(e));if(x.test(i.tagName)){const e=i.textContent.split(s),t=e.length-1;if(t>0){i.textContent=n?n.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],d()),$.nextNode(),h.push({type:2,index:++o});i.append(e[t],d())}}}else if(8===i.nodeType)if(i.data===c)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(s,e+1));)h.push({type:7,index:o}),e+=s.length-1}o++}}static createElement(e,t){const r=u.createElement("template");return r.innerHTML=e,r}}function I(e,t,r=e,i){if(t===_)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl;const o=h(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,r,i)),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=I(e,n._$AS(e,t.values),n,i)),t}class O{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??u).importNode(t,!0);$.currentNode=i;let n=$.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new N(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new D(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=$.nextNode(),o++)}return $.currentNode=u,i}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),h(e)?e===A||null==e||""===e?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==_&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):f(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==A&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=T.createElement(S(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new O(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return void 0===t&&R.set(e.strings,t=new T(e)),t}k(e){p(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new N(this.S(d()),this.S(d()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class M{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}_$AI(e,t=this,r,i){const n=this.strings;let o=!1;if(void 0===n)e=I(this,e,t,0),o=!h(e)||e!==this._$AH&&e!==_,o&&(this._$AH=e);else{const i=e;let a,s;for(e=n[0],a=0;a<n.length-1;a++)s=I(this,i[r+a],t,a),s===_&&(s=this._$AH[a]),o||=!h(s)||s!==this._$AH[a],s===A?e=A:e!==A&&(e+=(s??"")+n[a+1]),this._$AH[a]=s}o&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class j extends M{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class U extends M{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class B extends M{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??A)===_)return;const r=this._$AH,i=e===A&&r!==A||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==A&&(r===A||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class D{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const L={P:a,A:s,C:c,M:1,L:P,R:O,D:f,V:I,I:N,H:M,N:U,U:B,B:j,F:D},z=i.litHtmlPolyfillSupport;z?.(T,N),(i.litHtmlVersions??=[]).push("3.1.2");const F=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=r?.renderBefore??null;i._$litPart$=n=new N(t.insertBefore(d(),e),e,void 0,r??{})}return n._$AI(e),n}},7332:(e,t,r)=>{"use strict";r.d(t,{MZ:()=>a,wk:()=>s});var i=r(103);const n={attribute:!0,type:String,converter:i.W3,reflect:!1,hasChanged:i.Ec},o=(e=n,t,r)=>{const{kind:i,metadata:o}=r;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),"accessor"===i){const{name:i}=r;return{set(r){const n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=r;return function(r){const n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function a(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{const i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function s(e){return a({...e,state:!0,attribute:!1})}},5269:(e,t,r)=>{"use strict";r.d(t,{WF:()=>o,AH:()=>i.AH,qy:()=>n.qy});var i=r(103),n=r(6097);class o extends i.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,n.XX)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.c0}}o._$litElement$=!0,o.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:o});const a=globalThis.litElementPolyfillSupport;a?.({LitElement:o}),(globalThis.litElementVersions??=[]).push("4.0.4")},2657:(e,t,r)=>{"use strict";r.r(t),r.d(t,{TransactionUtil:()=>ga,UiHelperUtil:()=>jr,WuiAccountButton:()=>Gr,WuiAllWalletsImage:()=>ei,WuiAvatar:()=>Fr,WuiBalance:()=>Po,WuiBanner:()=>Fo,WuiButton:()=>ni,WuiCard:()=>Re,WuiCardSelect:()=>wi,WuiCardSelectLoader:()=>ci,WuiChip:()=>bi,WuiChipButton:()=>jo,WuiCompatibleNetwork:()=>Do,WuiConnectButton:()=>xi,WuiCtaButton:()=>_i,WuiEmailInput:()=>Wi,WuiFlex:()=>Dr,WuiGrid:()=>ca,WuiIcon:()=>Wt,WuiIconBox:()=>qr,WuiIconLink:()=>Zi,WuiImage:()=>Zt,WuiInputAmount:()=>Xo,WuiInputElement:()=>Ki,WuiInputNumeric:()=>Qi,WuiInputText:()=>Li,WuiLink:()=>tn,WuiListAccordion:()=>no,WuiListContent:()=>so,WuiListDescription:()=>Go,WuiListItem:()=>on,WuiListNetwork:()=>uo,WuiListToken:()=>qo,WuiListWallet:()=>yn,WuiListWalletTransaction:()=>fo,WuiLoadingHexagon:()=>Gt,WuiLoadingSpinner:()=>Jt,WuiLoadingThumbnail:()=>er,WuiLogo:()=>En,WuiLogoSelect:()=>An,WuiNetworkButton:()=>Sn,WuiNetworkImage:()=>pi,WuiNoticeCard:()=>to,WuiOnRampActivityItem:()=>vo,WuiOnRampProviderItem:()=>Co,WuiOtp:()=>In,WuiPreviewItem:()=>oa,WuiProfileButton:()=>Oo,WuiPromo:()=>ko,WuiQrCode:()=>Bn,WuiSearchBar:()=>Ln,WuiSeparator:()=>da,WuiShimmer:()=>ir,WuiSnackbar:()=>Wn,WuiTabs:()=>Zn,WuiTag:()=>mn,WuiText:()=>lr,WuiTokenButton:()=>ra,WuiTooltip:()=>Kn,WuiTooltipSelect:()=>Ro,WuiTransactionListItem:()=>hn,WuiTransactionListItemLoader:()=>fn,WuiTransactionVisual:()=>ln,WuiVisual:()=>Nr,WuiVisualThumbnail:()=>Qn,WuiWalletImage:()=>Jr,customElement:()=>_e,initializeTheming:()=>ve,setColorTheme:()=>be,setThemeVariables:()=>ye});const i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}const c=e=>new s("string"==typeof e?e:e+"",void 0,o),l=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1]),e[0]);return new s(r,e,o)},u=(e,t)=>{if(n)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},d=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return c(t)})(e):e,{is:h,defineProperty:p,getOwnPropertyDescriptor:f,getOwnPropertyNames:g,getOwnPropertySymbols:w,getPrototypeOf:m}=Object,v=globalThis,b=v.trustedTypes,y=b?b.emptyScript:"",C=v.reactiveElementPolyfillSupport,x=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},k=(e,t)=>!h(e,t),_={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&p(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:n}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...g(e),...w(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??k)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,C?.({ReactiveElement:A}),(v.reactiveElementVersions??=[]).push("2.0.4");const R=globalThis,$=R.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,P="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,I="?"+T,O=`<${I}>`,N=document,M=()=>N.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,B=e=>U(e)||"function"==typeof e?.[Symbol.iterator],D="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,W=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,q=/"/g,Z=/^(?:script|style|textarea|title)$/i,V=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),G=V(1),K=V(2),Y=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Q=new WeakMap,X=N.createTreeWalker(N,129);function ee(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const te=(e,t)=>{const r=e.length-1,i=[];let n,o=2===t?"<svg>":"",a=L;for(let t=0;t<r;t++){const r=e[t];let s,c,l=-1,u=0;for(;u<r.length&&(a.lastIndex=u,c=a.exec(r),null!==c);)u=a.lastIndex,a===L?"!--"===c[1]?a=z:void 0!==c[1]?a=F:void 0!==c[2]?(Z.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=W):void 0!==c[3]&&(a=W):a===W?">"===c[0]?(a=n??L,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?W:'"'===c[3]?q:H):a===q||a===H?a=W:a===z||a===F?a=L:(a=W,n=void 0);const d=a===W&&e[t+1].startsWith("/>")?" ":"";o+=a===L?r+O:l>=0?(i.push(s),r.slice(0,l)+P+r.slice(l)+T+d):r+T+(-2===l?t:d)}return[ee(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class re{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0;const a=e.length-1,s=this.parts,[c,l]=te(e,t);if(this.el=re.createElement(c,r),X.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=X.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(P)){const t=l[o++],r=i.getAttribute(e).split(T),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?se:"?"===a[1]?ce:"@"===a[1]?le:ae}),i.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:n}),i.removeAttribute(e));if(Z.test(i.tagName)){const e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=$?$.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],M()),X.nextNode(),s.push({type:2,index:++n});i.append(e[t],M())}}}else if(8===i.nodeType)if(i.data===I)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(T,e+1));)s.push({type:7,index:n}),e+=T.length-1}n++}}static createElement(e,t){const r=N.createElement("template");return r.innerHTML=e,r}}function ie(e,t,r=e,i){if(t===Y)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl;const o=j(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,r,i)),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=ie(e,n._$AS(e,t.values),n,i)),t}class ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??N).importNode(t,!0);X.currentNode=i;let n=X.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new oe(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ue(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=X.nextNode(),o++)}return X.currentNode=N,i}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ie(this,e,t),j(e)?e===J||null==e||""===e?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==Y&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):B(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==J&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=re.createElement(ee(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ne(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new re(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new oe(this.S(M()),this.S(M()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=J}_$AI(e,t=this,r,i){const n=this.strings;let o=!1;if(void 0===n)e=ie(this,e,t,0),o=!j(e)||e!==this._$AH&&e!==Y,o&&(this._$AH=e);else{const i=e;let a,s;for(e=n[0],a=0;a<n.length-1;a++)s=ie(this,i[r+a],t,a),s===Y&&(s=this._$AH[a]),o||=!j(s)||s!==this._$AH[a],s===J?e=J:e!==J&&(e+=(s??"")+n[a+1]),this._$AH[a]=s}o&&!i&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}}class ce extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}}class le extends ae{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=ie(this,e,t,0)??J)===Y)return;const r=this._$AH,i=e===J&&r!==J||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==J&&(r===J||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ue{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const de={P,A:T,C:I,M:1,L:te,R:ne,D:B,V:ie,I:oe,H:ae,N:ce,U:le,B:se,F:ue},he=R.litHtmlPolyfillSupport;he?.(re,oe),(R.litHtmlVersions??=[]).push("3.1.2");class pe extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=r?.renderBefore??null;i._$litPart$=n=new oe(t.insertBefore(M(),e),e,void 0,r??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}pe._$litElement$=!0,pe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:pe});const fe=globalThis.litElementPolyfillSupport;let ge,we,me;function ve(e,t){ge=document.createElement("style"),we=document.createElement("style"),me=document.createElement("style"),ge.textContent=Ce(e).core.cssText,we.textContent=Ce(e).dark.cssText,me.textContent=Ce(e).light.cssText,document.head.appendChild(ge),document.head.appendChild(we),document.head.appendChild(me),be(t)}function be(e){we&&me&&("light"===e?(we.removeAttribute("media"),me.media="enabled"):(me.removeAttribute("media"),we.media="enabled"))}function ye(e){ge&&we&&me&&(ge.textContent=Ce(e).core.cssText,we.textContent=Ce(e).dark.cssText,me.textContent=Ce(e).light.cssText)}function Ce(e){return{core:l`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${c(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${c(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${c(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${c(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${c(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:l`
      :root {
        --w3m-color-mix: ${c(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${c(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-gray-glass-090: rgba(255, 255, 255, 0.9);
      }
    `,dark:l`
      :root {
        --w3m-color-mix: ${c(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${c(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}fe?.({LitElement:pe}),(globalThis.litElementVersions??=[]).push("4.0.4");const xe=l`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Ee=l`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,ke=l`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function _e(e){return function(t){return"function"==typeof t?function(e,t){return customElements.get(e)||customElements.define(e,t),t}(e,t):function(e,t){const{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}const Ae=l`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let Re=class extends pe{render(){return G`<slot></slot>`}};Re.styles=[xe,Ae],Re=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([_e("wui-card")],Re);const $e={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k},Se=(e=$e,t,r)=>{const{kind:i,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(r.name,e),"accessor"===i){const{name:i}=r;return{set(r){const n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=r;return function(r){const n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function Pe(e){return(t,r)=>"object"==typeof r?Se(e,t,r):((e,t,r)=>{const i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function Te(e){return Pe({...e,state:!0,attribute:!1})}const Ie=l`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Oe=K`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Ne=K`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,Me=K`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,je=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Ue=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Be=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,De=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Le=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,ze=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,Fe=K`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,We=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,He=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,qe=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ze=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Ve=K`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,Ge=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ke=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Ye=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Je=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Qe=K`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,Xe=K`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,et=K` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,tt=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,rt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,it=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,nt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,ot=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,at=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,st=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ct=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,lt=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ut=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,dt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,ht=K`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,pt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,ft=K`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,gt=K`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,wt=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,mt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,vt=K` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,bt=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,yt=K`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Ct=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,xt=K`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,Et=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,kt=K`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,_t=K`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,At=K`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Rt=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,$t=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,St=K`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Pt=K`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Tt=K`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,It=K`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,Ot=K`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Nt=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,Mt=K`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,jt=K`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ut=K`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,Bt=K`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,Dt=K`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,Lt=K`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`;var zt=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const Ft={add:Xe,allWallets:Oe,arrowBottomCircle:Ne,appStore:Me,apple:je,arrowBottom:Ue,arrowLeft:Be,arrowRight:De,arrowTop:Le,bank:Bt,browser:ze,card:Dt,checkmark:Fe,chevronBottom:We,chevronLeft:He,chevronRight:qe,chevronTop:Ze,chromeStore:Ve,clock:Ge,close:Ke,compass:Je,coinPlaceholder:Ye,copy:Qe,cursor:et,cursorTransparent:K`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,desktop:tt,disconnect:rt,discord:it,etherscan:nt,extension:ot,externalLink:at,facebook:st,filters:ct,github:lt,google:ut,helpCircle:dt,infoCircle:ht,mail:pt,mobile:ft,networkPlaceholder:gt,nftPlaceholder:wt,off:mt,playStore:vt,plus:Lt,qrCode:bt,recycleHorizontal:Ut,refresh:yt,search:Ct,send:xt,swapHorizontal:Et,swapHorizontalMedium:_t,swapHorizontalBold:kt,swapVertical:At,telegram:Rt,twitch:$t,twitter:St,twitterIcon:Pt,verify:Tt,verifyFilled:It,wallet:Nt,walletConnect:Mt,walletPlaceholder:Ot,warningCircle:jt};let Wt=class extends pe{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,G`${Ft[this.name]}`}};Wt.styles=[xe,ke,Ie],zt([Pe()],Wt.prototype,"size",void 0),zt([Pe()],Wt.prototype,"name",void 0),zt([Pe()],Wt.prototype,"color",void 0),Wt=zt([_e("wui-icon")],Wt);const Ht=l`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var qt=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Zt=class extends pe{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return G`<img src=${this.src} alt=${this.alt} />`}};Zt.styles=[xe,ke,Ht],qt([Pe()],Zt.prototype,"src",void 0),qt([Pe()],Zt.prototype,"alt",void 0),Zt=qt([_e("wui-image")],Zt);const Vt=l`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let Gt=class extends pe{render(){return G`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Gt.styles=[xe,Vt],Gt=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([_e("wui-loading-hexagon")],Gt);const Kt=l`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Yt=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Jt=class extends pe{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,G`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Jt.styles=[xe,Kt],Yt([Pe()],Jt.prototype,"color",void 0),Yt([Pe()],Jt.prototype,"size",void 0),Jt=Yt([_e("wui-loading-spinner")],Jt);const Qt=l`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Xt=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let er=class extends pe{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e;return G`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};er.styles=[xe,Qt],Xt([Pe({type:Number})],er.prototype,"radius",void 0),er=Xt([_e("wui-loading-thumbnail")],er);const tr=l`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var rr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ir=class extends pe{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,G`<slot></slot>`}};ir.styles=[tr],rr([Pe()],ir.prototype,"width",void 0),rr([Pe()],ir.prototype,"height",void 0),rr([Pe()],ir.prototype,"borderRadius",void 0),ir=rr([_e("wui-shimmer")],ir);const nr=e=>(...t)=>({_$litDirective$:e,values:t});class or{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ar=nr(class extends or{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const r=e.element.classList;for(const e of this.st)e in t||(r.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return Y}}),sr=l`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var cr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let lr=class extends pe{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,G`<slot class=${ar(e)}></slot>`}};lr.styles=[xe,sr],cr([Pe()],lr.prototype,"variant",void 0),cr([Pe()],lr.prototype,"color",void 0),cr([Pe()],lr.prototype,"align",void 0),lr=cr([_e("wui-text")],lr);const ur=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,dr=K`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,hr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,pr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,fr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,gr=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,wr=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,mr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,vr=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,br=K`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,yr=K`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Cr=K`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,xr=K`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Er=K`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,kr=K`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,_r=K`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Ar=K`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Rr=K`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,$r=K`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,Sr=K`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Pr=K`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Tr=l`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var Ir=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const Or={browser:ur,dao:dr,defi:hr,defiAlt:pr,eth:fr,layers:gr,lock:wr,login:mr,network:vr,nft:br,noun:yr,profile:Cr,system:xr,coinbase:Er,onrampCard:Rr,moonpay:kr,stripe:_r,paypal:Ar,google:$r,pencil:Sr,lightbulb:Pr};let Nr=class extends pe{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`\n       --local-size: var(--wui-visual-size-${this.size});\n   `,G`${Or[this.name]}`}};Nr.styles=[xe,Tr],Ir([Pe()],Nr.prototype,"name",void 0),Ir([Pe()],Nr.prototype,"size",void 0),Nr=Ir([_e("wui-visual")],Nr);const Mr=e=>e??J,jr={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:i})=>e.length<=t+r?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(i?.replace("px","")),o=`${n}% ${n}% at 65% 40%`,a=[];for(let e=0;e<5;e+=1){const t=this.tintColor(r,.15*e);a.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${a[0]};\n    --local-color-2: ${a[1]};\n    --local-color-3: ${a[2]};\n    --local-color-4: ${a[3]};\n    --local-color-5: ${a[4]};\n    --local-radial-circle: ${o}\n   `},hexToRgb(e){const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){const[r,i,n]=e;return[Math.round(r+(255-r)*t),Math.round(i+(255-i)*t),Math.round(n+(255-n)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"),splitBalance(e){const t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]},roundNumber:(e,t,r)=>Math.abs(e)>=t?Number(e.toFixed(r)):e},Ur=l`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Br=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Dr=class extends pe{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&jr.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&jr.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&jr.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&jr.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&jr.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&jr.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&jr.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&jr.getSpacingStyles(this.margin,3)};\n    `,G`<slot></slot>`}};Dr.styles=[xe,Ur],Br([Pe()],Dr.prototype,"flexDirection",void 0),Br([Pe()],Dr.prototype,"flexWrap",void 0),Br([Pe()],Dr.prototype,"flexBasis",void 0),Br([Pe()],Dr.prototype,"flexGrow",void 0),Br([Pe()],Dr.prototype,"flexShrink",void 0),Br([Pe()],Dr.prototype,"alignItems",void 0),Br([Pe()],Dr.prototype,"justifyContent",void 0),Br([Pe()],Dr.prototype,"columnGap",void 0),Br([Pe()],Dr.prototype,"rowGap",void 0),Br([Pe()],Dr.prototype,"gap",void 0),Br([Pe()],Dr.prototype,"padding",void 0),Br([Pe()],Dr.prototype,"margin",void 0),Dr=Br([_e("wui-flex")],Dr);const Lr=l`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var zr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Fr=class extends pe{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return G`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",G`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=jr.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Fr.styles=[xe,Lr],zr([Pe()],Fr.prototype,"imageSrc",void 0),zr([Pe()],Fr.prototype,"alt",void 0),zr([Pe()],Fr.prototype,"address",void 0),Fr=zr([_e("wui-avatar")],Fr);const Wr=l`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Hr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let qr=class extends pe{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,i=t?"12%":"16%",n=t?"xxs":r?"s":"3xl",o="gray"===this.background,a="opaque"===this.background,s="accent-100"===this.backgroundColor&&a||"success-100"===this.backgroundColor&&a||"error-100"===this.backgroundColor&&a||"inverse-100"===this.backgroundColor&&a;let c=`var(--wui-color-${this.backgroundColor})`;return s?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(c=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${c};\n       --local-bg-mix: ${s||o?"100%":i};\n       --local-border-radius: var(--wui-border-radius-${n});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,G` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};qr.styles=[xe,Ee,Wr],Hr([Pe()],qr.prototype,"size",void 0),Hr([Pe()],qr.prototype,"backgroundColor",void 0),Hr([Pe()],qr.prototype,"iconColor",void 0),Hr([Pe()],qr.prototype,"iconSize",void 0),Hr([Pe()],qr.prototype,"background",void 0),Hr([Pe({type:Boolean})],qr.prototype,"border",void 0),Hr([Pe()],qr.prototype,"borderColor",void 0),Hr([Pe()],qr.prototype,"icon",void 0),qr=Hr([_e("wui-icon-box")],qr);const Zr=l`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Vr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Gr=class extends pe{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return G`
      <button
        ?disabled=${this.disabled}
        class=${Mr(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?jr.getTruncateString({string:this.isProfileName?this.profileName:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return G` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?G`<wui-image src=${this.networkSrc}></wui-image>`:G`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return G`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};Gr.styles=[xe,Ee,Zr],Vr([Pe()],Gr.prototype,"networkSrc",void 0),Vr([Pe()],Gr.prototype,"avatarSrc",void 0),Vr([Pe()],Gr.prototype,"balance",void 0),Vr([Pe({type:Boolean})],Gr.prototype,"isUnsupportedChain",void 0),Vr([Pe({type:Boolean})],Gr.prototype,"disabled",void 0),Vr([Pe({type:Boolean})],Gr.prototype,"isProfileName",void 0),Vr([Pe()],Gr.prototype,"address",void 0),Vr([Pe()],Gr.prototype,"profileName",void 0),Vr([Pe()],Gr.prototype,"charsStart",void 0),Vr([Pe()],Gr.prototype,"charsEnd",void 0),Gr=Vr([_e("wui-account-button")],Gr);const Kr=l`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Yr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Jr=class extends pe{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),G`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?G`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?G`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:G`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Jr.styles=[xe,Kr],Yr([Pe()],Jr.prototype,"size",void 0),Yr([Pe()],Jr.prototype,"name",void 0),Yr([Pe()],Jr.prototype,"imageSrc",void 0),Yr([Pe()],Jr.prototype,"walletIcon",void 0),Yr([Pe({type:Boolean})],Jr.prototype,"installed",void 0),Yr([Pe()],Jr.prototype,"badgeSize",void 0),Jr=Yr([_e("wui-wallet-image")],Jr);const Qr=l`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Xr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ei=class extends pe{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return G`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>G`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${Mr(t)}
            ></wui-wallet-image>
          `))}
      ${e?[...Array(4-this.walletImages.length)].map((()=>G` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};ei.styles=[xe,Qr],Xr([Pe({type:Array})],ei.prototype,"walletImages",void 0),ei=Xr([_e("wui-all-wallets-image")],ei);const ti=l`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ri=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const ii={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"};let ni=class extends pe{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=this.textVariant??ii[this.size];return G`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?G`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:G``}};ni.styles=[xe,Ee,ti],ri([Pe()],ni.prototype,"size",void 0),ri([Pe({type:Boolean})],ni.prototype,"disabled",void 0),ri([Pe({type:Boolean})],ni.prototype,"fullWidth",void 0),ri([Pe({type:Boolean})],ni.prototype,"loading",void 0),ri([Pe()],ni.prototype,"variant",void 0),ri([Pe({type:Boolean})],ni.prototype,"hasIconLeft",void 0),ri([Pe({type:Boolean})],ni.prototype,"hasIconRight",void 0),ri([Pe()],ni.prototype,"borderRadius",void 0),ri([Pe()],ni.prototype,"textVariant",void 0),ni=ri([_e("wui-button")],ni);const oi=K`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,ai=l`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var si=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ci=class extends pe{constructor(){super(...arguments),this.type="wallet"}render(){return G`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?G` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${oi}`:G`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ci.styles=[xe,Ee,ai],si([Pe()],ci.prototype,"type",void 0),ci=si([_e("wui-card-select-loader")],ci);const li=K`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,ui=K`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,di=l`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var hi=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let pi=class extends pe{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:li,md:oi,lg:ui};return this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,G`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?G`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:G`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};pi.styles=[xe,di],hi([Pe()],pi.prototype,"size",void 0),hi([Pe()],pi.prototype,"name",void 0),hi([Pe()],pi.prototype,"imageSrc",void 0),hi([Pe({type:Boolean})],pi.prototype,"selected",void 0),pi=hi([_e("wui-network-image")],pi);const fi=l`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var gi=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let wi=class extends pe{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return G`
      <button data-selected=${Mr(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?G`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Mr(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:G`
      <wui-wallet-image
        size="md"
        imageSrc=${Mr(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};wi.styles=[xe,Ee,fi],gi([Pe()],wi.prototype,"name",void 0),gi([Pe()],wi.prototype,"type",void 0),gi([Pe()],wi.prototype,"imageSrc",void 0),gi([Pe({type:Boolean})],wi.prototype,"disabled",void 0),gi([Pe({type:Boolean})],wi.prototype,"selected",void 0),gi([Pe({type:Boolean})],wi.prototype,"installed",void 0),wi=gi([_e("wui-card-select")],wi);const mi=l`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var vi=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let bi=class extends pe{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return G`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:jr.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?G`<wui-image src=${this.imageSrc}></wui-image>`:null}};bi.styles=[xe,Ee,mi],vi([Pe()],bi.prototype,"variant",void 0),vi([Pe()],bi.prototype,"imageSrc",void 0),vi([Pe({type:Boolean})],bi.prototype,"disabled",void 0),vi([Pe()],bi.prototype,"icon",void 0),vi([Pe()],bi.prototype,"href",void 0),vi([Pe()],bi.prototype,"text",void 0),bi=vi([_e("wui-chip")],bi);const yi=l`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Ci=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let xi=class extends pe{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return G`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?G`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};xi.styles=[xe,Ee,yi],Ci([Pe()],xi.prototype,"size",void 0),Ci([Pe({type:Boolean})],xi.prototype,"loading",void 0),xi=Ci([_e("wui-connect-button")],xi);const Ei=l`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ki=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let _i=class extends pe{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return G`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};_i.styles=[xe,Ee,Ei],ki([Pe({type:Boolean})],_i.prototype,"disabled",void 0),ki([Pe()],_i.prototype,"label",void 0),ki([Pe()],_i.prototype,"buttonLabel",void 0),_i=ki([_e("wui-cta-button")],_i);const{I:Ai}=de,Ri=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const e of r)e._$AO?.(t,!1),Ri(e,t);return!0},$i=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},Si=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Ii(t)}};function Pi(e){void 0!==this._$AN?($i(this),this._$AM=e,Si(this)):this._$AM=e}function Ti(e,t=!1,r=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let e=r;e<i.length;e++)Ri(i[e],!1),$i(i[e]);else null!=i&&(Ri(i,!1),$i(i));else Ri(this,e)}const Ii=e=>{2==e.type&&(e._$AP??=Ti,e._$AQ??=Pi)};class Oi extends or{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Si(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ri(this,e),$i(this))}setValue(e){if((e=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Ni=()=>new Mi;class Mi{}const ji=new WeakMap,Ui=nr(class extends Oi{render(e){return J}update(e,[t]){const r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),J}rt(e){if("function"==typeof this.Y){const t=this.ht??globalThis;let r=ji.get(t);void 0===r&&(r=new WeakMap,ji.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?ji.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Bi=l`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Di=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Li=class extends pe{constructor(){super(...arguments),this.inputElementRef=Ni(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return G` ${this.templateIcon()}
      <input
        ${Ui(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${Mr(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${Mr(this.value)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?G`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Li.styles=[xe,Ee,Bi],Di([Pe()],Li.prototype,"size",void 0),Di([Pe()],Li.prototype,"icon",void 0),Di([Pe({type:Boolean})],Li.prototype,"disabled",void 0),Di([Pe()],Li.prototype,"placeholder",void 0),Di([Pe()],Li.prototype,"type",void 0),Di([Pe()],Li.prototype,"keyHint",void 0),Di([Pe()],Li.prototype,"value",void 0),Li=Di([_e("wui-input-text")],Li);const zi=l`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Fi=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Wi=class extends pe{constructor(){super(...arguments),this.disabled=!1}render(){return G`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?G`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Wi.styles=[xe,zi],Fi([Pe()],Wi.prototype,"errorMessage",void 0),Fi([Pe({type:Boolean})],Wi.prototype,"disabled",void 0),Fi([Pe()],Wi.prototype,"value",void 0),Wi=Fi([_e("wui-email-input")],Wi);const Hi=l`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var qi=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Zi=class extends pe{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`,G`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Zi.styles=[xe,Ee,ke,Hi],qi([Pe()],Zi.prototype,"size",void 0),qi([Pe({type:Boolean})],Zi.prototype,"disabled",void 0),qi([Pe()],Zi.prototype,"icon",void 0),qi([Pe()],Zi.prototype,"iconColor",void 0),Zi=qi([_e("wui-icon-link")],Zi);const Vi=l`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Gi=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ki=class extends pe{constructor(){super(...arguments),this.icon="copy"}render(){return G`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Ki.styles=[xe,Ee,Vi],Gi([Pe()],Ki.prototype,"icon",void 0),Ki=Gi([_e("wui-input-element")],Ki);const Yi=l`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var Ji=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Qi=class extends pe{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return G`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};Qi.styles=[xe,Ee,Yi],Ji([Pe({type:Boolean})],Qi.prototype,"disabled",void 0),Ji([Pe({type:String})],Qi.prototype,"value",void 0),Qi=Ji([_e("wui-input-numeric")],Qi);const Xi=l`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var en=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tn=class extends pe{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return G`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};tn.styles=[xe,Ee,Xi],en([Pe({type:Boolean})],tn.prototype,"disabled",void 0),en([Pe()],tn.prototype,"color",void 0),tn=en([_e("wui-link")],tn);const rn=l`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var nn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let on=class extends pe{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return G`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${Mr(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return G`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return G`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return G`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?G`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:G``}chevronTemplate(){return this.chevron?G`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};var an;on.styles=[xe,Ee,rn],nn([Pe()],on.prototype,"icon",void 0),nn([Pe()],on.prototype,"iconSize",void 0),nn([Pe()],on.prototype,"variant",void 0),nn([Pe()],on.prototype,"iconVariant",void 0),nn([Pe({type:Boolean})],on.prototype,"disabled",void 0),nn([Pe()],on.prototype,"imageSrc",void 0),nn([Pe()],on.prototype,"alt",void 0),nn([Pe({type:Boolean})],on.prototype,"chevron",void 0),nn([Pe({type:Boolean})],on.prototype,"loading",void 0),on=nn([_e("wui-list-item")],on),function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"}(an||(an={}));const sn=l`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var cn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ln=class extends pe{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r="NFT"===e?.type,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",n=(t?.url?"NFT"===t.type:r)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${i};\n    --local-right-border-radius: ${n};\n    `,G`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?G`<div class="swap-images-container">
        ${e?.url?G`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?G`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?G`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?G`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:G`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?G`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};ln.styles=[sn],cn([Pe()],ln.prototype,"type",void 0),cn([Pe()],ln.prototype,"status",void 0),cn([Pe()],ln.prototype,"direction",void 0),cn([Pe({type:Boolean})],ln.prototype,"onlyDirectionIcon",void 0),cn([Pe({type:Array})],ln.prototype,"images",void 0),cn([Pe({type:Object})],ln.prototype,"secondImage",void 0),ln=cn([_e("wui-transaction-visual")],ln);const un=l`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var dn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let hn=class extends pe{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return G`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Mr(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Mr(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${an[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?G`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?G`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};hn.styles=[xe,un],dn([Pe()],hn.prototype,"type",void 0),dn([Pe({type:Array})],hn.prototype,"descriptions",void 0),dn([Pe()],hn.prototype,"date",void 0),dn([Pe({type:Boolean})],hn.prototype,"onlyDirectionIcon",void 0),dn([Pe()],hn.prototype,"status",void 0),dn([Pe()],hn.prototype,"direction",void 0),dn([Pe({type:Array})],hn.prototype,"images",void 0),dn([Pe({type:Array})],hn.prototype,"price",void 0),dn([Pe({type:Array})],hn.prototype,"amount",void 0),dn([Pe({type:Array})],hn.prototype,"symbol",void 0),hn=dn([_e("wui-transaction-list-item")],hn);const pn=l`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let fn=class extends pe{render(){return G`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};fn.styles=[xe,pn],fn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([_e("wui-transaction-list-item-loader")],fn);const gn=l`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 9px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var wn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let mn=class extends pe{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e="md"===this.size?"mini-700":"micro-700";return G`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};mn.styles=[xe,gn],wn([Pe()],mn.prototype,"variant",void 0),wn([Pe()],mn.prototype,"size",void 0),mn=wn([_e("wui-tag")],mn);const vn=l`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var bn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let yn=class extends pe{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return G`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?G` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?G` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?G`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:G`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?G`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?G`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};yn.styles=[xe,Ee,vn],bn([Pe({type:Array})],yn.prototype,"walletImages",void 0),bn([Pe()],yn.prototype,"imageSrc",void 0),bn([Pe()],yn.prototype,"name",void 0),bn([Pe()],yn.prototype,"tagLabel",void 0),bn([Pe()],yn.prototype,"tagVariant",void 0),bn([Pe()],yn.prototype,"icon",void 0),bn([Pe()],yn.prototype,"walletIcon",void 0),bn([Pe({type:Boolean})],yn.prototype,"installed",void 0),bn([Pe({type:Boolean})],yn.prototype,"disabled",void 0),bn([Pe({type:Boolean})],yn.prototype,"showAllWallets",void 0),yn=bn([_e("wui-list-wallet")],yn);const Cn=l`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var xn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let En=class extends pe{constructor(){super(...arguments),this.logo="google"}render(){return G`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};En.styles=[xe,Cn],xn([Pe()],En.prototype,"logo",void 0),En=xn([_e("wui-logo")],En);const kn=l`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var _n=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let An=class extends pe{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return G`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};An.styles=[xe,Ee,kn],_n([Pe()],An.prototype,"logo",void 0),_n([Pe({type:Boolean})],An.prototype,"disabled",void 0),An=_n([_e("wui-logo-select")],An);const Rn=l`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var $n=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Sn=class extends pe{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return G`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?G`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?G`<wui-image src=${this.imageSrc}></wui-image>`:G`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Sn.styles=[xe,Ee,Rn],$n([Pe()],Sn.prototype,"imageSrc",void 0),$n([Pe({type:Boolean})],Sn.prototype,"isUnsupportedChain",void 0),$n([Pe({type:Boolean})],Sn.prototype,"disabled",void 0),Sn=$n([_e("wui-network-button")],Sn);const Pn=l`
  :host {
    position: relative;
    display: block;
  }
`;var Tn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let In=class extends pe{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every((e=>""!==e)),this.handleKeyDown=(e,t)=>{const r=e.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const n=i.selectionStart;switch(e.key){case"ArrowLeft":n&&i.setSelectionRange(n+1,n+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):this.updateInput(i,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1;if(!this.shouldInputBeEnabled(e))return;const r=this.numerics[e<this.length?e:t],i=r?this.getInputElement(r):void 0;i&&(i.disabled=!1,i.focus())}if("prev"===e){const e=t-1,r=this.numerics[e>-1?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return G`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((e,t)=>G`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(e,t,r){const i=this.numerics[t],n=e||(i?this.getInputElement(i):void 0);n&&(n.value=r,this.values=this.values.map(((e,i)=>i===t?r:e)))}selectInput(e){const t=e.target;if(t){const e=this.getInputElement(t);e?.select()}}handleInput(e,t){const r=e.target,i=this.getInputElement(r);if(i){const r=i.value;"insertFromPaste"===e.inputType?this.handlePaste(i,r,t):jr.isNumber(r)&&e.data?(this.updateInput(i,t,e.data),this.focusInputField("next",t)):this.updateInput(i,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){const i=t[0];if(i&&jr.isNumber(i)){this.updateInput(e,r,i);const n=t.substring(1);if(r+1<this.length&&n.length){const e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,n,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};In.styles=[xe,Pn],Tn([Pe({type:Number})],In.prototype,"length",void 0),Tn([Pe({type:String})],In.prototype,"otp",void 0),Tn([Te()],In.prototype,"values",void 0),In=Tn([_e("wui-otp")],In);var On=r(7583);function Nn(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}const Mn={generate(e,t,r){const i="#141414",n=[],o=function(e,t){const r=Array.prototype.slice.call(On.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce(((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e),[])}(e),a=t/o.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach((({x:e,y:t})=>{const r=(o.length-7)*a*e,c=(o.length-7)*a*t,l=.45;for(let e=0;e<s.length;e+=1){const t=a*(7-2*e);n.push(K`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*l:t*l}
              ry= ${0===e?(t-5)*l:t*l}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+a*e+2.5:c+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}}));const c=Math.floor((r+25)/a),l=o.length/2-c/2,u=o.length/2+c/2-1,d=[];o.forEach(((e,t)=>{e.forEach(((e,r)=>{if(o[t][r]&&!(t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8||t>l&&t<u&&r>l&&r<u)){const e=t*a+a/2,i=r*a+a/2;d.push([e,i])}}))}));const h={};return d.forEach((([e,t])=>{h[e]?h[e]?.push(t):h[e]=[t]})),Object.entries(h).map((([e,t])=>{const r=t.filter((e=>t.every((t=>!Nn(e,t,a)))));return[Number(e),r]})).forEach((([e,t])=>{t.forEach((t=>{n.push(K`<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)}))})),Object.entries(h).filter((([e,t])=>t.length>1)).map((([e,t])=>{const r=t.filter((e=>t.some((t=>Nn(e,t,a)))));return[Number(e),r]})).map((([e,t])=>{t.sort(((e,t)=>e<t?-1:1));const r=[];for(const e of t){const t=r.find((t=>t.some((t=>Nn(e,t,a)))));t?t.push(e):r.push([e])}return[e,r.map((e=>[e[0],e[e.length-1]]))]})).forEach((([e,t])=>{t.forEach((([t,r])=>{n.push(K`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)}))})),n}},jn=l`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Un=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Bn=class extends pe{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,G`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e="light"===this.theme?this.size:this.size-32;return K`
      <svg height=${e} width=${e}>
        ${Mn.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?G`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:G`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Bn.styles=[xe,jn],Un([Pe()],Bn.prototype,"uri",void 0),Un([Pe({type:Number})],Bn.prototype,"size",void 0),Un([Pe()],Bn.prototype,"theme",void 0),Un([Pe()],Bn.prototype,"imageSrc",void 0),Un([Pe()],Bn.prototype,"alt",void 0),Un([Pe({type:Boolean})],Bn.prototype,"arenaClear",void 0),Bn=Un([_e("wui-qr-code")],Bn);const Dn=l`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let Ln=class extends pe{constructor(){super(...arguments),this.inputComponentRef=Ni()}render(){return G`
      <wui-input-text
        ${Ui(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};Ln.styles=[xe,Dn],Ln=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([_e("wui-search-bar")],Ln);const zn=l`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Fn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Wn=class extends pe{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return G`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Wn.styles=[xe,zn],Fn([Pe()],Wn.prototype,"backgroundColor",void 0),Fn([Pe()],Wn.prototype,"iconColor",void 0),Fn([Pe()],Wn.prototype,"icon",void 0),Fn([Pe()],Wn.prototype,"message",void 0),Wn=Fn([_e("wui-snackbar")],Wn);const Hn=l`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var qn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Zn=class extends pe{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const r=t===this.activeTab;return G`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}iconTemplate(e){return e.icon?G`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],i=this.buttons[e],n=r?.querySelector("wui-text"),o=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),s=o?.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,i.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};Zn.styles=[xe,Ee,Hn],qn([Pe({type:Array})],Zn.prototype,"tabs",void 0),qn([Pe()],Zn.prototype,"onTabChange",void 0),qn([Pe({type:Array})],Zn.prototype,"buttons",void 0),qn([Pe({type:Boolean})],Zn.prototype,"disabled",void 0),qn([Pe()],Zn.prototype,"localTabWidth",void 0),qn([Te()],Zn.prototype,"activeTab",void 0),qn([Te()],Zn.prototype,"isDense",void 0),Zn=qn([_e("wui-tabs")],Zn);const Vn=l`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Gn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Kn=class extends pe{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,G`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Kn.styles=[xe,Ee,Vn],Gn([Pe()],Kn.prototype,"placement",void 0),Gn([Pe()],Kn.prototype,"variant",void 0),Gn([Pe()],Kn.prototype,"message",void 0),Kn=Gn([_e("wui-tooltip")],Kn);const Yn=l`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Jn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Qn=class extends pe{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,G`${this.templateVisual()}`}templateVisual(){return this.imageSrc?G`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:G`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Qn.styles=[xe,Yn],Jn([Pe()],Qn.prototype,"imageSrc",void 0),Jn([Pe()],Qn.prototype,"alt",void 0),Jn([Pe({type:Boolean})],Qn.prototype,"borderRadiusFull",void 0),Qn=Jn([_e("wui-visual-thumbnail")],Qn);const Xn=l`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var eo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let to=class extends pe{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return G`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};to.styles=[xe,Ee,Xn],eo([Pe()],to.prototype,"label",void 0),eo([Pe()],to.prototype,"description",void 0),eo([Pe()],to.prototype,"icon",void 0),to=eo([_e("wui-notice-card")],to);const ro=l`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var io=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let no=class extends pe{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout((()=>{this.checkHeight()}),1)}checkHeight(){this.updateComplete.then((()=>{const e=this.shadowRoot?.querySelector(".heightContent"),t=this.shadowRoot?.querySelector(".textContent");if(e&&t){this.scrollElement=e;const r=t?.scrollHeight;r&&r>100&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}}))}render(){return G`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||Boolean(this.toggled)}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?G` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};no.styles=[xe,Ee,ro],io([Pe()],no.prototype,"textTitle",void 0),io([Pe()],no.prototype,"overflowedContent",void 0),no=io([_e("wui-list-accordion")],no);const oo=l`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var ao=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let so=class extends pe{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return G`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?G`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?G` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:G`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};so.styles=[xe,Ee,oo],ao([Pe()],so.prototype,"imageSrc",void 0),ao([Pe()],so.prototype,"textTitle",void 0),ao([Pe()],so.prototype,"textValue",void 0),so=ao([_e("wui-list-content")],so);const co=l`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var lo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let uo=class extends pe{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return G`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?G`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:G`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};uo.styles=[xe,Ee,co],lo([Pe()],uo.prototype,"imageSrc",void 0),lo([Pe()],uo.prototype,"name",void 0),lo([Pe({type:Boolean})],uo.prototype,"disabled",void 0),lo([Pe({type:Boolean})],uo.prototype,"transparent",void 0),uo=lo([_e("wui-list-network")],uo);const ho=l`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var po=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let fo=class extends pe{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return G`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?G`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:G`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};fo.styles=[xe,Ee,ho],po([Pe()],fo.prototype,"amount",void 0),po([Pe()],fo.prototype,"networkCurreny",void 0),po([Pe()],fo.prototype,"networkImageUrl",void 0),po([Pe()],fo.prototype,"receiverAddress",void 0),po([Pe()],fo.prototype,"addressExplorerUrl",void 0),fo=po([_e("wui-list-wallet-transaction")],fo);const go=l`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var wo=r(1171),mo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let vo=class extends pe{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return G`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?G`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:G`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await wo.ApiController._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return G`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return G`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return G`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};vo.styles=[xe,Ee,go],mo([Pe({type:Boolean})],vo.prototype,"disabled",void 0),mo([Pe()],vo.prototype,"color",void 0),mo([Pe()],vo.prototype,"label",void 0),mo([Pe()],vo.prototype,"purchaseValue",void 0),mo([Pe()],vo.prototype,"purchaseCurrency",void 0),mo([Pe()],vo.prototype,"date",void 0),mo([Pe({type:Boolean})],vo.prototype,"completed",void 0),mo([Pe({type:Boolean})],vo.prototype,"inProgress",void 0),mo([Pe({type:Boolean})],vo.prototype,"failed",void 0),mo([Pe()],vo.prototype,"onClick",void 0),mo([Pe()],vo.prototype,"symbol",void 0),mo([Pe()],vo.prototype,"icon",void 0),vo=mo([_e("wui-onramp-activity-item")],vo);const bo=l`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var yo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Co=class extends pe{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return G`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${Mr(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?G`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:G`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){const e=wo.NetworkController.getRequestedCaipNetworks(),t=e?.filter((e=>e?.imageId))?.slice(0,5);return G`
      <wui-flex class="networks">
        ${t?.map((e=>G`
            <wui-flex class="network-icon">
              <wui-image src=${Mr(wo.$m.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `))}
      </wui-flex>
    `}};Co.styles=[xe,Ee,bo],yo([Pe({type:Boolean})],Co.prototype,"disabled",void 0),yo([Pe()],Co.prototype,"color",void 0),yo([Pe()],Co.prototype,"name",void 0),yo([Pe()],Co.prototype,"label",void 0),yo([Pe()],Co.prototype,"feeRange",void 0),yo([Pe({type:Boolean})],Co.prototype,"loading",void 0),yo([Pe()],Co.prototype,"onClick",void 0),Co=yo([_e("wui-onramp-provider-item")],Co);const xo=l`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-060);
    }
  }
`;var Eo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ko=class extends pe{constructor(){super(...arguments),this.text=""}render(){return G`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};ko.styles=[xe,Ee,xo],Eo([Pe()],ko.prototype,"text",void 0),ko=Eo([_e("wui-promo")],ko);const _o=l`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-accent-glass-020);
    }
  }
`;var Ao=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ro=class extends pe{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return G`<button
        @mouseenter=${this.onMouseEnter.bind(this)}
        @mouseleave=${this.onMouseLeave.bind(this)}
        ontouchstart
      >
        <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
      </button>
      <wui-tooltip variant="shade" message=${this.text} placement="top"></wui-tooltip>`}onMouseEnter(){const e=this.shadowRoot?.querySelector("wui-tooltip");e&&e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease",duration:250})}onMouseLeave(){const e=this.shadowRoot?.querySelector("wui-tooltip");e&&e?.animate([{opacity:1},{opacity:0}],{fill:"forwards",easing:"ease",duration:200})}};Ro.styles=[xe,Ee,_o],Ao([Pe()],Ro.prototype,"text",void 0),Ao([Pe()],Ro.prototype,"icon",void 0),Ro=Ao([_e("wui-tooltip-select")],Ro);const $o=l`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var So=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Po=class extends pe{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return G`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Po.styles=[xe,$o],So([Pe()],Po.prototype,"dollars",void 0),So([Pe()],Po.prototype,"pennies",void 0),Po=So([_e("wui-balance")],Po);const To=l`
  button {
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Io=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Oo=class extends pe{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.isProfileName=!1,this.address="",this.icon="chevronBottom"}render(){return G`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${jr.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:4,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?G`<wui-image src=${this.networkSrc}></wui-image>`:G`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Oo.styles=[xe,Ee,To],Io([Pe()],Oo.prototype,"networkSrc",void 0),Io([Pe()],Oo.prototype,"avatarSrc",void 0),Io([Pe({type:Boolean})],Oo.prototype,"isProfileName",void 0),Io([Pe()],Oo.prototype,"address",void 0),Io([Pe()],Oo.prototype,"icon",void 0),Oo=Io([_e("wui-profile-button")],Oo);const No=l`
  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='shade'],
  button[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  button[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  button[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  button[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  button[data-variant='transparent'],
  button[data-variant='success'],
  button[data-variant='shadeSmall'],
  button[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 8px;
  }

  button[data-variant='transparent']:has(wui-text:first-child),
  button[data-variant='success']:has(wui-text:first-child),
  button[data-variant='shadeSmall']:has(wui-text:first-child),
  button[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  button[data-variant='fill'],
  button[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-variant='fill']:has(wui-text:first-child),
  button[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  button[data-variant='fill'] > wui-image,
  button[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  button[data-variant='fill'] > wui-icon,
  button[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-image,
  button[data-variant='success'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image,
  button[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-icon,
  button[data-variant='success'] > wui-icon,
  button[data-variant='shadeSmall'] > wui-icon,
  button[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='shade']:focus-visible,
  button[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  button[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  button.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:hover,
    button[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    button[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    button[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    button[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  button[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='shade']:active,
  button[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  button[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  button[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var Mo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let jo=class extends pe{constructor(){super(...arguments),this.variant="fill",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.text=""}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return G`
      <button class=${this.disabled?"disabled":""} data-variant=${this.variant}>
        <wui-image src=${this.imageSrc}></wui-image>
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};jo.styles=[xe,Ee,No],Mo([Pe()],jo.prototype,"variant",void 0),Mo([Pe()],jo.prototype,"imageSrc",void 0),Mo([Pe({type:Boolean})],jo.prototype,"disabled",void 0),Mo([Pe()],jo.prototype,"icon",void 0),Mo([Pe()],jo.prototype,"text",void 0),jo=Mo([_e("wui-chip-button")],jo);const Uo=l`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var Bo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Do=class extends pe{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return G`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return G` <wui-flex class="networks">
      ${e?.map((e=>G` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`))}
    </wui-flex>`}};Do.styles=[xe,Ee,Uo],Bo([Pe({type:Array})],Do.prototype,"networkImages",void 0),Bo([Pe()],Do.prototype,"text",void 0),Do=Bo([_e("wui-compatible-network")],Do);const Lo=l`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var zo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Fo=class extends pe{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return G`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Fo.styles=[xe,Ee,Lo],zo([Pe()],Fo.prototype,"icon",void 0),zo([Pe()],Fo.prototype,"text",void 0),Fo=zo([_e("wui-banner")],Fo);const Wo=l`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Ho=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let qo=class extends pe{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return G`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          <wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200"
              >${jr.roundNumber(Number(this.tokenAmount),6,5)}
              ${this.tokenCurrency}</wui-text
            ></wui-flex
          >
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}};qo.styles=[xe,Ee,Wo],Ho([Pe()],qo.prototype,"tokenName",void 0),Ho([Pe()],qo.prototype,"tokenImageUrl",void 0),Ho([Pe({type:Number})],qo.prototype,"tokenValue",void 0),Ho([Pe()],qo.prototype,"tokenAmount",void 0),Ho([Pe()],qo.prototype,"tokenCurrency",void 0),Ho([Pe({type:Boolean})],qo.prototype,"clickable",void 0),qo=Ho([_e("wui-list-token")],qo);const Zo=l`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Vo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Go=class extends pe{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return G`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?G` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:G`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Go.styles=[xe,Ee,Zo],Vo([Pe()],Go.prototype,"icon",void 0),Vo([Pe()],Go.prototype,"text",void 0),Vo([Pe()],Go.prototype,"description",void 0),Vo([Pe()],Go.prototype,"tag",void 0),Vo([Pe()],Go.prototype,"iconBackgroundColor",void 0),Vo([Pe()],Go.prototype,"iconColor",void 0),Vo([Pe({type:Boolean})],Go.prototype,"disabled",void 0),Go=Vo([_e("wui-list-description")],Go);const Ko=l`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,Yo=/[.*+?^${}()|[\]\\]/gu,Jo=/[0-9,.]/u;var Qo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Xo=class extends pe{constructor(){super(...arguments),this.inputElementRef=Ni(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),G`<input
      ${Ui(this.inputElementRef)}
      type="text"
      inputmode="numeric"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){const t=e.data;t&&!Jo.test(t)&&this.inputElementRef?.value&&(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(Yo,"\\$&"),"gu"),"")),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Xo.styles=[xe,Ee,Ko],Qo([Pe({type:Boolean})],Xo.prototype,"disabled",void 0),Qo([Pe({type:String})],Xo.prototype,"value",void 0),Qo([Pe({type:String})],Xo.prototype,"placeholder",void 0),Xo=Qo([_e("wui-input-amount")],Xo);const ea=l`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }
`;var ta=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ra=class extends pe{constructor(){super(...arguments),this.text=""}render(){return G`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?G`<wui-image src=${this.imageSrc}></wui-image>`:G`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ra.styles=[xe,Ee,ea],ta([Pe()],ra.prototype,"imageSrc",void 0),ta([Pe()],ra.prototype,"text",void 0),ra=ta([_e("wui-token-button")],ra);const ia=l`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-002);
  }
`;var na=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let oa=class extends pe{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return G`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?G`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?G`<wui-image src=${this.imageSrc}></wui-image>`:G`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};oa.styles=[xe,Ee,ia],na([Pe()],oa.prototype,"text",void 0),na([Pe()],oa.prototype,"address",void 0),na([Pe()],oa.prototype,"imageSrc",void 0),na([Pe({type:Boolean})],oa.prototype,"isAddress",void 0),oa=na([_e("wui-preview-item")],oa);const aa=l`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var sa=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ca=class extends pe{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&jr.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&jr.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&jr.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&jr.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&jr.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&jr.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&jr.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&jr.getSpacingStyles(this.margin,3)};\n    `,G`<slot></slot>`}};ca.styles=[xe,aa],sa([Pe()],ca.prototype,"gridTemplateRows",void 0),sa([Pe()],ca.prototype,"gridTemplateColumns",void 0),sa([Pe()],ca.prototype,"justifyItems",void 0),sa([Pe()],ca.prototype,"alignItems",void 0),sa([Pe()],ca.prototype,"justifyContent",void 0),sa([Pe()],ca.prototype,"alignContent",void 0),sa([Pe()],ca.prototype,"columnGap",void 0),sa([Pe()],ca.prototype,"rowGap",void 0),sa([Pe()],ca.prototype,"gap",void 0),sa([Pe()],ca.prototype,"padding",void 0),sa([Pe()],ca.prototype,"margin",void 0),ca=sa([_e("wui-grid")],ca);const la=l`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var ua=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let da=class extends pe{constructor(){super(...arguments),this.text=""}render(){return G`${this.template()}`}template(){return this.text?G`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};da.styles=[xe,la],ua([Pe()],da.prototype,"text",void 0),da=ua([_e("wui-separator")],da);var ha=r(32);const pa=["receive","deposit","borrow","claim"],fa=["withdraw","repay","burn"],ga={getMonthName(e){const t=new Date;return t.setMonth(e),t.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(e,t){const r=ha.r.getYear(),i=this.getMonthName(t);return e===r?i:`${i} ${e}`},getTransactionImages(e){const[t,r]=e,i=Boolean(t)&&e?.every((e=>Boolean(e.nft_info))),n=e?.length>1;return 2!==e?.length||i?n?e.map((e=>this.getTransactionImage(e))):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(r)]},getTransactionImage:e=>({type:ga.getTransactionTransferTokenType(e),url:ga.getTransactionImageURL(e)}),getTransactionImageURL(e){let t;const r=Boolean(e?.nft_info),i=Boolean(e?.fungible_info);return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0,getTransactionDescriptions(e){const t=e?.metadata?.operationType,r=e?.transfers,i=e?.transfers?.length>0,n=e?.transfers?.length>1,o=i&&r?.every((e=>Boolean(e?.fungible_info))),[a,s]=r;let c=this.getTransferDescription(a),l=this.getTransferDescription(s);if(!i)return"send"!==t&&"receive"!==t||!o?[e.metadata.status]:(c=jr.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=jr.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]);if(n)return r.map((e=>this.getTransferDescription(e)));let u="";return pa.includes(t)?u="+":fa.includes(t)&&(u="-"),c=u.concat(c),[c]},getTransferDescription(e){let t="";return e?(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-"),t):t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null}},9073:(e,t,r)=>{"use strict";r.d(t,{BX:()=>d,KR:()=>f,P9:()=>p,B1:()=>h}),Symbol();const i=Symbol(),n=Object.getPrototypeOf,o=new WeakMap,a=(e,t=!0)=>{o.set(e,t)},s=e=>"object"==typeof e&&null!==e,c=new WeakMap,l=new WeakSet,[u]=((e=Object.is,t=((e,t)=>new Proxy(e,t)),r=(e=>s(e)&&!l.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),u=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),d=new WeakMap,h=((e,t,r=u)=>{const i=d.get(e);if((null==i?void 0:i[0])===t)return i[1];const n=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return a(n,!0),d.set(e,[t,n]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(n,t))return;const i=Reflect.get(e,t),o={value:i,enumerable:!0,configurable:!0};if(l.has(i))a(i,!1);else if(i instanceof Promise)delete o.value,o.get=()=>r(i);else if(c.has(i)){const[e,t]=c.get(i);o.value=h(e,t(),r)}Object.defineProperty(n,t,o)})),Object.preventExtensions(n)}),p=new WeakMap,f=[1,1],g=(a=>{if(!s(a))throw new Error("object required");const u=p.get(a);if(u)return u;let d=f[0];const w=new Set,m=(e,t=++f[0])=>{d!==t&&(d=t,w.forEach((r=>r(e,t))))};let v=f[1];const b=e=>(t,r)=>{const i=[...t];i[1]=[e,...i[1]],m(i,r)},y=new Map,C=e=>{var t;const r=y.get(e);r&&(y.delete(e),null==(t=r[1])||t.call(r))},x=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),E=t(x,{deleteProperty(e,t){const r=Reflect.get(e,t);C(t);const i=Reflect.deleteProperty(e,t);return i&&m(["delete",[t],r]),i},set(t,a,u,d){const h=Reflect.has(t,a),f=Reflect.get(t,a,d);if(h&&(e(f,u)||p.has(u)&&e(f,p.get(u))))return!0;var v;C(a),s(u)&&(u=(e=>e&&(o.has(e)?o.get(e):n(e)===Object.prototype||n(e)===Array.prototype))(v=u)&&v[i]||null||u);let x=u;if(u instanceof Promise)u.then((e=>{u.status="fulfilled",u.value=e,m(["resolve",[a],e])})).catch((e=>{u.status="rejected",u.reason=e,m(["reject",[a],e])}));else{!c.has(u)&&r(u)&&(x=g(u));const e=!l.has(x)&&c.get(x);e&&((e,t)=>{if(y.has(e))throw new Error("prop listener already exists");if(w.size){const r=t[3](b(e));y.set(e,[t,r])}else y.set(e,[t])})(a,e)}return Reflect.set(t,a,x,d),m(["set",[a],u,f]),!0}});p.set(a,E);const k=[x,(e=++f[1])=>(v===e||w.size||(v=e,y.forEach((([t])=>{const r=t[1](e);r>d&&(d=r)}))),d),h,e=>(w.add(e),1===w.size&&y.forEach((([e,t],r)=>{if(t)throw new Error("remove already exists");const i=e[3](b(r));y.set(r,[e,i])})),()=>{w.delete(e),0===w.size&&y.forEach((([e,t],r)=>{t&&(t(),y.set(r,[e]))}))})];return c.set(E,k),Reflect.ownKeys(a).forEach((e=>{const t=Object.getOwnPropertyDescriptor(a,e);"value"in t&&(E[e]=a[e],delete t.value,delete t.writable),Object.defineProperty(x,e,t)})),E}))=>[g,c,l,e,t,r,u,d,h,p,f])();function d(e={}){return u(e)}function h(e,t,r){const i=c.get(e);let n;i||console.warn("Please use proxy object");const o=[],a=i[3];let s=!1;const l=a((e=>{o.push(e),r?t(o.splice(0)):n||(n=Promise.resolve().then((()=>{n=void 0,s&&t(o.splice(0))})))}));return s=!0,()=>{s=!1,l()}}function p(e,t){const r=c.get(e);r||console.warn("Please use proxy object");const[i,n,o]=r;return o(i,n(),t)}function f(e){return l.add(e),e}},4707:(e,t,r)=>{"use strict";r.d(t,{u$:()=>n});var i=r(9073);function n(e,t,r,n){let o=e[t];return(0,i.B1)(e,(()=>{const i=e[t];Object.is(o,i)||r(o=i)}),n)}Symbol()},3033:(e,t,r)=>{"use strict";function i(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{J:()=>i})},6782:(e,t,r)=>{"use strict";r.d(t,{T1:()=>E});var i=r(3033),n=r(4823);const o="0x82ad56cb";var a=r(4306),s=r(6329),c=r(8703),l=r(8863),u=r(6440),d=r(6883),h=r(6652),p=r(8503),f=r(1657),g=r(9985),w=r(4192),m=r(2592),v=r(1772),b=r(9789),y=r(7671),C=r(2167),x=r(5414);async function E(e,t){const{account:a=e.account,batch:u=Boolean(e.batch?.multicall),blockNumber:d,blockTag:f="latest",accessList:E,blobs:k,data:_,gas:R,gasPrice:$,maxFeePerBlobGas:S,maxFeePerGas:P,maxPriorityFeePerGas:T,nonce:I,to:O,value:N,stateOverride:M,...j}=t,U=a?(0,i.J)(a):void 0;try{(0,x.c)(t);const r=(d?(0,w.cK)(d):void 0)||f,i=A(M),a=e.chain?.formatters?.transactionRequest?.format,s=(a||y.Bv)({...(0,b.o)(j,{format:a}),from:U?.address,accessList:E,blobs:k,data:_,gas:R,gasPrice:$,maxFeePerBlobGas:S,maxFeePerGas:P,maxPriorityFeePerGas:T,nonce:I,to:O,value:N});if(u&&function({request:e}){const{data:t,to:r,...i}=e;return!(!t||t.startsWith(o)||!r||Object.values(i).filter((e=>void 0!==e)).length>0)}({request:s})&&!i)try{return await async function(e,t){const{batchSize:r=1024,wait:i=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:a="latest",data:s,multicallAddress:u,to:d}=t;let f=u;if(!f){if(!e.chain)throw new c.YE;f=(0,g.M)({blockNumber:o,chain:e.chain,contract:"multicall3"})}const m=(o?(0,w.cK)(o):void 0)||a,{schedule:v}=(0,C.u)({id:`${e.uid}.${m}`,wait:i,shouldSplitBatch(e){const t=e.reduce(((e,{data:t})=>e+(t.length-2)),0);return t>2*r},fn:async t=>{const r=t.map((e=>({allowFailure:!0,callData:e.data,target:e.to}))),i=(0,p.p)({abi:n.v2,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:i,to:f},m]});return(0,h.e)({abi:n.v2,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:b,success:y}]=await v({data:s,to:d});if(!y)throw new l.$S({data:b});return"0x"===b?{data:void 0}:{data:b}}(e,{...s,blockNumber:d,blockTag:f})}catch(e){if(!(e instanceof c.YE||e instanceof c.rj))throw e}const m=await e.request({method:"eth_call",params:i?[s,r,i]:[s,r]});return"0x"===m?{data:void 0}:{data:m}}catch(i){const n=function(e){if(!(e instanceof s.C))return;const t=e.walk();return"object"==typeof t?.data?t.data?.data:t.data}(i),{offchainLookup:o,offchainLookupSignature:a}=await r.e(316).then(r.bind(r,1316));if(!1!==e.ccipRead&&n?.slice(0,10)===a&&O)return{data:await o(e,{data:n,to:O})};throw function(e,{docsPath:t,...r}){const i=(()=>{const t=(0,v.l)(e,r);return t instanceof m.RM?e:t})();return new l.zX(i,{docsPath:t,...r})}(i,{...t,account:U,chain:e.chain})}}function k(e){if(e&&0!==e.length)return e.reduce(((e,{slot:t,value:r})=>{if(66!==t.length)throw new u.NV({size:t.length,targetSize:66,type:"hex"});if(66!==r.length)throw new u.NV({size:r.length,targetSize:66,type:"hex"});return e[t]=r,e}),{})}function _(e){const{balance:t,nonce:r,state:i,stateDiff:n,code:o}=e,a={};if(void 0!==o&&(a.code=o),void 0!==t&&(a.balance=(0,w.cK)(t)),void 0!==r&&(a.nonce=(0,w.cK)(r)),void 0!==i&&(a.state=k(i)),void 0!==n){if(a.state)throw new d.ft;a.stateDiff=k(n)}return a}function A(e){if(!e)return;const t={};for(const{address:r,...i}of e){if(!(0,f.P)(r,{strict:!1}))throw new a.M({address:r});if(t[r])throw new d.Hi({address:r});t[r]=_(i)}return t}},4823:(e,t,r)=>{"use strict";r.d(t,{Ag:()=>o,SJ:()=>s,oX:()=>a,v2:()=>i});const i=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],n=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],o=[...n,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...n,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}]},4453:(e,t,r)=>{"use strict";r.d(t,{J9:()=>o,Mc:()=>n,fD:()=>i});const i={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},n={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},638:(e,t,r)=>{"use strict";r.d(t,{eL:()=>i,pj:()=>o,sz:()=>n});const i={gwei:9,wei:18},n={ether:-9,wei:9},o={ether:-18,gwei:-9}},7372:(e,t,r)=>{"use strict";r.d(t,{Iy:()=>a,Iz:()=>h,MR:()=>p,Nc:()=>c,O:()=>s,Wq:()=>d,YE:()=>u,d_:()=>v,dm:()=>m,gH:()=>l,j:()=>w,nK:()=>g,nM:()=>f});var i=r(5167),n=r(5182),o=r(6329);o.C,o.C,o.C;class a extends o.C{constructor({data:e,params:t,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join("\n"),{metaMessages:[`Params: (${(0,i.A)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}o.C;class s extends o.C{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class c extends o.C{constructor({expectedLength:e,givenLength:t,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class l extends o.C{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,n.E)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class u extends o.C{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}o.C,o.C;class d extends o.C{constructor(e,{docsPath:t}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}o.C,o.C,o.C;class h extends o.C{constructor(e,{docsPath:t}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class p extends o.C{constructor(e,{docsPath:t}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}o.C;class f extends o.C{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,i.B)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,i.B)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}o.C,o.C,o.C;class g extends o.C{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class w extends o.C{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class m extends o.C{constructor(e){super([`Value "${e}" is not a valid array.`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class v extends o.C{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}o.C},4306:(e,t,r)=>{"use strict";r.d(t,{M:()=>n});var i=r(6329);class n extends i.C{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},6329:(e,t,r)=>{"use strict";r.d(t,{C:()=>n});var i=r(1526);class n extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,i.HF)()});const r=t.cause instanceof n?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof n&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return o(this,e)}}function o(e,t){return t?.(e)?e:e&&"object"==typeof e&&"cause"in e?o(e.cause,t):t?null:e}},8703:(e,t,r)=>{"use strict";r.d(t,{EH:()=>o,YE:()=>s,jF:()=>a,rj:()=>n});var i=r(6329);class n extends i.C{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends i.C{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends i.C{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends i.C{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}i.C},8863:(e,t,r)=>{"use strict";r.d(t,{zX:()=>m,bG:()=>v,M:()=>b,rR:()=>y,$S:()=>C});var i=r(3033),n=r(4453),o=r(5462),a=r(5167),s=r(8463);function c({abiItem:e,args:t,includeFunctionName:r=!0,includeName:i=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map(((e,r)=>`${i&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.A)(t[r]):t[r]}`)).join(", ")})`}var l=r(269),u=r(9436),d=r(9670),h=r(7372),p=r(6329),f=r(6883),g=r(8990),w=r(1526);class m extends p.C{constructor(e,{account:t,docsPath:r,chain:n,data:o,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:h,to:p,value:w,stateOverride:m}){const v=t?(0,i.J)(t):void 0;let b=(0,g.aO)({from:v?.address,to:p,value:void 0!==w&&`${(0,u.c)(w)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,d.Q)(s)} gwei`,maxFeePerGas:void 0!==c&&`${(0,d.Q)(c)} gwei`,maxPriorityFeePerGas:void 0!==l&&`${(0,d.Q)(l)} gwei`,nonce:h});m&&(b+=`\n${(0,f.uj)(m)}`),super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class v extends p.C{constructor(e,{abi:t,args:r,contractAddress:i,docsPath:n,functionName:o,sender:s}){const u=(0,l.iY)({abi:t,args:r,name:o}),d=u?c({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,h=u?(0,a.B)(u,{includeName:!0}):void 0,p=(0,g.aO)({address:i&&(0,w.RZ)(i),function:h,args:d&&"()"!==d&&`${[...Array(o?.length??0).keys()].map((()=>" ")).join("")}${d}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=o,this.sender=s}}class b extends p.C{constructor({abi:e,data:t,functionName:r,message:i}){let s,l,u,d,p;if(t&&"0x"!==t)try{l=(0,o.W)({abi:e,data:t});const{abiItem:r,errorName:i,args:s}=l;if("Error"===i)d=s[0];else if("Panic"===i){const[e]=s;d=n.fD[e]}else{const e=r?(0,a.B)(r,{includeName:!0}):void 0,t=r&&s?c({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;u=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(i?.length??0).keys()].map((()=>" ")).join("")}${t}`:""]}}catch(e){s=e}else i&&(d=i);s instanceof h.Wq&&(p=s.signature,u=[`Unable to decode signature "${p}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${p}.`]),super(d&&"execution reverted"!==d||p?[`The contract function "${r}" reverted with the following ${p?"signature":"reason"}:`,d||p].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:u}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=l,this.reason=d,this.signature=p}}class y extends p.C{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class C extends p.C{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},6440:(e,t,r)=>{"use strict";r.d(t,{Fl:()=>o,NV:()=>a,ii:()=>n});var i=r(6329);class n extends i.C{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends i.C{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class a extends i.C{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}},4317:(e,t,r)=>{"use strict";r.d(t,{Ty:()=>n,u:()=>a,xO:()=>o});var i=r(6329);class n extends i.C{constructor({max:e,min:t,signed:r,size:i,value:n}){super(`Number "${n}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends i.C{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}i.C,i.C;class a extends i.C{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},2592:(e,t,r)=>{"use strict";r.d(t,{A7:()=>o,BG:()=>a,Fo:()=>p,K0:()=>c,Oh:()=>l,RM:()=>w,jj:()=>s,k5:()=>d,lN:()=>g,lY:()=>h,uC:()=>f,vW:()=>u});var i=r(9670),n=r(6329);class o extends n.C{constructor({cause:e,message:t}={}){const r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends n.C{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.Q)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends n.C{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.Q)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class c extends n.C{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class l extends n.C{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends n.C{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends n.C{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends n.C{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends n.C{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class f extends n.C{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends n.C{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,i.Q)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,i.Q)(r)} gwei`:""}).`].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class w extends n.C{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},6595:(e,t,r)=>{"use strict";r.d(t,{Ci:()=>a,J8:()=>s,MU:()=>c});var i=r(8463),n=r(6329),o=r(1526);class a extends n.C{constructor({body:e,details:t,headers:r,status:n,url:a}){super("HTTP request failed.",{details:t,metaMessages:[n&&`Status: ${n}`,`URL: ${(0,o.ID)(a)}`,e&&`Request body: ${(0,i.A)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=n,this.url=a}}n.C;class s extends n.C{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.ID)(r)}`,`Request body: ${(0,i.A)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class c extends n.C{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.ID)(t)}`,`Request body: ${(0,i.A)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},6883:(e,t,r)=>{"use strict";r.d(t,{Hi:()=>n,ft:()=>o,uj:()=>s});var i=r(6329);class n extends i.C{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}}class o extends i.C{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}function a(e){return e.reduce(((e,{slot:t,value:r})=>`${e}        ${t}: ${r}\n`),"")}function s(e){return e.reduce(((e,{address:t,...r})=>{let i=`${e}    ${t}:\n`;return r.nonce&&(i+=`      nonce: ${r.nonce}\n`),r.balance&&(i+=`      balance: ${r.balance}\n`),r.code&&(i+=`      code: ${r.code}\n`),r.state&&(i+="      state:\n",i+=a(r.state)),r.stateDiff&&(i+="      stateDiff:\n",i+=a(r.stateDiff)),i}),"  State Override:\n").slice(0,-1)}},8990:(e,t,r)=>{"use strict";r.d(t,{$s:()=>l,Vg:()=>c,aO:()=>a,n3:()=>s});var i=r(9436),n=r(9670),o=r(6329);function a(e){const t=Object.entries(e).map((([e,t])=>void 0===t||!1===t?null:[e,t])).filter(Boolean),r=t.reduce(((e,[t])=>Math.max(e,t.length)),0);return t.map((([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`)).join("\n")}class s extends o.C{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}o.C;class c extends o.C{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}o.C,o.C,o.C;class l extends o.C{constructor(e,{account:t,docsPath:r,chain:o,data:s,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:f}){const g=a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:p,value:void 0!==f&&`${(0,i.c)(f)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:c,gasPrice:void 0!==l&&`${(0,n.Q)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,n.Q)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,n.Q)(d)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}o.C,o.C,o.C},1526:(e,t,r)=>{"use strict";r.d(t,{RZ:()=>i,ID:()=>n,HF:()=>o});const i=e=>e,n=e=>e,o=()=>"viem@2.9.13"},129:(e,t,r)=>{"use strict";r.d(t,{n:()=>C});var i=r(7372),n=r(4569),o=r(6329);class a extends o.C{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class s extends o.C{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class c extends o.C{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const l={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new c({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new s({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new a({offset:e});const t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new a({offset:e});const t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){const r=t??this.position;return this.assertPosition(r+e-1),this.bytes.subarray(r,r+e)},inspectUint8(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){const t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){const t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){const t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();const r=this.inspectBytes(e);return this.position+=t??e,r},readUint8(){this.assertReadLimit(),this._touch();const e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();const e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();const e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();const e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){const t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;const e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};var u=r(5182),d=r(3577),h=r(8583),p=r(4317),f=r(6675),g=r(4192);function w(e,t={}){void 0!==t.size&&(0,f.Sl)(e,{size:t.size});const r=(0,g.My)(e,t);return(0,f.uU)(r,t)}function m(e,t={}){let r=e;if(void 0!==t.size&&((0,f.Sl)(r,{size:t.size}),r=(0,h.B)(r)),r.length>1||r[0]>1)throw new p.xO(r);return Boolean(r[0])}function v(e,t={}){void 0!==t.size&&(0,f.Sl)(e,{size:t.size});const r=(0,g.My)(e,t);return(0,f.ME)(r,t)}var b=r(4706),y=r(4531);function C(e,t){const r="string"==typeof t?(0,b.aT)(t):t,n=function(e,{recursiveReadLimit:t=8192}={}){const r=Object.create(l);return r.bytes=e,r.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=t,r}(r);if(0===(0,u.E)(r)&&e.length>0)throw new i.O;if((0,u.E)(t)&&(0,u.E)(t)<32)throw new i.Iy({data:"string"==typeof t?t:(0,g.My)(t),params:e,size:(0,u.E)(t)});let o=0;const a=[];for(let t=0;t<e.length;++t){const r=e[t];n.setPosition(o);const[i,s]=x(n,r,{staticPosition:0});o+=s,a.push(i)}return a}function x(e,t,{staticPosition:r}){const o=(0,y.k)(t.type);if(o){const[i,n]=o;return function(e,t,{length:r,staticPosition:i}){if(!r){const r=i+v(e.readBytes(k)),n=r+E;e.setPosition(r);const o=v(e.readBytes(E)),a=_(t);let s=0;const c=[];for(let r=0;r<o;++r){e.setPosition(n+(a?32*r:s));const[i,o]=x(e,t,{staticPosition:n});s+=o,c.push(i)}return e.setPosition(i+32),[c,32]}if(_(t)){const n=i+v(e.readBytes(k)),o=[];for(let i=0;i<r;++i){e.setPosition(n+32*i);const[r]=x(e,t,{staticPosition:n});o.push(r)}return e.setPosition(i+32),[o,32]}let n=0;const o=[];for(let a=0;a<r;++a){const[r,a]=x(e,t,{staticPosition:i+n});n+=a,o.push(r)}return[o,n]}(e,{...t,type:n},{length:i,staticPosition:r})}if("tuple"===t.type)return function(e,t,{staticPosition:r}){const i=0===t.components.length||t.components.some((({name:e})=>!e)),n=i?[]:{};let o=0;if(_(t)){const a=r+v(e.readBytes(k));for(let r=0;r<t.components.length;++r){const s=t.components[r];e.setPosition(a+o);const[c,l]=x(e,s,{staticPosition:a});o+=l,n[i?r:s?.name]=c}return e.setPosition(r+32),[n,32]}for(let a=0;a<t.components.length;++a){const s=t.components[a],[c,l]=x(e,s,{staticPosition:r});n[i?a:s?.name]=c,o+=l}return[n,o]}(e,t,{staticPosition:r});if("address"===t.type)return function(e){const t=e.readBytes(32);return[(0,n.o)((0,g.My)((0,d.A1)(t,-20))),32]}(e);if("bool"===t.type)return function(e){return[m(e.readBytes(32),{size:32}),32]}(e);if(t.type.startsWith("bytes"))return function(e,t,{staticPosition:r}){const[i,n]=t.type.split("bytes");if(!n){const t=v(e.readBytes(32));e.setPosition(r+t);const i=v(e.readBytes(32));if(0===i)return e.setPosition(r+32),["0x",32];const n=e.readBytes(i);return e.setPosition(r+32),[(0,g.My)(n),32]}return[(0,g.My)(e.readBytes(parseInt(n),32)),32]}(e,t,{staticPosition:r});if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,t){const r=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256"),n=e.readBytes(32);return[i>48?w(n,{signed:r}):v(n,{signed:r}),32]}(e,t);if("string"===t.type)return function(e,{staticPosition:t}){const r=t+v(e.readBytes(32));e.setPosition(r);const i=v(e.readBytes(32));if(0===i)return e.setPosition(t+32),["",32];const n=e.readBytes(i,32),o=function(e,t={}){let r=e;return void 0!==t.size&&((0,f.Sl)(r,{size:t.size}),r=(0,h.B)(r,{dir:"right"})),(new TextDecoder).decode(r)}((0,h.B)(n));return e.setPosition(t+32),[o,32]}(e,{staticPosition:r});throw new i.j(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}const E=32,k=32;function _(e){const{type:t}=e;if("string"===t)return!0;if("bytes"===t)return!0;if(t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(_);const r=(0,y.k)(e.type);return!(!r||!_({...e,type:r[1]}))}},5462:(e,t,r)=>{"use strict";r.d(t,{W:()=>l});var i=r(4453),n=r(7372),o=r(3577),a=r(2599),s=r(129),c=r(5167);function l(e){const{abi:t,data:r}=e,l=(0,o.di)(r,0,4);if("0x"===l)throw new n.O;const u=[...t||[],i.Mc,i.J9].find((e=>"error"===e.type&&l===(0,a.V)((0,c.B)(e))));if(!u)throw new n.Wq(l,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,s.n)(u.inputs,(0,o.di)(r,4)):void 0,errorName:u.name}}},6652:(e,t,r)=>{"use strict";r.d(t,{e:()=>s});var i=r(7372),n=r(129),o=r(269);const a="/docs/contract/decodeFunctionResult";function s(e){const{abi:t,args:r,functionName:s,data:c}=e;let l=t[0];if(s){const e=(0,o.iY)({abi:t,args:r,name:s});if(!e)throw new i.Iz(s,{docsPath:a});l=e}if("function"!==l.type)throw new i.Iz(void 0,{docsPath:a});if(!l.outputs)throw new i.MR(l.name,{docsPath:a});const u=(0,n.n)(l.outputs,c);return u&&u.length>1?u:u&&1===u.length?u[0]:void 0}},4531:(e,t,r)=>{"use strict";r.d(t,{h:()=>h,k:()=>g});var i=r(7372),n=r(4306),o=r(6329),a=r(1657),s=r(5419),c=r(586),l=r(5182),u=r(3577),d=r(4192);function h(e,t){if(e.length!==t.length)throw new i.YE({expectedLength:e.length,givenLength:t.length});const r=function({params:e,values:t}){const r=[];for(let i=0;i<e.length;i++)r.push(p({param:e[i],value:t[i]}));return r}({params:e,values:t}),n=f(r);return 0===n.length?"0x":n}function p({param:e,value:t}){const r=g(e.type);if(r){const[n,o]=r;return function(e,{length:t,param:r}){const n=null===t;if(!Array.isArray(e))throw new i.dm(e);if(!n&&e.length!==t)throw new i.Nc({expectedLength:t,givenLength:e.length,type:`${r.type}[${t}]`});let o=!1;const a=[];for(let t=0;t<e.length;t++){const i=p({param:r,value:e[t]});i.dynamic&&(o=!0),a.push(i)}if(n||o){const e=f(a);if(n){const t=(0,d.cK)(a.length,{size:32});return{dynamic:!0,encoded:a.length>0?(0,s.xW)([t,e]):t}}if(o)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,s.xW)(a.map((({encoded:e})=>e)))}}(t,{length:n,param:{...e,type:o}})}if("tuple"===e.type)return function(e,{param:t}){let r=!1;const i=[];for(let n=0;n<t.components.length;n++){const o=t.components[n],a=p({param:o,value:e[Array.isArray(e)?n:o.name]});i.push(a),a.dynamic&&(r=!0)}return{dynamic:r,encoded:r?f(i):(0,s.xW)(i.map((({encoded:e})=>e)))}}(t,{param:e});if("address"===e.type)return function(e){if(!(0,a.P)(e))throw new n.M({address:e});return{dynamic:!1,encoded:(0,c.db)(e.toLowerCase())}}(t);if("bool"===e.type)return function(e){if("boolean"!=typeof e)throw new o.C(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:(0,c.db)((0,d.$P)(e))}}(t);if(e.type.startsWith("uint")||e.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,d.cK)(e,{size:32,signed:t})}}(t,{signed:e.type.startsWith("int")});if(e.type.startsWith("bytes"))return function(e,{param:t}){const[,r]=t.type.split("bytes"),n=(0,l.E)(e);if(!r){let t=e;return n%32!=0&&(t=(0,c.db)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,s.xW)([(0,c.db)((0,d.cK)(n,{size:32})),t])}}if(n!==parseInt(r))throw new i.gH({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,c.db)(e,{dir:"right"})}}(t,{param:e});if("string"===e.type)return function(e){const t=(0,d.i3)(e),r=Math.ceil((0,l.E)(t)/32),i=[];for(let e=0;e<r;e++)i.push((0,c.db)((0,u.di)(t,32*e,32*(e+1)),{dir:"right"}));return{dynamic:!0,encoded:(0,s.xW)([(0,c.db)((0,d.cK)((0,l.E)(t),{size:32})),...i])}}(t);throw new i.nK(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function f(e){let t=0;for(let r=0;r<e.length;r++){const{dynamic:i,encoded:n}=e[r];t+=i?32:(0,l.E)(n)}const r=[],i=[];let n=0;for(let o=0;o<e.length;o++){const{dynamic:a,encoded:s}=e[o];a?(r.push((0,d.cK)(t+n,{size:32})),i.push(s),n+=(0,l.E)(s)):r.push(s)}return(0,s.xW)([...r,...i])}function g(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},8503:(e,t,r)=>{"use strict";r.d(t,{p:()=>u});var i=r(5419),n=r(4531),o=r(7372),a=r(2599),s=r(5167),c=r(269);const l="/docs/contract/encodeFunctionData";function u(e){const{args:t}=e,{abi:r,functionName:u}=1===e.abi.length&&e.functionName?.startsWith("0x")?e:function(e){const{abi:t,args:r,functionName:i}=e;let n=t[0];if(i){const e=(0,c.iY)({abi:t,args:r,name:i});if(!e)throw new o.Iz(i,{docsPath:l});n=e}if("function"!==n.type)throw new o.Iz(void 0,{docsPath:l});return{abi:[n],functionName:(0,a.V)((0,s.B)(n))}}(e),d=r[0],h=u,p="inputs"in d&&d.inputs?(0,n.h)(d.inputs,t??[]):void 0;return(0,i.aP)([h,p??"0x"])}},5167:(e,t,r)=>{"use strict";r.d(t,{A:()=>o,B:()=>n});var i=r(7372);function n(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new i.d_(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map((e=>function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")}(e,{includeName:t}))).join(t?", ":","):""}},269:(e,t,r)=>{"use strict";r.d(t,{iY:()=>c});var i=r(7372),n=r(6394),o=r(1657);const a=r(8345).k;var s=r(2599);function c(e){const{abi:t,args:r=[],name:o}=e,c=(0,n.q)(o,{strict:!1}),d=t.filter((e=>c?"function"===e.type?(0,s.V)(e)===o:"event"===e.type&&a(e)===o:"name"in e&&e.name===o));if(0===d.length)return;if(1===d.length)return d[0];let h;for(const e of d)if("inputs"in e)if(r&&0!==r.length){if(e.inputs&&0!==e.inputs.length&&e.inputs.length===r.length&&r.every(((t,r)=>{const i="inputs"in e&&e.inputs[r];return!!i&&l(t,i)}))){if(h&&"inputs"in h&&h.inputs){const t=u(e.inputs,h.inputs,r);if(t)throw new i.nM({abiItem:e,type:t[0]},{abiItem:h,type:t[1]})}h=e}}else if(!e.inputs||0===e.inputs.length)return e;return h||d[0]}function l(e,t){const r=typeof e,i=t.type;switch(i){case"address":return(0,o.P)(e,{strict:!1});case"bool":return"boolean"===r;case"function":case"string":return"string"===r;default:return"tuple"===i&&"components"in t?Object.values(t.components).every(((t,r)=>l(Object.values(e)[r],t))):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?"number"===r||"bigint"===r:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?"string"===r||e instanceof Uint8Array:!!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)&&Array.isArray(e)&&e.every((e=>l(e,{...t,type:i.replace(/(\[[0-9]{0,}\])$/,"")})))}}function u(e,t,r){for(const i in e){const n=e[i],a=t[i];if("tuple"===n.type&&"tuple"===a.type&&"components"in n&&"components"in a)return u(n.components,a.components,r[i]);const s=[n.type,a.type];if(s.includes("address")&&s.includes("bytes20")||(s.includes("address")&&s.includes("string")||s.includes("address")&&s.includes("bytes"))&&(0,o.P)(r[i],{strict:!1}))return s}}},4569:(e,t,r)=>{"use strict";r.d(t,{b:()=>c,o:()=>s});var i=r(4306),n=r(4706),o=r(4178),a=r(1657);function s(e,t){const r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=(0,o.S)((0,n.Af)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)i[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&i[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function c(e,t){if(!(0,a.P)(e,{strict:!1}))throw new i.M({address:e});return s(e,t)}},1657:(e,t,r)=>{"use strict";r.d(t,{P:()=>s});class i extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}var n=r(4569);const o=/^0x[a-fA-F0-9]{40}$/,a=new i(8192);function s(e,t){const{strict:r=!0}=t??{};if(a.has(e))return a.get(e);const i=!(!o.test(e)||e.toLowerCase()!==e&&r&&(0,n.o)(e)!==e);return a.set(e,i),i}},9985:(e,t,r)=>{"use strict";r.d(t,{M:()=>n});var i=r(8703);function n({blockNumber:e,chain:t,contract:r}){const n=t?.contracts?.[r];if(!n)throw new i.rj({chain:t,contract:{name:r}});if(e&&n.blockCreated&&n.blockCreated>e)throw new i.rj({blockNumber:e,chain:t,contract:{name:r,blockCreated:n.blockCreated}});return n.address}},5419:(e,t,r)=>{"use strict";function i(e){return"string"==typeof e[0]?n(e):function(e){let t=0;for(const r of e)t+=r.length;const r=new Uint8Array(t);let i=0;for(const t of e)r.set(t,i),i+=t.length;return r}(e)}function n(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}r.d(t,{aP:()=>n,xW:()=>i})},6394:(e,t,r)=>{"use strict";function i(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{q:()=>i})},586:(e,t,r)=>{"use strict";r.d(t,{db:()=>o,eV:()=>n});var i=r(6440);function n(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new i.Fl({size:e.length,targetSize:r,type:"bytes"});const n=new Uint8Array(r);for(let i=0;i<r;i++){const o="right"===t;n[o?i:r-i-1]=e[o?i:e.length-i-1]}return n}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;const n=e.replace("0x","");if(n.length>2*r)throw new i.Fl({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n["right"===t?"padEnd":"padStart"](2*r,"0")}`}},5182:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});var i=r(6394);function n(e){return(0,i.q)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3577:(e,t,r)=>{"use strict";r.d(t,{A1:()=>l,di:()=>a});var i=r(6440),n=r(6394),o=r(5182);function a(e,t,r,{strict:i}={}){return(0,n.q)(e,{strict:!1})?function(e,t,r,{strict:i}={}){s(e,t);const n=`0x${e.replace("0x","").slice(2*(t??0),2*(r??e.length))}`;return i&&c(n,t,r),n}(e,t,r,{strict:i}):l(e,t,r,{strict:i})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.E)(e)-1)throw new i.ii({offset:t,position:"start",size:(0,o.E)(e)})}function c(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.E)(e)!==r-t)throw new i.ii({offset:r,position:"end",size:(0,o.E)(e)})}function l(e,t,r,{strict:i}={}){s(e,t);const n=e.slice(t,r);return i&&c(n,t,r),n}},8583:(e,t,r)=>{"use strict";function i(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,i=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)i++;return r="left"===t?r.slice(i):r.slice(0,r.length-i),"string"==typeof e?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{B:()=>i})},6675:(e,t,r)=>{"use strict";r.d(t,{IQ:()=>u,ME:()=>l,Sl:()=>s,uU:()=>c});var i=r(4317),n=r(5182),o=r(8583),a=r(4706);function s(e,{size:t}){if((0,n.E)(e)>t)throw new i.u({givenSize:(0,n.E)(e),maxSize:t})}function c(e,t={}){const{signed:r}=t;t.size&&s(e,{size:t.size});const i=BigInt(e);if(!r)return i;const n=(e.length-2)/2;return i<=(1n<<8n*BigInt(n)-1n)-1n?i:i-BigInt(`0x${"f".padStart(2*n,"f")}`)-1n}function l(e,t={}){return Number(c(e,t))}function u(e,t={}){let r=(0,a.aT)(e);return t.size&&(s(r,{size:t.size}),r=(0,o.B)(r,{dir:"right"})),(new TextDecoder).decode(r)}},4706:(e,t,r)=>{"use strict";r.d(t,{Af:()=>p,ZJ:()=>l,aT:()=>h});var i=r(6329),n=r(6394),o=r(586),a=r(6675),s=r(4192);const c=new TextEncoder;function l(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){return h((0,s.cK)(e,t))}(e,t):"boolean"==typeof e?function(e,t={}){const r=new Uint8Array(1);return r[0]=Number(e),"number"==typeof t.size?((0,a.Sl)(r,{size:t.size}),(0,o.eV)(r,{size:t.size})):r}(e,t):(0,n.q)(e)?h(e,t):p(e,t)}const u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let r=e;t.size&&((0,a.Sl)(r,{size:t.size}),r=(0,o.eV)(r,{dir:"right",size:t.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);const s=n.length/2,c=new Uint8Array(s);for(let e=0,t=0;e<s;e++){const r=d(n.charCodeAt(t++)),o=d(n.charCodeAt(t++));if(void 0===r||void 0===o)throw new i.C(`Invalid byte sequence ("${n[t-2]}${n[t-1]}" in "${n}").`);c[e]=16*r+o}return c}function p(e,t={}){const r=c.encode(e);return"number"==typeof t.size?((0,a.Sl)(r,{size:t.size}),(0,o.eV)(r,{dir:"right",size:t.size})):r}},4192:(e,t,r)=>{"use strict";r.d(t,{$P:()=>c,My:()=>l,cK:()=>u,i3:()=>h,nj:()=>s});var i=r(4317),n=r(586),o=r(6675);const a=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?c(e,t):l(e,t)}function c(e,t={}){const r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Sl)(r,{size:t.size}),(0,n.eV)(r,{size:t.size})):r}function l(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];const i=`0x${r}`;return"number"==typeof t.size?((0,o.Sl)(i,{size:t.size}),(0,n.eV)(i,{dir:"right",size:t.size})):i}function u(e,t={}){const{signed:r,size:o}=t,a=BigInt(e);let s;o?s=r?(1n<<8n*BigInt(o)-1n)-1n:2n**(8n*BigInt(o))-1n:"number"==typeof e&&(s=BigInt(Number.MAX_SAFE_INTEGER));const c="bigint"==typeof s&&r?-s-1n:0;if(s&&a>s||a<c){const t="bigint"==typeof e?"n":"";throw new i.Ty({max:s?`${s}${t}`:void 0,min:`${c}${t}`,signed:r,size:o,value:`${e}${t}`})}const l=`0x${(r&&a<0?(1n<<BigInt(8*o))+BigInt(a):a).toString(16)}`;return o?(0,n.eV)(l,{size:o}):l}const d=new TextEncoder;function h(e,t={}){return l(d.encode(e),t)}},1772:(e,t,r)=>{"use strict";r.d(t,{l:()=>o});var i=r(6329),n=r(2592);function o(e,t){const r=(e.details||"").toLowerCase(),o=e instanceof i.C?e.walk((e=>e.code===n.A7.code)):e;return o instanceof i.C?new n.A7({cause:e,message:o.details}):n.A7.nodeMessage.test(r)?new n.A7({cause:e,message:e.details}):n.BG.nodeMessage.test(r)?new n.BG({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.jj.nodeMessage.test(r)?new n.jj({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.K0.nodeMessage.test(r)?new n.K0({cause:e,nonce:t?.nonce}):n.Oh.nodeMessage.test(r)?new n.Oh({cause:e,nonce:t?.nonce}):n.vW.nodeMessage.test(r)?new n.vW({cause:e,nonce:t?.nonce}):n.k5.nodeMessage.test(r)?new n.k5({cause:e}):n.lY.nodeMessage.test(r)?new n.lY({cause:e,gas:t?.gas}):n.Fo.nodeMessage.test(r)?new n.Fo({cause:e,gas:t?.gas}):n.uC.nodeMessage.test(r)?new n.uC({cause:e}):n.lN.nodeMessage.test(r)?new n.lN({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new n.RM({cause:e})}},9789:(e,t,r)=>{"use strict";function i(e,{format:t}){if(!t)return{};const r={};return function t(i){const n=Object.keys(i);for(const o of n)o in e&&(r[o]=e[o]),i[o]&&"object"==typeof i[o]&&!Array.isArray(i[o])&&t(i[o])}(t(e||{})),r}r.d(t,{o:()=>i})},7671:(e,t,r)=>{"use strict";r.d(t,{Bv:()=>o});var i=r(4192);const n={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function o(e){const t={};return void 0!==e.accessList&&(t.accessList=e.accessList),void 0!==e.blobs&&("string"!=typeof e.blobs[0]?t.blobs=e.blobs.map((e=>(0,i.My)(e))):t.blobs=e.blobs),void 0!==e.data&&(t.data=e.data),void 0!==e.from&&(t.from=e.from),void 0!==e.gas&&(t.gas=(0,i.cK)(e.gas)),void 0!==e.gasPrice&&(t.gasPrice=(0,i.cK)(e.gasPrice)),void 0!==e.maxFeePerBlobGas&&(t.maxFeePerBlobGas=(0,i.cK)(e.maxFeePerBlobGas)),void 0!==e.maxFeePerGas&&(t.maxFeePerGas=(0,i.cK)(e.maxFeePerGas)),void 0!==e.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=(0,i.cK)(e.maxPriorityFeePerGas)),void 0!==e.nonce&&(t.nonce=(0,i.cK)(e.nonce)),void 0!==e.to&&(t.to=e.to),void 0!==e.type&&(t.type=n[e.type]),void 0!==e.value&&(t.value=(0,i.cK)(e.value)),t}},4178:(e,t,r)=>{"use strict";function i(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function n(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}r.d(t,{S:()=>P});const a=BigInt(2**32-1),s=BigInt(32);function c(e,t=!1){return t?{h:Number(e&a),l:Number(e>>s&a)}:{h:0|Number(e>>s&a),l:0|Number(e&a)}}function l(e,t=!1){let r=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let n=0;n<e.length;n++){const{h:o,l:a}=c(e[n],t);[r[n],i[n]]=[o,a]}return[r,i]}if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw new Error("Non little-endian hardware is not supported");function u(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),!(e instanceof Uint8Array))throw new Error("expected Uint8Array, got "+typeof e);return e}class d{clone(){return this._cloneInto()}}const[h,p,f]=[[],[],[]],g=BigInt(0),w=BigInt(1),m=BigInt(2),v=BigInt(7),b=BigInt(256),y=BigInt(113);for(let e=0,t=w,r=1,i=0;e<24;e++){[r,i]=[i,(2*r+3*i)%5],h.push(2*(5*i+r)),p.push((e+1)*(e+2)/2%64);let n=g;for(let e=0;e<7;e++)t=(t<<w^(t>>v)*y)%b,t&m&&(n^=w<<(w<<BigInt(e))-w);f.push(n)}const[C,x]=l(f,!0),E=(e,t,r)=>r>32?((e,t,r)=>t<<r-32|e>>>64-r)(e,t,r):((e,t,r)=>e<<r|t>>>32-r)(e,t,r),k=(e,t,r)=>r>32?((e,t,r)=>e<<r-32|t>>>64-r)(e,t,r):((e,t,r)=>t<<r|e>>>32-r)(e,t,r);class _ extends d{constructor(e,t,r,n=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=n,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,i(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");var a;this.state=new Uint8Array(200),this.state32=(a=this.state,new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)))}keccak(){!function(e,t=24){const r=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){const i=(t+8)%10,n=(t+2)%10,o=r[n],a=r[n+1],s=E(o,a,1)^r[i],c=k(o,a,1)^r[i+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=c}let t=e[2],n=e[3];for(let r=0;r<24;r++){const i=p[r],o=E(t,n,i),a=k(t,n,i),s=h[r];t=e[s],n=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let i=0;i<10;i++)r[i]=e[t+i];for(let i=0;i<10;i++)e[t+i]^=~r[(i+2)%10]&r[(i+4)%10]}e[0]^=C[i],e[1]^=x[i]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);const{blockLen:t,state:r}=this,i=(e=u(e)).length;for(let n=0;n<i;){const o=Math.min(t-this.pos,i-n);for(let t=0;t<o;t++)r[this.pos++]^=e[n++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:r,blockLen:i}=this;e[r]^=t,128&t&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){o(this,!1),n(e),this.finish();const t=this.state,{blockLen:r}=this;for(let i=0,n=e.length;i<n;){this.posOut>=r&&this.keccak();const o=Math.min(r-this.posOut,n-i);e.set(t.subarray(this.posOut,this.posOut+o),i),this.posOut+=o,i+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return i(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(function(e,t){n(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:r,outputLen:i,rounds:n,enableXOF:o}=this;return e||(e=new _(t,r,i,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=r,e.outputLen=i,e.enableXOF=o,e.destroyed=this.destroyed,e}}const A=((e,t,r)=>function(e){const t=t=>e().update(u(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}((()=>new _(t,e,r))))(1,136,32);var R=r(6394),$=r(4706),S=r(4192);function P(e,t){const r=t||"hex",i=A((0,R.q)(e,{strict:!1})?(0,$.ZJ)(e):e);return"bytes"===r?i:(0,S.nj)(i)}},2599:(e,t,r)=>{"use strict";r.d(t,{V:()=>o});var i=r(3577),n=r(8345);const o=e=>(0,i.di)((0,n.k)(e),0,4)},8345:(e,t,r)=>{"use strict";r.d(t,{k:()=>d});var i=r(4706),n=r(4178);const o=e=>(0,n.S)((0,i.ZJ)(e)),a=/^tuple(?<array>(\[(\d*)\])*)$/;function s(e){let t=e.type;if(a.test(e.type)&&"components"in e){t="(";const r=e.components.length;for(let i=0;i<r;i++)t+=s(e.components[i]),i<r-1&&(t+=", ");const i=function(e,t){const r=e.exec(t);return r?.groups}(a,e.type);return t+=`)${i?.array??""}`,s({...e,type:t})}return"indexed"in e&&e.indexed&&(t=`${t} indexed`),e.name?`${t} ${e.name}`:t}function c(e){let t="";const r=e.length;for(let i=0;i<r;i++)t+=s(e[i]),i!==r-1&&(t+=", ");return t}var l=r(6329);const u=e=>{var t;return function(e){let t=!0,r="",i=0,n="",o=!1;for(let a=0;a<e.length;a++){const s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&i++,")"===s&&i--,t)if(0!==i)" "!==s?(n+=s,r+=s):","!==e[a-1]&&","!==r&&",("!==r&&(r="",t=!1);else if(" "===s&&["event","function",""].includes(n))n="";else if(n+=s,")"===s){o=!0;break}}if(!o)throw new l.C("Unable to normalize signature.");return n}("string"==typeof e?e:"function"===(t=e).type?`function ${t.name}(${c(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${c(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${c(t.inputs)})`:"error"===t.type?`error ${t.name}(${c(t.inputs)})`:"constructor"===t.type?`constructor(${c(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable")};function d(e){return t=u(e),o(t);var t}},2167:(e,t,r)=>{"use strict";r.d(t,{u:()=>n});const i=new Map;function n({fn:e,id:t,shouldSplitBatch:r,wait:n=0,sort:o}){const a=async()=>{const t=c();s();const r=t.map((({args:e})=>e));0!==r.length&&e(r).then((e=>{o&&Array.isArray(e)&&e.sort(o);for(let r=0;r<t.length;r++){const{pendingPromise:i}=t[r];i.resolve?.([e[r],e])}})).catch((e=>{for(let r=0;r<t.length;r++){const{pendingPromise:i}=t[r];i.reject?.(e)}}))},s=()=>i.delete(t),c=()=>i.get(t)||[],l=e=>i.set(t,[...c(),e]);return{flush:s,async schedule(e){const t={},i=new Promise(((e,r)=>{t.resolve=e,t.reject=r})),o=r?.([...c().map((({args:e})=>e)),e]);return o&&a(),c().length>0?(l({args:e,pendingPromise:t}),i):(l({args:e,pendingPromise:t}),setTimeout(a,n),i)}}}},8463:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});const i=(e,t,r)=>JSON.stringify(e,((e,r)=>{const i="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,i):i}),r)},5414:(e,t,r)=>{"use strict";r.d(t,{c:()=>c});var i=r(3033),n=r(4306),o=r(2592),a=r(8990),s=r(1657);function c(e){const{account:t,gasPrice:r,maxFeePerGas:c,maxPriorityFeePerGas:l,to:u}=e,d=t?(0,i.J)(t):void 0;if(d&&!(0,s.P)(d.address))throw new n.M({address:d.address});if(u&&!(0,s.P)(u))throw new n.M({address:u});if(void 0!==r&&(void 0!==c||void 0!==l))throw new a.n3;if(c&&c>2n**256n-1n)throw new o.BG({maxFeePerGas:c});if(l&&c&&l>c)throw new o.lN({maxFeePerGas:c,maxPriorityFeePerGas:l})}},9436:(e,t,r)=>{"use strict";r.d(t,{c:()=>o});var i=r(638),n=r(7135);function o(e,t="wei"){return(0,n.J)(e,i.eL[t])}},9670:(e,t,r)=>{"use strict";r.d(t,{Q:()=>o});var i=r(638),n=r(7135);function o(e,t="wei"){return(0,n.J)(e,i.sz[t])}},7135:(e,t,r)=>{"use strict";function i(e,t){let r=e.toString();const i=r.startsWith("-");i&&(r=r.slice(1)),r=r.padStart(t,"0");let[n,o]=[r.slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${o?`.${o}`:""}`}r.d(t,{J:()=>i})}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=n,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"==typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"==typeof r.then)return r}var n=Object.create(null);a.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,a.d(n,o),n},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".bundle.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},i="build:",a.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==i+n){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",i+n),s.src=e),r[e]=[t];var h=(t,i)=>{s.onerror=s.onload=null,clearTimeout(p);var n=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(i))),t)return t(i)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={792:0};a.f.j=(t,r)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var n=new Promise(((r,n)=>i=e[t]=[r,n]));r.push(i[2]=n);var o=a.p+a.u(t),s=new Error;a.l(o,(r=>{if(a.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,n,[o,s,c]=r,l=0;if(o.some((t=>0!==e[t]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);c&&c(a)}for(t&&t(r);l<o.length;l++)n=o[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkbuild=self.webpackChunkbuild||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";const e="2.6.16";var t,r,i=function(e,t,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class n extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return`@wagmi/core@${e}`}constructor(e,r={}){super(),t.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const i=r.cause instanceof n?r.cause.details:r.cause?.message?r.cause.message:r.details,o=r.cause instanceof n&&r.cause.docsPath||r.docsPath;this.message=[e||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...o?[`Docs: ${this.docsBaseUrl}${o}.html${r.docsSlug?`#${r.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join("\n"),r.cause&&(this.cause=r.cause),this.details=i,this.docsPath=o,this.metaMessages=r.metaMessages,this.shortMessage=e}walk(e){return i(this,t,"m",r).call(this,this,e)}}t=new WeakSet,r=function e(r,n){return n?.(r)?r:r.cause?i(this,t,"m",e).call(this,r.cause,n):r};class o extends n{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class s extends n{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class c extends n{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class l extends n{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class u extends n{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class d extends n{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}async function h(e,t){let r;if(r="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector,r.uid===e.state.current)throw new s;try{e.setState((e=>({...e,status:"connecting"}))),r.emitter.emit("message",{type:"connecting"});const i=await r.connect({chainId:t.chainId}),n=i.accounts;return r.emitter.off("connect",e._internal.events.connect),r.emitter.on("change",e._internal.events.change),r.emitter.on("disconnect",e._internal.events.disconnect),await(e.storage?.setItem("recentConnectorId",r.id)),e.setState((e=>({...e,connections:new Map(e.connections).set(r.uid,{accounts:n,chainId:i.chainId,connector:r}),current:r.uid,status:"connected"}))),{accounts:n,chainId:i.chainId}}catch(t){throw e.setState((e=>({...e,status:e.current?"connected":"disconnected"}))),t}}var p=a(3033),f=a(6329);class g extends f.C{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join("\n"),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}var w=a(4192);async function m(e,{account:t=e.account,message:r}){if(!t)throw new g({docsPath:"/docs/actions/wallet/signMessage"});const i=(0,p.J)(t);if("local"===i.type)return i.signMessage({message:r});const n="string"==typeof r?(0,w.i3)(r):r.raw instanceof Uint8Array?(0,w.nj)(r.raw):r.raw;return e.request({method:"personal_sign",params:[n,i.address]},{retryCount:0})}function v(e,t,r){const i=e[t.name];if("function"==typeof i)return i;const n=e[r];return"function"==typeof n?n:r=>t(e,r)}const b=256;let y,C=b;function x(e=11){if(!y||C+e>2*b){y="",C=0;for(let e=0;e<b;e++)y+=(256+256*Math.random()|0).toString(16).substring(1)}return y.substring(C,C+++e)}function E(e){const{batch:t,cacheTime:r=e.pollingInterval??4e3,ccipRead:i,key:n="base",name:o="Base Client",pollingInterval:a=4e3,type:s="base"}=e,c=e.chain,l=e.account?(0,p.J)(e.account):void 0,{config:u,request:d,value:h}=e.transport({chain:c,pollingInterval:a}),f={account:l,batch:t,cacheTime:r,ccipRead:i,chain:c,key:n,name:o,pollingInterval:a,request:d,transport:{...u,...h},type:s,uid:x()};return Object.assign(f,{extend:function e(t){return r=>{const i=r(t);for(const e in f)delete i[e];const n={...t,...i};return Object.assign(n,{extend:e(n)})}}(f)})}var k=a(6595);class _ extends f.C{constructor(e,{code:t,docsPath:r,metaMessages:i,shortMessage:n}){super(n,{cause:e,docsPath:r,metaMessages:i||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof k.J8?e.code:t??-1}}class A extends _{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class R extends _{constructor(e){super(e,{code:R.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class $ extends _{constructor(e){super(e,{code:$.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty($,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class S extends _{constructor(e){super(e,{code:S.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(S,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class P extends _{constructor(e){super(e,{code:P.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class T extends _{constructor(e){super(e,{code:T.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class I extends _{constructor(e){super(e,{code:I.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class O extends _{constructor(e){super(e,{code:O.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(O,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class N extends _{constructor(e){super(e,{code:N.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(N,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class M extends _{constructor(e){super(e,{code:M.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(M,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class j extends _{constructor(e){super(e,{code:j.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(j,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class U extends _{constructor(e){super(e,{code:U.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(U,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class B extends _{constructor(e){super(e,{code:B.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(B,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class D extends A{constructor(e){super(e,{code:D.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(D,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class L extends A{constructor(e){super(e,{code:L.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(L,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class z extends A{constructor(e){super(e,{code:z.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(z,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class F extends A{constructor(e){super(e,{code:F.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(F,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class W extends A{constructor(e){super(e,{code:W.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(W,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class H extends A{constructor(e){super(e,{code:H.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(H,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class q extends _{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}function Z(e,{delay:t=100,retryCount:r=2,shouldRetry:i=(()=>!0)}={}){return new Promise(((n,o)=>{const a=async({count:s=0}={})=>{try{const t=await e();n(t)}catch(e){if(s<r&&await i({count:s,error:e}))return(async({error:e})=>{const r="function"==typeof t?t({count:s,error:e}):t;r&&await async function(e){return new Promise((t=>setTimeout(t,e)))}(r),a({count:s+1})})({error:e});o(e)}};a()}))}function V(e,t={}){return async(r,i={})=>{const{retryDelay:n=150,retryCount:o=3}={...t,...i};return Z((async()=>{try{return await e(r)}catch(e){const t=e;switch(t.code){case R.code:throw new R(t);case $.code:throw new $(t);case S.code:throw new S(t);case P.code:throw new P(t);case T.code:throw new T(t);case I.code:throw new I(t);case O.code:throw new O(t);case N.code:throw new N(t);case M.code:throw new M(t);case j.code:throw new j(t);case U.code:throw new U(t);case B.code:throw new B(t);case D.code:throw new D(t);case L.code:throw new L(t);case z.code:throw new z(t);case F.code:throw new F(t);case W.code:throw new W(t);case H.code:throw new H(t);case 5e3:throw new D(t);default:if(e instanceof f.C)throw e;throw new q(t)}}}),{delay:({count:e,error:t})=>{if(t&&t instanceof k.Ci){const e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return(1<<e)*n},retryCount:o,shouldRetry:({error:e})=>function(e){return"code"in e&&"number"==typeof e.code?-1===e.code||e.code===U.code||e.code===T.code:!(e instanceof k.Ci&&e.status)||(403===e.status||408===e.status||413===e.status||429===e.status||500===e.status||502===e.status||503===e.status||504===e.status)}(e)})}}function G({key:e,name:t,request:r,retryCount:i=3,retryDelay:n=150,timeout:o,type:a},s){return{config:{key:e,name:t,request:r,retryCount:i,retryDelay:n,timeout:o,type:a},request:V(r,{retryCount:i,retryDelay:n}),value:s}}var K=a(4569);async function Y(e,t={}){let r;if(t.connector){const{connector:e}=t,[i,n]=await Promise.all([e.getAccounts(),e.getChainId()]);r={accounts:i,chainId:n,connector:e}}else r=e.state.connections.get(e.state.current);if(!r)throw new c;const i=t.chainId??r.chainId,n=r.connector;if(n.getClient)return n.getClient({chainId:i});const o=(0,p.J)(t.account??r.accounts[0]);o.address=(0,K.b)(o.address);const a=e.chains.find((e=>e.id===i)),s=await r.connector.getProvider({chainId:i});if(t.account&&!r.accounts.includes(o.address))throw new l({address:o.address,connector:n});return E({account:o,chain:a,name:"Connector Client",transport:e=>function(e,t={}){const{key:r="custom",name:i="Custom Provider",retryDelay:n}=t;return({retryCount:o})=>G({key:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:n,type:"custom"})}(s)({...e,retryCount:0})})}function J(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let r,i;if(Array.isArray(e)&&Array.isArray(t)){if(r=e.length,r!==t.length)return!1;for(i=r;0!=i--;)if(!J(e[i],t[i]))return!1;return!0}if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const n=Object.keys(e);if(r=n.length,r!==Object.keys(t).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(t,n[i]))return!1;for(i=r;0!=i--;){const r=n[i];if(r&&!J(e[r],t[r]))return!1}return!0}return e!=e&&t!=t}function Q(e){const t=e.state.current,r=e.state.connections.get(t),i=r?.accounts,n=i?.[0],o=e.chains.find((e=>e.id===r?.chainId)),a=e.state.status;switch(a){case"connected":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:a};case"reconnecting":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!!n,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:a};case"connecting":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:a};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:a}}}function X(e,t){const{onChange:r}=t;return e.subscribe((()=>Q(e)),r,{equalityFn(e,t){const{connector:r,...i}=e,{connector:n,...o}=t;return J(i,o)&&r?.id===n?.id&&r?.uid===n?.uid}})}var ee=a(4823),te=a(9985),re=a(4453),ie=a(8863);function ne(e,t){if(!(e instanceof f.C))return!1;const r=e.walk((e=>e instanceof ie.M));return r instanceof ie.M&&("ResolverNotFound"===r.data?.errorName||"ResolverWildcardNotSupported"===r.data?.errorName||"ResolverNotContract"===r.data?.errorName||"ResolverError"===r.data?.errorName||"HttpError"===r.data?.errorName||!!r.reason?.includes("Wildcard on non-extended resolvers is not supported")||"reverse"===t&&r.reason===re.fD[50])}var oe=a(4706),ae=a(4178),se=a(6394);function ce(e){if(66!==e.length)return null;if(0!==e.indexOf("["))return null;if(65!==e.indexOf("]"))return null;const t=`0x${e.slice(1,65)}`;return(0,se.q)(t)?t:null}function le(e){const t=new Uint8Array(32).fill(0);return e?ce(e)||(0,ae.S)((0,oe.Af)(e)):(0,w.My)(t)}function ue(e){const t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);const r=new Uint8Array((0,oe.Af)(t).byteLength+2);let i=0;const n=t.split(".");for(let e=0;e<n.length;e++){let t=(0,oe.Af)(n[e]);t.byteLength>255&&(t=(0,oe.Af)(`[${le(n[e]).slice(2)}]`)),r[i]=t.length,r.set(t,i+1),i+=t.length+1}return r.byteLength!==i+1?r.slice(0,i+1):r}function de(e,t,r){return i=>e[t.name||r]?.(i)??t(e,i)}var he=a(6652),pe=a(8503),fe=a(7372);const ge=3;function we(e,{abi:t,address:r,args:i,docsPath:n,functionName:o,sender:a}){const{code:s,data:c,message:l,shortMessage:u}=e instanceof ie.$S?e:e instanceof f.C?e.walk((e=>"data"in e))||e.walk():{},d=e instanceof fe.O?new ie.rR({functionName:o}):[ge,T.code].includes(s)&&(c||l||u)?new ie.M({abi:t,data:"object"==typeof c?c.data:c,functionName:o,message:u??l}):e;return new ie.bG(d,{abi:t,args:i,contractAddress:r,docsPath:n,functionName:o,sender:a})}var me=a(6782);async function ve(e,t){const{abi:r,address:i,args:n,functionName:o,...a}=t,s=(0,pe.p)({abi:r,args:n,functionName:o});try{const{data:t}=await de(e,me.T1,"call")({...a,data:s,to:i});return(0,he.e)({abi:r,args:n,functionName:o,data:t||"0x"})}catch(e){throw we(e,{abi:r,address:i,args:n,docsPath:"/docs/contract/readContract",functionName:o})}}async function be(e,{address:t,blockNumber:r,blockTag:i,gatewayUrls:n,strict:o,universalResolverAddress:a}){let s=a;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=(0,te.M)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}const c=`${t.toLowerCase().substring(2)}.addr.reverse`;try{const o={address:s,abi:ee.oX,functionName:"reverse",args:[(0,w.nj)(ue(c))],blockNumber:r,blockTag:i},a=de(e,ve,"readContract"),[l,u]=n?await a({...o,args:[...o.args,n]}):await a(o);return t.toLowerCase()!==u.toLowerCase()?null:l}catch(e){if(o)throw e;if(ne(e,"reverse"))return null;throw e}}class ye extends f.C{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class Ce extends f.C{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class xe extends f.C{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class Ee extends f.C{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const ke=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,_e=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Ae=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Re=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;function $e(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function Se({uri:e,gatewayUrls:t}){const r=Ae.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};const i=$e(t?.ipfs,"https://ipfs.io"),n=$e(t?.arweave,"https://arweave.net"),o=e.match(ke),{protocol:a,subpath:s,target:c,subtarget:l=""}=o?.groups||{},u="ipns:/"===a||"ipns/"===s,d="ipfs:/"===a||"ipfs/"===s||_e.test(e);if(e.startsWith("http")&&!u&&!d){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((u||d)&&c)return{uri:`${i}/${u?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&c)return{uri:`${n}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(Re,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new xe({uri:e})}function Pe(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new ye({data:e});return e.image||e.image_url||e.image_data}async function Te({gatewayUrls:e,uri:t}){const{uri:r,isOnChain:i}=Se({uri:t,gatewayUrls:e});if(i)return r;const n=await async function(e){try{const t=await fetch(e,{method:"HEAD"});if(200===t.status){const e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){return("object"!=typeof t||void 0===t.response)&&!!globalThis.hasOwnProperty("Image")&&new Promise((t=>{const r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e}))}}(r);if(n)return r;throw new xe({uri:t})}var Ie=a(5419);function Oe(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,w.My)(t);const r=e.split(".");for(let e=r.length-1;e>=0;e-=1){const i=ce(r[e]),n=i?(0,oe.ZJ)(i):(0,ae.S)((0,oe.Af)(r[e]),"bytes");t=(0,ae.S)((0,Ie.xW)([t,n]),"bytes")}return(0,w.My)(t)}async function Ne(e,{blockNumber:t,blockTag:r,name:i,key:n,gatewayUrls:o,strict:a,universalResolverAddress:s}){let c=s;if(!c){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");c=(0,te.M)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a={address:c,abi:ee.Ag,functionName:"resolve",args:[(0,w.nj)(ue(i)),(0,pe.p)({abi:ee.SJ,functionName:"text",args:[Oe(i),n]})],blockNumber:t,blockTag:r},s=de(e,ve,"readContract"),l=o?await s({...a,args:[...a.args,o]}):await s(a);if("0x"===l[0])return null;const u=(0,he.e)({abi:ee.SJ,functionName:"text",data:l[0]});return""===u?null:u}catch(e){if(a)throw e;if(ne(e,"resolve"))return null;throw e}}async function Me(e,{blockNumber:t,blockTag:r,assetGatewayUrls:i,name:n,gatewayUrls:o,strict:a,universalResolverAddress:s}){const c=await de(e,Ne,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:n,universalResolverAddress:s,gatewayUrls:o,strict:a});if(!c)return null;try{return await async function(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?async function(e,{gatewayUrls:t,record:r}){const i=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[r,i,n]=t.split("/"),[o,a]=r.split(":"),[s,c]=i.split(":");if(!o||"eip155"!==o.toLowerCase())throw new Ce({reason:"Only EIP-155 supported"});if(!a)throw new Ce({reason:"Chain ID not found"});if(!c)throw new Ce({reason:"Contract address not found"});if(!n)throw new Ce({reason:"Token ID not found"});if(!s)throw new Ce({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:c,tokenID:n}}(r),n=await async function(e,{nft:t}){if("erc721"===t.namespace)return ve(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return ve(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new Ee({namespace:t.namespace})}(e,{nft:i}),{uri:o,isOnChain:a,isEncoded:s}=Se({uri:n,gatewayUrls:t});if(a&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const e=s?atob(o.replace("data:application/json;base64,","")):o;return Te({uri:Pe(JSON.parse(e)),gatewayUrls:t})}let c=i.tokenID;return"erc1155"===i.namespace&&(c=c.replace("0x","").padStart(64,"0")),async function({gatewayUrls:e,uri:t}){try{const r=await fetch(t).then((e=>e.json()));return await Te({gatewayUrls:e,uri:Pe(r)})}catch{throw new xe({uri:t})}}({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,c)})}(e,{gatewayUrls:t,record:r}):Te({uri:r,gatewayUrls:t})}(e,{record:c,gatewayUrls:i})}catch{return null}}var je=a(6675),Ue=a(8583),Be=a(7135);async function De(e,{address:t,blockNumber:r,blockTag:i="latest"}){const n=r?(0,w.cK)(r):void 0,o=await e.request({method:"eth_getBalance",params:[t,n||i]});return BigInt(o)}var Le=a(638);function ze(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(Le.pj[e])}async function Fe(e,t){const{allowFailure:r=!0,batchSize:i,blockNumber:n,blockTag:o,multicallAddress:a,stateOverride:s}=t,c=t.contracts,l=i??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024);let u=a;if(!u){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");u=(0,te.M)({blockNumber:n,chain:e.chain,contract:"multicall3"})}const d=[[]];let h=0,p=0;for(let e=0;e<c.length;e++){const{abi:t,address:i,args:n,functionName:o}=c[e];try{const e=(0,pe.p)({abi:t,args:n,functionName:o});p+=(e.length-2)/2,l>0&&p>l&&d[h].length>0&&(h++,p=(e.length-2)/2,d[h]=[]),d[h]=[...d[h],{allowFailure:!0,callData:e,target:i}]}catch(e){const a=we(e,{abi:t,address:i,args:n,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw a;d[h]=[...d[h],{allowFailure:!0,callData:"0x",target:i}]}}const g=await Promise.allSettled(d.map((t=>de(e,ve,"readContract")({abi:ee.v2,address:u,args:[t],blockNumber:n,blockTag:o,functionName:"aggregate3",stateOverride:s})))),w=[];for(let e=0;e<g.length;e++){const t=g[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<d[e].length;r++)w.push({status:"failure",error:t.reason,result:void 0});continue}const i=t.value;for(let t=0;t<i.length;t++){const{returnData:n,success:o}=i[t],{callData:a}=d[e][t],{abi:s,address:l,functionName:u,args:h}=c[w.length];try{if("0x"===a)throw new fe.O;if(!o)throw new ie.$S({data:n});const e=(0,he.e)({abi:s,args:h,data:n,functionName:u});w.push(r?{result:e,status:"success"}:e)}catch(e){const t=we(e,{abi:s,address:l,args:h,docsPath:"/docs/contract/multicall",functionName:u});if(!r)throw t;w.push({error:t,result:void 0,status:"failure"})}}}if(w.length!==c.length)throw new f.C("multicall results mismatch");return w}async function We(e,t){const{allowFailure:r=!0,blockNumber:i,blockTag:n,...o}=t,a=t.contracts;try{const t=a.reduce(((t,r,i)=>{const n=r.chainId??e.state.chainId;return{...t,[n]:[...t[n]||[],{contract:r,index:i}]}}),{}),s=()=>Object.entries(t).map((([t,a])=>async function(e,t){const{allowFailure:r=!0,chainId:i,contracts:n,...o}=t;return v(e.getClient({chainId:i}),Fe,"multicall")({allowFailure:r,contracts:n,...o})}(e,{...o,allowFailure:r,blockNumber:i,blockTag:n,chainId:parseInt(t),contracts:a.map((({contract:e})=>e))}))),c=(await Promise.all(s())).flat(),l=Object.values(t).flatMap((e=>e.map((({index:e})=>e))));return c.reduce(((e,t,r)=>(e&&(e[l[r]]=t),e)),[])}catch(t){if(t instanceof ie.bG)throw t;const o=()=>a.map((t=>function(e,t){const{chainId:r,...i}=t;return v(e.getClient({chainId:r}),ve,"readContract")(i)}(e,{...t,blockNumber:i,blockTag:n})));return r?(await Promise.allSettled(o())).map((e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"})):await Promise.all(o())}}async function He(e,t){const{balanceAddress:r,chainId:i,symbolType:n,tokenAddress:o,unit:a}=t,s={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:n}]}],address:o},[c,l,u]=await We(e,{allowFailure:!1,contracts:[{...s,functionName:"balanceOf",args:[r],chainId:i},{...s,functionName:"decimals",chainId:i},{...s,functionName:"symbol",chainId:i}]});return{decimals:l,formatted:(0,Be.J)(c??"0",ze(a??l)),symbol:u,value:c}}function qe(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}const Ze=qe({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var Ve=a(1171),Ge=a(2657),Ke=a(5269),Ye=a(7332),Je=a(6097);const Qe=e=>e??Je.s6;var Xe=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let et=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=Ve.AccountController.state.address,this.balanceVal=Ve.AccountController.state.balance,this.balanceSymbol=Ve.AccountController.state.balanceSymbol,this.profileName=Ve.AccountController.state.profileName,this.profileImage=Ve.AccountController.state.profileImage,this.network=Ve.NetworkController.state.caipNetwork,this.isUnsupportedChain=Ve.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(Ve.AccountController.subscribe((e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")})),Ve.NetworkController.subscribeKey("caipNetwork",(e=>this.network=e)),Ve.NetworkController.subscribeKey("isUnsupportedChain",(e=>this.isUnsupportedChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=Ve.$m.getNetworkImage(this.network),t="show"===this.balance;return Ke.qy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${Qe(this.address)}
        profileName=${Qe(this.profileName)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${Qe(e)}
        avatarSrc=${Qe(this.profileImage)}
        balance=${t?Ve.wE.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?Ve.W3.open({view:"UnsupportedChain"}):Ve.W3.open()}};Xe([(0,Ye.MZ)({type:Boolean})],et.prototype,"disabled",void 0),Xe([(0,Ye.MZ)()],et.prototype,"balance",void 0),Xe([(0,Ye.MZ)()],et.prototype,"charsStart",void 0),Xe([(0,Ye.MZ)()],et.prototype,"charsEnd",void 0),Xe([(0,Ye.wk)()],et.prototype,"address",void 0),Xe([(0,Ye.wk)()],et.prototype,"balanceVal",void 0),Xe([(0,Ye.wk)()],et.prototype,"balanceSymbol",void 0),Xe([(0,Ye.wk)()],et.prototype,"profileName",void 0),Xe([(0,Ye.wk)()],et.prototype,"profileImage",void 0),Xe([(0,Ye.wk)()],et.prototype,"network",void 0),Xe([(0,Ye.wk)()],et.prototype,"isUnsupportedChain",void 0),et=Xe([(0,Ge.customElement)("w3m-account-button")],et);const tt=Ke.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var rt=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let it=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=Ve.AccountController.state.isConnected,this.unsubscribe.push(Ve.AccountController.subscribeKey("isConnected",(e=>{this.isAccount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.isAccount?Ke.qy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${Qe(this.balance)}
            .charsStart=${Qe(this.charsStart)}
            .charsEnd=${Qe(this.charsEnd)}
          >
          </w3m-account-button>
        `:Ke.qy`
          <w3m-connect-button
            size=${Qe(this.size)}
            label=${Qe(this.label)}
            loadingLabel=${Qe(this.loadingLabel)}
          ></w3m-connect-button>
        `}};it.styles=tt,rt([(0,Ye.MZ)({type:Boolean})],it.prototype,"disabled",void 0),rt([(0,Ye.MZ)()],it.prototype,"balance",void 0),rt([(0,Ye.MZ)()],it.prototype,"size",void 0),rt([(0,Ye.MZ)()],it.prototype,"label",void 0),rt([(0,Ye.MZ)()],it.prototype,"loadingLabel",void 0),rt([(0,Ye.MZ)()],it.prototype,"charsStart",void 0),rt([(0,Ye.MZ)()],it.prototype,"charsEnd",void 0),rt([(0,Ye.wk)()],it.prototype,"isAccount",void 0),it=rt([(0,Ge.customElement)("w3m-button")],it);var nt=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ot=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ve.W3.state.open,this.loading=Ve.W3.state.loading,this.unsubscribe.push(Ve.W3.subscribe((e=>{this.open=e.open,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.loading||this.open;return Ke.qy`
      <wui-connect-button
        size=${Qe(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ve.W3.close():this.loading||Ve.W3.open()}};nt([(0,Ye.MZ)()],ot.prototype,"size",void 0),nt([(0,Ye.MZ)()],ot.prototype,"label",void 0),nt([(0,Ye.MZ)()],ot.prototype,"loadingLabel",void 0),nt([(0,Ye.wk)()],ot.prototype,"open",void 0),nt([(0,Ye.wk)()],ot.prototype,"loading",void 0),ot=nt([(0,Ge.customElement)("w3m-connect-button")],ot),a(505);const at=Ke.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var st=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ct=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Ve.NetworkController.state.caipNetwork,this.connected=Ve.AccountController.state.isConnected,this.loading=Ve.W3.state.loading,this.isUnsupportedChain=Ve.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(Ve.NetworkController.subscribeKey("caipNetwork",(e=>this.network=e)),Ve.AccountController.subscribeKey("isConnected",(e=>this.connected=e)),Ve.W3.subscribeKey("loading",(e=>this.loading=e)),Ve.NetworkController.subscribeKey("isUnsupportedChain",(e=>this.isUnsupportedChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${Qe(Ve.$m.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(Ve.En.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Ve.W3.open({view:"Networks"}))}};ct.styles=at,st([(0,Ye.MZ)({type:Boolean})],ct.prototype,"disabled",void 0),st([(0,Ye.wk)()],ct.prototype,"network",void 0),st([(0,Ye.wk)()],ct.prototype,"connected",void 0),st([(0,Ye.wk)()],ct.prototype,"loading",void 0),st([(0,Ye.wk)()],ct.prototype,"isUnsupportedChain",void 0),ct=st([(0,Ge.customElement)("w3m-network-button")],ct);const lt=Ke.AH`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var ut=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let dt=class extends Ke.WF{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=Ve.RouterController.state.view,this.unsubscribe.push(Ve.RouterController.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async([e])=>{const t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return Ke.qy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return Ke.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return Ke.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return Ke.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return Ke.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return Ke.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return Ke.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return Ke.qy`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return Ke.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return Ke.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return Ke.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return Ke.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return Ke.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return Ke.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return Ke.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return Ke.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return Ke.qy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return Ke.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return Ke.qy`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return Ke.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return Ke.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return Ke.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return Ke.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return Ke.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return Ke.qy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return Ke.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return Ke.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return Ke.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return Ke.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return Ke.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return Ke.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WalletSend":return Ke.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return Ke.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return Ke.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`}}async onViewChange(e){const{history:t}=Ve.RouterController.state;let r=-10,i=10;t.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};dt.styles=lt,ut([(0,Ye.wk)()],dt.prototype,"view",void 0),dt=ut([(0,Ge.customElement)("w3m-router")],dt);const ht=Ke.AH`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var pt=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const ft={USD:"$",EUR:"€",GBP:"£"},gt=[100,250,500,1e3];let wt=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=Ve.AccountController.state.isConnected,this.loading=Ve.W3.state.loading,this.paymentCurrency=Ve.aG.state.paymentCurrency,this.paymentAmount=Ve.aG.state.paymentAmount,this.purchaseAmount=Ve.aG.state.purchaseAmount,this.quoteLoading=Ve.aG.state.quotesLoading,this.unsubscribe.push(Ve.AccountController.subscribeKey("isConnected",(e=>{this.connected=e})),Ve.W3.subscribeKey("loading",(e=>{this.loading=e})),Ve.aG.subscribe((e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${gt.map((e=>Ke.qy`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${ft[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`))}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?Ke.qy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:Ke.qy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||Ve.W3.open({view:"OnRampProviders"})}openModal(){Ve.W3.open({view:"Connect"})}async onPaymentAmountChange(e){Ve.aG.setPaymentAmount(Number(e.detail)),await Ve.aG.getQuote()}async selectPresetAmount(e){Ve.aG.setPaymentAmount(e),await Ve.aG.getQuote()}};wt.styles=ht,pt([(0,Ye.MZ)({type:Boolean})],wt.prototype,"disabled",void 0),pt([(0,Ye.wk)()],wt.prototype,"connected",void 0),pt([(0,Ye.wk)()],wt.prototype,"loading",void 0),pt([(0,Ye.wk)()],wt.prototype,"paymentCurrency",void 0),pt([(0,Ye.wk)()],wt.prototype,"paymentAmount",void 0),pt([(0,Ye.wk)()],wt.prototype,"purchaseAmount",void 0),pt([(0,Ye.wk)()],wt.prototype,"quoteLoading",void 0),wt=pt([(0,Ge.customElement)("w3m-onramp-widget")],wt);const mt=Ke.AH`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var vt=a(8287);"undefined"!=typeof window&&(window.Buffer||(window.Buffer=vt.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));const bt={SECURE_SITE_SDK:process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR"},yt={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};var Ct,xt;!function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw new Error},e.arrayToEnum=e=>{const t={};for(const r of e)t[r]=r;return t},e.getValidEnumValues=t=>{const r=e.objectKeys(t).filter((e=>"number"!=typeof t[t[e]])),i={};for(const e of r)i[e]=t[e];return e.objectValues(i)},e.objectValues=t=>e.objectKeys(t).map((function(e){return t[e]})),e.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{const t=[];for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},e.find=(e,t)=>{for(const r of e)if(t(r))return r},e.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e,t=" | "){return e.map((e=>"string"==typeof e?`'${e}'`:e)).join(t)},e.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t}(Ct||(Ct={})),function(e){e.mergeShapes=(e,t)=>({...e,...t})}(xt||(xt={}));const Et=Ct.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),kt=e=>{switch(typeof e){case"undefined":return Et.undefined;case"string":return Et.string;case"number":return isNaN(e)?Et.nan:Et.number;case"boolean":return Et.boolean;case"function":return Et.function;case"bigint":return Et.bigint;case"symbol":return Et.symbol;case"object":return Array.isArray(e)?Et.array:null===e?Et.null:e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch?Et.promise:"undefined"!=typeof Map&&e instanceof Map?Et.map:"undefined"!=typeof Set&&e instanceof Set?Et.set:"undefined"!=typeof Date&&e instanceof Date?Et.date:Et.object;default:return Et.unknown}},_t=Ct.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class At extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(e){return e.message},r={_errors:[]},i=e=>{for(const n of e.issues)if("invalid_union"===n.code)n.unionErrors.map(i);else if("invalid_return_type"===n.code)i(n.returnTypeError);else if("invalid_arguments"===n.code)i(n.argumentsError);else if(0===n.path.length)r._errors.push(t(n));else{let e=r,i=0;for(;i<n.path.length;){const r=n.path[i];i===n.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(n))):e[r]=e[r]||{_errors:[]},e=e[r],i++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ct.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=(e=>e.message)){const t={},r=[];for(const i of this.issues)i.path.length>0?(t[i.path[0]]=t[i.path[0]]||[],t[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}At.create=e=>new At(e);const Rt=(e,t)=>{let r;switch(e.code){case _t.invalid_type:r=e.received===Et.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case _t.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,Ct.jsonStringifyReplacer)}`;break;case _t.unrecognized_keys:r=`Unrecognized key(s) in object: ${Ct.joinValues(e.keys,", ")}`;break;case _t.invalid_union:r="Invalid input";break;case _t.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${Ct.joinValues(e.options)}`;break;case _t.invalid_enum_value:r=`Invalid enum value. Expected ${Ct.joinValues(e.options)}, received '${e.received}'`;break;case _t.invalid_arguments:r="Invalid function arguments";break;case _t.invalid_return_type:r="Invalid function return type";break;case _t.invalid_date:r="Invalid date";break;case _t.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:Ct.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case _t.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case _t.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case _t.custom:r="Invalid input";break;case _t.invalid_intersection_types:r="Intersection results could not be merged";break;case _t.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case _t.not_finite:r="Number must be finite";break;default:r=t.defaultError,Ct.assertNever(e)}return{message:r}};let $t=Rt;function St(){return $t}const Pt=e=>{const{data:t,path:r,errorMaps:i,issueData:n}=e,o=[...r,...n.path||[]],a={...n,path:o};let s="";const c=i.filter((e=>!!e)).slice().reverse();for(const e of c)s=e(a,{data:t,defaultError:s}).message;return{...n,path:o,message:n.message||s}};function Tt(e,t){const r=Pt({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,St(),Rt].filter((e=>!!e))});e.common.issues.push(r)}class It{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const i of t){if("aborted"===i.status)return Ot;"dirty"===i.status&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const e of t)r.push({key:await e.key,value:await e.value});return It.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const i of t){const{key:t,value:n}=i;if("aborted"===t.status)return Ot;if("aborted"===n.status)return Ot;"dirty"===t.status&&e.dirty(),"dirty"===n.status&&e.dirty(),"__proto__"===t.value||void 0===n.value&&!i.alwaysSet||(r[t.value]=n.value)}return{status:e.value,value:r}}}const Ot=Object.freeze({status:"aborted"}),Nt=e=>({status:"dirty",value:e}),Mt=e=>({status:"valid",value:e}),jt=e=>"aborted"===e.status,Ut=e=>"dirty"===e.status,Bt=e=>"valid"===e.status,Dt=e=>"undefined"!=typeof Promise&&e instanceof Promise;var Lt;!function(e){e.errToObj=e=>"string"==typeof e?{message:e}:e||{},e.toString=e=>"string"==typeof e?e:null==e?void 0:e.message}(Lt||(Lt={}));class zt{constructor(e,t,r,i){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Ft=(e,t)=>{if(Bt(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new At(e.common.issues);return this._error=t,this._error}}};function Wt(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:i,description:n}=e;if(t&&(r||i))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:n}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=i?i:t.defaultError}:{message:null!=r?r:t.defaultError},description:n}}class Ht{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return kt(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:kt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new It,ctx:{common:e.parent.common,data:e.data,parsedType:kt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Dt(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const i={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:kt(e)},n=this._parseSync({data:e,path:i.path,parent:i});return Ft(i,n)}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:kt(e)},i=this._parse({data:e,path:r.path,parent:r}),n=await(Dt(i)?i:Promise.resolve(i));return Ft(r,n)}refine(e,t){const r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement(((t,i)=>{const n=e(t),o=()=>i.addIssue({code:_t.custom,...r(t)});return"undefined"!=typeof Promise&&n instanceof Promise?n.then((e=>!!e||(o(),!1))):!!n||(o(),!1)}))}refinement(e,t){return this._refinement(((r,i)=>!!e(r)||(i.addIssue("function"==typeof t?t(r,i):t),!1)))}_refinement(e){return new Ir({schema:this,typeName:Hr.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Or.create(this,this._def)}nullable(){return Nr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return pr.create(this,this._def)}promise(){return Tr.create(this,this._def)}or(e){return wr.create([this,e],this._def)}and(e){return yr.create(this,e,this._def)}transform(e){return new Ir({...Wt(this._def),schema:this,typeName:Hr.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t="function"==typeof e?e:()=>e;return new Mr({...Wt(this._def),innerType:this,defaultValue:t,typeName:Hr.ZodDefault})}brand(){return new Dr({typeName:Hr.ZodBranded,type:this,...Wt(this._def)})}catch(e){const t="function"==typeof e?e:()=>e;return new jr({...Wt(this._def),innerType:this,catchValue:t,typeName:Hr.ZodCatch})}describe(e){return new(0,this.constructor)({...this._def,description:e})}pipe(e){return Lr.create(this,e)}readonly(){return zr.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const qt=/^c[^\s-]{8,}$/i,Zt=/^[a-z][a-z0-9]*$/,Vt=/^[0-9A-HJKMNP-TV-Z]{26}$/,Gt=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Kt=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;let Yt;const Jt=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Qt=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;function Xt(e,t){return!("v4"!==t&&t||!Jt.test(e))||!("v6"!==t&&t||!Qt.test(e))}class er extends Ht{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Et.string){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.string,received:t.parsedType}),Ot}const t=new It;let r;for(const n of this._def.checks)if("min"===n.kind)e.data.length<n.value&&(r=this._getOrReturnCtx(e,r),Tt(r,{code:_t.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),t.dirty());else if("max"===n.kind)e.data.length>n.value&&(r=this._getOrReturnCtx(e,r),Tt(r,{code:_t.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),t.dirty());else if("length"===n.kind){const i=e.data.length>n.value,o=e.data.length<n.value;(i||o)&&(r=this._getOrReturnCtx(e,r),i?Tt(r,{code:_t.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}):o&&Tt(r,{code:_t.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}),t.dirty())}else if("email"===n.kind)Kt.test(e.data)||(r=this._getOrReturnCtx(e,r),Tt(r,{validation:"email",code:_t.invalid_string,message:n.message}),t.dirty());else if("emoji"===n.kind)Yt||(Yt=new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),Yt.test(e.data)||(r=this._getOrReturnCtx(e,r),Tt(r,{validation:"emoji",code:_t.invalid_string,message:n.message}),t.dirty());else if("uuid"===n.kind)Gt.test(e.data)||(r=this._getOrReturnCtx(e,r),Tt(r,{validation:"uuid",code:_t.invalid_string,message:n.message}),t.dirty());else if("cuid"===n.kind)qt.test(e.data)||(r=this._getOrReturnCtx(e,r),Tt(r,{validation:"cuid",code:_t.invalid_string,message:n.message}),t.dirty());else if("cuid2"===n.kind)Zt.test(e.data)||(r=this._getOrReturnCtx(e,r),Tt(r,{validation:"cuid2",code:_t.invalid_string,message:n.message}),t.dirty());else if("ulid"===n.kind)Vt.test(e.data)||(r=this._getOrReturnCtx(e,r),Tt(r,{validation:"ulid",code:_t.invalid_string,message:n.message}),t.dirty());else if("url"===n.kind)try{new URL(e.data)}catch(i){r=this._getOrReturnCtx(e,r),Tt(r,{validation:"url",code:_t.invalid_string,message:n.message}),t.dirty()}else"regex"===n.kind?(n.regex.lastIndex=0,n.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),Tt(r,{validation:"regex",code:_t.invalid_string,message:n.message}),t.dirty())):"trim"===n.kind?e.data=e.data.trim():"includes"===n.kind?e.data.includes(n.value,n.position)||(r=this._getOrReturnCtx(e,r),Tt(r,{code:_t.invalid_string,validation:{includes:n.value,position:n.position},message:n.message}),t.dirty()):"toLowerCase"===n.kind?e.data=e.data.toLowerCase():"toUpperCase"===n.kind?e.data=e.data.toUpperCase():"startsWith"===n.kind?e.data.startsWith(n.value)||(r=this._getOrReturnCtx(e,r),Tt(r,{code:_t.invalid_string,validation:{startsWith:n.value},message:n.message}),t.dirty()):"endsWith"===n.kind?e.data.endsWith(n.value)||(r=this._getOrReturnCtx(e,r),Tt(r,{code:_t.invalid_string,validation:{endsWith:n.value},message:n.message}),t.dirty()):"datetime"===n.kind?((i=n).precision?i.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}Z$`):0===i.precision?i.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):i.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(e.data)||(r=this._getOrReturnCtx(e,r),Tt(r,{code:_t.invalid_string,validation:"datetime",message:n.message}),t.dirty()):"ip"===n.kind?Xt(e.data,n.version)||(r=this._getOrReturnCtx(e,r),Tt(r,{validation:"ip",code:_t.invalid_string,message:n.message}),t.dirty()):Ct.assertNever(n);var i;return{status:t.value,value:e.data}}_regex(e,t,r){return this.refinement((t=>e.test(t)),{validation:t,code:_t.invalid_string,...Lt.errToObj(r)})}_addCheck(e){return new er({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Lt.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Lt.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Lt.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Lt.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Lt.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Lt.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Lt.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Lt.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...Lt.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Lt.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...Lt.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Lt.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Lt.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Lt.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Lt.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Lt.errToObj(t)})}nonempty(e){return this.min(1,Lt.errToObj(e))}trim(){return new er({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new er({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new er({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find((e=>"datetime"===e.kind))}get isEmail(){return!!this._def.checks.find((e=>"email"===e.kind))}get isURL(){return!!this._def.checks.find((e=>"url"===e.kind))}get isEmoji(){return!!this._def.checks.find((e=>"emoji"===e.kind))}get isUUID(){return!!this._def.checks.find((e=>"uuid"===e.kind))}get isCUID(){return!!this._def.checks.find((e=>"cuid"===e.kind))}get isCUID2(){return!!this._def.checks.find((e=>"cuid2"===e.kind))}get isULID(){return!!this._def.checks.find((e=>"ulid"===e.kind))}get isIP(){return!!this._def.checks.find((e=>"ip"===e.kind))}get minLength(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}function tr(e,t){const r=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,n=r>i?r:i;return parseInt(e.toFixed(n).replace(".",""))%parseInt(t.toFixed(n).replace(".",""))/Math.pow(10,n)}er.create=e=>{var t;return new er({checks:[],typeName:Hr.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...Wt(e)})};class rr extends Ht{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Et.number){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.number,received:t.parsedType}),Ot}let t;const r=new It;for(const i of this._def.checks)"int"===i.kind?Ct.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),Tt(t,{code:_t.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(t=this._getOrReturnCtx(e,t),Tt(t,{code:_t.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(t=this._getOrReturnCtx(e,t),Tt(t,{code:_t.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"multipleOf"===i.kind?0!==tr(e.data,i.value)&&(t=this._getOrReturnCtx(e,t),Tt(t,{code:_t.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):"finite"===i.kind?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),Tt(t,{code:_t.not_finite,message:i.message}),r.dirty()):Ct.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Lt.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Lt.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Lt.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Lt.toString(t))}setLimit(e,t,r,i){return new rr({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:Lt.toString(i)}]})}_addCheck(e){return new rr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Lt.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Lt.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Lt.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Lt.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Lt.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Lt.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Lt.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Lt.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Lt.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find((e=>"int"===e.kind||"multipleOf"===e.kind&&Ct.isInteger(e.value)))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}rr.create=e=>new rr({checks:[],typeName:Hr.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...Wt(e)});class ir extends Ht{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==Et.bigint){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.bigint,received:t.parsedType}),Ot}let t;const r=new It;for(const i of this._def.checks)"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(t=this._getOrReturnCtx(e,t),Tt(t,{code:_t.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(t=this._getOrReturnCtx(e,t),Tt(t,{code:_t.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"multipleOf"===i.kind?e.data%i.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),Tt(t,{code:_t.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):Ct.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Lt.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Lt.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Lt.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Lt.toString(t))}setLimit(e,t,r,i){return new ir({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:Lt.toString(i)}]})}_addCheck(e){return new ir({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Lt.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Lt.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Lt.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Lt.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Lt.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}ir.create=e=>{var t;return new ir({checks:[],typeName:Hr.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...Wt(e)})};class nr extends Ht{_parse(e){if(this._def.coerce&&(e.data=Boolean(e.data)),this._getType(e)!==Et.boolean){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.boolean,received:t.parsedType}),Ot}return Mt(e.data)}}nr.create=e=>new nr({typeName:Hr.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...Wt(e)});class or extends Ht{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Et.date){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.date,received:t.parsedType}),Ot}if(isNaN(e.data.getTime()))return Tt(this._getOrReturnCtx(e),{code:_t.invalid_date}),Ot;const t=new It;let r;for(const i of this._def.checks)"min"===i.kind?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),Tt(r,{code:_t.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),t.dirty()):"max"===i.kind?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),Tt(r,{code:_t.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),t.dirty()):Ct.assertNever(i);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(e){return new or({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Lt.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Lt.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}or.create=e=>new or({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:Hr.ZodDate,...Wt(e)});class ar extends Ht{_parse(e){if(this._getType(e)!==Et.symbol){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.symbol,received:t.parsedType}),Ot}return Mt(e.data)}}ar.create=e=>new ar({typeName:Hr.ZodSymbol,...Wt(e)});class sr extends Ht{_parse(e){if(this._getType(e)!==Et.undefined){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.undefined,received:t.parsedType}),Ot}return Mt(e.data)}}sr.create=e=>new sr({typeName:Hr.ZodUndefined,...Wt(e)});class cr extends Ht{_parse(e){if(this._getType(e)!==Et.null){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.null,received:t.parsedType}),Ot}return Mt(e.data)}}cr.create=e=>new cr({typeName:Hr.ZodNull,...Wt(e)});class lr extends Ht{constructor(){super(...arguments),this._any=!0}_parse(e){return Mt(e.data)}}lr.create=e=>new lr({typeName:Hr.ZodAny,...Wt(e)});class ur extends Ht{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Mt(e.data)}}ur.create=e=>new ur({typeName:Hr.ZodUnknown,...Wt(e)});class dr extends Ht{_parse(e){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.never,received:t.parsedType}),Ot}}dr.create=e=>new dr({typeName:Hr.ZodNever,...Wt(e)});class hr extends Ht{_parse(e){if(this._getType(e)!==Et.undefined){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.void,received:t.parsedType}),Ot}return Mt(e.data)}}hr.create=e=>new hr({typeName:Hr.ZodVoid,...Wt(e)});class pr extends Ht{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),i=this._def;if(t.parsedType!==Et.array)return Tt(t,{code:_t.invalid_type,expected:Et.array,received:t.parsedType}),Ot;if(null!==i.exactLength){const e=t.data.length>i.exactLength.value,n=t.data.length<i.exactLength.value;(e||n)&&(Tt(t,{code:e?_t.too_big:_t.too_small,minimum:n?i.exactLength.value:void 0,maximum:e?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(null!==i.minLength&&t.data.length<i.minLength.value&&(Tt(t,{code:_t.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),null!==i.maxLength&&t.data.length>i.maxLength.value&&(Tt(t,{code:_t.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map(((e,r)=>i.type._parseAsync(new zt(t,e,t.path,r))))).then((e=>It.mergeArray(r,e)));const n=[...t.data].map(((e,r)=>i.type._parseSync(new zt(t,e,t.path,r))));return It.mergeArray(r,n)}get element(){return this._def.type}min(e,t){return new pr({...this._def,minLength:{value:e,message:Lt.toString(t)}})}max(e,t){return new pr({...this._def,maxLength:{value:e,message:Lt.toString(t)}})}length(e,t){return new pr({...this._def,exactLength:{value:e,message:Lt.toString(t)}})}nonempty(e){return this.min(1,e)}}function fr(e){if(e instanceof gr){const t={};for(const r in e.shape){const i=e.shape[r];t[r]=Or.create(fr(i))}return new gr({...e._def,shape:()=>t})}return e instanceof pr?new pr({...e._def,type:fr(e.element)}):e instanceof Or?Or.create(fr(e.unwrap())):e instanceof Nr?Nr.create(fr(e.unwrap())):e instanceof Cr?Cr.create(e.items.map((e=>fr(e)))):e}pr.create=(e,t)=>new pr({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Hr.ZodArray,...Wt(t)});class gr extends Ht{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;const e=this._def.shape(),t=Ct.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==Et.object){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.object,received:t.parsedType}),Ot}const{status:t,ctx:r}=this._processInputParams(e),{shape:i,keys:n}=this._getCached(),o=[];if(!(this._def.catchall instanceof dr&&"strip"===this._def.unknownKeys))for(const e in r.data)n.includes(e)||o.push(e);const a=[];for(const e of n){const t=i[e],n=r.data[e];a.push({key:{status:"valid",value:e},value:t._parse(new zt(r,n,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof dr){const e=this._def.unknownKeys;if("passthrough"===e)for(const e of o)a.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)o.length>0&&(Tt(r,{code:_t.unrecognized_keys,keys:o}),t.dirty());else if("strip"!==e)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const e=this._def.catchall;for(const t of o){const i=r.data[t];a.push({key:{status:"valid",value:t},value:e._parse(new zt(r,i,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then((async()=>{const e=[];for(const t of a){const r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e})).then((e=>It.mergeObjectSync(t,e))):It.mergeObjectSync(t,a)}get shape(){return this._def.shape()}strict(e){return Lt.errToObj,new gr({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var i,n,o,a;const s=null!==(o=null===(n=(i=this._def).errorMap)||void 0===n?void 0:n.call(i,t,r).message)&&void 0!==o?o:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(a=Lt.errToObj(e).message)&&void 0!==a?a:s}:{message:s}}}:{}})}strip(){return new gr({...this._def,unknownKeys:"strip"})}passthrough(){return new gr({...this._def,unknownKeys:"passthrough"})}extend(e){return new gr({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new gr({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Hr.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new gr({...this._def,catchall:e})}pick(e){const t={};return Ct.objectKeys(e).forEach((r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])})),new gr({...this._def,shape:()=>t})}omit(e){const t={};return Ct.objectKeys(this.shape).forEach((r=>{e[r]||(t[r]=this.shape[r])})),new gr({...this._def,shape:()=>t})}deepPartial(){return fr(this)}partial(e){const t={};return Ct.objectKeys(this.shape).forEach((r=>{const i=this.shape[r];e&&!e[r]?t[r]=i:t[r]=i.optional()})),new gr({...this._def,shape:()=>t})}required(e){const t={};return Ct.objectKeys(this.shape).forEach((r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof Or;)e=e._def.innerType;t[r]=e}})),new gr({...this._def,shape:()=>t})}keyof(){return $r(Ct.objectKeys(this.shape))}}gr.create=(e,t)=>new gr({shape:()=>e,unknownKeys:"strip",catchall:dr.create(),typeName:Hr.ZodObject,...Wt(t)}),gr.strictCreate=(e,t)=>new gr({shape:()=>e,unknownKeys:"strict",catchall:dr.create(),typeName:Hr.ZodObject,...Wt(t)}),gr.lazycreate=(e,t)=>new gr({shape:e,unknownKeys:"strip",catchall:dr.create(),typeName:Hr.ZodObject,...Wt(t)});class wr extends Ht{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map((async e=>{const r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}}))).then((function(e){for(const t of e)if("valid"===t.result.status)return t.result;for(const r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;const r=e.map((e=>new At(e.ctx.common.issues)));return Tt(t,{code:_t.invalid_union,unionErrors:r}),Ot}));{let e;const i=[];for(const n of r){const r={...t,common:{...t.common,issues:[]},parent:null},o=n._parseSync({data:t.data,path:t.path,parent:r});if("valid"===o.status)return o;"dirty"!==o.status||e||(e={result:o,ctx:r}),r.common.issues.length&&i.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;const n=i.map((e=>new At(e)));return Tt(t,{code:_t.invalid_union,unionErrors:n}),Ot}}get options(){return this._def.options}}wr.create=(e,t)=>new wr({options:e,typeName:Hr.ZodUnion,...Wt(t)});const mr=e=>e instanceof Ar?mr(e.schema):e instanceof Ir?mr(e.innerType()):e instanceof Rr?[e.value]:e instanceof Sr?e.options:e instanceof Pr?Object.keys(e.enum):e instanceof Mr?mr(e._def.innerType):e instanceof sr?[void 0]:e instanceof cr?[null]:null;class vr extends Ht{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Et.object)return Tt(t,{code:_t.invalid_type,expected:Et.object,received:t.parsedType}),Ot;const r=this.discriminator,i=t.data[r],n=this.optionsMap.get(i);return n?t.common.async?n._parseAsync({data:t.data,path:t.path,parent:t}):n._parseSync({data:t.data,path:t.path,parent:t}):(Tt(t,{code:_t.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Ot)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const i=new Map;for(const r of t){const t=mr(r.shape[e]);if(!t)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const n of t){if(i.has(n))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);i.set(n,r)}}return new vr({typeName:Hr.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:i,...Wt(r)})}}function br(e,t){const r=kt(e),i=kt(t);if(e===t)return{valid:!0,data:e};if(r===Et.object&&i===Et.object){const r=Ct.objectKeys(t),i=Ct.objectKeys(e).filter((e=>-1!==r.indexOf(e))),n={...e,...t};for(const r of i){const i=br(e[r],t[r]);if(!i.valid)return{valid:!1};n[r]=i.data}return{valid:!0,data:n}}if(r===Et.array&&i===Et.array){if(e.length!==t.length)return{valid:!1};const r=[];for(let i=0;i<e.length;i++){const n=br(e[i],t[i]);if(!n.valid)return{valid:!1};r.push(n.data)}return{valid:!0,data:r}}return r===Et.date&&i===Et.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class yr extends Ht{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),i=(e,i)=>{if(jt(e)||jt(i))return Ot;const n=br(e.value,i.value);return n.valid?((Ut(e)||Ut(i))&&t.dirty(),{status:t.value,value:n.data}):(Tt(r,{code:_t.invalid_intersection_types}),Ot)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then((([e,t])=>i(e,t))):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}yr.create=(e,t,r)=>new yr({left:e,right:t,typeName:Hr.ZodIntersection,...Wt(r)});class Cr extends Ht{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==Et.array)return Tt(r,{code:_t.invalid_type,expected:Et.array,received:r.parsedType}),Ot;if(r.data.length<this._def.items.length)return Tt(r,{code:_t.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ot;!this._def.rest&&r.data.length>this._def.items.length&&(Tt(r,{code:_t.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...r.data].map(((e,t)=>{const i=this._def.items[t]||this._def.rest;return i?i._parse(new zt(r,e,r.path,t)):null})).filter((e=>!!e));return r.common.async?Promise.all(i).then((e=>It.mergeArray(t,e))):It.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new Cr({...this._def,rest:e})}}Cr.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Cr({items:e,typeName:Hr.ZodTuple,rest:null,...Wt(t)})};class xr extends Ht{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==Et.object)return Tt(r,{code:_t.invalid_type,expected:Et.object,received:r.parsedType}),Ot;const i=[],n=this._def.keyType,o=this._def.valueType;for(const e in r.data)i.push({key:n._parse(new zt(r,e,r.path,e)),value:o._parse(new zt(r,r.data[e],r.path,e))});return r.common.async?It.mergeObjectAsync(t,i):It.mergeObjectSync(t,i)}get element(){return this._def.valueType}static create(e,t,r){return new xr(t instanceof Ht?{keyType:e,valueType:t,typeName:Hr.ZodRecord,...Wt(r)}:{keyType:er.create(),valueType:e,typeName:Hr.ZodRecord,...Wt(t)})}}class Er extends Ht{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==Et.map)return Tt(r,{code:_t.invalid_type,expected:Et.map,received:r.parsedType}),Ot;const i=this._def.keyType,n=this._def.valueType,o=[...r.data.entries()].map((([e,t],o)=>({key:i._parse(new zt(r,e,r.path,[o,"key"])),value:n._parse(new zt(r,t,r.path,[o,"value"]))})));if(r.common.async){const e=new Map;return Promise.resolve().then((async()=>{for(const r of o){const i=await r.key,n=await r.value;if("aborted"===i.status||"aborted"===n.status)return Ot;"dirty"!==i.status&&"dirty"!==n.status||t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}}))}{const e=new Map;for(const r of o){const i=r.key,n=r.value;if("aborted"===i.status||"aborted"===n.status)return Ot;"dirty"!==i.status&&"dirty"!==n.status||t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}}}}Er.create=(e,t,r)=>new Er({valueType:t,keyType:e,typeName:Hr.ZodMap,...Wt(r)});class kr extends Ht{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==Et.set)return Tt(r,{code:_t.invalid_type,expected:Et.set,received:r.parsedType}),Ot;const i=this._def;null!==i.minSize&&r.data.size<i.minSize.value&&(Tt(r,{code:_t.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),null!==i.maxSize&&r.data.size>i.maxSize.value&&(Tt(r,{code:_t.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());const n=this._def.valueType;function o(e){const r=new Set;for(const i of e){if("aborted"===i.status)return Ot;"dirty"===i.status&&t.dirty(),r.add(i.value)}return{status:t.value,value:r}}const a=[...r.data.values()].map(((e,t)=>n._parse(new zt(r,e,r.path,t))));return r.common.async?Promise.all(a).then((e=>o(e))):o(a)}min(e,t){return new kr({...this._def,minSize:{value:e,message:Lt.toString(t)}})}max(e,t){return new kr({...this._def,maxSize:{value:e,message:Lt.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}kr.create=(e,t)=>new kr({valueType:e,minSize:null,maxSize:null,typeName:Hr.ZodSet,...Wt(t)});class _r extends Ht{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Et.function)return Tt(t,{code:_t.invalid_type,expected:Et.function,received:t.parsedType}),Ot;function r(e,r){return Pt({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,St(),Rt].filter((e=>!!e)),issueData:{code:_t.invalid_arguments,argumentsError:r}})}function i(e,r){return Pt({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,St(),Rt].filter((e=>!!e)),issueData:{code:_t.invalid_return_type,returnTypeError:r}})}const n={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof Tr){const e=this;return Mt((async function(...t){const a=new At([]),s=await e._def.args.parseAsync(t,n).catch((e=>{throw a.addIssue(r(t,e)),a})),c=await Reflect.apply(o,this,s);return await e._def.returns._def.type.parseAsync(c,n).catch((e=>{throw a.addIssue(i(c,e)),a}))}))}{const e=this;return Mt((function(...t){const a=e._def.args.safeParse(t,n);if(!a.success)throw new At([r(t,a.error)]);const s=Reflect.apply(o,this,a.data),c=e._def.returns.safeParse(s,n);if(!c.success)throw new At([i(s,c.error)]);return c.data}))}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new _r({...this._def,args:Cr.create(e).rest(ur.create())})}returns(e){return new _r({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new _r({args:e||Cr.create([]).rest(ur.create()),returns:t||ur.create(),typeName:Hr.ZodFunction,...Wt(r)})}}class Ar extends Ht{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Ar.create=(e,t)=>new Ar({getter:e,typeName:Hr.ZodLazy,...Wt(t)});class Rr extends Ht{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return Tt(t,{received:t.data,code:_t.invalid_literal,expected:this._def.value}),Ot}return{status:"valid",value:e.data}}get value(){return this._def.value}}function $r(e,t){return new Sr({values:e,typeName:Hr.ZodEnum,...Wt(t)})}Rr.create=(e,t)=>new Rr({value:e,typeName:Hr.ZodLiteral,...Wt(t)});class Sr extends Ht{_parse(e){if("string"!=typeof e.data){const t=this._getOrReturnCtx(e),r=this._def.values;return Tt(t,{expected:Ct.joinValues(r),received:t.parsedType,code:_t.invalid_type}),Ot}if(-1===this._def.values.indexOf(e.data)){const t=this._getOrReturnCtx(e),r=this._def.values;return Tt(t,{received:t.data,code:_t.invalid_enum_value,options:r}),Ot}return Mt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return Sr.create(e)}exclude(e){return Sr.create(this.options.filter((t=>!e.includes(t))))}}Sr.create=$r;class Pr extends Ht{_parse(e){const t=Ct.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==Et.string&&r.parsedType!==Et.number){const e=Ct.objectValues(t);return Tt(r,{expected:Ct.joinValues(e),received:r.parsedType,code:_t.invalid_type}),Ot}if(-1===t.indexOf(e.data)){const e=Ct.objectValues(t);return Tt(r,{received:r.data,code:_t.invalid_enum_value,options:e}),Ot}return Mt(e.data)}get enum(){return this._def.values}}Pr.create=(e,t)=>new Pr({values:e,typeName:Hr.ZodNativeEnum,...Wt(t)});class Tr extends Ht{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Et.promise&&!1===t.common.async)return Tt(t,{code:_t.invalid_type,expected:Et.promise,received:t.parsedType}),Ot;const r=t.parsedType===Et.promise?t.data:Promise.resolve(t.data);return Mt(r.then((e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap}))))}}Tr.create=(e,t)=>new Tr({type:e,typeName:Hr.ZodPromise,...Wt(t)});class Ir extends Ht{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Hr.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),i=this._def.effect||null,n={addIssue:e=>{Tt(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(n.addIssue=n.addIssue.bind(n),"preprocess"===i.type){const e=i.transform(r.data,n);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then((e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r}))):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===i.type){const e=e=>{const t=i.refinement(e,n);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1===r.common.async){const i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===i.status?Ot:("dirty"===i.status&&t.dirty(),e(i.value),{status:t.value,value:i.value})}return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then((r=>"aborted"===r.status?Ot:("dirty"===r.status&&t.dirty(),e(r.value).then((()=>({status:t.value,value:r.value}))))))}if("transform"===i.type){if(!1===r.common.async){const e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Bt(e))return e;const o=i.transform(e.value,n);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then((e=>Bt(e)?Promise.resolve(i.transform(e.value,n)).then((e=>({status:t.value,value:e}))):e))}Ct.assertNever(i)}}Ir.create=(e,t,r)=>new Ir({schema:e,typeName:Hr.ZodEffects,effect:t,...Wt(r)}),Ir.createWithPreprocess=(e,t,r)=>new Ir({schema:t,effect:{type:"preprocess",transform:e},typeName:Hr.ZodEffects,...Wt(r)});class Or extends Ht{_parse(e){return this._getType(e)===Et.undefined?Mt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Or.create=(e,t)=>new Or({innerType:e,typeName:Hr.ZodOptional,...Wt(t)});class Nr extends Ht{_parse(e){return this._getType(e)===Et.null?Mt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Nr.create=(e,t)=>new Nr({innerType:e,typeName:Hr.ZodNullable,...Wt(t)});class Mr extends Ht{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===Et.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Mr.create=(e,t)=>new Mr({innerType:e,typeName:Hr.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...Wt(t)});class jr extends Ht{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Dt(i)?i.then((e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new At(r.common.issues)},input:r.data})}))):{status:"valid",value:"valid"===i.status?i.value:this._def.catchValue({get error(){return new At(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}jr.create=(e,t)=>new jr({innerType:e,typeName:Hr.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...Wt(t)});class Ur extends Ht{_parse(e){if(this._getType(e)!==Et.nan){const t=this._getOrReturnCtx(e);return Tt(t,{code:_t.invalid_type,expected:Et.nan,received:t.parsedType}),Ot}return{status:"valid",value:e.data}}}Ur.create=e=>new Ur({typeName:Hr.ZodNaN,...Wt(e)});const Br=Symbol("zod_brand");class Dr extends Ht{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class Lr extends Ht{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?Ot:"dirty"===e.status?(t.dirty(),Nt(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{const e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?Ot:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new Lr({in:e,out:t,typeName:Hr.ZodPipeline})}}class zr extends Ht{_parse(e){const t=this._def.innerType._parse(e);return Bt(t)&&(t.value=Object.freeze(t.value)),t}}zr.create=(e,t)=>new zr({innerType:e,typeName:Hr.ZodReadonly,...Wt(t)});const Fr=(e,t={},r)=>e?lr.create().superRefine(((i,n)=>{var o,a;if(!e(i)){const e="function"==typeof t?t(i):"string"==typeof t?{message:t}:t,s=null===(a=null!==(o=e.fatal)&&void 0!==o?o:r)||void 0===a||a,c="string"==typeof e?{message:e}:e;n.addIssue({code:"custom",...c,fatal:s})}})):lr.create(),Wr={object:gr.lazycreate};var Hr;!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"}(Hr||(Hr={}));const qr=er.create,Zr=rr.create,Vr=Ur.create,Gr=ir.create,Kr=nr.create,Yr=or.create,Jr=ar.create,Qr=sr.create,Xr=cr.create,ei=lr.create,ti=ur.create,ri=dr.create,ii=hr.create,ni=pr.create,oi=gr.create,ai=gr.strictCreate,si=wr.create,ci=vr.create,li=yr.create,ui=Cr.create,di=xr.create,hi=Er.create,pi=kr.create,fi=_r.create,gi=Ar.create,wi=Rr.create,mi=Sr.create,vi=Pr.create,bi=Tr.create,yi=Ir.create,Ci=Or.create,xi=Nr.create,Ei=Ir.createWithPreprocess,ki=Lr.create,_i={string:e=>er.create({...e,coerce:!0}),number:e=>rr.create({...e,coerce:!0}),boolean:e=>nr.create({...e,coerce:!0}),bigint:e=>ir.create({...e,coerce:!0}),date:e=>or.create({...e,coerce:!0})},Ai=Ot;var Ri=Object.freeze({__proto__:null,defaultErrorMap:Rt,setErrorMap:function(e){$t=e},getErrorMap:St,makeIssue:Pt,EMPTY_PATH:[],addIssueToContext:Tt,ParseStatus:It,INVALID:Ot,DIRTY:Nt,OK:Mt,isAborted:jt,isDirty:Ut,isValid:Bt,isAsync:Dt,get util(){return Ct},get objectUtil(){return xt},ZodParsedType:Et,getParsedType:kt,ZodType:Ht,ZodString:er,ZodNumber:rr,ZodBigInt:ir,ZodBoolean:nr,ZodDate:or,ZodSymbol:ar,ZodUndefined:sr,ZodNull:cr,ZodAny:lr,ZodUnknown:ur,ZodNever:dr,ZodVoid:hr,ZodArray:pr,ZodObject:gr,ZodUnion:wr,ZodDiscriminatedUnion:vr,ZodIntersection:yr,ZodTuple:Cr,ZodRecord:xr,ZodMap:Er,ZodSet:kr,ZodFunction:_r,ZodLazy:Ar,ZodLiteral:Rr,ZodEnum:Sr,ZodNativeEnum:Pr,ZodPromise:Tr,ZodEffects:Ir,ZodTransformer:Ir,ZodOptional:Or,ZodNullable:Nr,ZodDefault:Mr,ZodCatch:jr,ZodNaN:Ur,BRAND:Br,ZodBranded:Dr,ZodPipeline:Lr,ZodReadonly:zr,custom:Fr,Schema:Ht,ZodSchema:Ht,late:Wr,get ZodFirstPartyTypeKind(){return Hr},coerce:_i,any:ei,array:ni,bigint:Gr,boolean:Kr,date:Yr,discriminatedUnion:ci,effect:yi,enum:mi,function:fi,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>Fr((t=>t instanceof e),t),intersection:li,lazy:gi,literal:wi,map:hi,nan:Vr,nativeEnum:vi,never:ri,null:Xr,nullable:xi,number:Zr,object:oi,oboolean:()=>Kr().optional(),onumber:()=>Zr().optional(),optional:Ci,ostring:()=>qr().optional(),pipeline:ki,preprocess:Ei,promise:bi,record:di,set:pi,strictObject:ai,string:qr,symbol:Jr,transformer:yi,tuple:ui,undefined:Qr,union:si,unknown:ti,void:ii,NEVER:Ai,ZodIssueCode:_t,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:At});const $i=Ri.object({message:Ri.string()});function Si(e){return Ri.literal(bt[e])}Ri.object({accessList:Ri.array(Ri.string()),blockHash:Ri.string().nullable(),blockNumber:Ri.string().nullable(),chainId:Ri.string(),from:Ri.string(),gas:Ri.string(),hash:Ri.string(),input:Ri.string().nullable(),maxFeePerGas:Ri.string(),maxPriorityFeePerGas:Ri.string(),nonce:Ri.string(),r:Ri.string(),s:Ri.string(),to:Ri.string(),transactionIndex:Ri.string().nullable(),type:Ri.string(),v:Ri.string(),value:Ri.string()});const Pi=Ri.object({chainId:Ri.number()}),Ti=Ri.object({email:Ri.string().email()}),Ii=Ri.object({otp:Ri.string()}),Oi=Ri.object({chainId:Ri.optional(Ri.number()),preferredAccountType:Ri.optional(Ri.string())}),Ni=Ri.object({email:Ri.string().email()}),Mi=Ri.object({otp:Ri.string()}),ji=Ri.object({otp:Ri.string()}),Ui=Ri.object({themeMode:Ri.optional(Ri.enum(["light","dark"])),themeVariables:Ri.optional(Ri.record(Ri.string(),Ri.string().or(Ri.number())))}),Bi=Ri.object({metadata:Ri.object({name:Ri.string(),description:Ri.string(),url:Ri.string(),icons:Ri.array(Ri.string())}).optional(),sdkVersion:Ri.string(),projectId:Ri.string()}),Di=Ri.object({type:Ri.string()}),Li=Ri.object({action:Ri.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),zi=Ri.object({email:Ri.string().email(),address:Ri.string(),chainId:Ri.number(),smartAccountDeployed:Ri.optional(Ri.boolean())}),Fi=Ri.object({isConnected:Ri.boolean()}),Wi=Ri.object({chainId:Ri.number()}),Hi=Ri.object({chainId:Ri.number()}),qi=Ri.object({newEmail:Ri.string().email()}),Zi=Ri.object({smartAccountEnabledNetworks:Ri.array(Ri.number())}),Vi=(Ri.object({address:Ri.string(),isDeployed:Ri.boolean()}),Ri.object({type:Ri.string(),address:Ri.string()})),Gi=Ri.any(),Ki=Ri.object({method:Ri.literal("eth_accounts")}),Yi=Ri.object({method:Ri.literal("eth_blockNumber")}),Ji=Ri.object({method:Ri.literal("eth_call"),params:Ri.array(Ri.any())}),Qi=Ri.object({method:Ri.literal("eth_chainId")}),Xi=Ri.object({method:Ri.literal("eth_estimateGas"),params:Ri.array(Ri.any())}),en=Ri.object({method:Ri.literal("eth_feeHistory"),params:Ri.array(Ri.any())}),tn=Ri.object({method:Ri.literal("eth_gasPrice")}),rn=Ri.object({method:Ri.literal("eth_getAccount"),params:Ri.array(Ri.any())}),nn=Ri.object({method:Ri.literal("eth_getBalance"),params:Ri.array(Ri.any())}),on=Ri.object({method:Ri.literal("eth_getBlockByHash"),params:Ri.array(Ri.any())}),an=Ri.object({method:Ri.literal("eth_getBlockByNumber"),params:Ri.array(Ri.any())}),sn=Ri.object({method:Ri.literal("eth_getBlockReceipts"),params:Ri.array(Ri.any())}),cn=Ri.object({method:Ri.literal("eth_getBlockTransactionCountByHash"),params:Ri.array(Ri.any())}),ln=Ri.object({method:Ri.literal("eth_getBlockTransactionCountByNumber"),params:Ri.array(Ri.any())}),un=Ri.object({method:Ri.literal("eth_getCode"),params:Ri.array(Ri.any())}),dn=Ri.object({method:Ri.literal("eth_getFilterChanges"),params:Ri.array(Ri.any())}),hn=Ri.object({method:Ri.literal("eth_getFilterLogs"),params:Ri.array(Ri.any())}),pn=Ri.object({method:Ri.literal("eth_getLogs"),params:Ri.array(Ri.any())}),fn=Ri.object({method:Ri.literal("eth_getProof"),params:Ri.array(Ri.any())}),gn=Ri.object({method:Ri.literal("eth_getStorageAt"),params:Ri.array(Ri.any())}),wn=Ri.object({method:Ri.literal("eth_getTransactionByBlockHashAndIndex"),params:Ri.array(Ri.any())}),mn=Ri.object({method:Ri.literal("eth_getTransactionByBlockNumberAndIndex"),params:Ri.array(Ri.any())}),vn=Ri.object({method:Ri.literal("eth_getTransactionByHash"),params:Ri.array(Ri.any())}),bn=Ri.object({method:Ri.literal("eth_getTransactionCount"),params:Ri.array(Ri.any())}),yn=Ri.object({method:Ri.literal("eth_getTransactionReceipt"),params:Ri.array(Ri.any())}),Cn=Ri.object({method:Ri.literal("eth_getUncleCountByBlockHash"),params:Ri.array(Ri.any())}),xn=Ri.object({method:Ri.literal("eth_getUncleCountByBlockNumber"),params:Ri.array(Ri.any())}),En=Ri.object({method:Ri.literal("eth_maxPriorityFeePerGas")}),kn=Ri.object({method:Ri.literal("eth_newBlockFilter")}),_n=Ri.object({method:Ri.literal("eth_newFilter"),params:Ri.array(Ri.any())}),An=Ri.object({method:Ri.literal("eth_newPendingTransactionFilter")}),Rn=Ri.object({method:Ri.literal("eth_sendRawTransaction"),params:Ri.array(Ri.any())}),$n=Ri.object({method:Ri.literal("eth_syncing"),params:Ri.array(Ri.any())}),Sn=Ri.object({method:Ri.literal("eth_uninstallFilter"),params:Ri.array(Ri.any())}),Pn=Ri.object({method:Ri.literal("personal_sign"),params:Ri.array(Ri.any())}),Tn=Ri.object({method:Ri.literal("eth_signTypedData_v4"),params:Ri.array(Ri.any())}),In=Ri.object({method:Ri.literal("eth_sendTransaction"),params:Ri.array(Ri.any())}),On=Ri.object({token:Ri.string()}),Nn={appEvent:Ri.object({type:Si("APP_SWITCH_NETWORK"),payload:Pi}).or(Ri.object({type:Si("APP_CONNECT_EMAIL"),payload:Ti})).or(Ri.object({type:Si("APP_CONNECT_DEVICE")})).or(Ri.object({type:Si("APP_CONNECT_OTP"),payload:Ii})).or(Ri.object({type:Si("APP_GET_USER"),payload:Ri.optional(Oi)})).or(Ri.object({type:Si("APP_SIGN_OUT")})).or(Ri.object({type:Si("APP_IS_CONNECTED"),payload:Ri.optional(On)})).or(Ri.object({type:Si("APP_GET_CHAIN_ID")})).or(Ri.object({type:Si("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(Ri.object({type:Si("APP_INIT_SMART_ACCOUNT")})).or(Ri.object({type:Si("APP_SET_PREFERRED_ACCOUNT"),payload:Di})).or(Ri.object({type:Si("APP_RPC_REQUEST"),payload:Pn.or(In).or(Ki).or(Yi).or(Ji).or(Qi).or(Xi).or(en).or(tn).or(rn).or(nn).or(on).or(an).or(sn).or(cn).or(ln).or(un).or(dn).or(hn).or(pn).or(fn).or(gn).or(wn).or(mn).or(vn).or(bn).or(yn).or(Cn).or(xn).or(En).or(kn).or(_n).or(An).or(Rn).or($n).or(Sn).or(Pn).or(Tn).or(In)})).or(Ri.object({type:Si("APP_UPDATE_EMAIL"),payload:Ni})).or(Ri.object({type:Si("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:Mi})).or(Ri.object({type:Si("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:ji})).or(Ri.object({type:Si("APP_SYNC_THEME"),payload:Ui})).or(Ri.object({type:Si("APP_SYNC_DAPP_DATA"),payload:Bi})),frameEvent:Ri.object({type:Si("FRAME_SWITCH_NETWORK_ERROR"),payload:$i}).or(Ri.object({type:Si("FRAME_SWITCH_NETWORK_SUCCESS"),payload:Hi})).or(Ri.object({type:Si("FRAME_CONNECT_EMAIL_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_CONNECT_EMAIL_SUCCESS"),payload:Li})).or(Ri.object({type:Si("FRAME_CONNECT_OTP_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_CONNECT_OTP_SUCCESS")})).or(Ri.object({type:Si("FRAME_CONNECT_DEVICE_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_CONNECT_DEVICE_SUCCESS")})).or(Ri.object({type:Si("FRAME_GET_USER_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_GET_USER_SUCCESS"),payload:zi})).or(Ri.object({type:Si("FRAME_SIGN_OUT_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_SIGN_OUT_SUCCESS")})).or(Ri.object({type:Si("FRAME_IS_CONNECTED_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_IS_CONNECTED_SUCCESS"),payload:Fi})).or(Ri.object({type:Si("FRAME_GET_CHAIN_ID_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_GET_CHAIN_ID_SUCCESS"),payload:Wi})).or(Ri.object({type:Si("FRAME_RPC_REQUEST_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_RPC_REQUEST_SUCCESS"),payload:Gi})).or(Ri.object({type:Si("FRAME_SESSION_UPDATE"),payload:On})).or(Ri.object({type:Si("FRAME_UPDATE_EMAIL_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_UPDATE_EMAIL_SUCCESS")})).or(Ri.object({type:Si("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(Ri.object({type:Si("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:qi})).or(Ri.object({type:Si("FRAME_SYNC_THEME_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_SYNC_THEME_SUCCESS")})).or(Ri.object({type:Si("FRAME_SYNC_DAPP_DATA_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(Ri.object({type:Si("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:Zi})).or(Ri.object({type:Si("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:$i})).or(Ri.object({type:Si("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:Vi})).or(Ri.object({type:Si("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:$i}))},Mn={set(e,t){Bn.isClient&&localStorage.setItem(`${bt.STORAGE_KEY}${e}`,t)},get:e=>Bn.isClient?localStorage.getItem(`${bt.STORAGE_KEY}${e}`):null,delete(e){Bn.isClient&&localStorage.removeItem(`${bt.STORAGE_KEY}${e}`)}},jn=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],Un=3e4,Bn={getBlockchainApiUrl(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return jn.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const e=Mn.get(bt.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Un){const e=Math.ceil((Un-t)/1e3);throw new Error(`Please try again after ${e} seconds`)}}},getTimeToNextEmailLogin(){const e=Mn.get(bt.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Un)return Math.ceil((Un-t)/1e3)}return 0},checkIfRequestExists(e){const t=this.getRequestMethod(e);return yt.NOT_SAFE_RPC_METHODS.includes(t)||yt.SAFE_RPC_METHODS.includes(t)},getRequestMethod:e=>e?.payload?.method,checkIfRequestIsAllowed(e){const t=this.getRequestMethod(e);return yt.SAFE_RPC_METHODS.includes(t)},getPreferredAccountType:()=>Mn.get(bt.PREFERRED_ACCOUNT_TYPE)||yt.ACCOUNT_TYPES.EOA,isClient:"undefined"!=typeof window};class Dn{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=Bn.getBlockchainApiUrl(),this.events={onFrameEvent:e=>{Bn.isClient&&window.addEventListener("message",(({data:t})=>{if(!t.type?.includes(bt.FRAME_EVENT_KEY))return;const r=Nn.frameEvent.parse(t);e(r)}))},onAppEvent:e=>{Bn.isClient&&window.addEventListener("message",(({data:t})=>{if(!t.type?.includes(bt.APP_EVENT_KEY))return;const r=Nn.appEvent.parse(t);e(r)}))},postAppEvent:e=>{if(Bn.isClient){if(!this.iframe?.contentWindow)throw new Error("W3mFrame: iframe is not set");Nn.appEvent.parse(e),window.postMessage(e),this.iframe.contentWindow.postMessage(e,"*")}},postFrameEvent:e=>{if(Bn.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");Nn.frameEvent.parse(e),parent.postMessage(e,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}})),t&&(this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}})),Bn.isClient)){const t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${bt.SECURE_SITE_SDK}?projectId=${e}`,t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.opacity="0",t.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",t.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map((e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,chainId:e}})));return Object.assign({},...e)}}class Ln{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.smartAccountEnabledNetworksResolver=void 0,this.setPreferredAccountResolver=void 0,this.w3mFrame=new Dn(e,!0),this.w3mFrame.events.onFrameEvent((e=>{switch(console.log("💻 received",e),e.type){case bt.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(e);case bt.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(e);case bt.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case bt.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(e);case bt.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case bt.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(e);case bt.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(e);case bt.FRAME_GET_USER_ERROR:return this.onConnectError(e);case bt.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(e);case bt.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(e);case bt.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(e);case bt.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(e);case bt.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case bt.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(e);case bt.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(e);case bt.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(e);case bt.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(e);case bt.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(e);case bt.FRAME_SESSION_UPDATE:return this.onSessionUpdate(e);case bt.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case bt.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(e);case bt.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case bt.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(e);case bt.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(e);case bt.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(e);case bt.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case bt.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(e);case bt.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case bt.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(e);case bt.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:return this.onSmartAccountEnabledNetworksSuccess(e);case bt.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:return this.onSmartAccountEnabledNetworksError(e);case bt.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:return this.onPreferSmartAccountSuccess(e);case bt.FRAME_SET_PREFERRED_ACCOUNT_ERROR:return this.onPreferSmartAccountError();default:return null}}))}getLoginEmailUsed(){return Boolean(Mn.get(bt.EMAIL_LOGIN_USED_KEY))}getEmail(){return Mn.get(bt.EMAIL)}rejectRpcRequest(){this.rpcRequestResolver?.reject()}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,Bn.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:bt.APP_CONNECT_EMAIL,payload:e}),new Promise(((e,t)=>{this.connectEmailResolver={resolve:e,reject:t}}))}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_CONNECT_DEVICE}),new Promise(((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}}))}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_CONNECT_OTP,payload:e}),new Promise(((e,t)=>{this.connectOtpResolver={resolve:e,reject:t}}))}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_IS_CONNECTED,payload:void 0}),new Promise(((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}}))}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_GET_CHAIN_ID}),new Promise(((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}}))}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,Bn.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:bt.APP_UPDATE_EMAIL,payload:e}),new Promise(((e,t)=>{this.updateEmailResolver={resolve:e,reject:t}}))}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise(((e,t)=>{this.updateEmailPrimaryOtpResolver={resolve:e,reject:t}}))}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise(((e,t)=>{this.updateEmailSecondaryOtpResolver={resolve:e,reject:t}}))}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_SYNC_THEME,payload:e}),new Promise(((e,t)=>{this.syncThemeResolver={resolve:e,reject:t}}))}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_SYNC_DAPP_DATA,payload:e}),new Promise(((e,t)=>{this.syncDappDataResolver={resolve:e,reject:t}}))}async getSmartAccountEnabledNetworks(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS}),new Promise(((e,t)=>{this.smartAccountEnabledNetworksResolver={resolve:e,reject:t}}))}async setPreferredAccount(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}}),new Promise(((e,t)=>{this.setPreferredAccountResolver={resolve:e,reject:t}}))}async connect(e){const t=e?.chainId??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_GET_USER,payload:{chainId:t,preferredAccountType:e?.preferredAccountType}}),new Promise(((e,t)=>{this.connectResolver={resolve:e,reject:t}}))}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise(((e,t)=>{this.switchChainResolver={resolve:e,reject:t}}))}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:bt.APP_SIGN_OUT}),new Promise(((e,t)=>{this.disconnectResolver={resolve:e,reject:t}}))}async request(e){return await this.w3mFrame.frameLoadPromise,yt.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:bt.APP_RPC_REQUEST,payload:e}),new Promise(((e,t)=>{this.rpcRequestResolver={resolve:e,reject:t}})))}onRpcRequest(e){this.w3mFrame.events.onAppEvent((t=>{t.type.includes(bt.RPC_METHOD_KEY)&&e(t)}))}onRpcResponse(e){this.w3mFrame.events.onFrameEvent((t=>{t.type.includes(bt.RPC_METHOD_KEY)&&e(t)}))}onIsConnected(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===bt.FRAME_GET_USER_SUCCESS&&e(t.payload)}))}onNotConnected(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===bt.FRAME_IS_CONNECTED_ERROR&&e(),t.type!==bt.FRAME_IS_CONNECTED_SUCCESS||t.payload.isConnected||e()}))}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===bt.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(t.payload):t.type===bt.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:yt.ACCOUNT_TYPES.EOA})}))}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===bt.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(t.payload.smartAccountEnabledNetworks):t.type===bt.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])}))}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){e.payload.isConnected||this.deleteEmailLoginCache(),this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.switchChainResolver?.resolve(e.payload)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){const{payload:t}=e}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){this.updateEmailPrimaryOtpResolver?.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){this.updateEmailPrimaryOtpResolver?.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){const{newEmail:t}=e.payload;this.setEmailLoginSuccess(t),this.updateEmailSecondaryOtpResolver?.resolve({newEmail:t})}onUpdateEmailSecondaryOtpError(e){this.updateEmailSecondaryOtpResolver?.reject(e.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(void 0)}onSyncThemeError(e){this.syncThemeResolver?.reject(e.payload.message)}onSyncDappDataSuccess(){this.syncDappDataResolver?.resolve(void 0)}onSyncDappDataError(e){this.syncDappDataResolver?.reject(e.payload.message)}onSmartAccountEnabledNetworksSuccess(e){this.persistSmartAccountEnabledNetworks(e.payload.smartAccountEnabledNetworks),this.smartAccountEnabledNetworksResolver?.resolve(e.payload)}onSmartAccountEnabledNetworksError(e){this.persistSmartAccountEnabledNetworks([]),this.smartAccountEnabledNetworksResolver?.reject(e.payload.message)}onPreferSmartAccountSuccess(e){this.persistPreferredAccount(e.payload.type),this.setPreferredAccountResolver?.resolve(void 0)}onPreferSmartAccountError(){this.setPreferredAccountResolver?.reject()}setNewLastEmailLoginTime(){Mn.set(bt.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){Mn.set(bt.EMAIL,e),Mn.set(bt.EMAIL_LOGIN_USED_KEY,"true"),Mn.delete(bt.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){Mn.delete(bt.EMAIL_LOGIN_USED_KEY),Mn.delete(bt.EMAIL),Mn.delete(bt.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){Mn.set(bt.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(Mn.get(bt.LAST_USED_CHAIN_KEY))}persistPreferredAccount(e){Mn.set(bt.PREFERRED_ACCOUNT_TYPE,e)}persistSmartAccountEnabledNetworks(e){Mn.set(bt.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}}var zn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Fn=class extends Ke.WF{constructor(){super(),this.usubscribe=[],this.networkImages=Ve.jQ.state.networkImages,this.address=Ve.AccountController.state.address,this.profileImage=Ve.AccountController.state.profileImage,this.profileName=Ve.AccountController.state.profileName,this.network=Ve.NetworkController.state.caipNetwork,this.disconnecting=!1,this.loading=!1,this.usubscribe.push(Ve.AccountController.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName):Ve.W3.close()})),Ve.NetworkController.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.imageId??""];return Ke.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Qe(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${this.profileName?Ge.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ge.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${Qe(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=Ve.NetworkController.state,t=!!e&&e.length>1,r=e?.find((({id:e})=>e===this.network?.id));return t||!r}onCopyAddress(){try{this.address&&(Ve.wE.copyToClopboard(this.address),Ve.SnackController.showSuccess("Address copied"))}catch{Ve.SnackController.showError("Failed to copy")}}emailBtnTemplate(){const e=Ve.iT.getConnectedConnector(),t=Ve.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;const r=t.provider.getEmail()??"";return Ke.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}togglePreferredAccountBtnTemplate(){const e=Ve.NetworkController.checkIfSmartAccountEnabled(),t=Ve.iT.getConnectedConnector();if(!Ve.ConnectorController.getEmailConnector()||"EMAIL"!==t||!e)return null;const r=Bn.getPreferredAccountType()===yt.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account";return Ke.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}async changePreferredAccountType(){const e=Ve.NetworkController.checkIfSmartAccountEnabled(),t=Bn.getPreferredAccountType()!==yt.ACCOUNT_TYPES.SMART_ACCOUNT&&e?yt.ACCOUNT_TYPES.SMART_ACCOUNT:yt.ACCOUNT_TYPES.EOA,r=Ve.ConnectorController.getEmailConnector();r&&(this.loading=!0,await(r?.provider.setPreferredAccount(t)),this.loading=!1,this.requestUpdate())}onGoToUpdateEmail(e){Ve.RouterController.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&Ve.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await Ve.ConnectionController.disconnect(),Ve.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ve.W3.close()}catch{Ve.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Ve.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};Fn.styles=mt,zn([(0,Ye.wk)()],Fn.prototype,"address",void 0),zn([(0,Ye.wk)()],Fn.prototype,"profileImage",void 0),zn([(0,Ye.wk)()],Fn.prototype,"profileName",void 0),zn([(0,Ye.wk)()],Fn.prototype,"network",void 0),zn([(0,Ye.wk)()],Fn.prototype,"disconnecting",void 0),zn([(0,Ye.wk)()],Fn.prototype,"loading",void 0),Fn=zn([(0,Ge.customElement)("w3m-account-settings-view")],Fn);let Wn=class extends Ke.WF{render(){const e=Ve.iT.getConnectedConnector();return Ke.qy`
      ${Ve.OptionsController.state.enableWalletFeatures&&"EMAIL"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return Ke.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return Ke.qy`<w3m-account-default-widget></w3m-account-default-widget>`}};Wn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-account-view")],Wn);var Hn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let qn=class extends Ke.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=Ve.wE.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return Ke.qy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?Ke.qy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:Ke.qy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return Ve.wE.isMobile()?Ke.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Ve.RouterController.push("ConnectingWalletConnect")}};Hn([(0,Ye.wk)()],qn.prototype,"search",void 0),qn=Hn([(0,Ge.customElement)("w3m-all-wallets-view")],qn);const Zn=Ke.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var Vn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Gn=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=Ve.aG.state.selectedProvider,this.uri=Ve.ConnectionController.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ve.aG.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e}))),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return Ke.qy`
      <wui-flex
        data-error=${Qe(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${Qe(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name&&(this.startTime=Date.now(),this.initializeCoinbaseTransactions())}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval((()=>this.watchCoinbaseTransactions()),4e3)}async watchCoinbaseTransactions(){try{const e=Ve.AccountController.state.address,t=Ve.OptionsController.state.projectId;if(!e)throw new Error("No address found");(await Ve.TP.fetchTransactions({account:e,onramp:"coinbase",projectId:t})).data.filter((e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?(clearInterval(this.intervalId),Ve.RouterController.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){Ve.SnackController.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,Ve.wE.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?Ke.qy`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=Ve.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return Ke.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url)return Ve.SnackController.showError("No link found"),void Ve.RouterController.goBack();try{Ve.wE.copyToClopboard(this.selectedOnRampProvider.url),Ve.SnackController.showSuccess("Link copied")}catch{Ve.SnackController.showError("Failed to copy")}}};Gn.styles=Zn,Vn([(0,Ye.wk)()],Gn.prototype,"selectedOnRampProvider",void 0),Vn([(0,Ye.wk)()],Gn.prototype,"uri",void 0),Vn([(0,Ye.wk)()],Gn.prototype,"ready",void 0),Vn([(0,Ye.wk)()],Gn.prototype,"showRetry",void 0),Vn([(0,Ye.wk)()],Gn.prototype,"buffering",void 0),Vn([(0,Ye.wk)()],Gn.prototype,"error",void 0),Vn([(0,Ye.wk)()],Gn.prototype,"intervalId",void 0),Vn([(0,Ye.wk)()],Gn.prototype,"startTime",void 0),Vn([(0,Ye.MZ)({type:Boolean})],Gn.prototype,"isMobile",void 0),Vn([(0,Ye.MZ)()],Gn.prototype,"onRetry",void 0),Gn=Vn([(0,Ge.customElement)("w3m-buy-in-progress-view")],Gn);const Kn=Ke.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,Yn={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},VERSION:"4.1.5"},Jn={ConnectorExplorerIds:{[Yn.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Yn.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Yn.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[Yn.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Yn.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Yn.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[Yn.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Yn.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Yn.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Yn.INJECTED_CONNECTOR_ID]:"Browser Wallet",[Yn.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[Yn.COINBASE_CONNECTOR_ID]:"Coinbase",[Yn.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[Yn.LEDGER_CONNECTOR_ID]:"Ledger",[Yn.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[Yn.INJECTED_CONNECTOR_ID]:"INJECTED",[Yn.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[Yn.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[Yn.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},Qn={getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach((([e,r])=>{t[`${Yn.EIP155}:${e}`]=r})),t}};var Xn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eo=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.connectors=Ve.ConnectorController.state.connectors,this.count=Ve.ApiController.state.count,this.unsubscribe.push(Ve.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)),Ve.ApiController.subscribeKey("count",(e=>this.count=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(Ve.wE.isMobile())return null;const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?Ke.qy`
      <wui-list-wallet
        imageSrc=${Qe(Ve.$m.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=Ve.OptionsController.state;return e?.length?this.filterOutDuplicateWallets(e).map((e=>Ke.qy`
        <wui-list-wallet
          imageSrc=${Qe(Ve.$m.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          data-testid=${`wallet-selector-${e.id}`}
        >
        </wui-list-wallet>
      `)):null}featuredTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const{featured:e}=Ve.ApiController.state;return e.length?this.filterOutDuplicateWallets(e).map((e=>Ke.qy`
        <wui-list-wallet
          imageSrc=${Qe(Ve.$m.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)):null}recentTemplate(){return Ve.iT.getRecentWallets().map((e=>Ke.qy`
        <wui-list-wallet
          imageSrc=${Qe(Ve.$m.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}announcedTemplate(){return this.connectors.map((e=>"ANNOUNCED"!==e.type?null:Ke.qy`
        <wui-list-wallet
          imageSrc=${Qe(Ve.$m.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `))}injectedTemplate(){return this.connectors.map((e=>"INJECTED"!==e.type?null:Ve.ConnectionController.checkInstalled()?Ke.qy`
        <wui-list-wallet
          imageSrc=${Qe(Ve.$m.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `:null))}externalTemplate(){const e=Ve.ConnectorController.getAnnouncedConnectorRdns();return this.connectors.map((t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(Yn.CONNECTOR_RDNS_MAP[t.id])?null:Ke.qy`
        <wui-list-wallet
          imageSrc=${Qe(Ve.$m.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `))}allWalletsTemplate(){const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type)),{allWallets:t}=Ve.OptionsController.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!Ve.wE.isMobile())return null;const r=Ve.ApiController.state.featured.length,i=this.count+r,n=i<10?i:10*Math.floor(i/10),o=n<i?`${n}+`:`${n}`;return Ke.qy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${o}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const{recommended:e}=Ve.ApiController.state,{customWallets:t,featuredWalletIds:r}=Ve.OptionsController.state,{connectors:i}=Ve.ConnectorController.state,n=Ve.iT.getRecentWallets(),o=i.filter((e=>"INJECTED"===e.type)).filter((e=>"Browser Wallet"!==e.name));if(r||t||!e.length)return null;const a=o.length+n.length,s=Math.max(0,2-a);return this.filterOutDuplicateWallets(e).slice(0,s).map((e=>Ke.qy`
        <wui-list-wallet
          imageSrc=${Qe(Ve.$m.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}onConnector(e){"WALLET_CONNECT"===e.type?Ve.wE.isMobile()?Ve.RouterController.push("AllWallets"):Ve.RouterController.push("ConnectingWalletConnect"):Ve.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const t=Ve.iT.getRecentWallets(),r=this.connectors.map((e=>e.info?.rdns)).filter(Boolean),i=t.map((e=>e.rdns)).filter(Boolean),n=r.concat(i);return e.filter((e=>!n.includes(String(e?.rdns))))}onAllWallets(){Ve.En.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Ve.RouterController.push("AllWallets")}onConnectWallet(e){Ve.RouterController.push("ConnectingWalletConnect",{wallet:e})}};eo.styles=Kn,Xn([(0,Ye.wk)()],eo.prototype,"connectors",void 0),Xn([(0,Ye.wk)()],eo.prototype,"count",void 0),eo=Xn([(0,Ge.customElement)("w3m-connect-view")],eo);const to=Ke.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var ro=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class io extends Ke.WF{constructor(){super(),this.wallet=Ve.RouterController.state.data?.wallet,this.connector=Ve.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Ve.$m.getWalletImage(this.wallet)??Ve.$m.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=Ve.ConnectionController.state.wcUri,this.error=Ve.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ve.ConnectionController.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),Ve.ConnectionController.subscribeKey("wcError",(e=>this.error=e)),Ve.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),Ke.qy`
      <wui-flex
        data-error=${Qe(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Qe(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?Ke.qy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(Ve.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=Ve.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return Ke.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(Ve.wE.copyToClopboard(this.uri),Ve.SnackController.showSuccess("Link copied"))}catch{Ve.SnackController.showError("Failed to copy")}}}io.styles=to,ro([(0,Ye.wk)()],io.prototype,"uri",void 0),ro([(0,Ye.wk)()],io.prototype,"error",void 0),ro([(0,Ye.wk)()],io.prototype,"ready",void 0),ro([(0,Ye.wk)()],io.prototype,"showRetry",void 0),ro([(0,Ye.wk)()],io.prototype,"buffering",void 0),ro([(0,Ye.MZ)({type:Boolean})],io.prototype,"isMobile",void 0),ro([(0,Ye.MZ)()],io.prototype,"onRetry",void 0);let no=class extends io{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Ve.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&Ve.iT.setConnectedWalletImageUrl(this.connector.imageUrl),await Ve.ConnectionController.connectExternal(this.connector),Ve.OptionsController.state.isSiweEnabled?Ve.RouterController.push("ConnectingSiwe"):Ve.W3.close(),Ve.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){Ve.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};no=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-connecting-external-view")],no);var oo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ao=class extends Ke.WF{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=Ve.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Ve.oU.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),Ke.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):Ke.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=Ve.ConnectionController.state;if(e||Ve.wE.isPairingExpired(t)){if(Ve.ConnectionController.connectWalletConnect(),this.wallet){const e=Ve.$m.getWalletImage(this.wallet);e&&Ve.iT.setConnectedWalletImageUrl(e)}else{const e=Ve.ConnectorController.state.connectors.find((e=>"WALLET_CONNECT"===e.type)),t=Ve.$m.getConnectorImage(e);t&&Ve.iT.setConnectedWalletImageUrl(t)}await Ve.ConnectionController.state.wcPromise,this.finalizeConnection(),Ve.OptionsController.state.isSiweEnabled?Ve.RouterController.push("ConnectingSiwe"):Ve.W3.close()}}catch(e){Ve.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),Ve.ConnectionController.setWcError(!0),Ve.wE.isAllowedRetry(this.lastRetry)&&(Ve.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=Ve.ConnectionController.state;e&&Ve.iT.setWalletConnectDeepLink(e),t&&Ve.iT.setWeb3ModalRecent(t),Ve.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:i,rdns:n}=this.wallet,o=i?.map((({injected_id:e})=>e)).filter(Boolean),a=n?[n]:o??[],s=a.length,c=e,l=r,u=Ve.ConnectionController.checkInstalled(a),d=s&&u,h=t&&!Ve.wE.isMobile();d&&this.platforms.push("browser"),c&&this.platforms.push(Ve.wE.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!d&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return Ke.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return Ke.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return Ke.qy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return Ke.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return Ke.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return Ke.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?Ke.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};oo([(0,Ye.wk)()],ao.prototype,"platform",void 0),oo([(0,Ye.wk)()],ao.prototype,"platforms",void 0),ao=oo([(0,Ge.customElement)("w3m-connecting-wc-view")],ao);let so=class extends Ke.WF{constructor(){super(...arguments),this.wallet=Ve.RouterController.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return Ke.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?Ke.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?Ke.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?Ke.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?Ke.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&Ve.wE.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&Ve.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&Ve.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&Ve.wE.openHref(this.wallet.homepage,"_blank")}};so=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-downloads-view")],so);let co=class extends Ke.WF{render(){return Ke.qy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{Ve.wE.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=Ve.ApiController.state,{customWallets:r}=Ve.OptionsController.state;return[...t,...r??[],...e].slice(0,4).map((e=>Ke.qy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Qe(Ve.$m.getWalletImage(e))}
          @click=${()=>{Ve.wE.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};co=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-get-wallet-view")],co);const lo=Ke.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var uo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ho=class extends Ke.WF{constructor(){super(),this.network=Ve.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return Ke.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Qe(Ve.$m.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:Ke.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await Ve.NetworkController.switchActiveNetwork(this.network),Ve.OptionsController.state.isSiweEnabled||Ve.aS.navigateAfterNetworkSwitch())}catch{this.error=!0}}};ho.styles=lo,uo([(0,Ye.wk)()],ho.prototype,"showRetry",void 0),uo([(0,Ye.wk)()],ho.prototype,"error",void 0),ho=uo([(0,Ge.customElement)("w3m-network-switch-view")],ho);const po=Ke.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var fo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let go=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Ve.NetworkController.state.caipNetwork,this.unsubscribe.push(Ve.NetworkController.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Ve.En.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),Ve.RouterController.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=Ve.NetworkController.state,i=Ve.wE.sortRequestedNetworks(e,t);return i?.map((t=>Ke.qy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${Qe(Ve.$m.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-card-select>
      `))}async onSwitchNetwork(e){const{isConnected:t}=Ve.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:n}=Ve.NetworkController.state,{data:o}=Ve.RouterController.state;t&&n?.id!==e.id?r?.includes(e.id)?(await Ve.NetworkController.switchActiveNetwork(e),Ve.aS.navigateAfterNetworkSwitch()):i&&Ve.RouterController.push("SwitchNetwork",{...o,network:e}):t||(Ve.NetworkController.setCaipNetwork(e),Ve.RouterController.push("Connect"))}};go.styles=po,fo([(0,Ye.wk)()],go.prototype,"caipNetwork",void 0),go=fo([(0,Ge.customElement)("w3m-networks-view")],go);var wo=a(32);const mo=Ke.AH`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var vo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let bo=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=Ve.aG.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=Ve.WC.state.coinbaseTransactions,this.tokenImages=Ve.jQ.state.tokenImages,this.unsubscribe.push(Ve.aG.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e})),Ve.jQ.subscribeKey("tokenImages",(e=>this.tokenImages=e)),(()=>{clearTimeout(this.refetchTimeout)}),Ve.WC.subscribe((e=>{this.coinbaseTransactions={...e.coinbaseTransactions}}))),Ve.WC.clearCursor(),this.fetchTransactions()}render(){return Ke.qy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map((e=>{const t=wo.r.formatDate(e?.metadata?.minedAt),r=e.transfers[0],i=r?.fungible_info;if(!i)return null;const n=i?.icon?.url||this.tokenImages?.[i.symbol||""];return Ke.qy`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${Qe(i.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${t}
          icon=${Qe(n)}
          symbol=${Qe(i.symbol)}
        ></wui-onramp-activity-item>
      `}))}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map((e=>{const t=parseInt(e,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{const r=Ge.TransactionUtil.getTransactionGroupTitle(t,e),i=this.coinbaseTransactions[t]?.[e];return i?Ke.qy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${r}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(i)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=Ve.AccountController.state.address,t=Ve.OptionsController.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await Ve.WC.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){const e=new Date;0!==(this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter((e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?this.refetchTimeout=setTimeout((async()=>{const e=Ve.AccountController.state.address;await Ve.WC.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()}),3e3):clearTimeout(this.refetchTimeout)}templateLoading(){return Array(7).fill(Ke.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}};bo.styles=mo,vo([(0,Ye.wk)()],bo.prototype,"selectedOnRampProvider",void 0),vo([(0,Ye.wk)()],bo.prototype,"loading",void 0),vo([(0,Ye.wk)()],bo.prototype,"coinbaseTransactions",void 0),vo([(0,Ye.wk)()],bo.prototype,"tokenImages",void 0),bo=vo([(0,Ge.customElement)("w3m-onramp-activity-view")],bo);const yo=Ke.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Co=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let xo=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Ve.aG.state.paymentCurrency,this.currencies=Ve.aG.state.paymentCurrencies,this.currencyImages=Ve.jQ.state.currencyImages,this.unsubscribe.push(Ve.aG.subscribe((e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies})),Ve.jQ.subscribeKey("currencyImages",(e=>this.currencyImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map((e=>Ke.qy`
        <wui-list-item
          imageSrc=${Qe(this.currencyImages?.[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `))}selectCurrency(e){e&&(Ve.aG.setPaymentCurrency(e),Ve.W3.close())}};xo.styles=yo,Co([(0,Ye.wk)()],xo.prototype,"selectedCurrency",void 0),Co([(0,Ye.wk)()],xo.prototype,"currencies",void 0),Co([(0,Ye.wk)()],xo.prototype,"currencyImages",void 0),xo=Co([(0,Ge.customElement)("w3m-onramp-fiat-select-view")],xo);var Eo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ko=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.providers=Ve.aG.state.providers,this.unsubscribe.push(Ve.aG.subscribeKey("providers",(e=>{this.providers=e})))}firstUpdated(){const e=this.providers.map((async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url)));Promise.all(e).then((e=>{this.providers=this.providers.map(((t,r)=>({...t,url:e[r]||""})))}))}render(){return Ke.qy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map((e=>Ke.qy`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `))}onClickProvider(e){Ve.aG.setSelectedProvider(e),Ve.RouterController.push("BuyInProgress"),Ve.wE.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){const e=Ve.AccountController.state.address,t=Ve.NetworkController.state.caipNetwork;if(!e)throw new Error("No address found");if(!t?.name)throw new Error("No network found");const r=Ve.oU.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??Ve.oU.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,i=Ve.aG.state.purchaseCurrency,n=i?[i.symbol]:Ve.aG.state.purchaseCurrencies.map((e=>e.symbol));return await Ve.TP.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:Ve.oU.WC_COINBASE_PAY_SDK_CHAINS,assets:n}],partnerUserId:e,purchaseAmount:Ve.aG.state.purchaseAmount})}};Eo([(0,Ye.wk)()],ko.prototype,"providers",void 0),ko=Eo([(0,Ge.customElement)("w3m-onramp-providers-view")],ko);const _o=Ke.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Ao=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ro=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Ve.aG.state.purchaseCurrencies,this.tokens=Ve.aG.state.purchaseCurrencies,this.tokenImages=Ve.jQ.state.tokenImages,this.unsubscribe.push(Ve.aG.subscribe((e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies})),Ve.jQ.subscribeKey("tokenImages",(e=>this.tokenImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map((e=>Ke.qy`
        <wui-list-item
          imageSrc=${Qe(this.tokenImages?.[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `))}selectToken(e){e&&(Ve.aG.setPurchaseCurrency(e),Ve.W3.close())}};Ro.styles=_o,Ao([(0,Ye.wk)()],Ro.prototype,"selectedCurrency",void 0),Ao([(0,Ye.wk)()],Ro.prototype,"tokens",void 0),Ao([(0,Ye.wk)()],Ro.prototype,"tokenImages",void 0),Ro=Ao([(0,Ge.customElement)("w3m-onramp-token-select-view")],Ro);const $o=Ke.AH`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let So=class extends Ke.WF{render(){return Ke.qy`
      <wui-flex flexDirection="column" gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};So.styles=$o,So=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-transactions-view")],So);const Po=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let To=class extends Ke.WF{render(){return Ke.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Po}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{Ve.wE.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};To=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-what-is-a-network-view")],To);const Io=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Oo=class extends Ke.WF{render(){return Ke.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Io}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Ve.En.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),Ve.RouterController.push("GetWallet")}};Oo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-what-is-a-wallet-view")],Oo);let No=class extends Ke.WF{render(){return Ke.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${Ve.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};No=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-what-is-a-buy-view")],No);const Mo=Ke.AH`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var jo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Uo=class extends Ke.WF{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=Bn.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=Ve.RouterController.state.data?.email,this.emailConnector=Ve.ConnectorController.getEmailConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=Boolean(this.timeoutTimeLeft),t=this.getFooterLabels(e);return Ke.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?Ke.qy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:Ke.qy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?Ke.qy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Bn.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Bn.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(e){try{this.loading||(this.otp=e.detail,this.emailConnector&&6===this.otp.length&&(this.loading=!0,await(this.onOtpSubmit?.(this.otp))))}catch(e){this.error=Ve.wE.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!Ve.ConnectorController.getEmailConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),Ve.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){Ve.SnackController.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(e?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(e?`in ${this.timeoutTimeLeft}s`:"Code")}}};Uo.styles=Mo,jo([(0,Ye.wk)()],Uo.prototype,"loading",void 0),jo([(0,Ye.wk)()],Uo.prototype,"timeoutTimeLeft",void 0),jo([(0,Ye.wk)()],Uo.prototype,"error",void 0),Uo=jo([(0,Ge.customElement)("w3m-email-otp-widget")],Uo);var Bo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Do=class extends Uo{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=Ve.AccountController.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.emailConnector){const t=Ve.NetworkController.checkIfSmartAccountEnabled();await this.emailConnector.provider.connectOtp({otp:e}),Ve.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await Ve.ConnectionController.connectExternal(this.emailConnector),Ve.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.emailConnector.name||"Unknown"}}),t&&!this.smartAccountDeployed?Ve.RouterController.push("UpgradeToSmartAccount"):Ve.W3.close()}}catch(e){throw Ve.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),Ve.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(Ve.AccountController.subscribeKey("smartAccountDeployed",(e=>{this.smartAccountDeployed=e})))}};Bo([(0,Ye.wk)()],Do.prototype,"smartAccountDeployed",void 0),Do=Bo([(0,Ge.customElement)("w3m-email-verify-otp-view")],Do);const Lo=Ke.AH`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var zo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Fo=class extends Ke.WF{constructor(){super(),this.email=Ve.RouterController.state.data?.email,this.emailConnector=Ve.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return Ke.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.emailConnector)try{await this.emailConnector.provider.connectDevice(),Ve.En.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),Ve.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Ve.RouterController.replace("EmailVerifyOtp",{email:this.email})}catch(e){Ve.RouterController.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),Ve.SnackController.showSuccess("Code email resent")}}catch(e){Ve.SnackController.showError(e)}finally{this.loading=!1}}};Fo.styles=Lo,zo([(0,Ye.wk)()],Fo.prototype,"loading",void 0),Fo=zo([(0,Ge.customElement)("w3m-email-verify-device-view")],Fo);const Wo=Ke.AH`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var Ho=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let qo=class extends Ke.WF{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Ve.W3.subscribeKey("open",(e=>{e||this.onHideIframe()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";const e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver((()=>{const t=e?.getBoundingClientRect(),r=t??{left:0,top:0,width:0,height:0};this.iframe.style.width="360px",this.iframe.style.height=r.height-10+"px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top=`${r.top+5}px`,this.ready=!0})),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),Ke.qy`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}async syncTheme(){const e=Ve.ConnectorController.getEmailConnector();e&&await e.provider.syncTheme({themeVariables:Ve.ThemeController.getSnapshot().themeVariables})}};qo.styles=Wo,Ho([(0,Ye.wk)()],qo.prototype,"ready",void 0),qo=Ho([(0,Ge.customElement)("w3m-approve-transaction-view")],qo);let Zo=class extends Ke.WF{render(){return Ke.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Ve.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${Ve.oU.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Zo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-upgrade-wallet-view")],Zo);var Vo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Go=class extends Ke.WF{constructor(){super(...arguments),this.emailConnector=Ve.ConnectorController.getEmailConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.emailConnector)try{this.loading=!0,await this.emailConnector.provider.setPreferredAccount(yt.ACCOUNT_TYPES.SMART_ACCOUNT),await this.emailConnector.provider.connect({preferredAccountType:yt.ACCOUNT_TYPES.SMART_ACCOUNT}),this.loading=!1,Ve.RouterController.push("Account")}catch(e){Ve.SnackController.showError("Error upgrading to smart account")}}}render(){return Ke.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return Ke.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return Ke.qy`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accentBg"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){Ve.RouterController.push("Account")}};Vo([(0,Ye.wk)()],Go.prototype,"emailConnector",void 0),Vo([(0,Ye.wk)()],Go.prototype,"loading",void 0),Go=Vo([(0,Ge.customElement)("w3m-upgrade-to-smart-account-view")],Go);const{I:Ko}=Je.ge;class Yo{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Jo=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const e of r)e._$AO?.(t,!1),Jo(e,t);return!0},Qo=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},Xo=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),ra(t)}};function ea(e){void 0!==this._$AN?(Qo(this),this._$AM=e,Xo(this)):this._$AM=e}function ta(e,t=!1,r=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let e=r;e<i.length;e++)Jo(i[e],!1),Qo(i[e]);else null!=i&&(Jo(i,!1),Qo(i));else Jo(this,e)}const ra=e=>{2==e.type&&(e._$AP??=ta,e._$AQ??=ea)};class ia extends Yo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Xo(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Jo(this,e),Qo(this))}setValue(e){if((e=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const na=()=>new oa;class oa{}const aa=new WeakMap,sa=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends ia{render(e){return Je.s6}update(e,[t]){const r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Je.s6}rt(e){if("function"==typeof this.Y){const t=this.ht??globalThis;let r=aa.get(t);void 0===r&&(r=new WeakMap,aa.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?aa.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ca=Ke.AH`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var la=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ua=class extends Ke.WF{constructor(){super(...arguments),this.formRef=na(),this.initialEmail=Ve.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return Ke.qy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${sa(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${Ve.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=Ve.ConnectorController.getEmailConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),Ve.En.sendEvent({type:"track",event:"EMAIL_EDIT"}),Ve.RouterController.replace("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(e){Ve.SnackController.showError(e),this.loading=!1}}};ua.styles=ca,la([(0,Ye.wk)()],ua.prototype,"email",void 0),la([(0,Ye.wk)()],ua.prototype,"loading",void 0),ua=la([(0,Ge.customElement)("w3m-update-email-wallet-view")],ua);let da=class extends Uo{constructor(){super(),this.email=Ve.RouterController.state.data?.email,this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:e}),Ve.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),Ve.RouterController.replace("UpdateEmailSecondaryOtp",Ve.RouterController.state.data))}catch(e){throw Ve.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{Ve.RouterController.replace("UpdateEmailWallet",Ve.RouterController.state.data)}}};da=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-update-email-primary-otp-view")],da);let ha=class extends Uo{constructor(){super(),this.email=Ve.RouterController.state.data?.newEmail,this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:e}),Ve.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),Ve.RouterController.reset("Account"))}catch(e){throw Ve.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{Ve.RouterController.replace("UpdateEmailWallet",Ve.RouterController.state.data)}}};ha=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-update-email-secondary-otp-view")],ha);const pa=Ke.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var fa=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ga=class extends Ke.WF{constructor(){super(...arguments),this.disconecting=!1}render(){return Ke.qy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=Ve.NetworkController.state;return Ve.wE.sortRequestedNetworks(e,t).map((e=>Ke.qy`
        <wui-list-network
          imageSrc=${Qe(Ve.$m.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `))}async onDisconnect(){try{this.disconecting=!0,await Ve.ConnectionController.disconnect(),Ve.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ve.W3.close()}catch{Ve.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Ve.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const{isConnected:t}=Ve.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:n}=Ve.NetworkController.state,{data:o}=Ve.RouterController.state;t&&n?.id!==e.id?r?.includes(e.id)?(await Ve.NetworkController.switchActiveNetwork(e),Ve.aS.navigateAfterNetworkSwitch()):i&&Ve.RouterController.push("SwitchNetwork",{...o,network:e}):t||(Ve.NetworkController.setCaipNetwork(e),Ve.RouterController.push("Connect"))}};ga.styles=pa,fa([(0,Ye.wk)()],ga.prototype,"disconecting",void 0),ga=fa([(0,Ge.customElement)("w3m-unsupported-chain-view")],ga);const wa=Ke.AH`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var ma=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let va=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.address=Ve.AccountController.state.address,this.profileName=Ve.AccountController.state.profileName,this.network=Ve.NetworkController.state.caipNetwork,this.unsubscribe.push(Ve.AccountController.subscribe((e=>{e.address?(this.address=e.address,this.profileName=e.profileName):Ve.SnackController.showError("Account not found")})),Ve.NetworkController.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=Ve.$m.getNetworkImage(this.network);return Ke.qy` <wui-flex
      flexDirection="column"
      .padding=${["xl","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${Ge.UiHelperUtil.getTruncateString({string:this.address??"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        imageSrc=${e||""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${Ve.ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=Ve.NetworkController.getRequestedCaipNetworks(),t=Ve.NetworkController.checkIfSmartAccountEnabled(),r=Ve.NetworkController.state.caipNetwork;if(Bn.getPreferredAccountType()===yt.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?Ke.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[Ve.$m.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;const i=e?.filter((e=>e?.imageId))?.slice(0,5),n=i.map(Ve.$m.getNetworkImage).filter(Boolean);return Ke.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${n}
    ></wui-compatible-network>`}onReceiveClick(){Ve.RouterController.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(Ve.wE.copyToClopboard(this.address),Ve.SnackController.showSuccess("Address copied"))}catch{Ve.SnackController.showError("Failed to copy")}}};va.styles=wa,ma([(0,Ye.wk)()],va.prototype,"address",void 0),ma([(0,Ye.wk)()],va.prototype,"profileName",void 0),ma([(0,Ye.wk)()],va.prototype,"network",void 0),va=ma([(0,Ge.customElement)("w3m-wallet-receive-view")],va);const ba=Ke.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let ya=class extends Ke.WF{render(){return Ke.qy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,caipNetwork:r}=Ve.NetworkController.state,i=Ve.NetworkController.checkIfSmartAccountEnabled(),n=Bn.getPreferredAccountType();let o=Ve.wE.sortRequestedNetworks(e,t);if(i&&n===yt.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;o=[r]}return o.map((e=>Ke.qy`
        <wui-list-network
          imageSrc=${Qe(Ve.$m.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `))}};ya.styles=ba,ya=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-wallet-compatible-networks-view")],ya);const Ca=Ke.AH`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var xa=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ea=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.token=Ve.Rv.state.token,this.sendTokenAmount=Ve.Rv.state.sendTokenAmount,this.receiverAddress=Ve.Rv.state.receiverAddress,this.message="Preview Send",this.unsubscribe.push(Ve.Rv.subscribe((e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.getMessage(),Ke.qy` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address .receiverAddress=${this.receiverAddress}></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="fill"
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}onButtonClick(){Ve.RouterController.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!Ve.wE.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.token||(this.message="Select Token")}};Ea.styles=Ca,xa([(0,Ye.wk)()],Ea.prototype,"token",void 0),xa([(0,Ye.wk)()],Ea.prototype,"sendTokenAmount",void 0),xa([(0,Ye.wk)()],Ea.prototype,"receiverAddress",void 0),xa([(0,Ye.wk)()],Ea.prototype,"message",void 0),Ea=xa([(0,Ge.customElement)("w3m-wallet-send-view")],Ea);const ka=Ke.AH`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var _a=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Aa=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=Ve.AccountController.state.tokenBalance,this.search="",this.onDebouncedSearch=Ve.wE.debounce((e=>{this.search=e})),this.unsubscribe.push(Ve.AccountController.subscribe((e=>{this.tokenBalance=e.tokenBalance})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return Ke.qy`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.search?this.tokens=this.tokenBalance?.filter((e=>e.name.toLowerCase().includes(this.search.toLowerCase()))):this.tokens=this.tokenBalance,Ke.qy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.tokens&&this.tokens.length>0?this.tokens.map((e=>Ke.qy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`)):Ke.qy`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){Ve.RouterController.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){Ve.Rv.setToken(e),Ve.Rv.setTokenAmount(void 0),Ve.RouterController.goBack()}};Aa.styles=ka,_a([(0,Ye.wk)()],Aa.prototype,"tokenBalance",void 0),_a([(0,Ye.wk)()],Aa.prototype,"tokens",void 0),_a([(0,Ye.wk)()],Aa.prototype,"search",void 0),Aa=_a([(0,Ge.customElement)("w3m-wallet-send-select-token-view")],Aa);const Ra=Ke.AH`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var $a=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Sa=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.token=Ve.Rv.state.token,this.sendTokenAmount=Ve.Rv.state.sendTokenAmount,this.receiverAddress=Ve.Rv.state.receiverAddress,this.caipNetwork=Ve.NetworkController.state.caipNetwork,this.unsubscribe.push(Ve.Rv.subscribe((e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress})),Ve.NetworkController.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${Number(this.token?.quantity.numeric).toFixed(2)} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text=${Ge.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
            address=${this.receiverAddress??""}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="shade"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="fill"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return Ke.qy`<wui-text variant="paragraph-400" color="fg-100"
        >$${e.toFixed(2)}</wui-text
      >`}return null}onSendClick(){Ve.RouterController.reset("Account"),setTimeout((()=>{Ve.Rv.resetSend()}),200)}onCancelClick(){Ve.RouterController.goBack()}};Sa.styles=Ra,$a([(0,Ye.wk)()],Sa.prototype,"token",void 0),$a([(0,Ye.wk)()],Sa.prototype,"sendTokenAmount",void 0),$a([(0,Ye.wk)()],Sa.prototype,"receiverAddress",void 0),$a([(0,Ye.wk)()],Sa.prototype,"caipNetwork",void 0),Sa=$a([(0,Ge.customElement)("w3m-wallet-send-preview-view")],Sa);const Pa=Ke.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function Ta(e){const{connectors:t}=Ve.ConnectorController.state,r=t.filter((e=>"ANNOUNCED"===e.type)).reduce(((e,t)=>t.info?.rdns?(e[t.info.rdns]=!0,e):e),{});return e.map((e=>({...e,installed:Boolean(e.rdns)&&Boolean(r[e.rdns??""])}))).sort(((e,t)=>Number(t.installed)-Number(e.installed)))}var Ia=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const Oa="local-paginator";let Na=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Ve.ApiController.state.wallets.length,this.wallets=Ve.ApiController.state.wallets,this.recommended=Ve.ApiController.state.recommended,this.featured=Ve.ApiController.state.featured,this.unsubscribe.push(Ve.ApiController.subscribeKey("wallets",(e=>this.wallets=e)),Ve.ApiController.subscribeKey("recommended",(e=>this.recommended=e)),Ve.ApiController.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return Ke.qy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await Ve.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>Ke.qy`
        <wui-card-select-loader type="wallet" id=${Qe(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return Ta([...this.featured,...this.recommended,...this.wallets]).map((e=>Ke.qy`
        <wui-card-select
          imageSrc=${Qe(Ve.$m.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:i}=Ve.ApiController.state,n=window.innerWidth<352?3:4,o=e.length+t.length;let a=Math.ceil(o/n)*n-o+n;return a-=e.length?r.length%n:0,0===i&&r.length>0?null:0===i||[...r,...e,...t].length<i?this.shimmerTemplate(a,Oa):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${Oa}`);e&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(e?.isIntersecting&&!this.initial){const{page:e,count:t,wallets:r}=Ve.ApiController.state;r.length<t&&Ve.ApiController.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){const t=Ve.ConnectorController.getConnector(e.id,e.rdns);t?Ve.RouterController.push("ConnectingExternal",{connector:t}):Ve.RouterController.push("ConnectingWalletConnect",{wallet:e})}};Na.styles=Pa,Ia([(0,Ye.wk)()],Na.prototype,"initial",void 0),Ia([(0,Ye.wk)()],Na.prototype,"wallets",void 0),Ia([(0,Ye.wk)()],Na.prototype,"recommended",void 0),Ia([(0,Ye.wk)()],Na.prototype,"featured",void 0),Na=Ia([(0,Ge.customElement)("w3m-all-wallets-list")],Na);const Ma=Ke.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var ja=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ua=class extends Ke.WF{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?Ke.qy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Ve.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=Ve.ApiController.state,t=Ta(e);return e.length?Ke.qy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map((e=>Ke.qy`
            <wui-card-select
              imageSrc=${Qe(Ve.$m.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:Ke.qy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=Ve.ConnectorController.getConnector(e.id,e.rdns);t?Ve.RouterController.push("ConnectingExternal",{connector:t}):Ve.RouterController.push("ConnectingWalletConnect",{wallet:e})}};Ua.styles=Ma,ja([(0,Ye.wk)()],Ua.prototype,"loading",void 0),ja([(0,Ye.MZ)()],Ua.prototype,"query",void 0),Ua=ja([(0,Ge.customElement)("w3m-all-wallets-search")],Ua);var Ba=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Da=class extends Ke.WF{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Ve.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return Ke.qy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};Ba([(0,Ye.MZ)({type:Array})],Da.prototype,"platforms",void 0),Ba([(0,Ye.MZ)()],Da.prototype,"onSelectPlatfrom",void 0),Ba([(0,Ye.wk)()],Da.prototype,"buffering",void 0),Da=Ba([(0,Ge.customElement)("w3m-connecting-header")],Da);let La=class extends io{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Ve.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=Ve.ConnectorController.state,t=e.find((e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns)),r=e.find((e=>"INJECTED"===e.type));t?await Ve.ConnectionController.connectExternal(t):r&&await Ve.ConnectionController.connectExternal(r),Ve.W3.close(),Ve.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){Ve.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};La=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-connecting-wc-browser")],La);let za=class extends io{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Ve.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{this.onConnect?.()}),200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:r,href:i}=Ve.wE.formatNativeUrl(e,this.uri);Ve.ConnectionController.setWcLinking({name:t,href:i}),Ve.ConnectionController.setRecentWallet(this.wallet),Ve.wE.openHref(r,"_blank")}catch{this.error=!0}}};za=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-connecting-wc-desktop")],za);let Fa=class extends io{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Ve.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:r,href:i}=Ve.wE.formatNativeUrl(e,this.uri);Ve.ConnectionController.setWcLinking({name:t,href:i}),Ve.ConnectionController.setRecentWallet(this.wallet),Ve.wE.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){const e=Ve.wE.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(Ve.ConnectionController.setBuffering(!0),setTimeout((()=>{Ve.ConnectionController.setBuffering(!1)}),5e3))}};Fa=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-connecting-wc-mobile")],Fa);const Wa=Ke.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let Ha=class extends io{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Ve.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),Ke.qy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return Ve.ConnectionController.setWcLinking(void 0),Ve.ConnectionController.setRecentWallet(this.wallet),Ke.qy` <wui-qr-code
      size=${e}
      theme=${Ve.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${Qe(Ve.$m.getWalletImage(this.wallet))}
      alt=${Qe(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return Ke.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Ha.styles=Wa,Ha=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-connecting-wc-qrcode")],Ha);let qa=class extends Ke.WF{constructor(){if(super(),this.wallet=Ve.RouterController.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Ve.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return Ke.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Qe(Ve.$m.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};qa=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-connecting-wc-unsupported")],qa);let Za=class extends io{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Ve.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:r,href:i}=Ve.wE.formatUniversalUrl(e,this.uri);Ve.ConnectionController.setWcLinking({name:t,href:i}),Ve.ConnectionController.setRecentWallet(this.wallet),Ve.wE.openHref(r,"_blank")}catch{this.error=!0}}};Za=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-connecting-wc-web")],Za);const Va=Ke.AH`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Ga=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};function Ka(){const e=Ve.RouterController.state.data?.connector?.name,t=Ve.RouterController.state.data?.wallet?.name,r=Ve.RouterController.state.data?.network?.name,i=t??e,n=Ve.ConnectorController.getConnectors();return{Connect:`Connect ${1===n.length&&"w3m-email"===n[0]?.id?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:i?`Get ${i}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token"}}let Ya=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.heading=Ka()[Ve.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(Ve.RouterController.subscribeKey("view",(e=>{this.onViewChange(e),this.onHistoryChange()})),Ve.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Ve.En.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),Ve.RouterController.push("WhatIsAWallet")}async onClose(){if(Ve.OptionsController.state.isSiweEnabled){const{SIWEController:e}=await a.e(737).then(a.bind(a,3737));"success"!==e.state.status&&await Ve.ConnectionController.disconnect()}Ve.W3.close()}titleTemplate(){return Ke.qy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=Ve.RouterController.state,t="Connect"===e,r="ApproveTransaction"===e||"UpgradeToSmartAccount"===e;return this.showBack&&!r?Ke.qy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:Ke.qy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?Ke.qy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){const t=this.shadowRoot?.querySelector("wui-text");if(t){const r=Ka()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){const{history:e}=Ve.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===Ve.RouterController.state.view?Ve.RouterController.push("Connect"):Ve.RouterController.goBack()}};Ya.styles=[Va],Ga([(0,Ye.wk)()],Ya.prototype,"heading",void 0),Ga([(0,Ye.wk)()],Ya.prototype,"buffering",void 0),Ga([(0,Ye.wk)()],Ya.prototype,"showBack",void 0),Ya=Ga([(0,Ge.customElement)("w3m-header")],Ya);var Ja=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Qa=class extends Ke.WF{constructor(){super(...arguments),this.data=[]}render(){return Ke.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>Ke.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>Ke.qy`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};Ja([(0,Ye.MZ)({type:Array})],Qa.prototype,"data",void 0),Qa=Ja([(0,Ge.customElement)("w3m-help-widget")],Qa);const Xa=Ke.AH`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var es=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ts=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=Ve.jQ.state.currencyImages,this.tokenImages=Ve.jQ.state.tokenImages,this.unsubscribe.push(Ve.aG.subscribeKey("purchaseCurrency",(e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))})),Ve.aG.subscribeKey("paymentCurrency",(e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))})),Ve.aG.subscribe((e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)})),Ve.jQ.subscribe((e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}})))}firstUpdated(){Ve.aG.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return Ke.qy` <wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?Ke.qy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>Ve.W3.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${Qe(t)}></wui-image>
            <wui-text color="fg-100"> ${this.selectedCurrency.symbol} </wui-text>
          </wui-flex>`:Ke.qy`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};ts.styles=Xa,es([(0,Ye.MZ)({type:String})],ts.prototype,"type",void 0),es([(0,Ye.MZ)({type:Number})],ts.prototype,"value",void 0),es([(0,Ye.wk)()],ts.prototype,"currencies",void 0),es([(0,Ye.wk)()],ts.prototype,"selectedCurrency",void 0),es([(0,Ye.wk)()],ts.prototype,"currencyImages",void 0),es([(0,Ye.wk)()],ts.prototype,"tokenImages",void 0),ts=es([(0,Ge.customElement)("w3m-swap-input")],ts);const rs=Ke.AH`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let is=class extends Ke.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=Ve.OptionsController.state;return e||t?Ke.qy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=Ve.OptionsController.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=Ve.OptionsController.state;return e?Ke.qy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=Ve.OptionsController.state;return e?Ke.qy`<a href=${e}>Privacy Policy</a>`:null}};is.styles=[rs],is=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-legal-footer")],is);const ns=Ke.AH`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var os=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let as=class extends Ke.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:i,homepage:n}=this.wallet,o=Ve.wE.isMobile(),a=Ve.wE.isIos(),s=Ve.wE.isAndroid(),c=[t,r,n,i].filter(Boolean).length>1,l=Ge.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!o?Ke.qy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>Ve.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?Ke.qy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?Ke.qy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?Ke.qy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&Ve.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&Ve.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&Ve.wE.openHref(this.wallet.homepage,"_blank")}};as.styles=[ns],os([(0,Ye.MZ)({type:Object})],as.prototype,"wallet",void 0),as=os([(0,Ge.customElement)("w3m-mobile-download-links")],as);const ss=Ke.AH`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;let cs=class extends Ke.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=Ve.OptionsController.state;return e||t?Ke.qy`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return Ke.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){Ve.RouterController.push("WhatIsABuy")}};cs.styles=[ss],cs=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-onramp-providers-footer")],cs);const ls=Ke.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var us=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const ds={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let hs=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Ve.SnackController.state.open,this.unsubscribe.push(Ve.SnackController.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=Ve.SnackController.state,r=ds[t];return Ke.qy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout((()=>Ve.SnackController.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};hs.styles=ls,us([(0,Ye.wk)()],hs.prototype,"open",void 0),hs=us([(0,Ge.customElement)("w3m-snackbar")],hs);const ps=Ke.AH`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var fs=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let gs=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.formRef=na(),this.connectors=Ve.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(Ve.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=this.connectors.length>1;return this.connectors.find((e=>"EMAIL"===e.type))?Ke.qy`
      <form ${sa(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?Ke.qy`<wui-separator text="or"></wui-separator>`:null}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?Ke.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?Ke.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=Ve.ConnectorController.getEmailConnector();if(!t)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await t.provider.connectEmail({email:this.email});Ve.En.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(Ve.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Ve.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&Ve.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(e){const t=Ve.wE.parseError(e);t?.includes("Invalid email")?this.error="Invalid email. Try again.":Ve.SnackController.showError(e)}finally{this.loading=!1}}onFocusEvent(){Ve.En.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};gs.styles=ps,fs([(0,Ye.wk)()],gs.prototype,"connectors",void 0),fs([(0,Ye.wk)()],gs.prototype,"email",void 0),fs([(0,Ye.wk)()],gs.prototype,"loading",void 0),fs([(0,Ye.wk)()],gs.prototype,"error",void 0),gs=fs([(0,Ge.customElement)("w3m-email-login-widget")],gs);const ws=Ke.AH`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var ms=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let vs=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.address=Ve.AccountController.state.address,this.profileImage=Ve.AccountController.state.profileImage,this.profileName=Ve.AccountController.state.profileName,this.network=Ve.NetworkController.state.caipNetwork,this.disconnecting=!1,this.balance=Ve.AccountController.state.balance,this.balanceSymbol=Ve.AccountController.state.balanceSymbol,this.unsubscribe.push(Ve.AccountController.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||Ve.SnackController.showError("Account not found")})),Ve.NetworkController.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Ve.$m.getNetworkImage(this.network);return Ke.qy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${Qe(this.address)}
          address=${Qe(this.address)}
          imageSrc=${Qe(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?Ge.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ge.UiHelperUtil.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${Ve.wE.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Qe(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=Ve.OptionsController.state;return e?Ke.qy`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){const e=Ve.iT.getConnectedConnector(),t=Ve.ConnectorController.getEmailConnector(),{origin:r}=location;return!t||"EMAIL"!==e||r.includes(Ve.oU.SECURE_SITE)?null:Ke.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){Ve.RouterController.push("OnRampProviders")}explorerBtnTemplate(){const{addressExplorerUrl:e}=Ve.AccountController.state;return e?Ke.qy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){const e=Ve.iT.getConnectedConnector(),t=Ve.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;const r=t.provider.getEmail()??"";return Ke.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=Ve.NetworkController.state,t=!!e&&e.length>1,r=e?.find((({id:e})=>e===this.network?.id));return t||!r}onCopyAddress(){try{this.address&&(Ve.wE.copyToClopboard(this.address),Ve.SnackController.showSuccess("Address copied"))}catch{Ve.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(Ve.En.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Ve.RouterController.push("Networks"))}onTransactions(){Ve.En.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),Ve.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await Ve.ConnectionController.disconnect(),Ve.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ve.W3.close()}catch{Ve.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Ve.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const{addressExplorerUrl:e}=Ve.AccountController.state;e&&Ve.wE.openHref(e,"_blank")}onGoToUpgradeView(){Ve.En.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Ve.RouterController.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){Ve.RouterController.push("UpdateEmailWallet",{email:e})}};vs.styles=ws,ms([(0,Ye.wk)()],vs.prototype,"address",void 0),ms([(0,Ye.wk)()],vs.prototype,"profileImage",void 0),ms([(0,Ye.wk)()],vs.prototype,"profileName",void 0),ms([(0,Ye.wk)()],vs.prototype,"network",void 0),ms([(0,Ye.wk)()],vs.prototype,"disconnecting",void 0),ms([(0,Ye.wk)()],vs.prototype,"balance",void 0),ms([(0,Ye.wk)()],vs.prototype,"balanceSymbol",void 0),vs=ms([(0,Ge.customElement)("w3m-account-default-widget")],vs);const bs=Ke.AH`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,ys=[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}];var Cs=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let xs=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.address=Ve.AccountController.state.address,this.profileImage=Ve.AccountController.state.profileImage,this.profileName=Ve.AccountController.state.profileName,this.smartAccountDeployed=Ve.AccountController.state.smartAccountDeployed,this.network=Ve.NetworkController.state.caipNetwork,this.currentTab=Ve.AccountController.state.currentTab,this.tokenBalance=Ve.AccountController.state.tokenBalance,this.unsubscribe.push(Ve.AccountController.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed):Ve.W3.close()})),Ve.NetworkController.subscribe((e=>{this.network=e.caipNetwork})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Ve.$m.getNetworkImage(this.network);return Ke.qy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${Qe(this.address)}
        networkSrc=${Qe(e)}
        icon="chevronBottom"
        avatarSrc=${Qe(this.profileImage?this.profileImage:void 0)}
        ?isprofilename=${Boolean(this.profileName)}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Convert" icon="recycleHorizontal"></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onSendClick.bind(this)}
          text="Send"
          icon="send"
        ></wui-tooltip-select>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth="104px"
        .tabs=${ys}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}listContentTemplate(){return 0===this.currentTab?Ke.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?Ke.qy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?Ke.qy`<w3m-account-activity-widget></w3m-account-activity-widget>`:Ke.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=Ve.wE.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:r="00"}=Ve.wE.formatTokenBalance(e);return Ke.qy`<wui-balance dollars=${t} pennies=${r}></wui-balance>`}return Ke.qy`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){const e=Ve.NetworkController.checkIfSmartAccountEnabled(),t=Bn.getPreferredAccountType();return!e||t===yt.ACCOUNT_TYPES.SMART_ACCOUNT||this.smartAccountDeployed?null:Ke.qy` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){Ve.AccountController.setCurrentTab(e)}onProfileButtonClick(){Ve.RouterController.push("AccountSettings")}onBuyClick(){Ve.RouterController.push("OnRampProviders")}onReceiveClick(){Ve.RouterController.push("WalletReceive")}onSendClick(){Ve.RouterController.push("WalletSend")}onUpdateToSmartAccount(){Ve.RouterController.push("UpgradeToSmartAccount")}};xs.styles=bs,Cs([(0,Ye.wk)()],xs.prototype,"address",void 0),Cs([(0,Ye.wk)()],xs.prototype,"profileImage",void 0),Cs([(0,Ye.wk)()],xs.prototype,"profileName",void 0),Cs([(0,Ye.wk)()],xs.prototype,"smartAccountDeployed",void 0),Cs([(0,Ye.wk)()],xs.prototype,"network",void 0),Cs([(0,Ye.wk)()],xs.prototype,"currentTab",void 0),Cs([(0,Ye.wk)()],xs.prototype,"tokenBalance",void 0),xs=Cs([(0,Ge.customElement)("w3m-account-wallet-features-widget")],xs);const Es=Ke.AH`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;let ks=class extends Ke.WF{render(){return Ke.qy`<w3m-activity-list page="account"></w3m-activity-list>`}};ks.styles=Es,ks=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-account-activity-widget")],ks);const _s=Ke.AH`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let As=class extends Ke.WF{render(){return Ke.qy`${this.nftTemplate()}`}nftTemplate(){return Ke.qy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){Ve.RouterController.push("WalletReceive")}};As.styles=_s,As=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,Ge.customElement)("w3m-account-nfts-widget")],As);const Rs=Ke.AH`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var $s=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ss=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=Ve.AccountController.state.tokenBalance,this.unsubscribe.push(Ve.AccountController.subscribe((e=>{this.tokenBalance=e.tokenBalance})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){Ve.AccountController.fetchTokenBalance()}render(){return Ke.qy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?Ke.qy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:Ke.qy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map((e=>Ke.qy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`))}onReceiveClick(){Ve.RouterController.push("WalletReceive")}onBuyClick(){Ve.RouterController.push("OnRampProviders")}};Ss.styles=Rs,$s([(0,Ye.wk)()],Ss.prototype,"tokenBalance",void 0),Ss=$s([(0,Ge.customElement)("w3m-account-tokens-widget")],Ss);const Ps=Ke.AH`
  :host {
    height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Ts=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const Is="last-transaction";let Os=class extends Ke.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=Ve.AccountController.state.address,this.transactionsByYear=Ve.WC.state.transactionsByYear,this.loading=Ve.WC.state.loading,this.empty=Ve.WC.state.empty,this.next=Ve.WC.state.next,Ve.WC.clearCursor(),this.unsubscribe.push(Ve.AccountController.subscribe((e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Ve.WC.resetTransactions(),Ve.WC.fetchTransactions(e.address))})),Ve.WC.subscribe((e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})))}firstUpdated(){Ve.WC.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ke.qy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map(((t,r)=>{const i=r===e.length-1,n=parseInt(t,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{const t=Ge.TransactionUtil.getTransactionGroupTitle(n,e),r=this.transactionsByYear[n]?.[e];return r?Ke.qy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(r,i)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}templateRenderTransaction(e,t){const{date:r,descriptions:i,direction:n,isAllNFT:o,images:a,status:s,transfers:c,type:l}=this.getTransactionListItemProps(e),u=c?.length>1;return 2!==c?.length||o?u?c.map(((e,i)=>{const n=Ge.TransactionUtil.getTransferDescription(e),o=t&&i===c.length-1;return Ke.qy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${o&&this.next?Is:""}
          status=${s}
          type=${l}
          .onlyDirectionIcon=${!0}
          .images=${[a[i]]}
          .descriptions=${[n]}
        ></wui-transaction-list-item>`})):Ke.qy`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${t&&this.next?Is:""}
        status=${s}
        type=${l}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `:Ke.qy`
        <wui-transaction-list-item
          date=${r}
          .direction=${n}
          id=${t&&this.next?Is:""}
          status=${s}
          type=${l}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map(((r,i)=>{const n=t&&i===e.length-1;return Ke.qy`${this.templateRenderTransaction(r,n)}`}))}emptyStateActivity(){return Ke.qy`<wui-flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return Ke.qy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?Ke.qy`${this.emptyStateAccount()}`:Ke.qy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(Ke.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e)):null}onReceiveClick(){Ve.RouterController.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=Ve.OptionsController.state;this.paginationObserver=new IntersectionObserver((([t])=>{t?.isIntersecting&&!this.loading&&(Ve.WC.fetchTransactions(this.address),Ve.En.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${Is}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const t=wo.r.formatDate(e?.metadata?.minedAt),r=Ge.TransactionUtil.getTransactionDescriptions(e),i=e?.transfers,n=e?.transfers?.[0],o=Boolean(n)&&e?.transfers?.every((e=>Boolean(e.nft_info))),a=Ge.TransactionUtil.getTransactionImages(i);return{date:t,direction:n?.direction,descriptions:r,isAllNFT:o,images:a,status:e.metadata?.status,transfers:i,type:e.metadata?.operationType}}};Os.styles=Ps,Ts([(0,Ye.MZ)()],Os.prototype,"page",void 0),Ts([(0,Ye.wk)()],Os.prototype,"address",void 0),Ts([(0,Ye.wk)()],Os.prototype,"transactionsByYear",void 0),Ts([(0,Ye.wk)()],Os.prototype,"loading",void 0),Ts([(0,Ye.wk)()],Os.prototype,"empty",void 0),Ts([(0,Ye.wk)()],Os.prototype,"next",void 0),Os=Ts([(0,Ge.customElement)("w3m-activity-list")],Os);const Ns=Ke.AH`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;var Ms=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let js=class extends Ke.WF{render(){return Ke.qy` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?Ke.qy`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
        >Select token</wui-token-button
      >`:Ke.qy`<wui-button
      size="md"
      variant="accentBg"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){Ve.RouterController.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return Ke.qy`<wui-text variant="small-400" color="fg-200">$${e.toFixed(2)}</wui-text>`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?Ke.qy` <wui-text variant="small-400" color="error-100">
          ${Ge.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:Ke.qy` <wui-text variant="small-400" color="fg-200">
        ${Ge.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?Ke.qy`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:Ke.qy`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){Ve.Rv.setTokenAmount(e.detail)}onMaxClick(){this.token&&Ve.Rv.setTokenAmount(Number(this.token?.quantity.numeric))}onBuyClick(){Ve.RouterController.push("OnRampProviders")}};js.styles=Ns,Ms([(0,Ye.MZ)({type:Object})],js.prototype,"token",void 0),Ms([(0,Ye.MZ)({type:Number})],js.prototype,"sendTokenAmount",void 0),js=Ms([(0,Ge.customElement)("w3m-input-token")],js);const Us=Ke.AH`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var Bs=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Ds=class extends Ke.WF{constructor(){super(...arguments),this.inputElementRef=na(),this.instructionElementRef=na(),this.instructionHidden=Boolean(this.receiverAddress)}firstUpdated(){this.receiverAddress&&(this.instructionHidden=!0),this.checkHidden()}render(){return Ke.qy` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${sa(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          size="sm"
          variant="shade"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        ?disabled=${!this.instructionHidden}
        ${sa(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.receiverAddress??""}
        autocomplete="off"
      >
${this.receiverAddress??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.receiverAddress||this.instructionHidden||this.focusInput()}onBlur(){!this.receiverAddress&&this.instructionHidden&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){const e=await navigator.clipboard.readText();Ve.Rv.setReceiverAddress(e)}onInputChange(e){const t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),Ve.Rv.setReceiverAddress(t.value)}};Ds.styles=Us,Bs([(0,Ye.MZ)()],Ds.prototype,"receiverAddress",void 0),Bs([(0,Ye.wk)()],Ds.prototype,"instructionHidden",void 0),Ds=Bs([(0,Ge.customElement)("w3m-input-address")],Ds);const Ls=Ke.AH`
  :host {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var zs=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Fs=class extends Ke.WF{render(){return Ke.qy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$3.20"></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${Ge.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?Ke.qy` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${Qe(Ve.$m.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&Ve.RouterController.push("Networks",{network:e})}};Fs.styles=Ls,zs([(0,Ye.MZ)()],Fs.prototype,"receiverAddress",void 0),zs([(0,Ye.MZ)({type:Object})],Fs.prototype,"caipNetwork",void 0),Fs=zs([(0,Ge.customElement)("w3m-wallet-send-details")],Fs);let Ws=!1;class Hs{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{Ve.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{Ve.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{Ve.AccountController.setBalance(e,t)},this.fetchTokenBalance=()=>{Ve.AccountController.fetchTokenBalance()},this.setProfileName=e=>{Ve.AccountController.setProfileName(e)},this.setProfileImage=e=>{Ve.AccountController.setProfileImage(e)},this.resetAccount=()=>{Ve.AccountController.resetAccount()},this.setCaipNetwork=e=>{Ve.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>Ve.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{Ve.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>Ve.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{Ve.NetworkController.resetNetwork()},this.setConnectors=e=>{Ve.ConnectorController.setConnectors(e)},this.addConnector=e=>{Ve.ConnectorController.addConnector(e)},this.getConnectors=()=>Ve.ConnectorController.getConnectors(),this.resetWcConnection=()=>{Ve.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>Ve.TP.fetchIdentity(e),this.setAddressExplorerUrl=e=>{Ve.AccountController.setAddressExplorerUrl(e)},this.setSmartAccountDeployed=e=>{Ve.AccountController.setSmartAccountDeployed(e)},this.setConnectedWalletInfo=e=>{Ve.AccountController.setConnectedWalletInfo(e)},this.setSmartAccountEnabledNetworks=e=>{Ve.NetworkController.setSmartAccountEnabledNetworks(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Ve.W3.open(e)}async close(){await this.initOrContinue(),Ve.W3.close()}setLoading(e){Ve.W3.setLoading(e)}getThemeMode(){return Ve.ThemeController.state.themeMode}getThemeVariables(){return Ve.ThemeController.state.themeVariables}setThemeMode(e){Ve.ThemeController.setThemeMode(e),(0,Ge.setColorTheme)(Ve.ThemeController.state.themeMode)}setThemeVariables(e){Ve.ThemeController.setThemeVariables(e),(0,Ge.setThemeVariables)(Ve.ThemeController.state.themeVariables)}subscribeTheme(e){return Ve.ThemeController.subscribe(e)}getWalletInfo(){return Ve.AccountController.state.connectedWalletInfo}subscribeWalletInfo(e){return Ve.AccountController.subscribeKey("connectedWalletInfo",e)}getState(){return{...Ve.z3.state}}subscribeState(e){return Ve.z3.subscribe(e)}showErrorMessage(e){Ve.SnackController.showError(e)}showSuccessMessage(e){Ve.SnackController.showSuccess(e)}getEvent(){return{...Ve.En.state}}subscribeEvents(e){return Ve.En.subscribe(e)}async initControllers(e){if(Ve.NetworkController.setClient(e.networkControllerClient),Ve.NetworkController.setDefaultCaipNetwork(e.defaultChain),Ve.OptionsController.setProjectId(e.projectId),Ve.OptionsController.setAllWallets(e.allWallets),Ve.OptionsController.setIncludeWalletIds(e.includeWalletIds),Ve.OptionsController.setExcludeWalletIds(e.excludeWalletIds),Ve.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),Ve.OptionsController.setTokens(e.tokens),Ve.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),Ve.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),Ve.OptionsController.setCustomWallets(e.customWallets),Ve.OptionsController.setEnableAnalytics(e.enableAnalytics),Ve.OptionsController.setSdkVersion(e._sdkVersion),Ve.ConnectionController.setClient(e.connectionControllerClient),e.siweControllerClient){const{SIWEController:t}=await a.e(737).then(a.bind(a,3737));t.setSIWEClient(e.siweControllerClient)}e.metadata&&Ve.OptionsController.setMetadata(e.metadata),e.themeMode&&Ve.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&Ve.ThemeController.setThemeVariables(e.themeVariables),e.enableOnramp&&Ve.OptionsController.setOnrampEnabled(Boolean(e.enableOnramp)),e.enableWalletFeatures&&Ve.OptionsController.setWalletFeaturesEnabled(Boolean(e.enableWalletFeatures)),e.allowUnsupportedChain&&Ve.NetworkController.setAllowUnsupportedChain(e.allowUnsupportedChain)}async initOrContinue(){return this.initPromise||Ws||!Ve.wE.isClient()||(Ws=!0,this.initPromise=new Promise((async e=>{await Promise.all([Promise.resolve().then(a.bind(a,2657)),Promise.resolve().then(a.bind(a,505))]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()}))),this.initPromise}}class qs extends f.C{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var Zs=a(2167);function Vs(e,{errorInstance:t=new Error("timed out"),timeout:r,signal:i}){return new Promise(((n,o)=>{(async()=>{let a;try{const s=new AbortController;r>0&&(a=setTimeout((()=>{i?s.abort():o(t)}),r)),n(await e({signal:s?.signal||null}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()}))}var Gs=a(8463);function Ks(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const Ys=Ks();function Js(e,t={}){const{batch:r,fetchOptions:i,key:n="http",name:o="HTTP JSON-RPC",onFetchRequest:a,onFetchResponse:s,retryDelay:c}=t;return({chain:l,retryCount:u,timeout:d})=>{const{batchSize:h=1e3,wait:p=0}="object"==typeof r?r:{},f=t.retryCount??u,g=d??t.timeout??1e4,w=e||l?.rpcUrls.default.http[0];if(!w)throw new qs;const m=function(e,t={}){return{async request(r){const{body:i,fetchOptions:n={},onRequest:o=t.onRequest,onResponse:a=t.onResponse,timeout:s=t.timeout??1e4}=r,{headers:c,method:l,signal:u}={...t.fetchOptions,...n};try{const t=await Vs((async({signal:t})=>{const r=new Request(e,{...n,body:Array.isArray(i)?(0,Gs.A)(i.map((e=>({jsonrpc:"2.0",id:e.id??Ys.take(),...e})))):(0,Gs.A)({jsonrpc:"2.0",id:i.id??Ys.take(),...i}),headers:{...c,"Content-Type":"application/json"},method:l||"POST",signal:u||(s>0?t:null)});return o&&await o(r),await fetch(r)}),{errorInstance:new k.MU({body:i,url:e}),timeout:s,signal:!0});let r;if(a&&await a(t),r=t.headers.get("Content-Type")?.startsWith("application/json")?await t.json():await t.text(),!t.ok)throw new k.Ci({body:i,details:(0,Gs.A)(r.error)||t.statusText,headers:t.headers,status:t.status,url:e});return r}catch(t){if(t instanceof k.Ci)throw t;if(t instanceof k.MU)throw t;throw new k.Ci({body:i,details:t.message,url:e})}}}}(w,{fetchOptions:i,onRequest:a,onResponse:s,timeout:g});return G({key:n,name:o,async request({method:t,params:i}){const n={method:t,params:i},{schedule:o}=(0,Zs.u)({id:`${e}`,wait:p,shouldSplitBatch:e=>e.length>h,fn:e=>m.request({body:e}),sort:(e,t)=>e.id-t.id}),[{error:a,result:s}]=await(async e=>r?o(e):[await m.request({body:e})])(n);if(a)throw new k.J8({body:n,error:a,url:w});return s},retryCount:f,retryDelay:c,timeout:g,type:"http"},{fetchOptions:i,url:w})}}function Qs(e){if(e)return{id:`${Yn.EIP155}:${e.id}`,name:e.name,imageId:Jn.EIP155NetworkImageIds[e.id]}}function Xs({chainId:e,projectId:t}){const r=Ve.wE.getBlockchainApiUrl();return Jn.WalletConnectRpcChainIds.includes(e)?Js(`${r}/v1/?chainId=${Yn.EIP155}:${e}&projectId=${t}`):Js()}class ec extends Hs{constructor(e){const{wagmiConfig:t,siweConfig:r,defaultChain:i,tokens:n,_sdkVersion:a,...s}=e;if(!t)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!s.projectId)throw new Error("web3modal:constructor - projectId is undefined");const c={connectWalletConnect:async e=>{const r=t.connectors.find((e=>e.id===Yn.WALLET_CONNECT_CONNECTOR_ID));if(!r)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await r.getProvider()).on("display_uri",(t=>{e(t)}));const i=wo.L.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await h(this.wagmiConfig,{connector:r,chainId:i})},connectExternal:async({id:e,provider:r,info:i})=>{const n=t.connectors.find((t=>t.id===e));if(!n)throw new Error("connectionControllerClient:connectExternal - connector is undefined");r&&i&&n.id===Yn.EIP6963_CONNECTOR_ID&&n.setEip6963Wallet?.({provider:r,info:i});const o=wo.L.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await h(this.wagmiConfig,{connector:n,chainId:o})},checkInstalled:e=>{const t=this.getConnectors().find((e=>"INJECTED"===e.type));return e?!!t&&!!window?.ethereum&&e.some((e=>Boolean(window.ethereum?.[String(e)]))):Boolean(window.ethereum)},disconnect:async()=>{await async function(e,t={}){let r;if(t.connector)r=t.connector;else{const{connections:t,current:i}=e.state,n=t.get(i);r=n?.connector}const i=e.state.connections;r&&(await r.disconnect(),r.emitter.off("change",e._internal.events.change),r.emitter.off("disconnect",e._internal.events.disconnect),r.emitter.on("connect",e._internal.events.connect),i.delete(r.uid)),e.setState((e=>{if(0===i.size)return{...e,connections:new Map,current:void 0,status:"disconnected"};const t=i.values().next().value;return{...e,connections:new Map(i),current:t.connector.uid}}));{const t=e.state.current;if(!t)return;const r=e.state.connections.get(t)?.connector;if(!r)return;await(e.storage?.setItem("recentConnectorId",r.id))}}(this.wagmiConfig),r?.options?.signOutOnDisconnect&&await r.signOut()},signMessage:async e=>async function(e,t){const{account:r,connector:i,...n}=t;let o;return o="object"==typeof r&&"local"===r.type?e.getClient():await Y(e,{account:r,connector:i}),v(o,m,"signMessage")({...n,...r?{account:r}:{}})}(this.wagmiConfig,{message:e})};super({networkControllerClient:{switchCaipNetwork:async e=>{const t=wo.L.caipNetworkIdToNumber(e?.id);t&&await async function(e,t){const{chainId:r}=t,i=e.state.connections.get(t.connector?.uid??e.state.current);if(i){const e=i.connector;if(!e.switchChain)throw new d({connector:e});return await e.switchChain({chainId:r})}const n=e.chains.find((e=>e.id===r));if(!n)throw new o;return e.setState((e=>({...e,chainId:r}))),n}(this.wagmiConfig,{chainId:t})},getApprovedCaipNetworksData:async()=>new Promise((e=>{const r=new Map(t.state.connections).get(t.state.current||"");if(r?.connector?.id===Yn.EMAIL_CONNECTOR_ID)e({supportsAllNetworks:!1,approvedCaipNetworkIds:Jn.WalletConnectRpcChainIds.map((e=>`${Yn.EIP155}:${e}`))});else if(r?.connector?.id===Yn.WALLET_CONNECT_CONNECTOR_ID){e(async function(e){if(!e)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const t=await(e?.getProvider()),r=t?.signer?.session?.namespaces,i=r?.[Yn.EIP155]?.methods,n=r?.[Yn.EIP155]?.chains;return{supportsAllNetworks:Boolean(i?.includes(Yn.ADD_CHAIN_METHOD)),approvedCaipNetworkIds:n}}(t.connectors.find((e=>e.id===Yn.WALLET_CONNECT_CONNECTOR_ID))))}e({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})}))},connectionControllerClient:c,siweControllerClient:r,defaultChain:Qs(i),tokens:Qn.getCaipTokens(n),_sdkVersion:a??`html-wagmi-${Yn.VERSION}`,...s}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=t,this.syncRequestedNetworks([...t.chains]),this.syncConnectors([...t.connectors]),this.initEmailConnectorListeners([...t.connectors]),function(e,t){const{onChange:r}=t;e._internal.connectors.subscribe(((e,t)=>{r(Object.values(e),t)}))}(this.wagmiConfig,{onChange:e=>this.syncConnectors(e)}),X(this.wagmiConfig,{onChange:e=>this.syncAccount({...e})})}getState(){const e=super.getState();return{...e,selectedNetworkId:wo.L.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState((t=>e({...t,selectedNetworkId:wo.L.caipNetworkIdToNumber(t.selectedNetworkId)})))}syncRequestedNetworks(e){const t=e?.map((e=>({id:`${Yn.EIP155}:${e.id}`,name:e.name,imageId:Jn.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]})));this.setRequestedCaipNetworks(t??[])}async syncAccount({address:e,isConnected:t,chainId:r,connector:i}){if(this.resetAccount(),this.syncNetwork(e,r,t),t&&e&&r){const n=`${Yn.EIP155}:${r}:${e}`;this.setIsConnected(t),this.setCaipAddress(n),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.syncConnectedWalletInfo(i),this.fetchTokenBalance(),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(e,t,r){const i=this.wagmiConfig.chains.find((e=>e.id===t));if(i||t){const n=i?.name??t?.toString(),o=Number(i?.id??t),a=`${Yn.EIP155}:${o}`;if(this.setCaipNetwork({id:a,name:n,imageId:Jn.EIP155NetworkImageIds[o],imageUrl:this.options?.chainImages?.[o]}),r&&e&&t){const r=`${Yn.EIP155}:${o}:${e}`;if(this.setCaipAddress(r),i?.blockExplorers?.default?.url){const t=`${i.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,t),await this.syncBalance(e,t))}}}async syncProfile(e,t){if(t!==Ze.id)return this.setProfileName(null),void this.setProfileImage(null);try{const{name:r,avatar:i}=await this.fetchIdentity({caipChainId:`${Yn.EIP155}:${t}`,address:e});this.setProfileName(r),this.setProfileImage(i)}catch{const r=await function(e,t){const{chainId:r,...i}=t;return v(e.getClient({chainId:r}),be,"getEnsName")(i)}(this.wagmiConfig,{address:e,chainId:t});if(r){this.setProfileName(r);const e=await function(e,t){const{chainId:r,...i}=t;return v(e.getClient({chainId:r}),Me,"getEnsAvatar")(i)}(this.wagmiConfig,{name:r,chainId:t});e&&this.setProfileImage(e)}}}async syncBalance(e,t){const r=this.wagmiConfig.chains.find((e=>e.id===t));if(r){const t=await async function(e,t){const{address:r,blockNumber:i,blockTag:n,chainId:o,token:a,unit:s="ether"}=t;if(a)try{return He(e,{balanceAddress:r,chainId:o,symbolType:"string",tokenAddress:a})}catch(t){if(t instanceof ie.bG){const t=await He(e,{balanceAddress:r,chainId:o,symbolType:"bytes32",tokenAddress:a}),i=(0,je.IQ)((0,Ue.B)(t.symbol,{dir:"right"}));return{...t,symbol:i}}throw t}const c=e.getClient({chainId:o}),l=v(c,De,"getBalance"),u=await l(i?{address:r,blockNumber:i}:{address:r,blockTag:n}),d=e.chains.find((e=>e.id===o))??c.chain;return{decimals:d.nativeCurrency.decimals,formatted:(0,Be.J)(u,ze(s)),symbol:d.nativeCurrency.symbol,value:u}}(this.wagmiConfig,{address:e,chainId:r.id,token:this.options?.tokens?.[r.id]?.address});this.setBalance(t.formatted,t.symbol)}else this.setBalance(void 0,void 0)}async syncConnectedWalletInfo(e){if(!e)throw Error("syncConnectedWalletInfo - connector is undefined");if(e.id===Yn.WALLET_CONNECT_CONNECTOR_ID&&e.getProvider){const t=await e.getProvider();t.session&&this.setConnectedWalletInfo({...t.session.peer.metadata,name:t.session.peer.metadata.name,icon:t.session.peer.metadata.icons?.[0]})}else this.setConnectedWalletInfo({name:e.name,icon:e.icon})}syncConnectors(e){const t=new Set,r=e.filter((e=>!t.has(e.id)&&t.add(e.id))),i=[],n=Yn.COINBASE_SDK_CONNECTOR_ID,o=r.find((e=>e.id===Yn.CONNECTOR_RDNS_MAP[Yn.COINBASE_CONNECTOR_ID]));r.forEach((({id:e,name:t,type:r,icon:a})=>{o&&e===n||Yn.EMAIL_CONNECTOR_ID===e||i.push({id:e,explorerId:Jn.ConnectorExplorerIds[e],imageUrl:this.options?.connectorImages?.[e]??a,name:Jn.ConnectorNamesMap[e]??t,imageId:Jn.ConnectorImageIds[e],type:Jn.ConnectorTypesMap[r]??"EXTERNAL",info:{rdns:e}})})),this.setConnectors(i),this.syncEmailConnector(r)}async syncEmailConnector(e){const t=e.find((({id:e})=>e===Yn.EMAIL_CONNECTOR_ID));if(t){const e=await t.getProvider();this.addConnector({id:Yn.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:e})}}async initEmailConnectorListeners(e){const t=e.find((({id:e})=>e===Yn.EMAIL_CONNECTOR_ID));t&&(await this.listenEmailConnector(t),await this.listenModal(t))}async listenEmailConnector(e){if("undefined"!=typeof window&&e){super.setLoading(!0);const t=await e.getProvider(),r=t.getLoginEmailUsed();super.setLoading(r),r&&this.setIsConnected(!1),t.onRpcRequest((e=>{if(Bn.checkIfRequestExists(e))Bn.checkIfRequestIsAllowed(e)||super.open({view:"ApproveTransaction"});else{super.open();const r=Bn.getRequestMethod(e);console.error(yt.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:r}),setTimeout((()=>{this.showErrorMessage(yt.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)}),300),t.rejectRpcRequest()}})),t.onRpcResponse((()=>{super.close()})),t.onNotConnected((()=>{this.setIsConnected(!1),super.setLoading(!1)})),t.onIsConnected((e=>{this.setIsConnected(!0),this.setSmartAccountDeployed(Boolean(e.smartAccountDeployed)),super.setLoading(!1)})),t.onGetSmartAccountEnabledNetworks((e=>{this.setSmartAccountEnabledNetworks(e)})),t.onSetPreferredAccount((({address:t})=>{if(!t)return;const r=wo.L.caipNetworkIdToNumber(this.getCaipNetwork()?.id);this.syncAccount({address:t,chainId:r,isConnected:!0,connector:e})}))}}async listenModal(e){const t=await e.getProvider();this.subscribeState((e=>{e.open||t.rejectRpcRequest()}))}}function tc(){const e=new Set;let t=[];const r=()=>function(r){const i=r=>{return i=r.detail,void(t.some((({info:e})=>e.uuid===i.info.uuid))||(t=[...t,i],e.forEach((e=>e(t,{added:[i]})))));var i};return window.addEventListener("eip6963:announceProvider",i),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",i)}();let i=r();return{_listeners:()=>e,clear(){e.forEach((e=>e([],{removed:[...t]}))),t=[]},destroy(){this.clear(),e.clear(),i()},findProvider:({rdns:e})=>t.find((t=>t.info.rdns===e)),getProviders:()=>t,reset(){this.clear(),i(),i=r()},subscribe:(r,{emitImmediately:i}={})=>(e.add(r),i&&r(t,{added:t}),()=>e.delete(r))}}function rc(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var i;const n=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(i=r.getItem(e))?i:null;return o instanceof Promise?o.then(n):n(o)},setItem:(e,i)=>r.setItem(e,JSON.stringify(i,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}const ic=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then:e=>ic(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>ic(t)(e)}}},nc=e=>{let t;const r=new Set,i=(e,i)=>{const n="function"==typeof e?e(t):e;if(!Object.is(n,t)){const e=t;t=(null!=i?i:"object"!=typeof n)?n:Object.assign({},t,n),r.forEach((r=>r(t,e)))}},n=()=>t,o={setState:i,getState:n,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(i,n,o),o},oc=e=>e?nc(e):nc,ac={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:cc(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>cc(e,(e=>{if(!e.isMetaMask)return!1;if(e.isBraveWallet&&!e._events&&!e._state)return!1;const t=["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"];for(const r of t)if(e[r])return!1;return!0}))},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:cc(e,"isPhantom")}};function sc(e={}){const{shimDisconnect:t=!0,unstable_shimAsyncInject:r}=e;function i(){const t=e.target;if("function"==typeof t){const e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...ac[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}let n,a,s,c;return l=>({get icon(){return i().icon},get id(){return i().id},get name(){return i().name},type:sc.type,async setup(){const t=await this.getProvider();t&&e.target&&(s||(s=this.onConnect.bind(this),t.on("connect",s)),n||(n=this.onAccountsChanged.bind(this),t.on("accountsChanged",n)))},async connect({chainId:r,isReconnecting:i}={}){const o=await this.getProvider();if(!o)throw new u;let d=[];if(i)d=await this.getAccounts().catch((()=>[]));else if(t)try{const e=await o.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});d=e[0]?.caveats?.[0]?.value?.map((e=>(0,K.b)(e)))}catch(e){const t=e;if(t.code===D.code)throw new D(t);if(t.code===N.code)throw t}try{d?.length||i||(d=(await o.request({method:"eth_requestAccounts"})).map((e=>(0,K.b)(e)))),s&&(o.removeListener("connect",s),s=void 0),n||(n=this.onAccountsChanged.bind(this),o.on("accountsChanged",n)),a||(a=this.onChainChanged.bind(this),o.on("chainChanged",a)),c||(c=this.onDisconnect.bind(this),o.on("disconnect",c));let u=await this.getChainId();if(r&&u!==r){const e=await this.switchChain({chainId:r}).catch((e=>{if(e.code===D.code)throw e;return{id:u}}));u=e?.id??u}return t&&(await(l.storage?.removeItem(`${this.id}.disconnected`)),e.target||await(l.storage?.setItem("injected.connected",!0))),{accounts:d,chainId:u}}catch(e){const t=e;if(t.code===D.code)throw new D(t);if(t.code===N.code)throw new N(t);throw t}},async disconnect(){const r=await this.getProvider();if(!r)throw new u;a&&(r.removeListener("chainChanged",a),a=void 0),c&&(r.removeListener("disconnect",c),c=void 0),s||(s=this.onConnect.bind(this),r.on("connect",s)),t&&(await(l.storage?.setItem(`${this.id}.disconnected`,!0)),e.target||await(l.storage?.removeItem("injected.connected")))},async getAccounts(){const e=await this.getProvider();if(!e)throw new u;return(await e.request({method:"eth_accounts"})).map((e=>(0,K.b)(e)))},async getChainId(){const e=await this.getProvider();if(!e)throw new u;const t=await e.request({method:"eth_chainId"});return Number(t)},async getProvider(){if("undefined"==typeof window)return;let e;const t=i();return e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?cc(window,t.provider):t.provider,e&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{if(t&&await(l.storage?.getItem(`${this.id}.disconnected`)))return!1;if(!e.target&&!await(l.storage?.getItem("injected.connected")))return!1;if(!await this.getProvider()){if(void 0!==r&&!1!==r){const e=async()=>("undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",e),!!await this.getProvider()),t="number"==typeof r?r:1e3;if(await Promise.race([..."undefined"!=typeof window?[new Promise((t=>window.addEventListener("ethereum#initialized",(()=>t(e())),{once:!0})))]:[],new Promise((r=>setTimeout((()=>r(e())),t)))]))return!0}throw new u}return!!(await Z((()=>Vs((()=>this.getAccounts()),{timeout:100})))).length}catch{return!1}},async switchChain({chainId:e}){const t=await this.getProvider();if(!t)throw new u;const r=l.chains.find((t=>t.id===e));if(!r)throw new H(new o);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,w.cK)(e)}]}),new Promise((r=>{const i=n=>{console.log("[injected] switchChain.listener",{data:n,chainId:e}),Number(n)===e&&(t.removeListener("chainChanged",i),r())};t.on("chainChanged",i)}))]),r}catch(i){const n=i;if(4902===n.code||4902===n?.data?.originalError?.code)try{const{default:i,...n}=r.blockExplorers??{};let o;if(i&&(o=[i.url,...Object.values(n).map((e=>e.url))]),await t.request({method:"wallet_addEthereumChain",params:[{chainId:(0,w.cK)(e),chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:[r.rpcUrls.default?.http[0]??""],blockExplorerUrls:o}]}),await this.getChainId()!==e)throw new D(new Error("User rejected switch after adding network."));return r}catch(e){throw new D(e)}if(n.code===D.code)throw new D(n);throw new H(n)}},async onAccountsChanged(e){if(console.log("[injected] onAccountsChanged",e),0===e.length)this.onDisconnect();else if(l.emitter.listenerCount("connect")){const e=(await this.getChainId()).toString();this.onConnect({chainId:e}),t&&await(l.storage?.removeItem(`${this.id}.disconnected`))}else l.emitter.emit("change",{accounts:e.map((e=>(0,K.b)(e)))})},onChainChanged(e){console.log("[injected] onChainChanged",e);const t=Number(e);l.emitter.emit("change",{chainId:t})},async onConnect(e){const t=await this.getAccounts();if(0===t.length)return;const r=Number(e.chainId);l.emitter.emit("connect",{accounts:t,chainId:r});const i=await this.getProvider();i&&(s&&(i.removeListener("connect",s),s=void 0),n||(n=this.onAccountsChanged.bind(this),i.on("accountsChanged",n)),a||(a=this.onChainChanged.bind(this),i.on("chainChanged",a)),c||(c=this.onDisconnect.bind(this),i.on("disconnect",c)))},async onDisconnect(e){const t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(l.emitter.emit("disconnect"),t&&(a&&(t.removeListener("chainChanged",a),a=void 0),c&&(t.removeListener("disconnect",c),c=void 0),s||(s=this.onConnect.bind(this),t.on("connect",s))))}})}function cc(e,t){function r(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}const i=e.ethereum;return i?.providers?i.providers.find((e=>r(e))):i&&r(i)?i:void 0}sc.type="injected";var lc,uc=a(228),dc=function(e,t,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class hc{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),lc.set(this,new uc)}on(e,t){dc(this,lc,"f").on(e,t)}once(e,t){dc(this,lc,"f").once(e,t)}off(e,t){dc(this,lc,"f").off(e,t)}emit(e,...t){const r=t[0];dc(this,lc,"f").emit(e,{uid:this.uid,...r})}listenerCount(e){return dc(this,lc,"f").listenerCount(e)}}function pc(e,t){return JSON.parse(e,((e,r)=>{let i=r;return"bigint"===i?.__type&&(i=BigInt(i.value)),"Map"===i?.__type&&(i=new Map(i.value)),t?.(e,i)??i}))}function fc(e,t){return e.slice(0,t).join(".")||"."}function gc(e,t){const{length:r}=e;for(let i=0;i<r;++i)if(e[i]===t)return i+1;return 0}function wc(e,t,r,i){return JSON.stringify(e,function(e,t){const r="function"==typeof t,i=[],n=[];return function(o,a){if("object"==typeof a)if(i.length){const e=gc(i,this);0===e?i[i.length]=this:(i.splice(e),n.splice(e)),n[n.length]=o;const s=gc(i,a);if(0!==s)return r?t.call(this,o,a,fc(n,s)):`[ref=${fc(n,s)}]`}else i[0]=a,n[0]=o;return e.call(this,o,a)}}(((e,r)=>{let i=r;return"bigint"==typeof i&&(i={__type:"bigint",value:r.toString()}),i instanceof Map&&(i={__type:"Map",value:Array.from(r.entries())}),t?.(e,i)??i}),i),r??void 0)}function mc(e){const{deserialize:t=pc,key:r="wagmi",serialize:i=wc,storage:n=vc}=e;function o(e){return e instanceof Promise?e.then((e=>e)).catch((()=>null)):e}return{...n,key:r,async getItem(e,i){const a=n.getItem(`${r}.${e}`),s=await o(a);return s?t(s)??null:i??null},async setItem(e,t){const a=`${r}.${e}`;null===t?await o(n.removeItem(a)):await o(n.setItem(a,i(t)))},async removeItem(e){await o(n.removeItem(`${r}.${e}`))}}}lc=new WeakMap;const vc={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};let bc,yc=256;function Cc(t){const{multiInjectedProviderDiscovery:r=!0,storage:i=mc({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:vc}),syncConnectedChain:n=!0,ssr:a,...s}=t,c="undefined"!=typeof window&&r?tc():void 0,l=oc((()=>s.chains)),u=oc((()=>[...s.connectors??[],...a?[]:c?.getProviders().map(h)??[]].map(d)));function d(e){const t=function(e){return new hc(e)}(function(e=11){if(!bc||yc+e>512){bc="",yc=0;for(let e=0;e<256;e++)bc+=(256+256*Math.random()|0).toString(16).substring(1)}return bc.substring(yc,yc+++e)}()),r={...e({emitter:t,chains:l.getState(),storage:i}),emitter:t,uid:t.uid};return t.on("connect",x),r.setup?.(),r}function h(e){const{info:t}=e,r=e.provider;return sc({target:{...t,id:t.rdns,provider:r}})}const p=new Map;function f(){return{chainId:l.getState()[0].id,connections:new Map,current:void 0,status:"disconnected"}}let g;const w="0.0.0-canary-";g=e.startsWith(w)?parseInt(e.replace(w,"")):parseInt(e.split(".")[0]??"0");const m=oc((v=i?(b=f,y={migrate(e,t){if(t===g)return e;const r=f(),i=e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId?e.chainId:r.chainId;return{...r,chainId:i}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map((([e,t])=>{const{id:r,name:i,type:n,uid:o}=t.connector,a={id:r,name:i,type:n,uid:o};return[e,{...t,connector:a}]}))},chainId:e.chainId,current:e.current}),skipHydration:a,storage:i,version:g},"getStorage"in y||"serialize"in y||"deserialize"in y?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),((e,t)=>(r,i,n)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1;const s=new Set,c=new Set;let l;try{l=o.getStorage()}catch(e){}if(!l)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...e)}),i,n);const u=ic(o.serialize),d=()=>{const e=o.partialize({...i()});let t;const r=u({state:e,version:o.version}).then((e=>l.setItem(o.name,e))).catch((e=>{t=e}));if(t)throw t;return r},h=n.setState;n.setState=(e,t)=>{h(e,t),d()};const p=e(((...e)=>{r(...e),d()}),i,n);let f;const g=()=>{var e;if(!l)return;a=!1,s.forEach((e=>e(i())));const t=(null==(e=o.onRehydrateStorage)?void 0:e.call(o,i()))||void 0;return ic(l.getItem.bind(l))(o.name).then((e=>{if(e)return o.deserialize(e)})).then((e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return f=o.merge(e,null!=(t=i())?t:p),r(f,!0),d()})).then((()=>{null==t||t(f,void 0),a=!0,c.forEach((e=>e(f)))})).catch((e=>{null==t||t(void 0,e)}))};return n.persist={setOptions:e=>{o={...o,...e},e.getStorage&&(l=e.getStorage())},clearStorage:()=>{null==l||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>g(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},g(),f||p})(b,y)):((e,t)=>(r,i,n)=>{let o={storage:rc((()=>localStorage)),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1;const s=new Set,c=new Set;let l=o.storage;if(!l)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...e)}),i,n);const u=()=>{const e=o.partialize({...i()});return l.setItem(o.name,{state:e,version:o.version})},d=n.setState;n.setState=(e,t)=>{d(e,t),u()};const h=e(((...e)=>{r(...e),u()}),i,n);let p;const f=()=>{var e,t;if(!l)return;a=!1,s.forEach((e=>{var t;return e(null!=(t=i())?t:h)}));const n=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=i())?e:h))||void 0;return ic(l.getItem.bind(l))(o.name).then((e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return p=o.merge(e,null!=(t=i())?t:h),r(p,!0),u()})).then((()=>{null==n||n(p,void 0),p=i(),a=!0,c.forEach((e=>e(p)))})).catch((e=>{null==n||n(void 0,e)}))};return n.persist={setOptions:e=>{o={...o,...e},e.storage&&(l=e.storage)},clearStorage:()=>{null==l||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>f(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||f(),p||h})(b,y)):f,(e,t,r)=>{const i=r.subscribe;return r.subscribe=(e,t,n)=>{let o=e;if(t){const i=(null==n?void 0:n.equalityFn)||Object.is;let a=e(r.getState());o=r=>{const n=e(r);if(!i(a,n)){const e=a;t(a=n,e)}},(null==n?void 0:n.fireImmediately)&&t(a,a)}return i(o)},v(e,t,r)}));var v,b,y;function C(e){m.setState((t=>{const r=t.connections.get(e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??r.accounts,chainId:e.chainId??r.chainId,connector:r.connector})}:t}))}function x(e){"connecting"!==m.getState().status&&"reconnecting"!==m.getState().status&&m.setState((t=>{const r=u.getState().find((t=>t.uid===e.uid));return r?(r.emitter.listenerCount("connect")&&r.emitter.off("connect",C),r.emitter.listenerCount("change")||r.emitter.on("change",C),r.emitter.listenerCount("disconnect")||r.emitter.on("disconnect",k),{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:r}),current:e.uid,status:"connected"}):t}))}function k(e){m.setState((t=>{const r=t.connections.get(e.uid);if(r){const e=r.connector;e.emitter.listenerCount("change")&&r.connector.emitter.off("change",C),e.emitter.listenerCount("disconnect")&&r.connector.emitter.off("disconnect",k),e.emitter.listenerCount("connect")||r.connector.emitter.on("connect",x)}if(t.connections.delete(e.uid),0===t.connections.size)return{...t,connections:new Map,current:void 0,status:"disconnected"};const i=t.connections.values().next().value;return{...t,connections:new Map(t.connections),current:i.connector.uid}}))}return n&&m.subscribe((({connections:e,current:t})=>t?e.get(t)?.chainId:void 0),(e=>{if(l.getState().some((t=>t.id===e)))return m.setState((t=>({...t,chainId:e??t.chainId})))})),c?.subscribe((e=>{const t=new Map;for(const e of u.getState())t.set(e.id,!0);const r=[];for(const i of e){const e=d(h(i));t.has(e.id)||r.push(e)}i&&!m.persist.hasHydrated()||u.setState((e=>[...e,...r]),!0)})),{get chains(){return l.getState()},get connectors(){return u.getState()},storage:i,getClient:function(e={}){const t=e.chainId??m.getState().chainId,r=l.getState().find((e=>e.id===t));if(e.chainId&&!r)throw new o;{const e=p.get(m.getState().chainId);if(e&&!r)return e;if(!r)throw new o}{const e=p.get(t);if(e)return e}let i;if(s.client)i=s.client({chain:r});else{const e=r.id,t=l.getState().map((e=>e.id)),n={},o=Object.entries(s);for(const[r,i]of o)if("chains"!==r&&"client"!==r&&"connectors"!==r&&"transports"!==r)if("object"==typeof i)if(e in i)n[r]=i[e];else{if(t.some((e=>e in i)))continue;n[r]=i}else n[r]=i;i=E({...n,chain:r,batch:n.batch??{multicall:!0},transport:t=>s.transports[e]({...t,connectors:u})})}return p.set(t,i),i},get state(){return m.getState()},setState(e){let t;t="function"==typeof e?e(m.getState()):e;const r=f();"object"!=typeof t&&(t=r),Object.keys(r).some((e=>!(e in t)))&&(t=r),m.setState(t,!0)},subscribe:(e,t,r)=>m.subscribe(e,t,r?{...r,fireImmediately:r.emitImmediately}:void 0),_internal:{mipd:c,store:m,ssr:Boolean(a),syncConnectedChain:n,transports:s.transports,chains:{setState(e){const t="function"==typeof e?e(l.getState()):e;if(0!==t.length)return l.setState(t,!0)},subscribe:e=>l.subscribe(e)},connectors:{providerDetailToConnector:h,setup:d,setState:e=>u.setState("function"==typeof e?e(u.getState()):e,!0),subscribe:e=>u.subscribe(e)},events:{change:C,connect:x,disconnect:k}}}}function xc(e){const t=e.isNewChainsStale??!0;let r,i;const n="eip155";return s=>({id:"walletConnect",name:"WalletConnect",type:xc.type,async setup(){const e=await this.getProvider().catch((()=>null));e&&(e.on("connect",this.onConnect.bind(this)),e.on("session_delete",this.onSessionDelete.bind(this)))},async connect({chainId:e,...t}={}){try{const r=await this.getProvider();if(!r)throw new u;r.on("display_uri",this.onDisplayUri);let i=e;if(!i){const e=await(s.storage?.getItem("state"))??{},t=s.chains.some((t=>t.id===e.chainId));i=t?e.chainId:s.chains[0]?.id}if(!i)throw new Error("No chains found on connector.");const n=await this.isChainsStale();if(r.session&&n&&await r.disconnect(),!r.session||n){const e=s.chains.filter((e=>e.id!==i)).map((e=>e.id));await r.connect({optionalChains:[i,...e],..."pairingTopic"in t?{pairingTopic:t.pairingTopic}:{}}),this.setRequestedChainsIds(s.chains.map((e=>e.id)))}const o=(await r.enable()).map((e=>(0,K.b)(e))),a=await this.getChainId();return r.removeListener("display_uri",this.onDisplayUri),r.removeListener("connect",this.onConnect.bind(this)),r.on("accountsChanged",this.onAccountsChanged.bind(this)),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect.bind(this)),r.on("session_delete",this.onSessionDelete.bind(this)),{accounts:o,chainId:a}}catch(e){if(/(user rejected|connection request reset)/i.test(e?.message))throw new D(e);throw e}},async disconnect(){const e=await this.getProvider();try{await(e?.disconnect())}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{e?.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),e?.removeListener("chainChanged",this.onChainChanged),e?.removeListener("disconnect",this.onDisconnect.bind(this)),e?.removeListener("session_delete",this.onSessionDelete.bind(this)),e?.on("connect",this.onConnect.bind(this)),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map((e=>(0,K.b)(e)))},async getProvider({chainId:t}={}){return r||(i||(i=async function(){const t=s.chains.map((e=>e.id));if(!t.length)return;const{EthereumProvider:r}=await Promise.all([a.e(547),a.e(432)]).then(a.bind(a,3547));return await r.init({...e,disableProviderPing:!0,optionalChains:t,projectId:e.projectId,rpcMap:Object.fromEntries(s.chains.map((e=>[e.id,e.rpcUrls.default.http[0]]))),showQrModal:e.showQrModal??!0})}()),r=await i,r?.events.setMaxListeners(1/0)),t&&await(this.switchChain?.({chainId:t})),r},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);return!!e.length&&(!await this.isChainsStale()||!t.session||(await t.disconnect().catch((()=>{})),!1))}catch{return!1}},async switchChain({chainId:e}){const t=s.chains.find((t=>t.id===e));if(!t)throw new H(new o);try{const r=await this.getProvider(),i=this.getNamespaceChainsIds(),n=this.getNamespaceMethods();if(!i.includes(e)&&n.includes("wallet_addEthereumChain")){await r.request({method:"wallet_addEthereumChain",params:[{chainId:(0,w.cK)(t.id),blockExplorerUrls:[t.blockExplorers?.default.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});const i=await this.getRequestedChainsIds();this.setRequestedChainsIds([...i,e])}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,w.cK)(e)}]}),t}catch(e){if(/user rejected request/i.test("string"==typeof e?e:e?.message))throw new D(e);throw new H(e)}},onAccountsChanged(e){0===e.length?this.onDisconnect():s.emitter.emit("change",{accounts:e.map((e=>(0,K.b)(e)))})},onChainChanged(e){const t=Number(e);s.emitter.emit("change",{chainId:t})},async onConnect(e){const t=Number(e.chainId),r=await this.getAccounts();s.emitter.emit("connect",{accounts:r,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),s.emitter.emit("disconnect");const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.removeListener("session_delete",this.onSessionDelete.bind(this)),t.on("connect",this.onConnect.bind(this))},onDisplayUri(e){s.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){if(!r)return[];const e=r.session?.namespaces[n]?.chains?.map((e=>parseInt(e.split(":")[1]||"")));return e??[]},getNamespaceMethods(){if(!r)return[];const e=r.session?.namespaces[n]?.methods;return e??[]},async getRequestedChainsIds(){return await(s.storage?.getItem(this.requestedChainsStorageKey))??[]},async isChainsStale(){if(this.getNamespaceMethods().includes("wallet_addEthereumChain"))return!1;if(!t)return!1;const e=s.chains.map((e=>e.id)),r=this.getNamespaceChainsIds();if(r.length&&!r.some((t=>e.includes(t))))return!1;const i=await this.getRequestedChainsIds();return!e.every((e=>i.includes(e)))},async setRequestedChainsIds(e){await(s.storage?.setItem(this.requestedChainsStorageKey,e))},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}function Ec(e){let t,r,i,n,s;return c=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",type:Ec.type,async connect({chainId:e}={}){try{const t=await this.getProvider(),r=(await t.request({method:"eth_requestAccounts"})).map((e=>(0,K.b)(e)));i||(i=this.onAccountsChanged.bind(this),t.on("accountsChanged",i)),n||(n=this.onChainChanged.bind(this),t.on("chainChanged",n)),s||(s=this.onDisconnect.bind(this),t.on("disconnect",s));let o=await this.getChainId();if(e&&o!==e){const t=await this.switchChain({chainId:e}).catch((e=>{if(e.code===D.code)throw e;return{id:o}}));o=t?.id??o}return{accounts:r,chainId:o}}catch(e){if(/(user closed modal|accounts received is empty|user denied account)/i.test(e.message))throw new D(e);throw e}},async disconnect(){const e=await this.getProvider();i&&(e.removeListener("accountsChanged",i),i=void 0),n&&(e.removeListener("chainChanged",n),n=void 0),s&&(e.removeListener("disconnect",s),s=void 0),e.disconnect(),e.close()},async getAccounts(){const e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map((e=>(0,K.b)(e)))},async getChainId(){const e=await this.getProvider(),t=await e.request({method:"eth_chainId"});return Number(t)},async getProvider(){if(!r){const{default:i}=await Promise.all([a.e(229),a.e(446)]).then(a.t.bind(a,9229,19));let n;n="function"!=typeof i&&"function"==typeof i.default?i.default:i,t=new n({reloadOnDisconnect:!1,...e});const o=t.walletExtension?.getChainId(),s=c.chains.find((t=>e.chainId?t.id===e.chainId:t.id===o))||c.chains[0],l=e.chainId||s?.id,u=e.jsonRpcUrl||s?.rpcUrls.default.http[0];r=t.makeWeb3Provider(u,l)}return r},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({chainId:e}){const t=c.chains.find((t=>t.id===e));if(!t)throw new H(new o);const r=await this.getProvider(),i=(0,w.cK)(t.id);try{return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),t}catch(e){if(4902===e.code)try{return await r.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[t.rpcUrls.default?.http[0]??""],blockExplorerUrls:[t.blockExplorers?.default.url]}]}),t}catch(e){throw new D(e)}throw new H(e)}},onAccountsChanged(e){0===e.length?this.onDisconnect():c.emitter.emit("change",{accounts:e.map((e=>(0,K.b)(e)))})},onChainChanged(e){const t=Number(e);c.emitter.emit("change",{chainId:t})},async onDisconnect(e){c.emitter.emit("disconnect");const t=await this.getProvider();i&&(t.removeListener("accountsChanged",i),i=void 0),n&&(t.removeListener("chainChanged",n),n=void 0),s&&(t.removeListener("disconnect",s),s=void 0)}})}function kc(e){if("string"==typeof e)return Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10);if("bigint"==typeof e)return Number(e);if("number"==typeof e)return e;throw new Error(`Cannot normalize chainId "${e}" of type "${typeof e}"`)}xc.type="walletConnect",Ec.type="coinbaseWallet";let _c=!1;var Ac=a(9436),Rc=a(9670),$c=a(8990);class Sc extends f.C{constructor(e,{account:t,docsPath:r,chain:i,data:n,gas:o,gasPrice:a,maxFeePerGas:s,maxPriorityFeePerGas:c,nonce:l,to:u,value:d}){const h=(0,$c.aO)({from:t?.address,to:u,value:void 0!==d&&`${(0,Ac.c)(d)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:void 0!==a&&`${(0,Rc.Q)(a)} gwei`,maxFeePerGas:void 0!==s&&`${(0,Rc.Q)(s)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,Rc.Q)(c)} gwei`,nonce:l});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",h].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}var Pc=a(2592),Tc=a(1772),Ic=a(9789),Oc=a(7671),Nc=a(5414);class Mc extends f.C{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class jc extends f.C{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class Uc extends f.C{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,Rc.Q)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class Bc extends f.C{constructor({blockHash:e,blockNumber:t}){let r="Block";e&&(r=`Block at hash "${e}"`),t&&(r=`Block at number "${t}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}const Dc={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function Lc(e){const t=e.transactions?.map((e=>"string"==typeof e?e:function(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,je.ME)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,je.ME)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?Dc[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip1559"===t.type&&delete t.maxFeePerBlobGas,t}(e)));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}async function zc(e,{blockHash:t,blockNumber:r,blockTag:i,includeTransactions:n}={}){const o=i??"latest",a=n??!1,s=void 0!==r?(0,w.cK)(r):void 0;let c=null;if(c=t?await e.request({method:"eth_getBlockByHash",params:[t,a]}):await e.request({method:"eth_getBlockByNumber",params:[s||o,a]}),!c)throw new Bc({blockHash:t,blockNumber:r});return(e.chain?.formatters?.block?.format||Lc)(c)}async function Fc(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function Wc(e,t){const{block:r,chain:i=e.chain,request:n,type:o="eip1559"}=t||{},a=await(async()=>"function"==typeof i?.fees?.baseFeeMultiplier?i.fees.baseFeeMultiplier({block:r,client:e,request:n}):i?.fees?.baseFeeMultiplier??1.2)();if(a<1)throw new Mc;const s=10**(a.toString().split(".")[1]?.length??0),c=e=>e*BigInt(Math.ceil(a*s))/BigInt(s),l=r||await de(e,zc,"getBlock")({});if("function"==typeof i?.fees?.estimateFeesPerGas){const t=await i.fees.estimateFeesPerGas({block:r,client:e,multiply:c,request:n,type:o});if(null!==t)return t}if("eip1559"===o){if("bigint"!=typeof l.baseFeePerGas)throw new jc;const t="bigint"==typeof n?.maxPriorityFeePerGas?n.maxPriorityFeePerGas:await async function(e,t){const{block:r,chain:i=e.chain,request:n}=t||{};if("function"==typeof i?.fees?.defaultPriorityFee){const t=r||await de(e,zc,"getBlock")({});return i.fees.defaultPriorityFee({block:t,client:e,request:n})}if(void 0!==i?.fees?.defaultPriorityFee)return i?.fees?.defaultPriorityFee;try{const t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,je.uU)(t)}catch{const[t,i]=await Promise.all([r?Promise.resolve(r):de(e,zc,"getBlock")({}),de(e,Fc,"getGasPrice")({})]);if("bigint"!=typeof t.baseFeePerGas)throw new jc;const n=i-t.baseFeePerGas;return n<0n?0n:n}}(e,{block:l,chain:i,request:n}),r=c(l.baseFeePerGas);return{maxFeePerGas:n?.maxFeePerGas??r+t,maxPriorityFeePerGas:t}}return{gasPrice:n?.gasPrice??c(await de(e,Fc,"getGasPrice")({}))}}async function Hc(e,{address:t,blockTag:r="latest",blockNumber:i}){const n=await e.request({method:"eth_getTransactionCount",params:[t,i?(0,w.cK)(i):r]});return(0,je.ME)(n)}async function qc(e){const t=await e.request({method:"eth_chainId"});return(0,je.ME)(t)}async function Zc(e,t){const{account:r=e.account,chain:i,chainId:n,gas:o,nonce:a,parameters:s=["chainId","fees","gas","nonce","type"],type:c}=t,l=r?(0,p.J)(r):void 0,u={...t,...l?{from:l?.address}:{}};s.includes("chainId")&&(u.chainId=i?i.id:void 0!==n?n:await de(e,qc,"getChainId")({})),s.includes("nonce")&&void 0===a&&l&&(u.nonce=await de(e,Hc,"getTransactionCount")({address:l.address,blockTag:"pending"}));const d=await(()=>{if(void 0===u.type)return de(e,zc,"getBlock")({blockTag:"latest"})})();if((s.includes("fees")||s.includes("type"))&&void 0===c)try{u.type=function(e){if(e.type)return e.type;if(void 0!==e.blobs||void 0!==e.blobVersionedHashes||void 0!==e.maxFeePerBlobGas||void 0!==e.sidecars)return"eip4844";if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new $c.Vg({transaction:e})}(u)}catch{u.type="bigint"==typeof d?.baseFeePerGas?"eip1559":"legacy"}if(s.includes("fees"))if("eip1559"===u.type||"eip4844"===u.type){if(void 0===u.maxFeePerGas||void 0===u.maxPriorityFeePerGas){const{maxFeePerGas:r,maxPriorityFeePerGas:n}=await Wc(e,{block:d,chain:i,request:u});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<n)throw new Uc({maxPriorityFeePerGas:n});u.maxPriorityFeePerGas=n,u.maxFeePerGas=r}}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new jc;const{gasPrice:r}=await Wc(e,{block:d,chain:i,request:u,type:"legacy"});u.gasPrice=r}return s.includes("gas")&&void 0===o&&(u.gas=await de(e,Vc,"estimateGas")({...u,account:l?{address:l.address,type:"json-rpc"}:void 0})),(0,Nc.c)(u),delete u.parameters,u}async function Vc(e,t){const r=t.account??e.account,i=r?(0,p.J)(r):void 0;try{const{accessList:r,blobs:n,blockNumber:o,blockTag:a,data:s,gas:c,gasPrice:l,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:h,nonce:p,to:f,value:g,...m}="local"===i?.type?await Zc(e,t):t,v=(o?(0,w.cK)(o):void 0)||a;(0,Nc.c)(t);const b=e.chain?.formatters?.transactionRequest?.format,y=(b||Oc.Bv)({...(0,Ic.o)(m,{format:b}),from:i?.address,accessList:r,blobs:n,data:s,gas:c,gasPrice:l,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:h,nonce:p,to:f,value:g}),C=await e.request({method:"eth_estimateGas",params:v?[y,v]:[y]});return BigInt(C)}catch(r){throw function(e,{docsPath:t,...r}){const i=(()=>{const t=(0,Tc.l)(e,r);return t instanceof Pc.RM?e:t})();return new Sc(i,{docsPath:t,...r})}(r,{...t,account:i,chain:e.chain})}}var Gc=a(8703);async function Kc(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]},{retryCount:0})}async function Yc(e,t){const{account:r=e.account,chain:i=e.chain,accessList:n,blobs:o,data:a,gas:s,gasPrice:c,maxFeePerBlobGas:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:w,...m}=t;if(!r)throw new g({docsPath:"/docs/actions/wallet/sendTransaction"});const v=(0,p.J)(r);try{let r;if((0,Nc.c)(t),null!==i&&(r=await de(e,qc,"getChainId")({}),function({chain:e,currentChainId:t}){if(!e)throw new Gc.jF;if(t!==e.id)throw new Gc.EH({chain:e,currentChainId:t})}({currentChainId:r,chain:i})),"local"===v.type){const t=await de(e,Zc,"prepareTransactionRequest")({account:v,accessList:n,blobs:o,chain:i,chainId:r,data:a,gas:s,gasPrice:c,maxFeePerBlobGas:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:w,...m}),p=i?.serializers?.transaction,g=await v.signTransaction(t,{serializer:p});return await de(e,Kc,"sendRawTransaction")({serializedTransaction:g})}const p=e.chain?.formatters?.transactionRequest?.format,g=(p||Oc.Bv)({...(0,Ic.o)(m,{format:p}),accessList:n,blobs:o,data:a,from:v.address,gas:s,gasPrice:c,maxFeePerBlobGas:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:w});return await e.request({method:"eth_sendTransaction",params:[g]},{retryCount:0})}catch(e){throw function(e,{docsPath:t,...r}){const i=(()=>{const t=(0,Tc.l)(e,r);return t instanceof Pc.RM?e:t})();return new $c.$s(i,{docsPath:t,...r})}(e,{...t,account:v,chain:t.chain||void 0})}}const Jc=qe({id:137,name:"Polygon",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{default:{http:["https://polygon-rpc.com"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://polygonscan.com",apiUrl:"https://api.polygonscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}});var Qc=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,Xc=Math.ceil,el=Math.floor,tl="[BigNumber Error] ",rl=tl+"Number primitive has more than 15 significant digits: ",il=1e14,nl=14,ol=9007199254740991,al=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],sl=1e7,cl=1e9;function ll(e){var t=0|e;return e>0||e===t?t:t-1}function ul(e){for(var t,r,i=1,n=e.length,o=e[0]+"";i<n;){for(t=e[i++]+"",r=nl-t.length;r--;t="0"+t);o+=t}for(n=o.length;48===o.charCodeAt(--n););return o.slice(0,n+1||1)}function dl(e,t){var r,i,n=e.c,o=t.c,a=e.s,s=t.s,c=e.e,l=t.e;if(!a||!s)return null;if(r=n&&!n[0],i=o&&!o[0],r||i)return r?i?0:-s:a;if(a!=s)return a;if(r=a<0,i=c==l,!n||!o)return i?0:!n^r?1:-1;if(!i)return c>l^r?1:-1;for(s=(c=n.length)<(l=o.length)?c:l,a=0;a<s;a++)if(n[a]!=o[a])return n[a]>o[a]^r?1:-1;return c==l?0:c>l^r?1:-1}function hl(e,t,r,i){if(e<t||e>r||e!==el(e))throw Error(tl+(i||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function pl(e){var t=e.c.length-1;return ll(e.e/nl)==t&&e.c[t]%2!=0}function fl(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function gl(e,t,r){var i,n;if(t<0){for(n=r+".";++t;n+=r);e=n+e}else if(++t>(i=e.length)){for(n=r,t-=i;--t;n+=r);e+=n}else t<i&&(e=e.slice(0,t)+"."+e.slice(t));return e}var wl=function e(t){var r,i,n,o,a,s,c,l,u,d,h=A.prototype={constructor:A,toString:null,valueOf:null},p=new A(1),f=20,g=4,w=-7,m=21,v=-1e7,b=1e7,y=!1,C=1,x=0,E={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},k="0123456789abcdefghijklmnopqrstuvwxyz",_=!0;function A(e,t){var r,o,a,s,c,l,u,d,h=this;if(!(h instanceof A))return new A(e,t);if(null==t){if(e&&!0===e._isBigNumber)return h.s=e.s,void(!e.c||e.e>b?h.c=h.e=null:e.e<v?h.c=[h.e=0]:(h.e=e.e,h.c=e.c.slice()));if((l="number"==typeof e)&&0*e==0){if(h.s=1/e<0?(e=-e,-1):1,e===~~e){for(s=0,c=e;c>=10;c/=10,s++);return void(s>b?h.c=h.e=null:(h.e=s,h.c=[e]))}d=String(e)}else{if(!Qc.test(d=String(e)))return n(h,d,l);h.s=45==d.charCodeAt(0)?(d=d.slice(1),-1):1}(s=d.indexOf("."))>-1&&(d=d.replace(".","")),(c=d.search(/e/i))>0?(s<0&&(s=c),s+=+d.slice(c+1),d=d.substring(0,c)):s<0&&(s=d.length)}else{if(hl(t,2,k.length,"Base"),10==t&&_)return P(h=new A(e),f+h.e+1,g);if(d=String(e),l="number"==typeof e){if(0*e!=0)return n(h,d,l,t);if(h.s=1/e<0?(d=d.slice(1),-1):1,A.DEBUG&&d.replace(/^0\.0*|\./,"").length>15)throw Error(rl+e)}else h.s=45===d.charCodeAt(0)?(d=d.slice(1),-1):1;for(r=k.slice(0,t),s=c=0,u=d.length;c<u;c++)if(r.indexOf(o=d.charAt(c))<0){if("."==o){if(c>s){s=u;continue}}else if(!a&&(d==d.toUpperCase()&&(d=d.toLowerCase())||d==d.toLowerCase()&&(d=d.toUpperCase()))){a=!0,c=-1,s=0;continue}return n(h,String(e),l,t)}l=!1,(s=(d=i(d,t,10,h.s)).indexOf("."))>-1?d=d.replace(".",""):s=d.length}for(c=0;48===d.charCodeAt(c);c++);for(u=d.length;48===d.charCodeAt(--u););if(d=d.slice(c,++u)){if(u-=c,l&&A.DEBUG&&u>15&&(e>ol||e!==el(e)))throw Error(rl+h.s*e);if((s=s-c-1)>b)h.c=h.e=null;else if(s<v)h.c=[h.e=0];else{if(h.e=s,h.c=[],c=(s+1)%nl,s<0&&(c+=nl),c<u){for(c&&h.c.push(+d.slice(0,c)),u-=nl;c<u;)h.c.push(+d.slice(c,c+=nl));c=nl-(d=d.slice(c)).length}else c-=u;for(;c--;d+="0");h.c.push(+d)}}else h.c=[h.e=0]}function R(e,t,r,i){var n,o,a,s,c;if(null==r?r=g:hl(r,0,8),!e.c)return e.toString();if(n=e.c[0],a=e.e,null==t)c=ul(e.c),c=1==i||2==i&&(a<=w||a>=m)?fl(c,a):gl(c,a,"0");else if(o=(e=P(new A(e),t,r)).e,s=(c=ul(e.c)).length,1==i||2==i&&(t<=o||o<=w)){for(;s<t;c+="0",s++);c=fl(c,o)}else if(t-=a,c=gl(c,o,"0"),o+1>s){if(--t>0)for(c+=".";t--;c+="0");}else if((t+=o-s)>0)for(o+1==s&&(c+=".");t--;c+="0");return e.s<0&&n?"-"+c:c}function $(e,t){for(var r,i,n=1,o=new A(e[0]);n<e.length;n++)(!(i=new A(e[n])).s||(r=dl(o,i))===t||0===r&&o.s===t)&&(o=i);return o}function S(e,t,r){for(var i=1,n=t.length;!t[--n];t.pop());for(n=t[0];n>=10;n/=10,i++);return(r=i+r*nl-1)>b?e.c=e.e=null:r<v?e.c=[e.e=0]:(e.e=r,e.c=t),e}function P(e,t,r,i){var n,o,a,s,c,l,u,d=e.c,h=al;if(d){e:{for(n=1,s=d[0];s>=10;s/=10,n++);if((o=t-n)<0)o+=nl,a=t,c=d[l=0],u=el(c/h[n-a-1]%10);else if((l=Xc((o+1)/nl))>=d.length){if(!i)break e;for(;d.length<=l;d.push(0));c=u=0,n=1,a=(o%=nl)-nl+1}else{for(c=s=d[l],n=1;s>=10;s/=10,n++);u=(a=(o%=nl)-nl+n)<0?0:el(c/h[n-a-1]%10)}if(i=i||t<0||null!=d[l+1]||(a<0?c:c%h[n-a-1]),i=r<4?(u||i)&&(0==r||r==(e.s<0?3:2)):u>5||5==u&&(4==r||i||6==r&&(o>0?a>0?c/h[n-a]:0:d[l-1])%10&1||r==(e.s<0?8:7)),t<1||!d[0])return d.length=0,i?(t-=e.e+1,d[0]=h[(nl-t%nl)%nl],e.e=-t||0):d[0]=e.e=0,e;if(0==o?(d.length=l,s=1,l--):(d.length=l+1,s=h[nl-o],d[l]=a>0?el(c/h[n-a]%h[a])*s:0),i)for(;;){if(0==l){for(o=1,a=d[0];a>=10;a/=10,o++);for(a=d[0]+=s,s=1;a>=10;a/=10,s++);o!=s&&(e.e++,d[0]==il&&(d[0]=1));break}if(d[l]+=s,d[l]!=il)break;d[l--]=0,s=1}for(o=d.length;0===d[--o];d.pop());}e.e>b?e.c=e.e=null:e.e<v&&(e.c=[e.e=0])}return e}function T(e){var t,r=e.e;return null===r?e.toString():(t=ul(e.c),t=r<=w||r>=m?fl(t,r):gl(t,r,"0"),e.s<0?"-"+t:t)}return A.clone=e,A.ROUND_UP=0,A.ROUND_DOWN=1,A.ROUND_CEIL=2,A.ROUND_FLOOR=3,A.ROUND_HALF_UP=4,A.ROUND_HALF_DOWN=5,A.ROUND_HALF_EVEN=6,A.ROUND_HALF_CEIL=7,A.ROUND_HALF_FLOOR=8,A.EUCLID=9,A.config=A.set=function(e){var t,r;if(null!=e){if("object"!=typeof e)throw Error(tl+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(hl(r=e[t],0,cl,t),f=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(hl(r=e[t],0,8,t),g=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(hl(r[0],-cl,0,t),hl(r[1],0,cl,t),w=r[0],m=r[1]):(hl(r,-cl,cl,t),w=-(m=r<0?-r:r))),e.hasOwnProperty(t="RANGE"))if((r=e[t])&&r.pop)hl(r[0],-cl,-1,t),hl(r[1],1,cl,t),v=r[0],b=r[1];else{if(hl(r,-cl,cl,t),!r)throw Error(tl+t+" cannot be zero: "+r);v=-(b=r<0?-r:r)}if(e.hasOwnProperty(t="CRYPTO")){if((r=e[t])!==!!r)throw Error(tl+t+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw y=!r,Error(tl+"crypto unavailable");y=r}else y=r}if(e.hasOwnProperty(t="MODULO_MODE")&&(hl(r=e[t],0,9,t),C=r),e.hasOwnProperty(t="POW_PRECISION")&&(hl(r=e[t],0,cl,t),x=r),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(r=e[t]))throw Error(tl+t+" not an object: "+r);E=r}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(tl+t+" invalid: "+r);_="0123456789"==r.slice(0,10),k=r}}return{DECIMAL_PLACES:f,ROUNDING_MODE:g,EXPONENTIAL_AT:[w,m],RANGE:[v,b],CRYPTO:y,MODULO_MODE:C,POW_PRECISION:x,FORMAT:E,ALPHABET:k}},A.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!A.DEBUG)return!0;var t,r,i=e.c,n=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(i)){if((1===o||-1===o)&&n>=-cl&&n<=cl&&n===el(n)){if(0===i[0]){if(0===n&&1===i.length)return!0;break e}if((t=(n+1)%nl)<1&&(t+=nl),String(i[0]).length==t){for(t=0;t<i.length;t++)if((r=i[t])<0||r>=il||r!==el(r))break e;if(0!==r)return!0}}}else if(null===i&&null===n&&(null===o||1===o||-1===o))return!0;throw Error(tl+"Invalid BigNumber: "+e)},A.maximum=A.max=function(){return $(arguments,-1)},A.minimum=A.min=function(){return $(arguments,1)},A.random=(o=9007199254740992,a=Math.random()*o&2097151?function(){return el(Math.random()*o)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,r,i,n,o,s=0,c=[],l=new A(p);if(null==e?e=f:hl(e,0,cl),n=Xc(e/nl),y)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(n*=2));s<n;)(o=131072*t[s]+(t[s+1]>>>11))>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),t[s]=r[0],t[s+1]=r[1]):(c.push(o%1e14),s+=2);s=n/2}else{if(!crypto.randomBytes)throw y=!1,Error(tl+"crypto unavailable");for(t=crypto.randomBytes(n*=7);s<n;)(o=281474976710656*(31&t[s])+1099511627776*t[s+1]+4294967296*t[s+2]+16777216*t[s+3]+(t[s+4]<<16)+(t[s+5]<<8)+t[s+6])>=9e15?crypto.randomBytes(7).copy(t,s):(c.push(o%1e14),s+=7);s=n/7}if(!y)for(;s<n;)(o=a())<9e15&&(c[s++]=o%1e14);for(n=c[--s],e%=nl,n&&e&&(o=al[nl-e],c[s]=el(n/o)*o);0===c[s];c.pop(),s--);if(s<0)c=[i=0];else{for(i=-1;0===c[0];c.splice(0,1),i-=nl);for(s=1,o=c[0];o>=10;o/=10,s++);s<nl&&(i-=nl-s)}return l.e=i,l.c=c,l}),A.sum=function(){for(var e=1,t=arguments,r=new A(t[0]);e<t.length;)r=r.plus(t[e++]);return r},i=function(){var e="0123456789";function t(e,t,r,i){for(var n,o,a=[0],s=0,c=e.length;s<c;){for(o=a.length;o--;a[o]*=t);for(a[0]+=i.indexOf(e.charAt(s++)),n=0;n<a.length;n++)a[n]>r-1&&(null==a[n+1]&&(a[n+1]=0),a[n+1]+=a[n]/r|0,a[n]%=r)}return a.reverse()}return function(i,n,o,a,s){var c,l,u,d,h,p,w,m,v=i.indexOf("."),b=f,y=g;for(v>=0&&(d=x,x=0,i=i.replace(".",""),p=(m=new A(n)).pow(i.length-v),x=d,m.c=t(gl(ul(p.c),p.e,"0"),10,o,e),m.e=m.c.length),u=d=(w=t(i,n,o,s?(c=k,e):(c=e,k))).length;0==w[--d];w.pop());if(!w[0])return c.charAt(0);if(v<0?--u:(p.c=w,p.e=u,p.s=a,w=(p=r(p,m,b,y,o)).c,h=p.r,u=p.e),v=w[l=u+b+1],d=o/2,h=h||l<0||null!=w[l+1],h=y<4?(null!=v||h)&&(0==y||y==(p.s<0?3:2)):v>d||v==d&&(4==y||h||6==y&&1&w[l-1]||y==(p.s<0?8:7)),l<1||!w[0])i=h?gl(c.charAt(1),-b,c.charAt(0)):c.charAt(0);else{if(w.length=l,h)for(--o;++w[--l]>o;)w[l]=0,l||(++u,w=[1].concat(w));for(d=w.length;!w[--d];);for(v=0,i="";v<=d;i+=c.charAt(w[v++]));i=gl(i,u,c.charAt(0))}return i}}(),r=function(){function e(e,t,r){var i,n,o,a,s=0,c=e.length,l=t%sl,u=t/sl|0;for(e=e.slice();c--;)s=((n=l*(o=e[c]%sl)+(i=u*o+(a=e[c]/sl|0)*l)%sl*sl+s)/r|0)+(i/sl|0)+u*a,e[c]=n%r;return s&&(e=[s].concat(e)),e}function t(e,t,r,i){var n,o;if(r!=i)o=r>i?1:-1;else for(n=o=0;n<r;n++)if(e[n]!=t[n]){o=e[n]>t[n]?1:-1;break}return o}function r(e,t,r,i){for(var n=0;r--;)e[r]-=n,n=e[r]<t[r]?1:0,e[r]=n*i+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(i,n,o,a,s){var c,l,u,d,h,p,f,g,w,m,v,b,y,C,x,E,k,_=i.s==n.s?1:-1,R=i.c,$=n.c;if(!(R&&R[0]&&$&&$[0]))return new A(i.s&&n.s&&(R?!$||R[0]!=$[0]:$)?R&&0==R[0]||!$?0*_:_/0:NaN);for(w=(g=new A(_)).c=[],_=o+(l=i.e-n.e)+1,s||(s=il,l=ll(i.e/nl)-ll(n.e/nl),_=_/nl|0),u=0;$[u]==(R[u]||0);u++);if($[u]>(R[u]||0)&&l--,_<0)w.push(1),d=!0;else{for(C=R.length,E=$.length,u=0,_+=2,(h=el(s/($[0]+1)))>1&&($=e($,h,s),R=e(R,h,s),E=$.length,C=R.length),y=E,v=(m=R.slice(0,E)).length;v<E;m[v++]=0);k=$.slice(),k=[0].concat(k),x=$[0],$[1]>=s/2&&x++;do{if(h=0,(c=t($,m,E,v))<0){if(b=m[0],E!=v&&(b=b*s+(m[1]||0)),(h=el(b/x))>1)for(h>=s&&(h=s-1),f=(p=e($,h,s)).length,v=m.length;1==t(p,m,f,v);)h--,r(p,E<f?k:$,f,s),f=p.length,c=1;else 0==h&&(c=h=1),f=(p=$.slice()).length;if(f<v&&(p=[0].concat(p)),r(m,p,v,s),v=m.length,-1==c)for(;t($,m,E,v)<1;)h++,r(m,E<v?k:$,v,s),v=m.length}else 0===c&&(h++,m=[0]);w[u++]=h,m[0]?m[v++]=R[y]||0:(m=[R[y]],v=1)}while((y++<C||null!=m[0])&&_--);d=null!=m[0],w[0]||w.splice(0,1)}if(s==il){for(u=1,_=w[0];_>=10;_/=10,u++);P(g,o+(g.e=u+l*nl-1)+1,a,d)}else g.e=l,g.r=+d;return g}}(),s=/^(-?)0([xbo])(?=\w[\w.]*$)/i,c=/^([^.]+)\.$/,l=/^\.([^.]+)$/,u=/^-?(Infinity|NaN)$/,d=/^\s*\+(?=[\w.])|^\s+|\s+$/g,n=function(e,t,r,i){var n,o=r?t:t.replace(d,"");if(u.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!r&&(o=o.replace(s,(function(e,t,r){return n="x"==(r=r.toLowerCase())?16:"b"==r?2:8,i&&i!=n?e:t})),i&&(n=i,o=o.replace(c,"$1").replace(l,"0.$1")),t!=o))return new A(o,n);if(A.DEBUG)throw Error(tl+"Not a"+(i?" base "+i:"")+" number: "+t);e.s=null}e.c=e.e=null},h.absoluteValue=h.abs=function(){var e=new A(this);return e.s<0&&(e.s=1),e},h.comparedTo=function(e,t){return dl(this,new A(e,t))},h.decimalPlaces=h.dp=function(e,t){var r,i,n,o=this;if(null!=e)return hl(e,0,cl),null==t?t=g:hl(t,0,8),P(new A(o),e+o.e+1,t);if(!(r=o.c))return null;if(i=((n=r.length-1)-ll(this.e/nl))*nl,n=r[n])for(;n%10==0;n/=10,i--);return i<0&&(i=0),i},h.dividedBy=h.div=function(e,t){return r(this,new A(e,t),f,g)},h.dividedToIntegerBy=h.idiv=function(e,t){return r(this,new A(e,t),0,1)},h.exponentiatedBy=h.pow=function(e,t){var r,i,n,o,a,s,c,l,u=this;if((e=new A(e)).c&&!e.isInteger())throw Error(tl+"Exponent not an integer: "+T(e));if(null!=t&&(t=new A(t)),a=e.e>14,!u.c||!u.c[0]||1==u.c[0]&&!u.e&&1==u.c.length||!e.c||!e.c[0])return l=new A(Math.pow(+T(u),a?e.s*(2-pl(e)):+T(e))),t?l.mod(t):l;if(s=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new A(NaN);(i=!s&&u.isInteger()&&t.isInteger())&&(u=u.mod(t))}else{if(e.e>9&&(u.e>0||u.e<-1||(0==u.e?u.c[0]>1||a&&u.c[1]>=24e7:u.c[0]<8e13||a&&u.c[0]<=9999975e7)))return o=u.s<0&&pl(e)?-0:0,u.e>-1&&(o=1/o),new A(s?1/o:o);x&&(o=Xc(x/nl+2))}for(a?(r=new A(.5),s&&(e.s=1),c=pl(e)):c=(n=Math.abs(+T(e)))%2,l=new A(p);;){if(c){if(!(l=l.times(u)).c)break;o?l.c.length>o&&(l.c.length=o):i&&(l=l.mod(t))}if(n){if(0===(n=el(n/2)))break;c=n%2}else if(P(e=e.times(r),e.e+1,1),e.e>14)c=pl(e);else{if(0==(n=+T(e)))break;c=n%2}u=u.times(u),o?u.c&&u.c.length>o&&(u.c.length=o):i&&(u=u.mod(t))}return i?l:(s&&(l=p.div(l)),t?l.mod(t):o?P(l,x,g,void 0):l)},h.integerValue=function(e){var t=new A(this);return null==e?e=g:hl(e,0,8),P(t,t.e+1,e)},h.isEqualTo=h.eq=function(e,t){return 0===dl(this,new A(e,t))},h.isFinite=function(){return!!this.c},h.isGreaterThan=h.gt=function(e,t){return dl(this,new A(e,t))>0},h.isGreaterThanOrEqualTo=h.gte=function(e,t){return 1===(t=dl(this,new A(e,t)))||0===t},h.isInteger=function(){return!!this.c&&ll(this.e/nl)>this.c.length-2},h.isLessThan=h.lt=function(e,t){return dl(this,new A(e,t))<0},h.isLessThanOrEqualTo=h.lte=function(e,t){return-1===(t=dl(this,new A(e,t)))||0===t},h.isNaN=function(){return!this.s},h.isNegative=function(){return this.s<0},h.isPositive=function(){return this.s>0},h.isZero=function(){return!!this.c&&0==this.c[0]},h.minus=function(e,t){var r,i,n,o,a=this,s=a.s;if(t=(e=new A(e,t)).s,!s||!t)return new A(NaN);if(s!=t)return e.s=-t,a.plus(e);var c=a.e/nl,l=e.e/nl,u=a.c,d=e.c;if(!c||!l){if(!u||!d)return u?(e.s=-t,e):new A(d?a:NaN);if(!u[0]||!d[0])return d[0]?(e.s=-t,e):new A(u[0]?a:3==g?-0:0)}if(c=ll(c),l=ll(l),u=u.slice(),s=c-l){for((o=s<0)?(s=-s,n=u):(l=c,n=d),n.reverse(),t=s;t--;n.push(0));n.reverse()}else for(i=(o=(s=u.length)<(t=d.length))?s:t,s=t=0;t<i;t++)if(u[t]!=d[t]){o=u[t]<d[t];break}if(o&&(n=u,u=d,d=n,e.s=-e.s),(t=(i=d.length)-(r=u.length))>0)for(;t--;u[r++]=0);for(t=il-1;i>s;){if(u[--i]<d[i]){for(r=i;r&&!u[--r];u[r]=t);--u[r],u[i]+=il}u[i]-=d[i]}for(;0==u[0];u.splice(0,1),--l);return u[0]?S(e,u,l):(e.s=3==g?-1:1,e.c=[e.e=0],e)},h.modulo=h.mod=function(e,t){var i,n,o=this;return e=new A(e,t),!o.c||!e.s||e.c&&!e.c[0]?new A(NaN):!e.c||o.c&&!o.c[0]?new A(o):(9==C?(n=e.s,e.s=1,i=r(o,e,0,3),e.s=n,i.s*=n):i=r(o,e,0,C),(e=o.minus(i.times(e))).c[0]||1!=C||(e.s=o.s),e)},h.multipliedBy=h.times=function(e,t){var r,i,n,o,a,s,c,l,u,d,h,p,f,g,w,m=this,v=m.c,b=(e=new A(e,t)).c;if(!(v&&b&&v[0]&&b[0]))return!m.s||!e.s||v&&!v[0]&&!b||b&&!b[0]&&!v?e.c=e.e=e.s=null:(e.s*=m.s,v&&b?(e.c=[0],e.e=0):e.c=e.e=null),e;for(i=ll(m.e/nl)+ll(e.e/nl),e.s*=m.s,(c=v.length)<(d=b.length)&&(f=v,v=b,b=f,n=c,c=d,d=n),n=c+d,f=[];n--;f.push(0));for(g=il,w=sl,n=d;--n>=0;){for(r=0,h=b[n]%w,p=b[n]/w|0,o=n+(a=c);o>n;)r=((l=h*(l=v[--a]%w)+(s=p*l+(u=v[a]/w|0)*h)%w*w+f[o]+r)/g|0)+(s/w|0)+p*u,f[o--]=l%g;f[o]=r}return r?++i:f.splice(0,1),S(e,f,i)},h.negated=function(){var e=new A(this);return e.s=-e.s||null,e},h.plus=function(e,t){var r,i=this,n=i.s;if(t=(e=new A(e,t)).s,!n||!t)return new A(NaN);if(n!=t)return e.s=-t,i.minus(e);var o=i.e/nl,a=e.e/nl,s=i.c,c=e.c;if(!o||!a){if(!s||!c)return new A(n/0);if(!s[0]||!c[0])return c[0]?e:new A(s[0]?i:0*n)}if(o=ll(o),a=ll(a),s=s.slice(),n=o-a){for(n>0?(a=o,r=c):(n=-n,r=s),r.reverse();n--;r.push(0));r.reverse()}for((n=s.length)-(t=c.length)<0&&(r=c,c=s,s=r,t=n),n=0;t;)n=(s[--t]=s[t]+c[t]+n)/il|0,s[t]=il===s[t]?0:s[t]%il;return n&&(s=[n].concat(s),++a),S(e,s,a)},h.precision=h.sd=function(e,t){var r,i,n,o=this;if(null!=e&&e!==!!e)return hl(e,1,cl),null==t?t=g:hl(t,0,8),P(new A(o),e,t);if(!(r=o.c))return null;if(i=(n=r.length-1)*nl+1,n=r[n]){for(;n%10==0;n/=10,i--);for(n=r[0];n>=10;n/=10,i++);}return e&&o.e+1>i&&(i=o.e+1),i},h.shiftedBy=function(e){return hl(e,-9007199254740991,ol),this.times("1e"+e)},h.squareRoot=h.sqrt=function(){var e,t,i,n,o,a=this,s=a.c,c=a.s,l=a.e,u=f+4,d=new A("0.5");if(1!==c||!s||!s[0])return new A(!c||c<0&&(!s||s[0])?NaN:s?a:1/0);if(0==(c=Math.sqrt(+T(a)))||c==1/0?(((t=ul(s)).length+l)%2==0&&(t+="0"),c=Math.sqrt(+t),l=ll((l+1)/2)-(l<0||l%2),i=new A(t=c==1/0?"5e"+l:(t=c.toExponential()).slice(0,t.indexOf("e")+1)+l)):i=new A(c+""),i.c[0])for((c=(l=i.e)+u)<3&&(c=0);;)if(o=i,i=d.times(o.plus(r(a,o,u,1))),ul(o.c).slice(0,c)===(t=ul(i.c)).slice(0,c)){if(i.e<l&&--c,"9999"!=(t=t.slice(c-3,c+1))&&(n||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(P(i,i.e+f+2,1),e=!i.times(i).eq(a));break}if(!n&&(P(o,o.e+f+2,0),o.times(o).eq(a))){i=o;break}u+=4,c+=4,n=1}return P(i,i.e+f+1,g,e)},h.toExponential=function(e,t){return null!=e&&(hl(e,0,cl),e++),R(this,e,t,1)},h.toFixed=function(e,t){return null!=e&&(hl(e,0,cl),e=e+this.e+1),R(this,e,t)},h.toFormat=function(e,t,r){var i,n=this;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=E;else if("object"!=typeof r)throw Error(tl+"Argument not an object: "+r);if(i=n.toFixed(e,t),n.c){var o,a=i.split("."),s=+r.groupSize,c=+r.secondaryGroupSize,l=r.groupSeparator||"",u=a[0],d=a[1],h=n.s<0,p=h?u.slice(1):u,f=p.length;if(c&&(o=s,s=c,c=o,f-=o),s>0&&f>0){for(o=f%s||s,u=p.substr(0,o);o<f;o+=s)u+=l+p.substr(o,s);c>0&&(u+=l+p.slice(o)),h&&(u="-"+u)}i=d?u+(r.decimalSeparator||"")+((c=+r.fractionGroupSize)?d.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):d):u}return(r.prefix||"")+i+(r.suffix||"")},h.toFraction=function(e){var t,i,n,o,a,s,c,l,u,d,h,f,w=this,m=w.c;if(null!=e&&(!(c=new A(e)).isInteger()&&(c.c||1!==c.s)||c.lt(p)))throw Error(tl+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+T(c));if(!m)return new A(w);for(t=new A(p),u=i=new A(p),n=l=new A(p),f=ul(m),a=t.e=f.length-w.e-1,t.c[0]=al[(s=a%nl)<0?nl+s:s],e=!e||c.comparedTo(t)>0?a>0?t:u:c,s=b,b=1/0,c=new A(f),l.c[0]=0;d=r(c,t,0,1),1!=(o=i.plus(d.times(n))).comparedTo(e);)i=n,n=o,u=l.plus(d.times(o=u)),l=o,t=c.minus(d.times(o=t)),c=o;return o=r(e.minus(i),n,0,1),l=l.plus(o.times(u)),i=i.plus(o.times(n)),l.s=u.s=w.s,h=r(u,n,a*=2,g).minus(w).abs().comparedTo(r(l,i,a,g).minus(w).abs())<1?[u,n]:[l,i],b=s,h},h.toNumber=function(){return+T(this)},h.toPrecision=function(e,t){return null!=e&&hl(e,1,cl),R(this,e,t,2)},h.toString=function(e){var t,r=this,n=r.s,o=r.e;return null===o?n?(t="Infinity",n<0&&(t="-"+t)):t="NaN":(null==e?t=o<=w||o>=m?fl(ul(r.c),o):gl(ul(r.c),o,"0"):10===e&&_?t=gl(ul((r=P(new A(r),f+o+1,g)).c),r.e,"0"):(hl(e,2,k.length,"Base"),t=i(gl(ul(r.c),o,"0"),10,e,n,!0)),n<0&&r.c[0]&&(t="-"+t)),t},h.valueOf=h.toJSON=function(){return T(this)},h._isBigNumber=!0,h[Symbol.toStringTag]="BigNumber",h[Symbol.for("nodejs.util.inspect.custom")]=h.valueOf,null!=t&&A.set(t),A}();const ml=wl;window.defaultWagmiConfig=function({projectId:e,chains:t,metadata:r,enableInjected:i,enableCoinbase:n,enableEmail:o,enableWalletConnect:a,enableEIP6963:s,...c}){const l=[],u=t.map((t=>[t.id,Xs({chainId:t.id,projectId:e})])),d=Object.fromEntries(u);var h;return!1!==a&&l.push(xc({projectId:e,metadata:r,showQrModal:!1})),!1!==i&&l.push(sc({shimDisconnect:!0})),!1!==n&&l.push(Ec({appName:r?.name??"Unknown",appLogoUrl:r?.icons[0]??"Unknown",enableMobileWalletLink:!0})),!0===o&&l.push((h={chains:[...t],options:{projectId:e}},e=>({id:Yn.EMAIL_CONNECTOR_ID,name:"Web3Modal Email",type:"w3mEmail",async connect(e={}){const t=await this.getProvider(),r=Bn.getPreferredAccountType(),[{address:i,chainId:n}]=await Promise.all([t.connect({chainId:e.chainId,preferredAccountType:r}),t.getSmartAccountEnabledNetworks()]);return{accounts:[i],account:i,chainId:n,chain:{id:n,unsuported:!1}}},async disconnect(){const e=await this.getProvider();await e.disconnect()},async getAccounts(){const t=await this.getProvider(),r=Bn.getPreferredAccountType(),{address:i}=await t.connect({preferredAccountType:r});return e.emitter.emit("change",{accounts:[i]}),[i]},async getProvider(){return this.provider||(this.provider=new Ln(h.options.projectId)),Promise.resolve(this.provider)},async getChainId(){const e=await this.getProvider(),{chainId:t}=await e.getChainId();return t},async isAuthorized(){const e=await this.getProvider(),{isConnected:t}=await e.isConnected();return t},async switchChain({chainId:t}){try{const r=e.chains.find((e=>e.id===t));if(!r)throw new H(new Error("chain not found on connector."));const i=await this.getProvider();return await i.switchNetwork(t),e.emitter.emit("change",{chainId:kc(t)}),r}catch(e){if(e instanceof Error)throw new H(e);throw e}},onAccountsChanged(t){0===t.length?this.onDisconnect():e.emitter.emit("change",{accounts:t.map(K.b)})},onChainChanged(t){const r=kc(t);e.emitter.emit("change",{chainId:r})},async onConnect(t){const r=kc(t.chainId),i=await this.getAccounts();e.emitter.emit("connect",{accounts:i,chainId:r})},async onDisconnect(e){const t=await this.getProvider();await t.disconnect()}}))),Cc({chains:t,multiInjectedProviderDiscovery:!1!==s,transports:d,...c,connectors:l})},window.createWeb3Modal=function(e){return new ec({...e,_sdkVersion:`html-wagmi-${Yn.VERSION}`})},window.getAccount=Q,window.reconnect=async function(e,t={}){if(_c)return[];_c=!0,e.setState((e=>({...e,status:e.current?"reconnecting":"connecting"})));const r=[];if(t.connectors?.length)for(const i of t.connectors){let t;t="function"==typeof i?e._internal.connectors.setup(i):i,r.push(t)}else r.push(...e.connectors);let i;try{i=await(e.storage?.getItem("recentConnectorId"))}catch{}const n={};for(const[,t]of e.state.connections)n[t.connector.id]=1;i&&(n[i]=0);const o=Object.keys(n).length>0?[...r].sort(((e,t)=>(n[e.id]??10)-(n[t.id]??10))):r;let a=!1;const s=[],c=[];for(const t of o){const r=await t.getProvider();if(!r)continue;if(c.some((e=>e===r)))continue;if(!await t.isAuthorized())continue;const i=await t.connect({isReconnecting:!0}).catch((()=>null));i&&(t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),e.setState((e=>{const r=new Map(a?e.connections:new Map).set(t.uid,{accounts:i.accounts,chainId:i.chainId,connector:t});return{...e,current:a?e.current:t.uid,connections:r}})),s.push({accounts:i.accounts,chainId:i.chainId,connector:t}),c.push(r),a=!0)}return"reconnecting"!==e.state.status&&"connecting"!==e.state.status||(a?e.setState((e=>({...e,status:"connected"}))):e.setState((e=>({...e,connections:new Map,current:void 0,status:"disconnected"})))),_c=!1,s},window.sendTransaction=async function(e,t){const{account:r,chainId:i,connector:n,gas:o,...a}=t;let s;s="object"==typeof r&&"local"===r.type?e.getClient({chainId:i}):await Y(e,{account:r,chainId:i,connector:n});const c=await(async()=>{if(null!==o)return void 0===o?v(s,Vc,"estimateGas")({...a,account:r,chain:i?{id:i}:null}):o})(),l=v(s,Yc,"sendTransaction");return await l({...a,...r?{account:r}:{},gas:c,chain:i?{id:i}:null})},window.polygon=Jc,window.BigNumber=ml})()})();