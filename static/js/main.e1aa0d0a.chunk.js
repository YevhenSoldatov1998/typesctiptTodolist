(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(178)},132:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),s=(a(132),a(46)),i=(a(36),a(19)),d=a(204),u=a(213),l=a(199),T=a(200),k=a(217),f=a(205),m=a(106),p=a.n(m),h=function(e){var t=e.addTodo,a=e.forTasks,r=Object(n.useState)(!1),c=Object(i.a)(r,2),s=c[0],m=c[1],h=Object(n.useState)(""),E=Object(i.a)(h,2),b=E[0],O=E[1],g=Object(n.useState)(!1),v=Object(i.a)(g,2),L=v[0],j=v[1],I=Object(l.a)(function(e){return Object(T.a)({iconAdd:{transform:"translateY(10px) translateX(10px)"},fab:{margin:"0 auto"}})})();return o.a.createElement("div",{className:a?"headerItemForm headerItemFormTasks":"headerItemForm "},L?o.a.createElement("form",{className:"todoList-newTaskForm"},o.a.createElement(u.a,{error:s,id:"standard-required",type:"text",label:"New item name",onChange:function(e){var t=e.target.value;t&&m(!1),O(t)},value:b}),o.a.createElement(d.a,{onClick:function(){O(""),""===b?m(!0):(m(!1),t(b))},className:I.iconAdd,variant:"contained",color:"primary"},"Add")):o.a.createElement(k.a,{title:"Add","aria-label":"add",onClick:function(){j(!0)}},o.a.createElement(f.a,{color:a?"primary":"secondary",size:a?"medium":"large"},o.a.createElement(p.a,null))))},E=a(117),b=a(206),O=a(208),g=a(215),v=a(209),L=a(207),j=a(107),I=a.n(j),_=a(214),S=a(76),D=function(e){var t=e.anchorEl,a=e.open,n=e.handlePopoverClose,r=e.children,c=Object(l.a)(function(e){return Object(T.a)({popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}})})();return o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{id:"mouse-over-popover",className:c.popover,open:a,classes:{paper:c.paper},anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:n,disableRestoreFocus:!0},o.a.createElement(S.a,null,r)))},C=function(e){var t=e.deleteTask,a=e.updateTaskThunk,r=(e.changeIsDone,e.changeTitleTask,e.todoId),c=e.task,s=Object(E.a)(e,["deleteTask","updateTaskThunk","changeIsDone","changeTitleTask","todoId","task"]),d=Object(n.useState)(!1),l=Object(i.a)(d,2),T=l[0],k=l[1],f=Object(n.useState)(c.title),m=Object(i.a)(f,2),p=m[0],h=m[1],j=o.a.useState(null),_=Object(i.a)(j,2),S=_[0],C=_[1],w=c.status?"todoList-task done":"todoList-task",A=function(){C(null)},y=Boolean(S);return o.a.createElement("div",{className:w},o.a.createElement(b.a,{role:void 0,dense:!0,button:!0},o.a.createElement(g.a,{edge:"start",checked:c.status,onChange:function(e){var t=e.target.checked;a(r,c._id,{status:t})},tabIndex:-1,disableRipple:!0}),T?o.a.createElement(u.a,{type:"text",label:"New item name",onBlur:function(){a(r,c._id,{title:p}),k(!1)},onChange:function(e){h(e.currentTarget.value)},autoFocus:!0,value:p}):o.a.createElement(O.a,{primary:"".concat(s.numberTask,") ").concat(c.title),onClick:function(){k(!0)}}),o.a.createElement(v.a,null,o.a.createElement(D,{anchorEl:S,open:y,handlePopoverClose:A},"delete taks"),o.a.createElement(L.a,{onClick:function(){t(r,c._id)},onMouseEnter:function(e){C(e.currentTarget)},onMouseLeave:A,edge:"end","aria-label":"comments"},o.a.createElement(I.a,null)))))},w=a(203),A=function(e){var t=e.tasks,a=e.deleteTask,n=e.updateTaskThunk,r=e.changeIsDone,c=e.changeTitleTask,s=e.todoId,i=Object(l.a)(function(e){return Object(T.a)({root:{width:"100%",padding:0,maxWidth:360,backgroundColor:e.palette.background.paper}})})();return o.a.createElement("div",{className:"todoList-tasks"},t&&t.map(function(e,t){return o.a.createElement(w.a,{className:i.root,key:e._id},o.a.createElement(C,{task:e,numberTask:t+1,changeIsDone:r,todoId:s,changeTitleTask:c,deleteTask:a,updateTaskThunk:n}))}))},y=a(211),N=a(212),F=a(108),x=a.n(F),V=a(109),K=a.n(V),R=a(110),M=a.n(R),B=a(210),G=function(e){var t=Object(l.a)({root:{width:"100%"}})(),a=o.a.useState(0),n=Object(i.a)(a,2),r=n[0],c=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,null),o.a.createElement("div",{className:"todoList-footer"},o.a.createElement(y.a,{value:r,onChange:function(e,t){c(t)},showLabels:!0,className:t.root},o.a.createElement(N.a,{onClick:function(){return e.changeFilter(e.todoId,"All")},label:"All",icon:o.a.createElement(x.a,null)}),o.a.createElement(N.a,{onClick:function(){return e.changeFilter(e.todoId,"Completed")},label:"Completed",icon:o.a.createElement(K.a,null)}),o.a.createElement(N.a,{onClick:function(){return e.changeFilter(e.todoId,"Active")},label:"Active",icon:o.a.createElement(M.a,null)}))))},H=a(113),P=a.n(H),z=a(111),X=a.n(z),J=function(e){e.title;var t=e.getTaskThunk,a=e.addTaskThunk,r=e.changeIsDone,c=e.deleteTodoListThunk,s=e.tasks,d=e.filterValue,u=e.changeTitleTask,l=e.changeFilter,k=e.deleteTaskThunk,f=e.todoId,m=e.updateTaskThunk;Object(n.useEffect)(function(){t(f)},[]);var p=o.a.useState(null),E=Object(i.a)(p,2),b=E[0],O=E[1],g=function(){O(null)},v=Boolean(b),L=X()(Object(T.a)({todoDelete:{position:"absolute",right:5,top:5}}))();return o.a.createElement("div",{className:"todoList"},o.a.createElement("div",{className:"todoList-header"},o.a.createElement(D,{anchorEl:b,open:v,handlePopoverClose:g},"delete todo"),o.a.createElement(P.a,{onMouseEnter:function(e){O(e.currentTarget)},onMouseLeave:g,onClick:function(){c(f)},className:L.todoDelete}),o.a.createElement("span",null,o.a.createElement(h,{forTasks:!0,addTodo:function(e){a(f,e)}}))),o.a.createElement(A,{tasks:s&&s.filter(function(e){return"All"===d?e:"Completed"===d?e.status:"Active"===d?!e.status:void 0}),todoId:f,changeIsDone:r,changeTitleTask:u,deleteTask:k,updateTaskThunk:m}),o.a.createElement(G,{todoId:f,changeFilter:l,filterValue:d}))},U=a(23),q=a(72),W=a(75),Y=a(11),Q=a(52),Z=a.n(Q),$=a(84),ee=a(115),te=a.n(ee).a.create({baseURL:"http://localhost:3001/"}),ae=function(){return te.get("todo-lists").then(function(e){return e.data})},ne=function(e){return te.delete("todo-lists/".concat(e))},oe=function(e){return te.post("todo-lists",{title:e})},re=function(e){return te.get("todo-lists/".concat(e,"/tasks"))},ce=function(e,t){return te.post("todo-lists/".concat(e,"/tasks"),{title:t}).then(function(e){return e.data})},se=function(e,t){return te.delete("todo-lists/".concat(e,"/tasks/").concat(t))},ie=function(e,t,a){return te.put("todo-lists/".concat(e,"/tasks/").concat(t),Object(Y.a)({},a))},de=function(e,t){return{type:"todo-reducer/ADD_TASK",todoListId:e,item:t}},ue=function(e){return{type:"todo-reducer/DELETE_TODO_LIST",todoId:e}},le=function(e){return function(t){re(e).then(function(a){t(function(e,t){return{type:"todo-reducer/SET_TASKS",tasks:e,todoListId:t}}(a.data.items,e))})}},Te={todoLists:[]},ke=a(202),fe=Object(U.d)(Object(q.b)(function(e){return{todoLists:e.todo.todoLists}},{deleteTodoList:ue,changeIsDone:function(e,t,a){return{type:"todo-reducer/CHANGE_IS_DONE",todoId:e,taskId:t,value:a}},changeTitleTask:function(e,t,a){return{type:"todo-reducer/CHANGE_TITLE_TASK",todoId:e,taskId:t,body:a}},changeFilter:function(e,t){return{type:"todo-reducer/CHANGE_FILTER",todoId:e,value:t}},getTodoListsThunk:function(){return function(){var e=Object($.a)(Z.a.mark(function e(t){var a;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:a=e.sent,t({type:"todo-reducer/SET_TODO_LISTS",todoLists:a.items});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},deleteTodoListThunk:function(e){return function(t){ne(e).then(function(a){0===a.data.resultCode?t(ue(e)):alert("error")})}},addTodoListThunk:function(e){return function(t){oe(e).then(function(e){if(0===e.data.resultCode){var a=Object(Y.a)({},e.data.data.item,{filterValue:"All"});t({type:"todo-reducer/ADD_TODO_LIST",newTodo:a})}})}},getTaskThunk:le,addTaskThunk:function(e,t){return function(){var a=Object($.a)(Z.a.mark(function a(n){var o;return Z.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ce(e,t);case 2:0===(o=a.sent).resultCode&&n(de(e,o.item));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},deleteTaskThunk:function(e,t){return function(a){se(e,t).then(function(n){0===n.data.resultCode?a(function(e,t){return{type:"todo-reducer/DELETE_TASK",todoListId:e,taskId:t}}(e,t)):console.error("try delete task failed")})}},updateTaskThunk:function(e,t,a){return function(n){ie(e,t,a).then(function(t){0===t.data.resultCode&&n(le(e))})}}}))(function(e){var t=e.addTodoListThunk,a=e.todoLists,r=e.changeIsDone,c=e.changeTitleTask,i=e.deleteTodoListThunk,d=e.changeFilter,u=e.getTodoListsThunk,k=e.addTaskThunk,f=e.getTaskThunk,m=e.deleteTaskThunk,p=e.updateTaskThunk;Object(n.useEffect)(function(){u()},[]);var E=Object(l.a)(function(e){var t;return Object(T.a)({title:{position:"absolute",top:-30,opacity:.3,left:0,width:"100%"},paper:(t={position:"relative",padding:e.spacing(1),margin:e.spacing(2),marginTop:50,width:"calc(25% - ".concat(e.spacing(4),"px)")},Object(s.a)(t,e.breakpoints.down("md"),{padding:e.spacing(1),margin:e.spacing(1),width:"calc(33% - ".concat(e.spacing(2),"px)")}),Object(s.a)(t,e.breakpoints.down("sm"),{width:"calc(50% - ".concat(e.spacing(2),"px)")}),Object(s.a)(t,e.breakpoints.down("xs"),{width:300}),t)})})();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(h,{forTasks:!1,addTodo:function(e){t(e)}})),o.a.createElement("div",{className:"App"},a.map(function(e){return o.a.createElement(ke.a,{className:E.paper,elevation:3},o.a.createElement(S.a,{variant:"h6",className:E.title},e.title),o.a.createElement(J,{todoId:e._id,title:e.title,key:e._id,tasks:e.tasks,filterValue:e.filterValue,deleteTaskThunk:m,changeIsDone:r,changeTitleTask:c,deleteTodoListThunk:i,changeFilter:d,getTaskThunk:f,addTaskThunk:k,updateTaskThunk:p}))})))}),me=a(116),pe=Object(U.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todo-reducer/SET_TODO_LISTS":return Object(Y.a)({},e,{todoLists:t.todoLists.map(function(e){return Object(Y.a)({},e,{filterValue:"All"})})});case"todo-reducer/ADD_TODO_LIST":var a=Object(Y.a)({},t.newTodo);return Object(Y.a)({},e,{todoLists:[].concat(Object(W.a)(e.todoLists),[a])});case"todo-reducer/DELETE_TODO_LIST":return Object(Y.a)({},e,{todoLists:e.todoLists.filter(function(e){return e._id!==t.todoId})});case"todo-reducer/ADD_TASK":return Object(Y.a)({},e,{todoLists:e.todoLists.map(function(e){return e._id===t.todoListId?Object(Y.a)({},e,{tasks:[].concat(Object(W.a)(e.tasks),[t.item])}):Object(Y.a)({},e)})});case"todo-reducer/SET_TASKS":return Object(Y.a)({},e,{todoLists:e.todoLists.map(function(e){return e._id===t.todoListId?Object(Y.a)({},e,{tasks:Object(W.a)(t.tasks)}):e})});case"todo-reducer/DELETE_TASK":return Object(Y.a)({},e,{todoLists:e.todoLists.map(function(e){return e._id===t.todoListId?Object(Y.a)({},e,{tasks:e.tasks.filter(function(e){return e._id!==t.taskId})}):Object(Y.a)({},e)})});case"todo-reducer/CHANGE_FILTER":return Object(Y.a)({},e,{todoLists:e.todoLists.map(function(e){return e._id===t.todoId?Object(Y.a)({},e,{filterValue:t.value}):Object(Y.a)({},e)})});default:return e}}}),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,Ee=Object(U.e)(pe,he(Object(U.a)(me.a)));c.a.render(o.a.createElement(q.a,{store:Ee},o.a.createElement(fe,null)),document.getElementById("root"))},36:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.e1aa0d0a.chunk.js.map