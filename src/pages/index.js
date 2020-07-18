import React from 'react';

import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faGithub, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/Layout';
import SEO from "../components/SEO";
const Home = () => (
  <Layout>
    <SEO
      pageTitle="Home"
      description="Full Stack developer"
      keywords="Python, React, Gatsby, OOP, developer, back-end, front-end, REST, API"
    />
    <h1 className="title has-text-centered">Hi There,</h1>
    <h2 className="subtitle has-text-centered">I'am a full Stack Developer </h2>
    <div className="has-text-centered">
      <a href="https://github.com" aria-label="github">
        <span className="icon-is-large fa-2x">
          <FontAwesomeIcon icon={faGithub}/>
        </span>
      </a>
      <a href="https://github.com" aria-label="medium">
        <span className="icon-is-large fa-2x">
          <FontAwesomeIcon icon={faMedium}/>
        </span>
      </a>
      <a href="https://github.com" aria-label="linkedin">
        <span className="icon-is-large fa-2x">
          <FontAwesomeIcon icon={faLinkedin}/>
        </span>
      </a>
    </div>
    <section className="section content is-size-4-desktop is-size-5-touch">
      <p>
        just fucking man
      </p>
      <p>
        Checkout my
        {' . '}
        <Link to="/projects">projects</Link>
      </p>
    </section>
  </Layout>
);

export default Home;
