import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import {
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
} from "react-icons/io5";
import { VscSmiley } from "react-icons/vsc";
import Slider from "react-slick";
import image1 from "../../assets/img/image1.jpg";
import { useState } from "react";
import ContentsCardDetail from "../ContentsCardDetail/ContentsCardDetail";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import PostOption from "../PostOption";
import PostMyOption from "../PostMyOption";
import PostEditForm from "../PostEditForm";

const ContentsCard = ({
  optionModal,
  setOptionModal,
  myOptionModal,
  setMyOptionModal,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const [userComment, setUserComment] = useState({
    comment: "",
  });

  const { comment } = userComment;

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setUserComment({
      ...userComment,
      [name]: value,
    });
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          // background: "red",
          right: "10px",
          width: "30px",
          height: "30px",
          textAlign: "center",
          paddingTop: "10px",
          zIndex: 10,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          // background: "green",
          left: "10px",
          width: "30px",
          height: "30px",
          textAlign: "center",
          paddingTop: "10px",
          zIndex: 10,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [editInsta, setEditInsta] = useState(false);

  const onClickPutModalHandler = () => {
    setMyOptionModal(false);
    setEditInsta(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // 코멘트 디스패치할 예쩡
  };

  const onClickModalHandler = () => {
    //쿠키나 세션 유저이름 불러와서 모달창/개인모달창 핸들링 예정
    setOptionModal(true);
  };

  return (
    <>
      {modalOpen && <ContentsCardDetail setModalOpen={setModalOpen} />}
      <PostContainer onSubmit={onSubmitHandler}>
        <PostHeader>
          <FirstHeader>
            <UserImg />
            <UserLabel>이름</UserLabel>
          </FirstHeader>
          <BiDotsHorizontalRounded
            style={{ paddingRight: "15px", cursor: "pointer" }}
            onClick={onClickModalHandler}
          />
        </PostHeader>
        <PostImg>
          <Slider {...settings}>
            <div>
              <img
                src={image1}
                style={{
                  width: "100%",
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </Slider>
        </PostImg>

        <LikeFirstBar>
          <LikeBarSection>
            <AiOutlineHeart size="30" style={{ cursor: "pointer" }} />
            <IoChatbubbleOutline
              size="28"
              style={{ cursor: "pointer" }}
              onClick={showModal}
            />
            <IoPaperPlaneOutline size="28" style={{ cursor: "pointer" }} />
          </LikeBarSection>
          <IoBookmarkOutline
            size="27"
            style={{ paddingRight: "10px", cursor: "pointer" }}
          />
        </LikeFirstBar>
        <LikeSecondBar>
          <UserLikeImg />
          <UserLikeLable>좋아요 0개</UserLikeLable>
        </LikeSecondBar>
        <ContentWrap>
          <ContentFirstSection>
            <UserLabel>이름</UserLabel>
            <PostContent>내용</PostContent>
          </ContentFirstSection>
          <CommentCount>댓글 0개 보기</CommentCount>
          <ContentTime>10월 31</ContentTime>
        </ContentWrap>
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
          {/* <UploadLable>게시</UploadLable> */}
          <UploadButton>게시</UploadButton>
        </CommentWrap>
      </PostContainer>
      {optionModal && (
        <PostOption optionModal={optionModal} setOptionModal={setOptionModal} />
      )}
      {myOptionModal && (
        <PostMyOption
          setMyOptionModal={setMyOptionModal}
          onClickPutModalHandler={onClickPutModalHandler}
        />
      )}

      {editInsta && <PostEditForm setEditInsta={setEditInsta} />}
    </>
  );
};

export default ContentsCard;

const PostContainer = styled.form`
  width: 470px;
  height: 811px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 10px;
  margin-top: 25px;
`;

const PostHeader = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FirstHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;
const UserImg = styled.div`
  border: 1px solid rgb(219, 219, 219);
  border-radius: 50px;
  width: 32px;
  height: 32px;
`;
const UserLabel = styled.div`
  padding-left: 12px;
  font-weight: bold;
  font-size: 17px;
`;
const PostImg = styled.div`
  width: 100%;
  height: 525px;
  background-position: center;
  background-size: 100% 100%;
  z-index: 10px;
`;

const LikeFirstBar = styled.div`
  width: 100%;
  height: 46px;
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
  height: 24px;
  display: flex;
  padding: 10px 0;
`;

const UserLikeImg = styled.div`
  border: 1px solid rgb(219, 219, 219);
  border-radius: 50px;
  width: 20px;
  height: 20px;
  margin: 0 15px;
`;

const UserLikeLable = styled.div`
  font-size: 16px;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PostContent = styled.div`
  font-size: 16px;
`;
const ContentFirstSection = styled.div`
  display: flex;
  gap: 10px;
`;
const CommentCount = styled.div`
  padding-left: 12px;
  font-size: 15px;
  color: #8e8e8e;
`;

const ContentTime = styled.div`
  padding-left: 12px;
  font-size: 12px;
  color: #8e8e8e;
`;

const CommentWrap = styled.div`
  border-top: 1px solid rgb(219, 219, 219);
  height: 49px;
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
