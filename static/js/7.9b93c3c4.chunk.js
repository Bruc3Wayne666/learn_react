(this["webpackJsonpreact-easy"]=this["webpackJsonpreact-easy"]||[]).push([[7],{222:function(e,t,c){"use strict";c.d(t,"c",(function(){return h})),c.d(t,"b",(function(){return d})),c.d(t,"a",(function(){return p}));var n=c(27),r=c(3),a=c(224),i=(c(0),c(223)),o=c.n(i),s=c(104),b=c(2),u=["input","child"],l=["input","child"],j=function(e){e.input;var t=e.meta,c=t.touched,n=t.error,r=e.children;return Object(b.jsxs)("div",{children:[r,c&&n?Object(b.jsx)("p",{className:o.a.errorSpan,children:n}):null]})},h=function(e){var t=e.input,c=(e.child,Object(a.a)(e,u));return Object(b.jsx)(j,Object(r.a)(Object(r.a)({},c),{},{children:Object(b.jsx)("textarea",Object(r.a)(Object(r.a)({},t),c))}))},d=function(e){var t=e.input,c=(e.child,Object(a.a)(e,l));return Object(b.jsx)(j,Object(r.a)(Object(r.a)({},c),{},{children:Object(b.jsx)("input",Object(r.a)(Object(r.a)({},t),c))}))},p=function(e,t,c,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return Object(b.jsx)("div",{children:Object(b.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:Object(n.a)(c),component:a},i))})}},223:function(e,t,c){e.exports={create:"CreatePost_create__kaLHl",content:"CreatePost_content__1Othh",error:"CreatePost_error__1L6ua",button:"CreatePost_button__1YmJ5",errorSpan:"CreatePost_errorSpan__BTLrF"}},226:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length can be only ".concat(e," symbols")}}},235:function(e,t,c){e.exports={post:"Login_post__p8koB",login:"Login_login__DNn18",password:"Login_password__3minB",checkboxDiv:"Login_checkboxDiv__tF5uj",checkbox:"Login_checkbox__tCJv_",submit:"Login_submit__3hkxR",error:"Login_error__1IICq"}},297:function(e,t,c){"use strict";c.r(t);c(0);var n=c(104),r=c(105),a=c(235),i=c.n(a),o=c(222),s=c(226),b=c(24),u=c(28),l=c(7),j=c(2),h=Object(r.a)({form:"login"})((function(e){var t=e.handleSubmit,c=e.error,r=e.captchaUrl;return Object(j.jsxs)("form",{className:i.a.post,onSubmit:t,children:[Object(j.jsx)("div",{children:Object(j.jsx)(n.a,{placeholder:"Login (email)",name:"email",validate:[s.b],component:o.b,className:i.a.login})}),Object(j.jsx)("div",{children:Object(j.jsx)(n.a,{placeholder:"Password",name:"password",validate:[s.b],component:o.b,type:"password",className:i.a.login})}),Object(j.jsxs)("div",{className:i.a.checkboxDiv,children:[Object(j.jsx)(n.a,{name:"remember",component:o.b,type:"checkbox",className:i.a.checkbox}),"Remember Me"]}),r&&Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:r,alt:"captcha"}),Object(o.a)("Type symbols from image","captcha",[s.b],o.b,{})]}),c&&Object(j.jsx)("div",{className:i.a.error,children:c}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:i.a.submit,type:"submit",children:"Login"})})]})}));t.default=Object(b.b)((function(e){return{captchaUrl:e.auth.captcha,isAuth:e.auth.isAuth}}),{login:u.c,logout:u.d})((function(e){return e.isAuth?Object(j.jsx)(l.a,{to:"/profile"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)(h,{onSubmit:function(t){e.login(t.email,t.password,t.remember,t.captcha)},captchaUrl:e.captchaUrl})]})}))}}]);
//# sourceMappingURL=7.9b93c3c4.chunk.js.map