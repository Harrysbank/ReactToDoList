(this.webpackJsonpmy_app_todo=this.webpackJsonpmy_app_todo||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),i=n.n(r),o=n(8),a=n(9),s=n(5),u=n.n(s),l=n(0),j=function(t){var e=Object(c.useRef)();return Object(l.jsx)("div",{className:u.a.form,children:Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),console.log(n.target),console.log(e.current.value);var c=e.current.value;0!==c.trim().length&&(t.addlist(c),e.current.value="")},children:[Object(l.jsx)("label",{htmlFor:"goal",children:"What you want to do"}),Object(l.jsx)("input",{ref:e,className:u.a.input,id:"goal",type:"text"}),Object(l.jsx)("button",{className:u.a.button,type:"submit",children:"Add this"})]})})},d=n(4),b=n.n(d),m=function(t){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:b.a["list-text"],children:t.name})},t.id)},x=function(t){var e=t.List.map((function(t){return Object(l.jsx)(m,{name:t.name},t.id)}));return Object(l.jsx)("div",{className:b.a["list-container"],children:e})};var f=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1];return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)(j,{addlist:function(t){r((function(e){return[].concat(Object(o.a)(e),[{id:Math.random(),name:t}])}))}}),Object(l.jsx)(x,{List:n})]})};n(15);i.a.render(Object(l.jsx)("div",{children:Object(l.jsx)(f,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={"list-container":"Listbox_list-container__1TGFn","list-text":"Listbox_list-text__2my29"}},5:function(t,e,n){t.exports={form:"Form_form__3fTAK",input:"Form_input__3ESKH",button:"Form_button__28AS-"}}},[[16,1,2]]]);
//# sourceMappingURL=main.7780bb65.chunk.js.map