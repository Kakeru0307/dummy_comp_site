import { useRouter } from 'next/router';
import UserInfoRegister from './Components/userInfoRegister';

const UserinfoPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>{name}さんの情報をお願いします！</h1>
      <UserInfoRegister />
    </div>
  );
};

export default UserinfoPage;