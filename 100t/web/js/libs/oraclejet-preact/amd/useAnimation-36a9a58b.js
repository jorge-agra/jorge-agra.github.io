define(['exports', 'preact/hooks'], (function(t,n){"use strict";function e(t){if(!t)return{};const{translateX:n,translateY:e,translateZ:r,rotateX:c,rotateY:s,rotateZ:u,scaleX:o,scaleY:a,scaleZ:i,skewX:f,skewY:l,...$}=t,d=`${t.transform||""}${function(t,n,e){return`${t?` translateX(${t})`:""}${n?` translateY(${n})`:""}${e?` translateZ(${e})`:""}`}(n,e,r)}${function(t,n,e){return`${t?` rotateX(${t})`:""}${n?` rotateY(${n})`:""}${e?` rotateZ(${e})`:""}`}(c,s,u)}${function(t,n,e){return`${t||0===t?` scaleX(${t})`:""}${n||0===n?` scaleY(${n})`:""}${e||0===e?` scaleZ(${e})`:""}`}(o,a,i)}${function(t,n){return`${t?` skewX(${t})`:""}${n?` skewY(${n})`:""}`}(f,l)}`;return{...$,...d&&{transform:d}}}function r(t){if(!t)return{};const{offset:n,...r}=e(t);return{...r,...n&&{cssOffset:n}}}t.useAnimation=function(t,{animationStates:c,isAnimatedOnMount:s=!1,onAnimationEnd:u=(()=>{})}){const o=n.useRef(!1),a=n.useRef(null),i=n.useRef(),f=n.useRef(),l=n.useRef(c);n.useEffect((()=>{if(i.current===t)return;const n=i.current;var c,$,d;i.current=t,"running"===f.current?.playState&&(c=f.current,$=a.current,d=$,(d?.offsetWidth||d?.offsetHeight||d?.getClientRects().length)&&c.commitStyles(),c.cancel());const m=a.current;if(!m)return;if(!o.current&&(o.current=!0,!s))return;const g=function(t,n,e,r){const c=t[`${r} => ${e}`]||t[e],s="function"==typeof c?c(n):c;return s&&Object.keys(s).length>0?s:null}(l.current,m,t,n);g&&(f.current=function(t,n,c,s){const{delay:u,duration:o,easing:a}=t.options||{},i={delay:u||0,duration:o||400,easing:a?"string"==typeof a?a:`cubic-bezier(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`:"ease"},f=n.animate([r(t.from),r(t.to)],{...i});return f.onfinish=()=>{!function(t,n,r){const c=n?{...e(r.to),...e(r.end)}:e(r.end);for(const n in c)t.style[n]=c[n]}(n,!0,t),s?.({animationState:c})},f}(g,m,t,u))}),[t,s,u]);const $=n.useCallback((()=>{const t=f.current;"running"===t?.playState&&t.cancel()}),[]);return{nodeRef:n.useCallback((t=>{t!=a.current&&(a.current&&(f.current?.cancel(),f.current=void 0),a.current=t)}),[]),controller:{cancel:$}}}}));
//# sourceMappingURL=useAnimation-36a9a58b.js.map
