import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

interface SearchForm {
  content: string;
}

const SearchBar = () => {
  const { register, handleSubmit } = useForm<SearchForm>();

  const onValid = (data: SearchForm) => {
    console.log(data);
  };
  return (
    <Header>
      <SearchForm onSubmit={handleSubmit(onValid)}>
        <SearchInput type="text" {...register('content', { required: true })} autoComplete="off" />
      </SearchForm>
    </Header>
  );
};

export default SearchBar;

const Header = styled.header`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgb(147 51 234);
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  padding-left: 1rem;
  width: 97.5%;
  height: 70%;
  border: 2px solid rgb(147 51 234);
  border-radius: 1rem;
  background-image: url('/icon/search_icon.svg');
  background-repeat: no-repeat;
  background-position: 5px 5px;

  &:focus {
    background-image: none;
  }
`;
