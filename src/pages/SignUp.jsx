import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Instagram_logo } from '../img/Instagram_logo.svg';
import '../components/AuthForm.css';
import AuthForm from '../components/AuthForm';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="AuthForm">
      <div className="AuthFormContainer">
        <div className="AuthFirstBox-Up">
          <div className="AuthLogoBox">
            <Instagram_logo width="175px" height="55px" />
          </div>
          <div className="AuthInputBox">
            <div
              style={{
                fontSize: '17px',
                fontWeight: '600',
                textAlign: 'center',
                color: 'rgba(142, 142, 142)',
              }}
            >
              친구들의 사진과 동영상을 보려면 가입하세요.
            </div>
            <div className="AuthBtn" onClick={() => alert('준비중입니다.')}>
              Facebook으로 로그인
            </div>
            <div className="AuthOR">
              <hr className="Line"></hr>
              <div style={{ fontSize: '14px', margin: '20px 20px' }}>또는</div>
              <hr className="Line"></hr>
            </div>
            <input placeholder="휴대폰 번호 또는 이메일 주소" />
            <input placeholder="성명" />
            <input placeholder="사용자 이름" />
            <input placeholder="비밀번호" />
            <div className="AuthBtn">가입</div>
          </div>
        </div>
        <div className="AuthSecondBox">
          <div>계정이 있으신가요?</div>
          <div
            style={{
              marginLeft: '5px',
              color: 'rgba(0, 149, 246)',
              fontWeight: '600',
            }}
            onClick={() => {
              navigate('/signin');
            }}
          >
            로그인
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

export default SignUp;
