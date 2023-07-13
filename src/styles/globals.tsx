import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
  /* Variable */

  :root {
    /* Color */
    --body-color: #FFFAE6;
    --text-color: #B3B3B3;
    --text-dark-color: #100B32;
    --orange-color: #FF8A00;
    --orange-opacity-color: rgba(255, 138, 0, 0.2);;
    --white-color: #FFFFFF;
    --gray-color: #EEEEEE;
    --dark-gray-color: #D8D8D8;
    --green-color: #1BD97B;
    --green-opacity-color: rgba(27, 217, 123, 0.1);
    --dark-color: #2D2A40;
    
    /* Box Shadow */
    --bs-orange: 2px 10px 20px 0px rgba(255, 138, 0, 0.10);;
    
    /* Border Radius */
    --rounded-xl: 35px;
    --rounded-full: 99999px;
    
    /* Font and Typography */
    --body-font: 'Montserrat', sans-serif;
    --big-font-size: 36px;
    --h1-font-size: 24px;
    --h2-font-size: 18px;
    --normal-font-size: 16px;
    --small-font-size: 14px;
    --smaller-font-size: 12px;
    
    /* Font Weight */
    --font-skinny: 300;
    --font-slim: 400;
    --font-medium: 500;
    --font-semi-bold: 600;
    --font-bold: 700;

    /* Margin */
    --m-0-25: .25rem;
    --m-0-5: .5rem;
    --m-0-75: .75rem;
    --m-1: 1rem;
    --m-1-5: 1.5rem;
    --m-2: 2rem;
    --m-2-5: 2.5rem;
    --m-3: 3rem;

    /* Z-Index */
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
  }

  /* Base */
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
  }

  h1, h2, h3, h4 {
    color: var(--orange-color);
    font-weight: var(--font-bold);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    outline: none;
    border: none;
  }
`;
