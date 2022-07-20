import { UseFormRegisterReturn } from 'react-hook-form';
import styled from '@emotion/styled';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  register: UseFormRegisterReturn;
  className?: string;
  maxLength?: number;
}

const Input = ({
  label,
  name,
  type = 'text',
  autoComplete = 'off',
  register,
  maxLength,
}: InputProps) => {
  return (
    <InputWrapper>
      <InputCustom
        type={type}
        placeholder={label}
        id={name}
        autoComplete="off"
        {...register}
        maxLength={maxLength}
      />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > input:first-child {
    margin-bottom: 0.5rem;
  }
`;

const InputCustom = styled.input`
  padding: 0.5rem;
  width: 80%;
  height: 3rem;
  border: 2px solid rgb(147 51 234);
  border-radius: 0.5rem;
`;
