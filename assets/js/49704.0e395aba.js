"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["49704"],{57668:function(t,e,r){r.d(e,{Lf:function(){return X},XO:function(){return h},Yn:function(){return J},ZH:function(){return Q},aH:function(){return Z},jr:function(){return c},qo:function(){return m}});var a=r(19039),i=r(84890),n=r(28923),s=r(11141);function l(t,e){e&&t.attr("style",e)}function d(t){let e=(0,s.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),r=e.append("xhtml:div"),a=t.label,i=t.isNode?"nodeLabel":"edgeLabel",n=r.append("span");return n.html(a),l(n,t.labelStyle),n.attr("class",i),l(r,t.labelStyle),r.style("display","inline-block"),r.style("white-space","nowrap"),r.attr("xmlns","http://www.w3.org/1999/xhtml"),e.node()}(0,n.eW)(l,"applyStyle"),(0,n.eW)(d,"addHtmlLabel");var h=(0,n.eW)((t,e,r,s)=>{let l=t||"";if("object"==typeof l&&(l=l[0]),(0,n.ku)((0,n.nV)().flowchart.htmlLabels))return l=l.replace(/\\n|\n/g,"<br />"),n.cM.debug("vertexText"+l),d({isNode:s,label:(0,a.EY)((0,i.SH)(l)),labelStyle:e.replace("fill:","color:")});{let t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));let a=[];for(let e of"string"==typeof l?l.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(l)?l:[]){let a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),r?a.setAttribute("class","title-row"):a.setAttribute("class","row"),a.textContent=e.trim(),t.appendChild(a)}return t}},"createLabel"),o=(0,n.eW)(async(t,e,r,l)=>{let d,o,c;let y=(0,n.nV)(),x=e.useHtmlLabels||(0,n.ku)(y.flowchart.htmlLabels);d=r||"node default";let g=t.insert("g").attr("class",d).attr("id",e.domId||e.id),u=g.insert("g").attr("class","label").attr("style",e.labelStyle);o=void 0===e.labelText?"":"string"==typeof e.labelText?e.labelText:e.labelText[0];let p=u.node(),w=(c="markdown"===e.labelType?(0,a.rw)(u,(0,n.oO)((0,i.SH)(o),y),{useHtmlLabels:x,width:e.width||y.flowchart.wrappingWidth,classes:"markdown-node-label"},y):p.appendChild(h((0,n.oO)((0,i.SH)(o),y),e.labelStyle,!1,l))).getBBox(),f=e.padding/2;if((0,n.ku)(y.flowchart.htmlLabels)){let t=c.children[0],e=(0,s.Ys)(c),r=t.getElementsByTagName("img");if(r){let t=""===o.replace(/<img[^>]*>/g,"").trim();await Promise.all([...r].map(e=>new Promise(r=>{function a(){if(e.style.display="flex",e.style.flexDirection="column",t){let t=5*parseInt(y.fontSize?y.fontSize:window.getComputedStyle(document.body).fontSize,10)+"px";e.style.minWidth=t,e.style.maxWidth=t}else e.style.width="100%";r(e)}(0,n.eW)(a,"setupImage"),setTimeout(()=>{e.complete&&a()}),e.addEventListener("error",a),e.addEventListener("load",a)})))}w=t.getBoundingClientRect(),e.attr("width",w.width),e.attr("height",w.height)}return x?u.attr("transform","translate("+-w.width/2+", "+-w.height/2+")"):u.attr("transform","translate(0, "+-w.height/2+")"),e.centerLabel&&u.attr("transform","translate("+-w.width/2+", "+-w.height/2+")"),u.insert("rect",":first-child"),{shapeSvg:g,bbox:w,halfPadding:f,label:u}},"labelHelper"),c=(0,n.eW)((t,e)=>{let r=e.node().getBBox();t.width=r.width,t.height=r.height},"updateNodeBounds");function y(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map(function(t){return t.x+","+t.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+r/2+")")}(0,n.eW)(y,"insertPolygonShape");var x=(0,n.eW)(t=>{let e=new Set;for(let r of t)switch(r){case"x":e.add("right"),e.add("left");break;case"y":e.add("up"),e.add("down");break;default:e.add(r)}return e},"expandAndDeduplicateDirections"),g=(0,n.eW)((t,e,r)=>{let a=x(t),i=e.height+2*r.padding,n=i/2,s=e.width+2*n+r.padding,l=r.padding/2;return a.has("right")&&a.has("left")&&a.has("up")&&a.has("down")?[{x:0,y:0},{x:n,y:0},{x:s/2,y:2*l},{x:s-n,y:0},{x:s,y:0},{x:s,y:-i/3},{x:s+2*l,y:-i/2},{x:s,y:-2*i/3},{x:s,y:-i},{x:s-n,y:-i},{x:s/2,y:-i-2*l},{x:n,y:-i},{x:0,y:-i},{x:0,y:-2*i/3},{x:-2*l,y:-i/2},{x:0,y:-i/3}]:a.has("right")&&a.has("left")&&a.has("up")?[{x:n,y:0},{x:s-n,y:0},{x:s,y:-i/2},{x:s-n,y:-i},{x:n,y:-i},{x:0,y:-i/2}]:a.has("right")&&a.has("left")&&a.has("down")?[{x:0,y:0},{x:n,y:-i},{x:s-n,y:-i},{x:s,y:0}]:a.has("right")&&a.has("up")&&a.has("down")?[{x:0,y:0},{x:s,y:-n},{x:s,y:-i+n},{x:0,y:-i}]:a.has("left")&&a.has("up")&&a.has("down")?[{x:s,y:0},{x:0,y:-n},{x:0,y:-i+n},{x:s,y:-i}]:a.has("right")&&a.has("left")?[{x:n,y:0},{x:n,y:-l},{x:s-n,y:-l},{x:s-n,y:0},{x:s,y:-i/2},{x:s-n,y:-i},{x:s-n,y:-i+l},{x:n,y:-i+l},{x:n,y:-i},{x:0,y:-i/2}]:a.has("up")&&a.has("down")?[{x:s/2,y:0},{x:0,y:-l},{x:n,y:-l},{x:n,y:-i+l},{x:0,y:-i+l},{x:s/2,y:-i},{x:s,y:-i+l},{x:s-n,y:-i+l},{x:s-n,y:-l},{x:s,y:-l}]:a.has("right")&&a.has("up")?[{x:0,y:0},{x:s,y:-n},{x:0,y:-i}]:a.has("right")&&a.has("down")?[{x:0,y:0},{x:s,y:0},{x:0,y:-i}]:a.has("left")&&a.has("up")?[{x:s,y:0},{x:0,y:-n},{x:s,y:-i}]:a.has("left")&&a.has("down")?[{x:s,y:0},{x:0,y:0},{x:s,y:-i}]:a.has("right")?[{x:n,y:-l},{x:n,y:-l},{x:s-n,y:-l},{x:s-n,y:0},{x:s,y:-i/2},{x:s-n,y:-i},{x:s-n,y:-i+l},{x:n,y:-i+l},{x:n,y:-i+l}]:a.has("left")?[{x:n,y:0},{x:n,y:-l},{x:s-n,y:-l},{x:s-n,y:-i+l},{x:n,y:-i+l},{x:n,y:-i},{x:0,y:-i/2}]:a.has("up")?[{x:n,y:-l},{x:n,y:-i+l},{x:0,y:-i+l},{x:s/2,y:-i},{x:s,y:-i+l},{x:s-n,y:-i+l},{x:s-n,y:-l}]:a.has("down")?[{x:s/2,y:0},{x:0,y:-l},{x:n,y:-l},{x:n,y:-i+l},{x:s-n,y:-i+l},{x:s-n,y:-l},{x:s,y:-l}]:[{x:0,y:0}]},"getArrowPoints");function u(t,e,r,a){var i=t.x,n=t.y,s=i-a.x,l=n-a.y,d=Math.sqrt(e*e*l*l+r*r*s*s),h=Math.abs(e*r*s/d);a.x<i&&(h=-h);var o=Math.abs(e*r*l/d);return a.y<n&&(o=-o),{x:i+h,y:n+o}}function p(t,e,r){return u(t,e,e,r)}function w(t,e,r,a){var i,n,s,l,d,h,o,c,y,x,g,u,p;if(i=e.y-t.y,s=t.x-e.x,d=e.x*t.y-t.x*e.y,y=i*r.x+s*r.y+d,x=i*a.x+s*a.y+d,!(0!==y&&0!==x&&f(y,x))){if(n=a.y-r.y,l=r.x-a.x,h=a.x*r.y-r.x*a.y,o=n*t.x+l*t.y+h,c=n*e.x+l*e.y+h,!(0!==o&&0!==c&&f(o,c))&&0!=(g=i*l-n*s))return u=Math.abs(g/2),{x:(p=s*h-l*d)<0?(p-u)/g:(p+u)/g,y:(p=n*d-i*h)<0?(p-u)/g:(p+u)/g}}}function f(t,e){return t*e>0}function b(t,e,r){var a=t.x,i=t.y,n=[],s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach(function(t){s=Math.min(s,t.x),l=Math.min(l,t.y)}):(s=Math.min(s,e.x),l=Math.min(l,e.y));for(var d=a-t.width/2-s,h=i-t.height/2-l,o=0;o<e.length;o++){var c=e[o],y=e[o<e.length-1?o+1:0],x=w(t,r,{x:d+c.x,y:h+c.y},{x:d+y.x,y:h+y.y});x&&n.push(x)}return n.length?(n.length>1&&n.sort(function(t,e){var a=t.x-r.x,i=t.y-r.y,n=Math.sqrt(a*a+i*i),s=e.x-r.x,l=e.y-r.y,d=Math.sqrt(s*s+l*l);return n<d?-1:n===d?0:1}),n[0]):t}(0,n.eW)(function(t,e){return t.intersect(e)},"intersectNode"),(0,n.eW)(u,"intersectEllipse"),(0,n.eW)(p,"intersectCircle"),(0,n.eW)(w,"intersectLine"),(0,n.eW)(f,"sameSign"),(0,n.eW)(b,"intersectPolygon");var m=(0,n.eW)((t,e)=>{var r,a,i=t.x,n=t.y,s=e.x-i,l=e.y-n,d=t.width/2,h=t.height/2;return Math.abs(l)*d>Math.abs(s)*h?(l<0&&(h=-h),r=0===l?0:h*s/l,a=h):(s<0&&(d=-d),r=d,a=0===s?0:d*l/s),{x:i+r,y:n+a}},"intersectRect"),W=(0,n.eW)(async(t,e)=>{e.useHtmlLabels||(0,n.nV)().flowchart.htmlLabels||(e.centerLabel=!0);let{shapeSvg:r,bbox:a,halfPadding:i}=await o(t,e,"node "+e.classes,!0);n.cM.info("Classes = ",e.classes);let s=r.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-a.width/2-i).attr("y",-a.height/2-i).attr("width",a.width+e.padding).attr("height",a.height+e.padding),c(e,s),e.intersect=function(t){return m(e,t)},r},"note"),v=(0,n.eW)(t=>t?" "+t:"","formatClass"),k=(0,n.eW)((t,e)=>`${e||"node default"}${v(t.classes)} ${v(t.class)}`,"getClassesFromNode"),M=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e,void 0),!0),i=a.width+e.padding+(a.height+e.padding),s=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];n.cM.info("Question main (Circle)");let l=y(r,i,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return n.cM.warn("Intersect called"),b(e,s,t)},r},"question"),S=(0,n.eW)((t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id);return r.insert("polygon",":first-child").attr("points",[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}].map(function(t){return t.x+","+t.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return p(e,14,t)},r},"choice"),B=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e,void 0),!0),i=a.height+e.padding,n=i/4,s=a.width+2*n+e.padding,l=[{x:n,y:0},{x:s-n,y:0},{x:s,y:-i/2},{x:s-n,y:-i},{x:n,y:-i},{x:0,y:-i/2}],d=y(r,s,i,l);return d.attr("style",e.style),c(e,d),e.intersect=function(t){return b(e,l,t)},r},"hexagon"),C=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,void 0,!0),i=a.height+2*e.padding,n=i/2,s=a.width+2*n+e.padding,l=g(e.directions,a,e),d=y(r,s,i,l);return d.attr("style",e.style),c(e,d),e.intersect=function(t){return b(e,l,t)},r},"block_arrow"),L=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,s=[{x:-n/2,y:0},{x:i,y:0},{x:i,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}];return y(r,i,n,s).attr("style",e.style),e.width=i+n,e.height=n,e.intersect=function(t){return b(e,s,t)},r},"rect_left_inv_arrow"),T=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e),!0),i=a.width+e.padding,n=a.height+e.padding,s=[{x:-2*n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:n/6,y:-n}],l=y(r,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return b(e,s,t)},r},"lean_right"),D=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,s=[{x:2*n/6,y:0},{x:i+n/6,y:0},{x:i-2*n/6,y:-n},{x:-n/6,y:-n}],l=y(r,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return b(e,s,t)},r},"lean_left"),E=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,s=[{x:-2*n/6,y:0},{x:i+2*n/6,y:0},{x:i-n/6,y:-n},{x:n/6,y:-n}],l=y(r,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return b(e,s,t)},r},"trapezoid"),I=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,s=[{x:n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:-2*n/6,y:-n}],l=y(r,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return b(e,s,t)},r},"inv_trapezoid"),N=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,s=[{x:0,y:0},{x:i+n/2,y:0},{x:i,y:-n/2},{x:i+n/2,y:-n},{x:0,y:-n}],l=y(r,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return b(e,s,t)},r},"rect_right_inv_arrow"),Y=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e,void 0),!0),i=a.width+e.padding,n=i/2,s=n/(2.5+i/50),l=a.height+s+e.padding,d=r.attr("label-offset-y",s).insert("path",":first-child").attr("style",e.style).attr("d","M 0,"+s+" a "+n+","+s+" 0,0,0 "+i+" 0 a "+n+","+s+" 0,0,0 "+-i+" 0 l 0,"+l+" a "+n+","+s+" 0,0,0 "+i+" 0 l 0,"+-l).attr("transform","translate("+-i/2+","+-(l/2+s)+")");return c(e,d),e.intersect=function(t){let r=m(e,t),a=r.x-e.x;if(0!=n&&(Math.abs(a)<e.width/2||Math.abs(a)==e.width/2&&Math.abs(r.y-e.y)>e.height/2-s)){let i=s*s*(1-a*a/(n*n));0!=i&&(i=Math.sqrt(i)),i=s-i,t.y-e.y>0&&(i=-i),r.y+=i}return r},r},"cylinder"),_=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a,halfPadding:i}=await o(t,e,"node "+e.classes+" "+e.class,!0),s=r.insert("rect",":first-child"),l=e.positioned?e.width:a.width+e.padding,d=e.positioned?e.height:a.height+e.padding,h=e.positioned?-l/2:-a.width/2-i,y=e.positioned?-d/2:-a.height/2-i;if(s.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",h).attr("y",y).attr("width",l).attr("height",d),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(A(s,e.props.borders,l,d),t.delete("borders")),t.forEach(t=>{n.cM.warn(`Unknown node property ${t}`)})}return c(e,s),e.intersect=function(t){return m(e,t)},r},"rect"),j=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a,halfPadding:i}=await o(t,e,"node "+e.classes,!0),s=r.insert("rect",":first-child"),l=e.positioned?e.width:a.width+e.padding,d=e.positioned?e.height:a.height+e.padding,h=e.positioned?-l/2:-a.width/2-i,y=e.positioned?-d/2:-a.height/2-i;if(s.attr("class","basic cluster composite label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",h).attr("y",y).attr("width",l).attr("height",d),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(A(s,e.props.borders,l,d),t.delete("borders")),t.forEach(t=>{n.cM.warn(`Unknown node property ${t}`)})}return c(e,s),e.intersect=function(t){return m(e,t)},r},"composite"),V=(0,n.eW)(async(t,e)=>{let{shapeSvg:r}=await o(t,e,"label",!0);n.cM.trace("Classes = ",e.class);let a=r.insert("rect",":first-child");if(a.attr("width",0).attr("height",0),r.attr("class","label edgeLabel"),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(A(a,e.props.borders,0,0),t.delete("borders")),t.forEach(t=>{n.cM.warn(`Unknown node property ${t}`)})}return c(e,a),e.intersect=function(t){return m(e,t)},r},"labelRect");function A(t,e,r,a){let i=[],s=(0,n.eW)(t=>{i.push(t,0)},"addBorder"),l=(0,n.eW)(t=>{i.push(0,t)},"skipBorder");e.includes("t")?(n.cM.debug("add top border"),s(r)):l(r),e.includes("r")?(n.cM.debug("add right border"),s(a)):l(a),e.includes("b")?(n.cM.debug("add bottom border"),s(r)):l(r),e.includes("l")?(n.cM.debug("add left border"),s(a)):l(a),t.attr("stroke-dasharray",i.join(" "))}(0,n.eW)(A,"applyNodePropertyBorders");var R=(0,n.eW)((t,e)=>{let r;r=e.classes?"node "+e.classes:"node default";let a=t.insert("g").attr("class",r).attr("id",e.domId||e.id),i=a.insert("rect",":first-child"),l=a.insert("line"),d=a.insert("g").attr("class","label"),o=e.labelText.flat?e.labelText.flat():e.labelText,y="";y="object"==typeof o?o[0]:o,n.cM.info("Label text abc79",y,o,"object"==typeof o);let x=d.node().appendChild(h(y,e.labelStyle,!0,!0)),g={width:0,height:0};if((0,n.ku)((0,n.nV)().flowchart.htmlLabels)){let t=x.children[0],e=(0,s.Ys)(x);g=t.getBoundingClientRect(),e.attr("width",g.width),e.attr("height",g.height)}n.cM.info("Text 2",o);let u=o.slice(1,o.length),p=x.getBBox(),w=d.node().appendChild(h(u.join?u.join("<br/>"):u,e.labelStyle,!0,!0));if((0,n.ku)((0,n.nV)().flowchart.htmlLabels)){let t=w.children[0],e=(0,s.Ys)(w);g=t.getBoundingClientRect(),e.attr("width",g.width),e.attr("height",g.height)}let f=e.padding/2;return(0,s.Ys)(w).attr("transform","translate( "+(g.width>p.width?0:(p.width-g.width)/2)+", "+(p.height+f+5)+")"),(0,s.Ys)(x).attr("transform","translate( "+(g.width<p.width?0:-(p.width-g.width)/2)+", 0)"),g=d.node().getBBox(),d.attr("transform","translate("+-g.width/2+", "+(-g.height/2-f+3)+")"),i.attr("class","outer title-state").attr("x",-g.width/2-f).attr("y",-g.height/2-f).attr("width",g.width+e.padding).attr("height",g.height+e.padding),l.attr("class","divider").attr("x1",-g.width/2-f).attr("x2",g.width/2+f).attr("y1",-g.height/2-f+p.height+f).attr("y2",-g.height/2-f+p.height+f),c(e,i),e.intersect=function(t){return m(e,t)},a},"rectWithTitle"),H=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e,void 0),!0),i=a.height+e.padding,n=a.width+i/4+e.padding,s=r.insert("rect",":first-child").attr("style",e.style).attr("rx",i/2).attr("ry",i/2).attr("x",-n/2).attr("y",-i/2).attr("width",n).attr("height",i);return c(e,s),e.intersect=function(t){return m(e,t)},r},"stadium"),O=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a,halfPadding:i}=await o(t,e,k(e,void 0),!0),s=r.insert("circle",":first-child");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",a.width/2+i).attr("width",a.width+e.padding).attr("height",a.height+e.padding),n.cM.info("Circle main"),c(e,s),e.intersect=function(t){return n.cM.info("Circle intersect",e,a.width/2+i,t),p(e,a.width/2+i,t)},r},"circle"),P=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a,halfPadding:i}=await o(t,e,k(e,void 0),!0),s=r.insert("g",":first-child"),l=s.insert("circle"),d=s.insert("circle");return s.attr("class",e.class),l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",a.width/2+i+5).attr("width",a.width+e.padding+10).attr("height",a.height+e.padding+10),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",a.width/2+i).attr("width",a.width+e.padding).attr("height",a.height+e.padding),n.cM.info("DoubleCircle main"),c(e,l),e.intersect=function(t){return n.cM.info("DoubleCircle intersect",e,a.width/2+i+5,t),p(e,a.width/2+i+5,t)},r},"doublecircle"),q=(0,n.eW)(async(t,e)=>{let{shapeSvg:r,bbox:a}=await o(t,e,k(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,s=[{x:0,y:0},{x:i,y:0},{x:i,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],l=y(r,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return b(e,s,t)},r},"subroutine"),$=(0,n.eW)((t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),c(e,a),e.intersect=function(t){return p(e,7,t)},r},"start"),z=(0,n.eW)((t,e,r)=>{let a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),i=70,n=10;return"LR"===r&&(i=10,n=70),c(e,a.append("rect").attr("x",-1*i/2).attr("y",-1*n/2).attr("width",i).attr("height",n).attr("class","fork-join")),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return m(e,t)},a},"forkJoin"),F={rhombus:M,composite:j,question:M,rect:_,labelRect:V,rectWithTitle:R,choice:S,circle:O,doublecircle:P,stadium:H,hexagon:B,block_arrow:C,rect_left_inv_arrow:L,lean_right:T,lean_left:D,trapezoid:E,inv_trapezoid:I,rect_right_inv_arrow:N,cylinder:Y,start:$,end:(0,n.eW)((t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child"),i=r.insert("circle",":first-child");return i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),a.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),c(e,i),e.intersect=function(t){return p(e,7,t)},r},"end"),note:W,subroutine:q,fork:z,join:z,class_box:(0,n.eW)((t,e)=>{let r;let a=e.padding/2;r=e.classes?"node "+e.classes:"node default";let i=t.insert("g").attr("class",r).attr("id",e.domId||e.id),l=i.insert("rect",":first-child"),d=i.insert("line"),o=i.insert("line"),y=0,x=4,g=i.insert("g").attr("class","label"),u=0,p=e.classData.annotations?.[0],w=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",f=g.node().appendChild(h(w,e.labelStyle,!0,!0)),b=f.getBBox();if((0,n.ku)((0,n.nV)().flowchart.htmlLabels)){let t=f.children[0],e=(0,s.Ys)(f);b=t.getBoundingClientRect(),e.attr("width",b.width),e.attr("height",b.height)}e.classData.annotations[0]&&(x+=b.height+4,y+=b.width);let W=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,n.nV)().flowchart.htmlLabels?W+="&lt;"+e.classData.type+"&gt;":W+="<"+e.classData.type+">");let v=g.node().appendChild(h(W,e.labelStyle,!0,!0));(0,s.Ys)(v).attr("class","classTitle");let k=v.getBBox();if((0,n.ku)((0,n.nV)().flowchart.htmlLabels)){let t=v.children[0],e=(0,s.Ys)(v);k=t.getBoundingClientRect(),e.attr("width",k.width),e.attr("height",k.height)}x+=k.height+4,k.width>y&&(y=k.width);let M=[];e.classData.members.forEach(t=>{let r=t.getDisplayDetails(),a=r.displayText;(0,n.nV)().flowchart.htmlLabels&&(a=a.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let i=g.node().appendChild(h(a,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),l=i.getBBox();if((0,n.ku)((0,n.nV)().flowchart.htmlLabels)){let t=i.children[0],e=(0,s.Ys)(i);l=t.getBoundingClientRect(),e.attr("width",l.width),e.attr("height",l.height)}l.width>y&&(y=l.width),x+=l.height+4,M.push(i)}),x+=8;let S=[];if(e.classData.methods.forEach(t=>{let r=t.getDisplayDetails(),a=r.displayText;(0,n.nV)().flowchart.htmlLabels&&(a=a.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let i=g.node().appendChild(h(a,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),l=i.getBBox();if((0,n.ku)((0,n.nV)().flowchart.htmlLabels)){let t=i.children[0],e=(0,s.Ys)(i);l=t.getBoundingClientRect(),e.attr("width",l.width),e.attr("height",l.height)}l.width>y&&(y=l.width),x+=l.height+4,S.push(i)}),x+=8,p){let t=(y-b.width)/2;(0,s.Ys)(f).attr("transform","translate( "+(-1*y/2+t)+", "+-1*x/2+")"),u=b.height+4}let B=(y-k.width)/2;return(0,s.Ys)(v).attr("transform","translate( "+(-1*y/2+B)+", "+(-1*x/2+u)+")"),u+=k.height+4,d.attr("class","divider").attr("x1",-y/2-a).attr("x2",y/2+a).attr("y1",-x/2-a+8+u).attr("y2",-x/2-a+8+u),u+=8,M.forEach(t=>{(0,s.Ys)(t).attr("transform","translate( "+-y/2+", "+(-1*x/2+u+4)+")");let e=t?.getBBox();u+=(e?.height??0)+4}),u+=8,o.attr("class","divider").attr("x1",-y/2-a).attr("x2",y/2+a).attr("y1",-x/2-a+8+u).attr("y2",-x/2-a+8+u),u+=8,S.forEach(t=>{(0,s.Ys)(t).attr("transform","translate( "+-y/2+", "+(-1*x/2+u)+")");let e=t?.getBBox();u+=(e?.height??0)+4}),l.attr("style",e.style).attr("class","outer title-state").attr("x",-y/2-a).attr("y",-(x/2)-a).attr("width",y+e.padding).attr("height",x+e.padding),c(e,l),e.intersect=function(t){return m(e,t)},i},"class_box")},U={},X=(0,n.eW)(async(t,e,r)=>{let a,i;if(e.link){let s;"sandbox"===(0,n.nV)().securityLevel?s="_top":e.linkTarget&&(s=e.linkTarget||"_blank"),a=t.insert("svg:a").attr("xlink:href",e.link).attr("target",s),i=await F[e.shape](a,e,r)}else a=i=await F[e.shape](t,e,r);return e.tooltip&&i.attr("title",e.tooltip),e.class&&i.attr("class","node default "+e.class),U[e.id]=a,e.haveCallback&&U[e.id].attr("class",U[e.id].attr("class")+" clickable"),a},"insertNode"),J=(0,n.eW)((t,e)=>{U[e.id]=t},"setNodeElem"),Q=(0,n.eW)(()=>{U={}},"clear"),Z=(0,n.eW)(t=>{let e=U[t.id];n.cM.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");let r=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+r-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),r},"positionNode")}}]);