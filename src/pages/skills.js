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
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Major
              </p>
              <a className="card-header-icon" href="#"><span className="icon"><i aria-hidden="true" className="fas fa-tools"></i></span></a>
            </header>
            <div className="card-content">
              <div className="content">
                <div className="tags">
                  <span className="tag">Python</span>
                  <span className="tag">Flask</span>
                  <span className="tag">Django</span>
                  <span className="tag">ElasticSearch</span>
                  <span className="tag">OOP</span>
                  <span className="tag">DDD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <header className="has-text-centered card-header">
              <p className=" card-header-title ">
                Sou buraco
              </p>
              <a className="card-header-icon" href="#"><span className="icon"><i aria-hidden="true" className="fas fa-tools"></i></span></a>
            </header>
            <div className="card-content">
              <div className="content">
                <div className="content">
                  <div className="tags">
                    <span className="tag">Python</span>
                    <span className="tag">Flask</span>
                    <span className="tag">Django</span>
                    <span className="tag">ElasticSearch</span>
                    <span className="tag">OOP</span>
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
              <a className="card-header-icon" href="#"><span className="icon"><i aria-hidden="true" className="fas fa-tools"></i></span></a>
            </header>
            <div className="card-content">
              <div className="content">
                <div className="tags">
                  <span className="tag">Clean Communication</span>
                  <span className="tag">Problem-Solving</span>
                  <span className="tag">Work Ethic</span>
                  <span className="tag">Time Management</span>
                  <span className="tag">quickly learning</span>
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
