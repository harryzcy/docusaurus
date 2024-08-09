"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19474],{88925:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(24246),s=o(71670);const r={id:"links",description:"Links to other pages in Markdown",slug:"/markdown-features/links"},i="Markdown links",a={id:"guides/markdown-features/links",title:"Markdown links",description:"Links to other pages in Markdown",source:"@site/docs/guides/markdown-features/markdown-features-links.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/links",permalink:"/docs/markdown-features/links",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-links.mdx",tags:[],version:"current",lastUpdatedBy:"ozaki",lastUpdatedAt:1723142922e3,frontMatter:{id:"links",description:"Links to other pages in Markdown",slug:"/markdown-features/links"},sidebar:"docs",previous:{title:"Assets",permalink:"/docs/markdown-features/assets"},next:{title:"MDX Plugins",permalink:"/docs/markdown-features/plugins"}},d={},l=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"markdown-links",children:"Markdown links"})}),"\n",(0,t.jsxs)(n.p,{children:["There are two ways of adding a link to another page: through a ",(0,t.jsx)(n.strong,{children:"URL path"})," and a ",(0,t.jsx)(n.strong,{children:"file path"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"- [URL path to another document](./installation)\n- [file path to another document](./installation.mdx)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["URL paths are unprocessed by Docusaurus, and you can see them as directly rendering to ",(0,t.jsx)(n.code,{children:'<a href="./installation">'}),", i.e. it will be resolved according to the page's URL location, rather than its file-system location."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to reference another Markdown file ",(0,t.jsx)(n.strong,{children:"included by the same plugin"}),", you could use the relative path of the document you want to link to. Docusaurus' Markdown loader will convert the file path to the target file's URL path (and hence remove the ",(0,t.jsx)(n.code,{children:".md"})," extension)."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you are in ",(0,t.jsx)(n.code,{children:"docs/folder/doc1.md"})," and you want to reference ",(0,t.jsx)(n.code,{children:"docs/folder/doc2.md"}),", ",(0,t.jsx)(n.code,{children:"docs/folder/subfolder/doc3.md"})," and ",(0,t.jsx)(n.code,{children:"docs/otherFolder/doc4.md"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",metastring:'title="docs/folder/doc1.md"',children:"I am referencing a [document](doc2.mdx).\n\nReference to another [document in a subfolder](subfolder/doc3.mdx).\n\n[Relative document](../otherFolder/doc4.mdx) referencing works as well.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Relative file paths are resolved against the current file's directory. Absolute file paths, on the other hand, are resolved relative to the ",(0,t.jsx)(n.strong,{children:"content root"}),", usually ",(0,t.jsx)(n.code,{children:"docs/"}),", ",(0,t.jsx)(n.code,{children:"blog/"}),", or ",(0,t.jsx)(n.a,{href:"/docs/i18n/tutorial",children:"localized ones"})," like ",(0,t.jsx)(n.code,{children:"i18n/zh-Hans/plugin-content-docs/current"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Absolute file paths can also be relative to the site directory. However, beware that links that begin with ",(0,t.jsx)(n.code,{children:"/docs/"})," or ",(0,t.jsx)(n.code,{children:"/blog/"})," are ",(0,t.jsx)(n.strong,{children:"not portable"})," as you would need to manually update them if you create new doc versions or localize them."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"You can write [links](/otherFolder/doc4.mdx) relative to the content root (`/docs/`).\n\nYou can also write [links](/docs/otherFolder/doc4.mdx) relative to the site directory, but it's not recommended.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Using relative ",(0,t.jsx)(n.em,{children:"file"})," paths (with ",(0,t.jsx)(n.code,{children:".md"})," extensions) instead of relative ",(0,t.jsx)(n.em,{children:"URL"})," links provides the following benefits:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Links will keep working on the GitHub interface and many Markdown editors"}),"\n",(0,t.jsx)(n.li,{children:"You can customize the files' slugs without having to update all the links"}),"\n",(0,t.jsx)(n.li,{children:"Moving files around the folders can be tracked by your editor, and some editors may automatically update file links"}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"/docs/versioning",children:"versioned doc"})," will link to another doc of the exact same version"]}),"\n",(0,t.jsxs)(n.li,{children:["Relative URL links are very likely to break if you update the ",(0,t.jsxs)(n.a,{href:"/docs/api/docusaurus-config#trailingSlash",children:[(0,t.jsx)(n.code,{children:"trailingSlash"})," config"]})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Markdown file references only work when the source and target files are processed by the same plugin instance. This is a technical limitation of our Markdown processing architecture and will be fixed in the future. If you are linking files between plugins (e.g. linking to a doc page from a blog post), you have to use URL links."})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var t=o(27378);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);