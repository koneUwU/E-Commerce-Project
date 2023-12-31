import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://scontent.fdad3-2.fna.fbcdn.net/v/t39.30808-6/258795240_129415046178390_8386129716925175368_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=TUCQXiv_L-wAX8Ajv2T&tn=EGPJ64a1vE1eC1cb&_nc_ht=scontent.fdad3-2.fna&oh=00_AT9p0kbsj736ISm7HR7cicfzb0dPiyspf1Znkn2srQ3oDg&oe=61BC6E18")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  text-align: center;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title> Đăng nhập </Title>
        <Form>
          <Input
            placeholder="Tên đăng nhập"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Mật khẩu"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Center>
            <Button onClick={handleClick} disabled={isFetching}>
              Đăng nhập
            </Button>
            {error && <Error>Đã có lỗi xảy ra!</Error>}
          </Center>
          <Link> Quên mật khẩu </Link>
          <Link> Đăng ký tài khoản mới </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
