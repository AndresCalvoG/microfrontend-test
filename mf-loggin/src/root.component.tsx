import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

function Root(props) {
  console.log(props);
  return (
    <Container>
      <h1>Loggin</h1>
    </Container>
  );
}

export default Root;
