import React from 'react'
import daksh from '../images/daksh.png'

export default function UserInfo() {
  return (
    <aside className="max-w-4xl px-4 py-10 m-auto mt-16 mb-10 bg-purple-900 rounded-lg">
      <div className="flex px-4">
        <img
          src={daksh}
          alt="Daksh"
          className="w-24 h-24 mr-8 border-4 border-purple-300 border-solid rounded-full"
        />
        <div>
          <h3 className="mb-5 text-xl font-bold text-purple-100">
            Thanks for reading!
          </h3>
          <p className="mb-8 text-purple-100">
            Hi, I’m Daksh, the author of this post and a full stack software
            engineer. If you enjoyed reading this post or anything else I’ve
            written, please consider supporting me!
          </p>
          <a
            className="flex items-center justify-center w-48 py-2 text-purple-900 bg-purple-100 rounded-md hover:bg-purple-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.buymeacoffee.com/dakshshah96"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
              alt="Buy me a coffee"
              className="w-5"
            />
            <span className="ml-3 text-lg font-medium">Buy me a coffee</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
