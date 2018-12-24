import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Text = styled.p`
  padding-left: 2px;
  a {
    margin-left: 5px;
  }
`;

const StyledError = styled(Text)`
  color: #3aa3d5;
`;
const StyledStatusCode = styled.span`
  color: red;
  display: inline-block;
`;

const Error = ({ statusCode }) => (
  <Layout title="Sorry Page not found!!!!">
    {statusCode ? (
      <StyledError>
        Could not load your user data:{' '}
        <StyledStatusCode>Status Code {statusCode}</StyledStatusCode>
      </StyledError>
    ) : (
      <Text>
        Couldn't get that page, sorry.
        <Link href="/">
          <a>Return to Home Page</a>
        </Link>
      </Text>
    )}
  </Layout>
);

export default Error;
