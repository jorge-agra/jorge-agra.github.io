define(['exports', 'preact/jsx-runtime', './hooks/UNSAFE_useAccessibleContext', './hooks/UNSAFE_useFormFieldContext', './hooks/UNSAFE_useTabbableMode', './hooks/UNSAFE_useTextFieldInputHandlers', './utils/UNSAFE_classNames', './utils/UNSAFE_interpolations/text', './utils/UNSAFE_mergeInterpolations', './utils/UNSAFE_mergeProps', './hooks/UNSAFE_useComponentTheme', './hooks/UNSAFE_useTranslationBundle', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme', './classNames-c6cc4719'], (function(e,a,o,t,n,s,i,l,r,u,d,c,p,b){"use strict";const m=(e,a,o)=>!(e&&!a&&!o),x=[...Object.values(l.textInterpolations)],h=r.mergeInterpolations(x);e.TextFieldInput=({as:e="input","aria-autocomplete":i,"aria-controls":l,"aria-describedby":r,"aria-expanded":x,"aria-invalid":F,"aria-label":f,"aria-labelledby":v,"aria-valuemax":C,"aria-valuemin":S,"aria-valuenow":I,"aria-valuetext":T,autoComplete:y,autoFocus:A,currentCommitValue:E,hasEmptyLabel:N,hasEndContent:U=!1,hasInsideLabel:_=!1,hasPrefix:w=!1,hasStartContent:P=!1,hasSuffix:k=!1,id:g,inputRef:L,placeholder:B,isRequired:j,role:D,rows:V,spellcheck:K,type:R,value:M="",variant:q="default",onInput:H,onCommit:O,onKeyDown:z,onKeyUp:G,onBlur:J,onFocus:Q,...W})=>{const{isDisabled:X,isFocused:Y,isLoading:Z,isReadonly:$}=t.useFormFieldContext(),{class:ee}=h(W),ae=""!==M,oe="textarea"===e,te="input"===e,ne="password"===R,se=!X&&w,ie=!X&&k,le=m(_,ae,Y)?B:void 0,{classes:re}=d.useComponentTheme(p.TextFieldInputRedwoodTheme,{type:ne?"isPassword":"notPassword",styleVariant:q,textarea:oe?"isTextArea":"notTextArea",input:te?"isInput":"notInput",prefix:se?"hasPrefix":"noPrefix",suffix:ie?"hasSuffix":"noSuffix",startContent:P?"hasStartContent":"noStartContent",endContent:U?"hasEndContent":"noEndContent",insideLabel:_?"hasInsideLabel":"noInsideLabel",value:ae?"hasValue":"noValue",focused:Y?"isFocused":"notFocused",disabled:X?"isDisabled":"notDisabled"}),ue=b.classNames([re,ee]),de=e||"input",ce=s.useTextFieldInputHandlers({currentCommitValue:E,value:M,onInput:H,onCommit:O,onKeyDown:z}),pe=u.mergeProps(ce,{onBlur:J,onFocus:Q}),{isTabbable:be,tabbableModeProps:me}=n.useTabbableMode(),{UNSAFE_ariaLabelledBy:xe}=o.useAccessibleContext(),he=N?function(...e){return e.filter(Boolean).join(" ")||void 0}(v,xe):v,Fe=c.useTranslationBundle("@oracle/oraclejet-preact").formControl_loading();return a.jsx(de,{"aria-autocomplete":i,"aria-controls":l,"aria-describedby":r,"aria-expanded":x,"aria-invalid":F,"aria-label":Z?Fe:f||void 0,"aria-labelledby":he,"aria-required":!!j||void 0,"aria-valuemax":C,"aria-valuemin":S,"aria-valuenow":I,"aria-valuetext":T,autocomplete:y,autofocus:A,class:ue,disabled:X,id:g,onKeyUp:G,placeholder:le,readonly:$,ref:L,role:D,rows:V,spellcheck:K,type:R,value:M,...pe,...!be&&me})},e.getInputId=e=>(e??"")+"|input",e.isInputPlaceholderShown=m}));
//# sourceMappingURL=TextFieldInput-ae1a90e4.js.map
