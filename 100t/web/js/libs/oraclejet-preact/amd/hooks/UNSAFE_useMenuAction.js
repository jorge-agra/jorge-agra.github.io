define(['exports', 'preact/hooks'], (function(e,n){"use strict";e.useMenuAction=function({isDisabled:e,isMenuOpen:o,onToggleMenu:s,anchorRef:r}){const[t,a]=n.useState("menu"),u=n.useCallback((e=>{"keyboard"===e.reason?a("firstItem"):a("menu"),s?.({value:!o})}),[s,o,a]),i=n.useCallback((e=>{"outsideClick"===e.reason&&e.target===r.current||("dismissed"!==e.reason&&"itemAction"!==e.reason||r.current?.focus(),s?.({value:!1}))}),[s,r]);return{triggerProps:e?{}:{onAction:u,"aria-haspopup":"true","aria-expanded":o},menuProps:{anchorRef:r,isOpen:o,onClose:i,initialFocus:t}}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useMenuAction.js.map
