(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{17:function(e,t,l){},23:function(e,t,l){"use strict";l.r(t);var c=l(0),r=l.n(c),a=l(3),s=l.n(a),i=(l(17),l(2)),o=l(5),n=l(9),d=l(25),b=l(8),u=l(7),m=l.n(u),j=l(1);function f(e){var t=e.add,l=Object(c.useCallback)((function(e){if("Enter"===e.code){var l=e.target.value.trim();""!==l&&t(l),e.target.value=""}}),[t]);return Object(j.jsxs)("div",{className:"flex flex-row items-center px-6 rounded",style:{backgroundColor:"var(--item__bg)",height:"4rem"},children:[Object(j.jsx)("div",{className:"h-6 w-6 border border-solid rounded-full mr-6 flex-shrink-0 flex-grow-0",style:{borderColor:"#383b57"}}),Object(j.jsx)("input",{className:"flex-grow flex-shrink bg-transparent border-none outline-none",placeholder:"Create a new todo",style:{color:"var(--item__text-color)",caretColor:"#5c77b0"},onKeyUp:l})]})}var h=l.p+"static/media/icon-cross.6ee81d30.svg",x=l.p+"static/media/icon-check.a8fb15d0.svg";function g(e){var t=e.todo,l=e.remove,c=e.onClick;return Object(j.jsxs)("div",{className:m()("flex flex-row items-center px-6 todo cursor-pointer",{completed:t.completed}),style:{height:"4rem"},onClick:function(){return c(t)},children:[Object(j.jsx)("div",{className:"h-6 w-6 rounded-full mr-6 flex-shrink-0 flex-grow-0 todo__checkbox",children:Object(j.jsx)("div",{className:"h-full w-full rounded-full flex justify-center items-center",children:Object(j.jsx)("img",{src:x,alt:"icon-check.svg",className:"hidden"})})}),Object(j.jsx)("div",{className:"flex-grow flex-shrink todo__label",children:t.label}),Object(j.jsx)("img",{src:h,alt:"icon-cross.svg",className:"todo__icon-right app__lg-invisible app__sm-visible",onClick:function(e){e.stopPropagation(),l(t.id)}})]})}var p=[{label:"All",value:null},{label:"Active",value:!1},{label:"Completed",value:!0}];function v(){var e=Object(c.useState)([{id:Object(d.a)(),label:"Lorem ipsum dolor sit amet",completed:!0},{id:Object(d.a)(),label:"In nisl nisi scelerisque",completed:!1},{id:Object(d.a)(),label:"Faucibus purus in massa tempor",completed:!1},{id:Object(d.a)(),label:"Phasellus faucibus",completed:!1},{id:Object(d.a)(),label:"Neque aliquam vestibulum",completed:!1},{id:Object(d.a)(),label:"Risus at ultrices mi",completed:!1}]),t=Object(n.a)(e,2),l=t[0],r=t[1],a=Object(c.useState)(null),s=Object(n.a)(a,2),u=s[0],h=s[1],x=Object(c.useCallback)((function(e){var t={id:Object(d.a)(),label:e,active:!1};r([].concat(Object(o.a)(l),[t]))}),[l]),v=Object(c.useCallback)((function(e){var t=l.findIndex((function(t){return t.id===e}));if(-1!==t){var c=Object(o.a)(l);c.splice(t,1),r(c)}}),[l]),O=Object(c.useCallback)((function(e){var t=l.findIndex((function(t){return t.id===e.id}));if(-1!==t){var c=Object(o.a)(l);c[t]=Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}),r(c)}}),[l]),k=Object(c.useCallback)((function(){var e=l.filter((function(e){return!e.completed}));r(e)}),[l]),w=Object(c.useCallback)((function(){document.body.classList.contains("theme--light")?(document.body.classList.add("theme--dark"),document.body.classList.remove("theme--light")):(document.body.classList.add("theme--light"),document.body.classList.remove("theme--dark"))}),[]);Object(c.useEffect)((function(){"matchMedia"in window&&(window.matchMedia("(prefers-color-scheme: dark)").matches?(document.body.classList.add("theme--dark"),document.body.classList.remove("theme--light")):window.matchMedia("(prefers-color-scheme: light)").matches&&(document.body.classList.add("theme--light"),document.body.classList.remove("theme--dark")))}),[]);var y=Object(c.useCallback)((function(e){var t=Object(o.a)(l),c=t.splice(e.source.index,1),a=Object(n.a)(c,1)[0];t.splice(e.destination.index,0,a),r(t)}),[l]),N=Object(c.useMemo)((function(){return l.filter((function(e){return!e.completed})).length}),[l]),C=Object(j.jsx)("div",{className:"flex flex-row gap-4 font-bold text-base",style:{color:"var(--filter-color)"},children:p.map((function(e,t){return Object(j.jsx)("div",{className:"cursor-pointer filter",onClick:function(){return h(e.value)},style:u===e.value?{color:"#446fd4"}:{},children:e.label},t)}))});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"absolute top-0 left-0 h-full w-full flex flex-col",children:[Object(j.jsx)("div",{style:{height:"30%",backgroundImage:"var(--bg-image)"},className:"bg-no-repeat bg-center bg-cover"}),Object(j.jsx)("div",{className:"flex-shrink flex-grow",style:{backgroundColor:"var(--bg)"}})]}),Object(j.jsx)("div",{className:"absolute top-0 left-0 h-full w-full",children:Object(j.jsxs)("div",{className:"mx-auto h-full flex flex-col app__container",children:[Object(j.jsxs)("div",{className:"flex flex-col",style:{height:"calc(30% - 3.5rem)"},children:[Object(j.jsxs)("div",{className:"flex flex-row justify-between items-center flex-shrink flex-grow",children:[Object(j.jsx)("h1",{className:"text-white m-0",style:{letterSpacing:"1rem"},children:"TODO"}),Object(j.jsx)("div",{className:"cursor-pointer",style:{backgroundImage:"var(--theme-icon)",height:"26px",width:"26px"},onClick:w})]}),Object(j.jsx)("div",{className:"flex-shrink-0 flex-grow-0",children:Object(j.jsx)(f,{add:x})})]}),Object(j.jsxs)("div",{className:"rounded mt-6 app__item-bg-color",style:{boxShadow:"var(--list-shadow)"},children:[Object(j.jsx)(b.a,{onDragEnd:y,children:Object(j.jsx)(b.c,{droppableId:"items",children:function(e){return Object(j.jsxs)("div",Object(i.a)(Object(i.a)({},e.droppableProps),{},{ref:e.innerRef,children:[l.filter((function(e){return null===u||u===e.completed})).map((function(e,t){return Object(j.jsx)(b.b,{draggableId:e.id,index:t,children:function(t,l){return Object(j.jsx)("div",Object(i.a)(Object(i.a)(Object(i.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{className:m()("border-solid",{"border-l-0":!l.isDragging,"border-t-0":!l.isDragging,"border-r-0":!l.isDragging,"border-b":!l.isDragging,border:l.isDragging,rounded:l.isDragging,"app__item-bg-color":l.isDragging}),style:Object(i.a)(Object(i.a)({},t.draggableProps.style),{},{borderColor:"var(--divider-color)"}),children:Object(j.jsx)(g,{todo:e,remove:v,onClick:O})}))}},e.id)})),e.placeholder]}))}})}),Object(j.jsxs)("div",{className:"flex flex-row justify-between p-6 text-base",style:{color:"var(--filter-color)"},children:[Object(j.jsxs)("div",{children:[N," items left"]}),Object(j.jsx)("div",{className:"app__filter-desktop",children:C}),Object(j.jsx)("div",{className:"cursor-pointer filter",onClick:function(){return k()},children:"Clear Completed"})]})]}),Object(j.jsx)("div",{className:"mt-6 app__filter-mobile rounded hidden justify-center items-center",style:{backgroundColor:"var(--item__bg)",boxShadow:"var(--list-shadow)",height:"4rem"},children:C}),Object(j.jsx)("div",{className:"text-center my-8 text-base flex-shrink-0 flex-grow-0",style:{color:"var(--filter-color)"},children:"Drag and drop to reorder list"})]})})]})}var O=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,26)).then((function(t){var l=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;l(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.128998cb.chunk.js.map