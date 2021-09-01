(this["webpackJsonpreact-social-media-app"]=this["webpackJsonpreact-social-media-app"]||[]).push([[0],{39:function(n,e,t){"use strict";t.r(e);var i,a,s,o,c,r,l,d=t(1),m=t.n(d),h=t(23),b=t.n(h),j=t(10),p=t(4),u=t(5),g=Object(u.a)(i||(i=Object(p.a)(["\n    *{\n        margin:0;\n        padding:0;\n        box-sizing:border-box;\n        font-family:'Montserrat', sans-serif;\n        body{\n            background:#264653;\n            color:linen;\n            a{\n                text-decoration:none;\n            }\n        }\n    }\n"]))),f=t(2),x=t(6),O=t(17),w=t(0),y=u.b.section(a||(a=Object(p.a)(["\n    width:100%;\n    height:100vh;\n    header{\n        width:100%;\n        height:10vh;\n        display:flex;\n        justify-content:space-between;\n        align-items:center;\n        padding:0 1em;\n        h1{\n            font-family:'Pacifico', sans-serif;\n            font-size:2em;\n        }\n        .menu{\n            height:100%;\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            .log-in-link{\n                color:#264653;\n                background:linen;\n                border-radius:10px;\n                padding:.1em .5em;\n                font-size:1.1em;\n                font-weight:bold;\n            }\n            .menu-bars{\n                margin-left:.5em;\n                font-size:1.5em;\n                cursor:pointer;\n            }\n        }\n    }\n    .container{\n        display:flex;\n        width:100%;\n        height:90vh;\n        .left-col{\n            display:none;\n        }\n        .right-col{\n            width:100%;\n            height:100%;\n            display:grid;\n            place-items:center;\n            form{\n                background:linen;\n                width:90%;\n                display:flex;\n                justify-content:center;\n                align-items:center;\n                flex-direction:column;\n                padding:1em 0;\n                border-radius:10px;\n                h1{\n                    text-align:center;\n                    color:#264653;\n                    margin-bottom:1em;\n                    font-size:2em;\n                }\n                input{\n                    width:90%;\n                    background:transparent;\n                    border:none;\n                    outline:none;\n                    border-bottom:2px solid #264653;\n                    margin-bottom:2em;\n                    padding:.2em;\n                    color:#264653;\n                    font-size:1em;\n                    &::placeholder{\n                        color:#264653;\n                    }\n                }\n                .birthday{\n                    width:90%;\n                    display:flex;\n                    justify-content:space-between;\n                    align-items:center;\n                    margin-bottom:2em;\n                    select{\n                        padding:.2em .4em;\n                        border:none;\n                        outline:none;\n                        background:#264653;\n                        color:linen;\n                        border-radius:10px;\n                        font-weight:bold;\n                        font-size:1em;\n                        option{\n                            background:#fff;\n                            color:#264653;\n                        }\n                    }\n                }\n                .sign-in-btn{\n                    color:linen;\n                    background:#264653;\n                    padding:.5em 1em;\n                    border-radius:10px;\n                    font-size:1em;\n                    font-weight:bold;\n                }\n            }\n        }\n    }\n"]))),v=function(n){var e=n.firstName,t=n.setFirstName,i=n.lastName,a=n.setLastName,s=n.email,o=n.setEmail,c=n.password,r=n.setPassword;return Object(w.jsxs)(y,{children:[Object(w.jsxs)("header",{children:[Object(w.jsx)("h1",{children:"User Link"}),Object(w.jsxs)("div",{className:"menu",children:[Object(w.jsx)(x.b,{to:"/log-in",className:"log-in-link",children:"Log In"}),Object(w.jsx)(O.a,{className:"menu-bars"})]})]}),Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("div",{className:"left-col",children:Object(w.jsxs)("p",{children:["At User Link you can interact with people all over the world.",Object(w.jsx)("br",{})," Here you can add friends and connect with communities of",Object(w.jsx)("br",{})," people that may be into things your into. It is fun and a good",Object(w.jsx)("br",{})," way to meet people in todays day."]})}),Object(w.jsx)("div",{className:"right-col",children:Object(w.jsxs)("form",{children:[Object(w.jsx)("h1",{children:"Create Account"}),Object(w.jsx)("input",{type:"text",placeholder:"First Name",onChange:function(n){return t(n.target.value)}}),Object(w.jsx)("input",{type:"text",placeholder:"Last Name",onChange:function(n){return a(n.target.value)}}),Object(w.jsx)("input",{type:"email",placeholder:"Email",onChange:function(n){return o(n.target.value)}}),Object(w.jsx)("input",{type:"password",placeholder:"Password",onChange:function(n){return r(n.target.value)}}),Object(w.jsx)(x.b,{to:"/home",className:"sign-in-btn",onClick:function(n){if(""!==e&&""!==i&&""!==s&&""!==c)return null;n.preventDefault(),alert("An input field is empty.")},children:"Create Account"})]})})]})]})},N=u.b.section(s||(s=Object(p.a)(["\n    width:100%;\n    height:100vh;\n    display:grid;\n    place-items:center;\n    position:relative;\n    header{\n        width:100%;\n        display:grid;\n        place-items:center;\n        position:absolute;\n        top:0;\n        right:0;\n        padding:0 1em;\n        h1{\n            font-size:2.8em;\n            color:linen;\n            font-family:'Pacifico', sans-serif;\n        }\n    }\n    form{\n        width:90%;\n        background:linen;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-direction:column;\n        border-radius:10px;\n        padding:1em 0;\n        h1{\n            color:#264653;\n            font-size:2em;\n            margin-bottom:1em;\n        }\n        input{\n            background:transparent;\n            color:#264653;\n            padding:.1em .2em;\n            font-size:1em;\n            outline:none;\n            border:none;\n            border-bottom:2px solid #264653;\n            width:90%;\n            margin-bottom:2em;\n        }\n        .log-in-btn{\n            padding:.5em 1em;\n            background:#264653;\n            color:linen;\n            font-weight:bold;\n            font-size:1em;\n            border-radius:10px;\n        }\n    }\n"]))),k=function(n){var e=n.email,t=n.password,i=Object(d.useState)(""),a=Object(j.a)(i,2),s=a[0],o=a[1],c=Object(d.useState)(""),r=Object(j.a)(c,2),l=r[0],m=r[1];return Object(w.jsxs)(N,{children:[Object(w.jsx)("header",{children:Object(w.jsx)(x.b,{to:"/userlink",children:Object(w.jsx)("h1",{children:"User Link"})})}),Object(w.jsxs)("form",{children:[Object(w.jsx)("h1",{children:"Log In"}),Object(w.jsx)("input",{type:"text",placeholder:"Email",onChange:function(n){return o(n.target.value)}}),Object(w.jsx)("input",{type:"password",placeholder:"Password",onChange:function(n){return m(n.target.value)}}),Object(w.jsx)(x.b,{to:"/home",className:"log-in-btn",onClick:function(n){if(s===e&&l===t)return null;n.preventDefault(),alert("Email or password are incorrect. Try again.")},children:"Log In"})]})]})},z=[{title:"Home",link:"/home"},{title:"Settings",link:"/settings"},{title:"Policy",link:"/policy"},{title:"Log Out",link:"/log--in"}],C=t(27),L=u.b.section(o||(o=Object(p.a)(["\n    width:100%;\n    height:80vh;\n    position:absolute;\n    top:0;\n    right:0;\n    background:#264653;\n    form{\n        width:100%;\n        height:5vh;\n        display:flex;\n        justify-content:space-between;\n        align-items:center;\n        padding:0 1em;\n        input{\n            width:280px;\n            padding:.1em .2em;\n            background:none;\n            border:none;\n            outline:none;\n            border-bottom:2px solid linen;\n            color:linen;\n            font-size:1em;\n            &::placeholder{\n                color:linen;\n            }\n        }\n        button{\n            padding:.1em .5em;\n            font-size:1em;\n            border-radius:10px;\n            border:none;\n            outline:none;\n            cursor:pointer;\n            font-weight:bold;\n            background:linen;\n        }\n    }\n    .post-list{\n        width:100%;\n        height:75vh;\n        display:flex;\n        justify-content:flex-start;\n        align-items:center;\n        flex-direction:column;\n        padding:0 1em;\n        .post{\n            width:100%;\n            background:linen;\n            border-radius:10px;\n            padding:.2em .4em;\n            margin-bottom:.5em;\n            .post-header{\n                width:100%;\n                height:50px;\n                padding:unset;\n                h1{\n                    font-size:1.5em;\n                    color:#264653;\n                }\n            }\n            .content{\n                width:100%;\n                p{\n                    color:#264653;\n                }\n            }\n            .date{\n                p{\n                    color:#264653;\n                    display:flex;\n                    justify-content:flex-end;\n                    align-items:center;\n                }\n            }\n        }\n    }\n"]))),P=function(n){var e=n.firstName,t=Object(d.useState)(""),i=Object(j.a)(t,2),a=i[0],s=i[1],o=Object(d.useState)([]),c=Object(j.a)(o,2),r=c[0],l=c[1];return Object(w.jsxs)(L,{children:[Object(w.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t={id:(new Date).getTime(),text:a,month:(new Date).getMonth()+1,day:(new Date).getDate(),year:(new Date).getFullYear(),name:e};l(Object(C.a)(r).concat(t)),s("")},children:[Object(w.jsx)("input",{type:"text",placeholder:"Today's Thought",onChange:function(n){return s(n.target.value)},value:a}),Object(w.jsx)("button",{type:"submit",children:"Post"})]}),Object(w.jsx)("div",{className:"post-list",children:r.map((function(n){return Object(w.jsxs)("div",{className:"post",children:[Object(w.jsx)("header",{className:"post-header",children:Object(w.jsx)("h1",{children:n.name})}),Object(w.jsx)("div",{className:"content",children:Object(w.jsx)("p",{children:n.text})}),Object(w.jsx)("div",{className:"date",children:Object(w.jsxs)("p",{children:[n.month," / ",n.day," / ",n.year]})})]},n.id)}))})]})},S=t.p+"static/media/man-1.544634a4.svg",D=t.p+"static/media/woman-1.9abe5c0c.svg",F=[{name:"Andrew",image:S,status:!1},{name:"Ashley",image:D,status:!1},{name:"Kevin",image:S,status:!0},{name:"Nataly",image:D,status:!1},{name:"Joseph",image:S,status:!0},{name:"Melissa",image:D,status:!0},{name:"John",image:S,status:!1},{name:"Cynthia",image:D,status:!0},{name:"Micheal",image:S,status:!1},{name:"Chelsea",image:D,status:!0}],A=u.b.section(c||(c=Object(p.a)(["\n    position:absolute;\n    top:0;\n    right:0;\n    background:#264653;\n    width:100%;\n    height:80vh;\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    overflow:hidden;\n    overflow-y:scroll;\n    padding:0 1em;\n    h1{\n        font-family:'Pacifico', sans-serif;\n        font-size:1.5em;\n    }\n    .friend{\n        width:90%;\n        height:40px;\n        background:linen;\n        margin-bottom:.5em;\n        border-radius:50px;\n        display:flex;\n        justify-content:space-between;\n        align-items:center;\n        padding:.1em .2em;\n        .image-container{\n            width:2.1em;\n            height:2.1em;\n            border:1px solid #264653;\n            overflow:hidden;\n            border-radius:50%;\n            img{\n                width:100%;\n                height:100%;\n                object-fit:cover;\n            }\n        }\n        .name-container{\n            width:100%;\n            display:grid;\n            place-items:center;\n            height:100%;\n            p{\n                color:#264653;\n                font-size:1.2em;\n                font-weight:bold;\n            }\n        }\n        .status-container{\n            width:2.1em;\n            height:2.1em;\n            overflow:hidden;\n            border-radius:50%;\n            display:grid;\n            place-items:center;\n            .status{\n                width:.8em;\n                height:.8em;\n                border-radius:50%;\n            }\n            .on{\n                background:limegreen;\n                box-shadow:0px 0px 10px limegreen;\n            }\n            .off{\n                background:crimson;\n                box-shadow:0px 0px 10px crimson;\n            }\n        }\n    }\n"]))),E=function(){return Object(w.jsxs)(A,{children:[Object(w.jsx)("h1",{children:"Friends"}),F.map((function(n,e){return Object(w.jsxs)("div",{className:"friend",children:[Object(w.jsx)("div",{className:"image-container",children:Object(w.jsx)("img",{src:n.image,alt:n.name})}),Object(w.jsx)("div",{className:"name-container",children:Object(w.jsx)("p",{children:n.name})}),Object(w.jsx)("div",{className:"status-container",children:!0===n.status?Object(w.jsx)("div",{className:"status on"}):Object(w.jsx)("div",{className:"status off"})})]},e)}))]})},I=u.b.section(r||(r=Object(p.a)(["\n    position:absolute;\n    top:0;\n    right:0;\n    background:#264653;\n    width:100%;\n    height:80vh;\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    overflow:hidden;\n    overflow-y:scroll;\n    padding:0 1em;\n    h1{\n        font-family:'Pacifico', sans-serif;\n        font-size:1.5em;\n    }\n    .friend{\n        width:90%;\n        height:40px;\n        background:linen;\n        margin-bottom:.5em;\n        border-radius:50px;\n        display:flex;\n        justify-content:space-between;\n        align-items:center;\n        padding:.1em .2em;\n        .image-container{\n            width:2.1em;\n            height:2.1em;\n            border:1px solid #264653;\n            overflow:hidden;\n            border-radius:50%;\n            img{\n                width:100%;\n                height:100%;\n                object-fit:cover;\n            }\n        }\n        .name-container{\n            width:100%;\n            display:grid;\n            place-items:center;\n            height:100%;\n            p{\n                color:#264653;\n                font-size:1.2em;\n                font-weight:bold;\n            }\n        }\n        .status-container{\n            width:2.1em;\n            height:2.1em;\n            overflow:hidden;\n            border-radius:50%;\n            display:grid;\n            place-items:center;\n            i{\n                color:#264653;\n                cursor:pointer;\n            }\n        }\n    }\n"]))),M=function(){return Object(w.jsxs)(I,{children:[Object(w.jsx)("h1",{children:"Friends"}),F.map((function(n,e){return Object(w.jsxs)("div",{className:"friend",children:[Object(w.jsx)("div",{className:"image-container",children:Object(w.jsx)("img",{src:n.image,alt:n.name})}),Object(w.jsx)("div",{className:"name-container",children:Object(w.jsx)("p",{children:n.name})}),Object(w.jsx)("div",{className:"status-container",children:Object(w.jsx)("i",{className:"fas fa-user-plus"})})]},e)}))]})},T=[{icon:Object(w.jsx)("i",{className:"fas fa-home"}),link:"/home/feed"},{icon:Object(w.jsx)("i",{className:"fas fa-users"}),link:"/home/friends"},{icon:Object(w.jsx)("i",{className:"fas fa-user-plus"}),link:"/home/find-people"}],U=u.b.section(l||(l=Object(p.a)(["\n    width:100%;\n    height:100vh;\n    header{\n        width:100%;\n        height:10vh;\n        display:flex;\n        justify-content:space-between;\n        align-items:center;\n        padding:0 1em;\n        h1{\n            font-family:\"Pacifico\", sans-serif;\n            font-size:2em;\n        }\n        nav{\n            display:none;\n        }\n        .menu-btn{\n            font-size:1.5em;\n            cursor:pointer;\n        }\n    }\n    .mobile-container{\n        width:100%;\n        height:90vh;\n        position:relative;\n        .greeting{\n            width:100%;\n            height:80vh;\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            flex-direction:column;\n            padding:0 1em;\n            h1{\n                font-size:1.5em;\n                text-align:center;\n                span{\n                    font-family:'Pacifico', sans-siref;\n                }\n            }\n            p{\n                font-size:.8em;\n                text-align:center;\n            }\n        }\n        .mobile-nav{\n            position:absolute;\n            bottom:0;\n            right:0;\n            width:100%;\n            height:10vh;\n            display:flex;\n            justify-content:space-between;\n            align-items:center;\n            .mobile-nav-link{\n                width:100%;\n                height:100%;\n                display:grid;\n                place-items:center;\n                color:linen;\n                font-size:1.5em;\n            }\n        }\n    }\n"]))),J=function(n){var e=n.firstName;return Object(w.jsxs)(U,{children:[Object(w.jsxs)("header",{children:[Object(w.jsx)("h1",{children:"User Link"}),Object(w.jsx)("nav",{children:z.map((function(n,e){return Object(w.jsx)(x.b,{className:"nav-link",to:n.link,children:n.title},e)}))}),Object(w.jsx)(O.a,{className:"menu-btn"})]}),Object(w.jsxs)("div",{className:"mobile-container",children:[Object(w.jsxs)("div",{className:"greeting",children:[Object(w.jsxs)("h1",{children:["Welcome To ",Object(w.jsx)("span",{children:"User Link"})]}),Object(w.jsx)("p",{children:"Look around to get started."})]}),Object(w.jsxs)(f.c,{children:[Object(w.jsx)(f.a,{path:"/home/feed",children:Object(w.jsx)(P,{firstName:e})}),Object(w.jsx)(f.a,{path:"/home/friends",component:E}),Object(w.jsx)(f.a,{path:"/home/find-people",component:M})]}),Object(w.jsx)("div",{className:"mobile-nav",children:T.map((function(n,e){return Object(w.jsx)(x.b,{to:n.link,className:"mobile-nav-link",children:n.icon},e)}))})]})]})},H=function(){var n=Object(d.useState)(""),e=Object(j.a)(n,2),t=e[0],i=e[1],a=Object(d.useState)(""),s=Object(j.a)(a,2),o=s[0],c=s[1],r=Object(d.useState)(""),l=Object(j.a)(r,2),m=l[0],h=l[1],b=Object(d.useState)(""),p=Object(j.a)(b,2),u=p[0],x=p[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(g,{}),Object(w.jsxs)(f.c,{children:[Object(w.jsx)(f.a,{path:"/userlink",exact:!0,children:Object(w.jsx)(v,{fistName:t,setFirstName:i,lastName:o,setLastName:c,email:m,setEmail:h,password:u,setPassword:x})}),Object(w.jsx)(f.a,{path:"/log-in",children:Object(w.jsx)(k,{email:m,password:u})}),Object(w.jsx)(f.a,{path:"/home",children:Object(w.jsx)(J,{firstName:t})})]})]})};b.a.render(Object(w.jsx)(x.a,{children:Object(w.jsx)(m.a.StrictMode,{children:Object(w.jsx)(H,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c5ac1d6f.chunk.js.map