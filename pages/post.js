import Layout from '../components/Layout';
import { Component } from 'react';
import { withRouter } from 'next/router';

class Post extends Component {
  render() {
    const { router, url } = this.props;
    console.log(router);
    return (
      <Layout title={url.query.title}>
        <p>stuff</p>
      </Layout>
    );
  }
}

export default withRouter(Post);
