import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import GitHubButton from 'react-github-btn'
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
          <p className="text-2xl text-gray-600">
            I’m a full stack software developer and I currently head software at{' '}
            <a
              href="https://www.tilt.bike/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-indigo-500"
            >
              Tilt
            </a>
            . I love working on{' '}
            <a
              href="https://github.com/dakshshah96"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-indigo-500"
            >
              open source
            </a>{' '}
            projects and{' '}
            <Link to="/blog/" className="font-bold text-indigo-500">
              writing
            </Link>{' '}
            about JavaScript, Node.js, and anything related to the modern web in
            general.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
          <img
            src={daksh}
            alt="Daksh"
            className="w-40 h-40 mb-5 border-4 border-gray-300 border-solid rounded-full"
          />
          <GitHubButton
            href="https://github.com/dakshshah96"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @dakshshah96 on GitHub"
          >
            dakshshah96
          </GitHubButton>
        </div>
      </div>
      <section className="max-w-4xl px-4 m-auto mt-20">
        <h2 className="mb-10 text-3xl font-bold">Latest Posts</h2>
        <PostListing postEdges={latestPostEdges} />
      </section>
      <section className="max-w-4xl px-4 m-auto mt-20">
        <h2 className="mb-10 text-3xl font-bold">Open Source Projects</h2>
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
