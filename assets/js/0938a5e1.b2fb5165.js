"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["13328"],{73042:function(e,s,n){n.d(s,{Z:()=>a});let a=n.p+"assets/images/social-card-402517ac2205718a22585e627fe1351c.png"},593:function(e,s,n){n.d(s,{Z:()=>a});let a=n.p+"assets/images/social-card-402517ac2205718a22585e627fe1351c.png"},28918:function(e,s,n){n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var a=n(12232),r=n(85893),i=n(80980),t=n(14522);let o={title:"Docusaurus 2.2",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2022-10-29T00:00:00.000Z")},l=void 0,c={image:n(73042).Z,authorsImageUrls:[void 0]},h=[{value:"Highlights",id:"highlights",level:2},{value:"Mermaid diagrams",id:"mermaid-diagrams",level:3},{value:"Config <code>headTags</code>",id:"config-headtags",level:3},{value:"Accessibility",id:"accessibility",level:3},{value:"Developer Experience",id:"developer-experience",level:3},{value:"Translations",id:"translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function d(e){let s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["We are happy to announce ",(0,r.jsx)(s.strong,{children:"Docusaurus 2.2"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The upgrade should be easy: as explained in our ",(0,r.jsx)(s.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,r.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Docusaurus 2.2 social card",src:n(593).Z+"",width:"1200",height:"600"})}),"\n","\n",(0,r.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(s.h3,{id:"mermaid-diagrams",children:"Mermaid diagrams"}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/7490",children:"#7490"}),", we added support for Mermaid diagrams. This fills the gap between GitHub Flavored Markdown which also ",(0,r.jsx)(s.a,{href:"https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/",children:"added support recently"}),". You can create Mermaid diagrams using Markdown code blocks:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-md",children:"```mermaid\nsequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!\n```\n"})}),"\n","\n",(0,r.jsx)(t.Z,{children:(0,r.jsx)(s.mermaid,{value:"sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!"})}),"\n",(0,r.jsxs)(s.p,{children:["Make sure to check the ",(0,r.jsx)(s.a,{href:"/docs/markdown-features/diagrams",children:"documentation"}),", and the ",(0,r.jsx)(s.a,{href:"/tests/pages/diagrams",children:"more advanced examples"})]}),"\n",(0,r.jsxs)(s.h3,{id:"config-headtags",children:["Config ",(0,r.jsx)(s.code,{children:"headTags"})]}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8151",children:"#8151"}),", we added the ability to apply arbitrary HTML ",(0,r.jsx)(s.code,{children:"<head>"})," tags to all pages of your site."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  headTags: [\n    {\n      tagName: 'link',\n      attributes: {\n        rel: 'icon',\n        href: '/img/docusaurus.png',\n      },\n    },\n  ],\n};\n"})}),"\n",(0,r.jsx)(s.h3,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsx)(s.p,{children:"We did several accessibility improvements:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8207",children:"#8207"}),": improves keyboard navigation for mobile drawer hamburger button"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8161",children:"#8161"}),": improves keyboard navigation for tabs"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8204",children:"#8204"}),": makes the skip to content button support progressive enhancement"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8174",children:"#8174"}),": improves screen reader announcement when toggling between light/dark mode"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"developer-experience",children:"Developer Experience"}),"\n",(0,r.jsx)(s.p,{children:"We made validation stricter and improved error messages:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8234",children:"#8234"}),": in case of doc processing failure, prints the problematic markdown file path in the error message"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8192",children:"#8192"})," and ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8159",children:"#8159"}),": validates ",(0,r.jsx)(s.code,{children:"siteConfig.url"})," more strictly and with better error message"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8066",children:"#8066"}),": makes config ",(0,r.jsx)(s.code,{children:"url"})," and ",(0,r.jsx)(s.code,{children:"baseUrl"})," fail-safe and less sensitive to the presence or absence of a leading or trailing slash"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"translations",children:"Translations"}),"\n",(0,r.jsx)(s.p,{children:"We completed the default theme translation support for multiple languages:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\uD83C\uDDF9\uD83C\uDDF7 ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8105",children:"#8105"}),": completes Turkish translations"]}),"\n",(0,r.jsxs)(s.li,{children:["\uD83C\uDDF7\uD83C\uDDFA ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8253",children:"#8253"}),": completes Russian translations"]}),"\n",(0,r.jsxs)(s.li,{children:["\uD83C\uDDEB\uD83C\uDDF7 ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8243",children:"#8243"}),": completes French translations"]}),"\n",(0,r.jsxs)(s.li,{children:["\uD83C\uDDEF\uD83C\uDDF5 ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8075",children:"#8075"}),": completes Japanese translations"]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["Completing theme translations is an ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"ongoing effort"})," and an easy way to contribute to Docusaurus. We add new theme features regularly, for which we often ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"need new translations"}),"."]})}),"\n",(0,r.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsx)(s.p,{children:"Other notable changes include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8210",children:"#8210"}),": the ",(0,r.jsx)(s.code,{children:"docusaurus swizzle"})," CLI has a new ",(0,r.jsx)(s.code,{children:"--config"})," option"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8109",children:"#8109"}),": mobile navigation performance optimizations, prefetch resources earlier"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8059",children:"#8059"}),": versions/locales navbar dropdowns preserve hash and querystring on navigation"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8227",children:"#8227"}),": the client redirect plugin preserves hash and querystring on redirect"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Check the ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/changelog/2.2.0",children:"2.2.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},14522:function(e,s,n){n.d(s,{Z:()=>o});var a=n(85893);n(67294);var r=n(90496);let i="dot_giz1",t="bar_rrRL";function o(e){let{children:s,minHeight:n,url:o="http://localhost:3000",style:l,bodyStyle:c}=e;return(0,a.jsxs)("div",{className:"browserWindow_my1Q",style:{...l,minHeight:n},children:[(0,a.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,a.jsxs)("div",{className:"buttons_uHc7",children:[(0,a.jsx)("span",{className:i,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:i,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:i,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,r.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:o}),(0,a.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:t}),(0,a.jsx)("span",{className:t}),(0,a.jsx)("span",{className:t})]})})]}),(0,a.jsx)("div",{className:"browserWindowBody_Idgs",style:c,children:s})]})}},80980:function(e,s,n){n.d(s,{Z:()=>o,a:()=>t});var a=n(67294);let r={},i=a.createContext(r);function t(e){let s=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:s},e.children)}},12232:function(e){e.exports=JSON.parse('{"permalink":"/blog/releases/2.2","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/2.2/index.mdx","source":"@site/blog/releases/2.2/index.mdx","title":"Docusaurus 2.2","description":"We are happy to announce Docusaurus 2.2.","date":"2022-10-29T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":2.2,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.","socials":{"bluesky":"https://bsky.app/profile/sebastienlorber.com","x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","instagram":"https://www.instagram.com/thisweekinreact","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 2.2","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2022-10-29T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1738057248000,"lastUpdatedBy":"dependabot[bot]","prevItem":{"title":"Docusaurus 2.3","permalink":"/blog/releases/2.3"},"nextItem":{"title":"Docusaurus 2.1","permalink":"/blog/2022/09/01/docusaurus-2.1"}}')}}]);