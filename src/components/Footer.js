import React from 'react'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between h-32 max-w-4xl px-4 m-auto">
      <div className="flex">
        <a
          href="https://www.buymeacoffee.com/dakshshah96"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 text-gray-600 hover:text-gray-900"
        >
          Buy me a coffee
        </a>
        <a
          href="https://daksh.me/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          RSS
        </a>
      </div>
      <div className="flex">
        <a
          href="https://twitter.com/dakshshah96"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 text-gray-600 hover:text-gray-900"
        >
          Twitter
        </a>
        <a
          href="https://github.com/dakshshah96"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
