(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},37:function(e,t,n){e.exports=n(55)},42:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),l=n.n(c),o=(n(42),n(13),n(11));var i=function(){var e={color:"#333333",textDecoration:"none",paddingLeft:".25em",paddingRight:".25em",fontSize:".90em"};return r.a.createElement("nav",null,r.a.createElement(o.b,{style:{color:"#333333",textDecoration:"none"},to:"/Fortpanion"},r.a.createElement("h4",null,"Fortpanion")),r.a.createElement("ul",{className:"nav-links"},r.a.createElement(o.b,{style:e,to:"/Fortpanion"},r.a.createElement("li",null,"Home")),r.a.createElement(o.b,{style:e,to:"/Fortpanion/challenges"},r.a.createElement("li",null,"Challenges")),r.a.createElement(o.b,{style:e,to:"/Fortpanion/shop"},r.a.createElement("li",null,"Shop"))))},s=n(5),m=n.n(s),u=n(12),p=n(10);var f=function(){Object(a.useEffect)(function(){l()},[]);var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],l=function(){var e=Object(u.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-public-api.theapinetwork.com/prod09/store/get");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n.items),c(n.items);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"shop-container"},r.a.createElement("h3",null,"Daily Items"),r.a.createElement("div",{className:"shop-items-container"},n.map(function(e){return r.a.createElement("div",{key:e.itemid},r.a.createElement(o.b,{className:"shop-items-link",to:"/Fortpanion/shop/".concat(e.itemid)},r.a.createElement("img",{className:"shop-thumbnail",src:e.item.images.information,alt:e.name})))}))))},E=n(14),h=n(59),d=n(57);var v=function(e){var t=e.match;Object(a.useEffect)(function(){!function(){var e=Object(u.a)(m.a.mark(function e(){var n,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=".concat(t.params.id));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),o(a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t.params.id]);var n=Object(a.useState)({images:{featured:{}},ratings:{}}),c=Object(p.a)(n,2),l=c[0],o=c[1];return r.a.createElement("div",{className:"item-detail-container"},r.a.createElement(h.a,{className:"text-center"},r.a.createElement(h.a.Header,null,r.a.createElement("h3",null,l.name)),r.a.createElement(h.a.Img,{variant:"top",src:l.images.transparent}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,l.description),r.a.createElement(h.a.Text,null,r.a.createElement(d.a,{variant:"flush"},r.a.createElement(d.a.Item,null,"Cost: ",l.cost),r.a.createElement(d.a.Item,null,"Item Type: ",l.type),r.a.createElement(d.a.Item,null,"Obtained: ",l.obtained),r.a.createElement(d.a.Item,null,"Obtained Type: ",l.obtained_type),r.a.createElement(d.a.Item,null,"Ratings: ",l.ratings.avgStars),r.a.createElement(d.a.Item,null,"Number of Votes: ",l.ratings.numberVotes)))),r.a.createElement(h.a.Footer,{className:"text-muted"},"Total Points: ",l.ratings.totalPoints)))};var b=function(){Object(a.useEffect)(function(){f()},[]);var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),o=Object(p.a)(l,2),i=o[0],s=o[1],f=function(){var e=Object(u.a)(m.a.mark(function e(){var t,n,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-public-api.theapinetwork.com/prod09/challenges/get");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),c(n),a=Object.values(n.challenges)[Object.values(n.challenges).length-1],s(a),console.log("thisweek",a);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"challenges-container"},r.a.createElement("h1",null,"Current Week Challenges"),r.a.createElement("p",null,"Current Week: ",n.currentweek),r.a.createElement("p",null,"Season: ",n.season),i.map(function(e){return r.a.createElement("div",{key:e.identifier},r.a.createElement("h4",null,e.challenge),r.a.createElement("hr",null),r.a.createElement("p",null,"Difficulty: ",e.difficulty),r.a.createElement("p",null,"Stars: ",e.stars),r.a.createElement("p",null,"Total: ",e.total))}))};var g=function(){Object(a.useEffect)(function(){l()},[]);var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],l=function(){var e=Object(u.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.items);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h3",null,"Upcoming Items"),r.a.createElement("div",{className:"shop-items-container"},n.map(function(e){return r.a.createElement("div",{key:e.itemid},r.a.createElement(o.b,{className:"shop-items-link",to:"/upcoming/".concat(e.itemid)},r.a.createElement("img",{className:"shop-thumbnail",src:e.item.images.information,alt:e.name})))})))},w=n(58),j=n(56);var k=function(){Object(a.useEffect)(function(){l()},[]);var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],l=function(){var e=Object(u.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n.entries),c(n.entries);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),o=n.map(function(e){return r.a.createElement(w.a.Item,{key:e.title},r.a.createElement(j.a,{className:"d-block w-100",src:e.image,alt:"images",fluid:!0}),r.a.createElement(w.a.Caption,null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.body),r.a.createElement("p",null,new Date(1e3*e.time).toLocaleDateString())))});return r.a.createElement("div",{className:"home-slider"},r.a.createElement(w.a,{fade:!0},o))};var O=function(){return r.a.createElement("footer",null,"\xa9 2019. All Rights Reserved.")};var y=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(k,null)),r.a.createElement("div",null,r.a.createElement(g,null)),r.a.createElement(O,null))};var x=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/Fortpanion",exact:!0,component:y}),r.a.createElement(E.a,{path:"/Fortpanion/shop",exact:!0,component:f}),r.a.createElement(E.a,{path:"/Fortpanion/shop/:id",component:v}),r.a.createElement(E.a,{path:"/Fortpanion/upcoming/:id",component:v}),r.a.createElement(E.a,{path:"/Fortpanion/challenges",component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.5bb8d9c6.chunk.js.map