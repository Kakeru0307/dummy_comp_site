import { useRouter } from 'next/router';

const UserinfoPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>{name}さんの情報をお願いします！</h1>
    </div>
  );
};

export default UserinfoPage;