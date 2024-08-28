"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22888],{61132:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(24246);r(27378);var o=r(40624);function c({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)("tabItem_pnkT",r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(24246),o=r(27378),c=r(40624),s=r(75527),l=r(3620),i=r(44479),a=r(62821),u=r(52196),d=r(53589);function p(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b({value:e,tabValues:t}){return t.some(t=>t.value===e)}var f=r(29088);function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function j(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function y({className:e,block:t,selectedValue:r,selectValue:o,tabValues:l}){let i=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.o5)(),u=e=>{let t=e.currentTarget,n=l[i.indexOf(t)].value;n!==r&&(a(t),o(n))},d=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=i.indexOf(e.currentTarget)+1;n=null!==(t=i[r])&&void 0!==t?t:i[0];break}case"ArrowLeft":{let t=i.indexOf(e.currentTarget)-1;n=null!==(r=i[t])&&void 0!==r?r:i[i.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":t},e),children:l.map(({value:e,label:t,attributes:o})=>(0,n.jsx)("li",j(h({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},o),{className:(0,c.Z)("tabs__item","tabItem_AQgk",null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function m({lazy:e,children:t,selectedValue:r}){let s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=s.find(e=>e.props.value===r);return e?(0,o.cloneElement)(e,{className:(0,c.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,c=function(e){let{values:t,children:r}=e;return(0,o.useMemo)(()=>{let e=null!=t?t:p(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[s,f]=(0,o.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:c})),[h,j]=function({queryString:e=!1,groupId:t}){let r=(0,l.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,a._X)(n),(0,o.useCallback)(e=>{var t,o;if(!n)return;let c=new URLSearchParams(r.location.search);c.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),o=o={search:c.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[y,m]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,d.Nk)(t);return[r,(0,o.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),g=(()=>{let e=null!=h?h:y;return b({value:e,tabValues:c})?e:null})();return(0,i.Z)(()=>{g&&f(g)},[g]),{selectedValue:s,selectValue:(0,o.useCallback)(e=>{if(!b({value:e,tabValues:c}))throw Error(`Can't select invalid tab value=${e}`);f(e),j(e),m(e)},[j,m,c]),tabValues:c}}(e);return(0,n.jsxs)("div",{className:(0,c.Z)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(y,h({},t,e)),(0,n.jsx)(m,h({},t,e))]})}function O(e){let t=(0,f.Z)();return(0,n.jsx)(g,j(h({},e),{children:p(e.children)}),String(t))}},94544:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(24246);r(27378);var o=r(29088);function c({children:e,fallback:t}){return(0,o.Z)()?(0,n.jsx)(n.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},52605:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(24246),o=r(27378),c=r(80474),s=r(3620);let l=o.forwardRef(function({name:e,children:t},r){let l=function(e){let t=e;for(;(0,o.isValidElement)(t);)[t]=o.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(t),i=e?`${e}-${l}`:l,a=`#${i}`,u=(0,s.k6)();return(0,c.Z)().collectAnchor(i),(0,n.jsx)("tr",{id:i,tabIndex:0,ref:u.location.hash===a?r:void 0,onClick:e=>{"A"!==e.target.tagName.toUpperCase()&&u.push(a)},onKeyDown:e=>{"Enter"===e.key&&u.push(a)},children:t.props.children})});function i({children:e,name:t}){if("table"!==e.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[r,c]=o.Children.toArray(e.props.children),s=(0,o.useRef)(null);(0,o.useEffect)(()=>{var e;null===(e=s.current)||void 0===e||e.focus()},[s]);let i=o.Children.map(c.props.children,e=>(0,n.jsx)(l,{name:t,ref:s,children:e}));return(0,n.jsxs)("table",{className:"apiTable_e8hp",children:[r,(0,n.jsx)("tbody",{children:i})]})}},82064:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(24246);r(27378);var o=r(41428),c=r(92053),s=r(36712),l=r(97555),i=r(61132),a=r(38112);let u=void 0;function d({code:e,pluginName:t,presetOptionName:r}){let d=(0,c.zu)(u).path;return(0,n.jsxs)(l.Z,{groupId:"api-config-ex",children:[(0,n.jsxs)(i.Z,{value:"preset",label:(0,s.I)({message:"Preset options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(s.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,n.jsx)(o.Z,{to:`${d}/using-plugins#docusauruspreset-classic`,children:(0,n.jsx)(s.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,n.jsx)(a.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${r}: ${e.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,n.jsxs)(i.Z,{value:"plugin",label:(0,s.I)({message:"Plugin options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(s.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,n.jsx)(a.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${t}',
      // highlight-start
      ${e.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},38112:(e,t,r)=>{r.d(t,{Z:()=>el});var n,o,c,s={};r.r(s),r.d(s,{ButtonExample:()=>N});var l=r(24246),i=r(27378),a=r(40624),u=r(29088),d=r(32711),p=r(36712),b=r(4423),f=r(94544),h=r(30691),j=r(78844),y=r(73919);function m(){let{prism:e}=(0,y.L)(),{colorMode:t}=(0,j.I)(),r=e.theme,n=e.darkTheme||r;return"dark"===t?n:r}var g=r(88941);function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function v({children:e}){return(0,l.jsx)("div",{className:(0,a.Z)("playgroundHeader_Tvsk"),children:e})}function w(){return(0,l.jsx)("div",{children:"Loading..."})}function x(){return(0,l.jsx)(f.Z,{fallback:(0,l.jsx)(w,{}),children:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{fallback:e=>(0,l.jsx)(h.Ac,O({},e)),children:(0,l.jsx)(d.i5,{})}),(0,l.jsx)(d.IF,{})]})})}function P(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{children:(0,l.jsx)(p.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,l.jsx)("div",{className:"playgroundPreview_mApW",children:(0,l.jsx)(x,{})})]})}function k(){let e=(0,u.Z)();return(0,l.jsx)(d.uz,{className:"playgroundEditor_TySg"},String(e))}function S(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{children:(0,l.jsx)(p.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,l.jsx)(k,{})]})}let E=e=>`${e};`;function D(e){var t,r,n,o,{children:c,transformCode:s}=e,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children","transformCode"]);let{siteConfig:{themeConfig:a}}=(0,b.Z)(),{liveCodeBlock:{playgroundPosition:u}}=a,p=m(),f=null!==(o=null===(n=i.metastring)||void 0===n?void 0:n.includes("noInline"))&&void 0!==o&&o;return(0,l.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,l.jsx)(d.nu,(t=O({code:null==c?void 0:c.replace(/\n$/,""),noInline:f,transformCode:null!=s?s:E,theme:p},i),r=r={children:"top"===u?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(P,{}),(0,l.jsx)(S,{})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(S,{}),(0,l.jsx)(P,{})]})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))})}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function N(e){var t,r;return(0,l.jsx)("button",(t=B({type:"button"},e),r=r={style:B({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let C=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({React:i},i,s);var Z=r(89583),I=r(6324),L=r.n(I);let T=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),_=RegExp("\\{(?<range>[\\d,-]+)\\}"),A={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"<!--",end:"-->"}},$=(n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},A),o=o={lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}),n),M=Object.keys(A);function R(e,t){let r=e.map(e=>{let{start:r,end:n}=$[e];return`(?:${r}\\s*(${t.flatMap(e=>{var t,r;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(r=e.block)||void 0===r?void 0:r.end].filter(Boolean)}).join("|")})\\s*${n})`}).join("|");return RegExp(`^\\s*(?:${r})\\s*$`)}function V(e){var t,r,{as:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["as"]);let c=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach(([e,n])=>{let o=t[e];o&&"string"==typeof n&&(r[o]=n)}),r}(m());return(0,l.jsx)(n,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={style:c,className:(0,a.Z)(o.className,"codeBlockContainer_jDV4",Z.k.common.codeBlock)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let H={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function W({children:e,className:t}){return(0,l.jsx)(V,{as:"pre",tabIndex:0,className:(0,a.Z)(H.codeBlockStandalone,"thin-scrollbar",t),children:(0,l.jsx)("code",{className:H.codeBlockLines,children:e})})}var q=r(51114);let F={attributes:!0,characterData:!0,childList:!0,subtree:!0};var z=r(26101);let U={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function Q({line:e,classNames:t,showLineNumbers:r,getLineProps:n,getTokenProps:o}){var c,s;1===e.length&&"\n"===e[0].content&&(e[0].content="");let i=n({line:e,className:(0,a.Z)(t,r&&U.codeLine)}),u=e.map((e,t)=>(0,l.jsx)("span",G({},o({token:e})),t));return(0,l.jsxs)("span",(c=G({},i),s=s={children:[r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:U.codeLineNumber}),(0,l.jsx)("span",{className:U.codeLineContent,children:u})]}):u,(0,l.jsx)("br",{})]},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(s)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(s,e))}),c))}var X=r(34370);function Y(e){var t,r;return(0,l.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,l.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}function J(e){var t,r;return(0,l.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,l.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee({code:e,className:t}){let[r,n]=(0,i.useState)(!1),o=(0,i.useRef)(void 0),c=(0,i.useCallback)(()=>{(0,X.Z)(e),n(!0),o.current=window.setTimeout(()=>{n(!1)},1e3)},[e]);return(0,i.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,l.jsx)("button",{type:"button","aria-label":r?(0,p.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,p.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",t,K.copyButton,r&&K.copyButtonCopied),onClick:c,children:(0,l.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,l.jsx)(Y,{className:K.copyButtonIcon}),(0,l.jsx)(J,{className:K.copyButtonSuccessIcon})]})})}function et(e){var t,r;return(0,l.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,l.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let er={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function en({className:e,onClick:t,isEnabled:r}){let n=(0,p.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,l.jsx)("button",{type:"button",onClick:t,className:(0,a.Z)("clean-btn",e,r&&er.wordWrapButtonEnabled),"aria-label":n,title:n,children:(0,l.jsx)(et,{className:er.wordWrapButtonIcon,"aria-hidden":"true"})})}function eo({children:e,className:t="",metastring:r,title:n,showLineNumbers:o,language:c}){var s,u,d,p;let{prism:{defaultLanguage:b,magicComments:f}}=(0,y.L)(),h=null==(u=null!==(s=null!=c?c:function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==s?s:b)?void 0:u.toLowerCase(),j=m(),g=function(){let[e,t]=(0,i.useState)(!1),[r,n]=(0,i.useState)(!1),o=(0,i.useRef)(null),c=(0,i.useCallback)(()=>{let r=o.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t(e=>!e)},[o,e]),s=(0,i.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=o.current;n(e>t||o.current.querySelector("code").hasAttribute("style"))},[o]);return!function(e,t){let[r,n]=(0,i.useState)(),o=(0,i.useCallback)(()=>{var t;n(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))},[e,n]);(0,i.useEffect)(()=>{o()},[o]),function(e,t,r=F){let n=(0,q.zX)(t),o=(0,q.Ql)(r);(0,i.useEffect)(()=>{let t=new MutationObserver(n);return e&&t.observe(e,o),()=>t.disconnect()},[e,n,o])}(r,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(o,s),(0,i.useEffect)(()=>{s()},[e,s]),(0,i.useEffect)(()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)}),[s]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:r,toggle:c}}(),O=(null!==(p=null==r?void 0:null===(d=r.match(T))||void 0===d?void 0:d.groups.title)&&void 0!==p?p:"")||n,{lineClassNames:v,code:w}=function(e,t){let r=e.replace(/\n$/,""),{language:n,magicComments:o,metastring:c}=t;if(c&&_.test(c)){let e=c.match(_).groups.range;if(0===o.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=o[0].className;return{lineClassNames:Object.fromEntries(L()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:r}}if(void 0===n)return{lineClassNames:{},code:r};let s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return R(["js","jsBlock"],t);case"jsx":case"tsx":return R(["js","jsBlock","jsx"],t);case"html":return R(["js","jsBlock","html"],t);case"python":case"py":case"bash":return R(["bash"],t);case"markdown":case"md":return R(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return R(["tex"],t);case"lua":case"haskell":case"sql":return R(["lua"],t);case"wasm":return R(["wasm"],t);case"vb":case"vba":case"visual-basic":return R(["vb","rem"],t);case"vbnet":return R(["vbnet","rem"],t);case"batch":return R(["rem"],t);case"basic":return R(["rem","f90"],t);case"fsharp":return R(["js","ml"],t);case"ocaml":case"sml":return R(["ml"],t);case"fortran":return R(["f90"],t);case"cobol":return R(["cobol"],t);default:return R(M,t)}}(n,o),l=r.split("\n"),i=Object.fromEntries(o.map(e=>[e.className,{start:0,range:""}])),a=Object.fromEntries(o.filter(e=>e.line).map(({className:e,line:t})=>[t,e])),u=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.start,e])),d=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.end,e]));for(let e=0;e<l.length;){let t=l[e].match(s);if(!t){e+=1;continue}let r=t.slice(1).find(e=>void 0!==e);a[r]?i[a[r]].range+=`${e},`:u[r]?i[u[r]].start=e:d[r]&&(i[d[r]].range+=`${i[d[r]].start}-${e-1},`),l.splice(e,1)}r=l.join("\n");let p={};return Object.entries(i).forEach(([e,{range:t}])=>{L()(t).forEach(t=>{var r;null!==(r=p[t])&&void 0!==r||(p[t]=[]),p[t].push(e)})}),{lineClassNames:p,code:r}}(e,{metastring:r,language:h,magicComments:f}),x=null!=o?o:!!(null==r?void 0:r.includes("showLineNumbers"));return(0,l.jsxs)(V,{as:"div",className:(0,a.Z)(t,h&&!t.includes(`language-${h}`)&&`language-${h}`),children:[O&&(0,l.jsx)("div",{className:H.codeBlockTitle,children:O}),(0,l.jsxs)("div",{className:H.codeBlockContent,children:[(0,l.jsx)(z.y$,{theme:j,code:w,language:null!=h?h:"text",children:({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:o})=>(0,l.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,a.Z)(e,H.codeBlock,"thin-scrollbar"),style:t,children:(0,l.jsx)("code",{className:(0,a.Z)(H.codeBlockLines,x&&H.codeBlockLinesWithNumbering),children:r.map((e,t)=>(0,l.jsx)(Q,{line:e,getLineProps:n,getTokenProps:o,classNames:v[t],showLineNumbers:x},t))})})}),(0,l.jsxs)("div",{className:H.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,l.jsx)(en,{className:H.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,l.jsx)(ee,{className:H.codeButton,code:w})]})]})]})}function ec(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}let es=(c=function(e){var t,r,{children:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children"]);let c=(0,u.Z)(),s=i.Children.toArray(n).some(e=>(0,i.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n,a="string"==typeof s?eo:W;return(0,l.jsx)(a,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={children:s},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t),String(c))},function(e){return e.live?(0,l.jsx)(D,ec({scope:C},e)):(0,l.jsx)(c,ec({},e))});function el(e){return(0,l.jsx)(es,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e))}},81172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>b});var n=r(24246),o=r(71670),c=r(97555),s=r(61132),l=r(52605),i=r(82064);let a={sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},u="\u{1F4E6} theme-classic",d={id:"api/themes/theme-classic",title:"\u{1F4E6} theme-classic",description:"The classic theme for Docusaurus.",source:"@site/docs/api/themes/theme-classic.mdx",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-classic",permalink:"/docs/api/themes/@docusaurus/theme-classic",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-classic.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1724759565e3,sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},sidebar:"api",previous:{title:"Configuration",permalink:"/docs/api/themes/configuration"},next:{title:"\u{1F4E6} theme-live-codeblock",permalink:"/docs/api/themes/@docusaurus/theme-live-codeblock"}},p={},b=[{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function f(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"-theme-classic",children:"\u{1F4E6} theme-classic"})}),"\n","\n",(0,n.jsx)(t.p,{children:"The classic theme for Docusaurus."}),"\n",(0,n.jsxs)(t.p,{children:["You can refer to the ",(0,n.jsx)(t.a,{href:"/docs/api/themes/configuration",children:"theme configuration page"})," for more details on the configuration."]}),"\n",(0,n.jsxs)(c.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-classic\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/theme-classic\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-classic\n"})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you have installed ",(0,n.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install it as a dependency."]})}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,n.jsx)(l.Z,{children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"customCss"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"string[] | string"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"[]"})}),(0,n.jsxs)(t.td,{children:["Stylesheets to be imported globally as ",(0,n.jsx)(t.a,{href:"/docs/advanced/client#client-modules",children:"client modules"}),". Relative paths are resolved against the site directory."]})]})})]})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Most configuration for the theme is done in ",(0,n.jsx)(t.code,{children:"themeConfig"}),", which can be found in ",(0,n.jsx)(t.a,{href:"/docs/api/themes/configuration",children:"theme configuration"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,n.jsx)(t.p,{children:"You can configure this theme through preset options or plugin options."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,n.jsx)(i.Z,{pluginName:"@docusaurus/theme-classic",presetOptionName:"theme",code:"{\n  customCss: './src/css/custom.css',\n}"})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}}}]);