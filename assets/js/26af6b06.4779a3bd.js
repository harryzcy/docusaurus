"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24720],{15995:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(62540);t(63696);var s=t(11750);function o({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)("tabItem_pnkT",t),hidden:n,children:e})}},27446:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(62540),s=t(63696),o=t(11750),i=t(7846),a=t(49519),l=t(96439),c=t(19739),d=t(66904),u=t(79244);function h(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function p({value:e,tabValues:n}){return n.some(n=>n.value===e)}var f=t(10709);function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}function g(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function y({className:e,block:n,selectedValue:t,selectValue:s,tabValues:a}){let l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{let n=e.currentTarget,r=a[l.indexOf(n)].value;r!==t&&(c(n),s(r))},u=e=>{var n,t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=l.indexOf(e.currentTarget)+1;r=null!==(n=l[t])&&void 0!==n?n:l[0];break}case"ArrowLeft":{let n=l.indexOf(e.currentTarget)-1;r=null!==(t=l[n])&&void 0!==t?t:l[l.length-1]}}null==r||r.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},e),children:a.map(({value:e,label:n,attributes:s})=>(0,r.jsx)("li",g(m({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>l.push(e),onKeyDown:u,onClick:d},s),{className:(0,o.A)("tabs__item","tabItem_AQgk",null==s?void 0:s.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e))})}function b({lazy:e,children:n,selectedValue:t}){let i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===t);return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,o=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=null!=n?n:h(t).map(({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r}));return!function(e){let n=(0,d.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,f]=(0,s.useState)(()=>(function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=null!==(t=n.find(e=>e.default))&&void 0!==t?t:n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:o})),[m,g]=function({queryString:e=!1,groupId:n}){let t=(0,a.W6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c.aZ)(r),(0,s.useCallback)(e=>{var n,s;if(!r)return;let o=new URLSearchParams(t.location.search);o.set(r,e),t.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}({},t.location),s=s={search:o.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(s)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}),n))},[r,t])]}({queryString:t,groupId:r}),[y,b]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[t,r]=(0,u.Dv)(n);return[t,(0,s.useCallback)(e=>{n&&r.set(e)},[n,r])]}({groupId:r}),x=(()=>{let e=null!=m?m:y;return p({value:e,tabValues:o})?e:null})();return(0,l.A)(()=>{x&&f(x)},[x]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),b(e)},[g,b,o]),tabValues:o}}(e);return(0,r.jsxs)("div",{className:(0,o.A)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(y,m({},n,e)),(0,r.jsx)(b,m({},n,e))]})}function w(e){let n=(0,f.A)();return(0,r.jsx)(x,g(m({},e),{children:h(e.children)}),String(n))}},60262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});let r=JSON.parse('{"id":"advanced/ssg","title":"Static site generation (SSG)","description":"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO.","source":"@site/docs/advanced/ssg.mdx","sourceDirName":"advanced","slug":"/advanced/ssg","permalink":"/docs/advanced/ssg","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/ssg.mdx","tags":[],"version":"current","lastUpdatedBy":"Chris Cho","lastUpdatedAt":1726217516000,"frontMatter":{"sidebar_label":"Static site generation","description":"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."},"sidebar":"docs","previous":{"title":"Routing","permalink":"/docs/advanced/routing"},"next":{"title":"Client architecture","permalink":"/docs/advanced/client"}}');var s=t(62540),o=t(43023),i=t(27446),a=t(15995);let l={sidebar_label:"Static site generation",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."},c="Static site generation (SSG)",d={},u=[{value:"Understanding SSR",id:"understanding-ssr",level:2},{value:"Escape hatches",id:"escape-hatches",level:2},{value:"<code>&lt;BrowserOnly&gt;</code>",id:"browseronly",level:3},{value:"<code>useIsBrowser</code>",id:"useisbrowser",level:3},{value:"<code>useEffect</code>",id:"useeffect",level:3},{value:"<code>ExecutionEnvironment</code>",id:"executionenvironment",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"static-site-generation-ssg",children:"Static site generation (SSG)"})}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.a,{href:"/docs/advanced/architecture",children:"architecture"}),", we mentioned that the theme is run in Webpack. But beware: that doesn't mean it always has access to browser globals! The theme is built twice:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["During ",(0,s.jsx)(n.strong,{children:"server-side rendering"}),", the theme is compiled in a sandbox called ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/react-dom-server.html",children:"React DOM Server"}),'. You can see this as a "headless browser", where there is no ',(0,s.jsx)(n.code,{children:"window"})," or ",(0,s.jsx)(n.code,{children:"document"}),", only React. SSR produces static HTML pages."]}),"\n",(0,s.jsxs)(n.li,{children:["During ",(0,s.jsx)(n.strong,{children:"client-side rendering"}),", the theme is compiled to JavaScript that gets eventually executed in the browser, so it has access to browser variables."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"SSR or SSG?",type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Server-side rendering"})," and ",(0,s.jsx)(n.em,{children:"static site generation"})," can be different concepts, but we use them interchangeably."]}),(0,s.jsxs)(n.p,{children:["Strictly speaking, Docusaurus is a static site generator, because there's no server-side runtime\u2014we statically render to HTML files that are deployed on a CDN, instead of dynamically pre-rendering on each request. This differs from the working model of ",(0,s.jsx)(n.a,{href:"https://nextjs.org/",children:"Next.js"}),"."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, while you probably know not to access Node globals like ",(0,s.jsx)(n.code,{children:"process"})," (",(0,s.jsx)(n.a,{href:"#node-env",children:"or can we?"}),") or the ",(0,s.jsx)(n.code,{children:"'fs'"})," module, you can't freely access browser globals either."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n\nexport default function WhereAmI() {\n  return <span>{window.location.href}</span>;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This looks like idiomatic React, but if you run ",(0,s.jsx)(n.code,{children:"docusaurus build"}),", you will get an error:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ReferenceError: window is not defined\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is because during server-side rendering, the Docusaurus app isn't actually run in browser, and it doesn't know what ",(0,s.jsx)(n.code,{children:"window"})," is."]}),"\n",(0,s.jsxs)(t,{id:"node-env",children:[(0,s.jsxs)("summary",{children:["What about ",(0,s.jsx)("code",{children:"process.env.NODE_ENV"}),"?"]}),(0,s.jsxs)(n.p,{children:['One exception to the "no Node globals" rule is ',(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"}),". In fact, you can use it in React, because Webpack injects this variable as a global:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n\nexport default function expensiveComp() {\n  if (process.env.NODE_ENV === 'development') {\n    return <>This component is not shown in development</>;\n  }\n  const res = someExpensiveOperationThatLastsALongTime();\n  return <>{res}</>;\n}\n"})}),(0,s.jsxs)(n.p,{children:["During Webpack build, the ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," will be replaced with the value, either ",(0,s.jsx)(n.code,{children:"'development'"})," or ",(0,s.jsx)(n.code,{children:"'production'"}),". You will then get different build results after dead code elimination:"]}),(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"Development",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"import React from 'react';\n\nexport default function expensiveComp() {\n  // highlight-next-line\n  if ('development' === 'development') {\n+   return <>This component is not shown in development</>;\n  }\n- const res = someExpensiveOperationThatLastsALongTime();\n- return <>{res}</>;\n}\n"})})}),(0,s.jsx)(a.A,{value:"Production",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"import React from 'react';\n\nexport default function expensiveComp() {\n  // highlight-next-line\n- if ('production' === 'development') {\n-   return <>This component is not shown in development</>;\n- }\n+ const res = someExpensiveOperationThatLastsALongTime();\n+ return <>{res}</>;\n}\n"})})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"understanding-ssr",children:"Understanding SSR"}),"\n",(0,s.jsx)(n.p,{children:"React is not just a dynamic UI runtime\u2014it's also a templating engine. Because Docusaurus sites mostly contain static contents, it should be able to work without any JavaScript (which React runs in), but only plain HTML/CSS. And that's what server-side rendering offers: statically rendering your React code into HTML, without any dynamic content. An HTML file has no concept of client state (it's purely markup), hence it shouldn't rely on browser APIs."}),"\n",(0,s.jsxs)(n.p,{children:["These HTML files are the first to arrive at the user's browser screen when a URL is visited (see ",(0,s.jsx)(n.a,{href:"/docs/advanced/routing",children:"routing"}),'). Afterwards, the browser fetches and runs other JS code to provide the "dynamic" parts of your site\u2014anything implemented with JavaScript. However, before that, the main content of your page is already visible, allowing faster loading.']}),"\n",(0,s.jsx)(n.p,{children:'In CSR-only apps, all DOM elements are generated on client side with React, and the HTML file only ever contains one root element for React to mount DOM to; in SSR, React is already facing a fully built HTML page, and it only needs to correlate the DOM elements with the virtual DOM in its model. This step is called "hydration". After React has hydrated the static markup, the app starts to work as any normal React app.'}),"\n",(0,s.jsxs)(n.p,{children:["Note that Docusaurus is ultimately a single-page application, so static site generation is only an optimization (",(0,s.jsx)(n.em,{children:"progressive enhancement"}),", as it's called), but our functionality does not fully depend on those HTML files. This is contrary to site generators like ",(0,s.jsx)(n.a,{href:"https://jekyllrb.com/",children:"Jekyll"})," and ",(0,s.jsx)(n.a,{href:"https://v1.docusaurus.io/",children:"Docusaurus v1"}),", where all files are statically transformed to markup, and interactiveness is added through external JavaScript linked with ",(0,s.jsx)(n.code,{children:"<script>"})," tags. If you inspect the build output, you will still see JS assets under ",(0,s.jsx)(n.code,{children:"build/assets/js"}),", which are, really, the core of Docusaurus."]}),"\n",(0,s.jsx)(n.h2,{id:"escape-hatches",children:"Escape hatches"}),"\n",(0,s.jsx)(n.p,{children:"If you want to render any dynamic content on your screen that relies on the browser API to be functional at all, for example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Our ",(0,s.jsx)(n.a,{href:"/docs/markdown-features/code-blocks#interactive-code-editor",children:"live codeblock"}),", which runs in the browser's JS runtime"]}),"\n",(0,s.jsxs)(n.li,{children:["Our ",(0,s.jsx)(n.a,{href:"/docs/markdown-features/assets#themed-images",children:"themed image"})," that detects the user's color scheme to display different images"]}),"\n",(0,s.jsxs)(n.li,{children:["The JSON viewer of our debug panel which uses the ",(0,s.jsx)(n.code,{children:"window"})," global for styling"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You may need to escape from SSR since static HTML can't display anything useful without knowing the client state."}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"It is important for the first client-side render to produce the exact same DOM structure as server-side rendering, otherwise, React will correlate virtual DOM with the wrong DOM elements."}),(0,s.jsxs)(n.p,{children:["Therefore, the na\xefve attempt of ",(0,s.jsx)(n.code,{children:"if (typeof window !== 'undefined) {/* render something */}"})," won't work appropriately as a browser vs. server detection, because the first client render would instantly render different markup from the server-generated one."]}),(0,s.jsxs)(n.p,{children:["You can read more about this pitfall in ",(0,s.jsx)(n.a,{href:"https://www.joshwcomeau.com/react/the-perils-of-rehydration/",children:"The Perils of Rehydration"}),"."]})]}),"\n",(0,s.jsx)(n.p,{children:"We provide several more reliable ways to escape SSR."}),"\n",(0,s.jsx)(n.h3,{id:"browseronly",children:(0,s.jsx)(n.code,{children:"<BrowserOnly>"})}),"\n",(0,s.jsxs)(n.p,{children:["If you need to render some component in browser only (for example, because the component relies on browser specifics to be functional at all), one common approach is to wrap your component with ",(0,s.jsx)(n.a,{href:"/docs/docusaurus-core#browseronly",children:(0,s.jsx)(n.code,{children:"<BrowserOnly>"})})," to make sure it's invisible during SSR and only rendered in CSR."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nfunction MyComponent(props) {\n  return (\n    // highlight-start\n    <BrowserOnly fallback={<div>Loading...</div>}>\n      {() => {\n        const LibComponent =\n          require('some-lib-that-accesses-window').LibComponent;\n        return <LibComponent {...props} />;\n      }}\n    </BrowserOnly>\n    // highlight-end\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It's important to realize that the children of ",(0,s.jsx)(n.code,{children:"<BrowserOnly>"})," is not a JSX element, but a function that ",(0,s.jsx)(n.em,{children:"returns"})," an element. This is a design decision. Consider this code:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nfunction MyComponent() {\n  return (\n    <BrowserOnly>\n      {/* highlight-start */}\n      {/* DON'T DO THIS - doesn't actually work */}\n      <span>page url = {window.location.href}</span>\n      {/* highlight-end */}\n    </BrowserOnly>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["While you may expect that ",(0,s.jsx)(n.code,{children:"BrowserOnly"})," hides away the children during server-side rendering, it actually can't. When the React renderer tries to render this JSX tree, it does see the ",(0,s.jsx)(n.code,{children:"{window.location.href}"})," variable as a node of this tree and tries to render it, although it's actually not used! Using a function ensures that we only let the renderer see the browser-only component when it's needed."]}),"\n",(0,s.jsx)(n.h3,{id:"useisbrowser",children:(0,s.jsx)(n.code,{children:"useIsBrowser"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use the ",(0,s.jsx)(n.code,{children:"useIsBrowser()"})," hook to test if the component is currently in a browser environment. It returns ",(0,s.jsx)(n.code,{children:"false"})," in SSR and ",(0,s.jsx)(n.code,{children:"true"})," is CSR, after first client render. Use this hook if you only need to perform certain conditional operations on client-side, but not render an entirely different UI."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import useIsBrowser from '@docusaurus/useIsBrowser';\n\nfunction MyComponent() {\n  const isBrowser = useIsBrowser();\n  const location = isBrowser ? window.location.href : 'fetching location...';\n  return <span>{location}</span>;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"useeffect",children:(0,s.jsx)(n.code,{children:"useEffect"})}),"\n",(0,s.jsxs)(n.p,{children:["Lastly, you can put your logic in ",(0,s.jsx)(n.code,{children:"useEffect()"})," to delay its execution until after first CSR. This is most appropriate if you are only performing side-effects but don't ",(0,s.jsx)(n.em,{children:"get"})," data from the client state."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'function MyComponent() {\n  useEffect(() => {\n    // Only logged in the browser console; nothing is logged during server-side rendering\n    console.log("I\'m now in the browser");\n  }, []);\n  return <span>Some content...</span>;\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"executionenvironment",children:(0,s.jsx)(n.code,{children:"ExecutionEnvironment"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/docusaurus-core#executionenvironment",children:(0,s.jsx)(n.code,{children:"ExecutionEnvironment"})})," namespace contains several values, and ",(0,s.jsx)(n.code,{children:"canUseDOM"})," is an effective way to detect browser environment."]}),"\n",(0,s.jsxs)(n.p,{children:["Beware that it essentially checked ",(0,s.jsx)(n.code,{children:"typeof window !== 'undefined'"})," under the hood, so you should not use it for rendering-related logic, but only imperative code, like reacting to user input by sending web requests, or dynamically importing libraries, where DOM isn't updated at all."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="a-client-module.js"',children:"import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';\n\nif (ExecutionEnvironment.canUseDOM) {\n  document.title = \"I'm loaded!\";\n}\n"})})]})}function p(e={}){let{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(63696);let s={},o=r.createContext(s);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);