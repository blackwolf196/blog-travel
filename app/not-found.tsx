'use client'

import NotFoundStyled from 'app/not-found.styled'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  const goHomePage = () => {
    router.push('/home')
  }

  return (
    <NotFoundStyled>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span></span>4
            </h1>
          </div>
          <h2>Oops! Page Not Be Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed, name changed or is temporarily unavailable
          </p>
          <a onClick={goHomePage}>Back to homepage</a>
        </div>
      </div>
    </NotFoundStyled>
  )
}

export default NotFound
