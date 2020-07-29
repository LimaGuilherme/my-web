import React from 'react';

import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faGithub, faMedium, faLinkedin, faStackOverflow, faSteam } from '@fortawesome/free-brands-svg-icons'
import Particles from "react-particles-js";

import Layout from '../components/Layout';
import SEO from "../components/SEO";




const Profile = () => (
  <Layout>
    <SEO
      pageTitle="Home"
      description="Software Engineer"
      keywords="Python, React, Gatsby, OOP, developer, back-end, front-end, REST, API"
    />
    <section className="section has-text-centered content is-size-4-desktop is-size-5-touch">
      <h3 className="title has-text-centered">Hi There</h3>
      <hr />
      <p>
        I'm a software engineer with over 4 years of experience working with web applications.
      </p>
      <p>
        You can see some of my <Link to="/skills">skills</Link> here, or you can see some of my
        {' '}
        <Link to="/projects">projects</Link>
        {' or any of my '}
        <Link to="/articles">articles</Link>
        {'.'}
      </p>
      <hr />
      <div className="has-text-centered">
        <p>You can find here some of my profiles:</p>

        <div className="has-text-centered ">
          <a className="social-media-icons" href="https://github.com/limaGuilherme" target="_blank" aria-label="github">
        <span className="icon is-large fa-1x">
          <FontAwesomeIcon icon={faGithub} />
        </span>
          </a>
          <a className="social-media-icons" href="https://medium.com/@guilherme.lb" target="_blank" aria-label="medium">
        <span className="icon is-large fa-1x">
          <FontAwesomeIcon icon={faMedium} />
        </span>
          </a>
          <a className="social-media-icons" href="https://www.linkedin.com/in/guilhermelb/" target="_blank" aria-label="linkedin">
        <span className="icon is-large fa-1x">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
          </a>
          <a className="social-media-icons" href="https://pt.stackoverflow.com/users/30571/guilherme-lima" target="_blank" aria-label="linkedin">
        <span className="icon is-large fa-1x">
          <FontAwesomeIcon icon={faStackOverflow} />
        </span>
          </a>
          <a className="social-media-icons" href="https://steamcommunity.com/profiles/76561198116602624/" target="_blank" aria-label="linkedin">
        <span className="icon is-large fa-1x">
          <FontAwesomeIcon icon={faSteam} />
        </span>
          </a>
        </div>


      </div>

    </section>

  </Layout>
);

export default Profile;
