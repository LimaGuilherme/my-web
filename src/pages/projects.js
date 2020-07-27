import React from 'react';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';



const Projects =  () => (
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
          />
          <Card
            title="Flask Boilerplate"
            subtitle="Flask RESTful API boilerplate that i use in my projects."
            link="https://github.com/LimaGuilherme/flask-boilerplate"
            tags={['Python', 'Flask', 'Api']}
          />
          <Card
            title="This Site"
            subtitle="My website"
            link="https://github.com/LimaGuilherme/my-web"
            tags={['React', 'GatsbyJS', 'Bulma']}
          />
        </div>
      </div>

    </section>
  </Layout>
);


export default Projects;
