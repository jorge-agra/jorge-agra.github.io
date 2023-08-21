define(['exports', 'preact/jsx-runtime', 'preact/hooks', './utils/UNSAFE_classNames', './UNSAFE_SvgShapes', './UNSAFE_Legend/themes/LegendStyles.css', './UNSAFE_Text', './classNames-c6cc4719', './Text-4733b962', 'preact/compat', './hooks/UNSAFE_useUser', './utils/UNSAFE_mergeProps', './hooks/UNSAFE_useTooltip', './UNSAFE_Flex', './Flex-0a2755ad', 'module', 'css!./LegendStyles.styles.css', './utils/UNSAFE_mergeInterpolations', './_curry1-5cea534a', './_curry3-f55dd1d6', './_curry2-c02a6898', './_has-de06828b', './UNSAFE_Text/themes/TextStyles.css', 'module', './vanilla-extract-recipes-createRuntimeFn.esm-6f6e2b8d', './index-7d808afa', 'preact', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', './hooks/UNSAFE_useId', './UNSAFE_Floating', './Floating-851238a6', './index-0f1e12db', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './utils/UNSAFE_arrayUtils', './hooks/UNSAFE_useComponentTheme', './utils/UNSAFE_logger', './utils-3096e431', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-a9754e48', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Layer', './useThemeInterpolations-710109a5', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './UNSAFE_Theme', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-36a9a58b', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'module', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_size', './utils/UNSAFE_interpolations/boxalignment', './keys-72d42d0f', './utils/UNSAFE_interpolations/flexbox', './flexbox-03b175aa', './utils/UNSAFE_interpolations/flexitem', './flexitem-f4d8540e'], (function(e,t,i,o,n,s,r,l,d,a,c,u,m,h,I,f,g,x,p,S,F,y,C,b,R,A,N,v,E,w,T,U,_,k,P,W,j,V,L,D,M,B,H,z,O,$,q,K,G,J,Q,X,Y,Z,ee,te,ie,oe,ne,se,re,le,de,ae,ce,ue,me,he,Ie,fe,ge,xe,pe,Se,Fe,ye,Ce,be){"use strict";function Re(e){const{imageMarkerStyle:i}=s.styles;return t.jsx("img",{class:i,src:e.source})}const Ae=({markerColor:e="#a6acb1",lineColor:i="#a6acb1",markerShape:o="square",isHidden:r=!1,lineStyle:l="none",...d})=>{const{legendSymbolBaseStyle:a}=s.styles,c=!(null==d.width&&null==d.height)&&("rectangle"===o||"ellipse"===o);return t.jsx("div",{className:a,style:{width:d.width,height:d.height},children:d.source?t.jsx(Re,{source:d.source}):t.jsx(n.SvgSymbol,{setAspectRatioNone:c,markerShape:r?"square":o,lineStyle:r?"none":l,lineColor:i,lineWidth:d.lineWidth,markerColor:r?"transparent":e,borderColor:r?e||i:d.borderColor})})},Ne=({text:e,type:i="label",id:o,align:n="start",...r})=>{const{legendTextBaseStyle:a,legendTextTitle:c,legendTitleStartAlign:u,legendTitleCenterAlign:m,legendTitleEndAlign:h}=s.styles,I="title"===i;return t.jsx("div",{class:l.classNames([a,I?c:"",I&&"start"===n?u:"",I&&"center"===n?m:"",I&&"end"===n?h:""]),style:{...r},children:t.jsx(d.Text,{size:"inherit",variant:"inherit",weight:"inherit",truncation:"ellipsis",id:o,children:e})})},ve=a.forwardRef((({id:e,text:i,sectionIdx:o,itemIdx:n,isHighlighted:r,symbolHeight:d,symbolWidth:a,isFocused:c,isCurrent:u,isHidden:m,...h},I)=>{const f={fontFamily:h.textFontFamily,fontSize:h.textFontSize,color:h.textColor,fontStyle:h.textFontStyle,fontWeight:h.textFontWeight,textDecoration:h.textTextDecoration},g={lineStyle:h.lineStyle,lineWidth:h.lineWidth,markerShape:h.markerShape,markerColor:h.markerColor,source:h.source,borderColor:h.borderColor,lineColor:h.lineColor},x=r||null==r,{legendItemBaseStyle:p,legendItemIsCurrent:S,legendItemOpacity:F,legendItemFocusRing:y}=s.styles;return t.jsxs("div",{class:l.classNames([p,u&&null==r?S:"",x?"":F,c?y:"",h.class]),style:{gridRow:h.gridRow,gridColumn:h.gridCol,minWidth:void 0!==h.minWidth?`${h.minWidth}px`:void 0},id:e,ref:I,"data-oj-section":o,"data-oj-item":n,"aria-labelledby":h.labelledBy,role:null!=m?"menuitemcheckbox":"img","aria-checked":null!=m?!m:void 0,"aria-label":h["aria-label"]||i,children:[t.jsx(Ae,{...g,isHidden:m,width:null!=a?`${a}px`:void 0,height:null!=d?`${d}px`:void 0}),t.jsx(Ne,{...f,text:i,type:"label"})]})})),Ee=e=>{const t=e.dataset.ojItem,i=e.dataset.ojSection;if(null!=t&&null!=i)return{itemIdx:Number(t),sectionIdx:Number(i)}};function we(e,t){if(t)return 0===t.length||new Set(t).has(e)}function Te(e,t){if(t)return new Set(t).has(e)}const Ue=(e,t,i)=>{if(!e.isFocusVisible)return!1;const{itemIdx:o,sectionIdx:n}=e;return null==i?o===t:o===t&&n===i};function _e(e,t,i,o){const n=o?.isCurrent;return n&&null!=o.itemIdx?t(o,e)?.datatip:i&&i.isCurrent?t(i,e)?.datatip:void 0}function ke(e,t,i){return{"aria-label":t,"aria-disabled":e,role:i&&!e?"menu":"application"}}function Pe(){return`_${Math.random().toString(36).slice(2)}`}const We=(e,t)=>e?.itemIdx===t?.itemIdx&&e?.sectionIdx===t?.sectionIdx,je=(e,t)=>{let i,o;return t?.isWrapped&&(i=t.itemsPerRow,o=Math.ceil(e/i),i=Math.ceil(e/o)),{itemsPerRow:i,itemsPerCol:o}};const Ve=({orientation:e="horizontal",highlightedIds:i,hiddenIds:o,focusedItemInfo:n,hoveredItemInfo:r,sectionIdx:d,activeId:a,isReadOnly:c,items:u,symbolHeight:m,symbolWidth:h,...I})=>{const f="horizontal"===e,g=I.isColumnWidthValidRef.current,x=g&&f?`repeat(${I.itemsPerRow}, ${I.itemWidth})`:void 0;I.isColumnWidthValidRef.current=!1;const{baseLegendStyles:p,baseLegendHorizontal:S,baseLegendVertical:F,baseLegendVerticalItem:y,baseLegendPaddingBottom:C,baseLegendPaddingTop:b,baseLegendPaddingEnd:R}=s.styles;return t.jsx("div",{className:l.classNames([p,f?S:F]),style:{gridTemplateColumns:x,maxWidth:g?"100%":""},children:u.map(((e,s)=>{const g=function(e,t,i,o,n,s,r,l){let d=!1;if(!n){const e=t===o.itemIdx&&i===o.sectionIdx,n=t===s?.itemIdx&&i===s?.sectionIdx;d=!!(e&&o.isCurrent||n&&s?.isCurrent)}return{isCurrent:d,isHighlighted:we(e.id,l),isHidden:Te(e.id,r),isFocused:Ue(o,t,i),key:e.id,...e}}(e,s,d,n,c,r,o,i),x=n.sectionIdx===d&&n.itemIdx===s,{gridRow:p,gridCol:S}=function(e,t,i,o){let n,s;return i&&o&&e>i&&(n=t%o+1,s=Math.floor(t/o)+1),{gridRow:n,gridCol:s}}(u.length,s,I.itemsPerRow,I.itemsPerCol),F=null!=p&&p!=I.itemsPerCol,A=null!=p&&1!=p;return t.jsx(ve,{ref:x?I.focusedItemRef:void 0,itemIdx:s,sectionIdx:d,symbolHeight:m,symbolWidth:h,...I,...g,gridRow:p,gridCol:S,minWidth:I.itemWidth,id:g.isCurrent?a:"",class:l.classNames([f?"":y,A?b:"",F?C:"",R])})}))})};function Le(e,t,o,n,s,r,l){const[d,a]=i.useState({itemIdx:0,sectionIdx:0}),[u,m]=i.useState(),h=i.useRef(),{direction:I}=c.useUser(),f="rtl"===I,g=t=>{const i=Ee(t.target);We(i,u)||(m(i&&{...i,isCurrent:!0}),h.current=Pe(),e&&(d&&a({...d,isCurrent:!1}),l?.(o(i))))},x=()=>{m(void 0),h.current=void 0,e&&l?.(o())};if(!e)return{focusedItemInfo:d,hoveredItemInfo:u,onPointerLeave:x,onPointerMove:g};const p=e=>{l?.(o(e)),h.current=Pe(),a(e)},S=e=>{We(e,d)||(e.isCurrent=!0,e.isFocusVisible=!0,u&&m({...u,isCurrent:!1}),p(e))},F=()=>{const{sectionId:e,itemId:t}=o(d);null!=t&&(r?.({sectionId:e,itemId:t}),h.current=Pe())};return{focusedItemInfo:d,hoveredItemInfo:u,"aria-activedescendant":h.current,onPointerUp:e=>{const t=Ee(e.target);if(null!=t){a(t);const{sectionId:e,itemId:i}=o(t);null!=i&&(r?.({sectionId:e,itemId:i}),h.current=Pe())}},onPointerMove:g,onKeyUp:e=>{switch(e.code){case"Space":t&&F();break;case"Enter":F();break;case"Home":p({itemIdx:0,sectionIdx:0,isFocusVisible:!0,isCurrent:!0});break;case"End":p({itemIdx:-1,sectionIdx:-1,isCurrent:!0,isFocusVisible:!0});break;case"Tab":p({...d,isCurrent:!0,isFocusVisible:!0})}},onKeyDown:e=>{switch(e.key){case"Tab":return;case"ArrowDown":{const e=s(d);S(e);break}case"ArrowUp":{const e=n(d);S(e);break}case"ArrowRight":{const e=f?n(d):s(d);S(e);break}case"ArrowLeft":{const e=f?s(d):n(d);S(e);break}}(e=>{e.preventDefault(),e.stopPropagation()})(e)},onPointerLeave:x,onBlur:()=>{const e={...d,isCurrent:!1,isFocusVisible:!1};(null!=u||d.isCurrent)&&l?.(o(void 0)),a(e)}}}function De(e,t){const{itemIdx:i}=e;return-1==i?t[t.length-1]:t[i]}function Me(e){return{getItem:t=>De(t,e),getDetailFromInfo:t=>{if(!t)return{itemId:void 0};return{itemId:De(t,e).id}},getPrevItemInfo:t=>function(e,t){let i=e.itemIdx;return-1==e.itemIdx&&(i=t.length-1),i=Math.max(0,i-1),{sectionIdx:0,itemIdx:i}}(t,e),getNextItemInfo:t=>function(e,t){let i=e.itemIdx;return-1==e.itemIdx&&(i=t.length-1),i=Math.min(t.length-1,i+1),{sectionIdx:0,itemIdx:i}}(t,e)}}const Be=(e,t,i,o)=>{let n=0,s=8;if(e.current&&i.isCurrent&&t.current){const i=t.current,r=e.current.getBoundingClientRect();n=r.x+r.width/2-(i.x+i.width/2),n=o?-1*n:n,s+=i.y-r.y,s=Math.min(8,Math.max(s,r.height-i.height+8))}return{crossAxis:n,mainAxis:s}},He=({text:e,rootDimsRef:t,focusedItemRef:o,focusedItemInfo:n})=>{const{direction:s}=c.useUser(),r="rtl"===s,[l,d]=i.useState(Be(o,t,n,r)),[a,u]=i.useState(!1);i.useLayoutEffect((()=>{d(Be(o,t,n,r))}),[n]);const h=n?.isCurrent?"element":"pointer",{tooltipContent:I,tooltipProps:f}=m.useTooltipControlled({text:e,position:"top",isDisabled:!1,variant:"datatip",anchor:{x:h,y:h},offset:l,isOpen:a,onToggle:({value:e})=>u(e)});return{tooltipContent:I,tooltipProps:f}};function ze(e){const t=i.useRef(null);return i.useEffect((()=>{e.isFocusVisible&&t.current?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}),[e]),{focusedItemRef:t}}const Oe=function(e,t){return e.length===t.length&&e.every(((i,o)=>i.isWrapped===t[o].isWrapped&&i.maxItemWidth===t[o].maxItemWidth&&e[o].itemsPerRow===t[o].itemsPerRow))},$e=e=>{let t=0;return[...e.children].forEach((e=>{const i=e;t=Math.max(t,Math.ceil(i.getBoundingClientRect().width))})),t};function qe({items:e,rootRef:t,rootDimsRef:o,isSectional:n=!1,orientation:s}){const[r,l]=i.useState([]),d=i.useRef(!1),a=i.useRef(s);return i.useLayoutEffect((()=>{if(!t.current)return;o.current=t.current.getBoundingClientRect(),a.current=s;const e=[];[...(n?t.current.children[0]:t.current).children].forEach((t=>{const i=t.getBoundingClientRect().width,s=n?t.children[t.childElementCount-1]:t;let r=i>o.current?.width;s.childElementCount>0&&i===o.current?.width&&(r=s.children[s.childElementCount-1].offsetTop>t.offsetTop);const l=$e(s);e.push({maxItemWidth:Math.min(l,o.current?.width),itemsPerRow:Math.max(1,Math.floor(o.current?.width/l)),isWrapped:r})})),Oe(r,e)||(d.current=!0,l(e))}),[e,s]),{layoutInfo:a.current!=s?[]:r,isColumnWidthValidRef:d}}function Ke(e,t){const{sectionIdx:i,itemIdx:o}=e;if(-1==i&&-1==o){const e=t[t.length-1].items.length;return t[t.length-1].items[e-1]}return t[i].items[o]}function Ge(e){return{getItem:t=>Ke(t,e),getDetailFromInfo:t=>{if(!t)return{itemId:void 0,sectionId:void 0};const i=Ke(t,e),o=e[t.sectionIdx].id;return{itemId:i.id,sectionId:o}},getPrevItemInfo:t=>function(e,t){let{itemIdx:i,sectionIdx:o}=e;return-1==o&&-1==i&&(i=t[t.length-1].items.length-1,o=t.length-1),i-=1,i<0&&(0===o?i=0:(i=t[o-1].items.length-1,o-=1)),{itemIdx:i,sectionIdx:o}}(t,e),getNextItemInfo:t=>function(e,t){let{itemIdx:i,sectionIdx:o}=e;return-1==o&&-1==i?{itemIdx:t[t.length-1].items.length-1,sectionIdx:t.length-1}:(i+=1,i>=t[o].items.length&&(o===t.length-1?i=e.itemIdx:(o+=1,i=0)),{itemIdx:i,sectionIdx:o})}(t,e)}}e.Legend=function({orientation:e="horizontal",items:o,isReadOnly:n=!0,onItemAction:r,onInput:l,...d}){const a=i.useRef(null),c=i.useRef(),{getItem:m,getDetailFromInfo:h,getPrevItemInfo:I,getNextItemInfo:f}=Me(o),{layoutInfo:g,isColumnWidthValidRef:x}=qe({rootRef:a,rootDimsRef:c,items:o,orientation:e}),{hoveredItemInfo:p,focusedItemInfo:S,...F}=Le(!n,null!=d.hiddenIds,h,I,f,r,l),{focusedItemRef:y}=ze(S),C=_e(o,m,S,p),{tooltipContent:b,tooltipProps:R}=He({text:C,rootDimsRef:c,focusedItemInfo:S,focusedItemRef:y}),A=ke(n,d["aria-label"],d.hiddenIds),N=u.mergeProps(F,R),{itemsPerCol:v,itemsPerRow:E}=je(o.length,g[0]),{legendStyle:w}=s.styles;return t.jsxs("div",{ref:a,tabIndex:n?void 0:0,class:w,...A,...N,children:[t.jsx(Ve,{...d,focusedItemRef:y,items:o,isReadOnly:n,orientation:e,sectionIdx:0,itemsPerRow:E,isColumnWidthValidRef:x,itemsPerCol:v,itemWidth:g[0]?.isWrapped?g[0]?.maxItemWidth:void 0,focusedItemInfo:S,hoveredItemInfo:p,activeId:F["aria-activedescendant"]}),b]})},e.SectionalLegend=function({orientation:e="horizontal",sectionTitleHAlign:o="start",sections:n,isReadOnly:r=!0,onItemAction:l,onInput:d,...a}){const c=i.useRef(null),m=i.useRef(),{getItem:h,getDetailFromInfo:f,getPrevItemInfo:g,getNextItemInfo:x}=Ge(n),{layoutInfo:p,isColumnWidthValidRef:S}=qe({rootRef:c,rootDimsRef:m,items:n,isSectional:!0,orientation:e}),{focusedItemInfo:F,hoveredItemInfo:y,...C}=Le(!r,null!=a.hiddenIds,f,g,x,l,d),{focusedItemRef:b}=ze(F),R=_e(n,h,F,y),{tooltipContent:A,tooltipProps:N}=He({text:R,rootDimsRef:m,focusedItemInfo:F,focusedItemRef:b}),v=ke(r,a["aria-label"],a.hiddenIds),E=u.mergeProps(C,N),w={fontFamily:a.sectionTitleFontFamily,fontSize:a.sectionTitleFontSize,color:a.sectionTitleColor,fontStyle:a.sectionTitleFontStyle,fontWeight:a.sectionTitleFontWeight,textDecoration:a.sectionTitleTextDecoration},{sectionalLegendBaseStyles:T}=s.styles,U="horizontal"===e;return t.jsxs("div",{ref:c,tabIndex:r?void 0:0,class:T,...v,...E,children:[t.jsx(I.Flex,{direction:U?"row":"column",wrap:"wrap",gap:"4x",children:n.map(((i,n)=>{const s=r?"":Pe(),l=p[n]?.isWrapped,d=!U||l?"column":"row",c=!U||l?"start":"center",{itemsPerCol:u,itemsPerRow:m}=je(i.items.length,p[n]);return t.jsxs(I.Flex,{align:c,direction:d,maxWidth:"100%",justify:"start",wrap:"wrap",children:[t.jsx(Ne,{text:i.title,...w,type:"title",id:s,align:o}),t.jsx(Ve,{...a,isColumnWidthValidRef:S,focusedItemRef:b,labelledBy:s,sectionIdx:n,items:i.items,orientation:e,itemsPerRow:m,itemsPerCol:u,itemWidth:p[n]?.isWrapped?p[n]?.maxItemWidth:void 0,isReadOnly:r,focusedItemInfo:F,hoveredItemInfo:y,activeId:C["aria-activedescendant"]})]})}))}),A]})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_Legend.js.map
