define(['exports', 'preact/hooks', '../utils/PRIVATE_clientHints', '../clientHints-fbfc14a7'], (function(e,n,t,u){"use strict";e.useTextFieldInputHandlers=function({currentCommitValue:e,value:t,onInput:o,onCommit:l,onKeyDown:r}){const a=n.useRef(!1),[,s]=n.useReducer((e=>e+1),0),c=n.useCallback((n=>{const t=n.target.value;e!==t&&l?.({previousValue:e,value:t})}),[l,e]),i=n.useCallback((e=>{r?.(e),"Enter"===e.key&&c(e)}),[c,r]),p=n.useCallback((()=>{a.current=!0}),[]),d=n.useCallback((e=>{a.current=!1,f(e)}),[]),f=n.useCallback((e=>{if(a.current&&"android"!==u.getClientHints().platform)return;const n=e.target.value;t!==n&&(o?.({previousValue:t,value:n}),s(null))}),[t,o]);return{onBlur:c,onKeyDown:i,oncompositionstart:p,oncompositionend:d,onInput:f}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useTextFieldInputHandlers.js.map
