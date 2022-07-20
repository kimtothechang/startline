import styled from '@emotion/styled';
import SearchBar from '../components/search/searchBar';
import Layout from '../components/layout';

const Search = () => {
  return (
    <Layout isNavBar isHeader Header={<SearchBar />}>
      <SearchWrapper>Search</SearchWrapper>
    </Layout>
  );
};

export default Search;

const SearchWrapper = styled.section`
  height: 100%;
`;
