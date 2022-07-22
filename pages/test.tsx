import { NextPage } from "next";
import { useForm } from "react-hook-form";
import styled from '@emotion/styled'
import useMutation from "../libs/client/useMutation";
import Layout from '../components/layout';
import Header from '../components/header';


interface LoginForm {
    id:string;
    pw:string;
}

const Test:NextPage = () => {
    const {register, handleSubmit} = useForm<LoginForm>();
    const [login , {data, loading, error}] = useMutation('/api/test');

    const onValid =(valuse:LoginForm) =>{
        console.log(valuse);

        login(valuse);
    }

    return <Layout isHeader isNavBar Header={<Header text="newLogin" />}>
        <form onSubmit={handleSubmit(onValid)}>
            <Input type="text" {...register('id')}/>
            <Input type="text" {...register('pw')}/>
            <button>login</button>
        </form>
    </Layout>
    
    
}

export default Test;

const Input = styled.input`
  border:1px solid black;
`;