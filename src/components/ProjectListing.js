import React from 'react'
import PropTypes from 'prop-types'
import GitHubButton from 'react-github-btn'

export default function ProjectListing({ projects }) {
  return (
    <section>
      {projects.map((project) => (
        <div
          key={project.title}
          className="grid items-center grid-cols-4 gap-4 py-6 border-b-2 border-gray-200 last:border-b-0"
        >
          <h3 className="col-span-1 text-xl font-semibold leading-tight text-gray-700 hover:text-gray-900">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div>{project.title}</div>
            </a>
          </h3>
          <p className="col-span-2 pl-6 text-gray-600">{project.description}</p>
          <div className="col-span-1 justify-self-end">
            <GitHubButton
              href={project.url}
              data-size="large"
              data-show-count="true"
            >
              Source
            </GitHubButton>
          </div>
        </div>
      ))}
    </section>
  )
}

ProjectListing.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
}
