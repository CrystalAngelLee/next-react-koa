import { withRouter } from 'next/router';
function SearchPage({ router }) {
  console.log('router', router.query.query);
  return <span>search</span>;
}
export default withRouter(SearchPage);
