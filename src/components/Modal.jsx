import React from 'react';
import styled from 'styled-components';

const Modal = ({ children }) => {
  return (
    <StModalPopUp>
      <StModalPop>
        <StModalBody>
          <StModalBodyContent>
            <StModalBodyTitleBox>{children}</StModalBodyTitleBox>
          </StModalBodyContent>
        </StModalBody>
      </StModalPop>
    </StModalPopUp>
  );
};

export default Modal;

const StModalPopUp = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
`;

const StModalPop = styled.div`
  width: 100%;
  max-width: 1000px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.3);
`;

const StModalBody = styled.div`
  width: 100%;
  background-color: white;
`;

const StModalBodyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalBodyTitleBox = styled.div`
  width: 100%;
  height: 680px;
`;
