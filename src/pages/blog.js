import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import DetailedPostListing from '../components/DetailedPostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default function BlogPage({ data }) {
  const latestPostEdges = data.latest.edges

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <SEO />
      <section className="max-w-4xl px-4 m-auto">
        <h1 className="mb-10 text-4xl font-bold">
          <span className="pb-1 border-b-4 border-indigo-500 border-dashed">
            Blog
          </span>
        </h1>
        <DetailedPostListing postEdges={latestPostEdges} />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    latest: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            description
            date
            template
          }
        }
      }
    }
  }
`

BlogPage.propTypes = {
  data: PropTypes.shape({
    latest: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            timeToRead: PropTypes.number,
            fields: PropTypes.shape({
              slug: PropTypes.string,
              date: PropTypes.string,
            }).isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              date: PropTypes.string,
              template: PropTypes.string,
              description: PropTypes.string,
            }).isRequired,
          }).isRequired,
        })
      ).isRequired,
    }),
  }).isRequired,
}
