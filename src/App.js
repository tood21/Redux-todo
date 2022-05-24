import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container className='App'>
      <Header>TODOLIST</Header>
      <Form>
        <Title type='text' id='title' placeholder='제목' />
        <Contents id='contents' placeholder='내용' />
        <ButtonDiv>
          <button>입력</button>
        </ButtonDiv>
      </Form>
      <ListContainer>
        <ul>
          <li></li>
          <li>할일2</li>
          <li>할일3</li>
          <li>할일4</li>
          <li>할일5</li>
          <li>할일6</li>
        </ul>
      </ListContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  box-sizing: border-box;
`;

const Header = styled.header`
  font-size: 30px;
  padding: 15px;
  background-color: green;
  color: white;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.input`
  width: 50%;
  margin: 20px 0 20px;
  padding: 10px;
  box-sizing: border-box;
`;

const Contents = styled.textarea`
  width: 50%;
  box-sizing: border-box;
  height: 100px;
`;

const ButtonDiv = styled.div`
  margin-top: 10px;
  width: 50%;

  button {
    cursor: pointer;
    float: right;
    padding: 5px 10px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    &:hover {
      color: white;
      background-color: black;
    }
  }
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;

  ul {
    width: 1000px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;

    li {
      box-sizing: border-box;
      width: calc((100% - 120px) / 3);

      height: 250px;
      border: 1px solid black;
      margin: 20px;

      /* padding: 0 15px; */
    }
  }
`;
