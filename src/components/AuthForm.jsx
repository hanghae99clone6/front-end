import React from 'react';
import './AuthForm.css';
import appstore from '../img/appstore.png';
import playstore from '../img/playstore.png';

const AuthForm = () => {
  return (
    <div className="AuthLinkBox">
      <img
        alt="App Store에서 다운로드"
        src={appstore}
        style={{ height: '40px' }}
        onClick={() => {
          window.open('https://apps.apple.com/kr/app/instagram/id389801252');
        }}
      />
      <img
        alt="Google Play에서 다운로드"
        src={playstore}
        style={{ height: '40px' }}
        onClick={() => {
          window.open(
            'https://play.google.com/store/apps/details?id=com.instagram.android'
          );
        }}
      />
    </div>
  );
};

export default AuthForm;
