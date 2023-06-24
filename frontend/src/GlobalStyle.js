import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Slab', serif;
  src: url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap');
}

@font-face {
	font-family: "Kalam", cursive;
	src: url("https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap");
}


  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --color-bg-green: #008000;
    --color-bg-milk-white: #F2F0EA;
    --color-bg-white: #fff;
    --color-green: #008000;
    --color-brown: #3D3935;
    --color-red: #de0000;
    

    --transition: all 400ms ease;
  }
  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: 'Roboto Slab', serif;
    background: var(--color-bg-white);
    color: var(--color-brown);
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
  }

  a {
    color: var(--color-white);
    transition: var(--transition);
  }

  a:hover {
    color: var(--color-green);
  }

  p {
    letter-spacing: 1px;
	  line-height: 1.5;
  }

  button {
    font-family: 'Roboto Slab', serif;
    cursor: pointer;
    transition: var(--transition);
  }
  
`;
