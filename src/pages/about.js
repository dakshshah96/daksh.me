import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default function AboutPage() {
  return (
    <Layout>
      <Helmet title={`About | ${config.siteTitle}`} />
      <SEO />
      <section className="max-w-4xl px-4 m-auto">
        <h1 className="mb-10 text-4xl font-bold">
          <span className="pb-1 border-b-4 border-indigo-500 border-dashed">
            About
          </span>
        </h1>
        <p className="mb-8 text-lg text-gray-700">
          I’m a full stack software developer and entrepreneur from India. Born
          in 1996, I grew up in India and later Kuwait. After graduating high
          school in 2014, I spent the next few years studying computer science
          at{' '}
          <a
            href="http://svnit.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-indigo-500"
          >
            NIT Surat
          </a>
          . I was never really good at “cracking” the Indian education system
          and spent most of my time in college learning how to code on the
          internet. I ultimately decided to drop out of college in 2017 to
          continue self-learning.
        </p>
        <p className="mb-8 text-lg text-gray-700">
          I joined{' '}
          <a
            href="https://www.tilt.bike/about"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-indigo-500"
          >
            Tilt
          </a>{' '}
          in late 2017 back when we were still called Pedal. Being a part of a
          small core team, I am what Tilt needs me to be. I also build all of
          the software at our little company.{' '}
          <a
            href="https://basecamp.com/about/policies/until-the-end-of-the-internet"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-indigo-500"
          >
            Building a sustainable business for the long-haul
          </a>{' '}
          has been a life changing experience and something I want to write
          about on{' '}
          <Link to="/blog/" className="font-bold hover:text-indigo-500">
            my blog
          </Link>
          .
        </p>
        <p className="text-lg text-gray-700">
          Though constantly changing, my focus right now is on Node.js, GraphQL,
          React and the JavaScript ecosystem in general.
        </p>
      </section>
    </Layout>
  )
}
