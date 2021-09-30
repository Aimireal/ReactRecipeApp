//import './App.css';
import styled from 'styled-components'
import {
  AppNameComponent,AppIcon,SearchIcon,SearchComponent,
  SearchInput,Container,Header
} from './components/headerComponent'

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-evenly;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/images/Book.svg"/>
          Recipe App
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src='/images/Search.svg' />
          <SearchInput placeholder="Search Our Recipes"/>
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        <img/>
        <span>Egg</span>
        <span>Ingredients</span>
        <span>View Recipe</span>
      </RecipeListContainer>
    </Container>
  );
}

export default App;
