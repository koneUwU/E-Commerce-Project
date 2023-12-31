import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #da4140;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "auto" })}
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  ${mobile({ textAlign: "center" })}
`;

const Announcement = () => {
  return (
    <Container>
      <Text>Super Deal! Miễn phí vận chuyển cho đơn hàng trên 500.000đ</Text>
    </Container>
  );
};

export default Announcement;
