'use client'

import styled from 'styled-components'

export default styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .home-router {
    max-height: calc(100vh - 40px);
    overflow: auto;
    padding: 8px;

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    scrollbar-width: auto;
    scrollbar-color: #a9a7aa #ffffff;

    /* Chrome, Edge, and Safari */

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #a9a7aa;
      border-radius: 10px;
      border: 1px solid transparent;
    }
  }

  .home-page {
  }
`
