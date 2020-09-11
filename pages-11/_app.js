import App from 'next/app';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import Layout from '../components/Layout';
import testHoc from '../lib/with-redux';

class CustomApp extends App {
  // 每次页面切换都会执行
  static async getInitialProps(ctx) {
    const { Component } = ctx;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Layout>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    );
  }
}

// 覆盖Nextjs 的APP组件
export default testHoc(CustomApp);
