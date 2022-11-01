import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Instagram_logo } from '../img/Instagram_logo.svg';
import AuthForm from '../components/SignForm';
import { useDispatch } from 'react-redux';
import { addMemberThunk } from '../redux/modules/authSlice';
import {
  AuthSign,
  AuthFormContainer,
  AuthFirstBoxUp,
  AuthLogoBox,
  AuthInputBox,
  Input,
  AuthBtn,
  AuthOR,
  Line,
  AuthSecondBox,
  AuthThirdBox,
} from '../components/SignForm';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState({
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
  });

  const onChangeSignUp = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  const onClickSignUp = () => {
    if (
      signUp.email.trim() === '' ||
      signUp.name.trim() === '' ||
      signUp.password.trim() === '' ||
      signUp.passwordConfirm.trim() === ''
    ) {
      alert('모든 항목을 입력해주세요.');
    } else if (signUp.password !== signUp.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
    }
    signUp.email = signUp.email.toLowerCase();
    dispatch(
      addMemberThunk({
        nickname: signUp.email,
        name: signUp.name,
        password: signUp.password,
        passwordConfirm: signUp.passwordConfirm,
      })
    );
    alert('회원가입 완료!');
    navigate('/signin');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClickSignUp();
  };

  return (
    <AuthSign>
      <AuthFormContainer>
        <AuthFirstBoxUp>
          <AuthLogoBox>
            <Instagram_logo width="175px" height="55px" />
          </AuthLogoBox>
          <AuthInputBox>
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
            <AuthBtn onClick={() => alert('준비중입니다.')}>
              Facebook으로 로그인
            </AuthBtn>
            <AuthOR>
              <Line></Line>
              <div style={{ fontSize: '14px', margin: '20px 20px' }}>또는</div>
              <Line></Line>
            </AuthOR>
            <Input
              type="text"
              name="email"
              value={signUp.email}
              onChange={onChangeSignUp}
              onKeyPress={onKeyPress}
              placeholder="이메일 주소"
            />
            <Input
              type="text"
              name="name"
              value={signUp.name}
              onChange={onChangeSignUp}
              onKeyPress={onKeyPress}
              placeholder="사용자 이름"
            />
            <Input
              type="password"
              name="password"
              value={signUp.password}
              onChange={onChangeSignUp}
              onKeyPress={onKeyPress}
              minLength={4}
              maxLength={16}
              placeholder="비밀번호"
            />
            <Input
              type="password"
              name="passwordConfirm"
              value={signUp.passwordConfirm}
              onChange={onChangeSignUp}
              onKeyPress={onKeyPress}
              minLength={4}
              maxLength={16}
              placeholder="비밀번호 확인"
            />
            <AuthBtn>가입</AuthBtn>
          </AuthInputBox>
        </AuthFirstBoxUp>
        <AuthSecondBox>
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
        </AuthSecondBox>
        <AuthThirdBox>
          <div style={{ fontSize: '15px' }}>앱을 다운로드하세요.</div>
        </AuthThirdBox>
        <AuthForm />
      </AuthFormContainer>
    </AuthSign>
  );
};

export default SignUp;
