define(['exports'], (function(e){"use strict";e.setupIntersectionObserverMock=()=>{const e=jest.fn();e.mockReturnValue({observe:()=>null,unobserve:()=>null,disconnect:()=>null}),Object.defineProperty(global,"IntersectionObserver",{writable:!0,configurable:!0,value:e})}}));
//# sourceMappingURL=mockIntersectionObserver-0e07a879.js.map
