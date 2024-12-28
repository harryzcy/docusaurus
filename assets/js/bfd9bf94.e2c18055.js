"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["5584"],{36604:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pwa_install-169e763a3e99bb01e41be11c1a4af51f.gif"},81536:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pwa_reload-6af462b35d0ed752c44ad0899559bedf.gif"},20939:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>g,assets:()=>u,toc:()=>p,frontMatter:()=>c});var s=JSON.parse('{"id":"api/plugins/plugin-pwa","title":"\uD83D\uDCE6 plugin-pwa","description":"Docusaurus Plugin to add PWA support using Workbox. This plugin generates a Service Worker in production build only, and allows you to create fully PWA-compliant documentation site with offline and installation support.","source":"@site/docs/api/plugins/plugin-pwa.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-pwa","permalink":"/docs/api/plugins/@docusaurus/plugin-pwa","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-pwa.mdx","tags":[],"version":"current","lastUpdatedBy":"Zed Spencer-Milnes","lastUpdatedAt":1735299145000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"slug":"/api/plugins/@docusaurus/plugin-pwa"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-ideal-image","permalink":"/docs/api/plugins/@docusaurus/plugin-ideal-image"},"next":{"title":"\uD83D\uDCE6 plugin-sitemap","permalink":"/docs/api/plugins/@docusaurus/plugin-sitemap"}}'),a=t("85893"),i=t("80980"),r=t("46291"),o=t("67860"),l=t("45960");let c={sidebar_position:9,slug:"/api/plugins/@docusaurus/plugin-pwa"},d="\uD83D\uDCE6 plugin-pwa",u={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Progressive Web App",id:"progressive-web-app",level:2},{value:"App installation support",id:"app-installation-support",level:2},{value:"Offline mode (precaching)",id:"offline-mode-precaching",level:2},{value:"Options",id:"options",level:2},{value:"<code>debug</code>",id:"debug",level:3},{value:"<code>offlineModeActivationStrategies</code>",id:"offlinemodeactivationstrategies",level:3},{value:"<code>injectManifestConfig</code>",id:"injectmanifestconfig",level:3},{value:"<code>pwaHead</code>",id:"pwahead",level:3},{value:"<code>swCustom</code>",id:"swcustom",level:3},{value:"<code>swRegister</code>",id:"swregister",level:3},{value:"Manifest example",id:"manifest-example",level:2},{value:"Customizing reload popup",id:"customizing-reload-popup",level:2}];function h(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"-plugin-pwa",children:"\uD83D\uDCE6 plugin-pwa"})}),"\n",(0,a.jsxs)(n.p,{children:["Docusaurus Plugin to add PWA support using ",(0,a.jsx)(n.a,{href:"https://developers.google.com/web/tools/workbox",children:"Workbox"}),". This plugin generates a ",(0,a.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/primers/service-workers",children:"Service Worker"})," in production build only, and allows you to create fully PWA-compliant documentation site with offline and installation support."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(o.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-pwa\n"})})}),(0,a.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-pwa\n"})})}),(0,a.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-pwa\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(n.p,{children:["Create a ",(0,a.jsx)(n.a,{href:"https://web.dev/add-manifest/",children:"PWA manifest"})," at ",(0,a.jsx)(n.code,{children:"./static/manifest.json"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Modify ",(0,a.jsx)(n.code,{children:"docusaurus.config.js"})," with a minimal PWA config, like:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        debug: true,\n        offlineModeActivationStrategies: [\n          'appInstalled',\n          'standalone',\n          'queryString',\n        ],\n        pwaHead: [\n          {\n            tagName: 'link',\n            rel: 'icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'manifest',\n            href: '/manifest.json', // your PWA manifest\n          },\n          {\n            tagName: 'meta',\n            name: 'theme-color',\n            content: 'rgb(37, 194, 160)',\n          },\n        ],\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"progressive-web-app",children:"Progressive Web App"}),"\n",(0,a.jsxs)(n.p,{children:["Having a service worker installed is not enough to make your application a PWA. You'll need to at least include a ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",children:"Web App Manifest"})," and have the correct tags in ",(0,a.jsx)(n.code,{children:"<head>"})," (",(0,a.jsx)(n.a,{href:"#pwahead",children:"Options > pwaHead"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["After deployment, you can use ",(0,a.jsx)(n.a,{href:"https://developers.google.com/web/tools/lighthouse",children:"Lighthouse"})," to run an audit on your site."]}),"\n",(0,a.jsxs)(n.p,{children:["For a more exhaustive list of what it takes for your site to be a PWA, refer to the ",(0,a.jsx)(n.a,{href:"https://developers.google.com/web/progressive-web-apps/checklist",children:"PWA Checklist"})]}),"\n",(0,a.jsx)(n.h2,{id:"app-installation-support",children:"App installation support"}),"\n",(0,a.jsx)(n.p,{children:"If your browser supports it, you should be able to install a Docusaurus site as an app."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"A screen recording of the installation process. A button appears in the address bar of the browser, which displays a dialog asking &quot;install this application?&quot; when clicked. After clicking the &quot;Install&quot; button, a new application is opened in the operating system, opening to the Docusaurus homepage.",src:t(36604).Z+"",width:"640",height:"505"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"App installation requires the HTTPS protocol and a valid manifest."})}),"\n",(0,a.jsx)(n.h2,{id:"offline-mode-precaching",children:"Offline mode (precaching)"}),"\n",(0,a.jsx)(n.p,{children:"We enable users to browse a Docusaurus site offline, by using service-worker precaching."}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://developers.google.com/web/tools/workbox/modules/workbox-precaching",children:"workbox-precaching"})," page explains the idea:"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:'One feature of service workers is the ability to save a set of files to the cache when the service worker is installing. This is often referred to as "precaching", since you are caching content ahead of the service worker being used.'}),"\n",(0,a.jsx)(n.p,{children:"The main reason for doing this is that it gives developers control over the cache, meaning they can determine when and how long a file is cached as well as serve it to the browser without going to the network, meaning it can be used to create web apps that work offline."}),"\n",(0,a.jsx)(n.p,{children:"Workbox takes a lot of the heavy lifting out of precaching by simplifying the API and ensuring assets are downloaded efficiently."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["By default, offline mode is enabled when the site is installed as an app. See the ",(0,a.jsx)(n.code,{children:"offlineModeActivationStrategies"})," option for details."]}),"\n",(0,a.jsxs)(n.p,{children:["After the site has been precached, the service worker will serve cached responses for later visits. When a new build is deployed along with a new service worker, the new one will begin installing and eventually move to a waiting state. During this waiting state, a reload popup will show and ask the user to reload the page for new content. Until the user either clears the application cache or clicks the ",(0,a.jsx)(n.code,{children:"reload"})," button on the popup, the service worker will continue serving the old content."]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Offline mode / precaching requires downloading all the static assets of the site ahead of time, and can consume unnecessary bandwidth. It may not be a good idea to activate it for all kind of sites."})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.h3,{id:"debug",children:(0,a.jsx)(n.code,{children:"debug"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Turn debug mode on:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Workbox logs"}),"\n",(0,a.jsx)(n.li,{children:"Additional Docusaurus logs"}),"\n",(0,a.jsx)(n.li,{children:"Unoptimized SW file output"}),"\n",(0,a.jsx)(n.li,{children:"Source maps"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"offlinemodeactivationstrategies",children:(0,a.jsx)(n.code,{children:"offlineModeActivationStrategies"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"('appInstalled' | 'mobile' | 'saveData'| 'queryString' | 'always')[]"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"['appInstalled', 'queryString', 'standalone']"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Strategies used to turn the offline mode on:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"appInstalled"}),": activates for users having installed the site as an app (not 100% reliable)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"standalone"}),": activates for users running the app as standalone (often the case once a PWA is installed)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"queryString"}),": activates if queryString contains ",(0,a.jsx)(n.code,{children:"offlineMode=true"})," (convenient for PWA debugging)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"mobile"}),": activates for mobile users (",(0,a.jsx)(n.code,{children:"width <= 996px"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"saveData"}),": activates for users with ",(0,a.jsx)(n.code,{children:"navigator.connection.saveData === true"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"always"}),": activates for all users"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Use this carefully: some users may not like to be forced to use the offline mode."})}),"\n",(0,a.jsxs)(n.admonition,{type:"danger",children:[(0,a.jsx)(n.p,{children:"It is not possible to detect if a page is rendered as a PWA in a reliable manner."}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"appinstalled"})," event has been ",(0,a.jsx)(n.a,{href:"https://github.com/w3c/manifest/pull/836",children:"removed from the specification"}),", and the ",(0,a.jsx)(n.a,{href:"https://web.dev/get-installed-related-apps/",children:(0,a.jsx)(n.code,{children:"navigator.getInstalledRelatedApps()"})})," API is only supported in recent Chrome versions and require ",(0,a.jsx)(n.code,{children:"related_applications"})," declared in the manifest."]}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsxs)(n.a,{href:"https://petelepage.com/blog/2019/07/is-my-pwa-installed/",children:[(0,a.jsx)(n.code,{children:"standalone"})," strategy"]})," is a nice fallback to activate the offline mode (at least when running the installed app)."]})]}),"\n",(0,a.jsx)(n.h3,{id:"injectmanifestconfig",children:(0,a.jsx)(n.code,{children:"injectManifestConfig"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-InjectManifestOptions",children:"Workbox options"})," to pass to ",(0,a.jsx)(n.code,{children:"workbox.injectManifest()"}),". This gives you control over which assets will be precached, and be available offline."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"InjectManifestOptions"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        injectManifestConfig: {\n          manifestTransforms: [\n            //...\n          ],\n          modifyURLPrefix: {\n            //...\n          },\n          // We already add regular static assets (HTML, images...) to be available offline\n          // You can add more files according to your needs\n          globPatterns: ['**/*.{pdf,docx,xlsx}'],\n          // ...\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.h3,{id:"pwahead",children:(0,a.jsx)(n.code,{children:"pwaHead"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"({ tagName: string; [attributeName: string]: string })[]"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Array of objects containing ",(0,a.jsx)(n.code,{children:"tagName"})," and key-value pairs for attributes to inject into the ",(0,a.jsx)(n.code,{children:"<head>"})," tag. Technically you can inject any head tag through this, but it's ideally used for tags to make your site PWA compliant. Here's a list of tag to make your app fully compliant:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        pwaHead: [\n          {\n            tagName: 'link',\n            rel: 'icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'manifest',\n            href: '/manifest.json',\n          },\n          {\n            tagName: 'meta',\n            name: 'theme-color',\n            content: 'rgb(37, 194, 160)',\n          },\n          {\n            tagName: 'meta',\n            name: 'apple-mobile-web-app-capable',\n            content: 'yes',\n          },\n          {\n            tagName: 'meta',\n            name: 'apple-mobile-web-app-status-bar-style',\n            content: '#000',\n          },\n          {\n            tagName: 'link',\n            rel: 'apple-touch-icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'mask-icon',\n            href: '/img/docusaurus.svg',\n            color: 'rgb(37, 194, 160)',\n          },\n          {\n            tagName: 'meta',\n            name: 'msapplication-TileImage',\n            content: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'meta',\n            name: 'msapplication-TileColor',\n            content: '#000',\n          },\n        ],\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.h3,{id:"swcustom",children:(0,a.jsx)(n.code,{children:"swCustom"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"string | undefined"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Useful for additional Workbox rules. You can do whatever a service worker can do here, and use the full power of workbox libraries. The code is transpiled, so you can use modern ES6+ syntax here."}),"\n",(0,a.jsx)(n.p,{children:"For example, to cache files from external routes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import {registerRoute} from 'workbox-routing';\nimport {StaleWhileRevalidate} from 'workbox-strategies';\n\n// default fn export receiving some useful params\nexport default function swCustom(params) {\n  const {\n    debug, // :boolean\n    offlineMode, // :boolean\n  } = params;\n\n  // Cache responses from external resources\n  registerRoute((context) => {\n    return [\n      /graph\\.facebook\\.com\\/.*\\/picture/,\n      /netlify\\.com\\/img/,\n      /avatars1\\.githubusercontent/,\n    ].some((regex) => context.url.href.match(regex));\n  }, new StaleWhileRevalidate());\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The module should have a ",(0,a.jsx)(n.code,{children:"default"})," function export, and receives some params."]}),"\n",(0,a.jsx)(n.h3,{id:"swregister",children:(0,a.jsx)(n.code,{children:"swRegister"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"string | false"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"'docusaurus-plugin-pwa/src/registerSW.js'"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Adds an entry before the Docusaurus app so that registration can happen before the app runs. The default ",(0,a.jsx)(n.code,{children:"registerSW.js"})," file is enough for simple registration."]}),"\n",(0,a.jsxs)(n.p,{children:["Passing ",(0,a.jsx)(n.code,{children:"false"})," will disable registration entirely."]}),"\n",(0,a.jsx)(n.h2,{id:"manifest-example",children:"Manifest example"}),"\n",(0,a.jsx)(n.p,{children:"The Docusaurus site manifest can serve as an inspiration:"}),"\n","\n",(0,a.jsx)(l.Z,{className:"language-json",children:JSON.stringify(t(27105),null,2)}),"\n",(0,a.jsx)(n.h2,{id:"customizing-reload-popup",children:"Customizing reload popup"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"@theme/PwaReloadPopup"})," component is rendered when a new service worker is waiting to be installed, and we suggest a reload to the user. You can ",(0,a.jsx)(n.a,{href:"/docs/swizzling",children:"swizzle"})," this component and implement your own UI. It will receive an ",(0,a.jsx)(n.code,{children:"onReload"})," callback as props, which should be called when the ",(0,a.jsx)(n.code,{children:"reload"})," button is clicked. This will tell the service worker to install the waiting service worker and reload the page."]}),"\n",(0,a.jsxs)(n.p,{children:["The default theme includes an implementation for the reload popup and uses ",(0,a.jsx)(n.a,{href:"https://infima.dev/docs/components/alert",children:"Infima Alerts"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"A screen recording of the reload process. An alert box shows in the bottom right of the window, saying &quot;New content available&quot;. After clicking the &quot;Refresh&quot; button, the page&#39;s main heading changes from &quot;Introduction&quot; to &quot;PWA :))&quot;.",src:t(81536).Z+"",width:"1000",height:"502"})}),"\n",(0,a.jsxs)(n.p,{children:["Your component can render ",(0,a.jsx)(n.code,{children:"null"}),", but this is not recommended: users won't have a way to get up-to-date content."]})]})}function g(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},67860:function(e,n,t){t.d(n,{Z:()=>r});var s=t("85893");t("67294");var a=t("90496");let i="tabItem_pnkT";function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:t,children:n})}},46291:function(e,n,t){t.d(n,{Z:()=>v});var s=t("85893"),a=t("67294"),i=t("90496"),r=t("12451"),o=t("3620"),l=t("89637"),c=t("74417"),d=t("46918"),u=t("58247");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var g=t("8903");let m="tabList_Qoir",f="tabItem_AQgk";function x(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),u=e=>{let n=e.currentTarget,t=l[c.indexOf(n)].value;t!==a&&(d(n),o(t))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map(e=>{let{value:n,label:t,attributes:r}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{c.push(e)},onKeyDown:p,onClick:u,...r,className:(0,i.Z)("tabs__item",f,r?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function j(e){let{lazy:n,children:t,selectedValue:r}=e,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===r);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:s}=e,i=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??p(t).map(e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[r,g]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=t.find(e=>e.default)??t[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:i})),[m,f]=function(e){let{queryString:n=!1,groupId:t}=e,s=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),r=(0,c._X)(i);return[r,(0,a.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})},[i,s])]}({queryString:t,groupId:s}),[x,j]=function(e){var n;let{groupId:t}=e;let s=(n=t)?`docusaurus.tab.${n}`:null,[i,r]=(0,u.Nk)(s);return[i,(0,a.useCallback)(e=>{if(!!s)r.set(e)},[s,r])]}({groupId:s}),b=(()=>{let e=m??x;return h({value:e,tabValues:i})?e:null})();return(0,l.Z)(()=>{b&&g(b)},[b]),{selectedValue:r,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),j(e)},[f,j,i]),tabValues:i}}(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container",m),children:[(0,s.jsx)(x,{...n,...e}),(0,s.jsx)(j,{...n,...e})]})}function v(e){let n=(0,g.Z)();return(0,s.jsx)(b,{...e,children:p(e.children)},String(n))}},82234:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(85893);t(67294);var a=t(8903);function i(e){let{children:n,fallback:t}=e;return(0,a.Z)()?(0,s.jsx)(s.Fragment,{children:n?.()}):t??null}},45960:function(e,n,t){t.d(n,{Z:()=>er});var s,a={};t.r(a),t.d(a,{ButtonExample:()=>S});var i=t("85893"),r=t("67294"),o=t("90496"),l=t("8903"),c=t("10075"),d=t("80661"),u=t("30056"),p=t("82234"),h=t("22687"),g=t("31058"),m=t("70341");function f(){let{prism:e}=(0,m.L)(),{colorMode:n}=(0,g.I)(),t=e.theme,s=e.darkTheme||t;return"dark"===n?s:t}var x=t("18605");let j="playgroundContainer_6Ior",b="playgroundHeader_Tvsk",v="playgroundEditor_TySg",w="playgroundPreview_mApW";function y(e){let{children:n}=e;return(0,i.jsx)("div",{className:(0,o.Z)(b),children:n})}function k(){return(0,i.jsx)("div",{children:"Loading..."})}function N(){return(0,i.jsx)(p.Z,{fallback:(0,i.jsx)(k,{}),children:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Z,{fallback:e=>(0,i.jsx)(h.Ac,{...e}),children:(0,i.jsx)(c.i5,{})}),(0,i.jsx)(c.IF,{})]})})}function B(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{children:(0,i.jsx)(d.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,i.jsx)("div",{className:w,children:(0,i.jsx)(N,{})})]})}function A(){let e=(0,l.Z)();return(0,i.jsx)(c.uz,{className:v},String(e))}function T(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{children:(0,i.jsx)(d.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,i.jsx)(A,{})]})}let C=e=>`${e};`;function I(e){let{children:n,transformCode:t,...s}=e,{siteConfig:{themeConfig:a}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:r}}=a,o=f(),l=s.metastring?.includes("noInline")??!1;return(0,i.jsx)("div",{className:j,children:(0,i.jsx)(c.nu,{code:n?.replace(/\n$/,""),noInline:l,transformCode:t??C,theme:o,...s,children:"top"===r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(B,{}),(0,i.jsx)(T,{})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T,{}),(0,i.jsx)(B,{})]})})})}function S(e){return(0,i.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let W={React:r,...r,...a};var E=t("2235"),_=t("6324"),L=t.n(_);let Z=/title=(?<quote>["'])(?<title>.*?)\1/,q=/\{(?<range>[\d,-]+)\}/,P={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},D={...P,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},M=Object.keys(P);function O(e,n){let t=e.map(e=>{let{start:t,end:s}=D[e];return`(?:${t}\\s*(${n.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${s})`}).join("|");return RegExp(`^\\s*(?:${t})\\s*$`)}let z="codeBlockContainer_jDV4";function R(e){let{as:n,...t}=e,s=function(e){let n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach(e=>{let[s,a]=e,i=n[s];i&&"string"==typeof a&&(t[i]=a)}),t}(f());return(0,i.jsx)(n,{...t,style:s,className:(0,o.Z)(t.className,z,E.k.common.codeBlock)})}let H={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function $(e){let{children:n,className:t}=e;return(0,i.jsx)(R,{as:"pre",tabIndex:0,className:(0,o.Z)(H.codeBlockStandalone,"thin-scrollbar",t),children:(0,i.jsx)("code",{className:H.codeBlockLines,children:n})})}var F=t("31008");let U={attributes:!0,characterData:!0,childList:!0,subtree:!0};var V=t("7316");let Y={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function G(e){let{line:n,classNames:t,showLineNumbers:s,getLineProps:a,getTokenProps:r}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");let l=a({line:n,className:(0,o.Z)(t,s&&Y.codeLine)}),c=n.map((e,n)=>(0,i.jsx)("span",{...r({token:e})},n));return(0,i.jsxs)("span",{...l,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:Y.codeLineNumber}),(0,i.jsx)("span",{className:Y.codeLineContent,children:c})]}):c,(0,i.jsx)("br",{})]})}var Q=t("84171");function J(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function X(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee(e){let{code:n,className:t}=e,[s,a]=(0,r.useState)(!1),l=(0,r.useRef)(void 0),c=(0,r.useCallback)(()=>{(0,Q.Z)(n),a(!0),l.current=window.setTimeout(()=>{a(!1)},1e3)},[n]);return(0,r.useEffect)(()=>()=>window.clearTimeout(l.current),[]),(0,i.jsx)("button",{type:"button","aria-label":s?(0,d.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,d.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",t,K.copyButton,s&&K.copyButtonCopied),onClick:c,children:(0,i.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(J,{className:K.copyButtonIcon}),(0,i.jsx)(X,{className:K.copyButtonSuccessIcon})]})})}function en(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let et={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function es(e){let{className:n,onClick:t,isEnabled:s}=e,a=(0,d.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:t,className:(0,o.Z)("clean-btn",n,s&&et.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,i.jsx)(en,{className:et.wordWrapButtonIcon,"aria-hidden":"true"})})}function ea(e){var n,t,s;let{children:a,className:l="",metastring:c,title:d,showLineNumbers:u,language:p}=e,{prism:{defaultLanguage:h,magicComments:g}}=(0,m.L)();let x=(n=p??function(e){let n=e.split(" ").find(e=>e.startsWith("language-"));return n?.replace(/language-/,"")}(l)??h,n?.toLowerCase()),j=f(),b=function(){let[e,n]=(0,r.useState)(!1),[t,s]=(0,r.useState)(!1),a=(0,r.useRef)(null),i=(0,r.useCallback)(()=>{let t=a.current.querySelector("code");e?t.removeAttribute("style"):(t.style.whiteSpace="pre-wrap",t.style.overflowWrap="anywhere"),n(e=>!e)},[a,e]),o=(0,r.useCallback)(()=>{let{scrollWidth:e,clientWidth:n}=a.current;s(e>n||a.current.querySelector("code").hasAttribute("style"))},[a]);return!function(e,n){let[t,s]=(0,r.useState)(),a=(0,r.useCallback)(()=>{s(e.current?.closest("[role=tabpanel][hidden]"))},[e,s]);(0,r.useEffect)(()=>{a()},[a]),!function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:U,s=(0,F.zX)(n),a=(0,F.Ql)(t);(0,r.useEffect)(()=>{let n=new MutationObserver(s);return e&&n.observe(e,a),()=>n.disconnect()},[e,s,a])}(t,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(n(),a())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(a,o),(0,r.useEffect)(()=>{o()},[e,o]),(0,r.useEffect)(()=>(window.addEventListener("resize",o,{passive:!0}),()=>{window.removeEventListener("resize",o)}),[o]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:t,toggle:i}}();let v=(t=c,(t?.match(Z)?.groups.title??"")||d),{lineClassNames:w,code:y}=function(e,n){let t=e.replace(/\n$/,""),{language:s,magicComments:a,metastring:i}=n;if(i&&q.test(i)){let e=i.match(q).groups.range;if(0===a.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let n=a[0].className;return{lineClassNames:Object.fromEntries(L()(e).filter(e=>e>0).map(e=>[e-1,[n]])),code:t}}if(void 0===s)return{lineClassNames:{},code:t};let r=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return O(["js","jsBlock"],n);case"jsx":case"tsx":return O(["js","jsBlock","jsx"],n);case"html":return O(["js","jsBlock","html"],n);case"python":case"py":case"bash":return O(["bash"],n);case"markdown":case"md":return O(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return O(["tex"],n);case"lua":case"haskell":return O(["lua"],n);case"sql":return O(["lua","jsBlock"],n);case"wasm":return O(["wasm"],n);case"vb":case"vba":case"visual-basic":return O(["vb","rem"],n);case"vbnet":return O(["vbnet","rem"],n);case"batch":return O(["rem"],n);case"basic":return O(["rem","f90"],n);case"fsharp":return O(["js","ml"],n);case"ocaml":case"sml":return O(["ml"],n);case"fortran":return O(["f90"],n);case"cobol":return O(["cobol"],n);default:return O(M,n)}}(s,a),o=t.split("\n"),l=Object.fromEntries(a.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(a.filter(e=>e.line).map(e=>{let{className:n,line:t}=e;return[t,n]})),d=Object.fromEntries(a.filter(e=>e.block).map(e=>{let{className:n,block:t}=e;return[t.start,n]})),u=Object.fromEntries(a.filter(e=>e.block).map(e=>{let{className:n,block:t}=e;return[t.end,n]}));for(let e=0;e<o.length;){let n=o[e].match(r);if(!n){e+=1;continue}let t=n.slice(1).find(e=>void 0!==e);c[t]?l[c[t]].range+=`${e},`:d[t]?l[d[t]].start=e:u[t]&&(l[u[t]].range+=`${l[u[t]].start}-${e-1},`),o.splice(e,1)}t=o.join("\n");let p={};return Object.entries(l).forEach(e=>{let[n,{range:t}]=e;L()(t).forEach(e=>{p[e]??=[],p[e].push(n)})}),{lineClassNames:p,code:t}}(a,{metastring:c,language:x,magicComments:g});let k=u??(s=c,!!s?.includes("showLineNumbers"));return(0,i.jsxs)(R,{as:"div",className:(0,o.Z)(l,x&&!l.includes(`language-${x}`)&&`language-${x}`),children:[v&&(0,i.jsx)("div",{className:H.codeBlockTitle,children:v}),(0,i.jsxs)("div",{className:H.codeBlockContent,children:[(0,i.jsx)(V.y$,{theme:j,code:y,language:x??"text",children:e=>{let{className:n,style:t,tokens:s,getLineProps:a,getTokenProps:r}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,o.Z)(n,H.codeBlock,"thin-scrollbar"),style:t,children:(0,i.jsx)("code",{className:(0,o.Z)(H.codeBlockLines,k&&H.codeBlockLinesWithNumbering),children:s.map((e,n)=>(0,i.jsx)(G,{line:e,getLineProps:a,getTokenProps:r,classNames:w[n],showLineNumbers:k},n))})})}}),(0,i.jsxs)("div",{className:H.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,i.jsx)(es,{className:H.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,i.jsx)(ee,{className:H.codeButton,code:y})]})]})]})}let ei=(s=function(e){var n;let{children:t,...s}=e,a=(0,l.Z)();let o=(n=t,r.Children.toArray(n).some(e=>(0,r.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n),c="string"==typeof o?ea:$;return(0,i.jsx)(c,{...s,children:o},String(a))},function(e){return e.live?(0,i.jsx)(I,{scope:W,...e}):(0,i.jsx)(s,{...e})});function er(e){return(0,i.jsx)(ei,{...e})}},27105:function(e){e.exports=JSON.parse('{"name":"Docusaurus","short_name":"Docusaurus","theme_color":"#2196f3","background_color":"#424242","display":"standalone","scope":"./","start_url":"./index.html","related_applications":[{"platform":"webapp","url":"https://docusaurus.io/manifest.json"}],"icons":[{"src":"img/icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"img/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"img/icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"img/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"img/icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"img/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"img/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"img/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]}')}}]);