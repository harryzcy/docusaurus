"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21415],{15995:(e,s,r)=>{r.d(s,{A:()=>t});var n=r(62540);r(63696);var i=r(11750);function t({children:e,hidden:s,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.A)("tabItem_pnkT",r),hidden:s,children:e})}},27446:(e,s,r)=>{r.d(s,{A:()=>v});var n=r(62540),i=r(63696),t=r(11750),l=r(7846),d=r(49519),c=r(96439),o=r(19739),a=r(66904),h=r(79244);function u(e){var s,r;return null!==(r=null===(s=i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===s?void 0:s.filter(Boolean))&&void 0!==r?r:[]}function j({value:e,tabValues:s}){return s.some(s=>s.value===e)}var x=r(10709);function p(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(s){var n;n=r[s],s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n})}return e}function f(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):(function(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(s)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}),e}function m({className:e,block:s,selectedValue:r,selectValue:i,tabValues:d}){let c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),a=e=>{let s=e.currentTarget,n=d[c.indexOf(s)].value;n!==r&&(o(s),i(n))},h=e=>{var s,r;let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=null!==(s=c[r])&&void 0!==s?s:c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;n=null!==(r=c[s])&&void 0!==r?r:c[c.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},e),children:d.map(({value:e,label:s,attributes:i})=>(0,n.jsx)("li",f(p({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>c.push(e),onKeyDown:h,onClick:a},i),{className:(0,t.A)("tabs__item","tabItem_AQgk",null==i?void 0:i.className,{"tabs__item--active":r===e}),children:null!=s?s:e}),e))})}function b({lazy:e,children:s,selectedValue:r}){let l=(Array.isArray(s)?s:[s]).filter(Boolean);if(e){let e=l.find(e=>e.props.value===r);return e?(0,i.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,s)=>(0,i.cloneElement)(e,{key:s,hidden:e.props.value!==r}))})}function g(e){let s=function(e){let{defaultValue:s,queryString:r=!1,groupId:n}=e,t=function(e){let{values:s,children:r}=e;return(0,i.useMemo)(()=>{let e=null!=s?s:u(r).map(({props:{value:e,label:s,attributes:r,default:n}})=>({value:e,label:s,attributes:r,default:n}));return!function(e){let s=(0,a.XI)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,r])}(e),[l,x]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:s}){var r;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=s.find(e=>e.default))&&void 0!==r?r:s[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:s,tabValues:t})),[p,f]=function({queryString:e=!1,groupId:s}){let r=(0,d.W6)(),n=function({queryString:e=!1,groupId:s}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:e,groupId:s});return[(0,o.aZ)(n),(0,i.useCallback)(e=>{var s,i;if(!n)return;let t=new URLSearchParams(r.location.search);t.set(n,e),r.replace((s=function(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(s){var n;n=r[s],s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n})}return e}({},r.location),i=i={search:t.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):(function(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(i)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(i,e))}),s))},[n,r])]}({queryString:r,groupId:n}),[m,b]=function({groupId:e}){let s=e?`docusaurus.tab.${e}`:null,[r,n]=(0,h.Dv)(s);return[r,(0,i.useCallback)(e=>{s&&n.set(e)},[s,n])]}({groupId:n}),g=(()=>{let e=null!=p?p:m;return j({value:e,tabValues:t})?e:null})();return(0,c.A)(()=>{g&&x(g)},[g]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!j({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);x(e),f(e),b(e)},[f,b,t]),tabValues:t}}(e);return(0,n.jsxs)("div",{className:(0,t.A)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(m,p({},s,e)),(0,n.jsx)(b,p({},s,e))]})}function v(e){let s=(0,x.A)();return(0,n.jsx)(g,f(p({},e),{children:u(e.children)}),String(s))}},51894:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>n,toc:()=>h});let n=JSON.parse('{"id":"cli","title":"CLI","description":"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website.","source":"@site/docs/cli.mdx","sourceDirName":".","slug":"/cli","permalink":"/docs/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/cli.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1725292469000,"frontMatter":{"description":"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."},"sidebar":"api","next":{"title":"Client API","permalink":"/docs/docusaurus-core"}}');var i=r(62540),t=r(43023),l=r(27446),d=r(15995);let c={description:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."},o="CLI",a={},h=[{value:"Docusaurus CLI commands",id:"docusaurus-cli-commands",level:2},{value:"<code>docusaurus start [siteDir]</code>",id:"docusaurus-start-sitedir",level:3},{value:"Options",id:"options",level:4},{value:"Enabling HTTPS",id:"enabling-https",level:4},{value:"<code>docusaurus build [siteDir]</code>",id:"docusaurus-build-sitedir",level:3},{value:"Options",id:"options-1",level:4},{value:"<code>docusaurus swizzle [themeName] [componentName] [siteDir]</code>",id:"docusaurus-swizzle",level:3},{value:"Options",id:"options-swizzle",level:4},{value:"<code>docusaurus deploy [siteDir]</code>",id:"docusaurus-deploy-sitedir",level:3},{value:"Options",id:"options-3",level:4},{value:"<code>docusaurus serve [siteDir]</code>",id:"docusaurus-serve-sitedir",level:3},{value:"<code>docusaurus clear [siteDir]</code>",id:"docusaurus-clear-sitedir",level:3},{value:"<code>docusaurus write-translations [siteDir]</code>",id:"docusaurus-write-translations-sitedir",level:3},{value:"<code>docusaurus write-heading-ids [siteDir] [files]</code>",id:"docusaurus-write-heading-ids-sitedir",level:3}];function u(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"cli",children:"CLI"})}),"\n",(0,i.jsx)(s.p,{children:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."}),"\n",(0,i.jsx)(s.p,{children:"Once your website is bootstrapped, the website source will contain the Docusaurus scripts that you can invoke with your package manager:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  // ...\n  "scripts": {\n    "docusaurus": "docusaurus",\n    "start": "docusaurus start",\n    "build": "docusaurus build",\n    "swizzle": "docusaurus swizzle",\n    "deploy": "docusaurus deploy",\n    "clear": "docusaurus clear",\n    "serve": "docusaurus serve",\n    "write-translations": "docusaurus write-translations",\n    "write-heading-ids": "docusaurus write-heading-ids"\n  }\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"docusaurus-cli-commands",children:"Docusaurus CLI commands"}),"\n",(0,i.jsx)(s.p,{children:"Below is a list of Docusaurus CLI commands and their usages:"}),"\n",(0,i.jsx)(s.h3,{id:"docusaurus-start-sitedir",children:(0,i.jsx)(s.code,{children:"docusaurus start [siteDir]"})}),"\n",(0,i.jsxs)(s.p,{children:["Builds and serves a preview of your site locally with ",(0,i.jsx)(s.a,{href:"https://webpack.js.org/configuration/dev-server",children:"Webpack Dev Server"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Default"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--port"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"3000"})}),(0,i.jsx)(s.td,{children:"Specifies the port of the dev server."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--host"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"localhost"})}),(0,i.jsxs)(s.td,{children:["Specify a host to use. For example, if you want your server to be accessible externally, you can use ",(0,i.jsx)(s.code,{children:"--host 0.0.0.0"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--locale"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Specify site locale to be used."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--hot-only"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsxs)(s.td,{children:["Enables Hot Module Replacement without page refresh as a fallback in case of build failures. More information ",(0,i.jsx)(s.a,{href:"https://webpack.js.org/configuration/dev-server/#devserverhotonly",children:"here"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--no-open"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsx)(s.td,{children:"Do not open the page automatically in the browser."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--config"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"undefined"})}),(0,i.jsxs)(s.td,{children:["Path to Docusaurus config file, default to ",(0,i.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--poll [optionalIntervalMs]"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsxs)(s.td,{children:["Use polling of files rather than watching for live reload as a fallback in environments where watching doesn't work. More information ",(0,i.jsx)(s.a,{href:"https://webpack.js.org/configuration/watch/#watchoptionspoll",children:"here"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--no-minify"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsx)(s.td,{children:"Build website without minimizing JS/CSS bundles."})]})]})]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"Please note that some functionality (for example, anchor links) will not work in development. The functionality will work as expected in production."})}),"\n",(0,i.jsxs)(s.admonition,{title:"Development over network",type:"info",children:[(0,i.jsxs)(s.p,{children:["When forwarding port 3000 from a remote server or VM (e.g. GitHub Codespaces), you can run the dev server on ",(0,i.jsx)(s.code,{children:"0.0.0.0"})," to make it listen on the local IP."]}),(0,i.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,i.jsx)(d.A,{value:"npm",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npm run start -- --host 0.0.0.0\n"})})}),(0,i.jsx)(d.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"yarn run start --host 0.0.0.0\n"})})}),(0,i.jsx)(d.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"pnpm run start --host 0.0.0.0\n"})})})]})]}),"\n",(0,i.jsx)(s.h4,{id:"enabling-https",children:"Enabling HTTPS"}),"\n",(0,i.jsxs)(s.p,{children:["There are multiple ways to obtain a certificate. We will use ",(0,i.jsx)(s.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," as an example."]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Run ",(0,i.jsx)(s.code,{children:"mkcert localhost"})," to generate ",(0,i.jsx)(s.code,{children:"localhost.pem"})," + ",(0,i.jsx)(s.code,{children:"localhost-key.pem"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Run ",(0,i.jsx)(s.code,{children:"mkcert -install"})," to install the cert in your trust store, and restart your browser"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Start the app with Docusaurus HTTPS env variables:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"HTTPS=true SSL_CRT_FILE=localhost.pem SSL_KEY_FILE=localhost-key.pem yarn start\n"})}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsxs)(s.li,{children:["Open ",(0,i.jsx)(s.code,{children:"https://localhost:3000/"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"docusaurus-build-sitedir",children:(0,i.jsx)(s.code,{children:"docusaurus build [siteDir]"})}),"\n",(0,i.jsx)(s.p,{children:"Compiles your site for production."}),"\n",(0,i.jsx)(s.h4,{id:"options-1",children:"Options"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Default"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--dev"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Builds the website in dev mode, including full React error messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--bundle-analyzer"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsxs)(s.td,{children:["Analyze your bundle with the ",(0,i.jsx)(s.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",children:"webpack bundle analyzer"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--out-dir"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"build"})}),(0,i.jsx)(s.td,{children:"The full path for the new output directory, relative to the current workspace."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--config"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"undefined"})}),(0,i.jsxs)(s.td,{children:["Path to Docusaurus config file, default to ",(0,i.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--locale"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Build the site in the specified locale. If not specified, all known locales are built."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--no-minify"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsx)(s.td,{children:"Build website without minimizing JS/CSS bundles."})]})]})]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.p,{children:["For advanced minification of CSS bundle, we use the ",(0,i.jsx)(s.a,{href:"https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-advanced",children:"advanced cssnano preset"})," (along with additional several PostCSS plugins) and ",(0,i.jsx)(s.a,{href:"https://github.com/jakubpawlowicz/clean-css#level-2-optimizations",children:"level 2 optimization of clean-css"}),". If as a result of this advanced CSS minification you find broken CSS, build your website with the environment variable ",(0,i.jsx)(s.code,{children:"USE_SIMPLE_CSS_MINIFIER=true"})," to minify CSS with the ",(0,i.jsx)(s.a,{href:"https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-default",children:"default cssnano preset"}),". ",(0,i.jsxs)(s.strong,{children:["Please ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/new?labels=bug%2C+needs+triage&template=bug.md",children:"fill out an issue"})," if you experience CSS minification bugs."]})]}),(0,i.jsxs)(s.p,{children:["You can skip the HTML minification with the environment variable ",(0,i.jsx)(s.code,{children:"SKIP_HTML_MINIFICATION=true"}),"."]})]}),"\n",(0,i.jsx)(s.h3,{id:"docusaurus-swizzle",children:(0,i.jsx)(s.code,{children:"docusaurus swizzle [themeName] [componentName] [siteDir]"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/swizzling",children:"Swizzle"})," a theme component to customize it."]}),"\n",(0,i.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,i.jsx)(d.A,{value:"npm",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npm run swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\nnpm run swizzle @docusaurus/theme-classic Footer -- --eject\n"})})}),(0,i.jsx)(d.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"yarn swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\nyarn swizzle @docusaurus/theme-classic Footer --eject\n"})})}),(0,i.jsx)(d.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"pnpm run swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\npnpm run swizzle @docusaurus/theme-classic Footer --eject\n"})})})]}),"\n",(0,i.jsxs)(s.p,{children:["The swizzle CLI is interactive and will guide you through the whole ",(0,i.jsx)(s.a,{href:"/docs/swizzling",children:"swizzle process"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"options-swizzle",children:"Options"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"themeName"})}),(0,i.jsx)(s.td,{children:"The name of the theme to swizzle from."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"componentName"})}),(0,i.jsx)(s.td,{children:"The name of the theme component to swizzle."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--list"})}),(0,i.jsx)(s.td,{children:"Display components available for swizzling"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--eject"})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"/docs/swizzling#ejecting",children:"Eject"})," the theme component"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--wrap"})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"/docs/swizzling#wrapping",children:"Wrap"})," the theme component"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--danger"})}),(0,i.jsx)(s.td,{children:"Allow immediate swizzling of unsafe components"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--typescript"})}),(0,i.jsx)(s.td,{children:"Swizzle the TypeScript variant component"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--config"})}),(0,i.jsxs)(s.td,{children:["Path to docusaurus config file, default to ",(0,i.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]})]})]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"Unsafe components have a higher risk of breaking changes due to internal refactorings."})}),"\n",(0,i.jsx)(s.h3,{id:"docusaurus-deploy-sitedir",children:(0,i.jsx)(s.code,{children:"docusaurus deploy [siteDir]"})}),"\n",(0,i.jsxs)(s.p,{children:["Deploys your site with ",(0,i.jsx)(s.a,{href:"https://pages.github.com/",children:"GitHub Pages"}),". Check out the docs on ",(0,i.jsx)(s.a,{href:"/docs/deployment#deploying-to-github-pages",children:"deployment"})," for more details."]}),"\n",(0,i.jsx)(s.h4,{id:"options-3",children:"Options"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Default"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--locale"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Deploy the site in the specified locale. If not specified, all known locales are deployed."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--out-dir"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"build"})}),(0,i.jsx)(s.td,{children:"The full path for the new output directory, relative to the current workspace."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--skip-build"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsx)(s.td,{children:"Deploy website without building it. This may be useful when using a custom deploy script."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--target-dir"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"."})}),(0,i.jsx)(s.td,{children:"Path to the target directory to deploy to."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--config"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"undefined"})}),(0,i.jsxs)(s.td,{children:["Path to Docusaurus config file, default to ",(0,i.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"docusaurus-serve-sitedir",children:(0,i.jsx)(s.code,{children:"docusaurus serve [siteDir]"})}),"\n",(0,i.jsx)(s.p,{children:"Serve your built website locally."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Default"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--port"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"3000"})}),(0,i.jsx)(s.td,{children:"Use specified port"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--dir"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"build"})}),(0,i.jsx)(s.td,{children:"The full path for the output directory, relative to the current workspace"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--build"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsx)(s.td,{children:"Build website before serving"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--config"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"undefined"})}),(0,i.jsxs)(s.td,{children:["Path to Docusaurus config file, default to ",(0,i.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--host"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"localhost"})}),(0,i.jsxs)(s.td,{children:["Specify a host to use. For example, if you want your server to be accessible externally, you can use ",(0,i.jsx)(s.code,{children:"--host 0.0.0.0"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--no-open"})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"false"})," locally, ",(0,i.jsx)(s.code,{children:"true"})," in CI"]}),(0,i.jsx)(s.td,{children:"Do not open a browser window to the server location."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"docusaurus-clear-sitedir",children:(0,i.jsx)(s.code,{children:"docusaurus clear [siteDir]"})}),"\n",(0,i.jsx)(s.p,{children:"Clear a Docusaurus site's generated assets, caches, build artifacts."}),"\n",(0,i.jsx)(s.p,{children:"We recommend running this command before reporting bugs, after upgrading versions, or anytime you have issues with your Docusaurus site."}),"\n",(0,i.jsx)(s.h3,{id:"docusaurus-write-translations-sitedir",children:(0,i.jsx)(s.code,{children:"docusaurus write-translations [siteDir]"})}),"\n",(0,i.jsx)(s.p,{children:"Write the JSON translation files that you will have to translate."}),"\n",(0,i.jsxs)(s.p,{children:["By default, the files are written in ",(0,i.jsx)(s.code,{children:"website/i18n/<defaultLocale>/..."}),"."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Default"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--locale"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<defaultLocale>"})}),(0,i.jsx)(s.td,{children:"Define which locale folder you want to write translations the JSON files in"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--override"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsx)(s.td,{children:"Override existing translation messages"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--config"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"undefined"})}),(0,i.jsxs)(s.td,{children:["Path to Docusaurus config file, default to ",(0,i.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--messagePrefix"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"''"})}),(0,i.jsx)(s.td,{children:"Allows adding a prefix to each translation message, to help you highlight untranslated strings"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"docusaurus-write-heading-ids-sitedir",children:(0,i.jsx)(s.code,{children:"docusaurus write-heading-ids [siteDir] [files]"})}),"\n",(0,i.jsxs)(s.p,{children:["Add ",(0,i.jsx)(s.a,{href:"/docs/markdown-features/toc#heading-ids",children:"explicit heading IDs"})," to the Markdown documents of your site."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Default"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"files"})}),(0,i.jsx)(s.td,{children:"All MD files used by plugins"}),(0,i.jsx)(s.td,{children:"The files that you want heading IDs to be written to."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--maintain-case"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsx)(s.td,{children:"Keep the headings' casing, otherwise make all lowercase."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--overwrite"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})}),(0,i.jsx)(s.td,{children:"Overwrite existing heading IDs."})]})]})]})]})}function j(e={}){let{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},43023:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>d});var n=r(63696);let i={},t=n.createContext(i);function l(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);