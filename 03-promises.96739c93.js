!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var u=o("iU1Pc"),i=document.querySelector(".form"),a=0;function c(n,t){new Promise((function(e,r){var o=Math.random()>.3;setTimeout((function(){o?e("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")):r("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)})).then((function(n){return e(u).Notify.success(n)})).catch((function(n){return e(u).Notify.failure(n)}))}i.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements;delay=Number(n.delay.value),a=Number(n.step.value),amount=Number(n.amount.value);for(var t=delay,r=1;r<=amount;r+=1)c(r,t),t+=a}))}();
//# sourceMappingURL=03-promises.96739c93.js.map
