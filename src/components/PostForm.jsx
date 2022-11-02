import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPostThunk } from '../redux/modules/postSlice';
import styled from 'styled-components';
import dotenv from 'dotenv';
import AWS from 'aws-sdk';

dotenv.config();

const S3_BUCKET = 'process.env.REACT_APP_BUCKET';
const REGION = 'process.env.REACT_APP_AWS_REGION';
const ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID;
const SECRETACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY_ID;

const PostForm = () => {
  const dispatch = useDispatch();
  const [write, setWrite] = useState();

  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRETACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  // const onChange = (e) => {
  //   setWrite(e.target.value);
  // };

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };

  // dispatch(addPostThunk({ content: write }));
  // setWrite('');

  return (
    <StPostForm>
      <div>
        <PostFormHeader>
          <div style={{ cursor: 'pointer' }}>이전으로</div>
          <div style={{ fontSize: '16px' }}>새 게시물 만들기</div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => uploadFile(selectedFile)}
          >
            공유하기
          </div>
        </PostFormHeader>
        <PostFormInput>
          <PostFormUpload>
            <input type="file" onChange={handleFileInput} />
          </PostFormUpload>
          <PostFormArea
            type="text"
            // onChange={onChange}
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

// const config = {
//   bucketName: S3_BUCKET,
//   region: REGION,
//   accessKeyId: ACCESS_KEY,
//   secretAccessKey: SECRETACCESS_KEY,
// };

// const [selectedFile, setSelectedFile] = useState(null);

// const handleFileInput = (e) => {
//   setSelectedFile(e.target.files[0]);
// };

// const handleUpload = async (file) => {
//   uploadFile(file, config)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// };
