define(['exports', 'preact/jsx-runtime', 'preact/hooks', './utils/UNSAFE_classNames', './PRIVATE_List/themes/ListStyles.css', './classNames-c6cc4719'], (function(s,e,t,n,c,i){"use strict";const o=50;s.SkeletonContainer=function({children:s,minimumCount:n=1}){const[a,r]=t.useState(!1);t.useEffect((()=>{setTimeout((()=>{r(!0)}),o)}),[]);const l=i.classNames([c.skeletonStyles.container]);return a&&s?e.jsx("div",{class:l,role:"presentation",children:[...Array(n)].map(((e,t)=>s(t)))}):null}}));
//# sourceMappingURL=SkeletonContainer-03fc1284.js.map