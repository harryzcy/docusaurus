"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["4828"],{25891:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"api/plugins/plugin-debug","title":"\uD83D\uDCE6 plugin-debug","description":"The debug plugin will display useful debug information at http3000/docusaurus/debug.","source":"@site/docs/api/plugins/plugin-debug.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-debug","permalink":"/docs/api/plugins/@docusaurus/plugin-debug","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-debug.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1728655362000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"slug":"/api/plugins/@docusaurus/plugin-debug"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-client-redirects","permalink":"/docs/api/plugins/@docusaurus/plugin-client-redirects"},"next":{"title":"\uD83D\uDCE6 plugin-google-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-google-analytics"}}'),i=t("24246"),u=t("80980"),a=t("15398"),o=t("58636");let l={sidebar_position:5,slug:"/api/plugins/@docusaurus/plugin-debug"},s="\uD83D\uDCE6 plugin-debug",c={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,u.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-plugin-debug",children:"\uD83D\uDCE6 plugin-debug"})}),"\n","\n",(0,i.jsxs)(n.p,{children:["The debug plugin will display useful debug information at ",(0,i.jsx)(n.a,{href:"http://localhost:3000/__docusaurus/debug",children:(0,i.jsx)(n.code,{children:"http://localhost:3000/__docusaurus/debug"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It is mostly useful for plugin authors, that will be able to inspect more easily the content of the ",(0,i.jsx)(n.code,{children:".docusaurus"})," folder (like the creates routes), but also be able to inspect data structures that are never written to disk, like the plugin data loaded through the ",(0,i.jsx)(n.code,{children:"contentLoaded"})," lifecycle."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["If you use the plugin via the classic preset, the preset will ",(0,i.jsx)(n.strong,{children:"enable the plugin in development and disable it in production"})," by default (",(0,i.jsx)(n.code,{children:"debug: undefined"}),") to avoid exposing potentially sensitive information. You can use ",(0,i.jsx)(n.code,{children:"debug: true"})," to always enable it or ",(0,i.jsx)(n.code,{children:"debug: false"})," to always disable it."]}),(0,i.jsx)(n.p,{children:"If you use a standalone plugin, you may need to achieve the same effect by checking the environment:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    // highlight-next-line\n    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-debug',\n  ].filter(Boolean),\n};\n"})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"If you report a bug, we will probably ask you to have this plugin turned on in the production, so that we can inspect your deployment config more easily."}),(0,i.jsxs)(n.p,{children:["If you don't have any sensitive information, you can keep it on in production ",(0,i.jsx)(n.a,{href:"/__docusaurus/debug",children:"like we do"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(o.Z,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-debug\n"})})}),(0,i.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-debug\n"})})}),(0,i.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-debug\n"})})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["If you use the preset ",(0,i.jsx)(n.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,i.jsxs)(n.p,{children:["You can configure this plugin through the ",(0,i.jsx)(n.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"This plugin currently has no options."}),"\n",(0,i.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,i.jsx)(n.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n",(0,i.jsxs)(a.Z,{groupId:"api-config-ex",children:[(0,i.jsxs)(o.Z,{value:"preset",label:"Preset options",children:[(0,i.jsxs)(n.p,{children:["If you use a preset, configure this plugin through the ",(0,i.jsx)(n.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-next-line\n        debug: true, // This will enable the plugin in production\n      },\n    ],\n  ],\n};\n"})})]}),(0,i.jsxs)(o.Z,{value:"plugin",label:"Plugin Options",children:[(0,i.jsx)(n.p,{children:"If you are using a standalone plugin, provide options directly to the plugin:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // highlight-next-line\n  plugins: ['@docusaurus/plugin-debug'],\n};\n"})})]})]})]})}function h(e={}){let{wrapper:n}={...(0,u.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},58636:function(e,n,t){t.d(n,{Z:()=>a});var r=t("24246");t("27378");var i=t("90496");let u="tabItem_pnkT";function a(e){var n=e.children,t=e.hidden,a=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(u,a),hidden:t,children:n})}},15398:function(e,n,t){t.d(n,{Z:()=>k});var r=t("24246"),i=t("27378"),u=t("90496"),a=t("54947"),o=t("3620"),l=t("844"),s=t("97486"),c=t("32263"),d=t("16971");function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var u=[],a=!0,o=!1;try{for(i=i.call(e);!(a=(t=i.next()).done)&&(u.push(t.value),!n||u.length!==n);a=!0);}catch(e){o=!0,r=e}finally{try{!a&&null!=i.return&&i.return()}finally{if(o)throw r}}return u}}(e,n)||function(e,n){if(e){if("string"==typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var n,t;return null!==(t=null===(n=i.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var n,t;if(!e||(0,i.isValidElement)(e)&&(n=e.props)&&(void 0===n?"undefined":(t=n)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t)=="object"&&"value"in n)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function g(e){var n=e.value;return e.tabValues.some(function(e){return e.value===n})}var b=t("71607");let v="tabList_Qoir",y="tabItem_AQgk";function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,i,u;r=e,i=n,u=t[n],i in r?Object.defineProperty(r,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[i]=u})}return e}function j(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function x(e){var n=e.className,t=e.block,i=e.selectedValue,o=e.selectValue,l=e.tabValues,s=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l[s.indexOf(n)].value;t!==i&&(c(n),o(t))},p=function(e){var n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,r=s.indexOf(e.currentTarget)+1;n=null!==(t=s[r])&&void 0!==t?t:s[0];break;case"ArrowLeft":var i,u=s.indexOf(e.currentTarget)-1;n=null!==(i=s[u])&&void 0!==i?i:s[s.length-1]}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":t},n),children:l.map(function(e){var n=e.value,t=e.label,a=e.attributes;return(0,r.jsx)("li",j(m({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:function(e){return s.push(e)},onKeyDown:p,onClick:d},a),{className:(0,u.Z)("tabs__item",y,null==a?void 0:a.className,{"tabs__item--active":i===n}),children:null!=t?t:n}),n)})})}function O(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=o.find(function(e){return e.props.value===a});return l?(0,i.cloneElement)(l,{className:(0,u.Z)("margin-top--md",l.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map(function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})})})}function w(e){var n=function(e){var n,t,r,u,a,p,b,v,y,m,j,x,O,w,k=e.defaultValue,I=e.queryString,P=e.groupId;var S=(t=(n=e).values,r=n.children,(0,i.useMemo)(function(){var e=null!=t?t:f(r).map(function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}});return!function(e){var n=(0,c.lx)(e,function(e,n){return e.value===n.value});if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[t,r])),E=h((0,i.useState)(function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(r.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}var i=null!==(n=r.find(function(e){return e.default}))&&void 0!==n?n:r[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:k,tabValues:S})}),2),N=E[0],T=E[1];var V=h((a=(u={queryString:void 0!==I&&I,groupId:P}).queryString,p=u.groupId,b=(0,o.k6)(),v=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:void 0!==a&&a,groupId:p}),[(0,s._X)(v),(0,i.useCallback)(function(e){if(!!v){var n,t,r=new URLSearchParams(b.location.search);r.set(v,e),b.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,i,u;r=e,i=n,u=t[n],i in r?Object.defineProperty(r,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[i]=u})}return e}({},b.location),t=(t={search:r.toString()},t),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}),n))}},[v,b])]),2),D=V[0],Z=V[1];var _=h((m=(y=({groupId:P}).groupId)?"docusaurus.tab.".concat(y):null,x=(j=h((0,d.Nk)(m),2))[0],O=j[1],[x,(0,i.useCallback)(function(e){if(!!m)O.set(e)},[m,O])]),2),A=_[0],C=_[1];var q=g({value:w=null!=D?D:A,tabValues:S})?w:null;return(0,l.Z)(function(){q&&T(q)},[q]),{selectedValue:N,selectValue:(0,i.useCallback)(function(e){if(!g({value:e,tabValues:S}))throw Error("Can't select invalid tab value=".concat(e));T(e),Z(e),C(e)},[Z,C,S]),tabValues:S}}(e);return(0,r.jsxs)("div",{className:(0,u.Z)("tabs-container",v),children:[(0,r.jsx)(x,m({},n,e)),(0,r.jsx)(O,m({},n,e))]})}function k(e){var n=(0,b.Z)();return(0,r.jsx)(w,j(m({},e),{children:f(e.children)}),String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(27378);let i={},u=r.createContext(i);function a(e){let n=r.useContext(u);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(u.Provider,{value:n},e.children)}}}]);