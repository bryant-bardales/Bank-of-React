(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{43:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a.n(c),r=a(35),s=a.n(r),o=a(16),u=a.n(o),d=a(20),b=a(9),j=a(4),l=a(5),h=a(13),p=a(7),m=a(6),O=(a(43),a(8)),x=a(2),v=a(23),f=a.n(v),g=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("p",{children:["Balance: $",this.props.accountBalance]})})}}]),a}(c.Component),C=a.p+"static/media/money.38e1abf3.png",S=(a(62),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=Number(this.props.accountBalance).toFixed(2);return Object(n.jsxs)("div",{className:"home-container",children:[Object(n.jsxs)("div",{className:"title",children:["Bank of React",Object(n.jsx)("p",{children:"By: Karim Nekzad, Damir Kamalov, Mohammed J. Hossain"})]}),Object(n.jsxs)("div",{className:"route-link",children:[Object(n.jsx)(O.b,{to:"/userProfile",children:"User Profile"}),Object(n.jsx)(O.b,{to:"/login",children:"Login"}),Object(n.jsx)(O.b,{to:"/debits",children:"Debit"}),Object(n.jsx)(O.b,{to:"/Credit",children:"Credit"})]}),Object(n.jsx)("img",{src:C,alt:"Bank Icon",height:"380px"}),Object(n.jsx)("div",{className:"balance",children:Object(n.jsx)(g,{accountBalance:e})})]})}}]),a}(c.Component)),k=a.p+"static/media/user.c2876ea8.png",B=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:k,alt:"User Profile Icon"}),Object(n.jsx)("h1",{children:"User Profile"}),Object(n.jsxs)("div",{children:["Username: ",this.props.username]}),Object(n.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(n.jsx)(O.b,{to:"/",children:"Return Home"})]})}}]),a}(c.Component),y=a.p+"static/media/login.770ba34c.png",w=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=Object(b.a)({},e.state.user),n=t.target.name,c=t.target.value;a[n]=c,e.setState({user:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(l.a)(a,[{key:"render",value:function(){return this.state.redirect?Object(n.jsx)(x.a,{to:"/userProfile"}):Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:y,alt:"login icon"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(n.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password"})]}),Object(n.jsx)("button",{children:"Log In"})]})]})}}]),a}(c.Component),N=a(19),D=a(17),F=(a(68),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){console.log("render debits");var e=this.props,t=e.amount,a=e.date,c=e.description,i=e.id;return Object(n.jsx)("div",{className:"data-container",children:Object(n.jsxs)("div",{className:"display-data",children:[Object(n.jsx)("div",{children:Object(n.jsxs)("p",{children:["Amount: $",t," "]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("p",{children:["Date: ",a," "]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("p",{children:["Description: ",c," "]})}),Object(n.jsx)("div",{className:"id",children:Object(n.jsxs)("p",{children:["id: ",i," "]})})]})})}}]),a}(c.Component)),I=(a(69),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={debit:n.props.debit,temp:{amount:0,date:"",description:"",id:""},viewBalance:!1},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.submitForm=n.submitForm.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState({temp:Object(b.a)(Object(b.a)({},this.state.temp),{},Object(D.a)({},e.target.name,e.target.value))})}},{key:"submitForm",value:function(){var e=this;if(0!==this.state.temp.amount&&""!==this.state.temp.amount){var t="".concat(new Date);this.setState({temp:Object(b.a)(Object(b.a)({},this.state.temp),{},{date:t,id:parseInt(89999*Math.random()+1e4)})}),setTimeout((function(){var t=Object(N.a)(e.state.debit);t.push(e.state.temp),e.setState({debit:t}),e.props.updateDebitState(t)}),100)}else alert("Please enter an amount")}},{key:"render",value:function(){var e=this;console.log("render debits");var t=Number(this.props.accountBalance).toFixed(2);return Object(n.jsxs)("div",{children:[Object(n.jsx)(O.b,{to:"/",children:"Return Home"}),Object(n.jsx)("br",{}),Object(n.jsx)(O.b,{to:"/Credit",children:"View Credit"}),Object(n.jsx)("h1",{children:"Debit Info"}),Object(n.jsx)("h3",{children:"Add Debit"}),Object(n.jsxs)("div",{className:"view-balance",children:[Object(n.jsx)("button",{onClick:function(){return e.setState({viewBalance:!e.state.viewBalance})},children:"View Balance"}),!0===this.state.viewBalance?Object(n.jsx)(g,{accountBalance:t}):Object(n.jsx)("span",{})]}),Object(n.jsxs)("form",{onSubmit:this.handleChange,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"",children:"Amount"}),Object(n.jsx)("input",{onChange:this.handleChange,type:"number",name:"amount"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"",children:"Description"}),Object(n.jsx)("input",{onChange:this.handleChange,type:"text",name:"description"})]}),Object(n.jsx)("button",{onClick:this.submitForm,children:"Submit"})]}),Object(n.jsx)("div",{className:"debit-credit-title"}),this.state.debit.map((function(e,t){return Object(n.jsx)(F,{amount:e.amount,date:e.date,description:e.description,id:e.id},t)}))]})}}]),a}(c.Component)),U=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={credit:n.props.credit,temp:{amount:0,date:"",description:"",id:""},viewBalance:!1},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.submitForm=n.submitForm.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"submitForm",value:function(){var e=this;if(0!==this.state.temp.amount&&""!==this.state.temp.amount){var t="".concat(new Date);this.setState({temp:Object(b.a)(Object(b.a)({},this.state.temp),{},{date:t,id:parseInt(89999*Math.random()+1e4)})}),setTimeout((function(){var t=Object(N.a)(e.state.credit);t.push(e.state.temp),e.setState({credit:t}),e.props.updateCreditState(t)}),100)}else alert("Please enter an amount")}},{key:"handleChange",value:function(e){e.preventDefault(),this.setState({temp:Object(b.a)(Object(b.a)({},this.state.temp),{},Object(D.a)({},e.target.name,e.target.value))})}},{key:"render",value:function(){var e=this;console.log("render credit");var t=Number(this.props.accountBalance).toFixed(2);return Object(n.jsxs)("div",{children:[Object(n.jsx)(O.b,{to:"/",children:"Return Home"}),Object(n.jsx)("br",{}),Object(n.jsx)(O.b,{to:"/debits",children:"View Debit"}),Object(n.jsx)("h3",{children:" Add Credit Transaction"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){return e.setState({viewBalance:!e.state.viewBalance})},children:"View Balance"}),!0===this.state.viewBalance?Object(n.jsx)(g,{accountBalance:t}):Object(n.jsx)("span",{})]}),Object(n.jsxs)("form",{onSubmit:this.handleChange,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Amount"}),Object(n.jsx)("input",{onChange:this.handleChange,type:"number",name:"amount"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Description"}),Object(n.jsx)("input",{onChange:this.handleChange,type:"text",name:"description"})]}),Object(n.jsx)("button",{onClick:this.submitForm,children:"Submit"})]}),Object(n.jsx)("div",{className:"debit-credit-title",children:Object(n.jsx)("p",{children:"Credit"})}),this.state.credit.map((function(e,t){return Object(n.jsx)(F,{amount:e.amount,date:e.date,description:e.description,id:e.id},t)}))]})}}]),a}(c.Component),P=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).mockLogIn=function(e){var t=Object(b.a)({},n.state.currentUser);t.userName=e.userName,n.setState({currentUser:t})},n.state={accountBalance:0,currentUser:{userName:"Bob",memberSince:"09/24/00"},debit:[],credit:[]},n.updateDebitState=n.updateDebitState.bind(Object(h.a)(n)),n.updateCreditState=n.updateCreditState.bind(Object(h.a)(n)),n.updateBalance=n.updateBalance.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"updateDebitState",value:function(e){var t=this;this.setState({debit:e}),setTimeout((function(){t.updateBalance()}),100)}},{key:"updateCreditState",value:function(e){var t=this;this.setState({credit:e}),setTimeout((function(){t.updateBalance()}),100)}},{key:"fetchDebit",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://moj-api.herokuapp.com/debits");case 2:t=e.sent,this.setState({debit:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchCredit",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://moj-api.herokuapp.com/credits");case 2:t=e.sent,this.setState({credit:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateBalance",value:function(){for(var e=0,t=0;t<this.state.credit.length;t++)e+=parseFloat(this.state.credit[t].amount);console.log("==================");for(var a=0;a<this.state.debit.length;a++)e-=parseFloat(this.state.debit[a].amount);this.setState({accountBalance:e})}},{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCredit();case 2:return e.next=4,this.fetchDebit();case 4:setTimeout((function(){t.updateBalance()}),100);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(O.a,{basename:"/Bank-of-React",children:Object(n.jsxs)(x.d,{children:[Object(n.jsx)(x.b,{exact:!0,path:"/",render:function(){return Object(n.jsx)(S,{accountBalance:e.state.accountBalance})}}),Object(n.jsx)(x.b,{path:"/userProfile",render:function(){return Object(n.jsx)(B,{username:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(n.jsx)(x.b,{path:"/login",render:function(){return Object(n.jsx)(w,Object(b.a)({user:e.state.currentUser,mockLogIn:e.mockLogIn},e.props))}}),Object(n.jsx)(x.b,{path:"/debits",render:function(){return Object(n.jsx)(I,{accountBalance:e.state.accountBalance,debit:e.state.debit,updateDebitState:e.updateDebitState})}}),Object(n.jsx)(x.b,{path:"/credit",render:function(){return Object(n.jsx)(U,{accountBalance:e.state.accountBalance,credit:e.state.credit,updateCreditState:e.updateCreditState})}})]})})})}}]),a}(c.Component);s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.f7c3e929.chunk.js.map