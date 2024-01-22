'use client'

import { Button } from 'antd'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
  border-radius: 20px;
  height: 40px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 100ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #ff6448;
  }

  &.btn-primary {
    &:active {
      border: 1px solid #ff4b2b !important;
      color: #fff !important;
    }

    &:hover {
      border: 1px solid #ff4b2b !important;
      color: #fff !important;
    }
  }

  &.btn-secondary {
    background-color: transparent;
    border-color: #ffffff;

    &:hover {
      border: 1px solid #fff !important;
      color: #fff !important;
    }

    &:active {
      border: 1px solid #fff !important;
      color: #fff !important;
    }
  }
`

export default ButtonStyled
