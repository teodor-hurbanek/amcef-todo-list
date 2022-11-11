import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button fixed top-3 -left-3 z-10">
          <span className="text-2xl">»</span>
        </label>
        <div className="container px-5 pt-20 pb-10 mx-auto">
          {/* style={{ minHeight: '50rem' }} */}
          <h1 className="mb-3 text-3xl">Things to do</h1>
          {children}
        </div>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/todo">Todo list</Link>
          </li>
          <li>
            <Link href="/progress">Progress</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Layout
