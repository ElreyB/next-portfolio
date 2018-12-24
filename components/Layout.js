import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
  console.warn(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 110%
    background: #f0f0f0;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1``;
const Text = styled.p``;
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1em;
  font-size: 1.2em;
  background: indigo;
`;
const StyledLink = styled.a`
  color: darkgrey;
  text-decoraction: none;
  &:hover {
    font-weight: bold;
    color: lightgrey;
  }
`;
const Footer = styled.footer`
  padding: 1em;
`;

const Index = ({ children, title }) => (
  <LayoutContainer>
    <Head>
      <title>NeatProfolio</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
    </Head>
    <Header>
      <Link href="/">
        <StyledLink href="">Home</StyledLink>
      </Link>
      <Link href="/about">
        <StyledLink href="">About</StyledLink>
      </Link>
      <Link href="/hireme">
        <StyledLink href="">Contact</StyledLink>
      </Link>
    </Header>
    <Title>{title}</Title>
    {children}
    <Footer>&copy; {new Date().getFullYear()} </Footer>
    <GlobalStyle />
  </LayoutContainer>
);

export default Index;
