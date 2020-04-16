import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default function Navigation({ menuLinks }) {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between h-32 max-w-4xl px-4 m-auto">
        <div className="flex">
          <Link to="/">
            <span className="text-2xl font-bold">Daksh Shah</span>
          </Link>
        </div>
        <div className="flex">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className="px-4 py-2 mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-900"
              activeClassName="bg-gray-200 text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
}
