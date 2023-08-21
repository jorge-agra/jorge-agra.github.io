define(['exports', './UNSAFE_dvtCommonUtils'], (function(t,e){"use strict";function n(t,e){if(!e)return;if(t<=e[0].max)return e[0];let n=e[0].max;for(let r=1;r<e.length;r++){if(n<t&&t<=e[r].max)return e[r];n=e[r].max}}function r(t,n,r){return"track"===t&&n?.color?e.getDvtThresholdColor(n?.color):r}function o(t,n,r){return n?.color&&"indicator"===t?e.getDvtThresholdColor(n.color):r}function a(t){return t*Math.PI/180}function i(t){return(t+360)%360}function l(t,e,n){switch(n){case"top":e*=2;break;case"bottom":e=2*e-1;break;case"left":t*=2;break;case"right":t=2*t-1}return{x:t,y:e}}function u(t,e){let n,r;return(t=i(t))<45?(r=.5-.5*Math.tan(a(t)),n=1):t<135?(n=t<90?.5+.5*Math.tan(a(90-t)):.5-.5*Math.tan(a(t-90)),r=0):t<225?(r=t<180?.5-.5*Math.tan(a(180-t)):.5+.5*Math.tan(a(t-180)),n=0):t<315?(n=t<270?.5-.5*Math.tan(a(270-t)):.5+.5*Math.tan(a(t-270)),r=1):(n=1,r=.5+.5*Math.tan(a(360-t))),l(n,r,e)}function c(t){return l(.5,.5,t)}function f(t){return t<=180}function h(t){return t<=90||t>=270}function s(t){return t>=90&&t<=270}function d(t){return t>=180||0===t}function g(t){return 50*Math.tan(2*t*Math.PI)}t.convertToPolar=function(t,e,n,r){return{radius:Math.sqrt((n-t)**2+(r-e)**2),angle:180*Math.atan2(e-r,n-t)/Math.PI}},t.findThreshold=n,t.getCenterCoord=c,t.getCircleSection=function(t,e,n){if(e>180)return"full";const r=i(t+(n?.5:-.5)*e),o=i(t+(n?1:-1)*e);return f(t)&&f(r)&&f(o)?"top":h(t)&&h(r)&&h(o)?"right":s(t)&&s(r)&&s(o)?"left":d(t)&&d(r)&&d(o)?"bottom":"full"},t.getClipPath=function(t,e,n,r){let o=n?t+e:t;const a=u(o,r);let i,l,f=`${100*a.x}% ${100*a.y}%`;do{i=Math.max(o-e,45*(Math.ceil(o/45)-1)),l=u(i,r),f+=`, ${100*l.x}% ${100*l.y}%`,e-=o-i,o=i}while(i>o-e);const h=c(r);return`polygon(${f}, ${100*h.x}% ${100*h.y}%)`},t.getMeterAriaProps=function(t,e,r,o,a,i,l,u,c){const f=n(t,i);return{"aria-label":o||(c&&u&&!l?c:void 0),"aria-valuenow":t,"aria-valuemin":e,"aria-valuetext":f?.accessibleLabel?`${t} ${f.accessibleLabel}`:`${t}`,"aria-valuemax":r,"aria-labelledby":a,"aria-disabled":!!l||void 0,"aria-readonly":!(!u||l)||void 0,role:"slider"}},t.getPositiveAngle=i,t.getProgressClipPath=function(t){let e;return t<.125?(e=g(t)+50,`polygon(50% 0, ${e}% 0, 50% 50%)`):t<.375?(e=t<.25?50-g(.25-t):g(t-.25)+50,`polygon(50% 0, 100% 0, 100% ${e}%, 50% 50%)`):t<.625?(e=t<.5?50+g(.5-t):50-g(t-.5),`polygon(50% 0, 100% 0, 100% 100%, ${e}% 100%, 50% 50%)`):t<.875?(e=t<.75?50+g(.75-t):50-g(t-.75),`polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0% ${e}%, 50% 50%)`):(e=50-g(1-t),`polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0% 0%, ${e}% 0%, 50% 50%)`)},t.getThresholdColorFromValue=function(t,e,r){const o=n(t,r);return o?.color?o?.color:e},t.getTrackAndIndicatorColor=function(t,e,a,i,l){const u=n(t,l);return{trackColor:r(e,u,a),indicatorColor:o(e,u,i)}},t.validateRange=function(t,e,n,r){if(t>e)throw new RangeError("The min must be lower or equal to max.");if(n<t||n>e)throw new RangeError("The value must be between min and max.");if(r>e-t)throw new RangeError("The step value must be less than the difference of max and min")},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=PRIVATE_meterUtils.js.map
