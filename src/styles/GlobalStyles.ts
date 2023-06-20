import { b1ndResetStyle } from "@b1nd/b1nd-styled-components-util";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${b1ndResetStyle}

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Pretendard-Regular' !important;
    }
`;
