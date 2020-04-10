import React, { Component } from 'react'
import { Link } from 'gatsby'

class Footer extends Component {
  render() {
    const { config } = this.props
    const url = config.siteRss
    return (
      <footer className="footer">
        <div className="notice-container">
          <Link to={url}>
            <button>Subscribe</button>
          </Link>
          <h4>
            Based on{' '}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
            .
          </h4>
        </div>
      </footer>
    )
  }
}

export default Footer
