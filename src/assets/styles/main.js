// @import 'utils/vars';
// @import 'utils/fonts';
import fontRoboto from './utils/fonts';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        line-height             : $mainLineHeight;
        font-size               : $mainFontSize;    
        font-weight             : $mainFontWeight;
        font-style              : $mainFontStyle;
        letter-spacing          : $mainLetterSpacing;
        color                   : $mainFontColor;
        height                  : 100%;

        -webkit-box-sizing      : border-box;
        -moz-box-sizing         : border-box;
        box-sizing              : border-box;
    }

    body {
        margin                  : 0;
        padding                 : 0;
        font-family             : $mainFont;
        background              : $ink;
    }

    *, *:before, *:after { 
        -webkit-box-sizing      : inherit;
        -moz-box-sizing         : inherit;
        box-sizing              : inherit;
    }

    h1, h2, h3, h4, h5, h6 { 
        font-size               : 2em;
        font-family             : $mainFont;
        font-style              : $mainFontStyle;
        font-weight             : $mainFontWeight;
        letter-spacing          : $mainLetterSpacing;
        margin                  : 0; 
    }

    a { 
        text-decoration         : none; 
        color                   :rgb(216, 211, 146);
    }

    a:-webkit-any-link {
        color                   :rgb(216, 211, 146);
    }

    a:-moz-any-link {
        color                   :rgb(216, 211, 146);
    }

    ul, li {
        margin                  : 0;  
        padding                 : 0;
        list-style-type         : none;
    }

    button, input {
        font-family             : $mainFont;
        white-space             : nowrap;
        display                 : inline-block;
        text-align              : center;
        text-decoration         : none;
        border                  : none;
        padding                 : 0;
        margin                  : 0;
    }

    textarea {
        outline                 : none;
        resize                  : none;
        overflow                : auto;
        padding                 : 0.8em;
        border-radius           : 0.3em;
        line-height             : $mainLineHeight;
        letter-spacing          : $mainLetterSpacing;
    }

    .container {
        width                   : 100%;
        flex                    : 0 0 auto;
        position                : relative;
        margin                  : 0 auto;
    }

    section {
        position                : relative;
        padding                 : 40px 0;
    }

    .btn {
        width                   : 6em;
        height                  : 1.7em;
        
        font-size               : 1rem;
        line-height             : 1.4;
        letter-spacing          : 0.02em;

        border-radius           : 0.2em;
        color                   : $white;
        background              : transparent;
        outline                 : 1px solid $white30;

        margin                  : 0.2rem;

        &--gradient {
            color               : $ink;
            background          : linear-gradient(91.33deg, #89A3FF 0%, #FF6060 54.17%, #FFBF00 100%);
            outline             : none;

            box-shadow          : 0px 13.2985px 26.5969px rgba(255, 0, 63, 0.2);            
        }
    }
`