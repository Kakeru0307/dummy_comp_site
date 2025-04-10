import UserCom from './Components/userCom'; 
import NavigationButton from './Components/pagesButton';

const CompanyRegisterPage: React.FC = () => {
    return (
      <div>
        <h1>Register</h1>
        <UserCom actionURL="http://localhost:3001/companyinfo" />
        <NavigationButton text="ログインへ" href="/" />
        <NavigationButton text="インターン生はこちら" href="/register" />
      </div>
    );
  };
  
  export default CompanyRegisterPage;