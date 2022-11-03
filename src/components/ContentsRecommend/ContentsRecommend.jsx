import React from "react";
import "./style.css";
import { useState } from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const ContentsRecommend = () => {
  const [state, setState] = useState("팔로우");
  const [state2, setState2] = useState("팔로우");
  const [state3, setState3] = useState("팔로우");

  const follow = () => {
    setState("팔로잉");
  };
  const follow2 = () => {
    setState2("팔로잉");
  };
  const follow3 = () => {
    setState3("팔로잉");
  };

  return (
    <div className="ReWrapContainer">
      <div className="MyContainer">
        <div className="MySection">
          <div className="UserImg"></div>
          <div className="UserName">박성우</div>
        </div>
        <div className="Transform">전환</div>
      </div>
      <div className="RecommendContainer">
        <div className="RecommendTitle">회원님을 위한 추천</div>
        <div className="RecommendView">모두보기</div>
      </div>
      <div className="RecommendList">
        <div className="RecommendBox">
          <div className="RecommendSection">
            <div className="RecommendListImg" />
            <div className="RecommendInfo">
              <div className="RecommendUser">seongwoo</div>
              <div className="RecommendDetail">성우님이 팔로우합니다.</div>
            </div>
          </div>
          <div className="RecommendFollow" onClick={follow}>
            {state}
          </div>
        </div>
        <div className="RecommendBox">
          <div className="RecommendSection">
            <div className="RecommendListImg2" />
            <div className="RecommendInfo">
              <div className="RecommendUser">geonhee</div>
              <div className="RecommendDetail">건희님이 팔로우합니다.</div>
            </div>
          </div>
          <div className="RecommendFollow" onClick={follow2}>
            {state2}
          </div>
        </div>
        <div className="RecommendBox">
          <div className="RecommendSection">
            <div className="RecommendListImg3" />
            <div className="RecommendInfo">
              <div className="RecommendUser">yeonjoong</div>
              <div className="RecommendDetail">연중님이 팔로우합니다.</div>
            </div>
          </div>
          <div className="RecommendFollow" onClick={follow3}>
            {state3}
          </div>
        </div>
        <div className="RecommendBox">
          <div className="RecommendSection">
            <div className="RecommendListImg4" />
            <div className="RecommendInfo">
              <div className="RecommendUser">byungwook</div>
              <div className="RecommendDetail">병욱님이 팔로우합니다.</div>
            </div>
          </div>
          <div className="RecommendFollow" onClick={follow3}>
            {state3}
          </div>
        </div>
        <div className="RecommendBox">
          <div className="RecommendSection">
            <div className="RecommendListImg5" />
            <div className="RecommendInfo">
              <div className="RecommendUser">seonghu</div>
              <div className="RecommendDetail">성후님이 팔로우합니다.</div>
            </div>
          </div>
          <div className="RecommendFollow" onClick={follow3}>
            {state3}
          </div>
        </div>
        <div className="RecommendBox">
          <div className="RecommendSection">
            <div className="RecommendListImg6" />
            <div className="RecommendInfo">
              <div className="RecommendUser">hojin</div>
              <div className="RecommendDetail">호진님이 팔로우합니다.</div>
            </div>
          </div>
          <div className="RecommendFollow" onClick={follow3}>
            {state3}
          </div>
        </div>
        <div className="RecommendFooter">
          <div className="FootertextBox">
            소개·도움말·홍보 센터·API·채용 정보개인정보처리방침·약관·위치·언어
          </div>
          <div className="FooterInfo">
            <AiOutlineCopyrightCircle />
            2022 INSTAGRAM FROM META
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsRecommend;
