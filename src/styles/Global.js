import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        list-style-type: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
       
        
        
    }

    :root {
        /* Primary */

        --Marine-blue: hsl(213, 96%, 18%);
        --Purplish-blue: hsl(243, 100%, 62%);
        --Pastel-blue: hsl(228, 100%, 84%);
        --Light-blue: hsl(206, 94%, 87%);
        --Strawberry-red: hsl(354, 84%, 57%);

        /* Neutral */

        --Cool-gray: hsl(231, 11%, 63%);
        --Light-gray: hsl(229, 24%, 87%);
        --Magnolia: hsl(217, 100%, 97%);
        --Alabaster: hsl(231, 100%, 99%);
        --White: hsl(0, 0%, 100%);
    }
    

`