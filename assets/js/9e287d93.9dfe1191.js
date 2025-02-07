"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["47580"],{49479:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"api/misc/eslint-plugin/no-untranslated-text","title":"no-untranslated-text","description":"Enforce text labels in JSX to be wrapped by translate calls.","source":"@site/docs/api/misc/eslint-plugin/no-untranslated-text.mdx","sourceDirName":"api/misc/eslint-plugin","slug":"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-untranslated-text.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1738847626000,"frontMatter":{"slug":"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},"sidebar":"api","previous":{"title":"no-html-links","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links"},"next":{"title":"prefer-docusaurus-heading","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/prefer-docusaurus-heading"}}'),s=n(85893),l=n(80980),i=n(32240);let a={slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},o="no-untranslated-text",d={},c=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}];function u(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"no-untranslated-text",children:"no-untranslated-text"})}),"\n","\n",(0,s.jsx)(t.p,{children:"Enforce text labels in JSX to be wrapped by translate calls."}),"\n",(0,s.jsxs)(t.p,{children:["When the ",(0,s.jsx)(t.a,{href:"/docs/i18n/introduction",children:"i18n feature"})," is used, this rule ensures that all labels appearing on the website are translatable, so no string accidentally slips through untranslated."]}),"\n",(0,s.jsx)(t.h2,{id:"details",children:"Rule Details"}),"\n",(0,s.jsxs)(t.p,{children:["Examples of ",(0,s.jsx)(t.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Hello World is not translated\n<Component>Hello World</Component>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Examples of ",(0,s.jsx)(t.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Hello World is translated\n<Component>\n  <Translate>Hello World</Translate>\n</Component>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Rule Configuration"}),"\n",(0,s.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(i.Z,{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ignoredStrings"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string[]"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"[]"})}),(0,s.jsx)(t.td,{children:"Text labels that only contain strings in this list will not be reported."})]})})]})}),"\n",(0,s.jsx)(t.h2,{id:"when-not-to-use",children:"When Not To Use It"}),"\n",(0,s.jsxs)(t.p,{children:["If you're not using the ",(0,s.jsx)(t.a,{href:"/docs/i18n/introduction",children:"i18n feature"}),", you can disable this rule. You can also disable this rule where the text is not supposed to be translated."]}),"\n",(0,s.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate",children:"https://docusaurus.io/docs/docusaurus-core#translate"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative",children:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},32240:function(e,t,n){n.d(t,{Z:()=>o});var r=n(85893),s=n(67294),l=n(96700),i=n(3620);let a=s.forwardRef(function(e,t){let{name:n,children:a}=e,o=function(e){let t=e;for(;(0,s.isValidElement)(t);)[t]=s.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(a),d=n?`${n}-${o}`:o,c=`#${d}`,u=(0,i.k6)();return(0,l.Z)().collectAnchor(d),(0,r.jsx)("tr",{id:d,tabIndex:0,ref:u.location.hash===c?t:void 0,onClick:e=>{let t="TD"===e.target.tagName.toUpperCase(),n=!!window.getSelection()?.toString();t&&!n&&u.push(c)},onKeyDown:e=>{"Enter"===e.key&&u.push(c)},children:a.props.children})});function o(e){let{children:t,name:n}=e;if("table"!==t.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[l,i]=s.Children.toArray(t.props.children),o=(0,s.useRef)(null);(0,s.useEffect)(()=>{o.current?.focus()},[o]);let d=s.Children.map(i.props.children,e=>(0,r.jsx)(a,{name:n,ref:o,children:e}));return(0,r.jsxs)("table",{className:"apiTable_e8hp",children:[l,(0,r.jsx)("tbody",{children:d})]})}},80980:function(e,t,n){n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);let s={},l=r.createContext(s);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);