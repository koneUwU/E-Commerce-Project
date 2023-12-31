import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const App = () => {
  console.log("ok");
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  // const admin = user === null ? false : user.isAdmin;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      {admin && (
        <>
          <Topbar />
          <Container >
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/users" element={<UserList />}></Route>
              <Route path="/user/:userId" element={<User />}></Route>
              <Route path="/newUser" element={<NewUser />}></Route>
              <Route path="/products" element={<ProductList />}></Route>
              <Route path="/product/:productId" element={<Product />}></Route>
              <Route path="/newproduct" element={<NewProduct />}></Route>
            </Routes>
          </Container>
        </>
      )}
    </Router>
  );
};

export default App;
