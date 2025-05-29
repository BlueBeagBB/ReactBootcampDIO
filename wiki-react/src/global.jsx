import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f9fafb;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    color: #333;
    padding: 0;
    margin: 0;
  }

  #root {
    min-height: 100vh;
  }

  .markdown-body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;

    pre {
      background-color: #f6f8fa;
      border-radius: 6px;
      padding: 16px;
      overflow: auto;
      margin-bottom: 16px;
    }

    code {
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      font-size: 85%;
    }

    h1, h2, h3 {
      padding-bottom: 0.3em;
      border-bottom: 1px solid #eaecef;
      margin-top: 24px;
      margin-bottom: 16px;
    }

    p {
      margin-bottom: 16px;
    }

    ul, ol {
      padding-left: 2em;
      margin-bottom: 16px;
    }

    li {
      margin-bottom: 0.25em;
    }

    a {
      color: #0366d6;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;