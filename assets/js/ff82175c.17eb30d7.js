"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30437],{22047:(e,t,s)=>{s.d(t,{A:()=>x});var i=s(62540);s(63696);var n=s(11750),r=s(46222),l=s(36372),o=s(13111),d=s(14652),a=s(81912),c=s(37425);let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h({href:e,children:t}){return(0,i.jsx)(l.A,{href:e,className:(0,n.A)("card padding--lg",u.cardContainer),children:t})}function f({href:e,icon:t,title:s,description:r}){return(0,i.jsxs)(h,{href:e,children:[(0,i.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[t," ",s]}),r&&(0,i.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:r,children:r})]})}function m({item:e}){var t;let s=(0,r.Nr)(e),n=function(){let{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,i.jsx)(f,{href:s,icon:"\u{1F5C3}\uFE0F",title:e.label,description:null!==(t=e.description)&&void 0!==t?t:n(e.items.length)}):null}function p({item:e}){var t,s;let n=(0,d.A)(e.href)?"\u{1F4C4}\uFE0F":"\u{1F517}",l=(0,r.cC)(null!==(t=e.docId)&&void 0!==t?t:void 0);return(0,i.jsx)(f,{href:e.href,icon:n,title:e.label,description:null!==(s=e.description)&&void 0!==s?s:null==l?void 0:l.description})}function y({item:e}){switch(e.type){case"link":return(0,i.jsx)(p,{item:e});case"category":return(0,i.jsx)(m,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function b({className:e}){let t=(0,r.$S)();return(0,i.jsx)(x,{items:t.items,className:e})}function x(e){let{items:t,className:s}=e;if(!t)return(0,i.jsx)(b,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),i.forEach(function(t){var i;i=s[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}({},e));let l=(0,r.d1)(t);return(0,i.jsx)("section",{className:(0,n.A)("row",s),children:l.map((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(y,{item:e})},t))})}},13111:(e,t,s)=>{s.d(t,{W:()=>d});var i=s(63696),n=s(99468);let r=["zero","one","two","few","many","other"];function l(e){return r.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.A)();return(0,i.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,s)=>(function(e,t,s){let i=e.split("|");if(1===i.length)return i[0];i.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let n=s.select(t);return i[Math.min(s.pluralForms.indexOf(n),i.length-1)]})(s,t,e)}}},39124:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});let i=JSON.parse('{"id":"tests/visibility/index","title":"Visibility","description":"A category to play with draft/unlisted front matter.","source":"@site/_dogfooding/_docs tests/tests/visibility/index.mdx","sourceDirName":"tests/visibility","slug":"/tests/visibility/","permalink":"/tests/docs/tests/visibility/","draft":false,"unlisted":false,"tags":[{"inline":false,"label":"Visibility","permalink":"/tests/docs/tags/visibility"}],"version":"current","lastUpdatedBy":"jackrabbit128","lastUpdatedAt":1727905511000,"frontMatter":{"tags":["visibility"]},"sidebar":"sidebar","previous":{"title":"TOC partial test","permalink":"/tests/docs/tests/toc-partials/"},"next":{"title":"Some Drafts - Listed 1","permalink":"/tests/docs/tests/visibility/some-drafts/draft-subcategory/listed1"}}');var n=s(62540),r=s(43023),l=s(22047);let o={tags:["visibility"]},d="Visibility",a={},c=[];function u(e){let t={a:"a",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"visibility",children:"Visibility"})}),"\n",(0,n.jsx)(t.p,{children:"A category to play with draft/unlisted front matter."}),"\n",(0,n.jsx)(t.p,{children:"In dev, both draft/unlisted items are displayed."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"In production, draft items shouldn't be accessible:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"pathname:///tests/docs/tests/visibility/only-drafts/draft1",children:"/tests/docs/tests/visibility/only-drafts/draft1"})}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"In production, unlisted items should remain accessible, but be hidden in the sidebar (unless currently browsed):"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted1",children:"./only-unlisteds/unlisted1.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted2",children:"./only-unlisteds/unlisted2.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted-subcategory/unlisted3",children:"./only-unlisteds/unlisted-subcategory/unlisted3.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted1",children:"./some-unlisteds/unlisted1.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted2",children:"./some-unlisteds/unlisted2.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted-subcategory/unlisted3",children:"./some-unlisteds/unlisted-subcategory/unlisted3.md"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tests/docs/tests/visibility/force-unlisted",children:"./force-unlisted.mdx"})}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(l.A,{})]})}function h(e={}){let{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}h.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/index.mdx)"},43023:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var i=s(63696);let n={},r=i.createContext(n);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);