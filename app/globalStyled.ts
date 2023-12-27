'use client'

import { createGlobalStyle } from 'styled-components'

const theme = {
  maxWidth: '1100px',
  borderRadius: '12px',
  fontMono: `'ui-monospace', 'Menlo', 'Monaco', 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace`,
  foregroundRGB: '0, 0, 0',
  backgroundStartRGB: '214, 219, 220',
  backgroundEndRGB: '255, 255, 255',
  // ... other theme properties
}

const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: ${theme.maxWidth};
    --border-radius: ${theme.borderRadius};
    --font-mono: ${theme.fontMono};
    --foreground-rgb: ${theme.foregroundRGB};
    --background-start-rgb: ${theme.backgroundStartRGB};
    --background-end-rgb: ${theme.backgroundEndRGB};
    // ... other CSS variables
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-start-rgb: 0, 0, 0;
      --background-end-rgb: 0, 0, 0;
      // ... dark mode CSS variables
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    ) rgb(var(--background-start-rgb));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`

export default GlobalStyle
// Use GlobalStyle component in your application
