import { useRouter } from 'next/router';

const CompanyPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>登録完了！</h1>
      <p>{name}さん、ようこそ！🎉</p>
    </div>
  );
};

export default CompanyPage;