import React from "react";
import image1 from "../../assets/img/image1.jpg";
import PostDetailForm from "../PostDetailForm/PostDetailForm";
import styled from "styled-components";
import Slider from "react-slick";

const ContentsCardDetail = ({ setModalOpen }) => {
  const closeModal = (e) => {
    setModalOpen(false);
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

  return (
    <Background onClick={closeModal}>
      <PostDetailContainer>
        <PostImg>
          <Slider {...settings}>
            <div>
              <img
                src={image1}
                style={{
                  width: "100%",
                  height: "830px",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </Slider>
        </PostImg>
        {/* 디테일폼 셀렉트받아와서 전달할예정  */}
        <PostDetailForm setModalOpen={setModalOpen} />
      </PostDetailContainer>
    </Background>
  );
};

export default ContentsCardDetail;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(87, 87, 87, 0.5);
  z-index: 1;
`;
const PostDetailContainer = styled.div`
  width: 1300px;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: center;
`;
const PostImg = styled.div`
  width: 826px;
  height: 870px;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 1rem 1rem 0.5rem 1rem;
  box-sizing: border-box;
  background-color: #fff;
  background-position: center;
  background-size: 100% 100%;
`;
