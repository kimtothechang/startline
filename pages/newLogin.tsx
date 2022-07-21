import { NextPage } from "next";
import { useForm } from "react-hook-form";
import styled from '@emotion/styled'
import useMutation from "../libs/client/useMutation";

interface LoginForm {
    id:string;
    pw:string;
}

const NewLogin:NextPage = () => {
    const {register, handleSubmit} = useForm<LoginForm>();
    const [login , {data, loading, error}] = useMutation('/api/newlogin');

    const onValid =(valuse:LoginForm) =>{
        console.log(valuse);

        login(valuse);
    }

    return <form onSubmit={handleSubmit(onValid)}>
        <Input type="text" {...register('id')}/>
        <Input type="text" {...register('pw')}/>
        <button>login</button>
    </form>
}

export default NewLogin;

const Input = styled.input`
  border:1px solid black;
`;