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
          Hey, I’m Daksh{' '}
          <span role="img" aria-label="Hey">
            👋
          </span>
        </h1>
        <p className="mb-8 text-lg">
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
          . But, as it turns out, I was never really good at “cracking” the
          Indian education system. I spent most of my time in college learning
          how to code on the internet and ultimately dropped out of college in
          2017 to continue self-learning.
        </p>
        <p className="mb-8 text-lg">
          I joined{' '}
          <a
            href="https://www.tilt.bike/about"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-indigo-500"
          >
            Tilt
          </a>{' '}
          in late 2017 when we were still called Pedal and had a few pilot
          projects. Being a part of a small core team, I am what Tilt needs me
          to be. I also build all of the software at our little company.{' '}
          <a
            href="https://basecamp.com/about/policies/until-the-end-of-the-internet"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-indigo-500"
          >
            Building a sustainable business for the long-haul
          </a>{' '}
          has been a life changing experience and something I aim to write about
          on{' '}
          <Link to="/blog/" className="font-bold hover:text-indigo-500">
            my blog
          </Link>
          .
        </p>
        <p className="text-lg">
          I’m deeply involved with Node.js, Vue, React and the JavaScript
          ecosystem in general at and outside of work. These are the topics that
          are covered in most of my technical posts. I’m also excited to start
          my{' '}
          <a
            href="https://www.swyx.io/writing/learn-in-public/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-indigo-500"
          >
            learning in public
          </a>{' '}
          journey by writing regularly here.
        </p>
      </section>
    </Layout>
  )
}
