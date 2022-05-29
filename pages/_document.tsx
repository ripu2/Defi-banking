import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript
  } from "next/document";
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
  
      return initialProps;
    }
  
    render() {
      return (
        <Html>
          <Head>
            <title>DeFi Banking</title>
            <meta name="description" content="Driver Assignment" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin={"crossorigin"}
            />
           <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
           <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100&family=Caveat&family=Yanone+Kaffeesatz:wght@200&display=swap" rel="stylesheet" />           </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;