(this.webpackJsonpmartys=this.webpackJsonpmartys||[]).push([[0],{20:function(t,e,n){},42:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(30),i=n.n(a),r=n(32),o=n(4),s=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))},u=n(5),j=n(2);function d(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"nav",children:[Object(j.jsx)("button",{id:"homebutton",onClick:function(){window.location.hash="/"},children:"Home"}),Object(j.jsx)("button",{id:"menubutton",onClick:function(){window.location.hash="/menu"},children:"Menu"}),Object(j.jsx)("button",{id:"aboutbutton",onClick:function(){window.location.hash="/about"},children:"About us"})]})})}n(20);var b=n(45);function l(t){var e=Object(c.useState)(0),n=Object(u.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){void 0!==t.coun&&i(t.coun)}),[t.coun]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"cart",onClick:function(){window.location.hash="/cart"},children:[Object(j.jsx)("img",{alt:"",src:"https://media.istockphoto.com/vectors/shopping-cart-icon-vector-id1142859120?k=20&m=1142859120&s=170667a&w=0&h=mDJbGHOildt4Ip7TOmNt2IN9icVMyvd0_ByrqYhpAVA="}),Object(j.jsx)("p",{onClick:function(){window.location.hash="/cart"},children:a})]})})}var m=b.a.get("https://martysapi.onrender.com/");b.a.get("https://martysapi.onrender.com/cart");var h=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(""),r=Object(u.a)(i,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){b.a.get("https://martysapi.onrender.com/cart").then((function(t){s(t.data.coun)}))}),[]),Object(c.useEffect)((function(){m.then((function(t){a(t.data[0].header)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(l,{coun:o}),Object(j.jsxs)("div",{id:"home",children:[Object(j.jsxs)("ul",{id:"hero",children:[Object(j.jsx)("p",{id:"header",children:n}),Object(j.jsx)("button",{onClick:function(){window.location.hash="/tryOne"},children:"Order Now"})]}),Object(j.jsx)("img",{src:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMj\r A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"burger"})]})]})},O=b.a.get("https://martysapi.onrender.com/about");function f(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(c.useRef)();return Object(c.useEffect)((function(){O.then((function(t){a(t.data[0].paragraph)}))}),[]),Object(c.useEffect)((function(){i.current.innerHTML=n}),[n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)("p",{id:"whowe",ref:i})]})}var p=n(8),x=b.a.get("https://martysapi.onrender.com/menu");var g=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(0),r=Object(u.a)(i,2),o=r[0],s=r[1],m=Object(c.useState)(""),h=Object(u.a)(m,1)[0],O=Object(c.useState)("none"),f=Object(u.a)(O,1)[0];return Object(c.useEffect)((function(){b.a.get("https://martysapi.onrender.com/cart").then((function(t){for(var e in s(t.data.coun),t.data.items)for(var c in n)t.data.items[e].name===n[c].name&&(document.getElementById("b"+c).style.display="none",document.getElementById(c).style.display="inline")}))}),[n]),Object(c.useEffect)((function(){x.then((function(t){var e=function(e){a((function(n){return[].concat(Object(p.a)(n),[t.data[e]])}))};for(var n in t.data)e(n)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(l,{coun:o}),Object(j.jsx)("div",{id:"menuItemsLe",children:n.map((function(t,e){var c="b"+e;return e+1<=n.length/2?Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{id:"name",children:t.name}),Object(j.jsx)("img",{alt:"",src:t.img}),Object(j.jsxs)("p",{children:["$",t.price]}),Object(j.jsx)("button",{id:c,className:"buttonBuy",style:{display:h},onClick:function(){var n=document.getElementById(c);n.id==="b"+String(e)&&(n.style.display="none");var a=document.getElementById(e);a.id===String(e)&&(a.style.display="inline"),s(String(parseInt(o)+1)),b.a.post("https://martysapi.onrender.com/menu",{data:t})},children:"Add to cart"}),Object(j.jsx)("button",{id:e,className:"viewCartClass",style:{display:f},onClick:function(){window.location.hash="/cart"},children:"View in cart"})]},e):null}))}),Object(j.jsx)("div",{id:"menuItemsRi",children:n.map((function(t,e){var c="b"+e;return e+1>n.length/2?Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:t.name}),Object(j.jsx)("img",{alt:"",src:t.img}),Object(j.jsxs)("p",{children:["$",t.price]}),Object(j.jsx)("button",{id:c,className:"buttonBuy",style:{display:h},onClick:function(){var n=document.getElementById(c);n.id==="b"+String(e)&&(n.style.display="none");var a=document.getElementById(e);a.id===String(e)&&(a.style.display="inline"),s(String(parseInt(o)+1)),b.a.post("https://martysapi.onrender.com/menu",{data:t})},children:"Add to cart"}),Object(j.jsx)("button",{id:e,className:"viewCartClass",style:{display:f},onClick:function(){window.location.hash="/cart"},children:"View in cart"})]},e):null}))})]})};var y=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)("div",{id:"try",children:[Object(j.jsx)("p",{children:"Coming soon!"}),Object(j.jsx)("button",{onClick:function(){window.location.hash="/"},children:"Go back"})]})]})},v=n.p+"static/media/emptycar.f157d8a2.png",w=(n(42),n(31)),C=n.n(w),k=b.a.get("https://martysapi.onrender.com/cart");function S(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)([]),r=Object(u.a)(i,2),o=r[0],s=r[1],m=Object(c.useState)(""),h=Object(u.a)(m,2),O=h[0],f=h[1],x=Object(c.useState)(""),g=Object(u.a)(x,2),y=g[0],w=g[1],S=Object(c.useState)(!1),E=Object(u.a)(S,2),I=E[0],B=E[1],F=Object(c.useRef)();return Object(c.useEffect)((function(){k.then((function(t){n.length<1&&!0===I?(f(v),F.current.style.display="block"):F.current.style.display="none"}))}),[n,I]),Object(c.useEffect)((function(){(k=b.a.get("https://martysapi.onrender.com/cart")).then((function(t){w(t.data.coun)}))}),[n]),Object(c.useEffect)((function(){B(!0),k.then((function(t){w(t.data.coun);var e=function(e){a((function(n){return[].concat(Object(p.a)(n),[t.data.items[e]])})),s((function(t){return[].concat(Object(p.a)(t),[1])}))};for(var n in t.data.items)e(n)}))}),[]),Object(c.useEffect)((function(){n.length<1&&o.length>0&&(k=b.a.get("https://martysapi.onrender.com/cart"))}),[n,o]),Object(c.useEffect)((function(){n.length<1&&o.length>0&&k.then((function(t){var e=function(e){a((function(n){return[].concat(Object(p.a)(n),[t.data.items[e]])})),s((function(t){return[].concat(Object(p.a)(t),[0])}))};for(var n in t.data.items)e(n)}))}),[n,o]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(l,{coun:y}),Object(j.jsx)("img",{id:"emptyCart",alt:"  ",src:O,ref:F}),Object(j.jsx)("div",{id:"cartBag",children:n.map((function(t,e){return Object(j.jsxs)("div",{id:"itemsBag",children:[Object(j.jsx)("img",{alt:"img",id:"itemImg",src:t.img}),Object(j.jsx)("p",{children:t.name}),Object(j.jsx)("p",{children:t.amount}),Object(j.jsx)("button",{id:"removeOne",onClick:function(){!function(t){if(t.amount>1){var e,c=[],i=[];for(var r in n)n[r].name===t.name?(c.push(n[r]),c[0].amount=parseInt(c[0].amount)-1,e=r):i.push(n[r]);i.splice(e,0,c[0]),a(i),w((function(t){return t-1})),b.a.post("https://martysapi.onrender.com/cart",{amountTem:c})}}(t)},children:"-"}),Object(j.jsx)("button",{id:"addOne",onClick:function(){!function(t){var e,c=[],i=[];for(var r in n)n[r].name===t.name?(c.push(n[r]),c[0].amount=parseInt(c[0].amount)+1,e=r):i.push(n[r]);i.splice(e,0,c[0]),a(i),w((function(t){return t+1})),b.a.post("https://martysapi.onrender.com/cart",{amountTem:c})}(t)},children:"+"}),Object(j.jsx)("button",{id:"remove",onClick:function(){a([]),n.length>1?B(!1):B(!0),b.a.post("https://martysapi.onrender.com/cart",{item:t})},children:"remove"})]},C()())}))})]})}i.a.render(Object(j.jsx)(r.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(h,{})}),Object(j.jsx)(o.a,{path:"/menu",element:Object(j.jsx)(g,{})}),Object(j.jsx)(o.a,{path:"/about",element:Object(j.jsx)(f,{})}),Object(j.jsx)(o.a,{path:"/tryOne",element:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{path:"/cart",element:Object(j.jsx)(S,{})})]})}),document.getElementById("root")),s()}},[[44,1,2]]]);
//# sourceMappingURL=main.b0c5f34e.chunk.js.map