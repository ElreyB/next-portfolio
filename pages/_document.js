import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 110%
    background: #f0f0f0;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html ln="en">
        <Head>
          <meta
            name="description"
            content="A site for my programming porfolio"
          />
          <meta charSet="utf-8" />
          <mete name="robots" content="noindex, nofollow" />
          <neta name="viewport" content="width=device-width" />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <GlobalStyle />
      </html>
    );
  }
}
