import fetch from 'isomorphic-unfetch';
import { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Error from './_error';
const Text = styled.p``;

const Image = styled.img`
  height: 200px;
`;

export default class About extends Component {
  static async getInitialProps() {
    const responds = await fetch('https://api.github.com/users/elreyb');
    const statusCode = responds.status > 200 ? responds.status : false;
    const data = await responds.json();

    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title="About">
        <Text>A Javescript programmer: {user.name}</Text>
        <Image src={user.avatar_url} alt={user.name} />
      </Layout>
    );
  }
}
