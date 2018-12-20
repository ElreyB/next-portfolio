import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';

const Text = styled.p``;
const StyledLink = styled.a`
  margin: 0 3px;
  color: darkblue;
  text-decoraction: none;
  &:hover {
    font-weight: bold;
    color: lightblue;
  }
`;

const HireMe = () => (
  <Layout title="Hire ME">
    <Text>
      You can hire me at
      <Link>
        <StyledLink href="" href="mailto:elbelmonti@gamil.com">
          elbelmonti@gamil.com
        </StyledLink>
      </Link>
    </Text>
  </Layout>
);

export default HireMe;
