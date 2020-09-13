import axios from 'axios';

function IndexPage() {
  return <span>index</span>;
}

IndexPage.getInitialProps = async () => {
  const result = await axios
    .get('/github/search/repositories?q=react')
    .then((resq) => console.log(resq));

  return {
    data: result.data,
  };
};
export default IndexPage;
