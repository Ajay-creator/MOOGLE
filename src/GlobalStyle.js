import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth:1280px;
        --white:#fff;
        --lightGray:#eee;
        --medGray:#353535;
        --darkGray:#1c1c1c;
        --fontSuperBig:3em;
        --fontBig:2em;
        --fontMed:1.2em;
        --fontSmall:1em;
    }

    *{
        box-sizing:border-box;
        font-family:'Abel', sans-serif;
    }
    body{
        margin:0;
        padding: 0;
    }

    h1{
        font-size:2em;
        font-weight:1000;
        color:var(--white);
    }
    h3{
        font-size:1.1em;
        font-weight:600;
    }

    p{
        font-size:1em;
        color:var(--white);
    }
`;

