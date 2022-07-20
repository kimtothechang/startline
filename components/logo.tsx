import styled from '@emotion/styled';

interface LogoProps {
  text: string;
}

const Logo = ({ text }: LogoProps) => {
  return <LogoWrapper>{text}</LogoWrapper>;
};

export default Logo;

const LogoWrapper = styled.h1`
  margin: 4rem 0;
  font-size: 4rem;
  font-family: 'sans';
  color: rgb(147 51 234);
`;
