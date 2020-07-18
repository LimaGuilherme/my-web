import React from 'react';

import Layout from "components/Layout";
import SEO from "components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO pageTitle="Page Not Found"/>
    <section className="section">
      <h1 className="title has-text-centered">Page Not Found</h1>
    </section>
    <hr/>
    <p className="has-text-centered">
      What you trying to do?
    </p>
  </Layout>
)

export default NotFoundPage;