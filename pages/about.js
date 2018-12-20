import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';

const Text = styled.p``;

const Image = styled.img`
  height: 200px;
`;

const About = () => (
  <Layout title="About">
    <Text>A Javescript programmer</Text>
    <Image src="/static/logo-javascript.png" alt="Javascript logo" />
  </Layout>
);

export default About;
