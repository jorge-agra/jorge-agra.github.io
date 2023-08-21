define(['exports', 'preact/jsx-runtime', './utils/UNSAFE_mergeProps', './utils/UNSAFE_classNames', './hooks/UNSAFE_useTranslationBundle', './utils/UNSAFE_size', './utils/UNSAFE_stringUtils', './hooks/UNSAFE_useComponentTheme', './UNSAFE_FilePicker/themes/redwood/FilePickerTheme', './stringUtils-96bfcb78', './utils/UNSAFE_filePickerUtils', './utils/PRIVATE_clientHints', './hooks/UNSAFE_usePress', 'preact/hooks', './clientHints-fbfc14a7', './hooks/UNSAFE_useTabbableMode', './hooks/UNSAFE_useInteractionStyle', './classNames-c6cc4719'], (function(e,t,r,s,n,i,o,a,l,d,c,u,p,h,v,y,f,m){"use strict";const b=(e,r,s,n,i)=>{const{styles:{disabledPrimaryTextStyle:o,primaryTextStyle:d,disabledSecondaryTextStyle:c,secondaryTextStyle:u}}=a.useComponentTheme(l.FilePickerRedwoodTheme);return[t.jsx("div",{class:e?o:d,children:T(r,n)}),t.jsx("div",{class:e?c:u,children:S(s,n,i)})]},g=({ariaLabel:e,isDisabled:t,translations:r,primaryText:s,secondaryText:n,selectionMode:i})=>e||`${t?"":r.filePicker_addFiles()+". "}${T(s,r)}. ${S(n,r,i)}`,P=(e,t)=>({width:e?i.sizeToCSS(e):void 0,height:t?i.sizeToCSS(t):void 0}),T=(e,t)=>e||t.filePicker_dropzonePrimaryText(),S=(e,t,r)=>{const s="multiple"===r?t.filePicker_dropzoneSecondaryTextMultiple():t.filePicker_dropzoneSecondaryText();return e||s},x=(e,t,r)=>{const s=[],n=[];let i,o;if(e)for(let a=0;a<e.length;a++){i=e[a];const l=i.name;if(o=r.filePicker_unknownFileTypeUploadError(),l){const e=l.split(".");o=e.length>1?"."+e.pop():o}o=i.type?i.type:o,-1===s.indexOf(o)&&-1===n.indexOf(o)&&(F(i,t)?s.push(o):n.push(o))}return{accepted:s,rejected:n}},k=e=>{const t={length:{value:e.length},item:{value(e){return this[e]}}};for(let r=0;r<e.length;r++)t[r]={value:e[r],enumerable:!0};return Object.create(FileList.prototype,t)},D=(e,t)=>"single"!==t||1===e.length,H=(e,t)=>{const r=[];return 1===e.length?r.push({severity:"error",summary:t.filePicker_singleTypeUploadError({fileType:e[0]})}):r.push({severity:"error",summary:t.filePicker_multipleFileTypeUploadError({fileTypes:e.join(t.plural_separator())})}),r},F=(e,t)=>{const r=t;if(!r||0===r.length||!e)return!0;let s;for(let t=0;t<r.length;t++){if(s=d.trim(r[t]),!s)return!0;if(s.startsWith(".",0)){if(!e.name||e.name&&e.name.toLowerCase().endsWith(s.toLowerCase()))return!0}else{if(!e.type)return!1;if("image/*"===s){if(e.type.startsWith("image/",0))return!0}else if("video/*"===s){if(e.type.startsWith("video/",0))return!0}else if("audio/*"===s){if(e.type.startsWith("audio/",0))return!0}else if(e.type===s)return!0}}return!1},_=(e,t,r)=>{let s;const n=t?new Promise((e=>{s=e})):null;return r?.({messages:e,until:n}),s},E=(e,t)=>{const r=k(e);t?.({files:r})},j=(e,t,r)=>{const{callback:s,validation:n}=N(e),{pressProps:i}=p.usePress(s);return{validation:n,dragAndDropProps:U(e.accept,e.selectionMode,_,E,t,e.translations,e.onCommit,e.onReject,r),pressProps:i}},N=e=>{const t=t=>{if(t.length>0){const r=x(t,e.accept,e.translations).rejected;r.length>0?_(H(r,e.translations),!1,e.onReject):E(t,e.onCommit)}};return{callback:r=>{("click"===r.type||"keyup"===r.type&&"Enter"===r.code)&&(r.preventDefault(),c.pickFiles(t,{accept:e.accept,selectionMode:e.selectionMode??"multiple",capture:e.capture??"none"}))},validation:t}},U=(e,t,r,s,n,i,o,a,l)=>{const d=h.useRef(!1),c=h.useRef(!1),u=h.useRef(),p=(e,t=!1)=>{d.current&&(e.preventDefault(),e.stopPropagation(),n.current?.contains(e.relatedTarget)||(d.current=!1,l?.("NA"),c.current||t||u.current?.()))};return{onDragEnter:e=>{e.preventDefault(),e.stopPropagation()},onDragOver:s=>{if(s.preventDefault(),s.stopPropagation(),d.current)return;const n=v.getClientHints().browser;if(d.current=!0,c.current=!0,"safari"!==n){if(!s.dataTransfer)return;const n=k(s.dataTransfer.items);let o=[];const d=D(n,t),p=x(n,e,i);d&&0===p.rejected.length?l?.("valid"):(c.current=!1,d?o=H(p.rejected,i):o.push({severity:"error",summary:i.filePicker_singleFileUploadError()}),l?.("invalid"),u.current=r(o,!0,a))}else l?.("valid")},onDragLeave:p,onDrop:n=>{if(d.current){if(n.preventDefault(),n.stopPropagation(),!n.dataTransfer)return void(d.current=!1);const l=k(n.dataTransfer.files);let u=!1;if(c.current){let n=[];if(D(l,t)){const t=x(l,e,i);t.rejected.length>0&&(n=H(t.rejected,i),u=!0)}else n.push({severity:"error",summary:i.filePicker_singleFileUploadError()});n.length>0&&(c.current=!1,r(n,!1,a)),c.current&&s(l,o)}p(n,u)}}}};const A=e=>{const{interactionProps:s,applyActiveStyle:n,applyHoverStyle:i,applyPseudoHoverStyle:o}=f.useInteractionStyle(!1),{classes:d,styles:{maxWidth:c,inner:u,activeStyle:p,innerNeedsEventsHoverStyle:v,innerPseudoHoverStyle:T,invalidDrop:S,validDrop:x}}=a.useComponentTheme(l.FilePickerRedwoodTheme,{disabledState:"notDisabled",hoveredState:i?"isHover":"notHover",pseudoHoveredState:o?"isPseudoHover":"notPseudoHover"}),k=[n?p:"",i?v:"",o?T:""],[D,H]=h.useState("NA"),F="valid"===D?x:"invalid"===D?S:void 0,_=h.useRef(null),{validation:E,dragAndDropProps:N,pressProps:U}=j(e,_,H),A=r.mergeProps(U,s);R(N,E,e.testHandlersRef||null);const M=m.classNames([d,void 0===e.width&&c]),{isTabbable:w}=y.useTabbableMode(),{primaryText:C,secondaryText:L,translations:W,selectionMode:I,width:z,height:O}=e;return t.jsx("div",{...A,class:M,tabIndex:w?0:-1,role:"button","aria-label":g({ariaLabel:e["aria-label"],isDisabled:!1,translations:W,primaryText:C,secondaryText:L,selectionMode:I}),ref:_,style:P(z,O),children:t.jsx("div",{class:m.classNames([u,F,...k]),...N,children:b(!1,C,L,W,I)})})},M=({children:e,primaryText:r,secondaryText:s,translations:n,selectionMode:i,width:o,height:d,...c})=>{const{classes:u,styles:{maxWidth:p,inner:h,noChildrenMargin:v}}=a.useComponentTheme(l.FilePickerRedwoodTheme,{disabledState:"isDisabled",hoveredState:"notHover",pseudoHoveredState:"notPseudoHover"});return t.jsx("div",{class:m.classNames([u,h,v,void 0===o&&p]),role:"button","aria-label":g({ariaLabel:c["aria-label"],isDisabled:!0,translations:n,primaryText:r,secondaryText:s}),"aria-hidden":"true",style:P(o,d),children:e||b(!0,r,s,n,i)})},w=e=>{const{interactionProps:s,applyHoverStyle:n,applyPseudoHoverStyle:i}=f.useInteractionStyle(!1),{classes:o,styles:{maxWidth:d,noChildrenMargin:c}}=a.useComponentTheme(l.FilePickerRedwoodTheme,{disabledState:"notDisabled",hoveredState:n?"isHover":"notHover",pseudoHoveredState:i?"isPseudoHover":"notPseudoHover"}),u=h.useRef(null),{validation:p,dragAndDropProps:v,pressProps:b}=j(e,u),T=r.mergeProps(b,v,s);R(v,p,e.testHandlersRef||null);const S=m.classNames([o,c,void 0===e.width&&d]),{translations:x,selectionMode:k}=e,{isTabbable:D}=y.useTabbableMode();return t.jsx("div",{class:m.classNames([S]),tabIndex:D?void 0:-1,role:"button","aria-label":g({ariaLabel:e["aria-label"],isDisabled:!1,translations:x,selectionMode:k}),ref:u,style:P(e.width,e.height),...T,children:e.children})},R=(e,t,r)=>{h.useImperativeHandle(r,(()=>({onDragEnter:e.onDragEnter,onDragOver:e.onDragOver,onDrop:e.onDrop,onDragLeave:e.onDragLeave,onClickSelected:t})))};e.FilePicker=function({capture:e="none",isDisabled:r=!1,selectionMode:s="multiple",children:i,...o}){const a=o.__testHandlerSymbol,l={capture:e,selectionMode:s,translations:n.useTranslationBundle("@oracle/oraclejet-preact"),...o};return r?t.jsx(M,{...l,children:i}):i?t.jsx(w,{testHandlersRef:a,...l,children:i}):t.jsx(A,{testHandlersRef:a,...l})}}));
//# sourceMappingURL=FilePicker-4e2c8ea2.js.map
