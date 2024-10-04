"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93958],{32738:(e,n,s)=>{s.d(n,{A:()=>l});var i=s(62540);s(63696);var t=s(46733);function l({toc:e,minHeadingLevel:n,maxHeadingLevel:s}){return(0,i.jsx)("div",{className:"tableOfContentsInline_2sru",children:(0,i.jsx)(t.A,{toc:e,minHeadingLevel:n,maxHeadingLevel:s,className:"table-of-contents",linkClassName:null})})}},46733:(e,n,s)=>{s.d(n,{A:()=>u});var i=s(62540),t=s(63696),l=s(25436);function a(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),i.forEach(function(n){var i;i=s[n],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s.push.apply(s,i)}return s})(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}),e}function c(e){let n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}var r=s(36372);let d=t.memo(function e({toc:n,className:s,linkClassName:t,isChild:l}){return n.length?(0,i.jsx)("ul",{className:l?void 0:s,children:n.map(n=>(0,i.jsxs)("li",{children:[(0,i.jsx)(r.A,{to:`#${n.id}`,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:n.value}}),(0,i.jsx)(e,{isChild:!0,toc:n.children,className:s,linkClassName:t})]},n.id))}):null});function u(e){var{toc:n,className:s="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:b,maxHeadingLevel:h}=e,m=function(e,n){if(null==e)return{};var s,i,t=function(e,n){if(null==e)return{};var s,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)s=l[i],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)s=l[i],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);let p=(0,l.p)(),x=null!=b?b:p.tableOfContents.minHeadingLevel,g=null!=h?h:p.tableOfContents.maxHeadingLevel,f=function({toc:e,minHeadingLevel:n,maxHeadingLevel:s}){return(0,t.useMemo)(()=>(function e({toc:n,minHeadingLevel:s,maxHeadingLevel:i}){return n.flatMap(n=>{let t=e({toc:n.children,minHeadingLevel:s,maxHeadingLevel:i});return n.level>=s&&n.level<=i?[o(a({},n),{children:t})]:t})})({toc:function(e){let n=e.map(e=>o(a({},e),{parentIndex:-1,children:[]})),s=Array(7).fill(-1);n.forEach((e,n)=>{let i=s.slice(2,e.level);e.parentIndex=Math.max(...i),s[e.level]=n});let i=[];return n.forEach(e=>{let{parentIndex:s}=e,t=function(e,n){if(null==e)return{};var s,i,t=function(e,n){if(null==e)return{};var s,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)s=l[i],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)s=l[i],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}(e,["parentIndex"]);s>=0?n[s].children.push(t):i.push(t)}),i}(e),minHeadingLevel:n,maxHeadingLevel:s}),[e,n,s])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return!function(e){let n=(0,t.useRef)(void 0),s=function(){let e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.p)();return(0,t.useEffect)(()=>{e.current=n?0:document.querySelector(".navbar").clientHeight},[n]),e}();(0,t.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:i,linkActiveClassName:t,minHeadingLevel:l,maxHeadingLevel:a}=e;function o(){let e=Array.from(document.getElementsByClassName(i)),o=function(e,{anchorTopOffset:n}){var s,i,t;let l=e.find(e=>c(e).top>=n);return l?(t=c(l)).top>0&&t.bottom<window.innerHeight/2?l:null!==(s=e[e.indexOf(l)-1])&&void 0!==s?s:null:null!==(i=e[e.length-1])&&void 0!==i?i:null}(function({minHeadingLevel:e,maxHeadingLevel:n}){let s=[];for(let i=e;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),{anchorTopOffset:s.current}),r=e.find(e=>o&&o.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===r?(n.current&&n.current!==e&&n.current.classList.remove(t),e.classList.add(t),n.current=e):e.classList.remove(t)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,s])}((0,t.useMemo)(()=>{if(r&&u)return{linkClassName:r,linkActiveClassName:u,minHeadingLevel:x,maxHeadingLevel:g}},[r,u,x,g])),(0,i.jsx)(d,function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),i.forEach(function(n){var i;i=s[n],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return e}({toc:f,className:s,linkClassName:r},m))}},70361:(e,n,s)=>{s.d(n,{A:()=>o});var i=s(62540);s(63696);var t=s(11750);let l="dot_giz1",a="bar_rrRL";function o({children:e,minHeight:n,url:s="http://localhost:3000",style:o,bodyStyle:c}){var r,d;return(0,i.jsxs)("div",{className:"browserWindow_my1Q",style:(r=function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),i.forEach(function(n){var i;i=s[n],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return e}({},o),d=d={minHeight:n},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(d)):(function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s.push.apply(s,i)}return s})(Object(d)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(d,e))}),r),children:[(0,i.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,i.jsxs)("div",{className:"buttons_uHc7",children:[(0,i.jsx)("span",{className:l,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:l,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:l,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,t.A)("browserWindowAddressBar_Pd8y","text--truncate"),children:s}),(0,i.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:a}),(0,i.jsx)("span",{className:a}),(0,i.jsx)("span",{className:a})]})})]}),(0,i.jsx)("div",{className:"browserWindowBody_Idgs",style:c,children:e})]})}},66511:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});let i=JSON.parse('{"id":"guides/markdown-features/toc","title":"Headings and Table of contents","description":"Customizing headings and table-of-contents in Markdown","source":"@site/docs/guides/markdown-features/markdown-features-toc.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/toc","permalink":"/docs/markdown-features/toc","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-toc.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1727990457000,"frontMatter":{"id":"toc","description":"Customizing headings and table-of-contents in Markdown","slug":"/markdown-features/toc"},"sidebar":"docs","previous":{"title":"Admonitions","permalink":"/docs/markdown-features/admonitions"},"next":{"title":"Assets","permalink":"/docs/markdown-features/assets"}}');var t=s(62540),l=s(43023),a=s(70361),o=s(32738);let c={id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},r="Headings and Table of contents",d={},u=[{value:"Markdown headings",id:"markdown-headings",level:2},{value:"Heading IDs",id:"heading-ids",level:3},{value:"Table of contents heading level",id:"table-of-contents-heading-level",level:2},{value:"Inline table of contents",id:"inline-table-of-contents",level:2},{value:"Customizing table of contents generation",id:"customizing-table-of-contents-generation",level:2},{value:"Example Section 1",id:"example-section-1",level:2},{value:"Example Subsection 1 a",id:"example-subsection-1-a",level:3},{value:"Example subsubsection 1 a I",id:"example-subsubsection-1-a-i",level:4},{value:"Example subsubsection 1 a II",id:"example-subsubsection-1-a-ii",level:4},{value:"Example subsubsection 1 a III",id:"example-subsubsection-1-a-iii",level:4},{value:"Example Subsection 1 b",id:"example-subsection-1-b",level:3},{value:"Example subsubsection 1 b I",id:"example-subsubsection-1-b-i",level:4},{value:"Example subsubsection 1 b II",id:"example-subsubsection-1-b-ii",level:4},{value:"Example subsubsection 1 b III",id:"example-subsubsection-1-b-iii",level:4},{value:"Example Subsection 1 c",id:"example-subsection-1-c",level:3},{value:"Example subsubsection 1 c I",id:"example-subsubsection-1-c-i",level:4},{value:"Example subsubsection 1 c II",id:"example-subsubsection-1-c-ii",level:4},{value:"Example subsubsection 1 c III",id:"example-subsubsection-1-c-iii",level:4},{value:"Example Section 2",id:"example-section-2",level:2},{value:"Example Subsection 2 a",id:"example-subsection-2-a",level:3},{value:"Example subsubsection 2 a I",id:"example-subsubsection-2-a-i",level:4},{value:"Example subsubsection 2 a II",id:"example-subsubsection-2-a-ii",level:4},{value:"Example subsubsection 2 a III",id:"example-subsubsection-2-a-iii",level:4},{value:"Example Subsection 2 b",id:"example-subsection-2-b",level:3},{value:"Example subsubsection 2 b I",id:"example-subsubsection-2-b-i",level:4},{value:"Example subsubsection 2 b II",id:"example-subsubsection-2-b-ii",level:4},{value:"Example subsubsection 2 b III",id:"example-subsubsection-2-b-iii",level:4},{value:"Example Subsection 2 c",id:"example-subsection-2-c",level:3},{value:"Example subsubsection 2 c I",id:"example-subsubsection-2-c-i",level:4},{value:"Example subsubsection 2 c II",id:"example-subsubsection-2-c-ii",level:4},{value:"Example subsubsection 2 c III",id:"example-subsubsection-2-c-iii",level:4},{value:"Example Section 3",id:"example-section-3",level:2},{value:"Example Subsection 3 a",id:"example-subsection-3-a",level:3},{value:"Example subsubsection 3 a I",id:"example-subsubsection-3-a-i",level:4},{value:"Example subsubsection 3 a II",id:"example-subsubsection-3-a-ii",level:4},{value:"Example subsubsection 3 a III",id:"example-subsubsection-3-a-iii",level:4},{value:"Example Subsection 3 b",id:"example-subsection-3-b",level:3},{value:"Example subsubsection 3 b I",id:"example-subsubsection-3-b-i",level:4},{value:"Example subsubsection 3 b II",id:"example-subsubsection-3-b-ii",level:4},{value:"Example subsubsection 3 b III",id:"example-subsubsection-3-b-iii",level:4},{value:"Example Subsection 3 c",id:"example-subsection-3-c",level:3},{value:"Example subsubsection 3 c I",id:"example-subsubsection-3-c-i",level:4},{value:"Example subsubsection 3 c II",id:"example-subsubsection-3-c-ii",level:4},{value:"Example subsubsection 3 c III",id:"example-subsubsection-3-c-iii",level:4}];function b(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Code:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Code",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"headings-and-table-of-contents",children:"Headings and Table of contents"})}),"\n",(0,t.jsx)(n.h2,{id:"markdown-headings",children:"Markdown headings"}),"\n",(0,t.jsx)(n.p,{children:"You can use regular Markdown headings."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"## Level 2 title\n\n### Level 3 title\n\n#### Level 4 title\n"})}),"\n",(0,t.jsx)(n.p,{children:"Each Markdown heading will appear as a table of contents entry."}),"\n",(0,t.jsx)(n.h3,{id:"heading-ids",children:"Heading IDs"}),"\n",(0,t.jsx)(n.p,{children:"Each heading has an ID that can be automatically generated or explicitly specified. Heading IDs allow you to link to a specific document heading in Markdown or JSX:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"[link](#heading-id)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<Link to="#heading-id">link</Link>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["By default, Docusaurus will generate heading IDs for you, based on the heading text. For example, ",(0,t.jsx)(n.code,{children:"### Hello World"})," will have ID ",(0,t.jsx)(n.code,{children:"hello-world"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Generated IDs have ",(0,t.jsx)(n.strong,{children:"some limitations"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The ID might not look good"}),"\n",(0,t.jsxs)(n.li,{children:["You might want to ",(0,t.jsx)(n.strong,{children:"change or translate"})," the text without updating the existing ID"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A special Markdown syntax lets you set an ",(0,t.jsx)(n.strong,{children:"explicit heading id"}),":"]}),"\n",(0,t.jsx)(s,{language:"md",children:"### Hello World {#my-explicit-id}\n"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docs/cli#docusaurus-write-heading-ids-sitedir",children:(0,t.jsx)(n.code,{children:"write-heading-ids"})})})," CLI command to add explicit IDs to all your Markdown documents."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Avoid colliding IDs",type:"warning",children:(0,t.jsx)(n.p,{children:"Generated heading IDs will be guaranteed to be unique on each page, but if you use custom IDs, make sure each one appears exactly once on each page, or there will be two DOM elements with the same ID, which is invalid HTML semantics, and will lead to one heading being unlinkable."})}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents-heading-level",children:"Table of contents heading level"}),"\n",(0,t.jsx)(n.p,{children:"Each Markdown document displays a table of contents on the top-right corner. By default, this table only shows h2 and h3 headings, which should be sufficient for an overview of the page structure. In case you need to change the range of headings displayed, you can customize the minimum and maximum heading level \u2014 either per page or globally."}),"\n",(0,t.jsxs)(n.p,{children:["To set the heading level for a particular page, use the ",(0,t.jsx)(n.code,{children:"toc_min_heading_level"})," and ",(0,t.jsx)(n.code,{children:"toc_max_heading_level"})," front matter."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",metastring:'title="myDoc.md"',children:"---\n# Display h2 to h5 headings\ntoc_min_heading_level: 2\ntoc_max_heading_level: 5\n---\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To set the heading level for ",(0,t.jsx)(n.em,{children:"all"})," pages, use the ",(0,t.jsx)(n.a,{href:"/docs/api/themes/configuration#table-of-contents",children:(0,t.jsx)(n.code,{children:"themeConfig.tableOfContents"})})," option."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    tableOfContents: {\n      // highlight-start\n      minHeadingLevel: 2,\n      maxHeadingLevel: 5,\n      // highlight-end\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you've set the options globally, you can still override them locally via front matter."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"themeConfig"})," option would apply to all TOC on the site, including ",(0,t.jsx)(n.a,{href:"#inline-table-of-contents",children:"inline TOC"}),", but front matter options only affect the top-right TOC. You need to use the ",(0,t.jsx)(n.code,{children:"minHeadingLevel"})," and ",(0,t.jsx)(n.code,{children:"maxHeadingLevel"})," props to customize each ",(0,t.jsx)(n.code,{children:"<TOCInline />"})," component."]})}),"\n",(0,t.jsx)(n.h2,{id:"inline-table-of-contents",children:"Inline table of contents"}),"\n",(0,t.jsx)(n.p,{children:"It is also possible to display an inline table of contents directly inside a Markdown document, thanks to MDX."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"toc"})," variable is available in any MDX document and contains all the headings of an MDX document. By default, only ",(0,t.jsx)(n.code,{children:"h2"})," and ",(0,t.jsx)(n.code,{children:"h3"})," headings are displayed in the TOC. You can change which heading levels are visible by setting ",(0,t.jsx)(n.code,{children:"minHeadingLevel"})," or ",(0,t.jsx)(n.code,{children:"maxHeadingLevel"})," for individual ",(0,t.jsx)(n.code,{children:"TOCInline"})," components."]}),"\n","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />\n"})}),"\n","\n",(0,t.jsx)(a.A,{children:(0,t.jsx)(o.A,{toc:u})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"toc"})," global is just a list of heading items:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"declare const toc: {\n  value: string;\n  id: string;\n  level: number;\n}[];\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the ",(0,t.jsx)(n.code,{children:"toc"})," global is a flat array, so you can easily cut out unwanted nodes or insert extra nodes, and create a new TOC tree."]}),"\n","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import TOCInline from '@theme/TOCInline';\n\n<TOCInline\n  // Only show h2 and h4 headings\n  toc={toc.filter((node) => node.level === 2 || node.level === 4)}\n  minHeadingLevel={2}\n  // Show h4 headings in addition to the default h2 and h3 headings\n  maxHeadingLevel={4}\n/>\n"})}),"\n",(0,t.jsx)(a.A,{children:(0,t.jsx)(o.A,{toc:u.filter(e=>2===e.level||4===e.level),minHeadingLevel:2,maxHeadingLevel:4})}),"\n",(0,t.jsx)(n.h2,{id:"customizing-table-of-contents-generation",children:"Customizing table of contents generation"}),"\n",(0,t.jsxs)(n.p,{children:["The table-of-contents is generated by parsing the Markdown source with a ",(0,t.jsx)(n.a,{href:"/docs/markdown-features/plugins",children:"Remark plugin"}),". There are known edge-cases where it generates false-positives and false-negatives."]}),"\n",(0,t.jsxs)(n.p,{children:["Markdown headings within hideable areas will still show up in the TOC. For example, headings within ",(0,t.jsx)(n.a,{href:"/docs/markdown-features/tabs",children:(0,t.jsx)(n.code,{children:"Tabs"})})," and ",(0,t.jsx)(n.a,{href:"/docs/markdown-features#details",children:(0,t.jsx)(n.code,{children:"details"})})," will not be excluded."]}),"\n",(0,t.jsx)(n.p,{children:"Non-Markdown headings will not show up in the TOC. This can be used to your advantage to tackle the aforementioned issue."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:'<details>\n<summary>Some details containing headings</summary>\n<h2 id="#heading-id">I\'m a heading that will not show up in the TOC</h2>\n\nSome content...\n\n</details>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ability to ergonomically insert extra headings or ignore certain headings is a work-in-progress. If this feature is important to you, please report your use-case in ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/6201",children:"this issue"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Below is just some dummy content to have more table of contents items available on the current page."})}),"\n",(0,t.jsx)(n.h2,{id:"example-section-1",children:"Example Section 1"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h3,{id:"example-subsection-1-a",children:"Example Subsection 1 a"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-1-a-i",children:"Example subsubsection 1 a I"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-1-a-ii",children:"Example subsubsection 1 a II"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-1-a-iii",children:"Example subsubsection 1 a III"}),"\n",(0,t.jsx)(n.h3,{id:"example-subsection-1-b",children:"Example Subsection 1 b"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-1-b-i",children:"Example subsubsection 1 b I"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-1-b-ii",children:"Example subsubsection 1 b II"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-1-b-iii",children:"Example subsubsection 1 b III"}),"\n",(0,t.jsx)(n.h3,{id:"example-subsection-1-c",children:"Example Subsection 1 c"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-1-c-i",children:"Example subsubsection 1 c I"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-1-c-ii",children:"Example subsubsection 1 c II"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-1-c-iii",children:"Example subsubsection 1 c III"}),"\n",(0,t.jsx)(n.h2,{id:"example-section-2",children:"Example Section 2"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h3,{id:"example-subsection-2-a",children:"Example Subsection 2 a"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-2-a-i",children:"Example subsubsection 2 a I"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-2-a-ii",children:"Example subsubsection 2 a II"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-2-a-iii",children:"Example subsubsection 2 a III"}),"\n",(0,t.jsx)(n.h3,{id:"example-subsection-2-b",children:"Example Subsection 2 b"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-2-b-i",children:"Example subsubsection 2 b I"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-2-b-ii",children:"Example subsubsection 2 b II"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-2-b-iii",children:"Example subsubsection 2 b III"}),"\n",(0,t.jsx)(n.h3,{id:"example-subsection-2-c",children:"Example Subsection 2 c"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-2-c-i",children:"Example subsubsection 2 c I"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-2-c-ii",children:"Example subsubsection 2 c II"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-2-c-iii",children:"Example subsubsection 2 c III"}),"\n",(0,t.jsx)(n.h2,{id:"example-section-3",children:"Example Section 3"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h3,{id:"example-subsection-3-a",children:"Example Subsection 3 a"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-3-a-i",children:"Example subsubsection 3 a I"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-3-a-ii",children:"Example subsubsection 3 a II"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-3-a-iii",children:"Example subsubsection 3 a III"}),"\n",(0,t.jsx)(n.h3,{id:"example-subsection-3-b",children:"Example Subsection 3 b"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-3-b-i",children:"Example subsubsection 3 b I"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-3-b-ii",children:"Example subsubsection 3 b II"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-3-b-iii",children:"Example subsubsection 3 b III"}),"\n",(0,t.jsx)(n.h3,{id:"example-subsection-3-c",children:"Example Subsection 3 c"}),"\n",(0,t.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-3-c-i",children:"Example subsubsection 3 c I"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-3-c-ii",children:"Example subsubsection 3 c II"}),"\n",(0,t.jsx)(n.h4,{id:"example-subsubsection-3-c-iii",children:"Example subsubsection 3 c III"})]})}function h(e={}){let{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(63696);let t={},l=i.createContext(t);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);