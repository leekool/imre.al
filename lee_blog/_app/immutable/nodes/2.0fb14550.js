import{s as B,n as q}from"../chunks/scheduler.e108d1fd.js";import{S as F,i as G,s as S,g as p,z as H,f as u,c as I,h as b,j as y,k as h,a as L,y as f,A as J,m as w,n as z,o as D}from"../chunks/index.a3c98c77.js";function C(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}const K=async({fetch:s})=>({posts:await(await s("/api/posts")).json()}),Y=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"}));function N(s,a,l){const o=s.slice();return o[1]=a[l],o}function U(s){let a,l,o=s[1].meta.date+"",i,m,n,e,r=s[1].meta.title+"",t,_,E,g,v,j=s[1].meta.category+"",k,A,P;return{c(){a=p("li"),l=p("time"),i=w(o),n=S(),e=p("a"),t=w(r),E=S(),g=p("span"),v=p("a"),k=w(j),P=S(),this.h()},l(d){a=b(d,"LI",{});var c=y(a);l=b(c,"TIME",{datetime:!0,class:!0});var M=y(l);i=z(M,o),M.forEach(u),n=I(c),e=b(c,"A",{class:!0,href:!0});var O=y(e);t=z(O,r),O.forEach(u),E=I(c),g=b(c,"SPAN",{class:!0});var T=y(g);v=b(T,"A",{class:!0,href:!0});var V=y(v);k=z(V,j),V.forEach(u),T.forEach(u),P=I(c),c.forEach(u),this.h()},h(){h(l,"datetime",m=s[1].meta.date),h(l,"class","svelte-1kgdb2y"),h(e,"class","clean-link"),h(e,"href",_=s[1].path),h(v,"class","tag svelte-1kgdb2y"),h(v,"href",A="blog/category/"+s[1].meta.category),h(g,"class","tags svelte-1kgdb2y")},m(d,c){L(d,a,c),f(a,l),f(l,i),f(a,n),f(a,e),f(e,t),f(a,E),f(a,g),f(g,v),f(v,k),f(a,P)},p(d,c){c&1&&o!==(o=d[1].meta.date+"")&&D(i,o),c&1&&m!==(m=d[1].meta.date)&&h(l,"datetime",m),c&1&&r!==(r=d[1].meta.title+"")&&D(t,r),c&1&&_!==(_=d[1].path)&&h(e,"href",_),c&1&&j!==(j=d[1].meta.category+"")&&D(k,j),c&1&&A!==(A="blog/category/"+d[1].meta.category)&&h(v,"href",A)},d(d){d&&u(a)}}}function Q(s){let a,l,o,i,m=C(s[0].posts),n=[];for(let e=0;e<m.length;e+=1)n[e]=U(N(s,m,e));return{c(){a=S(),l=p("div"),o=p("div"),i=p("ul");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){H("svelte-hkm7mj",document.head).forEach(u),a=I(e),l=b(e,"DIV",{id:!0,class:!0});var t=y(l);o=b(t,"DIV",{class:!0});var _=y(o);i=b(_,"UL",{});var E=y(i);for(let g=0;g<n.length;g+=1)n[g].l(E);E.forEach(u),_.forEach(u),t.forEach(u),this.h()},h(){document.title="imre.al",h(o,"class","blog-posts svelte-1kgdb2y"),h(l,"id","main"),h(l,"class","content svelte-1kgdb2y")},m(e,r){L(e,a,r),L(e,l,r),f(l,o),f(o,i);for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(i,null)},p(e,[r]){if(r&1){m=C(e[0].posts);let t;for(t=0;t<m.length;t+=1){const _=N(e,m,t);n[t]?n[t].p(_,r):(n[t]=U(_),n[t].c(),n[t].m(i,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=m.length}},i:q,o:q,d(e){e&&(u(a),u(l)),J(n,e)}}}function R(s,a,l){let{data:o}=a;return s.$$set=i=>{"data"in i&&l(0,o=i.data)},[o]}class Z extends F{constructor(a){super(),G(this,a,R,Q,B,{data:0})}}export{Z as component,Y as universal};
