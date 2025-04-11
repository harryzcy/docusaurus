"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["59548"],{79753:function(e,n,t){t.r(n),t.d(n,{frontMatter:()=>o,default:()=>h,contentTitle:()=>a,assets:()=>c,toc:()=>d,metadata:()=>s});var s=JSON.parse('{"id":"api/misc/eslint-plugin/no-html-links","title":"no-html-links","description":"Ensure that the Docusaurus ` component is used instead of ` tags.","source":"@site/docs/api/misc/eslint-plugin/no-html-links.mdx","sourceDirName":"api/misc/eslint-plugin","slug":"/api/misc/@docusaurus/eslint-plugin/no-html-links","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-html-links.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1744293302000,"frontMatter":{"slug":"/api/misc/@docusaurus/eslint-plugin/no-html-links"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 eslint-plugin","permalink":"/docs/api/misc/@docusaurus/eslint-plugin"},"next":{"title":"no-untranslated-text","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"}}'),i=t(85893),r=t(80980),l=t(32240);let o={slug:"/api/misc/@docusaurus/eslint-plugin/no-html-links"},a="no-html-links",c={},d=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2}];function u(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"no-html-links",children:"no-html-links"})}),"\n","\n",(0,i.jsxs)(n.p,{children:["Ensure that the Docusaurus ",(0,i.jsx)(n.a,{href:"/docs/docusaurus-core#link",children:(0,i.jsx)(n.code,{children:"<Link>"})})," component is used instead of ",(0,i.jsx)(n.code,{children:"<a>"})," tags."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"<Link>"})," component has prefetching and preloading built-in. It also does build-time broken link detection, and helps Docusaurus understand your site's structure better."]}),"\n",(0,i.jsx)(n.h2,{id:"details",children:"Rule Details"}),"\n",(0,i.jsxs)(n.p,{children:["Examples of ",(0,i.jsx)(n.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<a href="/page">go to page!</a>\n\n<a href="https://x.com/docusaurus" target="_blank">X</a>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Examples of ",(0,i.jsx)(n.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import Link from \'@docusaurus/Link\'\n\n<Link to="/page">go to page!</Link>\n\n<Link to="https://x.com/docusaurus">X</Link>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Rule Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,i.jsx)(l.Z,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ignoreFullyResolved"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsxs)(n.td,{children:["Set to true will not report any ",(0,i.jsx)(n.code,{children:"<a>"})," tags with absolute URLs including a protocol."]})]})})]})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},32240:function(e,n,t){t.d(n,{Z:()=>a});var s=t(85893),i=t(67294),r=t(96700),l=t(3620);let o=i.forwardRef(function(e,n){let{name:t,children:o}=e,a=function(e){let n=e;for(;(0,i.isValidElement)(n);)[n]=i.Children.toArray(n.props.children);if("string"!=typeof n)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return n}(o),c=t?`${t}-${a}`:a,d=`#${c}`,u=(0,l.k6)();return(0,r.Z)().collectAnchor(c),(0,s.jsx)("tr",{id:c,tabIndex:0,ref:u.location.hash===d?n:void 0,onClick:e=>{let n="TD"===e.target.tagName.toUpperCase(),t=!!window.getSelection()?.toString();n&&!t&&u.push(d)},onKeyDown:e=>{"Enter"===e.key&&u.push(d)},children:o.props.children})});function a(e){let{children:n,name:t}=e;if("table"!==n.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[r,l]=i.Children.toArray(n.props.children),a=(0,i.useRef)(null);(0,i.useEffect)(()=>{a.current?.focus()},[a]);let c=i.Children.map(l.props.children,e=>(0,s.jsx)(o,{name:t,ref:a,children:e}));return(0,s.jsxs)("table",{className:"apiTable_e8hp",children:[r,(0,s.jsx)("tbody",{children:c})]})}},80980:function(e,n,t){t.d(n,{Z:()=>o,a:()=>l});var s=t(67294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);