"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["79397"],{41553:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>u,default:()=>j,assets:()=>h,toc:()=>p,frontMatter:()=>d});var s=JSON.parse('{"id":"api/plugins/plugin-content-pages","title":"\uD83D\uDCE6 plugin-content-pages","description":"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides creating pages functionality.","source":"@site/docs/api/plugins/plugin-content-pages.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-content-pages","permalink":"/docs/api/plugins/@docusaurus/plugin-content-pages","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-content-pages.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1730375676000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"slug":"/api/plugins/@docusaurus/plugin-content-pages"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-content-blog","permalink":"/docs/api/plugins/@docusaurus/plugin-content-blog"},"next":{"title":"\uD83D\uDCE6 plugin-client-redirects","permalink":"/docs/api/plugins/@docusaurus/plugin-client-redirects"}}'),r=t("24246"),l=t("80980"),i=t("15398"),c=t("58636"),o=t("32240"),a=t("66359");let d={sidebar_position:3,slug:"/api/plugins/@docusaurus/plugin-content-pages"},u="\uD83D\uDCE6 plugin-content-pages",h={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>EditUrlFn</code>",id:"EditUrlFn",level:4},{value:"Example configuration",id:"ex-config",level:3},{value:"Markdown front matter",id:"markdown-front-matter",level:2},{value:"i18n",id:"i18n",level:2},{value:"Translation files location",id:"translation-files-location",level:3},{value:"Example file-system structure",id:"example-file-system-structure",level:3}];function x(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-plugin-content-pages",children:"\uD83D\uDCE6 plugin-content-pages"})}),"\n","\n",(0,r.jsxs)(n.p,{children:["The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides ",(0,r.jsx)(n.a,{href:"/docs/creating-pages",children:"creating pages"})," functionality."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(c.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-content-pages\n"})})}),(0,r.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-content-pages\n"})})}),(0,r.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-content-pages\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If you use the preset ",(0,r.jsx)(n.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,r.jsxs)(n.p,{children:["You can configure this plugin through the ",(0,r.jsx)(n.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"path"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'src/pages'"})}),(0,r.jsx)(n.td,{children:"Path to data on filesystem relative to site dir. Components in this directory will be automatically converted to pages."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"editUrl"})}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("code",{children:["string | ",(0,r.jsx)(n.a,{href:"#EditUrlFn",children:"EditUrlFn"})]})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"undefined"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Only for Markdown pages"}),". Base URL to edit your site. The final URL is computed by ",(0,r.jsx)(n.code,{children:"editUrl + relativePostPath"}),". Using a function allows more nuanced control for each file. Omitting this variable entirely will disable edit links."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"editLocalizedFiles"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Only for Markdown pages"}),". The edit URL will target the localized file, instead of the original unlocalized file. Ignored when ",(0,r.jsx)(n.code,{children:"editUrl"})," is a function."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"routeBasePath"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'/'"})}),(0,r.jsxs)(n.td,{children:["URL route for the pages section of your site. ",(0,r.jsx)(n.strong,{children:"DO NOT"})," include a trailing slash."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"include"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"['**/*.{js,jsx,ts,tsx,md,mdx}']"})}),(0,r.jsx)(n.td,{children:"Matching files will be included and processed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"exclude"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"See example configuration"})}),(0,r.jsx)(n.td,{children:"No route will be created for matching files."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mdxPageComponent"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'@theme/MDXPage'"})}),(0,r.jsx)(n.td,{children:"Component used by each MDX page."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"remarkPlugins"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"any[]"})}),(0,r.jsx)(n.td,{children:"Remark plugins passed to MDX."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rehypePlugins"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"any[]"})}),(0,r.jsx)(n.td,{children:"Rehype plugins passed to MDX."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rehypePlugins"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"any[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:"Recma plugins passed to MDX."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"beforeDefaultRemarkPlugins"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"any[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:"Custom Remark plugins passed to MDX before the default Docusaurus Remark plugins."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"beforeDefaultRehypePlugins"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"any[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:"Custom Rehype plugins passed to MDX before the default Docusaurus Rehype plugins."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"showLastUpdateAuthor"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Only for Markdown pages"}),". Whether to display the author who last updated the page."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"showLastUpdateTime"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Only for Markdown pages"}),". Whether to display the last date the page post was updated. This requires access to git history during the build, so will not work correctly with shallow clones (a common default for CI systems). With GitHub ",(0,r.jsx)(n.code,{children:"actions/checkout"}),", use",(0,r.jsx)(n.code,{children:"fetch-depth: 0"}),"."]})]})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,r.jsx)(n.h4,{id:"EditUrlFn",children:(0,r.jsx)(n.code,{children:"EditUrlFn"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type EditUrlFunction = (params: {\n  blogDirPath: string;\n  blogPath: string;\n  permalink: string;\n  locale: string;\n}) => string | undefined;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(n.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,r.jsx)(a.Z,{pluginName:"@docusaurus/plugin-content-pages",presetOptionName:"pages",code:"{\n  path: 'src/pages',\n  routeBasePath: '',\n  include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],\n  exclude: [\n    '**/_*.{js,jsx,ts,tsx,md,mdx}',\n    '**/_*/**',\n    '**/*.test.{js,jsx,ts,tsx}',\n    '**/__tests__/**',\n  ],\n  mdxPageComponent: '@theme/MDXPage',\n  remarkPlugins: [require('./my-remark-plugin')],\n  rehypePlugins: [],\n  beforeDefaultRemarkPlugins: [],\n  beforeDefaultRehypePlugins: [],\n}"}),"\n",(0,r.jsx)(n.h2,{id:"markdown-front-matter",children:"Markdown front matter"}),"\n",(0,r.jsxs)(n.p,{children:["Markdown pages can use the following Markdown ",(0,r.jsx)(n.a,{href:"/docs/markdown-features#front-matter",children:"front matter"})," metadata fields, enclosed by a line ",(0,r.jsx)(n.code,{children:"---"})," on either side."]}),"\n",(0,r.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"title"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Markdown title"}),(0,r.jsx)(n.td,{children:"The blog post title."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"description"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The first line of Markdown content"}),(0,r.jsxs)(n.td,{children:["The description of your page, which will become the ",(0,r.jsx)(n.code,{children:'<meta name="description" content="..."/>'})," and ",(0,r.jsx)(n.code,{children:'<meta property="og:description" content="..."/>'})," in ",(0,r.jsx)(n.code,{children:"<head>"}),", used by search engines."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"keywords"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"undefined"})}),(0,r.jsxs)(n.td,{children:["Keywords meta tag, which will become the ",(0,r.jsx)(n.code,{children:'<meta name="keywords" content="keyword1,keyword2,..."/>'})," in ",(0,r.jsx)(n.code,{children:"<head>"}),", used by search engines."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"image"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"undefined"})}),(0,r.jsxs)(n.td,{children:["Cover or thumbnail image that will be used as the ",(0,r.jsx)(n.code,{children:'<meta property="og:image" content="..."/>'})," in the ",(0,r.jsx)(n.code,{children:"<head>"}),", enhancing link previews on social media and messaging platforms."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"wrapperClassName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Class name to be added to the wrapper element to allow targeting specific page content."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"hide_table_of_contents"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"Whether to hide the table of contents to the right."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"draft"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"Draft pages will only be available during development."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"unlisted"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:'Unlisted pages will be available in both development and production. They will be "hidden" in production, not indexed, excluded from sitemaps, and can only be accessed by users having a direct link.'})]})]})]})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"---\ntitle: Markdown Page\ndescription: Markdown page SEO description\nwrapperClassName: markdown-page\nhide_table_of_contents: false\ndraft: true\n---\n\nMarkdown page content\n"})}),"\n",(0,r.jsx)(n.h2,{id:"i18n",children:"i18n"}),"\n",(0,r.jsxs)(n.p,{children:["Read the ",(0,r.jsx)(n.a,{href:"/docs/i18n/introduction",children:"i18n introduction"})," first."]}),"\n",(0,r.jsx)(n.h3,{id:"translation-files-location",children:"Translation files location"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Base path"}),": ",(0,r.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-pages"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Multi-instance path"}),": ",(0,r.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-pages-[pluginId]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"JSON files"}),": extracted with ",(0,r.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:(0,r.jsx)(n.code,{children:"docusaurus write-translations"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Markdown files"}),": ",(0,r.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-pages"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example-file-system-structure",children:"Example file-system structure"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"website/i18n/[locale]/docusaurus-plugin-content-pages\n\u2502\n\u2502 # translations for website/src/pages\n\u251C\u2500\u2500 first-markdown-page.md\n\u2514\u2500\u2500 second-markdown-page.md\n"})})]})}function j(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},58636:function(e,n,t){t.d(n,{Z:()=>i});var s=t("24246");t("27378");var r=t("90496");let l="tabItem_pnkT";function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t,children:n})}},15398:function(e,n,t){t.d(n,{Z:()=>y});var s=t("24246"),r=t("27378"),l=t("90496"),i=t("54947"),c=t("3620"),o=t("844"),a=t("97486"),d=t("32263"),u=t("16971");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var x=t("71607");let j="tabList_Qoir",g="tabItem_AQgk";function m(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:o}=e,a=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{let n=e.currentTarget,t=o[a.indexOf(n)].value;t!==r&&(d(n),c(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{let t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:u,...i,className:(0,l.Z)("tabs__item",g,i?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function f(e){let{lazy:n,children:t,selectedValue:i}=e,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=c.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:c.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:s}=e,l=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,x]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=t.find(e=>e.default)??t[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:l})),[j,g]=function(e){let{queryString:n=!1,groupId:t}=e,s=(0,c.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),i=(0,a._X)(l);return[i,(0,r.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})},[l,s])]}({queryString:t,groupId:s}),[m,f]=function(e){var n;let{groupId:t}=e;let s=(n=t)?`docusaurus.tab.${n}`:null,[l,i]=(0,u.Nk)(s);return[l,(0,r.useCallback)(e=>{if(!!s)i.set(e)},[s,i])]}({groupId:s}),b=(()=>{let e=j??m;return p({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{b&&x(b)},[b]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);x(e),g(e),f(e)},[g,f,l]),tabValues:l}}(e);return(0,s.jsxs)("div",{className:(0,l.Z)("tabs-container",j),children:[(0,s.jsx)(m,{...n,...e}),(0,s.jsx)(f,{...n,...e})]})}function y(e){let n=(0,x.Z)();return(0,s.jsx)(b,{...e,children:h(e.children)},String(n))}},56497:function(e,n,t){t.d(n,{Z:function(){return l}});var s=t(24246);t(27378);var r=t(71607);function l(e){let{children:n,fallback:t}=e;return(0,r.Z)()?(0,s.jsx)(s.Fragment,{children:n?.()}):t??null}},32240:function(e,n,t){t.d(n,{Z:()=>a});var s=t("24246"),r=t("27378"),l=t("96700"),i=t("3620");let c="apiTable_e8hp",o=r.forwardRef(function(e,n){let{name:t,children:c}=e,o=function(e){let n=e;for(;(0,r.isValidElement)(n);)[n]=r.Children.toArray(n.props.children);if("string"!=typeof n)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return n}(c),a=t?`${t}-${o}`:o,d=`#${a}`,u=(0,i.k6)();return(0,l.Z)().collectAnchor(a),(0,s.jsx)("tr",{id:a,tabIndex:0,ref:u.location.hash===d?n:void 0,onClick:e=>{let n="TD"===e.target.tagName.toUpperCase(),t=!!window.getSelection()?.toString();n&&!t&&u.push(d)},onKeyDown:e=>{"Enter"===e.key&&u.push(d)},children:c.props.children})});function a(e){let{children:n,name:t}=e;if("table"!==n.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[l,i]=r.Children.toArray(n.props.children),a=(0,r.useRef)(null);(0,r.useEffect)(()=>{a.current?.focus()},[a]);let d=r.Children.map(i.props.children,e=>(0,s.jsx)(o,{name:t,ref:a,children:e}));return(0,s.jsxs)("table",{className:c,children:[l,(0,s.jsx)("tbody",{children:d})]})}},66359:function(e,n,t){t.d(n,{Z:function(){return u}});var s=t(24246);t(27378);var r=t(35363),l=t(90158),i=t(77827),c=t(15398),o=t(58636),a=t(95998);let d=void 0;function u(e){let{code:n,pluginName:t,presetOptionName:u}=e,h=(0,l.zu)(d).path;return(0,s.jsxs)(c.Z,{groupId:"api-config-ex",children:[(0,s.jsxs)(o.Z,{value:"preset",label:(0,i.I)({message:"Preset options"}),children:[(0,s.jsx)("p",{children:(0,s.jsx)(i.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,s.jsx)(r.Z,{to:`${h}/using-plugins#docusauruspreset-classic`,children:(0,s.jsx)(i.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,s.jsx)(a.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${u}: ${n.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,s.jsxs)(o.Z,{value:"plugin",label:(0,i.I)({message:"Plugin options"}),children:[(0,s.jsx)("p",{children:(0,s.jsx)(i.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,s.jsx)(a.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${t}',
      // highlight-start
      ${n.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},95998:function(e,n,t){t.d(n,{Z:()=>ei});var s,r={};t.r(r),t.d(r,{ButtonExample:()=>I});var l=t("24246"),i=t("27378"),c=t("90496"),o=t("71607"),a=t("10075"),d=t("77827"),u=t("8156"),h=t("56497"),p=t("85108"),x=t("45245"),j=t("26378");function g(){let{prism:e}=(0,j.L)(),{colorMode:n}=(0,x.I)(),t=e.theme,s=e.darkTheme||t;return"dark"===n?s:t}var m=t("67490");let f="playgroundContainer_6Ior",b="playgroundHeader_Tvsk",y="playgroundEditor_TySg",v="playgroundPreview_mApW";function w(e){let{children:n}=e;return(0,l.jsx)("div",{className:(0,c.Z)(b),children:n})}function k(){return(0,l.jsx)("div",{children:"Loading..."})}function N(){return(0,l.jsx)(h.Z,{fallback:(0,l.jsx)(k,{}),children:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.Z,{fallback:e=>(0,l.jsx)(p.Ac,{...e}),children:(0,l.jsx)(a.i5,{})}),(0,l.jsx)(a.IF,{})]})})}function B(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{children:(0,l.jsx)(d.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,l.jsx)("div",{className:v,children:(0,l.jsx)(N,{})})]})}function C(){let e=(0,o.Z)();return(0,l.jsx)(a.uz,{className:y},String(e))}function E(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{children:(0,l.jsx)(d.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,l.jsx)(C,{})]})}let T=e=>`${e};`;function Z(e){let{children:n,transformCode:t,...s}=e,{siteConfig:{themeConfig:r}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:i}}=r,c=g(),o=s.metastring?.includes("noInline")??!1;return(0,l.jsx)("div",{className:f,children:(0,l.jsx)(a.nu,{code:n?.replace(/\n$/,""),noInline:o,transformCode:t??T,theme:c,...s,children:"top"===i?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(B,{}),(0,l.jsx)(E,{})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(E,{}),(0,l.jsx)(B,{})]})})})}function I(e){return(0,l.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let L={React:i,...i,...r};var _=t("55951"),M=t("6324"),D=t.n(M);let S=/title=(?<quote>["'])(?<title>.*?)\1/,P=/\{(?<range>[\d,-]+)\}/,A={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},R={...A,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},$=Object.keys(A);function O(e,n){let t=e.map(e=>{let{start:t,end:s}=R[e];return`(?:${t}\\s*(${n.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${s})`}).join("|");return RegExp(`^\\s*(?:${t})\\s*$`)}let U="codeBlockContainer_jDV4";function F(e){let{as:n,...t}=e,s=function(e){let n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach(e=>{let[s,r]=e,l=n[s];l&&"string"==typeof r&&(t[l]=r)}),t}(g());return(0,l.jsx)(n,{...t,style:s,className:(0,c.Z)(t.className,U,_.k.common.codeBlock)})}let W={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function V(e){let{children:n,className:t}=e;return(0,l.jsx)(F,{as:"pre",tabIndex:0,className:(0,c.Z)(W.codeBlockStandalone,"thin-scrollbar",t),children:(0,l.jsx)("code",{className:W.codeBlockLines,children:n})})}var q=t("50923");let H={attributes:!0,characterData:!0,childList:!0,subtree:!0};var X=t("7316");let z={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function G(e){let{line:n,classNames:t,showLineNumbers:s,getLineProps:r,getTokenProps:i}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");let o=r({line:n,className:(0,c.Z)(t,s&&z.codeLine)}),a=n.map((e,n)=>(0,l.jsx)("span",{...i({token:e})},n));return(0,l.jsxs)("span",{...o,children:[s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:z.codeLineNumber}),(0,l.jsx)("span",{className:z.codeLineContent,children:a})]}):a,(0,l.jsx)("br",{})]})}var J=t("44771");function Q(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Y(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee(e){let{code:n,className:t}=e,[s,r]=(0,i.useState)(!1),o=(0,i.useRef)(void 0),a=(0,i.useCallback)(()=>{(0,J.Z)(n),r(!0),o.current=window.setTimeout(()=>{r(!1)},1e3)},[n]);return(0,i.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,l.jsx)("button",{type:"button","aria-label":s?(0,d.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,d.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",t,K.copyButton,s&&K.copyButtonCopied),onClick:a,children:(0,l.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,l.jsx)(Q,{className:K.copyButtonIcon}),(0,l.jsx)(Y,{className:K.copyButtonSuccessIcon})]})})}function en(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let et={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function es(e){let{className:n,onClick:t,isEnabled:s}=e,r=(0,d.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,l.jsx)("button",{type:"button",onClick:t,className:(0,c.Z)("clean-btn",n,s&&et.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,l.jsx)(en,{className:et.wordWrapButtonIcon,"aria-hidden":"true"})})}function er(e){var n,t,s;let{children:r,className:o="",metastring:a,title:d,showLineNumbers:u,language:h}=e,{prism:{defaultLanguage:p,magicComments:x}}=(0,j.L)();let m=(n=h??function(e){let n=e.split(" ").find(e=>e.startsWith("language-"));return n?.replace(/language-/,"")}(o)??p,n?.toLowerCase()),f=g(),b=function(){let[e,n]=(0,i.useState)(!1),[t,s]=(0,i.useState)(!1),r=(0,i.useRef)(null),l=(0,i.useCallback)(()=>{let t=r.current.querySelector("code");e?t.removeAttribute("style"):(t.style.whiteSpace="pre-wrap",t.style.overflowWrap="anywhere"),n(e=>!e)},[r,e]),c=(0,i.useCallback)(()=>{let{scrollWidth:e,clientWidth:n}=r.current;s(e>n||r.current.querySelector("code").hasAttribute("style"))},[r]);return!function(e,n){let[t,s]=(0,i.useState)(),r=(0,i.useCallback)(()=>{s(e.current?.closest("[role=tabpanel][hidden]"))},[e,s]);(0,i.useEffect)(()=>{r()},[r]),!function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:H,s=(0,q.zX)(n),r=(0,q.Ql)(t);(0,i.useEffect)(()=>{let n=new MutationObserver(s);return e&&n.observe(e,r),()=>n.disconnect()},[e,s,r])}(t,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(n(),r())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(r,c),(0,i.useEffect)(()=>{c()},[e,c]),(0,i.useEffect)(()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)}),[c]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:t,toggle:l}}();let y=(t=a,(t?.match(S)?.groups.title??"")||d),{lineClassNames:v,code:w}=function(e,n){let t=e.replace(/\n$/,""),{language:s,magicComments:r,metastring:l}=n;if(l&&P.test(l)){let e=l.match(P).groups.range;if(0===r.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let n=r[0].className;return{lineClassNames:Object.fromEntries(D()(e).filter(e=>e>0).map(e=>[e-1,[n]])),code:t}}if(void 0===s)return{lineClassNames:{},code:t};let i=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return O(["js","jsBlock"],n);case"jsx":case"tsx":return O(["js","jsBlock","jsx"],n);case"html":return O(["js","jsBlock","html"],n);case"python":case"py":case"bash":return O(["bash"],n);case"markdown":case"md":return O(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return O(["tex"],n);case"lua":case"haskell":case"sql":return O(["lua"],n);case"wasm":return O(["wasm"],n);case"vb":case"vba":case"visual-basic":return O(["vb","rem"],n);case"vbnet":return O(["vbnet","rem"],n);case"batch":return O(["rem"],n);case"basic":return O(["rem","f90"],n);case"fsharp":return O(["js","ml"],n);case"ocaml":case"sml":return O(["ml"],n);case"fortran":return O(["f90"],n);case"cobol":return O(["cobol"],n);default:return O($,n)}}(s,r),c=t.split("\n"),o=Object.fromEntries(r.map(e=>[e.className,{start:0,range:""}])),a=Object.fromEntries(r.filter(e=>e.line).map(e=>{let{className:n,line:t}=e;return[t,n]})),d=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:n,block:t}=e;return[t.start,n]})),u=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:n,block:t}=e;return[t.end,n]}));for(let e=0;e<c.length;){let n=c[e].match(i);if(!n){e+=1;continue}let t=n.slice(1).find(e=>void 0!==e);a[t]?o[a[t]].range+=`${e},`:d[t]?o[d[t]].start=e:u[t]&&(o[u[t]].range+=`${o[u[t]].start}-${e-1},`),c.splice(e,1)}t=c.join("\n");let h={};return Object.entries(o).forEach(e=>{let[n,{range:t}]=e;D()(t).forEach(e=>{h[e]??=[],h[e].push(n)})}),{lineClassNames:h,code:t}}(r,{metastring:a,language:m,magicComments:x});let k=u??(s=a,!!s?.includes("showLineNumbers"));return(0,l.jsxs)(F,{as:"div",className:(0,c.Z)(o,m&&!o.includes(`language-${m}`)&&`language-${m}`),children:[y&&(0,l.jsx)("div",{className:W.codeBlockTitle,children:y}),(0,l.jsxs)("div",{className:W.codeBlockContent,children:[(0,l.jsx)(X.y$,{theme:f,code:w,language:m??"text",children:e=>{let{className:n,style:t,tokens:s,getLineProps:r,getTokenProps:i}=e;return(0,l.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,c.Z)(n,W.codeBlock,"thin-scrollbar"),style:t,children:(0,l.jsx)("code",{className:(0,c.Z)(W.codeBlockLines,k&&W.codeBlockLinesWithNumbering),children:s.map((e,n)=>(0,l.jsx)(G,{line:e,getLineProps:r,getTokenProps:i,classNames:v[n],showLineNumbers:k},n))})})}}),(0,l.jsxs)("div",{className:W.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,l.jsx)(es,{className:W.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,l.jsx)(ee,{className:W.codeButton,code:w})]})]})]})}let el=(s=function(e){var n;let{children:t,...s}=e,r=(0,o.Z)();let c=(n=t,i.Children.toArray(n).some(e=>(0,i.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n),a="string"==typeof c?er:V;return(0,l.jsx)(a,{...s,children:c},String(r))},function(e){return e.live?(0,l.jsx)(Z,{scope:L,...e}):(0,l.jsx)(s,{...e})});function ei(e){return(0,l.jsx)(el,{...e})}}}]);