import React from "react";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

import styled from "styled-components";

const TopBarParent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
// const TopBarContainer = styled.div`

// `;
// const TopBarContainer = styled.div`

// `;
// const TopBarContainer = styled.div`

// `;

const TopBar = () => {
  return (
    <TopBarParent>
      <TopBarContainer>
        <div className="container-left">
          <span>TOPICS</span>
          <span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </TopBarContainer>
    </TopBarParent>
  );
};

export default TopBar;
