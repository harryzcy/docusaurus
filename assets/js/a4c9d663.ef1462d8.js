"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85451],{15995:(e,n,s)=>{s.d(n,{A:()=>l});var i=s(62540);s(63696);var t=s(11750);function l({children:e,hidden:n,className:s}){return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)("tabItem_pnkT",s),hidden:n,children:e})}},27446:(e,n,s)=>{s.d(n,{A:()=>y});var i=s(62540),t=s(63696),l=s(11750),r=s(7846),o=s(49519),a=s(96439),c=s(19739),u=s(66904),d=s(79244);function h(e){var n,s;return null!==(s=null===(n=t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==s?s:[]}function p({value:e,tabValues:n}){return n.some(n=>n.value===e)}var g=s(10709);function m(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),i.forEach(function(n){var i;i=s[n],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return e}function j(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s.push.apply(s,i)}return s})(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}),e}function x({className:e,block:n,selectedValue:s,selectValue:t,tabValues:o}){let a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{let n=e.currentTarget,i=o[a.indexOf(n)].value;i!==s&&(c(n),t(i))},d=e=>{var n,s;let i=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let s=a.indexOf(e.currentTarget)+1;i=null!==(n=a[s])&&void 0!==n?n:a[0];break}case"ArrowLeft":{let n=a.indexOf(e.currentTarget)-1;i=null!==(s=a[n])&&void 0!==s?s:a[a.length-1]}}null==i||i.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:o.map(({value:e,label:n,attributes:t})=>(0,i.jsx)("li",j(m({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,ref:e=>a.push(e),onKeyDown:d,onClick:u},t),{className:(0,l.A)("tabs__item","tabItem_AQgk",null==t?void 0:t.className,{"tabs__item--active":s===e}),children:null!=n?n:e}),e))})}function f({lazy:e,children:n,selectedValue:s}){let r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=r.find(e=>e.props.value===s);return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:r.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:i}=e,l=function(e){let{values:n,children:s}=e;return(0,t.useMemo)(()=>{let e=null!=n?n:h(s).map(({props:{value:e,label:n,attributes:s,default:i}})=>({value:e,label:n,attributes:s,default:i}));return!function(e){let n=(0,u.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[r,g]=(0,t.useState)(()=>(function({defaultValue:e,tabValues:n}){var s;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let i=null!==(s=n.find(e=>e.default))&&void 0!==s?s:n[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:l})),[m,j]=function({queryString:e=!1,groupId:n}){let s=(0,o.W6)(),i=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c.aZ)(i),(0,t.useCallback)(e=>{var n,t;if(!i)return;let l=new URLSearchParams(s.location.search);l.set(i,e),s.replace((n=function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),i.forEach(function(n){var i;i=s[n],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return e}({},s.location),t=t={search:l.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):(function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s.push.apply(s,i)}return s})(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}),n))},[i,s])]}({queryString:s,groupId:i}),[x,f]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[s,i]=(0,d.Dv)(n);return[s,(0,t.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:i}),b=(()=>{let e=null!=m?m:x;return p({value:e,tabValues:l})?e:null})();return(0,a.A)(()=>{b&&g(b)},[b]),{selectedValue:r,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);g(e),j(e),f(e)},[j,f,l]),tabValues:l}}(e);return(0,i.jsxs)("div",{className:(0,l.A)("tabs-container","tabList_Qoir"),children:[(0,i.jsx)(x,m({},n,e)),(0,i.jsx)(f,m({},n,e))]})}function y(e){let n=(0,g.A)();return(0,i.jsx)(b,j(m({},e),{children:h(e.children)}),String(n))}},47719:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});let i=JSON.parse('{"id":"using-plugins","title":"Using Plugins","description":"The Docusaurus core doesn\'t provide any feature of its own. All features are delegated to individual plugins: the docs feature provided by the docs plugin; the blog feature provided by the blog plugin; or individual pages provided by the pages plugin. If there are no plugins installed, the site won\'t contain any routes.","source":"@site/docs/using-plugins.mdx","sourceDirName":".","slug":"/using-plugins","permalink":"/docs/using-plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/using-plugins.mdx","tags":[],"version":"current","lastUpdatedBy":"k-seltzer","lastUpdatedAt":1727303246000,"frontMatter":{},"sidebar":"docs","previous":{"title":"SEO","permalink":"/docs/seo"},"next":{"title":"Deployment","permalink":"/docs/deployment"}}');var t=s(62540),l=s(43023),r=s(27446),o=s(15995);let a={},c="Using Plugins",u={},d=[{value:"Installing a plugin",id:"installing-a-plugin",level:2},{value:"Configuring plugins",id:"configuring-plugins",level:2},{value:"Multi-instance plugins and plugin IDs",id:"multi-instance-plugins-and-plugin-ids",level:2},{value:"Using themes",id:"using-themes",level:2},{value:"Using presets",id:"using-presets",level:2},{value:"<code>@docusaurus/preset-classic</code>",id:"docusauruspreset-classic",level:3},{value:"Installing presets",id:"installing-presets",level:3},{value:"Creating presets",id:"creating-presets",level:3},{value:"Module shorthands",id:"module-shorthands",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"using-plugins",children:"Using Plugins"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"The Docusaurus core doesn't provide any feature of its own."})," All features are delegated to individual plugins: the ",(0,t.jsx)(n.a,{href:"/docs/docs-introduction",children:"docs"})," feature provided by the ",(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-docs",children:"docs plugin"}),"; the ",(0,t.jsx)(n.a,{href:"/docs/blog",children:"blog"})," feature provided by the ",(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-blog",children:"blog plugin"}),"; or individual ",(0,t.jsx)(n.a,{href:"/docs/creating-pages",children:"pages"})," provided by the ",(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-pages",children:"pages plugin"}),". If there are no plugins installed, the site won't contain any routes."]}),"\n",(0,t.jsxs)(n.p,{children:["You may not need to install common plugins one-by-one though: they can be distributed as a bundle in a ",(0,t.jsx)(n.a,{href:"#using-presets",children:"preset"}),". For most users, plugins are configured through the preset configuration."]}),"\n",(0,t.jsxs)(n.p,{children:["We maintain a ",(0,t.jsx)(n.a,{href:"/docs/api/plugins",children:"list of official plugins"}),", but the community has also created some ",(0,t.jsx)(n.a,{href:"/community/resources#community-plugins",children:"unofficial plugins"}),". If you want to add any feature: autogenerating doc pages, executing custom scripts, integrating other services... be sure to check out the list: someone may have implemented it for you!"]}),"\n",(0,t.jsxs)(n.p,{children:["If you are feeling energetic, you can also read ",(0,t.jsx)(n.a,{href:"/docs/advanced/plugins",children:"the plugin guide"})," or ",(0,t.jsx)(n.a,{href:"/docs/api/plugin-methods/",children:"plugin method references"})," for how to make a plugin yourself."]}),"\n",(0,t.jsx)(n.h2,{id:"installing-a-plugin",children:"Installing a plugin"}),"\n",(0,t.jsx)(n.p,{children:"A plugin is usually an npm package, so you install them like other npm packages using npm."}),"\n",(0,t.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,t.jsx)(o.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save docusaurus-plugin-name\n"})})}),(0,t.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add docusaurus-plugin-name\n"})})}),(0,t.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add docusaurus-plugin-name\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Then you add it in your site's ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"}),"'s ",(0,t.jsx)(n.code,{children:"plugins"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  // highlight-next-line\n  plugins: ['@docusaurus/plugin-content-pages'],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Docusaurus can also load plugins from your local directory, with something like the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  // highlight-next-line\n  plugins: ['./src/plugins/docusaurus-local-plugin'],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Paths should be absolute or relative to the config file."}),"\n",(0,t.jsx)(n.h2,{id:"configuring-plugins",children:"Configuring plugins"}),"\n",(0,t.jsx)(n.p,{children:"For the most basic usage of plugins, you can provide just the plugin name or the path to the plugin."}),"\n",(0,t.jsx)(n.p,{children:'However, plugins can have options specified by wrapping the name and an options object in a two-member tuple inside your config. This style is usually called "Babel Style".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    // highlight-start\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        /* options */\n      },\n    ],\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    // Basic usage.\n    '@docusaurus/plugin-debug',\n\n    // With options object (babel style)\n    [\n      '@docusaurus/plugin-sitemap',\n      {\n        changefreq: 'weekly',\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"multi-instance-plugins-and-plugin-ids",children:"Multi-instance plugins and plugin IDs"}),"\n",(0,t.jsxs)(n.p,{children:["All Docusaurus content plugins can support multiple plugin instances. For example, it may be useful to have ",(0,t.jsx)(n.a,{href:"/docs/docs-multi-instance",children:"multiple docs plugin instances"})," or ",(0,t.jsx)(n.a,{href:"/docs/blog#multiple-blogs",children:"multiple blogs"}),". It is required to assign a unique ID to each plugin instance, and by default, the plugin ID is ",(0,t.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-next-line\n        id: 'docs-1',\n        // other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-next-line\n        id: 'docs-2',\n        // other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:['At most one plugin instance can be the "default plugin instance", by omitting the ',(0,t.jsx)(n.code,{children:"id"})," attribute, or using ",(0,t.jsx)(n.code,{children:"id: 'default'"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"using-themes",children:"Using themes"}),"\n",(0,t.jsxs)(n.p,{children:["Themes are loaded in the exact same way as plugins. From the consumer perspective, the ",(0,t.jsx)(n.code,{children:"themes"})," and ",(0,t.jsx)(n.code,{children:"plugins"})," entries are interchangeable when installing and configuring a plugin. The only nuance is that themes are loaded after plugins, and it's possible for ",(0,t.jsx)(n.a,{href:"/docs/advanced/client#theme-aliases",children:"a theme to override a plugin's default theme components"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"themes"})," and ",(0,t.jsx)(n.code,{children:"plugins"})," options lead to different ",(0,t.jsx)(n.a,{href:"#module-shorthands",children:"shorthand resolutions"}),", so if you want to take advantage of shorthands, be sure to use the right entry!"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  // highlight-next-line\n  themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock'],\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-presets",children:"Using presets"}),"\n",(0,t.jsxs)(n.p,{children:["Presets are bundles of plugins and themes. For example, instead of letting you register and configure ",(0,t.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"}),", ",(0,t.jsx)(n.code,{children:"@docusaurus/plugin-content-blog"}),", etc. one after the other in the config file, we have ",(0,t.jsx)(n.code,{children:"@docusaurus/preset-classic"})," preset allows you to configure them in one centralized place."]}),"\n",(0,t.jsx)(n.h3,{id:"docusauruspreset-classic",children:(0,t.jsx)(n.code,{children:"@docusaurus/preset-classic"})}),"\n",(0,t.jsxs)(n.p,{children:["The classic preset is shipped by default to new Docusaurus websites created with ",(0,t.jsx)(n.a,{href:"/docs/installation#scaffold-project-website",children:(0,t.jsx)(n.code,{children:"create-docusaurus"})}),". It contains the following themes and plugins:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/themes/configuration",children:(0,t.jsx)(n.code,{children:"@docusaurus/theme-classic"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/themes/@docusaurus/theme-search-algolia",children:(0,t.jsx)(n.code,{children:"@docusaurus/theme-search-algolia"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-docs",children:(0,t.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-blog",children:(0,t.jsx)(n.code,{children:"@docusaurus/plugin-content-blog"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-pages",children:(0,t.jsx)(n.code,{children:"@docusaurus/plugin-content-pages"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-debug",children:(0,t.jsx)(n.code,{children:"@docusaurus/plugin-debug"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:(0,t.jsx)(n.code,{children:"@docusaurus/plugin-google-gtag"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager",children:(0,t.jsx)(n.code,{children:"@docusaurus/plugin-google-tag-manager"})})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-analytics",children:(0,t.jsx)(n.code,{children:"@docusaurus/plugin-google-analytics"})})," (",(0,t.jsx)(n.strong,{children:"deprecated"}),")"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-sitemap",children:(0,t.jsx)(n.code,{children:"@docusaurus/plugin-sitemap"})})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The classic preset will relay each option entry to the respective plugin/theme."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // Debug defaults to true in dev, false in prod\n        debug: undefined,\n        // Will be passed to @docusaurus/theme-classic.\n        theme: {\n          customCss: ['./src/css/custom.css'],\n        },\n        // Will be passed to @docusaurus/plugin-content-docs (false to disable)\n        docs: {},\n        // Will be passed to @docusaurus/plugin-content-blog (false to disable)\n        blog: {},\n        // Will be passed to @docusaurus/plugin-content-pages (false to disable)\n        pages: {},\n        // Will be passed to @docusaurus/plugin-sitemap (false to disable)\n        sitemap: {},\n        // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)\n        gtag: {},\n        // Will be passed to @docusaurus/plugin-google-tag-manager (only enabled when explicitly specified)\n        googleTagManager: {},\n        // DEPRECATED: Will be passed to @docusaurus/plugin-google-analytics (only enabled when explicitly specified)\n        googleAnalytics: {},\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installing-presets",children:"Installing presets"}),"\n",(0,t.jsx)(n.p,{children:"A preset is usually an npm package, so you install them like other npm packages using npm."}),"\n",(0,t.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,t.jsx)(o.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/preset-classic\n"})})}),(0,t.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/preset-classic\n"})})}),(0,t.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/preset-classic\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Then, add it in your site's ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"}),"'s ",(0,t.jsx)(n.code,{children:"presets"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  // highlight-next-line\n  presets: ['@docusaurus/preset-classic'],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Preset paths can be relative to the config file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  // highlight-next-line\n  presets: ['./src/presets/docusaurus-local-preset'],\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"creating-presets",children:"Creating presets"}),"\n",(0,t.jsxs)(n.p,{children:["A preset is a function with the same shape as the ",(0,t.jsx)(n.a,{href:"/docs/api/plugin-methods/#plugin-constructor",children:"plugin constructor"}),". It should return an object of ",(0,t.jsx)(n.code,{children:"{ plugins: PluginConfig[], themes: PluginConfig[] }"}),", in the same as how they are accepted in the site config. For example, you can specify a preset that includes the following themes and plugins:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="src/presets/docusaurus-preset-multi-docs.js"',children:"export default function preset(context, opts = {}) {\n  return {\n    themes: [['docusaurus-theme-awesome', opts.theme]],\n    plugins: [\n      // Using three docs plugins at the same time!\n      // Assigning a unique ID for each without asking the user to do it\n      ['@docusaurus/plugin-content-docs', {...opts.docs1, id: 'docs1'}],\n      ['@docusaurus/plugin-content-docs', {...opts.docs2, id: 'docs2'}],\n      ['@docusaurus/plugin-content-docs', {...opts.docs3, id: 'docs3'}],\n    ],\n  };\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then in your Docusaurus config, you may configure the preset:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    // highlight-start\n    [\n      './src/presets/docusaurus-preset-multi-docs.js',\n      {\n        theme: {hello: 'world'},\n        docs1: {path: '/docs'},\n        docs2: {path: '/community'},\n        docs3: {path: '/api'},\n      },\n    ],\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is equivalent of doing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themes: [['docusaurus-theme-awesome', {hello: 'world'}]],\n  plugins: [\n    ['@docusaurus/plugin-content-docs', {id: 'docs1', path: '/docs'}],\n    ['@docusaurus/plugin-content-docs', {id: 'docs2', path: '/community'}],\n    ['@docusaurus/plugin-content-docs', {id: 'docs3', path: '/api'}],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is especially useful when some plugins and themes are intended to be used together. You can even link their options together, e.g. pass one option to multiple plugins."}),"\n",(0,t.jsx)(n.h2,{id:"module-shorthands",children:"Module shorthands"}),"\n",(0,t.jsx)(n.p,{children:"Docusaurus supports shorthands for plugins, themes, and presets. When it sees a plugin/theme/preset name, it tries to load one of the following, in that order:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[name]"})," (like ",(0,t.jsx)(n.code,{children:"content-docs"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@docusaurus/[moduleType]-[name]"})," (like ",(0,t.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docusaurus-[moduleType]-[name]"})," (like ",(0,t.jsx)(n.code,{children:"docusaurus-plugin-content-docs"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"moduleType"})," is one of ",(0,t.jsx)(n.code,{children:"'preset'"}),", ",(0,t.jsx)(n.code,{children:"'theme'"}),", ",(0,t.jsx)(n.code,{children:"'plugin'"}),", depending on which field the module name is declared in. The first module name that's successfully found is loaded."]}),"\n",(0,t.jsxs)(n.p,{children:["If the name is scoped (beginning with ",(0,t.jsx)(n.code,{children:"@"}),"), the name is first split into scope and package name by the first slash:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"@scope\n^----^\n scope  (no name!)\n\n@scope/awesome\n^----^ ^-----^\n scope   name\n\n@scope/awesome/main\n^----^ ^----------^\n scope     name\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If there is no name (like ",(0,t.jsx)(n.code,{children:"@jquery"}),"), ",(0,t.jsx)(n.code,{children:"[scope]/docusaurus-[moduleType]"})," (i.e. ",(0,t.jsx)(n.code,{children:"@jquery/docusaurus-plugin"}),") is loaded. Otherwise, the following are attempted:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[scope]/[name]"})," (like ",(0,t.jsx)(n.code,{children:"@jquery/content-docs"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[scope]/docusaurus-[moduleType]-[name]"})," (like ",(0,t.jsx)(n.code,{children:"@jquery/docusaurus-plugin-content-docs"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Below are some examples, for a plugin registered in the ",(0,t.jsx)(n.code,{children:"plugins"})," field. Note that unlike ",(0,t.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring/plugins#configuring-plugins",children:"ESLint"})," or ",(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/options#name-normalization",children:"Babel"})," where a consistent naming convention for plugins is mandated, Docusaurus permits greater naming freedom, so the resolutions are not certain, but follows the priority defined above."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Declaration"}),(0,t.jsx)(n.th,{children:"May be resolved as"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"awesome"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docusaurus-plugin-awesome"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sitemap"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-sitemap",children:(0,t.jsx)(n.code,{children:"@docusaurus/plugin-sitemap"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@my-company"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"@my-company/docusaurus-plugin"})," (the only possible resolution!)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@my-company/awesome"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@my-company/docusaurus-plugin-awesome"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@my-company/awesome/web"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@my-company/docusaurus-plugin-awesome/web"})})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(63696);let t={},l=i.createContext(t);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);