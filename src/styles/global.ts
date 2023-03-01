import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme['gray-100']};
    color: ${props => props.theme['gray-900']};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, strong{
    font-family: 'Baloo 2', cursive;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: default;
  }
`;
