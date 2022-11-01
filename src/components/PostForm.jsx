import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPostThunk } from '../redux/modules/postSlice';
import styled from 'styled-components';

const PostForm = () => {
  const dispatch = useDispatch();
  const [write, setWrite] = useState();

  const onClick = () => {
    dispatch(addPostThunk({ content: write }));
    setWrite('');
  };

  return (
    <StPostForm>
      <div>
        <PostFormHeader>
          <div style={{ cursor: 'pointer' }}>이전으로</div>
          <div style={{ fontSize: '16px' }}>새 게시물 만들기</div>
          <div style={{ cursor: 'pointer' }} onClick={onClick}>
            공유하기
          </div>
        </PostFormHeader>
        <PostFormInput>
          <PostFormUpload>
            <input type="file" />
          </PostFormUpload>
          <PostFormArea
            type="text"
            value={write}
            onChange={(e) => setWrite(e.target.value)}
            className="WriteFormArea"
            placeholder="문구 입력..."
          />
        </PostFormInput>
      </div>
    </StPostForm>
  );
};

export default PostForm;

const StPostForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 500;

  width: 1000px;
  height: 42px;

  padding: 0 15px;

  background-color: rgba(255, 255, 255);
  border: 1px solid rgba(168, 168, 168, 0.5);
  border-style: solid solid none;
  border-radius: 15px 15px 0 0;
`;

const PostFormInput = styled.div`
  display: flex;
`;

const PostFormUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 680px;
  height: 680px;

  background-color: rgba(255, 255, 255);
  border: 1px solid rgba(168, 168, 168, 0.5);
  border-radius: 0 0 0 15px;
`;

const PostFormArea = styled.textarea`
  font-size: 16px;
  letter-spacing: -1px;
  word-break: break-all;

  width: 320px;
  height: 680px;

  padding: 16px;

  background-color: rgba(255, 255, 255);
  border: 1px solid rgba(168, 168, 168, 0.5);
  border-style: solid solid solid none;
  border-radius: 0 0 15px 0%;

  :focus {
    outline: none;
  }
`;
