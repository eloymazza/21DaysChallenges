import React, { FC } from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex h-dvh flex-col">
      <Header />
      <main className="grow bg-secondary">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
