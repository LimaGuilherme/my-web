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
            title="What Is Your Band Favorite Word"
            subtitle="A python application to reveal your band's most used word."
            link="https://github.com/LimaGuilherme/what-is-your-band-favorite-word-api"
            tags={['Python', 'Flask', 'DDD', 'Elasticsearch', 'MongoDB']}
          />
          <Card
            title="Estate Agency Management"
            subtitle="A simple Estate Agency Management using the best of clean architecure and DDD."
            link="https://github.com/LimaGuilherme/estate-agency-management-api"
            tags={['Python', 'Flask', 'DDD', 'MySQL']}
          />
          <Card
            title="Knight Moves"
            subtitle="Algorithm to discover on a chessboard the least amount of movement for a horse to reach a certain house."
            link="https://github.com/LimaGuilherme/knight-moves"
            tags={['Python', 'Chess']}
          />
          <Card
            title="Facial Recognize"
            subtitle="A project designed to exemplify facial recognition."
            link="https://github.com/LimaGuilherme/facial-recognize"
            tags={['Python', 'AI']}
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
