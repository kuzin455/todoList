(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),o=n(9),r=n.n(o),c=n(6),i=n(7),s=n(2),l=n(3),u=n(5),d=n(4),b=(n(15),n(0)),f=function(t){var e=t.toDo,n=t.done;return Object(b.jsxs)("div",{className:"app-header d-flex",children:[Object(b.jsx)("h1",{children:"Todo List"}),Object(b.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})},j=(n(17),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={term:""},t.onSearch=function(e){var n=e.target.value;t.setState({term:n}),t.props.onSearch(n)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"type to search",value:this.state.term,onChange:this.onSearch})}}]),n}(a.Component)),h=j,m=n(10),p=(n(18),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDone,a=t.onImportant,o="todo-list-item";return t.done&&(o+=" done"),t.important&&(o+=" important"),Object(b.jsxs)("span",{className:o,children:[Object(b.jsx)("span",{className:"todo-list-item-label  ",onClick:n,children:e}),Object(b.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right ",onClick:a,children:Object(b.jsx)("i",{className:"fa fa-exclamation"})}),Object(b.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:this.props.onDelet,children:Object(b.jsx)("i",{className:"fa fa-trash-o "})})]})}}]),n}(a.Component)),O=p,v=(n(19),["id"]),x=function(t){var e=t.todos,n=t.onDelet,a=t.onDone,o=t.onImportant,r=e.map((function(t){var e=t.id,r=Object(m.a)(t,v);return Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(O,Object(c.a)(Object(c.a)({},r),{},{onDelet:function(){n(e)},onDone:function(){a(e)},onImportant:function(){o(e)}}))},e)}));return Object(b.jsx)("ul",{className:"list-group todo-list",children:r})},y=(n(20),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilter,a=this.buttons.map((function(t){var a=t.name,o=t.label,r=e===a?"btn-info":"btn-outline-secondary";return Object(b.jsx)("button",{type:"button",className:"btn ".concat(r),onClick:function(){return n(a)},children:o},a)}));return Object(b.jsx)("div",{className:"btn-group",children:a})}}]),n}(a.Component)),D=y,I=(n(21),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onItemAdded(t.state.label),t.setState({label:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"container",onSubmit:this.onSubmit,children:[Object(b.jsx)("input",{type:"text",className:"form-control add-input",onChange:this.onLabelChange,placeholder:"add task",value:this.state.label}),Object(b.jsx)("button",{className:"btn btn-outline-secondary ",children:"Add item"})]})}}]),n}(a.Component)),g=(n(22),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).maxId=100,t.state={todoData:[t.createItem("Make Awesome App"),t.createItem("Have a lunch"),t.createItem("text")],term:"",filter:"all"},t.deletItem=function(e){t.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e}));return console.log(a),{todoData:[].concat(Object(i.a)(n.slice(0,a)),Object(i.a)(n.slice(a+1)))}}))},t.addItem=function(e){var n=t.createItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(i.a)(e),[n])}}))},t.onDone=function(e){t.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e})),o=n[a],r=Object(c.a)(Object(c.a)({},o),{},{done:!o.done});return{todoData:[].concat(Object(i.a)(n.slice(0,a)),[r],Object(i.a)(n.slice(a+1)))}}))},t.onImportant=function(e){t.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e})),o=n[a],r=Object(c.a)(Object(c.a)({},o),{},{important:!o.important});return{todoData:[].concat(Object(i.a)(n.slice(0,a)),[r],Object(i.a)(n.slice(a+1)))}}))},t.onSearch=function(e){t.setState({term:e})},t.onFilter=function(e){t.setState({filter:e})},t}return Object(l.a)(n,[{key:"createItem",value:function(t){return{label:t,important:!1,id:this.maxId++,done:!1}}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}},{key:"filter",value:function(t,e){switch(e){case"all":default:return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}))}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,a=t.filter,o=this.filter(this.search(e,n),a),r=e.filter((function(t){return t.done})).length,c=e.length-r;return Object(b.jsxs)("div",{className:"todo-app",children:[Object(b.jsx)(f,{toDo:c,done:r}),Object(b.jsxs)("div",{className:"top-panel d-flex",children:[Object(b.jsx)(h,{onSearch:this.onSearch}),Object(b.jsx)(D,{filter:a,onFilter:this.onFilter})]}),Object(b.jsx)(x,{todos:o,onDelet:this.deletItem,onDone:this.onDone,onImportant:this.onImportant}),Object(b.jsx)(I,{onItemAdded:this.addItem})]})}}]),n}(a.Component)),S=g;r.a.render(Object(b.jsx)(S,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.f67d60aa.chunk.js.map