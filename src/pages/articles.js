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
            title="Getting Started With: Geospatial Libraries"
            subtitle="A selection of most valuable libraries in Python"
            link="https://towardsdatascience.com/getting-started-with-geospatial-libraries-1140859d79a7"
            tags={['Python', 'Geoprocessing']}
            image='a'
          />
          <Card
            title="Understand Lucene To Understand ElasticSearch"
            subtitle="Let’s look at the heart of Elasticsearch"
            link="https://medium.com/dev-genius/understand-lucene-to-understand-elasticsearch-85037d5b7577e"
            tags={['Lucene', 'ElasticSearch']}
            image='a'
          />
          <Card
            title="Facial Recognize in Python"
            subtitle="An easy and smart way to recognize human face"
            link="https://medium.com/swlh/facial-recognize-in-python-406dcbdcee4d"
            tags={['Pyton', 'Artificial Intelligence']}
            image='a'
          />
          <Card
            title="Stop Using Your Mouse At PyCharm"
            subtitle="An animated tutorial to increase your productivity in Pycharm"
            link="https://medium.com/dev-genius/stop-using-your-mouse-at-pycharm-25fa9573350"
            tags={['Pyton', 'Pycharm', 'Intellij']}
            image='a'
          />
        </div>
      </div>

    </section>
  </Layout>
);

export default Articles;
