import React from 'react';
import Reviews from './Reviews';
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['successes'],
    title: 'Reviews',
    component: (
      <Layout>
        <Reviews />
      </Layout>
    ),
  };
}

export default action;