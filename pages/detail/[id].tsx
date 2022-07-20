import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Detail: NextPage = () => {
  const router = useRouter();

  return <div>Detail {router.pathname}</div>;
};

export default Detail;
