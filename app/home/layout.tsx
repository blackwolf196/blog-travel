import Footer from 'app/home/components/Footer/footer'
import MainStyled from 'app/home/styled.layout'
import { PropsWithChildren } from 'react'

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MainStyled>
        <div className={'home-router'}>{children}</div>
        <Footer />
      </MainStyled>
    </>
  )
}
