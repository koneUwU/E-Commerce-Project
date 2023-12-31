import styled from "styled-components";
import { mobile } from "../responsive";

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
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Đăng ký tài khoản</Title>
        <Form>
          <Input placeholder="Tên của bạn" />
          <Input placeholder="SĐT của bạn" />
          <Input placeholder="Tên đăng nhập" />
          <Input placeholder="Email của bạn" />
          <Input placeholder="Mật khẩu" />
          <Input placeholder="Nhập lại mật khẩu" />
          <Agreement>
            Bằng cách tạo tài khoản, bạn đồng ý với <b>CHÍNH SÁCH BẢO MẬT</b>{" "}
            của Zefa Store
          </Agreement>
          <Center>
            <Button>Đăng ký</Button>
          </Center>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
