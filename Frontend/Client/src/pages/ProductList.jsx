import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title> {category} </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Lọc theo:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              Màu sắc
            </Option>
            <Option> white </Option>
            <Option> black </Option>
            <Option> red </Option>
            <Option> blue </Option>
            <Option> yellow </Option>
            <Option> green </Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Kích cỡ
            </Option>
            <Option> XS </Option>
            <Option> S </Option>
            <Option> M </Option>
            <Option> L </Option>
            <Option> XL </Option>
            <Option> XXL </Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sắp xếp:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Mới nhất</Option>
            <Option value="asc">Giá thấp nhất</Option>
            <Option value="desc">Giá cao nhất</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
