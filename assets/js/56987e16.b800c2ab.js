"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["27749"],{71602:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>c,default:()=>f,assets:()=>d,toc:()=>p,frontMatter:()=>u});var t=JSON.parse('{"id":"api/plugins/plugin-rsdoctor","title":"\uD83D\uDCE6 plugin-rsdoctor","description":"A Rsdoctor plugin can help you troubleshoot the bundling phase of your Docusaurus site, supporting both Webpack and Rspack.","source":"@site/docs/api/plugins/plugin-rsdoctor.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-rsdoctor","permalink":"/docs/api/plugins/@docusaurus/plugin-rsdoctor","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-rsdoctor.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1729706467000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"slug":"/api/plugins/@docusaurus/plugin-rsdoctor"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-google-gtag","permalink":"/docs/api/plugins/@docusaurus/plugin-google-gtag"},"next":{"title":"\uD83D\uDCE6 plugin-google-tag-manager","permalink":"/docs/api/plugins/@docusaurus/plugin-google-tag-manager"}}'),o=n("24246"),a=n("80980"),l=n("15398"),i=n("58636"),s=n("32240");let u={sidebar_position:7,slug:"/api/plugins/@docusaurus/plugin-rsdoctor"},c="\uD83D\uDCE6 plugin-rsdoctor",d={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function h(e){let r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"-plugin-rsdoctor",children:"\uD83D\uDCE6 plugin-rsdoctor"})}),"\n","\n",(0,o.jsxs)(r.p,{children:["A ",(0,o.jsx)(r.a,{href:"https://rsdoctor.dev/",children:"Rsdoctor"})," plugin can help you troubleshoot the bundling phase of your Docusaurus site, supporting both Webpack and Rspack."]}),"\n",(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsx)(r.p,{children:"Use it to figure out which plugin or loader is slowing down the bundler, and focus your efforts on optimizing the bottleneck."})}),"\n",(0,o.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(i.Z,{value:"npm",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-rsdoctor\n"})})}),(0,o.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-rsdoctor\n"})})}),(0,o.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-rsdoctor\n"})})})]}),"\n",(0,o.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(r.p,{children:"Accepted fields:"}),"\n",(0,o.jsx)(s.Z,{children:(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Name"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Default"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"rsdoctorOptions"})}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"object"})}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"{}"})}),(0,o.jsxs)(r.td,{children:["The ",(0,o.jsx)(r.a,{href:"https://rsdoctor.dev/config/options/options",children:"Rsdoctor bundler plugin options"}),", forwarded as is"]})]})})]})}),"\n",(0,o.jsx)(r.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,o.jsx)(r.p,{children:"You can configure this plugin through plugin options."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      'rsdoctor',\n      {\n        rsdoctorOptions: {\n          mode: 'lite',\n        },\n      },\n    ],\n  ],\n};\n"})})]})}function f(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},58636:function(e,r,n){n.d(r,{Z:()=>l});var t=n("24246");n("27378");var o=n("90496");let a="tabItem_pnkT";function l(e){let{children:r,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n,children:r})}},15398:function(e,r,n){n.d(r,{Z:()=>v});var t=n("24246"),o=n("27378"),a=n("90496"),l=n("54947"),i=n("3620"),s=n("844"),u=n("97486"),c=n("32263"),d=n("16971");function p(e){return o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||o.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var f=n("71607");let g="tabList_Qoir",m="tabItem_AQgk";function b(e){let{className:r,block:n,selectedValue:o,selectValue:i,tabValues:s}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let r=e.currentTarget,n=s[u.indexOf(r)].value;n!==o&&(c(r),i(n))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;r=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;r=u[n]??u[u.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:s.map(e=>{let{value:r,label:n,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,ref:e=>u.push(e),onKeyDown:p,onClick:d,...l,className:(0,a.Z)("tabs__item",m,l?.className,{"tabs__item--active":o===r}),children:n??r},r)})})}function x(e){let{lazy:r,children:n,selectedValue:l}=e,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===l);return e?(0,o.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==l}))})}function j(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,a=function(e){let{values:r,children:n}=e;return(0,o.useMemo)(()=>{let e=r??p(n).map(e=>{let{props:{value:r,label:n,attributes:t,default:o}}=e;return{value:r,label:n,attributes:t,default:o}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[l,f]=(0,o.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=n.find(e=>e.default)??n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:a})),[g,m]=function(e){let{queryString:r=!1,groupId:n}=e,t=(0,i.k6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n}),l=(0,u._X)(a);return[l,(0,o.useCallback)(e=>{if(!a)return;let r=new URLSearchParams(t.location.search);r.set(a,e),t.replace({...t.location,search:r.toString()})},[a,t])]}({queryString:n,groupId:t}),[b,x]=function(e){var r;let{groupId:n}=e;let t=(r=n)?`docusaurus.tab.${r}`:null,[a,l]=(0,d.Nk)(t);return[a,(0,o.useCallback)(e=>{if(!!t)l.set(e)},[t,l])]}({groupId:t}),j=(()=>{let e=g??b;return h({value:e,tabValues:a})?e:null})();return(0,s.Z)(()=>{j&&f(j)},[j]),{selectedValue:l,selectValue:(0,o.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),x(e)},[m,x,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",g),children:[(0,t.jsx)(b,{...r,...e}),(0,t.jsx)(x,{...r,...e})]})}function v(e){let r=(0,f.Z)();return(0,t.jsx)(j,{...e,children:p(e.children)},String(r))}},32240:function(e,r,n){n.d(r,{Z:()=>u});var t=n("24246"),o=n("27378"),a=n("96700"),l=n("3620");let i="apiTable_e8hp",s=o.forwardRef(function(e,r){let{name:n,children:i}=e,s=function(e){let r=e;for(;(0,o.isValidElement)(r);)[r]=o.Children.toArray(r.props.children);if("string"!=typeof r)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return r}(i),u=n?`${n}-${s}`:s,c=`#${u}`,d=(0,l.k6)();return(0,a.Z)().collectAnchor(u),(0,t.jsx)("tr",{id:u,tabIndex:0,ref:d.location.hash===c?r:void 0,onClick:e=>{let r="TD"===e.target.tagName.toUpperCase(),n=!!window.getSelection()?.toString();r&&!n&&d.push(c)},onKeyDown:e=>{"Enter"===e.key&&d.push(c)},children:i.props.children})});function u(e){let{children:r,name:n}=e;if("table"!==r.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[a,l]=o.Children.toArray(r.props.children),u=(0,o.useRef)(null);(0,o.useEffect)(()=>{u.current?.focus()},[u]);let c=o.Children.map(l.props.children,e=>(0,t.jsx)(s,{name:n,ref:u,children:e}));return(0,t.jsxs)("table",{className:i,children:[a,(0,t.jsx)("tbody",{children:c})]})}},80980:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return l}});var t=n(27378);let o={},a=t.createContext(o);function l(e){let r=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);