"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1040],{61132:(e,s,a)=>{a.d(s,{Z:()=>l});var n=a(24246),t=(a(27378),a(40624));const r={tabItem:"tabItem_pnkT"};function l({children:e,hidden:s,className:a}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,a),hidden:s,children:e})}},97555:(e,s,a)=>{a.d(s,{Z:()=>M});var n=a(24246),t=a(27378),r=a(40624),l=a(75527),i=a(3620),c=a(44479),m=a(62821),o=a(52196),h=a(53589);function d(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function x(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,n)}return a}(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))})),e}function p(e){var s,a;return null!==(a=null===(s=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===s?void 0:s.filter(Boolean))&&void 0!==a?a:[]}function u(e){const{values:s,children:a}=e;return(0,t.useMemo)((()=>{const e=null!=s?s:function(e){return p(e).map((({props:{value:e,label:s,attributes:a,default:n}})=>({value:e,label:s,attributes:a,default:n})))}(a);return function(e){const s=(0,o.lx)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function j({value:e,tabValues:s}){return s.some((s=>s.value===e))}function g({queryString:e=!1,groupId:s}){const a=(0,i.k6)(),n=function({queryString:e=!1,groupId:s}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:e,groupId:s}),r=(0,m._X)(n),l=(0,t.useCallback)((e=>{if(!n)return;const s=new URLSearchParams(a.location.search);s.set(n,e),a.replace(x(function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(s){d(e,s,a[s])}))}return e}({},a.location),{search:s.toString()}))}),[n,a]);return[r,l]}function f(e){const{defaultValue:s,queryString:a=!1,groupId:n}=e,r=u(e),[l,i]=(0,t.useState)((()=>function({defaultValue:e,tabValues:s}){if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var a;const n=null!==(a=s.find((e=>e.default)))&&void 0!==a?a:s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:r}))),[m,o]=g({queryString:a,groupId:n}),[d,x]=function({groupId:e}){const s=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,n]=(0,h.Nk)(s);return[a,(0,t.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:n}),p=(()=>{const e=null!=m?m:d;return j({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{p&&i(p)}),[p]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!j({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),x(e)}),[o,x,r]),tabValues:r}}var b=a(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function N(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function w(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(s){N(e,s,a[s])}))}return e}function k(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,n)}return a}(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))})),e}function v({className:e,block:s,selectedValue:a,selectValue:t,tabValues:i}){const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),o=e=>{const s=e.currentTarget,n=c.indexOf(s),r=i[n].value;r!==a&&(m(s),t(r))},h=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;var a;s=null!==(a=c[n])&&void 0!==a?a:c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;var n;s=null!==(n=c[a])&&void 0!==n?n:c[c.length-1];break}}null==s||s.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},e),children:i.map((({value:e,label:s,attributes:t})=>(0,n.jsx)("li",k(w({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>c.push(e),onKeyDown:h,onClick:o},t),{className:(0,r.Z)("tabs__item",y.tabItem,null==t?void 0:t.className,{"tabs__item--active":a===e}),children:null!=s?s:e}),e)))})}function O({lazy:e,children:s,selectedValue:a}){const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(e){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function R(e){const s=f(e);return(0,n.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,n.jsx)(v,w({},s,e)),(0,n.jsx)(O,w({},s,e))]})}function M(e){const s=(0,b.Z)();return(0,n.jsx)(R,k(w({},e),{children:p(e.children)}),String(s))}},6698:(e,s,a)=>{a.d(s,{Z:()=>m});var n=a(24246),t=(a(27378),a(40624));const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function l(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function i(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(s){l(e,s,a[s])}))}return e}function c(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,n)}return a}(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))})),e}function m({children:e,minHeight:s,url:a="http://localhost:3000",style:l,bodyStyle:m}){return(0,n.jsxs)("div",{className:r.browserWindow,style:c(i({},l),{minHeight:s}),children:[(0,n.jsxs)("div",{className:r.browserWindowHeader,children:[(0,n.jsxs)("div",{className:r.buttons,children:[(0,n.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,t.Z)(r.browserWindowAddressBar,"text--truncate"),children:a}),(0,n.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:r.bar}),(0,n.jsx)("span",{className:r.bar}),(0,n.jsx)("span",{className:r.bar})]})})]}),(0,n.jsx)("div",{className:r.browserWindowBody,style:m,children:e})]})}},75461:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>h,contentTitle:()=>m,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=a(24246),t=a(71670),r=a(97555),l=a(61132),i=a(6698);const c={id:"math-equations",description:"Writing LaTeX Math Equations",slug:"/markdown-features/math-equations"},m="Math Equations",o={id:"guides/markdown-features/math-equations",title:"Math Equations",description:"Writing LaTeX Math Equations",source:"@site/docs/guides/markdown-features/markdown-features-math-equations.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/math-equations",permalink:"/docs/markdown-features/math-equations",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-math-equations.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1723562595e3,frontMatter:{id:"math-equations",description:"Writing LaTeX Math Equations",slug:"/markdown-features/math-equations"},sidebar:"docs",previous:{title:"MDX Plugins",permalink:"/docs/markdown-features/plugins"},next:{title:"Diagrams",permalink:"/docs/markdown-features/diagrams"}},h={},d=[{value:"Usage",id:"usage",level:2},{value:"Inline",id:"inline",level:3},{value:"Blocks",id:"blocks",level:3},{value:"Enabling math equations",id:"configuration",level:2},{value:"Self-hosting KaTeX assets",id:"self-hosting-katex-assets",level:2}];function x(e){const s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mspace:"mspace",msubsup:"msubsup",msup:"msup",mtext:"mtext",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,t.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"math-equations",children:"Math Equations"})}),"\n","\n",(0,n.jsxs)(s.p,{children:["Mathematical equations can be rendered using ",(0,n.jsx)(s.a,{href:"https://katex.org",children:"KaTeX"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(s.p,{children:["Please read ",(0,n.jsx)(s.a,{href:"https://katex.org",children:"KaTeX"})," documentation for more details."]}),"\n",(0,n.jsx)(s.h3,{id:"inline",children:"Inline"}),"\n",(0,n.jsxs)(s.p,{children:["Write inline math equations by wrapping LaTeX equations between ",(0,n.jsx)(s.code,{children:"$"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-latex",children:"Let $f\\colon[a,b]\\to\\R$ be Riemann integrable. Let $F\\colon[a,b]\\to\\R$ be\n$F(x)=\\int_{a}^{x} f(t)\\,dt$. Then $F$ is continuous, and at all $x$ such that\n$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.\n"})}),"\n",(0,n.jsx)(i.Z,{children:(0,n.jsxs)(s.p,{children:["Let ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"f"}),(0,n.jsx)(s.mspace,{}),(0,n.jsx)(s.mspace,{width:"0.1111em"}),(0,n.jsx)(s.mo,{lspace:"0em",rspace:"0.17em"}),(0,n.jsx)(s.mtext,{children:"\u2009\u2063"}),(0,n.jsx)(s.mo,{lspace:"0em",rspace:"0em",children:":"}),(0,n.jsx)(s.mspace,{width:"0.3333em"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"["}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"b"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(s.mo,{children:"\u2192"}),(0,n.jsx)(s.mi,{mathvariant:"double-struck",children:"R"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"f\\colon[a,b] \\to \\R"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(s.span,{className:"mspace nobreak"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1111em"}}),(0,n.jsx)(s.span,{className:"mpunct"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mrel",children:":"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.3333em"}}),(0,n.jsx)(s.span,{className:"mopen",children:"["}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(s.span,{className:"mclose",children:"]"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6889em"}}),(0,n.jsx)(s.span,{className:"mord mathbb",children:"R"})]})]})]})," be Riemann integrable. Let ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"F"}),(0,n.jsx)(s.mspace,{}),(0,n.jsx)(s.mspace,{width:"0.1111em"}),(0,n.jsx)(s.mo,{lspace:"0em",rspace:"0.17em"}),(0,n.jsx)(s.mtext,{children:"\u2009\u2063"}),(0,n.jsx)(s.mo,{lspace:"0em",rspace:"0em",children:":"}),(0,n.jsx)(s.mspace,{width:"0.3333em"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"["}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"b"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(s.mo,{children:"\u2192"}),(0,n.jsx)(s.mi,{mathvariant:"double-struck",children:"R"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"F\\colon[a,b]\\to\\R"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(s.span,{className:"mspace nobreak"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1111em"}}),(0,n.jsx)(s.span,{className:"mpunct"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mrel",children:":"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.3333em"}}),(0,n.jsx)(s.span,{className:"mopen",children:"["}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(s.span,{className:"mclose",children:"]"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6889em"}}),(0,n.jsx)(s.span,{className:"mord mathbb",children:"R"})]})]})]})," be ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"F"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsxs)(s.msubsup,{children:[(0,n.jsx)(s.mo,{children:"\u222b"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"x"})]}),(0,n.jsx)(s.mi,{children:"f"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"t"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mtext,{children:"\u2009"}),(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{children:"t"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"F(x)=\n\\int_{a}^{x} f(t)\\,dt"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.2151em",verticalAlign:"-0.3558em"}}),(0,n.jsxs)(s.span,{className:"mop",children:[(0,n.jsx)(s.span,{className:"mop op-symbol small-op",style:{marginRight:"0.19445em",position:"relative",top:"-0.0006em"},children:"\u222b"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsxs)(s.span,{className:"vlist",style:{height:"0.8593em"},children:[(0,n.jsxs)(s.span,{style:{top:"-2.3442em",marginLeft:"-0.1945em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"a"})})})]}),(0,n.jsxs)(s.span,{style:{top:"-3.2579em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"x"})})})]})]}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.3558em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})]})]}),". Then ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"F"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"F"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"})]})})]})," is continuous, and at all ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"x"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," such that ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"f"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"f"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"})]})})]})," is continuous at ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"x"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]}),", ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"F"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"F"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"})]})})]})," is differentiable at ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"x"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," with ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"F"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsx)(s.mi,{children:"f"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"F'(x)=f(x)"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})]})]}),"."]})}),"\n",(0,n.jsx)(s.h3,{id:"blocks",children:"Blocks"}),"\n",(0,n.jsxs)(s.p,{children:["For equation block or display mode, use line breaks and ",(0,n.jsx)(s.code,{children:"$$"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-latex",children:"$$\nI = \\int_0^{2\\pi} \\sin(x)\\,dx\n$$\n"})}),"\n",(0,n.jsx)(i.Z,{children:(0,n.jsx)(s.span,{className:"katex-display",children:(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"I"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsxs)(s.msubsup,{children:[(0,n.jsx)(s.mo,{children:"\u222b"}),(0,n.jsx)(s.mn,{children:"0"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mn,{children:"2"}),(0,n.jsx)(s.mi,{children:"\u03c0"})]})]}),(0,n.jsx)(s.mi,{children:"sin"}),(0,n.jsx)(s.mo,{children:"\u2061"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mtext,{children:"\u2009"}),(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{children:"x"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"I = \\int_0^{2\\pi} \\sin(x)\\,dx"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"2.476em",verticalAlign:"-0.9119em"}}),(0,n.jsxs)(s.span,{className:"mop",children:[(0,n.jsx)(s.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"\u222b"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsxs)(s.span,{className:"vlist",style:{height:"1.564em"},children:[(0,n.jsxs)(s.span,{style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"0"})})]}),(0,n.jsxs)(s.span,{style:{top:"-3.8129em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(s.span,{className:"mord mtight",children:[(0,n.jsx)(s.span,{className:"mord mtight",children:"2"}),(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"\u03c0"})]})})]})]}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.9119em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mop",children:"sin"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})]})]})})}),"\n",(0,n.jsx)(s.h2,{id:"configuration",children:"Enabling math equations"}),"\n",(0,n.jsx)(s.p,{children:"Enable KaTeX:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Install the ",(0,n.jsx)(s.code,{children:"remark-math"})," and ",(0,n.jsx)(s.code,{children:"rehype-katex"})," plugins:"]}),"\n",(0,n.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(l.Z,{value:"npm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install --save remark-math@6 rehype-katex@7\n"})})}),(0,n.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"yarn add remark-math@6 rehype-katex@7\n"})})}),(0,n.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm add remark-math@6 rehype-katex@7\n"})})})]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:["Make sure to use ",(0,n.jsx)(s.code,{children:"remark-math 6"})," and ",(0,n.jsx)(s.code,{children:"rehype-katex 7"})," for Docusaurus v3 (using MDX v3). We can't guarantee other versions will work."]})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["These 2 plugins are ",(0,n.jsx)(s.a,{href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c",children:(0,n.jsx)(s.strong,{children:"only available as ES Modules"})}),". We recommended to use an ",(0,n.jsx)(s.a,{href:"https://flaviocopes.com/es-modules/",children:(0,n.jsx)(s.strong,{children:"ES Modules"})})," config file:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="ES module docusaurus.config.js"',children:"// highlight-start\nimport remarkMath from 'remark-math';\nimport rehypeKatex from 'rehype-katex';\n// highlight-end\n\n// highlight-start\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n          remarkPlugins: [remarkMath],\n          rehypePlugins: [rehypeKatex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)(s.p,{children:["Using a\n",(0,n.jsx)(s.a,{href:"https://nodejs.org/api/modules.html#modules-commonjs-modules",children:(0,n.jsx)(s.strong,{children:"CommonJS"})}),"\nconfig file?"]})}),(0,n.jsx)(s.p,{children:"If you decide to use a CommonJS config file, it is possible to load those ES module plugins thanks to dynamic imports and an async config creator function:"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="CommonJS module docusaurus.config.js"',children:"// highlight-start\nmodule.exports = async function createConfigAsync() {\n  // highlight-end\n  return {\n    presets: [\n      [\n        '@docusaurus/preset-classic',\n        {\n          docs: {\n            path: 'docs',\n            // highlight-start\n            remarkPlugins: [(await import('remark-math')).default],\n            rehypePlugins: [(await import('rehype-katex')).default],\n            // highlight-end\n          },\n        },\n      ],\n    ],\n  };\n};\n"})})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Include the KaTeX CSS in your config under ",(0,n.jsx)(s.code,{children:"stylesheets"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"export default {\n  //...\n  stylesheets: [\n    {\n      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',\n      type: 'text/css',\n      integrity:\n        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',\n      crossorigin: 'anonymous',\n    },\n  ],\n};\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See a config file example"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\nimport remarkMath from 'remark-math';\nimport rehypeKatex from 'rehype-katex';\n// highlight-end\n\nexport default {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n          remarkPlugins: [remarkMath],\n          rehypePlugins: [rehypeKatex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n  // highlight-start\n  stylesheets: [\n    {\n      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',\n      type: 'text/css',\n      integrity:\n        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',\n      crossorigin: 'anonymous',\n    },\n  ],\n  // highlight-end\n};\n"})})]}),"\n",(0,n.jsx)(s.h2,{id:"self-hosting-katex-assets",children:"Self-hosting KaTeX assets"}),"\n",(0,n.jsxs)(s.p,{children:["Loading stylesheets, fonts, and JavaScript libraries from CDN sources is a good practice for popular libraries and assets, since it reduces the amount of assets you have to host. In case you prefer to self-host the ",(0,n.jsx)(s.code,{children:"katex.min.css"})," (along with required KaTeX fonts), you can download the latest version from ",(0,n.jsx)(s.a,{href:"https://github.com/KaTeX/KaTeX/releases",children:"KaTeX GitHub releases"}),", extract and copy ",(0,n.jsx)(s.code,{children:"katex.min.css"})," and ",(0,n.jsx)(s.code,{children:"fonts"})," directory (only ",(0,n.jsx)(s.code,{children:".woff2"})," font types should be enough) to your site's ",(0,n.jsx)(s.code,{children:"static"})," directory, and in ",(0,n.jsx)(s.code,{children:"docusaurus.config.js"}),", replace the stylesheet's ",(0,n.jsx)(s.code,{children:"href"})," from the CDN URL to your local path (say, ",(0,n.jsx)(s.code,{children:"/katex/katex.min.css"}),")."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  stylesheets: [\n    {\n      href: '/katex/katex.min.css',\n      type: 'text/css',\n    },\n  ],\n};\n"})})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},71670:(e,s,a)=>{a.d(s,{Z:()=>i,a:()=>l});var n=a(27378);const t={},r=n.createContext(t);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);