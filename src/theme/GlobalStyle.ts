import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
  
    body {
        font-family: Jost;
    }

    a[class*="active"] {
        transform: translateY(-2px);
        span {
            color: #000;
            font-weight: bold !important;
            font-size: 1.1rem !important;
        }
        i {
            color: rgb(27, 85, 191);
            font-size: 1.3rem !important;
        }
    }

    //Animated.css (add my_animation_appear)
    .my_animation_appear {
        animation-name:shakeY;
        animation-duration: 10s;
        animation-delay : 2s;
        animation-iteration-count: infinite;
    }
}
  
`;
