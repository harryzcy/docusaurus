"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["52375"],{27121:function(e,a,t){t.r(a),t.d(a,{frontMatter:()=>o,default:()=>m,contentTitle:()=>c,assets:()=>u,toc:()=>h,metadata:()=>r});var r=JSON.parse('{"id":"api/themes/theme-search-algolia","title":"\uD83D\uDCE6 theme-search-algolia","description":"This theme provides a @theme/SearchBar component that integrates with Algolia DocSearch easily. Combined with @docusaurus/theme-classic, it provides a very easy search integration. You can read more on search documentation.","source":"@site/docs/api/themes/theme-search-algolia.mdx","sourceDirName":"api/themes","slug":"/api/themes/@docusaurus/theme-search-algolia","permalink":"/docs/api/themes/@docusaurus/theme-search-algolia","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-search-algolia.mdx","tags":[],"version":"current","lastUpdatedBy":"Daniel Kuschny","lastUpdatedAt":1743178850000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"slug":"/api/themes/@docusaurus/theme-search-algolia"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 theme-live-codeblock","permalink":"/docs/api/themes/@docusaurus/theme-live-codeblock"},"next":{"title":"\uD83D\uDCE6 theme-mermaid","permalink":"/docs/api/themes/@docusaurus/theme-mermaid"}}'),n=t(85893),s=t(80980),l=t(15398),i=t(58636);let o={sidebar_position:4,slug:"/api/themes/@docusaurus/theme-search-algolia"},c="\uD83D\uDCE6 theme-search-algolia",u={},h=[];function d(e){let a={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"-theme-search-algolia",children:"\uD83D\uDCE6 theme-search-algolia"})}),"\n",(0,n.jsxs)(a.p,{children:["This theme provides a ",(0,n.jsx)(a.code,{children:"@theme/SearchBar"})," component that integrates with Algolia DocSearch easily. Combined with ",(0,n.jsx)(a.code,{children:"@docusaurus/theme-classic"}),", it provides a very easy search integration. You can read more on ",(0,n.jsx)(a.a,{href:"/docs/search",children:"search"})," documentation."]}),"\n",(0,n.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(i.Z,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-search-algolia\n"})})}),(0,n.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"yarn add @docusaurus/theme-search-algolia\n"})})}),(0,n.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-search-algolia\n"})})}),(0,n.jsx)(i.Z,{value:"bun",label:"Bun",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"bun add @docusaurus/theme-search-algolia\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["This theme also adds search page available at ",(0,n.jsx)(a.code,{children:"/search"})," (as swizzlable ",(0,n.jsx)(a.code,{children:"SearchPage"})," component) path with OpenSearch support. You can change this default path via ",(0,n.jsx)(a.code,{children:"themeConfig.algolia.searchPagePath"}),". Use ",(0,n.jsx)(a.code,{children:"false"})," to disable search page."]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["If you have installed ",(0,n.jsx)(a.code,{children:"@docusaurus/preset-classic"}),", you don't need to install it as a dependency."]})})]})}function m(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},58636:function(e,a,t){t.d(a,{Z:()=>s});var r=t(85893);t(67294);var n=t(90496);function s(e){let{children:a,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_pnkT",s),hidden:t,children:a})}},15398:function(e,a,t){t.d(a,{Z:()=>v});var r=t(85893),n=t(67294),s=t(90496),l=t(54947),i=t(3620),o=t(844),c=t(97486),u=t(32263),h=t(16971);function d(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:a,tabValues:t}=e;return t.some(e=>e.value===a)}var p=t(71607);function f(e){let{className:a,block:t,selectedValue:n,selectValue:i,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),h=e=>{let a=e.currentTarget,t=o[c.indexOf(a)].value;t!==n&&(u(a),i(t))},d=e=>{let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1]}}a?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},a),children:o.map(e=>{let{value:a,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>{c.push(e)},onKeyDown:d,onClick:h,...l,className:(0,s.Z)("tabs__item","tabItem_AQgk",l?.className,{"tabs__item--active":n===a}),children:t??a},a)})})}function b(e){let{lazy:a,children:t,selectedValue:l}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){let e=i.find(e=>e.props.value===l);return e?(0,n.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==l}))})}function g(e){let a=function(e){let{defaultValue:a,queryString:t=!1,groupId:r}=e,s=function(e){let{values:a,children:t}=e;return(0,n.useMemo)(()=>{let e=a??d(t).map(e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}});return!function(e){let a=(0,u.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,t])}(e),[l,p]=(0,n.useState)(()=>(function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:a,tabValues:s})),[f,b]=function(e){let{queryString:a=!1,groupId:t}=e,r=(0,i.k6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,c._X)(s),(0,n.useCallback)(e=>{if(!s)return;let a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})},[s,r])]}({queryString:t,groupId:r}),[g,v]=function(e){let{groupId:a}=e,t=a?`docusaurus.tab.${a}`:null,[r,s]=(0,h.Nk)(t);return[r,(0,n.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:r}),x=(()=>{let e=f??g;return m({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{x&&p(x)},[x]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),b(e),v(e)},[b,v,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(f,{...a,...e}),(0,r.jsx)(b,{...a,...e})]})}function v(e){let a=(0,p.Z)();return(0,r.jsx)(g,{...e,children:d(e.children)},String(a))}},80980:function(e,a,t){t.d(a,{Z:()=>i,a:()=>l});var r=t(67294);let n={},s=r.createContext(n);function l(e){let a=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);