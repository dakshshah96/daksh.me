/* eslint-disable react/jsx-props-no-spreading, react/destructuring-assignment, react/no-danger, react/forbid-prop-types, react/require-default-props  */
import React from 'react'
import PropTypes from 'prop-types'

require('typeface-inter')

export default function HTML(props) {
  return (
    <html
      lang="en"
      {...props.htmlAttributes}
      className="antialiased text-gray-900 font-display"
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript>This site runs best with JavaScript enabled.</noscript>
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
