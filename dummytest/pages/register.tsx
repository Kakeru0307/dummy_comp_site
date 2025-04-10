import React from 'react';
import UserCom from './Components/userCom'; 
import NavigationButton from './Components/pagesButton';

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <UserCom />
      <NavigationButton text="ログインへ" href="/" />
    </div>
  );
};

export default RegisterPage;