"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["28721"],{40190:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>x,assets:()=>u,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"type":"mdx","permalink":"/tests/pages/tabs-tests","source":"@site/_dogfooding/_pages tests/tabs-tests.mdx","title":"Tabs tests","description":"Tabs sync with different heights","frontMatter":{},"lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1735235940000,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_pages tests/tabs-tests.mdx","unlisted":false}'),l=n("85893"),a=n("80980");n("11678");var s=n("46291"),o=n("67860");let i={},c="Tabs tests",u={},d=[{value:"Tabs sync with different heights",id:"tabs-sync-with-different-heights",level:2},{value:"Tabs with className and lazy loading",id:"tabs-with-classname-and-lazy-loading",level:2}];function v(e){let t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"tabs-tests",children:"Tabs tests"})}),"\n","\n",(0,l.jsx)(t.h2,{id:"tabs-sync-with-different-heights",children:"Tabs sync with different heights"}),"\n",(0,l.jsxs)(s.Z,{groupId:"operating-systems",children:[(0,l.jsx)(o.Z,{value:"win",label:"Windows",children:(0,l.jsx)(t.p,{children:"Use Ctrl + C to copy."})}),(0,l.jsx)(o.Z,{value:"mac",label:"macOS",children:(0,l.jsx)(t.p,{children:"very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text"})})]}),"\n",(0,l.jsxs)(s.Z,{groupId:"operating-systems",children:[(0,l.jsx)(o.Z,{value:"win",label:"Windows",children:(0,l.jsx)(t.p,{children:"Use Ctrl + V to paste."})}),(0,l.jsx)(o.Z,{value:"mac",label:"macOS",children:(0,l.jsx)(t.p,{children:"Use Command + V to paste."})})]}),"\n",(0,l.jsx)(t.p,{children:"When clicking tabs above, they should stay under cursor and we should adjust the scroll position."}),"\n",(0,l.jsx)(t.h2,{id:"tabs-with-classname-and-lazy-loading",children:"Tabs with className and lazy loading"}),"\n",(0,l.jsxs)(s.Z,{lazy:!0,children:[(0,l.jsx)(o.Z,{value:"apple",label:"Apple",className:"alert alert--primary",default:!0,children:(0,l.jsx)(t.p,{children:"This is an apple \uD83C\uDF4E"})}),(0,l.jsx)(o.Z,{value:"orange",label:"Orange",className:"alert alert--secondary",children:(0,l.jsx)(t.p,{children:"This is an orange \uD83C\uDF4A"})}),(0,l.jsx)(o.Z,{value:"banana",label:"Banana",className:"alert alert--success",children:(0,l.jsx)(t.p,{children:"This is a banana \uD83C\uDF4C"})})]})]})}function x(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}},67860:function(e,t,n){n.d(t,{Z:()=>s});var r=n("85893");n("67294");var l=n("90496");let a="tabItem_pnkT";function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.Z)(a,s),hidden:n,children:t})}},46291:function(e,t,n){n.d(t,{Z:()=>m});var r=n("85893"),l=n("67294"),a=n("90496"),s=n("12451"),o=n("3620"),i=n("89637"),c=n("74417"),u=n("46918"),d=n("58247");function v(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var g=n("8903");let y="tabList_Qoir",h="tabItem_AQgk";function p(e){let{className:t,block:n,selectedValue:l,selectValue:o,tabValues:i}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{let t=e.currentTarget,n=i[c.indexOf(t)].value;n!==l&&(u(t),o(n))},v=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map(e=>{let{value:t,label:n,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>{c.push(e)},onKeyDown:v,onClick:d,...s,className:(0,a.Z)("tabs__item",h,s?.className,{"tabs__item--active":l===t}),children:n??t},t)})})}function f(e){let{lazy:t,children:n,selectedValue:s}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===s);return e?(0,l.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==s}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,a=function(e){let{values:t,children:n}=e;return(0,l.useMemo)(()=>{let e=t??v(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[s,g]=(0,l.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:a})),[y,h]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),s=(0,c._X)(a);return[s,(0,l.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})},[a,r])]}({queryString:n,groupId:r}),[p,f]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[a,s]=(0,d.Nk)(r);return[a,(0,l.useCallback)(e=>{if(!!r)s.set(e)},[r,s])]}({groupId:r}),b=(()=>{let e=y??p;return x({value:e,tabValues:a})?e:null})();return(0,i.Z)(()=>{b&&g(b)},[b]),{selectedValue:s,selectValue:(0,l.useCallback)(e=>{if(!x({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);g(e),h(e),f(e)},[h,f,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",y),children:[(0,r.jsx)(p,{...t,...e}),(0,r.jsx)(f,{...t,...e})]})}function m(e){let t=(0,g.Z)();return(0,r.jsx)(b,{...e,children:v(e.children)},String(t))}},11678:function(e,t,n){n.d(t,{Z:()=>x});var r=n("85893");n("67294");var l=n("90496");let a="browserWindow_my1Q",s="browserWindowHeader_jXSR",o="buttons_uHc7",i="browserWindowAddressBar_Pd8y",c="dot_giz1",u="browserWindowMenuIcon_Vhuh",d="bar_rrRL",v="browserWindowBody_Idgs";function x(e){let{children:t,minHeight:n,url:x="http://localhost:3000",style:g,bodyStyle:y}=e;return(0,r.jsxs)("div",{className:a,style:{...g,minHeight:n},children:[(0,r.jsxs)("div",{className:s,children:[(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)("span",{className:c,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:c,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:c,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,l.Z)(i,"text--truncate"),children:x}),(0,r.jsx)("div",{className:u,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:d}),(0,r.jsx)("span",{className:d}),(0,r.jsx)("span",{className:d})]})})]}),(0,r.jsx)("div",{className:v,style:y,children:t})]})}},80980:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var r=n(67294);let l={},a=r.createContext(l);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);