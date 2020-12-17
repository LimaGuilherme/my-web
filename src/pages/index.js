import React from 'react';

import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faGithub, faMedium, faLinkedin, faStackOverflow, faSteam } from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/Layout';
import SEO from "../components/SEO";


const Home = () => (
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
        I'm a software engineer with over 5 years of experience working with web applications.
      </p>
      <p>
        You can see some of my skills below, or you can see some of my
        {' '}
        <Link to="/projects">projects</Link>
        {' or any of my '}
        <Link to="/articles">articles</Link>
        {'.'}
      </p>

      <div className="columns is-multiline">
        <div className="column is-one-third">
          <div className="card ">
            <header className="card-header">
              <p className="card-header-title">
                Major Skills
              </p>
            </header>
            <div className="card-content card-skills">
              <div className="content ">
                <div className="tags">
                  <span className="tag">Python</span>
                  <span className="tag">Flask</span>
                  <span className="tag">Django</span>
                  <span className="tag">HTML/CSS/JS</span>
                  <span className="tag">ES6</span>
                  <span className="tag">AngularJS</span>
                  <span className="tag">Bootstrap</span>
                  <span className="tag">SASS</span>
                  <span className="tag">RESTful</span>
                  <span className="tag">Linux</span>
                  <span className="tag">Nginx</span>
                  <span className="tag">PostgresSQL</span>
                  <span className="tag">ElasticSearch</span>
                  <span className="tag">Selenium</span>
                  <span className="tag">OOP</span>
                  <span className="tag">DDD</span>
                  <span className="tag">TDD</span>
                  <span className="tag">SOLID</span>
                  <span className="tag">Design Patterns</span>
                  <span className="tag">Scrum</span>
                  <span className="tag">Kanban</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card has-text-centered">
            <header className="card-header">
              <p className=" card-header-title ">
                Enthusiast
              </p>
            </header>
            <div className="card-content card-skills">
              <div className="content">
                <div className="content">
                  <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">Go</span>
                    <span className="tag">StyleD Components</span>
                    <span className="tag">Bulma</span>
                    <span className="tag">Docker</span>
                    <span className="tag">NoSQL</span>
                    <span className="tag">AWS</span>
                    <span className="tag">Azure</span>
                    <span className="tag">Memcached</span>
                    <span className="tag">RabbitMQ</span>
                    <span className="tag">Redis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Soft Skills
              </p>
            </header>
            <div className="card-content card-skills">
              <div className="content">
                <div className="tags">
                  <span className="tag">Team Player</span>
                  <span className="tag">Clean Communication</span>
                  <span className="tag">Problem-Solving</span>
                  <span className="tag">Work Ethic</span>
                  <span className="tag">Time Management</span>
                  <span className="tag">Quick Learning</span>
                  <span className="tag">Patience</span>
                  <span className="tag">Empathy</span>
                  <span className="tag">Teaching</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

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

export default Home;
