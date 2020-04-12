import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import UserInfo from '../components/UserInfo'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import { formatDate, editOnGithub } from '../utils'

export default function PostTemplate({ data, pageContext }) {
  const { slug } = pageContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter

  if (!post.id) {
    post.id = slug
  }

  const date = formatDate(post.date)
  const githubLink = editOnGithub(post)
  const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(
    post.title
  )}&url=${config.siteUrl}/${post.slug}/&via=dakshshah96`

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} – ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <article className="max-w-4xl px-4 m-auto">
        <header className="mb-12">
          <div>
            <h1 className="mb-4 text-3xl font-bold leading-tight">
              {post.title}
            </h1>
            <div className="flex text-sm">
              <time className="text-gray-600">{date}</time>
              <span className="mx-4 text-gray-500">|</span>
              <a
                href={twitterShare}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-600 hover:text-indigo-500"
              >
                Share on Twitter
              </a>
              <span className="mx-4 text-gray-500">|</span>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-600 hover:text-indigo-500"
              >
                Edit on GitHub
              </a>
            </div>
          </div>
        </header>

        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </article>
      <UserInfo config={config} />
    </Layout>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        slug
        date
        template
      }
      fields {
        slug
        date
      }
    }
  }
`

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      timeToRead: PropTypes.number,
      excerpt: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string,
        date: PropTypes.string,
        template: PropTypes.string,
        id: PropTypes.string,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string,
        date: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
  }).isRequired,
}
