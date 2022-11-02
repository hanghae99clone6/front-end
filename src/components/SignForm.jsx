import React from 'react';
import appstore from '../img/appstore.png';
import playstore from '../img/playstore.png';
import styled from 'styled-components';

const SignForm = () => {
  return (
    <AuthLinkBox>
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
    </AuthLinkBox>
  );
};

export default SignForm;

const AuthLinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  cursor: pointer;
`;

export const AuthSign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const AuthFormContainer = styled.div`
  display: block;

  width: 350px;
  height: 747px;
`;

export const AuthFirstBoxIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 400px;

  margin: 0 0 10px 0;
  padding: 10px 0 10px 0;

  border: 1px solid #dbdbdb;
`;

export const AuthFirstBoxUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 500px;

  margin: 0 0 10px 0;
  padding: 10px 0 10px 0;

  border: 1px solid #dbdbdb;
`;

export const AuthLogoBox = styled.div`
  cursor: pointer;

  margin: 20px 0 5px 0;
`;

export const AuthInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 270px;

  margin: 0;
`;

export const Input = styled.input`
  overflow: hidden;

  width: 270px;
  height: 35px;

  margin: 5px 0 0 0;
  padding: 9px 0 7px 8px;

  color: #262626;
  background-color: #fafafa;
  border: 1px solid rgba(168, 168, 168, 0.5);
  border-radius: 3px;
`;

export const AuthBtn = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;

  width: 270px;
  height: 30px;

  margin: 15px 0 0 0;
  padding: 5px 9px;

  color: white;
  background-color: #0095f6;
  border-radius: 4px;

  cursor: pointer;
`;

export const AuthOR = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 270px;
`;

export const Line = styled.hr`
  width: 100px;
  border: 1px solid rgba(168, 168, 168, 0.3);
`;

export const AuthSecondBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  line-height: 18px;
  height: 63px;

  margin: 0 0 10px 0;
  padding: 10px 0 10px 0;

  border: 1px solid #dbdbdb;
`;

export const AuthThirdBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 25px;
  gap: 25px;
`;
