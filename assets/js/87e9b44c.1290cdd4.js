"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["42332"],{81507:function(e,t,s){s.r(t),s.d(t,{frontMatter:()=>o,default:()=>m,contentTitle:()=>a,assets:()=>c,toc:()=>u,metadata:()=>n});var n=JSON.parse('{"id":"tests/visibility/some-unlisteds/unlisted-subcategory/index","title":"Subcategory index unlisted","description":"Doc with unlisted front matter","source":"@site/_dogfooding/_docs tests/tests/visibility/some-unlisteds/unlisted-subcategory/index.mdx","sourceDirName":"tests/visibility/some-unlisteds/unlisted-subcategory","slug":"/tests/visibility/some-unlisteds/unlisted-subcategory/","permalink":"/tests/docs/tests/visibility/some-unlisteds/unlisted-subcategory/","draft":false,"unlisted":true,"tags":[{"inline":false,"label":"Visibility","permalink":"/tests/docs/tags/visibility"},{"inline":false,"label":"Unlisted","permalink":"/tests/docs/tags/unlisted"}],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1740161029000,"frontMatter":{"unlisted":true,"tags":["visibility","unlisted"]},"sidebar":"sidebar"}'),i=s(85893),r=s(80980),l=s(86762);let o={unlisted:!0,tags:["visibility","unlisted"]},a="Subcategory index unlisted",c={},u=[];function d(e){let t={h1:"h1",header:"header",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"subcategory-index-unlisted",children:"Subcategory index unlisted"})}),"\n",(0,i.jsx)(t.p,{children:"Doc with unlisted front matter"}),"\n","\n",(0,i.jsx)(l.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}m.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/some-unlisteds/unlisted-subcategory/index.mdx)"},86762:function(e,t,s){s.d(t,{Z:()=>y});var n=s(85893);s(67294);var i=s(90496),r=s(85921),l=s(35363),o=s(11660),a=s(82095),c=s(77827),u=s(57922);let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function m(e){let{className:t,href:s,children:r}=e;return(0,n.jsx)(l.Z,{href:s,className:(0,i.Z)("card padding--lg",d.cardContainer,t),children:r})}function f(e){let{className:t,href:s,icon:r,title:l,description:o}=e;return(0,n.jsxs)(m,{href:s,className:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:l,children:[r," ",l]}),o&&(0,n.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e,s=(0,r.LM)(t),i=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,n.jsx)(f,{className:t.className,href:s,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function h(e){let{item:t}=e,s=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,r.xz)(t.docId??void 0);return(0,n.jsx)(f,{className:t.className,href:t.href,icon:s,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,s=(0,r.Ok)();return(0,n.jsx)(y,{items:s,className:t})}function b(e){let{item:t}=e;return(0,n.jsx)("article",{className:(0,i.Z)("docCardListItem_hvcp","col col--6"),children:(0,n.jsx)(g,{item:t})})}function y(e){let{items:t,className:s}=e;if(!t)return(0,n.jsx)(x,{...e});let l=(0,r.MN)(t);return(0,n.jsx)("section",{className:(0,i.Z)("row",s),children:l.map((e,t)=>(0,n.jsx)(b,{item:e},t))})}},11660:function(e,t,s){s.d(t,{c:()=>a});var n=s(67294),i=s(8156);let r=["zero","one","two","few","many","other"];function l(e){return r.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,s)=>(function(e,t,s){let n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let i=s.select(t);return n[Math.min(s.pluralForms.indexOf(i),n.length-1)]})(s,t,e)}}},80980:function(e,t,s){s.d(t,{Z:()=>o,a:()=>l});var n=s(67294);let i={},r=n.createContext(i);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);