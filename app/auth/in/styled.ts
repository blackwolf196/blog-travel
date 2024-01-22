import styled from 'styled-components'

const Styled = styled.div`
  height: 100vh;
  min-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  .ant-btn {
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
    transition: transform 80ms ease-in;

    &:active {
      transform: scale(0.95);
    }

    &:focus {
      outline: none;
    }

    &.btn-signin-form {
      &:active {
        border: 1px solid #ff4b2b !important;
        color: #fff !important;
      }

      &:hover {
        border: 1px solid #ff4b2b !important;
        color: #fff !important;
      }
    }

    &.btn-signup {
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
  }

  .form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  .main-title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 24px;
    color: #000;
  }

  .ant-input {
    width: 100%;
    height: 36px;
  }

  .welcome-text {
    color: #fff;
    font-size: 2em;
    font-weight: bold;
  }

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    min-height: 480px;

    @media screen and (min-width: 500px) {
      width: 870px;
      max-width: 90%;
    }
    width: calc(100vw * 2 - 10%);
    max-width: 90%;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: linear-gradient(to right, #ff4b2b, #ff416c) 0 0 no-repeat;
    background-size: cover;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  .social-container {
    margin: 20px 0;
  }

  .social-container {
    .social {
      border: 1px solid #dddddd;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      height: 40px;
      width: 40px;
      cursor: pointer;
      animation-duration: 5s;

      &.facebook {
        &:hover {
          color: #4267b2;
        }
      }

      &.google {
        &:hover {
          color: #db4437;
        }
      }

      &.linkedin {
        &:hover {
          color: #0077b5;
        }
      }
    }

    .anticon {
      svg {
        width: 1.5em !important;
        height: 1.5em !important;
      }
    }
  }

  .ant-form {
    width: 100%;
  }

  .ant-form-item {
    margin-bottom: 12px;

    .ant-form-item-explain-error {
      margin-bottom: 12px;
      margin-top: 8px;
    }
  }
`

export default Styled
