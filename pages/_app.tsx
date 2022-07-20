import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from '@emotion/styled';
import NavBar from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootContainer>
      <PhoneSizeWrapper>
        <Component {...pageProps} />
      </PhoneSizeWrapper>
    </RootContainer>
  );
}

export default MyApp;

const RootContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
`;

const PhoneSizeWrapper = styled.main`
  width: 600px;
  height: 100%;
  background-color: white;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);
  overflow: scroll;
`;
