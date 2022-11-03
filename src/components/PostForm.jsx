import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPostThunk } from '../redux/modules/postSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const PostForm = ({ close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState({
    image: '',
  });
  const [postDto, setPostDto] = useState({
    content: '',
  });
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // 이미지 미리보기
  const changeHandler = (e) => {
    setImageUrl({ ...imageUrl, image: e.target.files[0] });
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert('Image mime type is not valid');
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  // 이미지, 텍스트 업로드
  const onClick = (e) => {
    e.preventDefault(); // 새로고침 방지
    // formdata 만들기
    const formData = new FormData();
    // image는 formdata로만 변환
    // text는 formdata( new Blob ( JSON.stringify() )) 3단계를 거쳐서 변환
    formData.append('imageUrl', imageUrl.image);
    formData.append(
      'postDto',
      new Blob(
        [
          JSON.stringify({
            content: postDto.content,
          }),
        ],
        { type: 'application/json' }
      )
    );
    // content에 내용이 없으면 알림
    if (postDto.content.trim() === '') {
      alert('내용을 입력해주세요.');
    }
    // dispatch로 addPostThunk를 실행 formdata를 담아서 보냄
    dispatch(addPostThunk(formData));
    // 그리고 홈화면으로 이동
    navigate('/home');
    setModalOpen(false);
  };

  return (
    <StPostForm>
      <div>
        <PostFormHeader>
          <div
            onClick={() => window.location.reload()}
            style={{ cursor: 'pointer' }}
          >
            이전으로
          </div>
          <div style={{ fontSize: '16px' }}>새 게시물 만들기</div>
          <div type="submit" onClick={onClick} style={{ cursor: 'pointer' }}>
            공유하기
          </div>
        </PostFormHeader>
      </div>
      <PostFormInput>
        <PostFormUpload>
          {fileDataURL ? (
            <p className="img-preview-wrapper">
              {<Img src={fileDataURL} alt="preview" />}
            </p>
          ) : null}
          <Input
            type="file"
            id="image"
            name="image"
            accept=".png, .jpg, .jpeg"
            onChange={changeHandler}
            multiple
          />
        </PostFormUpload>
        <PostFormArea
          type="text"
          name="content"
          onChange={(e) => setPostDto({ ...postDto, content: e.target.value })}
          className="WriteFormArea"
          placeholder="문구 입력..."
        />
      </PostFormInput>
    </StPostForm>
  );
};

export default PostForm;

const StPostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: 14px;
  font-weight: 500;

  width: 1000px;
  height: 42px;

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

const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 680px;
  height: 680px;
  object-fit: cover;

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
