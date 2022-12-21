import styled from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  background-color: black;
  padding: 8rem;
`;

const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40rem;
  height: 54rem;
  background-color: white;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 23.4rem;
  padding: 4rem 4rem 2.4rem;

  img {
    width: 5.2rem;
    height: 5.2rem;
  }
  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    margin: 2.4rem 0 1.6rem;
  }
  p {
    width: 100%;
    height: 4.2rem;
    font-size: 1.4rem;
    text-align: center;
    font-weight: bold;
  }
`;

const Form = styled.div`
  width: 100%;
  height: 16.8rem;
  padding: 0 4rem 4rem;
  form > div {
    width: 100%;
    position: relative;
  }
  input {
    width: 100%;
    height: 5rem;
    border: 1px solid #c2c8d0;
    outline: none;
    padding: 0 1.6rem;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    font-weight: bold;

    &::placeholder {
      font-size: 1.6rem;
    }
    &:focus {
      border: 0.18rem solid #1e50ce;
      ::placeholder {
        color: transparent;
      }
    }
  }
  div > div {
    visibility: hidden;
    font-size: 1.4rem;
    color: #6f7780;
    position: absolute;
    top: -0.9rem;
    left: 1.6rem;
    border: 0;
    background-color: white;
  }
  input:focus ~ div {
    color: #0d3ebb;
    visibility: visible;
  }
`;

const Button = styled.div`
  width: 100%;
  height: 5.2rem;
  margin-top: 2.4rem;

  button {
    width: 100%;
    height: 100%;
    background-color: #2bde73;
    padding: 0.4rem 1.6rem;
    border: 0;
    border-radius: 0.5rem;
    font-size: 1.6rem;
  }
`;

function Root(props) {
  console.log(props);
  return (
    <Container>
      <Card>
        <Header>
          <img
            src="https://instaleap.s3.amazonaws.com/logo_black_simple.png"
            alt="Instaleap"
          />
          <h1>Bienvenido</h1>
          <p>
            Iniciar sesión en Instaleap para continuar hacia Instaleap Control
            Tower
          </p>
        </Header>
        <Form>
          <form>
            <div>
              <input type="text" placeholder="Correo electronico" />
              <div>Correo electronico</div>
            </div>
          </form>
          <Button>
            <button>Continuar</button>
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Root;
