"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["93089"],{98619:function(e,a,t){t.d(a,{Z:()=>E});var n=t(85893),l=t(67294);let s=e=>"boolean"==typeof e||e instanceof Boolean,r=e=>"number"==typeof e||e instanceof Number,o=e=>"bigint"==typeof e||e instanceof BigInt,c=e=>!!e&&e instanceof Date,i=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),d=e=>"object"==typeof e&&null!==e,m=e=>!!e&&e instanceof Object&&"function"==typeof e;function b(e,a){return void 0===a&&(a=!1),!e||a?`"${e}"`:e}function p(e){let{field:a,value:t,data:n,lastElement:s,openBracket:r,closeBracket:o,level:c,style:i,shouldExpandNode:u,clickToExpandNode:d,outerRef:m}=e,p=(0,l.useRef)(!1),[f,_,h]=function(e){let[a,t]=(0,l.useState)(e());return[a,()=>t(e=>!e),t]}(()=>u(c,t,a)),x=(0,l.useRef)(null);(0,l.useEffect)(()=>{p.current?h(u(c,t,a)):p.current=!0},[u]);let N=f?i.collapseIcon:i.expandIcon,k=f?"collapse JSON":"expand JSON",v=(0,l.useId)(),y=c+1,E=n.length-1,j=e=>{if("ArrowRight"===e.key||"ArrowLeft"===e.key)e.preventDefault(),h("ArrowRight"===e.key);else if("ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let a="ArrowUp"===e.key?-1:1;if(!m.current)return;let t=m.current.querySelectorAll("[role=button]"),n=-1;for(let e=0;e<t.length;e++)if(0===t[e].tabIndex){n=e;break}if(n<0)return;let l=(n+a+t.length)%t.length;t[n].tabIndex=-1,t[l].tabIndex=0,t[l].focus()}},V=()=>{var e;_();let a=x.current;if(!a)return;let t=null==(e=m.current)?void 0:e.querySelector('[role=button][tabindex="0"]');t&&(t.tabIndex=-1),a.tabIndex=0,a.focus()};return(0,l.createElement)("div",{className:i.basicChildStyle,role:"treeitem","aria-expanded":f,"aria-selected":void 0},(0,l.createElement)("span",{className:N,onClick:V,onKeyDown:j,role:"button","aria-label":k,"aria-expanded":f,"aria-controls":f?v:void 0,ref:x,tabIndex:0===c?0:-1}),(a||""===a)&&(d?(0,l.createElement)("span",{className:i.clickableLabel,onClick:V,onKeyDown:j},b(a,i.quotesForFieldNames),":"):(0,l.createElement)("span",{className:i.label},b(a,i.quotesForFieldNames),":")),(0,l.createElement)("span",{className:i.punctuation},r),f?(0,l.createElement)("ul",{id:v,role:"group",className:i.childFieldsContainer},n.map((e,a)=>(0,l.createElement)(g,{key:e[0]||a,field:e[0],value:e[1],style:i,lastElement:a===E,level:y,shouldExpandNode:u,clickToExpandNode:d,outerRef:m}))):(0,l.createElement)("span",{className:i.collapsedContent,onClick:V,onKeyDown:j}),(0,l.createElement)("span",{className:i.punctuation},o),!s&&(0,l.createElement)("span",{className:i.punctuation},","))}function f(e){let{field:a,openBracket:t,closeBracket:n,lastElement:s,style:r}=e;return(0,l.createElement)("div",{className:r.basicChildStyle,role:"treeitem","aria-selected":void 0},(a||""===a)&&(0,l.createElement)("span",{className:r.label},b(a,r.quotesForFieldNames),":"),(0,l.createElement)("span",{className:r.punctuation},t),(0,l.createElement)("span",{className:r.punctuation},n),!s&&(0,l.createElement)("span",{className:r.punctuation},","))}function _(e){let{field:a,value:t,style:n,lastElement:l,shouldExpandNode:s,clickToExpandNode:r,level:o,outerRef:c}=e;return 0===Object.keys(t).length?f({field:a,openBracket:"{",closeBracket:"}",lastElement:l,style:n}):p({field:a,value:t,lastElement:l||!1,level:o,openBracket:"{",closeBracket:"}",style:n,shouldExpandNode:s,clickToExpandNode:r,data:Object.keys(t).map(e=>[e,t[e]]),outerRef:c})}function h(e){let{field:a,value:t,style:n,lastElement:l,level:s,shouldExpandNode:r,clickToExpandNode:o,outerRef:c}=e;return 0===t.length?f({field:a,openBracket:"[",closeBracket:"]",lastElement:l,style:n}):p({field:a,value:t,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:n,shouldExpandNode:r,clickToExpandNode:o,data:t.map(e=>[void 0,e]),outerRef:c})}function x(e){let a,{field:t,value:n,style:u,lastElement:d}=e,p=u.otherValue;if(null===n)a="null",p=u.nullValue;else if(void 0===n)a="undefined",p=u.undefinedValue;else if(i(n))a=u.noQuotesForStringValues?n:`"${n}"`,p=u.stringValue;else s(n)?(a=n?"true":"false",p=u.booleanValue):r(n)?(a=n.toString(),p=u.numberValue):o(n)?(a=`${n.toString()}n`,p=u.numberValue):a=c(n)?n.toISOString():m(n)?"function() { }":n.toString();return(0,l.createElement)("div",{className:u.basicChildStyle,role:"treeitem","aria-selected":void 0},(t||""===t)&&(0,l.createElement)("span",{className:u.label},b(t,u.quotesForFieldNames),":"),(0,l.createElement)("span",{className:p},a),!d&&(0,l.createElement)("span",{className:u.punctuation},","))}function g(e){let a=e.value;return u(a)?(0,l.createElement)(h,Object.assign({},e)):!d(a)||c(a)||m(a)?(0,l.createElement)(x,Object.assign({},e)):(0,l.createElement)(_,Object.assign({},e))}let N={container:"_2IvMF _GzYRV",basicChildStyle:"_2bkNM",childFieldsContainer:"_1BXBN",label:"_1MGIk",clickableLabel:"_2YKJg _1MGIk _1MFti",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti",noQuotesForStringValues:!1,quotesForFieldNames:!1},k=()=>!0,v=e=>{let{data:a,style:t=N,shouldExpandNode:n=k,clickToExpandNode:s=!1,...r}=e,o=(0,l.useRef)(null);return(0,l.createElement)("div",Object.assign({"aria-label":"JSON view"},r,{className:t.container,ref:o,role:"tree"}),(0,l.createElement)(g,{value:a,style:{...N,...t},lastElement:!0,level:0,shouldExpandNode:n,clickToExpandNode:s,outerRef:o}))},y={clickableLabel:N.clickableLabel,noQuotesForStringValues:!1,container:"containerParaiso_TYa3",basicChildStyle:"basicElementParaiso_DqvR",label:"labelParaiso_l3ql",nullValue:"nullValueParaiso_Ey4X",undefinedValue:"undefinedValueParaiso__T3e",stringValue:"stringValueParaiso_T6i7",booleanValue:"booleanValueParaiso__TSh",numberValue:"numberValueParaiso_JGW0",otherValue:"otherValueParaiso_nnwW",punctuation:"punctuationParaiso_knwc",collapseIcon:"collapseIconParaiso_MWEp",expandIcon:"expandIconParaiso_fAkX",collapsedContent:"collapseContentParaiso_KH36",childFieldsContainer:"childFieldsContainerParaiso_HB7R"};function E(e){let{src:a,collapseDepth:t}=e;return(0,n.jsx)(v,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==t&&e<t,style:y})}},93314:function(e,a,t){t.d(a,{Z:()=>o});var n=t(85893);t(67294);var l=t(53327),s=t(35363);function r(e){let{to:a,children:t}=e;return(0,n.jsx)(s.Z,{className:"navlink__gTJ",isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:t})}function o(e){let{children:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("html",{lang:"en"}),(0,n.jsx)("title",{children:"Docusaurus debug panel"}),(0,n.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("nav",{className:"nav_sWk6",children:[(0,n.jsx)(r,{to:"/__docusaurus/debug",children:"Config"}),(0,n.jsx)(r,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,n.jsx)(r,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,n.jsx)(r,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,n.jsx)(r,{to:"/__docusaurus/debug/content",children:"Content"}),(0,n.jsx)(r,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,n.jsx)("main",{className:"container_tECh",children:a})]})]})}},6918:function(e,a,t){t.r(a),t.d(a,{default:()=>o});var n=t(85893);t(67294);var l=t(53145),s=t(93314),r=t(98619);function o(){return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)("h2",{children:"Routes"}),(0,n.jsx)("ul",{className:"clean-list",children:l.Z.map(e=>{let{path:a,exact:t,routes:l}=e;return(0,n.jsxs)("li",{className:"listItem_zpSX",children:[(0,n.jsx)("div",{className:"route_X3At",children:(0,n.jsx)("code",{className:"routeName_j49z",children:a})}),(0,n.jsxs)("div",{children:["Is exact: ",(0,n.jsx)("code",{children:String(!!t)})]}),l&&(0,n.jsxs)("div",{children:["Child Routes:",(0,n.jsx)(r.Z,{src:l})]})]},a)})})]})}}}]);