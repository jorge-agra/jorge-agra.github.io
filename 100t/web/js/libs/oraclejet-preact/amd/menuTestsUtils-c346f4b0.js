define(['exports'], (function(e){"use strict";e.getAllMenuItemsByRole=function(e,n,t=!0){return e.getAllByRole(n,{hidden:t})},e.getIcon=function(e,n){return e.querySelector(n)},e.getLabel=function(e,n){return e.getByText(n)},e.getMenuItemByRole=function(e,n,t=!0){return e.getByRole(n,{hidden:t})},e.setObserverConfig=function(){if(!window.ResizeObserver){const e=jest.fn();e.mockReturnValue({observe:()=>null,unobserve:()=>null,disconnect:()=>null}),Object.defineProperty(global,"ResizeObserver",{writable:!0,configurable:!0,value:e})}}}));
//# sourceMappingURL=menuTestsUtils-c346f4b0.js.map
