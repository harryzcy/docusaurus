"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9633"],{55813:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>u,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"guides/markdown-features/plugins","title":"MDX Plugins","description":"Using MDX plugins to expand Docusaurus Markdown functionalities","source":"@site/docs/guides/markdown-features/markdown-features-plugins.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/plugins","permalink":"/docs/markdown-features/plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-plugins.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1728655362000,"frontMatter":{"id":"plugins","description":"Using MDX plugins to expand Docusaurus Markdown functionalities","slug":"/markdown-features/plugins"},"sidebar":"docs","previous":{"title":"Markdown links","permalink":"/docs/markdown-features/links"},"next":{"title":"Math Equations","permalink":"/docs/markdown-features/math-equations"}}'),r=s("24246"),a=s("80980"),i=s("15398"),l=s("58636");let o={id:"plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},c="MDX Plugins",u={},d=[{value:"Default plugins",id:"default-plugins",level:2},{value:"Installing plugins",id:"installing-plugins",level:2},{value:"Configuring plugins",id:"configuring-plugins",level:2},{value:"Creating new rehype/remark plugins",id:"creating-new-rehyperemark-plugins",level:2}];function h(e){let n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mrow:"mrow",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"mdx-plugins",children:"MDX Plugins"})}),"\n",(0,r.jsx)(n.p,{children:"Sometimes, you may want to extend or tweak your Markdown syntax. For example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["How do I embed youtube videos using the image syntax (",(0,r.jsx)(n.code,{children:"![](https://youtu.be/yKNxeF4KMsY)"}),")?"]}),"\n",(0,r.jsx)(n.li,{children:"How do I style links that are on their own lines differently, e.g., as a social card?"}),"\n",(0,r.jsx)(n.li,{children:"How do I make every page start with a copyright notice?"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["And the answer is: create an MDX plugin! MDX has a built-in ",(0,r.jsx)(n.a,{href:"https://mdxjs.com/advanced/plugins/",children:"plugin system"})," that can be used to customize how the Markdown files will be parsed and transformed to JSX. There are three typical use-cases of MDX plugins:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Using existing ",(0,r.jsx)(n.a,{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins",children:"remark plugins"})," or ",(0,r.jsx)(n.a,{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins",children:"rehype plugins"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"Creating remark/rehype plugins to transform the elements generated by existing MDX syntax;"}),"\n",(0,r.jsx)(n.li,{children:"Creating remark/rehype plugins to introduce new syntaxes to MDX."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you play with the ",(0,r.jsx)(n.a,{href:"https://mdxjs.com/playground/",children:"MDX playground"}),", you would notice that the MDX transpilation has two intermediate steps: Markdown AST (MDAST), and Hypertext AST (HAST), before arriving at the final JSX output. MDX plugins also come in two forms:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/remarkjs/remark/",children:"Remark"})}),": processes the Markdown AST."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/rehypejs/rehype/",children:"Rehype"})}),": processes the Hypertext AST."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project. The ",(0,r.jsx)(n.a,{href:"/docs/markdown-features/admonitions",children:"admonition"})," syntax that we offer is also generated by a Remark plugin, and you could do the same for your own use case."]})}),"\n",(0,r.jsx)(n.h2,{id:"default-plugins",children:"Default plugins"}),"\n",(0,r.jsxs)(n.p,{children:["Docusaurus injects ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-mdx-loader/src/remark",children:"some default Remark plugins"})," during Markdown processing. These plugins would:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Generate the table of contents;"}),"\n",(0,r.jsx)(n.li,{children:"Add anchor links to each heading;"}),"\n",(0,r.jsxs)(n.li,{children:["Transform images and links to ",(0,r.jsx)(n.code,{children:"require()"})," calls."]}),"\n",(0,r.jsx)(n.li,{children:"\u2026"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These are all typical use-cases of Remark plugins, which can also be a source of inspiration if you want to implement your own plugin."}),"\n",(0,r.jsx)(n.h2,{id:"installing-plugins",children:"Installing plugins"}),"\n",(0,r.jsxs)(n.p,{children:["An MDX plugin is usually an npm package, so you install them like other npm packages using npm. Take the ",(0,r.jsx)(n.a,{href:"/docs/markdown-features/math-equations",children:"math plugins"})," as an example."]}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save remark-math@5 rehype-katex@6\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add remark-math@5 rehype-katex@6\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add remark-math@5 rehype-katex@6\n"})})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["How are ",(0,r.jsx)("code",{children:"remark-math"})," and ",(0,r.jsx)("code",{children:"rehype-katex"})," different?"]}),(0,r.jsxs)(n.p,{children:["In case you are wondering how Remark and Rehype are different, here is a good example. ",(0,r.jsx)(n.code,{children:"remark-math"})," operates on the Markdown AST, where it sees text like ",(0,r.jsx)(n.code,{children:"$...$"}),", and all it does is transform that to the JSX ",(0,r.jsx)(n.code,{children:'<span class="math math-inline">...</span>'})," without doing too much with the content. This decouples the extraction of math formulae from their rendering, which means you can swap ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mtext,{children:"KaTeX"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\KaTeX"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,r.jsxs)(n.span,{className:"mord text",children:[(0,r.jsx)(n.span,{className:"mord textrm",children:"K"}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.17em"}}),(0,r.jsx)(n.span,{className:"vlist-t",children:(0,r.jsx)(n.span,{className:"vlist-r",children:(0,r.jsx)(n.span,{className:"vlist",style:{height:"0.6833em"},children:(0,r.jsxs)(n.span,{style:{top:"-2.905em"},children:[(0,r.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(n.span,{className:"mord",children:(0,r.jsx)(n.span,{className:"mord textrm mtight sizing reset-size6 size3",children:"A"})})]})})})}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.15em"}}),(0,r.jsxs)(n.span,{className:"mord text",children:[(0,r.jsx)(n.span,{className:"mord textrm",children:"T"}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,r.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,r.jsxs)(n.span,{className:"vlist-r",children:[(0,r.jsx)(n.span,{className:"vlist",style:{height:"0.4678em"},children:(0,r.jsxs)(n.span,{style:{top:"-2.7845em"},children:[(0,r.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,r.jsx)(n.span,{className:"mord",children:(0,r.jsx)(n.span,{className:"mord textrm",children:"E"})})]})}),(0,r.jsx)(n.span,{className:"vlist-s",children:"\u200B"})]}),(0,r.jsx)(n.span,{className:"vlist-r",children:(0,r.jsx)(n.span,{className:"vlist",style:{height:"0.2155em"},children:(0,r.jsx)(n.span,{})})})]}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.125em"}}),(0,r.jsx)(n.span,{className:"mord textrm",children:"X"})]})]})]})})]})," out with other math renderers, like MathJax (with ",(0,r.jsx)(n.a,{href:"https://github.com/remarkjs/remark-math/tree/main/packages/rehype-mathjax",children:(0,r.jsx)(n.code,{children:"rehype-mathjax"})}),"), just by replacing the Rehype plugin."]}),(0,r.jsxs)(n.p,{children:["Next, the ",(0,r.jsx)(n.code,{children:"rehype-katex"})," operates on the Hypertext AST where everything has been converted to HTML-like tags already. It traverses all the elements with ",(0,r.jsx)(n.code,{children:"math"})," class and uses ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mtext,{children:"KaTeX"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\KaTeX"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,r.jsxs)(n.span,{className:"mord text",children:[(0,r.jsx)(n.span,{className:"mord textrm",children:"K"}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.17em"}}),(0,r.jsx)(n.span,{className:"vlist-t",children:(0,r.jsx)(n.span,{className:"vlist-r",children:(0,r.jsx)(n.span,{className:"vlist",style:{height:"0.6833em"},children:(0,r.jsxs)(n.span,{style:{top:"-2.905em"},children:[(0,r.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(n.span,{className:"mord",children:(0,r.jsx)(n.span,{className:"mord textrm mtight sizing reset-size6 size3",children:"A"})})]})})})}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.15em"}}),(0,r.jsxs)(n.span,{className:"mord text",children:[(0,r.jsx)(n.span,{className:"mord textrm",children:"T"}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,r.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,r.jsxs)(n.span,{className:"vlist-r",children:[(0,r.jsx)(n.span,{className:"vlist",style:{height:"0.4678em"},children:(0,r.jsxs)(n.span,{style:{top:"-2.7845em"},children:[(0,r.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,r.jsx)(n.span,{className:"mord",children:(0,r.jsx)(n.span,{className:"mord textrm",children:"E"})})]})}),(0,r.jsx)(n.span,{className:"vlist-s",children:"\u200B"})]}),(0,r.jsx)(n.span,{className:"vlist-r",children:(0,r.jsx)(n.span,{className:"vlist",style:{height:"0.2155em"},children:(0,r.jsx)(n.span,{})})})]}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"-0.125em"}}),(0,r.jsx)(n.span,{className:"mord textrm",children:"X"})]})]})]})})]})," to parse and render the content to actual HTML."]})]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Many official Remark/Rehype plugins are ",(0,r.jsx)(n.a,{href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c",children:(0,r.jsx)(n.strong,{children:"ES Modules only"})}),", a JavaScript module system, which Docusaurus supports. We recommend using an ",(0,r.jsx)(n.a,{href:"https://flaviocopes.com/es-modules/",children:(0,r.jsx)(n.strong,{children:"ES Modules"})})," config file to make it easier to import such packages."]})}),"\n",(0,r.jsxs)(n.p,{children:["Next, import your plugins and add them to the plugin options through plugin or preset config in ",(0,r.jsx)(n.code,{children:"docusaurus.config.js"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\nimport remarkMath from 'remark-math';\nimport rehypeKatex from 'rehype-katex';\n// highlight-end\n\n// highlight-start\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n          remarkPlugins: [remarkMath],\n          rehypePlugins: [rehypeKatex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Using a ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/modules.html#modules-commonjs-modules",children:(0,r.jsx)(n.strong,{children:"CommonJS"})})," config file?"]}),(0,r.jsx)(n.p,{children:"If you decide to use a CommonJS config file, it is possible to load those ES module plugins thanks to dynamic imports and an async config creator function:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\nmodule.exports = async function createConfigAsync() {\n  // highlight-end\n  return {\n    presets: [\n      [\n        '@docusaurus/preset-classic',\n        {\n          docs: {\n            path: 'docs',\n            // highlight-start\n            remarkPlugins: [(await import('remark-math')).default],\n            rehypePlugins: [(await import('rehype-katex')).default],\n            // highlight-end\n          },\n        },\n      ],\n    ],\n  };\n};\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-plugins",children:"Configuring plugins"}),"\n",(0,r.jsxs)(n.p,{children:["Some plugins can be configured and accept their own options. In that case, use the ",(0,r.jsx)(n.code,{children:"[plugin, pluginOptions]"})," syntax, like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"import rehypeKatex from 'rehype-katex';\n\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          rehypePlugins: [\n            // highlight-start\n            [rehypeKatex, {strict: false}],\n            // highlight-end\n          ],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should check your plugin's documentation for the options it supports."}),"\n",(0,r.jsx)(n.h2,{id:"creating-new-rehyperemark-plugins",children:"Creating new rehype/remark plugins"}),"\n",(0,r.jsx)(n.p,{children:"If there isn't an existing package that satisfies your customization need, you can create your own MDX plugin."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The writeup below is ",(0,r.jsx)(n.strong,{children:"not"})," meant to be a comprehensive guide to creating a plugin, but just an illustration of how to make it work with Docusaurus. Visit the ",(0,r.jsx)(n.a,{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#create-plugins",children:"Remark"})," or ",(0,r.jsx)(n.a,{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#create-plugins",children:"Rehype"})," documentation for a more in-depth explanation of how they work."]})}),"\n",(0,r.jsxs)(n.p,{children:["For example, let's make a plugin that visits every ",(0,r.jsx)(n.code,{children:"h2"})," heading and adds a ",(0,r.jsx)(n.code,{children:"Section X. "})," prefix. First, create your plugin source file anywhere\u2014you can even publish it as a separate npm package and install it like explained above. We would put ours at ",(0,r.jsx)(n.code,{children:"src/remark/section-prefix.js"}),". A remark/rehype plugin is just a function that receives the ",(0,r.jsx)(n.code,{children:"options"})," and returns a ",(0,r.jsx)(n.code,{children:"transformer"})," that operates on the AST."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'"src/remark/section-prefix.js"',children:"import {visit} from 'unist-util-visit';\n\nconst plugin = (options) => {\n  const transformer = async (ast) => {\n    let number = 1;\n    visit(ast, 'heading', (node) => {\n      if (node.depth === 2 && node.children.length > 0) {\n        node.children.unshift({\n          type: 'text',\n          value: `Section ${number}. `,\n        });\n        number++;\n      }\n    });\n  };\n  return transformer;\n};\n\nexport default plugin;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can now import your plugin in ",(0,r.jsx)(n.code,{children:"docusaurus.config.js"})," and use it just like an installed plugin!"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-next-line\nimport sectionPrefix from './src/remark/section-prefix';\n\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          remarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"transformer"})," has a second parameter ",(0,r.jsx)(n.a,{href:"https://github.com/vfile/vfile",children:(0,r.jsx)(n.code,{children:"vfile"})})," which is useful if you need to access the current Markdown file's path."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const plugin = (options) => {\n  const transformer = async (ast, vfile) => {\n    ast.children.unshift({\n      type: 'text',\n      value: `The current file path is ${vfile.path}`,\n    });\n  };\n  return transformer;\n};\n"})}),(0,r.jsxs)(n.p,{children:["Our ",(0,r.jsx)(n.code,{children:"transformImage"})," plugin uses this parameter, for example, to transform relative image references to ",(0,r.jsx)(n.code,{children:"require()"})," calls."]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["The default plugins of Docusaurus would operate before the custom remark plugins, and that means the images or links have been converted to JSX with ",(0,r.jsx)(n.code,{children:"require()"})," calls already. For example, in the example above, the table of contents generated is still the same even when all ",(0,r.jsx)(n.code,{children:"h2"})," headings are now prefixed by ",(0,r.jsx)(n.code,{children:"Section X."}),", because the TOC-generating plugin is called before our custom plugin. If you need to process the MDAST before the default plugins do, use the ",(0,r.jsx)(n.code,{children:"beforeDefaultRemarkPlugins"})," and ",(0,r.jsx)(n.code,{children:"beforeDefaultRehypePlugins"}),"."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          beforeDefaultRemarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n"})}),(0,r.jsxs)(n.p,{children:["This would make the table of contents generated contain the ",(0,r.jsx)(n.code,{children:"Section X."})," prefix as well."]})]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},58636:function(e,n,s){s.d(n,{Z:()=>i});var t=s("24246");s("27378");var r=s("90496");let a="tabItem_pnkT";function i(e){var n=e.children,s=e.hidden,i=e.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:s,children:n})}},15398:function(e,n,s){s.d(n,{Z:()=>N});var t=s("24246"),r=s("27378"),a=s("90496"),i=s("54947"),l=s("3620"),o=s("844"),c=s("97486"),u=s("32263"),d=s("16971");function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var s=0,t=Array(n);s<n;s++)t[s]=e[s];return t}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s,t,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(s=r.next()).done)&&(a.push(s.value),!n||a.length!==n);i=!0);}catch(e){l=!0,t=e}finally{try{!i&&null!=r.return&&r.return()}finally{if(l)throw t}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);if("Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return h(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){var n,s;return null!==(s=null===(n=r.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var n,s;if(!e||(0,r.isValidElement)(e)&&(n=e.props)&&(void 0===n?"undefined":(s=n)&&"undefined"!=typeof Symbol&&s.constructor===Symbol?"symbol":typeof s)=="object"&&"value"in n)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==s?s:[]}function g(e){var n=e.value;return e.tabValues.some(function(e){return e.value===n})}var x=s("71607");let f="tabList_Qoir",j="tabItem_AQgk";function y(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(n){var t,r,a;t=e,r=n,a=s[n],r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a})}return e}function b(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s.push.apply(s,t)}return s})(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}),e}function v(e){var n=e.className,s=e.block,r=e.selectedValue,l=e.selectValue,o=e.tabValues,c=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,s=o[c.indexOf(n)].value;s!==r&&(u(n),l(s))},h=function(e){var n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var s,t=c.indexOf(e.currentTarget)+1;n=null!==(s=c[t])&&void 0!==s?s:c[0];break;case"ArrowLeft":var r,a=c.indexOf(e.currentTarget)-1;n=null!==(r=c[a])&&void 0!==r?r:c[c.length-1]}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},n),children:o.map(function(e){var n=e.value,s=e.label,i=e.attributes;return(0,t.jsx)("li",b(y({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},i),{className:(0,a.Z)("tabs__item",j,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=s?s:n}),n)})})}function k(e){var n=e.lazy,s=e.children,i=e.selectedValue,l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){var o=l.find(function(e){return e.props.value===i});return o?(0,r.cloneElement)(o,{className:(0,a.Z)("margin-top--md",o.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map(function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})})})}function w(e){var n=function(e){var n,s,t,a,i,h,x,f,j,y,b,v,k,w,N=e.defaultValue,S=e.queryString,O=e.groupId;var M=(s=(n=e).values,t=n.children,(0,r.useMemo)(function(){var e=null!=s?s:m(t).map(function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}});return!function(e){var n=(0,u.lx)(e,function(e,n){return e.value===n.value});if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[s,t])),T=p((0,r.useState)(function(){return function(e){var n,s=e.defaultValue,t=e.tabValues;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!g({value:s,tabValues:t}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(s,'" but none of its children has the corresponding value. Available values are: ').concat(t.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return s}var r=null!==(n=t.find(function(e){return e.default}))&&void 0!==n?n:t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:N,tabValues:M})}),2),D=T[0],P=T[1];var A=p((i=(a={queryString:void 0!==S&&S,groupId:O}).queryString,h=a.groupId,x=(0,l.k6)(),f=function(e){var n=e.queryString,s=void 0!==n&&n,t=e.groupId;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:void 0!==i&&i,groupId:h}),[(0,c._X)(f),(0,r.useCallback)(function(e){if(!!f){var n,s,t=new URLSearchParams(x.location.search);t.set(f,e),x.replace((n=function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(n){var t,r,a;t=e,r=n,a=s[n],r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a})}return e}({},x.location),s=(s={search:t.toString()},s),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):(function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s.push.apply(s,t)}return s})(Object(s)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}),n))}},[f,x])]),2),I=A[0],X=A[1];var E=p((y=(j=({groupId:O}).groupId)?"docusaurus.tab.".concat(j):null,v=(b=p((0,d.Nk)(y),2))[0],k=b[1],[v,(0,r.useCallback)(function(e){if(!!y)k.set(e)},[y,k])]),2),R=E[0],C=E[1];var V=g({value:w=null!=I?I:R,tabValues:M})?w:null;return(0,o.Z)(function(){V&&P(V)},[V]),{selectedValue:D,selectValue:(0,r.useCallback)(function(e){if(!g({value:e,tabValues:M}))throw Error("Can't select invalid tab value=".concat(e));P(e),X(e),C(e)},[X,C,M]),tabValues:M}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,t.jsx)(v,y({},n,e)),(0,t.jsx)(k,y({},n,e))]})}function N(e){var n=(0,x.Z)();return(0,t.jsx)(w,b(y({},e),{children:m(e.children)}),String(n))}},80980:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(27378);let r={},a=t.createContext(r);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);