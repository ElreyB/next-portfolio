import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';

const Text = styled.p``;

const Index = () => (
  <Layout title="home">
    <Text>Welcome to the home page.</Text>
  </Layout>
);

export default Index;
