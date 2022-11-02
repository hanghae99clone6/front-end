import React from 'react';
import ContentsCard from '../ContentsCard/ContentsCard';
import ContentsRecommend from '../ContentsRecommend/ContentsRecommend';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { __getPosts } from '../../redux/modules/feedSlice';

const HomeContents = () => {
  const [optionModal, setOptionModal] = useState(false);
  const [myOptionModal, setMyOptionModal] = useState(false);
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postSlice.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  // 게시글 전체조회 API 항목들
  //   {
  //     "postId": 1,
  //     "imageUrl": "이미지url",
  //     "content": "내용",
  //     ”name": "사용자이름",
  //     "commentNum": 1234(댓글 수),
  //     ”likesNum”: 1234(좋아요 수),
  //     "createdAt": "2022-10-28T16:02:37.4835689",
  //     "modifiedAt": "2022-10-28T16:02:37.4835689"
  // },

  return (
    <MainContainer fixedHeight={optionModal}>
      <MainList>
        {/* 게시글 전체조회 map */}
        {posts &&
          posts.map((post) => (
            <>
              <ContentsCard
                key={post.postId}
                postid={post.postId}
                img={post.imageUrl}
                like={post.like}
                username={post.name}
                time={post.modifiedAt}
                content={post.content}
                optionModal={optionModal}
                setOptionModal={setOptionModal}
                myOptionModal={myOptionModal}
                setMyOptionModal={setMyOptionModal}
              />
            </>
          ))}
      </MainList>
      <ContentsRecommend />
    </MainContainer>
  );
};

export default HomeContents;

const MainContainer = styled.div`
  width: 850px;
  height: 90vh;
  margin: auto;
  display: flex;
`;

const MainList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
