import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a href="">{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink title="JS" />
      <PostLink title="React" />
      <PostLink title="Angular" />
    </ul>
  </Layout>
);

export default Blog;
