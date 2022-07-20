import styled from '@emotion/styled';

interface ButtonProps {
  text: string;
  [key: string]: any;
}

const Button = ({ text, ...rest }: ButtonProps) => {
  return <ButtonCustom {...rest}>{text}</ButtonCustom>;
};

export default Button;

const ButtonCustom = styled.button`
  padding: 0.5rem;
  width: 50%;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: rgb(147 51 234);
  color: white;
`;
