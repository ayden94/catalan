(function(n,t){typeof exports=="object"&&typeof module<"u"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(n=typeof globalThis<"u"?globalThis:n||self,t(n.utilinent={}))})(this,function(n){"use strict";function t({each:e,children:i,fallback:o=null}){return(e==null?void 0:e.length)!==0?e.map(i):o}const d=({when:e,children:i,fallback:o=null})=>e?i:o,r=({children:e})=>e;function l({children:e,when:i,fallback:o=null}){return e.reduce((f,u)=>{if(u.type!==r)throw new Error("Match 컴포넌트만 사용할 수 있습니다.");if(u.key){if(f.includes(u.key))throw new Error(`Duplicate Match key: ${u.key}`);f.push(u.key)}return f},[]),e.find(f=>f.key===i)??o}n.Map=t,n.Match=r,n.Show=d,n.Switch=l,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
