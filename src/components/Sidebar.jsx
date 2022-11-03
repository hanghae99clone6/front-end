import React, { useState } from 'react';
import { ReactComponent as Instagram_Logo } from '../img/Instagram_Logo.svg';
import { ReactComponent as HomeIcon } from '../img/HomeIcon.svg';
import { ReactComponent as SearchIcon } from '../img/SearchIcon.svg';
import { ReactComponent as ExploreIcon } from '../img/ExploreIcon.svg';
import { ReactComponent as DirectIcon } from '../img/DirectIcon.svg';
import { ReactComponent as AlertIcon } from '../img/AlertIcon.svg';
import { ReactComponent as AddPostIcon } from '../img/AddPostIcon.svg';
import { ReactComponent as HamburgerIcon } from '../img/HamburgerIcon.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import PostForm from './PostForm';

const Sidebar = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  //모달창 열기
  const openModal = () => {
    setModalOpen(true);
  };

  //모달창 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <StSidebar>
      <SidebarContainer>
        {/* 인스타그램 로고 */}
        <SidebarLogo>
          <SidebarLogoArea>
            <Instagram_Logo width="103px" height="29px" />
          </SidebarLogoArea>
        </SidebarLogo>
        {/* 홈버튼 */}
        <SidebarBtnContainer>
          <SidebarBtnWrapper>
            <SidebarBtnArea>
              <>
                <HomeIcon />
              </>
              <SidebarBtnText>홈</SidebarBtnText>
            </SidebarBtnArea>
          </SidebarBtnWrapper>
          {/* 검색 */}
          <SidebarBtnWrapper>
            <SidebarBtnArea>
              <>
                <SearchIcon />
              </>
              <SidebarBtnText>검색</SidebarBtnText>
            </SidebarBtnArea>
          </SidebarBtnWrapper>
          {/* 탐색 탭 */}
          <SidebarBtnWrapper>
            <SidebarBtnArea>
              <>
                <ExploreIcon />
              </>
              <SidebarBtnText>탐색 탭</SidebarBtnText>
            </SidebarBtnArea>
          </SidebarBtnWrapper>
          {/* 메시지 */}
          <SidebarBtnWrapper>
            <SidebarBtnArea>
              <>
                <DirectIcon />
              </>
              <SidebarBtnText>메시지</SidebarBtnText>
            </SidebarBtnArea>
          </SidebarBtnWrapper>
          {/* 알림 */}
          <SidebarBtnWrapper>
            <SidebarBtnArea>
              <>
                <AlertIcon />
              </>
              <SidebarBtnText>알림</SidebarBtnText>
            </SidebarBtnArea>
          </SidebarBtnWrapper>
          {/* 만들기 */}
          <SidebarBtnWrapper>
            {/* 만들기 버튼을 누르면 모달이 나온다. */}
            <SidebarBtnArea onClick={openModal}>
              <>
                <AddPostIcon />
              </>
              <SidebarBtnText>만들기</SidebarBtnText>
            </SidebarBtnArea>
            <Modal open={modalOpen} close={closeModal}>
              <PostForm />
            </Modal>
          </SidebarBtnWrapper>
          {/* 프로필 */}
        </SidebarBtnContainer>
        {/* 더 보기 */}
        <SidebarBtnWrapper>
          <SidebarBtnArea>
            <>
              <HamburgerIcon />
            </>
            <SidebarBtnText>더 보기</SidebarBtnText>
          </SidebarBtnArea>
        </SidebarBtnWrapper>
      </SidebarContainer>
    </StSidebar>
  );
};

export default Sidebar;

const StSidebar = styled.div`
  display: block;
  position: fixed;

  width: 335px;
  height: 100vh;

  padding: 8px 12px 20px 12px;

  border: 1px solid #dbdbdb;

  z-index: 1;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  height: 92px;
`;

const SidebarLogoArea = styled.div`
  height: 48px;

  margin: 8px 0;
  padding: 12px;
`;

const SidebarBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarBtnWrapper = styled.div`
  height: 64px;
`;

const SidebarBtnArea = styled.div`
  display: flex;
  align-items: center;

  height: 48px;

  margin: 8px 0;
  padding: 12px;

  border-radius: 24px;

  cursor: pointer;

  :hover {
    transform: scale(1.02);
    transition: all 0.5 ease;
  }
`;

const SidebarBtnText = styled.div`
  display: flex;
  align-items: center;

  height: 24px;

  padding: 0 0 0 16px;
`;
