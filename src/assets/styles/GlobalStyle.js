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
    body {
        line-height: 1;
        font-family: 'Raleway', sans-serif;
        background-color: #8C11BE;
        font-size: 20px;
    }
    * {
        box-sizing: border-box;
    }
    input {
        border: none;
        border-radius: 5px;
        height: 58px;
        padding: 0 15px;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        color: #000000;
        background-color: #FFFFFF;
        margin-bottom: 13px;
    }
    input::placeholder {
        font-family: 'Raleway', sans-serif;
        color: #000000;
    }
    button {
        border: none;
        background: #A328D6;
        border-radius: 5px;
        font-size: 20px;
        color: #FFFFFF;
        height: 46px;
        font-weight: 700;

    }
    a {
        text-decoration: none;
    }
    p {
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
    }
`;

export default GlobalStyle;