import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';


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

      <div className="columns is-centered">
        <div className="column is-half">
          <div className="content">
            <ul>
              <li>Arroz</li>
              <li>Arroz</li>
              <li>Arroz</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  </Layout>
);

export default Skills;
