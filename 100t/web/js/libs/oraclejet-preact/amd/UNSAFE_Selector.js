define(['exports', 'preact/jsx-runtime', './utils/UNSAFE_classNames', './utils/UNSAFE_keys', './hooks/PRIVATE_useSelection', './hooks/UNSAFE_useTabbableMode', './PRIVATE_ThemedIcons/CheckboxOffIcon', './PRIVATE_ThemedIcons/CheckboxOnIcon', './PRIVATE_ThemedIcons/CheckboxMixedIcon', './UNSAFE_Flex', './hooks/UNSAFE_useComponentTheme', './hooks/UNSAFE_useInteractionStyle', './UNSAFE_Selector/themes/SelectorStyles.css', './UNSAFE_Radio/themes/redwood/RadioIconTheme', './classNames-c6cc4719', './PRIVATE_Icons/CheckboxMixed', './PRIVATE_Icons/CheckboxOn', './PRIVATE_Icons/CheckboxOff', './Flex-0a2755ad', 'preact/hooks', './utils/UNSAFE_arrayUtils', './hooks/UNSAFE_useUser', './index-7d808afa', 'preact', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'preact/compat', './utils/PRIVATE_collectionUtils', './utils/PRIVATE_clientHints', './clientHints-fbfc14a7', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-3096e431', './_curry1-5cea534a', './utils/UNSAFE_mergeInterpolations', './_curry3-f55dd1d6', './_curry2-c02a6898', './_has-de06828b', 'module', './utils/UNSAFE_interpolations/boxalignment', './keys-72d42d0f', './utils/UNSAFE_interpolations/flexbox', './flexbox-03b175aa', './utils/UNSAFE_interpolations/flexitem', './flexitem-f4d8540e', './utils/UNSAFE_logger', './utils/UNSAFE_mergeProps', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useActive', 'css!./SelectorStyles.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-6f6e2b8d', './UNSAFE_Radio/themes/RadioIconStyles.css', 'module', './UNSAFE_Radio/themes/redwood/RadioIconBaseTheme.css', 'module', './UNSAFE_Radio/themes/redwood/RadioIconVariants.css', 'module', './UNSAFE_Icon', './Icon-f27746d9', './hooks/UNSAFE_useTooltip', './hooks/UNSAFE_useId', './UNSAFE_Floating', './Floating-851238a6', './index-0f1e12db', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-a9754e48', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Layer', './useThemeInterpolations-710109a5', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-36a9a58b', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'module', './UNSAFE_Icon/themes/IconStyle.css', 'module'], (function(e,s,o,t,i,l,n,a,c,h,r,d,S,m,F,A,_,u,E,U,N,k,T,x,y,I,p,b,C,g,f,R,P,V,w,v,j,O,M,B,H,K,z,L,q,D,G,J,Q,W,X,Y,Z,$,ee,se,oe,te,ie,le,ne,ae,ce,he,re,de,Se,me,Fe,Ae,_e,ue,Ee,Ue,Ne,ke,Te,xe,ye,Ie,pe,be,Ce,ge,fe,Re,Pe,Ve,we,ve,je,Oe,Me,Be,He,Ke,ze,Le){"use strict";function qe(e){const{isTabbable:o}=l.useTabbableMode(),{interactionProps:t,applyActiveStyle:i}=d.useInteractionStyle(),{classes:n}=r.useComponentTheme(m.RadioIconRedwoodTheme,{iconSize:"4xUnits"}),a=S.multiVariantStyles({checked:e.checked?e.isPartial?"isPartiallyChecked":"isChecked":"notChecked",active:i?"isActive":"notActive"}),c=F.classNames([n,S.styles.checkbox,a]),h=e.checked?e.isPartial?"mixed":"true":"false";return s.jsx("div",{...t,class:c,tabIndex:o?0:-1,role:"checkbox","aria-label":e["aria-label"],"aria-checked":h,onClick:e.onClick,children:e.checked?e.isPartial?s.jsx(A.CheckboxMixed,{}):s.jsx(_.CheckboxOn,{}):s.jsx(u.CheckboxOff,{})})}const De=e=>{e.stopPropagation()},Ge=e=>{const s=e.onClick;return s?(e.onClick=e=>{s(e),De(e)},e):{onClick:De}};e.Checkbox=qe,e.Selector=function({"aria-label":e,rowKey:o,selectedKeys:l,isPartial:n,selectionMode:a="multiple",onChange:c}){const{selectionProps:h}=i.useSelection((()=>o),l,a,!1,"toggle",!1,c);return s.jsx("div",{class:S.styles.container,...Ge(h),children:s.jsx("div",{class:S.styles.base,children:s.jsx(E.Flex,{align:"center",justify:"center",width:"11x",height:"11x",children:s.jsx(qe,{checked:t.containsKey(l,o),"aria-label":e,isPartial:n})})})})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_Selector.js.map
