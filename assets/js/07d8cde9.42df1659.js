"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["80812"],{89130:function(e,i,s){s.r(i),s.d(i,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>o,contentTitle:()=>r});var n=JSON.parse('{"id":"api/misc/create-docusaurus","title":"\uD83D\uDCE6 create-docusaurus","description":"A scaffolding utility to help you instantly set up a functional Docusaurus app.","source":"@site/docs/api/misc/create-docusaurus.mdx","sourceDirName":"api/misc","slug":"/api/misc/create-docusaurus","permalink":"/docs/api/misc/create-docusaurus","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/create-docusaurus.mdx","tags":[],"version":"current","lastUpdatedBy":"FISH UP","lastUpdatedAt":1736123905000,"sidebarPosition":0,"frontMatter":{"sidebar_position":0,"slug":"/api/misc/create-docusaurus"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 theme-mermaid","permalink":"/docs/api/themes/@docusaurus/theme-mermaid"},"next":{"title":"\uD83D\uDCE6 eslint-plugin","permalink":"/docs/api/misc/@docusaurus/eslint-plugin"}}'),t=s("85893"),c=s("80980");let a={sidebar_position:0,slug:"/api/misc/create-docusaurus"},r="\uD83D\uDCE6 create-docusaurus",l={},o=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>-t, --typescript</code>",id:"typescript",level:3},{value:"<code>-g, --git-strategy</code>",id:"git-strategy",level:3},{value:"<code>-p, --package-manager</code>",id:"package-manager",level:3},{value:"<code>-s, --skip-install</code>",id:"skip-install",level:3}];function d(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"-create-docusaurus",children:"\uD83D\uDCE6 create-docusaurus"})}),"\n",(0,t.jsx)(i.p,{children:"A scaffolding utility to help you instantly set up a functional Docusaurus app."}),"\n",(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"npx create-docusaurus@latest [name] [template] [rootDir]\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"name"})," argument will be used as the site's path as well as the ",(0,t.jsx)(i.code,{children:"name"})," field in the created app's package.json. It can be an absolute path, or a path relative to ",(0,t.jsx)(i.code,{children:"rootDir"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"template"})," argument can be one of the following:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"classic"}),": Uses the classic template (recommended)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"facebook"}),": Uses the Facebook/Meta template, which contains some Meta-specific setup"]}),"\n",(0,t.jsxs)(i.li,{children:["A git repo URL (beginning with ",(0,t.jsx)(i.code,{children:"https://"})," or ",(0,t.jsx)(i.code,{children:"git@"}),"), which can be cloned to the destination"]}),"\n",(0,t.jsx)(i.li,{children:"A local file path relative to CWD, which contains the files to be copied to destination"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"rootDir"})," will be used to resolve the absolute path to the site directory. The default is CWD."]}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"This command should be preferably used in an interactive shell so all features are available."})}),"\n",(0,t.jsx)(i.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(i.h3,{id:"typescript",children:(0,t.jsx)(i.code,{children:"-t, --typescript"})}),"\n",(0,t.jsxs)(i.p,{children:["Used when the template argument is a recognized name. Currently, only ",(0,t.jsx)(i.code,{children:"classic"})," provides a TypeScript variant."]}),"\n",(0,t.jsx)(i.h3,{id:"git-strategy",children:(0,t.jsx)(i.code,{children:"-g, --git-strategy"})}),"\n",(0,t.jsx)(i.p,{children:"Used when the template argument is a git repo. It needs to be one of:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"deep"}),": preserves full git history"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"shallow"}),": clones with ",(0,t.jsx)(i.code,{children:"--depth=1"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"copy"}),": does a shallow clone, but does not create a git repo"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"custom"}),": enter your custom git clone command. We will prompt you for it. You can write something like ",(0,t.jsx)(i.code,{children:"git clone --depth 10"}),", and we will append the repository URL and destination directory."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"package-manager",children:(0,t.jsx)(i.code,{children:"-p, --package-manager"})}),"\n",(0,t.jsxs)(i.p,{children:["Value should be one of ",(0,t.jsx)(i.code,{children:"npm"}),", ",(0,t.jsx)(i.code,{children:"yarn"}),", ",(0,t.jsx)(i.code,{children:"pnpm"}),", or ",(0,t.jsx)(i.code,{children:"bun"}),". If it's not explicitly provided, Docusaurus will infer one based on:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The lockfile already present in the CWD (e.g. if you are setting up website in an existing project)"}),"\n",(0,t.jsxs)(i.li,{children:["The command used to invoke ",(0,t.jsx)(i.code,{children:"create-docusaurus"})," (e.g. ",(0,t.jsx)(i.code,{children:"npm init"}),", ",(0,t.jsx)(i.code,{children:"npx"}),", ",(0,t.jsx)(i.code,{children:"yarn create"}),", ",(0,t.jsx)(i.code,{children:"bunx"}),", etc.)"]}),"\n",(0,t.jsx)(i.li,{children:"Interactive prompting, in case all heuristics are not present"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"skip-install",children:(0,t.jsx)(i.code,{children:"-s, --skip-install"})}),"\n",(0,t.jsxs)(i.p,{children:["If provided, Docusaurus will not automatically install dependencies after creating the app. The ",(0,t.jsx)(i.code,{children:"--package-manager"})," option is only useful when you are actually installing dependencies."]})]})}function u(e={}){let{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},80980:function(e,i,s){s.d(i,{Z:function(){return r},a:function(){return a}});var n=s(67294);let t={},c=n.createContext(t);function a(e){let i=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);