define(['exports', 'preact/jsx-runtime', './utils/UNSAFE_classNames', './PRIVATE_Meter', './utils/PRIVATE_meterUtils', './hooks/UNSAFE_useTranslationBundle', './hooks/UNSAFE_useComponentTheme', './UNSAFE_ProgressCircle/themes/redwood/ProgressCircleTheme', './classNames-c6cc4719', 'preact/compat', './utils/UNSAFE_dvtCommonUtils', 'preact/hooks', './index-7d808afa', 'preact', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', './utils/UNSAFE_logger', './_curry1-5cea534a', './_curry2-c02a6898', './UNSAFE_ProgressCircle/themes/ProgressCircleStyles.css', 'css!./ProgressCircleStyles.styles.css', './UNSAFE_ProgressCircle/themes/redwood/ProgressCircleBaseTheme.css', 'module', './UNSAFE_ProgressCircle/themes/redwood/ProgressCircleVariants.css', 'css!./ProgressCircleVariants.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-6f6e2b8d'], (function(e,s,r,a,t,o,l,i,c,n,m,d,u,C,h,p,P,g,x,_,v,N,S,y,A,E,T,U){"use strict";const F=({id:e,size:r,...t})=>{const{classes:c,styles:{indeterminate:n}}=l.useComponentTheme(i.ProgressCircleRedwoodTheme,{size:r,type:"indeterminate"}),m=o.useTranslationBundle("@oracle/oraclejet-preact"),d={"aria-valuetext":t["aria-valuetext"]||m.progressIndeterminate(),role:"progressbar"};return s.jsx(a.CircleWrapper,{id:e,ariaProps:d,class:c,children:s.jsx(a.CircleInner,{class:n})})},j=({value:e=0,max:r=100,id:o,size:n})=>{const{classes:m,styles:{determinate:d,track:u,valueStyle:C}}=l.useComponentTheme(i.ProgressCircleRedwoodTheme,{size:n}),h=Math.min(Math.max(0,e/r),1),p=t.getProgressClipPath(h),P={};return P["aria-valuemin"]=null!=e?0:void 0,P["aria-valuemax"]=null!=e?r:void 0,P["aria-valuenow"]=null!=e?e:void 0,P.role="progressbar",s.jsxs(a.CircleWrapper,{id:o,ariaProps:P,class:m,children:[s.jsx(a.CircleInner,{class:c.classNames([d,u])}),s.jsx(a.CircleInner,{class:c.classNames([d,C]),clipPath:p})]})};e.ProgressCircle=function({value:e,max:r,...a}){return"indeterminate"===e?s.jsx(F,{...a}):s.jsx(j,{value:e,max:r,...a})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_ProgressCircle.js.map
