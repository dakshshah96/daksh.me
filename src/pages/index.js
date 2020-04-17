import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import TwitterFollowButton from '../components/TwitterFollowButton'
import GitHubFollowButton from '../components/GitHubFollowButton'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import daksh from '../images/daksh.png'

export default function Index({ data }) {
  const latestPostEdges = data.latest.edges

  return (
    <Layout>
      <Helmet title={`${config.siteTitle} – Full Stack Software Developer`} />
      <SEO />
      <div className="flex items-center justify-between max-w-4xl px-4 m-auto">
        <div className="w-2/3">
          <h1 className="mb-4 text-5xl font-bold">
            Hey, I’m Daksh{' '}
            <span role="img" aria-label="Hey">
              👋
            </span>
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            I’m a full stack software developer and entrepreneur from India. I
            love working on{' '}
            <a
              href="https://github.com/dakshshah96"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-indigo-500 hover:text-indigo-700"
            >
              open source
            </a>{' '}
            projects and{' '}
            <Link
              to="/blog/"
              className="font-bold text-indigo-500 hover:text-indigo-700"
            >
              writing
            </Link>{' '}
            about JavaScript, Node.js, and anything related to the modern web in
            general.
          </p>
          <div className="flex">
            <div className="mr-4">
              <GitHubFollowButton />
            </div>
            <div>
              <TwitterFollowButton />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
          <img
            src={daksh}
            alt="Daksh"
            className="w-40 h-40 mb-5 border-4 border-gray-200 border-solid rounded-full"
          />
        </div>
      </div>
      <section className="max-w-4xl px-4 m-auto mt-20">
        <h2 className="mb-10 text-3xl font-bold">
          <span className="pb-1 border-b-4 border-indigo-500 border-dashed">
            Latest Posts
          </span>
        </h2>
        <PostListing postEdges={latestPostEdges} />
      </section>
      <section className="max-w-4xl px-4 m-auto mt-20">
        <h2 className="mb-10 text-3xl font-bold">
          <span className="pb-1 border-b-4 border-indigo-500 border-dashed">
            Open Source Projects
          </span>
        </h2>
        <ProjectListing projects={projects} />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 5
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
            date
            template
          }
        }
      }
    }
  }
`

Index.propTypes = {
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
            }).isRequired,
          }).isRequired,
        })
      ).isRequired,
    }),
  }).isRequired,
}
