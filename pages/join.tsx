import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { DeepRequired, FieldErrorsImpl, useForm } from 'react-hook-form';

// Components
import Input from '../components/input';
import styled from '@emotion/styled';
import Logo from '../components/logo';
import { useEffect, useState } from 'react';
import useMutation from '../libs/client/useMutation';

interface JoinForm {
  name: string;
  email: string;
  verify: string;
  password: string;
  pwCheck: string;
}

interface MutationType {
  ok: boolean;
  say: string[];
}

interface TokenType {
  ok: boolean;
  token: string;
}

const Join: NextPage = () => {
  const [join, { data, loading, error }] = useMutation<MutationType>('/api/join');
  const [verify, { data: tokenData, loading: tokenLoading }] =
    useMutation<TokenType>('/api/verify');
  const { register, handleSubmit, watch } = useForm<JoinForm>({ mode: 'onBlur' });
  const router = useRouter();
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    pwCheck: '',
  });

  const onValid = (values: JoinForm) => {
    setErrors({
      name: '',
      email: '',
      password: '',
      pwCheck: '',
    });

    join(values);
  };

  useEffect(() => {
    console.log(data);
    if (data?.ok) {
      router.replace('/');
    }
  }, [data]);

  const onInvalid = (errors: FieldErrorsImpl<DeepRequired<JoinForm>>) => {
    console.log(errors);

    if (errors.name) {
      if (errors.name.type === 'required') {
        setErrors((current) => ({ ...current, name: 'name is required' }));
      } else {
        setErrors((current) => ({ ...current, name: '4~20 character is required' }));
      }
    } else {
      setErrors((current) => ({ ...current, name: '' }));
    }

    if (errors.email) {
      if (errors.email.type === 'required') {
        setErrors((current) => ({ ...current, email: 'email is required' }));
      } else {
        setErrors((current) => ({ ...current, email: "it's not right type" }));
      }
    } else {
      setErrors((current) => ({ ...current, email: '' }));
    }

    if (errors.verify) {
      if (errors.verify.type === 'required') {
        setErrors((current) => ({ ...current, verify: 'verify is required' }));
      } else {
        setErrors((current) => ({ ...current, verify: 'verify number is 6 length' }));
      }
    } else {
      setErrors((current) => ({ ...current, verify: '' }));
    }

    if (errors.password) {
      if (errors.password.type === 'required') {
        setErrors((current) => ({ ...current, password: 'password is required' }));
      } else {
        setErrors((current) => ({ ...current, password: '8~20 character and special and number' }));
      }
    } else {
      setErrors((current) => ({ ...current, password: '' }));
    }

    if (errors.pwCheck) {
      if (errors.pwCheck.type === 'required') {
        setErrors((current) => ({ ...current, pwCheck: 'password check is required' }));
      } else if (errors.pwCheck.type === 'required') {
        setErrors((current) => ({ ...current, pwCheck: '4~20 character is required' }));
      } else if (errors.pwCheck.type === 'notSame') {
        setErrors((current) => ({ ...current, pwCheck: 'different password' }));
      }
    } else {
      console.log('complete');
      setErrors((current) => ({ ...current, pwCheck: '' }));
    }
  };

  const verifyEmail = (value: string) => {
    if (tokenLoading) return;
    console.log('send');

    // verify(value);
  };

  useEffect(() => {
    console.log(`get ${data}`);
  },[data]);

  return (
    <JoinWrapper>
      <Logo text="startLine" />
      <JoinForm onSubmit={handleSubmit(onValid, onInvalid)}>
        <Input
          maxLength={10}
          label="Name"
          name="name"
          register={register('name', { required: true, pattern: /[a-zA-z0-9가-힣]{2,10}/ })}
        />
        <ErrorText>{errors?.name}</ErrorText>
        <EmailWRapper>
          <EmailInput
            autoComplete="off"
            placeholder="Email"
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
          />
          <EmailButton type="button" onClick={() => verifyEmail(watch('email'))}>Send Code</EmailButton>
        </EmailWRapper>
        <ErrorText>{errors?.email}</ErrorText>
        {/* <Input
          maxLength={6}
          label="Verify Number"
          name="verify"
          register={register('verify', {
            required: true,
            pattern: /[0-9]{6}/,
          })}
        />
        <ErrorText>{errors?.verify}</ErrorText> */}
        <Input
          maxLength={20}
          label="Password"
          name="password"
          type="password"
          register={register('password', {
            required: true,
            pattern: /^(?=.*[a-zA-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
          })}
        />
        <ErrorText>{errors?.password}</ErrorText>
        <Input
          maxLength={20}
          label="Password Check"
          name="pwCheck"
          type="password"
          register={register('pwCheck', {
            required: true,
            pattern: /^(?=.*[a-zA-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
            validate: {
              notSame: (value) => value === watch('password'),
            },
          })}
        />
        <ErrorText>{errors?.pwCheck}</ErrorText>
        <JoinButton>Join</JoinButton>
      </JoinForm>
    </JoinWrapper>
  );
};

export default Join;

const ErrorText = styled.p`
  width: 80%;
  color: red;
  margin-bottom: 0.5rem;
`;

const JoinWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const EmailWRapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  width: 80%;
  height: 3rem;
`;

const EmailInput = styled.input`
  border: 2px solid rgb(147, 51, 234);
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 75%;
  margin-right: 0.5rem;
`;

const EmailButton = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 25%;
  background-color: rgb(147, 51, 234);
  color: white;
  white-space: nowrap;
  font-size: 0.8rem;

  &:hover {
    background-color: rgba(147, 51, 234, 0.8);
  }
`;

const JoinButton = styled.button`
  padding: 0.5rem;
  width: 80%;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: rgb(147 51 234);
  color: white;

  &:hover {
    background-color: rgba(147, 51, 234, 0.8);
  }
`;
