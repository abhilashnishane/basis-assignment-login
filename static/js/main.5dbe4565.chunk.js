(this["webpackJsonpbasis-assignment-login"]=this["webpackJsonpbasis-assignment-login"]||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(1),c=n.n(o),s=n(22),r=n.n(s),i=(n(29),n(30),n(13)),l=n(5),j=(n(31),n(8)),u=n(38),b=n(39),h=n(40),p=n(41),m=n(42),O=n(43);function d(){var e=Object(l.f)(),t=Object(o.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1];return Object(a.jsxs)(u.a,{children:[Object(a.jsx)("div",{children:"Enter phone number"}),Object(a.jsxs)(b.a,{onSubmit:function(t){t.preventDefault(),c&&fetch("https://hiring.getbasis.co/candidate/users/phone",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({phoneNumber:c})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success&&(console.log(t.results.token),localStorage.setItem("basis_token",t.results.token),localStorage.setItem("basis_phone",c),e.push("/enterotp"))})).catch((function(e){return console.error(e)}))},children:[Object(a.jsxs)(h.a,{children:[Object(a.jsx)(p.a,{for:"",children:"Phone"}),Object(a.jsx)(m.a,{type:"number",name:"phone",value:c,onChange:function(e){var t=e.target,n=(t.name,t.value);s(n)},required:!0})]}),Object(a.jsx)(O.a,{color:"primary",children:"Next"})]})]})}function f(){var e=Object(l.f)(),t=Object(o.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1];return Object(a.jsxs)(u.a,{children:[Object(a.jsx)("div",{children:"Enter OTP"}),Object(a.jsxs)(b.a,{onSubmit:function(t){t.preventDefault(),c&&"1111"===c?fetch("https://hiring.getbasis.co/candidate/users/phone/verify",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({phoneNumber:localStorage.getItem("basis_phone"),verificationCode:c,token:localStorage.getItem("basis_token")})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success&&(!1===t.results.isLogin?(localStorage.setItem("basis_user_profile",JSON.stringify(t.results.user)),e.push("/enteremail")):t.results.isLogin&&(localStorage.setItem("basis_user_profile",JSON.stringify(t.results.user)),e.push("/profile")))})).catch((function(e){return console.error(e)})):alert("OTP must be 1111")},children:[Object(a.jsxs)(h.a,{children:[Object(a.jsx)(p.a,{for:"",children:"OTP"}),Object(a.jsx)(m.a,{type:"number",name:"otp",value:c,onChange:function(e){var t=e.target,n=(t.name,t.value);n.toString(),s(n)},required:!0})]}),Object(a.jsx)(O.a,{color:"primary",children:"Next"})]})]})}function g(){var e=Object(l.f)(),t=Object(o.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1];return Object(a.jsxs)(u.a,{children:[Object(a.jsx)("div",{children:"Enter email"}),Object(a.jsxs)(b.a,{onSubmit:function(t){t.preventDefault(),c&&fetch("https://hiring.getbasis.co/candidate/users/email",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:c,token:localStorage.getItem("basis_token"),phoneNumber:localStorage.getItem("basis_phone")})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success&&(localStorage.setItem("basis_email",c),e.push("/emailtoken"))})).catch((function(e){return console.error(e)}))},children:[Object(a.jsxs)(h.a,{children:[Object(a.jsx)(p.a,{for:"",children:"Email"}),Object(a.jsx)(m.a,{type:"email",name:"email",value:c,onChange:function(e){var t=e.target,n=(t.name,t.value);s(n)},required:!0})]}),Object(a.jsx)(O.a,{color:"primary",children:"Next"})]})]})}function x(){var e=Object(l.f)(),t=Object(o.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1];return Object(a.jsxs)(u.a,{children:[Object(a.jsx)("div",{children:"Enter email token"}),Object(a.jsxs)(b.a,{onSubmit:function(t){t.preventDefault(),c&&"112233"===c?fetch("https://hiring.getbasis.co/candidate/users/email/verify",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:localStorage.getItem("basis_email"),token:localStorage.getItem("basis_token"),verificationToken:c})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success&&e.push("/signupdetails")})).catch((function(e){return console.error(e)})):alert("Email token must be 112233")},children:[Object(a.jsxs)(h.a,{children:[Object(a.jsx)(p.a,{for:"",children:"Email Token"}),Object(a.jsx)(m.a,{type:"number",name:"etoken",value:c,onChange:function(e){var t=e.target,n=(t.name,t.value);n.toString(),s(n)},required:!0})]}),Object(a.jsx)(O.a,{color:"primary",children:"Next"})]})]})}var S=n(15),v=n(20);function y(){var e=Object(l.f)(),t=Object(o.useState)({fname:"",lname:""}),n=Object(j.a)(t,2),c=n[0],s=n[1],r=c.fname,i=c.lname;function d(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(S.a)({},n,a))}))}return Object(a.jsxs)(u.a,{children:[Object(a.jsx)("div",{children:"Enter your details"}),Object(a.jsxs)(b.a,{onSubmit:function(t){t.preventDefault(),r&&i&&fetch("https://hiring.getbasis.co/candidate/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:r,lastName:i,email:localStorage.getItem("basis_email"),phoneNumber:localStorage.getItem("basis_phone"),referredCodeKey:"U3DEAQ",agreeToPrivacyPolicy:!0,token:localStorage.getItem("basis_token"),source:"WEB_APP"})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success&&(localStorage.setItem("basis_user_profile",JSON.stringify(t.results.user)),e.push("/profile"))})).catch((function(e){return console.error(e)}))},children:[Object(a.jsxs)(h.a,{children:[Object(a.jsx)(p.a,{for:"",children:"First Name"}),Object(a.jsx)(m.a,{type:"text",name:"fname",value:r,onChange:d,required:!0})]}),Object(a.jsxs)(h.a,{children:[Object(a.jsx)(p.a,{for:"",children:"Last Name"}),Object(a.jsx)(m.a,{type:"text",name:"lname",value:i,onChange:d,required:!0})]}),Object(a.jsx)(O.a,{color:"primary",children:"Next"})]})]})}function _(){var e=Object(l.f)(),t=Object(o.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],r=Object(o.useState)(""),i=Object(j.a)(r,2),b=i[0],h=i[1],p=Object(o.useState)(""),m=Object(j.a)(p,2),d=m[0],f=m[1],g=Object(o.useState)(""),x=Object(j.a)(g,2),S=x[0],v=x[1];return Object(o.useEffect)((function(){var e=localStorage.getItem("basis_phone"),t=localStorage.getItem("basis_user_profile");t=JSON.parse(t),s(t),v(e),h(t.firstName),f(t.lastName)}),[]),Object(a.jsxs)(u.a,{children:[Object(a.jsx)("div",{children:"Profile Page "}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:["welcome ",b," ",d,"!"]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:["Your number is ",S]}),Object(a.jsx)("br",{}),Object(a.jsx)(O.a,{color:"primary",onClick:function(){var t="Bearer "+c._id+","+c.token;fetch("https://hiring.getbasis.co/candidate/users/logout/"+c._id,{method:"DELETE",headers:{Authorization:t,Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success&&(localStorage.removeItem("basis_token"),localStorage.removeItem("basis_phone"),localStorage.removeItem("basis_email"),localStorage.removeItem("basis_user_profile"),e.push("/enterphone"))})).catch((function(e){return console.error(e)}))},children:"Logout"})]})}var N=function(){return Object(a.jsx)(i.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/enterphone",component:d}),Object(a.jsx)(l.a,{exact:!0,path:"/enterotp",component:f}),Object(a.jsx)(l.a,{exact:!0,path:"/enteremail",component:g}),Object(a.jsx)(l.a,{exact:!0,path:"/emailtoken",component:x}),Object(a.jsx)(l.a,{exact:!0,path:"/signupdetails",component:y}),Object(a.jsx)(l.a,{exact:!0,path:"/profile",component:_})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.5dbe4565.chunk.js.map