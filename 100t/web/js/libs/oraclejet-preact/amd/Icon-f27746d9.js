define(['exports', 'preact/jsx-runtime', 'preact', './utils/UNSAFE_size', './hooks/UNSAFE_useTooltip', './UNSAFE_Icon/themes/IconStyle.css'], (function(e,s,o,l,t,c){"use strict";const i=({accessibleLabel:e,...o})=>e?s.jsx(r,{accessibleLabel:e,...o}):s.jsx(n,{...o}),n=e=>s.jsx("svg",{...e}),r=({accessibleLabel:e,children:l,...c})=>{const{tooltipContent:i,tooltipProps:{onFocus:n,onBlur:r,...a}}=t.useTooltip({text:e,anchor:{x:"element",y:"element"}});return s.jsxs(o.Fragment,{children:[s.jsx("svg",{role:"img",...c,...a,"aria-label":e,children:l}),i]})};e.Icon=({size:e="1em",color:o="currentColor",accessibleLabel:t="",viewBox:n="none",children:r})=>s.jsx(i,{height:"1em",width:"1em",viewBox:n,accessibleLabel:t,class:c.styles[o],style:{fontSize:"1em"===e?e:`${l.sizeToCSS(e)}`},children:r})}));
//# sourceMappingURL=Icon-f27746d9.js.map
