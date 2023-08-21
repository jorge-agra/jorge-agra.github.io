var __decorate=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,l=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(s<3?r(l):s>3?r(t,o,l):r(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};define("oj-c/button/button",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/UNSAFE_Button","@oracle/oraclejet-preact/UNSAFE_IconButton","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","preact","preact/hooks","preact/compat","@oracle/oraclejet-preact/hooks/UNSAFE_useTooltip","ojs/ojvcomponent","css!oj-c/button/button-styles.css"],(function(require,e,t,o,n,r,s,l,a,i,c,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Button=void 0,o=__importDefault(o);const d=(0,i.forwardRef)(((e,o)=>{const r=(0,a.useRef)();return(0,a.useImperativeHandle)(o,(()=>({focus:()=>r.current?.focus(),blur:()=>r.current?.blur()})),[]),(0,t.jsx)(n.Button,{ref:r,...e})})),p=(0,i.forwardRef)(((e,o)=>{const n=(0,a.useRef)();return(0,a.useImperativeHandle)(o,(()=>({focus:()=>n.current?.focus(),blur:()=>n.current?.blur()})),[]),(0,t.jsx)(r.IconButton,{ref:n,...e})}));let b=class extends l.Component{constructor(){super(...arguments),this.buttonRef=(0,l.createRef)()}render(e){const o={width:"bottom"===e.edge?"100%":e.width},{tooltipContent:n,tooltipProps:r}=(0,c.useTooltip)({text:e.tooltip}),{chroming:s,disabled:l,onOjAction:a,"aria-label":i,"aria-describedby":b,width:f,display:y,label:h,...m}={...e};if("icons"!=e.display||e.startIcon&&e.endIcon&&"icons"==e.display||!e.startIcon&&!e.endIcon&&"icons"==e.display){const c=()=>(0,t.jsx)(d,{ref:this.buttonRef,variant:s,isDisabled:l,width:"100%",onAction:a,"aria-label":i,"aria-describedby":b,startIcon:e.startIcon,endIcon:e.endIcon,size:e.size,label:"icons"==e.display&&(e.startIcon||e.endIcon)?"":e.label,display:"icons"!=e.display?e.display:"all",...r,...m});return e.width||"none"!==e.edge?(0,t.jsxs)(u.Root,{style:o,children:[c(),n]}):(0,t.jsxs)(u.Root,{children:[c(),n]})}return(0,t.jsx)(p,{ref:this.buttonRef,variant:s,isDisabled:l,tooltip:e.tooltip&&""!==e.tooltip?e.tooltip:e.label,onAction:a,"aria-label":i&&""!==i?i:e.label,"aria-describedby":b,size:e.size,...m,children:e.startIcon??e.endIcon})}blur(){this.buttonRef.current?.blur()}focus(){this.buttonRef.current?.focus()}};b.defaultProps={chroming:"outlined",disabled:!1,size:"md",display:"all",endIcon:null,startIcon:null,edge:"none",tooltip:""},b._metadata={properties:{label:{type:"string"},tooltip:{type:"string"},disabled:{type:"boolean"},width:{type:"number|string"},display:{type:"string",enumValues:["label","all","icons"]},size:{type:"string",enumValues:["sm","md","lg"]},edge:{type:"string",enumValues:["none","bottom"]},chroming:{type:"string",enumValues:["ghost","borderless","outlined","solid","callToAction","danger"]}},slots:{startIcon:{},endIcon:{}},events:{ojAction:{bubbles:!0}},extension:{_OBSERVED_GLOBAL_PROPS:["aria-describedby","aria-label"]},methods:{blur:{},focus:{}}},b._translationBundleMap={"@oracle/oraclejet-preact":o.default},b._consumedContexts=[s.TabbableModeContext],b=__decorate([(0,u.customElement)("oj-c-button")],b),e.Button=b}));
//# sourceMappingURL=button.js.map