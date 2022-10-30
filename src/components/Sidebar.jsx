import React from 'react';
import './Sidebar.css';
import { ReactComponent as Instagram_logo } from '../img/Instagram_logo.svg';
import { ReactComponent as HomeIcon } from '../img/HomeIcon.svg';
import { ReactComponent as SearchIcon } from '../img/SearchIcon.svg';
import { ReactComponent as ExploreIcon } from '../img/ExploreIcon.svg';
import { ReactComponent as DirectIcon } from '../img/DirectIcon.svg';
import { ReactComponent as AlertIcon } from '../img/AlertIcon.svg';
import { ReactComponent as AddPostIcon } from '../img/AddPostIcon.svg';
import { ReactComponent as HamburgerIcon } from '../img/HamburgerIcon.svg';

const Header = () => {
  return (
    <div className="Sidebar">
      <div className="SidebarContainer">
        {/* 인스타그램 로고 */}
        <div className="SidebarLogo">
          <div className="SidebarLogoArea">
            <Instagram_logo width="103px" height="29px" />
          </div>
        </div>
        {/* 홈버튼 */}
        <div className="SidebarBtnContainer">
          <div className="SidebarBtnWrapper">
            <div className="SidebarBtnArea">
              <div>
                <HomeIcon />
              </div>
              <div className="SidebarBtnText">홈</div>
            </div>
          </div>
          {/* 검색 */}
          <div className="SidebarBtnWrapper">
            <div className="SidebarBtnArea">
              <div>
                <SearchIcon />
              </div>
              <div className="SidebarBtnText">검색</div>
            </div>
          </div>
          {/* 탐색 탭 */}
          <div className="SidebarBtnWrapper">
            <div className="SidebarBtnArea">
              <div>
                <ExploreIcon />
              </div>
              <div className="SidebarBtnText">탐색 탭</div>
            </div>
          </div>
          {/* 메시지 */}
          <div className="SidebarBtnWrapper">
            <div className="SidebarBtnArea">
              <div>
                <DirectIcon />
              </div>
              <div className="SidebarBtnText">메시지</div>
            </div>
          </div>
          {/* 알림 */}
          <div className="SidebarBtnWrapper">
            <div className="SidebarBtnArea">
              <div>
                <AlertIcon />
              </div>
              <div className="SidebarBtnText">알림</div>
            </div>
          </div>
          {/* 만들기 */}
          <div className="SidebarBtnWrapper">
            <div className="SidebarBtnArea">
              <div>
                <AddPostIcon />
              </div>
              <div className="SidebarBtnText">만들기</div>
            </div>
          </div>
          {/* 프로필 */}
        </div>
        {/* 더 보기 */}
        <div className="SidebarBtnWrapper">
          <div className="SidebarBtnArea">
            <div>
              <HamburgerIcon />
            </div>
            <div className="SidebarBtnText">더 보기</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
