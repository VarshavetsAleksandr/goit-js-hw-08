var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var i,o,r,a,u,f,l=0,c=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,u=setTimeout(h,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-l>=r}function h(){var e=m();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return v?d(n,r-(e-l)):n}(e))}function w(e){return u=void 0,y&&i?b(e):(i=o=void 0,a)}function O(){var e=m(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(v)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=g(t)||0,p(n)&&(c=!!n.leading,r=(v="maxWait"in n)?s(g(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(m())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),message:document.querySelector("textarea")};let b={};y.form.addEventListener("input",t((function(e){b[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),function(){const e=localStorage.getItem("feedback-form-state");e&&(b=JSON.parse(e),y.input.value=b.email||"",y.message.value=b.message||"")}(),y.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===y.input.value||""===y.message.value)return void alert("Please, fill in all fields");localStorage.removeItem("feedback-form-state"),console.log({email:y.input.value,message:y.message.value}),y.form.reset(),b={}}));
//# sourceMappingURL=03-feedback.e453ec1e.js.map
