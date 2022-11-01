import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkOutMemberThunk } from '../redux/modules/authSlice';
import { uploadFile } from 'react-s3';

const S3_BUCKET = 'hh99-upload';
const REGION = 'ap-northeast-2';
const ACCESS_KEY = 'AKIAU3V4CWOO63W3UWFK';
const SECRET_ACCESS_KEY = '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';

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  // const onClickSignOut = () => {
  //   dispatch(checkOutMemberThunk({}));
  // };

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (file) => {
    uploadFile(file, config)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* <button onClick={onClickSignOut}>로그아웃</button> */}
      <div>React S3 File Upload</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => handleUpload(selectedFile)}>Upload to S3</button>
    </div>
  );
};

export default Home;
