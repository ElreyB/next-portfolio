import Link from 'next/link';
import Layout from '../components/Layout';

const Error = () => (
  <Layout title="Sorry Page not found!!!!">
    <Link href="/">
      <a>Home</a>
    </Link>
  </Layout>
);

export default Error;
