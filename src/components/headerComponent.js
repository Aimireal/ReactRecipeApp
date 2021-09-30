import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

const AppName = styled.div`
  display: flex;
  align-tems: center;
`;

const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;

const SearchComponent = styled.div`
  display:flex;
  flex-direction:row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;

const SearchIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`

export default{
    Container,
    AppName,
    AppIcon,
    SearchComponent,
    SearchIcon,
    SearchInput,
}