import fetch from 'isomorphic-unfetch';
import { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';

const Text = styled.p``;

const Image = styled.img`
  height: 200px;
`;

export default class About extends Component {
  // state = {
  //   user: null
  // };

  static async getInitialProps() {
    const responds = await fetch('https://api.github.com/users/elreyb');
    const data = await responds.json();

    return { user: data };
  }

  render() {
    const { user } = this.props;
    return (
      <Layout title="About">
        <Text>A Javescript programmer: {user.name}</Text>
        <Image src={user.avatar_url} alt={user.name} />
      </Layout>
    );
  }
}
