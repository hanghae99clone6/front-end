import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Instagram_logo } from '../img/Instagram_logo.svg';
import '../components/AuthForm.css';
import AuthForm from '../components/AuthForm';

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="AuthForm">
      <div className="AuthFormContainer">
        <div className="AuthFirstBox-In">
          <div className="AuthLogoBox">
            <Instagram_logo width="175px" height="55px" />
          </div>
          <div className="AuthInputBox">
            <input placeholder="전화번호, 사용자 이름 또는 이메일" />
            <input placeholder="비밀번호" />
            <div className="AuthBtn">로그인</div>
            <div className="AuthOR">
              <hr className="Line"></hr>
              <div style={{ fontSize: '14px', margin: '20px 20px' }}>또는</div>
              <hr className="Line"></hr>
            </div>
          </div>
          <div
            style={{ fontSize: '13px', cursor: 'pointer' }}
            onClick={() => alert('준비중입니다.')}
          >
            비밀번호를 잊으셨나요?
          </div>
        </div>
        <div className="AuthSecondBox">
          <div>계정이 없으신가요?</div>
          <div
            style={{
              marginLeft: '5px',
              color: 'rgba(0, 149, 246)',
              fontWeight: '600',
            }}
            onClick={() => {
              navigate('/signup');
            }}
          >
            가입하기
          </div>
        </div>
        <div className="AuthThirdBox">
          <div style={{ fontSize: '15px' }}>앱을 다운로드하세요.</div>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default SignIn;
