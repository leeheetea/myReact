import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";

import PostList from "../components/PostList";
import PostWrite from "../components/PostWrite";
import PostRead from "../components/PostRead";
import PostUpdate from "../components/PostUpdate";

const RouterPage = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/contacts">연락처</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contacts" element={<PostList />}></Route>
        <Route path="/contacts/:no" element={<PostRead />}></Route>
        <Route path="/contacts/write" element={<PostWrite />}></Route>
        <Route path="/contacts/update/:no" element={<PostUpdate />}></Route>
      </Routes>
    </div>
  );
};

export default RouterPage;
