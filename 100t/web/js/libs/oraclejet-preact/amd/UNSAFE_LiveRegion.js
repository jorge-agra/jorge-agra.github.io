define(['exports', 'preact/jsx-runtime', 'css!./UNSAFE_LiveRegion.css', 'preact/hooks'], (function(e,t,i,n){"use strict";const a="v0dk3g";e.LiveRegion=function({atomic:e="false",children:i="",timeout:c=100,type:s="polite"}){const o=function(e,t){const[i,a]=n.useState(""),c=n.useCallback((()=>a(e)),[e]),s=n.useCallback((()=>setTimeout(c,t)),[c,t]);return n.useEffect((()=>{const e=s();return()=>clearTimeout(e)}),[s]),i}(i,c);return t.jsx("span",{"aria-live":s,"aria-atomic":e,class:a,children:o})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_LiveRegion.js.map