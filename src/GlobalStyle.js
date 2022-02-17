import {createGlobalStyle} from "styled-components"
const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:"Quicksand", sans-serif;
        body{
            a{
                text-decoration:none;
                color:#2a2a2a;
            }
        }
    }
`
export default GlobalStyle