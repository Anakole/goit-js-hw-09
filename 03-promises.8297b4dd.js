!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(e.target.delay.value),t=Number(e.target.step.value),o=Number(e.target.amount.value),r=1;r<=o;r+=1)i(r,n).then(a).catch(u),n+=t}));var a=function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))},u=function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}}();
//# sourceMappingURL=03-promises.8297b4dd.js.map
