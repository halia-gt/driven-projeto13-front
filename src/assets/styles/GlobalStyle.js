import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        text-decoration: none;
    }
    body {
        background-color: #8C11BE;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        line-height: 1;
    }
    * {
        box-sizing: border-box;
    }
    input {
        background-color: #FFFFFF;
        border: none;
        border-radius: 5px;
        color: #000000;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        height: 58px;
        margin-bottom: 13px;
        padding: 0 15px;
    }
    input::placeholder {
        color: #000000;
        font-family: 'Raleway', sans-serif;
    }
    button {
        background: #A328D6;
        border: none;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
        height: 46px;
    }
    button:active {
        font-size: calc(20px / 0.97);
        transform: scale(0.97);
    }
    p {
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
    }
`;

export default GlobalStyle;