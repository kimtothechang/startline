import Layout from '../components/layout';
import Header from '../components/header';

const Me = () => {
  return (
    <Layout isHeader isNavBar Header={<Header text="My Page" />}>
      Me
    </Layout>
  );
};

export default Me;
