(this["webpackJsonpreact-social-media-app"]=this["webpackJsonpreact-social-media-app"]||[]).push([[0],{39:function(n,e,t){"use strict";t.r(e);var i,s,a,o,c,r,l,d,m,h,b,j=t(1),p=t.n(j),g=t(23),u=t.n(g),f=t(9),x=t(2),O=t(3),w=Object(O.a)(i||(i=Object(x.a)(["\n    *{\n        margin:0;\n        padding:0;\n        box-sizing:border-box;\n        font-family:'Montserrat', sans-serif;\n        body{\n            background:#264653;\n            color:linen;\n            a{\n                text-decoration:none;\n            }\n            input{\n                border-radius:0;\n            }\n        }\n    }\n"]))),y=t(4),v=t(6),N=t(0),k=O.b.section(s||(s=Object(x.a)(["\n    width:100%;\n    height:100vh;\n    header{\n        width:100%;\n        height:10vh;\n        display:flex;\n        justify-content:space-between;\n        align-items:center;\n        padding:0 1em;\n        h1{\n            font-family:'Pacifico', sans-serif;\n            font-size:2em;\n        }\n        .menu{\n            height:100%;\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            .log-in-link{\n                color:#264653;\n                background:linen;\n                border-radius:10px;\n                padding:.1em .5em;\n                font-size:1.1em;\n                font-weight:bold;\n            }\n        }\n    }\n    .container{\n        display:flex;\n        width:100%;\n        height:90vh;\n        .left-col{\n            display:none;\n        }\n        .right-col{\n            width:100%;\n            height:100%;\n            display:grid;\n            place-items:center;\n            form{\n                background:linen;\n                width:90%;\n                display:flex;\n                justify-content:center;\n                align-items:center;\n                flex-direction:column;\n                padding:1em 0;\n                border-radius:10px;\n                h1{\n                    text-align:center;\n                    color:#264653;\n                    margin-bottom:1em;\n                    font-size:2em;\n                }\n                input{\n                    width:90%;\n                    background:transparent;\n                    border:none;\n                    outline:none;\n                    border-bottom:2px solid #264653;\n                    margin-bottom:2em;\n                    padding:.2em;\n                    color:#264653;\n                    font-size:1em;\n                    &::placeholder{\n                        color:#264653;\n                    }\n                }\n                .sign-in-btn{\n                    color:linen;\n                    background:#264653;\n                    padding:.5em 1em;\n                    border-radius:10px;\n                    font-size:1em;\n                    font-weight:bold;\n                }\n            }\n        }\n    }\n    @media only screen and (min-width:800px){\n        header{\n            padding:0 5em;\n            h1{\n                font-size:3em;\n            }\n        }\n        .container{\n            .left-col{\n                width:50%;\n                height:100%;\n                display:flex;\n                justify-content:flex-start;\n                align-items:center;\n                padding-left:5em;\n                p{\n                    font-size:1.2em;\n                    line-height:1.5em;\n                }\n            }\n            .right-col{\n                width:50%;\n                display:grid;\n                justify-content:flex-end;\n                align-items:center;\n                padding:unset;\n                padding-right:5em;\n                form{\n                    width:450px;\n                    input{\n                        width:80%;\n                    }\n                }\n            }\n        }\n    }\n    @media only screen and (min-width:1800px){\n        header{\n            h1{\n                font-size:4em;\n            }\n            .menu{\n                .log-in-link{\n                    padding:.1em 1em;\n                }\n            }\n        }\n        .container{\n            .left-col{\n                p{\n                    font-size:1.9em;\n                }\n            }\n        }\n    }\n"]))),z=function(n){var e=n.firstName,t=n.setFirstName,i=n.lastName,s=n.setLastName,a=n.email,o=n.setEmail,c=n.password,r=n.setPassword;return Object(N.jsxs)(k,{children:[Object(N.jsxs)("header",{children:[Object(N.jsx)("h1",{children:"User Link"}),Object(N.jsx)("div",{className:"menu",children:Object(N.jsx)(v.b,{to:"/log-in",className:"log-in-link",children:"Log In"})})]}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"left-col",children:Object(N.jsx)("p",{children:"Here at User Link you can interact with people all over the world. Here you can add friends and connect with communities of people that may be into things your into. It is fun and a good way to meet people in todays day."})}),Object(N.jsx)("div",{className:"right-col",children:Object(N.jsxs)("form",{children:[Object(N.jsx)("h1",{children:"Create Account"}),Object(N.jsx)("input",{type:"text",placeholder:"First Name",onChange:function(n){return t(n.target.value)}}),Object(N.jsx)("input",{type:"text",placeholder:"Last Name",onChange:function(n){return s(n.target.value)}}),Object(N.jsx)("input",{type:"email",placeholder:"Email",onChange:function(n){return o(n.target.value)}}),Object(N.jsx)("input",{type:"password",placeholder:"Password",onChange:function(n){return r(n.target.value)}}),Object(N.jsx)(v.b,{to:"/home",className:"sign-in-btn",onClick:function(n){if(""!==e&&""!==i&&""!==a&&""!==c)return null;n.preventDefault(),alert("An input field is empty.")},children:"Create Account"})]})})]})]})},S=O.b.section(a||(a=Object(x.a)(["\n    width:100%;\n    height:100vh;\n    display:grid;\n    place-items:center;\n    position:relative;\n    header{\n        width:100%;\n        display:grid;\n        place-items:center;\n        position:absolute;\n        top:0;\n        right:0;\n        padding:0 1em;\n        h1{\n            font-size:2.8em;\n            color:linen;\n            font-family:'Pacifico', sans-serif;\n        }\n    }\n    form{\n        width:90%;\n        background:linen;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-direction:column;\n        border-radius:10px;\n        padding:1em 0;\n        h1{\n            color:#264653;\n            font-size:2em;\n            margin-bottom:1em;\n        }\n        input{\n            background:transparent;\n            color:#264653;\n            padding:.1em .2em;\n            font-size:1em;\n            outline:none;\n            border:none;\n            border-bottom:2px solid #264653;\n            width:90%;\n            margin-bottom:2em;\n            &::placeholder{\n                color:#264653;\n            }\n        }\n        .log-in-btn{\n            padding:.5em 1em;\n            background:#264653;\n            color:linen;\n            font-weight:bold;\n            font-size:1em;\n            border-radius:10px;\n        }\n    }\n    @media only screen and (min-width:800px){\n        padding:0 5em;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-direction:column;\n        header{\n            position:unset;\n            h1{\n                font-size:5em;\n            }\n        }\n        form{\n            width:50%;\n        }\n    }\n    @media only screen and (min-width:1800px){\n        form{\n            width:40%;\n            input{\n                width:80%;\n            }\n        }\n    }\n"]))),P=function(n){var e=n.email,t=n.password,i=Object(j.useState)(""),s=Object(f.a)(i,2),a=s[0],o=s[1],c=Object(j.useState)(""),r=Object(f.a)(c,2),l=r[0],d=r[1];return Object(N.jsxs)(S,{children:[Object(N.jsx)("header",{children:Object(N.jsx)(v.b,{to:"/userlink",children:Object(N.jsx)("h1",{children:"User Link"})})}),Object(N.jsxs)("form",{children:[Object(N.jsx)("h1",{children:"Log In"}),Object(N.jsx)("input",{type:"text",placeholder:"Email",onChange:function(n){return o(n.target.value)}}),Object(N.jsx)("input",{type:"password",placeholder:"Password",onChange:function(n){return d(n.target.value)}}),Object(N.jsx)(v.b,{to:"/home",className:"log-in-btn",onClick:function(n){if(a===e&&l===t)return null;n.preventDefault(),alert("Email or password are incorrect. Try again.")},children:"Log In"})]})]})},L=[{title:"Home",link:"/home"},{title:"Settings",link:"/home/settings"},{title:"Policy",link:"/home/policy"},{title:"Log Out",link:"/log-in"}],C=t(17),F=t(27),E=O.b.section(o||(o=Object(x.a)(["\n    width:100%;\n    height:80vh;\n    position:absolute;\n    top:0;\n    right:0;\n    background:#264653;\n    form{\n        width:100%;\n        height:5vh;\n        display:flex;\n        justify-content:space-between;\n        align-items:center;\n        padding:0 1em;\n        input{\n            width:280px;\n            padding:.1em .2em;\n            background:none;\n            border:none;\n            outline:none;\n            border-bottom:2px solid linen;\n            color:linen;\n            font-size:1em;\n            &::placeholder{\n                color:linen;\n            }\n        }\n        button{\n            padding:.1em .5em;\n            font-size:1em;\n            border-radius:10px;\n            border:none;\n            outline:none;\n            cursor:pointer;\n            font-weight:bold;\n            background:linen;\n        }\n    }\n    .post-list{\n        width:100%;\n        height:75vh;\n        display:flex;\n        justify-content:flex-start;\n        align-items:center;\n        flex-direction:column;\n        padding:0 1em;\n        .post{\n            width:100%;\n            background:linen;\n            border-radius:10px;\n            padding:.2em .4em;\n            margin-bottom:.5em;\n            .post-header{\n                width:100%;\n                height:50px;\n                padding:unset;\n                h1{\n                    font-size:1.5em;\n                    color:#264653;\n                }\n            }\n            .content{\n                width:100%;\n                p{\n                    color:#264653;\n                }\n            }\n            .date{\n                p{\n                    color:#264653;\n                    display:flex;\n                    justify-content:flex-end;\n                    align-items:center;\n                }\n            }\n        }\n    }\n    @media only screen and (min-width:800px){\n        width:80%;\n        height:100%;\n        position:unset;\n        border-right:1px solid linen;\n        padding:1em 1em 0 5em;\n        form{\n            input{\n                width:80%;\n            }\n        }\n        .post-list{\n            .post{\n                width:90%;\n                margin:1em 0;\n                padding:.2em .5em;\n                .post-header{\n                    margin-bottom:.5em;\n                    h1{\n                        font-size:2em;\n                    }\n                }\n                .content{\n                    p{\n                        font-size:1.1em;\n                    }\n                }\n                .date{\n                    p{\n                        font-size:1.1em;\n                    }\n                }\n            }\n        }\n    }\n    @media only screen and (min-width:1800px){\n        form{\n            input{\n                font-size:1.1em;\n            }\n            button{\n                font-size:1.1em;\n            }\n        }\n        .post-list{\n            .post{\n                padding:.5em 1em;\n                .post-header{\n                    margin-bottom:1em;\n                    h1{\n                        font-size:2.2em;\n                    }\n                }\n            }\n        }\n    }\n"]))),D=function(n){var e=n.firstName,t=Object(j.useState)(""),i=Object(f.a)(t,2),s=i[0],a=i[1],o=Object(j.useState)([]),c=Object(f.a)(o,2),r=c[0],l=c[1];return Object(j.useEffect)((function(){var n=localStorage.getItem("posts"),e=JSON.parse(n);e&&l(e)}),[]),Object(j.useEffect)((function(){var n=JSON.stringify(r);localStorage.setItem("posts",n)}),[r]),Object(N.jsxs)(E,{children:[Object(N.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t={id:(new Date).getTime(),text:s,month:(new Date).getMonth()+1,day:(new Date).getDate(),year:(new Date).getFullYear(),name:e};l(Object(F.a)(r).concat(t)),a("")},children:[Object(N.jsx)("input",{type:"text",placeholder:"Today's Thought",onChange:function(n){return a(n.target.value)},value:s}),Object(N.jsx)("button",{type:"submit",children:"Post"})]}),Object(N.jsx)("div",{className:"post-list",children:r.map((function(n){return Object(N.jsxs)("div",{className:"post",children:[Object(N.jsx)("header",{className:"post-header",children:Object(N.jsx)("h1",{children:n.name})}),Object(N.jsx)("div",{className:"content",children:Object(N.jsx)("p",{children:n.text})}),Object(N.jsx)("div",{className:"date",children:Object(N.jsxs)("p",{children:[n.month," / ",n.day," / ",n.year]})})]},n.id)}))})]})},I=t.p+"static/media/man-1.544634a4.svg",A=t.p+"static/media/woman-1.9abe5c0c.svg",J=[{name:"Andrew",image:I,status:!1},{name:"Ashley",image:A,status:!1},{name:"Kevin",image:I,status:!0},{name:"Nataly",image:A,status:!1},{name:"Joseph",image:I,status:!0},{name:"Melissa",image:A,status:!0},{name:"John",image:I,status:!1},{name:"Cynthia",image:A,status:!0},{name:"Micheal",image:I,status:!1},{name:"Chelsea",image:A,status:!0}],M=O.b.section(c||(c=Object(x.a)(["\n    position:absolute;\n    top:0;\n    right:0;\n    background:#264653;\n    width:100%;\n    height:80vh;\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    overflow:hidden;\n    overflow-y:scroll;\n    padding:0 1em;\n    h1{\n        font-family:'Pacifico', sans-serif;\n        font-size:1.5em;\n    }\n    .friend{\n        width:90%;\n        height:40px;\n        background:linen;\n        margin-bottom:.5em;\n        border-radius:50px;\n        display:flex;\n        justify-content:space-between;\n        align-items:center;\n        padding:.1em .2em;\n        .image-container{\n            width:2.5em;\n            height:2.1em;\n            border:1px solid #264653;\n            overflow:hidden;\n            border-radius:50%;\n            img{\n                width:100%;\n                height:100%;\n                object-fit:cover;\n            }\n        }\n        .name-container{\n            width:100%;\n            display:grid;\n            place-items:center;\n            height:100%;\n            p{\n                color:#264653;\n                font-size:1.2em;\n                font-weight:bold;\n            }\n        }\n        .status-container{\n            width:2.1em;\n            height:2.1em;\n            overflow:hidden;\n            border-radius:50%;\n            display:grid;\n            place-items:center;\n            .status{\n                width:.5em;\n                height:.5em;\n                border-radius:50%;\n            }\n            .on{\n                background:limegreen;\n                box-shadow:0px 0px 10px limegreen;\n            }\n            .off{\n                background:crimson;\n                box-shadow:0px 0px 10px crimson;\n            }\n        }\n    }\n    @media only screen and (min-width:800px){\n        width:100%;\n        height:50%;\n        position:unset;\n        border-bottom:1px solid linen;\n        .friend{\n            height:2em;\n            .image-container{\n                width:2em;\n                height:1.55em;\n            }\n            .name-container{\n                p{\n                    font-size:1em;\n                }\n            }\n        }\n    }\n    @media only screen and (min-width:1800px){\n        h1{\n            font-size:2em;\n        }\n        .friend{\n            width:80%;\n            height:2.1em;\n            padding:.1em .2em;\n            .image-container{\n                width:2.1em;\n                height:1.65em;\n            }\n        }\n    }\n"]))),T=function(){return Object(N.jsxs)(M,{children:[Object(N.jsx)("h1",{children:"Friends"}),J.map((function(n,e){return Object(N.jsxs)("div",{className:"friend",children:[Object(N.jsx)("div",{className:"image-container",children:Object(N.jsx)("img",{src:n.image,alt:n.name})}),Object(N.jsx)("div",{className:"name-container",children:Object(N.jsx)("p",{children:n.name})}),Object(N.jsx)("div",{className:"status-container",children:!0===n.status?Object(N.jsx)("div",{className:"status on"}):Object(N.jsx)("div",{className:"status off"})})]},e)}))]})},U=O.b.section(r||(r=Object(x.a)(["\n    position:absolute;\n    top:0;\n    right:0;\n    background:#264653;\n    width:100%;\n    height:80vh;\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    overflow:hidden;\n    overflow-y:scroll;\n    padding:0 1em;\n    h1{\n        font-family:'Pacifico', sans-serif;\n        font-size:1.5em;\n    }\n    .friend{\n        width:90%;\n        height:40px;\n        background:linen;\n        margin-bottom:.5em;\n        border-radius:50px;\n        display:flex;\n        justify-content:space-between;\n        align-items:center;\n        padding:.1em .2em;\n        .image-container{\n            width:2.5em;\n            height:2.5em;\n            border:1px solid #264653;\n            overflow:hidden;\n            border-radius:50%;\n            img{\n                width:100%;\n                height:100%;\n                object-fit:cover;\n            }\n        }\n        .name-container{\n            width:100%;\n            display:grid;\n            place-items:center;\n            height:100%;\n            p{\n                color:#264653;\n                font-size:1.2em;\n                font-weight:bold;\n            }\n        }\n        .status-container{\n            width:2.1em;\n            height:2.1em;\n            overflow:hidden;\n            border-radius:50%;\n            display:grid;\n            place-items:center;\n            i{\n                color:#264653;\n                cursor:pointer;\n            }\n        }\n    }\n    @media only screen and (min-width:800px){\n        position:unset;\n        width:100%;\n        height:50%;\n        .friend{\n            height:2em;\n            .image-container{\n                width:2em;\n                height:1.55em;\n            }\n            .name-container{\n                p{\n                    font-size:1em;\n                }\n            }\n            .status-container{\n                i{\n                    font-size:.8em;\n                }\n            }\n        }\n    }\n    @media only screen and (min-width:1800px){\n        h1{\n            font-size:2em;\n        }\n        .friend{\n            width:80%;\n            height:2.1em;\n            padding:.1em .2em;\n            .image-container{\n                width:2.1em;\n                height:1.65em;\n            }\n        }\n    }\n"]))),H=function(){return Object(N.jsxs)(U,{children:[Object(N.jsx)("h1",{children:"Find People"}),J.map((function(n,e){return Object(N.jsxs)("div",{className:"friend",children:[Object(N.jsx)("div",{className:"image-container",children:Object(N.jsx)("img",{src:n.image,alt:n.name})}),Object(N.jsx)("div",{className:"name-container",children:Object(N.jsx)("p",{children:n.name})}),Object(N.jsx)("div",{className:"status-container",children:Object(N.jsx)("i",{className:"fas fa-user-plus"})})]},e)}))]})},Y=[{title:"Home",link:"/home/feed"},{title:"Settings",link:"/home/settings"},{title:"Policy",link:"/home/policy"},{title:"Log Out",link:"/log-in"}],q=O.b.section(l||(l=Object(x.a)(["\n    width:100%;\n    height:100vh;\n    position:absolute;\n    top:0;\n    right:0;\n    background:linen;\n    transform:",";\n    opacity:",";\n    transition:all .5s linear;\n    z-index:1000;\n    header{\n        width:100%;\n        height:10vh;\n        display:flex;\n        justify-content:flex-end;\n        align-items:center;\n        padding:0 1em;\n        .close-btn{\n            color:#264653;\n            font-size:1.5em;\n            cursor:pointer;\n        }\n    }\n    .container{\n        width:100%;\n        height:90vh;\n        display:flex;\n        justify-content:space-evenly;\n        align-items:flex-start;\n        flex-direction:column;\n        padding:0 1em;\n        .nav-link{\n            width:100%;\n            height:100%;\n            display:flex;\n            justify-content:flex-start;\n            align-items:center;\n            border-bottom:1px solid #264653;\n            font-size:1.5em;\n            color:#264653;\n            font-weight:bold;\n        }\n    }\n"])),(function(n){return n.isOpen?"translateX(0)":"translateY(-100%)"}),(function(n){return n.isOpen?"1":"0"})),B=function(n){var e=n.isOpen,t=n.toggle;return Object(N.jsxs)(q,{isOpen:e,onClick:t,children:[Object(N.jsx)("header",{children:Object(N.jsx)(C.b,{className:"close-btn",onClick:t})}),Object(N.jsx)("div",{className:"container",children:Y.map((function(n,e){return Object(N.jsx)(v.b,{to:n.link,className:"nav-link",children:n.title},e)}))})]})},K=O.b.section(d||(d=Object(x.a)(["\n    display:none;\n    @media only screen and (min-width:800px){\n        width:100%;\n        height:90vh;\n        display:flex;\n        position:relative;\n        .col{\n            width:20%;\n            height:100%;\n            display:flex;\n            flex-direction:column;\n            justify-content:center;\n            align-items:center;\n        }\n    }\n"]))),W=function(){return Object(N.jsxs)(K,{children:[Object(N.jsx)(D,{}),Object(N.jsxs)("div",{className:"col",children:[Object(N.jsx)(T,{}),Object(N.jsx)(H,{})]})]})},X=[{icon:Object(N.jsx)("i",{className:"fas fa-home"}),link:"/home/feed"},{icon:Object(N.jsx)("i",{className:"fas fa-users"}),link:"/home/friends"},{icon:Object(N.jsx)("i",{className:"fas fa-user-plus"}),link:"/home/find-people"}],G=O.b.section(m||(m=Object(x.a)(["\n    width:100%;\n    height:100vh;\n    header{\n        width:100%;\n        height:10vh;\n        display:flex;\n        justify-content:space-between;\n        align-items:center;\n        padding:0 1em;\n        h1{\n            font-family:\"Pacifico\", sans-serif;\n            font-size:2em;\n            color:linen;\n        }\n        nav{\n            display:none;\n        }\n        .menu-btn{\n            font-size:1.5em;\n            cursor:pointer;\n        }\n    }\n    .mobile-container{\n        width:100%;\n        height:90vh;\n        position:relative;\n        .greeting{\n            width:100%;\n            height:80vh;\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            flex-direction:column;\n            padding:0 1em;\n            h1{\n                font-size:1.5em;\n                text-align:center;\n                span{\n                    font-family:'Pacifico', sans-siref;\n                }\n            }\n            p{\n                font-size:.8em;\n                text-align:center;\n            }\n        }\n        .mobile-nav{\n            position:absolute;\n            bottom:0;\n            right:0;\n            width:100%;\n            height:10vh;\n            display:flex;\n            justify-content:space-between;\n            align-items:center;\n            .mobile-nav-link{\n                width:100%;\n                height:100%;\n                display:grid;\n                place-items:center;\n                color:linen;\n                font-size:1.5em;\n            }\n        }\n    }\n    .desktop-container{\n        display:none;\n    }\n    @media only screen and (min-width:800px){\n        display:unset;\n        header{\n            padding:0 5em;\n            border-bottom:1px solid linen;\n            h1{\n                font-size:3em;\n            }\n            nav{\n                display:flex;\n                height:100%;\n                justify-content:flex-end;\n                align-items:center;\n                .nav-link{\n                    color:linen;\n                    font-weight:bold;\n                    margin-left:2em;\n                }\n            }\n            .menu-btn{\n                display:none;\n            }\n        }\n        .mobile-container{\n            display:none;\n        }\n        .desktop-container{\n            display:unset;\n            width:100%;\n            height:90vh;\n        }\n    }\n    @media only screen and (min-width:1800px){\n        header{\n            h1{\n                font-size:4em;\n            }\n        }\n        nav{\n            .nav-link{\n                font-size:1.1em;\n            }\n        }\n    }\n"]))),Q=function(n){var e=n.firstName,t=n.setFirstName,i=n.lastName,s=n.setLastName,a=n.email,o=n.setEmail,c=n.password,r=n.setPassword,l=n.toggle;return Object(N.jsxs)(G,{children:[Object(N.jsxs)("header",{children:[Object(N.jsx)(v.b,{to:"/home",children:Object(N.jsx)("h1",{children:"User Link"})}),Object(N.jsx)("nav",{children:L.map((function(n,e){return Object(N.jsx)(v.b,{className:"nav-link",to:n.link,children:n.title},e)}))}),Object(N.jsx)(C.a,{className:"menu-btn",onClick:l})]}),Object(N.jsxs)("div",{className:"mobile-container",children:[Object(N.jsxs)("div",{className:"greeting",children:[Object(N.jsxs)("h1",{children:["Welcome To ",Object(N.jsx)("span",{children:"User Link"})]}),Object(N.jsx)("p",{children:"Look around to get started."})]}),Object(N.jsxs)(y.c,{children:[Object(N.jsx)(y.a,{path:"/home/feed",children:Object(N.jsx)(D,{firstName:e})}),Object(N.jsx)(y.a,{path:"/home/friends",component:T}),Object(N.jsx)(y.a,{path:"/home/find-people",component:H}),Object(N.jsx)(y.a,{path:"/home/settings",children:Object(N.jsx)(V,{firstName:e,setFirstName:t,lastName:i,setLastName:s,email:a,setEmail:o,password:c,setPassword:r})}),Object(N.jsx)(y.a,{path:"/home/policy",component:$})]}),Object(N.jsx)("div",{className:"mobile-nav",children:X.map((function(n,e){return Object(N.jsx)(v.b,{to:n.link,className:"mobile-nav-link",children:n.icon},e)}))})]}),Object(N.jsx)("div",{className:"desktop-container",children:Object(N.jsxs)(y.c,{children:[Object(N.jsx)(y.a,{path:"/home",exact:!0,children:Object(N.jsx)(W,{firstName:e})}),Object(N.jsx)(y.a,{path:"/home/settings",children:Object(N.jsx)(V,{firstName:e,setFirstName:t,lastName:i,setLastName:s,email:a,setEmail:o,password:c,setPassword:r})}),Object(N.jsx)(y.a,{path:"/home/policy",component:$})]})})]})},R=O.b.section(h||(h=Object(x.a)(["\n    position:absolute;\n    top:0;\n    right: 0;\n    width:100%;\n    height:80vh;\n    background:#264653;\n    padding:0 1em;\n    .settings-header{\n        width:100%;\n        height:20%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        h1{\n            color:linen;\n            text-align:center;\n        }\n    }\n    .container{\n        width:100%;\n        height:80%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-direction:column;\n        .block{\n            width:100%;\n            margin-bottom:2em;\n            display:flex;\n            justify-content:space-between;\n            align-items:center;\n            label{\n                font-size:1.1em;\n            }\n            input{\n                background:transparent;\n                border-radius:0;\n                border:none;\n                border-bottom:2px solid linen;\n                color:linen;\n                width:50%;\n                outline:none;\n                font-size:1.1em;\n            }\n        }\n    }\n    @media only screen and (min-width:800px){\n        position:unset;\n        width:100%;\n        height:90vh;\n        padding:0 5em;\n        .settings-header{\n            border:none;\n            height:20%;\n        }\n        .container{\n            height:80%;\n            .block{\n                label{\n                    font-size:1.5em;\n                }\n                input{\n                    font-size:1.5em;\n                }\n            }\n        }\n    }\n    @media only screen and (min-width:1800px){\n        .settings-header{\n            h1{\n                font-size:4em;\n            }\n        }\n        .container{\n            padding:20em;\n        }\n    }\n"]))),V=function(n){var e=n.firstName,t=n.setFirstName,i=n.lastName,s=n.setLastName,a=n.email,o=n.setEmail,c=n.password,r=n.setPassword;return Object(N.jsxs)(R,{children:[Object(N.jsx)("header",{className:"settings-header",children:Object(N.jsxs)("h1",{children:[e," ",i]})}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("label",{htmlFor:"first-name",children:"First Name"}),Object(N.jsx)("input",{type:"text",id:"first-name",value:e,onChange:function(n){return t(n.target.value)}})]}),Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("label",{htmlFor:"last-name",children:"Last Name"}),Object(N.jsx)("input",{type:"text",id:"last-name",value:i,onChange:function(n){return s(n.target.value)}})]}),Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email"}),Object(N.jsx)("input",{type:"email",id:"email",value:a,onChange:function(n){return o(n.target.value)}})]}),Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("label",{htmlFor:"password",children:"Password"}),Object(N.jsx)("input",{type:"text",value:c,id:"password",onChange:function(n){return r(n.target.value)}})]})]})]})},Z=O.b.section(b||(b=Object(x.a)(["\n    position:absolute;\n    top:0;\n    right:0;\n    width:100%;\n    height:80vh;\n    background:#264653;\n    overflow:hidden;\n    overflow-y:scroll;\n    &::-webkit-scrollbar{\n        width:5px;\n    }\n    &::-webkit-scrollbar-track{\n        border:none;\n    }\n    &::-webkit-scrollbar-thumb{\n        border-radius:50px;\n        background:linen;\n    }\n    .block{\n        width:100%;\n        padding:1em;\n        display:flex;\n        justify-content:center;\n        align-items:flex-start;\n        flex-direction:column;\n        h2{\n            margin-bottom:.5em;\n        }\n        span{\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            margin-bottom:.5em;\n            input{\n                margin-right:.5em;\n                border:none;\n                outline:none;\n            }\n        }\n        a{\n            color:lightblue;\n            font-weight:bold;\n        }\n    }\n    @media only screen and (min-width:800px){\n        position:unset;\n        width:100%;\n        height:90vh;\n        padding:0 5em;\n        .block{\n            width:100%;\n            h2{\n                font-size:1.9em;\n            }\n        }\n    }\n    @media only screen and (min-width:1800px){\n        display:flex;\n        justify-content:space-evenly;\n        align-items:center;\n        flex-direction:column;\n        .block{\n            span{\n                margin-bottom:1em;\n            }\n        }\n    }\n"]))),$=function(){return Object(N.jsxs)(Z,{children:[Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("h2",{children:"Account Privacy"}),Object(N.jsxs)("span",{children:[Object(N.jsx)("input",{type:"checkbox"}),Object(N.jsx)("p",{children:"Private Account"})]}),Object(N.jsx)("p",{children:"Choose whether or not people can see your profile. You can change this when ever you choose."})]}),Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("h2",{children:"Activity Status"}),Object(N.jsxs)("span",{children:[Object(N.jsx)("input",{type:"checkbox"}),Object(N.jsx)("p",{children:"Show Activity Status"})]}),Object(N.jsx)("p",{children:"Decide if people can see what you've been up to (likes, posts, friends requestsm, etc.). You can change this when you decide to."})]}),Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("h2",{children:"Message Sharing"}),Object(N.jsxs)("span",{children:[Object(N.jsx)("input",{type:"checkbox"}),Object(N.jsx)("p",{children:"Allow Sharing"})]}),Object(N.jsx)("p",{children:"Alllow people to share your messages."})]}),Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("h2",{children:"Account Data"}),Object(N.jsx)("a",{href:"#",children:"Download Data"})]}),Object(N.jsxs)("div",{className:"block",children:[Object(N.jsx)("h2",{children:"Data Download"}),Object(N.jsx)("a",{href:"#",children:"Download Data"})]})]})},_=function(){var n=Object(j.useState)(""),e=Object(f.a)(n,2),t=e[0],i=e[1],s=Object(j.useState)(""),a=Object(f.a)(s,2),o=a[0],c=a[1],r=Object(j.useState)(""),l=Object(f.a)(r,2),d=l[0],m=l[1],h=Object(j.useState)(""),b=Object(f.a)(h,2),p=b[0],g=b[1],u=Object(j.useState)(!1),x=Object(f.a)(u,2),O=x[0],v=x[1],k=function(){v(!O)};return Object(j.useEffect)((function(){var n=localStorage.getItem("userFirstName"),e=localStorage.getItem("userLastName"),t=localStorage.getItem("userEmail"),s=localStorage.getItem("userPassword");n&&i(n),e&&c(e),t&&m(t),s&&g(s)}),[]),Object(j.useEffect)((function(){localStorage.setItem("userFirstName",t),localStorage.setItem("userLastName",o),localStorage.setItem("userEmail",d),localStorage.setItem("userPassword",p)}),[t,o,d,p]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(w,{}),Object(N.jsx)(B,{isOpen:O,toggle:k}),Object(N.jsxs)(y.c,{children:[Object(N.jsx)(y.a,{path:"/userlink",exact:!0,children:Object(N.jsx)(z,{fistName:t,setFirstName:i,lastName:o,setLastName:c,email:d,setEmail:m,password:p,setPassword:g})}),Object(N.jsx)(y.a,{path:"/log-in",children:Object(N.jsx)(P,{email:d,password:p})}),Object(N.jsx)(y.a,{path:"/home",children:Object(N.jsx)(Q,{firstName:t,setFirstName:i,toggle:k,lastName:o,setLastName:c,email:d,setEmail:m,password:p,setPassword:g})})]})]})};u.a.render(Object(N.jsx)(v.a,{children:Object(N.jsx)(p.a.StrictMode,{children:Object(N.jsx)(_,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.919fb6e8.chunk.js.map