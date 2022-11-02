import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Instagram_Logo } from '../img/Instagram_Logo.svg';
import AuthForm from '../components/SignForm';
import { useDispatch } from 'react-redux';
import { checkInMemberThunk } from '../redux/modules/authSlice';
import {
  AuthSign,
  AuthFormContainer,
  AuthFirstBoxIn,
  AuthLogoBox,
  AuthInputBox,
  Input,
  AuthBtn,
  AuthOR,
  Line,
  AuthSecondBox,
  AuthThirdBox,
} from '../components/SignForm';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
  });

  const onChangeSignIn = (e) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  const onClickSignIn = () => {
    if (signIn.email.trim() === '' || signIn.password.trim() === '') {
      alert('모든 항목을 입력해주세요.');
    }
    dispatch(
      checkInMemberThunk({
        nickname: signIn.email,
        password: signIn.password,
      })
    );
    navigate('/');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClickSignIn();
  };

  return (
    <AuthSign>
      <AuthFormContainer>
        <AuthFirstBoxIn>
          <AuthLogoBox>
            <Instagram_Logo width="175px" height="55px" />
          </AuthLogoBox>
          <AuthInputBox className="AuthInputBox">
            <Input
              type="text"
              name="email"
              value={signIn.email}
              onChange={onChangeSignIn}
              onKeyPress={onKeyPress}
              placeholder="이메일"
            />
            <Input
              type="password"
              name="password"
              value={signIn.password}
              onChange={onChangeSignIn}
              onKeyPress={onKeyPress}
              minLength={4}
              maxLength={16}
              placeholder="비밀번호"
            />
            <AuthBtn onClick={onClickSignIn} className="AuthBtn">
              로그인
            </AuthBtn>
            <AuthOR>
              <Line></Line>
              <div style={{ fontSize: '14px', margin: '20px 20px' }}>또는</div>
              <Line></Line>
            </AuthOR>
          </AuthInputBox>
          <div
            style={{ fontSize: '13px', cursor: 'pointer' }}
            onClick={() => alert('준비중입니다.')}
          >
            비밀번호를 잊으셨나요?
          </div>
        </AuthFirstBoxIn>
        <AuthSecondBox>
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
        </AuthSecondBox>
        <AuthThirdBox>
          <div style={{ fontSize: '15px' }}>앱을 다운로드하세요.</div>
        </AuthThirdBox>
        <AuthForm />
      </AuthFormContainer>
    </AuthSign>
  );
};

export default SignIn;
