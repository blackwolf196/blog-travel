import styled from 'styled-components'

const ChangeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .change-container {
    width: 680px;
    height: 320px;
    border-radius: 8px;
    background: #fff;
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    padding: 16px;

    .change-line {
      margin-top: 32px;
      text-align: center;
      font-weight: bold;
      font-size: 2em;
    }

    .email-line {
      text-align: center;
      font-size: 1.5em;
      margin-top: 16px;
    }

    .input-zone {
      text-align: center;
    }

    .input-email {
      margin-top: 16px;
      width: 480px;
      height: 48px;

      .ant-input {
        margin-left: 8px;
      }
    }

    .btn-submit-change {
      width: 480px;
      height: 48px;
    }

    .back-to-login {
      margin-top: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default ChangeStyled
