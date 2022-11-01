import React from 'react';
import { ReactComponent as Instagram_logo } from '../img/Instagram_logo.svg';
import { ReactComponent as HomeIcon } from '../img/HomeIcon.svg';
import { ReactComponent as SearchIcon } from '../img/SearchIcon.svg';
import { ReactComponent as ExploreIcon } from '../img/ExploreIcon.svg';
import { ReactComponent as DirectIcon } from '../img/DirectIcon.svg';
import { ReactComponent as AlertIcon } from '../img/AlertIcon.svg';
import { ReactComponent as AddPostIcon } from '../img/AddPostIcon.svg';
import { ReactComponent as HamburgerIcon } from '../img/HamburgerIcon.svg';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <StSidebar>
      <SidebarContainer>
        {/* 인스타그램 로고 */}
        <SidebarLogo>
          <SidebarLogoArea>
            <Instagram_logo width="103px" height="29px" />
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
            <SidebarBtnArea>
              <>
                <AddPostIcon />
              </>
              <SidebarBtnText>만들기</SidebarBtnText>
            </SidebarBtnArea>
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
`;
const SidebarBtnText = styled.div`
  display: flex;
  align-items: center;

  height: 24px;

  padding: 0 0 0 16px;
`;
