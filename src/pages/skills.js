import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Skills =  () => (
  <Layout>
    <SEO
      pageTitle="Skills"
      description="Full Stack developer"
      keywords="Python, React, Gatsby, OOP, developer, back-end, front-end, REST, API"/>

    <section className="section has-text-centered is-size-4-desktop is-size-5-touch">
      <h3 className="title">Skills</h3>
      <hr />
      <p>
        My specialites include quickly learning new skills and progamming languages, likewise:
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
                  <span className="tag">React</span>
                  <span className="tag">Bootstrap</span>
                  <span className="tag">SASS</span>
                  <span className="tag">Bulma</span>
                  <span className="tag">RESTful</span>
                  <span className="tag">Linux</span>
                  <span className="tag">Git</span>
                  <span className="tag">Nginx</span>
                  <span className="tag">PostgresSQL</span>
                  <span className="tag">Rabbit MQ</span>
                  <span className="tag">Redis</span>
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
                Average Skills
              </p>
            </header>
            <div className="card-content card-skills">
              <div className="content">
                <div className="content">
                  <div className="tags">
                    <span className="tag">NodeJS</span>
                    <span className="tag">GraphQL</span>
                    <span className="tag">StyleD Components</span>
                    <span className="tag">VueJS</span>
                    <span className="tag">Docker</span>
                    <span className="tag">NoSQL</span>
                    <span className="tag">Azure</span>
                    <span className="tag">Memcached</span>
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

    </section>
  </Layout>
);

export default Skills;
