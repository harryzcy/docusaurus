"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["54725"],{37059:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return u}});var r=n(92649),a=n(24246),o=n(80980);let i={mdx:{format:"md"},date:"2019-07-24T20:00"},s="2.0.0-alpha.24",l={authorsImageUrls:[]},u=[];function c(e){let t={code:"code",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Remove unused metadata for pages. This minimize number of http request & smaller bundle size."}),"\n",(0,a.jsx)(t.li,{children:"Upgrade dependencies of css-loader from 2.x to 3.x. CSS modules localIdentName hash now only use the last 4 characters instead of 8."}),"\n",(0,a.jsx)(t.li,{children:"Fix broken markdown linking replacement for mdx files"}),"\n",(0,a.jsx)(t.li,{children:"Fix potential security vulnerability because we're exposing the directory structure of the host machine. Instead of absolute path, we use relative path from site directory. Resulting in shorter webpack chunk naming and smaller bundle size."}),"\n",(0,a.jsx)(t.li,{children:"Use contenthash instead of chunkhash for better long term caching"}),"\n",(0,a.jsxs)(t.li,{children:["Allow user to customize generated heading from MDX. Swizzle ",(0,a.jsx)(t.code,{children:"@theme/Heading"})]}),"\n"]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},80980:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var r=n(27378);let a={},o=r.createContext(a);function i(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}},92649:function(e){e.exports=JSON.parse('{"permalink":"/changelog/2.0.0-alpha.24","source":"@site/changelog/source/2.0.0-alpha.24.md","title":"2.0.0-alpha.24","description":"- Remove unused metadata for pages. This minimize number of http request & smaller bundle size.","date":"2019-07-24T20:00:00.000Z","tags":[],"hasTruncateMarker":true,"authors":[],"frontMatter":{"mdx":{"format":"md"},"date":"2019-07-24T20:00"},"unlisted":false,"prevItem":{"title":"2.0.0-alpha.25","permalink":"/changelog/2.0.0-alpha.25"},"nextItem":{"title":"2.0.0-alpha.23","permalink":"/changelog/2.0.0-alpha.23"},"listPageLink":"/changelog/page/5"}')}}]);