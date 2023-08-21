define(['exports', 'preact/jsx-runtime', './UNSAFE_ButtonLayout', './PRIVATE_ThemedIcons/ChevronDownIcon', './UNSAFE_Menu', './hooks/UNSAFE_useMenuAction', './hooks/UNSAFE_useTooltip', './UNSAFE_BaseButton', 'preact', 'preact/compat', 'preact/hooks', './utils/UNSAFE_mergeProps', './BaseButton-ff511180', './ButtonLayout-78784b76', './index-f84f6993', './Menu-cd3b6c2e'], (function(e,n,t,o,s,i,r,a,u,c,l,d,p,h,b,g){"use strict";const m=c.forwardRef((({children:e,tooltip:t,accessibleLabel:o,variant:s="outlined",isDisabled:a=!1,isMenuOpen:c=!1,isIconOnly:m=!1,onToggleMenu:f,size:x="md",width:B,icon:M,"aria-describedby":A},y)=>{const F=l.useRef(null);l.useImperativeHandle(y,(()=>F.current),[F]);const{triggerProps:I,menuProps:j}=i.useMenuAction({isDisabled:a,onToggleMenu:f,isMenuOpen:c,anchorRef:F}),{tooltipContent:v,tooltipProps:E}=r.useTooltip({text:t||o,isDisabled:c}),S=n.jsx(u.Fragment,{children:n.jsxs(p.BaseButton,{...d.mergeProps(E,I),styling:c?["min","active"]:["min"],isDisabled:a,variant:s,width:B,size:x,ref:F,"aria-describedby":A,"aria-label":o??t,children:[n.jsx(h.ButtonLayout,{display:"icons",startIcon:M,endIcon:m?null:n.jsx(b.SvgChevronDown,{}),size:x}),v]})});return a?S:n.jsxs(u.Fragment,{children:[S,n.jsx(g.Menu,{...j,children:e})]})}));e.IconMenuButton=m}));
//# sourceMappingURL=IconMenuButton-b69e38a4.js.map