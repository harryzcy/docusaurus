"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65230],{61132:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(24246),s=(t(27378),t(40624));const a={tabItem:"tabItem_pnkT"};function i({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,t),hidden:n,children:e})}},97555:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(24246),s=t(27378),a=t(40624),i=t(75527),l=t(3620),o=t(44479),c=t(62821),u=t(52196),d=t(53589);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function f(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function j(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function m({queryString:e=!1,groupId:n}){const t=(0,l.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),a=(0,c._X)(r),i=(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(p(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[a,i]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=j(e),[i,l]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:t,groupId:r}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),f=(()=>{const e=null!=c?c:h;return g({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var x=t(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function k({className:e,block:n,selectedValue:t,selectValue:s,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;var t;n=null!==(t=o[r])&&void 0!==t?t:o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;var r;n=null!==(r=o[t])&&void 0!==r?r:o[o.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e),children:l.map((({value:e,label:n,attributes:s})=>(0,r.jsx)("li",O(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>o.push(e),onKeyDown:d,onClick:u},s),{className:(0,a.Z)("tabs__item",y.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function N({lazy:e,children:n,selectedValue:t}){const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function T(e){const n=b(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,r.jsx)(k,w({},n,e)),(0,r.jsx)(N,w({},n,e))]})}function I(e){const n=(0,x.Z)();return(0,r.jsx)(T,O(w({},e),{children:f(e.children)}),String(n))}},92074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(24246),s=t(71670),a=t(97555),i=t(61132);const l={id:"git",slug:"/i18n/git"},o="i18n - Using git",c={id:"i18n/git",title:"i18n - Using git",description:"A possible translation strategy is to version control the translation files with Git (or any other VCS).",source:"@site/docs/i18n/i18n-git.mdx",sourceDirName:"i18n",slug:"/i18n/git",permalink:"/docs/i18n/git",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/i18n/i18n-git.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1717451742e3,frontMatter:{id:"git",slug:"/i18n/git"},sidebar:"docs",previous:{title:"Tutorial",permalink:"/docs/i18n/tutorial"},next:{title:"Using Crowdin",permalink:"/docs/i18n/crowdin"}},u={},d=[{value:"Tradeoffs",id:"tradeoffs",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Prepare the Docusaurus site",id:"prepare-the-docusaurus-site",level:3},{value:"Initialize the <code>i18n</code> folder",id:"initialize-the-i18n-folder",level:3},{value:"Translate the files",id:"translate-the-files",level:3},{value:"Repeat",id:"repeat",level:3},{value:"Maintenance",id:"maintenance",level:2},{value:"Markdown translations",id:"markdown-translations",level:3},{value:"JSON translations",id:"json-translations",level:3},{value:"Localize edit URLs",id:"localize-edit-urls",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"i18n---using-git",children:"i18n - Using git"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"possible translation strategy"})," is to ",(0,r.jsx)(n.strong,{children:"version control the translation files"})," with Git (or any other ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Version_control",children:"VCS"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"tradeoffs",children:"Tradeoffs"}),"\n",(0,r.jsx)(n.p,{children:"This strategy has advantages:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Easy to get started"}),": just commit the ",(0,r.jsx)(n.code,{children:"i18n"})," folder to Git"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Easy for developers"}),": Git, GitHub and pull requests are mainstream developer tools"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Free"})," (or without any additional cost, assuming you already use Git)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Low friction"}),": does not require signing up to an external tool"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Rewarding"}),": contributors are happy to have a nice contribution history"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Using Git also present some shortcomings:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hard for non-developers"}),": they do not master Git and pull-requests"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hard for professional translators"}),": they are used to SaaS translation software and advanced features"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hard to maintain"}),": you have to keep the translated files ",(0,r.jsx)(n.strong,{children:"in sync"})," with the untranslated files"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"large-scale technical projects"})," (React, Vue.js, MDN, TypeScript, Nuxt.js, etc.) use Git for translations."]}),(0,r.jsxs)(n.p,{children:["Refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3317",children:"Docusaurus i18n RFC"})," for our notes and links studying these systems."]})]}),"\n",(0,r.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,r.jsxs)(n.p,{children:["This is a walk-through of using Git to translate a newly initialized English Docusaurus website into French, and assume you already followed the ",(0,r.jsx)(n.a,{href:"/docs/i18n/tutorial",children:"i18n tutorial"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"prepare-the-docusaurus-site",children:"Prepare the Docusaurus site"}),"\n",(0,r.jsx)(n.p,{children:"Initialize a new Docusaurus site:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest website classic\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add the site configuration for the French language:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n  themeConfig: {\n    navbar: {\n      items: [\n        // ...\n        {\n          type: 'localeDropdown',\n          position: 'left',\n        },\n        // ...\n      ],\n    },\n  },\n  // ...\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Translate the homepage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="src/pages/index.js"',children:"import React from 'react';\nimport Translate from '@docusaurus/Translate';\nimport Layout from '@theme/Layout';\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1 style={{margin: 20}}>\n        <Translate description=\"The homepage main heading\">\n          Welcome to my Docusaurus translated site!\n        </Translate>\n      </h1>\n    </Layout>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"initialize-the-i18n-folder",children:["Initialize the ",(0,r.jsx)(n.code,{children:"i18n"})," folder"]}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:"write-translations"})," CLI command to initialize the JSON translation files for the French locale:"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run write-translations -- --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn write-translations --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run write-translations --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"--messagePrefix '(fr) '"})," option to make the untranslated strings stand out."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Hello"})," will appear as ",(0,r.jsx)(n.code,{children:"(fr) Hello"})," and makes it clear a translation is missing."]})]}),"\n",(0,r.jsx)(n.p,{children:"Copy your untranslated Markdown files to the French folder:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current\n\nmkdir -p i18n/fr/docusaurus-plugin-content-blog\ncp -r blog/** i18n/fr/docusaurus-plugin-content-blog\n\nmkdir -p i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add all these files to Git."}),"\n",(0,r.jsx)(n.h3,{id:"translate-the-files",children:"Translate the files"}),"\n",(0,r.jsxs)(n.p,{children:["Translate the Markdown and JSON files in ",(0,r.jsx)(n.code,{children:"i18n/fr"})," and commit the translation."]}),"\n",(0,r.jsx)(n.p,{children:"You should now be able to start your site in French and see the translations:"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run start -- --locale fr\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn run start --locale fr\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run start --locale fr\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"You can also build the site locally or on your CI:"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\n# or\nnpm run build -- --locale fr\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn build\n# or\nyarn build --locale fr\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n# or\npnpm run build --locale fr\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"repeat",children:"Repeat"}),"\n",(0,r.jsx)(n.p,{children:"Follow the same process for each locale you need to support."}),"\n",(0,r.jsx)(n.h2,{id:"maintenance",children:"Maintenance"}),"\n",(0,r.jsxs)(n.p,{children:["Keeping translated files ",(0,r.jsx)(n.strong,{children:"consistent"})," with the originals ",(0,r.jsx)(n.strong,{children:"can be challenging"}),", in particular for Markdown documents."]}),"\n",(0,r.jsx)(n.h3,{id:"markdown-translations",children:"Markdown translations"}),"\n",(0,r.jsxs)(n.p,{children:["When an untranslated Markdown document is edited, it is ",(0,r.jsx)(n.strong,{children:"your responsibility to maintain the respective translated files"}),", and we unfortunately don't have a good way to help you do so."]}),"\n",(0,r.jsxs)(n.p,{children:["To keep your translated sites consistent, when the ",(0,r.jsx)(n.code,{children:"website/docs/doc1.md"})," doc is edited, you need ",(0,r.jsx)(n.strong,{children:"backport these edits"})," to ",(0,r.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"json-translations",children:"JSON translations"}),"\n",(0,r.jsxs)(n.p,{children:["To help you maintain the JSON translation files, it is possible to run again the ",(0,r.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:"write-translations"})," CLI command:"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run write-translations -- --locale fr\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn write-translations --locale fr\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run write-translations --locale fr\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"New translations will be appended, and existing ones will not be overridden."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Reset your translations with the ",(0,r.jsx)(n.code,{children:"--override"})," option."]})}),"\n",(0,r.jsx)(n.h3,{id:"localize-edit-urls",children:"Localize edit URLs"}),"\n",(0,r.jsxs)(n.p,{children:["When the user is browsing a page at ",(0,r.jsx)(n.code,{children:"/fr/doc1"}),", the edit button will link by default to the unlocalized doc at ",(0,r.jsx)(n.code,{children:"website/docs/doc1.md"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Your translations are on Git, and you can use the ",(0,r.jsx)(n.code,{children:"editLocalizedFiles: true"})," option of the docs and blog plugins."]}),"\n",(0,r.jsxs)(n.p,{children:["The edit button will link to the localized doc at ",(0,r.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(27378);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);