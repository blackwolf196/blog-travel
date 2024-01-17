import Imoji from 'assets/images/404.webp'
import styled from 'styled-components'

const NotFoundStyled = styled.div`
  #notfound {
    position: relative;
    height: 100vh;
  }

  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .notfound {
    max-width: 520px;
    width: 100%;
    text-align: center;
    line-height: 1.4;
  }

  .notfound .notfound-404 {
    height: 190px;
  }

  .notfound .notfound-404 h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 146px;
    font-weight: 700;
    margin: 0;
    color: #232323;
  }

  .notfound .notfound-404 h1 > span {
    display: inline-block;
    width: 120px;
    height: 120px;
    background-image: url(${Imoji.src});
    background-size: cover;
    transform: scale(1.4);
    z-index: -1;
  }

  .notfound h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
    color: #232323;
  }

  .notfound p {
    font-family: 'Montserrat', sans-serif;
    color: #787878;
    font-weight: 300;
  }

  .notfound a {
    font-family: 'Montserrat', sans-serif;
    display: inline-block;
    padding: 12px 30px;
    font-weight: 700;
    background-color: #f99827;
    color: #fff;
    border-radius: 40px;
    text-decoration: none;
    transition: 0.2s all;
    margin-top: 20px;
    cursor: pointer;
  }

  .notfound a:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 767px) {
    .notfound .notfound-404 {
      height: 115px;
    }
    .notfound .notfound-404 h1 {
      font-size: 86px;
    }
    .notfound .notfound-404 h1 > span {
      width: 86px;
      height: 86px;
    }
  }
`

export default NotFoundStyled
