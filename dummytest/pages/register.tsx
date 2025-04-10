import React from 'react';
import UserCom from './Components/userCom'; 
import NavigationButton from './Components/pagesButton';

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <UserCom actionURL="http://localhost:3001/userinfo" />
      <NavigationButton text="ログインへ" href="/" />
      <NavigationButton text="採用担当者様はこちら" href="/companyregister" />
    </div>
  );
};

export default RegisterPage;