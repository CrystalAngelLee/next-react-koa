import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import MyContext from '../lib/my-context';
import store from '../store/store';

class CustomApp extends App {
  // 每次页面切换都会执行
  static async getInitialProps({ Component, ctx }) {
    let pageProps;
    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <MyContext.Provider value={'test'}>
            <Component {...pageProps} />
          </MyContext.Provider>
        </Provider>
      </Container>
    );
  }
}

// 覆盖Nextjs 的APP组件
export default CustomApp;
