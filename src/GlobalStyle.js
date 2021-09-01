import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Montserrat', sans-serif;
        body{
            background:#264653;
            color:linen;
            a{
                text-decoration:none;
            }
            input{
                border-radius:0;
            }
        }
    }
`
export default GlobalStyle