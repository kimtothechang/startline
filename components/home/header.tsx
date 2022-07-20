import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <p>startLine</p>
      <AlarmWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-8 h-8"
          viewBox="0 0 23 23"
          stroke="#9333EA"
          strokeWidth={1}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          stroke="#9333EA"
          strokeWidth={1}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </AlarmWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgb(147 51 234);

  & > p {
    width: 75%;
    font-size: 2rem;
    font-family: 'sans';
    color: rgb(147 51 234);
  }
`;

const AlarmWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;

  & > svg {
    cursor: pointer;
  }
`;
