define(['exports', 'preact/jsx-runtime', './PRIVATE_Message', './ComponentMessage-fb099f4f', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', './MessagesManager-9c22a890'], (function(e,s,a,t,n,i){"use strict";function o(e){return e.map(((e,s)=>({key:s,data:{closeAffordance:"off",severity:e.severity||"error",detail:e.detail}})))}e.ComponentMessageContainer=function({fieldLabel:e,messages:a=[]}){return s.jsx("div",{class:n.componentMessageContainerBase,children:s.jsx(i.MessagesManager,{data:o(a),children:({item:a})=>s.jsx(t.ComponentMessage,{detail:a.data.detail,fieldLabel:e,severity:a.data.severity},a.key)})})}}));
//# sourceMappingURL=ComponentMessageContainer-1ff8855c.js.map
