(this.webpackJsonpmy_app_todo=this.webpackJsonpmy_app_todo||[]).push([[0],{15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c(9),a=c.n(n),i=c(8),r=c(3),s=c(2),l=c.n(s),b=c(0),u=function(t){var e=Object(o.useRef)(),c=Object(o.useState)(!1),n=Object(r.a)(c,2),a=n[0],i=n[1],s=Object(o.useState)(!1),u=Object(r.a)(s,2),j=u[0],d=u[1],m=Object(o.useState)(!1),f=Object(r.a)(m,2),_=f[0],O=f[1],x=Object(o.useState)(!1),h=Object(r.a)(x,2),p=h[0],v=h[1],y=Object(o.useState)(""),F=Object(r.a)(y,2),g=F[0],N=F[1],S=Object(o.useState)("default"),L=Object(r.a)(S,2),k=L[0],C=L[1];return Object(b.jsxs)("div",{className:l.a.form,children:[a&&Object(b.jsxs)("div",{className:l.a.colorboxcontainer,children:[Object(b.jsx)("div",{className:"".concat(l.a.colorchoosebox," ").concat(l.a.alist),onClick:function(){d(!0),v(!1),O(!1),N(1),C("#ff7707")},children:j&&g}),Object(b.jsx)("div",{className:"".concat(l.a.colorchoosebox," ").concat(l.a.blist),onClick:function(){O(!0),v(!1),d(!1),N(2),C("#f8b436")},children:_&&g}),Object(b.jsx)("div",{className:"".concat(l.a.colorchoosebox," ").concat(l.a.clist),onClick:function(){v(!0),O(!1),d(!1),N(3),C("#e9e2a4")},children:p&&g})]}),Object(b.jsxs)("form",{onSubmit:function(c){c.preventDefault();var o=e.current.value;if(0!==o.trim().length){var n=0;j&&(n=1),_&&(n=2),p&&(n=3),t.addlist(o,n),e.current.value=""}i(!1),v(!1),O(!1),d(!1),C("black")},children:[Object(b.jsx)("label",{className:l.a.label,htmlFor:"goal",children:"What you want to do"}),Object(b.jsx)("input",{ref:e,className:l.a.input,onChange:function(t){0!==t.target.value.trim().length?i(!0):i(!1)},id:"goal",type:"text",style:{color:k}}),a&&Object(b.jsx)("button",{type:"submit",className:l.a.button,children:"Add"})]})]})},j=c(6),d=c.n(j),m=function(t){var e=t.id,c=t.priority,o="#ff8053";1===c&&(o="#ff7707"),2===c&&(o="#f8b436"),3===c&&(o="#e9e2a4");return Object(b.jsx)("div",{style:{backgroundColor:o},children:Object(b.jsx)("p",{onClick:function(){t.removeList(e)},className:d.a["list-text"],children:t.name})},t.id)},f=function(t){var e=t.List.map((function(e){return Object(b.jsx)(m,{removeList:t.removeList,name:e.name,id:e.id,priority:e.priority},e.id)}));return Object(b.jsx)("div",{className:d.a["list-container"],children:e})};var _=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),c=e[0],n=e[1];return Object(b.jsxs)(o.Fragment,{children:[Object(b.jsx)(u,{addlist:function(t,e){n((function(c){return[].concat(Object(i.a)(c),[{id:Math.random(),name:t,priority:e}])}))}}),Object(b.jsx)(f,{removeList:function(t){n((function(e){return Object(i.a)(e).filter((function(e){return e.id!==t}))}))},List:c})]})};c(15);a.a.render(Object(b.jsx)("div",{children:Object(b.jsx)(_,{})}),document.getElementById("root"))},2:function(t,e,c){t.exports={form:"Form_form__3fTAK",label:"Form_label__aJP3i",input:"Form_input__3ESKH",button:"Form_button__28AS-",colorboxcontainer:"Form_colorboxcontainer__1to2R",colorchoosebox:"Form_colorchoosebox__L7XH8",alist:"Form_alist__2Bh_Y",blist:"Form_blist__35ver",clist:"Form_clist__28agp"}},6:function(t,e,c){t.exports={"list-container":"Listbox_list-container__1TGFn","list-text":"Listbox_list-text__2my29"}}},[[16,1,2]]]);
//# sourceMappingURL=main.bd2d0110.chunk.js.map