import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default function AboutPage() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' })
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <SEO />
      <section className="max-w-4xl px-4 m-auto">
        <h1 className="mb-10 text-4xl font-bold">
          <span className="pb-1 border-b-4 border-indigo-500 border-dashed">
            Contact
          </span>
        </h1>
        <p className="mb-8 text-lg">
          Feel free to contact me using the form below. I read every single
          email I receive and will try to respond to you as soon as possible.
        </p>
        <form
          className="w-full max-w-sm"
          name="contact"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="block mb-6 font-bold text-gray-700" htmlFor="name">
            <div className="mb-1">Name</div>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="name"
              id="name"
              type="text"
              placeholder="John Doe"
              ref={register({
                required: 'Name is required',
                maxLength: { value: 80, message: 'Please enter a valid name' },
              })}
            />
            <div className="mt-2 text-sm font-semibold text-red-500">
              {errors.name && errors.name.message}
            </div>
          </label>
          <label className="block mb-6 font-bold text-gray-700" htmlFor="email">
            <div className="mb-1">Email</div>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              type="email"
              placeholder="john@example.com"
              ref={register({
                required: 'Email is required',
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              })}
            />
            <div className="mt-2 text-sm font-semibold text-red-500">
              {errors.email && errors.email.message}
            </div>
          </label>
          <label
            className="block mb-6 font-bold text-gray-700"
            htmlFor="message"
          >
            <div className="mb-1">Message</div>
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              rows="5"
              name="message"
              id="message"
              type="text"
              placeholder="Write your message here"
              ref={register({ required: 'Message is required' })}
            />
            <div className="mt-2 text-sm font-semibold text-red-500">
              {errors.message && errors.message.message}
            </div>
          </label>
          <button
            className="px-4 py-2 font-bold text-white bg-indigo-500 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </Layout>
  )
}
