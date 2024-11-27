"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["65558"],{67104:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>t,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>d});var i=JSON.parse('{"id":"migration/v2/migration-versioned-sites","title":"Versioned sites","description":"Read up https://docusaurus.io/blog/2018/09/11/Towards-Docusaurus-2#versioning first for problems in v1\'s approach.","source":"@site/docs/migration/v2/migration-versioned-sites.mdx","sourceDirName":"migration/v2","slug":"/migration/v2/versioned-sites","permalink":"/docs/migration/v2/versioned-sites","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/v2/migration-versioned-sites.mdx","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1732609287000,"frontMatter":{"slug":"/migration/v2/versioned-sites"},"sidebar":"docs","previous":{"title":"Manual migration","permalink":"/docs/migration/v2/manual"},"next":{"title":"Translated sites","permalink":"/docs/migration/v2/translated-sites"}}'),o=s("24246"),r=s("80980");let d={slug:"/migration/v2/versioned-sites"},t="Versioned sites",l={},a=[{value:"Migrate your <code>versioned_docs</code> front matter",id:"migrate-your-versioned_docs-front-matter",level:2},{value:"Migrate your <code>versioned_sidebars</code>",id:"migrate-your-versioned_sidebars",level:2},{value:"Populate your <code>versioned_sidebars</code> and <code>versioned_docs</code>",id:"populate-your-versioned_sidebars-and-versioned_docs",level:2},{value:"Convert style attributes to style objects in MDX",id:"convert-style-attributes-to-style-objects-in-mdx",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"versioned-sites",children:"Versioned sites"})}),"\n",(0,o.jsxs)(n.p,{children:["Read up ",(0,o.jsx)(n.a,{href:"https://docusaurus.io/blog/2018/09/11/Towards-Docusaurus-2#versioning",children:"https://docusaurus.io/blog/2018/09/11/Towards-Docusaurus-2#versioning"})," first for problems in v1's approach."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The versioned docs should normally be migrated correctly by the ",(0,o.jsx)(n.a,{href:"/docs/migration/v2/automated",children:"migration CLI"})]})}),"\n",(0,o.jsxs)(n.h2,{id:"migrate-your-versioned_docs-front-matter",children:["Migrate your ",(0,o.jsx)(n.code,{children:"versioned_docs"})," front matter"]}),"\n",(0,o.jsxs)(n.p,{children:["Unlike v1, The Markdown header for each versioned doc is no longer altered by using ",(0,o.jsx)(n.code,{children:"version-${version}-${original_id}"})," as the value for the actual ID field. See scenario below for better explanation."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if you have a ",(0,o.jsx)(n.code,{children:"docs/hello.md"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"---\nid: hello\ntitle: Hello, World !\n---\n\nHi, Endilie here :)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When you cut a new version 1.0.0, in Docusaurus v1, ",(0,o.jsx)(n.code,{children:"website/versioned_docs/version-1.0.0/hello.md"})," looks like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"---\nid: version-1.0.0-hello\ntitle: Hello, World !\noriginal_id: hello\n---\n\nHi, Endilie here :)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In comparison, Docusaurus 2 ",(0,o.jsx)(n.code,{children:"website/versioned_docs/version-1.0.0/hello.md"})," looks like this (exactly same as original)"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"---\nid: hello\ntitle: Hello, World !\n---\n\nHi, Endilie here :)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Since we're going for snapshot and allow people to move (and edit) docs easily inside version. The ",(0,o.jsx)(n.code,{children:"id"})," front matter is no longer altered and will remain the same. Internally, it is set as ",(0,o.jsx)(n.code,{children:"version-${version}/${id}"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Essentially, here are the necessary changes in each versioned_docs file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",metastring:"{2-3,5}",children:"---\n- id: version-1.0.0-hello\n+ id: hello\ntitle: Hello, World !\n- original_id: hello\n---\nHi, Endilie here :)\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"migrate-your-versioned_sidebars",children:["Migrate your ",(0,o.jsx)(n.code,{children:"versioned_sidebars"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Refer to ",(0,o.jsx)(n.code,{children:"versioned_docs"})," ID as ",(0,o.jsx)(n.code,{children:"version-${version}/${id}"})," (v2) instead of ",(0,o.jsx)(n.code,{children:"version-${version}-${original_id}"})," (v1)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Because in v1 there is a good chance someone created a new file with front matter ID ",(0,o.jsx)(n.code,{children:'"version-${version}-${id}"'})," that can conflict with ",(0,o.jsx)(n.code,{children:"versioned_docs"})," ID."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, Docusaurus 1 can't differentiate ",(0,o.jsx)(n.code,{children:"docs/xxx.md"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"---\nid: version-1.0.0-hello\n---\n\nAnother content\n"})}),"\n",(0,o.jsxs)(n.p,{children:["vs ",(0,o.jsx)(n.code,{children:"website/versioned_docs/version-1.0.0/hello.md"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"---\nid: version-1.0.0-hello\ntitle: Hello, World !\noriginal_id: hello\n---\n\nHi, Endilie here :)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Since we don't allow ",(0,o.jsx)(n.code,{children:"/"})," in v1 & v2 for front matter, conflicts are less likely to occur."]}),"\n",(0,o.jsx)(n.p,{children:"So v1 users need to migrate their versioned_sidebars file"}),"\n",(0,o.jsxs)(n.p,{children:["Example ",(0,o.jsx)(n.code,{children:"versioned_sidebars/version-1.0.0-sidebars.json"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",metastring:'{2-3,5-6,9-10}  title="versioned_sidebars/version-1.0.0-sidebars.json"',children:'{\n+ "version-1.0.0/docs": {\n- "version-1.0.0-docs": {\n    "Test": [\n+    "version-1.0.0/foo/bar",\n-    "version-1.0.0-foo/bar",\n    ],\n    "Guides": [\n+    "version-1.0.0/hello",\n-    "version-1.0.0-hello"\n    ]\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"populate-your-versioned_sidebars-and-versioned_docs",children:["Populate your ",(0,o.jsx)(n.code,{children:"versioned_sidebars"})," and ",(0,o.jsx)(n.code,{children:"versioned_docs"})]}),"\n",(0,o.jsxs)(n.p,{children:["In v2, we use snapshot approach for documentation versioning. ",(0,o.jsx)(n.strong,{children:"Every versioned docs does not depends on other version"}),". It is possible to have ",(0,o.jsx)(n.code,{children:"foo.md"})," in ",(0,o.jsx)(n.code,{children:"version-1.0.0"})," but it doesn't exist in ",(0,o.jsx)(n.code,{children:"version-1.2.0"}),". This is not possible in previous version due to Docusaurus v1 fallback functionality (",(0,o.jsx)(n.a,{href:"https://v1.docusaurus.io/docs/en/versioning#fallback-functionality",children:"https://v1.docusaurus.io/docs/en/versioning#fallback-functionality"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if your ",(0,o.jsx)(n.code,{children:"versions.json"})," looks like this in v1"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="versions.json"',children:'["1.1.0", "1.0.0"]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus v1 creates versioned docs ",(0,o.jsx)(n.strong,{children:"if and only if the doc content is different"}),". Your docs structure might look like this if the only doc changed from v1.0.0 to v1.1.0 is ",(0,o.jsx)(n.code,{children:"hello.md"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"website\n\u251C\u2500\u2500 versioned_docs\n\u2502   \u251C\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251C\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md\n\u2502       \u2514\u2500\u2500 hello.md\n\u251C\u2500\u2500 versioned_sidebars\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In v2, you have to populate the missing ",(0,o.jsx)(n.code,{children:"versioned_docs"})," and ",(0,o.jsx)(n.code,{children:"versioned_sidebars"})," (with the right front matter and ID reference too)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"{3-5,12}",children:"website\n\u251C\u2500\u2500 versioned_docs\n\u2502   \u251C\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u251C\u2500\u2500 foo\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 bar.md\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251C\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md\n\u2502       \u2514\u2500\u2500 hello.md\n\u251C\u2500\u2500 versioned_sidebars\n\u2502   \u251C\u2500\u2500 version-1.1.0-sidebars.json\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n"})}),"\n",(0,o.jsx)(n.h2,{id:"convert-style-attributes-to-style-objects-in-mdx",children:"Convert style attributes to style objects in MDX"}),"\n",(0,o.jsx)(n.p,{children:"Docusaurus 2 uses JSX for doc files. If you have any style attributes in your Docusaurus 1 docs, convert them to style objects, like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"---\nid: demo\ntitle: Demo\n---\n\n## Section\n\nhello world\n\n- <pre style=\"background: black\">zzz</pre>\n+ <pre style={{background: 'black'}}>zzz</pre>\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},80980:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var i=s(27378);let o={},r=i.createContext(o);function d(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);