!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,f=setTimeout(T,t),s?p(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=b();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?p(e):(r=o=void 0,u)}function w(){var e=b(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(T,t),p(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(b())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),S=e(t)((function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message,i={email:n.value,message:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(i))}),500);O.addEventListener("input",S);var T=document.querySelector(".feedback-form"),h=T.elements,w=h.email,x=h.message,N=localStorage.getItem("feedback-form-state");if(N){var k=JSON.parse(N);w.value=k.email,x.value=k.message}T.addEventListener("submit",(function(e){e.preventDefault();var t={email:w.value,message:x.value};console.log(t),localStorage.removeItem("feedback-form-state"),w.value="",x.value=""}))}();
//# sourceMappingURL=03-feedback.52f7c75b.js.map
