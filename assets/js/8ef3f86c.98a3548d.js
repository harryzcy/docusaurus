"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["81963"],{9905:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"i18n/introduction","title":"i18n - Introduction","description":"It is easy to translate a Docusaurus website with its internationalization (i18n) support.","source":"@site/docs/i18n/i18n-introduction.mdx","sourceDirName":"i18n","slug":"/i18n/introduction","permalink":"/docs/i18n/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/i18n/i18n-introduction.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1728655362000,"frontMatter":{"id":"introduction","slug":"/i18n/introduction"},"sidebar":"docs","previous":{"title":"Deployment","permalink":"/docs/deployment"},"next":{"title":"Tutorial","permalink":"/docs/i18n/tutorial"}}'),o=s("24246"),t=s("80980");let l={id:"introduction",slug:"/i18n/introduction"},r="i18n - Introduction",a={},d=[{value:"Goals",id:"goals",level:2},{value:"i18n goals",id:"i18n-goals",level:3},{value:"i18n non-goals",id:"i18n-non-goals",level:3},{value:"Translation workflow",id:"translation-workflow",level:2},{value:"Overview",id:"overview",level:3},{value:"Translation files",id:"translation-files",level:3},{value:"Markdown files",id:"markdown-files",level:4},{value:"JSON files",id:"json-files",level:4},{value:"Data files",id:"data-files",level:4},{value:"Translation files location",id:"translation-files-location",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"i18n---introduction",children:"i18n - Introduction"})}),"\n",(0,o.jsxs)(n.p,{children:["It is ",(0,o.jsx)(n.strong,{children:"easy to translate a Docusaurus website"})," with its internationalization (",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Internationalization_and_localization",children:"i18n"}),") support."]}),"\n",(0,o.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,o.jsxs)(n.p,{children:["It is important to understand the ",(0,o.jsx)(n.strong,{children:"design decisions"})," behind the Docusaurus i18n support."]}),"\n",(0,o.jsxs)(n.p,{children:["For more context, you can read the initial ",(0,o.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3317",children:"RFC"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/3325",children:"PR"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"i18n-goals",children:"i18n goals"}),"\n",(0,o.jsx)(n.p,{children:"The goals of the Docusaurus i18n system are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Simple"}),": just put the translated files in the correct filesystem location"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Flexible translation workflows"}),": use Git (monorepo, forks, or submodules), SaaS software, FTP"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Flexible deployment options"}),": single, multiple domains, or hybrid"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Modular"}),": allow plugin authors to provide i18n support"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Low-overhead runtime"}),": documentation is mostly static and does not require heavy JS libraries or polyfills"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Scalable build-times"}),": allow building and deploying localized sites independently"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Localize assets"}),": an image of your site might contain text that should be translated"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"No coupling"}),": not forced to use any SaaS, yet integrations are possible"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsxs)(n.strong,{children:["Easy to use with ",(0,o.jsx)(n.a,{href:"https://crowdin.com/",children:"Crowdin"})]}),": a lot of Docusaurus v1 sites use Crowdin and should be able to migrate to v2"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Good SEO defaults"}),": we set useful SEO headers like ",(0,o.jsx)(n.a,{href:"https://developers.google.com/search/docs/advanced/crawling/localized-versions",children:(0,o.jsx)(n.code,{children:"hreflang"})})," for you"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"RTL support"}),": locales reading right-to-left (Arabic, Hebrew, etc.) are supported and easy to implement"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default translations"}),": classic theme labels are translated for you in ",(0,o.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-translations/locales",children:"many languages"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"i18n-non-goals",children:"i18n non-goals"}),"\n",(0,o.jsx)(n.p,{children:"We don't provide support for:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Automatic locale detection"}),": opinionated, and best done on the ",(0,o.jsx)(n.a,{href:"/docs/deployment",children:"server (your hosting provider)"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Translation SaaS software"}),": you are responsible to understand the external tools of your choice"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Translation of slugs"}),": technically complicated, little SEO value"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"translation-workflow",children:"Translation workflow"}),"\n",(0,o.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"Overview of the workflow to create a translated Docusaurus website:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Configure"}),": declare the default locale and alternative locales in ",(0,o.jsx)(n.a,{href:"/docs/api/docusaurus-config#i18n",children:(0,o.jsx)(n.code,{children:"docusaurus.config.js"})})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Translate"}),": put the translation files at the correct filesystem location"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Deploy"}),": build and deploy your site using a single or multi-domain strategy"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"translation-files",children:"Translation files"}),"\n",(0,o.jsx)(n.p,{children:"You will work with three kinds of translation files."}),"\n",(0,o.jsx)(n.h4,{id:"markdown-files",children:"Markdown files"}),"\n",(0,o.jsx)(n.p,{children:"This is the main content of your Docusaurus website."}),"\n",(0,o.jsx)(n.p,{children:"Markdown and MDX documents are translated as a whole, to fully preserve the translation context, instead of splitting each sentence as a separate string."}),"\n",(0,o.jsx)(n.h4,{id:"json-files",children:"JSON files"}),"\n",(0,o.jsx)(n.p,{children:"JSON is used to translate:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Your React code: standalone React pages in ",(0,o.jsx)(n.code,{children:"src/pages"}),", or other components"]}),"\n",(0,o.jsxs)(n.li,{children:["Layout labels provided through ",(0,o.jsx)(n.code,{children:"themeConfig"}),": navbar, footer"]}),"\n",(0,o.jsx)(n.li,{children:"Layout labels provided through plugin options: docs sidebar category labels, blog sidebar title..."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The JSON format used is called ",(0,o.jsx)(n.strong,{children:"Chrome i18n"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "myTranslationKey1": {\n    "message": "Translated message 1",\n    "description": "myTranslationKey1 is used on the homepage"\n  },\n  "myTranslationKey2": {\n    "message": "Translated message 2",\n    "description": "myTranslationKey2 is used on the FAQ page"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The choice was made for 2 reasons:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description attribute"}),": to help translators with additional context"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Widely supported"}),": ",(0,o.jsx)(n.a,{href:"https://developer.chrome.com/docs/extensions/mv2/i18n-messages/",children:"Chrome extensions"}),", ",(0,o.jsx)(n.a,{href:"https://support.crowdin.com/file-formats/chrome-json/",children:"Crowdin"}),", ",(0,o.jsx)(n.a,{href:"https://docs.transifex.com/formats/chrome-json",children:"Transifex"}),", ",(0,o.jsx)(n.a,{href:"https://help.phrase.com/help/chrome-json-messages",children:"Phrase"}),", ",(0,o.jsx)(n.a,{href:"https://www.applanga.com/docs/formats/chrome_i18n_json",children:"Applanga"}),", etc."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"data-files",children:"Data files"}),"\n",(0,o.jsxs)(n.p,{children:["Some plugins may read from external data files that are localized as a whole. For example, the blog plugin uses an ",(0,o.jsx)(n.a,{href:"/docs/blog#global-authors",children:(0,o.jsx)(n.code,{children:"authors.yml"})})," file that can be translated by creating a copy under ",(0,o.jsx)(n.code,{children:"i18n/[locale]/docusaurus-plugin-content-blog/authors.yml"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"translation-files-location",children:"Translation files location"}),"\n",(0,o.jsx)(n.p,{children:"The translation files should be created at the correct filesystem location."}),"\n",(0,o.jsxs)(n.p,{children:["Each locale and plugin has its own ",(0,o.jsx)(n.code,{children:"i18n"})," subfolder:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"website/i18n/[locale]/[pluginName]/...\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["For multi-instance plugins, the path is ",(0,o.jsx)(n.code,{children:"website/i18n/[locale]/[pluginName]-[pluginId]/..."}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"Translating a very simple Docusaurus site in French would lead to the following tree:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"website/i18n\n\u2514\u2500\u2500 fr\n    \u251C\u2500\u2500 code.json  # Any text label present in the React code\n    \u2502              # Includes text labels from the themes' code\n    \u251C\u2500\u2500 docusaurus-plugin-content-blog # translation data the blog plugin needs\n    \u2502   \u2514\u2500\u2500 2020-01-01-hello.md\n    \u2502\n    \u251C\u2500\u2500 docusaurus-plugin-content-docs # translation data the docs plugin needs\n    \u2502   \u251C\u2500\u2500 current\n    \u2502   \u2502   \u251C\u2500\u2500 doc1.md\n    \u2502   \u2502   \u2514\u2500\u2500 doc2.mdx\n    \u2502   \u2514\u2500\u2500 current.json\n    \u2502\n    \u2514\u2500\u2500 docusaurus-theme-classic # translation data the classic theme needs\n        \u251C\u2500\u2500 footer.json   # Text labels in your footer theme config\n        \u2514\u2500\u2500 navbar.json   # Text labels in your navbar theme config\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The JSON files are initialized with the ",(0,o.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:(0,o.jsx)(n.code,{children:"docusaurus write-translations"})})," CLI command. Each plugin sources its own translated content under the corresponding folder, while the ",(0,o.jsx)(n.code,{children:"code.json"})," file defines all text labels used in the React code."]}),"\n",(0,o.jsxs)(n.p,{children:["Each content plugin or theme is different, and ",(0,o.jsx)(n.strong,{children:"defines its own translation files location"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-docs#i18n",children:"Docs i18n"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-blog#i18n",children:"Blog i18n"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-pages#i18n",children:"Pages i18n"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/api/themes/configuration#i18n",children:"Themes i18n"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},80980:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var i=s(27378);let o={},t=i.createContext(o);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);