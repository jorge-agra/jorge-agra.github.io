define(['exports', 'preact/jsx-runtime', 'preact/hooks', './utils/PRIVATE_collectionUtils', './utils/UNSAFE_mergeProps', './utils/UNSAFE_classNames', './hooks/PRIVATE_useCollectionFocusRing', './hooks/PRIVATE_useCurrentKey', './UNSAFE_Flex', './hooks/UNSAFE_useUser', './UNSAFE_TabBar/themes/TabBarStyles.css', './classNames-c6cc4719', './Flex-0a2755ad', './hooks/UNSAFE_usePress', './UNSAFE_Text', 'preact', './utils/UNSAFE_mergeInterpolations', './utils/UNSAFE_interpolations/flexitem', './hooks/UNSAFE_useComponentTheme', './UNSAFE_TabBar/themes/redwood/TabBarItemTheme', './flexitem-f4d8540e', './Text-4733b962'], (function(e,t,s,r,n,o,c,a,l,i,u,d,m,h,x,f,g,b,y,F,A,E){"use strict";const N=f.createContext(null);const p="oj-c-tabbar-item";e.TabBar=function({children:e,layout:o="stretch",selection:l,onSelectionChange:h}){const x=s.useRef(null),f=s.useRef(!1),[g,b]=s.useState(l),[y,F]=c.useCollectionFocusRing((e=>!!x.current?.contains(e)),["ArrowRight","ArrowLeft"]),A=".oj-c-tabbar-item",{currentKeyProps:E}=a.useCurrentKey((e=>r.keyExtractor(e,A)),!1,void 0,void 0,r.getPrevNextKey(x.current,g,!0,A),r.getPrevNextKey(x.current,g,!1,A),g,(e=>b(e.value))),{direction:p}=i.useUser(),C="rtl"===p,S={onKeyDown:s.useCallback((e=>{if(void 0===g&&("ArrowRight"===e.key||!C&&"ArrowLeft"===e.key)){const t=e.target.getAttribute("data-oj-key");if(t){const e=r.getPrevNextKey(x.current,t,!1,A)();null!==e&&b(e)}}}),[g])};s.useEffect((()=>{f.current=!1}));const R=s.useCallback((()=>!!x?.current?.contains(document.activeElement)),[]),v=d.classNames([u.styles.tabBarBase]);return t.jsx(N.Provider,{value:{selection:l,onSelectionChange:h,currentKey:g,showFocusRing:y,layout:o,isActiveElement:R,isFirstItemRendered:f},children:t.jsx("div",{class:v,role:"tablist",ref:x,tabIndex:e?-1:0,"aria-multiselectable":!1,...n.mergeProps(S,E,F),children:t.jsx(m.Flex,{direction:"row",gap:"8x",children:e})})})},e.TabBarItem=function({itemKey:e,label:r,startContent:n,endContent:o}){const c=s.useRef(null),{onSelectionChange:a,selection:l,currentKey:i,showFocusRing:u,layout:x,isActiveElement:f,isFirstItemRendered:b}=s.useContext(N),C=i===e;let S=C?0:-1;void 0===i&&b&&!b.current&&(S=0,b.current=!0);const{pressProps:R}=h.usePress((()=>{a?.({value:e})})),v=l===e;s.useLayoutEffect((()=>{f?.()&&C&&c?.current?.focus()}),[C,f]);const{classes:T,styles:{tabBarItemStartContent:j,tabBarItemEndContent:I}}=y.useComponentTheme(F.TabBarItemRedwoodTheme,{selection:v?"isSelected":"notSelected",current:C?"isCurrent":"notCurrent",focusRing:u?"showFocusRing":"noFocusRing"}),U=d.classNames([T,p]),_=d.classNames([j]),k=d.classNames([I]),w=g.mergeInterpolations([...Object.values(A.flexitemInterpolations)])({flex:"stretch"===x?"1 0 auto":"0 0 auto"});return t.jsx("div",{"data-oj-key":e,class:U,role:"tab",ref:c,...R,"aria-selected":v,tabIndex:S,style:w,children:t.jsxs(m.Flex,{height:"11x",minWidth:"14x",direction:"row",gap:"2x",align:"center",justify:"center",flex:"1 1 auto",children:[n&&t.jsx("span",{class:_,children:n}),r&&t.jsx(E.Text,{size:"md",weight:"semiBold",children:r}),o&&t.jsx("span",{class:k,children:o})]})})}}));
//# sourceMappingURL=TabBarItem-83fed655.js.map
