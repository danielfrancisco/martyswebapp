(this.webpackJsonpmartys=this.webpackJsonpmartys||[]).push([[0],{20:function(t,e,n){},42:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(30),i=n.n(a),r=n(32),o=n(4),s=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))},u=n(5),l=n(2);function j(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{id:"nav",children:[Object(l.jsx)("button",{id:"homebutton",onClick:function(){window.location.hash="/"},children:"Home"}),Object(l.jsx)("button",{id:"menubutton",onClick:function(){window.location.hash="/menu"},children:"Menu"}),Object(l.jsx)("button",{id:"aboutbutton",onClick:function(){window.location.hash="/about"},children:"About us"})]})})}n(20);var d=n(45);function b(t){var e=Object(c.useState)(0),n=Object(u.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){void 0!==t.coun&&i(t.coun)}),[t.coun]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{id:"cart",onClick:function(){window.location.hash="/cart"},children:[Object(l.jsx)("img",{alt:"",src:"https://media.istockphoto.com/vectors/shopping-cart-icon-vector-id1142859120?k=20&m=1142859120&s=170667a&w=0&h=mDJbGHOildt4Ip7TOmNt2IN9icVMyvd0_ByrqYhpAVA="}),Object(l.jsx)("p",{onClick:function(){window.location.hash="/cart"},children:a})]})})}var m=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(""),r=Object(u.a)(i,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){d.a.get("https://calm-lime-parrot-tam.cyclic.app/cart").then((function(t){s(t.data.coun)}))}),[]),Object(c.useEffect)((function(){d.a.get("https://calm-lime-parrot-tam.cyclic.app/").then((function(t){a(t.data[0].header)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(b,{coun:o}),Object(l.jsxs)("div",{id:"home",children:[Object(l.jsxs)("ul",{id:"hero",children:[Object(l.jsx)("p",{id:"header",children:n}),Object(l.jsx)("button",{onClick:function(){window.location.hash="/tryOne"},children:"Order Now"})]}),Object(l.jsx)("img",{src:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMj\r A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"burger"})]})]})};function p(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(c.useRef)();return Object(c.useEffect)((function(){d.a.get("https://calm-lime-parrot-tam.cyclic.app/about").then((function(t){a(t.data[0].paragraph)}))}),[]),Object(c.useEffect)((function(){i.current.innerHTML=n}),[n]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)("p",{id:"whowe",ref:i})]})}var h=n(8);var O=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(0),r=Object(u.a)(i,2),o=r[0],s=r[1],m=Object(c.useState)(""),p=Object(u.a)(m,1)[0],O=Object(c.useState)("none"),f=Object(u.a)(O,1)[0];return Object(c.useEffect)((function(){d.a.get("https://calm-lime-parrot-tam.cyclic.app/cart").then((function(t){for(var e in s(t.data.coun),t.data.items)for(var c in n)t.data.items[e].name===n[c].name&&(document.getElementById("b"+c).style.display="none",document.getElementById(c).style.display="inline")}))}),[n]),Object(c.useEffect)((function(){d.a.get("https://calm-lime-parrot-tam.cyclic.app/menu").then((function(t){var e=function(e){a((function(n){return[].concat(Object(h.a)(n),[t.data[e]])}))};for(var n in t.data)e(n)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(b,{coun:o}),Object(l.jsx)("div",{id:"menuItemsLe",children:n.map((function(t,e){var c="b"+e;return e+1<=n.length/2?Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{id:"name",children:t.name}),Object(l.jsx)("img",{alt:"",src:t.img}),Object(l.jsxs)("p",{children:["$",t.price]}),Object(l.jsx)("button",{id:c,className:"buttonBuy",style:{display:p},onClick:function(){var n=document.getElementById(c);n.id==="b"+String(e)&&(n.style.display="none");var a=document.getElementById(e);a.id===String(e)&&(a.style.display="inline"),s(String(parseInt(o)+1)),d.a.post("https://calm-lime-parrot-tam.cyclic.app/menu",{data:t})},children:"Add to cart"}),Object(l.jsx)("button",{id:e,className:"viewCartClass",style:{display:f},onClick:function(){window.location.hash="/cart"},children:"View in cart"})]},e):null}))}),Object(l.jsx)("div",{id:"menuItemsRi",children:n.map((function(t,e){var c="b"+e;return e+1>n.length/2?Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:t.name}),Object(l.jsx)("img",{alt:"",src:t.img}),Object(l.jsxs)("p",{children:["$",t.price]}),Object(l.jsx)("button",{id:c,className:"buttonBuy",style:{display:p},onClick:function(){var n=document.getElementById(c);n.id==="b"+String(e)&&(n.style.display="none");var a=document.getElementById(e);a.id===String(e)&&(a.style.display="inline"),s(String(parseInt(o)+1)),d.a.post("https://calm-lime-parrot-tam.cyclic.app/menu",{data:t})},children:"Add to cart"}),Object(l.jsx)("button",{id:e,className:"viewCartClass",style:{display:f},onClick:function(){window.location.hash="/cart"},children:"View in cart"})]},e):null}))})]})};var f=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("div",{id:"try",children:[Object(l.jsx)("p",{children:"Coming soon!"}),Object(l.jsx)("button",{onClick:function(){window.location.hash="/"},children:"Go back"})]})]})},x=n.p+"static/media/emptycart.f157d8a2.png",g=(n(42),n(31)),y=n.n(g);function v(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)([]),r=Object(u.a)(i,2),o=r[0],s=r[1],m=Object(c.useState)(""),p=Object(u.a)(m,2),O=p[0],f=p[1],g=Object(c.useState)(!1),v=Object(u.a)(g,2),w=v[0],C=v[1],k=Object(c.useRef)();return Object(c.useEffect)((function(){var t;n.length<1&&"number"===typeof(null===(t=w.data)||void 0===t?void 0:t.items.length)?k.current.style.display="block":k.current.style.display="none"}),[n,w]),Object(c.useEffect)((function(){d.a.get("https://calm-lime-parrot-tam.cyclic.app/cart").then((function(t){f(t.data.coun)}))}),[n]),Object(c.useEffect)((function(){d.a.get("https://calm-lime-parrot-tam.cyclic.app/cart").then((function(t){C(t),f(t.data.coun);var e=function(e){a((function(n){return[].concat(Object(h.a)(n),[t.data.items[e]])})),s((function(t){return[].concat(Object(h.a)(t),[1])}))};for(var n in t.data.items)e(n)}))}),[]),Object(c.useEffect)((function(){n.length<1&&o.length}),[n,o]),Object(c.useEffect)((function(){n.length<1&&o.length>0&&d.a.get("https://calm-lime-parrot-tam.cyclic.app/cart").then((function(t){C(t);var e=function(e){a((function(n){return[].concat(Object(h.a)(n),[t.data.items[e]])})),s((function(t){return[].concat(Object(h.a)(t),[0])}))};for(var n in t.data.items)e(n)}))}),[n,o]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(b,{coun:O}),Object(l.jsx)("img",{id:"emptyCart",alt:"  ",src:x,ref:k}),Object(l.jsx)("div",{id:"cartBag",children:n.map((function(t,e){return Object(l.jsxs)("div",{id:"itemsBag",children:[Object(l.jsx)("img",{alt:"img",id:"itemImg",src:t.img}),Object(l.jsx)("p",{children:t.name}),Object(l.jsx)("p",{children:t.amount}),Object(l.jsx)("button",{id:"removeOne",onClick:function(){!function(t){if(t.amount>1){var e,c=[],i=[];for(var r in n)n[r].name===t.name?(c.push(n[r]),c[0].amount=parseInt(c[0].amount)-1,e=r):i.push(n[r]);i.splice(e,0,c[0]),a(i),f((function(t){return t-1})),d.a.post("https://calm-lime-parrot-tam.cyclic.app/cart",{amountTem:c})}}(t)},children:"-"}),Object(l.jsx)("button",{id:"addOne",onClick:function(){!function(t){var e,c=[],i=[];for(var r in n)n[r].name===t.name?(c.push(n[r]),c[0].amount=parseInt(c[0].amount)+1,e=r):i.push(n[r]);i.splice(e,0,c[0]),a(i),f((function(t){return t+1})),d.a.post("https://calm-lime-parrot-tam.cyclic.app/cart",{amountTem:c})}(t)},children:"+"}),Object(l.jsx)("button",{id:"remove",onClick:function(){a([]),C(!1),d.a.post("https://calm-lime-parrot-tam.cyclic.app/cart",{item:t})},children:"remove"})]},y()())}))})]})}i.a.render(Object(l.jsx)(r.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(m,{})}),Object(l.jsx)(o.a,{path:"/menu",element:Object(l.jsx)(O,{})}),Object(l.jsx)(o.a,{path:"/about",element:Object(l.jsx)(p,{})}),Object(l.jsx)(o.a,{path:"/tryOne",element:Object(l.jsx)(f,{})}),Object(l.jsx)(o.a,{path:"/cart",element:Object(l.jsx)(v,{})})]})}),document.getElementById("root")),s()}},[[44,1,2]]]);
//# sourceMappingURL=main.061fd521.chunk.js.map