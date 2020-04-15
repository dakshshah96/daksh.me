import React from 'react'
import PropTypes from 'prop-types'
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
      <Navigation menuLinks={config.menuLinks} />
      <main className="pt-12">{children}</main>
      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}
