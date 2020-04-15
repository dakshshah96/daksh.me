import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default function PostListing({ postEdges }) {
  const getPostList = () => {
    const postList = []
    postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
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
        <Link to={post.path} key={post.title} className="post-listing">
          <div className="py-4">
            <h3 className="text-xl font-semibold leading-tight text-gray-700 hover:text-gray-900">
              {post.title}
            </h3>
          </div>
        </Link>
      ))}
    </section>
  )
}

PostListing.propTypes = {
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
        }).isRequired,
      }),
    }).isRequired
  ).isRequired,
}
