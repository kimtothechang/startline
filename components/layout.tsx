import styled from '@emotion/styled';
import React from 'react';
import NavBar from './navbar';

interface LayoutProps {
  children: React.ReactNode;
  isNavBar?: boolean;
  isHeader?: boolean;
  Header?: React.ReactNode;
}

interface ChildProps {
  isHeader: boolean;
  isNavBar: boolean;
}

const Layout = ({ children, isNavBar = false, isHeader = false, Header }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <HeaderContainer>{isHeader ? Header : null}</HeaderContainer>
      <ChildrenContainer isHeader={isHeader} isNavBar={isNavBar}>
        {children}
      </ChildrenContainer>
      <NavCcontainer>{isNavBar ? <NavBar /> : null}</NavCcontainer>
    </LayoutWrapper>
  );
};

export default Layout;

const HeaderContainer = styled.div`
  height: 7.5%;
`;

const ChildrenContainer = styled.div<ChildProps>`
  height: ${(props) =>
    props.isNavBar ? (props.isHeader ? '85%' : '92.5%') : props.isHeader ? '92.5%' : '100%'};
`;

const NavCcontainer = styled.div`
  height: 7.5%;
`;

const LayoutWrapper = styled.main`
  width: 100%;
  height: 100%;
`;
