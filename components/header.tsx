import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

interface HeaderProps {
  isBack?: React.ReactNode;
  text?: string;
}

const Header = ({ isBack = false, text }: HeaderProps) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <HeaderWrapper>
      <div>
        {isBack ? (
          <IsBack>
            <svg
              onClick={() => goBack()}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </IsBack>
        ) : null}
      </div>
      <Title>{text}</Title>
      <div>{null}</div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(147, 21, 234);
  height: 100%;

  & > div {
    width: 33.33%;
  }
`;
const IsBack = styled.div`
  padding-left: 0.5rem;

  & > svg {
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-family: 'sans';
`;
