import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
} from "react-icons/io5";
import { VscSmiley } from "react-icons/vsc";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import PostDetailFormComment from "../PostDetailFormComment/PostDetailFormComment";
import { useState } from "react";
import styled from "styled-components";

const PostDetailForm = (setModalOpen) => {
  const [userComment, setUserComment] = useState({
    comment: "",
  });

  const { comment } = userComment;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setUserComment({
      ...userComment,
      [name]: value,
    });
  };
  const onclicktest = (e) => {
    // 이벤트 버블링 막아주겟어 모달창이 자꾸 왜 꺼지는거야 ㅠㅠ
    e.stopPropagation();
  };

  return (
    <PostDetailContainer onClick={onclicktest}>
      <PostHeader>
        <FirstHeader>
          <UserImg />
          <UserLabel>이름</UserLabel>
        </FirstHeader>
        <BiDotsHorizontalRounded style={{ paddingRight: "15px" }} />
      </PostHeader>
      <PostScroll>
        <PostContentContainer>
          <FirstSection>
            <UserImg />
          </FirstSection>
          <SecondSection>
            <UserLabel>이름</UserLabel>
            <PostContent>내용</PostContent>
          </SecondSection>
        </PostContentContainer>
        <PostBottom>
          {/* 댓글들 불러와서 맵 돌릴예정 */}
          <PostDetailFormComment userComment={userComment} />
        </PostBottom>
      </PostScroll>
      <LikeFirstBar>
        <LikeBarSection>
          <AiOutlineHeart size="28" style={{ cursor: "pointer" }} />
          <IoChatbubbleOutline size="26" style={{ cursor: "pointer" }} />
          <IoPaperPlaneOutline size="26" style={{ cursor: "pointer" }} />
        </LikeBarSection>
        <IoBookmarkOutline
          size="26"
          style={{ paddingRight: "10px", cursor: "pointer" }}
        />
      </LikeFirstBar>
      <LikeSecondBar>
        <UserLikeLable>좋아요 500개</UserLikeLable>
        <ContentTime>10월 31</ContentTime>
        <CommentWrap>
          <CommentFirstSection>
            <VscSmiley size="26" style={{ padding: "0 10px" }} />
            <CommentInput
              type="text"
              name="comment"
              value={comment}
              onChange={onChangeHandler}
            />
          </CommentFirstSection>
          <UploadButton>게시</UploadButton>
        </CommentWrap>
      </LikeSecondBar>
    </PostDetailContainer>
  );
};

export default PostDetailForm;

const PostDetailContainer = styled.form`
  border: 1px solid #ebedf0;
  width: 499px;
  height: 868px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
  z-index: 50;
`;

const PostHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FirstHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  /* gap: 10px; */
`;

const UserImg = styled.div`
  border: 1px solid #ebedf0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
const UserLabel = styled.div`
  padding-left: 12px;
  /* font-weight: bold; */
  font-size: 15px;
`;

const PostScroll = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 650px;
  border: 1px solid #ebedf0;
`;

const PostContentContainer = styled.div`
  width: 100%;
  /* border: 1px solid #ebedf0; */
  min-height: 100px;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

const FirstSection = styled.div`
  padding: 0 10px;
`;
const PostBottom = styled.div`
  width: 499px;
  height: 250px;
  /* border: 1px solid #ebedf0; */
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  /* overflow-y: scroll;
    overflow-x: hidden; */
`;

const SecondSection = styled.div`
  width: 439px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  /* height: 368px; */
  /* flex-wrap: wrap; */
`;
const PostContent = styled.div`
  padding: 10px 12px;
  font-size: 14px;
  /* overflow-y: scroll; */
`;

const PostComment = styled.div`
  padding: 0 12px;
  font-size: 14px;
`;

const LikeFirstBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikeBarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;
const LikeSecondBar = styled.div`
  width: 100%;
  /* height: 24px; */
  display: flex;
  flex-direction: column;
`;
const UserLikeLable = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 0 0 5px 10px;
`;
const ContentTime = styled.div`
  padding: 0 0 17px 12px;
  font-size: 12px;
  color: #8e8e8e;
`;
const CommentWrap = styled.div`
  border-top: 1px solid #ebedf0;
  /* width: 100%; */
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CommentFirstSection = styled.div`
  display: flex;
  align-items: center;
`;

const CommentInput = styled.input`
  border: none;
  outline: none;
  width: 330px;
  height: 16px;
  font-size: 14px;
`;

const UploadButton = styled.button`
  background-color: transparent;
  color: #0095f6;
  padding-right: 14px;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;
