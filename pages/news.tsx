import Layout from '../components/layout';
import Header from '../components/header';

const News = () => {
  return (
    <Layout isHeader isNavBar Header={<Header text="News" />}>
      News
    </Layout>
  );
};

export default News;
