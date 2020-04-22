import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { formatDate } from '../utils'

export default function DetailedPostListing({ postEdges }) {
  const getPostList = () => {
    const postList = []
    postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        description: postEdge.node.frontmatter.description,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }
  const postList = getPostList()

  return (
    <section>
      {postList.map((post) => (
        <Link
          to={post.path}
          key={post.title}
          className="text-gray-700 post-listing hover:text-gray-900"
        >
          <div className="py-6">
            <h3 className="mb-2 text-xl font-semibold leading-tight">
              {post.title}
            </h3>
            <time className="text-sm text-gray-600">
              {formatDate(post.date)}
            </time>
          </div>
        </Link>
      ))}
    </section>
  )
}

DetailedPostListing.propTypes = {
  postEdges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        fields: PropTypes.shape({
          date: PropTypes.string,
          slug: PropTypes.string,
        }).isRequired,
        excerpt: PropTypes.string,
        timeToRead: PropTypes.number,
        frontmatter: PropTypes.shape({
          date: PropTypes.string,
          template: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.string,
        }).isRequired,
      }),
    }).isRequired
  ).isRequired,
}
