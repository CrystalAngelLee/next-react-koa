import Link from 'next/link';
import Router from 'next/router';
import { Button } from 'antd';

const IndexPage = () => {
  const gotoB = () => {
    Router.push(
      {
        pathname: '/b',
        query: {
          id: 2,
        },
      },
      '/b/2'
    );
  };

  return (
    <>
      <Link href="/a?id=1" as="/a/1">
        <Button>123</Button>
      </Link>
      <Button onClick={gotoB}>toB</Button>
      112221
    </>
  );
};
export default IndexPage;

// Link本身不作为任何节点，children 一定是单个节点
// as : 路由映射
