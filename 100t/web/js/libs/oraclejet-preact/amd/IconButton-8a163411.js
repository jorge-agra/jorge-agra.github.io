define(['exports', 'preact/jsx-runtime', 'preact', './UNSAFE_BaseButton', './UNSAFE_ButtonLayout', 'preact/compat', './hooks/UNSAFE_useTooltip', './BaseButton-ff511180', './ButtonLayout-78784b76'], (function(t,o,e,i,a,s,n,r,u){"use strict";const c=s.forwardRef((({variant:t="outlined",isDisabled:i=!1,isRepeat:a=!1,size:s="md",autofocus:c,onAction:l,tooltip:d,"aria-label":p,"aria-describedby":B,...b},f)=>{const{tooltipContent:y,tooltipProps:x}=n.useTooltip({text:d||p});return o.jsxs(e.Fragment,{children:[o.jsx(r.BaseButton,{...x,ref:f,isDisabled:i,isRepeat:a,size:s,autofocus:c,variant:t,styling:["min"],onAction:l,"aria-describedby":B,"aria-label":p??d,children:o.jsx(u.ButtonLayout,{display:"icons",startIcon:b.children,size:s})}),y]})}));t.IconButton=c}));
//# sourceMappingURL=IconButton-8a163411.js.map