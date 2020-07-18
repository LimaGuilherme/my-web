import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';

const Articles = () => (
  <Layout>
    <SEO
      pageTitle="Articles"
      description="Full Stack developer"
      keywords="Python, React, Gatsby, OOP, developer, back-end, front-end, REST, API"/>
    <section className="section has-text-centered is-size-4-desktop is-size-5-touch">
      <h3 className="title">Articles</h3>
      <hr />
      <p>
        Take a look at what I'm thinking and studying at
        {' '}
        <a href="https://medium.com/@guilherme.lb" target="_blank">
          Medium
        </a>
        .
      </p>

      <div className="columns is-centered">
        <div className="column is-half">
          <Card
            title="Understanding Data Structures in Python"
            subtitle="An overview of the most useful builtins data structures."
            link="https://towardsdatascience.com/understanding-data-structures-in-python-86e7da6a9b39"
            tags={['Python', 'Data Structures']}
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

export default Articles;
