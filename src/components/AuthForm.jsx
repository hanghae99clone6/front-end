import React from 'react';
import styled from 'styled-components';

const AuthForm = () => {
  return (
    <StAuthForm>
      <FirstBox>
        <InputBox>
          <div>
            <input />
            <input />
            <div>로그인</div>
            <div></div>
            <div>또는</div>
          </div>
        </InputBox>
      </FirstBox>
      <SecondBox>
        <div>
          <div>계정이 없으신가요?</div>
          <div>가입하기</div>
        </div>
      </SecondBox>
      <ThirdBox>
        <div>앱을 다운로드하세요.</div>
        <div>앱스토어</div>
        <div>플레이스토어</div>
      </ThirdBox>
    </StAuthForm>
  );
};

export default AuthForm;

const StAuthForm = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
`;

const FirstBox = styled.div`
  display: block;
  width: 350px;
  height: 400px;
  background-color: aliceblue;
`;

const SecondBox = styled.div`
  width: 350px;
  height: 63px;
  background-color: aliceblue;
`;

const ThirdBox = styled.div`
  width: 350px;
  height: 102px;
`;

const InputBox = styled.div`
  width: 350px;
  height: 210px;
`;
