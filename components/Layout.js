import Link from 'next/link';
import { Button, Layout } from 'antd';
const { Header, Content, Footer } = Layout;
export default ({ children }) => (
  <Layout>
    <Header>
      <span>Title</span>
    </Header>
    <Content>{children}</Content>
    <Footer>
      Develop by Crystal @<a>crystal</a>
    </Footer>
  </Layout>
);
