function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const i=document.querySelector(".form");let l=0,a=0;function s(t,n){new Promise(((e,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?e(`✅ Fulfilled promise ${t} in ${n}ms`):o(`❌ Rejected promise ${t} in ${n}ms`)}),n)})).then((t=>e(u).Notify.success(t))).catch((t=>e(u).Notify.failure(t)))}i.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements;l=Number(t.delay.value),a=Number(t.step.value),amount=Number(t.amount.value);let n=l;for(let e=1;e<=amount;e+=1)s(e,n),n+=a}));
//# sourceMappingURL=03-promises.3e973be4.js.map
