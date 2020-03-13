import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Projects = () => (
  <Layout>
    <SEO pageTitle="Projects" />
    <section className="section has-text-centered is-size-4-desktop is-size-5-touch">
      <h3 className="title">Projects</h3>
      <hr />
      <p>
        Some of my projects see more on my
        {' '}
        <a href="https://github.com">
          Github
        </a>
        .
      </p>

      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <h4 className="title is-size-5-desktop is-size-6-touch">John Smith</h4>
                  <p className="subtitle is-size-5-desktop is-size-6-touch">Build your personal website using breno</p>
                  <div className="tags">
                    <span className="tag">Aaa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </section>

  </Layout>
);

export default Projects;
