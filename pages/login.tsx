import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useMutation from '../libs/client/useMutation';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useEffect } from 'react';

// Components
import Input from '../components/input';
import Button from '../components/button';
import Logo from '../components/logo';

interface LoginForm {
  email: string;
  pw: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit, watch } = useForm<LoginForm>();
  const [login, { data, loading, error }] = useMutation('/api/login');
  const router = useRouter();

  const goJoin = () => {
    router.push('/join');
  };

  const withOutLogin = () => {
    localStorage.setItem('token', 'guest');
    router.push('/');
  };

  const onValid = (validForm: LoginForm) => {
    if (loading) return;

    login(validForm);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push('/');
      localStorage.setItem('token', watch('email').split('@')[0]);
    }
  }, [data]);

  return (
    <LoginWrapper>
      <Logo text="startLine" />
      <LoginForm onSubmit={handleSubmit(onValid)}>
        <Input
          register={register('email', { required: true })}
          name="email"
          label="Email"
          type="text"
        />
        <Input
          register={register('pw', { required: true })}
          name="password"
          label="Password"
          type="password"
        />
        <Error>{data?.errorMessage}</Error>
        <LoginButton>Login</LoginButton>
      </LoginForm>
      <ButtonWrapper>
        <Button text="Join" onClick={() => goJoin()} />
        <Button text="Enjoy without login" onClick={() => withOutLogin()} />
      </ButtonWrapper>
    </LoginWrapper>
  );
};

export default Login;

const Error = styled.p`
  color: orange;
  margin-bottom: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  & > button:first-of-type {
    margin-right: 0.5rem;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem;
  width: 80%;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: rgb(147 51 234);
  color: white;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
`;
