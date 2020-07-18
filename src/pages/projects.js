import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';

const Projects = () => (
  <Layout>
    <SEO
      pageTitle="Projects"
      description="Full Stack developer"
      keywords="Python, React, Gatsby, OOP, developer, back-end, front-end, REST, API"/>

    <section className="section has-text-centered is-size-4-desktop is-size-5-touch">
      <h3 className="title">Projects</h3>
      <hr />
      <p>
        Some of my projects see more on my
        {' '}
        <a href="https://github.com/LimaGuilherme">
          Github
        </a>
        .
      </p>

      <div className="columns is-centered">
        <div className="column is-half">
          <Card
            title="React Clean Architecture"
            subtitle=""
            link="https://github.com/LimaGuilherme/react-clean-architecture"
            tags={['React', 'SOLID', 'Design Patterns']}
            image='a'
          />
          <Card
            title="Flask Boilerplate"
            subtitle="A Python Flask RESTful API boilerplate that i usually use in my projects."
            link="https://github.com/LimaGuilherme/flask-boilerplate"
            tags={['Python', 'Flask', 'Api']}
            image='a'
          />
        </div>
      </div>

    </section>
  </Layout>
);

export default Projects;
