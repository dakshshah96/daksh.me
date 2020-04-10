import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import config from '../../data/SiteConfig'
import favicon from '../favicon.png'
import './index.css'

export default function MainLayout(props) {
  const { children } = props

  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
