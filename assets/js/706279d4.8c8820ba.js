"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["46459"],{29082:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>u,default:()=>m,assets:()=>h,toc:()=>g,frontMatter:()=>d});var r=JSON.parse('{"id":"guides/docs/sidebar/items","title":"Sidebar items","description":"We have introduced three types of item types in the example in the previous section autogenerated, which we will explain in detail later.","source":"@site/docs/guides/docs/sidebar/items.mdx","sourceDirName":"guides/docs/sidebar","slug":"/sidebar/items","permalink":"/docs/sidebar/items","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/items.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1728655362000,"frontMatter":{"toc_max_heading_level":4,"slug":"/sidebar/items"},"sidebar":"docs","previous":{"title":"Sidebar","permalink":"/docs/sidebar"},"next":{"title":"Autogenerated","permalink":"/docs/sidebar/autogenerated"}}'),a=t("24246"),i=t("80980"),s=t("15398"),l=t("58636"),o=t("14522"),c=t("78042");let d={toc_max_heading_level:4,slug:"/sidebar/items"},u="Sidebar items",h={},g=[{value:"Doc: link to a doc",id:"sidebar-item-doc",level:2},{value:"Link: link to any page",id:"sidebar-item-link",level:2},{value:"HTML: render custom markup",id:"sidebar-item-html",level:2},{value:"Category: create a hierarchy",id:"sidebar-item-category",level:2},{value:"Category links",id:"category-link",level:3},{value:"Generated index page",id:"generated-index-page",level:4},{value:"Doc link",id:"category-doc-link",level:4},{value:"Embedding generated index in doc page",id:"embedding-generated-index-in-doc-page",level:4},{value:"Collapsible categories",id:"collapsible-categories",level:3},{value:"Expanded categories by default",id:"expanded-categories-by-default",level:3},{value:"Using shorthands",id:"using-shorthands",level:2},{value:"Doc shorthand",id:"doc-shorthand",level:3},{value:"Category shorthand",id:"category-shorthand",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"sidebar-items",children:"Sidebar items"})}),"\n","\n",(0,a.jsxs)(n.p,{children:["We have introduced three types of item types in the example in the previous section: ",(0,a.jsx)(n.code,{children:"doc"}),", ",(0,a.jsx)(n.code,{children:"category"}),", and ",(0,a.jsx)(n.code,{children:"link"}),", whose usages are fairly intuitive. We will formally introduce their APIs. There's also a fourth type: ",(0,a.jsx)(n.code,{children:"autogenerated"}),", which we will explain in detail later."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"#sidebar-item-doc",children:"Doc"})}),": link to a doc page, associating it with the sidebar"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"#sidebar-item-link",children:"Link"})}),": link to any internal or external page"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"#sidebar-item-category",children:"Category"})}),": creates a dropdown of sidebar items"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"Autogenerated"})}),": generate a sidebar slice automatically"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"#sidebar-item-html",children:"HTML"})}),": renders pure HTML in the item's position"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars#sidebar-item-ref",children:"*Ref"})}),": link to a doc page, without making the item take part in navigation generation"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sidebar-item-doc",children:"Doc: link to a doc"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"doc"})," type to link to a doc page and assign that doc to a sidebar:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: 'doc';\n      id: string;\n      label: string; // Sidebar label text\n      className?: string; // Class name for sidebar label\n      customProps?: Record<string, unknown>; // Custom props\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // Normal syntax:\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'doc1', // document ID\n      label: 'Getting started', // sidebar label\n    },\n    // highlight-end\n\n    // Shorthand syntax:\n    // highlight-start\n    'doc2', // document ID\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you use the doc shorthand or ",(0,a.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"autogenerated"})," sidebar, you would lose the ability to customize the sidebar label through item definition. You can, however, use the ",(0,a.jsx)(n.code,{children:"sidebar_label"})," Markdown front matter within that doc, which has higher precedence over the ",(0,a.jsx)(n.code,{children:"label"})," key in the sidebar item. Similarly, you can use ",(0,a.jsx)(n.code,{children:"sidebar_custom_props"})," to declare custom metadata for a doc page."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.code,{children:"doc"})," item sets an ",(0,a.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars#sidebar-association",children:"implicit sidebar association"}),". Don't assign the same doc to multiple sidebars: change the type to ",(0,a.jsx)(n.code,{children:"ref"})," instead."]})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Sidebar custom props is a useful way to propagate arbitrary doc metadata to the client side, so you can get additional information when using any doc-related hook that fetches a doc object."})}),"\n",(0,a.jsx)(n.h2,{id:"sidebar-item-link",children:"Link: link to any page"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"link"})," type to link to any page (internal or external) that is not a doc."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type SidebarItemLink = {\n  type: 'link';\n  label: string;\n  href: string;\n  className?: string;\n  description?: string;\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myLinksSidebar: [\n    // highlight-start\n    // External link\n    {\n      type: 'link',\n      label: 'Facebook', // The link label\n      href: 'https://facebook.com', // The external URL\n    },\n    // highlight-end\n\n    // highlight-start\n    // Internal link\n    {\n      type: 'link',\n      label: 'Home', // The link label\n      href: '/', // The internal path\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"sidebar-item-html",children:"HTML: render custom markup"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"html"})," type to render custom HTML within the item's ",(0,a.jsx)(n.code,{children:"<li>"})," tag."]}),"\n",(0,a.jsx)(n.p,{children:"This can be useful for inserting custom items such as dividers, section titles, ads, and images."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type SidebarItemHtml = {\n  type: 'html';\n  value: string;\n  defaultStyle?: boolean; // Use default menu item styles\n  className?: string;\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myHtmlSidebar: [\n    // highlight-start\n    {\n      type: 'html',\n      value: '<img src=\"sponsor.png\" alt=\"Sponsor\" />', // The HTML to be rendered\n      defaultStyle: true, // Use the default menu item styling\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["The menu item is already wrapped in an ",(0,a.jsx)(n.code,{children:"<li>"})," tag, so if your custom item is simple, such as a title, just supply a string as the value and use the ",(0,a.jsx)(n.code,{children:"className"})," property to style it:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myHtmlSidebar: [\n    {\n      type: 'html',\n      value: 'Core concepts',\n      className: 'sidebar-title',\n    },\n  ],\n};\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"sidebar-item-category",children:"Category: create a hierarchy"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"category"})," type to create a hierarchy of sidebar items."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type SidebarItemCategory = {\n  type: 'category';\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n  className?: string;\n  description?: string;\n\n  // Category options:\n  collapsible: boolean; // Set the category to be collapsible\n  collapsed: boolean; // Set the category to be initially collapsed or open by default\n  link: SidebarItemCategoryLinkDoc | SidebarItemCategoryLinkGeneratedIndex;\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      collapsible: true,\n      collapsed: false,\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.a,{href:"#category-shorthand",children:(0,a.jsx)(n.strong,{children:"shorthand syntax"})})," when you don't need customizations:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        Docs: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n      },\n    ],\n  },\n};\n"})})]}),"\n",(0,a.jsx)(n.h3,{id:"category-link",children:"Category links"}),"\n",(0,a.jsx)(n.p,{children:"With category links, clicking on a category can navigate you to another page."}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"Use category links to introduce a category of documents."}),(0,a.jsxs)(n.p,{children:["Autogenerated categories can use the ",(0,a.jsx)(n.a,{href:"/docs/sidebar/autogenerated#category-item-metadata",children:(0,a.jsx)(n.code,{children:"_category_.yml"})})," file to declare the link."]})]}),"\n",(0,a.jsx)(n.h4,{id:"generated-index-page",children:"Generated index page"}),"\n",(0,a.jsxs)(n.p,{children:["You can auto-generate an index page that displays all the direct children of this category. The ",(0,a.jsx)(n.code,{children:"slug"})," allows you to customize the generated page's route, which defaults to ",(0,a.jsx)(n.code,{children:"/category/[categoryName]"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description: 'Learn about the most important Docusaurus concepts!',\n        slug: '/category/docusaurus-guides',\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["See it in action on the ",(0,a.jsx)(n.a,{href:"/docs/category/guides",children:"Docusaurus Guides page"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"generated-index"})," links as a quick way to get an introductory document."]})}),"\n",(0,a.jsx)(n.h4,{id:"category-doc-link",children:"Doc link"}),"\n",(0,a.jsx)(n.p,{children:"A category can link to an existing document."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {type: 'doc', id: 'introduction'},\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["See it in action on the ",(0,a.jsx)(n.a,{href:"/docs/i18n/introduction",children:"i18n introduction page"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"embedding-generated-index-in-doc-page",children:"Embedding generated index in doc page"}),"\n",(0,a.jsxs)(n.p,{children:["You can embed the generated cards list in a normal doc page as well with the ",(0,a.jsx)(n.code,{children:"DocCardList"})," component. It will display all the sidebar items of the parent category of the current document."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",metastring:'title="docs/sidebar/index.md"',children:"import DocCardList from '@theme/DocCardList';\n\n<DocCardList />\n"})}),"\n",(0,a.jsx)(o.Z,{children:(0,a.jsx)(c.Z,{})}),"\n",(0,a.jsx)(n.h3,{id:"collapsible-categories",children:"Collapsible categories"}),"\n",(0,a.jsxs)(n.p,{children:["We support the option to expand/collapse categories. Categories are collapsible by default, but you can disable collapsing with ",(0,a.jsx)(n.code,{children:"collapsible: false"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          // highlight-next-line\n          collapsible: false,\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To make all categories non-collapsible by default, set the ",(0,a.jsx)(n.code,{children:"sidebarCollapsible"})," option in ",(0,a.jsx)(n.code,{children:"plugin-content-docs"})," to ",(0,a.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsible: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The option in ",(0,a.jsx)(n.code,{children:"sidebars.js"})," takes precedence over plugin configuration, so it is possible to make certain categories collapsible when ",(0,a.jsx)(n.code,{children:"sidebarCollapsible"})," is set to ",(0,a.jsx)(n.code,{children:"false"})," globally."]})}),"\n",(0,a.jsx)(n.h3,{id:"expanded-categories-by-default",children:"Expanded categories by default"}),"\n",(0,a.jsxs)(n.p,{children:["Collapsible categories are collapsed by default. If you want them to be expanded on the first render, you can set ",(0,a.jsx)(n.code,{children:"collapsed"})," to ",(0,a.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        type: 'category',\n        label: 'Docs',\n        // highlight-next-line\n        collapsed: false,\n        items: ['markdown-features', 'sidebar', 'versioning'],\n      },\n    ],\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.code,{children:"collapsible"}),", you can also set the global configuration ",(0,a.jsx)(n.code,{children:"options.sidebarCollapsed"})," to ",(0,a.jsx)(n.code,{children:"false"}),". Individual ",(0,a.jsx)(n.code,{children:"collapsed"})," options in ",(0,a.jsx)(n.code,{children:"sidebars.js"})," will still take precedence over this configuration."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsed: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["When a category has ",(0,a.jsx)(n.code,{children:"collapsed: true"})," but ",(0,a.jsx)(n.code,{children:"collapsible: false"})," (either through ",(0,a.jsx)(n.code,{children:"sidebars.js"})," or through plugin configuration), the latter takes precedence and the category is still rendered as expanded."]})}),"\n",(0,a.jsx)(n.h2,{id:"using-shorthands",children:"Using shorthands"}),"\n",(0,a.jsxs)(n.p,{children:["You can express typical sidebar items without much customization more concisely with ",(0,a.jsx)(n.strong,{children:"shorthand syntaxes"}),". There are two parts to this: ",(0,a.jsx)(n.a,{href:"#doc-shorthand",children:(0,a.jsx)(n.strong,{children:"doc shorthand"})})," and ",(0,a.jsx)(n.a,{href:"#category-shorthand",children:(0,a.jsx)(n.strong,{children:"category shorthand"})}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"doc-shorthand",children:"Doc shorthand"}),"\n",(0,a.jsxs)(n.p,{children:["An item with type ",(0,a.jsx)(n.code,{children:"doc"})," can be simply a string representing its ID:"]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(l.Z,{value:"Longhand",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'myDoc',\n    },\n    // highlight-end\n  ],\n};\n"})})}),(0,a.jsx)(l.Z,{value:"Shorthand",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    'myDoc',\n    // highlight-end\n  ],\n};\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"So it's possible to simplify the example above to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        // highlight-next-line\n        'doc1',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        // highlight-start\n        'doc2',\n        'doc3',\n        // highlight-end\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.h3,{id:"category-shorthand",children:"Category shorthand"}),"\n",(0,a.jsx)(n.p,{children:"A category item can be represented by an object whose key is its label, and the value is an array of subitems."}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(l.Z,{value:"Longhand",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'category',\n      label: 'Getting started',\n      items: ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"})})}),(0,a.jsx)(l.Z,{value:"Shorthand",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"This permits us to simplify that example to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n    },\n    {\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Each shorthand object after this transformation will contain exactly one entry. Now consider the further simplified example below:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note how the two consecutive category shorthands are compressed into one object with two entries. This syntax generates a ",(0,a.jsx)(n.strong,{children:"sidebar slice"}),': you shouldn\'t see that object as one bulk item\u2014this object is unwrapped, with each entry becoming a separate item, and they spliced together with the rest of the items (in this case, the "Learn more" link) to form the final sidebar level. Sidebar slices are also important when discussing ',(0,a.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"autogenerated sidebars"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Wherever you have an array of items that is reduced to one category shorthand, you can omit that enclosing array as well."}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(l.Z,{value:"Before",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: [\n        {\n          'Basic guides': ['doc2', 'doc3'],\n          'Advanced guides': ['doc4', 'doc5'],\n        },\n      ],\n    },\n  ],\n};\n"})})}),(0,a.jsx)(l.Z,{value:"After",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: {\n    'Getting started': ['doc1'],\n    Docusaurus: {\n      'Basic guides': ['doc2', 'doc3'],\n      'Advanced guides': ['doc4', 'doc5'],\n    },\n  },\n};\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},78042:function(e,n,t){t.d(n,{Z:()=>j});var r=t("24246");t("27378");var a=t("90496"),i=t("85921"),s=t("35363"),l=t("11660"),o=t("82095"),c=t("77827"),d=t("57922");let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h(e){var n=e.href,t=e.children;return(0,r.jsx)(s.Z,{href:n,className:(0,a.Z)("card padding--lg",u.cardContainer),children:t})}function g(e){var n=e.href,t=e.icon,i=e.title,s=e.description;return(0,r.jsxs)(h,{href:n,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,a.Z)("text--truncate",u.cardTitle),title:i,children:[t," ",i]}),s&&(0,r.jsx)("p",{className:(0,a.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){var n,t,a=e.item,s=(0,i.LM)(a);var o=(n=(0,l.c)().selectMessage,function(e){return n(e,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return s?(0,r.jsx)(g,{href:s,icon:"\uD83D\uDDC3\uFE0F",title:a.label,description:null!==(t=a.description)&&void 0!==t?t:o(a.items.length)}):null}function m(e){var n,t,a=e.item,s=(0,o.Z)(a.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",l=(0,i.xz)(null!==(n=a.docId)&&void 0!==n?n:void 0);return(0,r.jsx)(g,{href:a.href,icon:s,title:a.label,description:null!==(t=a.description)&&void 0!==t?t:null==l?void 0:l.description})}function b(e){var n=e.item;switch(n.type){case"link":return(0,r.jsx)(m,{item:n});case"category":return(0,r.jsx)(p,{item:n});default:throw Error("unknown item type ".concat(JSON.stringify(n)))}}function f(e){var n=e.className,t=(0,i.jA)();return(0,r.jsx)(j,{items:t.items,className:n})}function j(e){var n=e.items,t=e.className;if(!n)return(0,r.jsx)(f,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,a,i;r=e,a=n,i=t[n],a in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i})}return e}({},e));var s=(0,i.MN)(n);return(0,r.jsx)("section",{className:(0,a.Z)("row",t),children:s.map(function(e,n){return(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(b,{item:e})},n)})})}},58636:function(e,n,t){t.d(n,{Z:()=>s});var r=t("24246");t("27378");var a=t("90496");let i="tabItem_pnkT";function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:t,children:n})}},15398:function(e,n,t){t.d(n,{Z:()=>O});var r=t("24246"),a=t("27378"),i=t("90496"),s=t("54947"),l=t("3620"),o=t("844"),c=t("97486"),d=t("32263"),u=t("16971");function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i=[],s=!0,l=!1;try{for(a=a.call(e);!(s=(t=a.next()).done)&&(i.push(t.value),!n||i.length!==n);s=!0);}catch(e){l=!0,r=e}finally{try{!s&&null!=a.return&&a.return()}finally{if(l)throw r}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){var n,t;return null!==(t=null===(n=a.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var n,t;if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&(void 0===n?"undefined":(t=n)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t)=="object"&&"value"in n)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function m(e){var n=e.value;return e.tabValues.some(function(e){return e.value===n})}var b=t("71607");let f="tabList_Qoir",j="tabItem_AQgk";function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,a,i;r=e,a=n,i=t[n],a in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i})}return e}function y(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function v(e){var n=e.className,t=e.block,a=e.selectedValue,l=e.selectValue,o=e.tabValues,c=[],d=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=o[c.indexOf(n)].value;t!==a&&(d(n),l(t))},h=function(e){var n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,r=c.indexOf(e.currentTarget)+1;n=null!==(t=c[r])&&void 0!==t?t:c[0];break;case"ArrowLeft":var a,i=c.indexOf(e.currentTarget)-1;n=null!==(a=c[i])&&void 0!==a?a:c[c.length-1]}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map(function(e){var n=e.value,t=e.label,s=e.attributes;return(0,r.jsx)("li",y(x({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:u},s),{className:(0,i.Z)("tabs__item",j,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)})})}function w(e){var n=e.lazy,t=e.children,s=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=l.find(function(e){return e.props.value===s});return o?(0,a.cloneElement)(o,{className:(0,i.Z)("margin-top--md",o.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map(function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})})})}function k(e){var n=function(e){var n,t,r,i,s,h,b,f,j,x,y,v,w,k,O=e.defaultValue,S=e.queryString,N=e.groupId;var D=(t=(n=e).values,r=n.children,(0,a.useMemo)(function(){var e=null!=t?t:p(r).map(function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}});return!function(e){var n=(0,d.lx)(e,function(e,n){return e.value===n.value});if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[t,r])),C=g((0,a.useState)(function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(r.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}var a=null!==(n=r.find(function(e){return e.default}))&&void 0!==n?n:r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:O,tabValues:D})}),2),P=C[0],T=C[1];var I=g((s=(i={queryString:void 0!==S&&S,groupId:N}).queryString,h=i.groupId,b=(0,l.k6)(),f=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:void 0!==s&&s,groupId:h}),[(0,c._X)(f),(0,a.useCallback)(function(e){if(!!f){var n,t,r=new URLSearchParams(b.location.search);r.set(f,e),b.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,a,i;r=e,a=n,i=t[n],a in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i})}return e}({},b.location),t=(t={search:r.toString()},t),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}),n))}},[f,b])]),2),E=I[0],L=I[1];var Z=g((x=(j=({groupId:N}).groupId)?"docusaurus.tab.".concat(j):null,v=(y=g((0,u.Nk)(x),2))[0],w=y[1],[v,(0,a.useCallback)(function(e){if(!!x)w.set(e)},[x,w])]),2),_=Z[0],A=Z[1];var V=m({value:k=null!=E?E:_,tabValues:D})?k:null;return(0,o.Z)(function(){V&&T(V)},[V]),{selectedValue:P,selectValue:(0,a.useCallback)(function(e){if(!m({value:e,tabValues:D}))throw Error("Can't select invalid tab value=".concat(e));T(e),L(e),A(e)},[L,A,D]),tabValues:D}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,r.jsx)(v,x({},n,e)),(0,r.jsx)(w,x({},n,e))]})}function O(e){var n=(0,b.Z)();return(0,r.jsx)(k,y(x({},e),{children:p(e.children)}),String(n))}},11660:function(e,n,t){t.d(n,{c:function(){return o}});var r=t(27378),a=t(8156),i=["zero","one","two","few","many","other"];function s(e){return i.filter(function(n){return e.includes(n)})}var l={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e,n=(e=(0,a.Z)().i18n.currentLocale,(0,r.useMemo)(function(){try{var n,t;return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:s(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'.concat(e,'".\nDocusaurus will fallback to the default (English) implementation.\nError: ').concat(n.message,"\n")),l}},[e]));return{selectMessage:function(e,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale=".concat(t.locale,", a maximum of ").concat(t.pluralForms.length," plural forms are expected (").concat(t.pluralForms.join(","),"), but the message contains ").concat(r.length,": ").concat(e));var a=t.select(n);return r[Math.min(t.pluralForms.indexOf(a),r.length-1)]}(t,e,n)}}}},14522:function(e,n,t){t.d(n,{Z:()=>g});var r=t("24246");t("27378");var a=t("90496");let i="browserWindow_my1Q",s="browserWindowHeader_jXSR",l="buttons_uHc7",o="browserWindowAddressBar_Pd8y",c="dot_giz1",d="browserWindowMenuIcon_Vhuh",u="bar_rrRL",h="browserWindowBody_Idgs";function g(e){var n,t,g=e.children,p=e.minHeight,m=e.url,b=e.style,f=e.bodyStyle;return(0,r.jsxs)("div",{className:i,style:(n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,a,i;r=e,a=n,i=t[n],a in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i})}return e}({},b),t=(t={minHeight:p},t),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}),n),children:[(0,r.jsxs)("div",{className:s,children:[(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("span",{className:c,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:c,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:c,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,a.Z)(o,"text--truncate"),children:void 0===m?"http://localhost:3000":m}),(0,r.jsx)("div",{className:d,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:u}),(0,r.jsx)("span",{className:u}),(0,r.jsx)("span",{className:u})]})})]}),(0,r.jsx)("div",{className:h,style:f,children:g})]})}},80980:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(27378);let a={},i=r.createContext(a);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);