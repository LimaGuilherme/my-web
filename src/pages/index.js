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
      <h3 className="title has-text-centered">Hi There</h3>
      <hr />
      <p>
        I'm a software engineer with over 4 years of experience working with web applications.
        You can see some of my <Link to="/skills">skills</Link> here, or you can see some of my
        {' '}
        <Link to="/projects">projects</Link>
        {' or any of my '}
        <Link to="/articles">articles</Link>
        {'.'}
      </p>

      <div className="notification is-light has-text-centered">
        <p>If you want to contact me for work purposes or if you have any questions send me an email or add me on social networks</p>
        <p>Email: guilherme.lb@outlook.com</p>
        <p>Cellphone: (19) 9 97122-3873</p>

    <div className="has-text-centered">
      <a href="https://github.com/limaGuilherme" target="_blank" aria-label="github">
        <span className="icon is-large fa-1x">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
      <a href="https://medium.com/@guilherme.lb" target="_blank" aria-label="medium">
        <span className="icon is-large fa-1x">
          <FontAwesomeIcon icon={faMedium} />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/guilhermelb/" target="_blank" aria-label="linkedin">
        <span className="icon is-large fa-1x">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </a>
    </div>

      </div>

    </section>

  </Layout>
);

export default Home;
