"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["14096"],{44172:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>u,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"guides/docs/multi-instance","title":"Docs Multi-instance","description":"Use multiple docs plugin instances on a single Docusaurus site.","source":"@site/docs/guides/docs/docs-multi-instance.mdx","sourceDirName":"guides/docs","slug":"/docs-multi-instance","permalink":"/docs/docs-multi-instance","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/docs-multi-instance.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1729614878000,"frontMatter":{"id":"multi-instance","description":"Use multiple docs plugin instances on a single Docusaurus site.","slug":"/docs-multi-instance"},"sidebar":"docs","previous":{"title":"Versioning","permalink":"/docs/versioning"},"next":{"title":"Blog","permalink":"/docs/blog"}}'),s=t("24246"),i=t("80980"),o=t("15398"),a=t("58636");let l={id:"multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},c="Docs Multi-instance",u={},d=[{value:"Use-cases",id:"use-cases",level:2},{value:"Mobile SDKs documentation",id:"mobile-sdks-documentation",level:3},{value:"Versioned and unversioned doc",id:"versioned-and-unversioned-doc",level:3},{value:"Setup",id:"setup",level:2},{value:"Versioned paths",id:"versioned-paths",level:2},{value:"Tagging new versions",id:"tagging-new-versions",level:2},{value:"Docs navbar items",id:"docs-navbar-items",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"docs-multi-instance",children:"Docs Multi-instance"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})," plugin can support ",(0,s.jsx)(n.a,{href:"/docs/using-plugins#multi-instance-plugins-and-plugin-ids",children:"multi-instance"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This feature is only useful for ",(0,s.jsx)(n.a,{href:"/docs/versioning",children:"versioned documentation"}),". It is recommended to be familiar with docs versioning before reading this page. If you just want ",(0,s.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars",children:"multiple sidebars"}),", you can do so within one plugin."]})}),"\n",(0,s.jsx)(n.h2,{id:"use-cases",children:"Use-cases"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes you want a Docusaurus site to host 2 distinct sets of documentation (or more)."}),"\n",(0,s.jsx)(n.p,{children:"These documentations may even have different versioning/release lifecycles."}),"\n",(0,s.jsx)(n.h3,{id:"mobile-sdks-documentation",children:"Mobile SDKs documentation"}),"\n",(0,s.jsx)(n.p,{children:"If you build a cross-platform mobile SDK, you may have 2 documentations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Android SDK documentation (",(0,s.jsx)(n.code,{children:"v1.0"}),", ",(0,s.jsx)(n.code,{children:"v1.1"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["iOS SDK documentation (",(0,s.jsx)(n.code,{children:"v1.0"}),", ",(0,s.jsx)(n.code,{children:"v2.0"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In this case, you can use a distinct docs plugin instance per mobile SDK documentation."}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"If each documentation instance is very large, you should rather create 2 distinct Docusaurus sites."}),(0,s.jsx)(n.p,{children:"If someone edits the iOS documentation, is it really useful to rebuild everything, including the whole Android documentation that did not change?"})]}),"\n",(0,s.jsx)(n.h3,{id:"versioned-and-unversioned-doc",children:"Versioned and unversioned doc"}),"\n",(0,s.jsx)(n.p,{children:'Sometimes, you want some documents to be versioned, while other documents are more "global", and it feels useless to version them.'}),"\n",(0,s.jsx)(n.p,{children:"We use this pattern on the Docusaurus website itself:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/docs",children:"/docs/*"})," section is versioned"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/community/support",children:"/community/*"})," section is unversioned"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.p,{children:"Suppose you have 2 documentations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Product: some versioned doc about your product"}),"\n",(0,s.jsx)(n.li,{children:"Community: some unversioned doc about the community around your product"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In this case, you should use the same plugin twice in your site configuration."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@docusaurus/preset-classic"})," already includes a docs plugin instance for you!"]})}),"\n",(0,s.jsx)(n.p,{children:"When using the preset:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          // id: 'product', // omitted => default instance\n          // highlight-end\n          path: 'product',\n          routeBasePath: 'product',\n          sidebarPath: './sidebarsProduct.js',\n          // ... other options\n        },\n      },\n    ],\n  ],\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: './sidebarsCommunity.js',\n        // ... other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"When not using the preset:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        // id: 'product', // omitted => default instance\n        // highlight-end\n        path: 'product',\n        routeBasePath: 'product',\n        sidebarPath: './sidebarsProduct.js',\n        // ... other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: './sidebarsCommunity.js',\n        // ... other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Don't forget to assign a unique ",(0,s.jsx)(n.code,{children:"id"})," attribute to plugin instances."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["We consider that the ",(0,s.jsx)(n.code,{children:"product"}),' instance is the most important one, and make it the "default" instance by not assigning any ID.']})}),"\n",(0,s.jsx)(n.h2,{id:"versioned-paths",children:"Versioned paths"}),"\n",(0,s.jsx)(n.p,{children:"Each plugin instance will store versioned docs in a distinct folder."}),"\n",(0,s.jsx)(n.p,{children:"The default plugin instance will use these paths:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/versions.json"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/versioned_docs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/versioned_sidebars"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The other plugin instances (with an ",(0,s.jsx)(n.code,{children:"id"})," attribute) will use these paths:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/[pluginId]_versions.json"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/[pluginId]_versioned_docs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"website/[pluginId]_versioned_sidebars"})}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can omit the ",(0,s.jsx)(n.code,{children:"id"})," attribute (defaults to ",(0,s.jsx)(n.code,{children:"default"}),") for one of the docs plugin instances."]}),(0,s.jsx)(n.p,{children:"The instance paths will be simpler, and retro-compatible with a single-instance setup."})]}),"\n",(0,s.jsx)(n.h2,{id:"tagging-new-versions",children:"Tagging new versions"}),"\n",(0,s.jsx)(n.p,{children:"Each plugin instance will have its own CLI command to tag a new version. They will be displayed if you run:"}),"\n",(0,s.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(a.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus -- --help\n"})})}),(0,s.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus --help\n"})})}),(0,s.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus --help\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"To version the product/default docs plugin instance:"}),"\n",(0,s.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(a.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0.0\n"})})}),(0,s.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version 1.0.0\n"})})}),(0,s.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version 1.0.0\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"To version the non-default/community docs plugin instance:"}),"\n",(0,s.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(a.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version:community 1.0.0\n"})})}),(0,s.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version:community 1.0.0\n"})})}),(0,s.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version:community 1.0.0\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"docs-navbar-items",children:"Docs navbar items"}),"\n",(0,s.jsxs)(n.p,{children:["Each docs-related ",(0,s.jsx)(n.a,{href:"/docs/api/themes/configuration#navbar",children:"theme navbar items"})," take an optional ",(0,s.jsx)(n.code,{children:"docsPluginId"})," attribute."]}),"\n",(0,s.jsx)(n.p,{children:"For example, if you want to have one version dropdown for each mobile SDK (iOS and Android), you could do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'ios',\n          // highlight-end\n        },\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'android',\n          // highlight-end\n        },\n      ],\n    },\n  },\n};\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},58636:function(e,n,t){t.d(n,{Z:()=>o});var r=t("24246");t("27378");var s=t("90496");let i="tabItem_pnkT";function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i,o),hidden:t,children:n})}},15398:function(e,n,t){t.d(n,{Z:()=>S});var r=t("24246"),s=t("27378"),i=t("90496"),o=t("54947"),a=t("3620"),l=t("844"),c=t("97486"),u=t("32263"),d=t("16971");function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var i=[],o=!0,a=!1;try{for(s=s.call(e);!(o=(t=s.next()).done)&&(i.push(t.value),!n||i.length!==n);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&null!=s.return&&s.return()}finally{if(a)throw r}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var n,t;if(!e||(0,s.isValidElement)(e)&&(n=e.props)&&(void 0===n?"undefined":(t=n)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t)=="object"&&"value"in n)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function f(e){var n=e.value;return e.tabValues.some(function(e){return e.value===n})}var g=t("71607");let b="tabList_Qoir",v="tabItem_AQgk";function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,s,i;r=e,s=n,i=t[n],s in r?Object.defineProperty(r,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[s]=i})}return e}function x(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function y(e){var n=e.className,t=e.block,s=e.selectedValue,a=e.selectValue,l=e.tabValues,c=[],u=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l[c.indexOf(n)].value;t!==s&&(u(n),a(t))},h=function(e){var n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,r=c.indexOf(e.currentTarget)+1;n=null!==(t=c[r])&&void 0!==t?t:c[0];break;case"ArrowLeft":var s,i=c.indexOf(e.currentTarget)-1;n=null!==(s=c[i])&&void 0!==s?s:c[c.length-1]}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map(function(e){var n=e.value,t=e.label,o=e.attributes;return(0,r.jsx)("li",x(j({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},o),{className:(0,i.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":s===n}),children:null!=t?t:n}),n)})})}function w(e){var n=e.lazy,t=e.children,o=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=a.find(function(e){return e.props.value===o});return l?(0,s.cloneElement)(l,{className:(0,i.Z)("margin-top--md",l.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map(function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})})})}function O(e){var n=function(e){var n,t,r,i,o,h,g,b,v,j,x,y,w,O,S=e.defaultValue,P=e.queryString,D=e.groupId;var I=(t=(n=e).values,r=n.children,(0,s.useMemo)(function(){var e=null!=t?t:m(r).map(function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}});return!function(e){var n=(0,u.lx)(e,function(e,n){return e.value===n.value});if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[t,r])),k=p((0,s.useState)(function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(r.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}var s=null!==(n=r.find(function(e){return e.default}))&&void 0!==n?n:r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:S,tabValues:I})}),2),T=k[0],V=k[1];var N=p((o=(i={queryString:void 0!==P&&P,groupId:D}).queryString,h=i.groupId,g=(0,a.k6)(),b=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:void 0!==o&&o,groupId:h}),[(0,c._X)(b),(0,s.useCallback)(function(e){if(!!b){var n,t,r=new URLSearchParams(g.location.search);r.set(b,e),g.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,s,i;r=e,s=n,i=t[n],s in r?Object.defineProperty(r,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[s]=i})}return e}({},g.location),t=(t={search:r.toString()},t),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}),n))}},[b,g])]),2),E=N[0],Z=N[1];var A=p((j=(v=({groupId:D}).groupId)?"docusaurus.tab.".concat(v):null,y=(x=p((0,d.Nk)(j),2))[0],w=x[1],[y,(0,s.useCallback)(function(e){if(!!j)w.set(e)},[j,w])]),2),C=A[0],_=A[1];var q=f({value:O=null!=E?E:C,tabValues:I})?O:null;return(0,l.Z)(function(){q&&V(q)},[q]),{selectedValue:T,selectValue:(0,s.useCallback)(function(e){if(!f({value:e,tabValues:I}))throw Error("Can't select invalid tab value=".concat(e));V(e),Z(e),_(e)},[Z,_,I]),tabValues:I}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",b),children:[(0,r.jsx)(y,j({},n,e)),(0,r.jsx)(w,j({},n,e))]})}function S(e){var n=(0,g.Z)();return(0,r.jsx)(O,x(j({},e),{children:m(e.children)}),String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(27378);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);