define(['exports', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './utils/UNSAFE_mergeInterpolations', './index-7d808afa'], (function(e,o,t,s,n,l){"use strict";e.useThemeInterpolations=function(){const e=o.useColorScheme(),i=t.useScale(),r=i!==l.DefaultEnvironment.scale?i:void 0,a=n.mergeInterpolations([...Object.values(s.themeInterpolations)]),{class:c}=a({colorScheme:e,scale:r});return c}}));
//# sourceMappingURL=useThemeInterpolations-710109a5.js.map