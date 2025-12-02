import SettingServices from "@services/SettingServices";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Fetch general metadata from backend API
    // Wrap in try-catch to handle build-time failures when API is unavailable
    let setting = null;
    try {
      setting = await SettingServices.getStoreSeoSetting();
    } catch (error) {
      // Silently fail during build - fallback values will be used
      console.warn("Failed to fetch store SEO settings during build:", error.message);
    }

    return { ...initialProps, setting };
  }

  render() {
    const setting = this.props.setting;
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={setting?.favicon || "/favicon.ico"} />
          <meta
            property="og:title"
            content={
              setting?.meta_title ||
              "All American Foods Network "
            }
          />
          <meta property="og:type" content="eCommerce Website" />
          <meta
            property="og:description"
            content={
              setting?.meta_description ||
              ""
            }
          />
          <meta
            name="keywords"
            content={setting?.meta_keywords || "ecommenrce online store"}
          />
          <meta
            property="og:url"
            content={
              setting?.meta_url || "https://allamericanfoodsnetwork.com/"
            }
          />
          <meta
            property="og:image"
            content={
              setting?.meta_img ||
              ""
            }
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
