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
      description="Software Engineer"
      keywords="Python, React, Gatsby, OOP, developer, back-end, front-end, REST, API"
    />
    <section className="section content is-size-4-desktop is-size-5-touch">
      <h3 className="title has-text-centered">Hi There.</h3>
      <hr />
      <p>
        My specialites include quickly learning new skills and progamming languages, likewise Python, Flask, React, AngularJS, Elasticsearch, Celery, Memcached, Redis, Rabbit MQ, RESTful, DDD, TDD, AWS.
      </p>
      <p>
        If you were interested in my brief description, you can see some of my
        {' '}
        <Link to="/projects">projects</Link>
        {' or any of my '}
        <Link to="/articles">articles</Link>
        {'.'}
      </p>
    </section>
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
  </Layout>
);

export default Home;
