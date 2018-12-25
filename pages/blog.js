import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a href="">{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="js-post" title="JS" />
      <PostLink slug="react-post" title="React" />
      <PostLink slug="angular-post" title="Angular" />
    </ul>
  </Layout>
);

export default Blog;
